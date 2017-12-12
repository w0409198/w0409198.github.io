/**
 * Created by w0409198 on 12/4/2017.
 */
/** Description
 * When the application starts, the main form of the web page will be mostly blank. To start, the user will be shown only a list of the country names in a select box populated from the countries.json file. Once the user selects any country from the list, the main form display area will show information specific to the selected country, as detailed above.
 In addition to displaying the country’s flag and basic demographics, the webpage should include a dropdown list to allow users to change the Total Area display from its default setting of square miles to square kilometres. When this occurs, the “Population Density per” output should be updated to show the current user preference, and the country’s population density should change to reflect the value in the chosen unit of measure.
 Users will be able to press a “Wiki Country” button at the bottom of each country’s display that will launch a new webpage that will load and display the Wikipedia page for that particular country. This should open in a new tab so that the user can easily return to the main web page.
 */
// Code on lines 24 to 49 were found at: http://www.encodedna.com/javascript/populate-select-dropdown-list-with-json-data-using-javascript.htm
"use strict";

window.onload = populateSelect();

// Setting gloabal variables for use later on in the program.
var countries;
var selected_index;
var current_state;
var current_density;
var world_pop = 0;
var wiki_link;

// This function takes the JSON values and then adds them into my drop down, as well as creates a world population total.

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

                world_pop = world_pop + parseInt(countries[i].Population);
            }
        }
    };
    xhr.open(method, url, true);
    xhr.send();
}
// This function populates all the intial values, so upon selection of a country, this will populate all inital values in the HTML
function show(ele) {
    var countryName = document.getElementById('country_name');
    countryName.innerHTML = '<h1>' + ele.options[ele.selectedIndex].text + '</h1>';

    var FlagName = document.getElementById('flag');
    FlagName.innerHTML = `<img src="flags/${ele.options[ele.selectedIndex].text}.png">`;

    selected_index = ele.options[ele.selectedIndex].value;

    var PopPrint = document.getElementById('population');
    PopPrint.value = countries[selected_index].Population;

    var default_area = document.getElementById('Area');
    default_area.value = (countries[selected_index].Area).toFixed(1);

    var population = parseInt(countries[selected_index].Population);
    var area = countries[selected_index].Area;
    var pop_density = population / area;
    var density_print = document.getElementById("pop_dens_print");
    density_print.value = pop_density.toFixed(2);

    var world_pop_value = parseFloat(population / world_pop) * 100;
    var world_pop_print = document.getElementById("percent_pop");
    world_pop_print.value = world_pop_value.toFixed(2) + "%";

    wiki_link = `https://en.wikipedia.org/wiki/${ele.options[ele.selectedIndex].text}`;

    current_state = "sq_mi";
    current_density = "sq_mi";
}
// This function determines its current state, and then calculates and outputs the proper area.
function AreaFunction(ele) {
    if (current_state == "sq_mi") {
        current_state = "sq_km";
        var AreaPrint = document.getElementById('Area');
        AreaPrint.value = (countries[selected_index].Area / 0.38610).toFixed(1);
    }

    else{
        current_state = "sq_mi";

        var default_area = document.getElementById('Area');
        default_area.value = (countries[selected_index].Area).toFixed(1);
    }
}
// This function determines its current state, and then calculates and outputs the proper Population Density.
function PopFunction() {
    if (current_density == "sq_mi"){
        current_density = "sq_km";

        var population = countries[selected_index].Population;
        var area = countries[selected_index].Area / 0.38610;

        var pop_density = population / area;
        var density_print = document.getElementById("pop_dens_print");
        density_print.value = pop_density.toFixed(2);
    }

    else{
        current_density = "sq_mi";
        population = countries[selected_index].Population;
        area = countries[selected_index].Area;

        pop_density = population / area;
        density_print = document.getElementById("pop_dens_print");
        density_print.value = pop_density.toFixed(2);
    }
}
// This functions reverts the drop down and radio buttons back to square miles, each time a new country is selected.
function Refresh() {
    document.getElementById('area_options').selectedIndex = 0;
    document.getElementById('pop_area_form').reset()
}
// This functions opens the wikipedia link.
function wikipedia (){
    window.open(wiki_link, "_blank")
}
// These are my event listeners.
document.getElementById('area_options').addEventListener("change", AreaFunction);
document.getElementById('pop_area_form').addEventListener("change", PopFunction);
document.getElementById("countries").addEventListener("change", Refresh);
document.getElementById("wiki").addEventListener("click", wikipedia);