document.addEventListener("DOMContentLoaded", hentData);

let template = document.querySelector("template");
let container = document.querySelector("#prissek")

//Henter json data og starter forsiden (async for at få loadet json før man går videre)
async function hentData() {
    console.log("hentData");

    //json link: https://sarahfrederiksen.dk/kea/2_semester/tema9/ihs/wordpress/wp-json/wp/v2/
    const link = "https://sarahfrederiksen.dk/kea/2_semester/tema9/ihs/wordpress/wp-json/wp/v2/pages/234"
    const respons = await fetch(link);
    const json = await respons.json();

    //vis forsiden
    vis(json);
}

//Indsætter data fra wordpress på rette pladser
async function vis(data) {
    console.log("vis");

    //TODO - ret billeder og tekstfelter i wordpress og definer dem her

    document.querySelector("h1").textContent = data.title.rendered;
    document.querySelector("#splash").style.backgroundImage = "url(" + data.splashbillede.guid + ")";

    //sætter tre ikoner fra forside-page på index.html
    document.querySelector("#pris").innerHTML = data.content.rendered;

    //henter data til hver prissektion
    const prislink = "https://sarahfrederiksen.dk/kea/2_semester/tema9/ihs/wordpress/wp-json/wp/v2/prissektion?per_page=100"
    const responspris = await fetch(prislink);
    const jsonpris = await responspris.json();

    //vis alle sektioner med indhold
    jsonpris.forEach((prissek) => {

        const klon = template.cloneNode(true).content;
        klon.querySelector("h2").textContent = prissek.title.rendered;

        klon.querySelector(".mere").id = prissek.slug + "mere";
        klon.querySelector(".mere").innerHTML = prissek.content.rendered;

        klon.querySelector("button").id = prissek.slug;
        klon.querySelector("button").addEventListener("click", visMere);

        container.appendChild(klon);
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
