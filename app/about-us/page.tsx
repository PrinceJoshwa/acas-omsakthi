// // "use client"

// // import { motion } from "framer-motion"
// // import Image from "next/image"
// // import {
// //    Landmark,
// //    Globe,
// //    Users,
// //    Heart,
// //    Award,
// //    Stethoscope,
// //    GraduationCap,
// //    Sprout,
// //    Baby,
// //    MapPin,
// //    Phone,
// //    Mail,
// //    Quote
// // } from "lucide-react"
// // import { Card } from "@/components/ui/card"

// // // --- Animation Variants ---
// // const fadeInUp = {
// //    hidden: { opacity: 0, y: 30 },
// //    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// // }

// // const staggerContainer = {
// //    hidden: { opacity: 0 },
// //    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
// // }

// // export default function AboutUsPage() {
// //    return (
// //       <main className="bg-background overflow-x-hidden font-sans text-foreground selection:bg-[#ffc107] selection:text-black">

// //          {/* ================= HERO SECTION ================= */}
// //          <section className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center bg-[#1a1a1a]">

// //             {/* HERO IMAGE */}
// //             <div className="absolute inset-0 z-0">
// //                {/* Replace '/images/hero-temple.jpg' with your actual image path */}
// //                <Image
// //                   src="/images/hero-temple.jpg"
// //                   alt="Trust Temple Background"
// //                   fill
// //                   className="object-cover opacity-50"
// //                   priority
// //                />
// //             </div>

// //             {/* Gradient Overlay */}
// //             <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/60 to-transparent z-10" />

// //             <div className="relative z-20 container mx-auto px-4 text-center">
// //                <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
// //                   <motion.div variants={fadeInUp} className="inline-block mb-4">
// //                      <span className="px-4 py-2 rounded-full border border-[#ffc107]/30 bg-[#ffc107]/10 text-[#ffc107] text-sm font-bold tracking-widest uppercase">
// //                         Since 1988
// //                      </span>
// //                   </motion.div>
// //                   <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
// //                      The Trust
// //                   </motion.h1>
// //                   <motion.p variants={fadeInUp} className="text-gray-300 max-w-4xl mx-auto text-lg leading-relaxed">
// //                      Adhiparasakthi Siddhar Peeda Women's Charitable Trust (ASPWCT)
// //                   </motion.p>
// //                </motion.div>
// //             </div>
// //          </section>

// //          {/* ================= INTRODUCTION (THE TRUST) ================= */}
// //          <section className="py-20 bg-white">
// //             <div className="container mx-auto px-4">
// //                <div className="grid lg:grid-cols-2 gap-12 items-center">

// //                   {/* Text Content */}
// //                   <motion.div
// //                      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
// //                      className="space-y-6 text-slate-700 text-lg leading-relaxed text-justify"
// //                   >
// //                      <div className="flex items-center gap-3 mb-2">
// //                         <Landmark className="w-8 h-8 text-[#a7150b]" />
// //                         <h2 className="text-3xl font-serif font-bold text-[#1a1a1a]">About The Trust</h2>
// //                      </div>
// //                      <p>
// //                         Adhiparasakthi Siddhar Peeda Women's Charitable Trust (ASPWCT)  was established in 1988 by His Holiness Bangaru Adigalar with a modest corpus fund and a few cents of land in Melmaruvathur, Tamil Nadu.
// //                      </p>
// //                      <p>
// //                         Initially a small village located 92 km from Chennai and 70 km from Pondicherry, Melmaruvathur has grown significantly, thanks in large part to the Trust’s efforts. ASPWCT Trust is a non-profit organization dedicated to serving the community through various charitable, medical, educational, and cultural initiatives.
// //                      </p>
// //                   </motion.div>

// //                   {/* IMAGE: HISTORY / OLD PHOTO */}
// //                   <motion.div
// //                      initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
// //                      className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
// //                   >
// //                      {/* Replace '/images/history.jpg' with your actual image path */}
// //                      <Image
// //                         src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766091899/mapims-12_wp1xsg.jpg"
// //                         alt="Melmaruvathur Early Days"
// //                         fill
// //                         className="object-fill"
// //                      />
// //                   </motion.div>
// //                </div>
// //             </div>
// //          </section>

// //          {/* ================= LEADERSHIP ================= */}
// //          <section className="py-24 bg-stone-50">
// //             <div className="container mx-auto px-4 text-center">
// //                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-16">
// //                   <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a1a1a] mb-4">Founder & President</h2>
// //                   <div className="w-24 h-1 bg-[#ffc107] mx-auto rounded-full" />
// //                </motion.div>

// //                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

// //                   {/* 1. Founder President */}
// //                   <motion.div
// //                      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
// //                      className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-[#a7150b] flex flex-col items-center"
// //                   >
// //                      <div className="w-48 h-48 relative rounded-full mb-6 overflow-hidden border-4 border-white shadow-lg">
// //                         {/* Replace '/images/founder.jpg' */}
// //                         <Image
// //                            src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766091903/3952Founder-President_k3xqz3.png"
// //                            alt="His Holiness Bangaru Adigalar"
// //                            fill
// //                            className="object-fill"
// //                         />
// //                      </div>
// //                      <h3 className="text-xl font-bold text-[#1a1a1a]">His Holiness<br />Bangaru Adigalar</h3>
// //                      <p className="text-[#a7150b] font-bold uppercase tracking-widest text-xs mt-2">Founder</p>
// //                   </motion.div>

// //                   {/* 2. President */}
// //                   <motion.div
// //                      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
// //                      className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-[#ffc107] flex flex-col items-center"
// //                   >
// //                      <div className="w-48 h-48 relative rounded-full mb-6 overflow-hidden border-4 border-white shadow-lg">
// //                         {/* Replace '/images/president.jpg' */}
// //                         <Image
// //                            src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766091895/Vice-President_z3lp84.jpg"
// //                            alt="Smt. Lakshmi Bangaru Adigalar"
// //                            fill
// //                            className="object-fill"
// //                         />
// //                      </div>
// //                      <h3 className="text-xl font-bold text-[#1a1a1a]"> Smt. Lakshmi<br />Bangaru Adigalar</h3>
// //                      <p className="text-[#a7150b] font-bold uppercase tracking-widest text-xs mt-2">President</p>
// //                   </motion.div>

// //                   {/* 3. Vice President */}
// //                   <motion.div
// //                      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
// //                      className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-[#1a1a1a] flex flex-col items-center"
// //                   >
// //                      <div className="w-48 h-48 relative rounded-full mb-6 overflow-hidden border-4 border-white shadow-lg">
// //                         {/* Replace '/images/vice-president.jpg' */}
// //                         <Image
// //                            src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766143689/n2_qp1igt.webp"
// //                            alt="Mr. G.B. Anbalagan"
// //                            fill
// //                            className="object-fill"
// //                         />
// //                      </div>
// //                      <h3 className="text-xl font-bold text-[#1a1a1a]">Mr. G.B. Anbalagan</h3>
// //                      <p className="text-[#a7150b] font-bold uppercase tracking-widest text-xs mt-2">Vice-President</p>
// //                   </motion.div>

// //                </div>
// //             </div>
// //          </section>

// //          {/* ================= GROWTH & FUTURE VISION ================= */}
// //          <section className="py-24 bg-[#1a1a1a] text-white">
// //             <div className="container mx-auto px-4">
// //                <div className="grid lg:grid-cols-2 gap-16 items-start">

// //                   {/* Growth of the Trust */}
// //                   <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-6">
// //                      <div className="flex items-center gap-3">
// //                         <Globe className="w-8 h-8 text-[#ffc107]" />
// //                         <h2 className="text-3xl font-serif font-bold text-white">Growth of the Trust</h2>
// //                      </div>
// //                      <div className="space-y-6 text-gray-500 leading-relaxed text-lg text-justify">
// //                         <p className="text-gray-400">
// //                            From its humble beginnings, ASPWCT Trust has grown significantly, now operating with a substantial capital fund and renowned for its philanthropic activities across India and globally.
// //                         </p>
// //                         <p className="text-gray-400">
// //                            The Trust manages <span className="text-white font-bold">7,200 worship centers (micro-units)</span> in countries including Sri Lanka, Singapore, Malaysia, UAE, UK, France, Switzerland, USA, Canada, and Australia.
// //                         </p>
// //                         <p className="text-gray-400">
// //                            The Trust’s activities have notably improved the standard of living for the residents of the <span className="text-[#ffc107]">750 villages</span> surrounding Melmaruvathur. Its educational institutions, established in Kalavai, Vellore District, have also significantly benefitted the local population by providing quality education and employment opportunities.
// //                         </p>
// //                      </div>
// //                   </motion.div>

// //                   {/* Future Vision & Strength */}
// //                   <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-8">
// //                      {/* Future Vision Card */}
// //                      <div className="bg-white/10 p-8 rounded-2xl border border-white/10 backdrop-blur-sm relative overflow-hidden">
// //                         <div className="absolute top-0 right-0 p-4 opacity-10"><Quote size={80} /></div>
// //                         <h3 className="text-xl font-bold text-[#ffc107] mb-4">Future Vision</h3>
// //                         <p className="text-gray-300 leading-relaxed italic relative z-10">
// //                            "The future vision of His Holiness Bangaru Adigalar includes establishing micro-units globally to foster community service and promote the idea that service to humanity is the highest form of service, bringing real happiness and purpose to human life."
// //                         </p>
// //                      </div>

// //                      {/* Strength Card */}
// //                      <div className="bg-white/10 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
// //                         <h3 className="text-xl font-bold text-[#ffc107] mb-4">Strength of the Organization</h3>
// //                         <p className="text-gray-300 leading-relaxed">
// //                            The strength of ASPWCT Trust lies in the visionary leadership of the Founder President, His Holiness Bangaru Adigalar, and the dedication of millions of volunteers who provide physical, financial, and intellectual support. The Trust receives voluntary contributions from kind-hearted people worldwide, further testament to the public’s faith in its mission.
// //                         </p>
// //                      </div>
// //                   </motion.div>

// //                </div>
// //             </div>
// //          </section>

// //          {/* ================= SIGNIFICANT ACTIVITIES ================= */}
// //          <section className="py-24 bg-white">
// //             <div className="container mx-auto px-4">
// //                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-4xl mx-auto text-center mb-16">
// //                   <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a1a1a] mb-6">Significant Activities</h2>
// //                   <p className="text-slate-600 text-lg leading-relaxed">
// //                      ASPWCT Trust’s core objective is to provide equitable services to people deprived of income, employment, health, and a good living environment. Its significant activities include:
// //                   </p>
// //                </motion.div>

// //                <div className="grid md:grid-cols-2 gap-8">

// //                   {/* Healthcare */}
// //                   <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
// //                      <Card className="p-8 h-full border-t-4 border-[#a7150b] shadow-lg bg-stone-50 hover:bg-white transition-colors duration-300">
// //                         <div className="flex items-start gap-4 mb-4">
// //                            <div className="p-3 bg-[#a7150b]/10 rounded-xl text-[#a7150b]">
// //                               <Stethoscope className="w-8 h-8" />
// //                            </div>
// //                            <div>
// //                               <h3 className="text-xl font-bold text-[#1a1a1a]">Healthcare</h3>
// //                               <p className="text-slate-600 mt-2 leading-relaxed text-justify">
// //                                  Establishment of a 1000-bed multispecialty hospital offering free medical treatment, including a free hospital established in 1986.
// //                               </p>
// //                            </div>
// //                         </div>
// //                      </Card>
// //                   </motion.div>

// //                   {/* Education */}
// //                   <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.1 }}>
// //                      <Card className="p-8 h-full border-t-4 border-[#ffc107] shadow-lg bg-stone-50 hover:bg-white transition-colors duration-300">
// //                         <div className="flex items-start gap-4 mb-4">
// //                            <div className="p-3 bg-[#ffc107]/20 rounded-xl text-[#b45309]">
// //                               <GraduationCap className="w-8 h-8" />
// //                            </div>
// //                            <div>
// //                               <h3 className="text-xl font-bold text-[#1a1a1a]">Education</h3>
// //                               <p className="text-slate-600 mt-2 leading-relaxed text-justify">
// //                                  From pre-primary schools to higher education colleges, ASPWCT Trust provides sponsored education to the poor and has established premier educational institutions.
// //                               </p>
// //                            </div>
// //                         </div>
// //                      </Card>
// //                   </motion.div>

// //                   {/* Community Welfare */}
// //                   <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.2 }}>
// //                      <Card className="p-8 h-full border-t-4 border-green-600 shadow-lg bg-stone-50 hover:bg-white transition-colors duration-300">
// //                         <div className="flex items-start gap-4 mb-4">
// //                            <div className="p-3 bg-green-100 rounded-xl text-green-700">
// //                               <Sprout className="w-8 h-8" />
// //                            </div>
// //                            <div>
// //                               <h3 className="text-xl font-bold text-[#1a1a1a]">Community Welfare</h3>
// //                               <p className="text-slate-600 mt-2 leading-relaxed text-justify">
// //                                  Initiatives include the installation of water recycling plants, river bund strengthening, tree planting, vocational training for differently-abled persons, and distribution of professional implements to the poor.
// //                               </p>
// //                            </div>
// //                         </div>
// //                      </Card>
// //                   </motion.div>

// //                   {/* Women Empowerment */}
// //                   <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.3 }}>
// //                      <Card className="p-8 h-full border-t-4 border-pink-500 shadow-lg bg-stone-50 hover:bg-white transition-colors duration-300">
// //                         <div className="flex items-start gap-4 mb-4">
// //                            <div className="p-3 bg-pink-100 rounded-xl text-pink-600">
// //                               <Baby className="w-8 h-8" />
// //                            </div>
// //                            <div>
// //                               <h3 className="text-xl font-bold text-[#1a1a1a]">Women Empowerment</h3>
// //                               <p className="text-slate-600 mt-2 leading-relaxed text-justify">
// //                                  Most of the Trust’s institutions are led by women, and many employees across the Trust’s institutions are women, helping to overcome societal stigmas and empower women through education, employment, and entrepreneurship support.
// //                               </p>
// //                            </div>
// //                         </div>
// //                      </Card>
// //                   </motion.div>

// //                </div>
// //             </div>
// //          </section>

// //          {/* ================= MICRO UNITS & AFFILIATIONS ================= */}
// //          <section className="py-24 bg-stone-50">
// //             <div className="container mx-auto px-4">
// //                <div className="grid lg:grid-cols-2 gap-12">

// //                   {/* Micro-Units */}
// //                   <motion.div
// //                      initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
// //                      className="bg-white p-8 rounded-2xl shadow-lg border border-stone-100"
// //                   >
// //                      <div className="flex items-center gap-3 mb-4">
// //                         <Users className="w-6 h-6 text-[#a7150b]" />
// //                         <h3 className="text-2xl font-bold text-[#1a1a1a]">Micro-Units of the Trust</h3>
// //                      </div>
// //                      <p className="text-slate-600 leading-relaxed text-justify">
// //                         The Trust's success is largely attributed to its micro-units, which replicate its activities in their respective regions, thereby benefiting the immediate community. These micro-units operate both nationally and internationally, promoting community service and economic independence.
// //                      </p>
// //                   </motion.div>

// //                   {/* Affiliations */}
// //                   <motion.div
// //                      initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
// //                      className="bg-white p-8 rounded-2xl shadow-lg border border-stone-100"
// //                   >
// //                      <div className="flex items-center gap-3 mb-4">
// //                         <Award className="w-6 h-6 text-[#ffc107]" />
// //                         <h3 className="text-2xl font-bold text-[#1a1a1a]">Affiliations</h3>
// //                      </div>
// //                      <p className="text-slate-600 mb-4">
// //                         The Trust adheres to established statutory regulations and accreditation norms, including affiliations with:
// //                      </p>
// //                      <ul className="space-y-3">
// //                         <li className="flex items-center gap-3">
// //                            <div className="w-2 h-2 bg-[#a7150b] rounded-full" />
// //                            <span className="font-bold text-slate-700">National Medical Commission (NMC)</span>
// //                         </li>
// //                         <li className="flex items-center gap-3">
// //                            <div className="w-2 h-2 bg-[#a7150b] rounded-full" />
// //                            <span className="font-bold text-slate-700">The Tamil Nadu Dr. M.G.R. Medical University</span>
// //                         </li>
// //                      </ul>
// //                   </motion.div>

// //                </div>
// //             </div>
// //          </section>

// //          {/* ================= CONTACT INFO (FROM PDF) ================= */}
// //          <section className="py-20 bg-[#a7150b] text-white">
// //             <div className="container mx-auto px-4">
// //                <div className="bg-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-md border border-white/20">
// //                   <div className="grid md:grid-cols-2 gap-12 items-center">

// //                      <div>
// //                         <h3 className="text-2xl md:text-3xl font-serif font-bold mb-6 leading-tight">
// //                            Melmaruvathur Adhiparasakthi Institute of Medical Sciences and Research
// //                         </h3>

// //                         <div className="space-y-4">
// //                            <div className="flex items-start gap-4">
// //                               <MapPin className="w-6 h-6 text-[#ffc107] mt-1 shrink-0" />
// //                               <p className="text-white/90 text-lg">
// //                                  Melmaruvathur, Chengalpattu District,<br />
// //                                  Tamilnadu, India - 603319
// //                               </p>
// //                            </div>

// //                            <div className="flex items-center gap-4">
// //                               <Phone className="w-6 h-6 text-[#ffc107] shrink-0" />
// //                               <p className="text-white/90 text-lg">044-27528302, 27528303, 27528304</p>
// //                            </div>

// //                            <div className="flex items-center gap-4">
// //                               <Mail className="w-6 h-6 text-[#ffc107] shrink-0" />
// //                               <div className="flex flex-col">
// //                                  <a href="mailto:admissions@mapims.org" className="text-white/90 hover:text-[#ffc107] transition-colors">admissions@mapims.org</a>
// //                                  <a href="mailto:info@mapims.org" className="text-white/90 hover:text-[#ffc107] transition-colors">info@mapims.org</a>
// //                               </div>
// //                            </div>
// //                         </div>
// //                      </div>

// //                      {/* IMAGE: MAPIMS BUILDING */}
// //                      <div className="relative h-64 md:h-80 w-full bg-black/20 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
// //                         {/* Replace '/images/mapims-building.jpg' */}
// //                         <Image
// //                            src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766143744/a12_nbqg5x.webp"
// //                            alt="MAPIMS Building"
// //                            fill
// //                            className="object-fill"
// //                         />
// //                      </div>

// //                   </div>
// //                </div>
// //             </div>
// //          </section>

// //       </main>
// //    )
// // }

// "use client"

// import { motion } from "framer-motion"
// import Image from "next/image"
// import {
//    Landmark,
//    Globe,
//    Users,
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
//       <main className="bg-slate-50 overflow-x-hidden font-sans text-foreground selection:bg-[#ffc107] selection:text-black">

//          {/* ================= HERO SECTION ================= */}
//          <section className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center bg-[#1a1a1a]">

//             {/* HERO IMAGE */}
//             <div className="absolute inset-0 z-0">
//                {/* Using Cloudinary image as fallback/actual image */}
//                <Image
//                   src="/placeholder.svg"
//                   alt="Trust Temple Background"
//                   fill
//                   className="object-cover opacity-40 grayscale"
//                   priority
//                />
//             </div>

//             {/* Gradient Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/40 to-transparent z-10" />

//             <div className="relative z-20 container mx-auto px-4 text-center">
//                <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
//                   <motion.div variants={fadeInUp} className="inline-block mb-4">
//                      <span className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#ffc107] text-xs font-bold tracking-widest uppercase">
//                         Since 1988
//                      </span>
//                   </motion.div>
//                   <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 tracking-tight">
//                      The Trust
//                   </motion.h1>
//                   <motion.p variants={fadeInUp} className="text-gray-300 max-w-4xl mx-auto text-lg leading-relaxed font-light">
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
//                      className="space-y-6 text-slate-600 text-lg leading-relaxed text-justify"
//                   >
//                      <div className="flex items-center gap-3 mb-2">
//                         <Landmark className="w-8 h-8 text-[#a7150b]" />
//                         <h2 className="text-3xl font-serif font-bold text-gray-900 tracking-tight">About The Trust</h2>
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
//                      <Image
//                         src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766091899/mapims-12_wp1xsg.jpg"
//                         alt="Melmaruvathur Early Days"
//                         fill
//                         className="object-cover"
//                      />
//                   </motion.div>
//                </div>
//             </div>
//          </section>

//          {/* ================= LEADERSHIP ================= */}
//          <section className="py-24 bg-slate-50">
//             <div className="container mx-auto px-4 text-center">
//                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-16">
//                   <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4 tracking-tight">Founder & President</h2>
//                   <div className="w-24 h-1 bg-[#ffc107] mx-auto rounded-full" />
//                </motion.div>

//                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

//                   {/* 1. Founder President */}
//                   <motion.div
//                      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
//                      className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 flex flex-col items-center hover:shadow-xl transition-shadow"
//                   >
//                      <div className="w-48 h-48 relative rounded-full mb-6 overflow-hidden border-4 border-[#a7150b] shadow-lg">
//                         <Image
//                            src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766091903/3952Founder-President_k3xqz3.png"
//                            alt="His Holiness Bangaru Adigalar"
//                            fill
//                            className="object-cover"
//                         />
//                      </div>
//                      <h3 className="text-xl font-bold text-gray-900">His Holiness<br />Bangaru Adigalar</h3>
//                      <p className="text-[#a7150b] font-bold uppercase tracking-widest text-xs mt-3 bg-red-50 px-3 py-1 rounded-full">Founder</p>
//                   </motion.div>

//                   {/* 2. President */}
//                   <motion.div
//                      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
//                      className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 flex flex-col items-center hover:shadow-xl transition-shadow"
//                   >
//                      <div className="w-48 h-48 relative rounded-full mb-6 overflow-hidden border-4 border-[#ffc107] shadow-lg">
//                         <Image
//                            src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766091895/Vice-President_z3lp84.jpg"
//                            alt="Smt. Lakshmi Bangaru Adigalar"
//                            fill
//                            className="object-cover"
//                         />
//                      </div>
//                      <h3 className="text-xl font-bold text-gray-900"> Smt. Lakshmi<br />Bangaru Adigalar</h3>
//                      <p className="text-[#ffc107] font-bold uppercase tracking-widest text-xs mt-3 bg-yellow-50 px-3 py-1 rounded-full text-yellow-700">President</p>
//                   </motion.div>

//                   {/* 3. Vice President */}
//                   <motion.div
//                      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
//                      className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 flex flex-col items-center hover:shadow-xl transition-shadow"
//                   >
//                      <div className="w-48 h-48 relative rounded-full mb-6 overflow-hidden border-4 border-[#1a1a1a] shadow-lg">
//                         <Image
//                            src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766143689/n2_qp1igt.webp"
//                            alt="Mr. G.B. Anbalagan"
//                            fill
//                            className="object-cover"
//                         />
//                      </div>
//                      <h3 className="text-xl font-bold text-gray-900">Mr. G.B. Anbalagan</h3>
//                      <p className="text-gray-900 font-bold uppercase tracking-widest text-xs mt-3 bg-slate-100 px-3 py-1 rounded-full">Vice-President</p>
//                   </motion.div>

//                </div>
//             </div>
//          </section>

//          {/* ================= GROWTH & FUTURE VISION ================= */}
//          <section className="py-24 bg-[#1a1a1a] text-white overflow-hidden relative">
//             {/* Soft decorative background */}
//             <div className="absolute top-0 right-0 w-96 h-96 bg-[#ffc107]/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            
//             <div className="container mx-auto px-4 relative z-10">
//                <div className="grid lg:grid-cols-2 gap-16 items-start">

//                   {/* Growth of the Trust */}
//                   <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-6">
//                      <div className="flex items-center gap-3">
//                         <Globe className="w-8 h-8 text-[#ffc107]" />
//                         <h2 className="text-3xl font-serif font-bold text-white tracking-tight">Growth of the Trust</h2>
//                      </div>
//                      <div className="space-y-6 text-gray-100 text-lg text-justify">
//                         <p className="text-gray-400">
//                            From its humble beginnings, ASPWCT Trust has grown significantly, now operating with a substantial capital fund and renowned for its philanthropic activities across India and globally.
//                         </p>
//                         <p className="text-gray-400">
//                            The Trust manages <span className="text-white font-semibold">7,200 worship centers (micro-units)</span> in countries including Sri Lanka, Singapore, Malaysia, UAE, UK, France, Switzerland, USA, Canada, and Australia.
//                         </p>
//                         <p className="text-gray-400">
//                            The Trust’s activities have notably improved the standard of living for the residents of the <span className="text-[#ffc107] font-semibold">750 villages</span> surrounding Melmaruvathur. Its educational institutions, established in Kalavai, Vellore District, have also significantly benefitted the local population by providing quality education and employment opportunities.
//                         </p>
//                      </div>
//                   </motion.div>

//                   {/* Future Vision & Strength */}
//                   <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-8">
//                      {/* Future Vision Card */}
//                      <div className="bg-white/5 p-10 rounded-[2rem] border border-white/10 backdrop-blur-md relative overflow-hidden">
//                         <div className="absolute top-0 right-0 p-4 opacity-5"><Quote size={80} /></div>
//                         <h3 className="text-xl font-bold text-[#ffc107] mb-4 uppercase tracking-wider text-sm">Future Vision</h3>
//                         <p className="text-gray-300 leading-relaxed italic relative z-10 font-serif text-lg">
//                            "The future vision of His Holiness Bangaru Adigalar includes establishing micro-units globally to foster community service and promote the idea that service to humanity is the highest form of service, bringing real happiness and purpose to human life."
//                         </p>
//                      </div>

//                      {/* Strength Card */}
//                      <div className="bg-white/5 p-10 rounded-[2rem] border border-white/10 backdrop-blur-md">
//                         <h3 className="text-xl font-bold text-[#ffc107] mb-4 uppercase tracking-wider text-sm">Strength of the Organization</h3>
//                         <p className="text-gray-300 leading-relaxed">
//                            The strength of ASPWCT Trust lies in the visionary leadership of the Founder President, His Holiness Bangaru Adigalar, and the dedication of millions of volunteers who provide physical, financial, and intellectual support.
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
//                   <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6 tracking-tight">Significant Activities</h2>
//                   <p className="text-slate-600 text-lg leading-relaxed">
//                      ASPWCT Trust’s core objective is to provide equitable services to people deprived of income, employment, health, and a good living environment. Its significant activities include:
//                   </p>
//                </motion.div>

//                <div className="grid md:grid-cols-2 gap-8">

//                   {/* Healthcare */}
//                   <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
//                      <Card className="p-8 h-full border-none shadow-lg bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 rounded-3xl">
//                         <div className="flex items-start gap-4 mb-4">
//                            <div className="p-4 bg-[#a7150b]/10 rounded-2xl text-[#a7150b]">
//                               <Stethoscope className="w-8 h-8" />
//                            </div>
//                            <div>
//                               <h3 className="text-xl font-bold text-gray-900">Healthcare</h3>
//                               <p className="text-slate-600 mt-2 leading-relaxed text-justify">
//                                  Establishment of a 1000-bed multispecialty hospital offering free medical treatment, including a free hospital established in 1986.
//                               </p>
//                            </div>
//                         </div>
//                      </Card>
//                   </motion.div>

//                   {/* Education */}
//                   <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.1 }}>
//                      <Card className="p-8 h-full border-none shadow-lg bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 rounded-3xl">
//                         <div className="flex items-start gap-4 mb-4">
//                            <div className="p-4 bg-[#ffc107]/20 rounded-2xl text-[#b45309]">
//                               <GraduationCap className="w-8 h-8" />
//                            </div>
//                            <div>
//                               <h3 className="text-xl font-bold text-gray-900">Education</h3>
//                               <p className="text-slate-600 mt-2 leading-relaxed text-justify">
//                                  From pre-primary schools to higher education colleges, ASPWCT Trust provides sponsored education to the poor and has established premier educational institutions.
//                               </p>
//                            </div>
//                         </div>
//                      </Card>
//                   </motion.div>

//                   {/* Community Welfare */}
//                   <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.2 }}>
//                      <Card className="p-8 h-full border-none shadow-lg bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 rounded-3xl">
//                         <div className="flex items-start gap-4 mb-4">
//                            <div className="p-4 bg-green-100 rounded-2xl text-green-700">
//                               <Sprout className="w-8 h-8" />
//                            </div>
//                            <div>
//                               <h3 className="text-xl font-bold text-gray-900">Community Welfare</h3>
//                               <p className="text-slate-600 mt-2 leading-relaxed text-justify">
//                                  Initiatives include the installation of water recycling plants, river bund strengthening, tree planting, vocational training for differently-abled persons, and distribution of professional implements to the poor.
//                               </p>
//                            </div>
//                         </div>
//                      </Card>
//                   </motion.div>

//                   {/* Women Empowerment */}
//                   <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.3 }}>
//                      <Card className="p-8 h-full border-none shadow-lg bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 rounded-3xl">
//                         <div className="flex items-start gap-4 mb-4">
//                            <div className="p-4 bg-pink-100 rounded-2xl text-pink-600">
//                               <Baby className="w-8 h-8" />
//                            </div>
//                            <div>
//                               <h3 className="text-xl font-bold text-gray-900">Women Empowerment</h3>
//                               <p className="text-slate-600 mt-2 leading-relaxed text-justify">
//                                  Most of the Trust’s institutions are led by women, and many employees across the Trust’s institutions are women, helping to overcome societal stigmas and empower women.
//                               </p>
//                            </div>
//                         </div>
//                      </Card>
//                   </motion.div>

//                </div>
//             </div>
//          </section>

//          {/* ================= MICRO UNITS & AFFILIATIONS ================= */}
//          <section className="py-24 bg-slate-50">
//             <div className="container mx-auto px-4">
//                <div className="grid lg:grid-cols-2 gap-12">

//                   {/* Micro-Units */}
//                   <motion.div
//                      initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
//                      className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100"
//                   >
//                      <div className="flex items-center gap-3 mb-4">
//                         <Users className="w-6 h-6 text-[#a7150b]" />
//                         <h3 className="text-2xl font-bold text-gray-900">Micro-Units of the Trust</h3>
//                      </div>
//                      <p className="text-slate-600 leading-relaxed text-justify">
//                         The Trust's success is largely attributed to its micro-units, which replicate its activities in their respective regions, thereby benefiting the immediate community. These micro-units operate both nationally and internationally, promoting community service and economic independence.
//                      </p>
//                   </motion.div>

//                   {/* Affiliations */}
//                   <motion.div
//                      initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
//                      className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100"
//                   >
//                      <div className="flex items-center gap-3 mb-4">
//                         <Award className="w-6 h-6 text-[#ffc107]" />
//                         <h3 className="text-2xl font-bold text-gray-900">Affiliations</h3>
//                      </div>
//                      <p className="text-slate-600 mb-6">
//                         The Trust adheres to established statutory regulations and accreditation norms, including affiliations with:
//                      </p>
//                      <ul className="space-y-4">
//                         <li className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
//                            <div className="w-3 h-3 bg-[#a7150b] rounded-full" />
//                            <span className="font-bold text-slate-700">National Medical Commission (NMC)</span>
//                         </li>
//                         <li className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
//                            <div className="w-3 h-3 bg-[#ffc107] rounded-full" />
//                            <span className="font-bold text-slate-700">The Tamil Nadu Dr. M.G.R. Medical University</span>
//                         </li>
//                      </ul>
//                   </motion.div>

//                </div>
//             </div>
//          </section>

//          {/* ================= CONTACT INFO ================= */}
//          <section className="py-20 bg-[#a7150b] text-white">
//             <div className="container mx-auto px-4">
//                <div className="bg-black/20 rounded-[2.5rem] p-8 md:p-14 backdrop-blur-md border border-white/10">
//                   <div className="grid md:grid-cols-2 gap-12 items-center">

//                      <div>
//                         <h3 className="text-2xl md:text-3xl font-serif font-bold mb-8 leading-tight tracking-tight">
//                            Melmaruvathur Adhiparasakthi Institute of Medical Sciences and Research
//                         </h3>

//                         <div className="space-y-6">
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
//                               <div className="flex flex-col gap-1">
//                                  <a href="mailto:admissions@mapims.org" className="text-white/90 hover:text-[#ffc107] transition-colors">admissions@mapims.org</a>
//                                  <a href="mailto:info@mapims.org" className="text-white/90 hover:text-[#ffc107] transition-colors">info@mapims.org</a>
//                               </div>
//                            </div>
//                         </div>
//                      </div>

//                      {/* IMAGE: MAPIMS BUILDING */}
//                      <div className="relative h-64 md:h-80 w-full bg-black/20 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
//                         <Image
//                            src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766143744/a12_nbqg5x.webp"
//                            alt="MAPIMS Building"
//                            fill
//                            className="object-cover"
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
   Quote,
   Calendar,
   Heart,
   Bird
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
         <section className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center bg-[#a7150b]">
            {/* <div className="absolute inset-0 z-0">
               <Image
                  src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766143744/a12_nbqg5x.webp"
                  alt="Trust Temple Background"
                  fill
                  className="object-cover opacity-30 grayscale mix-blend-multiply"
                  priority
               />
            </div> */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#a7150b] via-[#a7150b]/40 to-transparent z-10" />

            <div className="relative z-20 container mx-auto px-4 text-center">
               <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                  <motion.div variants={fadeInUp} className="inline-block mb-4">
                     <span className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#ffc107] text-xs font-bold tracking-widest uppercase">
                        Service to Humanity
                     </span>
                  </motion.div>
                  <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 tracking-tight">
                     About The Trust
                  </motion.h1>
                  <motion.p variants={fadeInUp} className="text-yellow-50 max-w-4xl mx-auto text-lg leading-relaxed font-light">
                     Adhiparasakthi Siddhar Peeda Women's Charitable Trust (ASPWCT)
                  </motion.p>
               </motion.div>
            </div>
         </section>


         {/* ================= INTRODUCTION (THE TRUST) ================= */}
         <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
               <div className="grid lg:grid-cols-2 gap-12 items-start">
                  {/* Text Content */}
                  <motion.div
                     initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
                     className="space-y-6 text-slate-600 text-lg leading-relaxed text-justify"
                  >
                     <div className="flex items-center gap-3 mb-2">
                        <Landmark className="w-8 h-8 text-[#a7150b]" />
                        <h2 className="text-3xl font-serif font-bold text-gray-900 tracking-tight">The Foundation</h2>
                     </div>
                     <p>
                        The Adhiparasakthi Siddhar Peeda Women's Charitable Trust, founded in <strong>1988</strong> by <strong>Arulthiru Bangaru Adigalar</strong>, is registered under section 12AB of the Income Tax Act, 1961. The trust believes in inclusive growth, and to bring inclusiveness, education is fundamental.
                     </p>
                     <p>
                        The trust found that most students from rural schools do not pursue higher education after they complete their school for lack quality institutions near their residences, particularly the girl students.
                     </p>
                     <p>
                        To bridge this gap, two educational institutions were set up at different points of time and these institutions are now serving as role models in their respective fields of education. Every care is taken by the trust to finance these institutions with the latest infrastructure on par with any of the institutions situated in city.
                     </p>
                  </motion.div>

                  {/* IMAGE */}
                  <motion.div
                     initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                     className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-[#ffc107]"
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
                  {/* ================= PRESIDENT'S MESSAGE ================= */}
         <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-5xl mx-auto">
                    <div className="bg-yellow-50 border-l-4 border-[#ffc107] p-8 md:p-12 rounded-r-3xl relative">
                        <Quote className="absolute top-6 right-6 text-[#ffc107]/20 w-24 h-24" />
                        <h2 className="text-2xl font-serif font-bold text-[#a7150b] mb-4">President's Message</h2>
                        <div className="space-y-4 text-slate-700 text-lg leading-relaxed italic">
                            <p>
                                "It is with great grief I am here to continue my services to all the charitable organisations and educational institutions founded by His Holiness Arulthiru Bangaru Adigalar. Though 'AMMA' chose to renounce this body, he is still with us through his blessings which manifests itself and guides in our daily life."
                            </p>
                            <p>
                                "During the year both the educational institutions run by the trust have consolidated their positions in their respective field. Adhiparasakthi College of Engineering has strong focus on Outcome Based Education in all programmes... The undergraduate and post graduate programmes offered by the college cater to the industrial needs of the engineering fraternity."
                            </p>
                            <p>
                                "The Academic Audit Committee of the institution verifies academic activities to satisfy the requirements of the academia and industry. New courses are introduced to fulfil the cutting-edge technology and sustainable student development."
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
         </section>
         {/* ================= CHAIRPERSON'S MESSAGE ================= */}
         <section className="py-24 bg-[#ffc107] text-[#1a1a1a] relative overflow-hidden">
             <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
                 <Quote size={200} />
             </div>
             <div className="container mx-auto px-4 relative z-10">
                 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-5xl mx-auto">
                     <div className="text-center mb-10">
                         <span className="inline-block px-4 py-2 bg-black/10 text-black rounded-full text-xs font-bold tracking-widest uppercase mb-4">
                             Leadership Message
                         </span>
                         <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Chairperson's Message</h2>
                     </div>

                     <div className="bg-white/90 backdrop-blur-sm p-10 md:p-14 rounded-[2.5rem] shadow-xl text-lg leading-relaxed text-slate-800">
                         <div className="italic mb-8 space-y-6">
                            <p>
                                "It is with great grief I am here to continue my services to all the charitable organisations and educational institutions founded by His Holiness Arulthiru Bangaru Adigalar. Though 'AMMA' chose to renounce this body, He is still with us through his blessings which manifests itself and guides in our daily life."
                            </p>
                            <p>
                                "Countless leaders in all walks of life have condoled the unfortunate demise of AMMA. Numerous followers of him are subjected to inconsolable sorrow and are yet to come to terms of their daily routine. May AMMA guide them all to regain their strength and composure to fulfil the purpose of their life."
                            </p>
                         </div>

                         <div className="space-y-6 not-italic border-t border-slate-200 pt-8">
                             <div>
                                 <h4 className="font-bold text-xl mb-2 text-[#a7150b]">Festival Updates</h4>
                                 <p className="text-sm">
                                     The Sakthi Maalai Irumudi festival at Melmaruvathur (Adhiparasakthi Siddhar Peedam) was held from <strong>December 1, 2023, to January 24, 2024</strong>. Thai Poosam was celebrated on January 25, 2024. As the Irumudi festival had to start within a short period of "AMMA's" departure, this was the first year carried out without His physical presence, yet devotees participated in large numbers.
                                 </p>
                             </div>
                             
                             <div className="grid md:grid-cols-2 gap-6">
                                 <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
                                    <h4 className="font-bold text-lg mb-2 text-[#a7150b]">Land Gifts</h4>
                                    <p className="text-sm">
                                        During the year the trust received land as gift from devotees situated in <strong>Natrampalli</strong> (Tirupattur Taluk) and <strong>Mammalla Nagar</strong> (Kanchipuram District).
                                    </p>
                                 </div>
                                 <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
                                    <h4 className="font-bold text-lg mb-2 text-[#a7150b]">Corpus Funds</h4>
                                    <p className="text-sm">
                                        The trust credits the corpus funds for the land received as gifts. Interest generated will be utilized to meet the expenditure for which the corpus fund was created.
                                    </p>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </motion.div>
             </div>
         </section>

         {/* ================= SPIRITUAL MOVEMENT ================= */}
         <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-1 gap-16">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="order-2 lg:order-1">
                        <span className="text-[#a7150b] font-bold tracking-widest uppercase text-xs mb-2 block justify-center text-center">Divine Guidance</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6 tracking-tight justify-center text-center">
                            Melmaruvathur Adhiparasakthi <br/>Spiritual Movement
                        </h2>
                        <div className="space-y-6 text-slate-600 text-lg leading-relaxed text-justify">
                            <p>
                                The Melmaruvathur Adhiparasakthi Spiritual Movement is not just a religious organization but a holistic movement fostering spirituality, education, healthcare, and social welfare. Under the divine guidance of Amma, it continues to inspire millions to lead a life of devotion, compassion, and service to humanity.
                            </p>
                            <p>
                                <strong>Origins:</strong> The spiritual movement traces its roots to the Adhiparasakthi Siddhar Peedam, a sacred temple in Melmaruvathur where the Divine Mother is believed to have manifested through Bangaru Adigalar.
                            </p>
                            
                            <div className="bg-[#a7150b]/5 p-6 rounded-2xl border border-[#a7150b]/10 mt-6">
                                <h3 className="font-bold text-[#a7150b] mb-3 flex items-center gap-2">
                                    <Calendar className="w-5 h-5"/> Key Spiritual Festivals
                                </h3>
                                <ul className="space-y-4 text-sm">
                                    <li className="flex gap-3">
                                        <div className="w-1.5 h-1.5 bg-[#ffc107] rounded-full mt-2 shrink-0"/>
                                        <span>
                                            <strong>Irumudi Festival:</strong> A significant event where devotees wear 'Sakthi Malai', fast, and perform penance before traveling to the Siddhar Peedam.
                                        </span>
                                    </li>
                                    <li className="flex gap-3">
                                        <div className="w-1.5 h-1.5 bg-[#ffc107] rounded-full mt-2 shrink-0"/>
                                        <span>
                                            <strong>Thai Poosam & Others:</strong> Celebrated grandly along with Chithra Pournami, Adi Pooram, and Navaratri.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                    
                    {/* <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="order-1 lg:order-2 relative h-[600px] rounded-[2rem] overflow-hidden shadow-2xl">
                         <Image 
                            src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766092337/2911191530526914-150x150_a5fseg.jpg" 
                            alt="Spiritual Movement" 
                            fill 
                            className="object-contain"
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-10">
                             <p className="text-white italic text-lg font-serif">"Atheism should be destroyed and Spirituality should spread; The God consciousness and faith should prevail strongly." ~ Amma's Oracle</p>
                         </div>
                    </motion.div> */}
                </div>
            </div>
         </section>

         {/* ================= SOCIAL WELFARE & ENVIRONMENT ================= */}
         <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
                     <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">Social & Environmental Initiatives</h2>
                     <div className="w-24 h-1.5 bg-[#a7150b] mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                     {/* Environmental */}
                     <Card className="p-8 border-none shadow-lg bg-white rounded-3xl hover:-translate-y-2 transition-transform">
                         <div className="flex items-center gap-4 mb-6">
                             <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-green-700">
                                 <Sprout className="w-8 h-8"/>
                             </div>
                             <h3 className="text-xl font-bold">Environmental Initiatives</h3>
                         </div>
                         <div className="space-y-4 text-slate-600 text-sm leading-relaxed text-justify">
                            <p>
                                <strong>Tree Plantation:</strong> The trust promotes eco-friendly practices and conducts mass tree-planting events in partnership with educational institutions at regular intervals.
                            </p>
                            <p>
                                <strong>Water Conservation:</strong> Efforts are made to preserve water resources through rainwater harvesting. Excess rain water in nearby villages is drained into the Melmaruvathur lake.
                            </p>
                            <p className="flex items-start gap-2 bg-green-50 p-3 rounded-lg border border-green-100">
                                <Bird className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                                <span>
                                    <strong>Increased Avian Activity:</strong> Following cleaning initiatives, Melmaruvathur Lake has observed a rise in bird populations, including migratory species like egrets, herons, and kingfishers.
                                </span>
                            </p>
                         </div>
                     </Card>

                     {/* Annadanam */}
                     <Card className="p-8 border-none shadow-lg bg-white rounded-3xl hover:-translate-y-2 transition-transform">
                         <div className="flex items-center gap-4 mb-6">
                             <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center text-orange-700">
                                 <Heart className="w-8 h-8"/>
                             </div>
                             <h3 className="text-xl font-bold">Annadanam (Free Food)</h3>
                         </div>
                         <div className="space-y-4 text-slate-600 text-sm leading-relaxed text-justify">
                             <p className="italic text-[#a7150b]">
                                 "All the hungry stomachs should be fed and their life expanded. Provide food, clothe and shelter to all the poor and needy." ~ Amma's Oracle
                             </p>
                             <p>
                                 Free food is served to all devotees visiting the Siddhar Peedam and during large festivals.
                             </p>
                             <div className="bg-orange-50 p-3 rounded-lg border border-orange-100 font-bold text-center text-orange-800">
                                 Melmaruvathur Siddhar Peedam: A Hunger Free Zone
                             </div>
                         </div>
                     </Card>
                </div>

                {/* Healthcare - Full Width */}
                <div className="grid md:grid-cols-1">
                     <Card className="p-8 border-none shadow-lg bg-white rounded-3xl hover:-translate-y-2 transition-transform">
                         <div className="flex items-center gap-4 mb-6">
                             <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-700">
                                 <Stethoscope className="w-8 h-8"/>
                             </div>
                             <h3 className="text-xl font-bold">Healthcare Services</h3>
                         </div>
                         <p className="text-slate-600 text-sm leading-relaxed mb-4">
                             The trust significantly contributed to <strong>MAPIMS</strong>, a 1000+ bed super-specialty tertiary care hospital known for cost leadership and ethical treatment.
                         </p>
                         <div className="grid md:grid-cols-2 gap-4">
                            <ul className="space-y-2 text-sm text-slate-600">
                                <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2"/><span><strong>Free Services:</strong> Free food for patients, free medicines, free diabetic care, and free cataract surgeries.</span></li>
                                <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2"/><span><strong>Specialties:</strong> General Medicine, Surgery, Nephrology (Dialysis), Ophthalmology, and more.</span></li>
                            </ul>
                            <ul className="space-y-2 text-sm text-slate-600">
                                <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2"/><span><strong>Medical Camps:</strong> Conducted yearly since 1991. Includes Eye, Dental, Skin, ENT, Pediatrics, and Blood Donation camps.</span></li>
                                <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2"/><span><strong>Alternative Medicine:</strong> Ayurveda and Siddha Medicine are promoted alongside modern medicine.</span></li>
                            </ul>
                         </div>
                     </Card>
                </div>
            </div>
         </section>

         {/* ================= MICRO UNITS & AFFILIATIONS ================= */}
         <section className="py-24 bg-slate-50 border-t border-slate-200">
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
                  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                     <Card className="p-8 h-full border-none shadow-lg bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 rounded-3xl">
                        <div className="flex items-start gap-4 mb-4">
                           <div className="p-4 bg-[#a7150b]/10 rounded-2xl text-[#a7150b]"><Stethoscope className="w-8 h-8" /></div>
                           <div>
                              <h3 className="text-xl font-bold text-gray-900">Healthcare</h3>
                              <p className="text-slate-600 mt-2 leading-relaxed text-justify">Establishment of a 1000-bed multispecialty hospital offering free medical treatment, including a free hospital established in 1986.</p>
                           </div>
                        </div>
                     </Card>
                  </motion.div>
                  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.1 }}>
                     <Card className="p-8 h-full border-none shadow-lg bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 rounded-3xl">
                        <div className="flex items-start gap-4 mb-4">
                           <div className="p-4 bg-[#ffc107]/20 rounded-2xl text-[#b45309]"><GraduationCap className="w-8 h-8" /></div>
                           <div>
                              <h3 className="text-xl font-bold text-gray-900">Education</h3>
                              <p className="text-slate-600 mt-2 leading-relaxed text-justify">From pre-primary schools to higher education colleges, ASPWCT Trust provides sponsored education to the poor and has established premier educational institutions.</p>
                           </div>
                        </div>
                     </Card>
                  </motion.div>
                  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.2 }}>
                     <Card className="p-8 h-full border-none shadow-lg bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 rounded-3xl">
                        <div className="flex items-start gap-4 mb-4">
                           <div className="p-4 bg-green-100 rounded-2xl text-green-700"><Sprout className="w-8 h-8" /></div>
                           <div>
                              <h3 className="text-xl font-bold text-gray-900">Community Welfare</h3>
                              <p className="text-slate-600 mt-2 leading-relaxed text-justify">Initiatives include the installation of water recycling plants, river bund strengthening, tree planting, vocational training for differently-abled persons, and distribution of professional implements to the poor.</p>
                           </div>
                        </div>
                     </Card>
                  </motion.div>
                  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.3 }}>
                     <Card className="p-8 h-full border-none shadow-lg bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 rounded-3xl">
                        <div className="flex items-start gap-4 mb-4">
                           <div className="p-4 bg-pink-100 rounded-2xl text-pink-600"><Baby className="w-8 h-8" /></div>
                           <div>
                              <h3 className="text-xl font-bold text-gray-900">Women Empowerment</h3>
                              <p className="text-slate-600 mt-2 leading-relaxed text-justify">Most of the Trust’s institutions are led by women, and many employees across the Trust’s institutions are women, helping to overcome societal stigmas and empower women.</p>
                           </div>
                        </div>
                     </Card>
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