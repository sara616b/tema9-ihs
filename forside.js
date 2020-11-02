document.addEventListener("DOMContentLoaded", hentData);


//Henter json data og starter forsiden (async for at få loadet json før man går videre)
async function hentData() {
    console.log("hentData");

    //json link: https://sarahfrederiksen.dk/kea/2_semester/tema9/ihs/wordpress/wp-json/wp/v2/
    const link = "https://sarahfrederiksen.dk/kea/2_semester/tema9/ihs/wordpress/wp-json/wp/v2/pages/8"
    const respons = await fetch(link);
    const json = await respons.json();

    //vis forsiden
    vis(json);
}

function vis(data) {
    console.log("vis");

    //TODO - opsæt mulighed for billeder og tekstfelter i wordpress og definer dem her

    //sætter generel html fra forside-page på index.html
    document.querySelector("#forside").innerHTML = data.content.rendered;
}
