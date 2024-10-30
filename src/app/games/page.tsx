import Games from "@/components/games";

export default function Homepage() {
    return (
        <main className="container mx-auto px-4 py-12 relative z-10">
            <h1 className="text-7xl font-bold text-transparent bg-gradient-to-br drop-shadow-xl  to-blue-500 from-cyan-500 bg-clip-text mb-8">
                Games
            </h1>
            <section id="games" className="mb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Games />
                </div>
            </section>
        </main>
    );
}
