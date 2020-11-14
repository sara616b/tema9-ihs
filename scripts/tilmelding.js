"use strict"

document.addEventListener("DOMContentLoaded", hentData);

let template = document.querySelector("template");

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
async function vis(data) {
    console.log("vis");

    //indsæt billede og titel i splash
    document.querySelector("#splash").style.backgroundImage = "url(" + data.splashbillede.guid + ")";
    document.querySelector("#title").innerHTML = data.title.rendered;

    //sætter tre ikoner fra forside-page på index.html
    document.querySelector("#tilmeldknapper").innerHTML =
        "<a href='https://booking.ihs.dk/da/tilmelding-hojskole.asp'><img src='" + data.ikoner[0].guid + "' alt='ikoner'></a>" + "<a href='https://booking.ihs.dk/da/tilmelding-hojskole.asp'><img src='" + data.ikoner[1].guid + "' alt='ikoner'></a>" + "<a href='https://booking.ihs.dk/da/tilmelding-hojskole.asp'><img src='" + data.ikoner[2].guid + "' alt='ikoner'></a>";

    //hent info om priser
    const link2 = "https://sarahfrederiksen.dk/kea/2_semester/tema9/ihs/wordpress/wp-json/wp/v2/prissektion?per_page=100"
    const respons2 = await fetch(link2);
    const json2 = await respons2.json();
    const link3 = "https://sarahfrederiksen.dk/kea/2_semester/tema9/ihs/wordpress/wp-json/wp/v2/pages/234"
    const respons3 = await fetch(link3);
    const json3 = await respons3.json();


    //indsæt prisindhold


    //sætter tre ikoner fra forside-page på index.html
    document.querySelector("#pris").innerHTML = json3.content.rendered;


    json2.forEach((prissek) => {

        const klon = template.cloneNode(true).content;
        klon.querySelector("h2").textContent = prissek.title.rendered;

        klon.querySelector(".mere").id = prissek.slug + "mere";
        klon.querySelector(".mere").innerHTML = prissek.content.rendered;

        klon.querySelector("button").id = prissek.slug;
        klon.querySelector("button").addEventListener("click", visMere);

        document.querySelector("#tilmeldpris").appendChild(klon);
        console.log("appendChild");

    })
}

function visMere() {
    console.log("viser mere info");

    if (this.classList.contains("lukket")) {
        this.classList = "open"
        document.querySelector("#" + this.id + "mere").style.display = "flex";
        this.style.transform = "rotate(90deg)";
    } else {
        this.classList = "lukket"
        document.querySelector("#" + this.id + "mere").style.display = "none";
        this.style.transform = "rotate(0deg)";
    }
    /*
        document.querySelector("#" + this.id + "mere").style.display = "block";*/


}
