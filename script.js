//TODO          TODO          TODO          TODO          TODO          TODO          
//*enlever les double bordures

//TODO          TODO          TODO          TODO          TODO          TODO          
//*empêcher les utilisateurs de mettre un nombre >50 ça passe et ça fait bugger

//TODO          TODO          TODO          TODO          TODO          TODO          
//*pour onchange et onyarrive implémentés dans html, esssayer de dépolluer html et de faire avec addEventListener direct sur script.js

//TODO          TODO          TODO          TODO          TODO          TODO          
//*essayer de faire une grille rectangulaire ;)

//! OK
//variable de création de la grille
 const container = document.querySelector('#container');
let firstRows = document.getElementsByClassName("firstRow");
let cells = document.getElementsByClassName("cell");
//! OK
//création des lignes
function createRows (nbRows){
    for (let i = 0; i < nbRows; i++){
        let row = document.createElement('div'); //?créer des div vides en une ligne
        container.appendChild(row).className = 'firstRow';
    }
};
//! OK
//création des colonnes
function createCol (nbCols){
    for (let i = 0; i < firstRows.length; i++){ //?pour chaque div précédemment créée
        for (let j = 0 ; j < nbCols ; j++){
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
    createRows(saisie);
    createCol(saisie);
}
//! OK
// (ré)initialisation grille 
function onyarrive (){
    Array.from(firstRows).forEach(firstRow => {container.removeChild(firstRow);})
    makeGrid();
    couleurs();
}
//!OK
// affichage de la grille via button
let sub = document.getElementById('submitNumber');
sub.addEventListener("click", onyarrive)

//TODO OK essayer en plus condensé, plus élégant, genre `${alt[i].id}()` pour lancer la fonction correspondante à l'id de l'input ??
// choix des couleurs
function couleurs (){
let alt = document.querySelector('form').querySelectorAll('input');
for (let i = 0; i < alt.length; i++){
     if (alt[i].checked === true){
         if(alt[i].id === "licorne"){
            licorne()
        }
        if(alt[i].id === "black"){
            black()
        }
        if(alt[i].id === "color"){
            color()
        }
        if(alt[i].id === "pastel"){
            pastel()
        }
        if(alt[i].id === "grey"){
            grey()
        }
        if(alt[i].id === "white"){
            white()
        }
     }
}}
//! OK
//configuration des couleurs et de l'event mouseover
//pastel
const pastel = () =>{
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener ("mouseover", (e) =>{
    e.target.style.backgroundColor = `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256}, ${0.5*Math.random()+0.1})`})}}
//toutes
const color = () =>{
    for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("mouseover", (e) =>{
        e.target.style.backgroundColor = `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256}`})}}
//pétant
const licorne = () =>{
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("mouseover", (e) =>{
        e.target.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%`})}}                 
//gris
const grey = () =>{
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("mouseover", (e) =>{
            let grey =Math.random() * 256;
            e.target.style.backgroundColor = `rgb(${grey}, ${grey}, ${grey}`})}}
//gris qui s'assombrit
const black = () =>{
    for (let i = 0; i < cells.length; i++) {
        let grey = 256;
        cells[i].addEventListener("mouseover", (e) =>{
        grey = grey*0.8;
        e.target.style.backgroundColor = `rgb(${grey}, ${grey}, ${grey}`})}}
//noir qui éclaircit
const white = () =>{
    for (let i = 0; i < cells.length; i++) {
        let grey = 0;
        cells[i].addEventListener("mouseover", (e) =>{
        grey = grey + 30;
        e.target.style.backgroundColor = `rgb(${grey}, ${grey}, ${grey}`})}}
//! OK                                      
//clear
let reset = document.querySelector('#clear')
reset.addEventListener('click', () =>
{
    Array.from(cells).forEach(cell => {cell.style.backgroundColor = 'white'; })
})
                                       




















