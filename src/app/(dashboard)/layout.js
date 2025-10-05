"use client";

import React from "react";
import TopHeader from "./_components/TopHeader";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <TopHeader />

      <main className="flex-1 overflow-y-auto p-4">
        {children}
      </main>
    </div>
  );
}





