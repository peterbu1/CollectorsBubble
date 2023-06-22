

"use strict";
function clickSortCarContent() {
    var content = `
`;

    var ele = document.createElement("div");
    ele.innerHTML = content;
    var userContainer = document.createElement("div");
    ele.appendChild(userContainer);

    ajax("json/cars.json", processUserData, userContainer);
    function processUserData(carList) {
        var newCarList = [];
        for (var i = 0; i < carList.length; i++) {
            newCarList[i] = {};
            newCarList[i].Photo = SortableTableUtils.makeImage(carList[i].photo, "15rem");
            newCarList[i].Make = SortableTableUtils.makeText(carList[i].make);
            newCarList[i].Model = SortableTableUtils.makeText(carList[i].model);
            newCarList[i].Year = SortableTableUtils.makeText(carList[i].year);
            newCarList[i].Price = SortableTableUtils.makeText(carList[i].price);
            newCarList[i].UserRating = SortableTableUtils.makeText(carList[i].userRating);
            newCarList[i].User_Role = SortableTableUtils.makeText(carList[i].userRoleId + " " + carList[i].userRoleType);
        }
        var report = MakeClickSort({title: "Car List",
            objList: newCarList,
            sortOrderPropName: "Make",
            sortIcon: "icons/sortUpDown16.png"
        });
        //var report = MakeClickSortTable("Car List", newCarList, "Make", "icons/sortUpDown16.png");
        report.classList.add("clickSort");
        userContainer.appendChild(report);

    }
    var trailer = document.createElement("p");
    trailer.innerHTML = " ";
    ele.appendChild(trailer);
    return ele;
}