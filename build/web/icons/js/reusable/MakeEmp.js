"use strict";
function MakeEmp(imgFile, empName, empTitle) {

    var ele = document.createElement("div");
    ele.classList.add("emp"); //styling to ele

    //creating img tag
    var empImage = document.createElement("img");
    empImage.src = imgFile;
    ele.appendChild(empImage);

    //h3 tag for employee name
    var empNameHeading = document.createElement("h3");
    empNameHeading.innerHTML = empName;
    ele.appendChild(empNameHeading);

    //h4 tag for employee title
    var empTitleHeading = document.createElement("h4");
    empTitleHeading.innerHTML = empTitle;
    ele.appendChild(empTitleHeading);

    return ele;
}