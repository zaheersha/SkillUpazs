"use client";

import React from "react";
import { motion } from "framer-motion";

const techStack = [
    "Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion",
    "Node.js", "PostgreSQL", "Supabase", "Prisma", "Vercel",
    "Docker", "AWS", "GraphQL", "Redis", "Figma"
];

export default function TechStackMarquee() {
    // Triple the items to ensure a seamless loop
    const duplicatedTech = [...techStack, ...techStack, ...techStack];

    return (
        <section className="py-12 bg-slate-50/50 dark:bg-slate-900/30 overflow-hidden border-y border-border/50">
            <div className="container mx-auto px-4 mb-8 text-center">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                    Powered by Industry-Leading Technologies
                </p>
            </div>

            <div className="relative flex overflow-x-hidden">
                <motion.div
                    className="flex whitespace-nowrap gap-12 items-center py-4"
                    animate={{
                        x: [0, -1000],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear",
                        },
                    }}
                >
                    {duplicatedTech.map((tech, index) => (
                        <div
                            key={index}
                            className="text-2xl md:text-3xl font-bold text-slate-400/50 dark:text-slate-600/50 hover:text-primary transition-colors cursor-default select-none"
                        >
                            {tech}
                        </div>
                    ))}
                </motion.div>

                {/* Mirror for seamless loop if needed, but the array duplication usually covers it if long enough */}
            </div>
        </section>
    );
}
