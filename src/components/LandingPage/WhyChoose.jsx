
import React from "react";
import { Check } from "lucide-react";

const features = [
  {
    title: "Real Market Data",
    description: "Live prices from major exchanges",
  },
  {
    title: "Zero Risk",
    description: "Practice with virtual money",
  },
  {
    title: "Learn & Earn",
    description: "Educational resources included",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Container */}
        <div className="bg-blue-50 rounded-2xl py-10 px-8 text-center">
          {/* Heading */}
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8">
            Why Choose BullChain?
          </h2>

          {/* Features Row */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex inline-flex gap-x-4 items-center md:items-start text-center md:text-left"
              >
                {/* Icon */}
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white mb-3">
                  <Check className="w-4 h-4" />
                </div>

                {/* Title + Description */}
                <div>
                  <h3 className="text-base font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
