"use strict";
function MakeSlideShow(params) {


    // get reference to the DOM object inside which the SlideShow image 
    // and buttons will be created.
    var slideShow = document.createElement("div");
    slideShow.classList.add("slideShow");
    var objArray = params.objArray;
    var optional = params.optionalBorder || "20px solid #00008B";
    slideShow.style.border = optional;



    // add a div that will hold the image
    var imgContainer = document.createElement("div");
    imgContainer.classList.add("imgContainer");
    slideShow.appendChild(imgContainer);

    // add image into the div & set the image's src attribute to show picture
    var myImage = document.createElement("img");
    imgContainer.append(myImage);


    var captionContainer = document.createElement("div");
    captionContainer.classList.add(params.captionStyle);
    slideShow.appendChild(captionContainer);


    // add back button under the image (and empty paragraph)
    var backButton = document.createElement("button");
    backButton.innerHTML = " &lt; ";
    slideShow.appendChild(backButton);

    // add forward button under the image (and empty paragraph)
    var fwdButton = document.createElement("button");
    fwdButton.innerHTML = " &gt; ";
    slideShow.appendChild(fwdButton);

    // private variable that keeps track of which image is showing
    var picNum = 0;

    //setPic is a public function that returns the displayed pic
    slideShow.setPic = function () {
        myImage.src = objArray[picNum].fileName;
        captionContainer.innerHTML = objArray[picNum].caption;

    };

    slideShow.setCaption = function (newCaption, newNum) {
        objArray[newNum].caption = newCaption;
        slideShow.setPic();
    };

    // Advance to next image in the picture list
    function nextPic() {

        if (picNum < objArray.length - 1) {
            picNum++;
        }
        slideShow.setPic();
    }

    // Go to the previous image in the picture list
    function prevPic() {

        if (picNum > 0) {
            picNum--;
        }
        slideShow.setPic();
    }
    // add next and previous funcionality to next and previous buttons
    backButton.onclick = prevPic;
    fwdButton.onclick = nextPic;

    slideShow.setPicNum = function (newNum) {
        if ((newNum >= 0) && (newNum < objArray.length)) {
            picNum = newNum;
            // change the src attribute of the image element to the desired new image)				
            slideShow.setPic();
        }
    };


    slideShow.setPic();
    return slideShow;
}