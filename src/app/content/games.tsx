import React from "react";
import { Guitar, Mic2Icon, Palette } from "lucide-react";

type Game = {
    name: string;
    description: string;
    slug: string;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
    heroText: string;
};

export const games: Game[] = [
    {
        name: "RGB Color Guessing Game",
        description: "Guess the RGB color code from the given color.",
        slug: "rgb-color-guessing-game",
        Icon: Palette,
        heroText:
            "Put your RGB color knowledge to the test by guessing the correct color code.",
    },
    {
        name: "Fret Boss",
        description: "Guess the notes on the guitar fretboard.",
        slug: "fretboss",
        Icon: Guitar,
        heroText: "Learn the guitar fretboard by guessing notes.",
    },
    {
        name: "Pitch Perfect",
        description: "Guess the pitch of the note.",
        slug: "pitch-perfect",
        Icon: Mic2Icon,
        heroText:
            "Learn the pitch of the note by guessing notes and chords at various difficulties.",
    },
];
