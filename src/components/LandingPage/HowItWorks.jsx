import React from "react";
import { UserPlus, BarChart3, Trophy } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: <UserPlus className="w-10 h-10 text-blue-600" />,
    title: "Sign Up",
    description:
      "Create a free account in seconds. No credit card required, no hidden fees. Get instant access to our trading simulator.",
    iconBg: "bg-blue-100",
    numberBg: "bg-blue-600",
  },
  {
    id: 2,
    icon: <BarChart3 className="w-10 h-10 text-green-600" />,
    title: "Practice Trading",
    description:
      "Buy and sell crypto with $100,000 virtual money. Experience real market conditions without any financial risk.",
    iconBg: "bg-green-100",
    numberBg: "bg-green-600",
  },
  {
    id: 3,
    icon: <Trophy className="w-10 h-10 text-purple-600" />,
    title: "Track Performance",
    description:
      "Monitor your portfolio growth, analyze your trades, and compete on leaderboards. Master the markets step by step.",
    iconBg: "bg-purple-100",
    numberBg: "bg-purple-600",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
          How It Works
        </h2>
        <p className="text-gray-600 mb-16 text-lg">
          Start your crypto trading journey in three simple steps. No risk, real learning.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all 
                         p-10 border flex flex-col items-center justify-start 
                         min-h-[420px] w-full"
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-2xl ${step.iconBg} mb-6`}
              >
                {step.icon}
              </div>

              {/* Number */}
              <div
                className={`w-9 h-9 flex items-center justify-center rounded-full mb-6 
                            text-white font-bold text-base ${step.numberBg}`}
              >
                {step.id}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
