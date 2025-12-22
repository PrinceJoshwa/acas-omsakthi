"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  FileText,
  BadgeCheck,
  Banknote,
  Calculator,
  X,
  ShieldCheck,
  Info,
  Globe,
  IndianRupee,
  CheckCircle2,
  Building2,
  CreditCard,
  Heart
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as const } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
}

type DonorType = "indian" | "international"

export default function DonatePage() {
  const [selectedDonorType, setSelectedDonorType] = useState<DonorType>("indian")
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false)
  const [isFcraModalOpen, setIsFcraModalOpen] = useState(false)
  const [selectedAmount, setSelectedAmount] = useState<number>(5000)
  const [customAmount, setCustomAmount] = useState<string>("")

  const donationAmounts = [5000, 10000, 25000, 50000]

  return (
    <main className="bg-background overflow-x-hidden font-sans text-foreground selection:bg-[#ffc107] selection:text-black">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative py-20 bg-[#a7150b] text-white overflow-hidden">
        {/* Abstract Pattern */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ffc107]/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
             <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-[#ffc107] font-bold text-sm uppercase tracking-widest mb-6 border border-white/20">
                <Heart className="w-5 h-5 fill-current" /> Support Our Cause
             </motion.div>
             <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-serif font-bold mb-6">
                Donate to <br/> ASPWCT Trust
             </motion.h1>
             <motion.p variants={fadeInUp} className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                Your generous contribution helps us continue our mission of serving humanity through healthcare, education, and cultural preservation.
             </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================= DONOR TYPE SELECTION ================= */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a1a1a] mb-4">
              Where are you donating from?
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Please select your location to view the appropriate donation options and tax benefits.
            </p>
          </motion.div>

          {/* Two Selection Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            
            {/* Indian Donor Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedDonorType("indian")}
              className={`cursor-pointer transition-all duration-300 ${
                selectedDonorType === "indian" 
                  ? "ring-4 ring-[#a7150b] ring-offset-2" 
                  : "hover:shadow-xl"
              }`}
            >
              <Card className={`p-8 h-full relative overflow-hidden ${
                selectedDonorType === "indian" ? "bg-gradient-to-br from-orange-50 to-amber-50" : "bg-white"
              }`}>
                {selectedDonorType === "indian" && (
                  <div className="absolute top-4 right-4">
                    <CheckCircle2 className="w-8 h-8 text-[#a7150b]" />
                  </div>
                )}
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#FF9933] via-white to-[#138808] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <IndianRupee className="w-10 h-10 text-[#1a1a1a]" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">🇮🇳 Indian Donor</h3>
                  <p className="text-slate-500 text-sm mb-6">For donors residing in India</p>
                  
                  <div className="space-y-3 text-left">
                    <div className="flex items-center gap-3 text-sm">
                      <BadgeCheck className="w-5 h-5 text-[#a7150b] shrink-0" />
                      <span className="text-slate-700 font-medium">80G Tax Deduction Benefits</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <CreditCard className="w-5 h-5 text-[#a7150b] shrink-0" />
                      <span className="text-slate-700 font-medium">Pay via UPI, NEFT, Cards</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <FileText className="w-5 h-5 text-[#a7150b] shrink-0" />
                      <span className="text-slate-700 font-medium">Immediate 80G Receipt</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-stone-200">
                  <Button 
                    className={`w-full font-bold rounded-full h-12 ${
                      selectedDonorType === "indian" 
                        ? "bg-[#a7150b] hover:bg-[#8a0d08] text-white" 
                        : "bg-stone-100 hover:bg-stone-200 text-[#1a1a1a]"
                    }`}
                  >
                    {selectedDonorType === "indian" ? "✓ Selected" : "Select This Option"}
                  </Button>
                </div>
              </Card>
            </motion.div>

            {/* International Donor Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedDonorType("international")}
              className={`cursor-pointer transition-all duration-300 ${
                selectedDonorType === "international" 
                  ? "ring-4 ring-[#0066cc] ring-offset-2" 
                  : "hover:shadow-xl"
              }`}
            >
              <Card className={`p-8 h-full relative overflow-hidden ${
                selectedDonorType === "international" ? "bg-gradient-to-br from-blue-50 to-indigo-50" : "bg-white"
              }`}>
                {selectedDonorType === "international" && (
                  <div className="absolute top-4 right-4">
                    <CheckCircle2 className="w-8 h-8 text-[#0066cc]" />
                  </div>
                )}
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#0066cc] to-[#004499] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Globe className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">🌍 International Donor</h3>
                  <p className="text-slate-500 text-sm mb-6">For donors outside India</p>
                  
                  <div className="space-y-3 text-left">
                    <div className="flex items-center gap-3 text-sm">
                      <ShieldCheck className="w-5 h-5 text-[#0066cc] shrink-0" />
                      <span className="text-slate-700 font-medium">FCRA Registered Trust</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Building2 className="w-5 h-5 text-[#0066cc] shrink-0" />
                      <span className="text-slate-700 font-medium">Wire Transfer (SWIFT)</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <FileText className="w-5 h-5 text-[#0066cc] shrink-0" />
                      <span className="text-slate-700 font-medium">Official Donation Receipt</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-stone-200">
                  <Button 
                    className={`w-full font-bold rounded-full h-12 ${
                      selectedDonorType === "international" 
                        ? "bg-[#0066cc] hover:bg-[#004499] text-white" 
                        : "bg-stone-100 hover:bg-stone-200 text-[#1a1a1a]"
                    }`}
                  >
                    {selectedDonorType === "international" ? "✓ Selected" : "Select This Option"}
                  </Button>
                </div>
              </Card>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= CONTENT BASED ON SELECTION ================= */}
      <AnimatePresence mode="wait">
        {selectedDonorType === "indian" ? (
          <motion.div
            key="indian-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* ================= INDIAN DONOR CONTENT ================= */}
            
            {/* Eligible Donations Guidelines */}
            <section className="py-20 bg-stone-50">
               <div className="container mx-auto px-4">
                  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-4xl mx-auto">
                     <div className="text-center mb-10">
                       <span className="inline-block px-4 py-2 bg-[#a7150b]/10 text-[#a7150b] rounded-full text-xs font-bold tracking-widest uppercase mb-4">
                         For Indian Donors
                       </span>
                       <h2 className="text-3xl font-serif font-bold text-[#1a1a1a]">80G Tax Deduction Benefits</h2>
                     </div>
                     
                     <div className="grid md:grid-cols-2 gap-6">
                        {/* Guideline 1 */}
                        <Card className="p-6 border-l-4 border-[#ffc107] bg-white">
                           <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                              <ShieldCheck className="w-5 h-5 text-[#ffc107]" /> Recognized Organizations
                           </h3>
                           <p className="text-slate-600 text-sm leading-relaxed">
                              It is essential to make sure that donations are given to recognized organizations. Donations to specified funds and charitable institutions qualify for deductions under Section 80G.
                           </p>
                        </Card>
                        
                        {/* Guideline 2 (Verification) */}
                        <Card className="p-6 border-l-4 border-[#a7150b] bg-white">
                           <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                              <FileText className="w-5 h-5 text-[#a7150b]" /> Verify Registration
                           </h3>
                           <p className="text-slate-600 text-sm leading-relaxed">
                              Not all donations are eligible for tax benefits, so it is essential to verify the organization's registration under Section 80G before making a contribution.
                           </p>
                        </Card>

                        {/* Guideline 3 (Cash Limit) */}
                        <Card className="p-6 border-l-4 border-red-600 bg-red-50 md:col-span-2">
                           <h3 className="font-bold text-lg mb-2 flex items-center gap-2 text-red-700">
                              <Banknote className="w-5 h-5" /> Cash Donation Limit: Rs. 2,000
                           </h3>
                           <p className="text-red-900 text-sm leading-relaxed font-medium">
                              Contributions made in cash exceeding Rs. 2,000 are not eligible for tax deduction benefits under Section 80G. Hence, it is advisable to make donations through banking channels or cheques.
                           </p>
                        </Card>
                     </div>
                  </motion.div>
               </div>
            </section>

            {/* Deduction Rates & Limits */}
            <section className="py-20 bg-white">
               <div className="container mx-auto px-4">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                     
                     {/* Left: Text Content */}
                     <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                        <h2 className="text-3xl font-serif font-bold text-[#1a1a1a] mb-6">Tax Deduction Benefits</h2>
                        <p className="text-slate-600 mb-8">
                           Taxpayers can avail different rates of deduction based on the nature of the charitable organization and the donation made.
                        </p>

                        <div className="space-y-6">
                           <div className="flex gap-4">
                              <div className="w-10 h-10 bg-green-100 text-green-700 rounded-full flex items-center justify-center shrink-0 font-bold">100%</div>
                              <div>
                                 <h4 className="font-bold text-[#1a1a1a]">Full Deduction</h4>
                                 <p className="text-sm text-slate-600 mt-1">
                                    Donations to institutions that provide relief to the poor, promote education, or support rural development are eligible for a 100% deduction.
                                 </p>
                              </div>
                           </div>
                           <div className="flex gap-4">
                              <div className="w-10 h-10 bg-yellow-100 text-yellow-700 rounded-full flex items-center justify-center shrink-0 font-bold">50%</div>
                              <div>
                                 <h4 className="font-bold text-[#1a1a1a]">Partial Deduction</h4>
                                 <p className="text-sm text-slate-600 mt-1">
                                    For donations made to other charitable institutions, the deduction is limited to 50% of the donated amount.
                                 </p>
                              </div>
                           </div>
                           
                           <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 mt-6">
                              <h4 className="font-bold text-[#1a1a1a] mb-2 flex items-center gap-2"><Info className="w-4 h-4"/> Limits on Deductions</h4>
                              <ul className="text-sm text-slate-600 list-disc pl-5 space-y-2">
                                 <li>The total deduction claimed under Section 80G cannot exceed 10% of the taxpayer's gross total income.</li>
                                 <li>For certain donations, the limit is restricted to 100% of the donated amount.</li>
                              </ul>
                           </div>
                        </div>
                     </motion.div>

                     {/* Right: Claiming Process Card */}
                     <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <div className="bg-[#1a1a1a] rounded-3xl p-8 text-white shadow-2xl relative">
                           <div className="absolute top-0 right-0 p-8 opacity-10"><Calculator size={150} /></div>
                           
                           <h3 className="text-2xl font-bold mb-6 relative z-10">Claiming Tax Deduction</h3>
                           <p className="text-gray-400 mb-6 text-sm">To avail tax benefits on donations under Section 80G, taxpayers need to ensure the following:</p>

                           <div className="space-y-4 relative z-10">
                              <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                                 <p className="font-bold text-[#ffc107] mb-1">Step 01</p>
                                 <p className="text-sm text-gray-400">Obtain a receipt from the charitable institution specifying the amount donated, the registration number under Section 80G, and the organization's PAN details.</p>
                              </div>
                              <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                                 <p className="font-bold text-[#ffc107] mb-1">Step 02</p>
                                 <p className="text-sm text-gray-400">While filing income tax returns, accurately report the donation details and claim the appropriate deduction as per the donation type.</p>
                              </div>
                              <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                                 <p className="font-bold text-[#ffc107] mb-1">Step 03</p>
                                 <p className="text-sm text-gray-400 ">Keep records of all donations made during the financial year to support your claim during tax filing.</p>
                              </div>
                           </div>
                           
                           {/* View PDF Button */}
                           <div className="mt-8 pt-6 border-t border-white/20">
                               <Button onClick={() => setIsPdfModalOpen(true)} className="w-full bg-white text-[#1a1a1a] hover:bg-gray-100 font-bold h-12 rounded-xl">
                                   <FileText className="w-4 h-4 mr-2" /> View Our 80G Certificate
                               </Button>
                           </div>
                        </div>
                     </motion.div>
                  </div>
               </div>
            </section>

            {/* ================= DONATION AMOUNT SELECTOR ================= */}
            <section className="py-20 bg-white">
               <div className="container mx-auto px-4">
                  <div className="max-w-6xl mx-auto">
                     <motion.div 
                        initial="hidden" 
                        whileInView="visible" 
                        viewport={{ once: true }} 
                        variants={fadeInUp}
                        className="text-center mb-12"
                     >
                        <span className="inline-block px-4 py-2 bg-[#a7150b]/10 text-[#a7150b] rounded-full text-xs font-bold tracking-widest uppercase mb-4">
                           Make a Donation
                        </span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a1a1a]">
                           Support Our Mission
                        </h2>
                     </motion.div>

                     <div className="grid lg:grid-cols-2 gap-10 items-start">
                        
                        {/* Left: Amount Selector */}
                        <motion.div 
                           initial={{ opacity: 0, x: -30 }} 
                           whileInView={{ opacity: 1, x: 0 }} 
                           viewport={{ once: true }}
                        >
                           <Card className="p-8 shadow-xl border-0 bg-gradient-to-br from-stone-50 to-white">
                              <h3 className="text-xl font-bold text-[#1a1a1a] mb-6 text-center">Select Amount</h3>
                              
                              {/* Preset Amounts */}
                              <div className="space-y-3 mb-6">
                                 {donationAmounts.map((amount) => (
                                    <button 
                                       key={amount}
                                       onClick={() => {
                                          setSelectedAmount(amount)
                                          setCustomAmount("")
                                       }}
                                       className={`w-full py-4 px-6 font-bold text-lg rounded-xl transition-all hover:scale-[1.02] ${
                                          selectedAmount === amount && !customAmount
                                             ? "bg-[#a7150b] text-white shadow-lg" 
                                             : "bg-white text-[#1a1a1a] border-2 border-stone-200 hover:border-[#a7150b] hover:text-[#a7150b]"
                                       }`}
                                    >
                                       INR {amount.toLocaleString('en-IN')}
                                    </button>
                                 ))}
                              </div>

                              {/* Custom Amount */}
                              <div className={`flex items-center mb-6 rounded-xl overflow-hidden border-2 transition-colors ${
                                 customAmount ? "border-[#a7150b]" : "border-stone-200"
                              }`}>
                                 <div className="shrink-0 py-3 px-4 bg-stone-100 font-bold text-[#1a1a1a]">
                                    INR
                                 </div>
                                 <input 
                                    type="number" 
                                    placeholder="Enter Custom Amount" 
                                    value={customAmount}
                                    onChange={(e) => {
                                       setCustomAmount(e.target.value)
                                       if (e.target.value) {
                                          setSelectedAmount(0)
                                       }
                                    }}
                                    className="flex-1 py-3 px-4 focus:outline-none text-lg bg-white"
                                 />
                              </div>

                              {/* Tax Info */}
                              <p className="text-sm text-slate-600 mb-6 text-center">
                                 Your donations are tax exempted under <strong className="text-[#a7150b]">80G</strong> of the Indian Income Tax Act
                              </p>

                              {/* Donate Button */}
                              <Link href="https://aspwct.omsakthiamma.in">
                                 <Button className="w-full py-6 bg-[#ffc107] hover:bg-[#e6ad00] text-[#1a1a1a] font-bold text-lg rounded-xl shadow-lg">
                                    DONATE NOW →
                                 </Button>
                              </Link>

                              {/* Specific Purpose Option */}
                              <div className="mt-6 pt-6 border-t border-stone-200">
                                 <p className="text-sm text-slate-600 mb-4 text-center">
                                    If you would like to donate for a specific purpose, please click the button below.
                                 </p>
                                 <Link href="/donate-us">
                                    <Button variant="outline" className="w-full py-5 border-2 border-[#a7150b] text-[#a7150b] hover:bg-[#a7150b] hover:text-white font-bold rounded-xl transition-all">
                                       DONATE TO A SPECIFIC PURPOSE →
                                    </Button>
                                 </Link>
                              </div>
                           </Card>
                        </motion.div>

                        {/* Right: Impact Statistics Carousel */}
                        <motion.div 
                           initial={{ opacity: 0, x: 30 }} 
                           whileInView={{ opacity: 1, x: 0 }} 
                           viewport={{ once: true }}
                           className="space-y-6"
                        >
                           {/* Impact Card 1 - Healthcare */}
                           <Card className="p-8 bg-gradient-to-br from-[#a7150b] to-[#8a0d08] text-white rounded-2xl shadow-xl relative overflow-hidden">
                              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2" />
                              <div className="relative z-10">
                                 <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                                    Healthcare
                                 </span>
                                 <div className="text-5xl md:text-6xl font-black mb-2">50,000+</div>
                                 <p className="text-lg font-bold text-white/90 uppercase tracking-wide">
                                    Patients Treated Annually at Our Hospital
                                 </p>
                              </div>
                           </Card>

                           {/* Impact Card 2 - Education */}
                           <Card className="p-8 bg-gradient-to-br from-[#1a1a1a] to-[#333] text-white rounded-2xl shadow-xl relative overflow-hidden">
                              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffc107]/20 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2" />
                              <div className="relative z-10">
                                 <span className="inline-block px-3 py-1 bg-[#ffc107]/30 text-[#ffc107] rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                                    Education
                                 </span>
                                 <div className="text-5xl md:text-6xl font-black mb-2">15,000+</div>
                                 <p className="text-lg font-bold text-white/90 uppercase tracking-wide">
                                    Students Benefiting from Our Institutions
                                 </p>
                              </div>
                           </Card>

                           {/* Impact Card 3 - Community */}
                           <Card className="p-8 bg-gradient-to-br from-[#ffc107] to-[#e6ad00] text-[#1a1a1a] rounded-2xl shadow-xl relative overflow-hidden">
                              <div className="absolute top-0 right-0 w-32 h-32 bg-white/30 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2" />
                              <div className="relative z-10">
                                 <span className="inline-block px-3 py-1 bg-[#1a1a1a]/20 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                                    Community
                                 </span>
                                 <div className="text-5xl md:text-6xl font-black mb-2">750+</div>
                                 <p className="text-lg font-bold text-[#1a1a1a]/80 uppercase tracking-wide">
                                    Villages Impacted by Our Programs
                                 </p>
                              </div>
                           </Card>
                        </motion.div>

                     </div>
                  </div>
               </div>
            </section>

            {/* Indian Donate CTA */}
            <section className="py-20 bg-gradient-to-br from-[#ffc107] to-[#ffb300]">
               <div className="container mx-auto px-4 text-center max-w-3xl">
                  <h2 className="text-3xl font-bold text-[#1a1a1a] mb-4">Ready to Make a Difference?</h2>
                  <p className="text-[#1a1a1a]/80 leading-relaxed mb-8">
                     Your donation helps us serve communities through healthcare, education, and cultural preservation. All donations are eligible for 80G tax benefits.
                  </p>
                  <Link href="https://aspwct.omsakthiamma.in">
                     <Button className="bg-[#a7150b] hover:bg-[#8a0d08] text-white text-lg px-10 py-6 rounded-full shadow-xl">
                        <Heart className="w-5 h-5 mr-2 fill-current" /> Donate Now (Indian Donors)
                     </Button>
                  </Link>
               </div>
            </section>

          </motion.div>
        ) : (
          <motion.div
            key="international-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* ================= INTERNATIONAL DONOR CONTENT ================= */}
            
            {/* Important Notice */}
            <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
               <div className="container mx-auto px-4">
                  <div className="max-w-4xl mx-auto text-center">
                     <Globe className="w-16 h-16 mx-auto mb-6 text-white/80" />
                     <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Donation Procedure for Overseas Donors</h2>
                     <p className="text-white/90 leading-relaxed max-w-3xl mx-auto">
                        As per the new guidelines of Reserve Bank of India and Foreign Contributions Regulations Authority of India, 
                        Foreign Contributions/Donations to our trust can be done <strong className="text-[#ffc107]">only through Wire Transfer</strong> to the specified Bank Account.
                     </p>
                  </div>
               </div>
            </section>

            {/* FCRA Information Cards */}
            <section className="py-20 bg-stone-50">
               <div className="container mx-auto px-4">
                  <div className="max-w-4xl mx-auto">
                     <div className="text-center mb-10">
                       <span className="inline-block px-4 py-2 bg-[#0066cc]/10 text-[#0066cc] rounded-full text-xs font-bold tracking-widest uppercase mb-4">
                         For International Donors
                       </span>
                       <h2 className="text-3xl font-serif font-bold text-[#1a1a1a]">FCRA Registered Organization</h2>
                     </div>
                     
                     <div className="grid md:grid-cols-2 gap-6">
                        <Card className="p-6 border-l-4 border-[#0066cc] bg-white">
                           <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                              <ShieldCheck className="w-5 h-5 text-[#0066cc]" /> Wire Transfer Only
                           </h3>
                           <p className="text-slate-600 text-sm leading-relaxed">
                              As per RBI and FCRA guidelines, overseas donations can only be made through Wire Transfer to our designated FCRA account. Other modes of transfer are not accepted.
                           </p>
                        </Card>
                        
                        <Card className="p-6 border-l-4 border-[#0066cc] bg-white">
                           <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                              <FileText className="w-5 h-5 text-[#0066cc]" /> MHA Compliance
                           </h3>
                           <p className="text-slate-600 text-sm leading-relaxed">
                              In terms of Ministry of Home Affairs (MHA) requirements, donor details such as name, address, country of origin, amount, currency, and purpose are mandatory.
                           </p>
                        </Card>

                        <Card className="p-6 border-l-4 border-red-600 bg-red-50 md:col-span-2">
                           <h3 className="font-bold text-lg mb-2 flex items-center gap-2 text-red-700">
                              <Banknote className="w-5 h-5" /> Important Restriction
                           </h3>
                           <p className="text-red-900 text-sm leading-relaxed font-medium">
                              Transfer from any Bank Branch in India through UPI/NEFT/RTGS are <strong>restricted</strong> for this specific FCRA Account. 
                              If in case of any such transactions, the management will not be responsible for any loss of amount.
                           </p>
                        </Card>
                     </div>
                  </div>
               </div>
            </section>

            {/* Wire Transfer Bank Details */}
            <section className="py-20 bg-white">
               <div className="container mx-auto px-4">
                  <div className="max-w-5xl mx-auto">
                     <div className="grid lg:grid-cols-2 gap-12 items-start">
                        
                        {/* Bank Details Card */}
                        <Card className="p-8 border-2 border-[#0066cc] bg-gradient-to-br from-blue-50 to-white">
                           <div className="flex items-center gap-4 mb-6">
                              <div className="w-14 h-14 bg-[#0066cc] rounded-xl flex items-center justify-center">
                                 <Building2 className="w-7 h-7 text-white" />
                              </div>
                              <div>
                                 <h3 className="text-xl font-bold text-[#1a1a1a]">Wire Transfer Details</h3>
                                 <p className="text-slate-500 text-sm">FCRA Current Account</p>
                              </div>
                           </div>
                           
                           <div className="space-y-4">
                              <div className="p-4 bg-white rounded-lg border border-stone-200">
                                 <p className="text-xs text-slate-500 uppercase tracking-widest mb-1 font-bold">Account Name</p>
                                 <p className="text-base font-bold text-[#1a1a1a] leading-snug">Adhiparasakthi Siddhar Peedam Women's Charitable Trust</p>
                              </div>
                              <div className="p-4 bg-white rounded-lg border border-stone-200">
                                 <p className="text-xs text-slate-500 uppercase tracking-widest mb-1 font-bold">Account Number</p>
                                 <p className="text-2xl font-mono font-bold text-[#0066cc]">40209740361</p>
                              </div>
                              <div className="p-4 bg-white rounded-lg border border-stone-200">
                                 <p className="text-xs text-slate-500 uppercase tracking-widest mb-1 font-bold">Account Type</p>
                                 <p className="text-lg font-bold text-[#1a1a1a]">FCRA Current Account</p>
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                 <div className="p-4 bg-white rounded-lg border border-stone-200">
                                    <p className="text-xs text-slate-500 uppercase tracking-widest mb-1 font-bold">SWIFT Code</p>
                                    <p className="text-lg font-mono font-bold text-[#0066cc]">SBININBB104</p>
                                    <p className="text-xs text-slate-500 mt-1">(Only last 3 digits are numeric)</p>
                                 </div>
                                 <div className="p-4 bg-white rounded-lg border border-stone-200">
                                    <p className="text-xs text-slate-500 uppercase tracking-widest mb-1 font-bold">Branch Code</p>
                                    <p className="text-lg font-mono font-bold text-[#1a1a1a]">00691</p>
                                 </div>
                              </div>
                              <div className="p-4 bg-white rounded-lg border border-stone-200">
                                 <p className="text-xs text-slate-500 uppercase tracking-widest mb-1 font-bold">Bank & Branch</p>
                                 <p className="text-lg font-bold text-[#1a1a1a]">State Bank of India</p>
                                 <p className="text-sm text-slate-600">New Delhi Main Branch</p>
                              </div>
                           </div>

                           <div className="mt-6 pt-6 border-t border-stone-200">
                              <Button onClick={() => setIsFcraModalOpen(true)} className="w-full bg-[#0066cc] hover:bg-[#004499] text-white font-bold h-12 rounded-xl">
                                 <FileText className="w-4 h-4 mr-2" /> View FCRA Certificate
                              </Button>
                           </div>
                        </Card>

                        {/* Instructions & Required Details */}
                        <div className="space-y-6">
                           {/* How to Donate */}
                           <Card className="p-6 bg-[#1a1a1a] text-white">
                              <h3 className="text-xl font-bold mb-4">How to Donate</h3>
                              <div className="space-y-4">
                                 <div className="flex gap-3">
                                    <div className="w-8 h-8 rounded-full bg-[#0066cc] text-white flex items-center justify-center font-bold text-sm shrink-0">1</div>
                                    <p className="text-gray-300 text-sm">Initiate a <strong className="text-white">Wire Transfer</strong> from your overseas bank using the account details provided.</p>
                                 </div>
                                 <div className="flex gap-3">
                                    <div className="w-8 h-8 rounded-full bg-[#0066cc] text-white flex items-center justify-center font-bold text-sm shrink-0">2</div>
                                    <p className="text-gray-300 text-sm">After successful transfer, email donation details to: <strong className="text-[#ffc107]">ASPWCTtrust@gmail.com</strong></p>
                                 </div>
                                 <div className="flex gap-3">
                                    <div className="w-8 h-8 rounded-full bg-[#0066cc] text-white flex items-center justify-center font-bold text-sm shrink-0">3</div>
                                    <p className="text-gray-300 text-sm">Attach your <strong className="text-white">Passport front and back copy</strong> to the email (mandatory as per MHA).</p>
                                 </div>
                                 <div className="flex gap-3">
                                    <div className="w-8 h-8 rounded-full bg-[#0066cc] text-white flex items-center justify-center font-bold text-sm shrink-0">4</div>
                                    <p className="text-gray-300 text-sm">Receive your official donation receipt after verification.</p>
                                 </div>
                              </div>
                           </Card>

                           {/* Required Donor Details */}
                           <Card className="p-6 border-2 border-[#ffc107] bg-gradient-to-br from-amber-50 to-white">
                              <h4 className="font-bold text-[#1a1a1a] mb-4 flex items-center gap-2">
                                 <FileText className="w-5 h-5 text-[#ffc107]" /> Required Donor Details
                              </h4>
                              <p className="text-slate-600 text-sm mb-4">Please include the following in your email:</p>
                              <ul className="space-y-2 text-sm">
                                 <li className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                                    <span className="text-slate-700"><strong>Name of the Donor</strong></span>
                                 </li>
                                 <li className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                                    <span className="text-slate-700"><strong>Donor Address</strong></span>
                                 </li>
                                 <li className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                                    <span className="text-slate-700"><strong>Country of the Donor</strong></span>
                                 </li>
                                 <li className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                                    <span className="text-slate-700"><strong>Currency and Amount</strong></span>
                                 </li>
                                 <li className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                                    <span className="text-slate-700"><strong>Purpose of the Remittance</strong></span>
                                 </li>
                                 <li className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                                    <span className="text-slate-700"><strong>Passport Number</strong> (with front & back copy)</span>
                                 </li>
                              </ul>
                           </Card>

                           {/* Important Note */}
                           <Card className="p-6 border border-red-200 bg-red-50">
                              <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                                 <Info className="w-5 h-5 text-red-600" /> Important Notice
                              </h4>
                              <p className="text-red-900 text-sm leading-relaxed font-medium">
                                 Contributions/Donations will <strong>NOT</strong> be accepted without the ID Proof (Passport). 
                                 This is mandatory as per Ministry of Home Affairs (MHA) requirements.
                              </p>
                           </Card>
                        </div>

                     </div>
                  </div>
               </div>
            </section>

            {/* International Donate CTA */}
            <section className="py-20 bg-gradient-to-br from-[#0066cc] to-[#004499] text-white">
               <div className="container mx-auto px-4 text-center max-w-3xl">
                  <Heart className="w-16 h-16 mx-auto mb-6 text-white/80 fill-current" />
                  <h2 className="text-3xl font-bold mb-4">Thank You, Dear Devotees!</h2>
                  <p className="text-white/90 leading-relaxed mb-4">
                     Your generous contribution from abroad helps us continue our mission of serving humanity through healthcare, education, and cultural preservation.
                  </p>
                  <p className="text-white/70 text-sm mb-8">
                     For any queries, please contact us at <strong className="text-[#ffc107]">ASPWCTtrust@gmail.com</strong>
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                     <a href="mailto:ASPWCTtrust@gmail.com">
                        <Button className="bg-white text-[#0066cc] hover:bg-gray-100 text-lg px-8 py-6 rounded-full shadow-xl font-bold">
                           Contact Us for Assistance
                        </Button>
                     </a>
                  </div>
               </div>
            </section>

          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= 80G PDF MODAL ================= */}
      <AnimatePresence>
        {isPdfModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setIsPdfModalOpen(false)}
            className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }} 
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full max-w-3xl h-[85vh] rounded-2xl overflow-hidden shadow-2xl flex flex-col relative"
            >
               {/* Modal Header */}
               <div className="flex justify-between items-center p-4 border-b bg-gray-50 z-10 shrink-0">
                  <h3 className="font-bold text-gray-800 text-lg">Official 80G Certificate Document</h3>
                  <button 
                    onClick={() => setIsPdfModalOpen(false)} 
                    className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors text-gray-700"
                  >
                    <X className="w-6 h-6" />
                  </button>
               </div>

               {/* PDF Image Viewer */}
               <div className="flex-1 overflow-y-auto bg-gray-100 p-4 md:p-8">
                  <div className="bg-white shadow-lg mx-auto w-full">
                      <Image 
                        src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766399003/ASPWCT_80G_CERTIFICATE_1__page-0001_g1jeqw.jpg" 
                        alt="80G Certificate Document" 
                        width={800}
                        height={1100}
                        className="w-full h-auto block" 
                        priority
                      />
                  </div>
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= FCRA PDF MODAL (Placeholder) ================= */}
      <AnimatePresence>
        {isFcraModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setIsFcraModalOpen(false)}
            className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }} 
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full max-w-3xl h-[85vh] rounded-2xl overflow-hidden shadow-2xl flex flex-col relative"
            >
               {/* Modal Header */}
               <div className="flex justify-between items-center p-4 border-b bg-blue-50 z-10 shrink-0">
                  <h3 className="font-bold text-gray-800 text-lg">FCRA Registration Certificate</h3>
                  <button 
                    onClick={() => setIsFcraModalOpen(false)} 
                    className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors text-gray-700"
                  >
                    <X className="w-6 h-6" />
                  </button>
               </div>

               {/* FCRA Certificate Images */}
               <div className="flex-1 overflow-y-auto bg-gray-100 p-4 md:p-8">
                  <div className="flex flex-col gap-4 max-w-3xl mx-auto">
                     <div className="bg-white shadow-lg w-full">
                        <Image 
                          src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766133511/Renewal-Certificate-_ASPWCT_TRUST_FCRA_page-0001_nw5ao7.jpg" 
                          alt="FCRA Renewal Certificate Page 1" 
                          width={1000} 
                          height={1400}
                          className="w-full h-auto block" 
                          priority
                        />
                     </div>
                     <div className="bg-white shadow-lg w-full">
                        <Image 
                          src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766133704/Renewal-Certificate-_ASPWCT_TRUST_FCRA_page-0002_vth9g7.jpg" 
                          alt="FCRA Renewal Certificate Page 2" 
                          width={1000} 
                          height={1400}
                          className="w-full h-auto block" 
                        />
                     </div>
                  </div>
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  )
}