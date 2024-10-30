import { play, calculateNextGuessNotes } from "./utils";
import { useStore } from "./state";
import { Button } from "@/components/ui/button";

export function Controls() {
    const { guessNotes, setGuessNotes, notesPlayingAtOnce, octaveCount } =
        useStore();

    const handlePlayNotes = () => {
        for (const note of guessNotes) {
            play(note);
        }
    };

    const handleGuessNextNote = () => {
        const nextNotes = calculateNextGuessNotes(
            notesPlayingAtOnce,
            octaveCount
        );
        setGuessNotes(nextNotes);
    };

    return (
        <div className="flex gap-2 items-center">
            <Button
                className="bg-gradient-to-tr to-cyan-500 from-blue-700 font-semibold"
                onClick={handlePlayNotes}
            >
                Listen
            </Button>
            <Button
                className="bg-gradient-to-tr to-cyan-300 from-blue-800 font-semibold"
                onClick={handleGuessNextNote}
            >
                Next {">>"}
            </Button>
        </div>
    );
}
