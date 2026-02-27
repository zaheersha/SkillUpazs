"use client";

import { testimonials } from "@/data/testimonials";
import { motion } from "framer-motion";
import Image from "next/image";

export default function TestimonialsSection() {
    // Duplicate testimonials for seamless looping
    const duplicatedTestimonials = [...testimonials, ...testimonials];

    return (
        <section className="py-20 bg-background overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 mb-12 text-center">
                <span className="text-primary font-semibold tracking-wider text-sm uppercase">Testimonials</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">What Our Clients Say</h2>
            </div>

            <div className="relative flex overflow-hidden group pause-on-hover">
                {/* Gradient Masks for fade effect at edges */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                <style jsx>{`
                    @keyframes scroll {
                        from { transform: translateX(0); }
                        to { transform: translateX(-50%); }
                    }
                    .animate-scroll {
                        animation: scroll 30s linear infinite;
                    }
                    .pause-on-hover:hover .animate-scroll {
                        animation-play-state: paused;
                    }
                `}</style>

                <div className="flex gap-8 py-4 animate-scroll">
                    {duplicatedTestimonials.map((testimonial, index) => (
                        <motion.div
                            key={`${testimonial.id}-${index}`}
                            className="flex-shrink-0 w-[350px] bg-secondary/50 backdrop-blur-sm border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
                            style={{
                                // Slightly tilt cards alternate or randomly
                                rotate: index % 2 === 0 ? "2deg" : "-2deg"
                            }}
                            whileHover={{
                                scale: 1.05,
                                rotate: 0,
                                zIndex: 20
                            }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                                    <Image
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground text-sm">{testimonial.name}</h4>
                                    <p className="text-accent-foreground text-xs">{testimonial.role}</p>
                                </div>
                            </div>
                            <p className="text-accent-foreground italic relative">
                                <span className="absolute -top-4 -left-2 text-4xl text-primary/20 font-serif">&quot;</span>
                                {testimonial.content}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
