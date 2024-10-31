"use client";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { GameMode } from "./game-mode";
import { Guitar } from "./guitar";
import { useGuitarState, type GameMode as GameModeType } from "./state";
import GameContainer from "@/components/game-container";

export default function FretBoss() {
    const { gameMode, setGameMode, setNotes, setGuesses } = useGuitarState();
    return (
        <GameContainer className="gap-2 h-max">
            <p className="font-semibold text-2xl mb-1">Select game mode:</p>
            <Select
                onValueChange={(value) => {
                    setGameMode(value as GameModeType);
                    setGuesses([]);
                    setNotes([]);
                }}
                value={gameMode}
            >
                <SelectTrigger className="w-max relative z-20">
                    <SelectValue placeholder="Select game mode" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="place">Place notes</SelectItem>
                    <SelectItem value="guess">Guess notes</SelectItem>
                    <SelectItem value="interval1">
                        Guess the note from interval
                    </SelectItem>
                </SelectContent>
            </Select>
            <GameMode />

            <div className="h-[300px] w-full flex flex-col items-center">
                <Guitar />
            </div>
        </GameContainer>
    );
}
