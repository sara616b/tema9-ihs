document.addEventListener("DOMContentLoaded", hentData);


//Henter json data og starter forsiden (async for at få loadet json før man går videre)
async function hentData() {
    console.log("hentData");

    //json link: https://sarahfrederiksen.dk/kea/2_semester/tema9/ihs/wordpress/wp-json/wp/v2/
    const link = "https://sarahfrederiksen.dk/kea/2_semester/tema9/ihs/wordpress/wp-json/wp/v2/pages/14"
    const respons = await fetch(link);
    const json = await respons.json();

    //vis forsiden
    vis(json);
}

//Indsætter data fra wordpress på rette pladser på forsiden
function vis(data) {
    console.log("vis");

    document.querySelector("#splash").style.backgroundImage = "url(" + data.splashbillede.guid + ")";
    document.querySelector("#title").textContent = data.title.rendered;
    document.querySelector("#content").innerHTML = data.content.rendered;

}
