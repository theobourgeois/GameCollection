import Link from "next/link";
import FretBoss from "./_components/fretboss";
import { games } from "@/app/content/games";

const fretboss = games.find((game) => game.slug === "fretboss")!;

export default function Homepage() {
    return (
        <main className="container mx-auto px-4 py-12 relative z-10">
            <section className="flex flex-col">
                <h1 className="text-6xl font-bold text-transparent bg-gradient-to-br drop-shadow-xl to-blue-500 from-cyan-500 bg-clip-text mb-1">
                    {fretboss.name}
                </h1>
                <h3 className="text-2xl font-bold text-gray-300 mb-8">
                    {fretboss.description}
                </h3>
            </section>
            <FretBoss />
            <section className="mt-12 space-y-12 max-w-3xl">
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-gray-100">
                        Master the Guitar Fretboard
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        Ever felt lost trying to find notes on your guitar?
                        You're not alone. Whether you're just starting out or
                        looking to level up your playing, understanding the
                        fretboard is your key to musical freedom. That's exactly
                        why we built FretBoss – your personal guide to mastering
                        the guitar fretboard, one note at a time.
                    </p>
                </div>

                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-gray-100">
                        Three Ways to Learn, One Goal: Fretboard Mastery
                    </h3>

                    <div className="space-y-8">
                        <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                            <h4 className="text-xl font-semibold text-blue-400 mb-3">
                                🎯 Place Notes Mode
                            </h4>
                            <p className="text-gray-300">
                                Think of it as a musical treasure hunt! We'll
                                give you a note, and your mission is to find
                                every occurrence of it on the fretboard. It's
                                like connecting the dots, but with notes –
                                perfect for building that crucial mental map of
                                your guitar neck.
                            </p>
                        </div>

                        <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                            <h4 className="text-xl font-semibold text-blue-400 mb-3">
                                🤔 Guess Notes Mode
                            </h4>
                            <p className="text-gray-300">
                                Ready for a challenge? You pick how many notes
                                you want to tackle, and we'll put random
                                unmarked notes on the fretboard. Your job? Name
                                that note! It's like flashcards for your guitar,
                                but way more fun. Start with a few notes and
                                work your way up as you get more confident.
                            </p>
                        </div>

                        <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                            <h4 className="text-xl font-semibold text-blue-400 mb-3">
                                🎼 Interval Training Mode
                            </h4>
                            <p className="text-gray-300">
                                Here's where things get interesting! We'll show
                                you a note and an interval, and you'll need to
                                figure out where you'll land. It's like musical
                                math, but don't worry – with practice, it
                                becomes second nature. This is your fast track
                                to understanding how scales and melodies work
                                across the fretboard.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-gray-100">
                        Why FretBoss?
                    </h3>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            <span>
                                Learn at your own pace with three different game
                                modes
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            <span>
                                Practice anywhere – works great on desktop and
                                mobile
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            <span>Built by guitarists, for guitarists</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            <span>
                                Perfect for beginners and intermediate players
                                looking to level up
                            </span>
                        </li>
                    </ul>
                </div>

                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                    <p className="text-lg text-gray-200">
                        Ready to unlock the fretboard? Jump into any game mode
                        and start your journey to fretboard mastery. No sign-up
                        required – just pick a mode and start playing!
                    </p>
                </div>
            </section>
        </main>
    );
}
