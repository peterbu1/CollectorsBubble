"use strict";
function LiveCarData() {
    var content = `
    `;
    var ele = document.createElement("div");
    ele.innerHTML = content; // the HTML code specified just above...
    var userContainer = document.createElement("div");
    ele.appendChild(userContainer);
    //ajax("json/users.json", processUserData, userContainer);
    ajax("webAPIs/listOtherAPI.jsp", processData, userContainer);
    function processData(obj) {

        if (obj.dbError.length !== 0) {
            document.getElementById("listHere").innerHTML = obj.dbError;
        } else {

            var carList = obj.carPostList;

            // print out JS object/array that was converted from JSON data by ajax function
            console.log(carList);

            // build new list as we want the fields to appear in the HTML table
            // we can decide the order we want the fields to appear (first property defined is shown first)
            // we can combine, decide to exclude etc...
            var newCarList = [];

            // modify properties (image and price) of the array of objects so it will look 
            // better on the page.
            for (var i = 0; i < carList.length; i++) {

                newCarList[i] = {};
                newCarList[i].Image = SortableTableUtils.makeImage(carList[i].carPic, "15rem");
                newCarList[i].CarModel = SortableTableUtils.makeText(carList[i].carModel);
                newCarList[i].CarYear = SortableTableUtils.makeText(carList[i].carYear);
                newCarList[i].CarPrice = SortableTableUtils.makeNumber(carList[i].carPrice, true);
                newCarList[i].UserRating = SortableTableUtils.makeNumber(carList[i].userRating, false);
                newCarList[i].ID = SortableTableUtils.makeText(carList[i].webUserId);
            }
            var report = MakeClickSort({title: "User List",
                objList: newCarList,
                sortOrderPropName: "CarModel",
                sortIcon: "icons/sortUpDown16.png"

            });
        }
        report.classList.add("clickSort");
        userContainer.appendChild(report);
    }


    var trailer = document.createElement("p");
    trailer.innerHTML = " ";
    ele.appendChild(trailer);
    return ele;
}

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


