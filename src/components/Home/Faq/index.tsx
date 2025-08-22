import React from "react";
import { Collapse } from "antd";
import type { CollapseProps } from "antd";
import SectionTitle from "@/components/Common/SectionTitle";

const faqs: { question: string; answer: string }[] = [
    {
        question: "What is included in the free trial?",
        answer:
            "The free trial gives you access to all premium features for 14 days with no credit card required.",
    },
    {
        question: "Can I cancel my subscription anytime?",
        answer:
            "Yes, you can cancel anytime directly from your account settings without any hidden fees.",
    },
    {
        question: "Do you offer discounts for teams?",
        answer:
            "Yes, we offer special pricing for teams and enterprises. Contact sales for more details.",
    },
    {
        question: "Is my data secure?",
        answer:
            "Absolutely. We use enterprise-grade encryption and never share your data with third parties.",
    },
    {
        question: "Do you support integrations?",
        answer:
            "Yes, we support popular integrations with Slack, Zapier, and more. Enterprise customers can request custom integrations.",
    },
    {
        question: "What payment methods do you accept?",
        answer:
            "We accept all major credit cards, PayPal, and wire transfers for enterprise plans.",
    },
    {
        question: "Do you provide customer support?",
        answer:
            "Yes, we provide 24/7 email support and live chat for premium customers.",
    },
    {
        question: "Can I request a feature?",
        answer:
            "We welcome feature requests! Please submit your ideas through our feedback portal.",
    },
];

const FAQ: React.FC = () => {
    const items: CollapseProps["items"] = faqs.map((faq, index) => ({
        key: index.toString(),
        label: (
            <span className="text-white text-lg md:text-xl font-semibold">
        {faq.question}
      </span>
        ),
        children: (
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                {faq.answer}
            </p>
        ),
    }));

    return (
        <section
            id="faq"
            className="min-h-screen relative z-10 overflow-hidden flex justify-center bg-black py-24 px-6"
        >
            <div className="text-center w-full max-w-5xl">
                <SectionTitle
                    title="Frequently Asked Questions"
                    paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
                    center
                    width="665px"
                />
                <div className="w-full text-left">
                    <Collapse
                        size="large"
                        accordion
                        expandIconPosition="end"
                        items={items}
                        className="custom-collapse border-0!"
                    />
                </div>
            </div>
        </section>
    );
};

export default FAQ;
