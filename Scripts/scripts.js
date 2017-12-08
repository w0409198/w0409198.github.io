"use strict";

function show_short() {
    var target_element = document.getElementById("goals_text");
    target_element.innerHTML = '<ol><li>Continue my education at Dalhousie in the two year applied computer science program.</li>' +
        '<li>To develop a better understanding of Networking and Windows Administration</li>' +
        '<li>To further develop my small business, and apply my new knowledge to all projects I take on.</li>' +
        '<li>To learn something new each and every day. Whether it be technical, or something personal, I want to continue my learning.</li>' +
        '<li>To become accredited in certain aspects of the IT Industry. IE. A Microsoft Certified Professional</li>' +
        '</ol>';

    var target_element_2 = document.getElementById("goals_head");
    target_element_2.innerHTML = 'Short Term Goals';
}

function show_long() {
    var target_element = document.getElementById("goals_text");
    target_element.innerHTML = '<ol><li>Bridge the cap between property development / management and technology into one product / application. </li>' +
        '<li>I would like to continue working with BCE, however in the IT department.</li>' +
        '<li>Would like to own my own home. I am still determining whether that is here, or abroad.</li>' +
        '<li>I want to be able to provide a solid earning to my family, by working in the industry that I truly love.</li>' +
        '<li>This is more a life goal, than anything, but this is to never become outdated. I desire to stay on top of industry standards, and to always know what is happening.</li>' +
        '</ol>';

    var target_element_2 = document.getElementById("goals_head");
    target_element_2.innerHTML = 'Long Term Goals';
}

document.getElementById("short_term").addEventListener("click", show_short);

document.getElementById("long_term").addEventListener("click", show_long);
