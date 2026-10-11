// Comprehensive World Countries Dataset with Coordinates & Borders
const WORLD_COUNTRIES = [
  {
    "name": "Afghanistan",
    "iso2": "AF",
    "iso3": "AFG",
    "lat": 33.0,
    "lng": 65.0,
    "capital": "Kabul",
    "region": "Asia",
    "subregion": "Southern Asia",
    "emoji": "🇦🇫",
    "aliases": [],
    "borders": [
      "IR",
      "PK",
      "TM",
      "UZ",
      "TJ",
      "CN"
    ],
    "borders_iso3": [
      "IRN",
      "PAK",
      "TKM",
      "UZB",
      "TJK",
      "CHN"
    ]
  },
  {
    "name": "Aland Islands",
    "iso2": "AX",
    "iso3": "ALA",
    "lat": 60.116667,
    "lng": 19.9,
    "capital": "Mariehamn",
    "region": "Europe",
    "subregion": "Northern Europe",
    "emoji": "🇦🇽",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Albania",
    "iso2": "AL",
    "iso3": "ALB",
    "lat": 41.0,
    "lng": 20.0,
    "capital": "Tirana",
    "region": "Europe",
    "subregion": "Southern Europe",
    "emoji": "🇦🇱",
    "aliases": [],
    "borders": [
      "ME",
      "GR",
      "MK",
      "XK"
    ],
    "borders_iso3": [
      "MNE",
      "GRC",
      "MKD",
      "UNK"
    ]
  },
  {
    "name": "Algeria",
    "iso2": "DZ",
    "iso3": "DZA",
    "lat": 28.0,
    "lng": 3.0,
    "capital": "Algiers",
    "region": "Africa",
    "subregion": "Northern Africa",
    "emoji": "🇩🇿",
    "aliases": [],
    "borders": [
      "TN",
      "LY",
      "NE",
      "EH",
      "MR",
      "ML",
      "MA"
    ],
    "borders_iso3": [
      "TUN",
      "LBY",
      "NER",
      "ESH",
      "MRT",
      "MLI",
      "MAR"
    ]
  },
  {
    "name": "American Samoa",
    "iso2": "AS",
    "iso3": "ASM",
    "lat": -14.33333333,
    "lng": -170.0,
    "capital": "Pago Pago",
    "region": "Oceania",
    "subregion": "Polynesia",
    "emoji": "🇦🇸",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Andorra",
    "iso2": "AD",
    "iso3": "AND",
    "lat": 42.5,
    "lng": 1.5,
    "capital": "Andorra la Vella",
    "region": "Europe",
    "subregion": "Southern Europe",
    "emoji": "🇦🇩",
    "aliases": [],
    "borders": [
      "FR",
      "ES"
    ],
    "borders_iso3": [
      "FRA",
      "ESP"
    ]
  },
  {
    "name": "Angola",
    "iso2": "AO",
    "iso3": "AGO",
    "lat": -12.5,
    "lng": 18.5,
    "capital": "Luanda",
    "region": "Africa",
    "subregion": "Middle Africa",
    "emoji": "🇦🇴",
    "aliases": [],
    "borders": [
      "CG",
      "CD",
      "ZM",
      "NA"
    ],
    "borders_iso3": [
      "COG",
      "COD",
      "ZMB",
      "NAM"
    ]
  },
  {
    "name": "Anguilla",
    "iso2": "AI",
    "iso3": "AIA",
    "lat": 18.25,
    "lng": -63.16666666,
    "capital": "The Valley",
    "region": "Americas",
    "subregion": "Caribbean",
    "emoji": "🇦🇮",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Antarctica",
    "iso2": "AQ",
    "iso3": "ATA",
    "lat": -74.65,
    "lng": 4.48,
    "capital": "",
    "region": "Polar",
    "subregion": "",
    "emoji": "🇦🇶",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Antigua and Barbuda",
    "iso2": "AG",
    "iso3": "ATG",
    "lat": 17.05,
    "lng": -61.8,
    "capital": "St. John's",
    "region": "Americas",
    "subregion": "Caribbean",
    "emoji": "🇦🇬",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Argentina",
    "iso2": "AR",
    "iso3": "ARG",
    "lat": -34.0,
    "lng": -64.0,
    "capital": "Buenos Aires",
    "region": "Americas",
    "subregion": "South America",
    "emoji": "🇦🇷",
    "aliases": [],
    "borders": [
      "BO",
      "BR",
      "CL",
      "PY",
      "UY"
    ],
    "borders_iso3": [
      "BOL",
      "BRA",
      "CHL",
      "PRY",
      "URY"
    ]
  },
  {
    "name": "Armenia",
    "iso2": "AM",
    "iso3": "ARM",
    "lat": 40.0,
    "lng": 45.0,
    "capital": "Yerevan",
    "region": "Asia",
    "subregion": "Western Asia",
    "emoji": "🇦🇲",
    "aliases": [],
    "borders": [
      "AZ",
      "GE",
      "IR",
      "TR"
    ],
    "borders_iso3": [
      "AZE",
      "GEO",
      "IRN",
      "TUR"
    ]
  },
  {
    "name": "Aruba",
    "iso2": "AW",
    "iso3": "ABW",
    "lat": 12.5,
    "lng": -69.96666666,
    "capital": "Oranjestad",
    "region": "Americas",
    "subregion": "Caribbean",
    "emoji": "🇦🇼",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Australia",
    "iso2": "AU",
    "iso3": "AUS",
    "lat": -27.0,
    "lng": 133.0,
    "capital": "Canberra",
    "region": "Oceania",
    "subregion": "Australia and New Zealand",
    "emoji": "🇦🇺",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Austria",
    "iso2": "AT",
    "iso3": "AUT",
    "lat": 47.33333333,
    "lng": 13.33333333,
    "capital": "Vienna",
    "region": "Europe",
    "subregion": "Western Europe",
    "emoji": "🇦🇹",
    "aliases": [],
    "borders": [
      "CZ",
      "DE",
      "HU",
      "IT",
      "LI",
      "SK",
      "SI",
      "CH"
    ],
    "borders_iso3": [
      "CZE",
      "DEU",
      "HUN",
      "ITA",
      "LIE",
      "SVK",
      "SVN",
      "CHE"
    ]
  },
  {
    "name": "Azerbaijan",
    "iso2": "AZ",
    "iso3": "AZE",
    "lat": 40.5,
    "lng": 47.5,
    "capital": "Baku",
    "region": "Asia",
    "subregion": "Western Asia",
    "emoji": "🇦🇿",
    "aliases": [],
    "borders": [
      "AM",
      "GE",
      "IR",
      "RU",
      "TR"
    ],
    "borders_iso3": [
      "ARM",
      "GEO",
      "IRN",
      "RUS",
      "TUR"
    ]
  },
  {
    "name": "Bahrain",
    "iso2": "BH",
    "iso3": "BHR",
    "lat": 26.0,
    "lng": 50.55,
    "capital": "Manama",
    "region": "Asia",
    "subregion": "Western Asia",
    "emoji": "🇧🇭",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Bangladesh",
    "iso2": "BD",
    "iso3": "BGD",
    "lat": 24.0,
    "lng": 90.0,
    "capital": "Dhaka",
    "region": "Asia",
    "subregion": "Southern Asia",
    "emoji": "🇧🇩",
    "aliases": [],
    "borders": [
      "MM",
      "IN"
    ],
    "borders_iso3": [
      "MMR",
      "IND"
    ]
  },
  {
    "name": "Barbados",
    "iso2": "BB",
    "iso3": "BRB",
    "lat": 13.16666666,
    "lng": -59.53333333,
    "capital": "Bridgetown",
    "region": "Americas",
    "subregion": "Caribbean",
    "emoji": "🇧🇧",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Belarus",
    "iso2": "BY",
    "iso3": "BLR",
    "lat": 53.0,
    "lng": 28.0,
    "capital": "Minsk",
    "region": "Europe",
    "subregion": "Eastern Europe",
    "emoji": "🇧🇾",
    "aliases": [],
    "borders": [
      "LV",
      "LT",
      "PL",
      "RU",
      "UA"
    ],
    "borders_iso3": [
      "LVA",
      "LTU",
      "POL",
      "RUS",
      "UKR"
    ]
  },
  {
    "name": "Belgium",
    "iso2": "BE",
    "iso3": "BEL",
    "lat": 50.83333333,
    "lng": 4.0,
    "capital": "Brussels",
    "region": "Europe",
    "subregion": "Western Europe",
    "emoji": "🇧🇪",
    "aliases": [],
    "borders": [
      "FR",
      "DE",
      "LU",
      "NL"
    ],
    "borders_iso3": [
      "FRA",
      "DEU",
      "LUX",
      "NLD"
    ]
  },
  {
    "name": "Belize",
    "iso2": "BZ",
    "iso3": "BLZ",
    "lat": 17.25,
    "lng": -88.75,
    "capital": "Belmopan",
    "region": "Americas",
    "subregion": "Central America",
    "emoji": "🇧🇿",
    "aliases": [],
    "borders": [
      "GT",
      "MX"
    ],
    "borders_iso3": [
      "GTM",
      "MEX"
    ]
  },
  {
    "name": "Benin",
    "iso2": "BJ",
    "iso3": "BEN",
    "lat": 9.5,
    "lng": 2.25,
    "capital": "Porto-Novo",
    "region": "Africa",
    "subregion": "Western Africa",
    "emoji": "🇧🇯",
    "aliases": [],
    "borders": [
      "BF",
      "NE",
      "NG",
      "TG"
    ],
    "borders_iso3": [
      "BFA",
      "NER",
      "NGA",
      "TGO"
    ]
  },
  {
    "name": "Bermuda",
    "iso2": "BM",
    "iso3": "BMU",
    "lat": 32.33333333,
    "lng": -64.75,
    "capital": "Hamilton",
    "region": "Americas",
    "subregion": "Northern America",
    "emoji": "🇧🇲",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Bhutan",
    "iso2": "BT",
    "iso3": "BTN",
    "lat": 27.5,
    "lng": 90.5,
    "capital": "Thimphu",
    "region": "Asia",
    "subregion": "Southern Asia",
    "emoji": "🇧🇹",
    "aliases": [],
    "borders": [
      "CN",
      "IN"
    ],
    "borders_iso3": [
      "CHN",
      "IND"
    ]
  },
  {
    "name": "Bolivia",
    "iso2": "BO",
    "iso3": "BOL",
    "lat": -17.0,
    "lng": -65.0,
    "capital": "Sucre",
    "region": "Americas",
    "subregion": "South America",
    "emoji": "🇧🇴",
    "aliases": [
      "Bolivia, Plurinational State of"
    ],
    "borders": [
      "AR",
      "BR",
      "CL",
      "PY",
      "PE"
    ],
    "borders_iso3": [
      "ARG",
      "BRA",
      "CHL",
      "PRY",
      "PER"
    ]
  },
  {
    "name": "Bonaire, Sint Eustatius and Saba",
    "iso2": "BQ",
    "iso3": "BES",
    "lat": 12.15,
    "lng": -68.266667,
    "capital": "Kralendijk",
    "region": "Americas",
    "subregion": "Caribbean",
    "emoji": "🇧🇶",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Bosnia and Herzegovina",
    "iso2": "BA",
    "iso3": "BIH",
    "lat": 44.0,
    "lng": 18.0,
    "capital": "Sarajevo",
    "region": "Europe",
    "subregion": "Southern Europe",
    "emoji": "🇧🇦",
    "aliases": [],
    "borders": [
      "HR",
      "ME",
      "RS"
    ],
    "borders_iso3": [
      "HRV",
      "MNE",
      "SRB"
    ]
  },
  {
    "name": "Botswana",
    "iso2": "BW",
    "iso3": "BWA",
    "lat": -22.0,
    "lng": 24.0,
    "capital": "Gaborone",
    "region": "Africa",
    "subregion": "Southern Africa",
    "emoji": "🇧🇼",
    "aliases": [],
    "borders": [
      "NA",
      "ZA",
      "ZM",
      "ZW"
    ],
    "borders_iso3": [
      "NAM",
      "ZAF",
      "ZMB",
      "ZWE"
    ]
  },
  {
    "name": "Bouvet Island",
    "iso2": "BV",
    "iso3": "BVT",
    "lat": -54.43333333,
    "lng": 3.4,
    "capital": "",
    "region": "",
    "subregion": "",
    "emoji": "🇧🇻",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Brazil",
    "iso2": "BR",
    "iso3": "BRA",
    "lat": -10.0,
    "lng": -55.0,
    "capital": "Brasilia",
    "region": "Americas",
    "subregion": "South America",
    "emoji": "🇧🇷",
    "aliases": [],
    "borders": [
      "AR",
      "BO",
      "CO",
      "GF",
      "GY",
      "PY",
      "PE",
      "SR",
      "UY",
      "VE"
    ],
    "borders_iso3": [
      "ARG",
      "BOL",
      "COL",
      "GUF",
      "GUY",
      "PRY",
      "PER",
      "SUR",
      "URY",
      "VEN"
    ]
  },
  {
    "name": "British Indian Ocean Territory",
    "iso2": "IO",
    "iso3": "IOT",
    "lat": -6.0,
    "lng": 71.5,
    "capital": "Diego Garcia",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "emoji": "🇮🇴",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Brunei",
    "iso2": "BN",
    "iso3": "BRN",
    "lat": 4.5,
    "lng": 114.66666666,
    "capital": "Bandar Seri Begawan",
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "emoji": "🇧🇳",
    "aliases": [
      "Brunei Darussalam"
    ],
    "borders": [
      "MY"
    ],
    "borders_iso3": [
      "MYS"
    ]
  },
  {
    "name": "Bulgaria",
    "iso2": "BG",
    "iso3": "BGR",
    "lat": 43.0,
    "lng": 25.0,
    "capital": "Sofia",
    "region": "Europe",
    "subregion": "Eastern Europe",
    "emoji": "🇧🇬",
    "aliases": [],
    "borders": [
      "GR",
      "MK",
      "RO",
      "RS",
      "TR"
    ],
    "borders_iso3": [
      "GRC",
      "MKD",
      "ROU",
      "SRB",
      "TUR"
    ]
  },
  {
    "name": "Burkina Faso",
    "iso2": "BF",
    "iso3": "BFA",
    "lat": 13.0,
    "lng": -2.0,
    "capital": "Ouagadougou",
    "region": "Africa",
    "subregion": "Western Africa",
    "emoji": "🇧🇫",
    "aliases": [],
    "borders": [
      "BJ",
      "CI",
      "GH",
      "ML",
      "NE",
      "TG"
    ],
    "borders_iso3": [
      "BEN",
      "CIV",
      "GHA",
      "MLI",
      "NER",
      "TGO"
    ]
  },
  {
    "name": "Burundi",
    "iso2": "BI",
    "iso3": "BDI",
    "lat": -3.5,
    "lng": 30.0,
    "capital": "Gitega",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "emoji": "🇧🇮",
    "aliases": [],
    "borders": [
      "CD",
      "RW",
      "TZ"
    ],
    "borders_iso3": [
      "COD",
      "RWA",
      "TZA"
    ]
  },
  {
    "name": "Cambodia",
    "iso2": "KH",
    "iso3": "KHM",
    "lat": 13.0,
    "lng": 105.0,
    "capital": "Phnom Penh",
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "emoji": "🇰🇭",
    "aliases": [],
    "borders": [
      "LA",
      "TH",
      "VN"
    ],
    "borders_iso3": [
      "LAO",
      "THA",
      "VNM"
    ]
  },
  {
    "name": "Cameroon",
    "iso2": "CM",
    "iso3": "CMR",
    "lat": 6.0,
    "lng": 12.0,
    "capital": "Yaounde",
    "region": "Africa",
    "subregion": "Middle Africa",
    "emoji": "🇨🇲",
    "aliases": [],
    "borders": [
      "CF",
      "TD",
      "CG",
      "GQ",
      "GA",
      "NG"
    ],
    "borders_iso3": [
      "CAF",
      "TCD",
      "COG",
      "GNQ",
      "GAB",
      "NGA"
    ]
  },
  {
    "name": "Canada",
    "iso2": "CA",
    "iso3": "CAN",
    "lat": 60.0,
    "lng": -95.0,
    "capital": "Ottawa",
    "region": "Americas",
    "subregion": "Northern America",
    "emoji": "🇨🇦",
    "aliases": [],
    "borders": [
      "US"
    ],
    "borders_iso3": [
      "USA"
    ]
  },
  {
    "name": "Cape Verde",
    "iso2": "CV",
    "iso3": "CPV",
    "lat": 16.0,
    "lng": -24.0,
    "capital": "Praia",
    "region": "Africa",
    "subregion": "Western Africa",
    "emoji": "🇨🇻",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Cayman Islands",
    "iso2": "KY",
    "iso3": "CYM",
    "lat": 19.5,
    "lng": -80.5,
    "capital": "George Town",
    "region": "Americas",
    "subregion": "Caribbean",
    "emoji": "🇰🇾",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Central African Republic",
    "iso2": "CF",
    "iso3": "CAF",
    "lat": 7.0,
    "lng": 21.0,
    "capital": "Bangui",
    "region": "Africa",
    "subregion": "Middle Africa",
    "emoji": "🇨🇫",
    "aliases": [],
    "borders": [
      "CM",
      "TD",
      "CD",
      "CG",
      "SS",
      "SD"
    ],
    "borders_iso3": [
      "CMR",
      "TCD",
      "COD",
      "COG",
      "SSD",
      "SDN"
    ]
  },
  {
    "name": "Chad",
    "iso2": "TD",
    "iso3": "TCD",
    "lat": 15.0,
    "lng": 19.0,
    "capital": "N'Djamena",
    "region": "Africa",
    "subregion": "Middle Africa",
    "emoji": "🇹🇩",
    "aliases": [],
    "borders": [
      "CM",
      "CF",
      "LY",
      "NE",
      "NG",
      "SD"
    ],
    "borders_iso3": [
      "CMR",
      "CAF",
      "LBY",
      "NER",
      "NGA",
      "SDN"
    ]
  },
  {
    "name": "Chile",
    "iso2": "CL",
    "iso3": "CHL",
    "lat": -30.0,
    "lng": -71.0,
    "capital": "Santiago",
    "region": "Americas",
    "subregion": "South America",
    "emoji": "🇨🇱",
    "aliases": [],
    "borders": [
      "AR",
      "BO",
      "PE"
    ],
    "borders_iso3": [
      "ARG",
      "BOL",
      "PER"
    ]
  },
  {
    "name": "China",
    "iso2": "CN",
    "iso3": "CHN",
    "lat": 35.0,
    "lng": 105.0,
    "capital": "Beijing",
    "region": "Asia",
    "subregion": "Eastern Asia",
    "emoji": "🇨🇳",
    "aliases": [],
    "borders": [
      "AF",
      "BT",
      "MM",
      "HK",
      "IN",
      "KZ",
      "NP",
      "KP",
      "KG",
      "LA",
      "MO",
      "MN",
      "PK",
      "RU",
      "TJ",
      "VN"
    ],
    "borders_iso3": [
      "AFG",
      "BTN",
      "MMR",
      "HKG",
      "IND",
      "KAZ",
      "NPL",
      "PRK",
      "KGZ",
      "LAO",
      "MAC",
      "MNG",
      "PAK",
      "RUS",
      "TJK",
      "VNM"
    ]
  },
  {
    "name": "Christmas Island",
    "iso2": "CX",
    "iso3": "CXR",
    "lat": -10.5,
    "lng": 105.66666666,
    "capital": "Flying Fish Cove",
    "region": "Oceania",
    "subregion": "Australia and New Zealand",
    "emoji": "🇨🇽",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Cocos (Keeling) Islands",
    "iso2": "CC",
    "iso3": "CCK",
    "lat": -12.5,
    "lng": 96.83333333,
    "capital": "West Island",
    "region": "Oceania",
    "subregion": "Australia and New Zealand",
    "emoji": "🇨🇨",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Colombia",
    "iso2": "CO",
    "iso3": "COL",
    "lat": 4.0,
    "lng": -72.0,
    "capital": "Bogotá",
    "region": "Americas",
    "subregion": "South America",
    "emoji": "🇨🇴",
    "aliases": [],
    "borders": [
      "BR",
      "EC",
      "PA",
      "PE",
      "VE"
    ],
    "borders_iso3": [
      "BRA",
      "ECU",
      "PAN",
      "PER",
      "VEN"
    ]
  },
  {
    "name": "Comoros",
    "iso2": "KM",
    "iso3": "COM",
    "lat": -12.16666666,
    "lng": 44.25,
    "capital": "Moroni",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "emoji": "🇰🇲",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Congo",
    "iso2": "CG",
    "iso3": "COG",
    "lat": -1.0,
    "lng": 15.0,
    "capital": "Brazzaville",
    "region": "Africa",
    "subregion": "Middle Africa",
    "emoji": "🇨🇬",
    "aliases": [
      "Republic of the Congo",
      "Congo Republic",
      "Congo-Brazzaville",
      "Congo Brazzaville"
    ],
    "borders": [
      "AO",
      "CM",
      "CF",
      "CD",
      "GA"
    ],
    "borders_iso3": [
      "AGO",
      "CMR",
      "CAF",
      "COD",
      "GAB"
    ]
  },
  {
    "name": "Cook Islands",
    "iso2": "CK",
    "iso3": "COK",
    "lat": -21.23333333,
    "lng": -159.76666666,
    "capital": "Avarua",
    "region": "Oceania",
    "subregion": "Polynesia",
    "emoji": "🇨🇰",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Costa Rica",
    "iso2": "CR",
    "iso3": "CRI",
    "lat": 10.0,
    "lng": -84.0,
    "capital": "San Jose",
    "region": "Americas",
    "subregion": "Central America",
    "emoji": "🇨🇷",
    "aliases": [],
    "borders": [
      "NI",
      "PA"
    ],
    "borders_iso3": [
      "NIC",
      "PAN"
    ]
  },
  {
    "name": "Croatia",
    "iso2": "HR",
    "iso3": "HRV",
    "lat": 45.16666666,
    "lng": 15.5,
    "capital": "Zagreb",
    "region": "Europe",
    "subregion": "Southern Europe",
    "emoji": "🇭🇷",
    "aliases": [],
    "borders": [
      "BA",
      "HU",
      "ME",
      "RS",
      "SI"
    ],
    "borders_iso3": [
      "BIH",
      "HUN",
      "MNE",
      "SRB",
      "SVN"
    ]
  },
  {
    "name": "Cuba",
    "iso2": "CU",
    "iso3": "CUB",
    "lat": 21.5,
    "lng": -80.0,
    "capital": "Havana",
    "region": "Americas",
    "subregion": "Caribbean",
    "emoji": "🇨🇺",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Curaçao",
    "iso2": "CW",
    "iso3": "CUW",
    "lat": 12.116667,
    "lng": -68.933333,
    "capital": "Willemstad",
    "region": "Americas",
    "subregion": "Caribbean",
    "emoji": "🇨🇼",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Cyprus",
    "iso2": "CY",
    "iso3": "CYP",
    "lat": 35.0,
    "lng": 33.0,
    "capital": "Nicosia",
    "region": "Europe",
    "subregion": "Southern Europe",
    "emoji": "🇨🇾",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Czech Republic",
    "iso2": "CZ",
    "iso3": "CZE",
    "lat": 49.75,
    "lng": 15.5,
    "capital": "Prague",
    "region": "Europe",
    "subregion": "Eastern Europe",
    "emoji": "🇨🇿",
    "aliases": [
      "Czechia"
    ],
    "borders": [
      "AT",
      "DE",
      "PL",
      "SK"
    ],
    "borders_iso3": [
      "AUT",
      "DEU",
      "POL",
      "SVK"
    ]
  },
  {
    "name": "Democratic Republic of the Congo",
    "iso2": "CD",
    "iso3": "COD",
    "lat": 0.0,
    "lng": 25.0,
    "capital": "Kinshasa",
    "region": "Africa",
    "subregion": "Middle Africa",
    "emoji": "🇨🇩",
    "aliases": [
      "DR Congo",
      "DRC",
      "Congo-Kinshasa",
      "Congo Kinshasa"
    ],
    "borders": [
      "AO",
      "BI",
      "CF",
      "CG",
      "RW",
      "SS",
      "TZ",
      "UG",
      "ZM"
    ],
    "borders_iso3": [
      "AGO",
      "BDI",
      "CAF",
      "COG",
      "RWA",
      "SSD",
      "TZA",
      "UGA",
      "ZMB"
    ]
  },
  {
    "name": "Denmark",
    "iso2": "DK",
    "iso3": "DNK",
    "lat": 56.0,
    "lng": 10.0,
    "capital": "Copenhagen",
    "region": "Europe",
    "subregion": "Northern Europe",
    "emoji": "🇩🇰",
    "aliases": [],
    "borders": [
      "DE"
    ],
    "borders_iso3": [
      "DEU"
    ]
  },
  {
    "name": "Djibouti",
    "iso2": "DJ",
    "iso3": "DJI",
    "lat": 11.5,
    "lng": 43.0,
    "capital": "Djibouti",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "emoji": "🇩🇯",
    "aliases": [],
    "borders": [
      "ER",
      "ET",
      "SO"
    ],
    "borders_iso3": [
      "ERI",
      "ETH",
      "SOM"
    ]
  },
  {
    "name": "Dominica",
    "iso2": "DM",
    "iso3": "DMA",
    "lat": 15.41666666,
    "lng": -61.33333333,
    "capital": "Roseau",
    "region": "Americas",
    "subregion": "Caribbean",
    "emoji": "🇩🇲",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Dominican Republic",
    "iso2": "DO",
    "iso3": "DOM",
    "lat": 19.0,
    "lng": -70.66666666,
    "capital": "Santo Domingo",
    "region": "Americas",
    "subregion": "Caribbean",
    "emoji": "🇩🇴",
    "aliases": [],
    "borders": [
      "HT"
    ],
    "borders_iso3": [
      "HTI"
    ]
  },
  {
    "name": "Ecuador",
    "iso2": "EC",
    "iso3": "ECU",
    "lat": -2.0,
    "lng": -77.5,
    "capital": "Quito",
    "region": "Americas",
    "subregion": "South America",
    "emoji": "🇪🇨",
    "aliases": [],
    "borders": [
      "CO",
      "PE"
    ],
    "borders_iso3": [
      "COL",
      "PER"
    ]
  },
  {
    "name": "Egypt",
    "iso2": "EG",
    "iso3": "EGY",
    "lat": 27.0,
    "lng": 30.0,
    "capital": "Cairo",
    "region": "Africa",
    "subregion": "Northern Africa",
    "emoji": "🇪🇬",
    "aliases": [],
    "borders": [
      "IL",
      "LY",
      "PS",
      "SD"
    ],
    "borders_iso3": [
      "ISR",
      "LBY",
      "PSE",
      "SDN"
    ]
  },
  {
    "name": "El Salvador",
    "iso2": "SV",
    "iso3": "SLV",
    "lat": 13.83333333,
    "lng": -88.91666666,
    "capital": "San Salvador",
    "region": "Americas",
    "subregion": "Central America",
    "emoji": "🇸🇻",
    "aliases": [],
    "borders": [
      "GT",
      "HN"
    ],
    "borders_iso3": [
      "GTM",
      "HND"
    ]
  },
  {
    "name": "Equatorial Guinea",
    "iso2": "GQ",
    "iso3": "GNQ",
    "lat": 2.0,
    "lng": 10.0,
    "capital": "Malabo",
    "region": "Africa",
    "subregion": "Middle Africa",
    "emoji": "🇬🇶",
    "aliases": [],
    "borders": [
      "CM",
      "GA"
    ],
    "borders_iso3": [
      "CMR",
      "GAB"
    ]
  },
  {
    "name": "Eritrea",
    "iso2": "ER",
    "iso3": "ERI",
    "lat": 15.0,
    "lng": 39.0,
    "capital": "Asmara",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "emoji": "🇪🇷",
    "aliases": [],
    "borders": [
      "DJ",
      "ET",
      "SD"
    ],
    "borders_iso3": [
      "DJI",
      "ETH",
      "SDN"
    ]
  },
  {
    "name": "Estonia",
    "iso2": "EE",
    "iso3": "EST",
    "lat": 59.0,
    "lng": 26.0,
    "capital": "Tallinn",
    "region": "Europe",
    "subregion": "Northern Europe",
    "emoji": "🇪🇪",
    "aliases": [],
    "borders": [
      "LV",
      "RU"
    ],
    "borders_iso3": [
      "LVA",
      "RUS"
    ]
  },
  {
    "name": "Eswatini",
    "iso2": "SZ",
    "iso3": "SWZ",
    "lat": -26.5,
    "lng": 31.5,
    "capital": "Mbabane",
    "region": "Africa",
    "subregion": "Southern Africa",
    "emoji": "🇸🇿",
    "aliases": [
      "Swaziland"
    ],
    "borders": [
      "MZ",
      "ZA"
    ],
    "borders_iso3": [
      "MOZ",
      "ZAF"
    ]
  },
  {
    "name": "Ethiopia",
    "iso2": "ET",
    "iso3": "ETH",
    "lat": 8.0,
    "lng": 38.0,
    "capital": "Addis Ababa",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "emoji": "🇪🇹",
    "aliases": [],
    "borders": [
      "DJ",
      "ER",
      "KE",
      "SO",
      "SS",
      "SD"
    ],
    "borders_iso3": [
      "DJI",
      "ERI",
      "KEN",
      "SOM",
      "SSD",
      "SDN"
    ]
  },
  {
    "name": "Falkland Islands",
    "iso2": "FK",
    "iso3": "FLK",
    "lat": -51.75,
    "lng": -59.0,
    "capital": "Stanley",
    "region": "Americas",
    "subregion": "South America",
    "emoji": "🇫🇰",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Faroe Islands",
    "iso2": "FO",
    "iso3": "FRO",
    "lat": 62.0,
    "lng": -7.0,
    "capital": "Torshavn",
    "region": "Europe",
    "subregion": "Northern Europe",
    "emoji": "🇫🇴",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Fiji Islands",
    "iso2": "FJ",
    "iso3": "FJI",
    "lat": -18.0,
    "lng": 175.0,
    "capital": "Suva",
    "region": "Oceania",
    "subregion": "Melanesia",
    "emoji": "🇫🇯",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Finland",
    "iso2": "FI",
    "iso3": "FIN",
    "lat": 64.0,
    "lng": 26.0,
    "capital": "Helsinki",
    "region": "Europe",
    "subregion": "Northern Europe",
    "emoji": "🇫🇮",
    "aliases": [],
    "borders": [
      "NO",
      "SE",
      "RU"
    ],
    "borders_iso3": [
      "NOR",
      "SWE",
      "RUS"
    ]
  },
  {
    "name": "France",
    "iso2": "FR",
    "iso3": "FRA",
    "lat": 46.0,
    "lng": 2.0,
    "capital": "Paris",
    "region": "Europe",
    "subregion": "Western Europe",
    "emoji": "🇫🇷",
    "aliases": [],
    "borders": [
      "AD",
      "BE",
      "DE",
      "IT",
      "LU",
      "MC",
      "ES",
      "CH"
    ],
    "borders_iso3": [
      "AND",
      "BEL",
      "DEU",
      "ITA",
      "LUX",
      "MCO",
      "ESP",
      "CHE"
    ]
  },
  {
    "name": "French Guiana",
    "iso2": "GF",
    "iso3": "GUF",
    "lat": 4.0,
    "lng": -53.0,
    "capital": "Cayenne",
    "region": "Americas",
    "subregion": "South America",
    "emoji": "🇬🇫",
    "aliases": [],
    "borders": [
      "BR",
      "SR"
    ],
    "borders_iso3": [
      "BRA",
      "SUR"
    ]
  },
  {
    "name": "French Polynesia",
    "iso2": "PF",
    "iso3": "PYF",
    "lat": -15.0,
    "lng": -140.0,
    "capital": "Papeete",
    "region": "Oceania",
    "subregion": "Polynesia",
    "emoji": "🇵🇫",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "French Southern Territories",
    "iso2": "TF",
    "iso3": "ATF",
    "lat": -49.25,
    "lng": 69.167,
    "capital": "Port-aux-Francais",
    "region": "Africa",
    "subregion": "Southern Africa",
    "emoji": "🇹🇫",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Gabon",
    "iso2": "GA",
    "iso3": "GAB",
    "lat": -1.0,
    "lng": 11.75,
    "capital": "Libreville",
    "region": "Africa",
    "subregion": "Middle Africa",
    "emoji": "🇬🇦",
    "aliases": [],
    "borders": [
      "CM",
      "CG",
      "GQ"
    ],
    "borders_iso3": [
      "CMR",
      "COG",
      "GNQ"
    ]
  },
  {
    "name": "Georgia",
    "iso2": "GE",
    "iso3": "GEO",
    "lat": 42.0,
    "lng": 43.5,
    "capital": "Tbilisi",
    "region": "Asia",
    "subregion": "Western Asia",
    "emoji": "🇬🇪",
    "aliases": [],
    "borders": [
      "AM",
      "AZ",
      "RU",
      "TR"
    ],
    "borders_iso3": [
      "ARM",
      "AZE",
      "RUS",
      "TUR"
    ]
  },
  {
    "name": "Germany",
    "iso2": "DE",
    "iso3": "DEU",
    "lat": 51.0,
    "lng": 9.0,
    "capital": "Berlin",
    "region": "Europe",
    "subregion": "Western Europe",
    "emoji": "🇩🇪",
    "aliases": [],
    "borders": [
      "AT",
      "BE",
      "CZ",
      "DK",
      "FR",
      "LU",
      "NL",
      "PL",
      "CH"
    ],
    "borders_iso3": [
      "AUT",
      "BEL",
      "CZE",
      "DNK",
      "FRA",
      "LUX",
      "NLD",
      "POL",
      "CHE"
    ]
  },
  {
    "name": "Ghana",
    "iso2": "GH",
    "iso3": "GHA",
    "lat": 8.0,
    "lng": -2.0,
    "capital": "Accra",
    "region": "Africa",
    "subregion": "Western Africa",
    "emoji": "🇬🇭",
    "aliases": [],
    "borders": [
      "BF",
      "CI",
      "TG"
    ],
    "borders_iso3": [
      "BFA",
      "CIV",
      "TGO"
    ]
  },
  {
    "name": "Gibraltar",
    "iso2": "GI",
    "iso3": "GIB",
    "lat": 36.13333333,
    "lng": -5.35,
    "capital": "Gibraltar",
    "region": "Europe",
    "subregion": "Southern Europe",
    "emoji": "🇬🇮",
    "aliases": [],
    "borders": [
      "ES"
    ],
    "borders_iso3": [
      "ESP"
    ]
  },
  {
    "name": "Greece",
    "iso2": "GR",
    "iso3": "GRC",
    "lat": 39.0,
    "lng": 22.0,
    "capital": "Athens",
    "region": "Europe",
    "subregion": "Southern Europe",
    "emoji": "🇬🇷",
    "aliases": [],
    "borders": [
      "AL",
      "BG",
      "TR",
      "MK"
    ],
    "borders_iso3": [
      "ALB",
      "BGR",
      "TUR",
      "MKD"
    ]
  },
  {
    "name": "Greenland",
    "iso2": "GL",
    "iso3": "GRL",
    "lat": 72.0,
    "lng": -40.0,
    "capital": "Nuuk",
    "region": "Americas",
    "subregion": "Northern America",
    "emoji": "🇬🇱",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Grenada",
    "iso2": "GD",
    "iso3": "GRD",
    "lat": 12.11666666,
    "lng": -61.66666666,
    "capital": "St. George's",
    "region": "Americas",
    "subregion": "Caribbean",
    "emoji": "🇬🇩",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Guadeloupe",
    "iso2": "GP",
    "iso3": "GLP",
    "lat": 16.25,
    "lng": -61.583333,
    "capital": "Basse-Terre",
    "region": "Americas",
    "subregion": "Caribbean",
    "emoji": "🇬🇵",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Guam",
    "iso2": "GU",
    "iso3": "GUM",
    "lat": 13.46666666,
    "lng": 144.78333333,
    "capital": "Hagatna",
    "region": "Oceania",
    "subregion": "Micronesia",
    "emoji": "🇬🇺",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Guatemala",
    "iso2": "GT",
    "iso3": "GTM",
    "lat": 15.5,
    "lng": -90.25,
    "capital": "Guatemala City",
    "region": "Americas",
    "subregion": "Central America",
    "emoji": "🇬🇹",
    "aliases": [],
    "borders": [
      "BZ",
      "SV",
      "HN",
      "MX"
    ],
    "borders_iso3": [
      "BLZ",
      "SLV",
      "HND",
      "MEX"
    ]
  },
  {
    "name": "Guernsey",
    "iso2": "GG",
    "iso3": "GGY",
    "lat": 49.46666666,
    "lng": -2.58333333,
    "capital": "St Peter Port",
    "region": "Europe",
    "subregion": "Northern Europe",
    "emoji": "🇬🇬",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Guinea",
    "iso2": "GN",
    "iso3": "GIN",
    "lat": 11.0,
    "lng": -10.0,
    "capital": "Conakry",
    "region": "Africa",
    "subregion": "Western Africa",
    "emoji": "🇬🇳",
    "aliases": [],
    "borders": [
      "CI",
      "GW",
      "LR",
      "ML",
      "SN",
      "SL"
    ],
    "borders_iso3": [
      "CIV",
      "GNB",
      "LBR",
      "MLI",
      "SEN",
      "SLE"
    ]
  },
  {
    "name": "Guinea-Bissau",
    "iso2": "GW",
    "iso3": "GNB",
    "lat": 12.0,
    "lng": -15.0,
    "capital": "Bissau",
    "region": "Africa",
    "subregion": "Western Africa",
    "emoji": "🇬🇼",
    "aliases": [],
    "borders": [
      "GN",
      "SN"
    ],
    "borders_iso3": [
      "GIN",
      "SEN"
    ]
  },
  {
    "name": "Guyana",
    "iso2": "GY",
    "iso3": "GUY",
    "lat": 5.0,
    "lng": -59.0,
    "capital": "Georgetown",
    "region": "Americas",
    "subregion": "South America",
    "emoji": "🇬🇾",
    "aliases": [],
    "borders": [
      "BR",
      "SR",
      "VE"
    ],
    "borders_iso3": [
      "BRA",
      "SUR",
      "VEN"
    ]
  },
  {
    "name": "Haiti",
    "iso2": "HT",
    "iso3": "HTI",
    "lat": 19.0,
    "lng": -72.41666666,
    "capital": "Port-au-Prince",
    "region": "Americas",
    "subregion": "Caribbean",
    "emoji": "🇭🇹",
    "aliases": [],
    "borders": [
      "DO"
    ],
    "borders_iso3": [
      "DOM"
    ]
  },
  {
    "name": "Heard Island and McDonald Islands",
    "iso2": "HM",
    "iso3": "HMD",
    "lat": -53.1,
    "lng": 72.51666666,
    "capital": "",
    "region": "",
    "subregion": "",
    "emoji": "🇭🇲",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Honduras",
    "iso2": "HN",
    "iso3": "HND",
    "lat": 15.0,
    "lng": -86.5,
    "capital": "Tegucigalpa",
    "region": "Americas",
    "subregion": "Central America",
    "emoji": "🇭🇳",
    "aliases": [],
    "borders": [
      "GT",
      "SV",
      "NI"
    ],
    "borders_iso3": [
      "GTM",
      "SLV",
      "NIC"
    ]
  },
  {
    "name": "Hong Kong S.A.R.",
    "iso2": "HK",
    "iso3": "HKG",
    "lat": 22.25,
    "lng": 114.16666666,
    "capital": "Hong Kong",
    "region": "Asia",
    "subregion": "Eastern Asia",
    "emoji": "🇭🇰",
    "aliases": [],
    "borders": [
      "CN"
    ],
    "borders_iso3": [
      "CHN"
    ]
  },
  {
    "name": "Hungary",
    "iso2": "HU",
    "iso3": "HUN",
    "lat": 47.0,
    "lng": 20.0,
    "capital": "Budapest",
    "region": "Europe",
    "subregion": "Eastern Europe",
    "emoji": "🇭🇺",
    "aliases": [],
    "borders": [
      "AT",
      "HR",
      "RO",
      "RS",
      "SK",
      "SI",
      "UA"
    ],
    "borders_iso3": [
      "AUT",
      "HRV",
      "ROU",
      "SRB",
      "SVK",
      "SVN",
      "UKR"
    ]
  },
  {
    "name": "Iceland",
    "iso2": "IS",
    "iso3": "ISL",
    "lat": 65.0,
    "lng": -18.0,
    "capital": "Reykjavik",
    "region": "Europe",
    "subregion": "Northern Europe",
    "emoji": "🇮🇸",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "India",
    "iso2": "IN",
    "iso3": "IND",
    "lat": 20.0,
    "lng": 77.0,
    "capital": "New Delhi",
    "region": "Asia",
    "subregion": "Southern Asia",
    "emoji": "🇮🇳",
    "aliases": [],
    "borders": [
      "BD",
      "BT",
      "MM",
      "CN",
      "NP",
      "PK"
    ],
    "borders_iso3": [
      "BGD",
      "BTN",
      "MMR",
      "CHN",
      "NPL",
      "PAK"
    ]
  },
  {
    "name": "Indonesia",
    "iso2": "ID",
    "iso3": "IDN",
    "lat": -5.0,
    "lng": 120.0,
    "capital": "Jakarta",
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "emoji": "🇮🇩",
    "aliases": [],
    "borders": [
      "TL",
      "MY",
      "PG"
    ],
    "borders_iso3": [
      "TLS",
      "MYS",
      "PNG"
    ]
  },
  {
    "name": "Iran",
    "iso2": "IR",
    "iso3": "IRN",
    "lat": 32.0,
    "lng": 53.0,
    "capital": "Tehran",
    "region": "Asia",
    "subregion": "Southern Asia",
    "emoji": "🇮🇷",
    "aliases": [
      "Iran, Islamic Republic of"
    ],
    "borders": [
      "AF",
      "AM",
      "AZ",
      "IQ",
      "PK",
      "TR",
      "TM"
    ],
    "borders_iso3": [
      "AFG",
      "ARM",
      "AZE",
      "IRQ",
      "PAK",
      "TUR",
      "TKM"
    ]
  },
  {
    "name": "Iraq",
    "iso2": "IQ",
    "iso3": "IRQ",
    "lat": 33.0,
    "lng": 44.0,
    "capital": "Baghdad",
    "region": "Asia",
    "subregion": "Western Asia",
    "emoji": "🇮🇶",
    "aliases": [],
    "borders": [
      "IR",
      "JO",
      "KW",
      "SA",
      "SY",
      "TR"
    ],
    "borders_iso3": [
      "IRN",
      "JOR",
      "KWT",
      "SAU",
      "SYR",
      "TUR"
    ]
  },
  {
    "name": "Ireland",
    "iso2": "IE",
    "iso3": "IRL",
    "lat": 53.0,
    "lng": -8.0,
    "capital": "Dublin",
    "region": "Europe",
    "subregion": "Northern Europe",
    "emoji": "🇮🇪",
    "aliases": [],
    "borders": [
      "GB"
    ],
    "borders_iso3": [
      "GBR"
    ]
  },
  {
    "name": "Israel",
    "iso2": "IL",
    "iso3": "ISR",
    "lat": 31.5,
    "lng": 34.75,
    "capital": "Jerusalem",
    "region": "Asia",
    "subregion": "Western Asia",
    "emoji": "🇮🇱",
    "aliases": [],
    "borders": [
      "EG",
      "JO",
      "LB",
      "PS",
      "SY"
    ],
    "borders_iso3": [
      "EGY",
      "JOR",
      "LBN",
      "PSE",
      "SYR"
    ]
  },
  {
    "name": "Italy",
    "iso2": "IT",
    "iso3": "ITA",
    "lat": 42.83333333,
    "lng": 12.83333333,
    "capital": "Rome",
    "region": "Europe",
    "subregion": "Southern Europe",
    "emoji": "🇮🇹",
    "aliases": [],
    "borders": [
      "AT",
      "FR",
      "SM",
      "SI",
      "CH",
      "VA"
    ],
    "borders_iso3": [
      "AUT",
      "FRA",
      "SMR",
      "SVN",
      "CHE",
      "VAT"
    ]
  },
  {
    "name": "Ivory Coast",
    "iso2": "CI",
    "iso3": "CIV",
    "lat": 8.0,
    "lng": -5.0,
    "capital": "Yamoussoukro",
    "region": "Africa",
    "subregion": "Western Africa",
    "emoji": "🇨🇮",
    "aliases": [],
    "borders": [
      "BF",
      "GH",
      "GN",
      "LR",
      "ML"
    ],
    "borders_iso3": [
      "BFA",
      "GHA",
      "GIN",
      "LBR",
      "MLI"
    ]
  },
  {
    "name": "Jamaica",
    "iso2": "JM",
    "iso3": "JAM",
    "lat": 18.25,
    "lng": -77.5,
    "capital": "Kingston",
    "region": "Americas",
    "subregion": "Caribbean",
    "emoji": "🇯🇲",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Japan",
    "iso2": "JP",
    "iso3": "JPN",
    "lat": 36.0,
    "lng": 138.0,
    "capital": "Tokyo",
    "region": "Asia",
    "subregion": "Eastern Asia",
    "emoji": "🇯🇵",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Jersey",
    "iso2": "JE",
    "iso3": "JEY",
    "lat": 49.25,
    "lng": -2.16666666,
    "capital": "Saint Helier",
    "region": "Europe",
    "subregion": "Northern Europe",
    "emoji": "🇯🇪",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Jordan",
    "iso2": "JO",
    "iso3": "JOR",
    "lat": 31.0,
    "lng": 36.0,
    "capital": "Amman",
    "region": "Asia",
    "subregion": "Western Asia",
    "emoji": "🇯🇴",
    "aliases": [],
    "borders": [
      "IQ",
      "IL",
      "PS",
      "SA",
      "SY"
    ],
    "borders_iso3": [
      "IRQ",
      "ISR",
      "PSE",
      "SAU",
      "SYR"
    ]
  },
  {
    "name": "Kazakhstan",
    "iso2": "KZ",
    "iso3": "KAZ",
    "lat": 48.0,
    "lng": 68.0,
    "capital": "Astana",
    "region": "Asia",
    "subregion": "Central Asia",
    "emoji": "🇰🇿",
    "aliases": [],
    "borders": [
      "CN",
      "KG",
      "RU",
      "TM",
      "UZ"
    ],
    "borders_iso3": [
      "CHN",
      "KGZ",
      "RUS",
      "TKM",
      "UZB"
    ]
  },
  {
    "name": "Kenya",
    "iso2": "KE",
    "iso3": "KEN",
    "lat": 1.0,
    "lng": 38.0,
    "capital": "Nairobi",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "emoji": "🇰🇪",
    "aliases": [],
    "borders": [
      "ET",
      "SO",
      "SS",
      "TZ",
      "UG"
    ],
    "borders_iso3": [
      "ETH",
      "SOM",
      "SSD",
      "TZA",
      "UGA"
    ]
  },
  {
    "name": "Kiribati",
    "iso2": "KI",
    "iso3": "KIR",
    "lat": 1.41666666,
    "lng": 173.0,
    "capital": "Tarawa",
    "region": "Oceania",
    "subregion": "Micronesia",
    "emoji": "🇰🇮",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Kosovo",
    "iso2": "XK",
    "iso3": "XKX",
    "lat": 42.5612909,
    "lng": 20.3403035,
    "capital": "Pristina",
    "region": "Europe",
    "subregion": "Eastern Europe",
    "emoji": "🇽🇰",
    "aliases": [],
    "borders": [
      "AL",
      "MK",
      "ME",
      "RS"
    ],
    "borders_iso3": [
      "ALB",
      "MKD",
      "MNE",
      "SRB"
    ]
  },
  {
    "name": "Kuwait",
    "iso2": "KW",
    "iso3": "KWT",
    "lat": 29.5,
    "lng": 45.75,
    "capital": "Kuwait City",
    "region": "Asia",
    "subregion": "Western Asia",
    "emoji": "🇰🇼",
    "aliases": [],
    "borders": [
      "IQ",
      "SA"
    ],
    "borders_iso3": [
      "IRQ",
      "SAU"
    ]
  },
  {
    "name": "Kyrgyzstan",
    "iso2": "KG",
    "iso3": "KGZ",
    "lat": 41.0,
    "lng": 75.0,
    "capital": "Bishkek",
    "region": "Asia",
    "subregion": "Central Asia",
    "emoji": "🇰🇬",
    "aliases": [],
    "borders": [
      "CN",
      "KZ",
      "TJ",
      "UZ"
    ],
    "borders_iso3": [
      "CHN",
      "KAZ",
      "TJK",
      "UZB"
    ]
  },
  {
    "name": "Laos",
    "iso2": "LA",
    "iso3": "LAO",
    "lat": 18.0,
    "lng": 105.0,
    "capital": "Vientiane",
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "emoji": "🇱🇦",
    "aliases": [
      "Lao People's Democratic Republic"
    ],
    "borders": [
      "MM",
      "KH",
      "CN",
      "TH",
      "VN"
    ],
    "borders_iso3": [
      "MMR",
      "KHM",
      "CHN",
      "THA",
      "VNM"
    ]
  },
  {
    "name": "Latvia",
    "iso2": "LV",
    "iso3": "LVA",
    "lat": 57.0,
    "lng": 25.0,
    "capital": "Riga",
    "region": "Europe",
    "subregion": "Northern Europe",
    "emoji": "🇱🇻",
    "aliases": [],
    "borders": [
      "BY",
      "EE",
      "LT",
      "RU"
    ],
    "borders_iso3": [
      "BLR",
      "EST",
      "LTU",
      "RUS"
    ]
  },
  {
    "name": "Lebanon",
    "iso2": "LB",
    "iso3": "LBN",
    "lat": 33.83333333,
    "lng": 35.83333333,
    "capital": "Beirut",
    "region": "Asia",
    "subregion": "Western Asia",
    "emoji": "🇱🇧",
    "aliases": [],
    "borders": [
      "IL",
      "SY"
    ],
    "borders_iso3": [
      "ISR",
      "SYR"
    ]
  },
  {
    "name": "Lesotho",
    "iso2": "LS",
    "iso3": "LSO",
    "lat": -29.5,
    "lng": 28.5,
    "capital": "Maseru",
    "region": "Africa",
    "subregion": "Southern Africa",
    "emoji": "🇱🇸",
    "aliases": [],
    "borders": [
      "ZA"
    ],
    "borders_iso3": [
      "ZAF"
    ]
  },
  {
    "name": "Liberia",
    "iso2": "LR",
    "iso3": "LBR",
    "lat": 6.5,
    "lng": -9.5,
    "capital": "Monrovia",
    "region": "Africa",
    "subregion": "Western Africa",
    "emoji": "🇱🇷",
    "aliases": [],
    "borders": [
      "GN",
      "CI",
      "SL"
    ],
    "borders_iso3": [
      "GIN",
      "CIV",
      "SLE"
    ]
  },
  {
    "name": "Libya",
    "iso2": "LY",
    "iso3": "LBY",
    "lat": 25.0,
    "lng": 17.0,
    "capital": "Tripolis",
    "region": "Africa",
    "subregion": "Northern Africa",
    "emoji": "🇱🇾",
    "aliases": [],
    "borders": [
      "DZ",
      "TD",
      "EG",
      "NE",
      "SD",
      "TN"
    ],
    "borders_iso3": [
      "DZA",
      "TCD",
      "EGY",
      "NER",
      "SDN",
      "TUN"
    ]
  },
  {
    "name": "Liechtenstein",
    "iso2": "LI",
    "iso3": "LIE",
    "lat": 47.26666666,
    "lng": 9.53333333,
    "capital": "Vaduz",
    "region": "Europe",
    "subregion": "Western Europe",
    "emoji": "🇱🇮",
    "aliases": [],
    "borders": [
      "AT",
      "CH"
    ],
    "borders_iso3": [
      "AUT",
      "CHE"
    ]
  },
  {
    "name": "Lithuania",
    "iso2": "LT",
    "iso3": "LTU",
    "lat": 56.0,
    "lng": 24.0,
    "capital": "Vilnius",
    "region": "Europe",
    "subregion": "Northern Europe",
    "emoji": "🇱🇹",
    "aliases": [],
    "borders": [
      "BY",
      "LV",
      "PL",
      "RU"
    ],
    "borders_iso3": [
      "BLR",
      "LVA",
      "POL",
      "RUS"
    ]
  },
  {
    "name": "Luxembourg",
    "iso2": "LU",
    "iso3": "LUX",
    "lat": 49.75,
    "lng": 6.16666666,
    "capital": "Luxembourg",
    "region": "Europe",
    "subregion": "Western Europe",
    "emoji": "🇱🇺",
    "aliases": [],
    "borders": [
      "BE",
      "FR",
      "DE"
    ],
    "borders_iso3": [
      "BEL",
      "FRA",
      "DEU"
    ]
  },
  {
    "name": "Macau S.A.R.",
    "iso2": "MO",
    "iso3": "MAC",
    "lat": 22.16666666,
    "lng": 113.55,
    "capital": "Macao",
    "region": "Asia",
    "subregion": "Eastern Asia",
    "emoji": "🇲🇴",
    "aliases": [],
    "borders": [
      "CN"
    ],
    "borders_iso3": [
      "CHN"
    ]
  },
  {
    "name": "Madagascar",
    "iso2": "MG",
    "iso3": "MDG",
    "lat": -20.0,
    "lng": 47.0,
    "capital": "Antananarivo",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "emoji": "🇲🇬",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Malawi",
    "iso2": "MW",
    "iso3": "MWI",
    "lat": -13.5,
    "lng": 34.0,
    "capital": "Lilongwe",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "emoji": "🇲🇼",
    "aliases": [],
    "borders": [
      "MZ",
      "TZ",
      "ZM"
    ],
    "borders_iso3": [
      "MOZ",
      "TZA",
      "ZMB"
    ]
  },
  {
    "name": "Malaysia",
    "iso2": "MY",
    "iso3": "MYS",
    "lat": 2.5,
    "lng": 112.5,
    "capital": "Kuala Lumpur",
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "emoji": "🇲🇾",
    "aliases": [],
    "borders": [
      "BN",
      "ID",
      "TH"
    ],
    "borders_iso3": [
      "BRN",
      "IDN",
      "THA"
    ]
  },
  {
    "name": "Maldives",
    "iso2": "MV",
    "iso3": "MDV",
    "lat": 3.25,
    "lng": 73.0,
    "capital": "Male",
    "region": "Asia",
    "subregion": "Southern Asia",
    "emoji": "🇲🇻",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Mali",
    "iso2": "ML",
    "iso3": "MLI",
    "lat": 17.0,
    "lng": -4.0,
    "capital": "Bamako",
    "region": "Africa",
    "subregion": "Western Africa",
    "emoji": "🇲🇱",
    "aliases": [],
    "borders": [
      "DZ",
      "BF",
      "GN",
      "CI",
      "MR",
      "NE",
      "SN"
    ],
    "borders_iso3": [
      "DZA",
      "BFA",
      "GIN",
      "CIV",
      "MRT",
      "NER",
      "SEN"
    ]
  },
  {
    "name": "Malta",
    "iso2": "MT",
    "iso3": "MLT",
    "lat": 35.83333333,
    "lng": 14.58333333,
    "capital": "Valletta",
    "region": "Europe",
    "subregion": "Southern Europe",
    "emoji": "🇲🇹",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Man (Isle of)",
    "iso2": "IM",
    "iso3": "IMN",
    "lat": 54.25,
    "lng": -4.5,
    "capital": "Douglas, Isle of Man",
    "region": "Europe",
    "subregion": "Northern Europe",
    "emoji": "🇮🇲",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Marshall Islands",
    "iso2": "MH",
    "iso3": "MHL",
    "lat": 9.0,
    "lng": 168.0,
    "capital": "Majuro",
    "region": "Oceania",
    "subregion": "Micronesia",
    "emoji": "🇲🇭",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Martinique",
    "iso2": "MQ",
    "iso3": "MTQ",
    "lat": 14.666667,
    "lng": -61.0,
    "capital": "Fort-de-France",
    "region": "Americas",
    "subregion": "Caribbean",
    "emoji": "🇲🇶",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Mauritania",
    "iso2": "MR",
    "iso3": "MRT",
    "lat": 20.0,
    "lng": -12.0,
    "capital": "Nouakchott",
    "region": "Africa",
    "subregion": "Western Africa",
    "emoji": "🇲🇷",
    "aliases": [],
    "borders": [
      "DZ",
      "ML",
      "SN",
      "EH"
    ],
    "borders_iso3": [
      "DZA",
      "MLI",
      "SEN",
      "ESH"
    ]
  },
  {
    "name": "Mauritius",
    "iso2": "MU",
    "iso3": "MUS",
    "lat": -20.28333333,
    "lng": 57.55,
    "capital": "Port Louis",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "emoji": "🇲🇺",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Mayotte",
    "iso2": "YT",
    "iso3": "MYT",
    "lat": -12.83333333,
    "lng": 45.16666666,
    "capital": "Mamoudzou",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "emoji": "🇾🇹",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Mexico",
    "iso2": "MX",
    "iso3": "MEX",
    "lat": 23.0,
    "lng": -102.0,
    "capital": "Ciudad de México",
    "region": "Americas",
    "subregion": "Northern America",
    "emoji": "🇲🇽",
    "aliases": [],
    "borders": [
      "BZ",
      "GT",
      "US"
    ],
    "borders_iso3": [
      "BLZ",
      "GTM",
      "USA"
    ]
  },
  {
    "name": "Micronesia",
    "iso2": "FM",
    "iso3": "FSM",
    "lat": 6.91666666,
    "lng": 158.25,
    "capital": "Palikir",
    "region": "Oceania",
    "subregion": "Micronesia",
    "emoji": "🇫🇲",
    "aliases": [
      "Micronesia, Federated States of"
    ],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Moldova",
    "iso2": "MD",
    "iso3": "MDA",
    "lat": 47.0,
    "lng": 29.0,
    "capital": "Chisinau",
    "region": "Europe",
    "subregion": "Eastern Europe",
    "emoji": "🇲🇩",
    "aliases": [
      "Moldova, Republic of"
    ],
    "borders": [
      "RO",
      "UA"
    ],
    "borders_iso3": [
      "ROU",
      "UKR"
    ]
  },
  {
    "name": "Monaco",
    "iso2": "MC",
    "iso3": "MCO",
    "lat": 43.73333333,
    "lng": 7.4,
    "capital": "Monaco",
    "region": "Europe",
    "subregion": "Western Europe",
    "emoji": "🇲🇨",
    "aliases": [],
    "borders": [
      "FR"
    ],
    "borders_iso3": [
      "FRA"
    ]
  },
  {
    "name": "Mongolia",
    "iso2": "MN",
    "iso3": "MNG",
    "lat": 46.0,
    "lng": 105.0,
    "capital": "Ulan Bator",
    "region": "Asia",
    "subregion": "Eastern Asia",
    "emoji": "🇲🇳",
    "aliases": [],
    "borders": [
      "CN",
      "RU"
    ],
    "borders_iso3": [
      "CHN",
      "RUS"
    ]
  },
  {
    "name": "Montenegro",
    "iso2": "ME",
    "iso3": "MNE",
    "lat": 42.5,
    "lng": 19.3,
    "capital": "Podgorica",
    "region": "Europe",
    "subregion": "Southern Europe",
    "emoji": "🇲🇪",
    "aliases": [],
    "borders": [
      "AL",
      "BA",
      "HR",
      "XK",
      "RS"
    ],
    "borders_iso3": [
      "ALB",
      "BIH",
      "HRV",
      "UNK",
      "SRB"
    ]
  },
  {
    "name": "Montserrat",
    "iso2": "MS",
    "iso3": "MSR",
    "lat": 16.75,
    "lng": -62.2,
    "capital": "Plymouth",
    "region": "Americas",
    "subregion": "Caribbean",
    "emoji": "🇲🇸",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Morocco",
    "iso2": "MA",
    "iso3": "MAR",
    "lat": 32.0,
    "lng": -5.0,
    "capital": "Rabat",
    "region": "Africa",
    "subregion": "Northern Africa",
    "emoji": "🇲🇦",
    "aliases": [],
    "borders": [
      "DZ",
      "EH",
      "ES"
    ],
    "borders_iso3": [
      "DZA",
      "ESH",
      "ESP"
    ]
  },
  {
    "name": "Mozambique",
    "iso2": "MZ",
    "iso3": "MOZ",
    "lat": -18.25,
    "lng": 35.0,
    "capital": "Maputo",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "emoji": "🇲🇿",
    "aliases": [],
    "borders": [
      "MW",
      "ZA",
      "SZ",
      "TZ",
      "ZM",
      "ZW"
    ],
    "borders_iso3": [
      "MWI",
      "ZAF",
      "SWZ",
      "TZA",
      "ZMB",
      "ZWE"
    ]
  },
  {
    "name": "Myanmar",
    "iso2": "MM",
    "iso3": "MMR",
    "lat": 22.0,
    "lng": 98.0,
    "capital": "Nay Pyi Taw",
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "emoji": "🇲🇲",
    "aliases": [],
    "borders": [
      "BD",
      "CN",
      "IN",
      "LA",
      "TH"
    ],
    "borders_iso3": [
      "BGD",
      "CHN",
      "IND",
      "LAO",
      "THA"
    ]
  },
  {
    "name": "Namibia",
    "iso2": "NA",
    "iso3": "NAM",
    "lat": -22.0,
    "lng": 17.0,
    "capital": "Windhoek",
    "region": "Africa",
    "subregion": "Southern Africa",
    "emoji": "🇳🇦",
    "aliases": [],
    "borders": [
      "AO",
      "BW",
      "ZA",
      "ZM"
    ],
    "borders_iso3": [
      "AGO",
      "BWA",
      "ZAF",
      "ZMB"
    ]
  },
  {
    "name": "Nauru",
    "iso2": "NR",
    "iso3": "NRU",
    "lat": -0.53333333,
    "lng": 166.91666666,
    "capital": "Yaren",
    "region": "Oceania",
    "subregion": "Micronesia",
    "emoji": "🇳🇷",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Nepal",
    "iso2": "NP",
    "iso3": "NPL",
    "lat": 28.0,
    "lng": 84.0,
    "capital": "Kathmandu",
    "region": "Asia",
    "subregion": "Southern Asia",
    "emoji": "🇳🇵",
    "aliases": [],
    "borders": [
      "CN",
      "IN"
    ],
    "borders_iso3": [
      "CHN",
      "IND"
    ]
  },
  {
    "name": "Netherlands",
    "iso2": "NL",
    "iso3": "NLD",
    "lat": 52.5,
    "lng": 5.75,
    "capital": "Amsterdam",
    "region": "Europe",
    "subregion": "Western Europe",
    "emoji": "🇳🇱",
    "aliases": [],
    "borders": [
      "BE",
      "DE"
    ],
    "borders_iso3": [
      "BEL",
      "DEU"
    ]
  },
  {
    "name": "New Caledonia",
    "iso2": "NC",
    "iso3": "NCL",
    "lat": -21.5,
    "lng": 165.5,
    "capital": "Noumea",
    "region": "Oceania",
    "subregion": "Melanesia",
    "emoji": "🇳🇨",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "New Zealand",
    "iso2": "NZ",
    "iso3": "NZL",
    "lat": -41.0,
    "lng": 174.0,
    "capital": "Wellington",
    "region": "Oceania",
    "subregion": "Australia and New Zealand",
    "emoji": "🇳🇿",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Nicaragua",
    "iso2": "NI",
    "iso3": "NIC",
    "lat": 13.0,
    "lng": -85.0,
    "capital": "Managua",
    "region": "Americas",
    "subregion": "Central America",
    "emoji": "🇳🇮",
    "aliases": [],
    "borders": [
      "CR",
      "HN"
    ],
    "borders_iso3": [
      "CRI",
      "HND"
    ]
  },
  {
    "name": "Niger",
    "iso2": "NE",
    "iso3": "NER",
    "lat": 16.0,
    "lng": 8.0,
    "capital": "Niamey",
    "region": "Africa",
    "subregion": "Western Africa",
    "emoji": "🇳🇪",
    "aliases": [],
    "borders": [
      "DZ",
      "BJ",
      "BF",
      "TD",
      "LY",
      "ML",
      "NG"
    ],
    "borders_iso3": [
      "DZA",
      "BEN",
      "BFA",
      "TCD",
      "LBY",
      "MLI",
      "NGA"
    ]
  },
  {
    "name": "Nigeria",
    "iso2": "NG",
    "iso3": "NGA",
    "lat": 10.0,
    "lng": 8.0,
    "capital": "Abuja",
    "region": "Africa",
    "subregion": "Western Africa",
    "emoji": "🇳🇬",
    "aliases": [],
    "borders": [
      "BJ",
      "CM",
      "TD",
      "NE"
    ],
    "borders_iso3": [
      "BEN",
      "CMR",
      "TCD",
      "NER"
    ]
  },
  {
    "name": "Niue",
    "iso2": "NU",
    "iso3": "NIU",
    "lat": -19.03333333,
    "lng": -169.86666666,
    "capital": "Alofi",
    "region": "Oceania",
    "subregion": "Polynesia",
    "emoji": "🇳🇺",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Norfolk Island",
    "iso2": "NF",
    "iso3": "NFK",
    "lat": -29.03333333,
    "lng": 167.95,
    "capital": "Kingston",
    "region": "Oceania",
    "subregion": "Australia and New Zealand",
    "emoji": "🇳🇫",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "North Korea",
    "iso2": "KP",
    "iso3": "PRK",
    "lat": 40.0,
    "lng": 127.0,
    "capital": "Pyongyang",
    "region": "Asia",
    "subregion": "Eastern Asia",
    "emoji": "🇰🇵",
    "aliases": [
      "Korea, North",
      "Democratic People's Republic of Korea"
    ],
    "borders": [
      "CN",
      "KR",
      "RU"
    ],
    "borders_iso3": [
      "CHN",
      "KOR",
      "RUS"
    ]
  },
  {
    "name": "North Macedonia",
    "iso2": "MK",
    "iso3": "MKD",
    "lat": 41.83333333,
    "lng": 22.0,
    "capital": "Skopje",
    "region": "Europe",
    "subregion": "Southern Europe",
    "emoji": "🇲🇰",
    "aliases": [],
    "borders": [
      "AL",
      "BG",
      "GR",
      "XK",
      "RS"
    ],
    "borders_iso3": [
      "ALB",
      "BGR",
      "GRC",
      "UNK",
      "SRB"
    ]
  },
  {
    "name": "Northern Mariana Islands",
    "iso2": "MP",
    "iso3": "MNP",
    "lat": 15.2,
    "lng": 145.75,
    "capital": "Saipan",
    "region": "Oceania",
    "subregion": "Micronesia",
    "emoji": "🇲🇵",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Norway",
    "iso2": "NO",
    "iso3": "NOR",
    "lat": 62.0,
    "lng": 10.0,
    "capital": "Oslo",
    "region": "Europe",
    "subregion": "Northern Europe",
    "emoji": "🇳🇴",
    "aliases": [],
    "borders": [
      "FI",
      "SE",
      "RU"
    ],
    "borders_iso3": [
      "FIN",
      "SWE",
      "RUS"
    ]
  },
  {
    "name": "Oman",
    "iso2": "OM",
    "iso3": "OMN",
    "lat": 21.0,
    "lng": 57.0,
    "capital": "Muscat",
    "region": "Asia",
    "subregion": "Western Asia",
    "emoji": "🇴🇲",
    "aliases": [],
    "borders": [
      "SA",
      "AE",
      "YE"
    ],
    "borders_iso3": [
      "SAU",
      "ARE",
      "YEM"
    ]
  },
  {
    "name": "Pakistan",
    "iso2": "PK",
    "iso3": "PAK",
    "lat": 30.0,
    "lng": 70.0,
    "capital": "Islamabad",
    "region": "Asia",
    "subregion": "Southern Asia",
    "emoji": "🇵🇰",
    "aliases": [],
    "borders": [
      "AF",
      "CN",
      "IN",
      "IR"
    ],
    "borders_iso3": [
      "AFG",
      "CHN",
      "IND",
      "IRN"
    ]
  },
  {
    "name": "Palau",
    "iso2": "PW",
    "iso3": "PLW",
    "lat": 7.5,
    "lng": 134.5,
    "capital": "Melekeok",
    "region": "Oceania",
    "subregion": "Micronesia",
    "emoji": "🇵🇼",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Palestinian Territory Occupied",
    "iso2": "PS",
    "iso3": "PSE",
    "lat": 31.9,
    "lng": 35.2,
    "capital": "East Jerusalem",
    "region": "Asia",
    "subregion": "Western Asia",
    "emoji": "🇵🇸",
    "aliases": [],
    "borders": [
      "IL",
      "EG",
      "JO"
    ],
    "borders_iso3": [
      "ISR",
      "EGY",
      "JOR"
    ]
  },
  {
    "name": "Panama",
    "iso2": "PA",
    "iso3": "PAN",
    "lat": 9.0,
    "lng": -80.0,
    "capital": "Panama City",
    "region": "Americas",
    "subregion": "Central America",
    "emoji": "🇵🇦",
    "aliases": [],
    "borders": [
      "CO",
      "CR"
    ],
    "borders_iso3": [
      "COL",
      "CRI"
    ]
  },
  {
    "name": "Papua New Guinea",
    "iso2": "PG",
    "iso3": "PNG",
    "lat": -6.0,
    "lng": 147.0,
    "capital": "Port Moresby",
    "region": "Oceania",
    "subregion": "Melanesia",
    "emoji": "🇵🇬",
    "aliases": [],
    "borders": [
      "ID"
    ],
    "borders_iso3": [
      "IDN"
    ]
  },
  {
    "name": "Paraguay",
    "iso2": "PY",
    "iso3": "PRY",
    "lat": -23.0,
    "lng": -58.0,
    "capital": "Asunción",
    "region": "Americas",
    "subregion": "South America",
    "emoji": "🇵🇾",
    "aliases": [],
    "borders": [
      "AR",
      "BO",
      "BR"
    ],
    "borders_iso3": [
      "ARG",
      "BOL",
      "BRA"
    ]
  },
  {
    "name": "Peru",
    "iso2": "PE",
    "iso3": "PER",
    "lat": -10.0,
    "lng": -76.0,
    "capital": "Lima",
    "region": "Americas",
    "subregion": "South America",
    "emoji": "🇵🇪",
    "aliases": [],
    "borders": [
      "BO",
      "BR",
      "CL",
      "CO",
      "EC"
    ],
    "borders_iso3": [
      "BOL",
      "BRA",
      "CHL",
      "COL",
      "ECU"
    ]
  },
  {
    "name": "Philippines",
    "iso2": "PH",
    "iso3": "PHL",
    "lat": 13.0,
    "lng": 122.0,
    "capital": "Manila",
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "emoji": "🇵🇭",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Pitcairn Island",
    "iso2": "PN",
    "iso3": "PCN",
    "lat": -25.06666666,
    "lng": -130.1,
    "capital": "Adamstown",
    "region": "Oceania",
    "subregion": "Polynesia",
    "emoji": "🇵🇳",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Poland",
    "iso2": "PL",
    "iso3": "POL",
    "lat": 52.0,
    "lng": 20.0,
    "capital": "Warsaw",
    "region": "Europe",
    "subregion": "Eastern Europe",
    "emoji": "🇵🇱",
    "aliases": [],
    "borders": [
      "BY",
      "CZ",
      "DE",
      "LT",
      "RU",
      "SK",
      "UA"
    ],
    "borders_iso3": [
      "BLR",
      "CZE",
      "DEU",
      "LTU",
      "RUS",
      "SVK",
      "UKR"
    ]
  },
  {
    "name": "Portugal",
    "iso2": "PT",
    "iso3": "PRT",
    "lat": 39.5,
    "lng": -8.0,
    "capital": "Lisbon",
    "region": "Europe",
    "subregion": "Southern Europe",
    "emoji": "🇵🇹",
    "aliases": [],
    "borders": [
      "ES"
    ],
    "borders_iso3": [
      "ESP"
    ]
  },
  {
    "name": "Puerto Rico",
    "iso2": "PR",
    "iso3": "PRI",
    "lat": 18.25,
    "lng": -66.5,
    "capital": "San Juan",
    "region": "Americas",
    "subregion": "Caribbean",
    "emoji": "🇵🇷",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Qatar",
    "iso2": "QA",
    "iso3": "QAT",
    "lat": 25.5,
    "lng": 51.25,
    "capital": "Doha",
    "region": "Asia",
    "subregion": "Western Asia",
    "emoji": "🇶🇦",
    "aliases": [],
    "borders": [
      "SA"
    ],
    "borders_iso3": [
      "SAU"
    ]
  },
  {
    "name": "Reunion",
    "iso2": "RE",
    "iso3": "REU",
    "lat": -21.15,
    "lng": 55.5,
    "capital": "Saint-Denis",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "emoji": "🇷🇪",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Romania",
    "iso2": "RO",
    "iso3": "ROU",
    "lat": 46.0,
    "lng": 25.0,
    "capital": "Bucharest",
    "region": "Europe",
    "subregion": "Eastern Europe",
    "emoji": "🇷🇴",
    "aliases": [],
    "borders": [
      "BG",
      "HU",
      "MD",
      "RS",
      "UA"
    ],
    "borders_iso3": [
      "BGR",
      "HUN",
      "MDA",
      "SRB",
      "UKR"
    ]
  },
  {
    "name": "Russia",
    "iso2": "RU",
    "iso3": "RUS",
    "lat": 60.0,
    "lng": 100.0,
    "capital": "Moscow",
    "region": "Europe",
    "subregion": "Eastern Europe",
    "emoji": "🇷🇺",
    "aliases": [
      "Russian Federation"
    ],
    "borders": [
      "AZ",
      "BY",
      "CN",
      "EE",
      "FI",
      "GE",
      "KZ",
      "KP",
      "LV",
      "LT",
      "MN",
      "NO",
      "PL",
      "UA"
    ],
    "borders_iso3": [
      "AZE",
      "BLR",
      "CHN",
      "EST",
      "FIN",
      "GEO",
      "KAZ",
      "PRK",
      "LVA",
      "LTU",
      "MNG",
      "NOR",
      "POL",
      "UKR"
    ]
  },
  {
    "name": "Rwanda",
    "iso2": "RW",
    "iso3": "RWA",
    "lat": -2.0,
    "lng": 30.0,
    "capital": "Kigali",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "emoji": "🇷🇼",
    "aliases": [],
    "borders": [
      "BI",
      "CD",
      "TZ",
      "UG"
    ],
    "borders_iso3": [
      "BDI",
      "COD",
      "TZA",
      "UGA"
    ]
  },
  {
    "name": "Saint Helena",
    "iso2": "SH",
    "iso3": "SHN",
    "lat": -15.95,
    "lng": -5.7,
    "capital": "Jamestown",
    "region": "Africa",
    "subregion": "Western Africa",
    "emoji": "🇸🇭",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Saint Kitts and Nevis",
    "iso2": "KN",
    "iso3": "KNA",
    "lat": 17.33333333,
    "lng": -62.75,
    "capital": "Basseterre",
    "region": "Americas",
    "subregion": "Caribbean",
    "emoji": "🇰🇳",
    "aliases": [
      "St. Kitts and Nevis"
    ],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Saint Lucia",
    "iso2": "LC",
    "iso3": "LCA",
    "lat": 13.88333333,
    "lng": -60.96666666,
    "capital": "Castries",
    "region": "Americas",
    "subregion": "Caribbean",
    "emoji": "🇱🇨",
    "aliases": [
      "St. Lucia"
    ],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Saint Pierre and Miquelon",
    "iso2": "PM",
    "iso3": "SPM",
    "lat": 46.83333333,
    "lng": -56.33333333,
    "capital": "Saint-Pierre",
    "region": "Americas",
    "subregion": "Northern America",
    "emoji": "🇵🇲",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Saint Vincent and the Grenadines",
    "iso2": "VC",
    "iso3": "VCT",
    "lat": 13.25,
    "lng": -61.2,
    "capital": "Kingstown",
    "region": "Americas",
    "subregion": "Caribbean",
    "emoji": "🇻🇨",
    "aliases": [
      "St. Vincent and the Grenadines"
    ],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Saint-Barthelemy",
    "iso2": "BL",
    "iso3": "BLM",
    "lat": 18.5,
    "lng": -63.41666666,
    "capital": "Gustavia",
    "region": "Americas",
    "subregion": "Caribbean",
    "emoji": "🇧🇱",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Saint-Martin (French part)",
    "iso2": "MF",
    "iso3": "MAF",
    "lat": 18.08333333,
    "lng": -63.95,
    "capital": "Marigot",
    "region": "Americas",
    "subregion": "Caribbean",
    "emoji": "🇲🇫",
    "aliases": [],
    "borders": [
      "SX"
    ],
    "borders_iso3": [
      "SXM"
    ]
  },
  {
    "name": "Samoa",
    "iso2": "WS",
    "iso3": "WSM",
    "lat": -13.58333333,
    "lng": -172.33333333,
    "capital": "Apia",
    "region": "Oceania",
    "subregion": "Polynesia",
    "emoji": "🇼🇸",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "San Marino",
    "iso2": "SM",
    "iso3": "SMR",
    "lat": 43.76666666,
    "lng": 12.41666666,
    "capital": "San Marino",
    "region": "Europe",
    "subregion": "Southern Europe",
    "emoji": "🇸🇲",
    "aliases": [],
    "borders": [
      "IT"
    ],
    "borders_iso3": [
      "ITA"
    ]
  },
  {
    "name": "Sao Tome and Principe",
    "iso2": "ST",
    "iso3": "STP",
    "lat": 1.0,
    "lng": 7.0,
    "capital": "Sao Tome",
    "region": "Africa",
    "subregion": "Middle Africa",
    "emoji": "🇸🇹",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Saudi Arabia",
    "iso2": "SA",
    "iso3": "SAU",
    "lat": 25.0,
    "lng": 45.0,
    "capital": "Riyadh",
    "region": "Asia",
    "subregion": "Western Asia",
    "emoji": "🇸🇦",
    "aliases": [],
    "borders": [
      "IQ",
      "JO",
      "KW",
      "OM",
      "QA",
      "AE",
      "YE"
    ],
    "borders_iso3": [
      "IRQ",
      "JOR",
      "KWT",
      "OMN",
      "QAT",
      "ARE",
      "YEM"
    ]
  },
  {
    "name": "Senegal",
    "iso2": "SN",
    "iso3": "SEN",
    "lat": 14.0,
    "lng": -14.0,
    "capital": "Dakar",
    "region": "Africa",
    "subregion": "Western Africa",
    "emoji": "🇸🇳",
    "aliases": [],
    "borders": [
      "GM",
      "GN",
      "GW",
      "ML",
      "MR"
    ],
    "borders_iso3": [
      "GMB",
      "GIN",
      "GNB",
      "MLI",
      "MRT"
    ]
  },
  {
    "name": "Serbia",
    "iso2": "RS",
    "iso3": "SRB",
    "lat": 44.0,
    "lng": 21.0,
    "capital": "Belgrade",
    "region": "Europe",
    "subregion": "Southern Europe",
    "emoji": "🇷🇸",
    "aliases": [],
    "borders": [
      "BA",
      "BG",
      "HR",
      "HU",
      "XK",
      "MK",
      "ME",
      "RO"
    ],
    "borders_iso3": [
      "BIH",
      "BGR",
      "HRV",
      "HUN",
      "UNK",
      "MKD",
      "MNE",
      "ROU"
    ]
  },
  {
    "name": "Seychelles",
    "iso2": "SC",
    "iso3": "SYC",
    "lat": -4.6574977,
    "lng": 55.4540146,
    "capital": "Victoria",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "emoji": "🇸🇨",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Sierra Leone",
    "iso2": "SL",
    "iso3": "SLE",
    "lat": 8.5,
    "lng": -11.5,
    "capital": "Freetown",
    "region": "Africa",
    "subregion": "Western Africa",
    "emoji": "🇸🇱",
    "aliases": [],
    "borders": [
      "GN",
      "LR"
    ],
    "borders_iso3": [
      "GIN",
      "LBR"
    ]
  },
  {
    "name": "Singapore",
    "iso2": "SG",
    "iso3": "SGP",
    "lat": 1.36666666,
    "lng": 103.8,
    "capital": "Singapur",
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "emoji": "🇸🇬",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Sint Maarten (Dutch part)",
    "iso2": "SX",
    "iso3": "SXM",
    "lat": 18.033333,
    "lng": -63.05,
    "capital": "Philipsburg",
    "region": "Americas",
    "subregion": "Caribbean",
    "emoji": "🇸🇽",
    "aliases": [],
    "borders": [
      "MF"
    ],
    "borders_iso3": [
      "MAF"
    ]
  },
  {
    "name": "Slovakia",
    "iso2": "SK",
    "iso3": "SVK",
    "lat": 48.66666666,
    "lng": 19.5,
    "capital": "Bratislava",
    "region": "Europe",
    "subregion": "Eastern Europe",
    "emoji": "🇸🇰",
    "aliases": [],
    "borders": [
      "AT",
      "CZ",
      "HU",
      "PL",
      "UA"
    ],
    "borders_iso3": [
      "AUT",
      "CZE",
      "HUN",
      "POL",
      "UKR"
    ]
  },
  {
    "name": "Slovenia",
    "iso2": "SI",
    "iso3": "SVN",
    "lat": 46.11666666,
    "lng": 14.81666666,
    "capital": "Ljubljana",
    "region": "Europe",
    "subregion": "Southern Europe",
    "emoji": "🇸🇮",
    "aliases": [],
    "borders": [
      "AT",
      "HR",
      "IT",
      "HU"
    ],
    "borders_iso3": [
      "AUT",
      "HRV",
      "ITA",
      "HUN"
    ]
  },
  {
    "name": "Solomon Islands",
    "iso2": "SB",
    "iso3": "SLB",
    "lat": -8.0,
    "lng": 159.0,
    "capital": "Honiara",
    "region": "Oceania",
    "subregion": "Melanesia",
    "emoji": "🇸🇧",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Somalia",
    "iso2": "SO",
    "iso3": "SOM",
    "lat": 10.0,
    "lng": 49.0,
    "capital": "Mogadishu",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "emoji": "🇸🇴",
    "aliases": [],
    "borders": [
      "DJ",
      "ET",
      "KE"
    ],
    "borders_iso3": [
      "DJI",
      "ETH",
      "KEN"
    ]
  },
  {
    "name": "South Africa",
    "iso2": "ZA",
    "iso3": "ZAF",
    "lat": -29.0,
    "lng": 24.0,
    "capital": "Pretoria",
    "region": "Africa",
    "subregion": "Southern Africa",
    "emoji": "🇿🇦",
    "aliases": [],
    "borders": [
      "BW",
      "LS",
      "MZ",
      "NA",
      "SZ",
      "ZW"
    ],
    "borders_iso3": [
      "BWA",
      "LSO",
      "MOZ",
      "NAM",
      "SWZ",
      "ZWE"
    ]
  },
  {
    "name": "South Georgia",
    "iso2": "GS",
    "iso3": "SGS",
    "lat": -54.5,
    "lng": -37.0,
    "capital": "Grytviken",
    "region": "Americas",
    "subregion": "South America",
    "emoji": "🇬🇸",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "South Korea",
    "iso2": "KR",
    "iso3": "KOR",
    "lat": 37.0,
    "lng": 127.5,
    "capital": "Seoul",
    "region": "Asia",
    "subregion": "Eastern Asia",
    "emoji": "🇰🇷",
    "aliases": [
      "Korea, South",
      "Republic of Korea"
    ],
    "borders": [
      "KP"
    ],
    "borders_iso3": [
      "PRK"
    ]
  },
  {
    "name": "South Sudan",
    "iso2": "SS",
    "iso3": "SSD",
    "lat": 7.0,
    "lng": 30.0,
    "capital": "Juba",
    "region": "Africa",
    "subregion": "Middle Africa",
    "emoji": "🇸🇸",
    "aliases": [],
    "borders": [
      "CF",
      "CD",
      "ET",
      "KE",
      "SD",
      "UG"
    ],
    "borders_iso3": [
      "CAF",
      "COD",
      "ETH",
      "KEN",
      "SDN",
      "UGA"
    ]
  },
  {
    "name": "Spain",
    "iso2": "ES",
    "iso3": "ESP",
    "lat": 40.0,
    "lng": -4.0,
    "capital": "Madrid",
    "region": "Europe",
    "subregion": "Southern Europe",
    "emoji": "🇪🇸",
    "aliases": [],
    "borders": [
      "AD",
      "FR",
      "GI",
      "PT",
      "MA"
    ],
    "borders_iso3": [
      "AND",
      "FRA",
      "GIB",
      "PRT",
      "MAR"
    ]
  },
  {
    "name": "Sri Lanka",
    "iso2": "LK",
    "iso3": "LKA",
    "lat": 7.0,
    "lng": 81.0,
    "capital": "Colombo",
    "region": "Asia",
    "subregion": "Southern Asia",
    "emoji": "🇱🇰",
    "aliases": [],
    "borders": [
      "IN"
    ],
    "borders_iso3": [
      "IND"
    ]
  },
  {
    "name": "Sudan",
    "iso2": "SD",
    "iso3": "SDN",
    "lat": 15.0,
    "lng": 30.0,
    "capital": "Khartoum",
    "region": "Africa",
    "subregion": "Northern Africa",
    "emoji": "🇸🇩",
    "aliases": [],
    "borders": [
      "CF",
      "TD",
      "EG",
      "ER",
      "ET",
      "LY",
      "SS"
    ],
    "borders_iso3": [
      "CAF",
      "TCD",
      "EGY",
      "ERI",
      "ETH",
      "LBY",
      "SSD"
    ]
  },
  {
    "name": "Suriname",
    "iso2": "SR",
    "iso3": "SUR",
    "lat": 4.0,
    "lng": -56.0,
    "capital": "Paramaribo",
    "region": "Americas",
    "subregion": "South America",
    "emoji": "🇸🇷",
    "aliases": [],
    "borders": [
      "BR",
      "GF",
      "GY"
    ],
    "borders_iso3": [
      "BRA",
      "GUF",
      "GUY"
    ]
  },
  {
    "name": "Svalbard and Jan Mayen Islands",
    "iso2": "SJ",
    "iso3": "SJM",
    "lat": 78.0,
    "lng": 20.0,
    "capital": "Longyearbyen",
    "region": "Europe",
    "subregion": "Northern Europe",
    "emoji": "🇸🇯",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Sweden",
    "iso2": "SE",
    "iso3": "SWE",
    "lat": 62.0,
    "lng": 15.0,
    "capital": "Stockholm",
    "region": "Europe",
    "subregion": "Northern Europe",
    "emoji": "🇸🇪",
    "aliases": [],
    "borders": [
      "FI",
      "NO"
    ],
    "borders_iso3": [
      "FIN",
      "NOR"
    ]
  },
  {
    "name": "Switzerland",
    "iso2": "CH",
    "iso3": "CHE",
    "lat": 47.0,
    "lng": 8.0,
    "capital": "Bern",
    "region": "Europe",
    "subregion": "Western Europe",
    "emoji": "🇨🇭",
    "aliases": [],
    "borders": [
      "AT",
      "FR",
      "IT",
      "LI",
      "DE"
    ],
    "borders_iso3": [
      "AUT",
      "FRA",
      "ITA",
      "LIE",
      "DEU"
    ]
  },
  {
    "name": "Syria",
    "iso2": "SY",
    "iso3": "SYR",
    "lat": 35.0,
    "lng": 38.0,
    "capital": "Damascus",
    "region": "Asia",
    "subregion": "Western Asia",
    "emoji": "🇸🇾",
    "aliases": [
      "Syrian Arab Republic"
    ],
    "borders": [
      "IQ",
      "IL",
      "JO",
      "LB",
      "TR"
    ],
    "borders_iso3": [
      "IRQ",
      "ISR",
      "JOR",
      "LBN",
      "TUR"
    ]
  },
  {
    "name": "Taiwan",
    "iso2": "TW",
    "iso3": "TWN",
    "lat": 23.5,
    "lng": 121.0,
    "capital": "Taipei",
    "region": "Asia",
    "subregion": "Eastern Asia",
    "emoji": "🇹🇼",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Tajikistan",
    "iso2": "TJ",
    "iso3": "TJK",
    "lat": 39.0,
    "lng": 71.0,
    "capital": "Dushanbe",
    "region": "Asia",
    "subregion": "Central Asia",
    "emoji": "🇹🇯",
    "aliases": [],
    "borders": [
      "AF",
      "CN",
      "KG",
      "UZ"
    ],
    "borders_iso3": [
      "AFG",
      "CHN",
      "KGZ",
      "UZB"
    ]
  },
  {
    "name": "Tanzania",
    "iso2": "TZ",
    "iso3": "TZA",
    "lat": -6.0,
    "lng": 35.0,
    "capital": "Dodoma",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "emoji": "🇹🇿",
    "aliases": [
      "Tanzania, United Republic of"
    ],
    "borders": [
      "BI",
      "CD",
      "KE",
      "MW",
      "MZ",
      "RW",
      "UG",
      "ZM"
    ],
    "borders_iso3": [
      "BDI",
      "COD",
      "KEN",
      "MWI",
      "MOZ",
      "RWA",
      "UGA",
      "ZMB"
    ]
  },
  {
    "name": "Thailand",
    "iso2": "TH",
    "iso3": "THA",
    "lat": 15.0,
    "lng": 100.0,
    "capital": "Bangkok",
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "emoji": "🇹🇭",
    "aliases": [],
    "borders": [
      "MM",
      "KH",
      "LA",
      "MY"
    ],
    "borders_iso3": [
      "MMR",
      "KHM",
      "LAO",
      "MYS"
    ]
  },
  {
    "name": "The Bahamas",
    "iso2": "BS",
    "iso3": "BHS",
    "lat": 24.25,
    "lng": -76.0,
    "capital": "Nassau",
    "region": "Americas",
    "subregion": "Caribbean",
    "emoji": "🇧🇸",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "The Gambia",
    "iso2": "GM",
    "iso3": "GMB",
    "lat": 13.46666666,
    "lng": -16.56666666,
    "capital": "Banjul",
    "region": "Africa",
    "subregion": "Western Africa",
    "emoji": "🇬🇲",
    "aliases": [],
    "borders": [
      "SN"
    ],
    "borders_iso3": [
      "SEN"
    ]
  },
  {
    "name": "Timor-Leste",
    "iso2": "TL",
    "iso3": "TLS",
    "lat": -8.83333333,
    "lng": 125.91666666,
    "capital": "Dili",
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "emoji": "🇹🇱",
    "aliases": [
      "East Timor"
    ],
    "borders": [
      "ID"
    ],
    "borders_iso3": [
      "IDN"
    ]
  },
  {
    "name": "Togo",
    "iso2": "TG",
    "iso3": "TGO",
    "lat": 8.0,
    "lng": 1.16666666,
    "capital": "Lome",
    "region": "Africa",
    "subregion": "Western Africa",
    "emoji": "🇹🇬",
    "aliases": [],
    "borders": [
      "BJ",
      "BF",
      "GH"
    ],
    "borders_iso3": [
      "BEN",
      "BFA",
      "GHA"
    ]
  },
  {
    "name": "Tokelau",
    "iso2": "TK",
    "iso3": "TKL",
    "lat": -9.0,
    "lng": -172.0,
    "capital": "",
    "region": "Oceania",
    "subregion": "Polynesia",
    "emoji": "🇹🇰",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Tonga",
    "iso2": "TO",
    "iso3": "TON",
    "lat": -20.0,
    "lng": -175.0,
    "capital": "Nuku'alofa",
    "region": "Oceania",
    "subregion": "Polynesia",
    "emoji": "🇹🇴",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Trinidad and Tobago",
    "iso2": "TT",
    "iso3": "TTO",
    "lat": 11.0,
    "lng": -61.0,
    "capital": "Port of Spain",
    "region": "Americas",
    "subregion": "Caribbean",
    "emoji": "🇹🇹",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Tunisia",
    "iso2": "TN",
    "iso3": "TUN",
    "lat": 34.0,
    "lng": 9.0,
    "capital": "Tunis",
    "region": "Africa",
    "subregion": "Northern Africa",
    "emoji": "🇹🇳",
    "aliases": [],
    "borders": [
      "DZ",
      "LY"
    ],
    "borders_iso3": [
      "DZA",
      "LBY"
    ]
  },
  {
    "name": "Turkey",
    "iso2": "TR",
    "iso3": "TUR",
    "lat": 39.0,
    "lng": 35.0,
    "capital": "Ankara",
    "region": "Asia",
    "subregion": "Western Asia",
    "emoji": "🇹🇷",
    "aliases": [],
    "borders": [
      "AM",
      "AZ",
      "BG",
      "GE",
      "GR",
      "IR",
      "IQ",
      "SY"
    ],
    "borders_iso3": [
      "ARM",
      "AZE",
      "BGR",
      "GEO",
      "GRC",
      "IRN",
      "IRQ",
      "SYR"
    ]
  },
  {
    "name": "Turkmenistan",
    "iso2": "TM",
    "iso3": "TKM",
    "lat": 40.0,
    "lng": 60.0,
    "capital": "Ashgabat",
    "region": "Asia",
    "subregion": "Central Asia",
    "emoji": "🇹🇲",
    "aliases": [],
    "borders": [
      "AF",
      "IR",
      "KZ",
      "UZ"
    ],
    "borders_iso3": [
      "AFG",
      "IRN",
      "KAZ",
      "UZB"
    ]
  },
  {
    "name": "Turks and Caicos Islands",
    "iso2": "TC",
    "iso3": "TCA",
    "lat": 21.75,
    "lng": -71.58333333,
    "capital": "Cockburn Town",
    "region": "Americas",
    "subregion": "Caribbean",
    "emoji": "🇹🇨",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Tuvalu",
    "iso2": "TV",
    "iso3": "TUV",
    "lat": -8.0,
    "lng": 178.0,
    "capital": "Funafuti",
    "region": "Oceania",
    "subregion": "Polynesia",
    "emoji": "🇹🇻",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Uganda",
    "iso2": "UG",
    "iso3": "UGA",
    "lat": 1.0,
    "lng": 32.0,
    "capital": "Kampala",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "emoji": "🇺🇬",
    "aliases": [],
    "borders": [
      "CD",
      "KE",
      "RW",
      "SS",
      "TZ"
    ],
    "borders_iso3": [
      "COD",
      "KEN",
      "RWA",
      "SSD",
      "TZA"
    ]
  },
  {
    "name": "Ukraine",
    "iso2": "UA",
    "iso3": "UKR",
    "lat": 49.0,
    "lng": 32.0,
    "capital": "Kyiv",
    "region": "Europe",
    "subregion": "Eastern Europe",
    "emoji": "🇺🇦",
    "aliases": [],
    "borders": [
      "BY",
      "HU",
      "MD",
      "PL",
      "RO",
      "RU",
      "SK"
    ],
    "borders_iso3": [
      "BLR",
      "HUN",
      "MDA",
      "POL",
      "ROU",
      "RUS",
      "SVK"
    ]
  },
  {
    "name": "United Arab Emirates",
    "iso2": "AE",
    "iso3": "ARE",
    "lat": 24.0,
    "lng": 54.0,
    "capital": "Abu Dhabi",
    "region": "Asia",
    "subregion": "Western Asia",
    "emoji": "🇦🇪",
    "aliases": [
      "UAE"
    ],
    "borders": [
      "OM",
      "SA"
    ],
    "borders_iso3": [
      "OMN",
      "SAU"
    ]
  },
  {
    "name": "United Kingdom",
    "iso2": "GB",
    "iso3": "GBR",
    "lat": 54.0,
    "lng": -2.0,
    "capital": "London",
    "region": "Europe",
    "subregion": "Northern Europe",
    "emoji": "🇬🇧",
    "aliases": [
      "UK",
      "Britain",
      "Great Britain",
      "England"
    ],
    "borders": [
      "IE"
    ],
    "borders_iso3": [
      "IRL"
    ]
  },
  {
    "name": "United States",
    "iso2": "US",
    "iso3": "USA",
    "lat": 38.0,
    "lng": -97.0,
    "capital": "Washington",
    "region": "Americas",
    "subregion": "Northern America",
    "emoji": "🇺🇸",
    "aliases": [
      "USA",
      "US",
      "America",
      "United States of America"
    ],
    "borders": [
      "CA",
      "MX"
    ],
    "borders_iso3": [
      "CAN",
      "MEX"
    ]
  },
  {
    "name": "United States Minor Outlying Islands",
    "iso2": "UM",
    "iso3": "UMI",
    "lat": 0.0,
    "lng": 0.0,
    "capital": "",
    "region": "Americas",
    "subregion": "Northern America",
    "emoji": "🇺🇲",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Uruguay",
    "iso2": "UY",
    "iso3": "URY",
    "lat": -33.0,
    "lng": -56.0,
    "capital": "Montevideo",
    "region": "Americas",
    "subregion": "South America",
    "emoji": "🇺🇾",
    "aliases": [],
    "borders": [
      "AR",
      "BR"
    ],
    "borders_iso3": [
      "ARG",
      "BRA"
    ]
  },
  {
    "name": "Uzbekistan",
    "iso2": "UZ",
    "iso3": "UZB",
    "lat": 41.0,
    "lng": 64.0,
    "capital": "Tashkent",
    "region": "Asia",
    "subregion": "Central Asia",
    "emoji": "🇺🇿",
    "aliases": [],
    "borders": [
      "AF",
      "KZ",
      "KG",
      "TJ",
      "TM"
    ],
    "borders_iso3": [
      "AFG",
      "KAZ",
      "KGZ",
      "TJK",
      "TKM"
    ]
  },
  {
    "name": "Vanuatu",
    "iso2": "VU",
    "iso3": "VUT",
    "lat": -16.0,
    "lng": 167.0,
    "capital": "Port Vila",
    "region": "Oceania",
    "subregion": "Melanesia",
    "emoji": "🇻🇺",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Vatican City State (Holy See)",
    "iso2": "VA",
    "iso3": "VAT",
    "lat": 41.9,
    "lng": 12.45,
    "capital": "Vatican City",
    "region": "Europe",
    "subregion": "Southern Europe",
    "emoji": "🇻🇦",
    "aliases": [],
    "borders": [
      "IT"
    ],
    "borders_iso3": [
      "ITA"
    ]
  },
  {
    "name": "Venezuela",
    "iso2": "VE",
    "iso3": "VEN",
    "lat": 8.0,
    "lng": -66.0,
    "capital": "Caracas",
    "region": "Americas",
    "subregion": "South America",
    "emoji": "🇻🇪",
    "aliases": [
      "Venezuela, Bolivarian Republic of"
    ],
    "borders": [
      "BR",
      "CO",
      "GY"
    ],
    "borders_iso3": [
      "BRA",
      "COL",
      "GUY"
    ]
  },
  {
    "name": "Vietnam",
    "iso2": "VN",
    "iso3": "VNM",
    "lat": 16.16666666,
    "lng": 107.83333333,
    "capital": "Hanoi",
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "emoji": "🇻🇳",
    "aliases": [
      "Viet Nam"
    ],
    "borders": [
      "KH",
      "CN",
      "LA"
    ],
    "borders_iso3": [
      "KHM",
      "CHN",
      "LAO"
    ]
  },
  {
    "name": "Virgin Islands (British)",
    "iso2": "VG",
    "iso3": "VGB",
    "lat": 18.431383,
    "lng": -64.62305,
    "capital": "Road Town",
    "region": "Americas",
    "subregion": "Caribbean",
    "emoji": "🇻🇬",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Virgin Islands (US)",
    "iso2": "VI",
    "iso3": "VIR",
    "lat": 18.34,
    "lng": -64.93,
    "capital": "Charlotte Amalie",
    "region": "Americas",
    "subregion": "Caribbean",
    "emoji": "🇻🇮",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Wallis and Futuna Islands",
    "iso2": "WF",
    "iso3": "WLF",
    "lat": -13.3,
    "lng": -176.2,
    "capital": "Mata Utu",
    "region": "Oceania",
    "subregion": "Polynesia",
    "emoji": "🇼🇫",
    "aliases": [],
    "borders": [],
    "borders_iso3": []
  },
  {
    "name": "Western Sahara",
    "iso2": "EH",
    "iso3": "ESH",
    "lat": 24.5,
    "lng": -13.0,
    "capital": "El-Aaiun",
    "region": "Africa",
    "subregion": "Northern Africa",
    "emoji": "🇪🇭",
    "aliases": [],
    "borders": [
      "DZ",
      "MR",
      "MA"
    ],
    "borders_iso3": [
      "DZA",
      "MRT",
      "MAR"
    ]
  },
  {
    "name": "Yemen",
    "iso2": "YE",
    "iso3": "YEM",
    "lat": 15.0,
    "lng": 48.0,
    "capital": "Sanaa",
    "region": "Asia",
    "subregion": "Western Asia",
    "emoji": "🇾🇪",
    "aliases": [],
    "borders": [
      "OM",
      "SA"
    ],
    "borders_iso3": [
      "OMN",
      "SAU"
    ]
  },
  {
    "name": "Zambia",
    "iso2": "ZM",
    "iso3": "ZMB",
    "lat": -15.0,
    "lng": 30.0,
    "capital": "Lusaka",
    "region": "Africa",
    "subregion": "Southern Africa",
    "emoji": "🇿🇲",
    "aliases": [],
    "borders": [
      "AO",
      "BW",
      "CD",
      "MW",
      "MZ",
      "NA",
      "TZ",
      "ZW"
    ],
    "borders_iso3": [
      "AGO",
      "BWA",
      "COD",
      "MWI",
      "MOZ",
      "NAM",
      "TZA",
      "ZWE"
    ]
  },
  {
    "name": "Zimbabwe",
    "iso2": "ZW",
    "iso3": "ZWE",
    "lat": -20.0,
    "lng": 30.0,
    "capital": "Harare",
    "region": "Africa",
    "subregion": "Eastern Africa",
    "emoji": "🇿🇼",
    "aliases": [],
    "borders": [
      "BW",
      "MZ",
      "ZA",
      "ZM"
    ],
    "borders_iso3": [
      "BWA",
      "MOZ",
      "ZAF",
      "ZMB"
    ]
  }
];

if (typeof window !== 'undefined') {
  window.WORLD_COUNTRIES = WORLD_COUNTRIES;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = WORLD_COUNTRIES;
}
