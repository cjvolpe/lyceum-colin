// builtin

// external

// internal
import "./game-tile.css";
import type { Tile } from "../../lib/types";


interface GameTileProps {
    tile: Tile
}

// TODO: Make this component interactive -- i.e. user clicks will actually do something
export default function GameTile({ tile }: GameTileProps) {
    const color = (tile.revealed) ? tile.color : "card-back";
    const matched = (tile.matched) ? "matched" : "";

    return (
        <button type="button" className={`tile ${color} ${matched}`} >
        </button>
    );
}