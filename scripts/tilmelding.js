"use strict"

document.addEventListener("DOMContentLoaded", hentData);


//Henter json data og starter højskole-siden (async for at få loadet json før man går videre)
async function hentData() {
    console.log("hentData");

    //json link: https://sarahfrederiksen.dk/kea/2_semester/tema9/ihs/wordpress/wp-json/wp/v2/
    const link = "https://sarahfrederiksen.dk/kea/2_semester/tema9/ihs/wordpress/wp-json/wp/v2/pages/18"
    const respons = await fetch(link);
    const json = await respons.json();

    //vis forsiden
    vis(json);
}

//Indsætter data fra wordpress på rette pladser på forsiden
function vis(data) {
    console.log("vis");

    //TODO - ret billeder og tekstfelter i wordpress og definer dem her
    document.querySelector("#splash").style.backgroundImage = "url(" + data.splashbillede.guid + ")";
    document.querySelector("#title").innerHTML = data.title.rendered;

    //sætter tre ikoner fra forside-page på index.html
    document.querySelector("#tilmelding").innerHTML =
        "<img src='" + data.ikoner[0].guid + "' alt='ikoner'>" + "<img src='" + data.ikoner[1].guid + "' alt='ikoner'>" + "<img src='" + data.ikoner[2].guid + "' alt='ikoner'>";

}
