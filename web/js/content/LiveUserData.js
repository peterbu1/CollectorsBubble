"use strict";
function LiveUserData() {
    var content = `
    `;
    var ele = document.createElement("div");
    ele.innerHTML = content; // the HTML code specified just above...
    var userContainer = document.createElement("div");
    ele.appendChild(userContainer);
    //ajax("json/users.json", processUserData, userContainer);
    ajax("webAPIs/listUsersAPI.jsp", processData, userContainer);
    function processData(obj) {

        if (obj.dbError.length !== 0) {
            document.getElementById("listHere").innerHTML = obj.dbError;
        } else {

            var userList = obj.webUserList;

            // print out JS object/array that was converted from JSON data by ajax function
            console.log(userList);

            // build new list as we want the fields to appear in the HTML table
            // we can decide the order we want the fields to appear (first property defined is shown first)
            // we can combine, decide to exclude etc...
            var newUserList = [];

            // modify properties (image and price) of the array of objects so it will look 
            // better on the page.
            for (var i = 0; i < userList.length; i++) {

                newUserList[i] = {};
                newUserList[i].Image = SortableTableUtils.makeImage(userList[i].image, "5rem");
                newUserList[i].User_Email = SortableTableUtils.makeText(userList[i].userEmail);
                newUserList[i].Birthdate = SortableTableUtils.makeText(userList[i].birthday);
                newUserList[i].MembershipFee = SortableTableUtils.makeNumber(userList[i].membershipFee, true);
                newUserList[i].Role = SortableTableUtils.makeText(userList[i].userRoleId + " " + userList[i].userRoleType);
            }
            var report = MakeClickSort({title: "User List",
                objList: newUserList,
                sortOrderPropName: "User_Email",
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


