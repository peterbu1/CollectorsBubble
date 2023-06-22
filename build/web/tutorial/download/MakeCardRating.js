function MakeCardRating(objList) {
    
    
    var mainContainer = document.createElement("div");
    var tab = document.createElement("div");
    var contentContainer = document.createElement("div");
    
    
    for (var i = 0; i < objList.length; i++) {
        var obj = MakeTabContent(objList[i]);
        tab.appendChild(MakeTabButton(objList[i]));
        contentContainer.appendChild(obj);
    }
    tab.classList.add("tab");
    mainContainer.appendChild(tab);
    mainContainer.appendChild(contentContainer);

    //Function to make content within each tab
    function MakeTabContent(obj) {
        const tabTitles = [];
        const tabContent = [];
        const starRating = [];
        var content = document.createElement("div");
        content.classList.add("tabcontent");


        var para = document.createElement("p");
        para.classList.add("flip-card");

        var flipcard = document.createElement("div");
        flipcard.classList.add("flip-card");
        content.appendChild(flipcard);

        var inner = document.createElement("div");
        inner.classList.add("flip-card-inner");
        flipcard.appendChild(inner);

        var front = document.createElement("div");
        front.classList.add("flip-card-front");
        inner.appendChild(front);

        var back = document.createElement("div");
        back.classList.add("flip-card-back");
        inner.appendChild(back);

        var image = document.createElement("img");
        front.appendChild(image);
        image.classList.add("flip-card");

        //putting properties of each objects into tabtitle, image, rating and content
        for (var prop in obj) {
            if (prop === "tabTitle") {
                tabTitles.push(obj[prop]);
            } else if (prop === "image") {
                image.src = obj[prop];
            } else if (prop === "rating") {
                starRating.push(obj[prop]);
            } else {
                tabContent.push(obj[prop]);
            }
        }
        //console.log(starRating);


        //determining how many stars for the rating
        for (var i = 0; i < starRating.length; i++) {
            if (starRating[i] === "0") {

                var span1 = document.createElement("span");
                span1.classList.add("fa");
                span1.classList.add("fa-star");
                back.appendChild(span1);
                var span2 = document.createElement("span");
                span2.classList.add("fa");
                span2.classList.add("fa-star");
                back.appendChild(span2);
                var span3 = document.createElement("span");
                span3.classList.add("fa");
                span3.classList.add("fa-star");
                back.appendChild(span3);
                var span4 = document.createElement("span");
                span4.classList.add("fa");
                span4.classList.add("fa-star");
                back.appendChild(span4);
                var span5 = document.createElement("span");
                span5.classList.add("fa");
                span5.classList.add("fa-star");
                back.appendChild(span5);
            }
            if (starRating[i] === "1") {
                var span1 = document.createElement("span");
                span1.classList.add("fa");
                span1.classList.add("fa-star");
                span1.classList.add("checked");
                back.appendChild(span1);
                var span2 = document.createElement("span");
                span2.classList.add("fa");
                span2.classList.add("fa-star");
                back.appendChild(span2);
                var span3 = document.createElement("span");
                span3.classList.add("fa");
                span3.classList.add("fa-star");
                back.appendChild(span3);
                var span4 = document.createElement("span");
                span4.classList.add("fa");
                span4.classList.add("fa-star");
                back.appendChild(span4);
                var span5 = document.createElement("span");
                span5.classList.add("fa");
                span5.classList.add("fa-star");
                back.appendChild(span5);
            }
            if (starRating[i] === "2") {
                var span1 = document.createElement("span");
                span1.classList.add("fa");
                span1.classList.add("fa-star");
                span1.classList.add("checked");
                back.appendChild(span1);
                var span2 = document.createElement("span");
                span2.classList.add("fa");
                span2.classList.add("fa-star");
                span2.classList.add("checked");
                back.appendChild(span2);
                var span3 = document.createElement("span");
                span3.classList.add("fa");
                span3.classList.add("fa-star");
                back.appendChild(span3);
                var span4 = document.createElement("span");
                span4.classList.add("fa");
                span4.classList.add("fa-star");
                back.appendChild(span4);
                var span5 = document.createElement("span");
                span5.classList.add("fa");
                span5.classList.add("fa-star");
                back.appendChild(span5);
            }
            if (starRating[i] === "3") {
                var span1 = document.createElement("span");
                span1.classList.add("fa");
                span1.classList.add("fa-star");
                span1.classList.add("checked");
                back.appendChild(span1);
                var span2 = document.createElement("span");
                span2.classList.add("fa");
                span2.classList.add("fa-star");
                span2.classList.add("checked");
                back.appendChild(span2);
                var span3 = document.createElement("span");
                span3.classList.add("fa");
                span3.classList.add("fa-star");
                span3.classList.add("checked");
                back.appendChild(span3);
                var span4 = document.createElement("span");
                span4.classList.add("fa");
                span4.classList.add("fa-star");
                back.appendChild(span4);
                var span5 = document.createElement("span");
                span5.classList.add("fa");
                span5.classList.add("fa-star");
                back.appendChild(span5);
            }
            if (starRating[i] === "4") {
                var span1 = document.createElement("span");
                span1.classList.add("fa");
                span1.classList.add("fa-star");
                span1.classList.add("checked");
                back.appendChild(span1);
                var span2 = document.createElement("span");
                span2.classList.add("fa");
                span2.classList.add("fa-star");
                span2.classList.add("checked");
                back.appendChild(span2);
                var span3 = document.createElement("span");
                span3.classList.add("fa");
                span3.classList.add("fa-star");
                span3.classList.add("checked");
                back.appendChild(span3);
                var span4 = document.createElement("span");
                span4.classList.add("fa");
                span4.classList.add("fa-star");
                span4.classList.add("checked");
                back.appendChild(span4);
                var span5 = document.createElement("span");
                span5.classList.add("fa");
                span5.classList.add("fa-star");
                back.appendChild(span5);
            }
            if (starRating[i] === "5") {
                var span1 = document.createElement("span");
                span1.classList.add("fa");
                span1.classList.add("fa-star");
                span1.classList.add("checked");
                back.appendChild(span1);
                var span2 = document.createElement("span");
                span2.classList.add("fa");
                span2.classList.add("fa-star");
                span2.classList.add("checked");
                back.appendChild(span2);
                var span3 = document.createElement("span");
                span3.classList.add("fa");
                span3.classList.add("fa-star");
                span3.classList.add("checked");
                back.appendChild(span3);
                var span4 = document.createElement("span");
                span4.classList.add("fa");
                span4.classList.add("fa-star");
                span4.classList.add("checked");
                back.appendChild(span4);
                var span5 = document.createElement("span");
                span5.classList.add("fa");
                span5.classList.add("fa-star");
                span5.classList.add("checked");
                back.appendChild(span5);
            }
        }
        
        //iterates through the tabTitle array to give tabtitle the same id as content
        for (var i = 0; i < tabTitles.length; i++) {
            content.id = tabTitles[i];
        }
        //iterates through the tabcontent and attaches it to the back of flip card
        for (var i = 0; i < tabContent.length; i++) {
            back.innerHTML = back.innerHTML + "<br>" + tabContent[i];

        }

        console.log(content);

        return  content;


    }

    //function making the tab buttons
    function MakeTabButton(obj) {
        var tabButton = document.createElement("button");
        tabButton.classList.add("tabbutton");
        tabButton.classList.add("tablinks");
        
        //if prop is tabtitle put into tabtitle array
        const tabTitles = [];
        for (var prop in obj) {
            if (prop === "tabTitle") {
                tabTitles.push(obj[prop]);
            }
        }
        //naming the tabbuttons the given titles
        for (var i = 0; i < tabTitles.length; i++) {
            tabButton.innerHTML = tabTitles[i];
        }
        
        //function to iterate through each tab link
        tabButton.onclick = function (evt) {
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            for (i = 0; i < tabTitles.length; i++) {
                document.getElementById(tabTitles[i]).style.display = "block";
            }
            //document.getElementById(tabTitles[i]).style.display = "block";
            evt.currentTarget.className += " active";
        };



        return tabButton;


    }





    return mainContainer;



    //console.log(tabContent);






}