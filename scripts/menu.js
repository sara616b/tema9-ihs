document.addEventListener("DOMContentLoaded", sidenVises);

//sætter eventlistener på åben/luk menunknappen
function sidenVises() {
    console.log("sidenVises");
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
    document.querySelector("#dropdown_button").addEventListener("click", toggleDropdown);

}

//Får burgermenu med luk og åben knap til at fungere
function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector("#menu").classList.toggle("hidden");

    document.querySelector("#menuknap").textContent = "=";

    if (document.querySelector("#menu").classList.contains("hidden")) {
        document.querySelector("#menuknap").textContent = "=";
    } else {
        document.querySelector("#menuknap").textContent = "X";
    }
}

//får dropdown i burger til at åbne og lukke
function toggleDropdown() {
    console.log("toggleDropdown");
    document.querySelector("#dropdown_fag").classList.toggle("hidden");

    document.querySelector("#dropdown_button").textContent = "=";

    if (document.querySelector("#dropdown_fag").classList.contains("hidden")) {
        document.querySelector("#dropdown_button").textContent = "=";
        document.querySelector("#dropdown_fag").style.display = "none";
    } else {
        document.querySelector("#dropdown_button").textContent = "X";
        document.querySelector("#dropdown_fag").style.display = "block";
    }
}
