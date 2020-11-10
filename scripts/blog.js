document.addEventListener("DOMContentLoaded", hentData);

let template = document.querySelector("template");

//Henter json data og starter forsiden (async for at få loadet json før man går videre)
async function hentData() {
    console.log("hentData");

    //json link: https://sarahfrederiksen.dk/kea/2_semester/tema9/ihs/wordpress/wp-json/wp/v2/
    const link = "https://sarahfrederiksen.dk/kea/2_semester/tema9/ihs/wordpress/wp-json/wp/v2/pages/256"
    const respons = await fetch(link);
    const json = await respons.json();

    //vis forsiden
    vis(json);
}

//Indsætter data fra wordpress på rette pladser på forsiden
async function vis(data) {
    console.log("vis");

    document.querySelector("#splash").style.backgroundImage = "url(" + data.splashbillede.guid + ")";
    document.querySelector("#title").textContent = data.title.rendered;
    document.querySelector("#blogindhold").innerHTML = data.content.rendered;




    //json link: https://sarahfrederiksen.dk/kea/2_semester/tema9/ihs/wordpress/wp-json/wp/v2/
    const postlink = "https://sarahfrederiksen.dk/kea/2_semester/tema9/ihs/wordpress/wp-json/wp/v2/blogpost?per_page=100"
    const responspost = await fetch(postlink);
    const jsonpost = await responspost.json();
    let filtrerede;
    console.log("Det virker!!!");

    console.log(jsonpost);

    //filtrer efter kategori og vis
    jsonpost.forEach((post) => {
        const klon = template.cloneNode(true).content;
        klon.querySelector("h2").textContent = post.title.rendered;
        klon.querySelector(".tekst").innerHTML = post.kort_tekst;
        klon.querySelector("button").addEventListener("click", () => visDetaljer(post));
        klon.querySelector(".image").style.backgroundImage = "url(" + post.billede.guid + ")";
        document.querySelector("#blogcontent").appendChild(klon);
        console.log("appendChild");

    })

    function visDetaljer(post) {
        console.log(post);
        popup.style.display = "block";
        popup.querySelector("#popbillede").src = post.billede.guid;
        popup.querySelector("#popnavn").textContent = post.title.rendered;
        popup.querySelector("#poptekst").innerHTML = post.content.rendered;
    }

    document.querySelector("#luk").addEventListener("click", () => {
        popup.style.display = "none";
        popup.querySelector("#luk").textContent = "X";
    });

    popup.addEventListener("click", () => {
        popup.style.display = "none";
    });

}
