import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Circle, Clock, Loader2, Search, UploadCloud } from "lucide-react";
import { useState } from "react";

import bannerImg from "@/assets/vijay/Tiruppur_Campaign_media1-1024x683.webp";

export const Route = createFileRoute("/women")({
  component: WomenPage,
});

function WomenPage() {
  const [activeTab, setActiveTab] = useState<"new" | "status">("new");

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header Banner */}
      <div className="relative h-64 md:h-80 w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bannerImg})` }}
        />
        <div className="absolute inset-0 bg-pink-900/70 backdrop-blur-[1px]"></div>

        <div className="relative z-10 h-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-xl"
          >
            Women's Safety & Support Portal
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-pink-100 font-medium drop-shadow-lg"
          >
            Your safety is our priority. Report securely, confidentially, and fast.
          </motion.p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        {/* Tabs */}
        <div className="flex bg-white rounded-t-xl overflow-hidden shadow-md border-b border-border">
          <button
            onClick={() => setActiveTab("new")}
            className={`flex-1 py-5 text-lg font-bold flex items-center justify-center transition-colors ${activeTab === "new"
              ? "bg-pink-600 text-white"
              : "bg-white text-muted-foreground hover:bg-pink-50"
              }`}
          >
            📝 New Complaint
          </button>
          <button
            onClick={() => setActiveTab("status")}
            className={`flex-1 py-5 text-lg font-bold flex items-center justify-center transition-colors ${activeTab === "status"
              ? "bg-pink-600 text-white"
              : "bg-white text-muted-foreground hover:bg-pink-50"
              }`}
          >
            🔍 Check Status
          </button>
        </div>

        {/* Tab Content */}
        <div className="bg-card shadow-xl rounded-b-xl border border-t-0 border-border overflow-hidden min-h-[500px]">
          <AnimatePresence mode="wait">
            {activeTab === "new" ? (
              <motion.div
                key="new"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <WomenComplaintForm />
              </motion.div>
            ) : (
              <motion.div
                key="status"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <ComplaintStatus />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function WomenComplaintForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [complaintId, setComplaintId] = useState("");
  
  // States for conditional rendering
  const [isRepeated, setIsRepeated] = useState("No");
  const [hasWitness, setHasWitness] = useState("No");

  const INDIAN_STATES = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", 
    "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", 
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", 
    "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", 
    "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Lakshadweep", "Puducherry"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setComplaintId(`WOM-${Math.floor(100000 + Math.random() * 900000)}`);
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

        <h2 className="text-3xl font-bold text-foreground">Complaint Registered Successfully</h2>

        <div className="bg-pink-50 border-2 border-pink-200 rounded-xl p-6 w-full max-w-md">
          <p className="text-sm text-pink-800 mb-2 uppercase tracking-wide font-semibold">Your Secure Complaint ID</p>
          <p className="text-4xl font-black text-pink-600 tracking-widest">{complaintId}</p>
        </div>

        <p className="text-muted-foreground text-lg max-w-2xl">
          Your complaint has been securely recorded. Our dedicated support team will review this immediately. Please save this ID to track your case.
        </p>

        <button
          onClick={() => setIsSuccess(false)}
          className="mt-8 text-pink-600 font-bold hover:underline"
        >
          Submit another complaint
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 md:p-10 space-y-10">
      
      {/* 1. Personal Information */}
      <div>
        <h3 className="text-2xl font-bold text-pink-600 mb-6 border-b border-pink-100 pb-2">1. Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">Full Name *</label>
            <input required type="text" className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-pink-500 transition-all" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">Father’s / Husband’s Name</label>
            <input type="text" className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-pink-500 transition-all" />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">Date of Birth *</label>
            <input required type="date" className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-pink-500 transition-all" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">Age</label>
            <input type="number" min="0" max="120" className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-pink-500 transition-all" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">Marital Status *</label>
            <select required className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-pink-500 transition-all">
              <option value="">Select status</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Divorced">Divorced</option>
              <option value="Widowed">Widowed</option>
              <option value="Separated">Separated</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">Nationality *</label>
            <input required type="text" defaultValue="Indian" className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-pink-500 transition-all" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">Aadhaar Number / ID Proof Number</label>
            <input type="text" className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-pink-500 transition-all" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">Mobile Number *</label>
            <input required type="tel" pattern="[0-9]{10}" placeholder="10 digits" className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-pink-500 transition-all" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">Alternate Contact Number</label>
            <input type="tel" pattern="[0-9]{10}" className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-pink-500 transition-all" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">Email Address</label>
            <input type="email" className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-pink-500 transition-all" />
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-semibold text-foreground">Residential Address *</label>
            <textarea required rows={2} className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-pink-500 transition-all resize-none" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">City *</label>
            <input required type="text" className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-pink-500 transition-all" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">State *</label>
            <select required className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-pink-500 transition-all">
              <option value="">Select state</option>
              {INDIAN_STATES.map(state => <option key={state} value={state}>{state}</option>)}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">District *</label>
            <input required type="text" className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-pink-500 transition-all" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">Pincode *</label>
            <input required type="text" pattern="[0-9]{6}" placeholder="6 digits" className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-pink-500 transition-all" />
          </div>
        </div>
      </div>

      {/* 2. Complaint Category */}
      <div>
        <h3 className="text-2xl font-bold text-pink-600 mb-6 border-b border-pink-100 pb-2">2. Complaint Category</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">Complaint Type *</label>
            <select required className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-pink-500 transition-all">
              <option value="">Select type</option>
              <option value="Domestic Violence">Domestic Violence</option>
              <option value="Sexual Harassment">Sexual Harassment</option>
              <option value="Workplace Harassment">Workplace Harassment</option>
              <option value="Cyber Crime">Cyber Crime</option>
              <option value="Dowry Harassment">Dowry Harassment</option>
              <option value="Physical Abuse">Physical Abuse</option>
              <option value="Emotional Abuse">Emotional Abuse</option>
              <option value="Stalking">Stalking</option>
              <option value="Child Marriage">Child Marriage</option>
              <option value="Property Rights Issue">Property Rights Issue</option>
              <option value="Human Trafficking">Human Trafficking</option>
              <option value="Police Harassment">Police Harassment</option>
              <option value="Online Fraud">Online Fraud</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">Incident Severity *</label>
            <select required className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-pink-500 transition-all">
              <option value="">Select severity</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
              <option value="Emergency">Emergency</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">Is the accused known to you? *</label>
            <select required className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-pink-500 transition-all">
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">Relationship with accused</label>
            <select className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-pink-500 transition-all">
              <option value="">Select relationship</option>
              <option value="Husband">Husband</option>
              <option value="Family Member">Family Member</option>
              <option value="Employer">Employer</option>
              <option value="Colleague">Colleague</option>
              <option value="Stranger">Stranger</option>
              <option value="Neighbor">Neighbor</option>
              <option value="Friend">Friend</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
      </div>

      {/* 3. Incident Details */}
      <div>
        <h3 className="text-2xl font-bold text-pink-600 mb-6 border-b border-pink-100 pb-2">3. Incident Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">Date of Incident *</label>
            <input required type="date" className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-pink-500 transition-all" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">Time of Incident</label>
            <input type="time" className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-pink-500 transition-all" />
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-semibold text-foreground">Place of Incident *</label>
            <input required type="text" className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-pink-500 transition-all" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">State of Incident *</label>
            <select required className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-pink-500 transition-all">
              <option value="">Select state</option>
              {INDIAN_STATES.map(state => <option key={state} value={state}>{state}</option>)}
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">District of Incident *</label>
            <input required type="text" className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-pink-500 transition-all" />
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-semibold text-foreground">Detailed Description of Complaint *</label>
            <textarea
              required
              minLength={50}
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-pink-500 transition-all resize-none"
              placeholder="Please describe the issue in detail (minimum 50 characters)..."
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">Was this a repeated incident? *</label>
            <select 
              required 
              value={isRepeated}
              onChange={(e) => setIsRepeated(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-pink-500 transition-all"
            >
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>
          {isRepeated === "Yes" && (
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Number of occurrences</label>
              <input type="number" min="1" className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-pink-500 transition-all" />
            </div>
          )}

          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">Any witnesses? *</label>
            <select 
              required 
              value={hasWitness}
              onChange={(e) => setHasWitness(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-pink-500 transition-all"
            >
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>
          {hasWitness === "Yes" && (
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground">Witness Details</label>
              <textarea rows={2} className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-pink-500 transition-all resize-none" placeholder="Name, Contact Info, etc." />
            </div>
          )}

          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-semibold text-foreground">Doc Attachment (Evidence, Reports, etc.)</label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-input border-dashed rounded-lg hover:bg-muted/30 transition-colors cursor-pointer relative">
              <div className="space-y-1 text-center">
                <UploadCloud className="mx-auto h-12 w-12 text-muted-foreground" />
                <div className="flex text-sm text-muted-foreground justify-center">
                  <span className="relative rounded-md font-semibold text-pink-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-pink-500 focus-within:ring-offset-2 hover:text-pink-500">
                    <span>Upload a file</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" accept="image/*,.pdf,.doc,.docx" />
                  </span>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-muted-foreground">PNG, JPG, PDF, DOC up to 10MB</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-3 bg-muted/50 p-4 rounded-lg border border-border w-fit">
        <input required type="checkbox" id="captcha" className="w-5 h-5 accent-pink-600 rounded border-input" />
        <label htmlFor="captcha" className="text-sm font-medium text-foreground">I hereby declare that the details furnished above are true and correct to the best of my knowledge.</label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-pink-600 text-white text-lg font-bold rounded-lg shadow-md hover:bg-pink-700 transition-colors flex justify-center items-center disabled:opacity-70"
      >
        {isSubmitting ? (
          <><Loader2 className="animate-spin mr-2" /> Submitting securely...</>
        ) : (
          "Register Complaint"
        )}
      </button>
    </form>
  );
}

function ComplaintStatus() {
  const [searchId, setSearchId] = useState("");
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
    <div className="p-6 md:p-10">
      <div className="max-w-xl mx-auto">
        <form onSubmit={handleSearch} className="mb-12">
          <label className="block text-sm font-semibold text-foreground mb-3 text-center text-lg">Enter your Complaint ID</label>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              className="flex-1 px-4 py-4 rounded-lg border-2 border-input bg-background focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all text-center sm:text-left text-lg tracking-wide uppercase font-bold"
              placeholder="e.g. WOM-123456"
            />
            <button
              type="submit"
              disabled={isSearching}
              className="px-8 py-4 bg-pink-600 text-white font-bold rounded-lg hover:bg-pink-700 transition-colors flex items-center justify-center min-w-[160px]"
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
            <h3 className="text-xl font-bold border-b border-border pb-4 mb-8">Status for <span className="text-pink-600">{searchId.toUpperCase()}</span></h3>

            <div className="relative pl-8 space-y-10">
              {/* Vertical Line */}
              <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-border z-0"></div>

              {/* Step 1 */}
              <div className="relative z-10">
                <div className="absolute -left-[41px] bg-background rounded-full p-1">
                  <CheckCircle2 className="w-8 h-8 text-pink-600 fill-pink-600 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground">Complaint Received securely</h4>
                  <p className="text-sm text-muted-foreground mt-1 flex items-center"><Clock className="w-4 h-4 mr-1" /> May 10, 2025, 10:30 AM</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative z-10">
                <div className="absolute -left-[41px] bg-background rounded-full p-1">
                  <CheckCircle2 className="w-8 h-8 text-pink-600 fill-pink-600 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground">Assigned to Special Women's Desk</h4>
                  <p className="text-sm text-muted-foreground mt-1 flex items-center"><Clock className="w-4 h-4 mr-1" /> May 11, 2025, 02:15 PM</p>
                </div>
              </div>

              {/* Step 3 - Current */}
              <div className="relative z-10">
                <div className="absolute -left-[37px] bg-background rounded-full p-1">
                  <div className="relative flex h-6 w-6">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-6 w-6 bg-pink-500 border-2 border-white"></span>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-pink-600">Investigation in Progress</h4>
                  <p className="text-sm text-muted-foreground mt-1">Our officer is actively reviewing your case and will contact you shortly.</p>
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

            <div className="mt-12 bg-pink-50 p-4 rounded-lg flex items-center justify-center border border-pink-200">
              <p className="font-bold text-pink-700 text-sm md:text-base text-center">
                Women Helpline: <span className="bg-pink-600 text-white px-2 py-1 rounded mx-1 whitespace-nowrap tracking-wider">1091</span> | 
                Police: <span className="bg-pink-600 text-white px-2 py-1 rounded mx-1 whitespace-nowrap tracking-wider">100</span>
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
