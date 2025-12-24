// builtin

// external
import { useEffect, useState } from "react";

// internal
import "./App.css";
import GameBoard from "./components/board/game-board";
import MoveTracker from "./components/move-tracker/move-tracker";
import RestartButton from "./components/restart-button/restart-button";
import { getInitialTiles } from "./lib/utils";
import type { Tile } from "./lib/types";
import { revealTile } from "./lib/actions";

export default function App() {
    const [tiles, setTiles] = useState<Tile[]>([]);
    const [moves, setMoves] = useState(0);
    const [win, setWin] = useState(false);
    const [selectedIndices, setSelectedIndices] = useState<number[]>([]);

    useEffect(initGame, []);
    // biome-ignore lint/correctness/useExhaustiveDependencies: sync to run on selected tile change
    useEffect(processPostMove, [selectedIndices]);
    // biome-ignore lint/correctness/useExhaustiveDependencies: sync to run on tile change
    useEffect(checkWin, [tiles]);

    function initGame() {
        setTiles(getInitialTiles());
        setMoves(0);
        setSelectedIndices([]);
        setWin(false);
    }

    function handleTileClick(tile: Tile) {
        if (canClick(tile)) {
            setSelectedIndices((nums) => [...nums, tile.index]);
            setTiles((t) => revealTile(t, tile.index));
        }
    }

    function canClick(tile: Tile): boolean {
        return selectedIndices.length < 2 && !tile.matched && !tile.revealed;
    }

    function processPostMove() {
        if (selectedIndices.length === 2) {
            setTimeout(checkPair, 400);
        }
    }

    // TODO: Finish this function
    function checkPair() {

    }

    // TODO: And this function too
    function checkWin() {

    }

    return (
        <div className="game-container">
            <h1 className="game-header">
                <strong>Better Matching Game</strong>
            </h1>

            <MoveTracker moves={moves} win={win} />

            <GameBoard tiles={tiles} />

            <RestartButton restart={initGame} />
        </div>
    );
}
