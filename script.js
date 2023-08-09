const mainContainer = document.querySelector('#container');
const btnIn = document.getElementById("zoom");
const btnReset = document.getElementById("reset");
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

function reset() {
  zoom("reset");
}
function zoom(isReset) {
  const zoomText = document.createElement('div');
  while (mainContainer.hasChildNodes()){
    mainContainer.removeChild(mainContainer.firstChild);
  }
  zoomText.className = "text";
  mainContainer.append(zoomText);
  gridContainer = document.createElement('div');
  gridContainer.id = "grid-container";
  mainContainer.append(gridContainer);
  if (isReset === "reset") {
    zoomtimes = 20;
    zoomText.textContent = "Hover Mouse";
    gridCreate(zoomtimes);
    return;
  }
  (zoomtimes > 45)? zoomtimes=10: zoomtimes+=5;
  zoomText.textContent = zoomtimes+"x"+zoomtimes;
  gridCreate(zoomtimes);

}

btnIn.addEventListener("click", zoom);
btnReset.addEventListener("click", reset);
gridCreate(zoomtimes);