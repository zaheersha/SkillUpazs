"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

export default function BackgroundEffects() {
    const [mounted, setMounted] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { theme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        const particleCount = 60;
        const interactionDistance = 150;
        const mouse = { x: -1000, y: -1000 };

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;

            constructor(width: number, height: number) {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.4;
                this.vy = (Math.random() - 0.5) * 0.4;
                this.size = Math.random() * 2 + 1;
            }

            update(width: number, height: number) {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;
            }

            draw(ctx: CanvasRenderingContext2D, color: string) {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = color;
                ctx.fill();
            }
        }

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle(canvas.width, canvas.height));
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const color = theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(37, 99, 235, 0.4)"; // Increased from 0.15
            const lineColor = theme === "dark" ? "rgba(255, 255, 255, " : "rgba(37, 99, 235, ";

            particles.forEach((p, i) => {
                p.update(canvas.width, canvas.height);
                p.draw(ctx, color);

                // Connect to mouse
                const dxm = p.x - mouse.x;
                const dym = p.y - mouse.y;
                const distM = Math.sqrt(dxm * dxm + dym * dym);

                if (distM < interactionDistance * 1.5) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.strokeStyle = `${lineColor}${(theme === "dark" ? 0.15 : 0.4) * (1 - distM / (interactionDistance * 1.5))})`; // Boosted for light
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }

                // Connect to other particles
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < interactionDistance) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `${lineColor}${(theme === "dark" ? 0.1 : 0.25) * (1 - dist / interactionDistance)})`; // Boosted for light
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", handleMouseMove);

        resize();
        draw();

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [mounted, theme]);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-20">
            {/* The Modern Grid - Strategic Technical Blueprint */}
            <div
                className="absolute inset-0 opacity-[0.25] dark:opacity-[0.05]" // Increased from 0.1
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(128,128,128,0.3) 1px, transparent 1px), 
                                      linear-gradient(to bottom, rgba(128,128,128,0.3) 1px, transparent 1px)`, // Slightly darker lines
                    backgroundSize: '40px 40px',
                    maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)'
                }}
            />

            {/* Interactive Particle Layer */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-0"
            />

            {/* Aurora Mesh - Fluid & Organic Drifts */}
            <motion.div
                className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary/30 dark:bg-primary/20 rounded-full blur-[140px]" // Increased from 20 for light
                animate={{
                    x: [0, 80, 0],
                    y: [0, 40, 0],
                    rotate: [0, 45, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="absolute top-[10%] right-[-10%] w-[50%] h-[50%] bg-purple-500/25 dark:bg-purple-500/15 rounded-full blur-[120px]" // Increased from 15
                animate={{
                    x: [0, -60, 0],
                    y: [0, 80, 0],
                    scale: [1.2, 1, 1.2],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="absolute bottom-[-10%] left-[20%] w-[45%] h-[45%] bg-emerald-500/20 dark:bg-emerald-500/10 rounded-full blur-[110px]" // Increased from 10
                animate={{
                    x: [0, 100, 0],
                    y: [0, -40, 0],
                    scale: [1, 1.15, 1],
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="absolute bottom-[-5%] right-[-5%] w-[55%] h-[55%] bg-blue-600/25 dark:bg-blue-600/15 rounded-full blur-[130px]" // Increased from 15
                animate={{
                    x: [0, -50, 0],
                    y: [0, -30, 0],
                    scale: [1.1, 1, 1.1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </div>
    );
}
