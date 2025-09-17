"use client";
import { useState } from "react";
import Link from "next/link";

export default function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState(null);
  
  const toggleSection = (sectionId) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };
  
  const sections = [
    {
      id: 1,
      title: "Equipment Rental Terms",
      content: `
        <p>1.1. Rental Period: Minimum rental period is 24 hours. Rental periods begin at the time of equipment pickup or delivery.</p>
        <p>1.2. Reservation: Equipment reservations must be made at least 24 hours in advance.</p>
        <p>1.3. Cancellation: Cancellations must be made at least 24 hours before the scheduled rental to avoid a cancellation fee of 25% of the rental amount.</p>
        <p>1.4. Extensions: Rental extensions must be requested before the end of the current rental period and are subject to availability.</p>
      `
    },
    {
      id: 2,
      title: "Payment Terms",
      content: `
        <p>2.1. Rates: All rental rates are calculated on a 24-hour basis unless otherwise specified.</p>
        <p>2.2. Security Deposit: A security deposit may be required before equipment rental. The deposit amount varies based on the equipment value.</p>
        <p>2.3. Payment Methods: We accept credit cards, debit cards, and approved purchase orders.</p>
        <p>2.4. Late Fees: Equipment returned after the agreed return time will incur additional charges at the standard daily rate.</p>
      `
    },
    {
      id: 3,
      title: "Equipment Usage & Safety",
      content: `
        <p>3.1. Authorized Operators: Only qualified individuals who meet minimum age and experience requirements may operate the equipment.</p>
        <p>3.2. Proper Use: Equipment must be used in accordance with manufacturer guidelines and only for its intended purpose.</p>
        <p>3.3. Safety Requirements: Users must follow all safety protocols and wear appropriate protective equipment.</p>
        <p>3.4. Prohibited Activities: Equipment may not be used for illegal activities or in unsafe conditions including severe weather events.</p>
      `
    },
    {
      id: 4,
      title: "Damage & Liability",
      content: `
        <p>4.1. Equipment Inspection: Customers must inspect equipment upon receipt and report any existing damage.</p>
        <p>4.2. Responsibility: The customer is responsible for all damage to equipment during the rental period, excluding normal wear and tear.</p>
        <p>4.3. Insurance: Proof of appropriate insurance may be required prior to rental.</p>
        <p>4.4. Limitation of Liability: Tezrent is not liable for any indirect, special, incidental, or consequential damages resulting from the use of rental equipment.</p>
      `
    },
    {
      id: 5,
      title: "Delivery & Return",
      content: `
        <p>5.1. Delivery: Delivery services are available within the specified service area for an additional fee.</p>
        <p>5.2. Return Condition: Equipment must be returned in clean, undamaged condition with fuel levels matching those at pickup.</p>
        <p>5.3. Late Returns: Equipment returned after the agreed-upon time will incur additional daily charges.</p>
        <p>5.4. Cleaning Fee: A cleaning fee will be applied if equipment is returned excessively dirty.</p>
      `
    }
  ];
  
  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-blue-900 mb-8 text-center">Terms and Conditions</h1>
        <p className="text-gray-700 mb-8 text-center">
          Please read these terms and conditions carefully before using the Tezrent machinery rental service.
          By accessing or using our service, you agree to be bound by these terms.
        </p>
        
        <div className="mb-8 bg-blue-50 p-4 rounded-lg text-blue-800 text-sm">
          Last updated: September 17, 2025
        </div>
        
        <div className="space-y-4">
          {sections.map(section => (
            <div key={section.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <button 
                className="w-full px-4 py-3 text-left font-medium flex justify-between items-center bg-gray-50 hover:bg-gray-100"
                onClick={() => toggleSection(section.id)}
              >
                <span>{section.title}</span>
                <span className="text-blue-600">
                  {activeSection === section.id ? '−' : '+'}
                </span>
              </button>
              
              {activeSection === section.id && (
                <div 
                  className="px-4 py-3 text-gray-700 bg-white"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-200">
          <p className="text-gray-600 text-center">
            By using Tezrent services, you acknowledge that you have read and understood these Terms and Conditions and agree to be bound by them.
          </p>
          <div className="flex justify-center mt-4">
            <Link href="/" className="text-blue-600 hover:underline">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}