"use client";

import { pricingPlans } from "@/data/pricing";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check, MessageCircle } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";

export default function PricingSection() {
    const handleWhatsAppClick = (planName: string, price: string) => {
        const message = `Hello Skill Up,\nWe would like to have a website worth ${price}.\nPlease share more details about the process and timeline.\nThank you.`;
        const encodedMessage = encodeURIComponent(message);
        const phoneNumber = "919494333702";
        return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
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

    const cardVariants: Variants = {
        hidden: { opacity: 0, scale: 0.95, y: 30 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <section id="pricing" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-950/20">
            {/* Background Accent */}
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] -z-10 -translate-x-1/2 translate-y-1/2" />

            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-20">
                    <ScrollReveal direction="up">
                        <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Pricing Plans</span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-2 tracking-tight">Flexible Investment for Every Business</h2>
                        <div className="h-1.5 w-20 bg-primary mx-auto mt-6 rounded-full" />
                        <p className="text-accent-foreground mt-8 max-w-2xl mx-auto text-lg leading-relaxed">
                            Premium results at competitive rates. Choose the package that aligns with your growth strategy.
                        </p>
                    </ScrollReveal>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {pricingPlans.map((plan) => (
                        <motion.div
                            key={plan.id}
                            variants={cardVariants}
                            className={`group relative bg-white dark:bg-slate-900 border rounded-3xl p-10 flex flex-col transition-all duration-500 ${plan.popular
                                    ? "shadow-[0_32px_80px_-20px_rgba(0,0,0,0.15)] ring-2 ring-primary border-primary/20 scale-[1.03] z-10"
                                    : "shadow-sm hover:shadow-2xl border-border/50 hover:border-primary/20"
                                }`}
                            whileHover={{ y: -5 }}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-5 py-1.5 rounded-full shadow-lg tracking-wider uppercase">
                                    Best Value
                                </div>
                            )}

                            <div className="mb-10">
                                <h3 className="text-2xl font-bold tracking-tight mb-6">{plan.name}</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-5xl font-bold tracking-tight text-primary">{plan.price}</span>
                                    <span className="text-slate-400 font-medium text-sm">/ fixed</span>
                                </div>
                                <p className="mt-6 text-sm text-slate-500 leading-relaxed min-h-[48px]">
                                    {plan.description}
                                </p>
                            </div>

                            <div className="flex-1">
                                <ul className="space-y-5 mb-10">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="mt-1 w-5 h-5 bg-emerald-500/10 rounded-full flex items-center justify-center shrink-0">
                                                <Check className="h-3 w-3 text-emerald-500" />
                                            </div>
                                            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Button
                                asChild
                                size="lg"
                                className={`w-full gap-3 h-14 rounded-2xl font-bold transition-all shadow-lg hover:shadow-primary/25 ${plan.popular ? "bg-primary hover:bg-primary/90" : "bg-slate-900 hover:bg-slate-800"
                                    }`}
                            >
                                <Link href={handleWhatsAppClick(plan.name, plan.price)} target="_blank">
                                    <MessageCircle size={20} className="group-hover:animate-bounce" /> Get Started
                                </Link>
                            </Button>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
