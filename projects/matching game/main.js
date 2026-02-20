const allTiles = document.querySelectorAll('.game-tile');

console.log(allTiles);
const colors = ["red", "green", "blue", "yellow", "orange", "pink", "black", "purple", "red", "green", "blue", "yellow", "orange", "pink", "black", "purple"];
const restartButton = document.getElementById("restart");
const moves = document.getElementById("moves");
let moveCount;
let lastTile = -1;
let matchedTiles = [];
let matched = 0;
restartButton.addEventListener("click", start);

for (let i = 0; i < allTiles.length; i++) {
    allTiles[i].addEventListener("click", () => {
        click(i);
    });
}

// Randomize colors
start();

function start() {
    colors.sort(() => 0.5 - Math.random());
    moveCount = 0;
    moves.textContent = "Moves: 0";

    for (let x = 0; x < allTiles.length; x++) {
        allTiles[x].style.backgroundColor = "gray";
    }
    console.log(colors);

}

function click(idx) {
    if (matchedTiles.includes(allTiles[idx])) {
        return;
    }
    allTiles[idx].style.backgroundColor = colors[idx];
    moveCount++;
    moves.textContent = "Moves: " + moveCount;
    if (lastTile > -1) {
        if (colors[idx] === colors[lastTile]) {
            matchedTiles.push(allTiles[idx]);
            matchedTiles.push(allTiles[lastTile]);
            lastTile = -1;
            matched++;
        }
        else{
            allTiles[idx].style.backgroundColor = "gray";
            allTiles[lastTile].style.backgroundColor = "gray";
            lastTile = -1;
        }
    } else {
        lastTile = idx;
    }
    if (matched === colors.length) {
        alert("You Win! Click restart to play again!")
    }
}

//TODO: add input buffering
