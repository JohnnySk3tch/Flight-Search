document.addEventListener ("DOMContentLoaded", () => {

    let inputDataNach = document.getElementById("inputfildNach");
    let inputDataBack = document.getElementById("from");
    let inputDataBackTo = document.getElementById("to");
    let inputData = document.getElementById("inputFieldFrom");

    /* Function for the recommendations in the input fields */
    function recommender(ergebnisArray, datalist, optionElements) {
        
        optionElements.forEach(function(event) {
            event.remove();
        });
        
        for (let i = 0; i < ergebnisArray.length; i++) {
            let option_count = ergebnisArray[i][1];
            let newOption = document.createElement("option");  

            datalist.appendChild(newOption).setAttribute("value", option_count);
        };
    };

    /* Input Expand From Hinflug*/     
    inputData.addEventListener("input", function() {

        let ergebnisArray = search_airport(inputData.value);
        let datalist = document.getElementById("myList");     
        let optionElements = datalist.querySelectorAll("option");

        recommender(ergebnisArray, datalist, optionElements);
             
    });

    /* Input Expand To Rückflug */
    inputDataNach.addEventListener("input", function() {

        let ergebnisArray = search_airport(inputDataNach.value);
        let datalist = document.getElementById("myList1");   
        let optionElements = datalist.querySelectorAll("option");
    
        recommender(ergebnisArray, datalist, optionElements);
                    
    });

    /* Input Expand From Rückflug */
    inputDataBack.addEventListener("input", function() {

        let ergebnisArray = search_airport(inputDataBack.value);
        let datalist = document.getElementById("myListBack");   
        let optionElements = datalist.querySelectorAll("option");

        recommender(ergebnisArray, datalist, optionElements);
                        
    });

     /* Input Expand From Rückflug */
    inputDataBackTo.addEventListener("input", function() {
    
        let ergebnisArray = search_airport(inputDataBackTo.value);
        let datalist = document.getElementById("myListBackTo");   
        let optionElements = datalist.querySelectorAll("option");
    
        recommender(ergebnisArray, datalist, optionElements);
                            
    });
    

    /* Flughafen Suche */
    function SearchAirport(airportName) {
        let airports = search_airport(airportName);
        let airport = airport_details(airports[0][4]);
        return airport[4]; 
    }

    function SearchAirportHEight(airportName) {
        let airports = search_airport(airportName);
        let airport = airports[0][8];
        return airport;
    }

    function searchRout(from, to) {
        let routs = search_route(from, to);
        return routs;
    }


    /* Get The Input Data for the forms */
    let inputDate = document.getElementById("date-from");
    let inputDateBack = document.getElementById("rueckflugdatum")



    /* Button Click Event for Flight Search */

    let btnClick = document.getElementById("submitButton");

    btnClick.addEventListener("click", function(event) {
        event.preventDefault();

        let flightOptionsRueckflug = document.getElementById("flight-options-rueckflug");
        let flightOptions = document.getElementById("flight-options");
        let allTrs = document.querySelectorAll(".table tr");
        let flightInfoContainer = document.getElementById("flightInfoContainer");


        allTrs.forEach(function(event) {
            event.remove();
        });

        flightInfoContainer.style.display = "none";

        let inputDataValue = inputData.value;
        let inputDataNachValue = inputDataNach.value;
        let actualDay = new Date(inputDate.value).getDay();
        let inputDataBackValue = inputDataBack.value;
        let inputDataBackToValue = inputDataBackTo.value;
        let actualDayBack = new Date(inputDateBack.value).getDay();

        flightRoute(inputDataValue, inputDataNachValue, actualDay, flightOptions);
        flightRoute(inputDataBackValue, inputDataBackToValue, actualDayBack, flightOptionsRueckflug);
        flightSelection();
    });

    
     
    /* FLIGHT SEARCH FUNCTION 
        a = Airport from
        b = Airport to
        c = Flight Date
        d = Table for cheapest price
    */
    function flightRoute(a, b, c, d) {
    
        let route = [];
        let iataCodeFrom = SearchAirport(a);
        let iataCodeTo = SearchAirport(b);

        if (iataCodeFrom == "N" || iataCodeTo == "N") {
            return;
        };
        
        let routeDetails = searchRout(iataCodeFrom, iataCodeTo);
        let flightTimeData,
            flightTimeArray,
            flightTime;
        
        for (let i = 0; i < routeDetails.length; i++) {
            flightTimeData = routeDetails[i][7];
            flightTimeArray = flightTimeData.split("-");
    
            let flightDate = {
                0: flightTimeArray[6],
                1: flightTimeArray[0],
                2: flightTimeArray[1], 
                3: flightTimeArray[2],
                4: flightTimeArray[3],
                5: flightTimeArray[4],
                6: flightTimeArray[5]
                }  

            for (let a in flightDate) {


                if (flightDate[a] == 0) {
                    route.length = 0;
                    continue;
                }
    
                if (Object.keys(flightDate)[a] == c) {
            
                    flightTime = flightDate[a];
                    route.length = 0;
                    
                    route.push(routeDetails[i][1], routeDetails[i][2], routeDetails[i][3], routeDetails[i][6] + " Euro", flightTime + " Uhr", routeDetails[i][4] + " km", routeDetails[i][5] + " h");
                    
                    console.log(route_details(routeDetails[i][0]));
                    let newTrs = document.createElement("tr");
                    d.appendChild(newTrs);

                    for (let i = 0; i < route.length; i++) {
                        let newTds = document.createElement("td");
                         newTrs.appendChild(newTds).textContent = route[i];             
                    }
                }

            }; 


        };

        /* Kein Flug gefunden */
            
        let findTrs = document.querySelectorAll("table tr");
        let motherDiv = document.getElementById("newPs");
        let allPs = document.querySelectorAll("#newPs p");
            
        if (allPs.lengt !== 0) {
            for (let i = 0; i < allPs.length; i++) {
                motherDiv.removeChild(allPs[i]);
            }    
        }
            
        if (findTrs.length === 0) {
            let newParagraph = document.createElement("p");
            newParagraph.textContent = "Keine Flüge gefunden";
            motherDiv.appendChild(newParagraph);
        }
        
        lowestNumber(d);

    };

    /* Enable/Disable Rückflug */

    let rueckflugCheckbox = document.getElementById("backflight");

    rueckflugCheckbox.addEventListener("change", checkUncheck);
    window.addEventListener("load", checkUncheck);

    function checkUncheck() {
        let disabledInput = document.querySelectorAll(".backFlightCheck");

        disabledInput.forEach(function(input) {
            if (rueckflugCheckbox.checked) {
                input.disabled = false;
                input.style.opacity = "1";
            }
            else {
                input.disabled = true;
                input.style.opacity = "0.5";
            }
        });
    };
    



    /* kleinste Zahl auswählen für die Rotmarkierung! */
    function lowestNumber(d) {
        let trs = d.getElementsByTagName("tr");
        let zahlenArray = [];

        for (let i = 0; i < trs.length; i++) {
            let tds = trs[i].querySelectorAll(":nth-child(4)");

            for (let a = 0; a < tds.length; a++) {
                zahlenArray.push(parseFloat(tds[a].textContent));
            }
        }

        let kleinsteZahl = Math.min(...zahlenArray);

        for (let i = 0; i < trs.length; i++) {
            let tds = trs[i].querySelectorAll(":nth-child(4)");

            for (let a = 0; a < tds.length; a++) {
                if (parseFloat(tds[a].textContent) === kleinsteZahl) {
                    trs[i].classList.add("red");
                }
            }     
        }  
    };


    /* Flugoptionen Auswahl */
    function flightSelection() {
        
        let selection = document.getElementsByClassName("table");
        let selectTrs;
        
        for (let i = 0; i < selection.length; i++) {
            selectTrs = selection[i].querySelectorAll("tr");
            
            for (let a = 0; a < selectTrs.length; a++) {

                let tds = selectTrs[a].querySelectorAll("td");
                selectTrs[a].style.cursor = "pointer";

                selectTrs[a].addEventListener("click", function() {

                    let allTrs = document.querySelectorAll(".table tr td");

                        allTrs.forEach(function(event) {
                        event.classList.remove("bold-for-flight-selection");
                    });
                    
                    for (let c = 0; c < tds.length; c ++) {
                            tds[c].classList.add("bold-for-flight-selection");                 
                    }

                    let startAirport = document.getElementById("startAirport");
                    let endAirport = document.getElementById("endAirport");
                    let timeTransfer = document.getElementById("time");
                    let distanceTransfer = document.getElementById("distance");
                    let country = document.getElementById("country");
                    let countryLanding = document.getElementById("countryLanding");
                    let airlineData = document.getElementById("airlineData");
                    let airlineCountry = document.getElementById("airlineCountry");

                    let hours = Math.floor(parseFloat(tds[6].textContent));
                    let minutes = Math.round((parseFloat(tds[6].textContent) - hours) * 60);

                    timeTransfer.textContent = hours + " Stunde und " + minutes + " Minuten";      
                    timeTransfer.style.fontWeight = "bold"; 
                    
                    distanceTransfer.textContent = tds[5].textContent;

                    let airportstart = airport_details(tds[1].textContent);
                    let airportEnd = airport_details(tds[2].textContent);
                    startAirport.textContent = airportstart[1];
                    endAirport.textContent = airportEnd[1];

                    let startCountry = airportstart[3];
                    let endCountry = airportEnd[3];
                    country.textContent = startCountry;
                    countryLanding.textContent = endCountry;

                    let airlineDataTransfer = airline_details(tds[0].textContent);
                    airlineData.textContent = airlineDataTransfer[1];
                    airlineCountry.textContent = airlineDataTransfer[5];

                    let heightDifference = parseFloat(airport_details(tds[1].textContent)[8]) - parseFloat(airport_details(tds[2].textContent)[8]);
                    let height = document.getElementById("height");
                    height.textContent = heightDifference + " Meter";


                    let flightInfoContainer = document.getElementById("flightInfoContainer");
                    flightInfoContainer.style.display = "block";

                });

            }
        }
    };



});