# React Matching Game

### Creating a React Project w/ Vite

Obviously, this one is created for you, but for future reference:

1. Run ```pnpm create vite``` OR ```npx create vite@latest```
2. Select React for framework
3. Select TypeScript for variant
4. Select Yes/No for rolldown-vite (it's a bundler, so totally up to you)

For this project specifically, to download dependencies, you will have to run:
1. ```cd week_three```
2. ```pnpm i``` or ```npm install```

And then to test, you can run:
1. ```pnpm dev``` or ```npm run dev```
2. Navigate to http://localhost:5173


## Matching Game Design

This design is very similar to the one from last week, we'll primarily be using the ```Tile``` interface to hold the game state.

First though, a file tree tour:

```
/week_three
|- node_modules/ (this holds all the dependency downloads, e.g. React, Vite, etc.)
|- src/ (this holds all your code)
    |- components/
        |- board/
            |- game-board.css (CSS specific to game-board.tsx)
            |- game-board.tsx (the board component of the game)
        |- ... (other components)
    |- lib/
        |- actions.ts (allowed user actions, e.g. reveal tile)
        |- types.ts (global types, e.g. Tile)
        |- utils.ts (utility functions, e.g. shuffle, etc.)
    |- App.tsx (The matching game -- note this is also a component, but the "root component")
    |- App.css (CSS classes specific to App.tsx)
    |- index.css (global CSS file)
    |- main.tsx (what to render to the HTML file)
|- index.html (the base html file that is rendered -- only thing you may want to change is title)
|- package.json (project info, scripts, and dependencies)
|- .gitignore (what files git should not track)
|- ... (the rest are configuration files)

```

### Game Flow:

1. User clicks tile, tile is revealed (by setting the ```revealed``` field in the ```Tile``` object)
2. If # of revealed tiles is two, increment the move counter and check if they match
    a. If they do, set ```match``` to ```true``` for both tiles and leave them revealed
    b. If not, set ```revealed``` back to ```false```
    c. Reset the selected indices in ```selectedIndices```

Synchronized checks:
1. Every time ```tiles``` changes, check if the player has won and set the ```win``` state variable accordingly
2. Every time ```selectedIndices``` has two indices (two tiles revealed), run the pair check routine

### Things to Notice:

In ```game-board.tsx```, I can take in the tiles and simply map them to the ```GameTile``` display component. This means as long as the ```GameTile``` component has the right props to make it reusable, this component will work for all 16 tiles.

Props can (and often are) functions! In ```restart-button.tsx```, I expect a function that tells me how to reset the game, which is run when the button is clicked. I need to pass in this function via prop because the game state is not stored in the ```RestartButton```.

### What You Need To Do
1. Finish the function to match tiles in ```actions.ts```
2. Use that, among other changes, to complete the game state logic in ```App.tsx```
2. Add interactivity to ```game-tile.tsx``` so that user clicks will actually do something

Good luck! Have fun!