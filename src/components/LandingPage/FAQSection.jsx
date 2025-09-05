
import React from "react";
import { HelpCircle } from "lucide-react";
import { FaQuestion } from "react-icons/fa6";

export default function FAQSection() {
  const faqs = [
    {
      question: "Is BullChain completely free to use?",
      answer:
        "Yes! Our free plan includes access to real-time market data, $100K virtual money, and basic trading features. You can upgrade to Pro or Premium for advanced features.",
    },
    {
      question: "How accurate is the market data?",
      answer:
        "We use real-time data from major exchanges including Binance, Coinbase, and Kraken. The prices and market conditions are identical to what you'd see in live trading.",
    },
    {
      question: "Can I reset my portfolio if I make mistakes?",
      answer:
        "Absolutely! You can reset your virtual portfolio back to $100K at any time. This allows you to start fresh and try new strategies without any consequences.",
    },
    {
      question: "Do you offer educational resources for beginners?",
      answer:
        "Yes! We provide comprehensive educational materials including video courses, e-books, live webinars, and interactive tutorials to help you learn crypto trading from scratch.",
    },
    {
      question: "How does the leaderboard system work?",
      answer:
        "The leaderboard ranks users based on their portfolio performance over different time periods (daily, weekly, monthly). You can compete with traders worldwide and earn badges for achievements.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl font-semibold text-gray-900">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 mt-2">
          Get answers to the most common questions about BullChain.
        </p>
      </div>

      {/* FAQ List */}
      <div className="mt-12 space-y-4 max-w-4xl mx-auto">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="bg-gray-50 rounded-xl p-5 flex items-start gap-4"
          >
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="bg-blue-600 text-blue-600 rounded-full p-2">

                <FaQuestion
                  className="w-5 text-white h-5" />
              </div>
            </div>

            {/* Text */}
            <div>
              <h3 className="text-md font-semibold text-gray-900">
                {faq.question}
              </h3>
              <p className="text-md text-gray-600 mt-1">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
