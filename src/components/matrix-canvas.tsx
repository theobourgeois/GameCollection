"use client";
import { useEffect, useRef } from "react";

const FONT_SIZE = 30;
const RENDER_INTERVAL = 100;

const theme = [
    [34, 211, 238],
    [59, 130, 246],
];

const letters = "é♪π♫￥ƒ➫é♪ππ♫￥ƒ➫é♪π♫￥ƒ➫Ⓣ✎☻⁺‧₊˚ ཐི⋆♱⋆ཋྀ ˚₊‧∀⁺π♫♫♫";
const listOfLetters: string[][] = [];
const columnAlphas: number[] = [];

function colorChannelMixer(
    colorChannelA: number,
    colorChannelB: number,
    amountToMix: number
) {
    const channelA = colorChannelA * amountToMix;
    const channelB = colorChannelB * (1 - amountToMix);
    return channelA + channelB;
}

export function colorMixer(
    rgbA: number[],
    rgbB: number[],
    amountToMix: number
) {
    const r = colorChannelMixer(rgbA[0], rgbB[0], amountToMix);
    const g = colorChannelMixer(rgbA[1], rgbB[1], amountToMix);
    const b = colorChannelMixer(rgbA[2], rgbB[2], amountToMix);
    return [r, g, b];
}

function render(ctx: CanvasRenderingContext2D, width: number, height: number) {
    const cols = Math.floor(width / FONT_SIZE);
    ctx.clearRect(0, 0, width, height);

    if (listOfLetters.length === 0) {
        for (let i = 0; i < cols; i++) {
            listOfLetters[i] = [];
            columnAlphas[i] = Math.random();
            for (let j = 0; j < Math.floor(Math.random() * 30); j++) {
                listOfLetters[i].push(
                    letters[Math.floor(Math.random() * letters.length)]
                );
            }
        }
    }

    for (let i = 0; i < cols; i++) {
        const x = i * FONT_SIZE;
        for (let j = 0; j < listOfLetters[i].length; j++) {
            const y = (j * FONT_SIZE) / 2;

            // Calculate color index based on the current row
            const colorIndex = Math.floor((i / height) * theme.length);

            const blend = (i / height) * theme.length - colorIndex;

            const alpha = (1 - y / height) * columnAlphas[i];

            const [r, g, b] = colorMixer(
                theme[(colorIndex + 1) % theme.length],
                theme[colorIndex],
                blend
            );

            ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
            ctx.shadowBlur = 10;
            ctx.shadowColor = `rgba(${r}, ${g}, ${b}, ${alpha})`;

            ctx.fillText(listOfLetters[i][j], x, y, FONT_SIZE);
        }
    }

    // Shift all letters down
    for (let i = 0; i < cols; i++) {
        //slightly move column alphas
        columnAlphas[i] -= 0.01;
        // create new column
        if (columnAlphas[i] <= 0) {
            columnAlphas[i] = Math.max(Math.random(), 0.5);
            listOfLetters[i] = [];
        }
        if (Math.random() > 0.67) {
            if (listOfLetters[i].length < height) {
                listOfLetters[i].push(
                    letters[Math.floor(Math.random() * letters.length)]
                );
            }
        }
    }
}

export default function MatrixCanvas({
    className,
}: Readonly<{ className?: string }>) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const handleRender = () => {
            if (canvasRef.current) {
                const ctx = canvasRef.current.getContext("2d");
                if (ctx) {
                    canvasRef.current.width = window.innerWidth;
                    canvasRef.current.height = window.innerHeight;
                    render(ctx, window.innerWidth, window.innerHeight);
                }
            }
        };
        handleRender();

        window.addEventListener("resize", handleRender);
        const interval = setInterval(handleRender, RENDER_INTERVAL);

        return () => clearInterval(interval);
    }, []);

    return <canvas className={className} ref={canvasRef}></canvas>;
}
