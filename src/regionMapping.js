const regionMapping = {
    "Afghanistan": "APAC",         // India, Middle East, Africa, and Russia
    "Albania": "EUR",               // Europe
    "Algeria": "IMEAR",             // India, Middle East, Africa, and Russia
    "Andorra": "EUR",               // Europe
    "Angola": "None",              // India, Middle East, Africa, and Russia
    "Antigua and Barbuda": "LAM",   // Latin America
    "Argentina": "LAM",             // Latin America
    "Armenia": "EUR",               // Europe
    "Australia": "APAC",            // Asia-Pacific
    "Austria": "EUR",               // Europe
    "Azerbaijan": "EUR",            // Europe
    "Bahamas": "NAM",               // North America
    "Bahrain": "IMEAR",             // India, Middle East, Africa, and Russia
    "Bangladesh": "APAC",           // Asia-Pacific
    "Barbados": "LAM",              // Latin America
    "Belarus": "EUR",               // Europe
    "Belgium": "EUR",               // Europe
    "Belize": "LAM",                // Latin America
    "Benin": "IMEAR",               // India, Middle East, Africa, and Russia
    "Bhutan": "APAC",               // Asia-Pacific
    "Bolivia": "LAM",               // Latin America
    "Bosnia and Herzegovina": "None",// Europe
    "Botswana": "IMEAR",            // India, Middle East, Africa, and Russia
    "Brazil": "LAM",                // Latin America
    "Brunei": "APAC",               // Asia-Pacific
    "Bulgaria": "EUR",              // Europe
    "Burkina Faso": "IMEAR",        // India, Middle East, Africa, and Russia
    "Burundi": "IMEAR",             // India, Middle East, Africa, and Russia
    "Cabo Verde": "IMEAR",          // India, Middle East, Africa, and Russia
    "Cambodia": "APAC",             // Asia-Pacific
    "Cameroon": "IMEAR",            // India, Middle East, Africa, and Russia
    "Canada": "NAM",                // North America
    "Central African Republic": "None", // India, Middle East, Africa, and Russia
    "Chad": "IMEAR",                // India, Middle East, Africa, and Russia
    "Chile": "LAM",                 // Latin America
    "China": "APAC",                // Asia-Pacific
    "Colombia": "LAM",              // Latin America
    "Comoros": "IMEAR",             // India, Middle East, Africa, and Russia
    "Democratic Republic of the Congo": "None", // India, Middle East, Africa, and Russia
    "Costa Rica": "LAM",            // Latin America
    "Croatia": "EUR",               // Europe
    "Cuba": "LAM",                  // Latin America
    "Cyprus": "EUR",                // Europe
    "Czech Republic": "None", // Europe
    "Denmark": "EUR",               // Europe
    "Djibouti": "IMEAR",            // India, Middle East, Africa, and Russia
    "Dominica": "LAM",              // Latin America
    "Dominican Republic": "LAM",    // Latin America
    "Ecuador": "LAM",               // Latin America
    "Egypt": "IMEAR",               // India, Middle East, Africa, and Russia
    "El Salvador": "LAM",           // Latin America
    "Equatorial Guinea": "IMEAR",   // India, Middle East, Africa, and Russia
    "Eritrea": "IMEAR",             // India, Middle East, Africa, and Russia
    "Estonia": "EUR",               // Europe
    "Eswatini (fmr. 'Swaziland')": "IMEAR", // India, Middle East, Africa, and Russia
    "Ethiopia": "IMEAR",            // India, Middle East, Africa, and Russia
    "Fiji": "APAC",                 // Asia-Pacific
    "Finland": "EUR",               // Europe
    "France": "FRA",                // Europe
    "Gabon": "IMEAR",               // India, Middle East, Africa, and Russia
    "Gambia": "IMEAR",              // India, Middle East, Africa, and Russia
    "Georgia": "EUR",               // Europe
    "Germany": "EUR",               // Europe
    "Ghana": "IMEAR",               // India, Middle East, Africa, and Russia
    "Greece": "EUR",                // Europe
    "Grenada": "LAM",               // Latin America
    "Greenland":"EUR",              //Europe
    "Guatemala": "LAM",             // Latin America
    "Guinea": "IMEAR",              // India, Middle East, Africa, and Russia
    "Guinea Bissau": "None",       // India, Middle East, Africa, and Russia
    "Guyana": "LAM",                // Latin America
    "Haiti": "LAM",                 // Latin America
    "Honduras": "LAM",              // Latin America
    "Hungary": "EUR",               // Europe
    "Iceland": "EUR",               // Europe
    "India": "APAC",               // India, Middle East, Africa, and Russia
    "Indonesia": "APAC",            // Asia-Pacific
    "Iran": "None",                // India, Middle East, Africa, and Russia
    "Iraq": "IMEAR",                // India, Middle East, Africa, and Russia
    "Ireland": "EUR",               // Europe
    "Israel": "IMEAR",              // India, Middle East, Africa, and Russia
    "Italy": "EUR",                 // Europe
    "Ivory Coast":"None",
    "Jamaica": "LAM",               // Latin America
    "Japan": "APAC",                // Asia-Pacific
    "Jordan": "IMEAR",              // India, Middle East, Africa, and Russia
    "Kazakhstan": "APAC",          // India, Middle East, Africa, and Russia
    "Kenya": "IMEAR",               // India, Middle East, Africa, and Russia
    "Kiribati": "APAC",             // Asia-Pacific
    "Kosovo":"EUR",
    "Kuwait": "IMEAR",              // India, Middle East, Africa, and Russia
    "Kyrgyzstan": "APAC",          // India, Middle East, Africa, and Russia
    "Laos": "None",                 // Asia-Pacific
    "Latvia": "EUR",                // Europe
    "Lebanon": "IMEAR",             // India, Middle East, Africa, and Russia
    "Lesotho": "IMEAR",             // India, Middle East, Africa, and Russia
    "Liberia": "IMEAR",             // India, Middle East, Africa, and Russia
    "Libya": "IMEAR",               // India, Middle East, Africa, and Russia
    "Liechtenstein": "EUR",         // Europe
    "Lithuania": "EUR",             // Europe
    "Luxembourg": "EUR",            // Europe
    "Madagascar": "IMEAR",          // India, Middle East, Africa, and Russia
    "Malawi": "IMEAR",              // India, Middle East, Africa, and Russia
    "Malaysia": "APAC",             // Asia-Pacific
    "Maldives": "APAC",             // Asia-Pacific
    "Myanmar":"APAC",
    "Mali": "IMEAR",                // India, Middle East, Africa, and Russia
    "Malta": "EUR",                 // Europe
    "Marshall Islands": "APAC",     // Asia-Pacific
    "Mauritania": "IMEAR",          // India, Middle East, Africa, and Russia
    "Mauritius": "IMEAR",           // India, Middle East, Africa, and Russia
    "Mexico": "LAM",                // Latin America
    "Micronesia": "APAC",           // Asia-Pacific
    "Moldova": "None",               // Europe
    "Monaco": "EUR",                // Europe
    "Mongolia": "APAC",             // Asia-Pacific
    "Montenegro": "EUR",            // Europe
    "Morocco": "IMEAR",             // India, Middle East, Africa, and Russia
    "Mozambique": "IMEAR",          // India, Middle East, Africa, and Russia
    "Myanmar (formerly Burma)": "APAC", // Asia-Pacific
    "Namibia": "IMEAR",             // India, Middle East, Africa, and Russia
    "Nauru": "APAC",    "Nepal": "APAC",                // Asia-Pacific
    "Netherlands": "EUR",           // Europe
    "New Zealand": "APAC",          // Asia-Pacific
    "Nicaragua": "LAM",             // Latin America
    "Niger": "IMEAR",               // India, Middle East, Africa, and Russia
    "Nigeria": "IMEAR",             // India, Middle East, Africa, and Russia
    "North Korea": "None",          // Asia-Pacific
    "Macedonia": "None",       // Europe
    "Norway": "EUR",                // Europe
    "Oman": "IMEAR",                // India, Middle East, Africa, and Russia
    "Pakistan": "APAC",            // India, Middle East, Africa, and Russia
    "Palau": "APAC",                // Asia-Pacific
    "Palestine State": "IMEAR",     // India, Middle East, Africa, and Russia
    "Panama": "LAM",                // Latin America
    "Papua New Guinea": "APAC",     // Asia-Pacific
    "Paraguay": "LAM",              // Latin America
    "Peru": "LAM",                  // Latin America
    "Philippines": "APAC",          // Asia-Pacific
    "Poland": "EUR",                // Europe
    "Portugal": "EUR",              // Europe
    "Qatar": "IMEAR",               // India, Middle East, Africa, and Russia
    "Republic of the Congo":"IMEAR",
    "Romania": "EUR",               // Europe
    "Russia": "IMEAR",              // India, Middle East, Africa, and Russia
    "Rwanda": "IMEAR",              // India, Middle East, Africa, and Russia
    "Saint Kitts & Nevis": "LAM",   // Latin America
    "Saint Lucia": "LAM",           // Latin America
    "Saint Vincent & Grenadines": "LAM", // Latin America
    "Samoa": "APAC",                // Asia-Pacific
    "San Marino": "EUR",            // Europe
    "Sao Tome & Principe": "IMEAR", // India, Middle East, Africa, and Russia
    "Saudi Arabia": "IMEAR",        // India, Middle East, Africa, and Russia
    "Senegal": "IMEAR",             // India, Middle East, Africa, and Russia
    "Republic of Serbia": "EUR",                // Europe
    "Seychelles": "IMEAR",          // India, Middle East, Africa, and Russia
    "Sierra Leone": "IMEAR",        // India, Middle East, Africa, and Russia
    "Singapore": "APAC",            // Asia-Pacific
    "Slovakia": "EUR",              // Europe
    "Slovenia": "EUR",              // Europe
    "Solomon Islands": "APAC",      // Asia-Pacific,
    "Somaliland":"IMEAR",
    "Somalia": "IMEAR",             // India, Middle East, Africa, and Russia
    "South Africa": "IMEAR",        // India, Middle East, Africa, and Russia
    "South Korea": "None",          // Asia-Pacific
    "South Sudan": "None",         // India, Middle East, Africa, and Russia
    "Spain": "EUR",                 // Europe
    "Sri Lanka": "APAC",            // Asia-Pacific
    "Sudan": "IMEAR",               // India, Middle East, Africa, and Russia
    "Suriname": "LAM",              // Latin America
    "Sweden": "EUR",                // Europe
    "Switzerland": "EUR",           // Europe
    "Syria": "None",               // India, Middle East, Africa, and Russia
    "Tajikistan": "APAC",          // India, Middle East, Africa, and Russia
    "Taiwan":"APAC",
    "United Republic of Tanzania": "None",            // India, Middle East, Africa, and Russia
    "Thailand": "APAC",             // Asia-Pacific
    "Timor-Leste": "APAC",          // Asia-Pacific
    "Togo": "IMEAR",                // India, Middle East, Africa, and Russia
    "Tonga": "APAC",                // Asia-Pacific
    "Trinidad and Tobago": "LAM",   // Latin America
    "Tunisia": "IMEAR",             // India, Middle East, Africa, and Russia
    "Turkey": "IMEAR",              // India, Middle East, Africa, and Russia
    "Turkmenistan": "APAC",        // India, Middle East, Africa, and Russia
    "Tuvalu": "APAC",               // Asia-Pacific
    "Uganda": "IMEAR",              // India, Middle East, Africa, and Russia
    "Ukraine": "EUR",               // Europe
    "United Arab Emirates": "IMEAR",// India, Middle East, Africa, and Russia
    "England": "EUR",        // Europe
    "USA": "NAM",         // North America
    "Uruguay": "LAM",               // Latin America
    "Uzbekistan": "APAC",          // India, Middle East, Africa, and Russia
    "Vanuatu": "APAC",              // Asia-Pacific
    "Vatican City": "EUR",          // Europe
    "Venezuela": "LAM",             // Latin America
    "Vietnam": "APAC",              // Asia-Pacific
    "Western Sahara":"IMEAR",
    "Yemen": "IMEAR",               // India, Middle East, Africa, and Russia
    "Zambia": "IMEAR",              // India, Middle East, Africa, and Russia
    "Zimbabwe": "IMEAR"             // India, Middle East, Africa, and Russia
  };
  export default regionMapping;
  