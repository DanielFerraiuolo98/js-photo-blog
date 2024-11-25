"use strict";

/** CONSEGNA *
* Milestone 1 *
    Sfruttando gli screen e gli asset in allegato riproduciamo la grafica proposta in maniera statica: utilizzando soltanto HTML e CSS e riproducendo una singola fotografia(usiamo una qualunque immagine a piacimento)
        * Milestone 2 *
            Utilizzando Postman, testiamo una chiamata all’endpoint di JSON Placeholder:
https://jsonplaceholder.typicode.com/photos?_limit=6
Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.
* Milestone 3 *
    Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API di JSON Placeholder, sfruttando la risposta per generare dinamicamente in pagina una serie di foto!*/



const baseUrl = `https://jsonplaceholder.typicode.com/`;
const resource = `photos`;
const carta = document.getElementById("container");
const overlay = document.getElementById("overlay");
overlay.classList.add("d-none");
const imgOverlay = overlay.querySelector("img");
const closeBtn = document.querySelector("#overlay button");


closeBtn.addEventListener("click", () => {
    overlay.classList.add("d-none");
});

const endPoint = baseUrl + resource;
const params = { "_limit": 6 };

axios.get(endPoint, { params }).then((res) => {
    console.log(res.data);
    res.data.forEach(item => {
        printPhoto(item.id, item.title, item.url);
    });
});

function printPhoto(id, title, url) {
    console.log(`ID: ${id}, Titolo: ${title}, URL: ${url}`);
    let template = `<figure id="figure-${id}">
        <img class="pin" src="./img/pin.svg" alt="pin">
        <img src="${url}" alt="${title}" class="card">
        <figcaption>${title}</figcaption>
    </figure>`;
    carta.innerHTML += template;
    getFigures();
}

function getFigures() {
    const figures = document.querySelectorAll("figure");
    console.log(figures);
    figures.forEach((figure) => {
        console.log(figure);
        figure.addEventListener("click", function () {
            overlay.classList.remove("d-none");
            const img = figure.querySelector("img.card");
            console.log(img);
            imgOverlay.src = img.src;
        });
    });
}







