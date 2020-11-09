document.addEventListener("DOMContentLoaded", hentData);

let template = document.querySelector("template");
let fag;
let container = document.querySelector("#fag-content");


//Henter json data og starter højskole-siden (async for at få loadet json før man går videre)
async function hentData() {
    console.log("hentData");

    //json link: https://sarahfrederiksen.dk/kea/2_semester/tema9/ihs/wordpress/wp-json/wp/v2/
    const link = "https://sarahfrederiksen.dk/kea/2_semester/tema9/ihs/wordpress/wp-json/wp/v2/faggruppe/233"
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
    const rejselink = "https://sarahfrederiksen.dk/kea/2_semester/tema9/ihs/wordpress/wp-json/wp/v2/rejse?per_page=100"
    const responsfag = await fetch(rejselink);
    const jsonrejse = await responsfag.json();

    console.log(jsonrejse);

    //filtrer efter kategori og vis
    jsonrejse.forEach((rejse) => {
        const klon = template.cloneNode(true).content;
        klon.querySelector("h2").textContent = rejse.title.rendered;
        klon.querySelector("p").textContent = rejse.kortbeskrivelse;
        klon.querySelector(".fagelement").style.backgroundImage = "url(" + rejse.splash.guid + ")";

        klon.querySelector("button").id = rejse.slug;
        klon.querySelector("button").addEventListener("click", visMere);


        klon.querySelector(".mere").id = rejse.slug + "mere";
        klon.querySelector(".mere").textContent = rejse.lang_beskrivelse;

        container.appendChild(klon);
        console.log("appendChild");

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

}
