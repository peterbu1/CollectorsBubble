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
    function processCarList(carList){
        
        for (var i=0; i<carList.length; i++) {
            carList[i].fileName = carList[i].photo;
            carList[i].caption = carList[i].make + "<br/>" + " $" + carList[i].price;
        }
        
        var ssOne = MakeSlideShow(carList,"slideShow");
        
        slideShowContainer.appendChild(ssOne);
        ssOne.setPicNum(0);
    }
    
    ajax("json/cats.json", processCatList, slideShowContainer);
    function processCatList(catList) {
        
        for(var i=0; i<catList.length; i++) {
            catList[i].fileName = catList[i].pic;
            catList[i].caption = catList[i].nickname;
        }
        
        var ssTwo = MakeSlideShow(catList,"slideShow");
        
        slideShowContainer.appendChild(ssTwo);
        
    }
    return ele;
    
}