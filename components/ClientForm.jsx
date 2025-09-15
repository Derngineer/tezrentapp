"use client";
import React, { useState } from "react";

export default function ClientForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="w-full flex justify-center items-center py-10 bg-[#E2FBFE]">
      <form
        action="https://formbold.com/s/your-formbold-endpoint"
        method="POST"
        className="bg-white rounded-2xl p-8 w-full max-w-2xl flex flex-col gap-6 shadow"
        onSubmit={() => setSubmitted(true)}
        autoComplete="on"
      >
        <h2 className="text-2xl font-bold text-blue-900 text-center mb-2">Get In Touch</h2>
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
    </section>
  );
}