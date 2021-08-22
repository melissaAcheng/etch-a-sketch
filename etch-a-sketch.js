
/* Create a 16 x 16 grid
1. select the div with class container and assign variable
2. create a new div within 'container' 
  a. assign class 'grid' and assign variable
3. create a loop that creates 16 new divs within 'grid' 
  a. assign class 'cell' and id with number
  b. append each cell div to 'grid'
4. append grid to container
*/

const grid = document.querySelector('.grid');
const clearGrid = document.querySelector('#clearGrid');
const newGrid = document.querySelector('#newGrid');

// Set default grid size
var gridNumber = 16;

// Create new grid size
newGrid.addEventListener('click', () => {
  gridNumber = prompt("Please enter a number 1-100", "");
  if (gridNumber <= 100 && gridNumber > 0) {
    console.log(gridNumber); 
    createDivs(gridNumber);
  } else prompt("Please enter a number between 1-100", "");
})

// Creating the Grid
function createDivs(gridNumber) {
  var gridArea = gridNumber * gridNumber;
  var cells = document.querySelectorAll('.cell');

  for (let j = 0; j < cells.length; j++) {
    cells[j].remove();
  }

  for (let i = 0; i < gridArea; i++) {
    var cell = document.createElement('div');
    cell.classList.add('cell');
    cell.setAttribute('id', i);
    grid.appendChild(cell);
    grid.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
  
  }
  var gridPixels = grid.querySelectorAll('div');
  gridPixels.forEach(cell => cell.addEventListener('mouseover', function (e) {
    e.target.style.background = 'blue';
  }));
}

createDivs(gridNumber);


// Clear the grid 
clearGrid.addEventListener('click', () => {
  const cells = document.querySelectorAll('.cell');

  for (let i of cells) {
    i.style = '';
  }
})

// Keep pixel size
// Keep grid one size
// Based on the entered gridNumber