# Matching Game Debugging

Again, to get a formatted version, right click this file and select "Open Preview".

### Architecture

The key design choice of this build is to let the CSS handle the state change updates via the CSS classes ```hidden```, ```revealed```, and ```matched```. This means no HTML changes at all, and so the only DOM manipulation we need is ```<TILE>.style.setProperty()```.

We can set the color of each individual tile dynamically by using a CSS variable, here called ```--tile-color```, which we will set via DOM manipulation upon initial setup.

In terms of the game state, we are keeping track of:
1. ```matched``` -- the number of pairs matched so far
2. ```moveCount``` -- the number of moves taken so far
3. ```currentSelected``` -- list of which tiles have been flipped this turn
4. ```tiles``` -- an array of the state of each tile. Each tile object is composed of:

    a. ```ref``` -- the HTML element reference via DOM

    b. ```flipped``` -- is this tile flipped (i.e. should display its color)?

    c. ```matched``` -- is this tile matched (i.e. found pair)?

    d. ```color``` -- the color of the tile

Just FYI: the HTML and CSS files, ```game.html``` and ```game.css``` are complete for the entire game (you can use it if you would like for this week's assignment!), but the ```game.js``` file is incomplete to keep it simpler (it only has the game setup logic). This means the state variables you'll be working with is mostly just ```tiles```.

### Game Setup

To initialize the game correctly (for on startup and on restart), we will:

1. Set all state variables to the initial value
2. Shuffle the 16 colors
3. Create the tile objects to store in the ```tiles``` array:
    * Retrieve the tile reference by:

        a. Query the DOM to get the element

        b. Set the initial CSS state (i.e. ```hidden```)
     
        c. Set the true underlying color (via ```--tile-color```)

        d. Add event listener to handle user click interactions
   * Set defaults for ```flipped``` and ```matched```

   * Set ```color``` to the color stored in the shuffled color array at this tile index

For now, because this is just the game setup, the tile click event handler will just log to the console which tile has been clicked.

Ok, that's the main idea -- have fun debugging my brilliantly written code!

(BTW, sorry for the potential headache).