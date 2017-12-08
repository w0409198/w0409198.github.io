"use strict";

function show_web_portfolio() {
    var target_element_1 = document.getElementById("work_samples_content");
    target_element_1.innerHTML = 'Throughout my first semester Web Development class, we studied a wide range of topics, from the basics of setting the title tag, to creating a responsive design. As the final' +
        ' project for this class we had to create our portfolio website, which, is the website you are viewing this on.' +
        '<p><img src="images/work_samples/code_snippet_one.png" align="left" id="work_sample">This code snippet is the behind the scenes of the text on this page.' +
        ' All text on this page is loaded via JavaScript!</p>' +
        '<p>Behind the scenes is truly what makes the web work, and is extremely fascinating to me!' +
        'I decided to implement Javascript into my website initally because I had just learned Client Side programming, and wanted to implement it.' +
        ' However it grew on me that I could do some interesting things, like change what is displayed on a page with the click of a button! </p>' +
        '<br><br>' +
        '<p><img src="images/work_samples/Full_Site.png" align="right" id="work_sample"><br><br><br>' +
        'Of course during the building of this website, I had to keep in mind the overall asthetic appeal of the site. I found colours that go well with' +
        ' each other</p>' +
        '<p>Finding a free to use background picture was also a large barrier. Though there are many free to use pictures on the internet, not all are the best looking' +
        ' Therefore I had to do a bit of detailed searching, however I eneded finding a nice one in the end.</p>' +
        '<p><button onClick="history.go(0)" class="button">Go Back</button></p>';

    var target_element_2 = document.getElementById("work_samples_head");
    target_element_2.innerHTML = 'Web Development Portfolio';


}

function show_prog_clientside() {
    var target_element_1 = document.getElementById("work_samples_content");
    target_element_1.innerHTML = 'Throughout my first semester Logic and Programming course, I expanded my knowledge ten fold. Coming into that course I had no knowledge' +
        ' on what Javascript was / is. Now leaving first semester, I extremely comfortable to sit down, and code, and feel confident with my work.' +
        '<p><img src="images/work_samples/code_snippet_two.png" align="left" id="work_sample">This code snippet you can see to the left, is the Javscript code running my project. Ths first' +
        ' bit that you are looking at is the behind the scenes of reading from a .JSON file and organizing them into a drop down list, that is all the countries.' +
        ' Further on, I do math on some numbers to calculate the population density etc.</p>' +
        '<br><br>' +
        '<p><img src="images/work_samples/Java_Full_Site.png" align="right" id="work_sample"><br><br><br>' +
        'On the right, I have displayed a picture of the project running in the browser. Upon selection of a country, it updates the name at the top, and then filles' +
        ' out all the information in the site, IE. Population, Population Density and percentage of world population. </p>' +
        '<p>There is also a Wiki button, which when completed, will take the user directly to that countries Wikipedia page. This final step is going to take some work, especially' +
        ' with the link, and variables. I invite you to try out the live demo of my project.</p>' +
        '<p><button onClick="history.go(0)" class="button">Go Back</button></p>' +
        '<p><a href="ClientSideProject" class="button">Live Demo (Work In Progress)</a></p>';

    var target_element_2 = document.getElementById("work_samples_head");
    target_element_2.innerHTML = 'JavaScript / HTML Client Side Application';


}



document.getElementById("web_portfolio").addEventListener("click", show_web_portfolio);
document.getElementById("prog_clientside").addEventListener("click", show_prog_clientside);