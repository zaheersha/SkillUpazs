"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import MagneticWrapper from "./MagneticWrapper";

export default function HeroSection() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const floatingVariants: Variants = {
        initial: { y: 0 },
        animate: {
            y: [-10, 10, -10],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-dot-pattern">
            {/* Background animated gradient blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <motion.div
                    className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
                <motion.div
                    className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-400/10 rounded-full blur-[120px]"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            </div>

            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Text Content */}
                    <motion.div
                        className="flex-1 text-center lg:text-left"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
                        >
                            <Sparkles className="w-4 h-4" />
                            <span>Premium Web Design Agency</span>
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
                        >
                            We Build <span className="text-primary italic">Digital Experiences</span> That Scale
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg md:text-xl text-accent-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                        >
                            SkillUp is a technology-driven platform that empowers students and businesses through practical, industry-focused skills. We build modern, responsive websites and mentor learners with hands-on, career-oriented training.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <MagneticWrapper strength={0.3}>
                                <Button size="lg" asChild className="text-lg px-8 h-14 bg-primary hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25 hover:-translate-y-1">
                                    <Link href="#contact">Start a Project</Link>
                                </Button>
                            </MagneticWrapper>
                            <MagneticWrapper strength={0.2}>
                                <Button size="lg" variant="outline" asChild className="text-lg px-8 h-14 border-2 hover:bg-secondary transition-all hover:-translate-y-1">
                                    <Link href="#projects" className="group">
                                        View Our Work
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </Button>
                            </MagneticWrapper>
                        </motion.div>
                    </motion.div>

                    {/* Visual Content */}
                    <motion.div
                        className="flex-1 w-full max-w-lg lg:max-w-none relative"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                    >
                        <motion.div
                            variants={floatingVariants}
                            initial="initial"
                            animate="animate"
                            className="relative"
                        >
                            {/* Mockup Container */}
                            <div className="relative aspect-video bg-white dark:bg-slate-950 rounded-2xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-border/50 flex flex-col overflow-hidden backdrop-blur-xl">
                                <div className="h-10 bg-slate-50 dark:bg-slate-900 border-b flex items-center px-6 gap-2 shrink-0">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-rose-400/80" />
                                        <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                                        <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
                                    </div>
                                    <div className="mx-auto w-32 h-2 bg-slate-200 dark:bg-slate-800 rounded-full" />
                                </div>
                                <div className="flex-1 p-8 relative overflow-hidden">
                                    {/* Mockup Content - Abstract UI */}
                                    <div className="grid grid-cols-12 gap-4 h-full">
                                        <div className="col-span-8 space-y-4">
                                            <div className="h-12 bg-slate-100 dark:bg-slate-800 rounded-xl w-full animate-pulse" />
                                            <div className="h-4 bg-slate-100 dark:bg-slate-800 rounded-lg w-5/6" />
                                            <div className="h-4 bg-slate-100 dark:bg-slate-800 rounded-lg w-4/6" />
                                            <div className="grid grid-cols-2 gap-4 pt-4">
                                                <div className="h-32 bg-primary/5 rounded-xl border border-primary/10" />
                                                <div className="h-32 bg-slate-100 dark:bg-slate-800 rounded-xl" />
                                            </div>
                                        </div>
                                        <div className="col-span-4 space-y-4">
                                            <div className="h-[200px] bg-slate-100 dark:bg-slate-800 rounded-xl w-full" />
                                            <div className="h-24 bg-primary/10 rounded-xl w-full border border-primary/20" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements - Premium Accents */}
                            <motion.div
                                className="absolute -top-6 -right-6 bg-white dark:bg-slate-900 rounded-2xl border border-border/50 shadow-2xl p-4 w-40 backdrop-blur-md"
                                animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
                                        < Sparkles className="w-4 h-4" />
                                    </div>
                                    <div className="h-2 w-16 bg-slate-100 dark:bg-slate-800 rounded" />
                                </div>
                                <div className="space-y-2">
                                    <div className="h-1.5 w-full bg-slate-50 dark:bg-slate-800 rounded" />
                                    <div className="h-1.5 w-3/4 bg-slate-50 dark:bg-slate-800 rounded" />
                                </div>
                            </motion.div>

                            <motion.div
                                className="absolute -bottom-8 -left-8 bg-white dark:bg-slate-900 rounded-2xl border border-border/50 shadow-2xl p-5 flex items-center gap-4 backdrop-blur-md"
                                animate={{ y: [0, 15, 0], x: [0, -5, 0] }}
                                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            >
                                <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                                    <motion.div
                                        className="text-emerald-600"
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    >
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                                        </svg>
                                    </motion.div>
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-foreground">Performance</div>
                                    <div className="text-[10px] text-muted-foreground">Lighthouse 100/100</div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
