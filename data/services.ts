import { Layout, Code, ShoppingCart, Globe, Smartphone, BarChart } from "lucide-react";

export interface Service {
    id: string;
    title: string;
    description: string;
    icon: any; // Using 'any' for Lucide icon component type simplicity here
}

export const services: Service[] = [
    {
        id: "web-design",
        title: "Website Design",
        description: "Stunning, user-centric designs that caption your brand identity.",
        icon: Layout
    },
    {
        id: "web-dev",
        title: "Website Development",
        description: "Robust and scalable websites built with the latest technologies.",
        icon: Code
    },
    {
        id: "ecommerce",
        title: "E-commerce Websites",
        description: "Online stores that drive sales and provide seamless shopping experiences.",
        icon: ShoppingCart
    },
    {
        id: "business",
        title: "Business Websites",
        description: "Professional corporate websites to establish credibility and trust.",
        icon: Globe
    },
    {
        id: "landing-pages",
        title: "Landing Pages",
        description: "High-converting landing pages designed to maximize leads.",
        icon: Smartphone
    },
    {
        id: "redesign",
        title: "Website Redesign",
        description: "Revamp your existing site with a modern look and better performance.",
        icon: BarChart
    }
];
