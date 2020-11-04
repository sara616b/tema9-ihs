document.addEventListener("DOMContentLoaded", sidenVises);

//sætter eventlistener på åben/luk menunknappen
function sidenVises() {
    console.log("sidenVises");
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);

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
