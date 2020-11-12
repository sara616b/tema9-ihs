"use strict"

document.addEventListener("DOMContentLoaded", hentData);


//Henter json data og starter højskole-siden (async for at få loadet json før man går videre)
async function hentData() {
    console.log("hentData");

    //json link: https://sarahfrederiksen.dk/kea/2_semester/tema9/ihs/wordpress/wp-json/wp/v2/
    const link = "https://sarahfrederiksen.dk/kea/2_semester/tema9/ihs/wordpress/wp-json/wp/v2/pages/10"
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

    //indhold i to kolloner indsættes
    document.querySelector("#left").innerHTML = data.content.rendered;
    document.querySelector("#right").innerHTML = "<img src='" + data.video.guid + "' alt=''>";

    //ikoner om fag
    document.querySelector("#fagikoner").innerHTML = "<a href='specialefag.html'><img src='" + data.ikoner[0].guid + "' alt='ikoner'></a>" +
        "<a href='idraetsfag.html'><img src='" + data.ikoner[1].guid + "' alt='ikoner'></a>" +
        "<a href='almenefag.html'><img src='" + data.ikoner[2].guid + "' alt='ikoner'></a>" +
        "<a href='interessefag.html'><img src='" + data.ikoner[3].guid + "' alt='ikoner'></a>" +
        "<a  id='last_ikon' href='faellesfag.html'><img src='" + data.ikoner[4].guid + "' alt='ikoner'></a>";

    //ikoner om 'mere'
    document.querySelector("#moreikoner").innerHTML = "<a href='https://ipaper.ipapercms.dk/IdraetshoejskolenSoenderborg/lange-kurser/hoejskoleelev-2020/'><img src='" + data.ikoneranden[0].guid + "' alt='ikoner'></a>" + "<a href='tilmelding.html'><img src='" + data.ikoneranden[1].guid + "' alt='ikoner'></a>" + "<a href='tilmelding.html'><img src='" + data.ikoneranden[2].guid + "' alt='ikoner'></a>" + "<a href='blog.html'><img src='" + data.ikoneranden[3].guid + "' alt='ikoner'></a>";

}
