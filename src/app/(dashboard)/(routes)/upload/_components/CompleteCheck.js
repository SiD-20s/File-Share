"use client";

import React, { useState } from "react";
import { Copy, Check, ArrowLeft } from "lucide-react";

function CompleteCheck({ fileUrl, fileName }) {
  const [enablePassword, setEnablePassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fileUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy URL:", err);
    }
  };

  const handleSavePassword = () => {
    console.log("Password Saved:", password);
  };

  // ✅ FIXED: Make this function handle sending the email properly
  const handleSendEmail = async () => {
  console.log("🟡 Sending email...");
  console.log("Email entered:", email);
  console.log("File URL passed:", fileUrl);

  if (!email || !fileUrl) {
    alert("⚠️ Missing email or file URL");
    return;
  }

  // Ask for the reply-to address
  const replyEmail = prompt("Enter your email for replies:");

  if (!replyEmail) {
    alert("⚠️ Reply email is required.");
    return;
  }

  try {
    const res = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, fileUrl, replyEmail }),
    });

    const data = await res.json();
    console.log("Response:", data);

    if (res.ok) {
      alert("✅ Email sent successfully!");
    } else {
      alert(`❌ Failed to send email: ${data.error}`);
    }
  } catch (error) {
    console.error("Error sending email:", error);
    alert("❌ Something went wrong while sending email.");
  }
};



  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 p-4 md:p-6">
      <div className="text-center mb-6 mt-8 md:mt-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-green-600 mb-2">
          Upload Completed ✅
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          Your file has been uploaded successfully!
        </p>
      </div>

      <div className="w-full max-w-4xl mb-6 flex justify-start">
        <button
          onClick={() => window.location.reload()}
          className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition text-sm md:text-base"
        >
          <ArrowLeft size={18} />
          Go to Upload
        </button>
      </div>

      <div className="bg-white shadow-md rounded-2xl p-4 md:p-6 w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* File Preview */}
        <div className="flex flex-col items-center w-full">
          <div className="border rounded-xl overflow-hidden w-full max-w-[400px]">
            <img
              src={fileUrl}
              alt={fileName || "Uploaded file"}
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="mt-3 text-gray-700 font-medium text-sm md:text-base text-center">
            {fileName || "Uploaded_File.png"}
          </p>
          <p className="text-xs md:text-sm text-gray-400">image/png</p>
        </div>

        {/* Options */}
        <div className="flex flex-col justify-start lg:justify-between w-full">
          <div>
            <label className="text-gray-700 font-medium text-sm md:text-base">
              File URL
            </label>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 mt-1 mb-4">
              <input
                type="text"
                value={fileUrl || ""}
                readOnly
                className="flex-1 border rounded-lg px-3 py-2 text-sm md:text-base text-gray-600 focus:outline-none"
              />
              <button
                onClick={handleCopy}
                className={`p-2 rounded-lg ${
                  copied
                    ? "bg-green-100 text-green-600"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                } transition`}
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>

            {/* Password Option */}
            <div className="flex items-center gap-2 mb-2">
              <input
                type="checkbox"
                checked={enablePassword}
                onChange={(e) => setEnablePassword(e.target.checked)}
                className="accent-blue-600"
              />
              <label className="text-sm md:text-base text-gray-700">
                Enable Password?
              </label>
            </div>

            {enablePassword && (
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 mb-4">
                <input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="flex-1 border rounded-lg px-3 py-2 text-sm md:text-base"
                />
                <button
                  onClick={handleSavePassword}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Save
                </button>
              </div>
            )}

            {/* Email Option */}
            <div>
              <label className="text-gray-700 font-medium text-sm md:text-base">
                Send File to Email
              </label>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 mt-1">
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 border rounded-lg px-3 py-2 text-sm md:text-base"
                />
                <button
                  onClick={handleSendEmail}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Send Email
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompleteCheck;








