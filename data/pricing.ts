export interface PricingPlan {
    id: string;
    name: string;
    price: string; // Display price e.g. "₹15,000"
    description: string;
    features: string[];
    popular?: boolean;
}

export const pricingPlans: PricingPlan[] = [
    {
        id: "spa",
        name: "Single Page Apps (SPA)",
        price: "₹8,000",
        description: "Fast, interactive, and responsive single-page applications.",
        features: [
            "Single Page Layout",
            "High Performance",
            "Responsive Design",
            "Basic SEO",
            "Contact Form",
            "1 Month Support"
        ]
    },
    {
        id: "portfolio",
        name: "Portfolio Website",
        price: "₹10,000",
        description: "Showcase your work and skills with a professional portfolio.",
        features: [
            "About & Projects Section",
            "Resume Download",
            "Gallery/Showcase",
            "Mobile Responsive",
            "Social Media Links",
            "1 Month Support"
        ]
    },
    {
        id: "ecommerce",
        name: "E-Commerce Store",
        price: "₹15,000",
        description: "Start selling online with a fully functional e-commerce store.",
        features: [
            "Product Catalog",
            "Shopping Cart",
            "Payment Gateway",
            "Order Management",
            "Mobile Responsive",
            "3 Months Support"
        ],
        popular: true
    },
    {
        id: "business",
        name: "Business Website",
        price: "₹20,000",
        description: "Professional website to scale your business and brand identity.",
        features: [
            "Multi-page Structure",
            "Advanced SEO",
            "CMS Integration",
            "Blog/News Section",
            "Analytics Setup",
            "3 Months Support"
        ]
    }
];
