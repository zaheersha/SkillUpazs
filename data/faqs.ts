export interface FAQ {
    id: string;
    question: string;
    answer: string;
}

export const faqs: FAQ[] = [
    {
        id: "timeline",
        question: "How long does it take to build a website?",
        answer: "It typically takes 1-2 weeks for a standard business website, and 3-4 weeks for e-commerce sites, depending on complexity and requirements."
    },
    {
        id: "hosting",
        question: "Do you provide domain and hosting?",
        answer: "We can assist you in purchasing domain and hosting, but the costs are usually borne by the client unless specified in a custom package."
    },
    {
        id: "update",
        question: "Can I update my website later?",
        answer: "Yes! We build websites using modern frameworks or CMS that allow you to easily update content. We also offer maintenance packages."
    },
    {
        id: "support",
        question: "Do you offer support after delivery?",
        answer: "Absolutely. All our packages come with a specified period of free support to handle technical issues or minor changes."
    },
    {
        id: "pricing",
        question: "Is the pricing fixed?",
        answer: "Our packages have fixed base prices, but we can customize quotes based on your specific needs and additional features."
    }
];
