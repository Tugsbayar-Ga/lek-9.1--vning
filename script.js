// Rubrik
let rubrik = document.querySelector("h1");
rubrik.textContent = "Javascript it is";
rubrik.classList.add("xtra");

// Paragrafer
let p = document.querySelector("p");
p.textContent = "Text has changed due to JavaScript";

let text = document.querySelector(".text");
text.style.border = "4px solid black";
text.style.marginLeft = "10vw";
text.style.marginRight = "10vw";

// Bakgrund
document.body.classList.add("yellow_background");

// Lista
let listan = document.querySelector("ul");

let li1 = document.createElement("li");
li1.textContent = "Lära JavaScript syntax";
listan.appendChild(li1);

let li2 = document.createElement("li");
li2.textContent = "Lära document-objektet";
listan.appendChild(li2);

listan.classList.add("ul_layout");

let li_array = document.querySelectorAll("li");
for (let i = 0; i < li_array.length; i++) {
    li_array[i].classList.add("fet_text");
}

// Växla tema
function växla_tema() {
    document.body.classList.toggle("dark_mode");
}

// Ändra text
let ny_text = document.querySelector("#ny_text");

function lägg_till() {
    text.textContent = ny_text.value;
    ny_text.value = "";
}

// Byt bild
let bilden = document.querySelector(".bilden");

function byt_bild(fil_sökväg) {
    bilden.src = fil_sökväg;
}