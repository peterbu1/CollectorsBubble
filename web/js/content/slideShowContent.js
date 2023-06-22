function slideShowContent() {
    "use strict";

    var content = `
    <style>
        .slideShowContainer {
            display:flex; 
            flex-direction: row;
        }
        .slideShow {
            box-sizing: border-box; 
            width: 50%;
        }
    </style>
`;

    var ele = document.createElement("div");
    ele.innerHTML = content;
    var slideShowContainer = document.createElement("div");
    slideShowContainer.classList.add('slideShowContainer');

    ele.appendChild(slideShowContainer);

    ajax("json/cars.json", processCarList, slideShowContainer);
    function processCarList(carList) {

        for (var i = 0; i < carList.length; i++) {
            carList[i].fileName = carList[i].photo;
            carList[i].caption = carList[i].make + "<br/>" + " $" + carList[i].price;
        }

        var ssOne = MakeSlideShow({objArray: carList,
            captionStyle: "captionClass",
            optionalBorder: "10px solid red"
        });

        slideShowContainer.appendChild(ssOne);
        ssOne.setPicNum(1);
    }

    ajax("json/cats.json", processCatList, slideShowContainer);
    function processCatList(catList) {

        for (var i = 0; i < catList.length; i++) {
            catList[i].fileName = catList[i].pic;
            catList[i].caption = catList[i].nickname;
        }

        var ssTwo = MakeSlideShow({objArray: catList,
            captionStyle: "captionClass",
            optionalBorder: "10px solid red"
        });

        slideShowContainer.appendChild(ssTwo);
        ssTwo.setCaption("I'm a cute kitten", 2);

    }
    return ele;

}