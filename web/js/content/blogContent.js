"use strict";
        function blogContent() {

        // ` this is a "back tick". Use it to define multi-line strings in JavaScript.
        var content = ` 
      <h2>Blog Content </h2>
      <h4>Database </h4>
            
            <p>
                My database will take in the users and users will be able to upload and post their own cars and also have ratings on each others cars/posts The other table would consist of
            </p>
            <ul> 
                <li>
                    post_ID(PK)                 
                </li>
                <li>
                    user_ID(FK)  
                </li>
                <li>
                    car_model
                </li>
                <li>
                    car_year
                </li>       
                <li>
                    car_price
                </li>
                <li>
                    user_rating
                </li>
            </ul>
            <h4>My Web Development Experience</h4>
            
            <p>My overall experience with web designing thus far has been fascinating and extremely informative. Prior to this, I had no experience with web design development
            and hope to continue this great experience. Naturally I had to lookup a lot of what the tags meant so W3 schools reference sheet was extremely helpful. Studying the professors
            examples and watching her tutorials were also very beneficial in this development experience.</p>
           
            <h4>HomePage Homework</h4>
            
            <p>In this HW, I was able to learn the foundation of  a web page. Learning the HTML tags were both easy and hard. It was easy in the aspect of being able to have 
            a reference of what each tag meant, but difficult in trying to learn new tags and remembering what each meant. I think the most difficult task in this homework was trying to find fluidity
            and making a responsive site being able to adjust different viewing sizes. This took a lot of time to adjust using rem and percentages. In all, this homework was a very valuable homework as 
            it has allowed me to learn to build and develop the basic format of a web page.</p>
            
            <h4>JS UI Homework</h4>
            
            <p>In this homework, what was more tedious and hard would be writing HTML in JavaScript because it does not automaticaly indent or show any errors so I had to be mindful.
            The part that easy in this homework was tying the javascript and html together and connecting the files where it was appropiate or needed. What I found most valuable in this homework
            was understanding how javascript works and how we can use it in HTML to make and create reusable files.</p>
            
            <h4>JS Object Homework</h4>
            
            <p>In this homework, it was difficult trying to call objects and how to call its functions. The easy part of this assignment was understanding private and public data and methods
            and how it worked in javascript. What I found valuable in this homework was utilizing javascript's power to make reusable files to make reusable objects and being able to control 
            public and private methods.</p
            
            <h4>JS SlideShow  Homework</h4>
            
            <p>In this homework, we transferred what we learned from lab into our own website and incorporated AJAX and JSON files. The difficulty in this homework 
            was learning how to implement AJAX and JSON files. On the other side of things, creating the reusuable slideshow funct ion was not difficult as we had learn how to do this
            in our previous lab. And setting up a caption method was also easy as it was similar to the slideshow itself. What was valuable was leraning how to incorporate AJAX as it improves traffic 
            and response times and its performance.</p>
            
            <h4> ClickSort Homework</h4>
            
            <p>In this homework, I struggled most was trying to get the click sort to actually work. I wasn't absolutely sure what I was doing wrong until I had really studied 
            and gone through the code more thoroughly. After that, being able to create the reusuable functions makes it easy to create these tables and adding the click sort functionality to it.
            The important concepts is implementing the two functions into one from our previous lab and learning how we can  interact and sort data.</p>
            
            <h4> Tutorial Homework </h4>
            <p>In this homeowkr, finding components that would both interest me and match the style of my website was difficult as there are endless options to choose from and combinations. 
            Naturally, trying to incorporate these components into my own was somewhat challenging but helpful in the learning proces. </p>
            
            <h4> Database Homework </h4>
            <p> This homework was very informative and useful in learning a new SQL DBMS. It was difficult in learning the GUI of mySQL workbench as it was much different than using Oracle SQL 
            that is used in the Database Management System class. It was easy going through the assignment and 
            doing query/select statements and was a good refresher. Click <a target="_blank" href='Bui_Database.pdf'>here</a> to see my database document </p>
            
            <h4> Tutorial Component </h4>
            <p> The difficulty in this assignment is no doubt making the components reusable. It was much harder than it seem to begin with. Making the first component reusable was easy but 
            with the addition of a second component is where it became hard. Having to create many nested loops created a lot of complication and had to think it more visually and mapping it out physically
            The actual implementation of the reusable component I created I believe is user friendly. In all, this was a very valuable assignment in learning to create reusable components in javascript.</p>
            
            <h4> WEB API </h4>
            <p> This assignment was not difficult since it was essentially implementing what we learned from our previous lab into our homework and into a JS component.
                This assignment is incredibily beneficial in learning how to use and connect a database and implementing it into our website which are often used in websites. <br>
                Click <a target="_blank" href="webAPI_Errors.pdf">here</a> to see my error document<br>
                Click <a target="_blank" href="webAPIs/listUsersAPI.jsp">here</a> for my List Users Web API<br>
                Click <a target="_blank" href="webAPIs/listOtherAPI.jsp">here</a> for my List Car API<br>
            </p>
            
            <h4> REACT Homework </h4>
            <p> This assignment was very straight forwad as we were given sample code and essentially had to change it to match our own data. It taught us a different variation of
                javascript, one that utilizes AJAX. Because of this, it was very beneficial in learning and to add onto our tool belt. In all, this homework was not too complicated
                as I did not have any complications but very informative <p>
    `;
                var ele = document.createElement("div");
                ele.innerHTML = content;
                return ele;
        }