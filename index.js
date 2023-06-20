const resizeButton = document.createElement("button");
const rgbButton = document.createElement("button");
const clearButton = document.createElement("button");
const mainContainer = document.querySelector("#container")
const mainContent = document.createElement("div");
const settingsDiv = document.createElement("div");
const squareDiv = document.createElement("div");
const DEFAULT_GRID = 12;

mainContent.classList.add("content")
mainContent.setAttribute("id", "content")
settingsDiv.classList.add("settings-div")
squareDiv.classList.add("square-div")
squareDiv.setAttribute("id", "square-div")

mainContainer.appendChild(mainContent)
mainContent.appendChild(settingsDiv)
mainContent.appendChild(squareDiv)
settingsDiv.appendChild(resizeButton)
settingsDiv.appendChild(rgbButton)
settingsDiv.appendChild(clearButton)

resizeButton.textContent = "Resize";
rgbButton.textContent = "Rainbow OFF";
clearButton.textContent = "Clear";

let colorMode = false
let gridSize = DEFAULT_GRID;

function randomColor() {
    return Math.floor(Math.random() * 256)
}

function render(gridSize) {
    squareDiv.style.gridTemplateColumns = `repeat(${gridSize}, auto)`;
    squareDiv.style.gridTemplateRows = `repeat(${gridSize}, auto)`;
    for (let i = 0; i < gridSize ** 2; i++) {
        const squareElement = document.createElement("div")
        squareElement.classList.add("square-element");
        squareElement.addEventListener("mouseover", changeColor)
        squareElement.style.opacity = 0;
        squareDiv.appendChild(squareElement)
    }
}

function changeColor(e) {
    e.target.style.backgroundColor =
        `${colorMode
            ? `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`
            : "black"} `;
    e.target.style.opacity = (e.target.style.opacity < 1) ? parseFloat(e.target.style.opacity) + 0.1 : 1;
}

resizeButton.addEventListener("click", () => {
    gridSize = parseInt(window.prompt("What grid size would you like?(max 100)"))
    squareDiv.innerHTML = ""
    if (gridSize <= 100 && gridSize > 0) {
        render(gridSize)
    } else { alert("Please input number between 1 and 100!") }
})

clearButton.addEventListener("click", () => {
    let answer = confirm("Are you sure you'd like to clear your masterpiece?!")
    if (answer) {
        squareDiv.querySelectorAll("div").forEach(box => (box.style.backgroundColor = "", box.style.opacity = 0))
    }
})

rgbButton.addEventListener("click", () => {
    colorMode = !colorMode;
    colorMode ?
        rgbButton.textContent = "Rainbow ON"
        : rgbButton.textContent = "Rainbow OFF"
})

window.onload = () => {
    render(DEFAULT_GRID)
}