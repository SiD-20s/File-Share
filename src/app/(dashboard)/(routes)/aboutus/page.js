"use client";

import React from "react";
import { Coffee, Code2, Rocket, Smile } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] bg-gradient-to-b from-gray-50 to-gray-100 text-center px-6">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-600 flex items-center gap-2">
        <Rocket className="text-blue-500" /> About This Project
      </h1>

      <p className="text-lg text-gray-700 max-w-2xl mb-6 leading-relaxed">
        Hey there 👋 I built this project as a personal playground to sharpen my full-stack
        skills, experiment with cool tools, and occasionally question my life choices when
        something breaks 😅.
      </p>

      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-lg">
        <h2 className="text-2xl font-semibold mb-3 text-gray-800 flex items-center gap-2">
          <Code2 className="text-indigo-500" /> The Developer Life
        </h2>
        <ul className="text-gray-600 space-y-2 text-left">
          <li>☕ Powered by coffee and random StackOverflow threads.</li>
          <li>🧠 Constantly learning... and forgetting right after.</li>
          <li>💥 Breaking code just to fix it better the next time.</li>
          <li>🐛 If there are no bugs, did I even code?</li>
        </ul>
      </div>

      <div className="mt-8 text-gray-700">
        <h3 className="text-xl font-semibold mb-2">🧰 Tech Stack</h3>
        <p>
          Next.js • Tailwind CSS • Clerk Auth • Resend • Vercel • Pure Chaos ⚡
        </p>
      </div>

      <p className="mt-10 text-gray-500 flex items-center gap-2">
        Built with <Coffee className="w-4 h-4 text-amber-600" /> + <Smile className="w-4 h-4 text-yellow-500" /> 
        by <span className="font-medium text-blue-600">Me</span> 🚀
      </p>
    </div>
  );
}

