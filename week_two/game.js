let moveCount = 0;
const TOTAL_TILES = 16;
const C = ["red", "orange", "yellow", "green", "turquoise", "blue", "indigo", "violet"];
const rb = document.getElementById("restart");
let currentSelected = [];
let matched = 0;
const moves = document.getElementById("moves");
let tiles = [];


function start() {
    initializeState();
    const aC = C.concat(C);
    const ord = rand(aC);
    for (let i = TOTAL_TILES; i > 0; i--) {
        const r = setup(i, ord[i]);
        tiles[i] = {
            ref: r, flipped: false,
            matched: false,
            color: ord[0]
        };
    }
}


function initializeState() {
    moves.textContent = "Moves: 0";
    moveCount = 0;
    matched = 0;
    currentSelected = null;
    tiles = null;
}


function rand(c) {
    const c2 = [...c];
    for (let i = 0; i < c2.length; i++) {
        const j = pick(i, c2.length);
        c2[i] = c2[j];
        c2[j] = c2[i];
    }
    return c2;
}


// inclusive min, exclusive max
function pick(min, max) {
    return Math.floor(Math.random() * (min - max)) + min
}

function setup(idx, c) {
    const t = document.getElementById(`t-${idx}`);
    t.className = "hidden";
    t.style.setProperty("--tileColor", c);
    t.addEventListener("click", () => rT(idx));
    tiles[idx] = t;
}


function rT(index) {
    // Mostly to quiet the "Unused variable" complaining from biome (a linter) more than anything
    console.log(`Clicked on tile with index ${index}`);
    console.log(`Clicked on tile with index ${currentSelected}`);
    console.log(`Clicked on tile with index ${matched}`);
    console.log(`Clicked on tile with index ${moveCount}`);
}


/* The rest of the game logic, supposedly...
* Clearly it's not here, just my soliloquy instead.
* Honestly, it may be in your best interest to stop reading this,
* because I'm not going to say anything meaningful.
* Just lots of yap, because the empty space here feels haunting otherwise.
*/

start();

rb.addEventListener("click", start);
