import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronRight, UploadCloud, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

// Asset Imports
import electionCandidate from "../assets/vijay/election_candidate.webp";
import gallery1 from "../assets/vijay/Gallery-album-6-img-1-600x400.jpg";
import gallery2 from "../assets/vijay/Gallery-album-6-img-4-600x400.jpg";
import kanyakumariCampaign from "../assets/vijay/Kanyakumari_Campaign_Cover-1600x1067.webp";
import karaikudiCampaign from "../assets/vijay/Karaikudi_Campaign_Cover-1024x683.webp";
import leadership1 from "../assets/vijay/leadership_1.webp";
import tirunelveliCampaign from "../assets/vijay/Tirunelveli_campaign_cover-1024x683.webp";
import tiruppurCampaign1 from "../assets/vijay/tiruppur_campaign_media1_1.webp";
import tiruppurCampaign2 from "../assets/vijay/Tiruppur_Campaign_media1-1024x683.webp";
import manifesto from "../assets/vijay/manifesto.webp";
import peramburCampaign from "../assets/vijay/perambur_campaign.webp";
import puducherryCampaign from "../assets/vijay/puducherry_campaign-1024x683.webp";
import puducherryEvent from "../assets/vijay/puducherry_event_2025-1024x683.webp";
import trichyCampaign from "../assets/vijay/trichy_campaign_1-1024x683.webp";
import erodeCampaign from "../assets/vijay/tvk_erode_2025-1024x683.webp";
import hero1 from "../assets/hero/hero1.jpg";
import hero2 from "../assets/hero/hero2.jpg";
import hero3 from "../assets/hero/hero3.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function AnimatedCounter({ end, suffix = "", duration = 2 }: { end: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);

      // easeOutExpo
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
}

const SCHEMES = [
  { title: "Education Reform", image: karaikudiCampaign },
  { title: "Healthcare for All", image: tirunelveliCampaign },
  { title: "Women Empowerment", image: tiruppurCampaign2 },
  { title: "Farmer Support", image: trichyCampaign },
  { title: "Youth Employment", image: puducherryCampaign },
  { title: "Smart Villages", image: erodeCampaign },
];

const NEWS = [
  { id: 1, date: "May 10, 2025", title: "Party President addresses youth rally in Madurai", image: peramburCampaign },
  { id: 2, date: "May 08, 2025", title: "New healthcare initiative launched for rural districts", image: puducherryEvent },
  { id: 3, date: "May 05, 2025", title: "Statewide farmer support camp marks 100th day", image: manifesto },
];

function Index() {
  const heroImages = [hero1, hero2, hero3];
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [currentMissionIndex, setCurrentMissionIndex] = useState(0);

  useEffect(() => {
    const heroInterval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    const missionInterval = setInterval(() => {
      setCurrentMissionIndex((prev) => (prev + 1) % heroImages.length);
    }, 2000);

    return () => {
      clearInterval(heroInterval);
      clearInterval(missionInterval);
    };
  }, []);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
        {heroImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Hero ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentHeroIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
          />
        ))}
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 z-20" />

        {/* Hero Content */}
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center pt-16">
          <div className="text-center text-white px-4 max-w-5xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 drop-shadow-2xl"
            >
              Tamilaga Vettri Kazhagam
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-3xl mb-12 text-gray-200 drop-shadow-xl font-medium"
            >
              A Movement for Transparent and Progressive Governance
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 px-4"
          >
            <a href="#new-complaint" className="bg-primary text-secondary px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-primary/90 transition transform hover:-translate-y-1">
              New complaint
            </a>
            <Link to="/complaint" className="bg-secondary text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-secondary/90 transition transform hover:-translate-y-1">
              Complaint status
            </Link>
            <Link to="/women" className="bg-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-pink-700 transition transform hover:-translate-y-1">
              For Women
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 relative h-[400px]"
            >
              <div className="absolute -inset-4 bg-primary/20 rounded-2xl transform rotate-3 -z-10"></div>
              {heroImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Mission ${index + 1}`}
                  className={`absolute inset-0 rounded-2xl shadow-2xl object-cover w-full h-full transition-opacity duration-500 ${index === currentMissionIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                />
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 space-y-6"
            >
              <span className="inline-block px-4 py-1 bg-secondary/10 text-secondary font-bold rounded-full text-sm tracking-widest uppercase">
                Our Mission
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">A Movement for Change</h2>
              <div className="w-20 h-1.5 bg-secondary rounded-full"></div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Tamilaga Vettri Kazhagam (TVK) is not just a political party, but a movement born out of the necessity to bring transparent, accountable, and progressive governance to Tamil Nadu.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe in empowering the grassroots, eradicating systemic corruption, and building an inclusive economy where every citizen has equal access to education, healthcare, and opportunity.
              </p>
              <ul className="space-y-3 mt-6">
                {[
                  "Eradicating corruption at all levels",
                  "Ensuring quality education and healthcare for all",
                  "Empowering youth and creating employment",
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-foreground font-medium">
                    <CheckCircle2 className="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* New Complaint Section */}
      <section id="new-complaint" className="py-20 bg-muted/10 border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">File a New Complaint</h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-muted-foreground">
              Your voice matters. Let us know the issues you are facing, and we will work towards resolving them.
            </p>
          </div>
          <div className="bg-card shadow-xl rounded-2xl border border-border overflow-hidden">
            <NewComplaintForm />
          </div>
        </div>
      </section>

      {/* Schemes Section */}
      <section id="schemes" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Key Initiatives</h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-muted-foreground">
              Strategic programs designed to uplift the state and ensure sustainable development across all sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SCHEMES.map((scheme, i) => (
              <motion.div
                key={scheme.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer shadow-lg"
              >
                <img
                  src={scheme.image}
                  alt={scheme.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                  <h3 className="text-xl font-bold text-white drop-shadow-md">{scheme.title}</h3>
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-primary transition-colors">
                    <ChevronRight className="text-white h-5 w-5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-4">Latest from TVK</h2>
              <div className="w-20 h-1.5 bg-secondary rounded-full"></div>
            </div>
            <a href="#" className="mt-6 md:mt-0 text-secondary font-bold hover:text-primary transition-colors flex items-center">
              View All News <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {NEWS.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-border"
              >
                <div className="h-48 overflow-hidden relative">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded shadow-sm">
                    {item.date}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2 hover:text-secondary cursor-pointer transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                  </p>
                  <a href="#" className="inline-block mt-4 text-secondary font-semibold text-sm hover:underline">
                    Read Full Story
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}

function NewComplaintForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [complaintId, setComplaintId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setComplaintId(`TVK-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="p-10 flex flex-col items-center justify-center text-center space-y-6 min-h-[500px]">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <CheckCircle2 className="w-24 h-24 text-green-500" />
        </motion.div>

        <h2 className="text-3xl font-bold text-foreground">Complaint Submitted Successfully!</h2>

        <div className="bg-primary/10 border-2 border-primary rounded-xl p-6 w-full max-w-md">
          <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wide font-semibold">Your Complaint ID</p>
          <p className="text-4xl font-black text-secondary tracking-widest">{complaintId}</p>
        </div>

        <p className="text-muted-foreground text-lg">
          You will receive an update within 5 working days. Please keep your Complaint ID safe for tracking.
        </p>

        <button
          onClick={() => setIsSuccess(false)}
          className="mt-8 text-secondary font-bold hover:underline"
        >
          Submit another complaint
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 md:p-10 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground text-left block">Full Name *</label>
          <input required type="text" className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="Full Name" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground text-left block">Door No *</label>
          <input required type="text" className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="Door No" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground text-left block">Street Name *</label>
          <input required type="text" className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="Street Name" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground text-left block">Division</label>
          <input type="text" className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="Division" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground text-left block">Pincode *</label>
          <input required type="text" className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="Pincode" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground text-left block">Email ID *</label>
          <input required type="email" className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="Email ID" />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground text-left block">Aadhar Card</label>
          <div className="flex items-center border border-input rounded-lg p-1 bg-background focus-within:ring-2 focus-within:ring-primary">
            <input type="text" readOnly placeholder="Upload Aadhar Card" className="flex-1 px-3 bg-transparent text-foreground outline-none" />
            <button type="button" className="bg-[#1A0B0B] text-white text-xs px-4 py-2.5 rounded-md font-semibold hover:bg-black transition-colors">
              Browse File
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground text-left block">Complaints</label>
          <select required className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none">
            <option value="">Select Complaint Type</option>
            <option value="Water Drain">Water Drain</option>
            <option value="Road Damage">Road Damage</option>
            <option value="Electricity">Electricity Issue</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground text-left block">Cell Number *</label>
          <div className="flex items-center border border-input rounded-lg p-1 bg-background focus-within:ring-2 focus-within:ring-primary">
            <input type="text" placeholder="Cell Number" className="flex-1 px-3 bg-transparent text-foreground outline-none" />
            <button type="button" className="bg-[#1A0B0B] text-white text-xs px-4 py-2.5 rounded-md font-semibold hover:bg-black transition-colors">
              Get OTP
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground text-left block">Enter OTP</label>
          <div className="flex items-center border border-input rounded-lg p-1 bg-background focus-within:ring-2 focus-within:ring-primary">
            <input type="password" placeholder="Enter OTP" className="flex-1 px-3 bg-transparent text-foreground outline-none tracking-widest" />
            <button type="button" className="bg-[#1A0B0B] text-white text-xs px-4 py-2.5 rounded-md font-semibold hover:bg-black transition-colors">
              Verify OTP
            </button>
          </div>
        </div>

        <div className="md:col-span-2 border border-input rounded-xl bg-muted/20 p-6 flex flex-col items-center justify-center space-y-3 mt-2">
          <UploadCloud className="w-8 h-8 text-muted-foreground" />
          <button type="button" className="bg-[#1A0B0B] text-white text-xs px-5 py-2.5 rounded-md font-semibold hover:bg-black transition-colors">
            Upload Photos
          </button>
        </div>

        <div className="md:col-span-2 space-y-2">
          <label className="text-sm font-semibold text-foreground text-left block">Complaints Description</label>
          <textarea
            required
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
            placeholder="Describe your complaint here..."
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-[#8B0000] text-white text-lg font-bold rounded-lg shadow-md hover:bg-red-900 transition-colors flex justify-center items-center disabled:opacity-70"
      >
        {isSubmitting ? (
          <><Loader2 className="animate-spin mr-2" /> Submitting...</>
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
}
