import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

import electionCandidate from "../assets/vijay/election_candidate.webp";
import gallery1 from "../assets/vijay/Gallery-album-6-img-1-600x400.jpg";
import gallery2 from "../assets/vijay/Gallery-album-6-img-4-600x400.jpg";
import kanyakumariCampaign from "../assets/vijay/Kanyakumari_Campaign_Cover-1600x1067.webp";
import leadership1 from "../assets/vijay/leadership_1.webp";
import tiruppurCampaign1 from "../assets/vijay/tiruppur_campaign_media1_1.webp";
import manifesto from "../assets/vijay/manifesto.webp";
import peramburCampaign from "../assets/vijay/perambur_campaign.webp";
import puducherryCampaign from "../assets/vijay/puducherry_campaign-1024x683.webp";
import puducherryEvent from "../assets/vijay/puducherry_event_2025-1024x683.webp";
import trichyCampaign from "../assets/vijay/trichy_campaign_1-1024x683.webp";
import erodeCampaign from "../assets/vijay/tvk_erode_2025-1024x683.webp";
import karaikudiCampaign from "../assets/vijay/Karaikudi_Campaign_Cover-1024x683.webp";
import tirunelveliCampaign from "../assets/vijay/Tirunelveli_campaign_cover-1024x683.webp";

export const Route = createFileRoute('/gallery')({
  component: GalleryPage,
});

function GalleryPage() {
  const images = [
    gallery1, gallery2, kanyakumariCampaign, leadership1, tiruppurCampaign1, electionCandidate,
    manifesto, peramburCampaign, puducherryCampaign, puducherryEvent, trichyCampaign, erodeCampaign,
    karaikudiCampaign, tirunelveliCampaign
  ];

  return (
    <div className="flex flex-col w-full min-h-screen">
      <section className="bg-secondary py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Movement in Action
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto"
          >
            A visual journey of Tamilaga Vettri Kazhagam's efforts to bring transparent and progressive governance.
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-background flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {images.map((url, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 10) * 0.05 }}
                className="relative aspect-square overflow-hidden rounded-xl group shadow-sm hover:shadow-xl transition-shadow"
              >
                <img src={url} alt={`Gallery image ${i + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 border-4 border-transparent group-hover:border-primary/80 transition-colors duration-300 rounded-xl pointer-events-none"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
