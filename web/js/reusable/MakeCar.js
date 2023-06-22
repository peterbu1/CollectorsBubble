"use strict";
function MakeCar(params) {

    var carObj = document.createElement("div");
    carObj.classList.add("car"); // adds styling  
    
    //public 
    carObj.carMake = params.carMake || "Insert Car Make";
    carObj.carModel = params.carModel || "Insert Car Model";
    carObj.carYear = params.carYear || "Insert the Year of Car";
    
    //private
    var userRating = params.userRating || "0.0";
    var carOwner = params.carOwner || "Insert Car Owner";
    var carImg = params.carImg || "pics/carsilhouette.png";
    
    var carImage = document.createElement("img");
    carImage.src = carImg;
    carObj.appendChild(carImage);
    
    //displays information about object car
    var carInfo = document.createElement("div");
    carObj.appendChild(carInfo);
    
//    carObj.display = function( ) {
//        
//        carInfo.innerHTML = "Car Make: " + carObj.make + "<br/>" + "Car Model: " + carObj.model + "<br/>" + "Car Year: " + carObj.year + "<br/>" + "Car Owner: " + owner +
//                                "<br/>" + "User rating: " + rating;
//    };
    
    var display = function(){
        carInfo.innerHTML = "Car Make: " + carObj.carMake + "<br/>" + "Car Model: " + carObj.carModel + "<br/>" + "Car Year: " + carObj.carYear + "<br/>" + "Car Owner: " + carOwner +
                                "<br/>" + "User rating: " + userRating;
    }
    //setter method for make
    carObj.setMake = function (newMake) {
        carObj.make = newMake;
        display();
    };
    
    var makeButton = document.createElement("button");
    makeButton.innerHTML = "Change make to: ";
    carObj.appendChild(makeButton);
    
    var newMakeInput = document.createElement("input");
    carObj.appendChild(newMakeInput);
    
    makeButton.onclick = function () {
        carObj.setMake(newMakeInput.value);
    };
    
    carObj.appendChild(document.createElement("br"));
    //setter method for model
    carObj.setModel = function (newModel) {
        carObj.model = newModel;
        display();
    };
    
    var modelButton = document.createElement("button");
    modelButton.innerHTML = "Change model to: ";
    carObj.appendChild(modelButton);
    
    var newModelInput = document.createElement("input");
    carObj.appendChild(newModelInput);
    
    modelButton.onclick = function () {
        carObj.setModel(newModelInput.value);
    };
    
    carObj.appendChild(document.createElement("br"));
    //setter method for year
    carObj.setYear = function (newYear) {
        carObj.year = newYear;
        display();
    };
    
    var yearButton = document.createElement("button");
    yearButton.innerHTML = "Change year to: ";
    carObj.appendChild(yearButton);
    
    var newYearInput = document.createElement("input");
    carObj.appendChild(newYearInput);
    
    yearButton.onclick = function () {
        carObj.setYear(newYearInput.value);
    };
    
    carObj.appendChild(document.createElement("br"));
    //setter method for owner
    carObj.setOwner = function (newOwner) {
        owner = newOwner;
        display();
    };
    
    var ownerButton = document.createElement("button");
    ownerButton.innerHTML = "Change owner to: ";
    carObj.appendChild(ownerButton);
    
    
    var newOwnerInput = document.createElement("input");
    carObj.appendChild(newOwnerInput);
    
    ownerButton.onclick = function () {
        carObj.setOwner(newOwnerInput.value);
    };
    
    carObj.appendChild(document.createElement("br"));
    //setter method for rating
    carObj.setRating = function (newRating) {
        rating = newRating;
        display();
    };
    
    var ratingButton = document.createElement("button");
    ratingButton.innerHTML = "Change Rating to: ";
    carObj.appendChild(ratingButton);
    
    var newRatingInput = document.createElement("input");
    carObj.appendChild(newRatingInput);
    
    ratingButton.onclick = function () {
        carObj.setRating(newRatingInput.value);
    };
    
    carObj.appendChild(document.createElement("br"));
    
    carObj.log = function () {
        console.log("Car Make is " + carObj.make + "car model is" + carObj.model + "car year is " + carObj.year + "owner of car is " + carObj.owner + "Rating of car is " + carObj.rating);
    };
    
    
    
    display();
    return carObj;
    
    
    
    
    
    
    
}