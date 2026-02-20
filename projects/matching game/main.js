const allTiles = document.querySelectorAll('.game-tile');
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
start();

function start() {
    colors.sort(() => 0.5 - Math.random());
    moveCount = 0;
    moves.textContent = "Moves: 0";
    matched = 0;
    matchedTiles = [];
    lastTile = -1;

    for (let x = 0; x < allTiles.length; x++) {
        allTiles[x].style.backgroundColor = "gray";
    }
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
        } else {
            let temp = lastTile;
            lastTile = -1;
            setTimeout(() => {
                allTiles[idx].style.backgroundColor = "gray";
                allTiles[temp].style.backgroundColor = "gray";
            }, 1000);
        }
    } else {
        lastTile = idx;
    }

    if (matched === colors.length / 2) {
        alert("You Win! Click restart to play again!")
    }
}