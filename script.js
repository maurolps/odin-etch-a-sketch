const mainContainer = document.querySelector('#container');
const btnIn = document.getElementById("zoom");
let gridContainer = document.querySelector('#grid-container');
let zoomtimes = 20;


function tint() {
  this.className = "fadegrid";
}

function gridCreate(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    const grid = document.createElement('div');
    grid.className = "grid";
    gridContainer.append(grid);
  }
  for (let j = 1; j < gridSize; j++) {
    const cloneContainer = gridContainer.cloneNode(true);
    mainContainer.append(cloneContainer);
  }
  const hoverElement = document.querySelectorAll(".grid");
  hoverElement.forEach((grids) => {
    grids.addEventListener('mouseover', tint);
    });
}

function zoom() {
  while (mainContainer.hasChildNodes()){
    mainContainer.removeChild(mainContainer.firstChild);
  }
  gridContainer = document.createElement('div');
  gridContainer.id = "grid-container";
  mainContainer.append(gridContainer);
  (zoomtimes > 45)? zoomtimes=10: zoomtimes+=5;
  gridCreate(zoomtimes);

}

btnIn.addEventListener("click", zoom);
gridCreate(zoomtimes);