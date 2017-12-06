"use strict";

function show_short() {
    var target_element = document.getElementById("goals_text");
    target_element.innerHTML = '<ol><li>Continue my education at Dalhousie in the two year applied computer science program.</li>' +
        '<li>2</li>' +
        '<li>3</li>' +
        '<li>4</li>' +
        '<li>5</li>' +
        '</ol>';

    var target_element_2 = document.getElementById("goals_head");
    target_element_2.innerHTML = 'Short Term Goals';
}

function show_long() {
    var target_element = document.getElementById("goals_text");
    target_element.innerHTML = '<ol>' +
        '<li>1</li>' +
        '<li>2</li>' +
        '<li>3</li>' +
        '<li>4</li>' +
        '<li>5</li>' +
        '</ol>';

    var target_element_2 = document.getElementById("goals_head");
    target_element_2.innerHTML = 'Long Term Goals';
}

document.getElementById("short_term").addEventListener("click", show_short);

document.getElementById("long_term").addEventListener("click", show_long);