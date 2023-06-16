const squareDiv = document.createElement("div")
const mainContent = document.querySelector("#container")
for (let i = 1; i <= 16; i++) {
    for (let j = 1; j <= 16; j++) {
        mainContent.innerHTML +=
            `<div class="gridBox no-gutter" id='column${i}'></div>`
    }
}

const grids = document.querySelector(".gridBox")
function onHover() {

}

function onLeave() {

}

function trail() {

}