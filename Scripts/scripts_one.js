"use strict";

function show_web_portfolio() {
    var target_element_1 = document.getElementById("work_samples_content");
    target_element_1.innerHTML = 'NEW INNEr TEXT' +
        '<p><button onClick="history.go(0)" class="button">Go Back</button></p>';

    var target_element_2 = document.getElementById("work_samples_head");
    target_element_2.innerHTML = 'Web Development Portfolio';


}



document.getElementById("web_portfolio").addEventListener("click", show_web_portfolio);