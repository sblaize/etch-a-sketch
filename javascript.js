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

let input = document.getElementsByTagName('input');
let button = document.getElementsByTagName('button');


document.body.onload = addElement;

function addElement() {
const newDiv = document.createElement('div');
newDiv.setAttribute = ('id', 'newDiv')
const button = document.createElement('button');
const input = document.createElement('input');
button.textContent = "Enter Number Here"
newDiv.appendChild(button).className = "button";
newDiv.appendChild(input).className = "input";
document.body.insertBefore(newDiv, container);
}


