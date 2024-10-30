import { cn } from "@/lib/utils";
import React from "react";

const GameContainer = ({
    children,
    className,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <section className="relative w-full py-16">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-indigo-950/90 to-gray-950/90 animate-gradient-slow" />

            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden z-0">
                {/* Top left corner accent */}
                <div className="absolute -top-24 -left-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl" />
                {/* Bottom right corner accent */}
                <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl" />
                {/* Center ambient glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
            </div>

            {/* Content container */}
            <div className="relative z-20 container mx-auto px-4">
                <div className="backdrop-blur-sm bg-gray-950/40 rounded-2xl border border-gray-800/40 shadow-2xl">
                    {/* Inner gradient overlay */}
                    <div className="relative h-[600px] rounded-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-900/20 to-blue-950/20" />

                        {/* Game content */}
                        <div
                            className={cn(
                                "relative h-full flex flex-col items-center justify-center p-8 z-10",
                                className
                            )}
                        >
                            {children}
                        </div>

                        {/* Subtle grid overlay */}
                        <div
                            className="absolute inset-0 opacity-[0.02] z-0"
                            style={{
                                backgroundImage: `linear-gradient(#fff 1px, transparent 1px),
                                linear-gradient(90deg, #fff 1px, transparent 1px)`,
                                backgroundSize: "20px 20px",
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GameContainer;
