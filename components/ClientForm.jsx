"use client";
import React, { useState } from "react";
import { FaCheck, FaSpinner, FaUser, FaEnvelope, FaPhone, FaBuilding, FaComment } from "react-icons/fa";

export default function ClientForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [formStatus, setFormStatus] = useState("idle"); // idle, submitting, success, error
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is changed
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formState.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (!formState.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9+\s()-]{7,}$/.test(formState.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    
    if (!formState.message.trim()) {
      newErrors.message = "Message is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setFormStatus("submitting");
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Replace with actual form submission
      // const response = await fetch("https://formbold.com/s/your-formbold-endpoint", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formState)
      // });
      
      // if (!response.ok) throw new Error("Form submission failed");
      
      setFormStatus("success");
    } catch (error) {
      console.error("Submission error:", error);
      setFormStatus("error");
    }
  };

  return (
    <section className="w-full flex justify-center items-center py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="flex flex-col md:flex-row w-full max-w-7xl px-4 gap-8 lg:gap-16">
        {/* Left: Card (form + encouragement) */}
        <div className="flex-1 flex flex-col justify-center items-center">
          <div className="w-full bg-white rounded-2xl overflow-hidden shadow-xl border border-blue-100/30">
            <div className="flex flex-col md:flex-row">
              {/* Encouragement/message */}
              <div className="flex-1 flex flex-col justify-center items-center p-8 lg:p-10 bg-gradient-to-br from-blue-50 to-blue-100/50">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <FaComment className="text-white text-2xl" />
                </div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">
                  Shape the Future of Tezrent!
                </h2>
                <p className="text-gray-700 text-base text-center mb-4">
                  We're building Tezrent with your needs in mind. Share what features, equipment, or improvements you'd love to see in our app!
                </p>
                <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-blue-100/50 w-full">
                  <p className="text-blue-800 font-medium text-center text-sm mb-3">
                    Your feedback drives our roadmap:
                  </p>
                  <ul className="space-y-2">
                    {["Equipment suggestions", "Feature requests", "UX improvements", "Early access program"].map((item, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-700">
                        <span className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 flex-shrink-0">
                          <FaCheck className="text-blue-600 text-xs" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* The form */}
              <div className="flex-1 flex items-center justify-center p-8 lg:p-10">
                {formStatus === "success" ? (
                  <div className="w-full max-w-lg flex flex-col items-center justify-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                      <FaCheck className="text-green-600 text-2xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-3 text-center">Thank You!</h3>
                    <p className="text-gray-700 text-center mb-6">
                      Your submission has been received. We appreciate your feedback and will be in touch soon.
                    </p>
                    <button 
                      onClick={() => {
                        setFormState({name: "", email: "", phone: "", company: "", message: ""});
                        setFormStatus("idle");
                      }}
                      className="px-6 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition"
                    >
                      Submit Another Response
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-lg flex flex-col gap-5"
                    autoComplete="on"
                  >
                    <h2 className="text-xl font-bold text-blue-900 text-center mb-1">Get In Touch</h2>
                    <p className="text-gray-600 text-center mb-3 text-sm">
                      Fill in your details and tell us about your rental needs.
                    </p>
                    
                    <div className="relative">
                      <label 
                        htmlFor="name" 
                        className={`absolute left-10 transition-all duration-200 ${
                          focused === 'name' || formState.name 
                            ? 'transform -translate-y-2.5 text-xs text-blue-600' 
                            : 'transform translate-y-2 text-gray-500'
                        }`}
                      >
                        Full Name
                      </label>
                      <div className="absolute left-3 top-3.5 text-blue-700">
                        <FaUser />
                      </div>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formState.name}
                        onChange={handleChange}
                        onFocus={() => setFocused('name')}
                        onBlur={() => setFocused(null)}
                        className={`w-full border ${
                          errors.name ? 'border-red-300 bg-red-50' : 'border-blue-100 bg-blue-50/50'
                        } rounded-lg px-10 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all pt-5`}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                      )}
                    </div>
                    
                    <div className="relative">
                      <label 
                        htmlFor="email" 
                        className={`absolute left-10 transition-all duration-200 ${
                          focused === 'email' || formState.email 
                            ? 'transform -translate-y-2.5 text-xs text-blue-600' 
                            : 'transform translate-y-2 text-gray-500'
                        }`}
                      >
                        Email Address
                      </label>
                      <div className="absolute left-3 top-3.5 text-blue-700">
                        <FaEnvelope />
                      </div>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        onFocus={() => setFocused('email')}
                        onBlur={() => setFocused(null)}
                        className={`w-full border ${
                          errors.email ? 'border-red-300 bg-red-50' : 'border-blue-100 bg-blue-50/50'
                        } rounded-lg px-10 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all pt-5`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                      )}
                    </div>
                    
                    <div className="relative">
                      <label 
                        htmlFor="phone" 
                        className={`absolute left-10 transition-all duration-200 ${
                          focused === 'phone' || formState.phone 
                            ? 'transform -translate-y-2.5 text-xs text-blue-600' 
                            : 'transform translate-y-2 text-gray-500'
                        }`}
                      >
                        Phone Number
                      </label>
                      <div className="absolute left-3 top-3.5 text-blue-700">
                        <FaPhone />
                      </div>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formState.phone}
                        onChange={handleChange}
                        onFocus={() => setFocused('phone')}
                        onBlur={() => setFocused(null)}
                        className={`w-full border ${
                          errors.phone ? 'border-red-300 bg-red-50' : 'border-blue-100 bg-blue-50/50'
                        } rounded-lg px-10 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all pt-5`}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                      )}
                    </div>
                    
                    <div className="relative">
                      <label 
                        htmlFor="company" 
                        className={`absolute left-10 transition-all duration-200 ${
                          focused === 'company' || formState.company 
                            ? 'transform -translate-y-2.5 text-xs text-blue-600' 
                            : 'transform translate-y-2 text-gray-500'
                        }`}
                      >
                        Company (optional)
                      </label>
                      <div className="absolute left-3 top-3.5 text-blue-700">
                        <FaBuilding />
                      </div>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={formState.company}
                        onChange={handleChange}
                        onFocus={() => setFocused('company')}
                        onBlur={() => setFocused(null)}
                        className="w-full border border-blue-100 rounded-lg px-10 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-blue-50/50 transition-all pt-5"
                      />
                    </div>
                    
                    <div className="relative">
                      <label 
                        htmlFor="message" 
                        className={`absolute left-10 transition-all duration-200 ${
                          focused === 'message' || formState.message 
                            ? 'transform -translate-y-2.5 text-xs text-blue-600' 
                            : 'transform translate-y-2 text-gray-500'
                        }`}
                      >
                        Your Message
                      </label>
                      <div className="absolute left-3 top-3.5 text-blue-700">
                        <FaComment />
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formState.message}
                        onChange={handleChange}
                        onFocus={() => setFocused('message')}
                        onBlur={() => setFocused(null)}
                        className={`w-full border ${
                          errors.message ? 'border-red-300 bg-red-50' : 'border-blue-100 bg-blue-50/50'
                        } rounded-lg px-10 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none transition-all pt-5`}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                      )}
                    </div>
                    
                    <button
                      type="submit"
                      disabled={formStatus === "submitting"}
                      className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-all transform hover:translate-y-[-2px] hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {formStatus === "submitting" ? (
                        <>
                          <FaSpinner className="animate-spin" />
                          <span>Submitting...</span>
                        </>
                      ) : formStatus === "error" ? (
                        "Try Again"
                      ) : (
                        "Submit Feedback"
                      )}
                    </button>
                    
                    {formStatus === "error" && (
                      <p className="text-red-500 text-sm text-center mt-2">
                        There was an error submitting your form. Please try again.
                      </p>
                    )}
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Right: Mobile Mockup */}
        <div className="hidden md:flex flex-col justify-center items-center">
          <div className="w-[280px] h-[570px] bg-gradient-to-b from-gray-800 to-gray-950 rounded-[40px] overflow-hidden shadow-2xl border border-gray-700 relative">
            {/* Phone notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-36 h-6 bg-black rounded-b-xl z-10"></div>
            
            {/* Screen content */}
            <div className="absolute inset-[12px] rounded-[32px] overflow-hidden bg-gradient-to-b from-blue-900 to-blue-950 p-4">
              {/* Status bar */}
              <div className="h-6 flex justify-between items-center text-white/80 text-xs px-4">
                <span>9:41 AM</span>
                <div className="flex gap-1">
                  <span>4G</span>
                  <span>●●●●</span>
                </div>
              </div>
              
              {/* App header */}
              <div className="mt-6 flex justify-between items-center px-2">
                <div className="w-8 h-8 rounded-lg bg-blue-800/50 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white/70"></div>
                </div>
                <span className="text-white font-medium">Tezrent</span>
                <div className="w-8 h-8 rounded-full bg-blue-700/30 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-white/70"></div>
                </div>
              </div>
              
              {/* Search bar */}
              <div className="mt-6 bg-white/10 rounded-lg p-3 flex items-center">
                <div className="w-4 h-4 rounded-full bg-white/40 mr-3"></div>
                <div className="h-3 w-3/4 bg-white/20 rounded-full"></div>
              </div>
              
              {/* Machinery categories */}
              <div className="mt-6">
                <div className="flex justify-between items-center mb-3">
                  <div className="h-3 w-1/3 bg-white/30 rounded-full"></div>
                  <div className="h-2 w-10 bg-white/20 rounded-full"></div>
                </div>
                <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className={`flex-shrink-0 w-16 h-16 rounded-xl flex flex-col items-center justify-center ${i === 0 ? 'bg-blue-500/30' : 'bg-white/10'}`}>
                      <div className="w-6 h-6 rounded-md bg-white/30 mb-2"></div>
                      <div className="h-2 w-10 bg-white/20 rounded-full"></div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Featured equipment */}
              <div className="mt-6">
                <div className="h-3 w-1/3 bg-white/30 rounded-full mb-3"></div>
                <div className="grid grid-cols-2 gap-3">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="bg-white/10 rounded-xl p-3 h-32 flex flex-col">
                      <div className="h-16 bg-blue-700/20 rounded-lg mb-3"></div>
                      <div className="h-2 w-4/5 bg-white/30 rounded-full mb-2"></div>
                      <div className="h-2 w-1/2 bg-white/20 rounded-full"></div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Bottom nav */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-blue-900/60 backdrop-blur-sm flex items-center justify-around px-6 border-t border-white/10">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className={`w-10 h-10 rounded-full flex items-center justify-center ${i === 0 ? 'bg-blue-700/40' : ''}`}>
                    <div className={`w-4 h-4 rounded-sm ${i === 0 ? 'bg-white/80' : 'bg-white/30'}`}></div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Home indicator */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full"></div>
          </div>
          
          {/* Reflection effect */}
          <div className="w-[240px] h-[40px] bg-gradient-to-b from-gray-800/20 to-transparent rounded-[50%] mt-4 blur-md"></div>
        </div>
      </div>
    </section>
  );
}