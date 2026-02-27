"use client";

import { motion, Variants } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";
import { Sparkles, Users, Rocket, Target, ShieldCheck } from "lucide-react";

export default function AboutSection() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const partners = [
        { name: "Businesses", icon: <Users size={16} /> },
        { name: "Startups", icon: <Rocket size={16} /> },
        { name: "Students", icon: <Target size={16} /> },
        { name: "Freelancers", icon: <Users size={16} /> },
        { name: "Service Providers", icon: <ShieldCheck size={16} /> },
    ];

    return (
        <section id="about" className="py-24 relative overflow-hidden bg-white dark:bg-slate-950">
            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-4 md:px-8">
                <div className="max-w-5xl mx-auto text-center">
                    <ScrollReveal direction="up">
                        <div className="flex items-center justify-center gap-2 mb-6">
                            <div className="h-px w-8 bg-primary/30" />
                            <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase">Our Mission</span>
                            <div className="h-px w-8 bg-primary/30" />
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold mt-2 mb-10 tracking-tight leading-tight">
                            Skills Unlocked. <span className="text-primary underline decoration-primary/20 underline-offset-8">For All.</span>
                        </h2>

                        <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 mb-12 leading-relaxed font-light">
                            SkillUp is a technology-driven platform that empowers students and businesses through practical, industry-focused skills. We build modern, responsive websites and mentor learners with hands-on, career-oriented training.
                        </p>

                    </ScrollReveal>

                    <ScrollReveal direction="up" delay={0.4}>
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-3xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                            <div className="relative bg-white dark:bg-slate-900 border border-border/50 rounded-3xl p-10 md:p-14 shadow-2xl">
                                <h3 className="font-bold text-2xl mb-8 flex items-center justify-center gap-3">
                                    <Sparkles className="text-primary" />
                                    Who We Empower
                                </h3>
                                <motion.div
                                    className="flex flex-wrap justify-center gap-4 md:gap-6"
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    {partners.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            variants={itemVariants}
                                            className="px-6 py-3 bg-slate-50 dark:bg-slate-800/50 border border-border/50 text-foreground rounded-2xl text-sm md:text-base font-bold flex items-center gap-3 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm hover:shadow-primary/20 cursor-default"
                                        >
                                            <span className="opacity-70">{item.icon}</span>
                                            {item.name}
                                        </motion.div>
                                    ))}
                                </motion.div>

                                <p className="mt-12 text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed italic">
                                    &quot;By combining real-world projects with structured guidance, we bridge the gap between education and high-performance digital solutions.&quot;
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
