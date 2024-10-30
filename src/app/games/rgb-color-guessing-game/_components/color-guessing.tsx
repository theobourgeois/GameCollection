"use client";
import { useState } from "react";
import { Input } from "../../../../components/ui/input";
import { Button } from "../../../../components/ui/button";
import { cn } from "@/lib/utils";
import { Label } from "../../../../components/ui/label";
import GameContainer from "@/components/game-container";

type RGB = {
    r: number;
    g: number;
    b: number;
};

function getRandomRGB() {
    return {
        r: Math.floor(Math.random() * 256),
        g: Math.floor(Math.random() * 256),
        b: Math.floor(Math.random() * 256),
    };
}

function calculateScore(guess: RGB, targetColor: RGB) {
    const maxDiff = Math.sqrt(3 * Math.pow(255, 2));
    const diff = Math.sqrt(
        Math.pow(guess.r - targetColor.r, 2) +
            Math.pow(guess.g - targetColor.g, 2) +
            Math.pow(guess.b - targetColor.b, 2)
    );
    const accuracy = 1 - diff / maxDiff;
    return Math.round(accuracy * 100);
}

export default function ColorGuessing() {
    const [guess, setGuess] = useState<RGB>({ r: 0, g: 0, b: 0 });
    const [color, setColor] = useState(getRandomRGB());
    const [score, setScore] = useState<number | undefined>(undefined);

    const handleGenerateColor = () => {
        setScore(undefined);
        setColor(getRandomRGB());
    };

    const handleGuess = () => {
        const score = calculateScore(guess, color);
        setScore(score);
    };

    const handleChangeRGBValues =
        (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
            const value = parseInt(e.target.value);
            setGuess((prev) => ({
                ...prev,
                [index === 0 ? "r" : index === 1 ? "g" : "b"]: value,
            }));
        };

    return (
        <GameContainer>
            <div
                className="w-44 h-44 p-4 rounded-md drop-shadow-md mb-4 border-white border-2"
                style={{
                    backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})`,
                }}
            ></div>

            <div className="flex gap-4 flex-col">
                <div className="flex justify-center gap-2">
                    <div className="flex gap-2 items-center">
                        <Label>R:</Label>
                        <Input
                            type="number"
                            className="w-[72px]"
                            value={guess.r}
                            onChange={handleChangeRGBValues(0)}
                        />
                    </div>
                    <div className="flex gap-2 items-center">
                        <Label>G:</Label>
                        <Input
                            type="number"
                            className="w-[72px]"
                            value={guess.g}
                            onChange={handleChangeRGBValues(1)}
                        />
                    </div>
                    <div className="flex gap-2 items-center">
                        <Label>B:</Label>
                        <Input
                            type="number"
                            className="w-[72px]"
                            value={guess.b}
                            onChange={handleChangeRGBValues(2)}
                        />
                    </div>
                </div>
                <div className="flex items-center gap-4 justify-center">
                    <Button
                        className="bg-gradient-to-br to-cyan-400 from-blue-500 font-semibold drop-shadow-lg hover:from-blue-600 hover:to-cyan-500"
                        onClick={handleGuess}
                    >
                        Submit Guess
                    </Button>
                    <Button
                        className="bg-gradient-to-br to-indigo-700 from-indigo-400 font-semibold drop-shadow-lg hover:from-indigo-600 hover:to-indigo-600"
                        onClick={handleGenerateColor}
                    >
                        New Color
                    </Button>
                </div>
                <div
                    style={{
                        display: score === undefined ? "none" : "block",
                    }}
                >
                    <p className={cn("text-center text-xl transition-all")}>
                        Your score: {score}%
                    </p>
                </div>
            </div>
        </GameContainer>
    );
}
