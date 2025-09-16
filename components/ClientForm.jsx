"use client";
import React, { useState } from "react";

export default function ClientForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="w-full flex justify-center items-center py-16 bg-white">
      <div className="flex flex-col md:flex-row w-full max-w-7xl px-4 gap-16">
        {/* Left: Card (form + encouragement) */}
        <div className="flex-1 flex flex-col justify-center items-center">
          <div className="w-full bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="flex flex-col md:flex-row">
              {/* Encouragement/message */}
              <div className="flex-1 flex flex-col justify-center items-center p-10 bg-blue-50">
                <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">Sign Up & Shape Tezrent!</h2>
                <p className="text-gray-700 text-base text-center mb-2">
                  We’re building Tezrent for you. Share what features, equipment, or improvements you’d love to see in the app!
                </p>
                <p className="text-blue-700 font-semibold text-center">
                  Your feedback helps us serve you better.
                </p>
              </div>
              {/* The form */}
              <div className="flex-1 flex items-center justify-center p-10">
                <form
                  action="https://formbold.com/s/your-formbold-endpoint"
                  method="POST"
                  className="w-full max-w-lg flex flex-col gap-6"
                  onSubmit={() => setSubmitted(true)}
                  autoComplete="on"
                >
                  <h2 className="text-xl font-bold text-blue-900 text-center mb-2">Get In Touch</h2>
                  <p className="text-gray-700 text-center mb-4 text-base">
                    Fill in your details and a short message about your needs.
                  </p>
                  <div>
                    <label htmlFor="name" className="block mb-1 font-medium text-blue-900">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      className="w-full border border-blue-100 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-blue-50"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-1 font-medium text-blue-900">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="w-full border border-blue-100 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-blue-50"
                      placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block mb-1 font-medium text-blue-900">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      pattern="^[0-9+\s()-]{7,}$"
                      className="w-full border border-blue-100 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-blue-50"
                      placeholder="e.g. +1234567890"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block mb-1 font-medium text-blue-900">
                      Company <span className="text-gray-400">(optional)</span>
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      className="w-full border border-blue-100 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-blue-50"
                      placeholder="Company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-1 font-medium text-blue-900">
                      Writeup / Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full border border-blue-100 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-blue-50 resize-none"
                      placeholder="Type your message or requirements here..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
                  >
                    Submit
                  </button>
                  {submitted && (
                    <p className="mt-2 text-green-600 text-center text-base">
                      Thank you! Your details have been submitted.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Right: Mobile Mockup */}
        <div className="hidden md:flex flex-col justify-center items-center">
          <div className="w-[280px] h-[540px] bg-black rounded-2xl flex items-center justify-center shadow-2xl">
            <span className="text-white text-lg font-semibold text-center px-4">
              Mobile Mockup
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}