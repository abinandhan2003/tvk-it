import { createFileRoute } from '@tanstack/react-router';
import { Phone, Mail, MapPin, MessageCircle, Image as ImageIcon } from 'lucide-react';
import { useState } from 'react';

import leadersImg from '@/assets/contact-banner.jpg';

export const Route = createFileRoute('/contact')({
  component: ContactPage,
});

function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 1500);
  };

  return (
    <div className="min-h-screen bg-[#FFF5F5] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Contact Info Card */}
          <div className="w-full lg:w-1/3 h-min flex flex-col">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#FFD700] to-[#FFA500] shadow-xl border border-yellow-300/50 flex-grow h-full min-h-[500px]">
              <div className="p-8 relative z-10">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h2>

                <div className="space-y-4 text-sm">
                  <div className="flex items-center space-x-3 text-gray-900 font-medium">
                    <Phone className="w-5 h-5 text-gray-800" />
                    <span>+91 9787253255</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-900 font-medium">
                    <MessageCircle className="w-5 h-5 text-gray-800" />
                    <span>022 4356 6758</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-900 font-medium">
                    <Mail className="w-5 h-5 text-gray-800" />
                    <span>contactlogu@ponlogu.com</span>
                  </div>
                  <div className="flex items-start space-x-3 text-gray-900 font-medium">
                    <MapPin className="w-5 h-5 text-gray-800 mt-0.5 flex-shrink-0" />
                    <span className="leading-tight">J-41, 1st Floor, 6th Ave, J Block,<br />Annanagar East, Chennai, Tamil<br />Nadu 600102</span>
                  </div>
                </div>
              </div>

              {/* Leaders Image at bottom of card */}
              <div className="absolute bottom-0 left-0 right-0 h-48 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-200/40 via-transparent to-transparent z-10 pointer-events-none mix-blend-overlay"></div>
                <img
                  src={leadersImg}
                  alt="Leaders"
                  className="w-full h-full object-cover object-top opacity-90 mix-blend-multiply"
                />
                <div className="absolute inset-0t"></div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-10 border border-red-50">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-gray-500 font-medium mb-1">Full Name*</label>
                  <input type="text" placeholder="Full Name" className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-red-500 bg-white text-sm" />
                </div>

                <div>
                  <label className="block text-xs text-gray-500 font-medium mb-1">Door No*</label>
                  <input type="text" placeholder="Door No" className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-red-500 bg-white text-sm" />
                </div>

                <div>
                  <label className="block text-xs text-gray-500 font-medium mb-1">Street Name*</label>
                  <input type="text" placeholder="Street Name" className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-red-500 bg-white text-sm" />
                </div>

                <div>
                  <label className="block text-xs text-gray-500 font-medium mb-1">Division</label>
                  <input type="text" placeholder="Division" className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-red-500 bg-white text-sm" />
                </div>

                <div>
                  <label className="block text-xs text-gray-500 font-medium mb-1">Pincode*</label>
                  <input type="text" placeholder="Pincode" className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-red-500 bg-white text-sm" />
                </div>

                <div>
                  <label className="block text-xs text-gray-500 font-medium mb-1">Email ID*</label>
                  <input type="email" placeholder="Email ID" className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-red-500 bg-white text-sm" />
                </div>

                {/* Aadhar Card File Upload */}
                <div>
                  <label className="block text-xs text-gray-500 font-medium mb-1">Aadhar Card</label>
                  <div className="flex items-center border border-gray-200 rounded-lg p-1 bg-white focus-within:ring-1 focus-within:ring-red-500">
                    <input type="text" readOnly placeholder="Upload Aadhar Card" className="flex-1 px-3 bg-transparent text-sm text-gray-800 font-medium outline-none placeholder-gray-400" />
                    <button type="button" className="bg-[#1A0B0B] text-white text-[11px] px-4 py-2 rounded-md font-medium hover:bg-black transition-colors">
                      Browse File
                    </button>
                  </div>
                </div>

                {/* Cell Number & OTP */}
                <div>
                  <label className="block text-xs text-gray-500 font-medium mb-1">Cell Number*</label>
                  <div className="flex items-center border border-gray-200 rounded-lg p-1 bg-white focus-within:ring-1 focus-within:ring-red-500">
                    <input type="text" placeholder="Cell Number" className="flex-1 px-3 bg-transparent text-sm text-gray-800 font-medium outline-none placeholder-gray-400" />
                    <button type="button" className="bg-[#1A0B0B] text-white text-[11px] px-4 py-2 rounded-md font-medium hover:bg-black transition-colors">
                      Get OTP
                    </button>
                  </div>
                </div>

                {/* Enter OTP */}
                <div>
                  <label className="block text-xs text-gray-500 font-medium mb-1">Enter OTP</label>
                  <div className="flex items-center border border-gray-200 rounded-lg p-1 bg-white focus-within:ring-1 focus-within:ring-red-500">
                    <input type="password" placeholder="Enter OTP" className="flex-1 px-3 bg-transparent text-sm text-gray-800 font-medium outline-none tracking-widest placeholder-gray-400" />
                    <button type="button" className="bg-[#1A0B0B] text-white text-[11px] px-4 py-2 rounded-md font-medium hover:bg-black transition-colors">
                      Verify OTP
                    </button>
                  </div>
                </div>

                {/* Upload Photos */}
                <div className="border border-gray-200 rounded-xl bg-[#FAFAFA] p-6 flex flex-col items-center justify-center space-y-3 md:mt-0">
                  <ImageIcon className="w-8 h-8 text-gray-800 stroke-[1.5]" />
                  <button type="button" className="bg-[#1A0B0B] text-white text-[11px] px-5 py-2 rounded-md font-medium hover:bg-black transition-colors">
                    Upload Photos
                  </button>
                </div>

                {/* Description */}
                <div className="md:col-span-2 pt-2">
                  <label className="block text-xs text-gray-500 font-medium mb-1">Complaints Description</label>
                  <textarea
                    rows={4}
                    placeholder="Describe your complaint here..."
                    className="w-full px-3 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-red-500 bg-white text-sm text-gray-800 leading-relaxed resize-none"
                  />
                </div>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#8B0000] text-white text-sm font-semibold py-3.5 rounded-lg mt-2 hover:bg-red-900 transition-colors shadow-lg shadow-red-900/20"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
