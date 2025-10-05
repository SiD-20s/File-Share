"use client";

import React from "react";
import { Linkedin, Twitter, Smile } from "lucide-react";

export default function ContactUs() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] bg-gradient-to-b from-gray-50 to-gray-100 text-center px-6">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-600 flex items-center gap-2">
        <Smile className="text-blue-500" /> Let’s Connect!
      </h1>
      <p className="text-lg text-gray-700 max-w-2xl mb-6 leading-relaxed">
        Hey there! 👋  
        I’m always up for chatting about tech, funny bugs 🐛, or random developer memes.  
        You can find me hanging out on these platforms:
      </p>
      <div className="flex gap-6 mt-4">
        <a
          href="https://www.linkedin.com/in/siddharth-b-bb6609258/
 "
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition"
        >
          <Linkedin className="w-5 h-5" />
          LinkedIn
        </a>

        <a
          href="https://x.com/SidinTech"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-3 bg-sky-500 text-white rounded-full font-medium hover:bg-sky-600 transition"
        >
          <Twitter className="w-5 h-5" />
          Twitter
        </a>
      </div>
      <p className="mt-10 text-gray-500 text-sm">
        Built with 💙, caffeine ☕, and a lot of console.logs().
      </p>
    </div>
  );
}

