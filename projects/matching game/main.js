const allTiles = document.querySelectorAll('.game-tile');
console.log(allTiles);
const colors = ["red", "green", "blue", "yellow", "orange", "pink","black","purple","red", "green", "blue", "yellow", "orange", "pink","black","purple"];
// Randomize colors
colors.sort(()=>0.5-Math.random());
console.log(colors);
for (let i = 1; i <= 50; i++) {
    colors
}

//TODO: Add event listeners to button and for click
//TODO: store last press