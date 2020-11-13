document.addEventListener("DOMContentLoaded", sidenVises);

//sætter eventlistener på åben/luk menunknappen
function sidenVises() {
    console.log("sidenVises");

    document.querySelector("header").innerHTML = '<a id="logo_top" href="index.html">                <img src="assets/imgs/logo_ihs.png" alt="logo for idrætshøjskolen Sønderborg">            </a>            <div id="menuknap">☰</div>            <nav id="menu" class="hidden">                <div id="dropdown" class="hidden">                    <div class="dropdown_linje"><button id="dropdown_button">☰</button><a id="hojskole_menu" href="hojskole.html"> Højskole</a><div class="dropdown_fag hidden"><a class="dropfag" href="specialefag.html" id="speciale_menu">Specialefag</a><a class="dropfag" href="idraetsfag.html" id="idraet_menu">Idrætsfag</a><a class="dropfag" href="almenefag.html" id="almene_menu">Almene fag</a><a class="dropfag" href="interessefag.html" id="interesse_menu">Interessefag</a><a class="dropfag" href="faellesfag.html" id="faelles_menu">Fælles fag</a><a class="dropfag" href="rejser.html" id="rejser_menu">Rejser</a><a class="dropfag" href="linjer.html" id="linjer_menu">Linjer og Kurser</a><a class="dropfag" href="pris.html" id="pris_menu">Priser</a><a class="dropfag" href="blog.html" id="blog_menu">Blog</a></div></div> </div><a href="ugekurser.html" id="uge_menu">Ugekurser</a><a href="erhverv.html" id="erhverv_menu">Erhverv</a><div id="dropdown2" class="hidden"><div class="dropdown_linje"><button id="dropdown_button2">☰</button>                                                                          <a id="hojskole_menu2" href="om_ihs.html"> Om IHS</a><div class="dropdown_om hidden">                 <a class="dropfag" href="praktisk.html" id="praktisk_menu">Praktisk Info</a>                      <a class="dropfag" href="personale.html" id="personale_menu">Personale og bestyrelse</a>               <a class="dropfag" href="faq.html" id="faq_menu">FAQ</a>                   </div></div></div><a id="tilmelding_menu" href="tilmelding.html">Tilmelding</a><div style="display: flex;"><input type="text" placeholder="Søg.."><img src="assets/imgs/Screenshot_2020-11-12%20Idr%C3%A6tsh%C3%B8jskolen%20S%C3%B8nderborg%20-%20IHS.png" alt=""></div></nav>';

    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
    document.querySelector("#dropdown_button").addEventListener("click", toggleDropdown);
    document.querySelector("#dropdown_button2").addEventListener("click", toggleDropdown2);
}

//Får burgermenu med luk og åben knap til at fungere
function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector("#menu").classList.toggle("hidden");

    document.querySelector("#menuknap").textContent = "☰";

    if (document.querySelector("#menu").classList.contains("hidden")) {
        document.querySelector("#menuknap").textContent = "☰";
    } else {
        document.querySelector("#menuknap").textContent = "X";
    }
}

//får dropdown i burger til at åbne og lukke
function toggleDropdown() {
    console.log("toggleDropdown");
    document.querySelector(".dropdown_fag").classList.toggle("hidden");

    document.querySelector("#dropdown_button").textContent = "☰";

    if (document.querySelector(".dropdown_fag").classList.contains("hidden")) {
        document.querySelector("#dropdown_button").textContent = "☰";
        document.querySelector(".dropdown_fag").style.display = "none";
    } else {
        document.querySelector("#dropdown_button").textContent = "X";
        document.querySelector(".dropdown_fag").style.display = "flex";
    }
}

function toggleDropdown2() {
    console.log("toggleDropdown");
    document.querySelector(".dropdown_om").classList.toggle("hidden");

    document.querySelector("#dropdown_button2").textContent = "☰";

    if (document.querySelector(".dropdown_om").classList.contains("hidden")) {
        document.querySelector("#dropdown_button2").textContent = "☰";
        document.querySelector(".dropdown_om").style.display = "none";
    } else {
        document.querySelector("#dropdown_button2").textContent = "X";
        document.querySelector(".dropdown_om").style.display = "flex";
    }
}
