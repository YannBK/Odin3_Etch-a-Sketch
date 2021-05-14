
//*solution 1 on peut choisir n => toujours un carré, mais facile pour mettre des boutons dans les div => démineur?
/* let n = 16; 
let i = -1;
let j = 0;
let s = '';

while(++i < n) {
  s += '<div class="row">';
  for(j=0; j<n; j++) {
      s += `<div class="cell"></div>`;}
  s += '</div>'
}

container.innerHTML = s;
 */ 

//*solution 2 => plus pour Portfolio, etc...
/* const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16);
 */

//*solution 3 on peut choisir nb lignes, dons faire des formes rectangulaires horizontales

/* const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");

// Creates a default grid sized 16x16
function defaultGrid() {
    makeRows(16);
    makeColumns(16);
}

// Takes (rows, columns) input and makes a grid
function makeRows(rowNum) {
    
    // Creates rows
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
};

// Creates columns
function makeColumns(cellNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
        };
        
    };
};

defaultGrid();
 */