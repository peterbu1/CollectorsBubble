"use strict";
function empContent() {

    var content = `
        <style>
            
            .flexContainer {
                display:flex; 
                flex-direction: row;
                background-color: #6A605C;
            }
            .flexContainer .emp {
                width: 50%; /* to fit two columns inside the flexContainer */
                box-sizing: border-box; /* makes padding and border counted in the width */
            }
        </style>
       
    `;
    var ele = document.createElement("div");
    ele.innerHTML = content;
    var empContainer = document.createElement("div");
    empContainer.classList.add('flexContainer');
    ele.appendChild(empContainer);
    empContainer.appendChild(MakeEmp("http://cis-linux2.temple.edu/~sallyk/pics_users/abha.jpg", "Abha Belorkar", "Administrator"));
    empContainer.appendChild(MakeEmp("http://cis-linux2.temple.edu/~sallyk/pics_users/ed.jpg", "Edward Crotty", "Analyst"));


    return ele;
}