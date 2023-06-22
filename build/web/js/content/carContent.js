"use strict";
        function carContent() {

        var content = `
        <style>
            p {
                margin-left: 0.5rem;
            }
            .flexContainer {
                display:flex; 
                flex-direction: row;
                background-color: #F6AE99;
            }
            .flexContainer .obj {
                width: 50%; /* to fit two columns inside the flexContainer */
                box-sizing: border-box; /* makes padding and border counted in the width */
            }
            
        </style>
        <h3>My Car Objects</h3>
        
        <p>
            Below is two car objects created by MakeCar. We are able to set and change the properties of the car but not the owner of the car themselves. 
            By entering in the appropiate textbox and pressing on the button, it will change the property to the user's desire. On the right side, the properties of the car object
            is set by the default values.
        </p>
    `;
                var ele = document.createElement("div");
                ele.innerHTML = content; // the HTML code specified just above...
                var carObjContainer = document.createElement("div");
                carObjContainer.classList.add('flexContainer'); // see styling in this file, above...
                ele.appendChild(carObjContainer);
                var car1 = MakeCar({carMake:"Acura",
                        carModel:"NSX",
                        carYear:"1991",
                        carOwner:"Peter",
                        userRating:"10/10",
                        carImg: "pics/acura_nsx.jpeg"});
                var car2 = MakeCar({});
                carObjContainer.appendChild(car1);
                carObjContainer.appendChild(car2);
                return ele;
        }