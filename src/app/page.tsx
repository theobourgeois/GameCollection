import Link from "next/link";
import { Button } from "@/components/ui/button";
import Games from "@/components/games";

export default function Homepage() {
    return (
        <main className="container mx-auto px-4 py-12 relative z-10">
            <section id="about" className="text-center mb-16">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                        Learn Coding, Music, and more through games
                    </span>
                </h1>
                <p className="text-xl mb-8 max-w-2xl mx-auto">
                    TGames is an interactive collection of browser-based games
                    designed to teach programming, music theory, and technical
                    concepts through hands-on challenges and playful
                    exploration.
                </p>
                <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-br to-cyan-400 from-blue-500 font-semibold drop-shadow-lg"
                >
                    <Link href="/games">Play Now</Link>
                </Button>
            </section>

            <section id="games" className="mb-16">
                <h2 className="text-4xl font-bold text-cyan-400 mb-8 hover:underline">
                    <Link href="/games">Our Games</Link>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Games />
                </div>
            </section>
        </main>
    );
}
