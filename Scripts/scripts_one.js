"use strict";

function show_web_portfolio() {
    var target_element_1 = document.getElementById("work_samples_content");
    target_element_1.innerHTML = 'NEW INNEr TEXT' +
        '<p><button onClick="history.go(0)" class="button">Go Back</button></p>';

    var target_element_2 = document.getElementById("work_samples_head");
    target_element_2.innerHTML = 'Web Development Portfolio';


}

function show_web_portfolio_1() {
    var target_element_1 = document.getElementById("work_samples_content");
    target_element_1.innerHTML = 'NEW INNEr TEXT TESTETSTET' +
        '<p><button onClick="history.go(0)" class="button">Go Back</button></p>';

    var target_element_2 = document.getElementById("work_samples_head");
    target_element_2.innerHTML = 'TEST';


}



document.getElementById("web_portfolio").addEventListener("click", show_web_portfolio);
document.getElementById("test").addEventListener("click", show_web_portfolio_1);