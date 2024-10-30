import { games } from "@/app/content/games";
import Link from "next/link";
import { Button } from "./ui/button";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "./ui/card";

export default function Games() {
    return (
        <>
            {games.map((game) => (
                <Card
                    key={game.slug}
                    className="bg-gray-900/60 text-white flex flex-col justify-between"
                >
                    <CardHeader>
                        <game.Icon className="w-10 h-10 text-cyan-400 mb-4" />
                        <CardTitle>{game.name}</CardTitle>
                        <CardDescription className="text-slate-300">
                            {game.description}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4">{game.heroText}</p>
                        <Button
                            asChild
                            className="w-full bg-gradient-to-br to-blue-500 from-cyan-500"
                        >
                            <Link href={"/games/" + game.slug}>Play Now</Link>
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </>
    );
}
