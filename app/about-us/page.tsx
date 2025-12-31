// // // // "use client"

// // // // import { motion } from "framer-motion"
// // // // import Image from "next/image"
// // // // import Link from "next/link"
// // // // import { Heart, Target, Eye, Users, Award, TrendingUp, ArrowRight } from "lucide-react"
// // // // import { Card } from "@/components/ui/card"
// // // // import { Button } from "@/components/ui/button"

// // // // export default function AboutUs() {
// // // //   return (
// // // //     <main className="bg-white">
// // // //       {/* Hero Section */}
// // // //       <section className="relative py-20 md:py-32 bg-[#ffc107] overflow-hidden">
// // // //         <div className="absolute inset-0 opacity-5">
// // // //           <div
// // // //             className="absolute inset-0"
// // // //             style={{
// // // //               backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)",
// // // //               backgroundSize: "40px 40px",
// // // //             }}
// // // //           />
// // // //         </div>

// // // //         <motion.div
// // // //           initial={{ opacity: 0, y: 40 }}
// // // //           animate={{ opacity: 1, y: 0 }}
// // // //           transition={{ duration: 0.8 }}
// // // //           className="max-w-4xl mx-auto px-4 text-center relative z-10"
// // // //         >
// // // //           <motion.div
// // // //             initial={{ scale: 0, rotate: -180 }}
// // // //             animate={{ scale: 1, rotate: 0 }}
// // // //             transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
// // // //           >
// // // //             <Heart className="w-20 h-20 mx-auto mb-8 text-[#a7150b]" />
// // // //           </motion.div>
// // // //           <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#1a1a1a] mb-6 tracking-tight">
// // // //             About ASPWCT Trust
// // // //           </h1>
// // // //           <p className="text-xl md:text-2xl text-gray-600 leading-relaxed text-balance">
// // // //             Empowering communities through compassionate service and divine inspiration
// // // //           </p>
// // // //         </motion.div>
// // // //       </section>

// // // //       {/* Introduction Section */}
// // // //       <section className="py-16 md:py-24 px-4">
// // // //         <div className="max-w-6xl mx-auto">
// // // //           <div className="grid md:grid-cols-2 gap-12 items-center">
// // // //             <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
// // // //               <span className="px-4 py-1.5 bg-[#ffc107] text-[#1a1a1a] rounded-full text-xs font-bold tracking-wider uppercase mb-4 inline-block">
// // // //                 Our Story
// // // //               </span>
// // // //               <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a1a1a] mb-6">
// // // //                 Serving Humanity with Dedication
// // // //               </h2>
// // // //               <p className="text-gray-600 mb-4 leading-relaxed">
// // // //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
// // // //                 dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
// // // //                 ex ea commodo consequat.
// // // //               </p>
// // // //               <p className="text-gray-600 leading-relaxed">
// // // //                 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
// // // //                 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
// // // //                 laborum.
// // // //               </p>
// // // //               <Link href="/trust-activities">
// // // //                 <Button
// // // //                   size="lg"
// // // //                   className="bg-[#a7150b] text-white hover:bg-[#8a0d08] rounded-full font-bold shadow-lg px-8"
// // // //                 >
// // // //                   Explore Our Activities
// // // //                   <ArrowRight className="ml-2 w-5 h-5" />
// // // //                 </Button>
// // // //               </Link>
// // // //             </motion.div>

// // // //             <motion.div
// // // //               initial={{ opacity: 0, x: 30 }}
// // // //               whileInView={{ opacity: 1, x: 0 }}
// // // //               viewport={{ once: true }}
// // // //               className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
// // // //             >
// // // //               <Image src="/charity-temple-service.jpg" alt="ASPWCT Trust Activities" fill className="object-cover" />
// // // //             </motion.div>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* Mission, Vision, Values */}
// // // //       <section className="py-16 md:py-24 px-4 bg-gray-50">
// // // //         <div className="max-w-7xl mx-auto">
// // // //           <motion.div
// // // //             initial={{ opacity: 0, y: 30 }}
// // // //             whileInView={{ opacity: 1, y: 0 }}
// // // //             viewport={{ once: true }}
// // // //             className="text-center mb-16"
// // // //           >
// // // //             <span className="px-5 py-2 bg-[#a7150b] text-white rounded-full text-xs font-black tracking-widest uppercase mb-6 inline-block">
// // // //               Core Values
// // // //             </span>
// // // //             <h2 className="text-4xl md:text-6xl font-serif font-black text-[#1a1a1a]">Our Guiding Principles</h2>
// // // //           </motion.div>

// // // //           <div className="grid md:grid-cols-3 gap-8">
// // // //             {[
// // // //               {
// // // //                 icon: Target,
// // // //                 title: "Our Mission",
// // // //                 description:
// // // //                   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. To provide comprehensive healthcare, quality education, and preserve cultural heritage for the benefit of all communities.",
// // // //                 color: "#a7150b",
// // // //               },
// // // //               {
// // // //                 icon: Eye,
// // // //                 title: "Our Vision",
// // // //                 description:
// // // //                   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A world where every individual has access to healthcare, education, and opportunities to thrive spiritually and materially.",
// // // //                 color: "#ffc107",
// // // //               },
// // // //               {
// // // //                 icon: Heart,
// // // //                 title: "Our Values",
// // // //                 description:
// // // //                   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Compassion, integrity, service, excellence, and cultural respect guide all our initiatives and interactions.",
// // // //                 color: "#1a1a1a",
// // // //               },
// // // //             ].map((item, idx) => (
// // // //               <motion.div
// // // //                 key={item.title}
// // // //                 initial={{ opacity: 0, y: 40 }}
// // // //                 whileInView={{ opacity: 1, y: 0 }}
// // // //                 transition={{ delay: idx * 0.15, duration: 0.6 }}
// // // //                 viewport={{ once: true }}
// // // //                 whileHover={{ y: -10, transition: { duration: 0.3 } }}
// // // //               >
// // // //                 <Card className="p-8 h-full hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-[#ffc107] bg-white">
// // // //                   <div
// // // //                     className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
// // // //                     style={{ backgroundColor: item.color }}
// // // //                   >
// // // //                     <item.icon className="w-8 h-8 text-white" />
// // // //                   </div>
// // // //                   <h3 className="text-2xl font-serif font-bold text-[#1a1a1a] mb-4">{item.title}</h3>
// // // //                   <p className="text-gray-600 leading-relaxed text-lg">{item.description}</p>
// // // //                 </Card>
// // // //               </motion.div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* Impact Stats */}
// // // //       <section className="py-16 md:py-24 px-4 bg-[#a7150b] text-white relative overflow-hidden">
// // // //         <div className="absolute inset-0 opacity-10">
// // // //           <div
// // // //             className="absolute inset-0"
// // // //             style={{
// // // //               backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
// // // //               backgroundSize: "50px 50px",
// // // //             }}
// // // //           />
// // // //         </div>

// // // //         <div className="max-w-7xl mx-auto relative z-10">
// // // //           <motion.div
// // // //             initial={{ opacity: 0, y: 30 }}
// // // //             whileInView={{ opacity: 1, y: 0 }}
// // // //             viewport={{ once: true }}
// // // //             className="text-center mb-16"
// // // //           >
// // // //             <h2 className="text-4xl md:text-6xl font-serif font-black mb-6">Our Impact in Numbers</h2>
// // // //             <p className="text-white/90 text-xl max-w-2xl mx-auto">
// // // //               Lorem ipsum dolor sit amet, consectetur adipiscing elit
// // // //             </p>
// // // //           </motion.div>

// // // //           <div className="grid md:grid-cols-4 gap-8">
// // // //             {[
// // // //               { number: "50,000+", label: "People Served", icon: Users },
// // // //               { number: "25+", label: "Years of Service", icon: TrendingUp },
// // // //               { number: "15+", label: "Institutions", icon: Award },
// // // //               { number: "100+", label: "Programs", icon: Heart },
// // // //             ].map((stat, idx) => (
// // // //               <motion.div
// // // //                 key={stat.label}
// // // //                 initial={{ opacity: 0, scale: 0.8 }}
// // // //                 whileInView={{ opacity: 1, scale: 1 }}
// // // //                 transition={{ delay: idx * 0.1, duration: 0.6 }}
// // // //                 viewport={{ once: true }}
// // // //                 whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
// // // //                 className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-2xl"
// // // //               >
// // // //                 <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
// // // //                   <stat.icon className="w-10 h-10" />
// // // //                 </div>
// // // //                 <div className="text-5xl md:text-6xl font-black mb-3">{stat.number}</div>
// // // //                 <div className="text-white/90 text-xl font-bold">{stat.label}</div>
// // // //               </motion.div>
// // // //             ))}
// // // //           </div>

// // // //           <motion.div
// // // //             initial={{ opacity: 0, y: 20 }}
// // // //             whileInView={{ opacity: 1, y: 0 }}
// // // //             viewport={{ once: true }}
// // // //             className="text-center mt-16"
// // // //           >
// // // //             <Link href="/donate-us">
// // // //               <Button
// // // //                 size="lg"
// // // //                 className="bg-white text-[#a7150b] hover:bg-gray-100 rounded-full font-black text-lg px-10 py-7 shadow-2xl hover:scale-105 transition-all"
// // // //               >
// // // //                 <Heart className="mr-2 w-6 h-6 fill-current" />
// // // //                 Support Our Mission
// // // //               </Button>
// // // //             </Link>
// // // //           </motion.div>
// // // //         </div>
// // // //       </section>

// // // //       {/* Gallery Section */}
// // // //       <section className="py-16 md:py-24 px-4 bg-white">
// // // //         <div className="max-w-7xl mx-auto">
// // // //           <motion.div
// // // //             initial={{ opacity: 0, y: 30 }}
// // // //             whileInView={{ opacity: 1, y: 0 }}
// // // //             viewport={{ once: true }}
// // // //             className="text-center mb-16"
// // // //           >
// // // //             <span className="px-5 py-2 bg-[#ffc107] text-[#1a1a1a] rounded-full text-xs font-black tracking-widest uppercase mb-6 inline-block">
// // // //               Gallery
// // // //             </span>
// // // //             <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#1a1a1a]">Moments of Service</h2>
// // // //           </motion.div>

// // // //           <div className="grid md:grid-cols-3 gap-8">
// // // //             {[
// // // //               "/medical-service-camp.jpg",
// // // //               "/education-classroom-students.jpg",
// // // //               "/cultural-dance-performance.jpg",
// // // //               "/community-charity-food.jpg",
// // // //               "/temple-worship-ceremony.jpg",
// // // //               "/community-volunteers.png",
// // // //             ].map((image, idx) => (
// // // //               <motion.div
// // // //                 key={idx}
// // // //                 initial={{ opacity: 0, scale: 0.9 }}
// // // //                 whileInView={{ opacity: 1, scale: 1 }}
// // // //                 transition={{ delay: idx * 0.1, duration: 0.5 }}
// // // //                 viewport={{ once: true }}
// // // //                 whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
// // // //                 className="relative h-80 rounded-3xl overflow-hidden shadow-xl group cursor-pointer border-4 border-gray-100"
// // // //               >
// // // //                 <Image
// // // //                   src={image || "/placeholder.svg"}
// // // //                   alt={`Gallery Image ${idx + 1}`}
// // // //                   fill
// // // //                   className="object-cover group-hover:scale-110 transition-transform duration-700"
// // // //                 />
// // // //                 <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
// // // //               </motion.div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>
// // // //     </main>
// // // //   )
// // // // }

// // "use client"

// // import { motion } from "framer-motion"
// // import {
// //   Landmark,
// //   Globe,
// //   Users,
// //   Heart,
// //   Award,
// //   Stethoscope,
// //   GraduationCap,
// //   Sprout,
// //   Baby,
// //   Quote,
// //   ArrowRight
// // } from "lucide-react"
// // import { Card } from "@/components/ui/card"

// // // --- Animation Variants ---
// // const fadeInUp = {
// //   hidden: { opacity: 0, y: 30 },
// //   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// // }

// // const staggerContainer = {
// //   hidden: { opacity: 0 },
// //   visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
// // }

// // export default function AboutUsPage() {
// //   return (
// //     <main className="bg-background overflow-x-hidden font-sans text-foreground selection:bg-[#ffc107] selection:text-black">

// //       {/* ================= HERO SECTION ================= */}
// //       <section className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center bg-[#1a1a1a]">
// //         {/* IMAGE PLACEHOLDER: Main Hero Image */}
// //         <div className="absolute inset-0 z-0 opacity-50 bg-neutral-800">
// //            <div className="w-full h-full flex items-center justify-center border-2 border-dashed border-[#ffc107]/30">
// //               <span className="text-white/30 font-bold uppercase tracking-widest">[Hero Image Placeholder]</span>
// //            </div>
// //         </div>
// //         <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/60 to-transparent z-0" />

// //         <div className="relative z-10 container mx-auto px-4 text-center">
// //           <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
// //             <motion.div variants={fadeInUp} className="inline-block mb-4">
// //                <span className="px-4 py-2 rounded-full border border-[#ffc107]/30 bg-[#ffc107]/10 text-[#ffc107] text-sm font-bold tracking-widest uppercase">
// //                  Since 1988
// //                </span>
// //             </motion.div>
// //             <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
// //                The Trust
// //             </motion.h1>
// //             <motion.p variants={fadeInUp} className="text-gray-300 max-w-4xl mx-auto text-lg leading-relaxed">
// //               Adhiparasakthi Siddhar Peedam Women's Charitable Trust (ASPWCT) 
// //             </motion.p>
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* ================= THE TRUST (ORIGIN) ================= */}
// //       <section className="py-24 bg-white">
// //         <div className="container mx-auto px-4">
// //           <div className="grid lg:grid-cols-2 gap-16 items-center">

// //              {/* Text Content */}
// //              <motion.div 
// //                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
// //              >
// //                 <div className="flex items-center gap-3 mb-6">
// //                    <Landmark className="w-8 h-8 text-[#a7150b]" />
// //                    <span className="text-[#a7150b] font-bold tracking-widest uppercase text-sm">About Us</span>
// //                 </div>
// //                 <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a1a1a] mb-6">
// //                    Serving the Community Since 1988
// //                 </h2>
// //                 <div className="space-y-6 text-slate-600 text-lg leading-relaxed text-justify">
// //                    <p>
// //                       Adhiparasakthi Siddhar Peedam Women's Charitable Trust (ASPWCT)  was established in 1988 by His Holiness Bangaru Adigalar with a modest corpus fund and a few cents of land in Melmaruvathur, Tamil Nadu.
// //                    </p>
// //                    <p>
// //                       Initially a small village located 92 km from Chennai and 70 km from Pondicherry, Melmaruvathur has grown significantly, thanks in large part to the Trust’s efforts. ASPWCT Trust is a non-profit organization dedicated to serving the community through various charitable, medical, educational, and cultural initiatives.
// //                    </p>
// //                 </div>
// //              </motion.div>

// //              {/* Image Placeholder */}
// //              <motion.div 
// //                initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
// //                className="relative h-[400px] w-full bg-stone-100 rounded-3xl overflow-hidden border-2 border-dashed border-stone-300 flex items-center justify-center"
// //              >
// //                 <div className="text-center p-8">
// //                    <Users className="w-16 h-16 text-stone-300 mx-auto mb-4" />
// //                    <p className="text-stone-400 font-bold uppercase">[Image: Trust Establishment / Temple Campus]</p>
// //                 </div>
// //              </motion.div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ================= LEADERSHIP TEAM ================= */}
// //       <section className="py-24 bg-stone-50">
// //          <div className="container mx-auto px-4">
// //             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
// //                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a1a1a]">Leadership</h2>
// //                <div className="w-24 h-1 bg-[#ffc107] mx-auto mt-4 rounded-full" />
// //             </motion.div>

// //             <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

// //                {/* Founder President */}
// //                <motion.div 
// //                   initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
// //                   className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-[#a7150b] text-center transform md:-translate-y-8"
// //                >
// //                   <div className="w-40 h-40 mx-auto bg-stone-200 rounded-full mb-6 border-4 border-white shadow-lg overflow-hidden flex items-center justify-center relative">
// //                      {/* IMAGE PLACEHOLDER */}
// //                      <span className="text-stone-400 text-[10px] font-bold uppercase p-2">[H.H. Bangaru Adigalar]</span>
// //                   </div>
// //                   <h3 className="text-xl font-bold text-[#1a1a1a] mb-1">His Holiness<br/>Bangaru Adigalar</h3>
// //                   <p className="text-[#a7150b] font-bold uppercase tracking-widest text-xs mt-2">Founder President</p>
// //                </motion.div>

// //                {/* President */}
// //                <motion.div 
// //                   initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
// //                   className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-[#ffc107] text-center"
// //                >
// //                   <div className="w-40 h-40 mx-auto bg-stone-200 rounded-full mb-6 border-4 border-white shadow-lg overflow-hidden flex items-center justify-center relative">
// //                      {/* IMAGE PLACEHOLDER */}
// //                      <span className="text-stone-400 text-[10px] font-bold uppercase p-2">[Tmt. Lakshmi Bangaru Adigalar]</span>
// //                   </div>
// //                   <h3 className="text-xl font-bold text-[#1a1a1a] mb-1">Tmt. Lakshmi<br/>Bangaru Adigalar</h3>
// //                   <p className="text-[#a7150b] font-bold uppercase tracking-widest text-xs mt-2">President</p>
// //                </motion.div>

// //                {/* Vice President */}
// //                <motion.div 
// //                   initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
// //                   className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-[#1a1a1a] text-center md:-translate-y-8"
// //                >
// //                   <div className="w-40 h-40 mx-auto bg-stone-200 rounded-full mb-6 border-4 border-white shadow-lg overflow-hidden flex items-center justify-center relative">
// //                      {/* IMAGE PLACEHOLDER */}
// //                      <span className="text-stone-400 text-[10px] font-bold uppercase p-2">[Mr. G.B. Anbalagan]</span>
// //                   </div>
// //                   <h3 className="text-xl font-bold text-[#1a1a1a] mb-1">Mr. G.B. Anbalagan</h3>
// //                   <p className="text-[#a7150b] font-bold uppercase tracking-widest text-xs mt-2">Vice-President</p>
// //                </motion.div>

// //             </div>
// //          </div>
// //       </section>

// //       {/* ================= GROWTH OF THE TRUST ================= */}
// //       <section className="py-24 bg-[#1a1a1a] text-white overflow-hidden relative">
// //          {/* Background Decor */}
// //          <div className="absolute top-0 right-0 w-96 h-96 bg-[#ffc107]/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

// //          <div className="container mx-auto px-4 relative z-10">
// //             <div className="grid lg:grid-cols-2 gap-16 items-start">

// //                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
// //                   <div className="flex items-center gap-3 mb-6">
// //                      <Globe className="w-8 h-8 text-[#ffc107]" />
// //                      <span className="text-[#ffc107] font-bold tracking-widest uppercase text-sm">Our Reach</span>
// //                   </div>
// //                   <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Growth of the Trust</h2>

// //                   <div className="space-y-6 text-gray-300 leading-relaxed text-lg text-justify">
// //                      <p>
// //                         From its humble beginnings, ASPWCT Trust has grown significantly, now operating with a substantial capital fund and renowned for its philanthropic activities across India and globally.
// //                      </p>
// //                      <p>
// //                         The Trust manages <span className="text-white font-bold">7,200 worship centers (micro-units)</span> in countries including Sri Lanka, Singapore, Malaysia, UAE, UK, France, Switzerland, USA, Canada, and Australia.
// //                      </p>
// //                      <p>
// //                         The Trust’s activities have notably improved the standard of living for the residents of the <span className="text-[#ffc107] font-bold">750 villages</span> surrounding Melmaruvathur. Its educational institutions, established in Kalavai, Vellore District, have also significantly benefitted the local population by providing quality education and employment opportunities.
// //                      </p>
// //                   </div>
// //                </motion.div>

// //                {/* Right Side: Future Vision Card */}
// //                <motion.div 
// //                   initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
// //                   className="bg-white/10 p-10 rounded-3xl border border-white/10 backdrop-blur-sm relative"
// //                >
// //                   <Quote className="w-12 h-12 text-[#ffc107] absolute -top-6 -left-6 bg-[#1a1a1a] p-2 rounded-full border border-white/20" />
// //                   <h3 className="text-2xl font-bold mb-6 text-[#ffc107]">Future Vision</h3>
// //                   <p className="text-gray-300 mb-8 leading-relaxed text-lg italic">
// //                      "The future vision of His Holiness Bangaru Adigalar includes establishing micro-units globally to foster community service and promote the idea that service to humanity is the highest form of service, bringing real happiness and purpose to human life."
// //                   </p>

// //                   <div className="h-40 w-full bg-black/30 rounded-xl border border-white/5 flex items-center justify-center">
// //                      <span className="text-gray-500 font-bold uppercase tracking-wider text-sm">[Image: Global/Visionary Concept]</span>
// //                   </div>
// //                </motion.div>

// //             </div>
// //          </div>
// //       </section>

// //       {/* ================= SIGNIFICANT ACTIVITIES ================= */}
// //       <section className="py-24 bg-white">
// //          <div className="container mx-auto px-4">
// //             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16 max-w-4xl mx-auto">
// //                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a1a1a]">Significant Activities</h2>
// //                <div className="w-24 h-1 bg-[#a7150b] mx-auto mt-4 rounded-full mb-8" />
// //                <p className="text-slate-600 text-lg">
// //                   ASPWCT Trust’s core objective is to provide equitable services to people deprived of income, employment, health, and a good living environment.
// //                </p>
// //             </motion.div>

// //             <div className="grid md:grid-cols-2 gap-8">

// //                {/* Healthcare */}
// //                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
// //                   <Card className="p-8 h-full border-t-4 border-[#a7150b] shadow-lg bg-stone-50 hover:bg-white transition-colors duration-300">
// //                      <div className="flex items-start gap-4 mb-4">
// //                         <div className="p-3 bg-[#a7150b]/10 rounded-xl text-[#a7150b]">
// //                            <Stethoscope className="w-8 h-8" />
// //                         </div>
// //                         <div>
// //                            <h3 className="text-xl font-bold text-[#1a1a1a]">Healthcare</h3>
// //                            <p className="text-slate-600 mt-2 leading-relaxed">
// //                               Establishment of a 1000-bed multispecialty hospital offering free medical treatment, including a free hospital established in 1986.
// //                            </p>
// //                         </div>
// //                      </div>
// //                   </Card>
// //                </motion.div>

// //                {/* Education */}
// //                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.1 }}>
// //                   <Card className="p-8 h-full border-t-4 border-[#ffc107] shadow-lg bg-stone-50 hover:bg-white transition-colors duration-300">
// //                      <div className="flex items-start gap-4 mb-4">
// //                         <div className="p-3 bg-[#ffc107]/20 rounded-xl text-[#b45309]">
// //                            <GraduationCap className="w-8 h-8" />
// //                         </div>
// //                         <div>
// //                            <h3 className="text-xl font-bold text-[#1a1a1a]">Education</h3>
// //                            <p className="text-slate-600 mt-2 leading-relaxed">
// //                               From pre-primary schools to higher education colleges, ASPWCT Trust provides sponsored education to the poor and has established premier educational institutions.
// //                            </p>
// //                         </div>
// //                      </div>
// //                   </Card>
// //                </motion.div>

// //                {/* Community Welfare */}
// //                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.2 }}>
// //                   <Card className="p-8 h-full border-t-4 border-green-600 shadow-lg bg-stone-50 hover:bg-white transition-colors duration-300">
// //                      <div className="flex items-start gap-4 mb-4">
// //                         <div className="p-3 bg-green-100 rounded-xl text-green-700">
// //                            <Sprout className="w-8 h-8" />
// //                         </div>
// //                         <div>
// //                            <h3 className="text-xl font-bold text-[#1a1a1a]">Community Welfare</h3>
// //                            <p className="text-slate-600 mt-2 leading-relaxed">
// //                               Initiatives include the installation of water recycling plants, river bund strengthening, tree planting, vocational training for differently-abled persons, and distribution of professional implements to the poor.
// //                            </p>
// //                         </div>
// //                      </div>
// //                   </Card>
// //                </motion.div>

// //                {/* Women Empowerment */}
// //                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.3 }}>
// //                   <Card className="p-8 h-full border-t-4 border-pink-500 shadow-lg bg-stone-50 hover:bg-white transition-colors duration-300">
// //                      <div className="flex items-start gap-4 mb-4">
// //                         <div className="p-3 bg-pink-100 rounded-xl text-pink-600">
// //                            <Baby className="w-8 h-8" />
// //                         </div>
// //                         <div>
// //                            <h3 className="text-xl font-bold text-[#1a1a1a]">Women Empowerment</h3>
// //                            <p className="text-slate-600 mt-2 leading-relaxed">
// //                               Most of the Trust’s institutions are led by women, and many employees are women, helping to overcome societal stigmas and empower women through education, employment, and entrepreneurship support.
// //                            </p>
// //                         </div>
// //                      </div>
// //                   </Card>
// //                </motion.div>

// //             </div>
// //          </div>
// //       </section>

// //       {/* ================= MICRO UNITS & STRENGTH ================= */}
// //       <section className="py-24 bg-stone-100">
// //          <div className="container mx-auto px-4">
// //             <div className="grid lg:grid-cols-2 gap-12">

// //                {/* Micro Units */}
// //                <motion.div 
// //                   initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
// //                   className="bg-white p-8 rounded-2xl shadow-lg"
// //                >
// //                   <div className="flex items-center gap-3 mb-4">
// //                      <Globe className="w-6 h-6 text-[#a7150b]" />
// //                      <h3 className="text-2xl font-bold text-[#1a1a1a]">Micro-Units of the Trust</h3>
// //                   </div>
// //                   <p className="text-slate-600 leading-relaxed text-justify">
// //                      The Trust's success is largely attributed to its micro-units, which replicate its activities in their respective regions, thereby benefiting the immediate community. These micro-units operate both nationally and internationally, promoting community service and economic independence.
// //                   </p>
// //                </motion.div>

// //                {/* Strength */}
// //                <motion.div 
// //                   initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
// //                   className="bg-white p-8 rounded-2xl shadow-lg"
// //                >
// //                   <div className="flex items-center gap-3 mb-4">
// //                      <Heart className="w-6 h-6 text-[#ffc107]" />
// //                      <h3 className="text-2xl font-bold text-[#1a1a1a]">Strength of the Organization</h3>
// //                   </div>
// //                   <p className="text-slate-600 leading-relaxed text-justify">
// //                      The strength of ASPWCT Trust lies in the visionary leadership of the Founder President, His Holiness Bangaru Adigalar, and the dedication of millions of volunteers who provide physical, financial, and intellectual support. The Trust receives voluntary contributions from kind-hearted people worldwide, further testament to the public’s faith in its mission.
// //                   </p>
// //                </motion.div>

// //             </div>
// //          </div>
// //       </section>

// //       {/* ================= AFFILIATIONS ================= */}
// //       <section className="py-20 bg-white border-t border-stone-200">
// //          <div className="container mx-auto px-4 text-center">
// //             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
// //                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-8">Affiliations & Accreditations</h2>
// //                <div className="flex flex-col md:flex-row justify-center gap-6">

// //                   <div className="flex items-center gap-3 bg-stone-50 px-8 py-6 rounded-xl border border-stone-100 shadow-sm mx-auto md:mx-0">
// //                      <Award className="w-8 h-8 text-[#a7150b]" />
// //                      <span className="font-bold text-lg text-slate-700">National Medical Commission (NMC)</span>
// //                   </div>

// //                   <div className="flex items-center gap-3 bg-stone-50 px-8 py-6 rounded-xl border border-stone-100 shadow-sm mx-auto md:mx-0">
// //                      <Award className="w-8 h-8 text-[#ffc107]" />
// //                      <span className="font-bold text-lg text-slate-700">The Tamil Nadu Dr. M.G.R. Medical University</span>
// //                   </div>

// //                </div>
// //             </motion.div>
// //          </div>
// //       </section>

// //     </main>
// //   )
// // }
// "use client"

// import { motion } from "framer-motion"
// import Image from "next/image"
// import {
//    Landmark,
//    Globe,
//    Users,
//    Heart,
//    Award,
//    Stethoscope,
//    GraduationCap,
//    Sprout,
//    Baby,
//    MapPin,
//    Phone,
//    Mail,
//    Quote
// } from "lucide-react"
// import { Card } from "@/components/ui/card"

// // --- Animation Variants ---
// const fadeInUp = {
//    hidden: { opacity: 0, y: 30 },
//    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// }

// const staggerContainer = {
//    hidden: { opacity: 0 },
//    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
// }

// export default function AboutUsPage() {
//    return (
//       <main className="bg-background overflow-x-hidden font-sans text-foreground selection:bg-[#ffc107] selection:text-black">

//          {/* ================= HERO SECTION ================= */}
//          <section className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center bg-[#1a1a1a]">

//             {/* HERO IMAGE */}
//             <div className="absolute inset-0 z-0">
//                {/* Replace '/images/hero-temple.jpg' with your actual image path */}
//                <Image
//                   src="/images/hero-temple.jpg"
//                   alt="Trust Temple Background"
//                   fill
//                   className="object-cover opacity-50"
//                   priority
//                />
//             </div>

//             {/* Gradient Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/60 to-transparent z-10" />

//             <div className="relative z-20 container mx-auto px-4 text-center">
//                <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
//                   <motion.div variants={fadeInUp} className="inline-block mb-4">
//                      <span className="px-4 py-2 rounded-full border border-[#ffc107]/30 bg-[#ffc107]/10 text-[#ffc107] text-sm font-bold tracking-widest uppercase">
//                         Since 1988
//                      </span>
//                   </motion.div>
//                   <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
//                      The Trust
//                   </motion.h1>
//                   <motion.p variants={fadeInUp} className="text-gray-300 max-w-4xl mx-auto text-lg leading-relaxed">
//                      Adhiparasakthi Siddhar Peeda Women's Charitable Trust (ASPWCT)
//                   </motion.p>
//                </motion.div>
//             </div>
//          </section>

//          {/* ================= INTRODUCTION (THE TRUST) ================= */}
//          <section className="py-20 bg-white">
//             <div className="container mx-auto px-4">
//                <div className="grid lg:grid-cols-2 gap-12 items-center">

//                   {/* Text Content */}
//                   <motion.div
//                      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
//                      className="space-y-6 text-slate-700 text-lg leading-relaxed text-justify"
//                   >
//                      <div className="flex items-center gap-3 mb-2">
//                         <Landmark className="w-8 h-8 text-[#a7150b]" />
//                         <h2 className="text-3xl font-serif font-bold text-[#1a1a1a]">About The Trust</h2>
//                      </div>
//                      <p>
//                         Adhiparasakthi Siddhar Peeda Women's Charitable Trust (ASPWCT)  was established in 1988 by His Holiness Bangaru Adigalar with a modest corpus fund and a few cents of land in Melmaruvathur, Tamil Nadu.
//                      </p>
//                      <p>
//                         Initially a small village located 92 km from Chennai and 70 km from Pondicherry, Melmaruvathur has grown significantly, thanks in large part to the Trust’s efforts. ASPWCT Trust is a non-profit organization dedicated to serving the community through various charitable, medical, educational, and cultural initiatives.
//                      </p>
//                   </motion.div>

//                   {/* IMAGE: HISTORY / OLD PHOTO */}
//                   <motion.div
//                      initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
//                      className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
//                   >
//                      {/* Replace '/images/history.jpg' with your actual image path */}
//                      <Image
//                         src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766091899/mapims-12_wp1xsg.jpg"
//                         alt="Melmaruvathur Early Days"
//                         fill
//                         className="object-fill"
//                      />
//                   </motion.div>
//                </div>
//             </div>
//          </section>

//          {/* ================= LEADERSHIP ================= */}
//          <section className="py-24 bg-stone-50">
//             <div className="container mx-auto px-4 text-center">
//                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-16">
//                   <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a1a1a] mb-4">Founder & President</h2>
//                   <div className="w-24 h-1 bg-[#ffc107] mx-auto rounded-full" />
//                </motion.div>

//                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

//                   {/* 1. Founder President */}
//                   <motion.div
//                      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
//                      className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-[#a7150b] flex flex-col items-center"
//                   >
//                      <div className="w-48 h-48 relative rounded-full mb-6 overflow-hidden border-4 border-white shadow-lg">
//                         {/* Replace '/images/founder.jpg' */}
//                         <Image
//                            src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766091903/3952Founder-President_k3xqz3.png"
//                            alt="His Holiness Bangaru Adigalar"
//                            fill
//                            className="object-fill"
//                         />
//                      </div>
//                      <h3 className="text-xl font-bold text-[#1a1a1a]">His Holiness<br />Bangaru Adigalar</h3>
//                      <p className="text-[#a7150b] font-bold uppercase tracking-widest text-xs mt-2">Founder</p>
//                   </motion.div>

//                   {/* 2. President */}
//                   <motion.div
//                      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
//                      className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-[#ffc107] flex flex-col items-center"
//                   >
//                      <div className="w-48 h-48 relative rounded-full mb-6 overflow-hidden border-4 border-white shadow-lg">
//                         {/* Replace '/images/president.jpg' */}
//                         <Image
//                            src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766091895/Vice-President_z3lp84.jpg"
//                            alt="Smt. Lakshmi Bangaru Adigalar"
//                            fill
//                            className="object-fill"
//                         />
//                      </div>
//                      <h3 className="text-xl font-bold text-[#1a1a1a]"> Smt. Lakshmi<br />Bangaru Adigalar</h3>
//                      <p className="text-[#a7150b] font-bold uppercase tracking-widest text-xs mt-2">President</p>
//                   </motion.div>

//                   {/* 3. Vice President */}
//                   <motion.div
//                      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
//                      className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-[#1a1a1a] flex flex-col items-center"
//                   >
//                      <div className="w-48 h-48 relative rounded-full mb-6 overflow-hidden border-4 border-white shadow-lg">
//                         {/* Replace '/images/vice-president.jpg' */}
//                         <Image
//                            src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766143689/n2_qp1igt.webp"
//                            alt="Mr. G.B. Anbalagan"
//                            fill
//                            className="object-fill"
//                         />
//                      </div>
//                      <h3 className="text-xl font-bold text-[#1a1a1a]">Mr. G.B. Anbalagan</h3>
//                      <p className="text-[#a7150b] font-bold uppercase tracking-widest text-xs mt-2">Vice-President</p>
//                   </motion.div>

//                </div>
//             </div>
//          </section>

//          {/* ================= GROWTH & FUTURE VISION ================= */}
//          <section className="py-24 bg-[#1a1a1a] text-white">
//             <div className="container mx-auto px-4">
//                <div className="grid lg:grid-cols-2 gap-16 items-start">

//                   {/* Growth of the Trust */}
//                   <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-6">
//                      <div className="flex items-center gap-3">
//                         <Globe className="w-8 h-8 text-[#ffc107]" />
//                         <h2 className="text-3xl font-serif font-bold text-white">Growth of the Trust</h2>
//                      </div>
//                      <div className="space-y-6 text-gray-500 leading-relaxed text-lg text-justify">
//                         <p className="text-gray-400">
//                            From its humble beginnings, ASPWCT Trust has grown significantly, now operating with a substantial capital fund and renowned for its philanthropic activities across India and globally.
//                         </p>
//                         <p className="text-gray-400">
//                            The Trust manages <span className="text-white font-bold">7,200 worship centers (micro-units)</span> in countries including Sri Lanka, Singapore, Malaysia, UAE, UK, France, Switzerland, USA, Canada, and Australia.
//                         </p>
//                         <p className="text-gray-400">
//                            The Trust’s activities have notably improved the standard of living for the residents of the <span className="text-[#ffc107]">750 villages</span> surrounding Melmaruvathur. Its educational institutions, established in Kalavai, Vellore District, have also significantly benefitted the local population by providing quality education and employment opportunities.
//                         </p>
//                      </div>
//                   </motion.div>

//                   {/* Future Vision & Strength */}
//                   <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-8">
//                      {/* Future Vision Card */}
//                      <div className="bg-white/10 p-8 rounded-2xl border border-white/10 backdrop-blur-sm relative overflow-hidden">
//                         <div className="absolute top-0 right-0 p-4 opacity-10"><Quote size={80} /></div>
//                         <h3 className="text-xl font-bold text-[#ffc107] mb-4">Future Vision</h3>
//                         <p className="text-gray-300 leading-relaxed italic relative z-10">
//                            "The future vision of His Holiness Bangaru Adigalar includes establishing micro-units globally to foster community service and promote the idea that service to humanity is the highest form of service, bringing real happiness and purpose to human life."
//                         </p>
//                      </div>

//                      {/* Strength Card */}
//                      <div className="bg-white/10 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
//                         <h3 className="text-xl font-bold text-[#ffc107] mb-4">Strength of the Organization</h3>
//                         <p className="text-gray-300 leading-relaxed">
//                            The strength of ASPWCT Trust lies in the visionary leadership of the Founder President, His Holiness Bangaru Adigalar, and the dedication of millions of volunteers who provide physical, financial, and intellectual support. The Trust receives voluntary contributions from kind-hearted people worldwide, further testament to the public’s faith in its mission.
//                         </p>
//                      </div>
//                   </motion.div>

//                </div>
//             </div>
//          </section>

//          {/* ================= SIGNIFICANT ACTIVITIES ================= */}
//          <section className="py-24 bg-white">
//             <div className="container mx-auto px-4">
//                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-4xl mx-auto text-center mb-16">
//                   <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a1a1a] mb-6">Significant Activities</h2>
//                   <p className="text-slate-600 text-lg leading-relaxed">
//                      ASPWCT Trust’s core objective is to provide equitable services to people deprived of income, employment, health, and a good living environment. Its significant activities include:
//                   </p>
//                </motion.div>

//                <div className="grid md:grid-cols-2 gap-8">

//                   {/* Healthcare */}
//                   <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
//                      <Card className="p-8 h-full border-t-4 border-[#a7150b] shadow-lg bg-stone-50 hover:bg-white transition-colors duration-300">
//                         <div className="flex items-start gap-4 mb-4">
//                            <div className="p-3 bg-[#a7150b]/10 rounded-xl text-[#a7150b]">
//                               <Stethoscope className="w-8 h-8" />
//                            </div>
//                            <div>
//                               <h3 className="text-xl font-bold text-[#1a1a1a]">Healthcare</h3>
//                               <p className="text-slate-600 mt-2 leading-relaxed text-justify">
//                                  Establishment of a 1000-bed multispecialty hospital offering free medical treatment, including a free hospital established in 1986.
//                               </p>
//                            </div>
//                         </div>
//                      </Card>
//                   </motion.div>

//                   {/* Education */}
//                   <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.1 }}>
//                      <Card className="p-8 h-full border-t-4 border-[#ffc107] shadow-lg bg-stone-50 hover:bg-white transition-colors duration-300">
//                         <div className="flex items-start gap-4 mb-4">
//                            <div className="p-3 bg-[#ffc107]/20 rounded-xl text-[#b45309]">
//                               <GraduationCap className="w-8 h-8" />
//                            </div>
//                            <div>
//                               <h3 className="text-xl font-bold text-[#1a1a1a]">Education</h3>
//                               <p className="text-slate-600 mt-2 leading-relaxed text-justify">
//                                  From pre-primary schools to higher education colleges, ASPWCT Trust provides sponsored education to the poor and has established premier educational institutions.
//                               </p>
//                            </div>
//                         </div>
//                      </Card>
//                   </motion.div>

//                   {/* Community Welfare */}
//                   <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.2 }}>
//                      <Card className="p-8 h-full border-t-4 border-green-600 shadow-lg bg-stone-50 hover:bg-white transition-colors duration-300">
//                         <div className="flex items-start gap-4 mb-4">
//                            <div className="p-3 bg-green-100 rounded-xl text-green-700">
//                               <Sprout className="w-8 h-8" />
//                            </div>
//                            <div>
//                               <h3 className="text-xl font-bold text-[#1a1a1a]">Community Welfare</h3>
//                               <p className="text-slate-600 mt-2 leading-relaxed text-justify">
//                                  Initiatives include the installation of water recycling plants, river bund strengthening, tree planting, vocational training for differently-abled persons, and distribution of professional implements to the poor.
//                               </p>
//                            </div>
//                         </div>
//                      </Card>
//                   </motion.div>

//                   {/* Women Empowerment */}
//                   <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.3 }}>
//                      <Card className="p-8 h-full border-t-4 border-pink-500 shadow-lg bg-stone-50 hover:bg-white transition-colors duration-300">
//                         <div className="flex items-start gap-4 mb-4">
//                            <div className="p-3 bg-pink-100 rounded-xl text-pink-600">
//                               <Baby className="w-8 h-8" />
//                            </div>
//                            <div>
//                               <h3 className="text-xl font-bold text-[#1a1a1a]">Women Empowerment</h3>
//                               <p className="text-slate-600 mt-2 leading-relaxed text-justify">
//                                  Most of the Trust’s institutions are led by women, and many employees across the Trust’s institutions are women, helping to overcome societal stigmas and empower women through education, employment, and entrepreneurship support.
//                               </p>
//                            </div>
//                         </div>
//                      </Card>
//                   </motion.div>

//                </div>
//             </div>
//          </section>

//          {/* ================= MICRO UNITS & AFFILIATIONS ================= */}
//          <section className="py-24 bg-stone-50">
//             <div className="container mx-auto px-4">
//                <div className="grid lg:grid-cols-2 gap-12">

//                   {/* Micro-Units */}
//                   <motion.div
//                      initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
//                      className="bg-white p-8 rounded-2xl shadow-lg border border-stone-100"
//                   >
//                      <div className="flex items-center gap-3 mb-4">
//                         <Users className="w-6 h-6 text-[#a7150b]" />
//                         <h3 className="text-2xl font-bold text-[#1a1a1a]">Micro-Units of the Trust</h3>
//                      </div>
//                      <p className="text-slate-600 leading-relaxed text-justify">
//                         The Trust's success is largely attributed to its micro-units, which replicate its activities in their respective regions, thereby benefiting the immediate community. These micro-units operate both nationally and internationally, promoting community service and economic independence.
//                      </p>
//                   </motion.div>

//                   {/* Affiliations */}
//                   <motion.div
//                      initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
//                      className="bg-white p-8 rounded-2xl shadow-lg border border-stone-100"
//                   >
//                      <div className="flex items-center gap-3 mb-4">
//                         <Award className="w-6 h-6 text-[#ffc107]" />
//                         <h3 className="text-2xl font-bold text-[#1a1a1a]">Affiliations</h3>
//                      </div>
//                      <p className="text-slate-600 mb-4">
//                         The Trust adheres to established statutory regulations and accreditation norms, including affiliations with:
//                      </p>
//                      <ul className="space-y-3">
//                         <li className="flex items-center gap-3">
//                            <div className="w-2 h-2 bg-[#a7150b] rounded-full" />
//                            <span className="font-bold text-slate-700">National Medical Commission (NMC)</span>
//                         </li>
//                         <li className="flex items-center gap-3">
//                            <div className="w-2 h-2 bg-[#a7150b] rounded-full" />
//                            <span className="font-bold text-slate-700">The Tamil Nadu Dr. M.G.R. Medical University</span>
//                         </li>
//                      </ul>
//                   </motion.div>

//                </div>
//             </div>
//          </section>

//          {/* ================= CONTACT INFO (FROM PDF) ================= */}
//          <section className="py-20 bg-[#a7150b] text-white">
//             <div className="container mx-auto px-4">
//                <div className="bg-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-md border border-white/20">
//                   <div className="grid md:grid-cols-2 gap-12 items-center">

//                      <div>
//                         <h3 className="text-2xl md:text-3xl font-serif font-bold mb-6 leading-tight">
//                            Melmaruvathur Adhiparasakthi Institute of Medical Sciences and Research
//                         </h3>

//                         <div className="space-y-4">
//                            <div className="flex items-start gap-4">
//                               <MapPin className="w-6 h-6 text-[#ffc107] mt-1 shrink-0" />
//                               <p className="text-white/90 text-lg">
//                                  Melmaruvathur, Chengalpattu District,<br />
//                                  Tamilnadu, India - 603319
//                               </p>
//                            </div>

//                            <div className="flex items-center gap-4">
//                               <Phone className="w-6 h-6 text-[#ffc107] shrink-0" />
//                               <p className="text-white/90 text-lg">044-27528302, 27528303, 27528304</p>
//                            </div>

//                            <div className="flex items-center gap-4">
//                               <Mail className="w-6 h-6 text-[#ffc107] shrink-0" />
//                               <div className="flex flex-col">
//                                  <a href="mailto:admissions@mapims.org" className="text-white/90 hover:text-[#ffc107] transition-colors">admissions@mapims.org</a>
//                                  <a href="mailto:info@mapims.org" className="text-white/90 hover:text-[#ffc107] transition-colors">info@mapims.org</a>
//                               </div>
//                            </div>
//                         </div>
//                      </div>

//                      {/* IMAGE: MAPIMS BUILDING */}
//                      <div className="relative h-64 md:h-80 w-full bg-black/20 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
//                         {/* Replace '/images/mapims-building.jpg' */}
//                         <Image
//                            src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766143744/a12_nbqg5x.webp"
//                            alt="MAPIMS Building"
//                            fill
//                            className="object-fill"
//                         />
//                      </div>

//                   </div>
//                </div>
//             </div>
//          </section>

//       </main>
//    )
// }

"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import {
   Landmark,
   Globe,
   Users,
   Award,
   Stethoscope,
   GraduationCap,
   Sprout,
   Baby,
   MapPin,
   Phone,
   Mail,
   Quote
} from "lucide-react"
import { Card } from "@/components/ui/card"

// --- Animation Variants ---
const fadeInUp = {
   hidden: { opacity: 0, y: 30 },
   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const staggerContainer = {
   hidden: { opacity: 0 },
   visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
}

export default function AboutUsPage() {
   return (
      <main className="bg-slate-50 overflow-x-hidden font-sans text-foreground selection:bg-[#ffc107] selection:text-black">

         {/* ================= HERO SECTION ================= */}
         <section className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center bg-[#1a1a1a]">

            {/* HERO IMAGE */}
            <div className="absolute inset-0 z-0">
               {/* Using Cloudinary image as fallback/actual image */}
               <Image
                  src="/placeholder.svg"
                  alt="Trust Temple Background"
                  fill
                  className="object-cover opacity-40 grayscale"
                  priority
               />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/40 to-transparent z-10" />

            <div className="relative z-20 container mx-auto px-4 text-center">
               <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                  <motion.div variants={fadeInUp} className="inline-block mb-4">
                     <span className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#ffc107] text-xs font-bold tracking-widest uppercase">
                        Since 1988
                     </span>
                  </motion.div>
                  <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 tracking-tight">
                     The Trust
                  </motion.h1>
                  <motion.p variants={fadeInUp} className="text-gray-300 max-w-4xl mx-auto text-lg leading-relaxed font-light">
                     Adhiparasakthi Siddhar Peeda Women's Charitable Trust (ASPWCT)
                  </motion.p>
               </motion.div>
            </div>
         </section>

         {/* ================= INTRODUCTION (THE TRUST) ================= */}
         <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
               <div className="grid lg:grid-cols-2 gap-12 items-center">

                  {/* Text Content */}
                  <motion.div
                     initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
                     className="space-y-6 text-slate-600 text-lg leading-relaxed text-justify"
                  >
                     <div className="flex items-center gap-3 mb-2">
                        <Landmark className="w-8 h-8 text-[#a7150b]" />
                        <h2 className="text-3xl font-serif font-bold text-gray-900 tracking-tight">About The Trust</h2>
                     </div>
                     <p>
                        Adhiparasakthi Siddhar Peeda Women's Charitable Trust (ASPWCT)  was established in 1988 by His Holiness Bangaru Adigalar with a modest corpus fund and a few cents of land in Melmaruvathur, Tamil Nadu.
                     </p>
                     <p>
                        Initially a small village located 92 km from Chennai and 70 km from Pondicherry, Melmaruvathur has grown significantly, thanks in large part to the Trust’s efforts. ASPWCT Trust is a non-profit organization dedicated to serving the community through various charitable, medical, educational, and cultural initiatives.
                     </p>
                  </motion.div>

                  {/* IMAGE: HISTORY / OLD PHOTO */}
                  <motion.div
                     initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                     className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
                  >
                     <Image
                        src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766091899/mapims-12_wp1xsg.jpg"
                        alt="Melmaruvathur Early Days"
                        fill
                        className="object-cover"
                     />
                  </motion.div>
               </div>
            </div>
         </section>

         {/* ================= LEADERSHIP ================= */}
         <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 text-center">
               <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-16">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4 tracking-tight">Founder & President</h2>
                  <div className="w-24 h-1 bg-[#ffc107] mx-auto rounded-full" />
               </motion.div>

               <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

                  {/* 1. Founder President */}
                  <motion.div
                     initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                     className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 flex flex-col items-center hover:shadow-xl transition-shadow"
                  >
                     <div className="w-48 h-48 relative rounded-full mb-6 overflow-hidden border-4 border-[#a7150b] shadow-lg">
                        <Image
                           src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766091903/3952Founder-President_k3xqz3.png"
                           alt="His Holiness Bangaru Adigalar"
                           fill
                           className="object-cover"
                        />
                     </div>
                     <h3 className="text-xl font-bold text-gray-900">His Holiness<br />Bangaru Adigalar</h3>
                     <p className="text-[#a7150b] font-bold uppercase tracking-widest text-xs mt-3 bg-red-50 px-3 py-1 rounded-full">Founder</p>
                  </motion.div>

                  {/* 2. President */}
                  <motion.div
                     initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                     className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 flex flex-col items-center hover:shadow-xl transition-shadow"
                  >
                     <div className="w-48 h-48 relative rounded-full mb-6 overflow-hidden border-4 border-[#ffc107] shadow-lg">
                        <Image
                           src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766091895/Vice-President_z3lp84.jpg"
                           alt="Smt. Lakshmi Bangaru Adigalar"
                           fill
                           className="object-cover"
                        />
                     </div>
                     <h3 className="text-xl font-bold text-gray-900"> Smt. Lakshmi<br />Bangaru Adigalar</h3>
                     <p className="text-[#ffc107] font-bold uppercase tracking-widest text-xs mt-3 bg-yellow-50 px-3 py-1 rounded-full text-yellow-700">President</p>
                  </motion.div>

                  {/* 3. Vice President */}
                  <motion.div
                     initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                     className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 flex flex-col items-center hover:shadow-xl transition-shadow"
                  >
                     <div className="w-48 h-48 relative rounded-full mb-6 overflow-hidden border-4 border-[#1a1a1a] shadow-lg">
                        <Image
                           src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766143689/n2_qp1igt.webp"
                           alt="Mr. G.B. Anbalagan"
                           fill
                           className="object-cover"
                        />
                     </div>
                     <h3 className="text-xl font-bold text-gray-900">Mr. G.B. Anbalagan</h3>
                     <p className="text-gray-900 font-bold uppercase tracking-widest text-xs mt-3 bg-slate-100 px-3 py-1 rounded-full">Vice-President</p>
                  </motion.div>

               </div>
            </div>
         </section>

         {/* ================= GROWTH & FUTURE VISION ================= */}
         <section className="py-24 bg-[#1a1a1a] text-white overflow-hidden relative">
            {/* Soft decorative background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#ffc107]/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            
            <div className="container mx-auto px-4 relative z-10">
               <div className="grid lg:grid-cols-2 gap-16 items-start">

                  {/* Growth of the Trust */}
                  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-6">
                     <div className="flex items-center gap-3">
                        <Globe className="w-8 h-8 text-[#ffc107]" />
                        <h2 className="text-3xl font-serif font-bold text-white tracking-tight">Growth of the Trust</h2>
                     </div>
                     <div className="space-y-6 text-gray-100 text-lg text-justify">
                        <p className="text-gray-400">
                           From its humble beginnings, ASPWCT Trust has grown significantly, now operating with a substantial capital fund and renowned for its philanthropic activities across India and globally.
                        </p>
                        <p className="text-gray-400">
                           The Trust manages <span className="text-white font-semibold">7,200 worship centers (micro-units)</span> in countries including Sri Lanka, Singapore, Malaysia, UAE, UK, France, Switzerland, USA, Canada, and Australia.
                        </p>
                        <p className="text-gray-400">
                           The Trust’s activities have notably improved the standard of living for the residents of the <span className="text-[#ffc107] font-semibold">750 villages</span> surrounding Melmaruvathur. Its educational institutions, established in Kalavai, Vellore District, have also significantly benefitted the local population by providing quality education and employment opportunities.
                        </p>
                     </div>
                  </motion.div>

                  {/* Future Vision & Strength */}
                  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-8">
                     {/* Future Vision Card */}
                     <div className="bg-white/5 p-10 rounded-[2rem] border border-white/10 backdrop-blur-md relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5"><Quote size={80} /></div>
                        <h3 className="text-xl font-bold text-[#ffc107] mb-4 uppercase tracking-wider text-sm">Future Vision</h3>
                        <p className="text-gray-300 leading-relaxed italic relative z-10 font-serif text-lg">
                           "The future vision of His Holiness Bangaru Adigalar includes establishing micro-units globally to foster community service and promote the idea that service to humanity is the highest form of service, bringing real happiness and purpose to human life."
                        </p>
                     </div>

                     {/* Strength Card */}
                     <div className="bg-white/5 p-10 rounded-[2rem] border border-white/10 backdrop-blur-md">
                        <h3 className="text-xl font-bold text-[#ffc107] mb-4 uppercase tracking-wider text-sm">Strength of the Organization</h3>
                        <p className="text-gray-300 leading-relaxed">
                           The strength of ASPWCT Trust lies in the visionary leadership of the Founder President, His Holiness Bangaru Adigalar, and the dedication of millions of volunteers who provide physical, financial, and intellectual support.
                        </p>
                     </div>
                  </motion.div>

               </div>
            </div>
         </section>

         {/* ================= SIGNIFICANT ACTIVITIES ================= */}
         <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
               <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-4xl mx-auto text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6 tracking-tight">Significant Activities</h2>
                  <p className="text-slate-600 text-lg leading-relaxed">
                     ASPWCT Trust’s core objective is to provide equitable services to people deprived of income, employment, health, and a good living environment. Its significant activities include:
                  </p>
               </motion.div>

               <div className="grid md:grid-cols-2 gap-8">

                  {/* Healthcare */}
                  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                     <Card className="p-8 h-full border-none shadow-lg bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 rounded-3xl">
                        <div className="flex items-start gap-4 mb-4">
                           <div className="p-4 bg-[#a7150b]/10 rounded-2xl text-[#a7150b]">
                              <Stethoscope className="w-8 h-8" />
                           </div>
                           <div>
                              <h3 className="text-xl font-bold text-gray-900">Healthcare</h3>
                              <p className="text-slate-600 mt-2 leading-relaxed text-justify">
                                 Establishment of a 1000-bed multispecialty hospital offering free medical treatment, including a free hospital established in 1986.
                              </p>
                           </div>
                        </div>
                     </Card>
                  </motion.div>

                  {/* Education */}
                  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.1 }}>
                     <Card className="p-8 h-full border-none shadow-lg bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 rounded-3xl">
                        <div className="flex items-start gap-4 mb-4">
                           <div className="p-4 bg-[#ffc107]/20 rounded-2xl text-[#b45309]">
                              <GraduationCap className="w-8 h-8" />
                           </div>
                           <div>
                              <h3 className="text-xl font-bold text-gray-900">Education</h3>
                              <p className="text-slate-600 mt-2 leading-relaxed text-justify">
                                 From pre-primary schools to higher education colleges, ASPWCT Trust provides sponsored education to the poor and has established premier educational institutions.
                              </p>
                           </div>
                        </div>
                     </Card>
                  </motion.div>

                  {/* Community Welfare */}
                  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.2 }}>
                     <Card className="p-8 h-full border-none shadow-lg bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 rounded-3xl">
                        <div className="flex items-start gap-4 mb-4">
                           <div className="p-4 bg-green-100 rounded-2xl text-green-700">
                              <Sprout className="w-8 h-8" />
                           </div>
                           <div>
                              <h3 className="text-xl font-bold text-gray-900">Community Welfare</h3>
                              <p className="text-slate-600 mt-2 leading-relaxed text-justify">
                                 Initiatives include the installation of water recycling plants, river bund strengthening, tree planting, vocational training for differently-abled persons, and distribution of professional implements to the poor.
                              </p>
                           </div>
                        </div>
                     </Card>
                  </motion.div>

                  {/* Women Empowerment */}
                  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.3 }}>
                     <Card className="p-8 h-full border-none shadow-lg bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 rounded-3xl">
                        <div className="flex items-start gap-4 mb-4">
                           <div className="p-4 bg-pink-100 rounded-2xl text-pink-600">
                              <Baby className="w-8 h-8" />
                           </div>
                           <div>
                              <h3 className="text-xl font-bold text-gray-900">Women Empowerment</h3>
                              <p className="text-slate-600 mt-2 leading-relaxed text-justify">
                                 Most of the Trust’s institutions are led by women, and many employees across the Trust’s institutions are women, helping to overcome societal stigmas and empower women.
                              </p>
                           </div>
                        </div>
                     </Card>
                  </motion.div>

               </div>
            </div>
         </section>

         {/* ================= MICRO UNITS & AFFILIATIONS ================= */}
         <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4">
               <div className="grid lg:grid-cols-2 gap-12">

                  {/* Micro-Units */}
                  <motion.div
                     initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                     className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100"
                  >
                     <div className="flex items-center gap-3 mb-4">
                        <Users className="w-6 h-6 text-[#a7150b]" />
                        <h3 className="text-2xl font-bold text-gray-900">Micro-Units of the Trust</h3>
                     </div>
                     <p className="text-slate-600 leading-relaxed text-justify">
                        The Trust's success is largely attributed to its micro-units, which replicate its activities in their respective regions, thereby benefiting the immediate community. These micro-units operate both nationally and internationally, promoting community service and economic independence.
                     </p>
                  </motion.div>

                  {/* Affiliations */}
                  <motion.div
                     initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                     className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100"
                  >
                     <div className="flex items-center gap-3 mb-4">
                        <Award className="w-6 h-6 text-[#ffc107]" />
                        <h3 className="text-2xl font-bold text-gray-900">Affiliations</h3>
                     </div>
                     <p className="text-slate-600 mb-6">
                        The Trust adheres to established statutory regulations and accreditation norms, including affiliations with:
                     </p>
                     <ul className="space-y-4">
                        <li className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                           <div className="w-3 h-3 bg-[#a7150b] rounded-full" />
                           <span className="font-bold text-slate-700">National Medical Commission (NMC)</span>
                        </li>
                        <li className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                           <div className="w-3 h-3 bg-[#ffc107] rounded-full" />
                           <span className="font-bold text-slate-700">The Tamil Nadu Dr. M.G.R. Medical University</span>
                        </li>
                     </ul>
                  </motion.div>

               </div>
            </div>
         </section>

         {/* ================= CONTACT INFO ================= */}
         <section className="py-20 bg-[#a7150b] text-white">
            <div className="container mx-auto px-4">
               <div className="bg-black/20 rounded-[2.5rem] p-8 md:p-14 backdrop-blur-md border border-white/10">
                  <div className="grid md:grid-cols-2 gap-12 items-center">

                     <div>
                        <h3 className="text-2xl md:text-3xl font-serif font-bold mb-8 leading-tight tracking-tight">
                           Melmaruvathur Adhiparasakthi Institute of Medical Sciences and Research
                        </h3>

                        <div className="space-y-6">
                           <div className="flex items-start gap-4">
                              <MapPin className="w-6 h-6 text-[#ffc107] mt-1 shrink-0" />
                              <p className="text-white/90 text-lg">
                                 Melmaruvathur, Chengalpattu District,<br />
                                 Tamilnadu, India - 603319
                              </p>
                           </div>

                           <div className="flex items-center gap-4">
                              <Phone className="w-6 h-6 text-[#ffc107] shrink-0" />
                              <p className="text-white/90 text-lg">044-27528302, 27528303, 27528304</p>
                           </div>

                           <div className="flex items-center gap-4">
                              <Mail className="w-6 h-6 text-[#ffc107] shrink-0" />
                              <div className="flex flex-col gap-1">
                                 <a href="mailto:admissions@mapims.org" className="text-white/90 hover:text-[#ffc107] transition-colors">admissions@mapims.org</a>
                                 <a href="mailto:info@mapims.org" className="text-white/90 hover:text-[#ffc107] transition-colors">info@mapims.org</a>
                              </div>
                           </div>
                        </div>
                     </div>

                     {/* IMAGE: MAPIMS BUILDING */}
                     <div className="relative h-64 md:h-80 w-full bg-black/20 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                        <Image
                           src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766143744/a12_nbqg5x.webp"
                           alt="MAPIMS Building"
                           fill
                           className="object-cover"
                        />
                     </div>

                  </div>
               </div>
            </div>
         </section>

      </main>
   )
}