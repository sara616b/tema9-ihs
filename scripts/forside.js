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

//Indsætter data fra wordpress på rette pladser på forsiden
function vis(data) {
    console.log("vis");

    //TODO - ret billeder og tekstfelter i wordpress og definer dem her
    document.querySelector("#splash").style.backgroundImage = "url(" + data.splashbillede.guid + ")";
    document.querySelector("#info").innerHTML = data.content.rendered + "<button><a href='" + "tilmelding.html" + "'> Tilmeld dig her </a></button>";

    //sætter tre ikoner fra forside-page på index.html
    document.querySelector("#forsideknapper").innerHTML =
        "<a href='blog.html'><img src='" + data.ikoner[0].guid + "' alt='ikoner'></a>" + "<a href='https://www.google.com/maps?ll=54.898281,9.803&z=15&t=m&hl=da&gl=US&mapclient=embed&cid=6776185303333634501'><img src='" + data.ikoner[1].guid + "' alt='ikoner'></a>" + "<a href='tilmelding.html'><img src='" + data.ikoner[2].guid + "' alt='ikoner'></a>";

}
