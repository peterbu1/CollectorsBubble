"use strict";
        function homeContent () {

// ` this is a "back tick". You can use it to define multi-line strings in JavaScript.
// 
// NetBeans menu option "Source - Format" will not work with the text inside of a 
// String, so you have to do this indentation manually with the editor. 

        var content = `

        <h2>For Car Connoisseurs</h2>
    
            <p>
                A community for car connoisseurs and enthusiast come together where we all share the same interest.
                <br>A place to share experiences with our cars and share our project car builds.
                <br>People can rate each others cars and the highest liked cars will be featured.
                <br>Through this we can connect with one another not just on this platform but also on <a href="https://www.instagram.com">Instagram</a>
                <br>This is a site where there will be forums for people who have questions about their cars and others with experience can help.
                <br>We welcome everyone even those who want to get into the car scene.
            </p>
            
            
            <p style="text-align:center;">
                <img src="pics/exotic_cars.jpg" style="width:40%; border-radius:10px;">
            </p>
            
            

        
        
    
    
    `;
                var ele = document.createElement("div");
                ele.innerHTML = content;
                return ele;
        }