// "use client"

// import { useState } from "react"
// import { motion } from "framer-motion"
// import Image from "next/image"
// import {
//   Handshake,
//   Landmark,
//   FileCheck,
//   Heart,
//   Users,
//   Briefcase,
//   Lightbulb,
//   Building2,
//   Mail,
//   Phone,
//   CheckCircle2,
//   ArrowRight
// } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"

// // --- Animation Variants (Matching Home Page) ---
// const fadeInUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// }

// const staggerContainer = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
// }

// export default function CSRPage() {
//   const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle")

//   const handleFormSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     setFormStatus("submitting")
//     setTimeout(() => setFormStatus("success"), 2000)
//   }

//   return (
//     <main className="bg-background overflow-x-hidden font-sans text-foreground selection:bg-[#ffc107] selection:text-black">
      
//       {/* ================= HERO SECTION ================= */}
//       <section className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center bg-[#1a1a1a]">
//         <div className="absolute inset-0 z-0 opacity-40">
//            {/* You can replace this with a corporate/handshake image */}
//            <Image
//             src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop"
//             alt="CSR Background"
//             fill
//             className="object-cover"
//           />
//            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/80 to-transparent" />
//         </div>
        
//         <div className="relative z-10 container mx-auto px-4 text-center">
//           <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
//             <motion.div variants={fadeInUp} className="inline-block mb-4">
//                <span className="px-4 py-2 rounded-full border border-[#ffc107]/30 bg-[#ffc107]/10 text-[#ffc107] text-sm font-bold tracking-widest uppercase">
//                  Corporate Partnership
//                </span>
//             </motion.div>
//             <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
//                Corporate Social <br/>
//                <span className="text-[#a7150b]">Responsibility</span>
//             </motion.h1>
//             <motion.p variants={fadeInUp} className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
//               Channel your company's generosity into causes that echo with your values. Partner with ASPWCT to uplift women empowerment and social welfare.
//             </motion.p>
//           </motion.div>
//         </div>
//       </section>

//       {/* ================= REGISTRATION INFO ================= */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
             
//              {/* Left Text */}
//              <motion.div 
//                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
//              >
//                 <div className="flex items-center gap-3 mb-4">
//                    <Landmark className="w-8 h-8 text-[#a7150b]" />
//                    <span className="text-[#a7150b] font-bold tracking-widest uppercase text-sm">Official Credentials</span>
//                 </div>
//                 <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1a1a1a] mb-6">
//                    Empowered by the <br/>Ministry of Corporate Affairs
//                 </h2>
//                 <p className="text-slate-600 text-lg mb-6 leading-relaxed">
//                    The <strong>Adhiparasakthi Siddhar Peeda Women's Charitable Trust (ASPWCT)</strong> is officially authorized to undertake CSR activities under Section 135 of the Companies (Amendment) Act, 2014.
//                 </p>
                
//                 <div className="grid sm:grid-cols-2 gap-4 mb-8">
//                    <Card className="p-5 border-l-4 border-[#ffc107] bg-stone-50">
//                       <p className="text-xs text-slate-500 uppercase tracking-widest mb-1 font-bold">CSR Registration No</p>
//                       <p className="text-2xl font-mono font-bold text-[#1a1a1a]">CSR00002407</p>
//                    </Card>
//                    <Card className="p-5 border-l-4 border-[#a7150b] bg-stone-50">
//                       <p className="text-xs text-slate-500 uppercase tracking-widest mb-1 font-bold">Independent Auditor</p>
//                       <p className="text-lg font-bold text-[#1a1a1a]">N.K. Rajendiran & Co</p>
//                    </Card>
//                 </div>

//                 <div className="flex gap-4">
//                    <div className="flex items-center gap-2 text-sm font-bold text-slate-700">
//                       <CheckCircle2 className="text-[#a7150b] w-5 h-5"/> 12A Registered
//                    </div>
//                    <div className="flex items-center gap-2 text-sm font-bold text-slate-700">
//                       <CheckCircle2 className="text-[#a7150b] w-5 h-5"/> 80G Exemptions
//                    </div>
//                    <div className="flex items-center gap-2 text-sm font-bold text-slate-700">
//                       <CheckCircle2 className="text-[#a7150b] w-5 h-5"/> Transparent Accounts
//                    </div>
//                 </div>
//              </motion.div>

//              {/* Right Visual */}
//              <motion.div 
//                initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
//                className="relative"
//              >
//                 <div className="bg-[#1a1a1a] rounded-3xl p-8 text-white relative z-10 shadow-2xl">
//                    <Lightbulb className="w-12 h-12 text-[#ffc107] mb-6" />
//                    <h3 className="text-2xl font-bold mb-4">Why Partner with ASPWCT?</h3>
//                    <ul className="space-y-4">
//                       <li className="flex gap-3">
//                          <div className="w-6 h-6 rounded-full bg-[#ffc107] text-black flex items-center justify-center font-bold text-sm shrink-0">1</div>
//                          <p className="text-gray-300">ASPWCT has always stood its ground on transparency and accountability.</p>
//                       </li>
//                       <li className="flex gap-3">
//                          <div className="w-6 h-6 rounded-full bg-[#ffc107] text-black flex items-center justify-center font-bold text-sm shrink-0">2</div>
//                          <p className="text-gray-300">Our financials and annual reports are independently audited and provided on requirement.</p>
//                       </li>
//                       <li className="flex gap-3">
//                          <div className="w-6 h-6 rounded-full bg-[#ffc107] text-black flex items-center justify-center font-bold text-sm shrink-0">3</div>
//                          <p className="text-gray-300">Your contribution catalyses a myriad of programs aimed at sustainable development.</p>
//                       </li>
//                    </ul>
//                    <div className="mt-8 pt-6 border-t border-white/10">
//                       <p className="font-serif italic text-[#ffc107]">"Make a difference in the world, and be a part of something bigger."</p>
//                    </div>
//                 </div>
//                 {/* Decorative blob */}
//                 <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#a7150b]/20 rounded-full blur-3xl -z-10" />
//              </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* ================= ACTIVITIES SECTION ================= */}
//       <section className="py-24 bg-stone-50">
//         <div className="container mx-auto px-4">
//            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
//               <span className="text-[#a7150b] font-bold tracking-widest uppercase text-sm">Where Your Money Goes</span>
//               <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1a1a1a] mt-2">Impact Areas</h2>
//               <p className="text-slate-500 mt-4 max-w-2xl mx-auto">We look into the basic needs of people viz., food, clothing, and shelter, serving the suppressed and downtrodden irrespective of caste, creed, or religion.</p>
//            </motion.div>

//            <div className="grid md:grid-cols-3 gap-8">
//               {/* Charitable Services */}
//               <Card className="col-span-1 md:col-span-2 p-8 border-t-4 border-t-[#a7150b] shadow-lg">
//                  <div className="flex items-center gap-4 mb-6">
//                     <div className="p-3 bg-red-50 rounded-xl text-[#a7150b]"><Heart className="w-8 h-8"/></div>
//                     <h3 className="text-2xl font-bold text-[#1a1a1a]">Charitable & Welfare Services</h3>
//                  </div>
//                  <div className="grid sm:grid-cols-2 gap-4">
//                     {[
//                        "Aid appliances for the handicapped",
//                        "Relief for victims of natural calamities",
//                        "Free homes with bore wells & electricity",
//                        "Homes for orphans and the aged",
//                        "Water facilities for leper colonies",
//                        "Solemnizing free marriages for the poor",
//                        "Adoption of children of life-sentence prisoners",
//                        "Free distribution of ploughs/sprayers to farmers"
//                     ].map((item, i) => (
//                        <div key={i} className="flex items-start gap-3">
//                           <CheckCircle2 className="w-5 h-5 text-[#ffc107] shrink-0 mt-0.5" />
//                           <p className="text-slate-700 text-sm font-medium">{item}</p>
//                        </div>
//                     ))}
//                  </div>
//               </Card>

//               {/* Educational Services */}
//               <Card className="p-8 border-t-4 border-t-[#ffc107] shadow-lg bg-[#1a1a1a] text-white">
//                  <div className="flex items-center gap-4 mb-6">
//                     <div className="p-3 bg-white/10 rounded-xl text-[#ffc107]"><Briefcase className="w-8 h-8"/></div>
//                     <h3 className="text-2xl font-bold">Educational Activities</h3>
//                  </div>
//                  <p className="text-gray-300 mb-6 leading-relaxed">
//                     The trust ensures that students shine as model citizens. We run institutions at G.B. Nagar, Kalavai focused on character inculcation.
//                  </p>
//                  <ul className="space-y-4">
//                     <li className="flex items-center gap-3">
//                        <div className="w-2 h-2 bg-[#ffc107] rounded-full" />
//                        <span className="font-bold">Adhiparasakthi College of Engineering</span>
//                     </li>
//                     <li className="flex items-center gap-3">
//                        <div className="w-2 h-2 bg-[#ffc107] rounded-full" />
//                        <span className="font-bold">Teacher Training Institutions</span>
//                     </li>
//                  </ul>
//               </Card>
//            </div>
//         </div>
//       </section>

//       {/* ================= CONTACT FORM (FROM PDF) ================= */}
//       <section className="py-24 px-4 container mx-auto" id="contact">
//          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
//             <div className="grid lg:grid-cols-5">
               
//                {/* Contact Info Sidebar */}
//                <div className="lg:col-span-2 bg-[#a7150b] p-10 text-white flex flex-col justify-between">
//                   <div>
//                      <Handshake className="w-16 h-16 text-[#ffc107] mb-8" />
//                      <h3 className="text-3xl font-serif font-bold mb-4">Partner With Us</h3>
//                      <p className="text-white/80 mb-8 leading-relaxed">
//                         Complete this form to start a conversation about how your organization can meet its CSR objectives with ASPWCT.
//                      </p>
//                   </div>
                  
//                   <div className="space-y-6">
//                      <div className="flex items-center gap-4">
//                         <Mail className="w-5 h-5 text-[#ffc107]" />
//                         <span className="font-bold">contact@ASPWCTtrust.org</span>
//                      </div>
//                      <div className="flex items-center gap-4">
//                         <Building2 className="w-5 h-5 text-[#ffc107]" />
//                         <span className="font-bold">Melmaruvathur - 603 319</span>
//                      </div>
//                   </div>
//                </div>

//                {/* Form Area */}
//                <div className="lg:col-span-3 p-10 bg-white">
//                   {formStatus === "success" ? (
//                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full flex flex-col items-center justify-center text-center">
//                         <CheckCircle2 className="w-20 h-20 text-green-500 mb-4" />
//                         <h3 className="text-2xl font-bold text-[#1a1a1a]">Thank You!</h3>
//                         <p className="text-slate-500">We have received your CSR partnership request.</p>
//                      </motion.div>
//                   ) : (
//                      <form onSubmit={handleFormSubmit} className="space-y-6">
//                         <div className="space-y-2">
//                            <Label htmlFor="fullname">Full Name</Label>
//                            <Input id="fullname" required className="bg-stone-50 border-stone-200 h-12 focus:ring-[#a7150b]" />
//                         </div>
                        
//                         <div className="grid md:grid-cols-2 gap-6">
//                            <div className="space-y-2">
//                               <Label htmlFor="company">Company Name</Label>
//                               <Input id="company" required className="bg-stone-50 border-stone-200 h-12 focus:ring-[#a7150b]" />
//                            </div>
//                            <div className="space-y-2">
//                               <Label htmlFor="email">Email Address</Label>
//                               <Input id="email" type="email" required className="bg-stone-50 border-stone-200 h-12 focus:ring-[#a7150b]" />
//                            </div>
//                         </div>

//                         <div className="space-y-2">
//                            <Label htmlFor="phone">Contact Number</Label>
//                            <Input id="phone" type="tel" required className="bg-stone-50 border-stone-200 h-12 focus:ring-[#a7150b]" />
//                         </div>

//                         <div className="space-y-2">
//                            <Label htmlFor="message">Message</Label>
//                            <Textarea id="message" required className="bg-stone-50 border-stone-200 min-h-[120px] focus:ring-[#a7150b]" placeholder="Tell us about your CSR goals..." />
//                         </div>

//                         <Button type="submit" disabled={formStatus === 'submitting'} className="w-full h-12 bg-[#1a1a1a] hover:bg-black text-white font-bold text-lg rounded-xl">
//                            {formStatus === 'submitting' ? 'Submitting...' : 'SUBMIT REQUEST'}
//                         </Button>
//                      </form>
//                   )}
//                </div>
//             </div>
//          </div>
//       </section>

//     </main>
//   )
// }
"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import {
  Handshake,
  Landmark,
  Heart,
  Briefcase,
  Lightbulb,
  Building2,
  Mail,
  CheckCircle2,
  Scale,
  X,
  FileText,
  Globe
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
}

export default function CSRPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle")
  
  // Modal States
  const [isCsrLetterModalOpen, setIsCsrLetterModalOpen] = useState(false)
  const [isFcraRenewalModalOpen, setIsFcraRenewalModalOpen] = useState(false)

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("submitting")
    setTimeout(() => setFormStatus("success"), 2000)
  }

  return (
    <main className="bg-background overflow-x-hidden font-sans text-foreground selection:bg-[#ffc107] selection:text-black">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center bg-[#1a1a1a]">
        {/* <div className="absolute inset-0 z-0 opacity-40">
           <Image
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop"
            alt="CSR Background"
            fill
            className="object-cover"
          />
           <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/80 to-transparent" />
        </div> */}
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="inline-block mb-4">
               <span className="px-4 py-2 rounded-full border border-[#ffc107]/30 bg-[#ffc107]/10 text-[#ffc107] text-sm font-bold tracking-widest uppercase">
                 Corporate Partnership
               </span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
               Corporate Social <br/>
               <span className="text-[#a7150b]">Responsibility</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
              Channel your company's generosity into causes that echo with your values. Partner with ASPWCT to uplift women empowerment and social welfare.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================= REGISTRATION INFO & BUTTONS ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
             
             {/* Left Text */}
             <motion.div 
               initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
             >
                <div className="flex items-center gap-3 mb-4">
                   <Landmark className="w-8 h-8 text-[#a7150b]" />
                   <span className="text-[#a7150b] font-bold tracking-widest uppercase text-sm">Official Credentials</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1a1a1a] mb-6">
                   Empowered by the <br/>Ministry of Corporate Affairs
                </h2>
                <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                   The <strong>Adhiparasakthi Siddhar Peeda Women's Charitable Trust (ASPWCT)</strong> is officially authorized to undertake CSR activities under Section 135 of the Companies (Amendment) Act, 2014.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                   <Card className="p-5 border-l-4 border-[#ffc107] bg-stone-50">
                      <p className="text-xs text-slate-500 uppercase tracking-widest mb-1 font-bold">CSR Registration No</p>
                      <p className="text-2xl font-mono font-bold text-[#1a1a1a]">CSR00002407</p>
                   </Card>
                   <Card className="p-5 border-l-4 border-[#a7150b] bg-stone-50">
                      <p className="text-xs text-slate-500 uppercase tracking-widest mb-1 font-bold">Independent Auditor</p>
                      <p className="text-lg font-bold text-[#1a1a1a]">N.K. Rajendiran & Co</p>
                   </Card>
                </div>

                {/* Pop-up Trigger Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                   <Button 
                      onClick={() => setIsCsrLetterModalOpen(true)} 
                      className="bg-[#1a1a1a] text-white hover:bg-black rounded-full px-6 py-6 font-bold flex-1"
                   >
                      <FileText className="w-5 h-5 mr-2" /> View CSR Approval
                   </Button>
                   {/* <Button 
                      onClick={() => setIsFcraRenewalModalOpen(true)} 
                      className="bg-[#a7150b] text-white hover:bg-[#8a0d08] rounded-full px-6 py-6 font-bold flex-1"
                   >
                      <Globe className="w-5 h-5 mr-2" /> View FCRA Certificate
                   </Button> */}
                </div>

                <div className="flex flex-wrap gap-4">
                   <div className="flex items-center gap-2 text-sm font-bold text-slate-700">
                      <CheckCircle2 className="text-[#a7150b] w-5 h-5"/> 12A Registered
                   </div>
                   <div className="flex items-center gap-2 text-sm font-bold text-slate-700">
                      <CheckCircle2 className="text-[#a7150b] w-5 h-5"/> 80G Exemptions
                   </div>
                   <div className="flex items-center gap-2 text-sm font-bold text-slate-700">
                      <Scale className="text-[#a7150b] w-5 h-5"/> Transparent Accounts
                   </div>
                </div>
             </motion.div>

             {/* Right Visual */}
             <motion.div 
               initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
               className="relative"
             >
                <div className="bg-[#1a1a1a] rounded-3xl p-8 text-white relative z-10 shadow-2xl">
                   <Lightbulb className="w-12 h-12 text-[#ffc107] mb-6" />
                   <h3 className="text-2xl font-bold mb-4">Why Partner with ASPWCT?</h3>
                   <ul className="space-y-4">
                      <li className="flex gap-3">
                         <div className="w-6 h-6 rounded-full bg-[#ffc107] text-black flex items-center justify-center font-bold text-sm shrink-0">1</div>
                         <p className="text-gray-300">ASPWCT has always stood its ground on transparency and accountability.</p>
                      </li>
                      <li className="flex gap-3">
                         <div className="w-6 h-6 rounded-full bg-[#ffc107] text-black flex items-center justify-center font-bold text-sm shrink-0">2</div>
                         <p className="text-gray-300">Our financials and annual reports are independently audited and provided on requirement.</p>
                      </li>
                      <li className="flex gap-3">
                         <div className="w-6 h-6 rounded-full bg-[#ffc107] text-black flex items-center justify-center font-bold text-sm shrink-0">3</div>
                         <p className="text-gray-300">Your contribution catalyses a myriad of programs aimed at sustainable development.</p>
                      </li>
                   </ul>
                   <div className="mt-8 pt-6 border-t border-white/10">
                      <p className="font-serif italic text-[#ffc107]">"Make a difference in the world, and be a part of something bigger."</p>
                   </div>
                </div>
                {/* Decorative blob */}
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#a7150b]/20 rounded-full blur-3xl -z-10" />
             </motion.div>
          </div>
        </div>
      </section>

      {/* ================= ACTIVITIES SECTION ================= */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-4">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
              <span className="text-[#a7150b] font-bold tracking-widest uppercase text-sm">Where Your Money Goes</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1a1a1a] mt-2">Impact Areas</h2>
              <p className="text-slate-500 mt-4 max-w-2xl mx-auto">We look into the basic needs of people viz., food, clothing, and shelter, serving the suppressed and downtrodden irrespective of caste, creed, or religion.</p>
           </motion.div>

           <div className="grid md:grid-cols-3 gap-8">
              {/* Charitable Services */}
              <Card className="col-span-1 md:col-span-2 p-8 border-t-4 border-t-[#a7150b] shadow-lg">
                 <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-red-50 rounded-xl text-[#a7150b]"><Heart className="w-8 h-8"/></div>
                    <h3 className="text-2xl font-bold text-[#1a1a1a]">Charitable & Welfare Services</h3>
                 </div>
                 <div className="grid sm:grid-cols-2 gap-4">
                    {[
                       "Aid appliances for the handicapped",
                       "Relief for victims of natural calamities",
                       "Free homes with bore wells & electricity",
                       "Homes for orphans and the aged",
                       "Water facilities for leper colonies",
                       "Solemnizing free marriages for the poor",
                       "Adoption of children of life-sentence prisoners",
                       "Free distribution of ploughs/sprayers to farmers"
                    ].map((item, i) => (
                       <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#ffc107] shrink-0 mt-0.5" />
                          <p className="text-slate-700 text-sm font-medium">{item}</p>
                       </div>
                    ))}
                 </div>
              </Card>

              {/* Educational Services */}
              <Card className="p-8 border-t-4 border-t-[#ffc107] shadow-lg bg-[#1a1a1a] text-white">
                 <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-white/10 rounded-xl text-[#ffc107]"><Briefcase className="w-8 h-8"/></div>
                    <h3 className="text-2xl font-bold">Educational Activities</h3>
                 </div>
                 <p className="text-gray-300 mb-6 leading-relaxed">
                    The trust ensures that students shine as model citizens. We run institutions at G.B. Nagar, Kalavai focused on character inculcation.
                 </p>
                 <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                       <div className="w-2 h-2 bg-[#ffc107] rounded-full" />
                       <span className="font-bold">Adhiparasakthi College of Engineering</span>
                    </li>
                    <li className="flex items-center gap-3">
                       <div className="w-2 h-2 bg-[#ffc107] rounded-full" />
                       <span className="font-bold">Teacher Training Institutions</span>
                    </li>
                 </ul>
              </Card>
           </div>
        </div>
      </section>

            <section className="py-24 px-4 bg-background">
              <div className="container mx-auto space-y-24">
                
                {/* ================= PROJECT 1: EYE CAMP ================= */}
                <div>
                  <div>
                  <h2 className="text-4xl mb-5 text-center md:text-5xl font-serif font-bold text-foreground">ASPWCT CSR Activities</h2>

                  </div>

                  <div className="text-center mb-10">
                    <span className="inline-block px-4 py-2 bg-[#ffc107]/10 text-[#ffc107] rounded-full text-xs font-bold tracking-widest uppercase mb-4">
                      CSR Initiative 01
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Free Eye Camp</h2>
                  </div>
      
                  {/* UPDATED: 
                     1. Kept 'grid-cols-2' (2 images per row).
                     2. Added 'max-w-4xl mx-auto' to restrict width -> Makes images smaller!
                  */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {[
                      "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766164830/097A1993_anatnz.jpg",
                      "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766164805/097A1516_sodl4z.jpg",
                      "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766164845/097A1597_wxps2o.jpg",
                      "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766164797/097A1504_nn9vgr.jpg",
                    ].map((imgSrc, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ y: -5 }}
                        // Kept aspect-square for a neat box shape
                        className="relative w-full aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer group"
                      >
                        <Image
                          src={imgSrc || "/placeholder.svg"}
                          alt={`Eye Camp Image ${idx + 1}`}
                          fill
                          className="object-fill transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                 {/* ================= PROJECT 2: ENDOSCOPE MACHINE ================= */}
                <div>
                  <div className="text-center mb-10">
                    <span className="inline-block px-4 py-2 bg-[#a7150b]/10 text-[#a7150b] rounded-full text-xs font-bold tracking-widest uppercase mb-4">
                      CSR Initiative 02
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Endoscope Machine by ICICI</h2>
                  </div>
      
                  {/* Same layout for consistency */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {[
                      "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766093845/IMG-20231206-WA0012_hysx3l.jpg",
                      "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766093847/IMG-20231206-WA0054_nc25ip.jpg",
                      "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766093844/IMG-20231206-WA0048_poj4kh.jpg",
                      "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766093825/IMG-20231206-WA0018_ipotnj.jpg",
                    ].map((imgSrc, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="relative w-full aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer group"
                      >
                        <Image
                          src={imgSrc || "/placeholder.svg"}
                          alt={`Endoscope Project Image ${idx + 1}`}
                          fill
                          className="object-fill transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

      {/* ================= CONTACT FORM ================= */}
      <section className="py-24 px-4 container mx-auto" id="contact">
         <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
            <div className="grid lg:grid-cols-5">
               
               {/* Contact Info Sidebar */}
               <div className="lg:col-span-2 bg-[#a7150b] p-10 text-white flex flex-col justify-between">
                  <div>
                     <Handshake className="w-16 h-16 text-[#ffc107] mb-8" />
                     <h3 className="text-3xl font-serif font-bold mb-4">Partner With Us</h3>
                     <p className="text-white/80 mb-8 leading-relaxed">
                        Complete this form to start a conversation about how your organization can meet its CSR objectives with ASPWCT.
                     </p>
                  </div>
                  
                  <div className="space-y-6">
                     <div className="flex items-center gap-4">
                        <Mail className="w-5 h-5 text-[#ffc107]" />
                        <span className="font-bold">contact@ASPWCTtrust.org</span>
                     </div>
                     <div className="flex items-center gap-4">
                        <Building2 className="w-5 h-5 text-[#ffc107]" />
                        <span className="font-bold">Melmaruvathur - 603 319</span>
                     </div>
                  </div>
               </div>

               {/* Form Area */}
               <div className="lg:col-span-3 p-10 bg-white">
                  {formStatus === "success" ? (
                     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full flex flex-col items-center justify-center text-center">
                        <CheckCircle2 className="w-20 h-20 text-green-500 mb-4" />
                        <h3 className="text-2xl font-bold text-[#1a1a1a]">Thank You!</h3>
                        <p className="text-slate-500">We have received your CSR partnership request.</p>
                     </motion.div>
                  ) : (
                     <form onSubmit={handleFormSubmit} className="space-y-6">
                        <div className="space-y-2">
                           <Label htmlFor="fullname">Full Name</Label>
                           <Input id="fullname" required className="bg-stone-50 border-stone-200 h-12 focus:ring-[#a7150b]" />
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                           <div className="space-y-2">
                              <Label htmlFor="company">Company Name</Label>
                              <Input id="company" required className="bg-stone-50 border-stone-200 h-12 focus:ring-[#a7150b]" />
                           </div>
                           <div className="space-y-2">
                              <Label htmlFor="email">Email Address</Label>
                              <Input id="email" type="email" required className="bg-stone-50 border-stone-200 h-12 focus:ring-[#a7150b]" />
                           </div>
                        </div>

                        <div className="space-y-2">
                           <Label htmlFor="phone">Contact Number</Label>
                           <Input id="phone" type="tel" required className="bg-stone-50 border-stone-200 h-12 focus:ring-[#a7150b]" />
                        </div>

                        <div className="space-y-2">
                           <Label htmlFor="message">Message</Label>
                           <Textarea id="message" required className="bg-stone-50 border-stone-200 min-h-[120px] focus:ring-[#a7150b]" placeholder="Tell us about your CSR goals..." />
                        </div>

                        <Button type="submit" disabled={formStatus === 'submitting'} className="w-full h-12 bg-[#1a1a1a] hover:bg-black text-white font-bold text-lg rounded-xl">
                           {formStatus === 'submitting' ? 'Submitting...' : 'SUBMIT'}
                        </Button>
                     </form>
                  )}
               </div>
            </div>
         </div>
      </section>

      {/* ================= MODALS ================= */}
      <AnimatePresence>
        {/* 1. CSR Letter Modal */}
        {isCsrLetterModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCsrLetterModalOpen(false)}
            className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full max-w-4xl h-[90vh] rounded-2xl overflow-hidden shadow-2xl flex flex-col relative"
            >
               <div className="flex justify-between items-center p-4 border-b bg-gray-50 z-10 shrink-0">
                  <h3 className="font-bold text-gray-800 text-lg">Official CSR Approval Letter</h3>
                  <button onClick={() => setIsCsrLetterModalOpen(false)} className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors text-gray-700">
                    <X className="w-6 h-6" />
                  </button>
               </div>
              <div className="flex-1 overflow-y-auto bg-gray-100 p-0 md:p-6">
                 <div className="bg-white shadow-lg mx-auto">
                    <Image 
                      src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766132506/Screenshot_2025-12-19_134112_js329n.png" 
                      alt="Official CSR Approval Letter" 
                      width={1000} height={1400}
                      className="w-full h-auto block" priority
                    />
                 </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* 2. FCRA Renewal Modal */}
        {isFcraRenewalModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsFcraRenewalModalOpen(false)}
            className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full max-w-4xl h-[90vh] rounded-2xl overflow-hidden shadow-2xl flex flex-col relative"
            >
               <div className="flex justify-between items-center p-4 border-b bg-gray-50 z-10 shrink-0">
                  <h3 className="font-bold text-gray-800 text-lg">FCRA Renewal Certificate</h3>
                  <button onClick={() => setIsFcraRenewalModalOpen(false)} className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors text-gray-700">
                    <X className="w-6 h-6" />
                  </button>
               </div>
              <div className="flex-1 overflow-y-auto bg-gray-100 p-4 md:p-8">
                 <div className="flex flex-col gap-4 max-w-3xl mx-auto">
                    <div className="bg-white shadow-lg w-full">
                        <Image 
                          src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766133511/Renewal-Certificate-_ASPWCT_TRUST_FCRA_page-0001_nw5ao7.jpg" 
                          alt="FCRA Renewal Page 1" 
                          width={1000} height={1400}
                          className="w-full h-auto block" priority
                        />
                    </div>
                    <div className="bg-white shadow-lg w-full">
                        <Image 
                          src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766133704/Renewal-Certificate-_ASPWCT_TRUST_FCRA_page-0002_vth9g7.jpg" 
                          alt="FCRA Renewal Page 2" 
                          width={1000} height={1400}
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