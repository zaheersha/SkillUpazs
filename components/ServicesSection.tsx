"use client";

import { services } from "@/data/services";
import { motion, Variants } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export default function ServicesSection() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <section id="services" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-slate-950/50">
            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="text-center mb-20">
                    <ScrollReveal direction="up">
                        <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Our Expertise</span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-2 tracking-tight">Services We Provide</h2>
                        <div className="h-1.5 w-20 bg-primary mx-auto mt-6 rounded-full" />
                        <p className="text-accent-foreground mt-8 max-w-2xl mx-auto text-lg leading-relaxed">
                            We deliver end-to-end digital solutions designed to help you dominate your market.
                        </p>
                    </ScrollReveal>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {services.map((service) => {
                        const Icon = service.icon as LucideIcon;
                        return (
                            <motion.div
                                key={service.id}
                                variants={cardVariants}
                                className="group relative bg-white dark:bg-slate-900 border border-border/50 rounded-2xl p-10 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                                whileHover={{ scale: 1.02 }}
                            >
                                {/* Decorative Gradient Background */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700" />

                                <div className="relative z-10">
                                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                                        <Icon size={28} />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                                    <p className="text-accent-foreground leading-relaxed transition-colors duration-300 text-base">
                                        {service.description}
                                    </p>

                                </div>

                                {/* Bottom Glow Effect */}
                                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
