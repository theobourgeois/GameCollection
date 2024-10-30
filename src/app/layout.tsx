import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import MatrixCanvas from "@/components/matrix-canvas";
import Link from "next/link";

const poppins = Poppins({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-poppins",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://games.theobourgeois.com"),
    title: "TGames - Educational Technology Games",
    description:
        "TGames is a collection of educational games designed to teach a variety of concepts in a fun and interactive way.",
    keywords: [
        "Coding",
        "Music",
        "Games",
        "Educational",
        "Technology",
        "Theo Bourgeois",
    ].join(", "),

    authors: [{ name: "Théo Bourgeois" }],

    generator: "Next.js",

    applicationName: "TGames - Educational Technology Games",

    referrer: "origin-when-cross-origin",

    openGraph: {
        type: "website",
        locale: "en_CA",
        url: "https://theobourgeois.com",
        title: "TGames - Educational Technology Games",
        description:
            "TGames is a collection of educational games designed to teach a variety of concepts in a fun and interactive way.",
        siteName: "TGames - Educational Technology Games",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "TGames - Educational Technology Games",
            },
        ],
    },

    // Twitter metadata
    twitter: {
        card: "summary_large_image",
        title: "Théo Bourgeois - Software Engineer",
        description:
            "Software Engineer building innovative web solutions in Halifax, NS",
        creator: "@_theobourgeois",
        images: ["/twitter-image.png"], // Add your Twitter card image
    },

    // Icons
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
        other: [
            {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                url: "/favicon-32x32.png",
            },
        ],
    },

    // Robots directives
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },

    // Verification for search console
    verification: {
        google: process.env.GOOGLE_VERIFICATION, // Add your Google verification code
        //yandex: "yandex-verification",
        //yahoo: "yahoo-verification",
    },

    // Alternate languages/versions if you have them
    alternates: {
        canonical: "https://games.theobourgeois.com",
        languages: {
            "en-US": "https://games.theobourgeois.com/en-US",
            "fr-CA": "https://games.theobourgeois.com/fr-CA",
        },
    },

    // Additional metadata
    category: "technology",

    // For apps/PWA
    manifest: "/manifest.json",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${poppins.variable} antialiased min-h-screen bg-gradient-to-br from-gray-900 to-blue-950 text-gray-100`}
            >
                <header className="border-b border-gray-700">
                    <div className="container mx-auto px-4 py-4">
                        <nav className="flex justify-between items-center">
                            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                                <Link href="/">
                                    <span
                                        className="text-white"
                                        style={{
                                            textShadow: "0 0 10px #ffffff80",
                                        }}
                                    >
                                        T
                                    </span>
                                    Games
                                </Link>
                            </h1>
                            <div className="space-x-6">
                                <Link
                                    href="#about"
                                    className="hover:text-cyan-400 transition-colors"
                                >
                                    About
                                </Link>
                                <Link
                                    href="/games"
                                    className="hover:text-cyan-400 transition-colors"
                                >
                                    Games
                                </Link>
                                {/* <Link
                                    href="https://theobourgeois.com"
                                    className="hover:text-cyan-400 transition-colors"
                                >
                                    Donate
                                </Link> */}
                            </div>
                        </nav>
                    </div>
                </header>

                <MatrixCanvas className="absolute w-full h-full z-0" />
                {children}
                <footer className="bg-gray-900 text-gray-400 py-8">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <div className="mb-4 md:mb-0">
                                <p>
                                    &copy; 2024 TGames. Crafted with ❤️ by{" "}
                                    <Link href="https://theobourgeois.com">
                                        Théo Bourgeois
                                    </Link>
                                </p>
                            </div>
                            <div className="flex space-x-6">
                                <Link
                                    href="https://theobourgeois.com"
                                    className="hover:text-cyan-400 transition-colors"
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                </footer>
            </body>
        </html>
    );
}
