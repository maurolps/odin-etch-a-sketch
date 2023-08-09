const mainContainer = document.querySelector('#container');
const gridContainer = document.querySelector('#grid-container');

function tint() {
  this.className = "fadegrid";
}

function gridCreate(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    const grid = document.createElement('div');
    grid.className = "grid";
    grid.id = "grid" + i;
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

gridCreate(20);