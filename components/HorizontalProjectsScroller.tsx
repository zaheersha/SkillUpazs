"use client";

import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";


export default function HorizontalProjectsScroller() {
    return (
        <section id="projects" className="py-24 bg-slate-950 text-white overflow-hidden relative">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />

            <div className="container px-4 md:px-8 mx-auto mb-16">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                    <div className="max-w-3xl">
                        <ScrollReveal direction="left">
                            <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Portfolio</span>
                            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Case Studies</h2>
                            <p className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed">
                                A curated selection of high-impact digital products we&apos;ve built for forward-thinking brands.
                            </p>
                        </ScrollReveal>
                    </div>
                    <div className="hidden md:flex flex-col gap-2 text-primary font-bold">
                        <motion.div
                            className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full backdrop-blur-sm"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <span>Explore works</span>
                            <ArrowRight size={20} />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Horizontal Scroll Container */}
            <div className="w-full overflow-x-auto pb-20 px-4 md:px-12 custom-scrollbar snap-x snap-mandatory">
                <div className="flex gap-10 w-max">
                    {/* Spacer for left padding alignment */}
                    <div className="w-0 md:w-8 flex-shrink-0" />

                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="relative group h-[350px] md:h-[450px] w-[85vw] md:w-[550px] bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex-shrink-0 snap-center border border-white/5"
                        >

                            {/* Website Preview (Iframe or Image) */}
                            <div className="absolute inset-0 bg-slate-800">
                                <div className="w-full h-full relative overflow-hidden group-hover:scale-105 transition-transform duration-700 ease-out">
                                    {project.link === "none" || project.link === "javascript:void(0)" ? (
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <iframe
                                            src={project.link}
                                            title={project.title}
                                            className="w-[200%] h-[200%] border-0 transform scale-50 origin-top-left pointer-events-none transition-all duration-700"
                                            loading="lazy"
                                        />
                                    )}
                                </div>

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/80 transition-all duration-500" />
                            </div>

                            <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                <motion.span
                                    className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-primary"
                                >
                                    {project.category}
                                </motion.span>
                                <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-white">{project.title}</h3>
                                <p className="mb-10 text-slate-300 text-lg font-light leading-relaxed max-w-sm">{project.description}</p>
                                {project.link !== "none" && (
                                    <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 rounded-full px-10 h-14 shadow-xl hover:shadow-primary/30 transition-all">
                                        <Link href={project.link} target="_blank">
                                            Visit Showcase <ExternalLink className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                )}
                            </div>

                            {/* Corner Badge */}
                            <div className="absolute top-6 right-6 z-20 opacity-100 group-hover:opacity-0 transition-opacity duration-300 bg-black/20 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase">
                                {project.category}
                            </div>
                        </motion.div>
                    ))}

                    {/* Spacer for right padding alignment */}
                    <div className="w-4 md:w-16 flex-shrink-0" />
                </div>
            </div>
        </section>
    );
}
