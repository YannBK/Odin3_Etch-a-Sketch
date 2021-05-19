//TODO          TODO          TODO          TODO          TODO          TODO          
//*enlever les double bordures

//TODO          TODO          TODO          TODO          TODO          TODO          
//*détecter les changement de largeur de window et mettre à jour les conditions limitantes de taille de grille
let largeur = window.innerWidth;
console.log(largeur)

//! OK
//variable de création de la grille
const container = document.querySelector('#container');
let firstRows = document.getElementsByClassName("firstRow");
let cells = document.getElementsByClassName("cell");

//! OK
//création des lignes
function createRows(nbRows) {
    for (let i = 0; i < nbRows; i++) {
        let row = document.createElement('div'); //?créer des div vides en une ligne
        container.appendChild(row).className = 'firstRow';
    }
};

//! OK
//création des colonnes
function createCol(nbCols) {
    for (let i = 0; i < firstRows.length; i++) { //?pour chaque div précédemment créée
        for (let j = 0; j < nbCols; j++) {
            let col = document.createElement('div'); //? créer une div
            firstRows[j].appendChild(col).className = 'cell'; //?qui vient après verticalement grâce à inline-block du CSS
        }
    }
}

//! OK
// création de la grille via input number
let saisir = document.getElementById('choixNumber');

function makeGrid() {
    let saisie = saisir.value;
    if(saisir.value > 50){
    saisie = 50;
    }
     if(largeur < 1150 && saisir.value > 40){
        saisie = 40;
    }    
    if(largeur < 950 && saisir.value > 30){
        saisie = 30;
    }
    if(largeur < 700 && saisir.value > 20){
        saisie = 20;
    } 
    createRows(saisie);
    createCol(saisie);
}

//! OK
// (ré)initialisation grille 
function onyarrive() {
    Array.from(firstRows).forEach(firstRow => { container.removeChild(firstRow); })
    makeGrid();
    couleurs();
}

//!OK
// affichage de la grille via button
let sub = document.getElementById('submitNumber');
sub.addEventListener("click", onyarrive)

//!OK
//TODO OK essayer en plus condensé, plus élégant, genre `${alt[i].id}()` pour lancer la fonction correspondante à l'id de l'input ?? réunir listener + couleurs()?
// listener des btn radio
let alt = document.querySelector('form').querySelectorAll('input');
for (var i = 0; i < alt.length; i++) {
    alt[i].addEventListener("change", couleurs);
}
// choix des couleurs
function couleurs() {
    for (let i = 0; i < alt.length; i++) {
        if (alt[i].checked === true) {
            if (alt[i].id === "licorne") {
                licorne()
            }
            if (alt[i].id === "black") {
                black()
            }
            if (alt[i].id === "color") {
                color()
            }
            if (alt[i].id === "pastel") {
                pastel()
            }
            if (alt[i].id === "grey") {
                grey()
            }
            if (alt[i].id === "white") {
                white()
            }
        }
    }
}

//! OK
//configuration des couleurs et de l'event mouseover
//pastel
const pastel = () => {
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 80%`
        })
    }
}
//toutes
const color = () => {
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256}`
        })
    }
}
//pétant
const licorne = () => {
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%`
        })
    }
}
//gris
const grey = () => {
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("mouseover", (e) => {
            let grey = Math.random() * 256;
            e.target.style.backgroundColor = `rgb(${grey}, ${grey}, ${grey}`
        })
    }
}
//gris qui s'assombrit
const black = () => {
    for (let i = 0; i < cells.length; i++) {
        let grey = 256;
        cells[i].addEventListener("mouseover", (e) => {
            grey = grey * 0.8;
            e.target.style.backgroundColor = `rgb(${grey}, ${grey}, ${grey}`
        })
    }
}
//noir qui éclaircit
const white = () => {
    for (let i = 0; i < cells.length; i++) {
        let grey = 0;
        cells[i].addEventListener("mouseover", (e) => {
            grey = grey + 30;
            e.target.style.backgroundColor = `rgb(${grey}, ${grey}, ${grey}`
        })
    }
}

//! OK                                      
//clear
let reset = document.querySelector('#clear')
reset.addEventListener('click', () => {
    Array.from(cells).forEach(cell => { cell.style.backgroundColor = 'white'; })
})

















