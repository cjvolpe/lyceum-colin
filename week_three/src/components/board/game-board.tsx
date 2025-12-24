// builtin

// external

// internal
import "./game-board.css";
import type { Tile } from "../../lib/types";
import GameTile from "../tile/game-tile";


interface GameBoardProps {
    tiles: Tile[];
}

export default function GameBoard({ tiles }: GameBoardProps) {
    return (
        <div className="game-board">
            {tiles.map((tile) => <GameTile key={tile.index} tile={tile} />)}
        </div>
    );
}