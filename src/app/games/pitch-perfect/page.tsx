import { games } from "@/app/content/games";
import PitchPerfect from "./_components/pitch-perfect";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const pitchPerfect = games.find((game) => game.slug === "pitch-perfect")!;

export default function Homepage() {
    return (
        <main className="container mx-auto px-4 py-12 relative z-10">
            <div className="space-y-2 mb-4 flex flex-col items-center">
                <h1 className="text-6xl font-bold text-transparent bg-gradient-to-br drop-shadow-xl to-blue-500 from-cyan-500 bg-clip-text">
                    {pitchPerfect.name}
                </h1>
                <h3 className="text-2xl font-bold text-gray-300">
                    {pitchPerfect.description}
                </h3>
            </div>
            <PitchPerfect />
            <section className="mt-12 flex flex-col justify-center space-y-12 max-w-3xl w-full">
                <div className="space-y-6 w-full">
                    <h2 className="text-3xl font-bold text-gray-100">
                        Develop Perfect Pitch Through Play
                    </h2>
                    <p className="text-lg text-gray-300">
                        Perfect pitch – the ability to identify or recreate any
                        musical note without a reference tone – has long been
                        considered a rare gift. But what if you could train your
                        ear to develop this remarkable skill? That&apos;s where
                        Pitch Perfect comes in. Through engaging practice
                        sessions and progressive difficulty levels, we&apos;re
                        making perfect pitch training accessible and, dare we
                        say, fun!
                    </p>
                </div>

                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-gray-100">
                        Your Journey to Perfect Pitch
                    </h3>
                    <p className="text-gray-300">
                        Whether you&apos;re a complete beginner or a seasoned
                        musician, our carefully crafted difficulty levels ensure
                        you&apos;ll find the perfect challenge. Start with the
                        basics and work your way up to truly impressive feats of
                        musical recognition.
                    </p>

                    <div className="space-y-6">
                        <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                            <h4 className="text-xl font-semibold text-green-400 mb-3">
                                🎵 Easy Mode
                            </h4>
                            <p className="text-gray-300">
                                Perfect for beginners! Focus on identifying
                                single notes within one octave. It&apos;s like
                                learning to recognize your friends&apos; voices
                                – start here to build your foundation in pitch
                                recognition.
                            </p>
                        </div>

                        <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                            <h4 className="text-xl font-semibold text-yellow-400 mb-3">
                                😼 Medium Mode
                            </h4>
                            <p className="text-gray-300">
                                Ready for more? Now you&apos;ll identify notes
                                across two octaves. Think of it as expanding
                                your musical vocabulary – same notes, different
                                &quot;accents&quot; as they move up and down the
                                scale.
                            </p>
                        </div>

                        <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                            <h4 className="text-xl font-semibold text-orange-400 mb-3">
                                😡 Hard Mode
                            </h4>
                            <p className="text-gray-300">
                                Challenge yourself with two simultaneous notes
                                across two octaves. Like learning to hear both
                                parts of a conversation at once – it&apos;s
                                tricky, but with practice, you&apos;ll start
                                picking out individual notes from the pair.
                            </p>
                        </div>

                        <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                            <h4 className="text-xl font-semibold text-purple-500 mb-3">
                                😈 Insane Mode
                            </h4>
                            <p className="text-gray-300">
                                Three notes, two octaves – now we&apos;re
                                talking! This level will push your pitch
                                recognition skills to new heights. It&apos;s
                                like developing musical superhearing.
                            </p>
                        </div>

                        <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                            <h4 className="text-xl font-semibold text-red-500 mb-3">
                                👹 Demon Mode
                            </h4>
                            <p className="text-gray-300">
                                The ultimate challenge: three notes across three
                                octaves. Master this level, and you&apos;ll have
                                achieved what many consider impossible. This is
                                perfect pitch mastery in its purest form.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-gray-100">
                        Why Train Your Pitch?
                    </h3>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            <span>
                                Enhance your musical performance and composition
                                abilities
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            <span>
                                Improve your ability to play by ear and
                                transcribe music
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            <span>
                                Develop a deeper understanding of musical
                                relationships
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            <span>
                                Build confidence in your musical abilities
                            </span>
                        </li>
                    </ul>
                </div>

                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                    <p className="text-lg text-gray-200">
                        Ready to discover your musical potential? Start with
                        Easy mode and watch as your pitch recognition skills
                        grow. Who knows? You might be one of the few to conquer
                        Demon mode!
                    </p>
                </div>
            </section>
        </main>
    );
}
