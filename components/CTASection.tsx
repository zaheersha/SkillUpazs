"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import MagneticWrapper from "./MagneticWrapper";
import Link from "next/link";

export default function CTASection() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 bg-primary/5 -z-10" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            <div className="container mx-auto px-4 text-center relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                        <Zap className="w-3 h-3 fill-primary" />
                        <span>Ready to Scale?</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
                        Stop Settling for <span className="text-primary italic">Average.</span> <br />
                        Build Your Legacy Today.
                    </h2>

                    <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                        Join the elite businesses that trust SkillUp to deliver world-class digital solutions.
                        High performance. Stunning design. Zero compromises.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <MagneticWrapper strength={0.3}>
                            <Button size="lg" asChild className="text-lg px-10 h-16 rounded-full shadow-2xl shadow-primary/20 hover:shadow-primary/40 transition-all active:scale-95">
                                <Link href="#contact" className="flex items-center gap-2">
                                    Get Started Now
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </Button>
                        </MagneticWrapper>

                        <Link href="#projects" className="text-sm font-semibold hover:text-primary transition-colors hover:underline underline-offset-4">
                            Or View Our Portfolio
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Blobs */}
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10 animate-pulse" />
        </section>
    );
}
