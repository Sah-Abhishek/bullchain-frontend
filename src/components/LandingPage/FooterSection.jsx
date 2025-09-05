import React from "react";
import { Twitter, Linkedin, Youtube, Github, ShieldCheck, Headphones } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="w-full bg-[#0D1117] text-gray-400">
      {/* Content Wrapper */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo + About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="white"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                </svg>
              </div>
              <span className="text-white font-bold text-lg">BullChain</span>
            </div>
            <p className="text-sm mb-6">
              The world’s leading crypto trading simulator. Learn, practice, and
              master the markets without any financial risk.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { Icon: Twitter, href: "#" },
                { Icon: Linkedin, href: "#" },
                { Icon: Youtube, href: "#" },
                { Icon: Github, href: "#" },
              ].map(({ Icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  className="w-9 h-9 flex items-center justify-center rounded-md bg-gray-800 hover:bg-gray-700 transition"
                >
                  <Icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Trading Simulator</a></li>
              <li><a href="#" className="hover:text-white">Market Data</a></li>
              <li><a href="#" className="hover:text-white">Leaderboards</a></li>
              <li><a href="#" className="hover:text-white">Educational Resources</a></li>
              <li><a href="#" className="hover:text-white">Mobile App</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Press</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
              <li><a href="#" className="hover:text-white">Community</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>© 2025 BullChain. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <div className="flex items-center gap-2 text-green-400">
              <ShieldCheck className="w-4 h-4" />
              Secure & Safe
            </div>
            <div className="flex items-center gap-2 text-blue-400">
              <Headphones className="w-4 h-4" />
              24/7 Support
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
