"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { MessageCircle, Mail, MapPin, Send } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "./ScrollReveal";

export default function ContactSection() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleWhatsAppClick = () => {
        const text = `Hello skillup,\nwe would like to work with you. \nPlease share more details about the process and timeline.\nThank you.`;
        const encodedMessage = encodeURIComponent(text);
        const phoneNumber = "919494333702";
        return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    };

    const handleSubmit = () => {
        const SendingMessage = `Hello, i am ${name}. \n My email is ${email}. \n ${message}`;
        const encodedMessage = encodeURIComponent(SendingMessage);
        const phoneNumber = "919494333702";
        return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <section id="contact" className="py-24 bg-slate-950 text-white relative overflow-hidden">
            {/* Premium Background Accents */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Column: Text & Contact Info */}
                    <div>
                        <ScrollReveal direction="left">
                            <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Get In Touch</span>
                            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Let&apos;s Build Your <span className="text-primary italic">Digital Legacy</span></h2>
                            <p className="text-slate-400 text-xl mb-12 leading-relaxed font-light">
                                Ready to scale? Our team of elite designers and developers is standing by to transform your vision into a high-performance reality.
                            </p>
                        </ScrollReveal>

                        <motion.div
                            className="space-y-8"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.div variants={itemVariants} className="flex items-center gap-6 group">
                                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-300">
                                    <MessageCircle size={28} className="text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">WhatsApp Chat</p>
                                    <p className="text-lg font-medium group-hover:text-primary transition-colors">Instant Response</p>
                                </div>
                            </motion.div>

                            <motion.div variants={itemVariants} className="flex items-center gap-6 group">
                                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-300">
                                    <Mail size={28} className="text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Direct Email</p>
                                    <p className="text-lg font-medium group-hover:text-primary transition-colors">skillup.edu.in@gmail.com</p>
                                </div>
                            </motion.div>

                            <motion.div variants={itemVariants} className="flex items-center gap-6 group">
                                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-300">
                                    <MapPin size={28} className="text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Headquarters</p>
                                    <p className="text-lg font-medium group-hover:text-primary transition-colors">Andhra Pradesh, India</p>
                                </div>
                            </motion.div>

                            <motion.div variants={itemVariants} className="pt-6">
                                <Button asChild size="lg" className="h-14 px-10 rounded-full font-bold bg-primary hover:bg-primary/90 shadow-[0_20px_40px_-15px_rgba(var(--primary-rgb),0.3)] transition-all hover:-translate-y-1">
                                    <Link href={handleWhatsAppClick()} target="_blank">
                                        <MessageCircle size={20} className="mr-2" /> Start Discussion
                                    </Link>
                                </Button>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <ScrollReveal direction="right" delay={0.4}>
                        <div className="relative">
                            {/* Form Decoration */}
                            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-blue-500/20 rounded-[2rem] blur-2xl -z-10" />

                            <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-[2rem] p-10 md:p-12 shadow-2xl">
                                <h3 className="text-2xl font-bold mb-8 tracking-tight">Project Inquiry</h3>
                                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-xs font-bold uppercase tracking-[0.1em] text-slate-500">Full Name</label>
                                            <input
                                                id="name"
                                                type="text"
                                                className="w-full h-14 px-5 rounded-xl border border-white/10 bg-white/5 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                                placeholder="John Doe"
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-xs font-bold uppercase tracking-[0.1em] text-slate-500">Email Address</label>
                                            <input
                                                id="email"
                                                type="email"
                                                className="w-full h-14 px-5 rounded-xl border border-white/10 bg-white/5 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                                placeholder="john@example.com"
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-xs font-bold uppercase tracking-[0.1em] text-slate-500">Project Brief</label>
                                        <textarea
                                            id="message"
                                            rows={5}
                                            className="w-full p-5 rounded-xl border border-white/10 bg-white/5 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                                            placeholder="Tell us about your goals, timeline, and budget..."
                                            onChange={(e) => setMessage(e.target.value)}
                                        />
                                    </div>
                                    <Button type="submit" size="lg" className="w-full h-14 rounded-xl font-bold bg-white text-slate-950 hover:bg-slate-200 transition-all shadow-xl">
                                        <Link href={handleSubmit()} target="_blank" className="flex items-center justify-center w-full gap-2">
                                            Send Inquiry <Send size={18} />
                                        </Link>
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </ScrollReveal>

                </div>
            </div>
        </section>
    );
}
