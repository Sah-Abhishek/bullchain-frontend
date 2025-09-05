
import React from "react";
import { Rocket, Play, CheckCircle2 } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Master Crypto Trading?
        </h2>
        <p className="text-lg text-blue-100 mb-8">
          Join over 50,000 traders who are already learning and practicing with
          BullSim. Start your risk-free trading journey today.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
          <button className="flex items-center font-bold gap-2 bg-white text-blue-600  px-6 py-3 rounded-lg hover:bg-blue-50 transition shadow-sm">
            <Rocket className="w-5 h-5" />
            Start Trading Free
          </button>
          <button className="flex items-center gap-2 border border-white font-bold px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition">
            <Play className="w-5 h-5" />
            Watch Demo
          </button>
        </div>

        {/* Features */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm text-blue-100">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            No credit card required
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            Free forever plan
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            Setup in 30 seconds
          </div>
        </div>
      </div>
    </section>
  );
}
