
"use strict";
function clickSortUserContent() {
    var content = `
`;

    var ele = document.createElement("div");
    ele.innerHTML = content;
    var userContainer = document.createElement("div");
    ele.appendChild(userContainer);

    ajax("json/users.json", processUserData, userContainer);
    function processUserData(userList) {
        var newUserList = [];
        for (var i = 0; i < userList.length; i++) {
            newUserList[i] = {};
            newUserList[i].Image = SortableTableUtils.makeImage(userList[i].image, "4rem");
            newUserList[i].User_Email = SortableTableUtils.makeText(userList[i].userEmail);
            newUserList[i].Birthday = SortableTableUtils.makeDate(userList[i].birthday);
            newUserList[i].User_Role = SortableTableUtils.makeText(userList[i].userRoleId + " " + userList[i].userRoleType);
        }
        var report = MakeClickSort({title: "User List",
            objList: newUserList,
            sortOrderPropName: "User_Email",
            sortIcon: "icons/sortUpDown16.png"

        });
        //var report = MakeClickSortTable("User List", newUserList, "User_Email", "icons/sortUpDown16.png");
        report.classList.add("clickSort");
        userContainer.appendChild(report);

    }
    return ele;
}