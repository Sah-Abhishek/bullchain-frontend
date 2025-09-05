
import React from "react";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      text: `"BullSim helped me learn crypto trading without losing my savings. The real market data makes it feel authentic, and the educational resources are top-notch."`,
      name: "Sarah Chen",
      role: "Beginner Trader",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      text: `"The leaderboard feature keeps me motivated to improve my trading strategies. I've learned more in 3 months than I did in years of random trading."`,
      name: "Mike Rodriguez",
      role: "Intermediate Trader",
      image: "https://randomuser.me/api/portraits/men/46.jpg",
    },
    {
      text: `"Perfect for testing new strategies before using real money. The platform is intuitive and the community is incredibly supportive."`,
      name: "Emily Johnson",
      role: "Advanced Trader",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
  ];

  const stats = [
    { value: "4.9/5", label: "Average Rating" },
    { value: "12,500+", label: "Happy Reviews" },
    { value: "98%", label: "Satisfaction Rate" },
    { value: "24/7", label: "Support Available" },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-gray-900">
          What Traders Are Saying
        </h2>
        <p className="text-gray-600 mt-2">
          Join thousands of satisfied traders who've improved their skills with
          BullSim.
        </p>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 text-left flex flex-col justify-between"
            >
              {/* Stars */}
              <div className="flex mb-4">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 text-sm leading-relaxed italic mb-6">
                {t.text}
              </p>

              {/* User Info */}
              <div className="flex items-center gap-3 mt-auto">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid bg-gray-50 rounded-2xl p-10 grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {stats.map((s, idx) => (
            <div key={idx} className="text-center">
              <p className="text-2xl font-bold text-gray-900">{s.value}</p>
              <p className="text-gray-600 text-sm mt-1">{s.label}</p>
              {s.label === "Average Rating" && (
                <div className="flex justify-center mt-2">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
