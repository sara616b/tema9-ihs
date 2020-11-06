"use strict"

document.addEventListener("DOMContentLoaded", hentData);

let template = document.querySelector("template");
let fag;
let container = document.querySelector("#fag-content");


//Henter json data og starter højskole-siden (async for at få loadet json før man går videre)
async function hentData() {
    console.log("hentData");

    //json link: https://sarahfrederiksen.dk/kea/2_semester/tema9/ihs/wordpress/wp-json/wp/v2/
    const link = "https://sarahfrederiksen.dk/kea/2_semester/tema9/ihs/wordpress/wp-json/wp/v2/faggruppe/154"
    const respons = await fetch(link);
    const json = await respons.json();

    //vis splash
    vis(json);

    //filtrer fagene
    filterContent();
}

//Indsætter data fra wordpress på rette pladser på forsiden
function vis(data) {
    console.log("vis");

    //TODO - ret billeder og tekstfelter i wordpress og definer dem her
    document.querySelector("#splash").style.backgroundImage = "url(" + data.splashbillede.guid + ")";
    document.querySelector("#title").innerHTML = data.title.rendered;

}

//filtrer fagene efter faggruppe og viser dem
async function filterContent() {

    //json link: https://sarahfrederiksen.dk/kea/2_semester/tema9/ihs/wordpress/wp-json/wp/v2/
    const faglink = "https://sarahfrederiksen.dk/kea/2_semester/tema9/ihs/wordpress/wp-json/wp/v2/fag?per_page=100"
    const responsfag = await fetch(faglink);
    const jsonfag = await responsfag.json();
    let filtrerede;
    console.log("Det virker!!!");

    console.log(jsonfag);

    //filtrer efter kategori og vis
    jsonfag.forEach((fag) => {
        if (fag.kategori == "almene fag") {
            const klon = template.cloneNode(true).content;
            klon.querySelector("h2").textContent = fag.title.rendered;
            klon.querySelector("p").textContent = fag.kortintro;
            klon.querySelector(".fagelement").style.backgroundImage = "url(" + fag.billede.guid + ")";
            container.appendChild(klon);
            console.log("appendChild");
        }
    })
}
