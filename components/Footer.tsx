"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, ArrowUpRight, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import MagneticWrapper from "./MagneticWrapper";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
        { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
        { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
        { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
    ];

    const footerLinks = [
        {
            title: "Navigation",
            links: [
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Services", href: "#services" },
                { name: "Projects", href: "#projects" },
            ]
        },
        {
            title: "Services",
            links: [
                { name: "Web Design", href: "#services" },
                { name: "Web Development", href: "#services" },
                { name: "E-commerce", href: "#services" },
                { name: "SEO Optimization", href: "#services" },
            ]
        }
    ];

    return (
        <footer className="relative bg-slate-50 dark:bg-slate-950 border-t border-border/50 pt-24 pb-12 overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">

                    {/* Brand Section */}
                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <Link href="/" className="text-4xl font-black tracking-tighter text-primary mb-6 block">
                                SKILLUP<span className="text-foreground">.</span>
                            </Link>
                            <p className="text-lg text-muted-foreground mb-8 max-w-sm leading-relaxed">
                                SkillUp is a technology-driven platform that empowers students and businesses through practical, industry-focused skills.
                            </p>

                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => (
                                    <MagneticWrapper key={index} strength={0.4}>
                                        <Link
                                            href={social.href}
                                            className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-slate-900 border border-border hover:border-primary hover:text-primary transition-all shadow-sm"
                                            aria-label={social.label}
                                        >
                                            {social.icon}
                                        </Link>
                                    </MagneticWrapper>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="lg:col-span-4 grid grid-cols-2 gap-8">
                        {footerLinks.map((column, idx) => (
                            <div key={idx}>
                                <h3 className="font-bold text-sm uppercase tracking-widest mb-6 text-foreground/80">
                                    {column.title}
                                </h3>
                                <ul className="space-y-4">
                                    {column.links.map((link, linkIdx) => (
                                        <li key={linkIdx}>
                                            <Link
                                                href={link.href}
                                                className="text-muted-foreground hover:text-primary transition-colors flex items-center group text-base"
                                            >
                                                {link.name}
                                                <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-3">
                        <h3 className="font-bold text-sm uppercase tracking-widest mb-6 text-foreground/80">
                            Get in Touch
                        </h3>
                        <div className="space-y-6">
                            <Link href="skillup.edu.in@gmail.com" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                                <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <span>skillup.edu.in@gmail.com</span>
                            </Link>
                            {/* <div className="flex items-center gap-4 text-muted-foreground">
                                <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <span>Global HQ, Digital Space</span>
                            </div> */}
                            <Link href="tel:+919494333702" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                                <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <span>+91 94943 33702</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm text-muted-foreground">
                        &copy; {currentYear} <span className="font-bold text-foreground/80">SkillUp</span>. All rights reserved. Built with precision.
                    </p>
                    <div className="flex gap-8 text-sm text-muted-foreground">
                        <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>

            {/* Large Decorative Text (Faded) */}
            <div className="absolute -bottom-20 -right-20 pointer-events-none select-none">
                <span className="text-[18rem] font-black text-slate-200/40 dark:text-slate-900/40 leading-none tracking-tighter">
                    UP
                </span>
            </div>
        </footer>
    );
}
