const container = document.getElementById('container');



function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement('div');
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "blue"
        });
        container.appendChild(cell).className = "grid-item";
    };
};

makeGrid(16,16);
