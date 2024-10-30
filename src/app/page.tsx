import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Games from "@/components/games";

export default function Homepage() {
    return (
        <main className="container mx-auto px-4 py-12 relative z-10">
            <section id="hero" className="text-center mb-16">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                        Learn Coding, Music, and more through games
                    </span>
                </h1>
                <p className="text-xl mb-8 max-w-2xl mx-auto">
                    TGames is a collection of educational games designed to
                    teach a variety of concepts in a fun and interactive way.
                </p>
                <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-br to-cyan-400 from-blue-500 font-semibold drop-shadow-lg"
                >
                    <Link href="/games">Play Now</Link>
                </Button>
            </section>

            <section id="about" className="mb-16">
                <Card className="bg-slate-900/70">
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold text-cyan-400">
                            About TGames
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-300 mb-4">
                            I (Théo Bourgeois) compiled a collections of games
                            you can play to learn coding, music, and more.
                        </p>
                        <Link
                            href="https://theobourgeois.com"
                            className="text-cyan-400 hover:underline flex items-center"
                        >
                            Learn more about my journey
                            <ChevronRight className="ml-1 w-4 h-4" />
                        </Link>
                    </CardContent>
                </Card>
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
