import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQ = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  faqs: FAQ[];
  className?: string;
};

const FaqAccordion: React.FC<FaqAccordionProps> = ({ faqs, className }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`w-full max-w-2xl mx-auto ${className ?? ""}`}>
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="border-b border-white/10 py-4 transition-all duration-300"
          >
            <button
              className="w-full flex justify-between items-center text-left focus:outline-none"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
            >
              <span className="text-lg font-medium text-white">
                {faq.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-white transform transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
                isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="mt-3 text-white/70 leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FaqAccordion;
