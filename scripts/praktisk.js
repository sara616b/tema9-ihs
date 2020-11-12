document.addEventListener("DOMContentLoaded", hentData);

let template = document.querySelector("template");
let fag;
let container = document.querySelector("#fag-content");


//Henter json data og starter højskole-siden (async for at få loadet json før man går videre)
async function hentData() {
    console.log("hentData");

    //json link: https://sarahfrederiksen.dk/kea/2_semester/tema9/ihs/wordpress/wp-json/wp/v2/
    const link = "https://sarahfrederiksen.dk/kea/2_semester/tema9/ihs/wordpress/wp-json/wp/v2/pages/323";
    const respons = await fetch(link);
    const json = await respons.json();

    //vis splash
    vis(json);

    //filtrer fagene
    //filterContent();
}

//Indsætter data fra wordpress på rette pladser på forsiden
function vis(data) {
    console.log("vis");

    //TODO - ret billeder og tekstfelter i wordpress og definer dem her
    document.querySelector("#splash").style.backgroundImage = "url(" + data.splashbillede.guid + ")";
    document.querySelector("#title").innerHTML = data.title.rendered;

    document.querySelector("#content").innerHTML = data.content.rendered;

}

/*//filtrer fagene efter faggruppe og viser dem
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
        if (fag.kategori == "specialefag") {
            const klon = template.cloneNode(true).content;
            klon.querySelector("h2").textContent = fag.title.rendered;
            klon.querySelector("p").textContent = fag.kortintro;
            klon.querySelector(".fagelement").style.backgroundImage = "url(" + fag.billede.guid + ")";

            klon.querySelector("button").id = fag.slug;
            klon.querySelector("button").addEventListener("click", visMere);


            klon.querySelector(".mere").id = fag.slug + "mere";
            klon.querySelector(".mere").textContent = fag.langtekst;

            container.appendChild(klon);
            console.log("appendChild");
        }
    })
}

function visMere() {
    console.log("viser mere info");

    if (this.classList.contains("lukket")) {
        this.classList = "open"
        document.querySelector("#" + this.id + "mere").style.display = "block";
    } else {
        this.classList = "lukket"
        document.querySelector("#" + this.id + "mere").style.display = "none";
    }
    /*
        document.querySelector("#" + this.id + "mere").style.display = "block";*/

/*
}*/
