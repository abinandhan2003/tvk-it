import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2, Circle, Clock, Loader2, Search } from "lucide-react";
import { useState } from "react";

import bannerImg from "@/assets/vijay/Kanyakumari_Campaign_Cover-1600x1067.webp";

export const Route = createFileRoute("/complaint")({
  component: ComplaintPage,
});

function ComplaintPage() {
  const [searchId, setSearchId] = useState("");
  const [cellNumber, setCellNumber] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchId.trim()) return;

    setIsSearching(true);
    // Simulate API call
    setTimeout(() => {
      setIsSearching(false);
      setHasSearched(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header Banner */}
      <div className="relative h-64 md:h-80 w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bannerImg})` }}
        />
        <div className="absolute inset-0 bg-red-800/50 backdrop-blur-[1px]"></div>

        <div className="relative z-10 h-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-primary mb-4 drop-shadow-xl"
          >
            Complaint Status
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white font-medium drop-shadow-lg"
          >
            Track your complaint resolution progress
          </motion.p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-card shadow-xl rounded-xl border border-border overflow-hidden min-h-[500px]">
          <div className="p-6 md:p-10">
            <div className="max-w-xl mx-auto">
              <form onSubmit={handleSearch} className="mb-12 max-w-md mx-auto">
                <div className="text-center mb-6">
                  <label className="block text-xl font-semibold text-foreground mb-2">Check Your Status</label>
                  <p className="text-muted-foreground text-sm">Please enter your Complaint ID and registered Cell Number.</p>
                </div>
                <div className="flex flex-col gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1 text-left">Complaint ID</label>
                    <input
                      required
                      type="text"
                      value={searchId}
                      onChange={(e) => setSearchId(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border-2 border-input bg-background focus:outline-none focus:border-secondary transition-all text-lg tracking-wide uppercase font-bold"
                      placeholder="e.g. TVK-123456"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1 text-left">Cell Number</label>
                    <input
                      required
                      type="tel"
                      value={cellNumber}
                      onChange={(e) => setCellNumber(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border-2 border-input bg-background focus:outline-none focus:border-secondary transition-all text-lg tracking-wide font-bold"
                      placeholder="e.g. 9876543210"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSearching}
                    className="w-full mt-2 py-4 bg-secondary text-white font-bold rounded-lg hover:bg-secondary/90 transition-colors flex items-center justify-center text-lg shadow-md"
                  >
                    {isSearching ? <Loader2 className="animate-spin" /> : <><Search className="mr-2 h-5 w-5" /> Track Status</>}
                  </button>
                </div>
              </form>

              {hasSearched && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border border-border rounded-xl p-6 md:p-8 bg-background relative"
                >
                  <h3 className="text-xl font-bold border-b border-border pb-4 mb-8">Status for <span className="text-secondary">{searchId.toUpperCase()}</span></h3>

                  <div className="relative pl-8 space-y-10">
                    {/* Vertical Line */}
                    <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-border z-0"></div>

                    {/* Step 1 */}
                    <div className="relative z-10">
                      <div className="absolute -left-[41px] bg-background rounded-full p-1">
                        <CheckCircle2 className="w-8 h-8 text-secondary fill-secondary text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-foreground">Complaint Received</h4>
                        <p className="text-sm text-muted-foreground mt-1 flex items-center"><Clock className="w-4 h-4 mr-1" /> May 10, 2025, 10:30 AM</p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative z-10">
                      <div className="absolute -left-[41px] bg-background rounded-full p-1">
                        <CheckCircle2 className="w-8 h-8 text-secondary fill-secondary text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-foreground">Under Review by District Officer</h4>
                        <p className="text-sm text-muted-foreground mt-1 flex items-center"><Clock className="w-4 h-4 mr-1" /> May 11, 2025, 02:15 PM</p>
                      </div>
                    </div>

                    {/* Step 3 - Current */}
                    <div className="relative z-10">
                      <div className="absolute -left-[37px] bg-background rounded-full p-1">
                        <div className="relative flex h-6 w-6">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-6 w-6 bg-primary border-2 border-secondary"></span>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-secondary">Action in Progress</h4>
                        <p className="text-sm text-muted-foreground mt-1">Local authorities have been notified and field inspection is scheduled.</p>
                      </div>
                    </div>

                    {/* Step 4 - Pending */}
                    <div className="relative z-10 opacity-50">
                      <div className="absolute -left-[39px] bg-background rounded-full p-1">
                        <Circle className="w-7 h-7 text-muted-foreground" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-muted-foreground">Resolved & Closed</h4>
                        <p className="text-sm text-muted-foreground mt-1">Pending completion</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 bg-primary/20 p-4 rounded-lg flex items-center justify-center border border-primary/30">
                    <p className="font-bold text-secondary text-sm md:text-base text-center">
                      For urgent issues call: <span className="bg-primary px-2 py-1 rounded mx-1 whitespace-nowrap tracking-wider">1800-XXX-XXXX</span>
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
