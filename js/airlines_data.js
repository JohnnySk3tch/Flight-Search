function search_airline(namepart){
    var result = [];
    for( var i = 0, len = airlines.length; i < len; i++ ) {
        if( airlines[i][1].startsWith(namepart)) {
            result.push(airlines[i]);
        }
    }
    return result;
  }

  
function airline_details(iata){
    for( var i = 0, len = airlines.length; i < len; i++ ) {
        if( airlines[i][3] == iata) {
            return airlines[i];
        }
    }
}

var airlines = [["1", "Private flight", "\N", "-", "N/A", ""],

["3", "1Time Airline", "\N", "1T", "RNX", "South Africa"],

["10", "40-Mile Air", "\N", "Q5", "MLA", "United States"],

["13", "Ansett Australia", "\N", "AN", "AAA", "Australia"],

["14", "Abacus International", "\N", "1B", "", "Singapore"],

["21", "Aigle Azur", "\N", "ZI", "AAF", "France"],

["22", "Aloha Airlines", "\N", "AQ", "AAH", "United States"],

["24", "American Airlines", "\N", "AA", "AAL", "United States"],

["28", "Asiana Airlines", "\N", "OZ", "AAR", "Republic of Korea"],

["29", "Askari Aviation", "\N", "4K", "AAS", "Pakistan"],

["32", "Afriqiyah Airways", "\N", "8U", "AAW", "Libya"],

["35", "Allegiant Air", "\N", "G4", "AAY", "United States"],

["42", "ABSA - Aerolinhas Brasileiras", "\N", "M3", "TUS", "Brazil"],

["55", "Astral Aviation", "\N", "8V", "ACP", "Kenya"],

["68", "Air Tindi", "\N", "8T", "", "Canadian Territories"],

["72", "Ada Air", "\N", "ZY", "ADE", "Albania"],

["83", "Adria Airways", "\N", "JP", "ADR", "Slovenia"],

["90", "Air Europa", "\N", "UX", "AEA", "Spain"],

["93", "Aero Benin", "\N", "EM", "AEB", "Benin"],

["96", "Aegean Airlines", "\N", "A3", "AEE", "Greece"],

["106", "Air Europe", "\N", "PE", "AEL", "Italy"],

["109", "Alaska Central Express", "\N", "KO", "AER", "United States"],

["110", "ACES Colombia", "\N", "", "AES", "Colombia"],

["112", "Astraeus", "\N", "5W", "AEU", "United Kingdom"],

["114", "Aerosvit Airlines", "\N", "VV", "AEW", "Ukraine"],

["116", "Air Italy", "\N", "I9", "AEY", "Italy"],

["120", "Alliance Airlines", "\N", "QQ", "UTY", "Australia"],

["125", "Ariana Afghan Airlines", "\N", "FG", "AFG", "Afghanistan"],

["130", "Aeroflot Russian Airlines", "\N", "SU", "AFL", "Russia"],

["132", "Air Bosna", "\N", "JA", "BON", "Bosnia and Herzegovina"],

["137", "Air France", "\N", "AF", "AFR", "France"],

["139", "Air Caledonie International", "\N", "SB", "ACI", "France"],

["146", "Air Salone", "\N", "2O", "", "Sierra Leone"],

["149", "Air Cargo Carriers", "\N", "2Q", "SNC", "United States"],

["153", "Air Namibia", "\N", "SW", "NMB", "Namibia"],

["165", "Aerolitoral", "\N", "5D", "SLI", "Mexico"],

["174", "Air Glaciers", "\N", "7T", "AGV", "Switzerland"],

["176", "Aviogenex", "\N", "", "AGX", "Serbia"],

["179", "Aeroper", "\N", "PL", "PLI", "Peru"],

["180", "Atlas Blue", "\N", "8A", "BMM", "Morocco"],

["197", "Azerbaijan Airlines", "\N", "J2", "AHY", "Azerbaijan"],

["198", "Avies", "\N", "U3", "AIA", "Estonia"],

["208", "Airblue", "\N", "ED", "ABQ", "Pakistan"],

["210", "Airlift International", "\N", "", "AIR", "United States"],

["214", "Air Berlin", "\N", "AB", "BER", "Germany"],

["218", "Air India Limited", "\N", "AI", "AIC", "India"],

["220", "Air Bourbon", "\N", "ZB", "BUB", "Reunion"],

["221", "Air Atlanta Icelandic", "\N", "CC", "ABD", "Iceland"],

["225", "Air Tahiti Nui", "\N", "TN", "THT", "France"],

["231", "Arkia Israel Airlines", "\N", "IZ", "AIZ", "Israel"],

["239", "Air Jamaica", "\N", "JM", "AJM", "Jamaica"],

["240", "Air One", "\N", "AP", "ADH", "Italy"],

["241", "Air Sahara", "\N", "S2", "RSH", "India"],

["242", "Air Malta", "\N", "KM", "AMC", "Malta"],

["250", "Air Japan", "\N", "NQ", "AJX", "Japan"],

["252", "Air Korea Co. Ltd.", "\N", "", "AKA", "Republic of Korea"],

["263", "Air Kiribati", "\N", "4A", "AKL", "Kiribati"],

["281", "America West Airlines", "\N", "HP", "AWE", "United States"],

["282", "Air Wisconsin", "\N", "ZW", "AWI", "United States"],

["286", "Tatarstan Airlines", "\N", "U9", "TAK", "Russia"],

["287", "Allegheny Commuter Airlines", "\N", "", "ALO", "United States"],

["295", "Air Sunshine", "\N", "", "RSI", "United States"],

["299", "Air Libert", "\N", "VD", "", "France"],

["306", "Air Malawi", "\N", "QM", "AML", "Malawi"],

["312", "Air Sicilia", "\N", "BM", "", "Italy"],

["315", "ATA Airlines", "\N", "", "AMT", "United States"],

["316", "Air Macau", "\N", "NX", "AMU", "Macao"],

["317", "AMC Airlines", "\N", "", "AMV", "Egypt"],

["319", "Air Seychelles", "\N", "HM", "SEY", "Seychelles"],

["321", "AeroM�xico", "\N", "AM", "AMX", "Mexico"],

["324", "All Nippon Airways", "ANA All Nippon Airways", "NH", "ANA", "Japan"],

["327", "Air Nostrum", "\N", "YW", "ANE", "Spain"],

["328", "Air Niugini", "\N", "PX", "ANG", "Papua New Guinea"],

["329", "Air Arabia", "\N", "G9", "ABY", "United Arab Emirates"],

["330", "Air Canada", "\N", "AC", "ACA", "Canada"],

["333", "Air Baltic", "\N", "BT", "BTI", "Latvia"],

["336", "Air Nippon", "\N", "EL", "ANK", "Japan"],

["338", "Airnorth", "\N", "TL", "ANO", "Australia"],

["341", "Air North Charter - Canada", "\N", "4N", "ANT", "Canada"],

["345", "Air New Zealand", "\N", "NZ", "ANZ", "New Zealand"],

["371", "Alitalia Express", "\N", "XM", "SMX", "Italy"],

["386", "Aero Flight", "\N", "GV", "ARF", "Germany"],

["397", "Arrow Air", "\N", "JW", "APW", "United States"],

["410", "Aerocondor", "\N", "2B", "ARD", "Portugal"],

["411", "Aires", "\N", "4C", "ARE", " S.A."],

["412", "Aerolineas Argentinas", "\N", "AR", "ARG", "Argentina"],

["439", "Alaska Airlines", "\N", "AS", "ASA", "ALASKA"],

["442", "Air Sinai", "\N", "4D", "ASD", "Egypt"],

["452", "Atlantic Southeast Airlines", "\N", "EV", "ASQ", "United States"],

["462", "Astrakhan Airlines", "\N", "OB", "ASZ", "Russia"],

["465", "Air Tanzania", "\N", "TC", "ATC", "Tanzania"],

["470", "Air Burkina", "\N", "2J", "VBW", "Burkina Faso"],

["476", "Airlines Of Tasmania", "\N", "FO", "ATM", "Australia"],

["477", "Air Saint Pierre", "\N", "PJ", "SPM", "France"],

["491", "Austrian Airlines", "\N", "OS", "AUA", "Austria"],

["492", "Air Southwest", "\N", "", "WOW", "United Kingdom"],

["493", "Augsburg Airways", "\N", "IQ", "AUB", "Germany"],

["497", "ATUR", "\N", "", "TUR", "Ecuador"],

["502", "Abu Dhabi Amiri Flight", "\N", "MO", "AUH", "United Arab Emirates"],

["503", "Aeroflot-Nord", "\N", "5N", "AUL", "Russia"],

["508", "Aurigny Air Services", "\N", "GR", "AUR", "United Kingdom"],

["510", "Austral Lineas Aereas", "\N", "AU", "AUT", "Argentina"],

["515", "Avianca - Aerovias Nacionales de Colombia", "\N", "AV", "AVA", "AVIANCA"],

["524", "Air Vanuatu", "\N", "NF", "AVN", "Vanuatu"],

["543", "Air Bangladesh", "\N", "B9", "BGD", "Bangladesh"],

["547", "Air Mediterranee", "\N", "DR", "BIE", "France"],

["551", "Air Moorea", "\N", "", "TAH", "France"],

["563", "Aeroline GmbH", "\N", "7E", "AWU", "Germany"],

["565", "Air Wales", "\N", "6G", "AWW", "United Kingdom"],

["567", "Air Cara�bes", "\N", "TX", "FWI", "France"],

["569", "Air India Express", "\N", "IX", "AXB", "India"],

["575", "Air Exel", "\N", "XT", "AXL", "Netherlands"],

["576", "AirAsia", "Air Asia", "AK", "AXM", "Malaysia"],

["595", "Atlant-Soyuz Airlines", "\N", "3G", "AYZ", "Russia"],

["596", "Alitalia", "\N", "AZ", "AZA", "Italy"],

["603", "Amaszonas", "\N", "Z8", "AZN", "Bolivia"],

["608", "Air Zimbabwe", "\N", "UM", "AZW", "Zimbabwe"],

["622", "Aserca Airlines", "\N", "R7", "OCA", "Venezuela"],

["641", "Rossiya-Russian Airlines", "Pulkovo Aviation Enterprise", "FV", "SDM", "Russia"],

["659", "American Eagle Airlines", "\N", "MQ", "EGF", "United States"],

["665", "AD Aviation", "\N", "", "VUE", "United Kingdom"],

["682", "Air Ivoire", "\N", "VU", "VUN", "Ivory Coast"],

["683", "Air Botswana", "\N", "BP", "BOT", "Botswana"],

["690", "Air Foyle", "\N", "GS", "UPA", "United Kingdom"],

["692", "Air Tahiti", "\N", "VT", "VTA", "French Polynesia"],

["695", "Air VIA", "\N", "VL", "VIM", "Bulgaria"],

["715", "Africa West", "\N", "FK", "WTA", "Togo"],

["724", "ATRAN Cargo Airlines", "\N", "V8", "VAS", "Russian Federation"],

["751", "Air China", "\N", "CA", "CCA", "China"],

["753", "Aero Condor Peru", "\N", "Q6", "CDP", "Peru"],

["787", "Air Chathams", "\N", "CV", "CVA", "New Zealand"],

["788", "Air Marshall Islands", "\N", "CW", "CWM", "Marshall Islands"],

["792", "Access Air", "\N", "ZA", "CYD", "United States"],

["794", "Air Algerie", "\N", "AH", "DAH", "Algeria"],

["800", "Adam Air", "\N", "KI", "DHI", "Indonesia"],

["807", "Air Dolomiti", "\N", "EN", "DLA", "Italy"],

["816", "Aeroflot-Don", "\N", "D9", "DNV", "Russia"],

["817", "Air Madrid", "\N", "NM", "DRD", "Spain"],

["837", "Aer Lingus", "\N", "EI", "EIN", "Ireland"],

["876", "Air Finland", "\N", "OF", "FIF", "Finland"],

["878", "Airfix Aviation", "\N", "", "FIX", "Finland"],

["879", "Air Pacific", "\N", "FJ", "FJI", "Fiji"],

["881", "Atlantic Airways", "\N", "RC", "FLI", "Faroe Islands"],

["882", "Air Florida", "\N", "QH", "FLZ", "United States"],

["896", "Air Iceland", "\N", "NY", "FXI", "Iceland"],

["897", "Air Philippines", "\N", "2P", "GAP", "Philippines"],

["909", "Air Guinee Express", "\N", "2U", "GIP", "Guinea"],

["921", "Air Greenland", "\N", "GL", "GRL", "Denmark"],

["928", "Atlas Air", "\N", "5Y", "GTI", "United States"],

["931", "Air Guyane", "\N", "GG", "GUY", "French Guiana"],

["970", "Air Bagan", "\N", "W9", "JAB", "Myanmar"],

["983", "Air Canada Jazz", "\N", "QK", "JZA", "Canada"],

["995", "Atlasjet", "\N", "KK", "KKK", "Turkey"],

["998", "Air Koryo", "\N", "JS", "KOR", "Democratic People's Republic of Korea"],

["1006", "Air Astana", "\N", "KC", "KZR", "Kazakhstan"],

["1008", "Albanian Airlines", "\N", "LV", "LBC", "Albania"],

["1017", "Air Alfa", "\N", "", "LFA", "Turkey"],

["1034", "Aerolane", "\N", "XL", "LNE", "Ecuador"],

["1048", "Atlantis European Airways", "\N", "TD", "LUR", "Armenia"],

["1052", "Air Luxor", "\N", "LK", "LXR", "Portugal"],

["1057", "Air Mauritius", "\N", "MK", "MAU", "Mauritius"],

["1066", "Air Madagascar", "\N", "MD", "MDG", "Madagascar"],

["1073", "Air Moldova", "\N", "9U", "MLD", "Moldova"],

["1087", "Air Plus Comet", "\N", "A7", "MPD", "Spain"],

["1109", "Astair", "\N", "8D", "", "Russian Federation"],

["1116", "Aero Contractors", "\N", "AJ", "NIG", "Nigeria"],

["1143", "Aeropelican Air Services", "\N", "OT", "PEL", "Australia"],

["1188", "Aer Arann", "\N", "RE", "REA", "Ireland"],

["1191", "Air Austral", "\N", "UU", "REU", "France"],

["1200", "Asian Spirit", "\N", "6K", "RIT", "Philippines"],

["1202", "Air Afrique", "\N", "RK", "RKA", "Ivory Coast"],

["1203", "Airlinair", "\N", "A5", "RLA", "France"],

["1206", "Aero Lanka", "\N", "QL", "RLN", "Sri Lanka"],

["1213", "Air Salone", "\N", "20", "RNE", "Sierra Leone"],

["1216", "Armavia", "\N", "U8", "RNV", "Armenia"],

["1224", "AeroRep", "\N", "P5", "RPB", "Colombia"],

["1230", "Aero-Service", "\N", "BF", "RSR", "Republic of the Congo"],

["1231", "Aerosur", "\N", "5L", "RSU", "Bolivia"],

["1232", "Aeronorte", "\N", "", "RTE", "Portugal"],

["1266", "Avient Aviation", "\N", "Z3", "SMJ", "Zimbabwe"],

["1287", "Aircompany Yakutia", "\N", "R3", "SYL", "Russia"],

["1290", "Aeromar", "\N", "VW", "TAO", "Mexico"],

["1299", "Arkefly", "\N", "OR", "TFL", "Netherlands"],

["1308", "Airlines PNG", "\N", "CG", "TOK", "Papua New Guinea"],

["1316", "AirTran Airways", "\N", "FL", "TRS", "United States"],

["1317", "Air Transat", "\N", "TS", "TSC", "Canada"],

["1322", "Avialeasing Aviation Company", "\N", "EC", "TWN", "Uzbekistan"],

["1326", "Tyrolean Airways", "\N", "VO", "TYR", "Austria"],

["1338", "Aerolineas Galapagos (Aerogal)", "\N", "2K", "GLG", "Ecuador"],

["1340", "Alrosa Mirny Air Enterprise", "\N", "6R", "DRU", "Russia"],

["1355", "British Airways", "\N", "BA", "BAW", "United Kingdom"],

["1359", "Biman Bangladesh Airlines", "\N", "BG", "BBC", "Bangladesh"],

["1401", "Belair Airlines", "\N", "4T", "BHP", "Switzerland"],

["1403", "Bahamasair", "\N", "UP", "BHS", "Bahamas"],

["1406", "Balkan Bulgarian Airlines", "\N", "LZ", "", ""],

["1411", "British International Helicopters", "\N", "BS", "BIH", "United Kingdom"],

["1420", "BF-Lento OY", "\N", "", "BKF", "Finland"],

["1422", "Bangkok Airways", "\N", "PG", "BKP", "Thailand"],

["1427", "Blue1", "\N", "KF", "BLF", "Finland"],

["1431", "Baltic Airlines", "\N", "", "BLL", "Russia"],

["1434", "Bearskin Lake Air Service", "\N", "JV", "BLS", "Canada"],

["1436", "Bellview Airlines", "\N", "B3", "BLV", "Nigeria"],

["1437", "bmi", "bmi British Midland", "BD", "BMA", "United Kingdom"],

["1441", "bmibaby", "\N", "WW", "BMI", "United Kingdom"],

["1442", "Bemidji Airlines", "\N", "CH", "BMJ", "United States"],

["1445", "British Midland Regional", "\N", "", "BMR", "United Kingdom"],

["1463", "Blue Panorama Airlines", "\N", "BV", "BPA", "Italy"],

["1466", "Budapest Aircraft Services/Manx2", "\N", "", "BPS", "Hungary"],

["1472", "Bering Air", "\N", "8E", "BRG", "United States"],

["1476", "Brazilian Air Force", "\N", "", "BRS", "Brazil"],

["1478", "Belavia Belarusian Airlines", "\N", "B2", "BRU", "Belarus"],

["1500", "Metro Batavia", "\N", "7P", "BTV", "Indonesia"],

["1508", "Berjaya Air", "\N", "J8", "BVT", "Malaysia"],

["1510", "Blue Wings", "\N", "QW", "BWG", "Germany"],

["1523", "Brit Air", "\N", "DB", "BZH", "France"],

["1531", "Brussels Airlines", "SN Brussels Airlines", "SN", "DAT", "Belgium"],

["1539", "Binter Canarias", "\N", "NT", "IBB", "Spain"],

["1542", "Blue Air", "\N", "0B", "JOR", "Romania"],

["1543", "British Mediterranean Airways", "\N", "KJ", "LAJ", "United Kingdom"],

["1548", "Bulgaria Air", "\N", "FB", "LZB", "Bulgaria"],

["1550", "Barents AirLink", "\N", "8N", "NKF", "Sweden"],

["1581", "CAL Cargo Air Lines", "\N", "5C", "ICL", "Israel"],

["1607", "Calima Aviacion", "\N", "XG", "CLI", "Spain"],

["1615", "Canadian Airlines", "\N", "CP", "CDN", "Canada"],

["1623", "Canadian North", "\N", "5T", "MPE", "Canada"],

["1629", "Cape Air", "\N", "9K", "KAP", "United States"],

["1663", "Caribbean Airlines", "\N", "BW", "BWA", "Trinidad and Tobago"],

["1669", "Carpatair", "\N", "V3", "KRP", "Romania"],

["1675", "Caspian Airlines", "\N", "RV", "CPN", "Iran"],

["1680", "Cathay Pacific", "\N", "CX", "CPA", "Hong Kong SAR of China"],

["1682", "Cayman Airways", "\N", "KX", "CAY", "Cayman Islands"],

["1683", "Cebu Pacific", "\N", "5J", "CEB", "Philippines"],

["1700", "Central Connect Airlines", "\N", "", "CCG", "Czech Republic"],

["1708", "Centralwings", "\N", "C0", "CLW", "Poland"],

["1737", "Charter Air", "\N", "", "CHW", "Austria"],

["1739", "Chautauqua Airlines", "\N", "RP", "CHQ", "United States"],

["1756", "China Airlines", "\N", "CI", "CAL", "Taiwan"],

["1758", "China Eastern Airlines", "\N", "MU", "CES", "China"],

["1767", "China Southern Airlines", "\N", "CZ", "CSN", "China"],

["1769", "China United Airlines", "\N", "HR", "CUA", "China"],

["1771", "Yunnan Airlines", "\N", "3Q", "CYH", "China"],

["1781", "Cimber Air", "\N", "QI", "CIM", "Denmark"],

["1784", "Cirrus Airlines", "\N", "C9", "RUS", "Germany"],

["1789", "City Airline", "\N", "CF", "SDR", "Sweden"],

["1790", "City Connexion Airlines", "\N", "G3", "CIX", "Burundi"],

["1792", "CityJet", "\N", "WX", "BCY", "Ireland"],

["1795", "BA CityFlyer", "\N", "CJ", "CFE", "United Kingdom"],

["1808", "Click Airways", "\N", "", "CGK", "Kyrgyzstan"],

["1814", "Coastal Air", "\N", "DQ", "", "United States"],

["1821", "Colgan Air", "\N", "9L", "CJC", "United States"],

["1828", "Comair", "\N", "OH", "COM", "United States"],

["1829", "Comair", "\N", "MN", "CAW", "South Africa"],

["1843", "CommutAir", "\N", "C5", "UCA", "United States"],

["1844", "Comores Airlines", "\N", "KR", "CWK", "Comoros"],

["1860", "Compass Airlines", "\N", "CP", "CPZ", "United States"],

["1868", "Condor Flugdienst", "\N", "DE", "CFG", "Germany"],

["1876", "Consorcio Aviaxsa", "\N", "6A", "CHP", "Mexico"],

["1879", "Contact Air", "Contactair", "C3", "KIS", "Germany"],

["1881", "Continental Airlines", "\N", "CO", "COA", "United States"],

["1883", "Continental Express", "\N", "CO", "", "United States"],

["1884", "Continental Micronesia", "\N", "CS", "CMI", "United States"],

["1886", "Conviasa", "\N", "V0", "VCV", "Venezuela"],

["1889", "Copa Airlines", "\N", "CM", "CMP", "Panama"],

["1892", "Copterline", "\N", "", "AAQ", "Finland"],

["1894", "Corendon Airlines", "\N", "", "CAI", "Turkey"],

["1908", "Corsairfly", "\N", "SS", "CRL", "France"],

["1909", "Corse-Mediterranee", "\N", "XK", "CCM", "France"],

["1923", "Crest Aviation", "\N", "", "CAN", "United Kingdom"],

["1925", "Croatia Airlines", "\N", "OU", "CTN", "Croatia"],

["1931", "Crown Airways", "\N", "", "CRO", "United States"],

["1936", "Cubana de Aviaci�n", "\N", "CU", "CUB", "Cuba"],

["1942", "Cyprus Airways", "\N", "CY", "CYP", "Cyprus"],

["1943", "Cyprus Turkish Airlines", "\N", "YK", "", "Turkey"],

["1946", "Czech Airlines", "CSA Czech Airlines", "OK", "CSA", "Czech Republic"],

["1954", "DAT Danish Air Transport", "\N", "DX", "DTR", "Denmark"],

["1966", "Daallo Airlines", "\N", "D3", "DAO", "Djibouti"],

["1973", "Dalavia", "\N", "H8", "KHB", "Russia"],

["1983", "Darwin Airline", "\N", "0D", "DWT", "Switzerland"],

["2006", "Delta Aerotaxi", "\N", "", "DEA", "Italy"],

["2009", "Delta Air Lines", "\N", "DL", "DAL", "United States"],

["2013", "Denim Air", "\N", "", "DNM", "Netherlands"],

["2021", "Deutsche Bahn", "\N", "2A", "", "Germany"],

["2041", "Djibouti Airlines", "\N", "D8", "DJB", "Djibouti"],

["2042", "Dniproavia", "\N", "", "UDN", "Ukraine"],

["2047", "Dominicana de Aviaci", "\N", "DO", "DOA", "Dominican Republic"],

["2048", "Domodedovo Airlines", "\N", "E3", "DMO", "Russia"],

["2051", "DonbassAero", "\N", "5D", "UDC", "Ukraine"],

["2056", "Dragonair", "\N", "KA", "HDA", "DRAGON"],

["2058", "Druk Air", "\N", "KB", "DRK", "Bhutan"],

["2061", "Dubrovnik Air", "\N", "", "DBK", "Croatia"],

["2070", "Dutch Antilles Express", "\N", "", "DNL", "Netherlands Antilles"],

["2077", "dba", "\N", "DI", "BAG", "Germany"],

["2091", "EVA Air", "\N", "BR", "EVA", "Taiwan"],

["2094", "Eagle Air", "\N", "H7", "", "Uganda"],

["2104", "East African", "\N", "QU", "UGX", "Uganda"],

["2117", "Eastern Airways", "\N", "T3", "EZE", "United Kingdom"],

["2125", "Eastland Air", "\N", "DK", "ELA", "Australia"],

["2137", "Ecuavia", "\N", "", "ECU", "Ecuador"],

["2138", "Edelweiss Air", "\N", "WK", "EDW", "Switzerland"],

["2143", "Egyptair", "\N", "MS", "MSR", "Egypt"],

["2150", "El Al Israel Airlines", "\N", "LY", "ELY", "Israel"],

["2155", "El-Buraq Air Transport", "\N", "UZ", "BRQ", "Libya"],

["2183", "Emirates", "Emirates Airlines", "EK", "UAE", "United Arab Emirates"],

["2193", "Empresa Ecuatoriana De Aviacion", "\N", "EU", "EEA", "Ecuador"],

["2213", "Eritrean Airlines", "\N", "B8", "ERT", "Eritrea"],

["2218", "Estonian Air", "\N", "OV", "ELL", "Estonia"],

["2220", "Ethiopian Airlines", "\N", "ET", "ETH", "Ethiopia"],

["2222", "Etihad Airways", "\N", "EY", "ETD", "United Arab Emirates"],

["2226", "Euro Exec Express", "\N", "RZ", "", "Sweden"],

["2237", "Eurocypria Airlines", "\N", "UI", "ECA", "Cyprus"],

["2239", "Eurofly Service", "\N", "GJ", "EEU", "Italy"],

["2245", "Eurolot", "\N", "K2", "ELO", "Poland"],

["2251", "European Air Express", "\N", "EA", "EAL", "Germany"],

["2260", "Eurowings", "\N", "EW", "EWG", "Germany"],

["2261", "Evergreen International Airlines", "\N", "EZ", "EIA", "United States"],

["2264", "Excel Airways", "\N", "JN", "XLA", "United Kingdom"],

["2265", "Excel Charter", "\N", "", "XEL", "United Kingdom"],

["2293", "Express One International", "\N", "EO", "LHN", "United States"],

["2295", "ExpressJet", "\N", "XE", "BTA", "United States"],

["2297", "easyJet", "EasyJet Airline", "U2", "EZY", "United Kingdom"],

["2324", "Far Eastern Air Transport", "\N", "EF", "EFA", "Taiwan"],

["2350", "Finnair", "\N", "AY", "FIN", "Finland"],

["2351", "Finncomm Airlines", "\N", "FC", "WBA", "Finland"],

["2353", "Firefly", "\N", "FY", "FFM", "Malaysia"],

["2354", "First Air", "\N", "7F", "FAB", "Canada"],

["2357", "First Choice Airways", "\N", "DP", "FCA", "United Kingdom"],

["2395", "Flightline", "\N", "B5", "FLT", "United Kingdom"],

["2404", "Florida West International Airways", "\N", "RF", "FWL", "United States"],

["2417", "AirAsia X", "FlyAsianXpress", "D7", "XAX", "Malaysia"],

["2418", "FlyLal", "\N", "TE", "LIL", "Lithuania"],

["2419", "FlyNordic", "\N", "LF", "NDC", "Sweden"],

["2420", "Flybaboo", "\N", "F7", "BBO", "Switzerland"],

["2421", "Flybe", "\N", "BE", "BEE", "United Kingdom"],

["2425", "Flyglobespan", "\N", "B4", "GSM", "United Kingdom"],

["2429", "Flyhy Cargo Airlines", "\N", "", "FYH", "Thailand"],

["2439", "Formosa Airlines", "\N", "VY", "FOS", "Taiwan"],

["2454", "Freedom Air", "\N", "FP", "FRE", "United States"],

["2456", "Freedom Airlines", "\N", "", "FRL", "United States"],

["2468", "Frontier Airlines", "\N", "F9", "FFT", "United States"],

["2470", "Frontier Flying Service", "\N", "2F", "FTA", "United States"],

["2486", "GB Airways", "\N", "GT", "GBL", "United Kingdom"],

["2520", "Garuda Indonesia", "\N", "GA", "GIA", "Indonesia"],

["2524", "Gazpromavia", "\N", "4G", "GZP", "Russia"],

["2538", "Georgian Airways", "\N", "A9", "TGZ", "Georgia"],

["2541", "Georgian National Airlines", "\N", "QB", "GFG", "Georgia"],

["2547", "Germania", "\N", "ST", "GMI", "Germany"],

["2548", "Germanwings", "\N", "4U", "GWI", "Germany"],

["2556", "Ghana International Airlines", "\N", "G0", "GHB", "Ghana"],

["2575", "Go Air", "\N", "G8", "GOW", "India"],

["2577", "GoJet Airlines", "\N", "G7", "GJS", "United States"],

["2581", "Gol Transportes A�reos", "\N", "G3", "GLO", "Brazil"],

["2585", "Golden Air", "\N", "DC", "GAO", "Sweden"],

["2607", "Great Lakes Airlines", "\N", "ZK", "GLA", "United States"],

["2622", "Grupo TACA", "TACA", "TA", "TAT", "Costa Rica"],

["2637", "Gulf Air", "\N", "", "GFA", "Oman"],

["2638", "Gulf Air Bahrain", "\N", "GF", "GBA", "Bahrain"],

["2645", "Gulfstream International Airlines", "\N", "", "GFT", "United States"],

["2657", "Hageland Aviation Services", "\N", "H6", "HAG", "United States"],

["2660", "Hainan Airlines", "\N", "HU", "CHH", "China"],

["2663", "Haiti Ambassador Airlines", "\N", "2T", "HAM", "Haiti"],

["2674", "Hamburg International", "\N", "4R", "HHI", "Germany"],

["2681", "TUIfly", "\N", "X3", "HLX", "Germany"],

["2682", "Hapagfly", "\N", "HF", "HLF", "Germany"],

["2688", "Hawaiian Airlines", "\N", "HA", "HAL", "United States"],

["2692", "Hawkair", "\N", "BH", "", "Canada"],

["2704", "Heli France", "\N", "8H", "HFR", "France"],

["2731", "Helijet", "\N", "JB", "JBA", "Canada"],

["2747", "Hellas Jet", "\N", "T4", "HEJ", "Greece"],

["2748", "Hello", "\N", "HW", "FHE", "Switzerland"],

["2750", "Helvetic Airways", "\N", "2L", "OAW", "Switzerland"],

["2757", "Hex'Air", "\N", "UD", "HER", "France"],

["2761", "Highland Airways", "\N", "", "HWY", "United Kingdom"],

["2765", "Hokkaido International Airlines", "\N", "HD", "ADO", "Japan"],

["2773", "Hong Kong Airlines", "\N", "HX", "CRK", "Hong Kong SAR of China"],

["2774", "Hong Kong Express Airways", "\N", "UO", "HKE", "Hong Kong SAR of China"],

["2778", "Horizon Air", "Horizon Airlines", "QX", "QXE", "United States"],

["2782", "Horizon Airlines", "\N", "BN", "HZA", "Australia"],

["2822", "Iberia Airlines", "\N", "IB", "IBE", "Spain"],

["2825", "Iberworld", "\N", "TY", "IWD", "Spain"],

["2826", "Ibex Airlines", "\N", "FW", "IBX", "Japan"],

["2829", "Icar Air", "\N", "", "RAC", "Bosnia and Herzegovina"],

["2835", "Icelandair", "\N", "FI", "ICE", "Iceland"],

["2845", "Imair Airlines", "\N", "IK", "ITX", "Azerbaijan"],

["2850", "IndiGo Airlines", "\N", "6E", "IGO", "India"],

["2853", "Indian Airlines", "\N", "IC", "IAC", "India"],

["2855", "Indigo", "\N", "I9", "IBU", "United States"],

["2857", "Indonesia AirAsia", "\N", "QZ", "AWQ", "Indonesia"],

["2858", "Indonesian Airlines", "\N", "IO", "IAA", "Indonesia"],

["2881", "Interair South Africa", "\N", "D6", "ILN", "South Africa"],

["2883", "Interavia Airlines", "\N", "ZA", "SUW", "Russia"],

["2896", "Interlink Airlines", "\N", "ID", "ITK", "South Africa"],

["2916", "Intersky", "\N", "3L", "ISK", "Austria"],

["2922", "Iran Air", "\N", "IR", "IRA", "Iran"],

["2923", "Iran Aseman Airlines", "\N", "EP", "IRC", "Iran"],

["2926", "Iraqi Airways", "\N", "IA", "IAW", "Iraq"],

["2937", "Island Airlines", "\N", "IS", "", "United States"],

["2942", "Cargo Plus Aviation", "\N", "8L", "CGP", "United Arab Emirates"],

["2948", "Islas Airways", "\N", "IF", "ISW", "Spain"],

["2950", "Islena De Inversiones", "\N", "WC", "ISV", "Honduras"],

["2954", "Israir", "\N", "6H", "ISR", "Israel"],

["2958", "Itek Air", "\N", "GI", "IKA", "Kyrgyzstan"],

["2969", "JAL Express", "\N", "JC", "JEX", "Japan"],

["2970", "JALways", "\N", "JO", "JAZ", "Japan"],

["2987", "Japan Airlines", "JAL Japan Airlines", "JL", "JAL", "Japan"],

["2988", "Japan Airlines Domestic", "\N", "JL", "JAL", "Japan"],

["2989", "Japan Asia Airways", "\N", "EG", "JAA", "Japan"],

["2990", "Japan Transocean Air", "\N", "NU", "JTA", "Japan"],

["2993", "Jazeera Airways", "\N", "J9", "JZR", "Kuwait"],

["2994", "Jeju Air", "\N", "7C", "JJA", "Republic of Korea"],

["3000", "Jet Airways", "\N", "9W", "JAI", "India"],

["3001", "Jet Airways", "\N", "QJ", "", "United States"],

["3021", "Jetstar Asia Airways", "\N", "3K", "JSA", "Singapore"],

["3026", "Jet2.com", "\N", "LS", "EXS", "United Kingdom"],

["3027", "Jet4You", "", "8J", "JFU", "Morocco"],

["3029", "JetBlue Airways", "\N", "B6", "JBU", "United States"],

["3032", "Jetairfly", "\N", "JF", "JAF", "Belgium"],

["3039", "Jetflite", "\N", "", "JEF", "Finland"],

["3052", "Jetstar Airways", "\N", "JQ", "JST", "Australia"],

["3081", "Juneyao Airlines", "\N", "HO", "DKH", "China"],

["3087", "KD Avia", "\N", "KD", "KNI", "Russia"],

["3088", "KLM Cityhopper", "\N", "WA", "KLC", "Netherlands"],

["3090", "KLM Royal Dutch Airlines", "\N", "KL", "KLM", "Netherlands"],

["3097", "Kam Air", "\N", "RQ", "KMF", "Afghanistan"],

["3110", "Kavminvodyavia", "\N", "KV", "MVD", "Russia"],

["3122", "Kendell Airlines", "\N", "", "KDA", "Australia"],

["3123", "Kenmore Air", "\N", "M5", "KEN", "United States"],

["3126", "Kenya Airways", "\N", "KQ", "KQA", "Kenya"],

["3142", "Kingfisher Airlines", "\N", "IT", "KFR", "India"],

["3148", "Kish Air", "\N", "Y9", "IRK", "Iran"],

["3157", "Kogalymavia Air Company", "\N", "7K", "KGL", "Russia"],

["3163", "Korean Air", "\N", "KE", "KAL", "Republic of Korea"],

["3165", "Kosmos", "\N", "", "KSM", "Russia"],

["3168", "Krasnojarsky Airlines", "\N", "7B", "KJC", "Russia"],

["3175", "Kuban Airlines", "\N", "GW", "KIL", "Russia"],

["3179", "Kuwait Airways", "\N", "KU", "KAC", "Kuwait"],

["3180", "Kuzu Airlines Cargo", "\N", "GO", "KZU", "Turkey"],

["3197", "LACSA", "\N", "LR", "LRC", "Costa Rica"],

["3200", "LAN Airlines", "\N", "LA", "LAN", "Chile"],

["3201", "LAN Argentina", "\N", "4M", "DSM", "Argentina"],

["3204", "LAN Express", "\N", "LU", "LXP", "Chile"],

["3205", "LAN Peru", "\N", "LP", "LPE", "Peru"],

["3210", "LOT Polish Airlines", "\N", "LO", "LOT", "Poland"],

["3211", "LTE International Airways", "\N", "XO", "LTE", "Spain"],

["3212", "LTU Austria", "\N", "L3", "LTO", "Austria"],

["3233", "Lao Airlines", "\N", "QV", "LAO", "Lao Peoples Democratic Republic"],

["3237", "LatCharter", "\N", "", "LTC", "Latvia"],

["3239", "Lauda Air", "\N", "NG", "LDA", "Austria"],

["3251", "Leeward Islands Air Transport", "\N", "LI", "LIA", "Antigua and Barbuda"],

["3258", "Libyan Arab Airlines", "\N", "LN", "LAA", "Libya"],

["3287", "Linhas A", "\N", "LM", "LAM", "Mozambique"],

["3290", "Lion Mentari Airlines", "\N", "JT", "LNI", "Indonesia"],

["3319", "Luftfahrtgesellschaft Walter", "\N", "HE", "LGW", "Germany"],

["3320", "Lufthansa", "\N", "LH", "DLH", "Germany"],

["3321", "Lufthansa Cargo", "\N", "LH", "GEC", "Germany"],

["3322", "Lufthansa CityLine", "\N", "CL", "CLH", "Germany"],

["3326", "Lufttransport", "\N", "L5", "LTR", "Norway"],

["3329", "Luxair", "\N", "LG", "LGL", "Luxembourg"],

["3342", "L", "\N", "MJ", "LPR", "Argentina"],

["3349", "MasAir", "\N", "M7", "MAA", "Mexico"],

["3350", "MAT Macedonian Airlines", "\N", "IN", "MAK", "Macedonia"],

["3354", "MIAT Mongolian Airlines", "\N", "OM", "MGL", "Mongolia"],

["3357", "MNG Airlines", "\N", "MB", "MNB", "Turkey"],

["3363", "Macair Airlines", "\N", "CC", "MCK", "Australia"],

["3366", "Maersk", "\N", "DM", "", "Denmark"],

["3370", "Mahan Air", "\N", "W5", "IRM", "Iran"],

["3378", "Malaysia Airlines", "\N", "MH", "MAS", "Malaysia"],

["3384", "Malmo Aviation", "\N", "", "SCW", "Sweden"],

["3386", "Malm� Aviation", "\N", "TF", "SCW", "Sweden"],

["3387", "Malta Air Charter", "\N", "R5", "MAC", "Malta"],

["3389", "Mal�v", "\N", "MA", "MAH", "Hungary"],

["3391", "Mandala Airlines", "\N", "RI", "MDL", "Indonesia"],

["3392", "Mandarin Airlines", "\N", "AE", "MDA", "Taiwan"],

["3393", "Mango", "\N", "JE", "MNO", "South Africa"],

["3411", "Martinair", "\N", "MP", "MPH", "Netherlands"],

["3432", "Maxair", "\N", "8M", "MXL", "Sweden"],

["3437", "Maya Island Air", "\N", "MW", "MYD", "Belize"],

["3463", "Meridiana", "\N", "IG", "ISS", "Italy"],

["3465", "Merpati Nusantara Airlines", "\N", "MZ", "MNA", "Indonesia"],

["3466", "Mesa Airlines", "\N", "YV", "ASH", "United States"],

["3467", "Mesaba Airlines", "\N", "XJ", "MES", "United States"],

["3479", "Mexicana de Aviaci", "\N", "MX", "MXA", "Mexico"],

["3490", "Middle East Airlines", "\N", "ME", "MEA", "Lebanon"],

["3494", "Midway Airlines", "\N", "JI", "MDW", "United States"],

["3497", "Midwest Airlines", "\N", "YX", "MEP", "United States"],

["3498", "Midwest Airlines (Egypt)", "\N", "MY", "MWA", "Egypt"],

["3529", "Moldavian Airlines", "\N", "2M", "MDV", "Moldova"],

["3532", "Monarch Airlines", "\N", "ZB", "MON", "United Kingdom"],

["3534", "Myway Airlines", "\N", "8I", "", "Italy"],

["3539", "Montenegro Airlines", "\N", "YM", "MGX", "Montenegro"],

["3542", "Morningstar Air Express", "\N", "", "MAL", "Canada"],

["3545", "Moskovia Airlines", "\N", "3R", "GAI", "Russia"],

["3547", "Motor Sich", "\N", "M9", "MSI", "Ukraine"],

["3568", "MyTravel Airways", "\N", "VZ", "MYT", "United Kingdom"],

["3569", "Myanma Airways", "\N", "UB", "UBA", "Myanmar"],

["3570", "Myanmar Airways International", "\N", "8M", "MMM", "Myanmar"],

["3571", "Myflug", "\N", "", "MYA", "Iceland"],

["3589", "Nasair", "\N", "UE", "NAS", "Eritrea"],

["3608", "National Jet Systems", "\N", "NC", "NJS", "Australia"],

["3613", "Nationwide Airlines", "\N", "CE", "NTW", "South Africa"],

["3618", "Nauru Air Corporation", "\N", "ON", "RON", "Nauru"],

["3637", "Nepal Airlines", "\N", "RA", "RNA", "Nepal"],

["3641", "NetJets", "\N", "1I", "EJA", "United States"],

["3644", "New England Airlines", "\N", "EJ", "NEA", "United States"],

["3652", "NextJet", "\N", "2N", "NTJ", "Sweden"],

["3661", "Niki", "\N", "HG", "NLY", "Austria"],

["3674", "Nok Air", "\N", "DD", "NOK", "Thailand"],

["3684", "Norfolk County Flight College", "\N", "", "NCF", "United Kingdom"],

["3693", "North American Airlines", "\N", "", "NTM", "Canada"],

["3694", "North American Charters", "\N", "", "HMR", "Canada"],

["3721", "Northern Dene Airways", "\N", "U7", "", "Canada"],

["3731", "Northwest Airlines", "\N", "NW", "NWA", "United States"],

["3734", "Northwestern Air", "\N", "J3", "PLR", "Canada"],

["3737", "Norwegian Air Shuttle", "\N", "DY", "NAX", "Norway"],

["3738", "Norwegian Aviation College", "\N", "", "TFN", "Norway"],

["3740", "Nouvel Air Tunisie", "\N", "BJ", "LBT", "Tunisia"],

["3743", "Novair", "\N", "1I", "NVR", "Sweden"],

["3754", "Nas Air", "\N", "XY", "KNE", "Saudi Arabia"],

["3759", "Oasis Hong Kong Airlines", "\N", "O8", "OHK", "Hong Kong"],

["3760", "Ocean Air", "\N", "", "BCN", "Mauritania"],

["3764", "Oceanair", "\N", "O6", "ONE", "Brazil"],

["3765", "Oceanic Airlines", "\N", "O2", "", "Guinea"],

["3776", "Olympic Airlines", "\N", "OA", "OAL", "Greece"],

["3778", "Oman Air", "\N", "WY", "OMA", "Oman"],

["3781", "Omni Air International", "\N", "OY", "OAE", "United States"],

["3785", "One Two Go Airlines", "\N", "", "OTG", "Thailand"],

["3788", "Onur Air", "\N", "8Q", "OHY", "Turkey"],

["3805", "Orenburg Airlines", "\N", "R2", "ORB", "Russia"],

["3811", "Orient Thai Airlines", "\N", "OX", "OEA", "Thailand"],

["3814", "Origin Pacific Airways", "\N", "QO", "OGN", "New Zealand"],

["3822", "Ostfriesische Lufttransport", "\N", "OL", "OLT", "Germany"],

["3826", "Overland Airways", "\N", "OJ", "OLA", "Nigeria"],

["3831", "Ozjet Airlines", "\N", "O7", "OZJ", "Australia"],

["3834", "PAN Air", "\N", "PV", "PNR", "Spain"],

["3835", "PB Air", "\N", "9Q", "PBA", "Thailand"],

["3839", "PLUNA", "\N", "PU", "PUA", "Uruguay"],

["3840", "PMTair", "\N", "U4", "PMT", "Cambodia"],

["3850", "Jetstar Pacific", "Pacific Airlines", "BL", "PIC", "Vietnam"],

["3856", "Pacific Coastal Airline", "\N", "8P", "PCO", "Canada"],

["3857", "Pacific East Asia Cargo Airlines", "\N", "Q8", "PEC", "Philippines"],

["3860", "Pacific Island Aviation", "\N", "", "PSA", "United States"],

["3865", "Pacific Wings", "\N", "LW", "NMI", "United States"],

["3871", "Pakistan International Airlines", "PIA Pakistan International", "PK", "PIA", "Pakistan"],

["3907", "Paramount Airways", "\N", "I7", "PMW", "India"],

["3914", "Passaredo Transportes Aereos", "\N", "", "PTB", "Brazil"],

["3926", "Pegasus Airlines", "\N", "PC", "PGT", "Turkey"],

["3935", "Peninsula Airways", "\N", "KS", "PEN", "United States"],

["3952", "Philippine Airlines", "\N", "PR", "PAL", "Philippines"],

["3969", "Piedmont Airlines (1948-1989)", "\N", "PI", "PDT", "United States"],

["3976", "Pinnacle Airlines", "\N", "9E", "FLG", "United States"],

["3995", "Polet", "\N", "", "POT", "Russia"],

["4013", "Polynesian Airlines", "\N", "PH", "PAO", "Samoa"],

["4021", "Porter Airlines", "\N", "PD", "POE", "Canada"],

["4022", "Portugalia", "\N", "NI", "PGA", "Portugal"],

["4026", "Potomac Air", "\N", "BK", "PDC", "United States"],

["4031", "Precision Air", "\N", "PW", "PRF", "Tanzania"],

["4056", "Privatair", "\N", "", "PTI", "Switzerland"],

["4066", "Proflight Commuter Services", "\N", "P0", "", "Zambia"],

["4089", "Qantas", "Qantas Airways", "QF", "QFA", "Australia"],

["4091", "Qatar Airways", "\N", "QR", "QTR", "Qatar"],

["4106", "RACSA", "\N", "R6", "", "Guatemala"],

["4113", "Kinloss Flying Training Unit", "\N", "", "KIN", "United Kingdom"],

["4177", "Regional Airlines", "\N", "FN", "", "Morocco"],

["4178", "Regional Express", "\N", "ZL", "RXA", "Australia"],

["4187", "Republic Airlines", "\N", "RW", "RPA", "United States"],

["4188", "Republic Express Airlines", "\N", "RH", "RPH", "Indonesia"],

["4232", "Rossiya", "\N", "R4", "", "Russia"],

["4234", "Air Rarotonga", "\N", "GZ", "RAR", "Cook Islands"],

["4248", "Royal Air Maroc", "\N", "AT", "RAM", "Morocco"],

["4255", "Royal Brunei Airlines", "\N", "BI", "RBA", "Brunei"],

["4259", "Royal Jordanian", "\N", "RJ", "RJA", "Jordan"],

["4264", "Royal Nepal Airlines", "\N", "RA", "RNA", "Nepal"],

["4270", "Royal Phnom Penh Airways", "\N", "", "PPW", "Cambodia"],

["4283", "Rusline", "\N", "", "RLU", "Russia"],

["4292", "Rwandair Express", "\N", "WB", "RWD", "Rwanda"],

["4294", "Ryan Air Services", "\N", "", "RYA", "United States"],

["4295", "Ryan International Airlines", "\N", "RD", "RYN", "United States"],

["4296", "Ryanair", "\N", "FR", "RYR", "Ireland"],

["4299", "R�gional", "\N", "YS", "RAE", "France"],

["4304", "SATA International", "\N", "S4", "RZO", "Portugal"],

["4305", "South African Airways", "SAA South African Airways", "SA", "SAA", "South Africa"],

["4311", "Shaheen Air International", "\N", "NL", "SAI", "Pakistan"],

["4319", "Scandinavian Airlines System", "SAS Scandinavian Airlines", "SK", "SAS", "Sweden"],

["4323", "ScotAirways", "\N", "", "SAY", "United Kingdom"],

["4329", "S7 Airlines", "Sibir Airlines", "S7", "SBI", "Russia"],

["4335", "Seaborne Airlines", "\N", "BB", "SBS", "United States"],

["4342", "Scenic Airlines", "\N", "", "SCE", "United States"],

["4349", "SriLankan Airlines", "\N", "UL", "ALK", "Sri Lanka"],

["4356", "Sun Country Airlines", "\N", "SY", "SCX", "United States"],

["4370", "Southeast Air", "\N", "", "SEA", "United States"],

["4374", "Sky Express", "\N", "G3", "SEH", "Greece"],

["4375", "Spicejet", "\N", "SG", "SEJ", "India"],

["4388", "Star Flyer", "\N", "7G", "SFJ", "Japan"],

["4411", "Skagway Air Service", "\N", "N5", "SGY", "United States"],

["4414", "Sahara Airlines", "\N", "", "SHD", "Algeria"],

["4429", "SATA Air Acores", "\N", "SP", "SAT", "Portugal"],

["4435", "Singapore Airlines", "\N", "SQ", "SIA", "Singapore"],

["4436", "Sibaviatrans", "\N", "5M", "SIB", "Russia"],

["4438", "Skynet Airlines", "\N", "SI", "SIH", "Ireland"],

["4454", "Sriwijaya Air", "\N", "SJ", "SJY", "Indonesia"],

["4455", "Sama Airlines", "\N", "ZS", "SMY", "Saudi Arabia"],

["4464", "Singapore Airlines Cargo", "\N", "SQ", "SQC", "Singapore"],

["4469", "Siem Reap Airways", "\N", "FT", "SRH", "Cambodia"],

["4475", "South East Asian Airlines", "\N", "DG", "SRQ", "Philippines"],

["4496", "Skyservice Airlines", "\N", "5G", "SSV", "Canada"],

["4513", "Servicios de Transportes A", "\N", "FS", "STU", "Argentina"],

["4521", "Sudan Airways", "\N", "SD", "SUD", "Sudan"],

["4533", "Saudi Arabian Airlines", "\N", "SV", "SVA", "Saudi Arabia"],

["4547", "Southwest Airlines", "\N", "WN", "SWA", "United States"],

["4550", "Southern Winds Airlines", "\N", "A4", "SWD", "Argentina"],

["4559", "Swiss International Air Lines", "Swiss Airlines", "LX", "SWR", "Switzerland"],

["4560", "Swissair", "\N", "SR", "SWR", "Switzerland"],

["4563", "Swiss European Air Lines", "Swiss European", "", "SWU", "Switzerland"],

["4564", "Swe Fly", "\N", "WV", "SWV", "Sweden"],

["4573", "SunExpress", "\N", "XQ", "SXS", "Turkey"],

["4586", "Syrian Arab Airlines", "\N", "RB", "SYR", "Syrian Arab Republic"],

["4589", "Skywalk Airlines", "\N", "AL", "SYX", "United States"],

["4599", "Shandong Airlines", "\N", "SC", "CDG", "China"],

["4606", "SAS Braathens", "\N", "", "CNO", "Norway"],

["4607", "Spring Airlines", "\N", "9S", "CQH", "China"],

["4608", "Sichuan Airlines", "\N", "3U", "CSC", "China"],

["4609", "Shanghai Airlines", "\N", "FM", "CSH", "China"],

["4611", "Shenzhen Airlines", "\N", "ZH", "CSZ", "China"],

["4619", "Sun D'Or", "\N", "7L", "ERO", "Israel"],

["4620", "SkyEurope", "\N", "NE", "ESK", "Slovakia"],

["4640", "Sky Europe Airlines", "\N", "", "HSK", "Slovakia"],

["4652", "Spanair", "\N", "JK", "JKK", "Spain"],

["4687", "Spirit Airlines", "\N", "NK", "NKS", "United States"],

["4691", "SATENA", "\N", "9R", "NSE", "Colombia"],

["4702", "Skywest Airlines", "\N", "", "OZW", "Australia"],

["4735", "Santa Barbara Airlines", "\N", "S3", "BBR", "Venezuela"],

["4737", "Sky Airline", "\N", "H2", "SKU", "Chile"],

["4738", "SkyWest", "\N", "OO", "SKW", "United States"],

["4739", "Skyways Express", "\N", "JZ", "SKX", "Sweden"],

["4740", "Skymark Airlines", "\N", "BC", "SKY", "Japan"],

["4750", "SilkAir", "\N", "MI", "SLK", "Singapore"],

["4752", "Surinam Airways", "\N", "PY", "SLM", "Suriname"],

["4776", "Sterling Airlines", "\N", "NB", "SNB", "Denmark"],

["4781", "Skynet Asia Airways", "\N", "6J", "SNJ", "Japan"],

["4797", "Solomon Airlines", "\N", "IE", "SOL", "Solomon Islands"],

["4804", "Southern Airways", "\N", "", "SOU", "United States"],

["4805", "Saratov Aviation Division", "\N", "6W", "SOV", "Russia"],

["4808", "Sat Airlines", "\N", "HZ", "SOZ", "Kazakhstan"],

["4816", "South Pacific Island Airways", "\N", "", "SPI", "United States"],

["4822", "Shuttle America", "\N", "S5", "TCF", "United States"],

["4840", "Scat Air", "", "DV", "VSV", "Kazakhstan"],

["4863", "TAME", "\N", "EQ", "TAE", "Ecuador"],

["4867", "TAM Brazilian Airlines", "\N", "JJ", "TAM", "Brazil"],

["4869", "TAP Portugal", "TAP Air Portugal", "TP", "TAP", "Portugal"],

["4870", "Tunisair", "\N", "TU", "TAR", "Tunisia"],

["4889", "Thai Air Cargo", "\N", "T2", "TCG", "Thailand"],

["4896", "Thomas Cook Airlines", "\N", "FQ", "TCW", "Belgium"],

["4897", "Thomas Cook Airlines", "\N", "MT", "TCX", "United Kingdom"],

["4933", "Trigana Air Service", "\N", "", "TGN", "Indonesia"],

["4936", "Tiger Airways", "\N", "TR", "TGW", "Singapore"],

["4937", "Tiger Airways Australia", "\N", "TT", "TGW", "Australia"],

["4940", "Thai Airways International", "\N", "TG", "THA", "Thailand"],

["4946", "Turk Hava Kurumu Hava Taksi Isletmesi", "\N", "", "THK", "Turkey"],

["4947", "Thai AirAsia", "Thai Air Asia", "FD", "AIQ", "Thailand"],

["4951", "Turkish Airlines", "\N", "TK", "THY", "Turkey"],

["4957", "Tajikistan International Airlines", "\N", "", "TIL", "Tajikistan"],

["4965", "Twin Jet", "\N", "T7", "TJT", "France"],

["4970", "Translift Airways", "\N", "", "TLA", "Ireland"],

["4981", "Trans Mediterranean Airlines", "\N", "TL", "TMA", "Lebanon"],

["5002", "Tiara Air", "\N", "3P", "TNM", "Aruba"],

["5013", "Thomsonfly", "\N", "BY", "TOM", "United Kingdom"],

["5016", "Tropic Air", "\N", "PM", "TOS", "Belize"],

["5020", "TAMPA", "\N", "QT", "TPA", "Colombia"],

["5038", "TransAsia Airways", "\N", "GE", "TNA", "Taiwan"],

["5039", "Transavia Holland", "\N", "HV", "TRA", "Netherlands"],

["5041", "TACV", "\N", "VR", "TCV", "Portugal"],

["5064", "Transwest Air", "\N", "9T", "ABS", "Canada"],

["5067", "Transaero Airlines", "\N", "UN", "TSO", "Russia"],

["5083", "Turkmenistan Airlines", "Turkmenhovayollary", "T5", "TUA", "Turkmenistan"],

["5085", "Tuninter", "\N", "UG", "TUI", "Tunisia"],

["5097", "Travel Service", "\N", "QS", "TVS", "Czech Republic"],

["5122", "TUIfly Nordic", "\N", "6B", "BLX", "Sweden"],

["5133", "TAAG Angola Airlines", "\N", "DT", "DTA", "Angola"],

["5146", "Turkish Air Force", "\N", "", "HVK", "Turkey"],

["5156", "TAM Mercosur", "\N", "PZ", "LAP", "Paraguay"],

["5160", "Trans States Airlines", "\N", "AX", "LOF", "United States"],

["5179", "Tarom", "\N", "RO", "ROT", "Romania"],

["5187", "Turan Air", "\N", "3T", "URN", "Azerbaijan"],

["5188", "TRIP Linhas A", "\N", "8R", "TIB", "Brazil"],

["5207", "USA3000 Airlines", "\N", "U5", "GWY", "United States"],

["5209", "United Airlines", "\N", "UA", "UAL", "United States"],

["5210", "United Air Charters", "\N", "", "UAC", "Zimbabwe"],

["5234", "Ural Airlines", "\N", "U6", "SVR", "Russia"],

["5251", "UM Airlines", "\N", "UF", "UKM", "Ukraine"],

["5265", "US Airways", "\N", "US", "USA", "United States"],

["5268", "US Helicopter", "\N", "", "USH", "United States"],

["5271", "UTair Aviation", "\N", "UT", "UTA", "Russia"],

["5279", "United States Air Force", "\N", "", "AIO", "United States"],

["5281", "Uzbekistan Airways", "\N", "HY", "UZB", "Uzbekistan"],

["5282", "Ukraine International Airlines", "\N", "PS", "AUI", "Ukraine"],

["5284", "US Helicopter Corporation", "\N", "UH", "", "United States"],

["5297", "Valuair", "\N", "VF", "VLU", "Singapore"],

["5301", "Vasco Air", "\N", "", "VFC", "Vietnam"],

["5309", "Vietnam Airlines", "\N", "VN", "HVN", "Vietnam"],

["5311", "VIM Airlines", "\N", "NN", "MOV", "Russia"],

["5325", "Volaris", "\N", "Y4", "VOI", "Mexico"],

["5326", "Volga-Dnepr Airlines", "\N", "VI", "VDA", "Russia"],

["5331", "Virgin America", "\N", "VX", "VRD", "United States"],

["5333", "Virgin Express", "\N", "TV", "VEX", "Belgium"],

["5335", "Virgin Nigeria Airways", "\N", "VK", "VGN", "Nigeria"],

["5347", "Virgin Atlantic Airways", "\N", "VS", "VIR", "United Kingdom"],

["5350", "Viva Macau", "\N", "ZG", "VVM", "Macao"],

["5351", "Volare Airlines", "\N", "VE", "VLE", "Italy"],

["5352", "Vueling Airlines", "\N", "VY", "VLG", "Spain"],

["5353", "Vladivostok Air", "\N", "XF", "VLK", "Russia"],

["5354", "Varig Log", "\N", "LC", "VLO", "Brazil"],

["5360", "Virgin Australia", "\N", "VA", "VOZ", "Australia"],

["5368", "VRG Linhas Aereas", "Varig", "RG", "VRN", "Brazil"],

["5373", "VASP", "\N", "VP", "VSP", "Brazil"],

["5383", "VLM Airlines", "\N", "VG", "VLM", "Belgium"],

["5397", "Wayraper", "\N", "7W", "", "Peru"],

["5399", "WebJet Linhas A", "\N", "WJ", "WEB", "Brazil"],

["5401", "Welcome Air", "\N", "2W", "WLC", "Austria"],

["5411", "West Coast Air", "\N", "8O", "", "Canada"],

["5416", "WestJet", "\N", "WS", "WJA", "Canada"],

["5424", "Western Airlines", "\N", "WA", "WAL", "United States"],

["5439", "Wider�e", "\N", "WF", "WIF", "Norway"],

["5447", "Wind Jet", "\N", "IV", "JET", "Italy"],

["5451", "Wings Air", "\N", "IW", "WON", "Indonesia"],

["5461", "Wizz Air", "\N", "W6", "WZZ", "Hungary"],

["5462", "Wizz Air Hungary", "\N", "8Z", "WVL", "Bulgaria"],

["5465", "World Airways", "\N", "WO", "WOA", "United States"],

["5479", "XL Airways France", "\N", "SE", "SEU", "France"],

["5484", "Xiamen Airlines", "\N", "MF", "CXA", "China"],

["5492", "Yamal Airlines", "\N", "YL", "LLM", "Russia"],

["5496", "Yemenia", "\N", "IY", "IYE", "Yemen"],

["5501", "Yuzhmashavia", "\N", "", "UMK", "Ukraine"],

["5510", "Zanair", "\N", "", "TAN", "Tanzania"],

["5523", "Zoom Airlines", "\N", "Z4", "OOM", "Canada"],

["5533", "Tyrolean Airways", "\N", "\N", "TYR", "\N"],

["5559", "Maldivian Air Taxi", "\N", "8Q", "\N", "Maldives"],

["5584", "Sky Express", "SkyExpress", "XW", "SXR", "Russia"],

["5651", "Royal Air Cambodge", "", "VJ", "RAC", "Cambodia"],

["5813", "Air Mandalay", "", "6T", "\N", "Burma"],

["5982", "Air Busan", "\N", "BX", "ABL", "Republic of Korea"],

["6196", "Globus", "", "GH", "GLP", "Russia"],

["6222", "Air Kazakhstan", "", "9Y", "KZK", "Kazakhstan"],

["6557", "Japan Air System", "", "JD", "JAS", "Japan"],

["6855", "EasyJet (DS)", "", "DS", "\N", "Switzerland"],

["8359", "Star Peru (2I)", "", "2I", "\N", "Peru"],

["8461", "Carnival Air Lines", "", "KW", "\N", "United States"],

["8463", "United Airways", "", "4H", "UBD", "Bangladesh"],

["8576", "Fly540", "", "5H", "FFV", "Kenya"],

["8745", "Transavia France", "", "TO", "TVF", "France"],

["8809", "Island Air (WP)", "", "WP", "MKU", "United States"],

["9082", "Uni Air", "", "B7", "UIA", "Taiwan"],

["9135", "Gomelavia", "", "YD", "\N", "Belarus"],

["9239", "Red Wings", "Avialinii 400", "WZ", "RWZ", "Russia"],

["9335", "TUIfly (X3)", "", "11", "\N", "Germany"],

["9343", "Felix Airways", "", "FU", "FXX", "Yemen"],

["9344", "Kostromskie avialinii", "", "K1", "KOQ", "Russia"],

["9373", "Greenfly", "", "XX", "GFY", "Spain"],

["9531", "Tajik Air", "", "7J", "\N", "Tajikistan"],

["9541", "Air Mozambique", "", "TM", "\N", "Mozambique"],

["9577", "ELK Airways", "", "--", "ELK", "Estonia"],

["9620", "Gabon Airlines", "\N", "GY", "GBK", "Gabon"],

["9626", "MCA Airlines", "", "", "MCA", "Sweden"],

["9656", "Maldivo Airlines", "", "ML", "MAV", "Maldives"],

["9666", "Virgin Pacific", "", "VH", "VNP", "Fiji"],

["9764", "Zest Air", "", "Z2", "\N", "Philippines"],

["9784", "Yangon Airways", "", "HK", "\N", "Burma"],

["9809", "Eastar Jet", "", "ZE", "ESR", "South Korea"],

["9810", "Jin Air", "", "LJ", "JNA", "South Korea"],

["9811", "Wataniya Airways", "", "", "KW1", "Kuwait"],

["9818", "Air Arabia Maroc", "", "3O", "\N", "Morocco"],

["9825", "Baltic Air lines", "", "B1", "BA1", "Latvia"],

["9828", "Ciel Canadien", "", "YC", "YCC", "Canada"],

["9829", "Canadian National Airways", "", "CN", "YCP", "Canada"],

["9833", "Epic Holiday", "Epic Holidays", "FA", "4AA", "United States"],

["9838", "Indochina Airlines", "", "", "AXC", "Vietnam"],

["9851", "Air Comet Chile", "", "3I", "\N", "Chile"],

["9859", "German Air Force - FLB", "", "", "FLB", "Germany"],

["10114", "Line Blue", "", "L8", "LBL", "Germany"],

["10117", "FlyLAL Charters", "", "", "LLC", "Lithuania"],

["10122", "Salzburg arrows", "SZA", "SZ", "\N", "Austria"],

["10123", "Texas Wings", "", "TQ", "TXW", "United States"],

["10128", "Dennis Sky", "Dennis Sky Holding", "DH", "DSY", "Israel"],

["10224", "Zz", "", "ZZ", "\N", "Belgium"],

["10226", "Atifly", "", "A1", "A1F", "United States"],

["10371", "Aerolineas heredas santa maria", "", "", "SZB", "Dominican Republic"],

["10372", "Ciao Air", "", "99", "\N", "Italy"],

["10642", "Jc royal.britannica", "", "", "JRB", "United Kingdom"],

["10650", "Pal airlines", "", "5P", "\N", "Chile"],

["10673", "CanXpress", "", "C1", "CA1", "Canada"],

["10674", "Danube Wings (V5)", "", "V5", "\N", "Slovakia"],

["10675", "Sharp Airlines", "", "SH", "SHA", "Australia"],

["10683", "CanXplorer", "", "C2", "CAP", "Canada"],

["10715", "Click (Mexicana)", "", "QA", "\N", "Mexico"],

["10735", "World Experience Airline", "WEA", "W1", "WE1", "Canada"],

["10737", "ALAK", "", "J4", "\N", "Russia"],

["10739", "Air Choice One", "", "3E", "\N", "United States"],

["10740", "Tianjin Airlines", "", "", "GCR", "China"],

["10741", "China United", "", "KN", "\N", "China"],

["10748", "Locair", "", "ZQ", "LOC", "United States"],

["10758", "Safi Airlines", "", "4Q", "\N", "Afghanistan"],

["10765", "SeaPort Airlines", "", "K5", "SQH", "United States"],

["10776", "Salmon Air", "", "S6", "\N", "United States"],

["10798", "Bobb Air Freight", "", "01", "\N", "Germany"],

["10800", "Star1 Airlines", "", "V9", "HCW", "Lithuania"],

["10845", "Pelita", "", "6D", "\N", "Indonesia"],

["10912", "Alaska Seaplane Service", "", "J5", "\N", "United States"],

["10945", "Enerjet", "", "", "ENJ", "Canada"],

["10955", "MexicanaLink", "", "I6", "MXI", "Mexico"],

["10960", "Island Spirit", "", "IP", "ISX", "Iceland"],

["10969", "TACA Peru", "", "T0", "\N", "Peru"],

["11700", "Orbest", "", "", "OBS", "Portugal"],

["11719", "Southern Air Charter", "", "", "SOA", "Bahamas"],

["11724", "SVG Air", "", "", "SVG", "Saint Vincent and the Grenadines"],

["11726", "Air Century", "", "", "CEY", "Dominican Republic"],

["11731", "Pan Am World Airways Dominicana", "PAWA Dominicana", "7Q", "\N", "Dominican Republic"],

["11732", "Primera Air", "", "PF", "\N", "Iceland"],

["11741", "Air Antilles Express", "", "3S", "\N", "Guadeloupe"],

["11751", "Sol Lineas Aereas", "", "", "OLS", "Argentina"],

["11755", "Regional Paraguaya", "", "P7", "REP", "Paraguay"],

["11761", "VIP Ecuador", "", "V6", "\N", "Ecuador"],

["11762", "Transportes Aereos Cielos Andinos", "", "", "NDN", "Peru"],

["11763", "Peruvian Airlines", "", "P9", "\N", "Peru"],

["11765", "EasyFly", "", "", "EFY", "Colombia"],

["11767", "Polar Airlines", "", "??", "\N", "Russia"],

["11794", "Catovair", "", "OC", "\N", "Mauritius"],

["11795", "Andalus Lineas Aereas", "", "", "ANU", "Spain"],

["11798", "Air 26", "", "", "DCD", "Angola"],

["11800", "Mauritania Airways", "", "", "MTW", "Mauritania"],

["11802", "CEIBA Intercontinental", "", "", "CEL", "Equatorial Guinea"],

["11804", "Halcyonair", "", "7Z", "\N", "Cape Verde"],

["11805", "Business Aviation", "", "4P", "\N", "Congo (Kinshasa)"],

["11806", "Compagnie Africaine d\\'Aviation", "", "E9", "\N", "Congo (Kinshasa)"],

["11808", "Zambia Skyways", "", "K8", "\N", "Zambia"],

["11811", "AlMasria Universal Airlines", "", "UJ", "LMU", "Egypt"],

["11813", "EgyptAir Express", "", "", "MSE", "Egypt"],

["11814", "SmartLynx Airlines", "", "6Y", "\N", "Latvia"],

["11815", "Air Italy Egypt", "", "", "EUD", "Egypt"],

["11816", "KoralBlue Airlines", "", "K7", "KBR", "Egypt"],

["11820", "Wind Rose Aviation", "", "", "WRC", "Ukraine"],

["11823", "Elysian Airlines", "", "E4", "GIE", "Cameroon"],

["11833", "Sevenair", "", "", "SEN", "Tunisia"],

["11834", "Hellenic Imperial Airways", "", "HT", "IMP", "Greece"],

["11836", "Amsterdam Airlines", "", "WD", "AAN", "Netherlands"],

["11838", "Arik Niger", "", "Q9", "NAK", "Niger"],

["11839", "Dana Air", "", "DA", "\N", "Nigeria"],

["11840", "STP Airways", "", "8F", "STP", "Sao Tome and Principe"],

["11843", "Med Airways", "", "7Y", "\N", "Lebanon"],

["11850", "Skyjet Airlines", "", "UQ", "SJU", "Uganda"],

["11855", "Air Volga", "", "G6", "\N", "Russia"],

["11856", "Transavia Denmark", "", "", "TDK", "Denmark"],

["11857", "Royal Falcon", "", "RL", "RFJ", "Jordan"],

["11873", "Euroline", "", "4L", "MJX", "Georgia"],

["11943", "Turkuaz Airlines", "", "", "TRK", "Turkey"],

["11947", "Athens Airways", "", "ZF", "\N", "Greece"],

["11948", "Viking Hellas", "", "VQ", "VKH", "Greece"],

["11949", "Norlandair", "", "", "FNA", "Iceland"],

["11950", "Flugfelag Vestmannaeyja", "", "", "FVM", "Iceland"],

["11963", "Starline.kz", "", "DZ", "\N", "Kazakhstan"],

["12960", "Lugansk Airlines", "", "L7", "\N", "Ukraine"],

["12961", "Gryphon Airlines", "", "6P", "\N", "United States"],

["12962", "Gadair European Airlines", "", "GP", "GDR", "Spain"],

["12965", "Spirit of Manila Airlines", "", "SM", "MNP", "Philippines"],

["12975", "Chongqing Airlines", "", "OQ", "CQN", "China"],

["12976", "Grand China Air", "", "", "GDC", "China"],

["12978", "West Air China", "", "PN", "CHB", "China"],

["12997", "QatXpress", "qatXpress", "C3", "QAX", "Qatar"],

["13076", "OneChina", "OneChina", "1C", "1CH", "China"],

["13088", "NordStar Airlines", "", "Y7", "\N", "Russia"],

["13089", "Joy Air", "", "JR", "JOY", "China"],

["13105", "Air India Regional", "", "CD", "\N", "India"],

["13106", "MDLR Airlines", "", "9H", "\N", "India"],

["13107", "Jagson Airlines", "", "", "JGN", "India"],

["13108", "Maldivian", "", "Q2", "\N", "Maldives"],

["13130", "Xpressair", "", "XN", "\N", "Indonesia"],

["13178", "Strategic Airlines", "", "VC", "\N", "Australia"],

["13181", "Fars Air Qeshm", "", "", "QFZ", "Iran"],

["13187", "Eastok Avia", "", "", "EAA", "Kyrgyzstan"],

["13188", "Jupiter Airlines", "", "", "JPU", "United Arab Emirates"],

["13189", "Vision Air International", "", "", "VIS", "Pakistan"],

["13190", "Al-Naser Airlines", "", "NA", "\N", "Iraq"],

["13200", "Fuji Dream Airlines", "", "JH", "\N", "Japan"],

["13202", "Korea Express Air", "", "", "KEA", "South Korea"],

["13209", "Eznis Airways", "", "", "EZA", "Mongolia"],

["13211", "Pacific Flier", "", "", "PFL", "Palau"],

["13217", "Syrian Pearl Airlines", "", "", "PSB", "Syria"],

["13218", "SGA Airlines", "", "5E", "\N", "Thailand"],

["13242", "Air2there", "", "F8", "\N", "New Zealand"],

["13254", "Avianova (Russia)", "", "AO", "\N", "Russia"],

["13303", "Parmiss Airlines (IPV)", "", "PA", "IPV", "Iran"],

["13304", "EuropeSky", "", "ES", "EUV", "Germany"],

["13306", "BRAZIL AIR", "BRAZIL AIR", "GB", "BZE", "Brazil"],

["13335", "Homer Air", "Homer Sky", "MR", "OME", "Germany"],

["13391", "U.S. Air", "", "-+", "--+", "United States"],

["13394", "Jayrow", "", "\\'", "\\'\\", "Australia"],

["13397", "Wilderness Air", "", ";;", "\N", "Australia"],

["13398", "Whitaker Air", "", "^^", "\N", "Australia"],

["13633", "PanAm World Airways", "", "WQ", "PQW", "United States"],

["13690", "Virginwings", "", "YY", "VWA", "Germany"],

["13704", "KSY", "Kreta Sky", "KY", "KSY", "Greece"],

["13732", "Buquebus L�neas A�reas", "", "BQ", "BQB", "Uruguay"],

["13734", "SOCHI AIR", "SOCHI", "CQ", "KOL", "Russia"],

["13757", "Wizz Air Ukraine", "", "WU", "WAU", "Ukraine"],

["13781", "88", "", "47", "VVN", "Cyprus"],

["13815", "LCM AIRLINES", "", "LQ", "LMM", "Russia"],

["13899", "Cambodia Angkor Air (K6)", "", "K6", "\N", "Cambodia"],

["13936", "Royal European Airlines", "", "69", "\N", "United Kingdom"],

["13947", "Tom\\'s & co airliners", "Tom\\'s air", "&T", "T&O", "France"],

["13983", "Azul", "Azul Linhas A�reas Brasileiras", "AD", "AZU", "Brazil"],

["14061", "LSM Airlines", "slowbird", "PQ", "LOO", "Russia"],

["14069", "Zapolyarie Airlines", "Zapolyarye Airlines", "", "PZY", "Russia"],

["14073", "Finlandian", "", "", "FN1", "Finland"],

["14094", "LionXpress", "lionXpress", "C4", "LIX", "Cameroon"],

["14118", "Genesis", "", "GK", "\N", "Pakistan"],

["14388", "Congo Express", "", "XZ", "\N", "Congo (Kinshasa)"],

["14485", "Fly Dubai", "", "FZ", "FDB", "United Arab Emirates"],

["14620", "Domenican Airlines", "Domenican", "D1", "MDO", "Dominican Republic"],

["14679", "ConneX European Airline", "", "", "2CO", "Austria"],

["14849", "Aereonautica militare", "", "JY", "AXZ", "Italy"],

["14858", "Kal Star Aviation", "", "", "KLS", "Indonesia"],

["14881", "LSM AIRLINES ", "Russian. Yours Air Lines ", "YZ", "YZZ", "Russia"],

["15814", "UTair-Express", "", "UR", "\N", "Russia"],

["15837", "Huaxia", "HUAXIA", "G5", "\N", "China"],

["15867", "Zabaykalskii Airlines", "Baikal Airlines", "ZP", "ZZZ", "Russia"],

["15887", "CBM America", "", "", "XBM", "United States"],

["15893", "Marysya Airlines", "MARYSYA AIRLINES", "M4", "1QA", "Russia"],

["15897", "N1", "", "N1", "\N", "Peru"],

["15930", "Airlink (SAA)", "", "4Z", "\N", "South Africa"],

["15939", "Westfalia Express VA", "", "", "WFX", "Germany"],

["15953", "JobAir", "", "3B", "\N", "Czech Republic"],

["15975", "Black Stallion Airways", "", "BZ", "BSA", "United States"],

["15984", "German International Air Lines", "Germanair", "GM", "GER", "Germany"],

["15985", "TrasBrasil", "", "TB", "TBZ", "Brazil"],

["15989", "TransBrasil Airlines", "", "TH", "THS", "Brazil"],

["15999", "China SSS", "Chunqiu Airlines", "9C", "\N", "China"],

["16084", "AIR INDOCHINE", "", "", "IIA", "Vietnam"],

["16100", "Happy Air", "", "", "HPY", "Thailand"],

["16101", "Solar Air", "", "", "SRB", "Thailand"],

["16103", "Air Mekong", "", "P8", "MKG", "Vietnam"],

["16110", "Harbour Air (Priv)", "", "H3", "\N", "Canada"],

["16116", "Air Hamburg (AHO)", "", "HH", "AHO", "Germany"],

["16120", "ZABAIKAL AIRLINES", "ZABAIKAL ", "Z6", "ZTT", "Russia"],

["16127", "TransHolding", "Trans", "TI", "THI", "Brazil"],

["16130", "SUR Lineas Aereas", "", "", "SZZ", "Argentina"],

["16131", "Aerolineas Africanas", "", "", "AA1", "Guinea"],

["16133", "Yeti Airways", "", "YT", "\N", "Nepal"],

["16135", "Yellowstone Club Private Shuttle", "", "Y1", "\N", "United States"],

["16136", "Caucasus Airlines", "", "NS", "\N", "Georgia"],

["16139", "Serbian Airlines", "", "S1", "SA1", "Serbia"],

["16149", "Windward Islands Airways", "", "WM", "\N", "Netherlands Antilles"],

["16150", "TransHolding System", "", "YO", "TYS", "Brazil"],

["16151", "CCML Airlines", "", "CB", "CCC", "Colombia"],

["16198", "Small Planet Airlines", "", "", "ELC", "Lithuania"],

["16234", "Fly Brasil", "Fly Brasil", "F1", "FBL", "Brazil"],

["16261", "CB Airways UK ( Interliging Flights )", "", "1F", "CIF", "United Kingdom"],

["16262", "Fly Colombia ( Interliging Flights )", "", "3F", "3FF", "Colombia"],

["16264", "Trans Pas Air", "", "T6", "TP6", "United States"],

["16273", "KMV", "", "??", "\N", "Russia"],

["16323", "Himalayan Airlines", "Himalaya", "HC", "HYM", "Nepal"],

["16327", "Indya Airline Group", "Indya1", "G1", "IG1", "India"],

["16329", "Sunwing", "", "WG", "\N", "Canada"],

["16358", "Turkish Wings Domestic", "", "", "TWD", "Turkey"],

["16359", "Japan Regio", "", "ZX", "ZXY", "Japan"],

["16362", "OCEAN AIR CARGO", "", "", "IXO", "India"],

["16363", "Norte Lineas Aereas", "NORTE", "N0", "\N", "Argentina"],

["16364", "Austral Brasil", "Austral Brasil lineas aereas", "W7", "\N", "Brazil"],

["16373", "PEGASUS AIRLINES-", "", "H9", "\N", "Turkey"],

["16409", "Nihon.jet connect", "", "", "NX1", "Kyrgyzstan"],

["16415", "Camair-co", "", "QC", "\N", "Cameroon"],

["16459", "Sky Regional", "Air Canada Express", "RS", "SKV", "Canada"],

["16507", "LSM International ", "Moskva-air", "II", "UWW", "Russia"],

["16508", "Baikotovitchestrian Airlines ", "", "BU", "BUU", "American Samoa"],

["16511", "Luchsh Airlines ", "Air luch", "L4", "LJJ", "Russia"],

["16556", "ENTERair", "", "", "QQQ", "Poland"],

["16585", "Air Cargo Germany", "", "6U", "\N", "Germany"],

["16615", "Mongolian International Air Lines ", "Mongol Air ", "7M", "ZTF", "Mongolia"],

["16624", "Tway Airlines", "", "TW", "TWB", "South Korea"],

["16625", "Papillon Grand Canyon Helicopters", "", "HI", "\N", "United States"],

["16628", "Jusur airways", "", "JX", "JSR", "Egypt"],

["16645", "NEXT Brasil", "NEXT", "XB", "NXB", "Brazil"],

["16660", "AeroWorld ", "Sovet Air ", "W4", "WER", "Russia"],

["16695", "GNB Linhas Aereas", "", "GN", "\N", "Brazil"],

["16702", "Usa Sky Cargo", "USky", "E1", "ES2", "United States"],

["16707", "Hankook Airline", "", "HN", "HNX", "South Korea"],

["16717", "REDjet", "", "Z7", "\N", "Barbados"],

["16720", "Red Jet Andes", "", "PT", "\N", "Peru"],

["16721", "Red Jet Canada", "", "QY", "\N", "Canada"],

["16723", "Sprintair", "", "", "SRN", "Poland"],

["16724", "Red Jet Mexico", "", "4X", "\N", "Mexico"],

["16725", "Marusya Airways", "Marusya Air", "Y8", "MRS", "Russia"],

["16726", "Era Alaska", "", "7H", "ERR", "United States"],

["16728", "AirRussia", "RussianConector", "R8", "RRJ", "Russia"],

["16735", "Hankook Air US", "", "H1", "HA1", "United States"],

["16794", "Carpatair Flight Training", "", "", "SMW", "Romania"],

["16796", "I-Fly", "", "H5", "RSY", "Russia"],

["16826", "Whitejets", "", "", "WTJ", "Brazil"],

["16837", "VickJet", "", "KT", "VKJ", "France"],

["16844", "BVI Airways", "", "XV", "\N", "British Virgin Islands"],

["16858", "Hamburg Airways", "", "", "HAY", "Germany"],

["16860", "Salsa d\\'Haiti", "", "SO", "SLC", "Haiti"],

["16867", "Zambezi Airlines (ZMA)", "", "ZJ", "\N", "Zambia"],

["16868", "Kan Air", "", "", "KND", "Thailand"],

["16881", "Air Cudlua", "Air Cudlua", "", "CUD", "United Kingdom"],

["16882", "Polet Airlines (Priv)", "", "YQ", "\N", "Russia"],

["16895", "Air Explore", "", "", "AXE", "Slovakia"],

["16901", "12 North", "", "12", "N12", "India"],

["16919", "Holidays Czech Airlines", "", "", "HCC", "Czech Republic"],

["16921", "Comtel Air", "", "", "COE", "Austria"],

["16926", "Mint Airways", "", "", "MIC", "Spain"],

["16932", "Orbit Airlines", "Orbit", "", "OBT", "United States"],

["16939", "Air Bucharest", "", "", "BUR", "Romania"],

["16940", "AlbaStar", "", "", "LAV", "Spain"],

["16942", "Mauritania Airlines International", "", "L6", "MAI", "Mauritania"],

["16956", "MAT Airways", "", "6F", "MKD", "Macedonia"],

["16960", "Asian Wings Airways", "", "AW", "AWM", "Burma"],

["16963", "Air Arabia Egypt", "", "E5", "RBG", "Egypt"],

["16967", "Eagles Airlines", "", "", "EGS", "Italy"],

["16973", "YES Airways", "", "", "YEP", "Poland"],

["16975", "Alitalia Cityliner", "", "CT", "\N", "Italy"],

["16983", "Direct Aero Services", "", "", "DSV", "Romania"],

["16985", "Medallion Air", "", "", "MDP", "Romania"],

["17022", "Orchid Airlines", "", "OI", "ORC", "Australia"],

["17023", "Asia Wings", "", "Y5", "AWA", "Kazakhstan"],

["17026", "Georgian International Airlines", "", "", "GNN", "Georgia"],

["17027", "Air Batumi", "", "", "BTM", "Georgia"],

["17082", "Skywest Australia", "", "XR", "\N", "Australia"],

["17083", "Nile Air", "", "NP", "NIA", "Egypt"],

["17086", "Feeder Airlines", "", "", "FDD", "Sudan"],

["17094", "Senegal Airlines", "", "DN", "SGG", "Senegal"],

["17095", "Fly 6ix", "", "6I", "\N", "Sierra Leone"],

["17099", "Starbow Airlines", "", "S9", "\N", "Ghana"],

["17115", "Copenhagen Express", "", "0X", "CX0", "Denmark"],

["17408", "BusinessAir", "", "8B", "BCC", "Thailand"],

["17519", "SENIC AIRLINES", "", "YR", "\N", "United States"],

["17563", "XOJET", "", "", "XOJ", "United States"],

["17571", "Sky Wing Pacific", "", "C7", "CR7", "South Korea"],

["17572", "Bateleur Air", "", "", "BEU", "South Africa"],

["17574", "Air Indus", "Indus Airlines Pak", "PP", "AI0", "Pakistan"],

["17628", "Orbit International Airlines", "", "", "OAI", "United States"],

["17629", "Orbit Regional Airlines", "", "", "OAR", "United States"],

["17630", "Orbit Atlantic Airways", "", "", "OAN", "United States"],

["17658", "Volotea", "", "", "VOO", "Spain"],

["17675", "Peach Aviation", "", "MM", "\N", "Japan"],

["17694", "Helitt L�neas A�reas", "", "", "HTH", "Spain"],

["17695", "Russia State Transport", "Federal State Budget Inst", "", "RSD", "Russia"],

["17726", "Malaysia Wings", "", "", "MWI", "Malaysia"],

["17750", "Aviabus", "", "U1", "ABI", "Russia"],

["17780", "Michael Airlines", "Javi", "DF", "MJG", "Puerto Rico"],

["17786", "Korongo Airlines", "", "ZC", "KGO", "Congo (Kinshasa)"],

["17794", "Indonesia Sky", "", "I5", "IDS", "Indonesia"],

["17841", "Aws express", "", "B0", "666", "United States"],

["17859", "Southjet", "", "76", "SJS", "United States"],

["17860", "Southjet connect", "", "77", "ZCS", "United States"],

["17862", "Southjet cargo", "", "78", "XAN", "United States"],

["17881", "Iberia Express", "", "I2", "IBS", "Spain"],

["17885", "Interjet (ABC Aerolineas)", "", "4O", "\N", "Mexico"],

["17889", "AirOnix", "", "OG", "\N", "Ukraine"],

["17890", "Nordic Global Airlines", "", "NJ", "NGB", "Finland"],

["17891", "Scoot", "", "TZ", "SCO", "Singapore"],

["17909", "Hi Fly (5K)", "", "5K", "\N", "Portugal"],

["17911", "China Northwest Airlines (WH)", "", "WH", "\N", "China"],

["17935", "Zenith International Airline", "Zenith", "ZN", "ZNA", "Thailand"],

["17936", "Orbit Airlines Azerbaijan", "Orbit Azerbaijan", "O1", "OAB", "Azerbaijan"],

["17989", "Air Alps Aviation (A6)", "", "A6", "\N", "Austria"],

["18076", "Flying kangaroo Airline", "Skippy", "", "FKA", "Australia"],

["18083", "RusJet", "", "", "RSJ", "Russia"],

["18118", "VietJet Air", "VietJet", "", "VJC", "Vietnam"],

["18169", "Patriot Airways", "", "P4", "\N", "United States"],

["18178", "Vision Airlines (V2)", "", "V2", "RBY", "United States"],

["18232", "BQB Lineas Aereas", "Buquebus", "5Q", "\N", "Uruguay"],

["18237", "AirAsia Japan", "", "", "WAJ", "Japan"],

["18239", "Yellowtail", "", "YE", "YEL", "United States"],

["18241", "Royal Airways", "Royal Inc.", "KG", "RAW", "United States"],

["18252", "FlyHigh Airlines Ireland (FH)", "", "FH", "FHI", "Ireland"],

["18257", "Executive AirShare", "", "", "XSR", "United States"],

["18475", "Hebei Airlines", "", "", "HBH", "China"],

["18476", "Air KBZ", "", "", "KBZ", "Burma"],

["18477", "Aero VIP (2D)", "", "2D", "\N", "Portugal"],

["18497", "Yangon Airways Ltd.", "", "YH", "\N", "Burma"],

["18529", "T.J. Air", "", "TJ", "TJA", "United States"],

["18543", "SkyWork Airlines ", "", "SX", "\N", "Switzerland"],

["18553", "Maastricht Airlines", "", "W2", "\N", "Netherlands"],

["18617", "Euro Jet", "", "24", "\N", "Germany"],

["18621", "Ukraine Atlantic", "", "", "UAT", "Ukraine"],

["18668", "Nesma Airlines", "", "", "NMA", "Egypt"],

["18672", "East Horizon", "", "", "EHN", "Afghanistan"],

["18676", "Air Majoro", "", "", "MJP", "Peru"],

["18692", "Rotana Jet", "", "", "RJD", "United Arab Emirates"],

["18700", "SOCHI AIR CHATER", "Sochi Air ", "Q3", "QER", "Russia"],

["18702", "Denim Air ", "FlyNonstop", "J7", "\N", "Norway"],

["18732", "Malindo Air", "", "OD", "MXD", "Malaysia"],

["18781", "Hermes Airlines", "", "", "HRM", "Greece"],

["18825", "Flightlink Tanzania", "Flightlink", "Z9", "\N", "Tanzania"],

["18828", "IzAvia", "", "I8", "\N", "Russia"],

["18860", "?????????", "", "", "???", "Russia"],

["18863", "?????????", "????? ????", "", "PKV", "Russia"],

["18930", "Maryland Air", "Maryland", "M1", "M1F", "United States"],

["18944", "Insel Air (7I/INC) (Priv)", "", "7I", "\N", "Netherlands Antilles"],

["18946", "VivaColombia", "", "5Z", "VVC", "Colombia"],

["18952", "Flybe Finland Oy", "", "", "FCM", "Finland"],

["18959", "Bingo Airways", "Bingo", "", "BGY", "Poland"],

["19007", "Bluebird Airways (BZ)", "", "", "BBG", "Greece"],

["19016", "Apache Air", "Apache", "ZM", "IWA", "United States"],

["19026", "MHS Aviation GmbH", "", "M2", "\N", "Germany"],

["19030", "Jettor Airlines", "Jettor", "NR", "JTO", "Hong Kong"],

["19215", "Flyme (VP)", "", "", "VQI", "Maldives"],

["19225", "Thai Lion Air", "", "SL", "\N", "Thailand"],

["19244", "Golden Myanmar Airlines", "", "", "GMR", "Burma"],

["19276", "Canaryfly", "", "", "CNF", "Spain"],

["19280", "Sunrise Airways", "", "", "KSZ", "Haiti"],

["19287", "National Air Cargo", "", "N8", "NCR", "United States"],

["19290", "Eastern Atlantic Virtual Airlines", "", "13", "EAV", "United States"],

["19305", "Citilink Indonesia", "", "QG", "\N", "Indonesia"],

["19337", "Transair", "", "", "TTZ", "Canada"],

["19350", "Comfort Express Virtual Charters Albany", "", "", "EVC", "United States"],

["19351", "Comfort Express Virtual Charters", "", "", "CEO", "United States"],

["19359", "FLYJET", "", "", "FYJ", "Poland"],

["19361", "Snowbird Airlines", "", "S8", "SBD", "Finland"],

["19363", "Russkie Krylya", "", "", "KRY", "Russia"],

["19367", "Kharkiv Airlines", "", "KH", "KHK", "Ukraine"],

["19433", "XAIR USA", "", "XA", "XAU", "United States"],

["19451", "Air Costa", "", "LB", "\N", "India"],

["19459", "Simrik Airlines", "", "", "RMK", "Nepal"],

["19473", "XPTO", "XPTO  ", "XP", "XPT", "Portugal"],

["19474", "Royal Flight", "", "", "DME", "Russia"],

["19525", "BBN-Airways", "BlackBurn", "", "EGH", "United Kingdom"],

["19531", "Tomsk-Avia", "", "", "TKS", "Russia"],

["19541", "Malawian Airlines", "", "3W", "\N", "Malawi"],

["19548", "Yeti Airlines ", "", "", "NYT", "Nepal"],

["19567", "Avilu", "Avilu' SA", "..", "...", "Switzerland"],

["19582", "Air Serbia", "\N", "JU", "ASL", "Serbia"],

["19599", "Skyline Ulasim Ticaret A.S.", "Skyline Ulasim Ticaret A.S.", "", "KCU", "Turkey"],

["19610", "Air Lituanica", "Air Lituanica", "LT", "LTU", "Lithuania"],

["19619", "Envoy Air", "", "", "ENY", "United States"],

["19651", "CARICOM AIRWAYS (BARBADOS) INC.", "CARICOM AIRWAYS", "", "CCB", "Barbados"],

["19674", "Rainbow Air (RAI)", "Rainbow Air (RAI)", "RN", "RAB", "United States"],

["19675", "Rainbow Air Canada", "Rainbow Air CAN", "RY", "RAY", "Canada"],

["19676", "Rainbow Air Polynesia", "Rainbow Air POL", "RX", "RPO", "United States"],

["19677", "Rainbow Air Euro", "Rainbow Air EU", "RU", "RUE", "United Kingdom"],

["19678", "Rainbow Air US", "Rainbow Air US", "RM", "RNY", "United States"],

["19745", "Transilvania", "", "", "TNS", "Romania"],

["19751", "Dobrolet", "????????", "QD", "DOB", "Russia"],

["19774", "Spike Airlines", "Aero Spike", "S0", "SAL", "United States"],

["19776", "Grand Cru Airlines", "", "", "GCA", "Lithuania"],

["19785", "Go2Sky", "", "", "RLX", "Slovakia"],

["19803", "All Argentina", "All Argentina", "L1", "AL1", "Argentina"],

["19804", "All America", "All America", "A2", "AL2", "United States"],

["19805", "All Asia", "All Asia", "L9", "AL3", "China"],

["19806", "All Africa", "All Africa", "9A", "99F", "South Africa"],

["19807", "Regionalia M�xico", "Regionalia M�xico", "N4", "J88", "Mexico"],

["19808", "All Europe", "All Europe", "N9", "N99", "United Kingdom"],

["19809", "All Spain", "All Spain", "N7", "N77", "Spain"],

["19810", "Regional Air Iceland", "Regional Air Iceland", "9N", "N78", "Iceland"],

["19812", "Voestar", "Voestar Brasil", "8K", "K88", "Brazil"],

["19813", "All Colombia", "All Colombia", "7O", "7KK", "Colombia"],

["19814", "Regionalia Uruguay", "Regionalia Uruguay", "2X", "2K2", "Uruguay"],

["19815", "Regionalia Venezuela", "Regionalia Venezuela", "9X", "9XX", "Venezuela"],

["19827", "Regionalia Chile", "Regionalia Chile", "9J", "CR1", "Chile"],

["19828", "Vuela Cuba", "Vuela Cuba", "6C", "6CC", "Cuba"],

["19830", "All Australia", "All Australia", "88", "8K8", "Australia"],

["19831", "Fly Europa", "", "ER", "RWW", "Spain"],

["19834", "FlyPortugal", "", "PO", "FPT", "Portugal"],

["19886", "Spring Airlines Japan", "", "IJ", "SJO", "Japan"],

["19890", "Dense Airways", "", "KP", "DWA", "United States"],

["19891", "Dense Connection", "", "KZ", "DC2", "United States"],

["19908", "Vuola Italia", "Vuola Italia", "4S", "VI4", "Italy"],

["19917", "Jet Suite", "", "", "RSP", "United States"],

["19923", "Fly Jamaica Airways", "", "", "FJM", "Jamaica"],

["19927", "Island Express Air", "", "1X", "\N", "Canada"],

["19928", "All Argentina Express", "All Argentina Express", "Z0", "Z9H", "Argentina"],

["19930", "Thai Smile Airways", "THAI Smile", "WE", "\N", "Thailand"],

["19944", "International AirLink", "", "I4", "\N", "Jamaica"],

["19963", "Real Tonga", "", "RT", "\N", "Tonga"],

["19970", "All America AR", "All America Argentina", "2R", "M7A", "Argentina"],

["19971", "All America CL", "All America Chile", "1R", "R1R", "Chile"],

["19974", "SOCHI AIR EXPRESS", "ADLER EXPRESS", "Q4", "SAE", "Russia"],

["19977", "All America BR", "All America Brasil", "1Y", "A9B", "Brazil"],

["20004", "Volotea Costa Rica", "Volotea Costa Rica", "9V", "VC9", "Costa Rica"],

["20017", "Fly Romania", "", "X5", "OTJ", "Romania"],

["20047", "Eagle Atlantic Airlines", "", "E2", "\N", "Ghana"],

["20051", "Fly Africa Zimbabwe", "Zimbabwe flyafrica.com", "", "FZW", "Zimbabwe"],

["20060", "San Dima Air", "(Cyber Airlines) Not Real", "", "SDI", "United States"],

["20073", "All America CO", "All America Colombia", "0Y", "7ZC", "Colombia"],

["20074", "All America MX", "All America M�xico", "0M", "0MM", "Mexico"],

["20110", "FOX Linhas Aereas", "", "FX", "FOX", "Brazil"],

["20127", "Air Kenya (Priv)", "", "QP", "\N", "Kenya"],

["20144", "Via Conectia Airlines", "Via Conectia", "6V", "CZV", "Uruguay"],

["20155", "Hebradran Air Services", "", "", "HBR", "United Kingdom"],

["20158", "Pobeda", "", "", "PBD", "Russia"],

["20160", "City Airways", "", "E8", "GTA", "Thailand"],

["20170", "Norwegian Long Haul AS", "", "DU", "NLH", "Norway"],

["20186", "BA101", "", "", "710", "United Kingdom"],

["20207", "TransNusa Air", "", "M8", "TNU", "Indonesia"],

["20218", "Tomp Airlines", "Tomp Airlines", "ZT", "T9P", "Chile"],

["20220", "Fuzhou Airlines", "", "", "FZA", "China"],

["20221", "Sky Angkor Airlines (ZA)", "", "", "SWM", "Cambodia"],

["20222", "OneJet", "", "J1", "\N", "United States"],

["20224", "Global Airlines", "Global Airlines", "0G", "GA0", "Argentina"],

["20225", "Mann Yadanarpon Airlines", "", "", "MYP", "Burma"],

["20264", "Air Vistara", "Tata SIA Airlines", "UK", "VTI", "India"],

["20268", "TransRussiaAirlines", "TransRus", "1E", "RGG", "Russia"],

["20270", "Severstal Air Company", "", "D2", "\N", "Russia"],

["20282", "REXAIR VIRTUEL", "", "RR", "RXR", "France"],

["20285", "WestJet Encore", "Encore", "WR", "WEN", "Canada"],

["20286", "Air Pegasus", "", "OP", "PPL", "India"],

["20288", "International Europe", "International", "9I", "INE", "Spain"],

["20293", "Sky Regional Airlines", "", "", "SKV", "Canada"],

["20401", "V Air", "V Air Taiwan", "ZV", "VAX", "Taiwan"],

["20415", "Cello Aviation", "", "", "CLJ", "United Kingdom"],

["20478", "Pouya Air", "", "", "PYA", "Iran"],

["20565", "Boutique Air (Priv)", "", "4B", "BTQ", "United States"],

["20566", "FlyEgypt", "FlyEgypt", "", "FEG", "Egypt"],

["20577", "VOLOTEA Airways", "", "V7", "VOE", "Spain"],

["20599", "INAVIA Internacional", "Internacional", "Z5", "IIR", "Argentina"],

["20607", "Liberty Airways", "", "LE", "LTY", "United States"],

["20608", "??????????", "", "??", "\N", "Russia"],

["20653", "Aeronautica Militare", "", "", "IAM", "Italy"],

["20657", "Bassaka airlines", "", "5B", "BSX", "Cambodia"],

["20675", "Jetstar Japan ", "", "", "JJP", "Japan"],

["20686", "SkyBahamas Airlines", "", "Q7", "\N", "Bahamas"],

["20695", "UVT Aero", "", "UW", "\N", "Russia"],

["20698", "First Flying", "", "", "DAK", "Japan"],

["20710", "Silver Airways (3M)", "", "3M", "\N", "United States"],

["20716", "AtlasGlobal Ukraine", "", "", "UJX", "Ukraine"],

["20725", "Boliviana de Aviacion (OB)", "BoA", "", "BOV", "Bolivia"],

["20726", "US-Bangla Airlines", "", "", "UBG", "Bangladesh"],

["20729", "Norwegian Air International (D8)", "", "", "IBK", "Norway"],

["20752", "ATA Airlines (Iran)", "????????? ???", "I3", "\N", "Iran"],

["20769", "VIA L�neas A�reas", "VIA", "V1", "VIA", "Argentina"],

["20802", "GermanXL", "", "GX", "GXG", "Germany"],

["20808", "Alghanim", "", "", "KYA", "United States"],

["20824", "Indonesa Air Aisa X", "", "", "IDX", "Indonesia"],

["20827", "Fly France", "Fly France", "FF", "FRF", "France"],

["20875", "Jota Aviation", "", "", "ENZ", "United Kingdom"],

["20881", "Europe Jet", "Europe Jet", "EX", "EU9", "France"],

["20923", "COBALT", "COBALT", "", "FCB", "Cyprus"],

["20931", "Southern Airways Express", "Sun Air Express", "", "LTD", "United States"],

["20962", "Orenburzhie", "", "", "ORG", "Russia"],

["20976", "World Scale Airlines", "World Scale", "W3", "WSS", "United States"],

["20978", "All America US", "All America US", "AG", "SSA", "United States"],

["20986", "University of Birmingham Air Squadron (RAF)", "8AEF RAF", "", "UAY", "United Kingdom"],

["20991", "Choice Airways", "", "", "CSX", "United States"],

["20994", "Aruba Airlines", "", "", "ARU", "Aruba"],

["20995", "BudgetAir", "BudgetAir", "1K", "BG1", "Germany"],

["20996", "Dynamic Airways", "", "", "DYA", "United States"],

["21012", "Fly One", "Fly One", "F5", "FI5", "Moldova"],

["21021", "Nordica", "", "EE", "\N", "Estonia"],

["21036", "Tez Jet Airlines", "", "", "TEZ", "Kyrgyzstan"],

["21043", "Kush Air", "", "", "KUH", "South Sudan"],

["21124", "ViaAir", "Charter Air Transport", "", "SRY", "United States"],

["21131", "All America BOPY", "All America BOPY", "0P", "PYB", "Paraguay"],

["21179", "Thai Vietjet Air", "", "", "TVJ", "Thailand"],

["21248", "GX Airlines", "", "", "CBG", "China"],

["21268", "Jetgo Australia", "", "JG", "\N", "Australia"],

["21270", "Air Carnival", "", "2S", "\N", "India"],

["21317", "Svyaz Rossiya", "Russian Commuter ", "7R", "SJM", "Russia"],

];