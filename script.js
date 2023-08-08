const Container = document.querySelector('#container');
const gridContainer = document.querySelector('#grid-container');

function gridCreate(gridSize, color) {
  for (let i = 0; i < gridSize; i++) {
    const grid = document.createElement('div');
    gridContainer.append(grid);
    grid.style.background = color;
  }
  for (let i = 1; i < gridSize; i++) {
  const cloneContainer = gridContainer.cloneNode(true);
  Container.append(cloneContainer);
  }
}

gridCreate(10, 'red');