"use client";
import { useEffect } from "react";
import { useStore } from "./state";
import { play } from "./utils";
import { Settings } from "./settings";
import { Controls } from "./controls";
import { Piano } from "./piano";
import GameContainer from "@/components/game-container";

export default function PitchPerfect() {
    const { guessNotes } = useStore();
    useEffect(() => {
        setTimeout(() => {
            for (const note of guessNotes) {
                play(note);
            }
        }, 1000);
    }, [guessNotes]);
    return (
        <GameContainer className="gap-8">
            <Settings />
            <Controls />
            <Piano />
        </GameContainer>
    );
}
