let container = document.querySelector(".container");
let gridsize = 600;
row = 16;
// let cube;
createGrid(gridsize, row);
function createGrid(gridsize, row) {
  container.innerText = "";
  for (let i = 0; i < row * row; i++) {
    let cube = document.createElement("div");
    cube.style.border = "1px solid grey";
    cube.style.height = `${gridsize / row - 2}px`;
    cube.style.width = `${gridsize / row - 2}px`;
    cube.classList.add("cube");
    // getColor();

    cube.addEventListener("mouseover", () => {
      let iniVal = 0.1;
      cube.style.backgroundColor = "black";
      cube.style.opacity = iniVal + 0.1;
      // iniVal = iniVal + 0.1;
    });

    container.appendChild(cube);
  }
}
// function srgb() {}

let changeGrid = document.querySelector(".getGrid");

changeGrid.addEventListener("click", () => {
  let rowSize = prompt("please enter the size of row between 2 to 50", 16);
  if ((rowSize > 50 && rowSize < 2) || rowSize == null) {
    return;
  } else {
    createGrid(gridsize, rowSize);
  }
});
