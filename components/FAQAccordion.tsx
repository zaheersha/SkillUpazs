"use client";

import { useState } from "react";
import { faqs } from "@/data/faqs";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export default function FAQAccordion() {
    const [openId, setOpenId] = useState<string | null>(null);

    const toggle = (id: string) => {
        setOpenId(openId === id ? null : id);
    };

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
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <section id="faqs" className="py-24 relative overflow-hidden bg-white dark:bg-slate-950">
            <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10">
                <div className="text-center mb-16">
                    <ScrollReveal direction="up">
                        <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Help Center</span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-2 tracking-tight">Got Questions?</h2>
                        <div className="h-1.5 w-20 bg-primary mx-auto mt-6 rounded-full" />
                    </ScrollReveal>
                </div>

                <motion.div
                    className="space-y-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {faqs.map((faq) => (
                        <motion.div
                            key={faq.id}
                            variants={itemVariants}
                            className={`group border border-border/50 rounded-2xl bg-slate-50/50 dark:bg-slate-900/50 overflow-hidden transition-all duration-300 ${openId === faq.id ? "ring-1 ring-primary/20 bg-white dark:bg-slate-950 shadow-xl" : "hover:border-primary/20 hover:bg-white dark:hover:bg-slate-950"
                                }`}
                        >
                            <button
                                onClick={() => toggle(faq.id)}
                                className="flex items-center justify-between w-full p-6 text-left focus:outline-none"
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${openId === faq.id ? "bg-primary text-white" : "bg-primary/10 text-primary"
                                        }`}>
                                        <HelpCircle size={18} />
                                    </div>
                                    <span className={`font-bold text-lg md:text-xl transition-colors ${openId === faq.id ? "text-primary" : "text-foreground group-hover:text-primary"
                                        }`}>
                                        {faq.question}
                                    </span>
                                </div>
                                <div className={`w-8 h-8 rounded-full border border-border flex items-center justify-center transition-all ${openId === faq.id ? "bg-primary border-primary text-white rotate-180" : "bg-transparent text-slate-400 group-hover:border-primary/30 group-hover:text-primary"
                                    }`}>
                                    {openId === faq.id ? (
                                        <Minus className="h-4 w-4" />
                                    ) : (
                                        <Plus className="h-4 w-4" />
                                    )}
                                </div>
                            </button>

                            <AnimatePresence initial={false}>
                                {openId === faq.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                    >
                                        <div className="px-18 pb-8 pl-18 md:pl-18 pr-6 text-slate-500 dark:text-slate-400 text-lg leading-relaxed border-t border-border/10 pt-6 mx-6">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
