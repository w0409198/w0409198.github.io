"use strict";

function show_web_portfolio() {
    var target_element_1 = document.getElementById("work_samples_content");
    target_element_1.innerHTML = 'Throughout my first semester Web Development class, we studied a wide range of topics, from the basics of setting the title tag, to creating a responsive design. As the final' +
        ' project for this class we had to create our portfolio website, which, is the website you are viewing this on.' +
        '<p><img src="/images/work_samples/code_snippet_one.png" align="left" border="2px white"> </p>' +
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