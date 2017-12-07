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
        '<p><img src="images/work_samples/Full_Site.png" align="right" id="work_sample"> </p>' +
        'Of course during the building of this website, I had to keep in mind the overall asthetic appeal of the site. I found colours that go well with' +
        ' each other' +
        '<p>Finding a free to use background picture was also a large barrier. Though there are many free to use pictures on the internet, not all are the best looking' +
        ' Therefore I had to do a bit of detailed searching, however I eneded finding a nice one in the end.</p>' +
        '<p><button onClick="history.go(0)" class="button">Go Back</button></p>';

    var target_element_2 = document.getElementById("work_samples_head");
    target_element_2.innerHTML = 'Web Development Portfolio';


}

function show_prog_clientside() {
    var target_element_1 = document.getElementById("work_samples_content");
    target_element_1.innerHTML = 'NEW INNEr TEXT TESTETSTET' +
        '<p><button onClick="history.go(0)" class="button">Go Back</button></p>';

    var target_element_2 = document.getElementById("work_samples_head");
    target_element_2.innerHTML = 'JavaScript / HTML Client Side Application';


}



document.getElementById("web_portfolio").addEventListener("click", show_web_portfolio);
document.getElementById("prog_clientside").addEventListener("click", show_prog_clientside);