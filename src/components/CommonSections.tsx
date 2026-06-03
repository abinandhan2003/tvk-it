import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";

import img1 from "@/assets/vijay/election_candidate.webp";
import img2 from "@/assets/vijay/leadership_1.webp";
import img3 from "@/assets/vijay/manifesto.webp";
import img4 from "@/assets/vijay/perambur_campaign.webp";
import img5 from "@/assets/vijay/puducherry_campaign-1024x683.webp";
import img6 from "@/assets/vijay/puducherry_event_2025-1024x683.webp";
import img7 from "@/assets/vijay/tiruppur_campaign_media1_1.webp";
import img8 from "@/assets/vijay/trichy_campaign_1-1024x683.webp";
import img9 from "@/assets/vijay/tvk_erode_2025-1024x683.webp";

const marqueeImages1 = [img1, img2, img3, img4, img5, img6, img7];
const marqueeImages2 = [img8, img9, img1, img2, img3, img4, img5];

export function CommonSections() {
  return (
    <div className="w-full overflow-hidden border-t-4 border-secondary/20 bg-background">
      <div className="flex flex-col">
        {/* Current Happenings Section */}
        <div className="bg-secondary text-white p-8 lg:p-12 relative flex flex-col justify-center min-h-[400px]">
          <div className="flex justify-between items-center mb-8 max-w-6xl mx-auto w-full">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Current Happenings</h2>
            <a href="#" className="text-sm font-semibold hover:underline text-white/80">View All</a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
            {/* Video 1 */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border-2 border-white/10 bg-black">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/R1JZNG1GSDw?si=yYIVCEpj0AHLICS1" 
                title="TVK Meeting 1" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div>
            {/* Video 2 */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border-2 border-white/10 bg-black">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/X84rpaJxeM0?si=KQgf3M4oxJX8B2nx" 
                title="TVK Meeting 2" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div>
            {/* Video 3 */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border-2 border-white/10 bg-black">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/ROwAZzRhsWM?si=Z4GGeLNUSJTR8sYo" 
                title="TVK Meeting 3" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="bg-gradient-to-br from-primary/10 to-primary/30 p-8 lg:p-12 relative flex flex-col justify-center min-h-[400px]">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground tracking-tight text-center">Social Media Connect</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
            {/* Instagram Mock */}
            <div className="relative w-full bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 flex flex-col hover:shadow-2xl transition-shadow duration-300">
              <div className="p-4 flex items-center border-b border-gray-50">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-[2px]">
                  <img src={img2} alt="Profile" className="w-full h-full rounded-full border-2 border-white object-cover" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-bold text-gray-900 flex items-center">tvkvijayoffl <span className="ml-1 text-blue-500 text-xs">✓</span></p>
                  <p className="text-xs text-gray-500">Instagram</p>
                </div>
                <div className="ml-auto text-pink-600">
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-1 p-1">
                 <img src={img1} className="w-full aspect-square object-cover rounded-tl-md" alt="Post 1"/>
                 <img src={img4} className="w-full aspect-square object-cover rounded-tr-md" alt="Post 2"/>
                 <img src={img5} className="w-full aspect-square object-cover rounded-bl-md" alt="Post 3"/>
                 <img src={img8} className="w-full aspect-square object-cover rounded-br-md" alt="Post 4"/>
              </div>
              <div className="mt-auto p-4">
                <div className="w-full py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center font-semibold text-sm cursor-pointer hover:opacity-90 transition-opacity rounded-lg shadow-sm">
                   Follow on Instagram
                </div>
              </div>
            </div>

            {/* Facebook Mock */}
            <div className="relative w-full bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 flex flex-col hover:shadow-2xl transition-shadow duration-300">
              <div className="p-4 flex items-center mb-2">
                <div className="w-10 h-10 rounded-full bg-[#1877F2] p-[2px]">
                  <img src={img2} alt="Profile" className="w-full h-full rounded-full border-2 border-white object-cover" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-bold text-gray-900 flex items-center">Thalapathy Vijay <span className="ml-1 text-blue-600 text-xs">✓</span></p>
                  <p className="text-xs text-gray-500">2 hours ago · 🌍</p>
                </div>
                <div className="ml-auto text-[#1877F2]">
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </div>
              </div>
              <div className="px-4 pb-3 text-sm text-gray-800">
                 Tamilaga Vettri Kazhagam is dedicated to bringing a new dawn to Tamil Nadu. Join us in this historic journey! #TVK #Vijay
              </div>
              <img src={img6} className="w-full aspect-video object-cover" alt="FB Post"/>
              <div className="px-4 py-3 flex justify-between text-xs text-gray-500 border-b border-gray-100">
                 <span>👍 ❤️ 24K</span>
                 <span>1.2K Comments · 4K Shares</span>
              </div>
              <div className="mt-auto p-4">
                <div className="w-full py-2 bg-[#1877F2] text-white text-center font-semibold text-sm cursor-pointer hover:bg-blue-700 transition-colors rounded-lg shadow-sm">
                   Like Page
                </div>
              </div>
            </div>

            {/* X (Twitter) Mock */}
            <div className="relative w-full bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 flex flex-col hover:shadow-2xl transition-shadow duration-300">
              <div className="p-4 flex items-center mb-1">
                <div className="w-10 h-10 rounded-full bg-black p-[2px]">
                  <img src={img2} alt="Profile" className="w-full h-full rounded-full border border-gray-200 object-cover" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-bold text-gray-900 flex items-center">Vijay <span className="ml-1 text-blue-400 text-xs">✓</span></p>
                  <p className="text-xs text-gray-500">@tvkvijayhq</p>
                </div>
                <div className="ml-auto text-black">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
                </div>
              </div>
              <div className="px-4 pb-3 text-sm text-gray-900 leading-relaxed">
                 A new era begins. Thank you to everyone who supported us. We are just getting started! 🚩🚀<br/><br/>#TamilagaVettriKazhagam #TVK
              </div>
              <div className="px-4 pb-2 mt-auto">
                 <img src={img7} className="w-full aspect-video object-cover rounded-xl border border-gray-100" alt="X Post"/>
              </div>
              <div className="p-4">
                <div className="w-full py-2 bg-black text-white text-center font-semibold text-sm cursor-pointer hover:bg-gray-800 transition-colors rounded-lg shadow-sm">
                   Follow @tvkvijayhq
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Marquee Section */}
      <div className="w-full bg-background py-8 flex flex-col gap-4 border-t border-border overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
        
        {/* Row 1 - Moving Left */}
        <motion.div 
          className="flex gap-4 w-max pr-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          {[...marqueeImages1, ...marqueeImages1].map((img, i) => (
            <img key={`row1-${i}`} src={img} alt={`Gallery ${i}`} className="h-32 md:h-48 w-40 md:w-56 object-cover rounded-xl shadow-md shrink-0 border border-border" />
          ))}
        </motion.div>
        
        {/* Row 2 - Moving Right */}
        <motion.div 
          className="flex gap-4 w-max pr-4"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          {[...marqueeImages2, ...marqueeImages2].map((img, i) => (
            <img key={`row2-${i}`} src={img} alt={`Gallery ${i}`} className="h-32 md:h-48 w-40 md:w-56 object-cover rounded-xl shadow-md shrink-0 border border-border" />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
