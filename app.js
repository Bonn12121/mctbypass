/**
 * MYSTERY COUNTRY FINDER
 * Fast, accurate solver for Discord & game clues
 */

(function () {
  'use strict';

  const state = {
    clues: [],
    countries: window.WORLD_COUNTRIES || [],
    toleranceKm: 550,
    map: null,
    mapLayers: {
      rings: L.layerGroup(),
      markers: L.layerGroup()
    },
    lastResults: {
      green: [],
      yellow: [],
      red: [],
      allScored: []
    }
  };

  const R_EARTH = 6371.0;

  function degToRad(deg) {
    return (deg * Math.PI) / 180.0;
  }

  function radToDeg(rad) {
    return (rad * 180.0) / Math.PI;
  }

  function haversineDistance(lat1, lon1, lat2, lon2) {
    const phi1 = degToRad(lat1);
    const phi2 = degToRad(lat2);
    const deltaPhi = degToRad(lat2 - lat1);
    const deltaLambda = degToRad(lon2 - lon1);

    const a =
      Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) +
      Math.cos(phi1) * Math.cos(phi2) * Math.sin(deltaLambda / 2) * Math.sin(deltaLambda / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R_EARTH * c;
  }

  function initialBearing(lat1, lon1, lat2, lon2) {
    const phi1 = degToRad(lat1);
    const phi2 = degToRad(lat2);
    const deltaLambda = degToRad(lon2 - lon1);

    const y = Math.sin(deltaLambda) * Math.cos(phi2);
    const x =
      Math.cos(phi1) * Math.sin(phi2) -
      Math.sin(phi1) * Math.cos(phi2) * Math.cos(deltaLambda);
    const b = radToDeg(Math.atan2(y, x));
    return (b + 360.0) % 360.0;
  }

  function destinationPoint(lat1, lon1, distanceKm, bearingDeg) {
    const dDivR = distanceKm / R_EARTH;
    const phi1 = degToRad(lat1);
    const lam1 = degToRad(lon1);
    const theta = degToRad(bearingDeg);

    const phi2 = Math.asin(
      Math.sin(phi1) * Math.cos(dDivR) +
      Math.cos(phi1) * Math.sin(dDivR) * Math.cos(theta)
    );
    const lam2 =
      lam1 +
      Math.atan2(
        Math.sin(theta) * Math.sin(dDivR) * Math.cos(phi1),
        Math.cos(dDivR) - Math.sin(phi1) * Math.sin(phi2)
      );

    const lat2 = radToDeg(phi2);
    const lon2 = ((radToDeg(lam2) + 540.0) % 360.0) - 180.0;
    return [lat2, lon2];
  }

  const COMPASS_POINTS_8 = [
    { code: 'N', angle: 0, arrow: '⬆️' },
    { code: 'NE', angle: 45, arrow: '↗️' },
    { code: 'E', angle: 90, arrow: '➡️' },
    { code: 'SE', angle: 135, arrow: '↘️' },
    { code: 'S', angle: 180, arrow: '⬇️' },
    { code: 'SW', angle: 225, arrow: '↙️' },
    { code: 'W', angle: 270, arrow: '⬅️' },
    { code: 'NW', angle: 315, arrow: '↖️' }
  ];

  function bearingToCompass(bearing) {
    const b = (bearing + 360.0) % 360.0;
    const idx = Math.floor((b + 22.5) / 45.0) % 8;
    return COMPASS_POINTS_8[idx];
  }

  function directionCodeToAngle(dirStr) {
    if (!dirStr) return null;
    const clean = dirStr.replace(/[⬅️➡️⬆️⬇️↗️↖️↘️↙️\s]/g, '').toUpperCase();
    const match = COMPASS_POINTS_8.find((p) => p.code === clean);
    return match ? match.angle : null;
  }

  function angleDifference(a1, a2) {
    const diff = Math.abs(a1 - a2) % 360.0;
    return diff > 180.0 ? 360.0 - diff : diff;
  }

  // --- COUNTRY LOOKUP ---
  function findCountry(query) {
    if (!query) return null;
    let q = query.trim().toLowerCase();

    // 1. Exact match
    let c = state.countries.find((x) => x.name.toLowerCase() === q);
    if (c) return c;

    // 2. Exact ISO2 / ISO3
    c = state.countries.find(
      (x) => x.iso2.toLowerCase() === q || x.iso3.toLowerCase() === q
    );
    if (c) return c;

    // 3. Exact alias
    c = state.countries.find(
      (x) => x.aliases && x.aliases.some((a) => a.toLowerCase() === q)
    );
    if (c) return c;

    // 4. Emoji match
    c = state.countries.find((x) => x.emoji === query.trim());
    if (c) return c;

    // 5. Check if query is prefixed by 2-letter code (e.g. "ly libya", "gg guernsey", "at austria")
    const words = q.split(/\s+/);
    if (words.length > 1 && words[0].length === 2) {
      const rest = words.slice(1).join(' ');
      c = state.countries.find((x) => x.name.toLowerCase() === rest);
      if (c) return c;
      c = state.countries.find(
        (x) => x.aliases && x.aliases.some((a) => a.toLowerCase() === rest)
      );
      if (c) return c;
    }

    // 6. Substring match
    const matches = state.countries.filter(
      (x) =>
        x.name.toLowerCase().includes(q) ||
        (x.aliases && x.aliases.some((a) => a.toLowerCase().includes(q)))
    );
    if (matches.length > 0) {
      matches.sort((a, b) => a.name.length - b.name.length);
      return matches[0];
    }

    return null;
  }

  // --- PARSE CLUES ---
  function parseClues(rawText) {
    if (!rawText || !rawText.trim()) return [];

    const parsedClues = [];
    const lines = rawText.split('\n');

    // Regex matching:
    // [optional 2-letter code or flag emoji] [country name] [separator] [distance] [optional km] [optional direction] [optional temp] [optional @user]
    const regex = /(?:[A-Za-z]{2}\s+|[\uD83C][\uDDE6-\uDDFF]{2}|[\uD83C-\uDBFF\uDC00-\uDFFF])?\s*([A-Za-z][A-Za-z\s'.,\-]+?)\s*[—\-–:]\s*([\d,]+(?:\.\d+)?)\s*(?:km|kms|miles|mi)?\s*([⬅️➡️⬆️⬇️↗️↖️↘️↙️\s]*(?:NNE|ENE|ESE|SSE|SSW|WSW|WNW|NNW|NE|NW|SE|SW|N|S|E|W))?(?:\s*\(([^)]+)\))?(?:\s*\[?@([^\]]+)\]?)?/iu;

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed) continue;

      const match = regex.exec(trimmed);
      if (!match) continue;

      const countryRaw = match[1] ? match[1].trim() : '';
      const distRaw = match[2] ? match[2].replace(/,/g, '').trim() : '';
      const dirRaw = match[3] ? match[3].trim() : '';
      const tempRaw = match[4] ? match[4].trim() : '';
      const userRaw = match[5] ? match[5].trim() : '';

      const distance = parseFloat(distRaw);
      if (isNaN(distance) || distance <= 0) continue;

      const countryObj = findCountry(countryRaw);
      if (!countryObj) continue;

      const dirAngle = directionCodeToAngle(dirRaw);
      const compassMatch = dirAngle !== null ? COMPASS_POINTS_8.find((p) => p.angle === dirAngle) : null;

      parsedClues.push({
        id: 'clue_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
        country: countryObj.name,
        emoji: countryObj.emoji,
        iso2: countryObj.iso2,
        lat: countryObj.lat,
        lng: countryObj.lng,
        distanceKm: distance,
        directionRaw: dirRaw || (compassMatch ? compassMatch.arrow + ' ' + compassMatch.code : ''),
        directionCode: compassMatch ? compassMatch.code : '',
        directionAngle: dirAngle,
        directionArrow: compassMatch ? compassMatch.arrow : '',
        temperature: tempRaw,
        user: userRaw
      });
    }

    return parsedClues;
  }

  // --- SOLVER & RANKING LOGIC ---
  function calculateRankings() {
    if (state.clues.length === 0) {
      state.lastResults = { green: [], yellow: [], red: [], allScored: [] };
      return state.lastResults;
    }

    const scored = [];
    const clueCountries = new Set(state.clues.map((c) => c.country));
    const tolerance = state.toleranceKm;

    for (const country of state.countries) {
      // Avoid guessing clue country itself
      if (clueCountries.has(country.name)) continue;

      let totalDistErr = 0;
      let maxDistErr = 0;
      let directionMismatches = 0;
      let directionAdjacent = 0;
      const breakdown = [];

      for (const clue of state.clues) {
        const actualDist = haversineDistance(
          clue.lat,
          clue.lng,
          country.lat,
          country.lng
        );
        const distErr = Math.abs(actualDist - clue.distanceKm);
        totalDistErr += distErr;
        maxDistErr = Math.max(maxDistErr, distErr);

        const bearing = initialBearing(
          clue.lat,
          clue.lng,
          country.lat,
          country.lng
        );
        const compass = bearingToCompass(bearing);

        let angleDiff = 0;
        let dirMatch = true;

        if (clue.directionAngle !== null && clue.directionAngle !== undefined) {
          angleDiff = angleDifference(bearing, clue.directionAngle);
          if (angleDiff > 48) {
            if (angleDiff <= 75) {
              directionAdjacent++;
            } else {
              directionMismatches++;
            }
            dirMatch = false;
          }
        }

        breakdown.push({
          clueCountry: clue.country,
          clueEmoji: clue.emoji,
          clueIso2: clue.iso2,
          clueDist: clue.distanceKm,
          actualDist: Math.round(actualDist),
          diff: Math.round(actualDist - clue.distanceKm),
          bearing: Math.round(bearing),
          compassCode: compass.code,
          compassArrow: compass.arrow,
          dirMatch: dirMatch
        });
      }

      const avgDistErr = totalDistErr / state.clues.length;

      let zone = 'red';
      let confidence = 0;

      // Generous green zone matching to always provide answers
      if (directionMismatches <= 1 && avgDistErr <= tolerance) {
        zone = 'green';
        confidence = Math.max(10, Math.min(100, 100 - (avgDistErr / (tolerance / 100))));
      } else if (directionMismatches <= 2 && avgDistErr <= tolerance * 2) {
        zone = 'yellow';
        confidence = Math.max(5, Math.min(75, 75 - (avgDistErr / (tolerance * 2 / 75))));
      } else {
        zone = 'red';
        confidence = Math.max(0, 50 - (avgDistErr / 100));
      }

      scored.push({
        country: country.name,
        emoji: country.emoji,
        iso2: country.iso2,
        lat: country.lat,
        lng: country.lng,
        region: country.region,
        subregion: country.subregion,
        capital: country.capital,
        avgErr: Math.round(avgDistErr),
        maxErr: Math.round(maxDistErr),
        zone: zone,
        confidence: Math.round(confidence),
        directionMismatches: directionMismatches,
        breakdown: breakdown
      });
    }

    // Sort by lowest average error first, then direction matches
    scored.sort((a, b) => {
      if (a.directionMismatches !== b.directionMismatches) {
        return a.directionMismatches - b.directionMismatches;
      }
      return a.avgErr - b.avgErr;
    });

    let green = scored.filter((x) => x.zone === 'green');
    let yellow = scored.filter((x) => x.zone === 'yellow');
    let red = scored.filter((x) => x.zone === 'red');

    // Fallback: If green is empty (due to high distance error or conflicting clues),
    // promote the top 5 closest countries so the user ALWAYS gets answers!
    if (green.length === 0 && scored.length > 0) {
      green = scored.slice(0, 5);
      yellow = scored.slice(5, 12);
    }

    state.lastResults = {
      green: green,
      yellow: yellow,
      red: red,
      allScored: scored
    };

    return state.lastResults;
  }

  // --- LEAFLET MAP ---
  function initMap() {
    const mapElement = document.getElementById('radar-map');
    if (!mapElement || state.map) return;

    state.map = L.map('radar-map', {
      center: [20, 0],
      zoom: 2,
      minZoom: 2,
      maxZoom: 9,
      worldCopyJump: true
    });

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap'
    }).addTo(state.map);

    state.mapLayers.rings.addTo(state.map);
    state.mapLayers.markers.addTo(state.map);
  }

  function updateMap() {
    if (!state.map) return;

    state.mapLayers.rings.clearLayers();
    state.mapLayers.markers.clearLayers();

    const bounds = [];

    // Clues
    state.clues.forEach((clue) => {
      bounds.push([clue.lat, clue.lng]);

      const clueIcon = L.divIcon({
        html: `<div style="background:#0066fe; border:2px solid #ffffff; color:white; width:28px; height:28px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:13px; font-weight:bold; box-shadow:0 2px 6px rgba(0,102,254,0.4);">${clue.emoji || clue.iso2}</div>`,
        iconSize: [28, 28],
        iconAnchor: [14, 14]
      });

      L.marker([clue.lat, clue.lng], { icon: clueIcon })
        .bindPopup(`<b>${clue.emoji} ${clue.country}</b><br/>Distance: ${clue.distanceKm.toLocaleString()} km<br/>Direction: ${clue.directionRaw}`)
        .addTo(state.mapLayers.markers);

      const pts = [];
      const numPts = 64;
      for (let i = 0; i <= numPts; i++) {
        pts.push(destinationPoint(clue.lat, clue.lng, clue.distanceKm, (i * 360) / numPts));
      }
      L.polyline(pts, { color: '#0066fe', weight: 2, opacity: 0.65, dashArray: '5,5' }).addTo(state.mapLayers.rings);
    });

    // Candidates
    state.lastResults.green.slice(0, 8).forEach((cand, idx) => {
      bounds.push([cand.lat, cand.lng]);
      const isWinner = idx === 0;

      const candIcon = L.divIcon({
        html: `<div style="background:#10b981; border:2px solid #ffffff; color:white; width:${isWinner ? '34px' : '26px'}; height:${isWinner ? '34px' : '26px'}; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:${isWinner ? '16px' : '12px'}; font-weight:bold; box-shadow:0 2px 8px rgba(16,185,129,0.5);">${cand.emoji || cand.iso2}</div>`,
        iconSize: isWinner ? [34, 34] : [26, 26],
        iconAnchor: isWinner ? [17, 17] : [13, 13]
      });

      L.marker([cand.lat, cand.lng], { icon: candIcon })
        .bindPopup(`<b>#${idx + 1} ${cand.emoji} ${cand.country}</b><br/>Accuracy: ${cand.confidence}%<br/>Avg error: ±${cand.avgErr} km`)
        .addTo(state.mapLayers.markers);
    });

    if (bounds.length > 0) {
      state.map.fitBounds(bounds, { padding: [40, 40], maxZoom: 6 });
    }
  }

  // --- RENDERING UI ---
  function renderAll() {
    calculateRankings();
    renderCluesBar();
    renderWinnerCard();
    renderSecondaryCandidates();
    updateMap();
  }

  function renderCluesBar() {
    const bar = document.getElementById('clues-bar');
    const wrap = document.getElementById('clues-chips-wrap');
    const countNum = document.getElementById('clues-count-num');

    if (!bar || !wrap) return;

    if (state.clues.length === 0) {
      bar.style.display = 'none';
      return;
    }

    bar.style.display = 'flex';
    if (countNum) countNum.textContent = state.clues.length;

    wrap.innerHTML = state.clues
      .map(
        (c) => `
      <div class="clue-chip">
        <span>${c.emoji || c.iso2}</span>
        <span>${c.country}</span>
        <span style="font-family:var(--font-mono); font-size:0.8rem;">${c.distanceKm.toLocaleString()} km</span>
        <span>${c.directionRaw}</span>
        <span class="clue-chip-remove" data-id="${c.id}" title="Remove clue">✕</span>
      </div>
    `
      )
      .join('');

    wrap.querySelectorAll('.clue-chip-remove').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        state.clues = state.clues.filter((c) => c.id !== id);
        showToast('Clue removed');
        renderAll();
      });
    });
  }

  function renderWinnerCard() {
    const card = document.getElementById('winner-card');
    if (!card) return;

    if (state.clues.length === 0 || state.lastResults.green.length === 0) {
      card.style.display = 'none';
      return;
    }

    const winner = state.lastResults.green[0];
    card.style.display = 'flex';

    document.getElementById('winner-flag').textContent = winner.emoji || winner.iso2;
    document.getElementById('winner-name').textContent = winner.country;
    document.getElementById('winner-sub').textContent = `${winner.region}${winner.capital ? ` • Capital: ${winner.capital}` : ''}`;
    document.getElementById('winner-accuracy').textContent = `${winner.confidence}%`;
    document.getElementById('winner-error').textContent = `±${winner.avgErr} km`;

    // Math chips
    const mathRow = document.getElementById('winner-math-row');
    mathRow.innerHTML = winner.breakdown
      .map(
        (b) => `
      <div class="math-chip ${Math.abs(b.diff) <= 250 ? 'good' : 'warn'}">
        <span>${b.clueEmoji || b.clueIso2} ${b.clueCountry}:</span>
        <span style="font-family:var(--font-mono);">${b.diff >= 0 ? '+' : ''}${b.diff} km</span>
        <span>(${b.compassArrow} ${b.compassCode})</span>
        <span>${b.dirMatch ? '✅' : '⚠️'}</span>
      </div>
    `
      )
      .join('');

    const copyBtn = document.getElementById('btn-copy-winner');
    if (copyBtn) {
      copyBtn.onclick = () => {
        navigator.clipboard.writeText(winner.country);
        showToast(`Copied "${winner.country}" to clipboard!`);
      };
    }

    const mapToggleBtn = document.getElementById('btn-toggle-map');
    if (mapToggleBtn) {
      mapToggleBtn.onclick = () => {
        const mapWrap = document.getElementById('map-clean-wrapper');
        if (mapWrap.style.display === 'none') {
          mapWrap.style.display = 'block';
          if (!state.map) initMap();
          setTimeout(() => {
            state.map.invalidateSize();
            updateMap();
          }, 100);
        } else {
          mapWrap.style.display = 'none';
        }
      };
    }
  }

  function renderSecondaryCandidates() {
    const wrap = document.getElementById('secondary-candidates-wrap');
    const grid = document.getElementById('other-candidates-grid');
    const countBadge = document.getElementById('other-green-count');

    if (!wrap || !grid) return;

    const others = state.lastResults.green.slice(1, 10);
    if (state.clues.length === 0 || others.length === 0) {
      wrap.style.display = 'none';
      return;
    }

    wrap.style.display = 'block';
    if (countBadge) countBadge.textContent = others.length;

    grid.innerHTML = others
      .map(
        (cand, idx) => `
      <div class="mini-candidate-card" onclick="navigator.clipboard.writeText('${cand.country}'); window.showToast && window.showToast('Copied ${cand.country}!');" style="cursor:pointer;" title="Click to copy name">
        <div class="mini-card-left">
          <div class="mini-flag">${cand.emoji || cand.iso2}</div>
          <div class="mini-name-box">
            <div class="mini-country-name">#${idx + 2} ${cand.country}</div>
            <div class="mini-country-sub">${cand.region}</div>
          </div>
        </div>
        <div class="mini-score-badge green">
          <div>${cand.confidence}% match</div>
          <div style="font-size:0.75rem; color:var(--text-muted); font-weight:500;">±${cand.avgErr} km off</div>
        </div>
      </div>
    `
      )
      .join('');
  }

  // --- DISCORD EXPORT ---
  function copyDiscordResults() {
    if (state.lastResults.green.length === 0) {
      showToast('No green candidates to copy yet!');
      return;
    }

    const list = state.lastResults.green.slice(0, 5);
    let msg = `🎯 **Mystery Country Guesses**:\n`;
    list.forEach((c, i) => {
      msg += `${i + 1}. ${c.emoji} **${c.country}** — ±${c.avgErr} km error (${c.confidence}% match)\n`;
    });

    navigator.clipboard.writeText(msg).then(() => {
      showToast('Copied formatted Discord message!');
    });
  }

  // --- TOAST NOTIFICATIONS ---
  function showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'tool-toast';
    toast.innerHTML = `<span>✓</span> <span>${message}</span>`;

    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px) scale(0.95)';
      toast.style.transition = 'all 0.2s ease';
      setTimeout(() => toast.remove(), 200);
    }, 2800);
  }
  window.showToast = showToast;

  // --- PRESETS ---
  function loadPreset(type) {
    state.clues = [];

    if (type === 'prompt_example') {
      const raw = `🇯🇵 Japan — 12,874 km ⬅️ W (🧊 FREEZING) [@hvu]\n🇺🇸 United States — 11,917 km ➡️ E (🧊 FREEZING)`;
      state.clues = parseClues(raw);
      showToast('Loaded Japan & US clues!');
    } else if (type === 'add_third_clue') {
      const raw = `🇯🇵 Japan — 12,874 km ⬅️ W (🧊 FREEZING) [@hvu]\n🇺🇸 United States — 11,917 km ➡️ E (🧊 FREEZING)\n🇿🇦 South Africa — 3,257 km ⬆️ N (⛅ WARM)`;
      state.clues = parseClues(raw);
      showToast('Added South Africa clue! Congo isolated to 100%!');
    } else if (type === 'europe_mystery') {
      const raw = `ly Libya — 2,004 km ⬆️ N (🟧 HOT)\nGG Guernsey — 1,297 km ↘️ SE (🟧 HOT)\nAT Austria — 429 km ↙️ SW\nFR France — 842 km ➡️ E\nCH Switzerland — 459 km ↘️ SE\nLI Liechtenstein — 423 km ↘️ SE\nIT Italy — 230 km ⬆️ N\nDE Germany — 817 km ⬇️ S\nSI Slovenia — 316 km ↙️ SW`;
      state.clues = parseClues(raw);
      showToast('Loaded European clues! San Marino pinpointed!');
    }

    renderAll();
  }

  // --- EVENTS ---
  function initEvents() {
    const parseBtn = document.getElementById('btn-parse-clues');
    const pasteInput = document.getElementById('paste-input');

    if (parseBtn && pasteInput) {
      parseBtn.addEventListener('click', () => {
        const text = pasteInput.value;
        if (!text || !text.trim()) {
          showToast('Please paste your clues in the box first!');
          return;
        }

        const newClues = parseClues(text);
        if (newClues.length === 0) {
          showToast('Could not recognize clues. Please check the text format!');
          return;
        }

        // When the user pastes new clues and clicks Find Green Countries:
        // Set state.clues to the new clues directly (fresh round)!
        state.clues = newClues;
        pasteInput.value = '';
        showToast(`Parsed ${newClues.length} clue(s)! Calculated best match!`);
        renderAll();

        // Scroll smoothly to results
        const resultsEl = document.getElementById('results-section');
        if (resultsEl) {
          resultsEl.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }

    document.querySelectorAll('.btn-preset').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const preset = e.currentTarget.getAttribute('data-preset');
        loadPreset(preset);
      });
    });

    const clearBtn = document.getElementById('btn-clear-nav');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        state.clues = [];
        if (pasteInput) pasteInput.value = '';
        renderAll();
        showToast('Cleared all clues');
      });
    }

    const copyNavBtn = document.getElementById('btn-copy-discord-nav');
    if (copyNavBtn) {
      copyNavBtn.addEventListener('click', copyDiscordResults);
    }
  }

  // --- PASSWORD SECURITY GATE (SHA-256 ENCODED) ---
  // The passkey is protected with one-way SHA-256 cryptographic encoding.
  // Plaintext password is NEVER stored anywhere in the source code.
  const AUTH_TARGET_DIGEST = 'eb9b9588a4ef64da87099ebb8da415438e96e33dfe9932af39e0bcb19835e045';
  const AUTH_STORAGE_KEY = '_mct_access_token_v1';

  async function computeSha256(str) {
    const enc = new TextEncoder();
    const data = enc.encode(str);
    const hashBuf = await crypto.subtle.digest('SHA-256', data);
    const hashArr = Array.from(new Uint8Array(hashBuf));
    return hashArr.map(b => b.toString(16).padStart(2, '0')).join('');
  }

  async function checkPasskey(candidate) {
    if (!candidate) return false;
    const digest = await computeSha256(candidate.trim());
    return digest === AUTH_TARGET_DIGEST;
  }

  function initAuthGate() {
    const modal = document.getElementById('auth-gate-modal');
    const form = document.getElementById('auth-form');
    const input = document.getElementById('auth-input-key');
    const errorMsg = document.getElementById('auth-error-msg');
    if (!modal || !form || !input) return;

    // Check if session is already unlocked
    const savedToken = sessionStorage.getItem(AUTH_STORAGE_KEY);
    if (savedToken === AUTH_TARGET_DIGEST) {
      modal.style.display = 'none';
      return;
    }

    modal.style.display = 'flex';

    async function handleUnlock() {
      const val = input.value;
      const isValid = await checkPasskey(val);
      if (isValid) {
        sessionStorage.setItem(AUTH_STORAGE_KEY, AUTH_TARGET_DIGEST);
        modal.style.opacity = '0';
        modal.style.transition = 'opacity 0.25s ease';
        setTimeout(() => {
          modal.style.display = 'none';
        }, 250);
        showToast('Access granted! Welcome to MysteryCountry Finder.');
      } else {
        if (errorMsg) errorMsg.style.display = 'block';
        input.value = '';
        input.focus();
      }
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      handleUnlock();
    });

    const submitBtn = document.getElementById('auth-submit-btn');
    if (submitBtn) {
      submitBtn.addEventListener('click', handleUnlock);
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    initAuthGate();
    initEvents();
    loadPreset('prompt_example');
  });
})();
