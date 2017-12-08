/**
 * Created by w0409198 on 12/4/2017.
 */

// Code on lines X to X were found at: http://www.encodedna.com/javascript/populate-select-dropdown-list-with-json-data-using-javascript.htm
"use strict";

window.onload = populateSelect();


var countries;
var selected_index;
var current_state;
var current_density;

function populateSelect() {

    var xhr = new XMLHttpRequest(),
        method = 'GET',
        overrideMimeType = 'application/json',
        url = 'countries.json';

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {

            // PARSE JSON DATA.
            countries = JSON.parse(xhr.responseText);

            var ele = document.getElementById('countries');
            for (var i = 0; i < countries.length; i++) {
                // BIND DATA TO <select> ELEMENT.
                ele.innerHTML = ele.innerHTML +
                    '<option value="' + i + '">' + countries[i].Name + '</option>';
            }
        }
    };
    xhr.open(method, url, true);
    xhr.send();
}

function show(ele) {
    // GET THE SELECTED VALUE FROM <select> ELEMENT AND SHOW IT.
    var countryName = document.getElementById('country_name');
    countryName.innerHTML = '<h1>' + ele.options[ele.selectedIndex].text + '</h1>';

    var FlagName = document.getElementById('flag');
    FlagName.innerHTML = `<img src="flags/${ele.options[ele.selectedIndex].text}.png">`;

    selected_index = ele.options[ele.selectedIndex].value;

    var PopPrint = document.getElementById('population');
    PopPrint.value = countries[selected_index].Population;

    var default_area = document.getElementById('Area');
    default_area.value = countries[selected_index].Area;
    // var AreaPrint = document.getElementById('Area');
    // AreaPrint.innerHTML = countries[selected_index].Area;

    var population = countries[selected_index].Population;
    var area = countries[selected_index].Area;
    var pop_density = population / area;
    var density_print = document.getElementById("pop_dens_print");
    density_print.value = pop_density;

    current_state = "sq_mi";
    current_density = "sq_mi";
}

function AreaFunction(ele) {
    if (current_state == "sq_mi") {
        current_state = "sq_km";
        var AreaPrint = document.getElementById('Area');
        AreaPrint.value = countries[selected_index].Area / 0.38610;
        // alert('TEST')
    }

    else{
        current_state = "sq_mi";

        var default_area = document.getElementById('Area');
        default_area.value = countries[selected_index].Area;
    }
}

function PopFunction() {
    if (current_density == "sq_mi"){
        current_density = "sq_km";

        var population = countries[selected_index].Population;
        var area = countries[selected_index].Area / 0.38610;

        var pop_density = population / area;
        var density_print = document.getElementById("pop_dens_print");
        density_print.value = pop_density;
    }

    else{
        current_density = "sq_mi";
        population = countries[selected_index].Population;
        area = countries[selected_index].Area;

        pop_density = population / area;
        density_print = document.getElementById("pop_dens_print");
        density_print.value = pop_density;
    }
}

function Refresh() {
    //alert("HEY")
    document.getElementById('area_options').selectedIndex = 0;
    // var options = document.querySelectorAll('#area_options');
    // for (var i = 0, l = options.length; i < l; i++) {
    //     options[i].selected = options[i].defaultSelected;
    // }
}

document.getElementById('area_options').addEventListener("change", AreaFunction);
document.getElementById('pop_area_form').addEventListener("change", PopFunction);
document.getElementById("countries").addEventListener("change", Refresh);