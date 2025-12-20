// // "use client"

// // import { useState, useRef } from "react"
// // import { motion, AnimatePresence, useScroll, useTransform, Variants } from "framer-motion"
// // import Image from "next/image"
// // import Link from "next/link"
// // import {
// //   Heart,
// //   Users,
// //   Eye,
// //   Activity,
// //   Award,
// //   FileText,
// //   Building2,
// //   Mail,
// //   Phone,
// //   X,
// //   CheckCircle2,
// //   Globe,
// //   ArrowRight,
// //   ChevronRight,
// //   Download,
// //   Facebook,
// //   Twitter,
// //   Linkedin,
// //   Landmark,
// //   BadgeCheck,
// //   Calendar,
// //   MapPin
// // } from "lucide-react"
// // import { Button } from "@/components/ui/button"
// // import { Card } from "@/components/ui/card"
// // import { Input } from "@/components/ui/input"
// // import { Label } from "@/components/ui/label"
// // import { Textarea } from "@/components/ui/textarea"
// // import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// // // --- Animation Variants ---
// // const fadeInUp = {
// //   hidden: { opacity: 0, y: 40 },
// //   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
// // }

// // const staggerContainer = {
// //   hidden: { opacity: 0 },
// //   visible: {
// //     opacity: 1,
// //     transition: {
// //       staggerChildren: 0.2
// //     }
// //   }
// // }

// // const scaleOnHover = {
// //   hover: { scale: 1.02, transition: { duration: 0.3 } }
// // }

// // export default function Home() {
// //   const [isDocModalOpen, setIsDocModalOpen] = useState(false)
// //   const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle")
  
// //   // Parallax hook for hero
// //   const { scrollY } = useScroll()
// //   const y1 = useTransform(scrollY, [0, 500], [0, 200])
// //   const [isFcraModalOpen, setIsFcraModalOpen] = useState(false)
// //   const [isFcraRenewalModalOpen, setIsFcraRenewalModalOpen] = useState(false)
// //   const [isOverseasModalOpen, setIsOverseasModalOpen] = useState(false)
// //   const [isCsrLetterModalOpen, setIsCsrLetterModalOpen] = useState(false)


// //   const handleFormSubmit = (e: React.FormEvent) => {
// //     e.preventDefault()
// //     setFormStatus("submitting")
// //     setTimeout(() => setFormStatus("success"), 2000)
// //   }

// //   // Data from your image
// //   const trusteesList = [
// //     "Mr. G.B. ANBALAGAN",
// //     "Mr. G.B. SENTHIL KUMAR",
// //     "Mrs. B. SRIDEVI",
// //     "Mrs. B. UMADEVI",
// //     "Mr. A.K. VENKATASAMY",
// //     "Mr. S. MARIMUTHU",
// //     "Mr. R. KARUNANIDHI"
// //   ]

// //   return (
// //     <main className="bg-stone-50 overflow-x-hidden font-sans text-slate-900 selection:bg-[#ffc107] selection:text-black">
      
// //       {/* ================= 1. CINEMATIC HERO SECTION ================= */}
// //       <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
// //         {/* Parallax Background */}
// //         <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
// //           <Image
// //             src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766091901/dental-hospital_cd4gda.jpg"
// //             alt="Hero Background"
// //             fill
// //             className="object-cover scale-110"
// //             priority
// //           />
// //           <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
// //         </motion.div>

// //         {/* Content */}
// //         <div className="relative z-10 container mx-auto px-4 pt-20">
// //           <motion.div 
// //             initial="hidden" 
// //             animate="visible" 
// //             variants={staggerContainer}
// //             className="max-w-4xl mx-auto text-center"
// //           >
// //             <motion.div variants={fadeInUp} className="inline-block mb-6">
// //               <span className="px-4 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-yellow-400 text-sm font-bold tracking-widest uppercase">
// //                 Est. 1978 • Registered Trust
// //               </span>
// //             </motion.div>

// //             <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-tight drop-shadow-2xl">
// //               Healing Hands. <br />
// //               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffc107] to-yellow-200">
// //                 Compassionate Hearts.
// //               </span>
// //             </motion.h1>

// //             <motion.p variants={fadeInUp} className="text-lg md:text-2xl text-gray-200 mb-10 leading-relaxed font-light max-w-2xl mx-auto">
// //               Adhiparasakthi Charitable Medical Educational & Cultural Trust (ASPWCT) dedicated to serving humanity through holistic healthcare and education.
// //             </motion.p>

// //             <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-6">
// //               <Link href="https://www.omsakthiamma.org/online_services/donations" className="w-full sm:w-auto">
// //                 <Button className="w-full sm:w-auto bg-[#a7150b] hover:bg-[#d91e11] text-white rounded-full px-10 py-7 text-lg font-bold shadow-[0_0_40px_-10px_rgba(167,21,11,0.5)] transition-all hover:scale-105">
// //                   <Heart className="mr-3 w-5 h-5 fill-current animate-pulse" />
// //                   Donate Now
// //                 </Button>
// //               </Link>
// //               <Link href="#about" className="w-full sm:w-auto">
// //                 <Button variant="outline" className="w-full sm:w-auto border-white/50 text-white hover:bg-white hover:text-black rounded-full px-10 py-7 text-lg font-bold backdrop-blur-sm transition-all hover:scale-105 bg-transparent">
// //                   Explore Our Work
// //                 </Button>
// //               </Link>
// //             </motion.div>
// //           </motion.div>
// //         </div>
// //       </section>

// // {/* ================= 2. ABOUT THE TRUST (UPDATED CONTENT) ================= */}
// //       <section id="about" className="py-24 px-4 container mx-auto">
// //         <div className="grid lg:grid-cols-2 gap-16 items-center">
// //           <motion.div
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true, margin: "-100px" }}
// //             variants={staggerContainer}
// //           >
// //             <motion.span variants={fadeInUp} className="text-[#a7150b] font-bold tracking-widest uppercase text-sm mb-4 block">
// //               About The Trust
// //             </motion.span>
// //             <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold text-[#1a1a1a] mb-6 leading-tight">
// //               A Legacy of Service <br/>
// //               <span className="underline decoration-[#ffc107] decoration-4 underline-offset-4">Since 1978</span>
// //             </motion.h2>
            
// //             <motion.div variants={fadeInUp} className="text-slate-600 text-lg leading-relaxed mb-8 space-y-4">
// //               <p>
// //                 M/s Adhiparasakthi Charitable Medical Educational and Cultural Trust (ASPWCT Trust ), as the name suggests has dedicated itself to serve the people in the areas of:
// //               </p>
              
// //               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-medium text-[#1a1a1a] my-4">
// //                 <li className="flex items-center gap-2"><CheckCircle2 className="text-[#a7150b] w-5 h-5 shrink-0"/> Charity</li>
// //                 <li className="flex items-center gap-2"><CheckCircle2 className="text-[#a7150b] w-5 h-5 shrink-0"/> Medical</li>
// //                 <li className="flex items-center gap-2"><CheckCircle2 className="text-[#a7150b] w-5 h-5 shrink-0"/> Educational and</li>
// //                 <li className="flex items-center gap-2"><CheckCircle2 className="text-[#a7150b] w-5 h-5 shrink-0"/> Cultural Activities</li>
// //               </ul>

// //               <p>
// //                 This trust is a non-profitable organization which was founded by <strong>H.H. Bangaru Adigalar</strong> in the year 1978 with a small corpus fund and with few cents of land in Melmaruvathur (It was then a small village situated about 92 kms from the Chennai city and about 70 Km to Puducherry).
// //               </p>
// //             </motion.div>
            
// //             <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-8 mb-8">
// //               <div className="border-l-4 border-[#ffc107] pl-6">
// //                 <h4 className="text-4xl font-bold text-[#1a1a1a]">1978</h4>
// //                 <p className="text-sm text-slate-500 font-medium uppercase tracking-wide mt-1">Established</p>
// //               </div>
// //               <div className="border-l-4 border-[#a7150b] pl-6">
// //                 <h4 className="text-4xl font-bold text-[#1a1a1a]">Melmaruvathur</h4>
// //                 <p className="text-sm text-slate-500 font-medium uppercase tracking-wide mt-1">Headquarters</p>
// //               </div>
// //             </motion.div>
// //           </motion.div>

// //           {/* Image Grid Composition */}
// //           <motion.div
// //             initial={{ opacity: 0, x: 50 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.8 }}
// //             className="relative"
// //           >
// //             <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
// //               <Image 
// //                 src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop" 
// //                 alt="Medical Service" 
// //                 width={600} 
// //                 height={400} 
// //                 className="w-full h-auto object-cover" 
// //               />
// //             </div>
// //             {/* Decor element */}
// //             <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#ffc107]/20 rounded-full blur-3xl -z-10" />
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* ================= 3. FOUNDERS & TRUSTEES (NEW SECTION) ================= */}
// //       <section className="py-24 bg-white">
// //         <div className="container mx-auto px-4">
          
// //           {/* --- FOUNDERS --- */}
// //           <div className="mb-24">
// //             <div className="text-center mb-16">
// //               <span className="text-[#a7150b] font-bold tracking-widest uppercase text-sm">Leadership</span>
// //               <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a1a1a] mt-2">Founder President & Vice President</h2>
// //             </div>

// //             <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
// //               {/* Founder President */}
// //               <motion.div 
// //                  initial={{ opacity: 0, y: 30 }}
// //                  whileInView={{ opacity: 1, y: 0 }}
// //                  viewport={{ once: true }}
// //                  className="relative group bg-[#fff8e6] rounded-3xl p-8 text-center border-2 border-[#ffc107]/20 hover:border-[#ffc107] transition-all shadow-xl"
// //               >
// //                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg mb-6 relative">
// //                    {/* Placeholder for H.H. Bangaru Adigalar Image */}
// //                    <Image 
// //                      src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766091903/3952Founder-President_k3xqz3.png" 
// //                      alt="His Holiness Bangaru Adigalar" 
// //                      fill 
// //                      className="object-cover" 
// //                    />
// //                  </div>
// //                  <h3 className="text-2xl font-serif font-bold text-[#1a1a1a] mb-1">His Holiness Bangaru Adigalar</h3>
// //                  <p className="text-[#a7150b] font-bold uppercase tracking-widest text-sm mb-6">Founder President</p>
// //                  <div className="flex justify-center gap-4 text-gray-400">
// //                     <Facebook className="w-5 h-5 hover:text-[#a7150b] cursor-pointer" />
// //                     <Twitter className="w-5 h-5 hover:text-[#a7150b] cursor-pointer" />
// //                     <Mail className="w-5 h-5 hover:text-[#a7150b] cursor-pointer" />
// //                  </div>
// //               </motion.div>

// //               {/* Vice President */}
// //               <motion.div 
// //                  initial={{ opacity: 0, y: 30 }}
// //                  whileInView={{ opacity: 1, y: 0 }}
// //                  viewport={{ once: true }}
// //                  transition={{ delay: 0.2 }}
// //                  className="relative group bg-red-50 rounded-3xl p-8 text-center border-2 border-[#a7150b]/10 hover:border-[#a7150b] transition-all shadow-xl"
// //               >
// //                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg mb-6 relative">
// //                     {/* Placeholder for Tmt. Lakshmi Bangaru Adigalar Image */}
// //                    <Image 
// //                      src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766091895/Vice-President_z3lp84.jpg" 
// //                      alt="Tmt. Lakshmi Bangaru Adigalar" 
// //                      fill 
// //                      className="object-cover" 
// //                    />
// //                  </div>
// //                  <h3 className="text-2xl font-serif font-bold text-[#1a1a1a] mb-1">Tmt. Lakshmi Bangaru Adigalar</h3>
// //                  <p className="text-[#a7150b] font-bold uppercase tracking-widest text-sm mb-6">Vice President</p>
// //                  <div className="flex justify-center gap-4 text-gray-400">
// //                     <Facebook className="w-5 h-5 hover:text-[#a7150b] cursor-pointer" />
// //                     <Twitter className="w-5 h-5 hover:text-[#a7150b] cursor-pointer" />
// //                     <Mail className="w-5 h-5 hover:text-[#a7150b] cursor-pointer" />
// //                  </div>
// //               </motion.div>
// //             </div>
// //           </div>
// //         </div>
// //         <div className="container mx-auto px-4">
// //           <motion.div 
// //             initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
// //             className="text-center mb-16"
// //           >
// //             <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1a1a1a] mt-2">Board of Trustees</h2>
// //             <div className="w-24 h-1 bg-[#ffc107] mx-auto mt-6 rounded-full" />
// //           </motion.div>

// //           {/* Executive Trustees Grid (Top Officials) */}
// //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
// //              {[
// //                 { name: "Mrs. V. Lakshmi", role: "President / Executive Trustee", highProfile: true },
// //                 { name: "Mr. G.B. Anbalagan", role: "Vice President / Trustee", highProfile: true },
// //                 { name: "Mr. G.B. Senthil Kumar", role: "Vice President / Trustee", highProfile: true },
// //                 { name: "Mrs. B. Sridevi", role: "Treasurer / Trustee", highProfile: true },
// //                 { name: "Mrs. B. Umadevi", role: "Secretary / Trustee", highProfile: true },
// //              ].map((item, idx) => (
// //                 <motion.div
// //                   key={idx}
// //                   initial={{ opacity: 0, y: 20 }}
// //                   whileInView={{ opacity: 1, y: 0 }}
// //                   viewport={{ once: true }}
// //                   transition={{ delay: idx * 0.1 }}
// //                   whileHover={{ y: -5 }}
// //                   className="bg-[#fff8f0] p-6 rounded-2xl border border-[#ffc107]/30 shadow-sm hover:shadow-lg transition-all group flex items-start gap-4"
// //                 >
// //                   <div className="w-14 h-14 bg-[#ffc107] text-[#1a1a1a] rounded-full flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform">
// //                      <span className="font-bold text-xl">{item.name.charAt(4)}</span>
// //                   </div>
// //                   <div>
// //                     <h3 className="text-xl font-bold text-[#1a1a1a] group-hover:text-[#a7150b] transition-colors">
// //                         {item.name}
// //                     </h3>
// //                     <div className="inline-block mt-2 px-3 py-1 bg-white rounded-full text-xs font-bold uppercase tracking-wide text-[#a7150b] shadow-sm">
// //                         {item.role}
// //                     </div>
// //                   </div>
// //                 </motion.div>
// //              ))}
// //           </div>

// //           {/* General Trustees Grid */}
// //           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
// //              {[
// //                 { name: "Mr. R. Karunanithi", role: "Trustee" },
// //                 { name: "Mr. K. Arulmozhi", role: "Trustee" },
// //                 { name: "Mr. S.R. Raghuvir", role: "Trustee" },
// //                 { name: "Mr. A. Saiprasad", role: "Trustee" },
// //              ].map((item, idx) => (
// //                 <motion.div
// //                   key={idx + 5}
// //                   initial={{ opacity: 0, y: 20 }}
// //                   whileInView={{ opacity: 1, y: 0 }}
// //                   viewport={{ once: true }}
// //                   transition={{ delay: (idx + 5) * 0.1 }}
// //                   whileHover={{ y: -5 }}
// //                   className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-all group"
// //                 >
// //                   <div className="flex items-center gap-4 mb-3">
// //                     <div className="w-10 h-10 bg-stone-100 text-stone-500 rounded-full flex items-center justify-center shrink-0">
// //                        <span className="font-bold">{item.name.charAt(4)}</span>
// //                     </div>
// //                     <span className="text-xs font-bold text-slate-400 uppercase tracking-widest border border-slate-200 px-2 py-1 rounded">
// //                         {item.role}
// //                     </span>
// //                   </div>
// //                   <h4 className="text-lg font-bold text-[#1a1a1a] group-hover:text-[#a7150b] transition-colors">
// //                       {item.name}
// //                   </h4>
// //                 </motion.div>
// //              ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* ================= NEW: OFFICIAL CSR REGISTRATION SECTION ================= */}
// //       <section className="py-20 bg-[#1a1a1a] text-white">
// //         <div className="container mx-auto px-4">
// //           <div className="grid lg:grid-cols-2 gap-12 items-center">
// //              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
// //                 <div className="flex items-center gap-3 mb-4">
// //                    <Landmark className="w-8 h-8 text-[#ffc107]" />
// //                    <span className="text-[#ffc107] font-bold tracking-widest uppercase text-sm">Government of India</span>
// //                 </div>
// //                 <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Official CSR Registration</h2>
// //                 <p className="text-gray-300 text-lg mb-8 leading-relaxed">
// //                    Adhiparasakthi Charitable Medical Educational and Cultural Trust is officially registered with the Ministry of Corporate Affairs for undertaking CSR activities.
// //                 </p>
// //                 <div className="grid sm:grid-cols-2 gap-6 mb-8">
// //                    <div className="bg-white/10 p-4 rounded-xl border border-white/10">
// //                       <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Registration Number</p>
// //                       <p className="text-2xl font-mono font-bold text-[#ffc107]">CSR00002370</p>
// //                    </div>
// //                    <div className="bg-white/10 p-4 rounded-xl border border-white/10">
// //                       <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Date of Registration</p>
// //                       <p className="text-xl font-bold">16-04-2021</p>
// //                    </div>
// //                 </div>
// //                 <Button 
// //                    onClick={() => setIsCsrLetterModalOpen(true)}
// //                    className="bg-white text-[#1a1a1a] hover:bg-gray-100 rounded-full px-8 py-6 font-bold"
// //                 >
// //                    <FileText className="w-5 h-5 mr-2" /> View Official Approval Letter
// //                 </Button>
// //              </motion.div>

// //              <motion.div 
// //                initial={{ opacity: 0, scale: 0.9 }} 
// //                whileInView={{ opacity: 1, scale: 1 }} 
// //                viewport={{ once: true }}
// //                className="relative h-[400px] bg-white rounded-2xl overflow-hidden p-6 shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500"
// //              >
// //                 <div className="border-4 border-double border-gray-200 h-full w-full rounded-xl p-8 flex flex-col items-center justify-center text-center text-[#1a1a1a] bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
// //                    <Landmark className="w-16 h-16 text-[#1a1a1a] mb-4 opacity-20" />
// //                    <h3 className="font-bold text-xl uppercase mb-2">Government of India</h3>
// //                    <h4 className="font-bold text-sm uppercase mb-6 text-gray-600">Ministry of Corporate Affairs</h4>
// //                    <div className="w-16 h-1 bg-[#a7150b] mb-6"></div>
// //                    <p className="font-serif italic text-gray-600 mb-4">"This entity has been registered for undertaking CSR activities..."</p>
// //                    <p className="font-bold text-lg">Reg No: CSR00002370</p>
// //                 </div>
// //              </motion.div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ================= 4. MISSION & VISION (INTERACTIVE CARDS) ================= */}
// //       <section className="py-24 px-4 bg-[#1a1a1a] text-white relative overflow-hidden">
// //         {/* Background Pattern */}
// //         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-circle(circle, #ffffff 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        
// //         <div className="container mx-auto relative z-10">
// //           <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            
// //             {/* Mission Card */}
// //             <motion.div 
// //               whileHover="hover"
// //               variants={scaleOnHover}
// //               className="bg-gradient-to-br from-[#a7150b] to-[#800f07] p-10 md:p-14 rounded-3xl shadow-2xl relative overflow-hidden group border border-white/10"
// //             >
// //               <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform translate-x-10 -translate-y-10">
// //                 <Activity size={200} />
// //               </div>
// //               <div className="relative z-10">
// //                 <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8">
// //                   <Activity className="text-white w-8 h-8" />
// //                 </div>
// //                 <h3 className="text-3xl font-serif font-bold mb-4">Our Mission</h3>
// //                 <p className="text-white/80 text-lg leading-relaxed">
// //                   To provide accessible, high-quality healthcare and education to the underprivileged, ensuring that no individual is denied basic human rights due to financial instability.
// //                 </p>
// //               </div>
// //             </motion.div>

// //             {/* Vision Card */}
// //             <motion.div 
// //               whileHover="hover"
// //               variants={scaleOnHover}
// //               className="bg-gradient-to-br from-[#ffc107] to-[#e6ac00] p-10 md:p-14 rounded-3xl shadow-2xl relative overflow-hidden group border border-white/10"
// //             >
// //               <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform translate-x-10 -translate-y-10">
// //                 <Eye size={200} className="text-black" />
// //               </div>
// //               <div className="relative z-10">
// //                 <div className="w-14 h-14 bg-black/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8">
// //                   <Eye className="text-[#1a1a1a] w-8 h-8" />
// //                 </div>
// //                 <h3 className="text-3xl font-serif font-bold mb-4 text-[#1a1a1a]">Our Vision</h3>
// //                 <p className="text-[#1a1a1a]/80 text-lg leading-relaxed font-medium">
// //                   A society where spiritual values and modern advancement go hand in hand, fostering a community built on love, sacrifice, and mutual support.
// //                 </p>
// //               </div>
// //             </motion.div>

// //           </div>
// //         </div>
// //       </section>

// //       {/* ================= 5. DONATION 80G & FCRA (PRICING STYLE) ================= */}
// //       <section className="py-24 px-4 bg-stone-50" id="donate">
// //         <div className="container mx-auto max-w-6xl">
// //           <motion.div 
// //             initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
// //             className="text-center mb-16"
// //           >
// //             <span className="text-[#a7150b] font-bold tracking-widest uppercase text-sm">Tax Benefits</span>
// //             <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1a1a1a] mt-2 mb-6">Support & Save</h2>
// //             <p className="text-slate-500 max-w-2xl mx-auto text-lg">Your contribution not only changes lives but also offers you tax benefits under Indian Law. Choose your preferred method of donation.</p>
// //           </motion.div>

// //           <div className="grid md:grid-cols-2 gap-8">
// //             {/* Domestic Card */}
// //             <motion.div 
// //               whileHover={{ y: -8 }}
// //               className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-slate-100 relative overflow-hidden flex flex-col"
// //             >
// //               <div className="absolute top-0 left-0 w-full h-2 bg-[#a7150b]" />
// //               <div className="flex items-center gap-4 mb-8">
// //                 <div className="p-4 bg-red-50 rounded-2xl text-[#a7150b]">
// //                   <FileText className="w-8 h-8" />
// //                 </div>
// //                 <div>
// //                   <h3 className="text-2xl font-bold text-[#1a1a1a]">Domestic Donors</h3>
// //                   <span className="text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full">80G Tax Exempt</span>
// //                 </div>
// //               </div>
// //               <ul className="space-y-4 mb-10 flex-1">
// //                 {["50% Tax Exemption", "Instant e-Receipt", "Digital Certificate", "Quarterly Impact Reports"].map((item, i) => (
// //                    <li key={i} className="flex items-center gap-3 text-slate-600">
// //                      <CheckCircle2 className="w-5 h-5 text-[#a7150b]" /> {item}
// //                    </li>
// //                 ))}
// //               </ul>
// //               <div className="space-y-4">
// //                 <Link href="https://www.omsakthiamma.org/online_services/donations" className="block w-full">
// //                   <Button className="w-full bg-[#a7150b] hover:bg-[#8a0d08] text-white h-14 text-lg rounded-xl shadow-lg shadow-red-200">
// //                     Donate via UPI / NetBanking
// //                   </Button>
// //                 </Link>
// //                 <Button 
// //                   onClick={() => setIsDocModalOpen(true)}
// //                   variant="ghost" 
// //                   className="w-full text-slate-500 hover:text-[#a7150b] hover:bg-red-50"
// //                 >
// //                   View 80G Certificate
// //                 </Button>
// //               </div>
// //             </motion.div>

// //             {/* Foreign Card */}
// //             <motion.div 
// //               whileHover={{ y: -8 }}
// //               className="bg-[#1a1a1a] rounded-3xl p-8 lg:p-12 shadow-xl relative overflow-hidden flex flex-col text-white"
// //             >
// //               <div className="absolute top-0 left-0 w-full h-2 bg-[#ffc107]" />
// //               <div className="flex items-center gap-4 mb-8">
// //                 <div className="p-4 bg-white/10 rounded-2xl text-[#ffc107]">
// //                   <Globe className="w-8 h-8" />
// //                 </div>
// //                 <div>
// //                   <h3 className="text-2xl font-bold">Foreign Donors</h3>
// //                   <span className="text-sm font-medium text-[#1a1a1a] bg-[#ffc107] px-3 py-1 rounded-full">FCRA Approved</span>
// //                 </div>
// //               </div>
// //               <ul className="space-y-4 mb-10 flex-1">
// //                 {["Government Approved FCRA", "International Wire Transfer", "SWIFT Transfer Support", "Global Compliance"].map((item, i) => (
// //                    <li key={i} className="flex items-center gap-3 text-gray-300">
// //                      <CheckCircle2 className="w-5 h-5 text-[#ffc107]" /> {item}
// //                    </li>
// //                 ))}
// //               </ul>
// //               <div className="space-y-4">
// //                 {/* Trigger Button */}
// //                 <Button 
// //                     onClick={() => setIsOverseasModalOpen(true)}
// //                     className="w-full bg-[#ffc107] hover:bg-[#e6ac00] text-[#1a1a1a] font-bold h-14 text-lg rounded-xl"
// //                 >
// //                     View Overseas Donation Procedure
// //                 </Button>
// //                 {/* Trigger Button */}
// //                 <Button 
// //                     onClick={() => setIsFcraRenewalModalOpen(true)}
// //                     className="w-full bg-[#ffc107] hover:bg-[#e6ac00] text-[#1a1a1a] font-bold h-14 text-lg rounded-xl shadow-lg shadow-yellow-900/20"
// //                 >
// //                   View FCRA Renewal Certificate
// //                 </Button>
// //                 <Button 
// //                   variant="ghost" 
// //                   className="w-full text-gray-400 hover:text-white hover:bg-white/10"
// //                 >
// //                   Contact Support
// //                 </Button>
// //               </div>
// //             </motion.div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ================= 6. SIGNIFICANT AWARDS (UPDATED FROM IMAGE) ================= */}
// //       <section className="py-24 bg-white border-y border-stone-100">
// //         <div className="container mx-auto px-4">
// //           <motion.div 
// //             initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
// //             className="text-center mb-16"
// //           >
// //             <span className="text-[#a7150b] font-bold tracking-widest uppercase text-sm">Our Achievements</span>
// //             <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1a1a1a] mt-2">Significant Awards and Recognition</h2>
// //             <div className="w-24 h-1 bg-[#ffc107] mx-auto mt-6 rounded-full" />
// //           </motion.div>

// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
// //             {/* 1. Chief Minister Award */}
// //             <motion.div 
// //               whileHover={{ y: -8 }}
// //               className="group bg-stone-50 rounded-xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300"
// //             >
// //               <div className="relative h-64 overflow-hidden border-b border-stone-100">
// //                 <Image 
// //                   src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092337/2911191530526914-150x150_a5fseg.jpg" // Replace with actual crop
// //                   alt="Chief Minister Award 2015"
// //                   fill
// //                   className="object-cover group-hover:scale-105 transition-transform duration-500"
// //                 />
// //                 <div className="absolute top-2 right-2 bg-[#ffc107] text-black text-xs font-bold px-2 py-1 rounded">2015</div>
// //               </div>
// //               <div className="p-5">
// //                 <h4 className="font-bold text-[#1a1a1a] leading-tight mb-2 group-hover:text-[#a7150b] transition-colors">
// //                   State Govt Honor
// //                 </h4>
// //                 <p className="text-sm text-slate-600 leading-relaxed">
// //                   Honored by Chief Minister Ms. J. Jayalalitha on behalf of Govt of Tamil Nadu to the CEO of Adhiparasakthi Annai Illam.
// //                 </p>
// //               </div>
// //             </motion.div>

// //             {/* 2. Nirmal Gram Puraskar */}
// //             <motion.div 
// //               whileHover={{ y: -8 }}
// //               className="group bg-stone-50 rounded-xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300"
// //             >
// //               <div className="relative h-64 overflow-hidden border-b border-stone-100">
// //                  <Image 
// //                   src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092336/2911191530538674-150x150_semv32.jpg" 
// //                   alt="Nirmal Gram Puraskar"
// //                   fill
// //                   className="object-cover group-hover:scale-105 transition-transform duration-500"
// //                 />
// //               </div>
// //               <div className="p-5">
// //                 <h4 className="font-bold text-[#1a1a1a] leading-tight mb-2 group-hover:text-[#a7150b] transition-colors">
// //                   Nirmal Gram Puraskar
// //                 </h4>
// //                 <p className="text-sm text-slate-600 leading-relaxed">
// //                   National award for sanitation and hygiene excellence in rural development.
// //                 </p>
// //               </div>
// //             </motion.div>

// //             {/* 3. General Award */}
// //             <motion.div 
// //               whileHover={{ y: -8 }}
// //               className="group bg-stone-50 rounded-xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300"
// //             >
// //               <div className="relative h-64 overflow-hidden border-b border-stone-100">
// //                  <Image 
// //                   src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092336/2911191530539144-150x150_dyivy6.jpg" 
// //                   alt="Excellence Award"
// //                   fill
// //                   className="object-cover group-hover:scale-105 transition-transform duration-500"
// //                 />
// //               </div>
// //               <div className="p-5">
// //                 <h4 className="font-bold text-[#1a1a1a] leading-tight mb-2 group-hover:text-[#a7150b] transition-colors">
// //                   Certificate of Excellence
// //                 </h4>
// //                 <p className="text-sm text-slate-600 leading-relaxed">
// //                   Recognition for outstanding contribution to social welfare services.
// //                 </p>
// //               </div>
// //             </motion.div>

// //             {/* 4. Best Institution Award */}
// //             <motion.div 
// //               whileHover={{ y: -8 }}
// //               className="group bg-stone-50 rounded-xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300"
// //             >
// //               <div className="relative h-64 overflow-hidden border-b border-stone-100">
// //                  <Image 
// //                   src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092336/2911191530534191-150x150_lo2fc6.jpg" 
// //                   alt="Best Institution Award"
// //                   fill
// //                   className="object-cover group-hover:scale-105 transition-transform duration-500"
// //                 />
// //               </div>
// //               <div className="p-5">
// //                 <h4 className="font-bold text-[#1a1a1a] leading-tight mb-2 group-hover:text-[#a7150b] transition-colors">
// //                   Best Institution
// //                 </h4>
// //                 <p className="text-sm text-slate-600 leading-relaxed">
// //                   Awarded to Adhiparasakthi Annai Illam (Centre for Special Children).
// //                 </p>
// //               </div>
// //             </motion.div>

// //             {/* 5. Health Dept Appreciation */}
// //             <motion.div 
// //               whileHover={{ y: -8 }}
// //               className="group bg-stone-50 rounded-xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300"
// //             >
// //               <div className="relative h-64 overflow-hidden border-b border-stone-100">
// //                  <Image 
// //                   src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092338/2911191530529377-150x150_mz3ixh.jpg" 
// //                   alt="Health Dept Award 2019"
// //                   fill
// //                   className="object-cover group-hover:scale-105 transition-transform duration-500"
// //                 />
// //                  <div className="absolute top-2 right-2 bg-[#ffc107] text-black text-xs font-bold px-2 py-1 rounded">2019</div>
// //               </div>
// //               <div className="p-5">
// //                 <h4 className="font-bold text-[#1a1a1a] leading-tight mb-2 group-hover:text-[#a7150b] transition-colors">
// //                   Award of Appreciation
// //                 </h4>
// //                 <p className="text-sm text-slate-600 leading-relaxed">
// //                   Awarded by the Department of Health and Family Welfare for medical services.
// //                 </p>
// //               </div>
// //             </motion.div>

// //             {/* 6. Regional Recognition */}
// //             <motion.div 
// //               whileHover={{ y: -8 }}
// //               className="group bg-stone-50 rounded-xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300"
// //             >
// //               <div className="relative h-64 overflow-hidden border-b border-stone-100">
// //                  <Image 
// //                   src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092338/2911191530527252-150x150_ud5spj.jpg" 
// //                   alt="Regional Award"
// //                   fill
// //                   className="object-cover group-hover:scale-105 transition-transform duration-500"
// //                 />
// //               </div>
// //               <div className="p-5">
// //                 <h4 className="font-bold text-[#1a1a1a] leading-tight mb-2 group-hover:text-[#a7150b] transition-colors">
// //                   Regional Recognition
// //                 </h4>
// //                 <p className="text-sm text-slate-600 leading-relaxed">
// //                   Acknowledging our continuous support to local community development.
// //                 </p>
// //               </div>
// //             </motion.div>

// //             {/* 7. Government Certification */}
// //             <motion.div 
// //               whileHover={{ y: -8 }}
// //               className="group bg-stone-50 rounded-xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300"
// //             >
// //               <div className="relative h-64 overflow-hidden border-b border-stone-100">
// //                  <Image 
// //                   src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092337/2911191530521793-150x150_hqdtpk.jpg" 
// //                   alt="Government Certification"
// //                   fill
// //                   className="object-cover group-hover:scale-105 transition-transform duration-500"
// //                 />
// //               </div>
// //               <div className="p-5">
// //                 <h4 className="font-bold text-[#1a1a1a] leading-tight mb-2 group-hover:text-[#a7150b] transition-colors">
// //                   Official Certification
// //                 </h4>
// //                 <p className="text-sm text-slate-600 leading-relaxed">
// //                   Certification of merit from authorized government bodies.
// //                 </p>
// //               </div>
// //             </motion.div>

// //             {/* 8. Presidential Award (Founder) */}
// //             <motion.div 
// //               whileHover={{ y: -8 }}
// //               className="group bg-[#1a1a1a] rounded-xl overflow-hidden border border-stone-800 shadow-lg hover:shadow-2xl transition-all duration-300 lg:col-span-1 md:col-span-1"
// //             >
// //               <div className="relative h-64 overflow-hidden border-b border-stone-800">
// //                  <Image 
// //                   src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092338/awards-150x150_rtu0ni.png" 
// //                   alt="Founder receiving award from President"
// //                   fill
// //                   className="object-cover group-hover:scale-105 transition-transform duration-500"
// //                 />
// //                  <div className="absolute top-2 right-2 bg-[#ffc107] text-black text-xs font-bold px-2 py-1 rounded">Highest Honor</div>
// //               </div>
// //               <div className="p-5">
// //                 <h4 className="font-bold text-white leading-tight mb-2 group-hover:text-[#ffc107] transition-colors">
// //                   National Honor
// //                 </h4>
// //                 <p className="text-sm text-gray-400 leading-relaxed">
// //                   Founder President H.H. Bangaru Adigalar receiving the prestigious award from the President of India.
// //                 </p>
// //               </div>
// //             </motion.div>

// //           </div>
// //         </div>
// //       </section>
      
// //       {/* ================= 7. CSR PROJECTS (SEPARATE GALLERIES) ================= */}
// //       <section className="py-24 px-4 bg-stone-50">
// //         <div className="container mx-auto space-y-24">
          
// //           {/* ----- 7a. EYE CAMP SECTION (Title + 4 Images) ----- */}
// //           <div>
// //             <div className="text-center mb-10">
// //               <span className="text-[#ffc107] font-bold tracking-widest uppercase text-sm">CSR Initiative 01</span>
// //               <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1a1a1a] mt-2">Free Eye Camp</h2>
// //             </div>

// //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
// //               {[
// //                 "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop", // Eye Exam
// //                 "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop", // Glasses/Vision
// //                 "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop",  // Doctor/Analysis // Senior Patient
// //                 "https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=2047&auto=format&fit=crop"  // Eye Chart/Doctor
// //               ].map((imgSrc, idx) => (
// //                 <motion.div 
// //                   key={idx}
// //                   initial={{ opacity: 0, y: 20 }}
// //                   whileInView={{ opacity: 1, y: 0 }}
// //                   viewport={{ once: true }}
// //                   transition={{ delay: idx * 0.1 }}
// //                   whileHover={{ y: -10 }}
// //                   className="relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
// //                 >
// //                   <Image 
// //                     src={imgSrc} 
// //                     alt={`Eye Camp Image ${idx + 1}`} 
// //                     fill 
// //                     className="object-cover transition-transform duration-700 group-hover:scale-110" 
// //                   />
// //                   <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
// //                 </motion.div>
// //               ))}
// //             </div>
// //           </div>

// //           {/* ----- 7b. ENDOSCOPE PROJECT SECTION (Title + 4 Images) ----- */}
// //           <div>
// //             <div className="text-center mb-10">
// //               <span className="text-[#a7150b] font-bold tracking-widest uppercase text-sm">CSR Initiative 02</span>
// //               <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1a1a1a] mt-2">Endoscope Project</h2>
// //             </div>

// //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
// //               {[
// //                 // "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop", // Medical Tech
// //                 // "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2070&auto=format&fit=crop", // Equipment
// //                 // "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=2070&auto=format&fit=crop", // Surgery Room
// //                 // "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop"  // Doctor/Analysis
// //                 "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766093845/IMG-20231206-WA0012_hysx3l.jpg",
// //                 "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766093847/IMG-20231206-WA0054_nc25ip.jpg",
// //                 "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766093844/IMG-20231206-WA0048_poj4kh.jpg",
// //                 "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766093825/IMG-20231206-WA0018_ipotnj.jpg",
// //               ].map((imgSrc, idx) => (
// //                 <motion.div 
// //                   key={idx}
// //                   initial={{ opacity: 0, y: 20 }}
// //                   whileInView={{ opacity: 1, y: 0 }}
// //                   viewport={{ once: true }}
// //                   transition={{ delay: idx * 0.1 }}
// //                   whileHover={{ y: -10 }}
// //                   className="relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
// //                 >
// //                   <Image 
// //                     src={imgSrc} 
// //                     alt={`Endoscope Project Image ${idx + 1}`} 
// //                     fill 
// //                     className="object-cover transition-transform duration-700 group-hover:scale-110" 
// //                   />
// //                   <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
// //                 </motion.div>
// //               ))}
// //             </div>
// //           </div>

// //         </div>
// //       </section>

// //       {/* ================= 8. CSR INQUIRY (FLOATING CARD) ================= */}
// //       <section className="py-24 px-4 bg-[#ffc107] relative">
// //         {/* Decorative Circles */}
// //         <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full blur-2xl" />
// //         <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#a7150b]/20 rounded-full blur-3xl" />

// //         <div className="container mx-auto max-w-5xl relative z-10">
// //           <Card className="border-none shadow-2xl rounded-3xl overflow-hidden">
// //             <div className="grid md:grid-cols-5">
              
// //               {/* Form Side */}
// //               <div className="md:col-span-3 p-8 md:p-12 bg-white">
// //                 <div className="mb-8">
// //                   <h3 className="text-3xl font-serif font-bold text-[#1a1a1a]">Partner with Us</h3>
// //                   <p className="text-slate-500 mt-2">Interested in a CSR collaboration? Let's connect.</p>
// //                 </div>

// //                 {formStatus === 'success' ? (
// //                   <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-64 flex flex-col items-center justify-center text-center">
// //                     <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
// //                       <CheckCircle2 className="w-8 h-8 text-green-600" />
// //                     </div>
// //                     <h4 className="text-xl font-bold text-slate-800">Inquiry Sent!</h4>
// //                     <p className="text-slate-500">We will get back to you within 24 hours.</p>
// //                   </motion.div>
// //                 ) : (
// //                   <form onSubmit={handleFormSubmit} className="space-y-5">
// //                     <div className="grid grid-cols-2 gap-4">
// //                       <div className="space-y-2">
// //                         <Label htmlFor="name">Full Name</Label>
// //                         <Input id="name" required placeholder="John Doe" className="bg-slate-50 border-slate-200 h-11 focus:ring-[#a7150b]" />
// //                       </div>
// //                       <div className="space-y-2">
// //                         <Label htmlFor="company">Company</Label>
// //                         <Input id="company" required placeholder="Tech Corp" className="bg-slate-50 border-slate-200 h-11 focus:ring-[#a7150b]" />
// //                       </div>
// //                     </div>

// //                     <div className="grid grid-cols-2 gap-4">
// //                       <div className="space-y-2">
// //                         <Label htmlFor="email">Email</Label>
// //                         <Input id="email" type="email" required placeholder="john@example.com" className="bg-slate-50 border-slate-200 h-11 focus:ring-[#a7150b]" />
// //                       </div>
// //                       <div className="space-y-2">
// //                         <Label htmlFor="phone">Phone</Label>
// //                         <Input id="phone" type="tel" required placeholder="+91..." className="bg-slate-50 border-slate-200 h-11 focus:ring-[#a7150b]" />
// //                       </div>
// //                     </div>

// //                     <div className="space-y-2">
// //                       <Label htmlFor="project">Interested Project</Label>
// //                       <Select>
// //                         <SelectTrigger className="bg-slate-50 border-slate-200 h-11">
// //                           <SelectValue placeholder="Select a project" />
// //                         </SelectTrigger>
// //                         <SelectContent>
// //                           <SelectItem value="eye-camp">Eye Camp Initiative</SelectItem>
// //                           <SelectItem value="endoscope">Endoscope Equipment</SelectItem>
// //                           <SelectItem value="general">General CSR</SelectItem>
// //                         </SelectContent>
// //                       </Select>
// //                     </div>

// //                     <div className="space-y-2">
// //                       <Label htmlFor="remarks">Remarks</Label>
// //                       <Textarea id="remarks" placeholder="Any specific requirements?" className="bg-slate-50 border-slate-200 resize-none focus:ring-[#a7150b]" rows={3} />
// //                     </div>

// //                     <Button type="submit" disabled={formStatus === 'submitting'} className="w-full bg-[#a7150b] hover:bg-[#8a0d08] text-white font-bold h-12 text-lg rounded-xl">
// //                       {formStatus === 'submitting' ? 'Sending...' : 'Submit Inquiry'}
// //                     </Button>
// //                   </form>
// //                 )}
// //               </div>

// //               {/* Info Side */}
// //               <div className="md:col-span-2 bg-[#1a1a1a] p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
// //                 <div className="absolute top-0 right-0 p-6 opacity-5">
// //                    <Building2 size={200} />
// //                 </div>
// //                 <div>
// //                    <h4 className="text-xl font-bold mb-6 text-[#ffc107]">Contact Information</h4>
// //                    <div className="space-y-6">
// //                       <div className="flex items-start gap-4">
// //                         <Mail className="w-6 h-6 text-[#ffc107] shrink-0" />
// //                         <div>
// //                           <p className="text-xs text-gray-400 uppercase tracking-wider">Email Us</p>
// //                           <p className="font-medium">contact@ASPWCTtrust.org</p>
// //                         </div>
// //                       </div>
// //                       <div className="flex items-start gap-4">
// //                         <Phone className="w-6 h-6 text-[#ffc107] shrink-0" />
// //                         <div>
// //                           <p className="text-xs text-gray-400 uppercase tracking-wider">Call Us</p>
// //                           <p className="font-medium">+91 98765 43210</p>
// //                         </div>
// //                       </div>
// //                       <div className="flex items-start gap-4">
// //                         <Building2 className="w-6 h-6 text-[#ffc107] shrink-0" />
// //                         <div>
// //                           <p className="text-xs text-gray-400 uppercase tracking-wider">Visit Us</p>
// //                           <p className="font-medium text-sm leading-relaxed text-gray-300">
// //                             123, Temple Road, Adhiparasakthi Nagar, <br/>
// //                             Melmaruvathur, Tamil Nadu.
// //                           </p>
// //                         </div>
// //                       </div>
// //                    </div>
// //                 </div>
// //                 <div className="mt-8 pt-8 border-t border-white/10">
// //                   <p className="text-xs text-gray-400">
// //                     By submitting this form, you agree to our privacy policy regarding data collection.
// //                   </p>
// //                 </div>
// //               </div>

// //             </div>
// //           </Card>
// //         </div>
// //       </section>

// //       {/* ================= MODAL: 80G DOCUMENT ================= */}
// //       <AnimatePresence>
// //         {isDocModalOpen && (
// //           <>
// //             <motion.div 
// //               initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
// //               onClick={() => setIsDocModalOpen(false)}
// //               className="fixed inset-0 bg-black/60 z-50 backdrop-blur-md"
// //             />
// //             <motion.div 
// //               initial={{ opacity: 0, scale: 0.9, y: 20 }} 
// //               animate={{ opacity: 1, scale: 1, y: 0 }} 
// //               exit={{ opacity: 0, scale: 0.9, y: 20 }}
// //               transition={{ type: "spring", damping: 25, stiffness: 300 }}
// //               className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-lg px-4"
// //             >
// //               <div className="bg-white rounded-3xl shadow-2xl overflow-hidden relative">
// //                 <button 
// //                   onClick={() => setIsDocModalOpen(false)} 
// //                   className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-10"
// //                 >
// //                   <X className="w-5 h-5 text-gray-600" />
// //                 </button>
                
// //                 <div className="p-8 pb-0">
// //                   <h3 className="text-2xl font-serif font-bold text-[#1a1a1a]">80G Certificate Preview</h3>
// //                   <p className="text-slate-500 mt-2">Valid for Financial Year 2025-2026</p>
// //                 </div>

// //                 <div className="p-8 flex flex-col items-center justify-center bg-stone-50 m-8 rounded-2xl border-2 border-dashed border-gray-300 min-h-[250px] group cursor-pointer hover:bg-stone-100 transition-colors">
// //                   <FileText className="w-16 h-16 text-gray-300 group-hover:text-[#a7150b] transition-colors mb-4" />
// //                   <p className="text-sm font-medium text-gray-500">Preview Unavailable in Demo</p>
// //                 </div>

// //                 <div className="p-6 bg-gray-50 border-t flex justify-end gap-3">
// //                    <Button variant="outline" onClick={() => setIsDocModalOpen(false)}>Close</Button>
// //                    <Button className="bg-[#a7150b] text-white hover:bg-[#8a0d08]">
// //                      <Download className="w-4 h-4 mr-2" /> Download PDF
// //                    </Button>
// //                 </div>
// //               </div>
// //             </motion.div>
// //           </>
// //         )}
// //       </AnimatePresence>
// //       {/* ================= MODAL: CSR/FCRA APPROVAL ================= */}
// // {/* ================= MODAL: OFFICIAL CSR APPROVAL LETTER ================= */}
// //       <AnimatePresence>
// //         {isFcraModalOpen && (
// //           <>
// //             <motion.div 
// //               initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
// //               onClick={() => setIsFcraModalOpen(false)}
// //               className="fixed inset-0 bg-black/70 z-50 backdrop-blur-sm"
// //             />
// //             <motion.div 
// //               initial={{ opacity: 0, scale: 0.95, y: 20 }} 
// //               animate={{ opacity: 1, scale: 1, y: 0 }} 
// //               exit={{ opacity: 0, scale: 0.95, y: 20 }}
// //               className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-3xl px-4 h-[85vh] flex flex-col"
// //             >
// //               <div className="bg-white rounded-xl shadow-2xl relative flex flex-col h-full overflow-hidden">
                 
// //                  {/* Modal Header with Close Button */}
// //                  <div className="flex justify-between items-center p-4 border-b bg-gray-50">
// //                     <h3 className="font-bold text-gray-700">Official Approval Letter</h3>
// //                     <button 
// //                       onClick={() => setIsFcraModalOpen(false)} 
// //                       className="p-2 hover:bg-gray-200 rounded-full transition-colors"
// //                     >
// //                       <X className="w-5 h-5 text-gray-500" />
// //                     </button>
// //                  </div>

// //                  {/* Scrollable Letter Content */}
// //                  <div className="flex-1 overflow-y-auto p-8 md:p-12 font-serif text-[#1a1a1a]">
                    
// //                     {/* Govt Header */}
// //                     <div className="text-center mb-8 space-y-1">
// //                         <div className="flex justify-center mb-2">
// //                            {/* Using Landmark icon as placeholder for Ashoka Pillar */}
// //                            <Landmark className="w-12 h-12 text-[#1a1a1a]" />
// //                         </div>
// //                         <h4 className="font-bold text-sm uppercase tracking-wider">Satyameva Jayate</h4>
// //                         <h2 className="font-bold text-xl uppercase">Government of India</h2>
// //                         <h3 className="font-bold text-lg uppercase">Ministry of Corporate Affairs</h3>
// //                         <p className="font-semibold text-sm uppercase">Office of the Registrar of Companies</p>
// //                     </div>

// //                     {/* Date */}
// //                     <div className="text-right mb-8 font-semibold">
// //                         Dated: 16-04-2021
// //                     </div>

// //                     {/* Warning Note */}
// //                     <div className="mb-8 font-bold text-xs uppercase border border-black p-2 text-center">
// //                         Note: This letter is only an approval for registration of the entities for undertaking CSR activities.
// //                     </div>

// //                     {/* Recipient */}
// //                     <div className="mb-6 space-y-1">
// //                         <p className="font-bold">To,</p>
// //                         <p className="font-bold uppercase">ADHIPARASAKTHI CHARITABLE MEDICAL EDUCATIONAL AND CULTURAL TRUST</p>
// //                         <p className="w-2/3">No.1, GST Road,, Melmaruvathur, Kanchepuram, TN07, TN, 603319</p>
// //                     </div>

// //                     {/* PAN */}
// //                     <div className="mb-6">
// //                         <p><span className="font-bold">PAN:</span> AAATA0722H</p>
// //                     </div>

// //                     {/* Subject & Reference */}
// //                     <div className="mb-6 space-y-2">
// //                         <p><span className="font-bold">Subject:</span> In Reference to Registration of Entities for undertaking CSR activities</p>
// //                         <p><span className="font-bold">Reference:</span> Your application dated 16-04-2021 (SRN-T14318323)</p>
// //                     </div>

// //                     {/* Body */}
// //                     <div className="mb-8 space-y-4 text-justify leading-relaxed">
// //                         <p>Sir/Madam,</p>
// //                         <p>
// //                             With reference to the above, it is informed that the entity has been registered for undertaking CSR activities and the Registration number is <span className="font-bold bg-yellow-100 px-1">CSR00002370</span>.
// //                         </p>
// //                         <p>
// //                             Please refer the registration number for any further communication.
// //                         </p>
// //                     </div>

// //                     {/* Signature */}
// //                     <div className="mt-12 flex flex-col items-end">
// //                         <div className="text-right space-y-1">
// //                             <p className="font-bold text-gray-400 text-xs uppercase mb-4">[Digital Signature]</p>
// //                             <p className="font-bold uppercase">DS DE MINISTRY OF CORPORATE AFFAIRS (GOVT OF INDIA)</p>
// //                             <p className="font-bold">Registrar of Companies</p>
// //                             <p className="font-bold">ROC-DELHI</p>
// //                         </div>
// //                     </div>

// //                     {/* Footer Note */}
// //                     <div className="mt-12 pt-4 border-t border-gray-300 text-xs text-gray-500 italic text-center">
// //                         Note: The corresponding form has been approved and this letter has been digitally signed through a system generated digital signature.
// //                     </div>
// //                  </div>
                 
// //                  {/* Modal Actions */}
// //                  <div className="p-4 bg-gray-50 border-t flex justify-end gap-3">
// //                     <Button variant="outline" onClick={() => setIsFcraModalOpen(false)}>Close</Button>
// //                     <Button className="bg-[#1a1a1a] text-white hover:bg-black">
// //                         <Download className="w-4 h-4 mr-2" /> Download Original PDF
// //                     </Button>
// //                  </div>

// //               </div>
// //             </motion.div>
// //           </>
// //         )}
// //       </AnimatePresence>

// //       {/* ================= MODAL: FCRA RENEWAL CERTIFICATE ================= */}
// //       <AnimatePresence>
// //         {isFcraRenewalModalOpen && (
// //           <>
// //             <motion.div 
// //               initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
// //               onClick={() => setIsFcraRenewalModalOpen(false)}
// //               className="fixed inset-0 bg-black/70 z-50 backdrop-blur-sm"
// //             />
// //             <motion.div 
// //               initial={{ opacity: 0, scale: 0.95, y: 20 }} 
// //               animate={{ opacity: 1, scale: 1, y: 0 }} 
// //               exit={{ opacity: 0, scale: 0.95, y: 20 }}
// //               className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-4xl px-4 h-[90vh] flex flex-col"
// //             >
// //               <div className="bg-white rounded-xl shadow-2xl relative flex flex-col h-full overflow-hidden font-serif text-slate-900">
                 
// //                  {/* Modal Header */}
// //                  <div className="flex justify-between items-center p-4 border-b bg-stone-50">
// //                     <h3 className="font-bold text-stone-700 font-sans">FCRA Renewal Certificate</h3>
// //                     <button 
// //                       onClick={() => setIsFcraRenewalModalOpen(false)} 
// //                       className="p-2 hover:bg-stone-200 rounded-full transition-colors"
// //                     >
// //                       <X className="w-5 h-5 text-stone-500" />
// //                     </button>
// //                  </div>

// //                  {/* Scrollable Document Content */}
// //                  <div className="flex-1 overflow-y-auto p-8 md:p-12 bg-white relative">
// //                     {/* Watermark */}
// //                     <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
// //                         <Landmark className="w-[500px] h-[500px]" />
// //                     </div>

// //                     <div className="relative z-10 max-w-3xl mx-auto">
                        
// //                         {/* Document Top Meta */}
// //                         <div className="flex justify-between text-sm font-bold mb-8">
// //                             <p>No. 0300148372016</p>
// //                             <p>Dated: 29-10-2016</p>
// //                         </div>

// //                         {/* Govt Header */}
// //                         <div className="text-center mb-10 space-y-1">
// //                             <div className="flex justify-center mb-4">
// //                                <Landmark className="w-16 h-16 text-[#1a1a1a]" />
// //                             </div>
// //                             <h2 className="font-bold text-2xl uppercase tracking-wide">Government of India</h2>
// //                             <h3 className="font-bold text-xl">Ministry of Home Affairs</h3>
// //                             <p className="font-semibold text-lg">Foreigners Division (FCRA Wing)</p>
// //                             <p className="text-sm text-slate-600">NDCC-II Building, Jai Singh Road, New Delhi-110001</p>
// //                         </div>

// //                         {/* Recipient */}
// //                         <div className="mb-8 p-6 bg-stone-50 rounded-lg border border-stone-100">
// //                             <p className="font-bold mb-1">To,</p>
// //                             <p className="font-bold">The Chief Functionary,</p>
// //                             <p className="font-bold uppercase text-[#a7150b]">Adhiparasakthi Charitable Medical Education And Cultural Trust</p>
// //                             <p className="mt-2 text-sm leading-relaxed text-slate-700">
// //                                 GST ROAD MELMARUVATHUR, CHEYYUR TALUK KANCHEEPURAM DISTRICT,<br/>
// //                                 Tamil Nadu, Madurai, 603319
// //                             </p>
// //                         </div>

// //                         {/* Subject */}
// //                         <div className="mb-8">
// //                             <p><span className="font-bold">Subject:</span> Renewal of Registration under Foreign Contribution (Regulation) Act, 2010</p>
// //                         </div>

// //                         {/* Main Approval Text */}
// //                         <div className="mb-8 text-justify leading-relaxed">
// //                             <p className="mb-4">Sir/Madam,</p>
// //                             <p>
// //                                 With reference to your application dated 26-05-2016 seeking renewal of registration under the Foreign Contribution (Regulation) Act, 2010, I am directed to convey the approval of competent authority for renewal of registration of your Association in terms of the provisions contained in Section 16 of Foreign Contribution (Regulation) Act, 2010 read with Rule 12 of Foreign Contribution (Regulation) Rules, 2011 as amended from time to time, as follows:-
// //                             </p>
// //                         </div>

// //                         {/* Key Data Points Box */}
// //                         <div className="grid md:grid-cols-2 gap-6 mb-10">
// //                             <div className="bg-yellow-50 p-5 rounded-lg border border-yellow-100">
// //                                 <p className="text-xs uppercase tracking-widest text-yellow-800 font-bold mb-1">Registration Number</p>
// //                                 <p className="text-3xl font-mono font-bold text-[#1a1a1a]">075940349</p>
// //                             </div>
// //                             <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
// //                                 <p className="text-xs uppercase tracking-widest text-blue-800 font-bold mb-1">Nature of Association</p>
// //                                 <p className="text-xl font-bold text-[#1a1a1a]">Cultural, Educational, Social</p>
// //                             </div>
// //                         </div>

// //                         {/* Bank Details (Crucial Clause 2) */}
// //                         <div className="mb-8">
// //                             <h4 className="font-bold mb-2">2. Designated Bank Account</h4>
// //                             <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-[#a7150b]">
// //                                 <p className="leading-relaxed">
// //                                     The association shall receive foreign contribution only in its designated/exclusive bank account:
// //                                 </p>
// //                                 <div className="mt-4 grid gap-2 font-mono text-sm">
// //                                     <p><span className="font-bold text-slate-500 w-32 inline-block">Account No:</span> 3258728116</p>
// //                                     <p><span className="font-bold text-slate-500 w-32 inline-block">Bank:</span> Central Bank of India</p>
// //                                     <p><span className="font-bold text-slate-500 w-32 inline-block">Branch:</span> GST ROAD MELMARUVATHUR, CHEYYUR TK</p>
// //                                 </div>
// //                             </div>
// //                         </div>

// //                         {/* Detailed Terms (Clauses 3-12) */}
// //                         <div className="space-y-4 text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-8">
// //                             <p><span className="font-bold text-black">3.</span> You are advised to furnish intimations online within the prescribed time to the Central Government of the amounts of each foreign contribution received by you, the source and the manner in which the foreign contribution was utilised.</p>
                            
// //                             <p><span className="font-bold text-black">4.</span> The association cannot bring out any publication (registered under PRB Act, 1867) or act as correspondent, columnist, editor, printer or publisher of a registered newspaper or engage in the production or broadcast of audio news.</p>
                            
// //                             <p><span className="font-bold text-black">5.</span> You are requested to note the provisions of Section 7 of FC(R) Act, 2010 and Rule 24 of FC(R) Rules, 2011.</p>
                            
// //                             <p><span className="font-bold text-black">6.</span> Physical inspection of the activities done by the Association may be carried out at any time by this Ministry.</p>
                            
// //                             <p><span className="font-bold text-black">8.</span> This renewed certificate is valid for a period of five years with effect from <span className="font-bold text-black">01-11-2016</span>.</p>
// //                         </div>

// //                         {/* Signature Block */}
// //                         <div className="mt-16 flex flex-col items-end">
// //                             <div className="text-right">
// //                                 <p className="font-bold text-xl text-[#1a1a1a]">B K Singh</p>
// //                                 <p className="font-semibold text-slate-600">Under Secretary</p>
// //                                 <p className="text-sm text-slate-500">Tel. 01123438245</p>
// //                                 <div className="mt-4 text-xs text-slate-400 border-t border-slate-200 pt-2">
// //                                     Digitally signed by BRAJESH KUMAR SINGH<br/>
// //                                     Date: 2016.10.29 14:48:08 IST
// //                                 </div>
// //                             </div>
// //                         </div>

// //                     </div>
// //                  </div>
                 
// //                  {/* Modal Actions */}
// //                  <div className="p-4 bg-stone-50 border-t flex justify-end gap-3 font-sans">
// //                     <Button variant="outline" onClick={() => setIsFcraRenewalModalOpen(false)}>Close</Button>
// //                     <Button className="bg-[#1a1a1a] text-white hover:bg-black">
// //                         <Download className="w-4 h-4 mr-2" /> Download Official PDF
// //                     </Button>
// //                  </div>

// //               </div>
// //             </motion.div>
// //           </>
// //         )}
// //       </AnimatePresence>

// //       {/* ================= MODAL 1: 80G TAX BENEFITS & CERTIFICATE ================= */}
// //       <AnimatePresence>
// //         {isDocModalOpen && (
// //           <>
// //             <motion.div 
// //               initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
// //               onClick={() => setIsDocModalOpen(false)}
// //               className="fixed inset-0 bg-black/70 z-50 backdrop-blur-sm"
// //             />
// //             <motion.div 
// //               initial={{ opacity: 0, scale: 0.95, y: 20 }} 
// //               animate={{ opacity: 1, scale: 1, y: 0 }} 
// //               exit={{ opacity: 0, scale: 0.95, y: 20 }}
// //               className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-3xl px-4 h-[90vh] flex flex-col"
// //             >
// //               <div className="bg-white rounded-xl shadow-2xl relative flex flex-col h-full overflow-hidden font-sans">
                
// //                 {/* Header */}
// //                 <div className="flex justify-between items-center p-5 border-b bg-stone-50">
// //                    <div className="flex items-center gap-3">
// //                       <div className="p-2 bg-red-100 rounded-lg text-[#a7150b]">
// //                          <FileText className="w-6 h-6" />
// //                       </div>
// //                       <div>
// //                         <h3 className="font-bold text-xl text-[#1a1a1a]">Tax Deduction Benefits</h3>
// //                         <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">Under Section 80G</p>
// //                       </div>
// //                    </div>
// //                    <button 
// //                       onClick={() => setIsDocModalOpen(false)} 
// //                       className="p-2 hover:bg-stone-200 rounded-full transition-colors"
// //                    >
// //                       <X className="w-6 h-6 text-stone-500" />
// //                    </button>
// //                 </div>

// //                 {/* Scrollable Content */}
// //                 <div className="flex-1 overflow-y-auto p-8 text-slate-700 leading-relaxed">
                   
// //                    {/* Intro */}
// //                    <div className="mb-8">
// //                       <h4 className="text-2xl font-serif font-bold text-[#a7150b] mb-4">Understanding Tax Deduction Under Section 80G</h4>
// //                       <p className="mb-4">
// //                         The Income Tax Act's Section 80G was created to promote charitable giving. Donations made by taxpayers to authorized charity organizations and trusts are eligible for tax deductions on the amount given.
// //                       </p>
// //                       <div className="bg-green-50 border border-green-200 p-4 rounded-lg flex gap-3 items-start">
// //                          <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
// //                          <p className="text-sm font-medium text-green-800">
// //                            ASPWCT Trust is fully registered under Section 80G, making your donations eligible for tax benefits.
// //                          </p>
// //                       </div>
// //                    </div>

// //                    {/* Eligible Donations */}
// //                    <div className="mb-8">
// //                       <h5 className="font-bold text-lg text-[#1a1a1a] mb-3">Eligible Donations Guidelines</h5>
// //                       <ul className="space-y-3 list-disc pl-5 marker:text-[#ffc107]">
// //                          <li>Donations to specified funds and charitable institutions qualify for deductions under Section 80G.</li>
// //                          <li>It is essential to verify the organization's registration under Section 80G before making a contribution.</li>
// //                          <li className="font-bold text-[#a7150b]">
// //                            Contributions made in cash exceeding Rs. 2,000 are not eligible for tax deduction benefits. Hence, it is advisable to make donations through banking channels or cheques.
// //                          </li>
// //                       </ul>
// //                    </div>

// //                    {/* Limits & Claims Grid */}
// //                    <div className="grid md:grid-cols-2 gap-6 mb-8">
// //                       <div className="bg-stone-50 p-6 rounded-xl border border-stone-200">
// //                          <h5 className="font-bold text-[#1a1a1a] mb-3 flex items-center gap-2">
// //                             <Activity className="w-4 h-4 text-[#ffc107]" /> Limits on Tax Deductions
// //                          </h5>
// //                          <ul className="text-sm space-y-2">
// //                             <li>The total deduction claimed under Section 80G cannot exceed 10% of the taxpayer's gross total income.</li>
// //                             <li>For certain donations, the limit is restricted to 100% of the donated amount (or 50% depending on the category).</li>
// //                          </ul>
// //                       </div>
// //                       <div className="bg-stone-50 p-6 rounded-xl border border-stone-200">
// //                          <h5 className="font-bold text-[#1a1a1a] mb-3 flex items-center gap-2">
// //                             <FileText className="w-4 h-4 text-[#a7150b]" /> Claiming Deduction
// //                          </h5>
// //                          <ul className="text-sm space-y-2">
// //                             <li>Obtain a receipt specifying the amount donated, the registration number under Section 80G, and the organization's PAN details.</li>
// //                             <li>While filing income tax returns, accurately report the donation details.</li>
// //                          </ul>
// //                       </div>
// //                    </div>

// //                    {/* Conclusion */}
// //                    <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-[#ffc107]">
// //                       <h5 className="font-bold text-[#1a1a1a] mb-2">Why Donate?</h5>
// //                       <p className="text-sm">
// //                         Donations under Section 80G not only allow individuals to contribute to noble causes but also provide substantial tax benefits. It fosters a culture of giving back to society and supporting the underprivileged.
// //                       </p>
// //                    </div>
// //                 </div>

// //                 {/* Footer Actions */}
// //                 <div className="p-4 bg-stone-50 border-t flex flex-col sm:flex-row justify-between items-center gap-4">
// //                    <p className="text-xs text-slate-400">
// //                       ASPWCT Trust PAN: <span className="font-mono font-bold text-slate-600">AAATA0722H</span>
// //                    </p>
// //                    <div className="flex gap-3 w-full sm:w-auto">
// //                       <Button variant="outline" onClick={() => setIsDocModalOpen(false)} className="flex-1 sm:flex-none">Close</Button>
// //                       <Button className="bg-[#a7150b] text-white hover:bg-[#8a0d08] flex-1 sm:flex-none">
// //                          <Download className="w-4 h-4 mr-2" /> Download 80G Certificate
// //                       </Button>
// //                    </div>
// //                 </div>

// //               </div>
// //             </motion.div>
// //           </>
// //         )}
// //       </AnimatePresence>
// //       {/* ================= MODAL: OVERSEAS DONATION PROCEDURE ================= */}
// //       <AnimatePresence>
// //         {isOverseasModalOpen && (
// //           <>
// //             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsOverseasModalOpen(false)} className="fixed inset-0 bg-black/70 z-50 backdrop-blur-sm" />
// //             <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-3xl px-4 h-[90vh] flex flex-col">
// //               <div className="bg-white rounded-xl shadow-2xl relative flex flex-col h-full overflow-hidden font-sans text-slate-900">
// //                  <div className="flex justify-between items-center p-5 border-b bg-stone-50">
// //                     <h3 className="font-bold text-xl text-[#1a1a1a]">Overseas Donation Procedure</h3>
// //                     <button onClick={() => setIsOverseasModalOpen(false)} className="p-2 hover:bg-stone-200 rounded-full"><X className="w-5 h-5 text-stone-500" /></button>
// //                  </div>
// //                  <div className="flex-1 overflow-y-auto p-8">
// //                     <div className="bg-yellow-50 border-l-4 border-[#ffc107] p-4 mb-6 text-sm">
// //                         <p className="font-bold mb-1 text-yellow-800">Important Note:</p>
// //                         <p>Donations can be done only through Wire Transfer to the specified Bank Account. UPI/NEFT/RTGS from Indian banks are restricted.</p>
// //                     </div>

// //                     <h4 className="font-bold text-lg mb-4 flex items-center gap-2"><Building2 className="w-5 h-5 text-[#a7150b]" /> Wire Transfer Details</h4>
// //                     <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 space-y-3 font-mono text-sm mb-8">
// //                         <div className="flex flex-col sm:flex-row sm:justify-between border-b border-slate-200 pb-2">
// //                             <span className="text-slate-500 font-sans">Account Name</span>
// //                             <span className="font-bold text-right">Adhiparasakthi Charitable Medical Educational and Cultural Trust</span>
// //                         </div>
// //                         <div className="flex justify-between border-b border-slate-200 pb-2">
// //                             <span className="text-slate-500 font-sans">Account No</span>
// //                             <span className="font-bold text-lg">40209740361</span>
// //                         </div>
// //                         <div className="flex justify-between border-b border-slate-200 pb-2">
// //                             <span className="text-slate-500 font-sans">Bank Name</span>
// //                             <span className="font-bold">State Bank of India</span>
// //                         </div>
// //                         <div className="flex justify-between border-b border-slate-200 pb-2">
// //                             <span className="text-slate-500 font-sans">Branch</span>
// //                             <span className="font-bold">New Delhi Main Branch (Code: 00691)</span>
// //                         </div>
// //                         <div className="flex justify-between pt-1">
// //                             <span className="text-slate-500 font-sans">SWIFT Code</span>
// //                             <span className="font-bold bg-yellow-100 px-2 rounded">SBININBB104</span>
// //                         </div>
// //                     </div>

// //                     <h4 className="font-bold text-lg mb-4 flex items-center gap-2"><Mail className="w-5 h-5 text-[#a7150b]" /> Mandatory Reporting</h4>
// //                     <p className="text-sm text-slate-600 mb-4">On successful transfer, kindly share the following details + <strong>Passport Copy (Front & Back)</strong> to <span className="font-bold text-[#1a1a1a]">ASPWCTtrust@gmail.com</span>:</p>
// //                     <ul className="grid grid-cols-2 gap-2 text-sm font-medium text-slate-700 bg-slate-50 p-4 rounded-lg">
// //                         <li>1. Name of Donor</li>
// //                         <li>2. Donor Address</li>
// //                         <li>3. Purpose of Remittance</li>
// //                         <li>4. Country of Donor</li>
// //                         <li>5. Currency & Amount</li>
// //                         <li>6. ID Proof (Passport)</li>
// //                     </ul>
// //                  </div>
// //                  <div className="p-4 bg-stone-50 border-t flex justify-end gap-3">
// //                     <Button variant="outline" onClick={() => setIsOverseasModalOpen(false)}>Close</Button>
// //                     <Button className="bg-[#1a1a1a] text-white">Copy Bank Details</Button>
// //                  </div>
// //               </div>
// //             </motion.div>
// //           </>
// //         )}
// //       </AnimatePresence>
// //       {/* ================= MODAL: CSR OFFICIAL LETTER ================= */}
// //       <AnimatePresence>
// //         {isCsrLetterModalOpen && (
// //           <>
// //             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsCsrLetterModalOpen(false)} className="fixed inset-0 bg-black/70 z-50 backdrop-blur-sm" />
// //             <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-3xl px-4 h-[85vh] flex flex-col">
// //               <div className="bg-white rounded-xl shadow-2xl relative flex flex-col h-full overflow-hidden font-serif">
// //                  <div className="flex justify-between items-center p-4 border-b bg-gray-50">
// //                     <h3 className="font-bold text-gray-700 font-sans">Official CSR Approval</h3>
// //                     <button onClick={() => setIsCsrLetterModalOpen(false)} className="p-2 hover:bg-gray-200 rounded-full"><X className="w-5 h-5 text-gray-500" /></button>
// //                  </div>
// //                  <div className="flex-1 overflow-y-auto p-12 text-[#1a1a1a]">
// //                     <div className="text-center mb-10">
// //                         <Landmark className="w-12 h-12 mx-auto mb-2 text-[#1a1a1a]" />
// //                         <h4 className="font-bold text-sm uppercase">Satyameva Jayate</h4>
// //                         <h2 className="font-bold text-xl uppercase">Government of India</h2>
// //                         <h3 className="font-bold text-lg uppercase">Ministry of Corporate Affairs</h3>
// //                         <p className="font-semibold text-sm uppercase">Office of the Registrar of Companies</p>
// //                     </div>
                    
// //                     <div className="flex justify-between items-end mb-8 border-b pb-8">
// //                          <div className="text-sm font-sans text-gray-500">
// //                             <p>To,</p>
// //                             <p className="font-bold text-black uppercase w-64">Adhiparasakthi Charitable Medical Educational and Cultural Trust</p>
// //                             <p>No.1, GST Road, Melmaruvathur</p>
// //                          </div>
// //                          <div className="text-right">
// //                              <p className="font-bold">Dated: 16-04-2021</p>
// //                              <p>PAN: AAATA0722H</p>
// //                          </div>
// //                     </div>

// //                     <div className="mb-8">
// //                         <p className="font-bold mb-2">Subject: Registration of Entities for undertaking CSR activities</p>
// //                         <p className="text-sm text-gray-600">Ref: Application SRN-T14318323</p>
// //                     </div>

// //                     <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-8">
// //                         <p className="text-lg leading-relaxed">
// //                             "It is informed that the entity has been registered for undertaking CSR activities and the Registration number is <span className="font-bold bg-yellow-200 px-2 rounded">CSR00002370</span>."
// //                         </p>
// //                     </div>

// //                     <div className="mt-12 flex justify-end">
// //                         <div className="text-right">
// //                             <p className="font-bold text-gray-400 text-xs uppercase mb-2">[Digitally Signed]</p>
// //                             <p className="font-bold uppercase">Registrar of Companies</p>
// //                             <p className="font-bold">ROC-DELHI</p>
// //                         </div>
// //                     </div>
// //                  </div>
// //                  <div className="p-4 bg-gray-50 border-t flex justify-end font-sans">
// //                     <Button variant="outline" onClick={() => setIsCsrLetterModalOpen(false)}>Close</Button>
// //                  </div>
// //               </div>
// //             </motion.div>
// //           </>
// //         )}
// //       </AnimatePresence>

      

// //     </main>
// //   )
// // }

// "use client"

// import type React from "react"
// import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
// import Image from "next/image"
// import Link from "next/link"
// import { useState } from "react"
// import {
//   Heart,
//   Calendar,
//   CheckCircle2,
//   Facebook,
//   Twitter,
//   Mail,
//   Landmark,
//   Activity,
//   Eye,
//   FileText,
//   Globe,
//   Phone,
//   Building2,
//   Download,
//   X,
//   Clock,
// } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// // Animation variants
// const fadeInUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// }

// const staggerContainer = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.15, delayChildren: 0.3 },
//   },
// }

// const scaleOnHover = {
//   hover: { scale: 1.02, transition: { duration: 0.3 } },
// }

// export default function Home() {
//   const [isDocModalOpen, setIsDocModalOpen] = useState(false)
//   const [isFcraRenewalModalOpen, setIsFcraRenewalModalOpen] = useState(false)
//   const [isOverseasModalOpen, setIsOverseasModalOpen] = useState(false)
//   const [isCsrLetterModalOpen, setIsCsrLetterModalOpen] = useState(false)
//   const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle")

//   const { scrollY } = useScroll()
//   const y1 = useTransform(scrollY, [0, 500], [0, 150])
//   // const [formStatus, setFormStatus] = useState("idle"); // idle, submitting, success
//   const [selectedProject, setSelectedProject] = useState("");

//   const handleFormSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setFormStatus("submitting");
//     // Simulate API call
//     setTimeout(() => {
//       setFormStatus("success");
//     }, 1500);
//   };

//   // const handleFormSubmit = (e: React.FormEvent) => {
//   //   e.preventDefault()
//   //   setFormStatus("submitting")
//   //   setTimeout(() => setFormStatus("success"), 2000)
//   // }
  

//   return (
//     <main className="bg-background overflow-x-hidden">
//       {/* Hero Section with Parallax */}
//       <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
//         <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
//           <Image
//             src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766091901/dental-hospital_cd4gda.jpg"
//             alt="Hero Background"
//             fill
//             className="object-cover scale-110"
//             priority
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
//         </motion.div>

//         <div className="relative z-10 container mx-auto px-4 pt-20">
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={staggerContainer}
//             className="max-w-5xl mx-auto text-center"
//           >
//             <motion.div variants={fadeInUp} className="inline-block mb-6">
//               <span className="px-5 py-2.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-[#ffc107] text-sm font-bold tracking-widest uppercase shadow-lg">
//                 Est. 1978 • Registered Trust
//               </span>
//             </motion.div>

//             <motion.h1
//               variants={fadeInUp}
//               className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-[1.1] drop-shadow-2xl text-balance"
//             >
//               Healing Hands.{" "}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffc107] via-yellow-300 to-[#ffc107] animate-gradient">
//                 Compassionate Hearts.
//               </span>
//             </motion.h1>

//             <motion.p
//               variants={fadeInUp}
//               className="text-lg md:text-2xl text-gray-200 mb-12 leading-relaxed font-light max-w-3xl mx-auto text-balance"
//             >
//               Adhiparasakthi Charitable Medical Educational & Cultural Trust (ASPWCT) dedicated to serving humanity
//               through holistic healthcare and education.
//             </motion.p>

//             <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-8">
//               <Link href="https://www.omsakthiamma.org/online_services/donations" className="w-full sm:w-auto group">
//                 <Button className="w-full sm:w-auto bg-[#a7150b] hover:bg-[#d91e11] text-white rounded-full px-10 py-7 text-lg font-bold shadow-[0_0_40px_-10px_rgba(167,21,11,0.6)] transition-all hover:scale-105 hover:shadow-[0_0_60px_-10px_rgba(167,21,11,0.8)]">
//                   <Heart className="mr-3 w-5 h-5 fill-current group-hover:animate-pulse" />
//                   Donate Now
//                 </Button>
//               </Link>
//               <Link href="#about" className="w-full sm:w-auto">
//                 <Button
//                   variant="outline"
//                   className="w-full sm:w-auto border-2 border-white/40 text-white hover:bg-white hover:text-black rounded-full px-10 py-7 text-lg font-bold backdrop-blur-sm transition-all hover:scale-105 bg-white/5"
//                 >
//                   Explore Our Work
//                 </Button>
//               </Link>
//             </motion.div>
//           </motion.div>
//         </div>

//         {/* Scroll Indicator */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 2 }}
//           className="absolute bottom-10 left-1/2 -translate-x-1/2"
//         >
//           <motion.div
//             animate={{ y: [0, 10, 0] }}
//             transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
//             className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2"
//           >
//             <motion.div className="w-1 h-2 bg-white rounded-full" />
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* Upcoming Events Banner */}
//       {/* <section className="py-4 bg-[#a7150b] text-white relative overflow-hidden">
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvc3ZnPg==')] opacity-30" />
//         <div className="container mx-auto px-4 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="flex items-center justify-center gap-4 flex-wrap"
//           >
//             <Calendar className="w-5 h-5 animate-pulse" />
//             <p className="font-bold text-sm md:text-base">
//               Upcoming Festival: Annual Aadi Pooram Celebration - July 25, 2026
//             </p>
//             <Link href="/trust-activities">
//               <Button
//                 size="sm"
//                 variant="outline"
//                 className="border-2 border-white text-white hover:bg-white hover:text-[#a7150b] rounded-full font-bold text-xs bg-transparent transition-all"
//               >
//                 View Details
//               </Button>
//             </Link>
//           </motion.div>
//         </div>
//       </section> */}

//       {/* About Section */}
//       <section id="about" className="py-24 md:py-32 px-4 container mx-auto">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-100px" }}
//             variants={staggerContainer}
//           >
//             <motion.span
//               variants={fadeInUp}
//               className="inline-block px-4 py-2 bg-[#a7150b]/10 text-[#a7150b] rounded-full text-xs font-bold tracking-widest uppercase mb-4"
//             >
//               About The Trust
//             </motion.span>
//             <motion.h2
//               variants={fadeInUp}
//               className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 leading-tight text-balance"
//             >
//               A Legacy of Service{" "}
//               <span className="relative inline-block">
//                 <span className="relative z-10">Since 1978</span>
//                 <span className="absolute bottom-2 left-0 right-0 h-3 bg-[#ffc107] -z-0" />
//               </span>
//             </motion.h2>

//             <motion.div variants={fadeInUp} className="text-muted-foreground text-lg leading-relaxed mb-8 space-y-4">
//               <p>
//                 M/s Adhiparasakthi Charitable Medical Educational and Cultural Trust (ASPWCT Trust), as the name suggests
//                 has dedicated itself to serve the people in the areas of:
//               </p>

//               <div className="grid sm:grid-cols-2 gap-3 py-4">
//                 {["Charity", "Medical", "Educational", "Cultural Activities"].map((item) => (
//                   <div key={item} className="flex items-center gap-3 group">
//                     <div className="w-10 h-10 rounded-full bg-[#a7150b]/10 group-hover:bg-[#a7150b] transition-colors flex items-center justify-center">
//                       <CheckCircle2 className="text-[#a7150b] group-hover:text-white w-5 h-5 transition-colors" />
//                     </div>
//                     <span className="font-semibold text-foreground">{item}</span>
//                   </div>
//                 ))}
//               </div>

//               <p>
//                 This trust is a non-profitable organization which was founded by{" "}
//                 <strong className="text-foreground">H.H. Bangaru Adigalar</strong> in the year 1978 with a small corpus
//                 fund and with few cents of land in Melmaruvathur (It was then a small village situated about 92 kms from
//                 the Chennai city and about 70 Km to Puducherry).
//               </p>
//             </motion.div>

//             <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-6">
//               <div className="group hover:scale-105 transition-transform">
//                 <Card className="p-6 border-l-4 border-[#ffc107] bg-gradient-to-br from-[#ffc107]/5 to-transparent hover:shadow-lg transition-shadow">
//                   <h4 className="text-4xl font-bold text-foreground mb-1">1978</h4>
//                   <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Established</p>
//                 </Card>
//               </div>
//               <div className="group hover:scale-105 transition-transform">
//                 <Card className="p-6 border-l-4 border-[#a7150b] bg-gradient-to-br from-[#a7150b]/5 to-transparent hover:shadow-lg transition-shadow">
//                   <h4 className="text-2xl font-bold text-foreground mb-1">Melmaruvathur</h4>
//                   <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Headquarters</p>
//                 </Card>
//               </div>
//             </motion.div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="relative group"
//           >
//             <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
//               <Image
//                 src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop"
//                 alt="Medical Service"
//                 width={700}
//                 height={500}
//                 className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
//               />
//             </div>
//             <div className="absolute -top-10 -right-10 w-72 h-72 bg-[#ffc107]/20 rounded-full blur-3xl -z-10 group-hover:bg-[#ffc107]/30 transition-colors" />
//             <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-[#a7150b]/10 rounded-full blur-3xl -z-10 group-hover:bg-[#a7150b]/20 transition-colors" />
//           </motion.div>
//         </div>
//       </section>

//       {/* Founders & Trustees */}
//       <section className="py-24 bg-muted/30">
//         <div className="container mx-auto px-4">
//           {/* Founders */}
//           <div className="mb-24">
//             <div className="text-center mb-16">
//               <motion.span
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 className="inline-block px-4 py-2 bg-[#a7150b]/10 text-[#a7150b] rounded-full text-xs font-bold tracking-widest uppercase mb-4"
//               >
//                 Leadership
//               </motion.span>
//               <motion.h2
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.1 }}
//                 className="text-3xl md:text-5xl font-serif font-bold text-foreground"
//               >
//                 Founder & Vice
//               </motion.h2>
//             </div>

//             <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
//               {[
//                 {
//                   name: "His Holiness Bangaru Adigalar",
//                   role: "Founder",
//                   image:
//                     "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766091903/3952Founder-President_k3xqz3.png",
//                   bgColor: "from-[#ffc107]/10 to-[#ffc107]/5",
//                   borderColor: "border-[#ffc107]",
//                 },
//                 {
//                   name: "Smt. Lakshmi Bangaru Adigalar",
//                   role: "President",
//                   image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766091895/Vice-President_z3lp84.jpg",
//                   bgColor: "from-[#a7150b]/10 to-[#a7150b]/5",
//                   borderColor: "border-[#a7150b]",
//                 },
//               ].map((person, idx) => (
//                 <motion.div
//                   key={person.name}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: idx * 0.2 }}
//                   whileHover={{ y: -8 }}
//                 >
//                   <Card
//                     className={`p-8 text-center border-2 ${person.borderColor} bg-gradient-to-br ${person.bgColor} hover:shadow-2xl transition-all group`}
//                   >
//                     <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-background shadow-xl mb-6 relative group-hover:scale-105 transition-transform">
//                       <Image src={person.image || "/placeholder.svg"} alt={person.name} fill className="object-cover" />
//                     </div>
//                     <h3 className="text-2xl font-serif font-bold text-foreground mb-2">{person.name}</h3>
//                     <p className="text-[#a7150b] font-bold uppercase tracking-widest text-sm mb-6">{person.role}</p>
//                     <div className="flex justify-center gap-4">
//                       {[Facebook, Twitter, Mail].map((Icon, i) => (
//                         <button
//                           key={i}
//                           className="w-10 h-10 rounded-full bg-background hover:bg-[#a7150b] hover:text-white transition-all flex items-center justify-center group/icon"
//                         >
//                           <Icon className="w-5 h-5" />
//                         </button>
//                       ))}
//                     </div>
//                   </Card>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           {/* Board of Trustees */}
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Board of Trustees</h2>
//             <div className="w-24 h-1.5 bg-[#ffc107] mx-auto rounded-full" />
//           </motion.div>

//           {/* Executive Trustees */}
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 max-w-6xl mx-auto">
//             {[
//               { name: "Mrs. V. Lakshmi", role: "President / Executive Trustee" },
//               { name: "Mr. G.B. Anbalagan", role: "Vice President / Trustee" },
//               { name: "Mr. G.B. Senthil Kumar", role: "Vice President / Trustee" },
//               { name: "Mrs. B. Sridevi", role: "Treasurer / Trustee" },
//               { name: "Mrs. B. Umadevi", role: "Secretary / Trustee" },
//             ].map((trustee, idx) => (
//               <motion.div
//                 key={trustee.name}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1 }}
//                 whileHover={{ y: -5 }}
//               >
//                 <Card className="p-6 hover:shadow-xl transition-all group bg-gradient-to-br from-[#ffc107]/5 to-transparent border-2 border-transparent hover:border-[#ffc107]/30">
//                   <div className="flex items-start gap-4">
//                     <div className="w-14 h-14 bg-[#ffc107] text-foreground rounded-full flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform font-bold text-xl">
//                       {trustee.name.split(" ")[1][0]}
//                     </div>
//                     <div className="flex-1">
//                       <h3 className="text-lg font-bold text-foreground group-hover:text-[#a7150b] transition-colors mb-2">
//                         {trustee.name}
//                       </h3>
//                       <span className="inline-block px-3 py-1 bg-[#a7150b]/10 text-[#a7150b] rounded-full text-xs font-bold uppercase tracking-wide">
//                         {trustee.role}
//                       </span>
//                     </div>
//                   </div>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>

//           {/* General Trustees */}
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
//             {[
//               { name: "Mr. R. Karunanithi", role: "Trustee" },
//               { name: "Mr. K. Arulmozhi", role: "Trustee" },
//               { name: "Mr. S.R. Raghuvir", role: "Trustee" },
//               { name: "Mr. A. Saiprasad", role: "Trustee" },
//             ].map((trustee, idx) => (
//               <motion.div
//                 key={trustee.name}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: (idx + 5) * 0.1 }}
//                 whileHover={{ y: -5 }}
//               >
//                 <Card className="p-6 hover:shadow-lg transition-all group border-2">
//                   <div className="flex flex-col gap-3">
//                     <div className="flex items-center justify-between">
//                       <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center font-bold text-muted-foreground">
//                         {trustee.name.split(" ")[1][0]}
//                       </div>
//                       <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest border border-border px-2 py-1 rounded">
//                         {trustee.role}
//                       </span>
//                     </div>
//                     <h4 className="text-base font-bold text-foreground group-hover:text-[#a7150b] transition-colors">
//                       {trustee.name}
//                     </h4>
//                   </div>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CSR Registration Section */}
//       <section className="py-20 bg-foreground text-background">
//         <div className="container mx-auto px-4">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
//               <div className="flex items-center gap-3 mb-4">
//                 <Landmark className="w-8 h-8 text-[#ffc107]" />
//                 <span className="text-[#ffc107] font-bold tracking-widest uppercase text-sm">Government of India</span>
//               </div>
//               <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Official CSR Registration</h2>
//               <p className="text-background/80 text-lg mb-8 leading-relaxed">
//                 Adhiparasakthi Charitable Medical Educational and Cultural Trust is officially registered with the
//                 Ministry of Corporate Affairs for undertaking CSR activities.
//               </p>
//               <div className="grid sm:grid-cols-2 gap-6 mb-8">
//                 <div className="bg-white/10 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
//                   <p className="text-xs text-background/60 uppercase tracking-widest mb-1">Registration Number</p>
//                   <p className="text-2xl font-mono font-bold text-[#ffc107]">CSR00002370</p>
//                 </div>
//                 <div className="bg-white/10 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
//                   <p className="text-xs text-background/60 uppercase tracking-widest mb-1">Date of Registration</p>
//                   <p className="text-xl font-bold">16-04-2021</p>
//                 </div>
//               </div>
//               <Button
//                 onClick={() => setIsCsrLetterModalOpen(true)}
//                 className="bg-background text-foreground hover:bg-background/90 rounded-full px-8 py-6 font-bold"
//               >
//                 <FileText className="w-5 h-5 mr-2" /> View Official Approval Letter
//               </Button>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               className="relative h-[400px] bg-background rounded-2xl overflow-hidden p-6 shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500"
//             >
//               <div className="border-4 border-double border-border h-full w-full rounded-xl p-8 flex flex-col items-center justify-center text-center text-foreground bg-muted/20">
//                 <Landmark className="w-16 h-16 text-muted-foreground mb-4 opacity-20" />
//                 <h3 className="font-bold text-xl uppercase mb-2">Government of India</h3>
//                 <h4 className="font-bold text-sm uppercase mb-6 text-muted-foreground">
//                   Ministry of Corporate Affairs
//                 </h4>
//                 <div className="w-16 h-1 bg-[#a7150b] mb-6" />
//                 <p className="font-serif italic text-muted-foreground mb-4">
//                   "This entity has been registered for undertaking CSR activities..."
//                 </p>
//                 <p className="font-bold text-lg">Reg No: CSR00002370</p>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Mission & Vision */}
//       <section className="py-24 px-4 bg-muted relative overflow-hidden">
//         <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgwLDAsMCwwLjMpIi8+PC9zdmc+')] " />

//         <div className="container mx-auto relative z-10">
//           <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
//             {/* Mission Card */}
//             <motion.div
//               whileHover="hover"
//               variants={scaleOnHover}
//               className="bg-gradient-to-br from-[#a7150b] to-[#800f07] p-10 md:p-14 rounded-3xl shadow-2xl relative overflow-hidden group border border-white/10"
//             >
//               <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform translate-x-10 -translate-y-10">
//                 <Activity size={200} />
//               </div>
//               <div className="relative z-10">
//                 <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8">
//                   <Activity className="text-white w-8 h-8" />
//                 </div>
//                 <h3 className="text-3xl font-serif font-bold mb-4 text-white">Our Mission</h3>
//                 <p className="text-white/80 text-lg leading-relaxed">
//                   To provide accessible, high-quality healthcare and education to the underprivileged, ensuring that no
//                   individual is denied basic human rights due to financial instability.
//                 </p>
//               </div>
//             </motion.div>

//             {/* Vision Card */}
//             <motion.div
//               whileHover="hover"
//               variants={scaleOnHover}
//               className="bg-gradient-to-br from-[#ffc107] to-[#e6ac00] p-10 md:p-14 rounded-3xl shadow-2xl relative overflow-hidden group border border-white/10"
//             >
//               <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform translate-x-10 -translate-y-10">
//                 <Eye size={200} className="text-black" />
//               </div>
//               <div className="relative z-10">
//                 <div className="w-14 h-14 bg-black/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8">
//                   <Eye className="text-foreground w-8 h-8" />
//                 </div>
//                 <h3 className="text-3xl font-serif font-bold mb-4 text-foreground">Our Vision</h3>
//                 <p className="text-foreground/80 text-lg leading-relaxed font-medium">
//                   A society where spiritual values and modern advancement go hand in hand, fostering a community built
//                   on love, sacrifice, and mutual support.
//                 </p>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Awards Section */}
//       <section className="py-24 bg-background border-y border-border">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//             className="text-center mb-16"
//           >
//             <span className="inline-block px-4 py-2 bg-[#a7150b]/10 text-[#a7150b] rounded-full text-xs font-bold tracking-widest uppercase mb-4">
//               Our Achievements
//             </span>
//             <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
//               Significant Awards and Recognition
//             </h2>
//             <div className="w-24 h-1.5 bg-[#ffc107] mx-auto mt-6 rounded-full" />
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               {
//                 img: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092337/2911191530526914-150x150_a5fseg.jpg",
//                 title: "State Govt Honor",
//                 desc: "Honored by Chief Minister Ms. J. Jayalalitha on behalf of Govt of Tamil Nadu to the CEO of Adhiparasakthi Annai Illam.",
//                 year: "2015",
//               },
//               {
//                 img: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092336/2911191530538674-150x150_semv32.jpg",
//                 title: "Nirmal Gram Puraskar",
//                 desc: "National award for sanitation and hygiene excellence in rural development.",
//               },
//               {
//                 img: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092336/2911191530539144-150x150_dyivy6.jpg",
//                 title: "Certificate of Excellence",
//                 desc: "Recognition for outstanding contribution to social welfare services.",
//               },
//               {
//                 img: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092336/2911191530534191-150x150_lo2fc6.jpg",
//                 title: "Best Institution",
//                 desc: "Awarded to Adhiparasakthi Annai Illam (Centre for Special Children).",
//               },
//               {
//                 img: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092338/2911191530529377-150x150_mz3ixh.jpg",
//                 title: "Award of Appreciation",
//                 desc: "Awarded by the Department of Health and Family Welfare for medical services.",
//                 year: "2019",
//               },
//               {
//                 img: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092338/2911191530527252-150x150_ud5spj.jpg",
//                 title: "Regional Recognition",
//                 desc: "Acknowledging our continuous support to local community development.",
//               },
//               {
//                 img: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092337/2911191530521793-150x150_hqdtpk.jpg",
//                 title: "Official Certification",
//                 desc: "Certification of merit from authorized government bodies.",
//               },
//               {
//                 img: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092338/awards-150x150_rtu0ni.png",
//                 title: "National Honor",
//                 desc: "Founder H.H. Bangaru Adigalar receiving the prestigious award from the President of India.",
//                 highlight: true,
//                 badge: "Highest Honor",
//               },
//             ].map((award, idx) => (
//               <motion.div
//                 key={idx}
//                 whileHover={{ y: -8 }}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1 }}
//                 className="group bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300"
//               >
//                 <div className="relative h-64 overflow-hidden border-b border-border">
//                   <Image
//                     src={award.img || "/placeholder.svg"}
//                     alt={award.title}
//                     fill
//                     className="object-fill group-hover:scale-105 transition-transform duration-500"
//                   />
//                   {award.year && (
//                     <div className="absolute top-2 right-2 bg-[#ffc107] text-foreground text-xs font-bold px-2 py-1 rounded">
//                       {award.year}
//                     </div>
//                   )}
//                 </div>
//                 <div className="p-5">
//                   <h4 className="font-bold text-foreground leading-tight mb-2 group-hover:text-[#a7150b] transition-colors">
//                     {award.title}
//                   </h4>
//                   <p className="text-sm text-muted-foreground leading-relaxed">{award.desc}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Donation Section */}
//       <section className="py-24 px-4 bg-muted/30" id="donate">
//         <div className="container mx-auto max-w-6xl">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//             className="text-center mb-16"
//           >
//             <span className="inline-block px-4 py-2 bg-[#a7150b]/10 text-[#a7150b] rounded-full text-xs font-bold tracking-widest uppercase mb-4">
//               Tax Benefits
//             </span>
//             <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Support & Save</h2>
//             <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
//               Your contribution not only changes lives but also offers you tax benefits under Indian Law.
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {/* Domestic Card */}
//             <motion.div
//               whileHover={{ y: -8 }}
//               className="bg-card rounded-3xl p-8 lg:p-12 shadow-xl border border-border relative overflow-hidden flex flex-col"
//             >
//               <div className="absolute top-0 left-0 w-full h-2 bg-[#a7150b]" />
//               <div className="flex items-center gap-4 mb-8">
//                 <div className="p-4 bg-red-50 rounded-2xl text-[#a7150b]">
//                   <FileText className="w-8 h-8" />
//                 </div>
//                 <div>
//                   <h3 className="text-2xl font-bold text-foreground">Domestic Donors</h3>
//                   <span className="text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full">
//                     80G Tax Exempt
//                   </span>
//                 </div>
//               </div>
//               <ul className="space-y-4 mb-10 flex-1">
//                 {["50% Tax Exemption", "Instant e-Receipt", "Digital Certificate", "Quarterly Impact Reports"].map(
//                   (item, i) => (
//                     <li key={i} className="flex items-center gap-3 text-muted-foreground">
//                       <CheckCircle2 className="w-5 h-5 text-[#a7150b] shrink-0" /> {item}
//                     </li>
//                   ),
//                 )}
//               </ul>
//               <div className="space-y-4">
//                 <Link href="https://www.omsakthiamma.org/online_services/donations" className="block w-full">
//                   <Button className="w-full bg-[#a7150b] hover:bg-[#8a0d08] text-white h-14 text-lg rounded-xl shadow-lg shadow-red-200">
//                     Donate via UPI / NetBanking
//                   </Button>
//                 </Link>
//                 <Button
//                   onClick={() => setIsDocModalOpen(true)}
//                   variant="ghost"
//                   className="w-full text-muted-foreground hover:text-[#a7150b] hover:bg-red-50"
//                 >
//                   View 80G Certificate
//                 </Button>
//               </div>
//             </motion.div>

//             {/* Foreign Card */}
//             <motion.div
//               whileHover={{ y: -8 }}
//               className="bg-foreground rounded-3xl p-8 lg:p-12 shadow-xl relative overflow-hidden flex flex-col text-background"
//             >
//               <div className="absolute top-0 left-0 w-full h-2 bg-[#ffc107]" />
//               <div className="flex items-center gap-4 mb-8">
//                 <div className="p-4 bg-white/10 rounded-2xl text-[#ffc107]">
//                   <Globe className="w-8 h-8" />
//                 </div>
//                 <div>
//                   <h3 className="text-2xl font-bold">Foreign Donors</h3>
//                   <span className="text-sm font-medium text-foreground bg-[#ffc107] px-3 py-1 rounded-full">
//                     FCRA Approved
//                   </span>
//                 </div>
//               </div>
//               <ul className="space-y-4 mb-10 flex-1">
//                 {[
//                   "Government Approved FCRA",
//                   "International Wire Transfer",
//                   "SWIFT Transfer Support",
//                   "Global Compliance",
//                 ].map((item, i) => (
//                   <li key={i} className="flex items-center gap-3 text-background/80">
//                     <CheckCircle2 className="w-5 h-5 text-[#ffc107] shrink-0" /> {item}
//                   </li>
//                 ))}
//               </ul>
//               <div className="space-y-4">
//                 <Button
//                   onClick={() => setIsOverseasModalOpen(true)}
//                   className="w-full bg-[#ffc107] hover:bg-[#e6ac00] text-foreground font-bold h-14 text-lg rounded-xl shadow-lg shadow-yellow-900/20"
//                 >
//                   View Overseas Donation Procedure
//                 </Button>
//                 <Button
//                   onClick={() => setIsFcraRenewalModalOpen(true)}
//                   variant="ghost"
//                   className="w-full text-background/80 hover:text-background hover:bg-white/10"
//                 >
//                   View FCRA Renewal Certificate
//                 </Button>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* CSR Projects */}
//       <section className="py-24 px-4 bg-background">
//         <div className="container mx-auto space-y-24">
//           {/* Eye Camp */}
//           <div>
//             <div className="text-center mb-10">
//               <span className="inline-block px-4 py-2 bg-[#ffc107]/10 text-[#ffc107] rounded-full text-xs font-bold tracking-widest uppercase mb-4">
//                 CSR Initiative 01
//               </span>
//               <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Free Eye Camp</h2>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {[
//                 "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop",
//                 "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop",
//                 "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop",
//                 "https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=2047&auto=format&fit=crop",
//               ].map((imgSrc, idx) => (
//                 <motion.div
//                   key={idx}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: idx * 0.1 }}
//                   whileHover={{ y: -10 }}
//                   className="relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
//                 >
//                   <Image
//                     src={imgSrc || "/placeholder.svg"}
//                     alt={`Eye Camp Image ${idx + 1}`}
//                     fill
//                     className="object-cover transition-transform duration-700 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           {/* Endoscope Project */}
//           <div>
//             <div className="text-center mb-10">
//               <span className="inline-block px-4 py-2 bg-[#a7150b]/10 text-[#a7150b] rounded-full text-xs font-bold tracking-widest uppercase mb-4">
//                 CSR Initiative 02
//               </span>
//               <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Endoscope Project</h2>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {[
//                 "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766093845/IMG-20231206-WA0012_hysx3l.jpg",
//                 "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766093847/IMG-20231206-WA0054_nc25ip.jpg",
//                 "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766093844/IMG-20231206-WA0048_poj4kh.jpg",
//                 "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766093825/IMG-20231206-WA0018_ipotnj.jpg",
//               ].map((imgSrc, idx) => (
//                 <motion.div
//                   key={idx}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: idx * 0.1 }}
//                   whileHover={{ y: -10 }}
//                   className="relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
//                 >
//                   <Image
//                     src={imgSrc || "/placeholder.svg"}
//                     alt={`Endoscope Project Image ${idx + 1}`}
//                     fill
//                     className="object-fill transition-transform duration-700 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CSR Inquiry Form */}
//       <section className="py-24 px-4 bg-[#ffc107] relative">
//       <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full blur-2xl" />
//       <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#a7150b]/20 rounded-full blur-3xl" />

//       <div className="container mx-auto max-w-5xl relative z-10">
//         <Card className="border-none shadow-2xl rounded-3xl overflow-hidden">
//           <div className="grid md:grid-cols-5">
//             {/* Form Side */}
//             <div className="md:col-span-3 p-8 md:p-12 bg-background">
//               <div className="mb-8">
//                 <h3 className="text-3xl font-serif font-bold text-foreground">
//                   Partner with Us
//                 </h3>
//                 <p className="text-muted-foreground mt-2">
//                   Interested in a CSR collaboration? Let's connect.
//                 </p>
//               </div>

//               {formStatus === "success" ? (
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   className="h-64 flex flex-col items-center justify-center text-center"
//                 >
//                   <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
//                     <CheckCircle2 className="w-8 h-8 text-green-600" />
//                   </div>
//                   <h4 className="text-xl font-bold text-foreground">
//                     Inquiry Sent!
//                   </h4>
//                   <p className="text-muted-foreground">
//                     We will get back to you within 24 hours.
//                   </p>
//                 </motion.div>
//               ) : (
//                 <form onSubmit={handleFormSubmit} className="space-y-5">
//                   <div className="grid grid-cols-2 gap-4">
//                     <div className="space-y-2">
//                       <Label htmlFor="name">Full Name</Label>
//                       <Input
//                         id="name"
//                         required
//                         placeholder="John Doe"
//                         className="bg-muted border-border h-11 focus:ring-[#a7150b]"
//                       />
//                     </div>
//                     <div className="space-y-2">
//                       <Label htmlFor="company">Company</Label>
//                       <Input
//                         id="company"
//                         required
//                         placeholder="Tech Corp"
//                         className="bg-muted border-border h-11 focus:ring-[#a7150b]"
//                       />
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-2 gap-4">
//                     <div className="space-y-2">
//                       <Label htmlFor="email">Email</Label>
//                       <Input
//                         id="email"
//                         type="email"
//                         required
//                         placeholder="john@example.com"
//                         className="bg-muted border-border h-11 focus:ring-[#a7150b]"
//                       />
//                     </div>
//                     <div className="space-y-2">
//                       <Label htmlFor="phone">Phone</Label>
//                       <Input
//                         id="phone"
//                         type="tel"
//                         required
//                         placeholder="+91..."
//                         className="bg-muted border-border h-11 focus:ring-[#a7150b]"
//                       />
//                     </div>
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="project">Interested Project</Label>
//                     <Select onValueChange={(value) => setSelectedProject(value)}>
//                       <SelectTrigger className="bg-muted border-border h-11">
//                         <SelectValue placeholder="Select a project" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         <SelectItem value="education">EDUCATION</SelectItem>
//                         <SelectItem value="eye-camp">EYE CAMP</SelectItem>
//                         <SelectItem value="education-medical">
//                           EDUCATION MEDICAL
//                         </SelectItem>
//                         <SelectItem value="feeding-poor">
//                           FEEDING POOR
//                         </SelectItem>
//                         <SelectItem value="others">OTHERS</SelectItem>
//                       </SelectContent>
//                     </Select>
//                   </div>

//                   {/* Conditional Input Field for 'Others' */}
//                   {selectedProject === "others" && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0 }}
//                       animate={{ opacity: 1, height: "auto" }}
//                       className="space-y-2"
//                     >
//                       <Label htmlFor="other-details">Specify Details</Label>
//                       <Input
//                         id="other-details"
//                         required
//                         placeholder="Please specify your request..."
//                         className="bg-muted border-border h-11 focus:ring-[#a7150b]"
//                       />
//                     </motion.div>
//                   )}

//                   <div className="space-y-2">
//                     <Label htmlFor="remarks">Remarks</Label>
//                     <Textarea
//                       id="remarks"
//                       placeholder="Any specific requirements?"
//                       className="bg-muted border-border resize-none focus:ring-[#a7150b]"
//                       rows={3}
//                     />
//                   </div>

//                   <Button
//                     type="submit"
//                     disabled={formStatus === "submitting"}
//                     className="w-full bg-[#a7150b] hover:bg-[#8a0d08] text-white font-bold h-12 text-lg rounded-xl"
//                   >
//                     {formStatus === "submitting"
//                       ? "Sending..."
//                       : "Submit Inquiry"}
//                   </Button>
//                 </form>
//               )}
//             </div>

//             {/* Info Side */}
//             <div className="md:col-span-2 bg-foreground p-8 md:p-12 text-background flex flex-col justify-between relative overflow-hidden">
//               <div className="absolute top-0 right-0 p-6 opacity-5">
//                 <Building2 size={200} />
//               </div>
//               <div>
//                 <h4 className="text-xl font-bold mb-6 text-[#ffc107]">
//                   Contact Information
//                 </h4>
//                 <div className="space-y-6">
//                   <div className="flex items-start gap-4">
//                     <Mail className="w-6 h-6 text-[#ffc107] shrink-0 mt-1" />
//                     <div>
//                       <p className="text-xs text-background/60 uppercase tracking-wider">
//                         Email Us
//                       </p>
//                       <p className="font-medium text-sm">
//                         contact@ASPWCTtrust.org
//                       </p>
//                     </div>
//                   </div>
                  
//                   <div className="flex items-start gap-4">
//                     <Phone className="w-6 h-6 text-[#ffc107] shrink-0 mt-1" />
//                     <div>
//                       <p className="text-xs text-background/60 uppercase tracking-wider mb-1">
//                         Call Us
//                       </p>
//                       <div className="space-y-1 text-sm font-medium">
//                         <p>Landline: +91 44 2752 9313</p>
//                         <p>Mobile: +91 91500 45391</p>
//                         <p>Whatsapp: +91 91500 45391</p>
//                         <p>PRO: +91 44 27529276</p>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-4">
//                     <Building2 className="w-6 h-6 text-[#ffc107] shrink-0 mt-1" />
//                     <div>
//                       <p className="text-xs text-background/60 uppercase tracking-wider mb-1">
//                         Visit Us
//                       </p>
//                       <p className="font-medium text-sm leading-relaxed text-background/90">
//                         <span className="font-bold block mb-1">
//                           Adhiparasakthi Charitable Medical Educational and
//                           Cultural Trust
//                         </span>
//                         No.1 GST Road, Adhiparasakthi Siddhar Peedam Temple
//                         Campus, Melmaruvathur, Chengalpet District,
//                         TamilNadu-603319, India
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-4">
//                     <Clock className="w-6 h-6 text-[#ffc107] shrink-0 mt-1" />
//                     <div>
//                       <p className="text-xs text-background/60 uppercase tracking-wider mb-1">
//                         Timing
//                       </p>
//                       <p className="font-medium text-sm">
//                         8:00 am To 8:00 PM
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="mt-8 pt-8 border-t border-white/10">
//                 <p className="text-xs text-background/60">
//                   By submitting this form, you agree to our privacy policy
//                   regarding data collection.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </Card>
//       </div>
//     </section>
  

//       {/* Modals */}
//       <AnimatePresence>
//         {/* 80G Modal */}
//         {isDocModalOpen && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setIsDocModalOpen(false)}
//               className="fixed inset-0 bg-black/60 z-50 backdrop-blur-md"
//             />
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9, y: 20 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.9, y: 20 }}
//               transition={{ type: "spring", damping: 25, stiffness: 300 }}
//               className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-lg px-4"
//             >
//               <div className="bg-background rounded-3xl shadow-2xl overflow-hidden relative">
//                 <button
//                   onClick={() => setIsDocModalOpen(false)}
//                   className="absolute top-4 right-4 p-2 bg-muted hover:bg-muted/80 rounded-full transition-colors z-10"
//                 >
//                   <X className="w-5 h-5 text-muted-foreground" />
//                 </button>

//                 <div className="p-8 pb-0">
//                   <h3 className="text-2xl font-serif font-bold text-foreground">80G Certificate Preview</h3>
//                   <p className="text-muted-foreground mt-2">Valid for Financial Year 2025-2026</p>
//                 </div>

//                 <div className="p-8 flex flex-col items-center justify-center bg-muted m-8 rounded-2xl border-2 border-dashed border-border min-h-[250px] group cursor-pointer hover:bg-muted/80 transition-colors">
//                   <FileText className="w-16 h-16 text-muted-foreground group-hover:text-[#a7150b] transition-colors mb-4" />
//                   <p className="text-sm font-medium text-muted-foreground">Preview Unavailable in Demo</p>
//                 </div>

//                 <div className="p-6 bg-muted border-t flex justify-end gap-3">
//                   <Button variant="outline" onClick={() => setIsDocModalOpen(false)}>
//                     Close
//                   </Button>
//                   <Button className="bg-[#a7150b] text-white hover:bg-[#8a0d08]">
//                     <Download className="w-4 h-4 mr-2" /> Download PDF
//                   </Button>
//                 </div>
//               </div>
//             </motion.div>
//           </>
//         )}

//         {/* CSR Letter Modal */}
//         {isCsrLetterModalOpen && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setIsCsrLetterModalOpen(false)}
//               className="fixed inset-0 bg-black/70 z-50 backdrop-blur-sm"
//             />
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.95 }}
//               className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-3xl px-4 h-[85vh] flex flex-col"
//             >
//               <div className="bg-background rounded-xl shadow-2xl relative flex flex-col h-full overflow-hidden font-serif">
//                 <div className="flex justify-between items-center p-4 border-b bg-muted">
//                   <h3 className="font-bold text-foreground font-sans">Official CSR Approval</h3>
//                   <button onClick={() => setIsCsrLetterModalOpen(false)} className="p-2 hover:bg-muted/80 rounded-full">
//                     <X className="w-5 h-5 text-muted-foreground" />
//                   </button>
//                 </div>
//                 <div className="flex-1 overflow-y-auto p-12 text-foreground">
//                   <div className="text-center mb-10">
//                     <Landmark className="w-12 h-12 mx-auto mb-2 text-foreground" />
//                     <h4 className="font-bold text-sm uppercase">Satyameva Jayate</h4>
//                     <h2 className="font-bold text-xl uppercase">Government of India</h2>
//                     <h3 className="font-bold text-lg uppercase">Ministry of Corporate Affairs</h3>
//                     <p className="font-semibold text-sm uppercase">Office of the Registrar of Companies</p>
//                   </div>

//                   <div className="flex justify-between items-end mb-8 border-b pb-8">
//                     <div className="text-sm font-sans text-muted-foreground">
//                       <p>To,</p>
//                       <p className="font-bold text-foreground uppercase w-64">
//                         Adhiparasakthi Charitable Medical Educational and Cultural Trust
//                       </p>
//                       <p>No.1, GST Road, Melmaruvathur</p>
//                     </div>
//                     <div className="text-right">
//                       <p className="font-bold">Dated: 16-04-2021</p>
//                       <p>PAN: AAATA0722H</p>
//                     </div>
//                   </div>

//                   <div className="mb-8">
//                     <p className="font-bold mb-2">Subject: Registration of Entities for undertaking CSR activities</p>
//                     <p className="text-sm text-muted-foreground">Ref: Application SRN-T14318323</p>
//                   </div>

//                   <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-8">
//                     <p className="text-lg leading-relaxed">
//                       "It is informed that the entity has been registered for undertaking CSR activities and the
//                       Registration number is <span className="font-bold bg-yellow-200 px-2 rounded">CSR00002370</span>."
//                     </p>
//                   </div>

//                   <div className="mt-12 flex justify-end">
//                     <div className="text-right">
//                       <p className="font-bold text-muted-foreground text-xs uppercase mb-2">[Digitally Signed]</p>
//                       <p className="font-bold uppercase">Registrar of Companies</p>
//                       <p className="font-bold">ROC-DELHI</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="p-4 bg-muted border-t flex justify-end font-sans">
//                   <Button variant="outline" onClick={() => setIsCsrLetterModalOpen(false)}>
//                     Close
//                   </Button>
//                 </div>
//               </div>
//             </motion.div>
//           </>
//         )}

//         {/* FCRA Renewal Modal */}
//         {isFcraRenewalModalOpen && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setIsFcraRenewalModalOpen(false)}
//               className="fixed inset-0 bg-black/70 z-50 backdrop-blur-sm"
//             />
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.95 }}
//               className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-4xl px-4 h-[90vh] flex flex-col"
//             >
//               <div className="bg-background rounded-xl shadow-2xl relative flex flex-col h-full overflow-hidden font-serif text-foreground">
//                 <div className="flex justify-between items-center p-4 border-b bg-muted">
//                   <h3 className="font-bold text-foreground font-sans">FCRA Renewal Certificate</h3>
//                   <button
//                     onClick={() => setIsFcraRenewalModalOpen(false)}
//                     className="p-2 hover:bg-muted/80 rounded-full transition-colors"
//                   >
//                     <X className="w-5 h-5 text-muted-foreground" />
//                   </button>
//                 </div>

//                 <div className="flex-1 overflow-y-auto p-8 md:p-12 bg-background relative">
//                   <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
//                     <Landmark className="w-[500px] h-[500px]" />
//                   </div>

//                   <div className="relative z-10 max-w-3xl mx-auto">
//                     <div className="flex justify-between text-sm font-bold mb-8">
//                       <p>No. 0300148372016</p>
//                       <p>Dated: 29-10-2016</p>
//                     </div>

//                     <div className="text-center mb-10 space-y-1">
//                       <div className="flex justify-center mb-4">
//                         <Landmark className="w-16 h-16 text-foreground" />
//                       </div>
//                       <h2 className="font-bold text-2xl uppercase tracking-wide">Government of India</h2>
//                       <h3 className="font-bold text-xl">Ministry of Home Affairs</h3>
//                       <p className="font-semibold text-lg">Foreigners Division (FCRA Wing)</p>
//                       <p className="text-sm text-muted-foreground">
//                         NDCC-II Building, Jai Singh Road, New Delhi-110001
//                       </p>
//                     </div>

//                     <div className="mb-8 p-6 bg-muted rounded-lg border border-border">
//                       <p className="font-bold mb-1">To,</p>
//                       <p className="font-bold">The Chief Functionary,</p>
//                       <p className="font-bold uppercase text-[#a7150b]">
//                         Adhiparasakthi Charitable Medical Education And Cultural Trust
//                       </p>
//                       <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
//                         GST ROAD MELMARUVATHUR, CHEYYUR TALUK KANCHEEPURAM DISTRICT,
//                         <br />
//                         Tamil Nadu, Madurai, 603319
//                       </p>
//                     </div>

//                     <div className="mb-8">
//                       <p>
//                         <span className="font-bold">Subject:</span> Renewal of Registration under Foreign Contribution
//                         (Regulation) Act, 2010
//                       </p>
//                     </div>

//                     <div className="mb-8 text-justify leading-relaxed">
//                       <p className="mb-4">Sir/Madam,</p>
//                       <p>
//                         With reference to your application dated 26-05-2016 seeking renewal of registration under the
//                         Foreign Contribution (Regulation) Act, 2010, I am directed to convey the approval of competent
//                         authority for renewal of registration of your Association in terms of the provisions contained
//                         in Section 16 of Foreign Contribution (Regulation) Act, 2010 read with Rule 12 of Foreign
//                         Contribution (Regulation) Rules, 2011 as amended from time to time, as follows:-
//                       </p>
//                     </div>

//                     <div className="grid md:grid-cols-2 gap-6 mb-10">
//                       <div className="bg-yellow-50 p-5 rounded-lg border border-yellow-100">
//                         <p className="text-xs uppercase tracking-widest text-yellow-800 font-bold mb-1">
//                           Registration Number
//                         </p>
//                         <p className="text-3xl font-mono font-bold text-foreground">075940349</p>
//                       </div>
//                       <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
//                         <p className="text-xs uppercase tracking-widest text-blue-800 font-bold mb-1">
//                           Nature of Association
//                         </p>
//                         <p className="text-xl font-bold text-foreground">Cultural, Educational, Social</p>
//                       </div>
//                     </div>

//                     <div className="mb-8">
//                       <h4 className="font-bold mb-2">2. Designated Bank Account</h4>
//                       <div className="bg-muted p-6 rounded-lg border-l-4 border-[#a7150b]">
//                         <p className="leading-relaxed">
//                           The association shall receive foreign contribution only in its designated/exclusive bank
//                           account:
//                         </p>
//                         <div className="mt-4 grid gap-2 font-mono text-sm">
//                           <p>
//                             <span className="font-bold text-muted-foreground w-32 inline-block">Account No:</span>{" "}
//                             3258728116
//                           </p>
//                           <p>
//                             <span className="font-bold text-muted-foreground w-32 inline-block">Bank:</span> Central
//                             Bank of India
//                           </p>
//                           <p>
//                             <span className="font-bold text-muted-foreground w-32 inline-block">Branch:</span> GST ROAD
//                             MELMARUVATHUR, CHEYYUR TK
//                           </p>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="space-y-4 text-sm text-muted-foreground leading-relaxed border-t border-border pt-8">
//                       <p>
//                         <span className="font-bold text-foreground">3.</span> You are advised to furnish intimations
//                         online within the prescribed time to the Central Government of the amounts of each foreign
//                         contribution received by you, the source and the manner in which the foreign contribution was
//                         utilised.
//                       </p>

//                       <p>
//                         <span className="font-bold text-foreground">4.</span> The association cannot bring out any
//                         publication (registered under PRB Act, 1867) or act as correspondent, columnist, editor, printer
//                         or publisher of a registered newspaper or engage in the production or broadcast of audio news.
//                       </p>

//                       <p>
//                         <span className="font-bold text-foreground">8.</span> This renewed certificate is valid for a
//                         period of five years with effect from{" "}
//                         <span className="font-bold text-foreground">01-11-2016</span>.
//                       </p>
//                     </div>

//                     <div className="mt-16 flex flex-col items-end">
//                       <div className="text-right">
//                         <p className="font-bold text-xl text-foreground">B K Singh</p>
//                         <p className="font-semibold text-muted-foreground">Under Secretary</p>
//                         <p className="text-sm text-muted-foreground">Tel. 01123438245</p>
//                         <div className="mt-4 text-xs text-muted-foreground border-t border-border pt-2">
//                           Digitally signed by BRAJESH KUMAR SINGH
//                           <br />
//                           Date: 2016.10.29 14:48:08 IST
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="p-4 bg-muted border-t flex justify-end gap-3 font-sans">
//                   <Button variant="outline" onClick={() => setIsFcraRenewalModalOpen(false)}>
//                     Close
//                   </Button>
//                   <Button className="bg-foreground text-background hover:bg-foreground/90">
//                     <Download className="w-4 h-4 mr-2" /> Download Official PDF
//                   </Button>
//                 </div>
//               </div>
//             </motion.div>
//           </>
//         )}

//         {/* Overseas Donation Modal */}
//         {isOverseasModalOpen && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setIsOverseasModalOpen(false)}
//               className="fixed inset-0 bg-black/70 z-50 backdrop-blur-sm"
//             />
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.95 }}
//               className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-3xl px-4 h-[90vh] flex flex-col"
//             >
//               <div className="bg-background rounded-xl shadow-2xl relative flex flex-col h-full overflow-hidden font-sans text-foreground">
//                 <div className="flex justify-between items-center p-5 border-b bg-muted">
//                   <h3 className="font-bold text-xl text-foreground">Overseas Donation Procedure</h3>
//                   <button onClick={() => setIsOverseasModalOpen(false)} className="p-2 hover:bg-muted/80 rounded-full">
//                     <X className="w-5 h-5 text-muted-foreground" />
//                   </button>
//                 </div>
//                 <div className="flex-1 overflow-y-auto p-8">
//                   <div className="bg-yellow-50 border-l-4 border-[#ffc107] p-4 mb-6 text-sm">
//                     <p className="font-bold mb-1 text-yellow-800">Important Note:</p>
//                     <p>
//                       Donations can be done only through Wire Transfer to the specified Bank Account. UPI/NEFT/RTGS from
//                       Indian banks are restricted.
//                     </p>
//                   </div>

//                   <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
//                     <Building2 className="w-5 h-5 text-[#a7150b]" /> Wire Transfer Details
//                   </h4>
//                   <div className="bg-muted rounded-xl p-6 border border-border space-y-3 font-mono text-sm mb-8">
//                     <div className="flex flex-col sm:flex-row sm:justify-between border-b border-border pb-2">
//                       <span className="text-muted-foreground font-sans">Account Name</span>
//                       <span className="font-bold text-right">
//                         Adhiparasakthi Charitable Medical Educational and Cultural Trust
//                       </span>
//                     </div>
//                     <div className="flex justify-between border-b border-border pb-2">
//                       <span className="text-muted-foreground font-sans">Account No</span>
//                       <span className="font-bold text-lg">40209740361</span>
//                     </div>
//                     <div className="flex justify-between border-b border-border pb-2">
//                       <span className="text-muted-foreground font-sans">Bank Name</span>
//                       <span className="font-bold">State Bank of India</span>
//                     </div>
//                     <div className="flex justify-between border-b border-border pb-2">
//                       <span className="text-muted-foreground font-sans">Branch</span>
//                       <span className="font-bold">New Delhi Main Branch (Code: 00691)</span>
//                     </div>
//                     <div className="flex justify-between pt-1">
//                       <span className="text-muted-foreground font-sans">SWIFT Code</span>
//                       <span className="font-bold bg-yellow-100 px-2 rounded">SBININBB104</span>
//                     </div>
//                   </div>

//                   <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
//                     <Mail className="w-5 h-5 text-[#a7150b]" /> Mandatory Reporting
//                   </h4>
//                   <p className="text-sm text-muted-foreground mb-4">
//                     On successful transfer, kindly share the following details +{" "}
//                     <strong>Passport Copy (Front & Back)</strong> to{" "}
//                     <span className="font-bold text-foreground">ASPWCTtrust@gmail.com</span>:
//                   </p>
//                   <ul className="grid grid-cols-2 gap-2 text-sm font-medium text-foreground bg-muted p-4 rounded-lg">
//                     <li>1. Name of Donor</li>
//                     <li>2. Donor Address</li>
//                     <li>3. Purpose of Remittance</li>
//                     <li>4. Country of Donor</li>
//                     <li>5. Currency & Amount</li>
//                     <li>6. ID Proof (Passport)</li>
//                   </ul>
//                 </div>
//                 <div className="p-4 bg-muted border-t flex justify-end gap-3">
//                   <Button variant="outline" onClick={() => setIsOverseasModalOpen(false)}>
//                     Close
//                   </Button>
//                   <Button className="bg-foreground text-background">Copy Bank Details</Button>
//                 </div>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </main>
//   )
// }
"use client"

import { useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  Heart,
  CheckCircle2,
  Facebook,
  Twitter,
  Mail,
  Landmark,
  Activity,
  Eye,
  FileText,
  Globe,
  Phone,
  Building2,
  Download,
  X,
  Clock,
  AlertTriangle,
  ShieldCheck,
  AlertCircle,
  HeartHandshake,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// ========== ANIMATION VARIANTS ==========
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
}

const scaleOnHover = {
  hover: { scale: 1.02, transition: { duration: 0.3 } },
}

// ========== MAIN PAGE EXPORT ==========
export default function Home() {
  return (
    <main className="bg-background overflow-x-hidden font-sans text-foreground selection:bg-[#ffc107] selection:text-black">
      <Hero />
      <About />
      <Leadership />
      <CsrRegistration />
      <MissionVision />
      <Awards />
      <Donation />
      <CsrProjects />
      <CsrInquiry />
    </main>
  )
}

// ========== 1. HERO COMPONENT ==========
function Hero() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 150])

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766091901/dental-hospital_cd4gda.jpg"
          alt="Hero Background"
          fill
          className="object-cover scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 pt-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.div variants={fadeInUp} className="inline-block mb-6">
            <span className="px-5 py-2.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-[#ffc107] text-sm font-bold tracking-widest uppercase shadow-lg">
              Est. 1978 • Registered Trust
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-[1.1] drop-shadow-2xl text-balance"
          >
            Healing Hands.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffc107] via-yellow-300 to-[#ffc107] animate-gradient">
              Compassionate Hearts.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-2xl text-gray-200 mb-12 leading-relaxed font-light max-w-3xl mx-auto text-balance"
          >
            Adhiparasakthi Charitable Medical Educational & Cultural Trust (ASPWCT) dedicated to serving humanity
            through holistic healthcare and education.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-8">
            <Link href="https://www.omsakthiamma.org/online_services/donations" className="w-full sm:w-auto group">
              <Button className="w-full sm:w-auto bg-[#a7150b] hover:bg-[#d91e11] text-white rounded-full px-10 py-7 text-lg font-bold shadow-[0_0_40px_-10px_rgba(167,21,11,0.6)] transition-all hover:scale-105 hover:shadow-[0_0_60px_-10px_rgba(167,21,11,0.8)]">
                <Heart className="mr-3 w-5 h-5 fill-current group-hover:animate-pulse" />
                Donate Now
              </Button>
            </Link>
            <Link href="#about" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="w-full sm:w-auto border-2 border-white/40 text-white hover:bg-white hover:text-black rounded-full px-10 py-7 text-lg font-bold backdrop-blur-sm transition-all hover:scale-105 bg-white/5"
              >
                Explore Our Work
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}

// ========== 2. ABOUT COMPONENT ==========
function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-4 container mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block px-4 py-2 bg-[#a7150b]/10 text-[#a7150b] rounded-full text-xs font-bold tracking-widest uppercase mb-4"
          >
            About The Trust
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 leading-tight text-balance"
          >
            A Legacy of Service{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Since 1978</span>
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-[#ffc107] -z-0" />
            </span>
          </motion.h2>

          <motion.div variants={fadeInUp} className="text-muted-foreground text-lg leading-relaxed mb-8 space-y-4">
            <p>
              M/s Adhiparasakthi Charitable Medical Educational and Cultural Trust (ASPWCT Trust), as the name suggests
              has dedicated itself to serve the people in the areas of:
            </p>

            <div className="grid sm:grid-cols-2 gap-3 py-4">
              {["Charity", "Medical", "Educational", "Cultural Activities"].map((item) => (
                <div key={item} className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-full bg-[#a7150b]/10 group-hover:bg-[#a7150b] transition-colors flex items-center justify-center">
                    <CheckCircle2 className="text-[#a7150b] group-hover:text-white w-5 h-5 transition-colors" />
                  </div>
                  <span className="font-semibold text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <p>
              This trust is a non-profitable organization which was founded by{" "}
              <strong className="text-foreground">H.H. Bangaru Adigalar</strong> in the year 1978 with a small corpus
              fund and with few cents of land in Melmaruvathur.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-6">
            <div className="group hover:scale-105 transition-transform">
              <Card className="p-6 border-l-4 border-[#ffc107] bg-gradient-to-br from-[#ffc107]/5 to-transparent hover:shadow-lg transition-shadow">
                <h4 className="text-4xl font-bold text-foreground mb-1">1978</h4>
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Established</p>
              </Card>
            </div>
            <div className="group hover:scale-105 transition-transform">
              <Card className="p-6 border-l-4 border-[#a7150b] bg-gradient-to-br from-[#a7150b]/5 to-transparent hover:shadow-lg transition-shadow">
                <h4 className="text-2xl font-bold text-foreground mb-1">Melmaruvathur</h4>
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Headquarters</p>
              </Card>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766143744/a12_nbqg5x.webp"
              alt="Medical Service"
              width={700}
              height={500}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="absolute -top-10 -right-10 w-72 h-72 bg-[#ffc107]/20 rounded-full blur-3xl -z-10 group-hover:bg-[#ffc107]/30 transition-colors" />
          <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-[#a7150b]/10 rounded-full blur-3xl -z-10 group-hover:bg-[#a7150b]/20 transition-colors" />
        </motion.div>
      </div>
    </section>
  )
}

// ========== 3. LEADERSHIP COMPONENT ==========
function Leadership() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Founders */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#a7150b]/10 text-[#a7150b] rounded-full text-xs font-bold tracking-widest uppercase mb-4">
              Leadership
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
              Founder & President
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {[
              {
                name: "His Holiness Bangaru Adigalar",
                role: "Founder",
                image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766091903/3952Founder-President_k3xqz3.png",
                bgColor: "from-[#ffc107]/10 to-[#ffc107]/5",
                borderColor: "border-[#ffc107]",
              },
              {
                name: "Smt. Lakshmi Bangaru Adigalar",
                role: "President",
                image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766091895/Vice-President_z3lp84.jpg",
                bgColor: "from-[#a7150b]/10 to-[#a7150b]/5",
                borderColor: "border-[#a7150b]",
              },
            ].map((person, idx) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                whileHover={{ y: -8 }}
              >
                <Card className={`p-8 text-center border-2 ${person.borderColor} bg-gradient-to-br ${person.bgColor} hover:shadow-2xl transition-all group`}>
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-background shadow-xl mb-6 relative group-hover:scale-105 transition-transform">
                    <Image src={person.image} alt={person.name} fill className="object-cover" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-2">{person.name}</h3>
                  <p className="text-[#a7150b] font-bold uppercase tracking-widest text-sm mb-6">{person.role}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Board of Trustees Grid */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Board of Trustees</h2>
          <div className="w-24 h-1.5 bg-[#ffc107] mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 max-w-6xl mx-auto">
          {[
            { name: "Mrs. V. Lakshmi", role: "President / Executive Trustee" },
            { name: "Mr. G.B. Anbalagan", role: "Vice President / Trustee" },
            { name: "Mr. G.B. Senthil Kumar", role: "Vice President / Trustee" },
            { name: "Mrs. B. Sridevi", role: "Treasurer / Trustee" },
            { name: "Mrs. B. Umadevi", role: "Secretary / Trustee" },
          ].map((trustee, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="p-6 hover:shadow-xl transition-all group bg-gradient-to-br from-[#ffc107]/5 to-transparent border-2 border-transparent hover:border-[#ffc107]/30">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[#ffc107] text-foreground rounded-full flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform font-bold text-xl">
                    {trustee.name.split(" ")[1][0]}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-[#a7150b] transition-colors mb-2">
                      {trustee.name}
                    </h3>
                    <span className="inline-block px-3 py-1 bg-[#a7150b]/10 text-[#a7150b] rounded-full text-xs font-bold uppercase tracking-wide">
                      {trustee.role}
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* General Trustees Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { name: "Mr. R. Karunanithi", role: "Trustee" },
            { name: "Mr. K. Arulmozhi", role: "Trustee" },
            { name: "Mr. S.R. Raghuvir", role: "Trustee" },
            { name: "Mr. A. Saiprasad", role: "Trustee" },
          ].map((trustee, idx) => (
            <motion.div
              key={trustee.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx + 5) * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="p-6 hover:shadow-lg transition-all group border-2">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center font-bold text-muted-foreground">
                      {trustee.name.split(" ")[1][0]}
                    </div>
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest border border-border px-2 py-1 rounded">
                      {trustee.role}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-foreground group-hover:text-[#a7150b] transition-colors">
                    {trustee.name}
                  </h4>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CsrRegistration() {
  
  // Animation variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  return (
    <section className="py-20 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* --- Left Side: Text Content --- */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={staggerContainer}
          >
            <div className="flex items-center gap-3 mb-4">
              <Landmark className="w-8 h-8 text-[#ffc107]" />
              <span className="text-[#ffc107] font-bold tracking-widest uppercase text-sm">Government of India</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Official CSR Registration</h2>
            
            <p className="text-background/80 text-lg mb-8 leading-relaxed">
              Adhiparasakthi Charitable Medical Educational and Cultural Trust is officially registered with the
              Ministry of Corporate Affairs for undertaking CSR activities.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white/10 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
                <p className="text-xs text-background/60 uppercase tracking-widest mb-1">Registration Number</p>
                <p className="text-2xl font-mono font-bold text-[#ffc107]">CSR00002407</p>
              </div>
              <div className="bg-white/10 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
                <p className="text-xs text-background/60 uppercase tracking-widest mb-1">Date of Registration</p>
                <p className="text-xl font-bold">16-04-2021</p>
              </div>
            </div>
          </motion.div>

          {/* --- Right Side: Actual CSR Letter Image --- */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10"
          >
            <div className="bg-white p-2">
                <Image 
                  src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766132506/Screenshot_2025-12-19_134112_js329n.png" 
                  alt="Official CSR Approval Letter" 
                  width={800}
                  height={1000}
                  className="w-full h-auto object-contain"
                />
            </div>
            
            {/* Optional: Overlay Badge */}
            <div className="absolute top-4 right-4 bg-[#ffc107] text-foreground text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
              <FileText className="w-3 h-3" /> Official Document
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

// ========== 5. MISSION & VISION COMPONENT ==========
function MissionVision() {
  return (
    <section className="py-24 px-4 bg-muted relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <motion.div whileHover="hover" variants={scaleOnHover} className="bg-gradient-to-br from-[#a7150b] to-[#800f07] p-10 md:p-14 rounded-3xl shadow-2xl relative overflow-hidden group border border-white/10">
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8">
                <Activity className="text-white w-8 h-8" />
              </div>
              <h3 className="text-3xl font-serif font-bold mb-4 text-white">Our Mission</h3>
              <p className="text-white/80 text-lg leading-relaxed">
              The ASPWCT Trust is committed to the selfless service of humanity by managing resources with transparency and strategic foresight to deliver high-quality social welfare services
              </p>
            </div>
          </motion.div>

          <motion.div whileHover="hover" variants={scaleOnHover} className="bg-gradient-to-br from-[#ffc107] to-[#e6ac00] p-10 md:p-14 rounded-3xl shadow-2xl relative overflow-hidden group border border-white/10">
            <div className="relative z-10">
              <div className="w-14 h-14 bg-black/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8">
                <Eye className="text-foreground w-8 h-8" />
              </div>
              <h3 className="text-3xl font-serif font-bold mb-4 text-foreground">Our Vision</h3>
              <p className="text-foreground/80 text-lg leading-relaxed font-medium">
                To create a sustainable, inclusive society where the burdens of human suffering are alleviated through institutional excellence in healthcare, education, and cultural preservation. Our vision is to serve as a perpetual pillar of community support, governed by integrity and the spiritual principle of universal welfare—offering solace and opportunity to all, regardless of caste, creed, colour, or religion.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ========== 6. AWARDS COMPONENT ==========
function Awards() {
  const awards = [
    { img: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092337/2911191530526914-150x150_a5fseg.jpg", title: "State Govt Honor", desc: "Honored by Chief Minister Ms. J. Jayalalitha..." },
    { img: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092336/2911191530538674-150x150_semv32.jpg", title: "Nirmal Gram Puraskar", desc: "National award for sanitation..." },
    { img: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092336/2911191530539144-150x150_dyivy6.jpg", title: "Certificate of Excellence", desc: "Recognition for outstanding contribution..." },
    { img: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092336/2911191530534191-150x150_lo2fc6.jpg", title: "Best Institution", desc: "Awarded to Adhiparasakthi Annai Illam..." },
    { img: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092338/2911191530529377-150x150_mz3ixh.jpg", title: "Award of Appreciation", desc: "Awarded by the Department of Health..." },
    { img: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092338/2911191530527252-150x150_ud5spj.jpg", title: "Regional Recognition", desc: "Acknowledging our continuous support..." },
    { img: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092337/2911191530521793-150x150_hqdtpk.jpg", title: "Official Certification", desc: "Certification of merit from authorized government bodies." },
    { img: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092338/awards-150x150_rtu0ni.png", title: "National Honor", desc: "Founder H.H. Bangaru Adigalar receiving award...", badge: "Highest Honor" },
  ]

  return (
    <section className="py-24 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#a7150b]/10 text-[#a7150b] rounded-full text-xs font-bold tracking-widest uppercase mb-4">Our Achievements</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Significant Awards and Recognition</h2>
          <div className="w-24 h-1.5 bg-[#ffc107] mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award, idx) => (
            <motion.div key={idx} whileHover={{ y: -8 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="group bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden border-b border-border">
                <Image src={award.img} alt={award.title} fill className="object-fill group-hover:scale-105 transition-transform duration-500" />
                {award.badge && <div className="absolute top-2 right-2 bg-[#ffc107] text-foreground text-xs font-bold px-2 py-1 rounded">{award.badge}</div>}
              </div>
              <div className="p-5">
                <h4 className="font-bold text-foreground leading-tight mb-2 group-hover:text-[#a7150b] transition-colors">{award.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{award.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// // ========== 7. DONATION COMPONENT ==========
// function Donation() {
//   const [isDocModalOpen, setIsDocModalOpen] = useState(false)
//   const [isFcraRenewalModalOpen, setIsFcraRenewalModalOpen] = useState(false)
//   const [isOverseasModalOpen, setIsOverseasModalOpen] = useState(false)

//   return (
//     <>
//       <section className="py-24 px-4 bg-muted/30" id="donate">
//         <div className="container mx-auto max-w-6xl">
//           <div className="grid md:grid-cols-2 gap-8">
//             {/* Domestic Card */}
//             <motion.div whileHover={{ y: -8 }} className="bg-card rounded-3xl p-8 lg:p-12 shadow-xl border border-border relative overflow-hidden flex flex-col">
//               <div className="absolute top-0 left-0 w-full h-2 bg-[#a7150b]" />
//               <div className="flex items-center gap-4 mb-8">
//                 <div className="p-4 bg-red-50 rounded-2xl text-[#a7150b]"><FileText className="w-8 h-8" /></div>
//                 <div><h3 className="text-2xl font-bold text-foreground">Domestic Donors</h3><span className="text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full">80G Tax Exempt</span></div>
//               </div>
//               <ul className="space-y-4 mb-10 flex-1">
//                 {["50% Tax Exemption", "Instant e-Receipt", "Digital Certificate"].map((item, i) => (
//                   <li key={i} className="flex items-center gap-3 text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-[#a7150b]" /> {item}</li>
//                 ))}
//               </ul>
//               <div className="space-y-4">
//                 <Link href="https://www.omsakthiamma.org/online_services/donations" className="block w-full"><Button className="w-full bg-[#a7150b] hover:bg-[#8a0d08] text-white h-14 text-lg rounded-xl">Donate via UPI / NetBanking</Button></Link>
//                 <Button onClick={() => setIsDocModalOpen(true)} variant="ghost" className="w-full text-muted-foreground hover:text-[#a7150b]">View 80G Certificate</Button>
//               </div>
//             </motion.div>

//             {/* Foreign Card */}
//             <motion.div whileHover={{ y: -8 }} className="bg-foreground rounded-3xl p-8 lg:p-12 shadow-xl relative overflow-hidden flex flex-col text-background">
//               <div className="absolute top-0 left-0 w-full h-2 bg-[#ffc107]" />
//               <div className="flex items-center gap-4 mb-8">
//                 <div className="p-4 bg-white/10 rounded-2xl text-[#ffc107]"><Globe className="w-8 h-8" /></div>
//                 <div><h3 className="text-2xl font-bold">Foreign Donors</h3><span className="text-sm font-medium text-foreground bg-[#ffc107] px-3 py-1 rounded-full">FCRA Approved</span></div>
//               </div>
//               <ul className="space-y-4 mb-10 flex-1">
//                 {["Government Approved FCRA", "International Wire Transfer", "SWIFT Transfer Support"].map((item, i) => (
//                   <li key={i} className="flex items-center gap-3 text-background/80"><CheckCircle2 className="w-5 h-5 text-[#ffc107]" /> {item}</li>
//                 ))}
//               </ul>
//               <div className="space-y-4">
//                 <Button onClick={() => setIsOverseasModalOpen(true)} className="w-full bg-[#ffc107] hover:bg-[#e6ac00] text-foreground font-bold h-14 text-lg rounded-xl">View Overseas Donation Procedure</Button>
//                 <Button onClick={() => setIsFcraRenewalModalOpen(true)} variant="ghost" className="w-full text-background/80 hover:text-background">View FCRA Renewal Certificate</Button>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

      
//       {/* Donation Modals */}
//       <AnimatePresence>
        
//         {/* 1. 80G Modal - NOW AN IMAGE VIEWER */}
//         {isDocModalOpen && (
//           <motion.div 
//             initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//             onClick={() => setIsDocModalOpen(false)}
//             className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm flex items-center justify-center p-4"
//           >
//             <motion.div 
//               initial={{ opacity: 0, scale: 0.95 }} 
//               animate={{ opacity: 1, scale: 1 }} 
//               exit={{ opacity: 0, scale: 0.95 }}
//               onClick={(e) => e.stopPropagation()}
//               className="bg-white w-full max-w-4xl h-[90vh] rounded-2xl overflow-hidden shadow-2xl flex flex-col relative"
//             >
//                {/* Modal Header */}
//                <div className="flex justify-between items-center p-4 border-b bg-gray-50 z-10 shrink-0">
//                   <h3 className="font-bold text-gray-800 text-lg">80G Certificate</h3>
//                   <button 
//                     onClick={() => setIsDocModalOpen(false)} 
//                     className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors text-gray-700"
//                   >
//                     <X className="w-6 h-6" />
//                   </button>
//                </div>

//                {/* Scrollable Image Container */}
//                <div className="flex-1 overflow-y-auto bg-gray-100 p-4 md:p-8">
//                   <div className="bg-white shadow-lg mx-auto w-full">
//                       {/* REPLACE WITH YOUR 80G IMAGE PATH */}
//                       <Image 
//                         src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766136367/80G_Ceritficate_for_Receipt_page-0001_uxlp2z.jpg" 
//                         alt="80G Certificate" 
//                         width={1000}
//                         height={1400}
//                         className="w-full h-auto block" 
//                         priority
//                       />
//                   </div>
//                </div>
//             </motion.div>
//           </motion.div>
//         )}
        
//         {/* 2. FCRA Renewal Modal (Updated: 2 Images Vertical Scroll) */}
//         {isFcraRenewalModalOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setIsFcraRenewalModalOpen(false)}
//             className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm flex items-center justify-center p-4"
//           >
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.95 }}
//               className="bg-white w-full max-w-4xl h-[90vh] rounded-2xl overflow-hidden shadow-2xl flex flex-col relative"
//               onClick={(e) => e.stopPropagation()}
//             >
//                {/* Modal Header */}
//                <div className="flex justify-between items-center p-4 border-b bg-gray-50 z-10 shrink-0">
//                   <h3 className="font-bold text-gray-800 text-lg">FCRA Renewal Certificate (2 Pages)</h3>
//                   <button
//                     onClick={() => setIsFcraRenewalModalOpen(false)}
//                     className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors text-gray-700"
//                   >
//                     <X className="w-6 h-6" />
//                   </button>
//                </div>
              
//               {/* Scrollable Image Container */}
//               <div className="flex-1 overflow-y-auto bg-gray-100 p-4 md:p-8">
//                  <div className="flex flex-col gap-4 max-w-3xl mx-auto">
//                     {/* PAGE 1 */}
//                     <div className="bg-white shadow-lg w-full">
//                         {/* REPLACE WITH YOUR PAGE 1 IMAGE PATH */}
//                         <Image 
//                           src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766133511/Renewal-Certificate-_ASPWCT_TRUST_FCRA_page-0001_nw5ao7.jpg" 
//                           alt="FCRA Renewal Page 1" 
//                           width={1000}
//                           height={1400}
//                           className="w-full h-auto block" 
//                           priority
//                         />
//                     </div>
                    
//                     {/* PAGE 2 */}
//                     <div className="bg-white shadow-lg w-full">
//                         {/* REPLACE WITH YOUR PAGE 2 IMAGE PATH */}
//                         <Image 
//                           src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766133704/Renewal-Certificate-_ASPWCT_TRUST_FCRA_page-0002_vth9g7.jpg" 
//                           alt="FCRA Renewal Page 2" 
//                           width={1000}
//                           height={1400}
//                           className="w-full h-auto block" 
//                         />
//                     </div>
//                  </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}

//         {/* 3. Overseas Donation Modal (Fixed: Scrollable + Full Info) */}
//         {isOverseasModalOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setIsOverseasModalOpen(false)}
//             className="fixed inset-0 bg-black/70 z-50 backdrop-blur-sm flex items-center justify-center p-4"
//           >
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.95 }}
//               className="w-full max-w-3xl h-[90vh] bg-background rounded-2xl shadow-2xl flex flex-col relative overflow-hidden"
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Header */}
//               <div className="flex justify-between items-center p-5 border-b bg-muted z-10 shrink-0">
//                 <h3 className="font-bold text-xl text-foreground">Overseas Donation Procedure</h3>
//                 <button onClick={() => setIsOverseasModalOpen(false)} className="p-2 hover:bg-muted/80 rounded-full">
//                   <X className="w-5 h-5 text-muted-foreground" />
//                 </button>
//               </div>

//               {/* Scrollable Body */}
//               <div className="flex-1 overflow-y-auto p-8">
//                 <div className="bg-yellow-50 border-l-4 border-[#ffc107] p-4 mb-6 text-sm">
//                   <p className="font-bold mb-1 text-yellow-800">Important Note:</p>
//                   <p className="text-black">
//                     Donations can be done only through Wire Transfer to the specified Bank Account. UPI/NEFT/RTGS from
//                     Indian banks are restricted.
//                   </p>
//                 </div>

//                 <h4 className="font-bold text-lg mb-4 flex items-center gap-2 text-foreground">
//                   <Building2 className="w-5 h-5 text-[#a7150b]" /> Wire Transfer Details
//                 </h4>
//                 <div className="bg-muted rounded-xl p-6 border border-border space-y-3 font-mono text-sm mb-8">
//                   <div className="flex flex-col sm:flex-row sm:justify-between border-b border-border pb-2">
//                     <span className="text-muted-foreground font-sans">Account Name</span>
//                     <span className="font-bold text-right text-foreground">
//                       Adhiparasakthi Charitable Medical Educational and Cultural Trust
//                     </span>
//                   </div>
//                   <div className="flex justify-between border-b border-border pb-2">
//                     <span className="text-muted-foreground font-sans">Account No</span>
//                     <span className="font-bold text-lg text-foreground">40209740361</span>
//                   </div>
//                   <div className="flex justify-between border-b border-border pb-2">
//                     <span className="text-muted-foreground font-sans">Bank Name</span>
//                     <span className="font-bold text-foreground">State Bank of India</span>
//                   </div>
//                   <div className="flex justify-between border-b border-border pb-2">
//                     <span className="text-muted-foreground font-sans">Branch</span>
//                     <span className="font-bold text-foreground">New Delhi Main Branch (Code: 00691)</span>
//                   </div>
//                   <div className="flex justify-between pt-1">
//                     <span className="text-muted-foreground font-sans">SWIFT Code</span>
//                     <span className="font-bold bg-yellow-100 px-2 rounded text-black">SBININBB104</span>
//                   </div>
//                 </div>

//                 <h4 className="font-bold text-lg mb-4 flex items-center gap-2 text-foreground">
//                   <Mail className="w-5 h-5 text-[#a7150b]" /> Mandatory Reporting
//                 </h4>
//                 <p className="text-sm text-muted-foreground mb-4">
//                   On successful transfer, kindly share the following details +{" "}
//                   <strong>Passport Copy (Front & Back)</strong> to{" "}
//                   <span className="font-bold text-foreground">ASPWCTtrust@gmail.com</span>:
//                 </p>
//                 <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm font-medium text-foreground bg-muted p-4 rounded-lg">
//                   <li>1. Name of Donor</li>
//                   <li>2. Donor Address</li>
//                   <li>3. Purpose of Remittance</li>
//                   <li>4. Country of Donor</li>
//                   <li>5. Currency & Amount</li>
//                   <li>6. ID Proof (Passport)</li>
//                 </ul>
//               </div>

//               {/* Footer */}
//               <div className="p-4 bg-muted border-t flex justify-end gap-3 shrink-0">
//                 <Button variant="outline" onClick={() => setIsOverseasModalOpen(false)}>
//                   Close
//                 </Button>
//                 <Button className="bg-foreground text-background hover:bg-foreground/90">Copy Bank Details</Button>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   )
// }
// ========== 7. DONATION COMPONENT (UPDATED CONTENT) ==========
function Donation() {
  const [isOverseasModalOpen, setIsOverseasModalOpen] = useState(false)

  return (
    <>
      <section className="py-24 px-4 bg-muted/30" id="donate">
        <div className="container mx-auto max-w-6xl">
          
          {/* ================= NEW SECTION: WHY WE NEED DONATION ================= */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-2">
              <HeartHandshake className="w-4 h-4" />
              <span>Join Our Mission</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Empowering Lives, Creating Impact
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We have created meaningful impacts in rural education and healthcare. 
              Your contribution helps us sustain these efforts. Join us and empower the mission to help the needy—every rupee counts towards building a better future.
            </p>
          </div>

          {/* ================= SECTION 1: DONATION CARDS ================= */}
          <div className="grid md:grid-cols-2 gap-8 items-start mb-20">
            
            {/* --- Domestic Donors Card (UPDATED CONTENT) --- */}
            <motion.div 
              whileHover={{ y: -5 }} 
              className="bg-card rounded-3xl p-8 lg:p-10 shadow-xl border border-border relative overflow-hidden flex flex-col h-full"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-[#a7150b]" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-red-50 rounded-2xl text-[#a7150b]">
                  <FileText className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Domestic Donors</h3>
                  <span className="text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full">
                    Indian Citizens Only
                  </span>
                </div>
              </div>

              {/* Updated Content based on 80G Reference */}
              <div className="space-y-4 mb-8 flex-1">
                <p className="text-muted-foreground">
                  Maximize your philanthropic impact while saving on taxes. Your contributions support vital education and rural development initiatives.
                </p>
                <ul className="space-y-3">
                  {[
                    "Eligible for Section 80G Tax Exemption",
                    "Valid Receipt with PAN for IT Returns",
                    "Supports Education & Rural Development"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                      <CheckCircle2 className="w-5 h-5 text-[#a7150b] shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
                
                {/* Note from Reference Document */}
                <div className="bg-red-50 border border-red-100 rounded-lg p-3 flex gap-2 text-xs text-red-800">
                   <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                   <p>Note: As per Govt regulations, cash donations exceeding ₹2,000 are not eligible for 80G deduction. Please use digital modes.</p>
                </div>
              </div>

              <Link href="https://www.omsakthiamma.org/online_services/donations" className="block w-full mt-auto">
                <Button className="w-full bg-[#a7150b] hover:bg-[#8a0d08] text-white h-14 text-lg rounded-xl shadow-md transition-all hover:scale-[1.02]">
                  Donate via UPI / NetBanking
                </Button>
              </Link>
            </motion.div>


            {/* --- Foreign Donors Card (CONTENT UNCHANGED) --- */}
            <motion.div 
              whileHover={{ y: -5 }} 
              className="bg-foreground rounded-3xl p-8 lg:p-10 shadow-xl relative overflow-hidden flex flex-col text-background h-full"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-[#ffc107]" />
              
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-white/10 rounded-2xl text-[#ffc107]">
                  <Globe className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Foreign Donors</h3>
                  <span className="text-sm font-medium text-foreground bg-[#ffc107] px-3 py-1 rounded-full">
                    FCRA Approved
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {["Government Approved FCRA", "International Wire Transfer", "SWIFT Transfer Support"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-background/80">
                    <CheckCircle2 className="w-5 h-5 text-[#ffc107]" /> {item}
                  </li>
                ))}
              </ul>

              {/* ACTION: View Procedure Button (Yellow) */}
              <div className="mt-auto">
                <Button 
                  onClick={() => setIsOverseasModalOpen(true)} 
                  className="w-full bg-[#ffc107] hover:bg-[#e6ac00] text-foreground font-bold h-14 text-lg rounded-xl shadow-md transition-all hover:scale-[1.02]"
                >
                  View Overseas Donation Procedure
                </Button>
              </div>
            </motion.div>
          </div>


          {/* ================= SECTION 2: CERTIFICATE IMAGES ================= */}
          <div className="space-y-16">
            
            <div className="flex items-center justify-center gap-3">
               <ShieldCheck className="w-8 h-8 text-primary" />
               <h2 className="text-3xl font-bold text-center text-foreground">Legal Certificates & Documents</h2>
            </div>

            {/* 1. 80G Certificate (Domestic) */}
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-border">
               <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                  <FileText className="w-6 h-6 text-[#a7150b]" />
                  <h3 className="text-xl font-bold text-foreground">80G Tax Exemption Certificate (Domestic)</h3>
               </div>
               
               <div className="flex justify-center bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <Image 
                    src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766169266/Screenshot_2025-12-20_000354_vxwwyc.png" 
                    alt="80G Certificate" 
                    width={800} 
                    height={1000}
                    className="w-full max-w-3xl h-auto shadow-sm" 
                  />
               </div>
            </div>

            {/* 2. FCRA Certificates (Foreign) */}
            <div className="bg-slate-900 rounded-3xl p-8 lg:p-12 shadow-lg relative overflow-hidden text-white">
               <div className="absolute top-0 left-0 w-full h-2 bg-[#ffc107]" />
               
               <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
                  <Globe className="w-6 h-6 text-[#ffc107]" />
                  <h3 className="text-xl font-bold">FCRA Renewal Certificate (Foreign)</h3>
               </div>

               <div className="grid md:grid-cols-2 gap-8">
                  {/* Page 1 */}
                  <div className="space-y-3">
                     <p className="text-sm text-center text-white/60 font-medium">Page 01</p>
                     <div className="rounded-xl overflow-hidden border border-white/20 shadow-lg bg-white">
                        <Image 
                          src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766133511/Renewal-Certificate-_ASPWCT_TRUST_FCRA_page-0001_nw5ao7.jpg" 
                          alt="FCRA Renewal Page 1" 
                          width={600}
                          height={800}
                          className="w-full h-auto" 
                        />
                     </div>
                  </div>

                  {/* Page 2 */}
                  <div className="space-y-3">
                     <p className="text-sm text-center text-white/60 font-medium">Page 02</p>
                     <div className="rounded-xl overflow-hidden border border-white/20 shadow-lg bg-white">
                        <Image 
                          src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766133704/Renewal-Certificate-_ASPWCT_TRUST_FCRA_page-0002_vth9g7.jpg" 
                          alt="FCRA Renewal Page 2" 
                          width={600}
                          height={800}
                          className="w-full h-auto" 
                        />
                     </div>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= MODAL FOR OVERSEAS PROCEDURE ================= */}
      <AnimatePresence>
        {isOverseasModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOverseasModalOpen(false)}
            className="fixed inset-0 bg-black/70 z-50 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-3xl h-[90vh] bg-background rounded-2xl shadow-2xl flex flex-col relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-5 border-b bg-muted z-10 shrink-0">
                <h3 className="font-bold text-xl text-foreground">Overseas Donation Procedure</h3>
                <button onClick={() => setIsOverseasModalOpen(false)} className="p-2 hover:bg-muted/80 rounded-full">
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-8">
                <div className="bg-yellow-50 border-l-4 border-[#ffc107] p-4 mb-6 text-sm">
                  <p className="font-bold mb-1 text-yellow-800">Important Note:</p>
                  <p className="text-black">
                    Donations can be done only through Wire Transfer to the specified Bank Account. UPI/NEFT/RTGS from
                    Indian banks are restricted.
                  </p>
                </div>

                <h4 className="font-bold text-lg mb-4 flex items-center gap-2 text-foreground">
                  <Building2 className="w-5 h-5 text-[#a7150b]" /> Wire Transfer Details
                </h4>
                <div className="bg-muted rounded-xl p-6 border border-border space-y-3 font-mono text-sm mb-8">
                  <div className="flex flex-col sm:flex-row sm:justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground font-sans">Account Name</span>
                    <span className="font-bold text-right text-foreground">
                      Adhiparasakthi Charitable Medical Educational and Cultural Trust
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground font-sans">Account No</span>
                    <span className="font-bold text-lg text-foreground">40209740361</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground font-sans">Bank Name</span>
                    <span className="font-bold text-foreground">State Bank of India</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground font-sans">Branch</span>
                    <span className="font-bold text-foreground">New Delhi Main Branch (Code: 00691)</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-muted-foreground font-sans">SWIFT Code</span>
                    <span className="font-bold bg-yellow-100 px-2 rounded text-black">SBININBB104</span>
                  </div>
                </div>

                <h4 className="font-bold text-lg mb-4 flex items-center gap-2 text-foreground">
                  <Mail className="w-5 h-5 text-[#a7150b]" /> Mandatory Reporting
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  On successful transfer, kindly share the following details +{" "}
                  <strong>Passport Copy (Front & Back)</strong> to{" "}
                  <span className="font-bold text-foreground">ASPWCTtrust@gmail.com</span>:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm font-medium text-foreground bg-muted p-4 rounded-lg">
                  <li>1. Name of Donor</li>
                  <li>2. Donor Address</li>
                  <li>3. Purpose of Remittance</li>
                  <li>4. Country of Donor</li>
                  <li>5. Currency & Amount</li>
                  <li>6. ID Proof (Passport)</li>
                </ul>
              </div>

              <div className="p-4 bg-muted border-t flex justify-end gap-3 shrink-0">
                <Button variant="outline" onClick={() => setIsOverseasModalOpen(false)}>
                  Close
                </Button>
                <Button className="bg-foreground text-background hover:bg-foreground/90">Copy Bank Details</Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function CsrProjects() {
  return (
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto space-y-24">
          
          {/* ================= PROJECT 1: EYE CAMP ================= */}
          <div>
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
  )
}

// ========== 9. CSR INQUIRY FORM COMPONENT ==========
function CsrInquiry() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle")
  const [selectedProject, setSelectedProject] = useState("")

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("submitting")
    setTimeout(() => {
      setFormStatus("success")
    }, 1500)
  }

  return (
    <section className="py-24 px-4 bg-[#ffc107] relative">
      <div className="container mx-auto max-w-5xl relative z-10">
        <Card className="border-none shadow-2xl rounded-3xl overflow-hidden">
          <div className="grid md:grid-cols-5">
            {/* Form Side */}
            <div className="md:col-span-3 p-8 md:p-12 bg-background">
              <div className="mb-8">
                <h3 className="text-3xl font-serif font-bold text-foreground">Partner with Us</h3>
                <p className="text-muted-foreground mt-2">Interested in a CSR collaboration? Let's connect.</p>
              </div>

              {formStatus === "success" ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-64 flex flex-col items-center justify-center text-center">
                  <CheckCircle2 className="w-16 h-16 text-green-600 mb-4" />
                  <h4 className="text-xl font-bold text-foreground">Inquiry Sent!</h4>
                  <p className="text-muted-foreground">We will get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" required placeholder="John Doe" className="bg-muted border-border h-11 focus:ring-[#a7150b]" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" required placeholder="Tech Corp" className="bg-muted border-border h-11 focus:ring-[#a7150b]" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" required placeholder="john@example.com" className="bg-muted border-border h-11 focus:ring-[#a7150b]" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" required placeholder="+91..." className="bg-muted border-border h-11 focus:ring-[#a7150b]" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="project">Interested Project</Label>
                    <Select onValueChange={(value) => setSelectedProject(value)}>
                      <SelectTrigger className="bg-muted border-border h-11"><SelectValue placeholder="Select a project" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="education">EDUCATION</SelectItem>
                        <SelectItem value="eye-camp">EYE CAMP</SelectItem>
                        <SelectItem value="medical">MEDICAL</SelectItem>
                        <SelectItem value="feeding-poor">FEEDING POOR</SelectItem>
                        <SelectItem value="others">OTHERS</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  {selectedProject === "others" && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="space-y-2">
                      <Label htmlFor="other-details">Specify Details</Label>
                      <Input id="other-details" required placeholder="Please specify..." className="bg-muted border-border h-11 focus:ring-[#a7150b]" />
                    </motion.div>
                  )}
                  <div className="space-y-2">
                    <Label htmlFor="remarks">Remarks</Label>
                    <Textarea id="remarks" placeholder="Any specific requirements?" className="bg-muted border-border resize-none focus:ring-[#a7150b]" rows={3} />
                  </div>
                  <Button type="submit" disabled={formStatus === "submitting"} className="w-full bg-[#a7150b] hover:bg-[#8a0d08] text-white font-bold h-12 text-lg rounded-xl">
                    {formStatus === "submitting" ? "Sending..." : "Submit Inquiry"}
                  </Button>
                </form>
              )}
            </div>

            {/* Info Side */}
            <div className="md:col-span-2 bg-foreground p-8 md:p-12 text-background flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-5">
                <Building2 size={200} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-6 text-[#ffc107]">
                  Contact Information
                </h4>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-[#ffc107] shrink-0 mt-1" />
                    <div>
                      <p className="text-xs text-background/60 uppercase tracking-wider">
                        Email Us
                      </p>
                      <p className="font-medium text-sm">
                        contact@ASPWCTtrust.org
                      </p>
                    </div>
                  </div>               
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-[#ffc107] shrink-0 mt-1" />
                    <div>
                      <p className="text-xs text-background/60 uppercase tracking-wider mb-1">
                        Call Us
                      </p>
                      <div className="space-y-1 text-sm font-medium">
                        <p>Landline: +91 44 2752 9313</p>
                        <p>Mobile: +91 91500 45391</p>
                        <p>Whatsapp: +91 91500 45391</p>
                        <p>PRO: +91 44 27529276</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Building2 className="w-6 h-6 text-[#ffc107] shrink-0 mt-1" />
                    <div>
                      <p className="text-xs text-background/60 uppercase tracking-wider mb-1">
                        Visit Us
                      </p>
                      <p className="font-medium text-sm leading-relaxed text-background/90">
                        <span className="font-bold block mb-1">
                          Adhiparasakthi Charitable Medical Educational and
                          Cultural Trust
                        </span>
                        No.1 GST Road, Adhiparasakthi Siddhar Peedam Temple
                        Campus, Melmaruvathur, Chengalpet District,
                        TamilNadu-603319, India
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-[#ffc107] shrink-0 mt-1" />
                    <div>
                      <p className="text-xs text-background/60 uppercase tracking-wider mb-1">
                        Timing
                      </p>
                      <p className="font-medium text-sm">
                        8:00 am To 8:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-xs text-background/60">
                  By submitting this form, you agree to our privacy policy
                  regarding data collection.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}