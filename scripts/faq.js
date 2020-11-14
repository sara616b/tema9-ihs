document.addEventListener("DOMContentLoaded", hentData);

let template = document.querySelector("template");
let fag;
let container = document.querySelector("#faq_sek");


//Henter json data og starter højskole-siden (async for at få loadet json før man går videre)
async function hentData() {
    console.log("hentData");

    //json link: https://sarahfrederiksen.dk/kea/2_semester/tema9/ihs/wordpress/wp-json/wp/v2/
    const link = "https://sarahfrederiksen.dk/kea/2_semester/tema9/ihs/wordpress/wp-json/wp/v2/pages/327"
    const respons = await fetch(link);
    const json = await respons.json();

    //vis splash
    vis(json);
}

//Indsætter data fra wordpress på rette pladser på forsiden
async function vis(data) {
    console.log("vis");
    document.querySelector("#splash").style.backgroundImage = "url(" + data.splashbillede.guid + ")";
    document.querySelector("#title").innerHTML = data.title.rendered;

    //henter data til hvert faq
    const faqlink = "https://sarahfrederiksen.dk/kea/2_semester/tema9/ihs/wordpress/wp-json/wp/v2/faq?per_page=100"
    const responsfaq = await fetch(faqlink);
    const jsonfaq = await responsfaq.json();

    //vis alle sektioner med indhold
    jsonfaq.forEach((faq) => {

        const klon = template.cloneNode(true).content;
        klon.querySelector("h2").textContent = faq.title.rendered;

        klon.querySelector(".mere").id = faq.slug + "mere";
        klon.querySelector(".mere").innerHTML = faq.content.rendered;

        klon.querySelector("button").id = faq.slug;
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
}
