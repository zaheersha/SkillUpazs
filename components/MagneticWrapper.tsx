"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagneticWrapperProps {
    children: React.ReactNode;
    strength?: number;
}

export default function MagneticWrapper({ children, strength = 0.5 }: MagneticWrapperProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();

        const mouseX = clientX - (left + width / 2);
        const mouseY = clientY - (top + height / 2);

        setPosition({ x: mouseX * strength, y: mouseY * strength });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        >
            {children}
        </motion.div>
    );
}
