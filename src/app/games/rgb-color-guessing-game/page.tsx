import { games } from "@/app/content/games";
import ColorGuessing from "@/app/games/rgb-color-guessing-game/_components/color-guessing";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const colorGuessingGame = games.find(
    (game) => game.slug === "rgb-color-guessing-game"
)!;

export default function Homepage() {
    return (
        <main className="container mx-auto px-4 py-12 relative z-10">
            <div className="space-y-2 mb-4">
                <h1 className="text-6xl h-[70px] font-bold text-transparent bg-gradient-to-br drop-shadow-xl to-blue-500 from-cyan-500 bg-clip-text">
                    {colorGuessingGame.name}
                </h1>
                <h3 className="text-2xl font-bold text-gray-300">
                    {colorGuessingGame.description}
                </h3>
            </div>
            <ColorGuessing />
            <section className="mt-12 space-y-12 max-w-3xl">
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-gray-100">
                        Master RGB Colors Through Play
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        Ever wondered how your favorite websites and apps create
                        their stunning colors? Welcome to RGB Guesser – your
                        interactive gateway to understanding digital color.
                        Whether you&apos;re a developer, designer, or digital
                        artist, mastering RGB colors is your key to creating
                        beautiful digital experiences.
                    </p>
                </div>

                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-gray-100">
                        How to Train Your Color Eye
                    </h3>

                    <div className="space-y-6">
                        <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                            <h4 className="text-xl font-semibold text-blue-400 mb-3">
                                🎨 Guess the RGB Values
                            </h4>
                            <p className="text-gray-300">
                                Look at a color and guess its RGB values (0-255
                                for each channel). It&apos;s like becoming a
                                color detective – the more you practice, the
                                better you&apos;ll get at understanding color
                                composition. Perfect for developers who want to
                                nail those custom color values!
                            </p>
                        </div>

                        <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                            <h4 className="text-xl font-semibold text-blue-400 mb-3">
                                🎯 Guess the Color
                            </h4>
                            <p className="text-gray-300">
                                Given RGB values, can you pick the matching
                                color? This mode helps you understand how
                                numbers translate to visual colors – essential
                                for working with design systems and color APIs.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-gray-100">
                        RGB Color Mastery
                    </h3>
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                            <h4 className="text-xl font-semibold text-green-400 mb-3">
                                For Web Developers
                            </h4>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex items-center gap-2">
                                    <span className="text-green-400">•</span>
                                    <span>
                                        Master Tailwind CSS color systems
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-green-400">•</span>
                                    <span>
                                        Perfect Material Design implementations
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-green-400">•</span>
                                    <span>Create custom color functions</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                            <h4 className="text-xl font-semibold text-purple-400 mb-3">
                                For Designers
                            </h4>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex items-center gap-2">
                                    <span className="text-purple-400">•</span>
                                    <span>Build accessible color palettes</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-purple-400">•</span>
                                    <span>
                                        Create consistent design systems
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-purple-400">•</span>
                                    <span>Master digital color theory</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-gray-100">
                        Essential Resources
                    </h3>
                    <div className="grid gap-4 md:grid-cols-2">
                        <Link
                            href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/rgb"
                            className="flex items-center p-4 bg-gray-900/50 rounded-lg hover:bg-gray-900/70 transition-colors"
                        >
                            <span className="flex-1">
                                MDN RGB Documentation
                            </span>
                            <ExternalLink className="w-4 h-4" />
                        </Link>
                        <Link
                            href="https://webaim.org/resources/contrastchecker/"
                            className="flex items-center p-4 bg-gray-900/50 rounded-lg hover:bg-gray-900/70 transition-colors"
                        >
                            <span className="flex-1">
                                Color Contrast Checker
                            </span>
                            <ExternalLink className="w-4 h-4" />
                        </Link>
                        <Link
                            href="https://material.io/design/color/the-color-system.html"
                            className="flex items-center p-4 bg-gray-900/50 rounded-lg hover:bg-gray-900/70 transition-colors"
                        >
                            <span className="flex-1">
                                Material Design Colors
                            </span>
                            <ExternalLink className="w-4 h-4" />
                        </Link>
                        <Link
                            href="https://tailwindcss.com/docs/customizing-colors"
                            className="flex items-center p-4 bg-gray-900/50 rounded-lg hover:bg-gray-900/70 transition-colors"
                        >
                            <span className="flex-1">
                                Tailwind Color System
                            </span>
                            <ExternalLink className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                    <p className="text-lg text-gray-200">
                        Ready to level up your color game? Start with
                        &quot;Guess the RGB Values&quot; mode and watch as your
                        understanding of digital color transforms. Perfect for
                        both beginners and experienced designers looking to
                        sharpen their color intuition.
                    </p>
                </div>

                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-gray-100">
                        Quick RGB Reference
                    </h3>
                    <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                        <ul className="space-y-2 text-gray-300">
                            <li className="flex items-center gap-2">
                                <span className="text-red-400">•</span>
                                <span>Red (R): 255 = full red, 0 = no red</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-green-400">•</span>
                                <span>
                                    Green (G): 255 = full green, 0 = no green
                                </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-blue-400">•</span>
                                <span>
                                    Blue (B): 255 = full blue, 0 = no blue
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
}
