// This version of MakeTable expects objList to hold an array of objects 
// in which all the properties are already "td" tags which may contain images, 
// alignment, etc. 

function MakeClickSort(params) {
//title, objList, sortOrderPropName, sortIcon
    var title = params.title;
    var objList = params.objList;
    var sortOrderPropName = params.sortOrderPropName;
    var sortIcon = params.sortIcon;

    function jsSort(objList, byProperty) {
        if (!objList || !objList[0]) {
            var message = "Cannot sort. Need an objList with at least one object";
            //console.log(message);
            alert(message);
            return;  // early return -- dont try to sort.
        }
        var obj = objList[0];
        if (!obj[byProperty]) {
            var message = "objList does not have property " + byProperty + " -- cannot sort by that property.";
            //console.log(message);
            alert(message);
            return;  // early return -- dont try to sort.
        }
        if (!obj[byProperty].sortOrder || obj[byProperty].sortOrder === null) {
            var message = "Cannot sort objList by property " + byProperty +
                    " because this property never had it's sortOrder set (by a method in SortableTableUtils.js).";
            //console.log(message);
            alert(message);
            return;  // early return -- dont try to sort.
        }

        // q and z are just elements in the array and the funcction has to return negative or positive or zero 
        // depending on the comparison of q and z.
        // using JS associative array notation (property name char string used inside square brackets 
        // as it if was an index value). 

        objList.sort(function (q, z) {  // in line (and anonymous) def'n of fn to compare list elements. 
            // the function you create is supposed to return positive (if first bigger), 0 if equal, negative otherwise.

            // using JS associative array notation, extract the 'byProperty' property from the two
            // list elements so you can compare them.
            var qVal = q[byProperty].sortOrder;
            var zVal = z[byProperty].sortOrder;
            var c = 0;
            if (qVal > zVal) {
                c = 1;
            } else if (qVal < zVal) {
                c = -1;
            }
            //console.log("comparing " + qVal + " to " + zVal + " is " + c);
            return c;
        });

    } // jsSort

    function isToShow(obj, searchKey) {
        if (!searchKey || searchKey.length === 0) {
            return true; // show the object if searchKey is empty
        }
        var searchKeyUpper = searchKey.toUpperCase();
        for (var prop in obj) {
            // remember that all properties of obj are actually <td> tags, not just characters.
            var propVal = obj[prop].innerHTML; // associative array, using property name as if index. 

            //console.log("checking if " + searchKeyUpper + " is in " + propVal);
            var propValUpper = propVal.toUpperCase();
            if (propValUpper.includes(searchKeyUpper)) {

                // do not say it's a hit if it's an image tag 
                // that can have a really long URL in its src attribute.
                if (!propValUpper.includes("<IMG")) {
                    //console.log("yes it is inside");
                    return true;
                }
            }
        }
        //console.log("no it is not inside");
        return false;
    } // isToShow 

    // sort 'list' by 'sortOrderPropName'. 
    // add a new tbody to table, inserting rows from the sorted list.

    function addTableBody(table, list, sortOrderPropName, fitlerVal) {

        // remove old tbody element if there is one (else you'll get the new sorted rows 
        // added to end of what's there).
        var oldBody = table.getElementsByTagName("tbody");
        if (oldBody[0]) {
            console.log("ready to remove oldBody");
            table.removeChild(oldBody[0]);
        }
        jsSort(list, sortOrderPropName);

        // Add one row (to HTML table) per element in the array.
        // Each array element has a list of properties that will become 
        // td elements (Table Data, a cell) in the HTML table. 
        var tableBody = document.createElement("tbody");
        table.appendChild(tableBody);

        // To the tbody, add one row (to HTML table) per object in the object list.
        // To each row, add a td element (Table Data, a cell) that holds the object's 
        // property values. 
        for (var i in objList) {
            if (isToShow(objList[i], fitlerVal)) {
                var tableRow = document.createElement("tr");
                tableBody.appendChild(tableRow);

                var obj = objList[i];
                for (var prop in obj) {
                    tableRow.appendChild(obj[prop]);
                }
            }
        }

    } // addTableBody




    // **** ENTRY POINT ****

    // Create a container to hold the title (heading) and the HTML table
    var container = document.createElement("div");


    // Add a heading (for the title) and add that to the container
    var heading = document.createElement("h2");
    heading.innerHTML = title;
    container.appendChild(heading);

    var searchDiv = document.createElement("div");
    heading.appendChild(searchDiv);
    searchDiv.innerHTML = "Filter:";

    // Create a filter text box for user input and append it.
    var searchInput = document.createElement("input");
    searchDiv.appendChild(searchInput);
    // Create a new HTML table tag (DOM object) and add that to the container.
    var newTable = document.createElement("table");
    container.appendChild(newTable);

    // To the HTML table, add a tr element to hold the headings of our table.
    var headerRow = document.createElement("tr");
    newTable.appendChild(headerRow);

    // ADD one column heading per property in the object list.
    var obj = objList[0];
    for (var propName in obj) {
        var headingCell = document.createElement("th");

        // underscores in the property name will be replaced by space in the column headings.
        headingText = propName.replaceAll("_", " ");

        // if a property name starts with underscore then we assume that column should not 
        // be click sortable (may be it is an image column or something). 
        if (propName[0] !== "_") {
            headingText = "<img src='" + sortIcon + "'/> " + headingText;
            headingCell.sortPropName = propName;
            headingCell.onclick = function () {
                //console.log("WILL SORT ON " + this.sortPropName);
                addTableBody(newTable, objList, this.sortPropName);
            };

        }
        headingCell.innerHTML = headingText;
        headerRow.appendChild(headingCell);
    }

    addTableBody(newTable, objList, sortOrderPropName, "");
    //addTableBody(newTable,objList,"");
    searchInput.onkeyup = function () {
        //console.log("search filter changed to " + searchInput.value);
        addTableBody(newTable, objList, sortOrderPropName, searchInput.value);
    };



    return container;

}  