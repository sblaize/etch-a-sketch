const container = document.getElementById('container');

const newDiv = document.createElement('div');
newDiv.setAttribute = ('id', 'newDiv')
const button = document.createElement('button');
const input = document.createElement('input');
input.setAttribute('type', 'text')
button.textContent = "Enter Number Here"
newDiv.appendChild(button).id = "button";
newDiv.appendChild(input).id = "input";
document.body.insertBefore(newDiv, container);

let input1 = document.getElementById('input');
let btn = document.getElementById('button');
input1.setAttribute('value', '16')


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

makeGrid(16,16)


btn.addEventListener('click', () => {
    let v = input1.value
    if (v > 100) {
    alert("Please Enter A Number Lower Than 100")
    } else if (v <= 100) {
    container.innerHTML = ""
    makeGrid(v, v)
}});
