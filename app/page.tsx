// // // "use client"

// // // import { useState } from "react"
// // // import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
// // // import Image from "next/image"
// // // import Link from "next/link"
// // // import {
// // //   Heart,
// // //   CheckCircle2,
// // //   Facebook,
// // //   Twitter,
// // //   Mail,
// // //   Landmark,
// // //   Activity,
// // //   Eye,
// // //   FileText,
// // //   Globe,
// // //   Phone,
// // //   Building2,
// // //   Download,
// // //   X,
// // //   Clock,
// // //   AlertTriangle,
// // //   ShieldCheck,
// // //   AlertCircle,
// // //   HeartHandshake,
// // // } from "lucide-react"
// // // import { Button } from "@/components/ui/button"
// // // import { Card } from "@/components/ui/card"
// // // import { Input } from "@/components/ui/input"
// // // import { Label } from "@/components/ui/label"
// // // import { Textarea } from "@/components/ui/textarea"
// // // import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// // // // ========== ANIMATION VARIANTS ==========
// // // const fadeInUp = {
// // //   hidden: { opacity: 0, y: 30 },
// // //   visible: {
// // //     opacity: 1,
// // //     y: 0,
// // //     transition: { duration: 0.6, ease: "easeOut" },
// // //   },
// // // }

// // // const staggerContainer = {
// // //   hidden: { opacity: 0 },
// // //   visible: {
// // //     opacity: 1,
// // //     transition: { staggerChildren: 0.15, delayChildren: 0.3 },
// // //   },
// // // }

// // // const scaleOnHover = {
// // //   hover: { scale: 1.02, transition: { duration: 0.3 } },
// // // }

// // // // ========== MAIN PAGE EXPORT ==========
// // // export default function Home() {
// // //   return (
// // //     <main className="bg-background overflow-x-hidden font-sans text-foreground selection:bg-[#ffc107] selection:text-black">
// // //       <Hero />
// // //       <About />
// // //       <Leadership />
// // //       <CsrRegistration />
// // //       <MissionVision />
// // //       <Awards />
// // //       <Donation />
// // //       <CsrProjects />
// // //       <CsrInquiry />
// // //     </main>
// // //   )
// // // }

// // // // ========== 1. HERO COMPONENT ==========
// // // function Hero() {
// // //   const { scrollY } = useScroll()
// // //   const y1 = useTransform(scrollY, [0, 500], [0, 150])

// // //   return (
// // //     <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
// // //       <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
// // //         <Image
// // //           src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766091901/dental-hospital_cd4gda.jpg"
// // //           alt="Hero Background"
// // //           fill
// // //           className="object-cover scale-110"
// // //           priority
// // //         />
// // //         <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
// // //       </motion.div>

// // //       <div className="relative z-10 container mx-auto px-4 pt-20">
// // //         <motion.div
// // //           initial="hidden"
// // //           animate="visible"
// // //           variants={staggerContainer}
// // //           className="max-w-5xl mx-auto text-center"
// // //         >
// // //           <motion.div variants={fadeInUp} className="inline-block mb-6">
// // //             <span className="px-5 py-2.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-[#ffc107] text-sm font-bold tracking-widest uppercase shadow-lg">
// // //               Est. 1988 • Registered Trust
// // //             </span>
// // //           </motion.div>

// // //           <motion.h1
// // //             variants={fadeInUp}
// // //             className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-[1.1] drop-shadow-2xl text-balance"
// // //           >
// // //             Healing Hands.{" "}
// // //             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffc107] via-yellow-300 to-[#ffc107] animate-gradient">
// // //               Compassionate Hearts.
// // //             </span>
// // //           </motion.h1>

// // //           <motion.p
// // //             variants={fadeInUp}
// // //             className="text-lg md:text-2xl text-gray-200 mb-12 leading-relaxed font-light max-w-3xl mx-auto text-balance"
// // //           >
// // //             Adhiparasakthi Charitable Medical Educational & Cultural Trust (ASPWCT) dedicated to serving humanity
// // //             through holistic healthcare and education.
// // //           </motion.p>

// // //           <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-8">
// // //             <Link href="https://aspwct.omsakthiamma.in/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto group">
// // //               <Button className="w-full sm:w-auto bg-[#a7150b] hover:bg-[#d91e11] text-white rounded-full px-10 py-7 text-lg font-bold shadow-[0_0_40px_-10px_rgba(167,21,11,0.6)] transition-all hover:scale-105 hover:shadow-[0_0_60px_-10px_rgba(167,21,11,0.8)]">
// // //                 <Heart className="mr-3 w-5 h-5 fill-current group-hover:animate-pulse" />
// // //                 Donate Now
// // //               </Button>
// // //             </Link>
// // //             <Link href="#about" className="w-full sm:w-auto">
// // //               <Button
// // //                 variant="outline"
// // //                 className="w-full sm:w-auto border-2 border-white/40 text-white hover:bg-white hover:text-black rounded-full px-10 py-7 text-lg font-bold backdrop-blur-sm transition-all hover:scale-105 bg-white/5"
// // //               >
// // //                 Explore Our Work
// // //               </Button>
// // //             </Link>
// // //           </motion.div>
// // //         </motion.div>
// // //       </div>

// // //       <motion.div
// // //         initial={{ opacity: 0 }}
// // //         animate={{ opacity: 1 }}
// // //         transition={{ delay: 2 }}
// // //         className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
// // //       >
// // //         <motion.div
// // //           animate={{ y: [0, 10, 0] }}
// // //           transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
// // //           className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2"
// // //         >
// // //           <motion.div className="w-1 h-2 bg-white rounded-full" />
// // //         </motion.div>
// // //       </motion.div>
// // //     </section>
// // //   )
// // // }

// // // // ========== 2. ABOUT COMPONENT ==========
// // // function About() {
// // //   return (
// // //     <section id="about" className="py-24 md:py-32 px-4 container mx-auto">
// // //       <div className="grid lg:grid-cols-2 gap-16 items-center">
// // //         <motion.div
// // //           initial="hidden"
// // //           whileInView="visible"
// // //           viewport={{ once: true, margin: "-100px" }}
// // //           variants={staggerContainer}
// // //         >
// // //           <motion.span
// // //             variants={fadeInUp}
// // //             className="inline-block px-4 py-2 bg-[#a7150b]/10 text-[#a7150b] rounded-full text-xs font-bold tracking-widest uppercase mb-4"
// // //           >
// // //             About The Trust
// // //           </motion.span>
// // //           <motion.h2
// // //             variants={fadeInUp}
// // //             className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 leading-tight text-balance"
// // //           >
// // //             A Legacy of Service{" "}
// // //             <span className="relative inline-block">
// // //               <span className="relative z-10">Since 1988</span>
// // //               <span className="absolute bottom-2 left-0 right-0 h-3 bg-[#ffc107] -z-0" />
// // //             </span>
// // //           </motion.h2>

// // //           <motion.div variants={fadeInUp} className="text-muted-foreground text-lg leading-relaxed mb-8 space-y-4">
// // //             <p>
// // //               M/s Adhiparasakthi Siddhar Peeda Women's Charitable Trust (ASPWCT Trust), as the name suggests
// // //               has dedicated itself to serve the people in the areas of:
// // //             </p>

// // //             <div className="grid sm:grid-cols-2 gap-3 py-4">
// // //               {["Charity", "Medical", "Educational", "Cultural Activities"].map((item) => (
// // //                 <div key={item} className="flex items-center gap-3 group">
// // //                   <div className="w-10 h-10 rounded-full bg-[#a7150b]/10 group-hover:bg-[#a7150b] transition-colors flex items-center justify-center">
// // //                     <CheckCircle2 className="text-[#a7150b] group-hover:text-white w-5 h-5 transition-colors" />
// // //                   </div>
// // //                   <span className="font-semibold text-foreground">{item}</span>
// // //                 </div>
// // //               ))}
// // //             </div>

// // //             <p>
// // //               This trust is a non-profitable organization which was founded by{" "}
// // //               <strong className="text-foreground">H.H. Bangaru Adigalar</strong> in the year 1988 with a small corpus
// // //               fund and with few cents of land in Melmaruvathur.
// // //             </p>
// // //           </motion.div>

// // //           <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-6">
// // //             <div className="group hover:scale-105 transition-transform">
// // //               <Card className="p-6 border-l-4 border-[#ffc107] bg-gradient-to-br from-[#ffc107]/5 to-transparent hover:shadow-lg transition-shadow">
// // //                 <h4 className="text-4xl font-bold text-foreground mb-1">1988</h4>
// // //                 <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Established</p>
// // //               </Card>
// // //             </div>
// // //             <div className="group hover:scale-105 transition-transform">
// // //               <Card className="p-6 border-l-4 border-[#a7150b] bg-gradient-to-br from-[#a7150b]/5 to-transparent hover:shadow-lg transition-shadow">
// // //                 <h4 className="text-2xl font-bold text-foreground mb-1">Melmaruvathur</h4>
// // //                 <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Headquarters</p>
// // //               </Card>
// // //             </div>
// // //           </motion.div>
// // //         </motion.div>

// // //         <motion.div
// // //           initial={{ opacity: 0, x: 50 }}
// // //           whileInView={{ opacity: 1, x: 0 }}
// // //           viewport={{ once: true }}
// // //           transition={{ duration: 0.8 }}
// // //           className="relative group"
// // //         >
// // //           <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
// // //             <Image
// // //               src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766143744/a12_nbqg5x.webp"
// // //               alt="Medical Service"
// // //               width={700}
// // //               height={500}
// // //               className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
// // //             />
// // //           </div>
// // //           <div className="absolute -top-10 -right-10 w-72 h-72 bg-[#ffc107]/20 rounded-full blur-3xl -z-10 group-hover:bg-[#ffc107]/30 transition-colors" />
// // //           <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-[#a7150b]/10 rounded-full blur-3xl -z-10 group-hover:bg-[#a7150b]/20 transition-colors" />
// // //         </motion.div>
// // //       </div>
// // //     </section>
// // //   )
// // // }

// // // // ========== 3. LEADERSHIP COMPONENT ==========
// // // function Leadership() {
// // //   return (
// // //     <section className="py-24 bg-muted/30">
// // //       <div className="container mx-auto px-4">
// // //         {/* Founders */}
// // //         <div className="mb-24">
// // //           <div className="text-center mb-16">
// // //             <span className="inline-block px-4 py-2 bg-[#a7150b]/10 text-[#a7150b] rounded-full text-xs font-bold tracking-widest uppercase mb-4">
// // //               Leadership
// // //             </span>
// // //             <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
// // //               Founder & President
// // //             </h2>
// // //           </div>

// // //           <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
// // //             {[
// // //               {
// // //                 name: "His Holiness Bangaru Adigalar",
// // //                 role: "Founder",
// // //                 image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766091903/3952Founder-President_k3xqz3.png",
// // //                 bgColor: "from-[#ffc107]/10 to-[#ffc107]/5",
// // //                 borderColor: "border-[#ffc107]",
// // //               },
// // //               {
// // //                 name: "Smt. Lakshmi Bangaru Adigalar",
// // //                 role: "President",
// // //                 image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766091895/Vice-President_z3lp84.jpg",
// // //                 bgColor: "from-[#a7150b]/10 to-[#a7150b]/5",
// // //                 borderColor: "border-[#a7150b]",
// // //               },
// // //             ].map((person, idx) => (
// // //               <motion.div
// // //                 key={person.name}
// // //                 initial={{ opacity: 0, y: 30 }}
// // //                 whileInView={{ opacity: 1, y: 0 }}
// // //                 viewport={{ once: true }}
// // //                 transition={{ delay: idx * 0.2 }}
// // //                 whileHover={{ y: -8 }}
// // //               >
// // //                 <Card className={`p-8 text-center border-2 ${person.borderColor} bg-gradient-to-br ${person.bgColor} hover:shadow-2xl transition-all group`}>
// // //                   <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-background shadow-xl mb-6 relative group-hover:scale-105 transition-transform">
// // //                     <Image src={person.image} alt={person.name} fill className="object-cover" />
// // //                   </div>
// // //                   <h3 className="text-2xl font-serif font-bold text-foreground mb-2">{person.name}</h3>
// // //                   <p className="text-[#a7150b] font-bold uppercase tracking-widest text-sm mb-6">{person.role}</p>
// // //                 </Card>
// // //               </motion.div>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         {/* Board of Trustees Grid */}
// // //         <div className="text-center mb-16">
// // //           <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Board of Trustees</h2>
// // //           <div className="w-24 h-1.5 bg-[#ffc107] mx-auto rounded-full" />
// // //         </div>

// // //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 max-w-6xl mx-auto">
// // //           {[
// // //             { name: "Mrs. V. Lakshmi", role: "President / Executive Trustee" },
// // //             { name: "Mr. G.B. Anbalagan", role: "Vice President / Trustee" },
// // //             { name: "Mr. G.B. Senthil Kumar", role: "Vice President / Trustee" },
// // //             { name: "Mrs. B. Sridevi", role: "Treasurer / Trustee" },
// // //             { name: "Mrs. B. Umadevi", role: "Secretary / Trustee" },
// // //           ].map((trustee, idx) => (
// // //             <motion.div
// // //               key={idx}
// // //               initial={{ opacity: 0, y: 20 }}
// // //               whileInView={{ opacity: 1, y: 0 }}
// // //               viewport={{ once: true }}
// // //               transition={{ delay: idx * 0.1 }}
// // //               whileHover={{ y: -5 }}
// // //             >
// // //               <Card className="p-6 hover:shadow-xl transition-all group bg-gradient-to-br from-[#ffc107]/5 to-transparent border-2 border-transparent hover:border-[#ffc107]/30">
// // //                 <div className="flex items-start gap-4">
// // //                   <div className="w-14 h-14 bg-[#ffc107] text-foreground rounded-full flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform font-bold text-xl">
// // //                     {trustee.name.split(" ")[1][0]}
// // //                   </div>
// // //                   <div className="flex-1">
// // //                     <h3 className="text-lg font-bold text-foreground group-hover:text-[#a7150b] transition-colors mb-2">
// // //                       {trustee.name}
// // //                     </h3>
// // //                     <span className="inline-block px-3 py-1 bg-[#a7150b]/10 text-[#a7150b] rounded-full text-xs font-bold uppercase tracking-wide">
// // //                       {trustee.role}
// // //                     </span>
// // //                   </div>
// // //                 </div>
// // //               </Card>
// // //             </motion.div>
// // //           ))}
// // //         </div>
        
// // //         {/* General Trustees Grid */}
// // //         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
// // //           {[
// // //             { name: "Mr. R. Karunanithi", role: "Trustee" },
// // //             { name: "Mr. K. Arulmozhi", role: "Trustee" },
// // //             { name: "Mr. S.R. Raghuvir", role: "Trustee" },
// // //             { name: "Mr. A. Saiprasad", role: "Trustee" },
// // //           ].map((trustee, idx) => (
// // //             <motion.div
// // //               key={trustee.name}
// // //               initial={{ opacity: 0, y: 20 }}
// // //               whileInView={{ opacity: 1, y: 0 }}
// // //               viewport={{ once: true }}
// // //               transition={{ delay: (idx + 5) * 0.1 }}
// // //               whileHover={{ y: -5 }}
// // //             >
// // //               <Card className="p-6 hover:shadow-lg transition-all group border-2">
// // //                 <div className="flex flex-col gap-3">
// // //                   <div className="flex items-center justify-between">
// // //                     <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center font-bold text-muted-foreground">
// // //                       {trustee.name.split(" ")[1][0]}
// // //                     </div>
// // //                     <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest border border-border px-2 py-1 rounded">
// // //                       {trustee.role}
// // //                     </span>
// // //                   </div>
// // //                   <h4 className="text-base font-bold text-foreground group-hover:text-[#a7150b] transition-colors">
// // //                     {trustee.name}
// // //                   </h4>
// // //                 </div>
// // //               </Card>
// // //             </motion.div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   )
// // // }

// // // function CsrRegistration() {
  
// // //   // Animation variants
// // //   const staggerContainer = {
// // //     hidden: { opacity: 0 },
// // //     visible: {
// // //       opacity: 1,
// // //       transition: { staggerChildren: 0.2 }
// // //     }
// // //   }

// // //   return (
// // //     <section className="py-20 bg-foreground text-background">
// // //       <div className="container mx-auto px-4">
// // //         <div className="grid lg:grid-cols-2 gap-12 items-center">
          
// // //           {/* --- Left Side: Text Content --- */}
// // //           <motion.div 
// // //             initial="hidden" 
// // //             whileInView="visible" 
// // //             viewport={{ once: true }} 
// // //             variants={staggerContainer}
// // //           >
// // //             <div className="flex items-center gap-3 mb-4">
// // //               <Landmark className="w-8 h-8 text-[#ffc107]" />
// // //               <span className="text-[#ffc107] font-bold tracking-widest uppercase text-sm">Government of India</span>
// // //             </div>
            
// // //             <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Official CSR Registration</h2>
            
// // //             <p className="text-background/80 text-lg mb-8 leading-relaxed">
// // //               Adhiparasakthi Siddhar Peeda Women's Charitable Trust is officially registered with the
// // //               Ministry of Corporate Affairs for undertaking CSR activities.
// // //             </p>
            
// // //             <div className="grid sm:grid-cols-2 gap-6">
// // //               <div className="bg-white/10 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
// // //                 <p className="text-xs text-background/60 uppercase tracking-widest mb-1">Registration Number</p>
// // //                 <p className="text-2xl font-mono font-bold text-[#ffc107]">CSR00002407</p>
// // //               </div>
// // //               <div className="bg-white/10 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
// // //                 <p className="text-xs text-background/60 uppercase tracking-widest mb-1">Date of Registration</p>
// // //                 <p className="text-xl font-bold">16-04-2021</p>
// // //               </div>
// // //             </div>
// // //           </motion.div>

// // //           {/* --- Right Side: Actual CSR Letter Image --- */}
// // //           <motion.div
// // //             initial={{ opacity: 0, x: 50 }}
// // //             whileInView={{ opacity: 1, x: 0 }}
// // //             viewport={{ once: true }}
// // //             transition={{ duration: 0.8 }}
// // //             className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10"
// // //           >
// // //             <div className="bg-white p-2">
// // //                 <Image 
// // //                   src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766132506/Screenshot_2025-12-19_134112_js329n.png" 
// // //                   alt="Official CSR Approval Letter" 
// // //                   width={800}
// // //                   height={1000}
// // //                   className="w-full h-auto object-contain"
// // //                 />
// // //             </div>
            
// // //             {/* Optional: Overlay Badge */}
// // //             <div className="absolute top-4 right-4 bg-[#ffc107] text-foreground text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
// // //               <FileText className="w-3 h-3" /> Official Document
// // //             </div>
// // //           </motion.div>

// // //         </div>
// // //       </div>
// // //     </section>
// // //   )
// // // }

// // // // ========== 5. MISSION & VISION COMPONENT ==========
// // // function MissionVision() {
// // //   return (
// // //     <section className="py-24 px-4 bg-muted relative overflow-hidden">
// // //       <div className="container mx-auto relative z-10">
// // //         <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
// // //           <motion.div whileHover="hover" variants={scaleOnHover} className="bg-gradient-to-br from-[#a7150b] to-[#800f07] p-10 md:p-14 rounded-3xl shadow-2xl relative overflow-hidden group border border-white/10">
// // //             <div className="relative z-10">
// // //               <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8">
// // //                 <Activity className="text-white w-8 h-8" />
// // //               </div>
// // //               <h3 className="text-3xl font-serif font-bold mb-4 text-white">Our Mission</h3>
// // //               <p className="text-white/80 text-lg leading-relaxed">
// // //               The ASPWCT Trust is committed to the selfless service of humanity by managing resources with transparency and strategic foresight to deliver high-quality social welfare services
// // //               </p>
// // //             </div>
// // //           </motion.div>

// // //           <motion.div whileHover="hover" variants={scaleOnHover} className="bg-gradient-to-br from-[#ffc107] to-[#e6ac00] p-10 md:p-14 rounded-3xl shadow-2xl relative overflow-hidden group border border-white/10">
// // //             <div className="relative z-10">
// // //               <div className="w-14 h-14 bg-black/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8">
// // //                 <Eye className="text-foreground w-8 h-8" />
// // //               </div>
// // //               <h3 className="text-3xl font-serif font-bold mb-4 text-foreground">Our Vision</h3>
// // //               <p className="text-foreground/80 text-lg leading-relaxed font-medium">
// // //                 To create a sustainable, inclusive society where the burdens of human suffering are alleviated through institutional excellence in healthcare, education, and cultural preservation. Our vision is to serve as a perpetual pillar of community support, governed by integrity and the spiritual principle of universal welfare—offering solace and opportunity to all, regardless of caste, creed, colour, or religion.
// // //               </p>
// // //             </div>
// // //           </motion.div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   )
// // // }

// // // // ========== 6. AWARDS COMPONENT ==========
// // // function Awards() {
// // //   const awards = [
// // //     { img: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092337/2911191530526914-150x150_a5fseg.jpg", title: "State Govt Honor", desc: "Honored by Chief Minister Ms. J. Jayalalitha..." },
// // //     { img: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092336/2911191530538674-150x150_semv32.jpg", title: "Nirmal Gram Puraskar", desc: "National award for sanitation..." },
// // //     { img: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092336/2911191530539144-150x150_dyivy6.jpg", title: "Certificate of Excellence", desc: "Recognition for outstanding contribution..." },
// // //     { img: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092336/2911191530534191-150x150_lo2fc6.jpg", title: "Best Institution", desc: "Awarded to Adhiparasakthi Annai Illam..." },
// // //     { img: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092338/2911191530529377-150x150_mz3ixh.jpg", title: "Award of Appreciation", desc: "Awarded by the Department of Health..." },
// // //     { img: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092338/2911191530527252-150x150_ud5spj.jpg", title: "Regional Recognition", desc: "Acknowledging our continuous support..." },
// // //     { img: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092337/2911191530521793-150x150_hqdtpk.jpg", title: "Official Certification", desc: "Certification of merit from authorized government bodies." },
// // //     { img: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092338/awards-150x150_rtu0ni.png", title: "National Honor", desc: "Founder H.H. Bangaru Adigalar receiving award...", badge: "Highest Honor" },
// // //   ]

// // //   return (
// // //     <section className="py-24 bg-background border-y border-border">
// // //       <div className="container mx-auto px-4">
// // //         <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
// // //           <span className="inline-block px-4 py-2 bg-[#a7150b]/10 text-[#a7150b] rounded-full text-xs font-bold tracking-widest uppercase mb-4">Our Achievements</span>
// // //           <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Significant Awards and Recognition</h2>
// // //           <div className="w-24 h-1.5 bg-[#ffc107] mx-auto mt-6 rounded-full" />
// // //         </motion.div>

// // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
// // //           {awards.map((award, idx) => (
// // //             <motion.div key={idx} whileHover={{ y: -8 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="group bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300">
// // //               <div className="relative h-64 overflow-hidden border-b border-border">
// // //                 <Image src={award.img} alt={award.title} fill className="object-fill group-hover:scale-105 transition-transform duration-500" />
// // //                 {award.badge && <div className="absolute top-2 right-2 bg-[#ffc107] text-foreground text-xs font-bold px-2 py-1 rounded">{award.badge}</div>}
// // //               </div>
// // //               <div className="p-5">
// // //                 <h4 className="font-bold text-foreground leading-tight mb-2 group-hover:text-[#a7150b] transition-colors">{award.title}</h4>
// // //                 <p className="text-sm text-muted-foreground leading-relaxed">{award.desc}</p>
// // //               </div>
// // //             </motion.div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   )
// // // }

// // // // // ========== 7. DONATION COMPONENT ==========
// // // // function Donation() {
// // // //   const [isDocModalOpen, setIsDocModalOpen] = useState(false)
// // // //   const [isFcraRenewalModalOpen, setIsFcraRenewalModalOpen] = useState(false)
// // // //   const [isOverseasModalOpen, setIsOverseasModalOpen] = useState(false)

// // // //   return (
// // // //     <>
// // // //       <section className="py-24 px-4 bg-muted/30" id="donate">
// // // //         <div className="container mx-auto max-w-6xl">
// // // //           <div className="grid md:grid-cols-2 gap-8">
// // // //             {/* Domestic Card */}
// // // //             <motion.div whileHover={{ y: -8 }} className="bg-card rounded-3xl p-8 lg:p-12 shadow-xl border border-border relative overflow-hidden flex flex-col">
// // // //               <div className="absolute top-0 left-0 w-full h-2 bg-[#a7150b]" />
// // // //               <div className="flex items-center gap-4 mb-8">
// // // //                 <div className="p-4 bg-red-50 rounded-2xl text-[#a7150b]"><FileText className="w-8 h-8" /></div>
// // // //                 <div><h3 className="text-2xl font-bold text-foreground">Domestic Donors</h3><span className="text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full">80G Tax Exempt</span></div>
// // // //               </div>
// // // //               <ul className="space-y-4 mb-10 flex-1">
// // // //                 {["50% Tax Exemption", "Instant e-Receipt", "Digital Certificate"].map((item, i) => (
// // // //                   <li key={i} className="flex items-center gap-3 text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-[#a7150b]" /> {item}</li>
// // // //                 ))}
// // // //               </ul>
// // // //               <div className="space-y-4">
// // // //                 <Link href="https://aspwct.omsakthiamma.in/" target="_blank" rel="noopener noreferrer" className="block w-full"><Button className="w-full bg-[#a7150b] hover:bg-[#8a0d08] text-white h-14 text-lg rounded-xl">Donate via UPI / NetBanking</Button></Link>
// // // //                 <Button onClick={() => setIsDocModalOpen(true)} variant="ghost" className="w-full text-muted-foreground hover:text-[#a7150b]">View 80G Certificate</Button>
// // // //               </div>
// // // //             </motion.div>

// // // //             {/* Foreign Card */}
// // // //             <motion.div whileHover={{ y: -8 }} className="bg-foreground rounded-3xl p-8 lg:p-12 shadow-xl relative overflow-hidden flex flex-col text-background">
// // // //               <div className="absolute top-0 left-0 w-full h-2 bg-[#ffc107]" />
// // // //               <div className="flex items-center gap-4 mb-8">
// // // //                 <div className="p-4 bg-white/10 rounded-2xl text-[#ffc107]"><Globe className="w-8 h-8" /></div>
// // // //                 <div><h3 className="text-2xl font-bold">Foreign Donors</h3><span className="text-sm font-medium text-foreground bg-[#ffc107] px-3 py-1 rounded-full">FCRA Approved</span></div>
// // // //               </div>
// // // //               <ul className="space-y-4 mb-10 flex-1">
// // // //                 {["Government Approved FCRA", "International Wire Transfer", "SWIFT Transfer Support"].map((item, i) => (
// // // //                   <li key={i} className="flex items-center gap-3 text-background/80"><CheckCircle2 className="w-5 h-5 text-[#ffc107]" /> {item}</li>
// // // //                 ))}
// // // //               </ul>
// // // //               <div className="space-y-4">
// // // //                 <Button onClick={() => setIsOverseasModalOpen(true)} className="w-full bg-[#ffc107] hover:bg-[#e6ac00] text-foreground font-bold h-14 text-lg rounded-xl">View Overseas Donation Procedure</Button>
// // // //                 <Button onClick={() => setIsFcraRenewalModalOpen(true)} variant="ghost" className="w-full text-background/80 hover:text-background">View FCRA Renewal Certificate</Button>
// // // //               </div>
// // // //             </motion.div>
// // // //           </div>
// // // //         </div>
// // // //       </section>

      
// // // //       {/* Donation Modals */}
// // // //       <AnimatePresence>
        
// // // //         {/* 1. 80G Modal - NOW AN IMAGE VIEWER */}
// // // //         {isDocModalOpen && (
// // // //           <motion.div 
// // // //             initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
// // // //             onClick={() => setIsDocModalOpen(false)}
// // // //             className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm flex items-center justify-center p-4"
// // // //           >
// // // //             <motion.div 
// // // //               initial={{ opacity: 0, scale: 0.95 }} 
// // // //               animate={{ opacity: 1, scale: 1 }} 
// // // //               exit={{ opacity: 0, scale: 0.95 }}
// // // //               onClick={(e) => e.stopPropagation()}
// // // //               className="bg-white w-full max-w-4xl h-[90vh] rounded-2xl overflow-hidden shadow-2xl flex flex-col relative"
// // // //             >
// // // //                {/* Modal Header */}
// // // //                <div className="flex justify-between items-center p-4 border-b bg-gray-50 z-10 shrink-0">
// // // //                   <h3 className="font-bold text-gray-800 text-lg">80G Certificate</h3>
// // // //                   <button 
// // // //                     onClick={() => setIsDocModalOpen(false)} 
// // // //                     className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors text-gray-700"
// // // //                   >
// // // //                     <X className="w-6 h-6" />
// // // //                   </button>
// // // //                </div>

// // // //                {/* Scrollable Image Container */}
// // // //                <div className="flex-1 overflow-y-auto bg-gray-100 p-4 md:p-8">
// // // //                   <div className="bg-white shadow-lg mx-auto w-full">
// // // //                       {/* REPLACE WITH YOUR 80G IMAGE PATH */}
// // // //                       <Image 
// // // //                         src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766136367/80G_Ceritficate_for_Receipt_page-0001_uxlp2z.jpg" 
// // // //                         alt="80G Certificate" 
// // // //                         width={1000}
// // // //                         height={1400}
// // // //                         className="w-full h-auto block" 
// // // //                         priority
// // // //                       />
// // // //                   </div>
// // // //                </div>
// // // //             </motion.div>
// // // //           </motion.div>
// // // //         )}
        
// // // //         {/* 2. FCRA Renewal Modal (Updated: 2 Images Vertical Scroll) */}
// // // //         {isFcraRenewalModalOpen && (
// // // //           <motion.div
// // // //             initial={{ opacity: 0 }}
// // // //             animate={{ opacity: 1 }}
// // // //             exit={{ opacity: 0 }}
// // // //             onClick={() => setIsFcraRenewalModalOpen(false)}
// // // //             className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm flex items-center justify-center p-4"
// // // //           >
// // // //             <motion.div
// // // //               initial={{ opacity: 0, scale: 0.95 }}
// // // //               animate={{ opacity: 1, scale: 1 }}
// // // //               exit={{ opacity: 0, scale: 0.95 }}
// // // //               className="bg-white w-full max-w-4xl h-[90vh] rounded-2xl overflow-hidden shadow-2xl flex flex-col relative"
// // // //               onClick={(e) => e.stopPropagation()}
// // // //             >
// // // //                {/* Modal Header */}
// // // //                <div className="flex justify-between items-center p-4 border-b bg-gray-50 z-10 shrink-0">
// // // //                   <h3 className="font-bold text-gray-800 text-lg">FCRA Renewal Certificate (2 Pages)</h3>
// // // //                   <button
// // // //                     onClick={() => setIsFcraRenewalModalOpen(false)}
// // // //                     className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors text-gray-700"
// // // //                   >
// // // //                     <X className="w-6 h-6" />
// // // //                   </button>
// // // //                </div>
              
// // // //               {/* Scrollable Image Container */}
// // // //               <div className="flex-1 overflow-y-auto bg-gray-100 p-4 md:p-8">
// // // //                  <div className="flex flex-col gap-4 max-w-3xl mx-auto">
// // // //                     {/* PAGE 1 */}
// // // //                     <div className="bg-white shadow-lg w-full">
// // // //                         {/* REPLACE WITH YOUR PAGE 1 IMAGE PATH */}
// // // //                         <Image 
// // // //                           src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766133511/Renewal-Certificate-_ASPWCT_TRUST_FCRA_page-0001_nw5ao7.jpg" 
// // // //                           alt="FCRA Renewal Page 1" 
// // // //                           width={1000}
// // // //                           height={1400}
// // // //                           className="w-full h-auto block" 
// // // //                           priority
// // // //                         />
// // // //                     </div>
                    
// // // //                     {/* PAGE 2 */}
// // // //                     <div className="bg-white shadow-lg w-full">
// // // //                         {/* REPLACE WITH YOUR PAGE 2 IMAGE PATH */}
// // // //                         <Image 
// // // //                           src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766133704/Renewal-Certificate-_ASPWCT_TRUST_FCRA_page-0002_vth9g7.jpg" 
// // // //                           alt="FCRA Renewal Page 2" 
// // // //                           width={1000}
// // // //                           height={1400}
// // // //                           className="w-full h-auto block" 
// // // //                         />
// // // //                     </div>
// // // //                  </div>
// // // //               </div>
// // // //             </motion.div>
// // // //           </motion.div>
// // // //         )}

// // // //         {/* 3. Overseas Donation Modal (Fixed: Scrollable + Full Info) */}
// // // //         {isOverseasModalOpen && (
// // // //           <motion.div
// // // //             initial={{ opacity: 0 }}
// // // //             animate={{ opacity: 1 }}
// // // //             exit={{ opacity: 0 }}
// // // //             onClick={() => setIsOverseasModalOpen(false)}
// // // //             className="fixed inset-0 bg-black/70 z-50 backdrop-blur-sm flex items-center justify-center p-4"
// // // //           >
// // // //             <motion.div
// // // //               initial={{ opacity: 0, scale: 0.95 }}
// // // //               animate={{ opacity: 1, scale: 1 }}
// // // //               exit={{ opacity: 0, scale: 0.95 }}
// // // //               className="w-full max-w-3xl h-[90vh] bg-background rounded-2xl shadow-2xl flex flex-col relative overflow-hidden"
// // // //               onClick={(e) => e.stopPropagation()}
// // // //             >
// // // //               {/* Header */}
// // // //               <div className="flex justify-between items-center p-5 border-b bg-muted z-10 shrink-0">
// // // //                 <h3 className="font-bold text-xl text-foreground">Overseas Donation Procedure</h3>
// // // //                 <button onClick={() => setIsOverseasModalOpen(false)} className="p-2 hover:bg-muted/80 rounded-full">
// // // //                   <X className="w-5 h-5 text-muted-foreground" />
// // // //                 </button>
// // // //               </div>

// // // //               {/* Scrollable Body */}
// // // //               <div className="flex-1 overflow-y-auto p-8">
// // // //                 <div className="bg-yellow-50 border-l-4 border-[#ffc107] p-4 mb-6 text-sm">
// // // //                   <p className="font-bold mb-1 text-yellow-800">Important Note:</p>
// // // //                   <p className="text-black">
// // // //                     Donations can be done only through Wire Transfer to the specified Bank Account. UPI/NEFT/RTGS from
// // // //                     Indian banks are restricted.
// // // //                   </p>
// // // //                 </div>

// // // //                 <h4 className="font-bold text-lg mb-4 flex items-center gap-2 text-foreground">
// // // //                   <Building2 className="w-5 h-5 text-[#a7150b]" /> Wire Transfer Details
// // // //                 </h4>
// // // //                 <div className="bg-muted rounded-xl p-6 border border-border space-y-3 font-mono text-sm mb-8">
// // // //                   <div className="flex flex-col sm:flex-row sm:justify-between border-b border-border pb-2">
// // // //                     <span className="text-muted-foreground font-sans">Account Name</span>
// // // //                     <span className="font-bold text-right text-foreground">
// // // //                       Adhiparasakthi Siddhar Peeda Women's Charitable Trust
// // // //                     </span>
// // // //                   </div>
// // // //                   <div className="flex justify-between border-b border-border pb-2">
// // // //                     <span className="text-muted-foreground font-sans">Account No</span>
// // // //                     <span className="font-bold text-lg text-foreground">40209740361</span>
// // // //                   </div>
// // // //                   <div className="flex justify-between border-b border-border pb-2">
// // // //                     <span className="text-muted-foreground font-sans">Bank Name</span>
// // // //                     <span className="font-bold text-foreground">State Bank of India</span>
// // // //                   </div>
// // // //                   <div className="flex justify-between border-b border-border pb-2">
// // // //                     <span className="text-muted-foreground font-sans">Branch</span>
// // // //                     <span className="font-bold text-foreground">New Delhi Main Branch (Code: 00691)</span>
// // // //                   </div>
// // // //                   <div className="flex justify-between pt-1">
// // // //                     <span className="text-muted-foreground font-sans">SWIFT Code</span>
// // // //                     <span className="font-bold bg-yellow-100 px-2 rounded text-black">SBININBB104</span>
// // // //                   </div>
// // // //                 </div>

// // // //                 <h4 className="font-bold text-lg mb-4 flex items-center gap-2 text-foreground">
// // // //                   <Mail className="w-5 h-5 text-[#a7150b]" /> Mandatory Reporting
// // // //                 </h4>
// // // //                 <p className="text-sm text-muted-foreground mb-4">
// // // //                   On successful transfer, kindly share the following details +{" "}
// // // //                   <strong>Passport Copy (Front & Back)</strong> to{" "}
// // // //                   <span className="font-bold text-foreground">ASPWCTtrust@gmail.com</span>:
// // // //                 </p>
// // // //                 <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm font-medium text-foreground bg-muted p-4 rounded-lg">
// // // //                   <li>1. Name of Donor</li>
// // // //                   <li>2. Donor Address</li>
// // // //                   <li>3. Purpose of Remittance</li>
// // // //                   <li>4. Country of Donor</li>
// // // //                   <li>5. Currency & Amount</li>
// // // //                   <li>6. ID Proof (Passport)</li>
// // // //                 </ul>
// // // //               </div>

// // // //               {/* Footer */}
// // // //               <div className="p-4 bg-muted border-t flex justify-end gap-3 shrink-0">
// // // //                 <Button variant="outline" onClick={() => setIsOverseasModalOpen(false)}>
// // // //                   Close
// // // //                 </Button>
// // // //                 <Button className="bg-foreground text-background hover:bg-foreground/90">Copy Bank Details</Button>
// // // //               </div>
// // // //             </motion.div>
// // // //           </motion.div>
// // // //         )}
// // // //       </AnimatePresence>
// // // //     </>
// // // //   )
// // // // }
// // // // ========== 7. DONATION COMPONENT (UPDATED CONTENT) ==========
// // // function Donation() {
// // //   const [isOverseasModalOpen, setIsOverseasModalOpen] = useState(false)

// // //   return (
// // //     <>
// // //       <section className="py-24 px-4 bg-muted/30" id="donate">
// // //         <div className="container mx-auto max-w-6xl">
          
// // //           {/* ================= NEW SECTION: WHY WE NEED DONATION ================= */}
// // //           <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
// // //             <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-2">
// // //               <HeartHandshake className="w-4 h-4" />
// // //               <span>Join Our Mission</span>
// // //             </div>
// // //             <h2 className="text-3xl md:text-4xl font-bold text-foreground">
// // //               Empowering Lives, Creating Impact
// // //             </h2>
// // //             <p className="text-lg text-muted-foreground leading-relaxed">
// // //               We have created meaningful impacts in rural education and healthcare. 
// // //               Your contribution helps us sustain these efforts. Join us and empower the mission to help the needy—every rupee counts towards building a better future.
// // //             </p>
// // //           </div>

// // //           {/* ================= SECTION 1: DONATION CARDS ================= */}
// // //           <div className="grid md:grid-cols-2 gap-8 items-start mb-20">
            
// // //             {/* --- Domestic Donors Card (UPDATED CONTENT) --- */}
// // //             <motion.div 
// // //               whileHover={{ y: -5 }} 
// // //               className="bg-card rounded-3xl p-8 lg:p-10 shadow-xl border border-border relative overflow-hidden flex flex-col h-full"
// // //             >
// // //               <div className="absolute top-0 left-0 w-full h-2 bg-[#a7150b]" />
              
// // //               <div className="flex items-center gap-4 mb-6">
// // //                 <div className="p-4 bg-red-50 rounded-2xl text-[#a7150b]">
// // //                   <FileText className="w-8 h-8" />
// // //                 </div>
// // //                 <div>
// // //                   <h3 className="text-2xl font-bold text-foreground">Domestic Donors</h3>
// // //                   <span className="text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full">
// // //                     Indian Citizens Only
// // //                   </span>
// // //                 </div>
// // //               </div>

// // //               {/* Updated Content based on 80G Reference */}
// // //               <div className="space-y-4 mb-8 flex-1">
// // //                 <p className="text-muted-foreground">
// // //                   Maximize your philanthropic impact while saving on taxes. Your contributions support vital education and rural development initiatives.
// // //                 </p>
// // //                 <ul className="space-y-3">
// // //                   {[
// // //                     "Eligible for Section 80G Tax Exemption",
// // //                     "Valid Receipt with PAN for IT Returns",
// // //                     "Supports Education & Rural Development"
// // //                   ].map((item, i) => (
// // //                     <li key={i} className="flex items-center gap-3 text-foreground font-medium">
// // //                       <CheckCircle2 className="w-5 h-5 text-[#a7150b] shrink-0" /> {item}
// // //                     </li>
// // //                   ))}
// // //                 </ul>
                
// // //                 {/* Note from Reference Document */}
// // //                 <div className="bg-red-50 border border-red-100 rounded-lg p-3 flex gap-2 text-xs text-red-800">
// // //                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
// // //                    <p>Note: As per Govt regulations, cash donations exceeding ₹2,000 are not eligible for 80G deduction. Please use digital modes.</p>
// // //                 </div>
// // //               </div>

// // //               <Link href="https://aspwct.omsakthiamma.in/" target="_blank" rel="noopener noreferrer" className="block w-full mt-auto">
// // //                 <Button className="w-full bg-[#a7150b] hover:bg-[#8a0d08] text-white h-14 text-lg rounded-xl shadow-md transition-all hover:scale-[1.02]">
// // //                   Donate via UPI / NetBanking
// // //                 </Button>
// // //               </Link>
// // //             </motion.div>


// // //             {/* --- Foreign Donors Card (CONTENT UNCHANGED) --- */}
// // //             <motion.div 
// // //               whileHover={{ y: -5 }} 
// // //               className="bg-foreground rounded-3xl p-8 lg:p-10 shadow-xl relative overflow-hidden flex flex-col text-background h-full"
// // //             >
// // //               <div className="absolute top-0 left-0 w-full h-2 bg-[#ffc107]" />
              
// // //               <div className="flex items-center gap-4 mb-8">
// // //                 <div className="p-4 bg-white/10 rounded-2xl text-[#ffc107]">
// // //                   <Globe className="w-8 h-8" />
// // //                 </div>
// // //                 <div>
// // //                   <h3 className="text-2xl font-bold">Foreign Donors</h3>
// // //                   <span className="text-sm font-medium text-foreground bg-[#ffc107] px-3 py-1 rounded-full">
// // //                     FCRA Approved
// // //                   </span>
// // //                 </div>
// // //               </div>

// // //               <ul className="space-y-3 mb-8 flex-1">
// // //                 {["Government Approved FCRA", "International Wire Transfer", "SWIFT Transfer Support"].map((item, i) => (
// // //                   <li key={i} className="flex items-center gap-3 text-background/80">
// // //                     <CheckCircle2 className="w-5 h-5 text-[#ffc107]" /> {item}
// // //                   </li>
// // //                 ))}
// // //               </ul>

// // //               {/* ACTION: View Procedure Button (Yellow) */}
// // //               <div className="mt-auto">
// // //                 <Button 
// // //                   onClick={() => setIsOverseasModalOpen(true)} 
// // //                   className="w-full bg-[#ffc107] hover:bg-[#e6ac00] text-foreground font-bold h-14 text-lg rounded-xl shadow-md transition-all hover:scale-[1.02]"
// // //                 >
// // //                   View Overseas Donation Procedure
// // //                 </Button>
// // //               </div>
// // //             </motion.div>
// // //           </div>


// // //           {/* ================= SECTION 2: CERTIFICATE IMAGES ================= */}
// // //           <div className="space-y-16">
            
// // //             <div className="flex items-center justify-center gap-3">
// // //                <ShieldCheck className="w-8 h-8 text-primary" />
// // //                <h2 className="text-3xl font-bold text-center text-foreground">Legal Certificates & Documents</h2>
// // //             </div>

// // //             {/* 1. 80G Certificate (Domestic) */}
// // //             <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-border">
// // //                <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
// // //                   <FileText className="w-6 h-6 text-[#a7150b]" />
// // //                   <h3 className="text-xl font-bold text-foreground">80G Tax Exemption Certificate (Domestic)</h3>
// // //                </div>
               
// // //                <div className="flex justify-center bg-gray-50 rounded-xl p-4 border border-gray-100">
// // //                   <Image 
// // //                     src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766169266/Screenshot_2025-12-20_000354_vxwwyc.png" 
// // //                     alt="80G Certificate" 
// // //                     width={800} 
// // //                     height={1000}
// // //                     className="w-full max-w-3xl h-auto shadow-sm" 
// // //                   />
// // //                </div>
// // //             </div>

// // //             {/* 2. FCRA Certificates (Foreign) */}
// // //             <div className="bg-slate-900 rounded-3xl p-8 lg:p-12 shadow-lg relative overflow-hidden text-white">
// // //                <div className="absolute top-0 left-0 w-full h-2 bg-[#ffc107]" />
               
// // //                <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
// // //                   <Globe className="w-6 h-6 text-[#ffc107]" />
// // //                   <h3 className="text-xl font-bold">FCRA Renewal Certificate (Foreign)</h3>
// // //                </div>

// // //                <div className="grid md:grid-cols-2 gap-8">
// // //                   {/* Page 1 */}
// // //                   <div className="space-y-3">
// // //                      <p className="text-sm text-center text-white/60 font-medium">Page 01</p>
// // //                      <div className="rounded-xl overflow-hidden border border-white/20 shadow-lg bg-white">
// // //                         <Image 
// // //                           src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766133511/Renewal-Certificate-_ASPWCT_TRUST_FCRA_page-0001_nw5ao7.jpg" 
// // //                           alt="FCRA Renewal Page 1" 
// // //                           width={600}
// // //                           height={800}
// // //                           className="w-full h-auto" 
// // //                         />
// // //                      </div>
// // //                   </div>

// // //                   {/* Page 2 */}
// // //                   <div className="space-y-3">
// // //                      <p className="text-sm text-center text-white/60 font-medium">Page 02</p>
// // //                      <div className="rounded-xl overflow-hidden border border-white/20 shadow-lg bg-white">
// // //                         <Image 
// // //                           src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766133704/Renewal-Certificate-_ASPWCT_TRUST_FCRA_page-0002_vth9g7.jpg" 
// // //                           alt="FCRA Renewal Page 2" 
// // //                           width={600}
// // //                           height={800}
// // //                           className="w-full h-auto" 
// // //                         />
// // //                      </div>
// // //                   </div>
// // //                </div>
// // //             </div>
// // //           </div>

// // //         </div>
// // //       </section>

// // //       {/* ================= MODAL FOR OVERSEAS PROCEDURE ================= */}
// // //       <AnimatePresence>
// // //         {isOverseasModalOpen && (
// // //           <motion.div
// // //             initial={{ opacity: 0 }}
// // //             animate={{ opacity: 1 }}
// // //             exit={{ opacity: 0 }}
// // //             onClick={() => setIsOverseasModalOpen(false)}
// // //             className="fixed inset-0 bg-black/70 z-50 backdrop-blur-sm flex items-center justify-center p-4"
// // //           >
// // //             <motion.div
// // //               initial={{ opacity: 0, scale: 0.95 }}
// // //               animate={{ opacity: 1, scale: 1 }}
// // //               exit={{ opacity: 0, scale: 0.95 }}
// // //               className="w-full max-w-3xl h-[90vh] bg-background rounded-2xl shadow-2xl flex flex-col relative overflow-hidden"
// // //               onClick={(e) => e.stopPropagation()}
// // //             >
// // //               <div className="flex justify-between items-center p-5 border-b bg-muted z-10 shrink-0">
// // //                 <h3 className="font-bold text-xl text-foreground">Overseas Donation Procedure</h3>
// // //                 <button onClick={() => setIsOverseasModalOpen(false)} className="p-2 hover:bg-muted/80 rounded-full">
// // //                   <X className="w-5 h-5 text-muted-foreground" />
// // //                 </button>
// // //               </div>

// // //               <div className="flex-1 overflow-y-auto p-8">
// // //                 <div className="bg-yellow-50 border-l-4 border-[#ffc107] p-4 mb-6 text-sm">
// // //                   <p className="font-bold mb-1 text-yellow-800">Important Note:</p>
// // //                   <p className="text-black">
// // //                     Donations can be done only through Wire Transfer to the specified Bank Account. UPI/NEFT/RTGS from
// // //                     Indian banks are restricted.
// // //                   </p>
// // //                 </div>

// // //                 <h4 className="font-bold text-lg mb-4 flex items-center gap-2 text-foreground">
// // //                   <Building2 className="w-5 h-5 text-[#a7150b]" /> Wire Transfer Details
// // //                 </h4>
// // //                 <div className="bg-muted rounded-xl p-6 border border-border space-y-3 font-mono text-sm mb-8">
// // //                   <div className="flex flex-col sm:flex-row sm:justify-between border-b border-border pb-2">
// // //                     <span className="text-muted-foreground font-sans">Account Name</span>
// // //                     <span className="font-bold text-right text-foreground">
// // //                       Adhiparasakthi Siddhar Peeda Women's Charitable Trust
// // //                     </span>
// // //                   </div>
// // //                   <div className="flex justify-between border-b border-border pb-2">
// // //                     <span className="text-muted-foreground font-sans">Account No</span>
// // //                     <span className="font-bold text-lg text-foreground">40209740361</span>
// // //                   </div>
// // //                   <div className="flex justify-between border-b border-border pb-2">
// // //                     <span className="text-muted-foreground font-sans">Bank Name</span>
// // //                     <span className="font-bold text-foreground">State Bank of India</span>
// // //                   </div>
// // //                   <div className="flex justify-between border-b border-border pb-2">
// // //                     <span className="text-muted-foreground font-sans">Branch</span>
// // //                     <span className="font-bold text-foreground">New Delhi Main Branch (Code: 00691)</span>
// // //                   </div>
// // //                   <div className="flex justify-between pt-1">
// // //                     <span className="text-muted-foreground font-sans">SWIFT Code</span>
// // //                     <span className="font-bold bg-yellow-100 px-2 rounded text-black">SBININBB104</span>
// // //                   </div>
// // //                 </div>

// // //                 <h4 className="font-bold text-lg mb-4 flex items-center gap-2 text-foreground">
// // //                   <Mail className="w-5 h-5 text-[#a7150b]" /> Mandatory Reporting
// // //                 </h4>
// // //                 <p className="text-sm text-muted-foreground mb-4">
// // //                   On successful transfer, kindly share the following details +{" "}
// // //                   <strong>Passport Copy (Front & Back)</strong> to{" "}
// // //                   <span className="font-bold text-foreground">ASPWCTtrust@gmail.com</span>:
// // //                 </p>
// // //                 <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm font-medium text-foreground bg-muted p-4 rounded-lg">
// // //                   <li>1. Name of Donor</li>
// // //                   <li>2. Donor Address</li>
// // //                   <li>3. Purpose of Remittance</li>
// // //                   <li>4. Country of Donor</li>
// // //                   <li>5. Currency & Amount</li>
// // //                   <li>6. ID Proof (Passport)</li>
// // //                 </ul>
// // //               </div>

// // //               <div className="p-4 bg-muted border-t flex justify-end gap-3 shrink-0">
// // //                 <Button variant="outline" onClick={() => setIsOverseasModalOpen(false)}>
// // //                   Close
// // //                 </Button>
// // //                 <Button className="bg-foreground text-background hover:bg-foreground/90">Copy Bank Details</Button>
// // //               </div>
// // //             </motion.div>
// // //           </motion.div>
// // //         )}
// // //       </AnimatePresence>
// // //     </>
// // //   )
// // // }

// // // function CsrProjects() {
// // //   return (
// // //       <section className="py-24 px-4 bg-background">
// // //         <div className="container mx-auto space-y-24">
          
// // //           {/* ================= PROJECT 1: EYE CAMP ================= */}
// // //           <div>
// // //             <div className="text-center mb-10">
// // //               <span className="inline-block px-4 py-2 bg-[#ffc107]/10 text-[#ffc107] rounded-full text-xs font-bold tracking-widest uppercase mb-4">
// // //                 CSR Initiative 01
// // //               </span>
// // //               <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Free Eye Camp</h2>
// // //             </div>

// // //             {/* UPDATED: 
// // //                1. Kept 'grid-cols-2' (2 images per row).
// // //                2. Added 'max-w-4xl mx-auto' to restrict width -> Makes images smaller!
// // //             */}
// // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
// // //               {[
// // //                 "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766164830/097A1993_anatnz.jpg",
// // //                 "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766164805/097A1516_sodl4z.jpg",
// // //                 "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766164845/097A1597_wxps2o.jpg",
// // //                 "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766164797/097A1504_nn9vgr.jpg",
// // //               ].map((imgSrc, idx) => (
// // //                 <motion.div
// // //                   key={idx}
// // //                   initial={{ opacity: 0, y: 20 }}
// // //                   whileInView={{ opacity: 1, y: 0 }}
// // //                   viewport={{ once: true }}
// // //                   transition={{ delay: idx * 0.1 }}
// // //                   whileHover={{ y: -5 }}
// // //                   // Kept aspect-square for a neat box shape
// // //                   className="relative w-full aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer group"
// // //                 >
// // //                   <Image
// // //                     src={imgSrc || "/placeholder.svg"}
// // //                     alt={`Eye Camp Image ${idx + 1}`}
// // //                     fill
// // //                     className="object-fill transition-transform duration-700 group-hover:scale-110"
// // //                   />
// // //                   <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
// // //                 </motion.div>
// // //               ))}
// // //             </div>
// // //           </div>
          
// // //            {/* ================= PROJECT 2: ENDOSCOPE MACHINE ================= */}
// // //           <div>
// // //             <div className="text-center mb-10">
// // //               <span className="inline-block px-4 py-2 bg-[#a7150b]/10 text-[#a7150b] rounded-full text-xs font-bold tracking-widest uppercase mb-4">
// // //                 CSR Initiative 02
// // //               </span>
// // //               <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Endoscope Machine by ICICI</h2>
// // //             </div>

// // //             {/* Same layout for consistency */}
// // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
// // //               {[
// // //                 "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766093845/IMG-20231206-WA0012_hysx3l.jpg",
// // //                 "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766093847/IMG-20231206-WA0054_nc25ip.jpg",
// // //                 "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766093844/IMG-20231206-WA0048_poj4kh.jpg",
// // //                 "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766093825/IMG-20231206-WA0018_ipotnj.jpg",
// // //               ].map((imgSrc, idx) => (
// // //                 <motion.div
// // //                   key={idx}
// // //                   initial={{ opacity: 0, y: 20 }}
// // //                   whileInView={{ opacity: 1, y: 0 }}
// // //                   viewport={{ once: true }}
// // //                   transition={{ delay: idx * 0.1 }}
// // //                   whileHover={{ y: -5 }}
// // //                   className="relative w-full aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer group"
// // //                 >
// // //                   <Image
// // //                     src={imgSrc || "/placeholder.svg"}
// // //                     alt={`Endoscope Project Image ${idx + 1}`}
// // //                     fill
// // //                     className="object-fill transition-transform duration-700 group-hover:scale-110"
// // //                   />
// // //                   <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
// // //                 </motion.div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>
// // //   )
// // // }

// // // // ========== 9. CSR INQUIRY FORM COMPONENT ==========
// // // function CsrInquiry() {
// // //   const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle")
// // //   const [selectedProject, setSelectedProject] = useState("")

// // //   const handleFormSubmit = (e: React.FormEvent) => {
// // //     e.preventDefault()
// // //     setFormStatus("submitting")
// // //     setTimeout(() => {
// // //       setFormStatus("success")
// // //     }, 1500)
// // //   }

// // //   return (
// // //     <section className="py-24 px-4 bg-[#ffc107] relative">
// // //       <div className="container mx-auto max-w-5xl relative z-10">
// // //         <Card className="border-none shadow-2xl rounded-3xl overflow-hidden">
// // //           <div className="grid md:grid-cols-5">
// // //             {/* Form Side */}
// // //             <div className="md:col-span-3 p-8 md:p-12 bg-background">
// // //               <div className="mb-8">
// // //                 <h3 className="text-3xl font-serif font-bold text-foreground">Partner with Us</h3>
// // //                 <p className="text-muted-foreground mt-2">Interested in a CSR collaboration? Let's connect.</p>
// // //               </div>

// // //               {formStatus === "success" ? (
// // //                 <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-64 flex flex-col items-center justify-center text-center">
// // //                   <CheckCircle2 className="w-16 h-16 text-green-600 mb-4" />
// // //                   <h4 className="text-xl font-bold text-foreground">Inquiry Sent!</h4>
// // //                   <p className="text-muted-foreground">We will get back to you within 24 hours.</p>
// // //                 </motion.div>
// // //               ) : (
// // //                 <form onSubmit={handleFormSubmit} className="space-y-5">
// // //                   <div className="grid grid-cols-2 gap-4">
// // //                     <div className="space-y-2">
// // //                       <Label htmlFor="name">Full Name</Label>
// // //                       <Input id="name" required placeholder="John Doe" className="bg-muted border-border h-11 focus:ring-[#a7150b]" />
// // //                     </div>
// // //                     <div className="space-y-2">
// // //                       <Label htmlFor="company">Company</Label>
// // //                       <Input id="company" required placeholder="Tech Corp" className="bg-muted border-border h-11 focus:ring-[#a7150b]" />
// // //                     </div>
// // //                   </div>
// // //                   <div className="grid grid-cols-2 gap-4">
// // //                     <div className="space-y-2">
// // //                       <Label htmlFor="email">Email</Label>
// // //                       <Input id="email" type="email" required placeholder="john@example.com" className="bg-muted border-border h-11 focus:ring-[#a7150b]" />
// // //                     </div>
// // //                     <div className="space-y-2">
// // //                       <Label htmlFor="phone">Phone</Label>
// // //                       <Input id="phone" type="tel" required placeholder="+91..." className="bg-muted border-border h-11 focus:ring-[#a7150b]" />
// // //                     </div>
// // //                   </div>
// // //                   <div className="space-y-2">
// // //                     <Label htmlFor="project">Interested Project</Label>
// // //                     <Select onValueChange={(value) => setSelectedProject(value)}>
// // //                       <SelectTrigger className="bg-muted border-border h-11"><SelectValue placeholder="Select a project" /></SelectTrigger>
// // //                       <SelectContent>
// // //                         <SelectItem value="education">EDUCATION</SelectItem>
// // //                         <SelectItem value="eye-camp">EYE CAMP</SelectItem>
// // //                         <SelectItem value="medical">MEDICAL</SelectItem>
// // //                         <SelectItem value="feeding-poor">FEEDING POOR</SelectItem>
// // //                         <SelectItem value="others">OTHERS</SelectItem>
// // //                       </SelectContent>
// // //                     </Select>
// // //                   </div>
// // //                   {selectedProject === "others" && (
// // //                     <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="space-y-2">
// // //                       <Label htmlFor="other-details">Specify Details</Label>
// // //                       <Input id="other-details" required placeholder="Please specify..." className="bg-muted border-border h-11 focus:ring-[#a7150b]" />
// // //                     </motion.div>
// // //                   )}
// // //                   <div className="space-y-2">
// // //                     <Label htmlFor="remarks">Remarks</Label>
// // //                     <Textarea id="remarks" placeholder="Any specific requirements?" className="bg-muted border-border resize-none focus:ring-[#a7150b]" rows={3} />
// // //                   </div>
// // //                   <Button type="submit" disabled={formStatus === "submitting"} className="w-full bg-[#a7150b] hover:bg-[#8a0d08] text-white font-bold h-12 text-lg rounded-xl">
// // //                     {formStatus === "submitting" ? "Sending..." : "Submit Inquiry"}
// // //                   </Button>
// // //                 </form>
// // //               )}
// // //             </div>

// // //             {/* Info Side */}
// // //             <div className="md:col-span-2 bg-foreground p-8 md:p-12 text-background flex flex-col justify-between relative overflow-hidden">
// // //               <div className="absolute top-0 right-0 p-6 opacity-5">
// // //                 <Building2 size={200} />
// // //               </div>
// // //               <div>
// // //                 <h4 className="text-xl font-bold mb-6 text-[#ffc107]">
// // //                   Contact Information
// // //                 </h4>
// // //                 <div className="space-y-6">
// // //                   <div className="flex items-start gap-4">
// // //                     <Mail className="w-6 h-6 text-[#ffc107] shrink-0 mt-1" />
// // //                     <div>
// // //                       <p className="text-xs text-background/60 uppercase tracking-wider">
// // //                         Email Us
// // //                       </p>
// // //                       <p className="font-medium text-sm">
// // //                         contact@ASPWCTtrust.org
// // //                       </p>
// // //                     </div>
// // //                   </div>               
// // //                   <div className="flex items-start gap-4">
// // //                     <Phone className="w-6 h-6 text-[#ffc107] shrink-0 mt-1" />
// // //                     <div>
// // //                       <p className="text-xs text-background/60 uppercase tracking-wider mb-1">
// // //                         Call Us
// // //                       </p>
// // //                       <div className="space-y-1 text-sm font-medium">
// // //                         <p>Landline: +91 44 2752 9313</p>
// // //                         <p>Mobile: +91 91500 45391</p>
// // //                         <p>Whatsapp: +91 91500 45391</p>
// // //                         <p>PRO: +91 44 27529276</p>
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                   <div className="flex items-start gap-4">
// // //                     <Building2 className="w-6 h-6 text-[#ffc107] shrink-0 mt-1" />
// // //                     <div>
// // //                       <p className="text-xs text-background/60 uppercase tracking-wider mb-1">
// // //                         Visit Us
// // //                       </p>
// // //                       <p className="font-medium text-sm leading-relaxed text-background/90">
// // //                         <span className="font-bold block mb-1">
// // //                           Adhiparasakthi Charitable Medical Educational and
// // //                           Cultural Trust
// // //                         </span>
// // //                         No.1 GST Road, Adhiparasakthi Siddhar Peeda Temple
// // //                         Campus, Melmaruvathur, Chengalpet District,
// // //                         TamilNadu-603319, India
// // //                       </p>
// // //                     </div>
// // //                   </div>
// // //                   <div className="flex items-start gap-4">
// // //                     <Clock className="w-6 h-6 text-[#ffc107] shrink-0 mt-1" />
// // //                     <div>
// // //                       <p className="text-xs text-background/60 uppercase tracking-wider mb-1">
// // //                         Timing
// // //                       </p>
// // //                       <p className="font-medium text-sm">
// // //                         8:00 am To 8:00 PM
// // //                       </p>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //               <div className="mt-8 pt-8 border-t border-white/10">
// // //                 <p className="text-xs text-background/60">
// // //                   By submitting this form, you agree to our privacy policy
// // //                   regarding data collection.
// // //                 </p>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </Card>
// // //       </div>
// // //     </section>
// // //   )
// // // }

// // "use client"

// // import { useState } from "react"
// // import { motion, useScroll, useTransform, AnimatePresence, Variants } from "framer-motion"
// // import Image from "next/image"
// // import Link from "next/link"
// // import {
// //   Heart,
// //   CheckCircle2,
// //   Facebook,
// //   Twitter,
// //   Mail,
// //   Landmark,
// //   Activity,
// //   Eye,
// //   FileText,
// //   Globe,
// //   Phone,
// //   Building2,
// //   Download,
// //   X,
// //   Clock,
// //   AlertTriangle,
// //   ShieldCheck,
// //   AlertCircle,
// //   HeartHandshake,
// // } from "lucide-react"
// // import { Button } from "@/components/ui/button"
// // import { Card } from "@/components/ui/card"
// // import { Input } from "@/components/ui/input"
// // import { Label } from "@/components/ui/label"
// // import { Textarea } from "@/components/ui/textarea"
// // import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// // // ========== ANIMATION VARIANTS ==========
// // const fadeInUp = {
// //   hidden: { opacity: 0, y: 30 },
// //   visible: {
// //     opacity: 1,
// //     y: 0,
// //     transition: { duration: 0.6, ease: "easeOut" },
// //   },
// // }

// // const staggerContainer = {
// //   hidden: { opacity: 0 },
// //   visible: {
// //     opacity: 1,
// //     transition: { staggerChildren: 0.15, delayChildren: 0.3 },
// //   },
// // }

// // const scaleOnHover = {
// //   hover: { scale: 1.02, transition: { duration: 0.3 } },
// // }

// // // ========== MAIN PAGE EXPORT ==========
// // export default function Home() {
// //   return (
// //     <main className="bg-background overflow-x-hidden font-sans text-foreground selection:bg-[#ffc107] selection:text-black">
// //       <Hero />
// //       <About />
// //       <Leadership />
// //       <CsrRegistration />
// //       <MissionVision />
// //       <Awards />
// //       <Donation />
// //       <CsrProjects />
// //       <CsrInquiry />
// //     </main>
// //   )
// // }

// // // ========== HERO COMPONENT ==========
// // function Hero() {
// //   const { scrollY } = useScroll()
// //   const y1 = useTransform(scrollY, [0, 500], [0, 150])

// //   return (
// //     <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
// //       {/* Background Image */}
// //       <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
// //         <Image
// //           src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766091901/dental-hospital_cd4gda.jpg"
// //           alt="Hero Background"
// //           fill
// //           className="object-cover scale-110"
// //           priority
// //         />
// //         <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
// //       </motion.div>

// //       {/* ✅ FIX: h-full + flex centering */}
// //       <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center pt-16 md:pt-20">
// //         <motion.div
// //           initial="hidden"
// //           animate="visible"
// //           variants={staggerContainer}
// //           className="max-w-5xl mx-auto text-center"
// //         >
// //           <motion.div variants={fadeInUp} className="inline-block mb-6">
// //             <span className="px-5 py-2.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-[#ffc107] text-sm font-bold tracking-widest uppercase shadow-lg">
// //               Est. 1988 • Registered Trust
// //             </span>
// //           </motion.div>

// //           <motion.h1
// //             variants={fadeInUp}
// //             className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-[1.1] drop-shadow-2xl text-balance"
// //           >
// //             Healing Hands.{" "}
// //             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffc107] via-yellow-300 to-[#ffc107] animate-gradient">
// //               Compassionate Hearts.
// //             </span>
// //           </motion.h1>

// //           <motion.p
// //             variants={fadeInUp}
// //             className="text-lg md:text-2xl text-gray-200 mb-12 leading-relaxed font-light max-w-3xl mx-auto text-balance"
// //           >
// //             Adhiparasakthi Siddhar Peeda Women's Charitable Trust (ASPWCT)
// //             dedicated to serving humanity through holistic healthcare and education.
// //           </motion.p>

// //           <motion.div
// //             variants={fadeInUp}
// //             className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-8"
// //           >
// //             <Link
// //               href="https://aspwct.omsakthiamma.in/" target="_blank" rel="noopener noreferrer"
// //               className="w-full sm:w-auto group"
// //             >
// //               <Button className="w-full sm:w-auto bg-[#a7150b] hover:bg-[#d91e11] text-white rounded-full px-10 py-7 text-lg font-bold shadow-[0_0_40px_-10px_rgba(167,21,11,0.6)] transition-all hover:scale-105 hover:shadow-[0_0_60px_-10px_rgba(167,21,11,0.8)]">
// //                 <Heart className="mr-3 w-5 h-5 fill-current group-hover:animate-pulse" />
// //                 Donate Now
// //               </Button>
// //             </Link>

// //             <Link href="#about" className="w-full sm:w-auto">
// //               <Button
// //                 variant="outline"
// //                 className="w-full sm:w-auto border-2 border-white/40 text-white hover:bg-white hover:text-black rounded-full px-10 py-7 text-lg font-bold backdrop-blur-sm transition-all hover:scale-105 bg-white/5"
// //               >
// //                 Explore Our Work
// //               </Button>
// //             </Link>
// //           </motion.div>
// //         </motion.div>
// //       </div>

// //       {/* Scroll Indicator (desktop only) */}
// //       <motion.div
// //         initial={{ opacity: 0 }}
// //         animate={{ opacity: 1 }}
// //         transition={{ delay: 2 }}
// //         className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
// //       >
// //         <motion.div
// //           animate={{ y: [0, 10, 0] }}
// //           transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
// //           className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2"
// //         >
// //           <motion.div className="w-1 h-2 bg-white rounded-full" />
// //         </motion.div>
// //       </motion.div>
// //     </section>
// //   )
// // }


// // // ========== ABOUT COMPONENT ==========
// // function About() {
// //   return (
// //     <section id="about" className="py-20 md:py-32 px-4 container mx-auto">
// //       <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
// //         {/* LEFT CONTENT */}
// //         <motion.div
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true, margin: "-100px" }}
// //           variants={staggerContainer}
// //           className="text-center lg:text-left"
// //         >
// //           <motion.span
// //             variants={fadeInUp}
// //             className="inline-block px-4 py-2 bg-[#a7150b]/10 text-[#a7150b] rounded-full text-xs font-bold tracking-widest uppercase mb-4"
// //           >
// //             About The Trust
// //           </motion.span>

// //           <motion.h2
// //             variants={fadeInUp}
// //             className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
// //                        font-serif font-bold text-foreground 
// //                        mb-6 leading-tight text-balance"
// //           >
// //             A Legacy of Service{" "}
// //             <span className="relative inline-block">
// //               <span className="relative z-10">Since 1988</span>
// //               <span className="absolute bottom-2 left-0 right-0 h-3 bg-[#ffc107] -z-0" />
// //             </span>
// //           </motion.h2>

// //           <motion.div
// //             variants={fadeInUp}
// //             className="text-muted-foreground 
// //                        text-base sm:text-lg 
// //                        leading-relaxed mb-8 space-y-4"
// //           >
// //             <p>
// //               M/s Adhiparasakthi Siddhar Peeda Women's Charitable Trust (ASPWCT Trust), as the name suggests
// //               has dedicated itself to serve the people in the areas of:
// //             </p>

// //             <div className="grid sm:grid-cols-2 gap-3 py-4">
// //               {["Charity", "Medical", "Educational", "Cultural Activities"].map((item) => (
// //                 <div key={item} className="flex items-start gap-3 group">
// //                   <div className="w-10 h-10 rounded-full bg-[#a7150b]/10 group-hover:bg-[#a7150b] transition-colors flex items-center justify-center shrink-0">
// //                     <CheckCircle2 className="text-[#a7150b] group-hover:text-white w-5 h-5 transition-colors" />
// //                   </div>
// //                   <span className="font-semibold text-foreground leading-snug">{item}</span>
// //                 </div>
// //               ))}
// //             </div>

// //             <p>
// //               This trust is a non-profitable organization which was founded by{" "}
// //               <strong className="text-foreground">H.H. Bangaru Adigalar</strong> in the year 1988 with a small corpus
// //               fund and with few cents of land in Melmaruvathur.
// //             </p>
// //           </motion.div>

// //           {/* STATS */}
// //           <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
// //             <div className="group hover:scale-105 transition-transform">
// //               <Card className="p-6 border-l-4 border-[#ffc107] bg-gradient-to-br from-[#ffc107]/5 to-transparent hover:shadow-lg transition-shadow">
// //                 <h4 className="text-3xl md:text-4xl font-bold text-foreground mb-1">1988</h4>
// //                 <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Established</p>
// //               </Card>
// //             </div>

// //             <div className="group hover:scale-105 transition-transform">
// //               <Card className="p-6 border-l-4 border-[#a7150b] bg-gradient-to-br from-[#a7150b]/5 to-transparent hover:shadow-lg transition-shadow">
// //                 <h4 className="text-xl md:text-2xl font-bold text-foreground mb-1">Melmaruvathur</h4>
// //                 <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Headquarters</p>
// //               </Card>
// //             </div>
// //           </motion.div>
// //         </motion.div>

// //         {/* RIGHT IMAGE */}
// //         <motion.div
// //           initial={{ opacity: 0, x: 50 }}
// //           whileInView={{ opacity: 1, x: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.8 }}
// //           className="relative group"
// //         >
// //           <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
// //             <Image
// //               src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766143744/a12_nbqg5x.webp"
// //               alt="Medical Service"
// //               width={700}
// //               height={500}
// //               className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
// //             />
// //           </div>

// //           <div className="absolute -top-10 -right-10 w-72 h-72 bg-[#ffc107]/20 rounded-full blur-3xl -z-10 group-hover:bg-[#ffc107]/30 transition-colors" />
// //           <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-[#a7150b]/10 rounded-full blur-3xl -z-10 group-hover:bg-[#a7150b]/20 transition-colors" />
// //         </motion.div>
// //       </div>
// //     </section>
// //   )
// // }

// // // ========== 3. LEADERSHIP COMPONENT ==========
// // function Leadership() {
// //   return (
// //     <section className="py-24 bg-muted/30">
// //       <div className="container mx-auto px-4">
// //         {/* Founders */}
// //         <div className="mb-24">
// //           <div className="text-center mb-16">
// //             <span className="inline-block px-4 py-2 bg-[#a7150b]/10 text-[#a7150b] rounded-full text-xs font-bold tracking-widest uppercase mb-4">
// //               Leadership
// //             </span>
// //             <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
// //               Founder & President
// //             </h2>
// //           </div>

// //           <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
// //             {[
// //               {
// //                 name: "His Holiness Bangaru Adigalar",
// //                 role: "Founder",
// //                 image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766091903/3952Founder-President_k3xqz3.png",
// //                 bgColor: "from-[#ffc107]/10 to-[#ffc107]/5",
// //                 borderColor: "border-[#ffc107]",
// //               },
// //               {
// //                 name: "Smt. Lakshmi Bangaru Adigalar",
// //                 role: "President",
// //                 image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766091895/Vice-President_z3lp84.jpg",
// //                 bgColor: "from-[#a7150b]/10 to-[#a7150b]/5",
// //                 borderColor: "border-[#a7150b]",
// //               },
// //             ].map((person, idx) => (
// //               <motion.div
// //                 key={person.name}
// //                 initial={{ opacity: 0, y: 30 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ delay: idx * 0.2 }}
// //                 whileHover={{ y: -8 }}
// //               >
// //                 <Card className={`p-8 text-center border-2 ${person.borderColor} bg-gradient-to-br ${person.bgColor} hover:shadow-2xl transition-all group`}>
// //                   <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-background shadow-xl mb-6 relative group-hover:scale-105 transition-transform">
// //                     <Image src={person.image} alt={person.name} fill className="object-cover" />
// //                   </div>
// //                   <h3 className="text-2xl font-serif font-bold text-foreground mb-2">{person.name}</h3>
// //                   <p className="text-[#a7150b] font-bold uppercase tracking-widest text-sm mb-6">{person.role}</p>
// //                 </Card>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Board of Trustees Grid */}
// //         <div className="text-center mb-16">
// //           <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Board of Trustees</h2>
// //           <div className="w-24 h-1.5 bg-[#ffc107] mx-auto rounded-full" />
// //         </div>

// //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 max-w-6xl mx-auto">
// //           {[
// //   { name: "Mrs. V. Lakshmi", role: "President / Trustee" },
// //   { name: "Mrs. B. Umadevi", role: "Vice President / Trustee" },
// //   { name: "Mrs. B. Sridevi", role: "Secretary / Trustee" },
// //           ].map((trustee, idx) => (
// //             <motion.div
// //               key={idx}
// //               initial={{ opacity: 0, y: 20 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ delay: idx * 0.1 }}
// //               whileHover={{ y: -5 }}
// //             >
// //               <Card className="p-6 hover:shadow-xl transition-all group bg-gradient-to-br from-[#ffc107]/5 to-transparent border-2 border-transparent hover:border-[#ffc107]/30">
// //                 <div className="flex items-start gap-4">
// //                   <div className="w-14 h-14 bg-[#ffc107] text-foreground rounded-full flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform font-bold text-xl">
// //                     {trustee.name.split(" ")[1][0]}
// //                   </div>
// //                   <div className="flex-1">
// //                     <h3 className="text-lg font-bold text-foreground group-hover:text-[#a7150b] transition-colors mb-2">
// //                       {trustee.name}
// //                     </h3>
// //                     <span className="inline-block px-3 py-1 bg-[#a7150b]/10 text-[#a7150b] rounded-full text-xs font-bold uppercase tracking-wide">
// //                       {trustee.role}
// //                     </span>
// //                   </div>
// //                 </div>
// //               </Card>
// //             </motion.div>
// //           ))}
// //         </div>
        
// //         {/* General Trustees Grid */}
// //         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
// //           {[
// //   { name: "Mrs. A. Asharani", role: "Trustee" },
// //   { name: "Dr. E. Srilekha", role: "Trustee" },
// //   { name: "Mrs. M. Vanitha", role: "Trustee" },
// //   { name: "Mrs. A. Madhumalar", role: "Trustee" },
// //   { name: "Miss. S. Monasakthi", role: "Trustee" },
// //   { name: "Mrs. A. Sasikala", role: "Trustee" },
// //           ].map((trustee, idx) => (
// //             <motion.div
// //               key={trustee.name}
// //               initial={{ opacity: 0, y: 20 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ delay: (idx + 5) * 0.1 }}
// //               whileHover={{ y: -5 }}
// //             >
// //               <Card className="p-6 hover:shadow-lg transition-all group border-2">
// //                 <div className="flex flex-col gap-3">
// //                   <div className="flex items-center justify-between">
// //                     <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center font-bold text-muted-foreground">
// //                       {trustee.name.split(" ")[1][0]}
// //                     </div>
// //                     <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest border border-border px-2 py-1 rounded">
// //                       {trustee.role}
// //                     </span>
// //                   </div>
// //                   <h4 className="text-base font-bold text-foreground group-hover:text-[#a7150b] transition-colors">
// //                     {trustee.name}
// //                   </h4>
// //                 </div>
// //               </Card>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// // function CsrRegistration() {
  
// //   // Animation variants
// //   const staggerContainer = {
// //     hidden: { opacity: 0 },
// //     visible: {
// //       opacity: 1,
// //       transition: { staggerChildren: 0.2 }
// //     }
// //   }

// //   return (
// //     <section className="py-20 bg-foreground text-background">
// //       <div className="container mx-auto px-4">
// //         <div className="grid lg:grid-cols-2 gap-12 items-center">
          
// //           {/* --- Left Side: Text Content --- */}
// //           <motion.div 
// //             initial="hidden" 
// //             whileInView="visible" 
// //             viewport={{ once: true }} 
// //             variants={staggerContainer}
// //           >
// //             <div className="flex items-center gap-3 mb-4">
// //               <Landmark className="w-8 h-8 text-[#ffc107]" />
// //               <span className="text-[#ffc107] font-bold tracking-widest uppercase text-sm">Government of India</span>
// //             </div>
            
// //             <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Official CSR Registration</h2>
            
// //             <p className="text-background/80 text-lg mb-8 leading-relaxed">
// //               Adhiparasakthi Siddhar Peeda Women's Charitable Trust is officially registered with the
// //               Ministry of Corporate Affairs for undertaking CSR activities.
// //             </p>
            
// //             <div className="grid sm:grid-cols-2 gap-6">
// //               <div className="bg-white/10 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
// //                 <p className="text-xs text-background/60 uppercase tracking-widest mb-1">Registration Number</p>
// //                 <p className="text-2xl font-mono font-bold text-[#ffc107]">CSR00002407</p>
// //               </div>
// //               <div className="bg-white/10 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
// //                 <p className="text-xs text-background/60 uppercase tracking-widest mb-1">Date of Registration</p>
// //                 <p className="text-xl font-bold">16-04-2021</p>
// //               </div>
// //             </div>
// //           </motion.div>

// //           {/* --- Right Side: Actual CSR Letter Image --- */}
// //           <motion.div
// //             initial={{ opacity: 0, x: 50 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.8 }}
// //             className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10"
// //           >
// //             <div className="bg-white p-2">
// //                 <Image 
// //                   src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766399036/Approval_Letter_Women_s_-CSR_ACTIVITIES_1__page-0001_ohogf3.jpg" 
// //                   alt="Official CSR Approval Letter" 
// //                   width={800}
// //                   height={1000}
// //                   className="w-full h-auto object-contain"
// //                 />
// //             </div>
            
// //             {/* Optional: Overlay Badge */}
// //             <div className="absolute top-4 right-4 bg-[#ffc107] text-foreground text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
// //               <FileText className="w-3 h-3" /> Official Document
// //             </div>
// //           </motion.div>

// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// // // ========== 5. MISSION & VISION COMPONENT ==========
// // function MissionVision() {
// //   return (
// //     <section className="py-24 px-4 bg-muted relative overflow-hidden">
// //       <div className="container mx-auto relative z-10">
// //         <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
// //           <motion.div whileHover="hover" variants={scaleOnHover} className="bg-gradient-to-br from-[#a7150b] to-[#800f07] p-10 md:p-14 rounded-3xl shadow-2xl relative overflow-hidden group border border-white/10">
// //             <div className="relative z-10">
// //               <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8">
// //                 <Activity className="text-white w-8 h-8" />
// //               </div>
// //               <h3 className="text-3xl font-serif font-bold mb-4 text-white">Our Mission</h3>
// //               <p className="text-white/80 text-lg leading-relaxed">
// //               The ASPWCT Trust is committed to the selfless service of humanity by managing resources with transparency and strategic foresight to deliver high-quality social welfare services
// //               </p>
// //             </div>
// //           </motion.div>

// //           <motion.div whileHover="hover" variants={scaleOnHover} className="bg-gradient-to-br from-[#ffc107] to-[#e6ac00] p-10 md:p-14 rounded-3xl shadow-2xl relative overflow-hidden group border border-white/10">
// //             <div className="relative z-10">
// //               <div className="w-14 h-14 bg-black/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8">
// //                 <Eye className="text-foreground w-8 h-8" />
// //               </div>
// //               <h3 className="text-3xl font-serif font-bold mb-4 text-foreground">Our Vision</h3>
// //               <p className="text-foreground/80 text-lg leading-relaxed font-medium">
// //                 To create a sustainable, inclusive society where the burdens of human suffering are alleviated through institutional excellence in healthcare, education, and cultural preservation. Our vision is to serve as a perpetual pillar of community support, governed by integrity and the spiritual principle of universal welfare—offering solace and opportunity to all, regardless of caste, creed, colour, or religion.
// //               </p>
// //             </div>
// //           </motion.div>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// // // ========== 6. AWARDS COMPONENT ==========
// // function Awards() {
// //   const awards = [
// //     { img: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092337/2911191530526914-150x150_a5fseg.jpg", title: "State Govt Honor", desc: "Honored by Chief Minister Ms. J. Jayalalitha..." },
// //     { img: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092336/2911191530538674-150x150_semv32.jpg", title: "Nirmal Gram Puraskar", desc: "National award for sanitation..." },
// //     { img: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092336/2911191530539144-150x150_dyivy6.jpg", title: "Certificate of Excellence", desc: "Recognition for outstanding contribution..." },
// //     { img: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092336/2911191530534191-150x150_lo2fc6.jpg", title: "Best Institution", desc: "Awarded to Adhiparasakthi Annai Illam..." },
// //     { img: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092338/2911191530529377-150x150_mz3ixh.jpg", title: "Award of Appreciation", desc: "Awarded by the Department of Health..." },
// //     { img: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092338/2911191530527252-150x150_ud5spj.jpg", title: "Regional Recognition", desc: "Acknowledging our continuous support..." },
// //     { img: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092337/2911191530521793-150x150_hqdtpk.jpg", title: "Official Certification", desc: "Certification of merit from authorized government bodies." },
// //     { img: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092338/awards-150x150_rtu0ni.png", title: "National Honor", desc: "Founder H.H. Bangaru Adigalar receiving award...", badge: "Highest Honor" },
// //   ]

// //   return (
// //     <section className="py-24 bg-background border-y border-border">
// //       <div className="container mx-auto px-4">
// //         <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
// //           <span className="inline-block px-4 py-2 bg-[#a7150b]/10 text-[#a7150b] rounded-full text-xs font-bold tracking-widest uppercase mb-4">Our Achievements</span>
// //           <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Significant Awards and Recognition</h2>
// //           <div className="w-24 h-1.5 bg-[#ffc107] mx-auto mt-6 rounded-full" />
// //         </motion.div>

// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
// //           {awards.map((award, idx) => (
// //             <motion.div key={idx} whileHover={{ y: -8 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="group bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300">
// //               <div className="relative h-64 overflow-hidden border-b border-border">
// //                 <Image src={award.img} alt={award.title} fill className="object-fill group-hover:scale-105 transition-transform duration-500" />
// //                 {award.badge && <div className="absolute top-2 right-2 bg-[#ffc107] text-foreground text-xs font-bold px-2 py-1 rounded">{award.badge}</div>}
// //               </div>
// //               <div className="p-5">
// //                 <h4 className="font-bold text-foreground leading-tight mb-2 group-hover:text-[#a7150b] transition-colors">{award.title}</h4>
// //                 <p className="text-sm text-muted-foreground leading-relaxed">{award.desc}</p>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// // // // ========== 7. DONATION COMPONENT ==========
// // // function Donation() {
// // //   const [isDocModalOpen, setIsDocModalOpen] = useState(false)
// // //   const [isFcraRenewalModalOpen, setIsFcraRenewalModalOpen] = useState(false)
// // //   const [isOverseasModalOpen, setIsOverseasModalOpen] = useState(false)

// // //   return (
// // //     <>
// // //       <section className="py-24 px-4 bg-muted/30" id="donate">
// // //         <div className="container mx-auto max-w-6xl">
// // //           <div className="grid md:grid-cols-2 gap-8">
// // //             {/* Domestic Card */}
// // //             <motion.div whileHover={{ y: -8 }} className="bg-card rounded-3xl p-8 lg:p-12 shadow-xl border border-border relative overflow-hidden flex flex-col">
// // //               <div className="absolute top-0 left-0 w-full h-2 bg-[#a7150b]" />
// // //               <div className="flex items-center gap-4 mb-8">
// // //                 <div className="p-4 bg-red-50 rounded-2xl text-[#a7150b]"><FileText className="w-8 h-8" /></div>
// // //                 <div><h3 className="text-2xl font-bold text-foreground">Domestic Donors</h3><span className="text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full">80G Tax Exempt</span></div>
// // //               </div>
// // //               <ul className="space-y-4 mb-10 flex-1">
// // //                 {["50% Tax Exemption", "Instant e-Receipt", "Digital Certificate"].map((item, i) => (
// // //                   <li key={i} className="flex items-center gap-3 text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-[#a7150b]" /> {item}</li>
// // //                 ))}
// // //               </ul>
// // //               <div className="space-y-4">
// // //                 <Link href="https://aspwct.omsakthiamma.in/" target="_blank" rel="noopener noreferrer" className="block w-full"><Button className="w-full bg-[#a7150b] hover:bg-[#8a0d08] text-white h-14 text-lg rounded-xl">Donate via UPI / NetBanking</Button></Link>
// // //                 <Button onClick={() => setIsDocModalOpen(true)} variant="ghost" className="w-full text-muted-foreground hover:text-[#a7150b]">View 80G Certificate</Button>
// // //               </div>
// // //             </motion.div>

// // //             {/* Foreign Card */}
// // //             <motion.div whileHover={{ y: -8 }} className="bg-foreground rounded-3xl p-8 lg:p-12 shadow-xl relative overflow-hidden flex flex-col text-background">
// // //               <div className="absolute top-0 left-0 w-full h-2 bg-[#ffc107]" />
// // //               <div className="flex items-center gap-4 mb-8">
// // //                 <div className="p-4 bg-white/10 rounded-2xl text-[#ffc107]"><Globe className="w-8 h-8" /></div>
// // //                 <div><h3 className="text-2xl font-bold">Foreign Donors</h3><span className="text-sm font-medium text-foreground bg-[#ffc107] px-3 py-1 rounded-full">FCRA Approved</span></div>
// // //               </div>
// // //               <ul className="space-y-4 mb-10 flex-1">
// // //                 {["Government Approved FCRA", "International Wire Transfer", "SWIFT Transfer Support"].map((item, i) => (
// // //                   <li key={i} className="flex items-center gap-3 text-background/80"><CheckCircle2 className="w-5 h-5 text-[#ffc107]" /> {item}</li>
// // //                 ))}
// // //               </ul>
// // //               <div className="space-y-4">
// // //                 <Button onClick={() => setIsOverseasModalOpen(true)} className="w-full bg-[#ffc107] hover:bg-[#e6ac00] text-foreground font-bold h-14 text-lg rounded-xl">View Overseas Donation Procedure</Button>
// // //                 <Button onClick={() => setIsFcraRenewalModalOpen(true)} variant="ghost" className="w-full text-background/80 hover:text-background">View FCRA Certificate</Button>
// // //               </div>
// // //             </motion.div>
// // //           </div>
// // //         </div>
// // //       </section>

      
// // //       {/* Donation Modals */}
// // //       <AnimatePresence>
        
// // //         {/* 1. 80G Modal - NOW AN IMAGE VIEWER */}
// // //         {isDocModalOpen && (
// // //           <motion.div 
// // //             initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
// // //             onClick={() => setIsDocModalOpen(false)}
// // //             className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm flex items-center justify-center p-4"
// // //           >
// // //             <motion.div 
// // //               initial={{ opacity: 0, scale: 0.95 }} 
// // //               animate={{ opacity: 1, scale: 1 }} 
// // //               exit={{ opacity: 0, scale: 0.95 }}
// // //               onClick={(e) => e.stopPropagation()}
// // //               className="bg-white w-full max-w-4xl h-[90vh] rounded-2xl overflow-hidden shadow-2xl flex flex-col relative"
// // //             >
// // //                {/* Modal Header */}
// // //                <div className="flex justify-between items-center p-4 border-b bg-gray-50 z-10 shrink-0">
// // //                   <h3 className="font-bold text-gray-800 text-lg">80G Certificate</h3>
// // //                   <button 
// // //                     onClick={() => setIsDocModalOpen(false)} 
// // //                     className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors text-gray-700"
// // //                   >
// // //                     <X className="w-6 h-6" />
// // //                   </button>
// // //                </div>

// // //                {/* Scrollable Image Container */}
// // //                <div className="flex-1 overflow-y-auto bg-gray-100 p-4 md:p-8">
// // //                   <div className="bg-white shadow-lg mx-auto w-full">
// // //                       {/* REPLACE WITH YOUR 80G IMAGE PATH */}
// // //                       <Image 
// // //                         src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766136367/80G_Ceritficate_for_Receipt_page-0001_uxlp2z.jpg" 
// // //                         alt="80G Certificate" 
// // //                         width={1000}
// // //                         height={1400}
// // //                         className="w-full h-auto block" 
// // //                         priority
// // //                       />
// // //                   </div>
// // //                </div>
// // //             </motion.div>
// // //           </motion.div>
// // //         )}
        
// // //         {/* 2. FCRA Modal (Updated: 2 Images Vertical Scroll) */}
// // //         {isFcraRenewalModalOpen && (
// // //           <motion.div
// // //             initial={{ opacity: 0 }}
// // //             animate={{ opacity: 1 }}
// // //             exit={{ opacity: 0 }}
// // //             onClick={() => setIsFcraRenewalModalOpen(false)}
// // //             className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm flex items-center justify-center p-4"
// // //           >
// // //             <motion.div
// // //               initial={{ opacity: 0, scale: 0.95 }}
// // //               animate={{ opacity: 1, scale: 1 }}
// // //               exit={{ opacity: 0, scale: 0.95 }}
// // //               className="bg-white w-full max-w-4xl h-[90vh] rounded-2xl overflow-hidden shadow-2xl flex flex-col relative"
// // //               onClick={(e) => e.stopPropagation()}
// // //             >
// // //                {/* Modal Header */}
// // //                <div className="flex justify-between items-center p-4 border-b bg-gray-50 z-10 shrink-0">
// // //                   <h3 className="font-bold text-gray-800 text-lg">FCRA Certificate (2 Pages)</h3>
// // //                   <button
// // //                     onClick={() => setIsFcraRenewalModalOpen(false)}
// // //                     className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors text-gray-700"
// // //                   >
// // //                     <X className="w-6 h-6" />
// // //                   </button>
// // //                </div>
              
// // //               {/* Scrollable Image Container */}
// // //               <div className="flex-1 overflow-y-auto bg-gray-100 p-4 md:p-8">
// // //                  <div className="flex flex-col gap-4 max-w-3xl mx-auto">
// // //                     {/* PAGE 1 */}
// // //                     <div className="bg-white shadow-lg w-full">
// // //                         {/* REPLACE WITH YOUR PAGE 1 IMAGE PATH */}
// // //                         <Image 
// // //                           src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766133511/Renewal-Certificate-_ACMEC_TRUST_FCRA_page-0001_nw5ao7.jpg" 
// // //                           alt="FCRA Page 1" 
// // //                           width={1000}
// // //                           height={1400}
// // //                           className="w-full h-auto block" 
// // //                           priority
// // //                         />
// // //                     </div>
                    
// // //                     {/* PAGE 2 */}
// // //                     <div className="bg-white shadow-lg w-full">
// // //                         {/* REPLACE WITH YOUR PAGE 2 IMAGE PATH */}
// // //                         <Image 
// // //                           src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766133704/Renewal-Certificate-_ACMEC_TRUST_FCRA_page-0002_vth9g7.jpg" 
// // //                           alt="FCRA Page 2" 
// // //                           width={1000}
// // //                           height={1400}
// // //                           className="w-full h-auto block" 
// // //                         />
// // //                     </div>
// // //                  </div>
// // //               </div>
// // //             </motion.div>
// // //           </motion.div>
// // //         )}

// // //         {/* 3. Overseas Donation Modal (Fixed: Scrollable + Full Info) */}
// // //         {isOverseasModalOpen && (
// // //           <motion.div
// // //             initial={{ opacity: 0 }}
// // //             animate={{ opacity: 1 }}
// // //             exit={{ opacity: 0 }}
// // //             onClick={() => setIsOverseasModalOpen(false)}
// // //             className="fixed inset-0 bg-black/70 z-50 backdrop-blur-sm flex items-center justify-center p-4"
// // //           >
// // //             <motion.div
// // //               initial={{ opacity: 0, scale: 0.95 }}
// // //               animate={{ opacity: 1, scale: 1 }}
// // //               exit={{ opacity: 0, scale: 0.95 }}
// // //               className="w-full max-w-3xl h-[90vh] bg-background rounded-2xl shadow-2xl flex flex-col relative overflow-hidden"
// // //               onClick={(e) => e.stopPropagation()}
// // //             >
// // //               {/* Header */}
// // //               <div className="flex justify-between items-center p-5 border-b bg-muted z-10 shrink-0">
// // //                 <h3 className="font-bold text-xl text-foreground">Overseas Donation Procedure</h3>
// // //                 <button onClick={() => setIsOverseasModalOpen(false)} className="p-2 hover:bg-muted/80 rounded-full">
// // //                   <X className="w-5 h-5 text-muted-foreground" />
// // //                 </button>
// // //               </div>

// // //               {/* Scrollable Body */}
// // //               <div className="flex-1 overflow-y-auto p-8">
// // //                 <div className="bg-yellow-50 border-l-4 border-[#ffc107] p-4 mb-6 text-sm">
// // //                   <p className="font-bold mb-1 text-yellow-800">Important Note:</p>
// // //                   <p className="text-black">
// // //                     Donations can be done only through Wire Transfer to the specified Bank Account. UPI/NEFT/RTGS from
// // //                     Indian banks are restricted.
// // //                   </p>
// // //                 </div>

// // //                 <h4 className="font-bold text-lg mb-4 flex items-center gap-2 text-foreground">
// // //                   <Building2 className="w-5 h-5 text-[#a7150b]" /> Wire Transfer Details
// // //                 </h4>
// // //                 <div className="bg-muted rounded-xl p-6 border border-border space-y-3 font-mono text-sm mb-8">
// // //                   <div className="flex flex-col sm:flex-row sm:justify-between border-b border-border pb-2">
// // //                     <span className="text-muted-foreground font-sans">Account Name</span>
// // //                     <span className="font-bold text-right text-foreground">
// // //                       Adhiparasakthi Siddhar Peeda Women's Charitable Trust
// // //                     </span>
// // //                   </div>
// // //                   <div className="flex justify-between border-b border-border pb-2">
// // //                     <span className="text-muted-foreground font-sans">Account No</span>
// // //                     <span className="font-bold text-lg text-foreground">40209740361</span>
// // //                   </div>
// // //                   <div className="flex justify-between border-b border-border pb-2">
// // //                     <span className="text-muted-foreground font-sans">Bank Name</span>
// // //                     <span className="font-bold text-foreground">State Bank of India</span>
// // //                   </div>
// // //                   <div className="flex justify-between border-b border-border pb-2">
// // //                     <span className="text-muted-foreground font-sans">Branch</span>
// // //                     <span className="font-bold text-foreground">New Delhi Main Branch (Code: 00691)</span>
// // //                   </div>
// // //                   <div className="flex justify-between pt-1">
// // //                     <span className="text-muted-foreground font-sans">SWIFT Code</span>
// // //                     <span className="font-bold bg-yellow-100 px-2 rounded text-black">SBININBB104</span>
// // //                   </div>
// // //                 </div>

// // //                 <h4 className="font-bold text-lg mb-4 flex items-center gap-2 text-foreground">
// // //                   <Mail className="w-5 h-5 text-[#a7150b]" /> Mandatory Reporting
// // //                 </h4>
// // //                 <p className="text-sm text-muted-foreground mb-4">
// // //                   On successful transfer, kindly share the following details +{" "}
// // //                   <strong>Passport Copy (Front & Back)</strong> to{" "}
// // //                   <span className="font-bold text-foreground">acmectrust@gmail.com</span>:
// // //                 </p>
// // //                 <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm font-medium text-foreground bg-muted p-4 rounded-lg">
// // //                   <li>1. Name of Donor</li>
// // //                   <li>2. Donor Address</li>
// // //                   <li>3. Purpose of Remittance</li>
// // //                   <li>4. Country of Donor</li>
// // //                   <li>5. Currency & Amount</li>
// // //                   <li>6. ID Proof (Passport)</li>
// // //                 </ul>
// // //               </div>

// // //               {/* Footer */}
// // //               <div className="p-4 bg-muted border-t flex justify-end gap-3 shrink-0">
// // //                 <Button variant="outline" onClick={() => setIsOverseasModalOpen(false)}>
// // //                   Close
// // //                 </Button>
// // //                 <Button className="bg-foreground text-background hover:bg-foreground/90">Copy Bank Details</Button>
// // //               </div>
// // //             </motion.div>
// // //           </motion.div>
// // //         )}
// // //       </AnimatePresence>
// // //     </>
// // //   )
// // // }

// // // ========== 7. DONATION COMPONENT (UPDATED CONTENT) ==========
// // function Donation() {
// //   const [isOverseasModalOpen, setIsOverseasModalOpen] = useState(false)

// //   return (
// //     <>
// //       <section className="py-20 md:py-24 px-4 bg-muted/30" id="donate">
// //         <div className="container mx-auto max-w-6xl">

// //           {/* WHY DONATE */}
// //           <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16 space-y-4">
// //             <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold">
// //               <HeartHandshake className="w-4 h-4" />
// //               <span>Join Our Mission</span>
// //             </div>

// //             <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
// //               Empowering Lives, Creating Impact
// //             </h2>

// //             <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
// //               We have created meaningful impacts in rural education and healthcare.
// //               Your contribution helps us sustain these efforts. Join us and empower
// //               the mission to help the needy—every rupee counts towards building a better future.
// //             </p>
// //           </div>

// //           {/* DONATION CARDS */}
// //           <div className="grid md:grid-cols-1 gap-8 items-stretch mb-16 md:mb-20">

// //             {/* DOMESTIC */}
// //             <motion.div
// //               whileHover={{ y: -5 }}
// //               className="bg-card rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-border relative flex flex-col"
// //             >
// //               <div className="absolute top-0 left-0 w-full h-2 bg-[#a7150b]" />

// //               <div className="flex items-start gap-4 mb-6">
// //                 <div className="p-4 bg-red-50 rounded-2xl text-[#a7150b] shrink-0">
// //                   <FileText className="w-8 h-8" />
// //                 </div>
// //                 <div>
// //                   <h3 className="text-xl sm:text-2xl font-bold text-foreground">Domestic Donors</h3>
// //                   <span className="text-xs sm:text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full">
// //                     Indian Citizens Only
// //                   </span>
// //                 </div>
// //               </div>

// //               <div className="space-y-4 mb-8 flex-1 text-sm sm:text-base">
// //                 <p className="text-muted-foreground">
// //                   Maximize your philanthropic impact while saving on taxes.
// //                   Your contributions support vital education and rural development initiatives.
// //                 </p>

// //                 <ul className="space-y-3">
// //                   {[
// //                     "Eligible for Section 80G Tax Exemption",
// //                     "Valid Receipt with PAN for IT Returns",
// //                     "Supports Education & Rural Development",
// //                   ].map((item, i) => (
// //                     <li key={i} className="flex items-start gap-3 font-medium text-foreground">
// //                       <CheckCircle2 className="w-5 h-5 text-[#a7150b] shrink-0 mt-0.5" />
// //                       <span>{item}</span>
// //                     </li>
// //                   ))}
// //                 </ul>

// //                 <div className="bg-red-50 border border-red-100 rounded-lg p-3 flex gap-2 text-xs text-red-800">
// //                   <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
// //                   <p>
// //                     Note: As per Govt regulations, cash donations exceeding ₹2,000
// //                     are not eligible for 80G deduction. Please use digital modes.
// //                   </p>
// //                 </div>
// //               </div>

// //               <Link
// //                 href="https://aspwct.omsakthiamma.in/" target="_blank" rel="noopener noreferrer"
// //                 className="block w-full mt-auto"
// //               >
// //                 <Button className="w-full bg-[#a7150b] hover:bg-[#8a0d08] text-white h-14 text-base sm:text-lg rounded-xl shadow-md transition-all hover:scale-[1.02]">
// //                   Donate via UPI / NetBanking
// //                 </Button>
// //               </Link>
// //             </motion.div>

// //             {/* FOREIGN */}
// //           </div>

// //           {/* CERTIFICATES */}
// //           <div className="space-y-14 md:space-y-16">
// //             <div className="flex items-center justify-center gap-3 text-center">
// //               <ShieldCheck className="w-7 h-7 text-primary" />
// //               <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
// //                 Legal Certificates & Documents
// //               </h2>
// //             </div>

// //             {/* 80G */}
// //             <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-lg border border-border">
// //               <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
// //                 <FileText className="w-6 h-6 text-[#a7150b]" />
// //                 <h3 className="text-lg sm:text-xl font-bold text-foreground">
// //                   80G Tax Exemption Certificate (Domestic)
// //                 </h3>
// //               </div>

// //               <div className="flex justify-center bg-gray-50 rounded-xl p-4 border border-gray-100">
// //                 <Image
// //                   src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766399003/ASPWCT_80G_CERTIFICATE_1__page-0001_g1jeqw.jpg"
// //                   alt="80G Certificate"
// //                   width={800}
// //                   height={1000}
// //                   className="w-full max-w-3xl h-auto shadow-sm"
// //                 />
// //               </div>
// //             </div>

// //             {/* FCRA */}
            
// //           </div>
// //         </div>
// //       </section>

// //       {/* ================= MODAL FOR OVERSEAS PROCEDURE ================= */}
// //       <AnimatePresence>
// //         {isOverseasModalOpen && (
// //           <motion.div
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             exit={{ opacity: 0 }}
// //             onClick={() => setIsOverseasModalOpen(false)}
// //             className="fixed inset-0 bg-black/70 z-50 backdrop-blur-sm flex items-center justify-center p-4"
// //           >
// //             <motion.div
// //               initial={{ opacity: 0, scale: 0.95 }}
// //               animate={{ opacity: 1, scale: 1 }}
// //               exit={{ opacity: 0, scale: 0.95 }}
// //               className="w-full max-w-3xl h-[90vh] bg-background rounded-2xl shadow-2xl flex flex-col relative overflow-hidden"
// //               onClick={(e) => e.stopPropagation()}
// //             >
// //               <div className="flex justify-between items-center p-5 border-b bg-muted z-10 shrink-0">
// //                 <h3 className="font-bold text-xl text-foreground">Overseas Donation Procedure</h3>
// //                 <button onClick={() => setIsOverseasModalOpen(false)} className="p-2 hover:bg-muted/80 rounded-full">
// //                   <X className="w-5 h-5 text-muted-foreground" />
// //                 </button>
// //               </div>

// //               <div className="flex-1 overflow-y-auto p-8">
// //                 <div className="bg-yellow-50 border-l-4 border-[#ffc107] p-4 mb-6 text-sm">
// //                   <p className="font-bold mb-1 text-yellow-800">Important Note:</p>
// //                   <p className="text-black">
// //                     Donations can be done only through Wire Transfer to the specified Bank Account. UPI/NEFT/RTGS from
// //                     Indian banks are restricted.
// //                   </p>
// //                 </div>

// //                 <h4 className="font-bold text-lg mb-4 flex items-center gap-2 text-foreground">
// //                   <Building2 className="w-5 h-5 text-[#a7150b]" /> Wire Transfer Details
// //                 </h4>
// //                 <div className="bg-muted rounded-xl p-6 border border-border space-y-3 font-mono text-sm mb-8">
// //                   <div className="flex flex-col sm:flex-row sm:justify-between border-b border-border pb-2">
// //                     <span className="text-muted-foreground font-sans">Account Name</span>
// //                     <span className="font-bold text-right text-foreground">
// //                       Adhiparasakthi Siddhar Peeda Women's Charitable Trust
// //                     </span>
// //                   </div>
// //                   <div className="flex justify-between border-b border-border pb-2">
// //                     <span className="text-muted-foreground font-sans">Account No</span>
// //                     <span className="font-bold text-lg text-foreground">40209740361</span>
// //                   </div>
// //                   <div className="flex justify-between border-b border-border pb-2">
// //                     <span className="text-muted-foreground font-sans">Bank Name</span>
// //                     <span className="font-bold text-foreground">State Bank of India</span>
// //                   </div>
// //                   <div className="flex justify-between border-b border-border pb-2">
// //                     <span className="text-muted-foreground font-sans">Branch</span>
// //                     <span className="font-bold text-foreground">New Delhi Main Branch (Code: 00691)</span>
// //                   </div>
// //                   <div className="flex justify-between pt-1">
// //                     <span className="text-muted-foreground font-sans">SWIFT Code</span>
// //                     <span className="font-bold bg-yellow-100 px-2 rounded text-black">SBININBB104</span>
// //                   </div>
// //                 </div>

// //                 <h4 className="font-bold text-lg mb-4 flex items-center gap-2 text-foreground">
// //                   <Mail className="w-5 h-5 text-[#a7150b]" /> Mandatory Reporting
// //                 </h4>
// //                 <p className="text-sm text-muted-foreground mb-4">
// //                   On successful transfer, kindly share the following details +{" "}
// //                   <strong>Passport Copy (Front & Back)</strong> to{" "}
// //                   <span className="font-bold text-foreground">aspwctrust@gmail.com</span>:
// //                 </p>
// //                 <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm font-medium text-foreground bg-muted p-4 rounded-lg">
// //                   <li>1. Name of Donor</li>
// //                   <li>2. Donor Address</li>
// //                   <li>3. Purpose of Remittance</li>
// //                   <li>4. Country of Donor</li>
// //                   <li>5. Currency & Amount</li>
// //                   <li>6. ID Proof (Passport)</li>
// //                 </ul>
// //               </div>

// //               <div className="p-4 bg-muted border-t flex justify-end gap-3 shrink-0">
// //                 <Button variant="outline" onClick={() => setIsOverseasModalOpen(false)}>
// //                   Close
// //                 </Button>
// //                 <Button className="bg-foreground text-background hover:bg-foreground/90">Copy Bank Details</Button>
// //               </div>
// //             </motion.div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </>
// //   )
// // }

// // function CsrProjects() {
// //   return (
// //       <section className="py-24 px-4 bg-background">
// //         <div className="container mx-auto space-y-24">
          
// //           {/* ================= PROJECT 1: EYE CAMP ================= */}
// //           <div>
// //             <div className="text-center mb-10">
// //               <span className="inline-block px-4 py-2 bg-[#ffc107]/10 text-[#ffc107] rounded-full text-xs font-bold tracking-widest uppercase mb-4">
// //                 CSR Initiative 01
// //               </span>
// //               <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Free Eye Camp</h2>
// //             </div>

// //             {/* UPDATED: 
// //                1. Kept 'grid-cols-2' (2 images per row).
// //                2. Added 'max-w-4xl mx-auto' to restrict width -> Makes images smaller!
// //             */}
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
// //               {[
// //                 "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766164830/097A1993_anatnz.jpg",
// //                 "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766164805/097A1516_sodl4z.jpg",
// //                 "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766164845/097A1597_wxps2o.jpg",
// //                 "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766164797/097A1504_nn9vgr.jpg",
// //               ].map((imgSrc, idx) => (
// //                 <motion.div
// //                   key={idx}
// //                   initial={{ opacity: 0, y: 20 }}
// //                   whileInView={{ opacity: 1, y: 0 }}
// //                   viewport={{ once: true }}
// //                   transition={{ delay: idx * 0.1 }}
// //                   whileHover={{ y: -5 }}
// //                   // Kept aspect-square for a neat box shape
// //                   className="relative w-full aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer group"
// //                 >
// //                   <Image
// //                     src={imgSrc || "/placeholder.svg"}
// //                     alt={`Eye Camp Image ${idx + 1}`}
// //                     fill
// //                     className="object-fill transition-transform duration-700 group-hover:scale-110"
// //                   />
// //                   <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
// //                 </motion.div>
// //               ))}
// //             </div>
// //           </div>
          
// //            {/* ================= PROJECT 2: ENDOSCOPE MACHINE ================= */}
// //                   </div>
// //       </section>
// //   )
// // }

// // // ========== 9. CSR INQUIRY FORM COMPONENT ==========
// // function CsrInquiry() {
// //   const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle")
// //   const [selectedProject, setSelectedProject] = useState("")

// //   const handleFormSubmit = (e: React.FormEvent) => {
// //     e.preventDefault()
// //     setFormStatus("submitting")
// //     setTimeout(() => {
// //       setFormStatus("success")
// //     }, 1500)
// //   }

// //   return (
// //     // Reduced vertical padding on mobile (py-12) vs desktop (py-24)
// //     <section className="py-12 md:py-24 px-4 bg-[#ffc107] relative">
// //       <div className="container mx-auto max-w-5xl relative z-10">
// //         <Card className="border-none shadow-2xl rounded-3xl overflow-hidden">
// //           <div className="grid grid-cols-1 md:grid-cols-5">
// //             {/* Form Side */}
// //             <div className="md:col-span-3 p-6 md:p-12 bg-background">
// //               <div className="mb-6 md:mb-8">
// //                 {/* Adjusted font size for mobile */}
// //                 <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground">Partner with Us</h3>
// //                 <p className="text-sm md:text-base text-muted-foreground mt-2">Interested in a CSR collaboration? Let's connect.</p>
// //               </div>

// //               {formStatus === "success" ? (
// //                 <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-64 flex flex-col items-center justify-center text-center">
// //                   <CheckCircle2 className="w-16 h-16 text-green-600 mb-4" />
// //                   <h4 className="text-xl font-bold text-foreground">Inquiry Sent!</h4>
// //                   <p className="text-muted-foreground">We will get back to you within 24 hours.</p>
// //                 </motion.div>
// //               ) : (
// //                 <form onSubmit={handleFormSubmit} className="space-y-4 md:space-y-5">
// //                   {/* Changed to single column on mobile (grid-cols-1) for better input width */}
// //                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //                     <div className="space-y-2">
// //                       <Label htmlFor="name">Full Name</Label>
// //                       <Input id="name" required placeholder="John Doe" className="bg-muted border-border h-11 focus:ring-[#a7150b]" />
// //                     </div>
// //                     <div className="space-y-2">
// //                       <Label htmlFor="company">Company</Label>
// //                       <Input id="company" required placeholder="Tech Corp" className="bg-muted border-border h-11 focus:ring-[#a7150b]" />
// //                     </div>
// //                   </div>
                  
// //                   {/* Changed to single column on mobile */}
// //                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //                     <div className="space-y-2">
// //                       <Label htmlFor="email">Email</Label>
// //                       <Input id="email" type="email" required placeholder="john@example.com" className="bg-muted border-border h-11 focus:ring-[#a7150b]" />
// //                     </div>
// //                     <div className="space-y-2">
// //                       <Label htmlFor="phone">Phone</Label>
// //                       <Input id="phone" type="tel" required placeholder="+91..." className="bg-muted border-border h-11 focus:ring-[#a7150b]" />
// //                     </div>
// //                   </div>

// //                   <div className="space-y-2">
// //                     <Label htmlFor="project">Interested Project</Label>
// //                     <Select onValueChange={(value) => setSelectedProject(value)}>
// //                       <SelectTrigger className="bg-muted border-border h-11"><SelectValue placeholder="Select a project" /></SelectTrigger>
// //                       <SelectContent>
// //                         <SelectItem value="education">EDUCATION</SelectItem>
// //                         <SelectItem value="eye-camp">EYE CAMP</SelectItem>
// //                         <SelectItem value="medical">MEDICAL</SelectItem>
// //                         <SelectItem value="feeding-poor">FEEDING POOR</SelectItem>
// //                         <SelectItem value="others">OTHERS</SelectItem>
// //                       </SelectContent>
// //                     </Select>
// //                   </div>
                  
// //                   {selectedProject === "others" && (
// //                     <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="space-y-2">
// //                       <Label htmlFor="other-details">Specify Details</Label>
// //                       <Input id="other-details" required placeholder="Please specify..." className="bg-muted border-border h-11 focus:ring-[#a7150b]" />
// //                     </motion.div>
// //                   )}
                  
// //                   <div className="space-y-2">
// //                     <Label htmlFor="remarks">Remarks</Label>
// //                     <Textarea id="remarks" placeholder="Any specific requirements?" className="bg-muted border-border resize-none focus:ring-[#a7150b]" rows={3} />
// //                   </div>
                  
// //                   <Button type="submit" disabled={formStatus === "submitting"} className="w-full bg-[#a7150b] hover:bg-[#8a0d08] text-white font-bold h-12 text-lg rounded-xl">
// //                     {formStatus === "submitting" ? "Sending..." : "Submit Inquiry"}
// //                   </Button>
// //                 </form>
// //               )}
// //             </div>

// //             {/* Info Side */}
// //             <div className="md:col-span-2 bg-foreground p-6 md:p-12 text-background flex flex-col justify-between relative overflow-hidden">
// //               {/* Adjusted icon position/size for mobile so it doesn't overlap text */}
// //               <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
// //                 <Building2 size={150} className="md:w-[200px] md:h-[200px]" />
// //               </div>
              
// //               <div className="relative z-10">
// //                 <h4 className="text-lg md:text-xl font-bold mb-6 text-[#ffc107]">
// //                   Contact Information
// //                 </h4>
// //                 <div className="space-y-6">
// //                   <div className="flex items-start gap-4">
// //                     <Mail className="w-5 h-5 md:w-6 md:h-6 text-[#ffc107] shrink-0 mt-1" />
// //                     <div>
// //                       <p className="text-xs text-background/60 uppercase tracking-wider">
// //                         Email Us
// //                       </p>
// //                       <p className="font-medium text-sm break-all">
// //                         contact@aspwctrust.org
// //                       </p>
// //                     </div>
// //                   </div>               
// //                   <div className="flex items-start gap-4">
// //                     <Phone className="w-5 h-5 md:w-6 md:h-6 text-[#ffc107] shrink-0 mt-1" />
// //                     <div>
// //                       <p className="text-xs text-background/60 uppercase tracking-wider mb-1">
// //                         Call Us
// //                       </p>
// //                       <div className="space-y-1 text-sm font-medium">
// //                         <p>Landline: +91 44 2752 9313</p>
// //                         <p>Mobile: +91 91500 45391</p>
// //                         <p>Whatsapp: +91 91500 45391</p>
// //                         <p>PRO: +91 44 27529276</p>
// //                       </div>
// //                     </div>
// //                   </div>
// //                   <div className="flex items-start gap-4">
// //                     <Building2 className="w-5 h-5 md:w-6 md:h-6 text-[#ffc107] shrink-0 mt-1" />
// //                     <div>
// //                       <p className="text-xs text-background/60 uppercase tracking-wider mb-1">
// //                         Visit Us
// //                       </p>
// //                       <p className="font-medium text-sm leading-relaxed text-background/90">
// //                         <span className="font-bold block mb-1">
// //                           Adhiparasakthi Charitable Medical Educational and
// //                           Cultural Trust
// //                         </span>
// //                         No.1 GST Road, Adhiparasakthi Siddhar Peeda Temple
// //                         Campus, Melmaruvathur, Chengalpet District,
// //                         TamilNadu-603319, India
// //                       </p>
// //                     </div>
// //                   </div>
// //                   <div className="flex items-start gap-4">
// //                     <Clock className="w-5 h-5 md:w-6 md:h-6 text-[#ffc107] shrink-0 mt-1" />
// //                     <div>
// //                       <p className="text-xs text-background/60 uppercase tracking-wider mb-1">
// //                         Timing
// //                       </p>
// //                       <p className="font-medium text-sm">
// //                         8:00 am To 8:00 PM
// //                       </p>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
              
// //               <div className="mt-8 pt-8 border-t border-white/10 relative z-10">
// //                 <p className="text-xs text-background/60">
// //                   By submitting this form, you agree to our privacy policy
// //                   regarding data collection.
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //         </Card>
// //       </div>
// //     </section>
// //   )
// // }

// "use client"

// import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion"
// import Image from "next/image"
// import Link from "next/link"
// import {
//   Heart,
//   CheckCircle2,
//   Landmark,
//   Activity,
//   Eye,
//   FileText,
//   Phone,
//   Building2,
//   Clock,
//   HeartHandshake,
//   Mail,
//   ShieldCheck,
//   AlertCircle
// } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { useState } from "react"

// // ========== ANIMATION VARIANTS ==========
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

// // ========== MAIN PAGE EXPORT ==========
// export default function Home() {
//   return (
//     <main className="bg-slate-50 overflow-x-hidden font-sans text-foreground selection:bg-[#ffc107] selection:text-black">
//       <Hero />
//       <About />
//       <Leadership />
//       <CsrRegistration />
//       <MissionVision />
//       <Awards />
//       <Donation />
//       <CsrProjects />
//       <CsrInquiry />
//     </main>
//   )
// }

// // ========== HERO COMPONENT ==========
// function Hero() {
//   const { scrollY } = useScroll()
//   const y1 = useTransform(scrollY, [0, 500], [0, 150])

//   return (
//     <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
//       {/* Background Image */}
//       <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
//         <Image
//           src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766091901/dental-hospital_cd4gda.jpg"
//           alt="Hero Background"
//           fill
//           className="object-cover scale-110"
//           priority
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
//       </motion.div>

//       <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center pt-16 md:pt-20">
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={staggerContainer}
//           className="max-w-5xl mx-auto text-center"
//         >
//           <motion.div variants={fadeInUp} className="inline-block mb-6">
//             <span className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-md text-[#ffc107] text-sm font-bold tracking-widest uppercase border border-white/10 shadow-xl">
//               Est. 1988 • Registered Trust
//             </span>
//           </motion.div>

//           <motion.h1
//             variants={fadeInUp}
//             className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-[1.1] drop-shadow-2xl tracking-tight"
//           >
//             Healing Hands.{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffc107] via-yellow-200 to-[#ffc107]">
//               Compassionate Hearts.
//             </span>
//           </motion.h1>

//           <motion.p
//             variants={fadeInUp}
//             className="text-lg md:text-2xl text-gray-200 mb-12 leading-relaxed font-light max-w-3xl mx-auto text-balance"
//           >
//             Adhiparasakthi Siddhar Peeda Women's Charitable Trust (ASPWCT)
//             dedicated to serving humanity through holistic healthcare and education.
//           </motion.p>

//           <motion.div
//             variants={fadeInUp}
//             className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-8"
//           >
//             <Link
//               href="https://aspwct.omsakthiamma.in/" target="_blank" rel="noopener noreferrer"
//               className="w-full sm:w-auto"
//             >
//               <Button className="w-full sm:w-auto bg-[#a7150b] hover:bg-[#d91e11] text-white rounded-full px-10 py-7 text-lg font-bold shadow-lg transition-all hover:scale-105">
//                 <Heart className="mr-3 w-5 h-5 fill-current" />
//                 Donate Now
//               </Button>
//             </Link>

//             <Link href="#about" className="w-full sm:w-auto">
//               <Button
//                 variant="outline"
//                 className="w-full sm:w-auto border-2 border-white/40 text-white hover:bg-white hover:text-black rounded-full px-10 py-7 text-lg font-bold backdrop-blur-sm transition-all hover:scale-105 bg-white/5"
//               >
//                 Explore Our Work
//               </Button>
//             </Link>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// // ========== ABOUT COMPONENT ==========
// function About() {
//   return (
//     <section id="about" className="py-20 md:py-32 px-4 container mx-auto">
//       <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
//         {/* LEFT CONTENT */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={staggerContainer}
//           className="text-center lg:text-left"
//         >
//           <motion.span
//             variants={fadeInUp}
//             className="inline-block px-4 py-2 bg-[#a7150b]/5 text-[#a7150b] rounded-full text-xs font-bold tracking-widest uppercase mb-4"
//           >
//             About The Trust
//           </motion.span>

//           <motion.h2
//             variants={fadeInUp}
//             className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight tracking-tight"
//           >
//             A Legacy of Service{" "}
//             <span className="relative inline-block whitespace-nowrap">
//               <span className="relative z-10">Since 1988</span>
//               <span className="absolute bottom-2 left-0 right-0 h-3 bg-[#ffc107]/60 -z-0" />
//             </span>
//           </motion.h2>

//           <motion.div
//             variants={fadeInUp}
//             className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 space-y-4"
//           >
//             <p>
//               M/s Adhiparasakthi Siddhar Peeda Women's Charitable Trust (ASPWCT Trust), as the name suggests
//               has dedicated itself to serve the people in the areas of:
//             </p>

//             <div className="grid sm:grid-cols-2 gap-3 py-4">
//               {["Charity", "Medical", "Educational", "Cultural Activities"].map((item) => (
//                 <div key={item} className="flex items-start gap-3 group">
//                   <div className="w-10 h-10 rounded-full bg-[#a7150b]/10 group-hover:bg-[#a7150b] transition-colors flex items-center justify-center shrink-0">
//                     <CheckCircle2 className="text-[#a7150b] group-hover:text-white w-5 h-5 transition-colors" />
//                   </div>
//                   <span className="font-semibold text-gray-800 leading-10">{item}</span>
//                 </div>
//               ))}
//             </div>

//             <p>
//               This trust is a non-profitable organization which was founded by{" "}
//               <strong className="text-gray-900">H.H. Bangaru Adigalar</strong> in the year 1988 with a small corpus
//               fund and with few cents of land in Melmaruvathur.
//             </p>
//           </motion.div>

//           {/* STATS */}
//           <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             <div className="group hover:scale-105 transition-transform">
//               <Card className="p-6 border-none shadow-md bg-white hover:shadow-xl transition-shadow rounded-2xl">
//                 <h4 className="text-3xl md:text-4xl font-bold text-[#ffc107] mb-1">1988</h4>
//                 <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Established</p>
//               </Card>
//             </div>

//             <div className="group hover:scale-105 transition-transform">
//               <Card className="p-6 border-none shadow-md bg-white hover:shadow-xl transition-shadow rounded-2xl">
//                 <h4 className="text-xl md:text-2xl font-bold text-[#a7150b] mb-1">Melmaruvathur</h4>
//                 <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Headquarters</p>
//               </Card>
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* RIGHT IMAGE */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="relative group"
//         >
//           <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
//             <Image
//               src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766143744/a12_nbqg5x.webp"
//               alt="Medical Service"
//               width={700}
//               height={500}
//               className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
//             />
//           </div>

//           <div className="absolute -top-10 -right-10 w-72 h-72 bg-[#ffc107]/20 rounded-full blur-3xl -z-10" />
//           <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-[#a7150b]/10 rounded-full blur-3xl -z-10" />
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// // ========== LEADERSHIP COMPONENT ==========
// function Leadership() {
//   return (
//     <section className="py-24 bg-white">
//       <div className="container mx-auto px-4">
//         {/* Founders */}
//         <div className="mb-24">
//           <div className="text-center mb-16">
//             <span className="inline-block px-4 py-2 bg-[#a7150b]/10 text-[#a7150b] rounded-full text-xs font-bold tracking-widest uppercase mb-4">
//               Our Guidance
//             </span>
//             <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 tracking-tight">
//               Founder & President
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
//             {[
//               {
//                 name: "His Holiness Bangaru Adigalar",
//                 role: "Founder",
//                 image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766091903/3952Founder-President_k3xqz3.png",
//                 borderColor: "border-[#ffc107]",
//               },
//               {
//                 name: "Smt. Lakshmi Bangaru Adigalar",
//                 role: "President",
//                 image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766091895/Vice-President_z3lp84.jpg",
//                 borderColor: "border-[#a7150b]",
//               },
//             ].map((person, idx) => (
//               <motion.div
//                 key={person.name}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.2 }}
//                 whileHover={{ y: -8 }}
//               >
//                 <Card className="p-8 text-center border-none shadow-lg bg-slate-50 hover:bg-white transition-all duration-300 rounded-3xl group">
//                   <div className={`w-48 h-48 mx-auto rounded-full overflow-hidden border-4 ${person.borderColor} shadow-xl mb-6 relative group-hover:scale-105 transition-transform`}>
//                     <Image src={person.image} alt={person.name} fill className="object-cover" />
//                   </div>
//                   <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">{person.name}</h3>
//                   <p className="text-[#a7150b] font-bold uppercase tracking-widest text-sm">{person.role}</p>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Board of Trustees Grid */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4 tracking-tight">Board of Trustees</h2>
//           <div className="w-24 h-1.5 bg-[#ffc107] mx-auto rounded-full" />
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 max-w-6xl mx-auto">
//           {[
//             { name: "Mrs. V. Lakshmi", role: "President / Trustee" },
//             { name: "Mrs. B. Umadevi", role: "Vice President / Trustee" },
//             { name: "Mrs. B. Sridevi", role: "Secretary / Trustee" },
//           ].map((trustee, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: idx * 0.1 }}
//               whileHover={{ y: -5 }}
//             >
//               <Card className="p-6 hover:shadow-xl transition-all group bg-white border border-gray-100 rounded-2xl">
//                 <div className="flex items-start gap-4">
//                   <div className="w-12 h-12 bg-[#ffc107]/20 text-[#ffc107] rounded-full flex items-center justify-center shrink-0 font-bold text-xl">
//                     {trustee.name.split(" ")[1][0]}
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#a7150b] transition-colors mb-2">
//                       {trustee.name}
//                     </h3>
//                     <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-bold uppercase tracking-wide">
//                       {trustee.role}
//                     </span>
//                   </div>
//                 </div>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
        
//         {/* General Trustees Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
//           {[
//             { name: "Mrs. A. Asharani", role: "Trustee" },
//             { name: "Dr. E. Srilekha", role: "Trustee" },
//             { name: "Mrs. M. Vanitha", role: "Trustee" },
//             { name: "Mrs. A. Madhumalar", role: "Trustee" },
//             { name: "Miss. S. Monasakthi", role: "Trustee" },
//             { name: "Mrs. A. Sasikala", role: "Trustee" },
//           ].map((trustee, idx) => (
//             <motion.div
//               key={trustee.name}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: (idx + 5) * 0.1 }}
//               whileHover={{ y: -5 }}
//             >
//               <Card className="p-5 hover:shadow-lg transition-all group border border-gray-100 rounded-2xl bg-white">
//                 <div className="flex flex-col gap-3">
//                   <div className="flex items-center justify-between">
//                     <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-500">
//                       {trustee.name.split(" ")[1][0]}
//                     </div>
//                     <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest border border-slate-200 px-2 py-1 rounded">
//                       {trustee.role}
//                     </span>
//                   </div>
//                   <h4 className="text-sm font-bold text-gray-800 group-hover:text-[#a7150b] transition-colors">
//                     {trustee.name}
//                   </h4>
//                 </div>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// // ========== CSR COMPONENT ==========
// function CsrRegistration() {
//   return (
//     <section className="py-20 bg-[#1a1a1a] text-white">
//       <div className="container mx-auto px-4">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
          
//           <motion.div 
//             initial="hidden" 
//             whileInView="visible" 
//             viewport={{ once: true }} 
//             variants={staggerContainer}
//           >
//             <div className="flex items-center gap-3 mb-4">
//               <Landmark className="w-8 h-8 text-[#ffc107]" />
//               <span className="text-[#ffc107] font-bold tracking-widest uppercase text-sm">Government of India</span>
//             </div>
            
//             <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 tracking-tight">Official CSR Registration</h2>
            
//             <p className="text-gray-400 text-lg mb-8 leading-relaxed">
//               Adhiparasakthi Siddhar Peeda Women's Charitable Trust is officially registered with the
//               Ministry of Corporate Affairs for undertaking CSR activities.
//             </p>
            
//             <div className="grid sm:grid-cols-2 gap-6">
//               <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
//                 <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Registration Number</p>
//                 <p className="text-2xl font-mono font-bold text-[#ffc107]">CSR00002407</p>
//               </div>
//               <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
//                 <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Date of Registration</p>
//                 <p className="text-xl font-bold">16-04-2021</p>
//               </div>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10"
//           >
//             <div className="bg-white p-2">
//                 <Image 
//                   src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766399036/Approval_Letter_Women_s_-CSR_ACTIVITIES_1__page-0001_ohogf3.jpg" 
//                   alt="Official CSR Approval Letter" 
//                   width={800}
//                   height={1000}
//                   className="w-full h-auto object-contain"
//                 />
//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   )
// }

// // ========== MISSION & VISION COMPONENT ==========
// function MissionVision() {
//   return (
//     <section className="py-24 px-4 bg-slate-50 relative overflow-hidden">
//       <div className="container mx-auto relative z-10">
//         <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
//           <motion.div whileHover="hover" variants={scaleOnHover} className="bg-white p-10 md:p-14 rounded-3xl shadow-xl border-l-8 border-[#a7150b]">
//             <div className="relative z-10">
//               <div className="w-14 h-14 bg-[#a7150b]/10 rounded-2xl flex items-center justify-center mb-8">
//                 <Activity className="text-[#a7150b] w-8 h-8" />
//               </div>
//               <h3 className="text-3xl font-serif font-bold mb-4 text-gray-900">Our Mission</h3>
//               <p className="text-gray-600 text-lg leading-relaxed">
//                To foster a society of inclusive growth and universal brotherhood by bridging the gap between rural and urban communities through holistic education and spiritual awakening. We envision a future where women and rural youth are empowered with ethical leadership, modern skills, and spiritual values, enabling them to lead lives of dignity and contribute significantly to the nation's advancement under the divine guidance of Arulthiru Bangaru Adigalar.
//               </p>
//             </div>
//           </motion.div>

//           <motion.div whileHover="hover" variants={scaleOnHover} className="bg-white p-10 md:p-14 rounded-3xl shadow-xl border-l-8 border-[#ffc107]">
//             <div className="relative z-10">
//               <div className="w-14 h-14 bg-[#ffc107]/10 rounded-2xl flex items-center justify-center mb-8">
//                 <Eye className="text-gray-900 w-8 h-8" />
//               </div>
//               <h3 className="text-3xl font-serif font-bold mb-4 text-gray-900">Our Vision</h3>
//               <p className="text-gray-600 text-lg leading-relaxed">To shape a future defined by spiritual values and ethical leadership, creating a society where accessible, high-quality education drives sustainable technical advancement and the holistic development of the nation.To create a sustainable, inclusive society where the burdens of human suffering are alleviated through institutional excellence in healthcare, education, and cultural preservation.
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

// // ========== AWARDS COMPONENT ==========
// function Awards() {
//   const awards = [
//     { img: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092337/2911191530526914-150x150_a5fseg.jpg", title: "State Govt Honor", desc: "Honored by Chief Minister Ms. J. Jayalalitha..." },
//     { img: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092336/2911191530538674-150x150_semv32.jpg", title: "Nirmal Gram Puraskar", desc: "National award for sanitation..." },
//     { img: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092336/2911191530539144-150x150_dyivy6.jpg", title: "Certificate of Excellence", desc: "Recognition for outstanding contribution..." },
//     { img: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092336/2911191530534191-150x150_lo2fc6.jpg", title: "Best Institution", desc: "Awarded to Adhiparasakthi Annai Illam..." },
//   ]

//   return (
//     <section className="py-24 bg-white">
//       <div className="container mx-auto px-4">
//         <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
//           <span className="inline-block px-4 py-2 bg-[#a7150b]/10 text-[#a7150b] rounded-full text-xs font-bold tracking-widest uppercase mb-4">Our Achievements</span>
//           <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 tracking-tight">Awards and Recognition</h2>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {awards.map((award, idx) => (
//             <motion.div key={idx} whileHover={{ y: -8 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
//               <div className="relative h-56 overflow-hidden">
//                 <Image src={award.img} alt={award.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
//               </div>
//               <div className="p-5">
//                 <h4 className="font-bold text-gray-900 leading-tight mb-2 group-hover:text-[#a7150b] transition-colors">{award.title}</h4>
//                 <p className="text-sm text-gray-500 leading-relaxed">{award.desc}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// // ========== DONATION COMPONENT ==========
// function Donation() {
//   const [isOverseasModalOpen, setIsOverseasModalOpen] = useState(false)

//   return (
//     <>
//       <section className="py-20 md:py-24 px-4 bg-slate-50" id="donate">
//         <div className="container mx-auto max-w-6xl">

//           {/* WHY DONATE */}
//           <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16 space-y-4">
//             <div className="inline-flex items-center gap-2 bg-[#ffc107]/20 text-yellow-800 px-4 py-1.5 rounded-full text-sm font-semibold">
//               <HeartHandshake className="w-4 h-4" />
//               <span>Join Our Mission</span>
//             </div>

//             <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
//               Empowering Lives, Creating Impact
//             </h2>

//             <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
//               We have created meaningful impacts in rural education and healthcare.
//               Your contribution helps us sustain these efforts. Join us and empower
//               the mission to help the needy—every rupee counts towards building a better future.
//             </p>
//           </div>

//           {/* DONATION CARDS */}
//           <div className="grid md:grid-cols-1 gap-8 items-stretch mb-16 md:mb-20">

//             {/* DOMESTIC */}
//             <motion.div
//               whileHover={{ y: -5 }}
//               className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-gray-100 relative flex flex-col"
//             >
//               <div className="absolute top-0 left-0 w-full h-2 bg-[#a7150b]" />

//               <div className="flex items-start gap-4 mb-6">
//                 <div className="p-4 bg-red-50 rounded-2xl text-[#a7150b] shrink-0">
//                   <FileText className="w-8 h-8" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Domestic Donors</h3>
//                   <span className="text-xs sm:text-sm font-medium text-green-700 bg-green-100 px-3 py-1 rounded-full">
//                     Indian Citizens Only
//                   </span>
//                 </div>
//               </div>

//               <div className="space-y-4 mb-8 flex-1 text-sm sm:text-base">
//                 <p className="text-gray-500">
//                   Maximize your philanthropic impact while saving on taxes.
//                   Your contributions support vital education and rural development initiatives.
//                 </p>

//                 <ul className="space-y-3">
//                   {[
//                     "Eligible for Section 80G Tax Exemption",
//                     "Valid Receipt with PAN for IT Returns",
//                     "Supports Education & Rural Development",
//                   ].map((item, i) => (
//                     <li key={i} className="flex items-start gap-3 font-medium text-gray-800">
//                       <CheckCircle2 className="w-5 h-5 text-[#a7150b] shrink-0 mt-0.5" />
//                       <span>{item}</span>
//                     </li>
//                   ))}
//                 </ul>

//                 <div className="bg-red-50 border border-red-100 rounded-lg p-3 flex gap-2 text-xs text-red-800">
//                   <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
//                   <p>
//                     Note: As per Govt regulations, cash donations exceeding ₹2,000
//                     are not eligible for 80G deduction. Please use digital modes.
//                   </p>
//                 </div>
//               </div>

//               <Link
//                 href="https://aspwct.omsakthiamma.in/" target="_blank" rel="noopener noreferrer"
//                 className="block w-full mt-auto"
//               >
//                 <Button className="w-full bg-[#a7150b] hover:bg-[#8a0d08] text-white h-14 text-base sm:text-lg rounded-2xl shadow-lg transition-all hover:scale-[1.02]">
//                   Donate via UPI / NetBanking
//                 </Button>
//               </Link>
//             </motion.div>
//           </div>

//           {/* CERTIFICATES */}
//           <div className="space-y-14 md:space-y-16">
//             <div className="flex items-center justify-center gap-3 text-center">
//               <ShieldCheck className="w-7 h-7 text-[#a7150b]" />
//               <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
//                 Legal Certificates & Documents
//               </h2>
//             </div>

//             {/* 80G */}
//             <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-md border border-gray-100">
//               <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
//                 <FileText className="w-6 h-6 text-[#a7150b]" />
//                 <h3 className="text-lg sm:text-xl font-bold text-gray-900">
//                   80G Tax Exemption Certificate (Domestic)
//                 </h3>
//               </div>

//               <div className="flex justify-center bg-gray-50 rounded-xl p-4 border border-gray-100">
//                 <Image
//                   src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766399003/ASPWCT_80G_CERTIFICATE_1__page-0001_g1jeqw.jpg"
//                   alt="80G Certificate"
//                   width={800}
//                   height={1000}
//                   className="w-full max-w-3xl h-auto shadow-sm"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ================= MODAL FOR OVERSEAS PROCEDURE ================= */}
//       <AnimatePresence>
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
//               className="w-full max-w-3xl h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col relative overflow-hidden"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="flex justify-between items-center p-5 border-b bg-gray-50 z-10 shrink-0">
//                 <h3 className="font-bold text-xl text-gray-900">Overseas Donation Procedure</h3>
//                 <button onClick={() => setIsOverseasModalOpen(false)} className="p-2 hover:bg-gray-200 rounded-full">
//                   <X className="w-5 h-5 text-gray-500" />
//                 </button>
//               </div>

//               <div className="flex-1 overflow-y-auto p-8">
//                 <div className="bg-yellow-50 border-l-4 border-[#ffc107] p-4 mb-6 text-sm">
//                   <p className="font-bold mb-1 text-yellow-800">Important Note:</p>
//                   <p className="text-black">
//                     Donations can be done only through Wire Transfer to the specified Bank Account. UPI/NEFT/RTGS from
//                     Indian banks are restricted.
//                   </p>
//                 </div>

//                 <h4 className="font-bold text-lg mb-4 flex items-center gap-2 text-gray-900">
//                   <Building2 className="w-5 h-5 text-[#a7150b]" /> Wire Transfer Details
//                 </h4>
//                 <div className="bg-slate-50 rounded-xl p-6 border border-gray-200 space-y-3 font-mono text-sm mb-8">
//                   <div className="flex flex-col sm:flex-row sm:justify-between border-b border-gray-200 pb-2">
//                     <span className="text-gray-500 font-sans">Account Name</span>
//                     <span className="font-bold text-right text-gray-900">
//                       Adhiparasakthi Siddhar Peeda Women's Charitable Trust
//                     </span>
//                   </div>
//                   <div className="flex justify-between border-b border-gray-200 pb-2">
//                     <span className="text-gray-500 font-sans">Account No</span>
//                     <span className="font-bold text-lg text-gray-900">40209740361</span>
//                   </div>
//                   <div className="flex justify-between border-b border-gray-200 pb-2">
//                     <span className="text-gray-500 font-sans">Bank Name</span>
//                     <span className="font-bold text-gray-900">State Bank of India</span>
//                   </div>
//                   <div className="flex justify-between border-b border-gray-200 pb-2">
//                     <span className="text-gray-500 font-sans">Branch</span>
//                     <span className="font-bold text-gray-900">New Delhi Main Branch (Code: 00691)</span>
//                   </div>
//                   <div className="flex justify-between pt-1">
//                     <span className="text-gray-500 font-sans">SWIFT Code</span>
//                     <span className="font-bold bg-yellow-100 px-2 rounded text-black">SBININBB104</span>
//                   </div>
//                 </div>

//                 <h4 className="font-bold text-lg mb-4 flex items-center gap-2 text-gray-900">
//                   <Mail className="w-5 h-5 text-[#a7150b]" /> Mandatory Reporting
//                 </h4>
//                 <p className="text-sm text-gray-500 mb-4">
//                   On successful transfer, kindly share the following details +{" "}
//                   <strong>Passport Copy (Front & Back)</strong> to{" "}
//                   <span className="font-bold text-gray-900">aspwctrust@gmail.com</span>:
//                 </p>
//                 <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm font-medium text-gray-700 bg-slate-50 p-4 rounded-lg">
//                   <li>1. Name of Donor</li>
//                   <li>2. Donor Address</li>
//                   <li>3. Purpose of Remittance</li>
//                   <li>4. Country of Donor</li>
//                   <li>5. Currency & Amount</li>
//                   <li>6. ID Proof (Passport)</li>
//                 </ul>
//               </div>

//               <div className="p-4 bg-gray-50 border-t flex justify-end gap-3 shrink-0">
//                 <Button variant="outline" onClick={() => setIsOverseasModalOpen(false)}>
//                   Close
//                 </Button>
//                 <Button className="bg-[#1a1a1a] text-white hover:bg-black">Copy Bank Details</Button>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   )
// }

// function CsrProjects() {
//   return (
//     <section className="py-24 px-4 bg-white">
//       <div className="container mx-auto space-y-24">
        
//         {/* ================= PROJECT 1: EYE CAMP ================= */}
//         <div>
//           <div className="text-center mb-10">
//             <span className="inline-block px-4 py-2 bg-[#ffc107]/10 text-[#ffc107] rounded-full text-xs font-bold tracking-widest uppercase mb-4">
//               CSR Initiative 01
//             </span>
//             <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 tracking-tight">Free Eye Camp</h2>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
//             {[
//               "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766164830/097A1993_anatnz.jpg",
//               "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766164805/097A1516_sodl4z.jpg",
//               "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766164845/097A1597_wxps2o.jpg",
//               "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766164797/097A1504_nn9vgr.jpg",
//             ].map((imgSrc, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1 }}
//                 whileHover={{ y: -5 }}
//                 className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer group"
//               >
//                 <Image
//                   src={imgSrc || "/placeholder.svg"}
//                   alt={`Eye Camp Image ${idx + 1}`}
//                   fill
//                   className="object-fill transition-transform duration-700 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// // ========== 9. CSR INQUIRY FORM COMPONENT ==========
// function CsrInquiry() {
//   const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle")
//   const [selectedProject, setSelectedProject] = useState("")

//   const handleFormSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     setFormStatus("submitting")
//     setTimeout(() => {
//       setFormStatus("success")
//     }, 1500)
//   }

//   return (
//     <section className="py-12 md:py-24 px-4 bg-[#ffc107] relative">
//       <div className="container mx-auto max-w-5xl relative z-10">
//         <Card className="border-none shadow-2xl rounded-3xl overflow-hidden bg-white">
//           <div className="grid grid-cols-1 md:grid-cols-5">
//             {/* Form Side */}
//             <div className="md:col-span-3 p-6 md:p-12">
//               <div className="mb-6 md:mb-8">
//                 <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 tracking-tight">Partner with Us</h3>
//                 <p className="text-sm md:text-base text-gray-500 mt-2">Interested in a CSR collaboration? Let's connect.</p>
//               </div>

//               {formStatus === "success" ? (
//                 <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-64 flex flex-col items-center justify-center text-center">
//                   <CheckCircle2 className="w-16 h-16 text-green-600 mb-4" />
//                   <h4 className="text-xl font-bold text-gray-900">Inquiry Sent!</h4>
//                   <p className="text-gray-500">We will get back to you within 24 hours.</p>
//                 </motion.div>
//               ) : (
//                 <form onSubmit={handleFormSubmit} className="space-y-4 md:space-y-5">
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     <div className="space-y-2">
//                       <Label htmlFor="name">Full Name</Label>
//                       <Input id="name" required placeholder="John Doe" className="bg-slate-50 border-slate-200 h-12 focus:ring-[#a7150b] rounded-xl" />
//                     </div>
//                     <div className="space-y-2">
//                       <Label htmlFor="company">Company</Label>
//                       <Input id="company" required placeholder="Tech Corp" className="bg-slate-50 border-slate-200 h-12 focus:ring-[#a7150b] rounded-xl" />
//                     </div>
//                   </div>
                  
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     <div className="space-y-2">
//                       <Label htmlFor="email">Email</Label>
//                       <Input id="email" type="email" required placeholder="john@example.com" className="bg-slate-50 border-slate-200 h-12 focus:ring-[#a7150b] rounded-xl" />
//                     </div>
//                     <div className="space-y-2">
//                       <Label htmlFor="phone">Phone</Label>
//                       <Input id="phone" type="tel" required placeholder="+91..." className="bg-slate-50 border-slate-200 h-12 focus:ring-[#a7150b] rounded-xl" />
//                     </div>
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="project">Interested Project</Label>
//                     <Select onValueChange={(value) => setSelectedProject(value)}>
//                       <SelectTrigger className="bg-slate-50 border-slate-200 h-12 rounded-xl"><SelectValue placeholder="Select a project" /></SelectTrigger>
//                       <SelectContent>
//                         <SelectItem value="education">EDUCATION</SelectItem>
//                         <SelectItem value="eye-camp">EYE CAMP</SelectItem>
//                         <SelectItem value="medical">MEDICAL</SelectItem>
//                         <SelectItem value="feeding-poor">FEEDING POOR</SelectItem>
//                         <SelectItem value="others">OTHERS</SelectItem>
//                       </SelectContent>
//                     </Select>
//                   </div>
                  
//                   {selectedProject === "others" && (
//                     <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="space-y-2">
//                       <Label htmlFor="other-details">Specify Details</Label>
//                       <Input id="other-details" required placeholder="Please specify..." className="bg-slate-50 border-slate-200 h-12 focus:ring-[#a7150b] rounded-xl" />
//                     </motion.div>
//                   )}
                  
//                   <div className="space-y-2">
//                     <Label htmlFor="remarks">Remarks</Label>
//                     <Textarea id="remarks" placeholder="Any specific requirements?" className="bg-slate-50 border-slate-200 resize-none focus:ring-[#a7150b] rounded-xl" rows={3} />
//                   </div>
                  
//                   <Button type="submit" disabled={formStatus === "submitting"} className="w-full bg-[#a7150b] hover:bg-[#8a0d08] text-white font-bold h-12 text-lg rounded-xl shadow-md">
//                     {formStatus === "submitting" ? "Sending..." : "Submit Inquiry"}
//                   </Button>
//                 </form>
//               )}
//             </div>

//             {/* Info Side */}
//             <div className="md:col-span-2 bg-[#1a1a1a] p-6 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
//               <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
//                 <Building2 size={150} className="md:w-[200px] md:h-[200px]" />
//               </div>
              
//               <div className="relative z-10">
//                 <h4 className="text-lg md:text-xl font-bold mb-6 text-[#ffc107]">
//                   Contact Information
//                 </h4>
//                 <div className="space-y-6">
//                   <div className="flex items-start gap-4">
//                     <Mail className="w-5 h-5 md:w-6 md:h-6 text-[#ffc107] shrink-0 mt-1" />
//                     <div>
//                       <p className="text-xs text-gray-400 uppercase tracking-wider">
//                         Email Us
//                       </p>
//                       <p className="font-medium text-sm break-all">
//                         contact@aspwctrust.org
//                       </p>
//                     </div>
//                   </div>               
//                   <div className="flex items-start gap-4">
//                     <Phone className="w-5 h-5 md:w-6 md:h-6 text-[#ffc107] shrink-0 mt-1" />
//                     <div>
//                       <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
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
//                     <Building2 className="w-5 h-5 md:w-6 md:h-6 text-[#ffc107] shrink-0 mt-1" />
//                     <div>
//                       <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
//                         Visit Us
//                       </p>
//                       <p className="font-medium text-sm leading-relaxed text-gray-300">
//                         <span className="font-bold block mb-1">
//                           Adhiparasakthi Charitable Medical Educational and
//                           Cultural Trust
//                         </span>
//                         No.1 GST Road, Adhiparasakthi Siddhar Peeda Temple
//                         Campus, Melmaruvathur, Chengalpet District,
//                         TamilNadu-603319, India
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flex items-start gap-4">
//                     <Clock className="w-5 h-5 md:w-6 md:h-6 text-[#ffc107] shrink-0 mt-1" />
//                     <div>
//                       <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
//                         Timing
//                       </p>
//                       <p className="font-medium text-sm">
//                         8:00 am To 8:00 PM
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="mt-8 pt-8 border-t border-white/10 relative z-10">
//                 <p className="text-xs text-gray-500">
//                   By submitting this form, you agree to our privacy policy
//                   regarding data collection.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </Card>
//       </div>
//     </section>
//   )
// }

"use client"

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  Heart,
  CheckCircle2,
  Landmark,
  Activity,
  Eye,
  FileText,
  Phone,
  Building2,
  Clock,
  HeartHandshake,
  Mail,
  ShieldCheck,
  AlertCircle,
  X
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import type { Variants } from "framer-motion"

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
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
    <main className="bg-slate-50 overflow-x-hidden font-sans text-foreground selection:bg-[#ffc107] selection:text-black">
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

// ========== HERO COMPONENT ==========
function Hero() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 150])

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766091901/dental-hospital_cd4gda.jpg"
          alt="Hero Background"
          fill
          className="object-cover scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center pt-16 md:pt-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.div variants={fadeInUp} className="inline-block mb-6">
            <span className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-md text-[#ffc107] text-sm font-bold tracking-widest uppercase border border-white/10 shadow-xl">
              Est. 1988 • Registered Trust
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-[1.1] drop-shadow-2xl tracking-tight"
          >
            Healing Hands.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffc107] via-yellow-200 to-[#ffc107]">
              Compassionate Hearts.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-2xl text-gray-200 mb-12 leading-relaxed font-light max-w-3xl mx-auto text-balance"
          >
            Adhiparasakthi Siddhar Peeda Women's Charitable Trust (ASPWCT)
            dedicated to serving humanity through holistic healthcare and education.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-8"
          >
            <Link
              href="https://aspwct.omsakthiamma.in/" target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button className="w-full sm:w-auto bg-[#a7150b] hover:bg-[#d91e11] text-white rounded-full px-10 py-7 text-lg font-bold shadow-lg transition-all hover:scale-105">
                <Heart className="mr-3 w-5 h-5 fill-current" />
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
    </section>
  )
}

// ========== ABOUT COMPONENT ==========
function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-4 container mx-auto">
      <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center lg:text-left"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block px-4 py-2 bg-[#a7150b]/5 text-[#a7150b] rounded-full text-xs font-bold tracking-widest uppercase mb-4"
          >
            About The Trust
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight tracking-tight"
          >
            A Legacy of Service{" "}
            <span className="relative inline-block whitespace-nowrap">
              <span className="relative z-10">Since 1988</span>
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-[#ffc107]/60 -z-0" />
            </span>
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 space-y-4"
          >
            <p>
              M/s Adhiparasakthi Siddhar Peeda Women's Charitable Trust (ASPWCT Trust), as the name suggests
              has dedicated itself to serve the people in the areas of:
            </p>

            <div className="grid sm:grid-cols-2 gap-3 py-4">
              {["Charity", "Medical", "Educational", "Cultural Activities"].map((item) => (
                <div key={item} className="flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-full bg-[#a7150b]/10 group-hover:bg-[#a7150b] transition-colors flex items-center justify-center shrink-0">
                    <CheckCircle2 className="text-[#a7150b] group-hover:text-white w-5 h-5 transition-colors" />
                  </div>
                  <span className="font-semibold text-gray-800 leading-10">{item}</span>
                </div>
              ))}
            </div>

            <p>
              This trust is a non-profitable organization which was founded by{" "}
              <strong className="text-gray-900">H.H. Bangaru Adigalar</strong> in the year 1988 with a small corpus
              fund and with few cents of land in Melmaruvathur.
            </p>
          </motion.div>

          {/* STATS */}
          <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="group hover:scale-105 transition-transform">
              <Card className="p-6 border-none shadow-md bg-white hover:shadow-xl transition-shadow rounded-2xl">
                <h4 className="text-3xl md:text-4xl font-bold text-[#ffc107] mb-1">1988</h4>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Established</p>
              </Card>
            </div>

            <div className="group hover:scale-105 transition-transform">
              <Card className="p-6 border-none shadow-md bg-white hover:shadow-xl transition-shadow rounded-2xl">
                <h4 className="text-xl md:text-2xl font-bold text-[#a7150b] mb-1">Melmaruvathur</h4>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Headquarters</p>
              </Card>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <Image
              src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766143744/a12_nbqg5x.webp"
              alt="Medical Service"
              width={700}
              height={500}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="absolute -top-10 -right-10 w-72 h-72 bg-[#ffc107]/20 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-[#a7150b]/10 rounded-full blur-3xl -z-10" />
        </motion.div>
      </div>
    </section>
  )
}

// ========== LEADERSHIP COMPONENT ==========
function Leadership() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Founders */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#a7150b]/10 text-[#a7150b] rounded-full text-xs font-bold tracking-widest uppercase mb-4">
              Our Guidance
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 tracking-tight">
              Founder & President
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {[
              {
                name: "His Holiness Bangaru Adigalar",
                role: "Founder",
                image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766091903/3952Founder-President_k3xqz3.png",
                borderColor: "border-[#ffc107]",
              },
              {
                name: "Smt. Lakshmi Bangaru Adigalar",
                role: "President",
                image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766091895/Vice-President_z3lp84.jpg",
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
                <Card className="p-8 text-center border-none shadow-lg bg-slate-50 hover:bg-white transition-all duration-300 rounded-3xl group">
                  <div className={`w-48 h-48 mx-auto rounded-full overflow-hidden border-4 ${person.borderColor} shadow-xl mb-6 relative group-hover:scale-105 transition-transform`}>
                    <Image src={person.image} alt={person.name} fill className="object-cover" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">{person.name}</h3>
                  <p className="text-[#a7150b] font-bold uppercase tracking-widest text-sm">{person.role}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Board of Trustees Grid */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4 tracking-tight">Board of Trustees</h2>
          <div className="w-24 h-1.5 bg-[#ffc107] mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 max-w-6xl mx-auto">
          {[
            { name: "Mrs. V. Lakshmi", role: "President / Trustee" },
            { name: "Mrs. B. Umadevi", role: "Vice President / Trustee" },
            { name: "Mrs. B. Sridevi", role: "Secretary / Trustee" },
          ].map((trustee, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="p-6 hover:shadow-xl transition-all group bg-white border border-gray-100 rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#ffc107]/20 text-[#ffc107] rounded-full flex items-center justify-center shrink-0 font-bold text-xl">
                    {trustee.name.split(" ")[1][0]}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#a7150b] transition-colors mb-2">
                      {trustee.name}
                    </h3>
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-bold uppercase tracking-wide">
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
            { name: "Mrs. A. Asharani", role: "Trustee" },
            { name: "Dr. E. Srilekha", role: "Trustee" },
            { name: "Mrs. M. Vanitha", role: "Trustee" },
            { name: "Mrs. A. Madhumalar", role: "Trustee" },
            { name: "Miss. S. Monasakthi", role: "Trustee" },
            { name: "Mrs. A. Sasikala", role: "Trustee" },
          ].map((trustee, idx) => (
            <motion.div
              key={trustee.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx + 5) * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="p-5 hover:shadow-lg transition-all group border border-gray-100 rounded-2xl bg-white">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-500">
                      {trustee.name.split(" ")[1][0]}
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest border border-slate-200 px-2 py-1 rounded">
                      {trustee.role}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-gray-800 group-hover:text-[#a7150b] transition-colors">
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

// ========== CSR COMPONENT ==========
function CsrRegistration() {
  return (
    <section className="py-20 bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
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
            
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 tracking-tight">Official CSR Registration</h2>
            
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Adhiparasakthi Siddhar Peeda Women's Charitable Trust is officially registered with the
              Ministry of Corporate Affairs for undertaking CSR activities.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                <p className="text-xs text-gray-300 uppercase tracking-widest mb-1">Registration Number</p>
                <p className="text-2xl font-mono font-bold text-[#ffc107]">CSR00002407</p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                <p className="text-xs text-gray-300 uppercase tracking-widest mb-1">Date of Registration</p>
                <p className="text-xl font-bold text-white">16-04-2021</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10"
          >
            <div className="bg-white p-2">
                <Image 
                  src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766399036/Approval_Letter_Women_s_-CSR_ACTIVITIES_1__page-0001_ohogf3.jpg" 
                  alt="Official CSR Approval Letter" 
                  width={800}
                  height={1000}
                  className="w-full h-auto object-contain"
                />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

// ========== MISSION & VISION COMPONENT ==========
function MissionVision() {
  return (
    <section className="py-24 px-4 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <motion.div whileHover="hover" variants={scaleOnHover} className="bg-white p-10 md:p-14 rounded-3xl shadow-xl border-l-8 border-[#a7150b]">
            <div className="relative z-10">
              <div className="w-14 h-14 bg-[#a7150b]/10 rounded-2xl flex items-center justify-center mb-8">
                <Activity className="text-[#a7150b] w-8 h-8" />
              </div>
              <h3 className="text-3xl font-serif font-bold mb-4 text-gray-900">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
              The ASPWCT Trust is committed to the selfless service of humanity by managing resources with transparency and strategic foresight to deliver high-quality social welfare services.
              </p>
            </div>
          </motion.div>

          <motion.div whileHover="hover" variants={scaleOnHover} className="bg-white p-10 md:p-14 rounded-3xl shadow-xl border-l-8 border-[#ffc107]">
            <div className="relative z-10">
              <div className="w-14 h-14 bg-[#ffc107]/10 rounded-2xl flex items-center justify-center mb-8">
                <Eye className="text-gray-900 w-8 h-8" />
              </div>
              <h3 className="text-3xl font-serif font-bold mb-4 text-gray-900">Our Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed font-medium">
                To create a sustainable, inclusive society where the burdens of human suffering are alleviated through institutional excellence in healthcare, education, and cultural preservation.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ========== AWARDS COMPONENT ==========
function Awards() {
  const awards = [
    { img: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092337/2911191530526914-150x150_a5fseg.jpg", title: "State Govt Honor", desc: "Honored by Chief Minister Ms. J. Jayalalitha..." },
    { img: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092336/2911191530538674-150x150_semv32.jpg", title: "Nirmal Gram Puraskar", desc: "National award for sanitation..." },
    { img: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092336/2911191530539144-150x150_dyivy6.jpg", title: "Certificate of Excellence", desc: "Recognition for outstanding contribution..." },
    { img: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092336/2911191530534191-150x150_lo2fc6.jpg", title: "Best Institution", desc: "Awarded to Adhiparasakthi Annai Illam..." },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#a7150b]/10 text-[#a7150b] rounded-full text-xs font-bold tracking-widest uppercase mb-4">Our Achievements</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 tracking-tight">Awards and Recognition</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award, idx) => (
            <motion.div key={idx} whileHover={{ y: -8 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative h-56 overflow-hidden">
                <Image src={award.img} alt={award.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h4 className="font-bold text-gray-900 leading-tight mb-2 group-hover:text-[#a7150b] transition-colors">{award.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{award.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ========== DONATION COMPONENT ==========
function Donation() {
  const [isOverseasModalOpen, setIsOverseasModalOpen] = useState(false)

  return (
    <>
      <section className="py-20 md:py-24 px-4 bg-slate-50" id="donate">
        <div className="container mx-auto max-w-6xl">

          {/* WHY DONATE */}
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#ffc107]/20 text-yellow-800 px-4 py-1.5 rounded-full text-sm font-semibold">
              <HeartHandshake className="w-4 h-4" />
              <span>Join Our Mission</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Empowering Lives, Creating Impact
            </h2>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              We have created meaningful impacts in rural education and healthcare.
              Your contribution helps us sustain these efforts. Join us and empower
              the mission to help the needy—every rupee counts towards building a better future.
            </p>
          </div>

          {/* DONATION CARDS */}
          <div className="grid md:grid-cols-1 gap-8 items-stretch mb-16 md:mb-20">

            {/* DOMESTIC */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-gray-100 relative flex flex-col"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-[#a7150b]" />

              <div className="flex items-start gap-4 mb-6">
                <div className="p-4 bg-red-50 rounded-2xl text-[#a7150b] shrink-0">
                  <FileText className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Domestic Donors</h3>
                  <span className="text-xs sm:text-sm font-medium text-green-700 bg-green-100 px-3 py-1 rounded-full">
                    Indian Citizens Only
                  </span>
                </div>
              </div>

              <div className="space-y-4 mb-8 flex-1 text-sm sm:text-base">
                <p className="text-gray-500">
                  Maximize your philanthropic impact while saving on taxes.
                  Your contributions support vital education and rural development initiatives.
                </p>

                <ul className="space-y-3">
                  {[
                    "Eligible for Section 80G Tax Exemption",
                    "Valid Receipt with PAN for IT Returns",
                    "Supports Education & Rural Development",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 font-medium text-gray-800">
                      <CheckCircle2 className="w-5 h-5 text-[#a7150b] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-red-50 border border-red-100 rounded-lg p-3 flex gap-2 text-xs text-red-800">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <p>
                    Note: As per Govt regulations, cash donations exceeding ₹2,000
                    are not eligible for 80G deduction. Please use digital modes.
                  </p>
                </div>
              </div>

              <Link
                href="https://aspwct.omsakthiamma.in/" target="_blank" rel="noopener noreferrer"
                className="block w-full mt-auto"
              >
                <Button className="w-full bg-[#a7150b] hover:bg-[#8a0d08] text-white h-14 text-base sm:text-lg rounded-2xl shadow-lg transition-all hover:scale-[1.02]">
                  Donate via UPI / NetBanking
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* CERTIFICATES */}
          <div className="space-y-14 md:space-y-16">
            <div className="flex items-center justify-center gap-3 text-center">
              <ShieldCheck className="w-7 h-7 text-[#a7150b]" />
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                Legal Certificates & Documents
              </h2>
            </div>

            {/* 80G */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-md border border-gray-100">
              <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                <FileText className="w-6 h-6 text-[#a7150b]" />
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                  80G Tax Exemption Certificate (Domestic)
                </h3>
              </div>

              <div className="flex justify-center bg-gray-50 rounded-xl p-4 border border-gray-100">
                <Image
                  src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766399003/ASPWCT_80G_CERTIFICATE_1__page-0001_g1jeqw.jpg"
                  alt="80G Certificate"
                  width={800}
                  height={1000}
                  className="w-full max-w-3xl h-auto shadow-sm"
                />
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
              className="w-full max-w-3xl h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-5 border-b bg-gray-50 z-10 shrink-0">
                <h3 className="font-bold text-xl text-gray-900">Overseas Donation Procedure</h3>
                <button onClick={() => setIsOverseasModalOpen(false)} className="p-2 hover:bg-gray-200 rounded-full">
                  <X className="w-5 h-5 text-gray-500" />
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

                <h4 className="font-bold text-lg mb-4 flex items-center gap-2 text-gray-900">
                  <Building2 className="w-5 h-5 text-[#a7150b]" /> Wire Transfer Details
                </h4>
                <div className="bg-slate-50 rounded-xl p-6 border border-gray-200 space-y-3 font-mono text-sm mb-8">
                  <div className="flex flex-col sm:flex-row sm:justify-between border-b border-gray-200 pb-2">
                    <span className="text-gray-500 font-sans">Account Name</span>
                    <span className="font-bold text-right text-gray-900">
                      Adhiparasakthi Siddhar Peeda Women's Charitable Trust
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-gray-500 font-sans">Account No</span>
                    <span className="font-bold text-lg text-gray-900">40209740361</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-gray-500 font-sans">Bank Name</span>
                    <span className="font-bold text-gray-900">State Bank of India</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-gray-500 font-sans">Branch</span>
                    <span className="font-bold text-gray-900">New Delhi Main Branch (Code: 00691)</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-gray-500 font-sans">SWIFT Code</span>
                    <span className="font-bold bg-yellow-100 px-2 rounded text-black">SBININBB104</span>
                  </div>
                </div>

                <h4 className="font-bold text-lg mb-4 flex items-center gap-2 text-gray-900">
                  <Mail className="w-5 h-5 text-[#a7150b]" /> Mandatory Reporting
                </h4>
                <p className="text-sm text-gray-500 mb-4">
                  On successful transfer, kindly share the following details +{" "}
                  <strong>Passport Copy (Front & Back)</strong> to{" "}
                  <span className="font-bold text-gray-900">aspwctrust@gmail.com</span>:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm font-medium text-gray-700 bg-slate-50 p-4 rounded-lg">
                  <li>1. Name of Donor</li>
                  <li>2. Donor Address</li>
                  <li>3. Purpose of Remittance</li>
                  <li>4. Country of Donor</li>
                  <li>5. Currency & Amount</li>
                  <li>6. ID Proof (Passport)</li>
                </ul>
              </div>

              <div className="p-4 bg-gray-50 border-t flex justify-end gap-3 shrink-0">
                <Button variant="outline" onClick={() => setIsOverseasModalOpen(false)}>
                  Close
                </Button>
                <Button className="bg-[#1a1a1a] text-white hover:bg-black">Copy Bank Details</Button>
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
    <section className="py-24 px-4 bg-white">
      <div className="container mx-auto space-y-24">
        
        {/* ================= PROJECT 1: EYE CAMP ================= */}
        <div>
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-2 bg-[#ffc107]/10 text-[#ffc107] rounded-full text-xs font-bold tracking-widest uppercase mb-4">
              CSR Initiative 01
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 tracking-tight">Free Eye Camp</h2>
          </div>

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
                className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer group"
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
    <section className="py-12 md:py-24 px-4  bg-[#a7150b] relative">
      <div className="container mx-auto max-w-5xl relative z-10">
        <Card className="border-none shadow-2xl rounded-3xl overflow-hidden bg-white">
          <div className="grid grid-cols-1 md:grid-cols-5">
            {/* Form Side */}
            <div className="md:col-span-3 p-6 md:p-12">
              <div className="mb-6 md:mb-8">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 tracking-tight">Partner with Us</h3>
                <p className="text-sm md:text-base text-gray-500 mt-2">Interested in a CSR collaboration? Let's connect.</p>
              </div>

              {formStatus === "success" ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-64 flex flex-col items-center justify-center text-center">
                  <CheckCircle2 className="w-16 h-16 text-green-600 mb-4" />
                  <h4 className="text-xl font-bold text-gray-900">Inquiry Sent!</h4>
                  <p className="text-gray-500">We will get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 md:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" required placeholder="John Doe" className="bg-slate-50 border-slate-200 h-12 focus:ring-[#a7150b] rounded-xl" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" required placeholder="Tech Corp" className="bg-slate-50 border-slate-200 h-12 focus:ring-[#a7150b] rounded-xl" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" required placeholder="john@example.com" className="bg-slate-50 border-slate-200 h-12 focus:ring-[#a7150b] rounded-xl" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" required placeholder="+91..." className="bg-slate-50 border-slate-200 h-12 focus:ring-[#a7150b] rounded-xl" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="project">Interested Project</Label>
                    <Select onValueChange={(value) => setSelectedProject(value)}>
                      <SelectTrigger className="bg-slate-50 border-slate-200 h-12 rounded-xl"><SelectValue placeholder="Select a project" /></SelectTrigger>
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
                      <Input id="other-details" required placeholder="Please specify..." className="bg-slate-50 border-slate-200 h-12 focus:ring-[#a7150b] rounded-xl" />
                    </motion.div>
                  )}
                  
                  <div className="space-y-2">
                    <Label htmlFor="remarks">Remarks</Label>
                    <Textarea id="remarks" placeholder="Any specific requirements?" className="bg-slate-50 border-slate-200 resize-none focus:ring-[#a7150b] rounded-xl" rows={3} />
                  </div>
                  
                  <Button type="submit" disabled={formStatus === "submitting"} className="w-full bg-[#ffc107] text-black font-bold h-12 text-lg rounded-xl shadow-md">
                    {formStatus === "submitting" ? "Sending..." : "Submit Inquiry"}
                  </Button>
                </form>
              )}
            </div>

            {/* Info Side */}
            <div className="md:col-span-2 bg-[#1a1a1a] p-6 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
                <Building2 size={150} className="md:w-[200px] md:h-[200px]" />
              </div>
              
              <div className="relative z-10">
                <h4 className="text-lg md:text-xl font-bold mb-6 text-[#ffc107] ">
                  Contact Information
                </h4>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-[#ffc107] shrink-0 mt-1" />
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">
                        Email Us
                      </p>
                      <p className="font-medium text-sm break-all text-gray-300">
                        contact@aspwctrust.org
                      </p>
                    </div>
                  </div>               
                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-[#ffc107] shrink-0 mt-1" />
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                        Call Us
                      </p>
                      <div className="space-y-1 text-sm font-medium">
                        <p className="text-gray-300">Landline: +91 44 2752 9313</p>
                        <p className="text-gray-300">Mobile: +91 91500 45391</p>
                        <p className="text-gray-300">Whatsapp: +91 91500 45391</p>
                        <p className="text-gray-300">PRO: +91 44 27529276</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Building2 className="w-5 h-5 md:w-6 md:h-6 text-[#ffc107] shrink-0 mt-1" />
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                        Visit Us
                      </p>
                      <p className="font-medium text-sm leading-relaxed text-gray-300">
                        <span className="font-bold block mb-1">
                          Adhiparasakthi Charitable Medical Educational and
                          Cultural Trust
                        </span>
                        No.1 GST Road, Adhiparasakthi Siddhar Peeda Temple
                        Campus, Melmaruvathur, Chengalpet District,
                        TamilNadu-603319, India
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 md:w-6 md:h-6 text-[#ffc107] shrink-0 mt-1" />
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                        Timing
                      </p>
                      <p className="font-medium text-sm text-gray-300">
                        8:00 am To 8:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/10 relative z-10">
                <p className="text-xs text-gray-500">
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