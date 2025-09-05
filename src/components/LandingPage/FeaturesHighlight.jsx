
import React from "react";
import { GraduationCap, Users, BarChart3, Award } from "lucide-react";

export default function FeatureHighlights() {
  const features = [
    {
      icon: <GraduationCap className="w-9 h-9 text-blue-600" />,
      bg: "bg-blue-100",
      title: "Interactive Tutorials",
      desc: "Step-by-step guided lessons",
    },
    {
      icon: <Users className="w-9 h-9 text-green-600" />,
      bg: "bg-green-100",
      title: "Community Forum",
      desc: "Connect with other traders",
    },
    {
      icon: <BarChart3 className="w-9 h-9 text-purple-600" />,
      bg: "bg-purple-100",
      title: "Market Insights",
      desc: "Daily analysis and reports",
    },
    {
      icon: <Award className="w-9 h-9 text-orange-600" />,
      bg: "bg-orange-100",
      title: "Achievements",
      desc: "Earn badges and certificates",
    },
  ];

  return (
    <section className="py-10 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 bg-white rounded-2xl shadow-sm p-8">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center"
          >
            <div
              className={`${feature.bg} p-4 rounded-2xl flex items-center justify-center mb-4`}
            >
              {feature.icon}
            </div>
            <h3 className="text-md font-semibold text-gray-900">
              {feature.title}
            </h3>
            <p className="text-gray-500 text-sm mt-1">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
