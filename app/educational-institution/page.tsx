// // // "use client"

// // // import { motion } from "framer-motion"
// // // import Image from "next/image"
// // // import Link from "next/link"
// // // import {
// // //   GraduationCap,
// // //   BookOpen,
// // //   Stethoscope,
// // //   Building2,
// // //   Phone,
// // //   Globe,
// // //   ArrowRight,
// // //   School,
// // //   Leaf,
// // //   HeartPulse,
// // //   Activity,
// // //   MapPin,
// // //   Mail,
// // //   Printer
// // // } from "lucide-react"
// // // import { Button } from "@/components/ui/button"
// // // import { Card } from "@/components/ui/card"

// // // // --- Animation Variants ---
// // // const fadeInUp = {
// // //   hidden: { opacity: 0, y: 30 },
// // //   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// // // }

// // // const staggerContainer = {
// // //   hidden: { opacity: 0 },
// // //   visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
// // // }

// // // // --- Data Exactly as Provided ---
// // // const institutions = [
// // //   {
// // //     category: "Medical",
// // //     name: "Melmaruvathur Adhiparasakthi Institute of Medical Sciences and Research",
// // //     address: ["Melmaruvathur,", "Kancheepuram District,", "Tamilnadu, India,", "Pin code – 603319."],
// // //     phone: "044-27528108",
// // //     email: "maphsmelmaruvathur@yahoo.com",
// // //     website: "www.adhiparasakthischools.com",
// // //     icon: Stethoscope,
// // //     color: "text-blue-600",
// // //     bg: "bg-blue-50"
// // //   },
// // //   {
// // //     category: "Dental",
// // //     name: "Adhiparasakthi Dental College and Hospital",
// // //     address: ["Melmaruvathur,", "Kancheepuram District,", "Tamilnadu, India,", "Pin code – 603319."],
// // //     phone: "044 -27528082, 27528083 & 27528084",
// // //     fax: "044- 27528081",
// // //     email: "apdcollege@gmail.com",
// // //     website: "www.apdch.com",
// // //     icon: HeartPulse,
// // //     color: "text-red-600",
// // //     bg: "bg-red-50"
// // //   },
// // //   {
// // //     category: "Nursing",
// // //     name: "Adhiparasakthi College of Nursing",
// // //     address: ["Melmaruvathur,", "Kancheepuram District,", "Tamilnadu, India,", "Pin code – 603319."],
// // //     phone: "044-27529089 & 27529581",
// // //     fax: "044-27529581",
// // //     email: "apcon_mel@yahoo.com",
// // //     website: "www.apcon.org",
// // //     icon: HeartPulse,
// // //     color: "text-pink-600",
// // //     bg: "bg-pink-50"
// // //   },
// // //   {
// // //     category: "Physiotherapy",
// // //     name: "Adhiparasakthi College of Physiotherapy",
// // //     address: ["Melmaruvathur,", "Kancheepuram District,", "Tamilnadu, India,", "Pin code – 603319."],
// // //     phone: "044- 27529257 & 27529378",
// // //     fax: "044- 27529378",
// // //     email: "apcopt1994@yahoo.co.in",
// // //     website: "www.apcopt.org",
// // //     icon: Activity,
// // //     color: "text-cyan-600",
// // //     bg: "bg-cyan-50"
// // //   },
// // //   {
// // //     category: "Engineering",
// // //     name: "Adhiparasakthi Engineering College",
// // //     address: ["Melmaruvathur,", "Kancheepuram District,", "Tamilnadu, India,", "Pin code – 603319."],
// // //     phone: "044-27529247, 27529502, 27529094",
// // //     fax: "044- 27529094",
// // //     email: "apec1984@rediffmail.com",
// // //     website: "www.adhiparasakthi.in",
// // //     icon: Building2,
// // //     color: "text-orange-600",
// // //     bg: "bg-orange-50"
// // //   },
// // //   {
// // //     category: "Polytechnic",
// // //     name: "Adhiparasakthi Polytechnic College",
// // //     address: ["Melmaruvathur,", "Kancheepuram District,", "Tamilnadu, India,", "Pin code – 603319."],
// // //     phone: "044-27529234, 27529281",
// // //     fax: "044- 27529955",
// // //     email: "principal_aptcmmr@yahoo.co.in",
// // //     website: "www.aptcmmr.com",
// // //     icon: Building2,
// // //     color: "text-indigo-600",
// // //     bg: "bg-indigo-50"
// // //   },
// // //   {
// // //     category: "Arts & Science",
// // //     name: "Adhiparasakthi College Of Arts And Science",
// // //     address: ["G.B. Nagar , Kalavai,", "Vellore District,", "Tamilnadu, India,", "Pin code – 632506."],
// // //     phone: "04173- 242226",
// // //     fax: "04173- 242646",
// // //     email: "principal@apcasgbn.com",
// // //     website: "www.apcasgbn.com",
// // //     icon: BookOpen,
// // //     color: "text-purple-600",
// // //     bg: "bg-purple-50"
// // //   },
// // //   {
// // //     category: "Engineering",
// // //     name: "Adhiparasakthi College of Engineering",
// // //     address: ["G.B. Nagar , Kalavai,", "Vellore District,", "Tamilnadu, India,", "Pin code – 632506."],
// // //     phone: "04173- 242584, 242089 & 242089",
// // //     fax: "04173 – 242066",
// // //     email: "apce501@gmail.com",
// // //     website: "www.apcegbn.com",
// // //     icon: Building2,
// // //     color: "text-orange-600",
// // //     bg: "bg-orange-50"
// // //   },
// // //   {
// // //     category: "Agriculture",
// // //     name: "Adhiparasakthi Agricultural College",
// // //     address: ["G.B. Nagar , Kalavai,", "Vellore District,", "Tamilnadu, India,", "Pin code – 632506."],
// // //     phone: "04173 – 295080",
// // //     fax: "04173 – 242066",
// // //     email: "deanapac@tnau.ac.in",
// // //     website: "www.apac.ac.in",
// // //     icon: Leaf,
// // //     color: "text-green-600",
// // //     bg: "bg-green-50"
// // //   },
// // //   {
// // //     category: "School",
// // //     name: "Adhiparasakthi Matriculation Higher Secondary School",
// // //     address: ["Melmaruvathur,", "Kancheepuram District,", "Tamilnadu, India,", "Pin code – 603319."],
// // //     phone: "044-27529208",
// // //     email: "apmhsschool_mmr@yahoo.co.in",
// // //     website: "www.adhiparasakthischools.com",
// // //     icon: School,
// // //     color: "text-yellow-600",
// // //     bg: "bg-yellow-50"
// // //   },
// // //   {
// // //     category: "School",
// // //     name: "Melmaruvathur Adhiparasakthi High School",
// // //     address: ["Melmaruvathur,", "Kancheepuram District,", "Tamilnadu, India,", "Pin code – 603319."],
// // //     phone: "044-27528108",
// // //     email: "maphsmelmaruvathur@yahoo.com",
// // //     website: "www.adhiparasakthischools.com",
// // //     icon: School,
// // //     color: "text-yellow-600",
// // //     bg: "bg-yellow-50"
// // //   },
// // //   {
// // //     category: "School",
// // //     name: "G B Public School",
// // //     address: ["Melmaruvathur,", "Kancheepuram District,", "Tamilnadu, India,", "Pin code – 603319."],
// // //     phone: "044-27528350",
// // //     email: "gbpubsch.mmr@gmail.com",
// // //     website: "www.adhiparasakthischools.com",
// // //     icon: School,
// // //     color: "text-yellow-600",
// // //     bg: "bg-yellow-50"
// // //   },
// // //   {
// // //     category: "Special Home",
// // //     name: "Adhiparasakthi Annai Illam",
// // //     address: ["Melmaruvathur,", "Kancheepuram District,", "Tamilnadu, India,", "Pin code – 603319."],
// // //     phone: "044-27529299",
// // //     email: "annaiillamASPWCTtrust@gmail.com",
// // //     website: "www.apannaiillam.in",
// // //     icon: HeartPulse,
// // //     color: "text-[#a7150b]",
// // //     bg: "bg-red-100"
// // //   }
// // // ]

// // // export default function EducationalInstitutionPage() {
// // //   return (
// // //     <main className="bg-background overflow-x-hidden font-sans text-foreground selection:bg-[#ffc107] selection:text-black">

// // //       {/* ================= HERO SECTION ================= */}
// // //       <section className="relative h-[50vh] w-full overflow-hidden flex items-center justify-center bg-[#1a1a1a]">
// // //         <div className="absolute inset-0 z-0 opacity-40">
// // //            <Image
// // //             src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2670&auto=format&fit=crop"
// // //             alt="Education Background"
// // //             fill
// // //             className="object-cover"
// // //             priority
// // //           />
// // //            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/60 to-transparent" />
// // //         </div>

// // //         <div className="relative z-10 container mx-auto px-4 text-center">
// // //           <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
// // //             <motion.div variants={fadeInUp} className="inline-block mb-4">
// // //                <span className="px-4 py-2 rounded-full border border-[#ffc107]/30 bg-[#ffc107]/10 text-[#ffc107] text-sm font-bold tracking-widest uppercase">
// // //                  ASPWCT Trust
// // //                </span>
// // //             </motion.div>
// // //             <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
// // //                Educational <span className="text-[#ffc107]">Institutions</span>
// // //             </motion.h1>
// // //           </motion.div>
// // //         </div>
// // //       </section>

// // //       {/* ================= DETAILED INTRO TEXT ================= */}
// // //       <section className="py-20 bg-stone-50">
// // //         <div className="container mx-auto px-4">
// // //            <motion.div 
// // //              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
// // //              className="max-w-5xl mx-auto space-y-6 text-slate-700 leading-relaxed text-lg text-justify"
// // //            >
// // //             <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold text-black mb-6 text-center">
// // //                Educational <span className="text-[#a7150b]">Institutions</span>
// // //             </motion.h1>

// // //               <p>
// // //                 From nursery to professional qualification, the Adhiparasakthi Trust runs almost the entire range of educational institutions that will help any student complete their entire education.
// // //               </p>
// // //               <p>
// // //                 The Trust runs state board, matriculation and CBSE schools. It also has a school for the special children, called Annai Illam. Apart from academic training, children also have holistic development as cultural and sports activities are encouraged. Community service also has special focus in the schools, and right from an early age, they are made aware of the need to contribute to the overall development of the society.
// // //               </p>
// // //               <p>
// // //                 The Trusts also run Adhiparasakthi polytechnic college, college of arts and science, colleges of engineering teacher’s training institute and college, agricultural college and a medical college. Nursing and physiotherapy colleges, dental college, Pharmacy College are among the associated institutions. Even in the schools, certain principles and reinforced-the primary being identifying fellow humans by the colour of the blood rather than through artificially imposed social differences.
// // //               </p>
// // //               <p>
// // //                 State of the art facilities, good faculty and exposure make these institutions on par with other renowned institutions. They enable the poor and the talented to complete as equals and bring a change in their families, which are many times from the rural milieu with farming as the background. Some of the students are first generation scholars, because of which the effort from the faculty is that much more to bring them up to speed.
// // //               </p>
// // //               <p>
// // //                 Between a 1000-acre campus in kalavai and the campus in Melmaruvathur, the entire spectrum of education from kindergarten to higher education needs of the people in and around the two districts of vellore and kanchipuram are taken care of.
// // //               </p>

// // //               <div className="w-24 h-1 bg-[#ffc107] mx-auto rounded-full mt-8" />
// // //            </motion.div>
// // //         </div>
// // //       </section>

// // //       {/* ================= INSTITUTIONS GRID ================= */}
// // //       <section className="py-20 bg-white">
// // //         <div className="container mx-auto px-4">

// // //            <motion.div 
// // //              variants={staggerContainer}
// // //              initial="hidden"
// // //              whileInView="visible"
// // //              viewport={{ once: true }}
// // //              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
// // //            >
// // //               {institutions.map((item, idx) => (
// // //                  <motion.div key={idx} variants={fadeInUp} className="h-full">
// // //                     <Card className="h-full border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group bg-white flex flex-col">

// // //                        {/* Color Strip */}
// // //                        <div className={`h-2 w-full ${item.bg.replace("bg-", "bg-")}-500/30`} />

// // //                        <div className="p-6 flex-1 flex flex-col">
// // //                           {/* Header */}
// // //                           <div className="flex justify-between items-start mb-4">
// // //                              <div className={`p-3 rounded-xl ${item.bg} ${item.color}`}>
// // //                                 <item.icon className="w-8 h-8" />
// // //                              </div>
// // //                              <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider ${item.bg} ${item.color}`}>
// // //                                 {item.category}
// // //                              </span>
// // //                           </div>

// // //                           {/* Name */}
// // //                           <h3 className="text-lg font-bold text-[#1a1a1a] mb-6 group-hover:text-[#a7150b] transition-colors leading-tight min-h-[3.5rem]">
// // //                              {item.name}
// // //                           </h3>

// // //                           {/* Address */}
// // //                           <div className="mb-6 pl-0">
// // //                              <div className="flex items-start gap-3 text-slate-600 text-sm">
// // //                                 <MapPin className="w-4 h-4 shrink-0 mt-1 text-[#a7150b]" />
// // //                                 <div className="space-y-0.5">
// // //                                    {item.address.map((line, i) => (
// // //                                      <p key={i}>{line}</p>
// // //                                    ))}
// // //                                 </div>
// // //                              </div>
// // //                           </div>

// // //                           {/* Contact Details */}
// // //                           <div className="space-y-3 mt-auto pt-4 border-t border-slate-100">
// // //                              {item.phone && (
// // //                                <div className="flex items-start gap-3 text-slate-600 text-sm">
// // //                                   <Phone className="w-4 h-4 shrink-0 mt-1 text-slate-400" />
// // //                                   <span className="break-words">{item.phone}</span>
// // //                                </div>
// // //                              )}
// // //                              {item.fax && (
// // //                                <div className="flex items-start gap-3 text-slate-600 text-sm">
// // //                                   <Printer className="w-4 h-4 shrink-0 mt-1 text-slate-400" />
// // //                                   <span className="break-words">{item.fax}</span>
// // //                                </div>
// // //                              )}
// // //                              {item.email && (
// // //                                <div className="flex items-start gap-3 text-slate-600 text-sm">
// // //                                   <Mail className="w-4 h-4 shrink-0 mt-1 text-slate-400" />
// // //                                   <span className="break-all">{item.email}</span>
// // //                                </div>
// // //                              )}
// // //                           </div>
// // //                        </div>
// // //                     </Card>
// // //                  </motion.div>
// // //               ))}
// // //            </motion.div>

// // //         </div>
// // //       </section>

// // //       {/* ================= CTA SECTION ================= */}
// // //       <section className="py-24 bg-[#a7150b] text-white">
// // //          <div className="container mx-auto px-4 text-center">
// // //             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
// // //                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Support Our Educational Mission</h2>
// // //                <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg">
// // //                   Your contributions help us provide quality education and infrastructure to students from all walks of life.
// // //                </p>
// // //                <Link href="/donate-us">
// // //                   <Button className="bg-[#ffc107] hover:bg-[#e6ac00] text-[#1a1a1a] font-bold text-lg px-8 py-6 rounded-full shadow-lg">
// // //                      Donate Now <ArrowRight className="w-5 h-5 ml-2" />
// // //                   </Button>
// // //                </Link>
// // //             </motion.div>
// // //          </div>
// // //       </section>

// // //     </main>
// // //   )
// // // }

// // "use client"

// // import { motion } from "framer-motion"
// // import Image from "next/image"
// // import Link from "next/link"
// // import {
// //    Stethoscope,
// //    Building2,
// //    Phone,
// //    ArrowRight,
// //    School,
// //    Leaf,
// //    HeartPulse,
// //    Activity,
// //    MapPin,
// //    Mail,
// //    Printer,
// //    BookOpen,
// //    Cpu,
// //    Microscope
// // } from "lucide-react"
// // import { Button } from "@/components/ui/button"
// // import { Card } from "@/components/ui/card"

// // // --- Animation Variants ---
// // const fadeInUp = {
// //    hidden: { opacity: 0, y: 30 },
// //    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// // }

// // const staggerContainer = {
// //    hidden: { opacity: 0 },
// //    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
// // }

// // // --- Data Updated from PDF ---
// // const institutions = [
// //    {
// //       category: "Medical",
// //       name: "Melmaruvathur Adhiparasakthi Institute of Medical Sciences and Research",
// //       description: "A 1000+ bed super-specialty tertiary care hospital known for cost leadership and ethical treatment. Includes comprehensive departments like General Medicine, Surgery, and a dedicated Dialysis center.",
// //       address: ["Melmaruvathur,", "Kancheepuram District,", "Tamilnadu, India,", "Pin code – 603319."],
// //       phone: "044-27528108",
// //       email: "maphsmelmaruvathur@yahoo.com",
// //       website: "www.adhiparasakthischools.com",
// //       icon: Stethoscope,
// //       color: "text-blue-600",
// //       bg: "bg-blue-50"
// //    },
// //    {
// //       category: "Engineering",
// //       name: "Adhiparasakthi Engineering College (APCE)",
// //       description: "Established in 2001. Enjoys the status of Scientific and Industrial Research Organization (SIRO), 2F status by UGC, and is an MSME Recognized Business Incubation Centre.",
// //       address: ["Melmaruvathur,", "Kancheepuram District,", "Tamilnadu, India,", "Pin code – 603319."],
// //       phone: "044-27529247, 27529502",
// //       fax: "044- 27529094",
// //       email: "apec1984@rediffmail.com",
// //       website: "www.adhiparasakthi.in",
// //       icon: Cpu,
// //       color: "text-orange-600",
// //       bg: "bg-orange-50"
// //    },
// //    {
// //       category: "Arts & Science",
// //       name: "Lakshmi Bangaru Arts & Science College (LBASC)",
// //       description: "Established in 2019. Affiliated with the University of Madras, offering courses in Computer Science (AI), Microbiology, and Commerce, focusing on spiritual values and ethical leadership.",
// //       address: ["G.B. Nagar , Kalavai,", "Vellore District,", "Tamilnadu, India,", "Pin code – 632506."],
// //       phone: "04173- 242226",
// //       fax: "04173- 242646",
// //       email: "principal@apcasgbn.com",
// //       website: "www.apcasgbn.com",
// //       icon: BookOpen,
// //       color: "text-purple-600",
// //       bg: "bg-purple-50"
// //    },
// //    {
// //       category: "Dental",
// //       name: "Adhiparasakthi Dental College and Hospital",
// //       description: "Providing top-tier dental education and oral healthcare services to the rural community.",
// //       address: ["Melmaruvathur,", "Kancheepuram District,", "Tamilnadu, India,", "Pin code – 603319."],
// //       phone: "044 -27528082, 27528083",
// //       fax: "044- 27528081",
// //       email: "apdcollege@gmail.com",
// //       website: "www.apdch.com",
// //       icon: HeartPulse,
// //       color: "text-red-600",
// //       bg: "bg-red-50"
// //    },
// //    {
// //       category: "Nursing",
// //       name: "Adhiparasakthi College of Nursing",
// //       description: "Dedicated to training compassionate nursing professionals with modern medical facilities.",
// //       address: ["Melmaruvathur,", "Kancheepuram District,", "Tamilnadu, India,", "Pin code – 603319."],
// //       phone: "044-27529089 & 27529581",
// //       fax: "044-27529581",
// //       email: "apcon_mel@yahoo.com",
// //       website: "www.apcon.org",
// //       icon: HeartPulse,
// //       color: "text-pink-600",
// //       bg: "bg-pink-50"
// //    },
// //    {
// //       category: "Physiotherapy",
// //       name: "Adhiparasakthi College of Physiotherapy",
// //       description: "State-of-the-art physiotherapy education combined with practical rehabilitation training.",
// //       address: ["Melmaruvathur,", "Kancheepuram District,", "Tamilnadu, India,", "Pin code – 603319."],
// //       phone: "044- 27529257 & 27529378",
// //       fax: "044- 27529378",
// //       email: "apcopt1994@yahoo.co.in",
// //       website: "www.apcopt.org",
// //       icon: Activity,
// //       color: "text-cyan-600",
// //       bg: "bg-cyan-50"
// //    },
// //    {
// //       category: "Polytechnic",
// //       name: "Adhiparasakthi Polytechnic College",
// //       description: "Offering diploma courses with a focus on vocational training and skill development.",
// //       address: ["Melmaruvathur,", "Kancheepuram District,", "Tamilnadu, India,", "Pin code – 603319."],
// //       phone: "044-27529234, 27529281",
// //       fax: "044- 27529955",
// //       email: "principal_aptcmmr@yahoo.co.in",
// //       website: "www.aptcmmr.com",
// //       icon: Building2,
// //       color: "text-indigo-600",
// //       bg: "bg-indigo-50"
// //    },
// //    {
// //       category: "Agriculture",
// //       name: "Adhiparasakthi Agricultural College",
// //       description: "Focusing on sustainable farming, hydroponics, and smart irrigation techniques.",
// //       address: ["G.B. Nagar , Kalavai,", "Vellore District,", "Tamilnadu, India,", "Pin code – 632506."],
// //       phone: "04173 – 295080",
// //       fax: "04173 – 242066",
// //       email: "deanapac@tnau.ac.in",
// //       website: "www.apac.ac.in",
// //       icon: Leaf,
// //       color: "text-green-600",
// //       bg: "bg-green-50"
// //    },
// //    {
// //       category: "School",
// //       name: "Adhiparasakthi Matriculation Higher Secondary School",
// //       description: "Providing holistic education from primary to higher secondary levels.",
// //       address: ["Melmaruvathur,", "Kancheepuram District,", "Tamilnadu, India,", "Pin code – 603319."],
// //       phone: "044-27529208",
// //       email: "apmhsschool_mmr@yahoo.co.in",
// //       website: "www.adhiparasakthischools.com",
// //       icon: School,
// //       color: "text-yellow-600",
// //       bg: "bg-yellow-50"
// //    },
// //    {
// //       category: "Special Home",
// //       name: "Adhiparasakthi Annai Illam",
// //       description: "A dedicated home and school for special children, focusing on their holistic development.",
// //       address: ["Melmaruvathur,", "Kancheepuram District,", "Tamilnadu, India,", "Pin code – 603319."],
// //       phone: "044-27529299",
// //       email: "annaiillamASPWCTtrust@gmail.com",
// //       website: "www.apannaiillam.in",
// //       icon: HeartPulse,
// //       color: "text-[#a7150b]",
// //       bg: "bg-red-100"
// //    }
// // ]

// // export default function EducationalInstitutionPage() {
// //    return (
// //       <main className="bg-background overflow-x-hidden font-sans text-foreground selection:bg-[#ffc107] selection:text-black">

// //          {/* ================= HERO SECTION ================= */}
// //          <section className="relative h-[50vh] w-full overflow-hidden flex items-center justify-center bg-[#1a1a1a]">
// //             <div className="absolute inset-0 z-0 opacity-40">
// //                <Image
// //                   src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2670&auto=format&fit=crop"
// //                   alt="Education Background"
// //                   fill
// //                   className="object-cover"
// //                   priority
// //                />
// //                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/60 to-transparent" />
// //             </div>

// //             <div className="relative z-10 container mx-auto px-4 text-center">
// //                <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
// //                   <motion.div variants={fadeInUp} className="inline-block mb-4">
// //                      <span className="px-4 py-2 rounded-full border border-[#ffc107]/30 bg-[#ffc107]/10 text-[#ffc107] text-sm font-bold tracking-widest uppercase">
// //                         ASPWCT Trust
// //                      </span>
// //                   </motion.div>
// //                   <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
// //                      Educational <span className="text-[#ffc107]">Institutions</span>
// //                   </motion.h1>
// //                </motion.div>
// //             </div>
// //          </section>

// //          {/* ================= DETAILED INTRO TEXT ================= */}
// //          <section className="py-20 bg-stone-50">
// //             <div className="container mx-auto px-4">
// //                <motion.div
// //                   initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
// //                   className="max-w-5xl mx-auto space-y-6 text-slate-700 leading-relaxed text-lg text-justify"
// //                >
// //                   <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold text-black mb-6 text-center">
// //                      Educational <span className="text-[#a7150b]">Excellence</span>
// //                   </motion.h1>

// //                   <p>
// //                      The Adhiparasakthi Siddhar Peeda Women's Charitable Trust (ASPWCT), founded in 1988, believes in inclusive growth. To bring inclusiveness, education is fundamental. The trust found that many students from rural schools do not pursue higher education due to a lack of quality institutions near their residences, particularly girl students.
// //                   </p>
// //                   <p>
// //                      To bridge this gap, the Trust runs a spectrum of institutions ranging from primary schools to professional colleges. These include state board, matriculation, and CBSE schools, as well as a special home for children called Annai Illam.
// //                   </p>
// //                   <p>
// //                      The Trust manages Adhiparasakthi Polytechnic College, College of Arts and Science, Engineering Colleges, Teacher Training Institutes, Agricultural College, and a Medical College. These institutions are equipped with the latest infrastructure including labs, sporting grounds, and workshops to ensure students from rural backgrounds can compete as equals[cite: 6, 7].
// //                   </p>
// //                   <p>
// //                      Between the campus in Kalavai and Melmaruvathur, the entire educational needs of the people in the Vellore and Kanchipuram districts are being met with a focus on character inculcation and technical rejuvenation[cite: 12].
// //                   </p>

// //                   <div className="w-24 h-1 bg-[#ffc107] mx-auto rounded-full mt-8" />
// //                </motion.div>
// //             </div>
// //          </section>

// //          {/* ================= SPOTLIGHT INSTITUTIONS (FROM PDF) ================= */}
// //          <section className="py-16 bg-white border-b border-stone-100">
// //             <div className="container mx-auto px-4">
// //                <div className="text-center mb-12">
// //                   <span className="text-[#a7150b] font-bold tracking-widest uppercase text-sm">Centers of Excellence</span>
// //                   <h2 className="text-3xl font-serif font-bold text-[#1a1a1a]">Featured Institutions</h2>
// //                </div>

// //                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
// //                   {/* APCE SPOTLIGHT */}
// //                   <Card className="p-8 border-t-4 border-[#ffc107] shadow-xl bg-stone-50">
// //                      <Cpu className="w-12 h-12 text-[#ffc107] mb-6" />
// //                      <h3 className="text-2xl font-bold mb-3">Adhiparasakthi College of Engineering (APCE)</h3>
// //                      <p className="text-slate-600 mb-4">Established in 2001. A Scientific and Industrial Research Organization (SIRO) recognized by DST.</p>
// //                      <ul className="space-y-2 text-sm text-slate-700">
// //                         <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#a7150b]" /> 2F Status by UGC</li>
// //                         <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#a7150b]" /> MSME Recognized Incubator</li>
// //                         <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#a7150b]" /> Collaboration with Robotics & CISCO</li>
// //                      </ul>
// //                   </Card>

// //                   {/* LBASC SPOTLIGHT */}
// //                   <Card className="p-8 border-t-4 border-[#a7150b] shadow-xl bg-stone-50">
// //                      <Microscope className="w-12 h-12 text-[#a7150b] mb-6" />
// //                      <h3 className="text-2xl font-bold mb-3">Lakshmi Bangaru Arts & Science College</h3>
// //                      <p className="text-slate-600 mb-4">Established in 2019. Affiliated with the University of Madras.</p>
// //                      <ul className="space-y-2 text-sm text-slate-700">
// //                         <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#ffc107]" /> Courses in AI, Biochemistry & Microbiology</li>
// //                         <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#ffc107]" /> One Crore Palm Seeds Plantation Project</li>
// //                         <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#ffc107]" /> Focus on Entrepreneurial Skills</li>
// //                      </ul>
// //                   </Card>
// //                </div>
// //             </div>
// //          </section>

// //          {/* ================= ALL INSTITUTIONS GRID ================= */}
// //          <section className="py-20 bg-stone-50">
// //             <div className="container mx-auto px-4">
// //                <motion.div
// //                   initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
// //                   className="mb-12"
// //                >
// //                   <h2 className="text-3xl font-serif font-bold text-[#1a1a1a]">All Institutions</h2>
// //                </motion.div>

// //                <motion.div
// //                   variants={staggerContainer}
// //                   initial="hidden"
// //                   whileInView="visible"
// //                   viewport={{ once: true }}
// //                   className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
// //                >
// //                   {institutions.map((item, idx) => (
// //                      <motion.div key={idx} variants={fadeInUp} className="h-full">
// //                         <Card className="h-full border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group bg-white flex flex-col">
// //                            {/* Color Strip */}
// //                            <div className={`h-2 w-full ${item.bg.replace("bg-", "bg-")}-500/30`} />

// //                            <div className="p-6 flex-1 flex flex-col">
// //                               {/* Header */}
// //                               <div className="flex justify-between items-start mb-4">
// //                                  <div className={`p-3 rounded-xl ${item.bg} ${item.color}`}>
// //                                     <item.icon className="w-8 h-8" />
// //                                  </div>
// //                                  <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider ${item.bg} ${item.color}`}>
// //                                     {item.category}
// //                                  </span>
// //                               </div>

// //                               {/* Name */}
// //                               <h3 className="text-lg font-bold text-[#1a1a1a] mb-2 group-hover:text-[#a7150b] transition-colors leading-tight min-h-[3rem]">
// //                                  {item.name}
// //                               </h3>

// //                               {/* Description (New) */}
// //                               <p className="text-sm text-slate-500 mb-4 line-clamp-3">
// //                                  {item.description}
// //                               </p>

// //                               {/* Address */}
// //                               <div className="mb-4 pl-0 mt-auto">
// //                                  <div className="flex items-start gap-3 text-slate-600 text-xs">
// //                                     <MapPin className="w-4 h-4 shrink-0 mt-1 text-[#a7150b]" />
// //                                     <div className="space-y-0.5">
// //                                        {item.address.map((line, i) => (
// //                                           <p key={i}>{line}</p>
// //                                        ))}
// //                                     </div>
// //                                  </div>
// //                               </div>

// //                               {/* Contact Details */}
// //                               <div className="space-y-2 pt-4 border-t border-slate-100">
// //                                  {item.phone && (
// //                                     <div className="flex items-start gap-3 text-slate-600 text-xs">
// //                                        <Phone className="w-4 h-4 shrink-0 mt-1 text-slate-400" />
// //                                        <span className="break-words">{item.phone}</span>
// //                                     </div>
// //                                  )}
// //                                  {item.email && (
// //                                     <div className="flex items-start gap-3 text-slate-600 text-xs">
// //                                        <Mail className="w-4 h-4 shrink-0 mt-1 text-slate-400" />
// //                                        <span className="break-all">{item.email}</span>
// //                                     </div>
// //                                  )}
// //                               </div>
// //                            </div>
// //                         </Card>
// //                      </motion.div>
// //                   ))}
// //                </motion.div>

// //             </div>
// //          </section>

// //          {/* ================= CTA SECTION ================= */}
// //          <section className="py-24 bg-[#a7150b] text-white">
// //             <div className="container mx-auto px-4 text-center">
// //                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
// //                   <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Support Our Educational Mission</h2>
// //                   <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg">
// //                      Your contributions help us provide quality education and infrastructure to students from all walks of life.
// //                   </p>
// //                   <Link href="/donate-us">
// //                      <Button className="bg-[#ffc107] hover:bg-[#e6ac00] text-[#1a1a1a] font-bold text-lg px-8 py-6 rounded-full shadow-lg">
// //                         Donate Now <ArrowRight className="w-5 h-5 ml-2" />
// //                      </Button>
// //                   </Link>
// //                </motion.div>
// //             </div>
// //          </section>

// //       </main>
// //    )
// // }

// "use client"

// import { motion } from "framer-motion"
// import Image from "next/image"
// import Link from "next/link"
// import {
//    Stethoscope,
//    Building2,
//    Phone,
//    ArrowRight,
//    School,
//    Leaf,
//    HeartPulse,
//    Activity,
//    MapPin,
//    Mail,
//    BookOpen,
//    Cpu,
//    Microscope
// } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card } from "@/components/ui/card"

// // --- Animation Variants ---
// const fadeInUp = {
//    hidden: { opacity: 0, y: 30 },
//    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// }

// const staggerContainer = {
//    hidden: { opacity: 0 },
//    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
// }

// // --- Data Updated ---
// const institutions = [
//    {
//       category: "Medical",
//       name: "Melmaruvathur Adhiparasakthi Institute of Medical Sciences and Research",
//       description: "A 1000+ bed super-specialty tertiary care hospital known for cost leadership and ethical treatment. Includes comprehensive departments like General Medicine, Surgery, and a dedicated Dialysis center.",
//       address: ["Melmaruvathur,", "Kancheepuram District,", "Tamilnadu, India,", "Pin code – 603319."],
//       phone: "044-27528108",
//       email: "maphsmelmaruvathur@yahoo.com",
//       website: "www.adhiparasakthischools.com",
//       icon: Stethoscope,
//       color: "text-blue-600",
//       bg: "bg-blue-50"
//    },
//    {
//       category: "Engineering",
//       name: "Adhiparasakthi Engineering College (APCE)",
//       description: "Established in 2001. Enjoys the status of Scientific and Industrial Research Organization (SIRO), 2F status by UGC, and is an MSME Recognized Business Incubation Centre.",
//       address: ["Melmaruvathur,", "Kancheepuram District,", "Tamilnadu, India,", "Pin code – 603319."],
//       phone: "044-27529247, 27529502",
//       fax: "044- 27529094",
//       email: "apec1984@rediffmail.com",
//       website: "www.adhiparasakthi.in",
//       icon: Cpu,
//       color: "text-orange-600",
//       bg: "bg-orange-50"
//    },
//    {
//       category: "Arts & Science",
//       name: "Lakshmi Bangaru Arts & Science College (LBASC)",
//       description: "Established in 2019. Affiliated with the University of Madras, offering courses in Computer Science (AI), Microbiology, and Commerce, focusing on spiritual values and ethical leadership.",
//       address: ["G.B. Nagar , Kalavai,", "Vellore District,", "Tamilnadu, India,", "Pin code – 632506."],
//       phone: "04173- 242226",
//       fax: "04173- 242646",
//       email: "principal@apcasgbn.com",
//       website: "www.apcasgbn.com",
//       icon: BookOpen,
//       color: "text-purple-600",
//       bg: "bg-purple-50"
//    },
//    {
//       category: "Dental",
//       name: "Adhiparasakthi Dental College and Hospital",
//       description: "Providing top-tier dental education and oral healthcare services to the rural community.",
//       address: ["Melmaruvathur,", "Kancheepuram District,", "Tamilnadu, India,", "Pin code – 603319."],
//       phone: "044 -27528082, 27528083",
//       fax: "044- 27528081",
//       email: "apdcollege@gmail.com",
//       website: "www.apdch.com",
//       icon: HeartPulse,
//       color: "text-red-600",
//       bg: "bg-red-50"
//    },
//    {
//       category: "Nursing",
//       name: "Adhiparasakthi College of Nursing",
//       description: "Dedicated to training compassionate nursing professionals with modern medical facilities.",
//       address: ["Melmaruvathur,", "Kancheepuram District,", "Tamilnadu, India,", "Pin code – 603319."],
//       phone: "044-27529089 & 27529581",
//       fax: "044-27529581",
//       email: "apcon_mel@yahoo.com",
//       website: "www.apcon.org",
//       icon: HeartPulse,
//       color: "text-pink-600",
//       bg: "bg-pink-50"
//    },
//    {
//       category: "Physiotherapy",
//       name: "Adhiparasakthi College of Physiotherapy",
//       description: "State-of-the-art physiotherapy education combined with practical rehabilitation training.",
//       address: ["Melmaruvathur,", "Kancheepuram District,", "Tamilnadu, India,", "Pin code – 603319."],
//       phone: "044- 27529257 & 27529378",
//       fax: "044- 27529378",
//       email: "apcopt1994@yahoo.co.in",
//       website: "www.apcopt.org",
//       icon: Activity,
//       color: "text-cyan-600",
//       bg: "bg-cyan-50"
//    },
//    {
//       category: "Polytechnic",
//       name: "Adhiparasakthi Polytechnic College",
//       description: "Offering diploma courses with a focus on vocational training and skill development.",
//       address: ["Melmaruvathur,", "Kancheepuram District,", "Tamilnadu, India,", "Pin code – 603319."],
//       phone: "044-27529234, 27529281",
//       fax: "044- 27529955",
//       email: "principal_aptcmmr@yahoo.co.in",
//       website: "www.aptcmmr.com",
//       icon: Building2,
//       color: "text-indigo-600",
//       bg: "bg-indigo-50"
//    },
//    {
//       category: "Agriculture",
//       name: "Adhiparasakthi Agricultural College",
//       description: "Focusing on sustainable farming, hydroponics, and smart irrigation techniques.",
//       address: ["G.B. Nagar , Kalavai,", "Vellore District,", "Tamilnadu, India,", "Pin code – 632506."],
//       phone: "04173 – 295080",
//       fax: "04173 – 242066",
//       email: "deanapac@tnau.ac.in",
//       website: "www.apac.ac.in",
//       icon: Leaf,
//       color: "text-green-600",
//       bg: "bg-green-50"
//    },
//    {
//       category: "School",
//       name: "Adhiparasakthi Matriculation Higher Secondary School",
//       description: "Providing holistic education from primary to higher secondary levels.",
//       address: ["Melmaruvathur,", "Kancheepuram District,", "Tamilnadu, India,", "Pin code – 603319."],
//       phone: "044-27529208",
//       email: "apmhsschool_mmr@yahoo.co.in",
//       website: "www.adhiparasakthischools.com",
//       icon: School,
//       color: "text-yellow-600",
//       bg: "bg-yellow-50"
//    },
//    {
//       category: "Special Home",
//       name: "Adhiparasakthi Annai Illam",
//       description: "A dedicated home and school for special children, focusing on their holistic development.",
//       address: ["Melmaruvathur,", "Kancheepuram District,", "Tamilnadu, India,", "Pin code – 603319."],
//       phone: "044-27529299",
//       email: "annaiillamASPWCTtrust@gmail.com",
//       website: "www.apannaiillam.in",
//       icon: HeartPulse,
//       color: "text-[#a7150b]",
//       bg: "bg-red-100"
//    }
// ]

// export default function EducationalInstitutionPage() {
//    return (
//       <main className="bg-slate-50 overflow-x-hidden font-sans text-foreground selection:bg-[#ffc107] selection:text-black">

//          {/* ================= HERO SECTION ================= */}
//          <section className="relative h-[50vh] w-full overflow-hidden flex items-center justify-center bg-[#1a1a1a]">
//             <div className="absolute inset-0 z-0 opacity-40">
//                <Image
//                   src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2670&auto=format&fit=crop"
//                   alt="Education Background"
//                   fill
//                   className="object-cover"
//                   priority
//                />
//                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
//             </div>

//             <div className="relative z-10 container mx-auto px-4 text-center">
//                <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
//                   <motion.div variants={fadeInUp} className="inline-block mb-4">
//                      <span className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-md text-[#ffc107] text-xs font-bold tracking-widest uppercase border border-white/20">
//                         ASPWCT Trust
//                      </span>
//                   </motion.div>
//                   <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 tracking-tight">
//                      Educational <span className="text-[#ffc107]">Institutions</span>
//                   </motion.h1>
//                </motion.div>
//             </div>
//          </section>

//          {/* ================= DETAILED INTRO TEXT ================= */}
//          <section className="py-20 bg-white">
//             <div className="container mx-auto px-4">
//                <motion.div
//                   initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
//                   className="max-w-5xl mx-auto space-y-6 text-slate-600 leading-relaxed text-lg text-justify"
//                >
//                   <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8 text-center tracking-tight">
//                      Educational <span className="text-[#a7150b]">Excellence</span>
//                   </motion.h1>

//                   <p>
//                      The Adhiparasakthi Siddhar Peeda Women's Charitable Trust (ASPWCT), founded in 1988, believes in inclusive growth. To bring inclusiveness, education is fundamental. The trust found that many students from rural schools do not pursue higher education due to a lack of quality institutions near their residences, particularly girl students.
//                   </p>
//                   <p>
//                      To bridge this gap, the Trust runs a spectrum of institutions ranging from primary schools to professional colleges. These include state board, matriculation, and CBSE schools, as well as a special home for children called Annai Illam.
//                   </p>
//                   <p>
//                      The Trust manages Adhiparasakthi Polytechnic College, College of Arts and Science, Engineering Colleges, Teacher Training Institutes, Agricultural College, and a Medical College. These institutions are equipped with the latest infrastructure including labs, sporting grounds, and workshops to ensure students from rural backgrounds can compete as equals.
//                   </p>
//                   <p>
//                      Between the campus in Kalavai and Melmaruvathur, the entire educational needs of the people in the Vellore and Kanchipuram districts are being met with a focus on character inculcation and technical rejuvenation.
//                   </p>

//                   <div className="w-24 h-1 bg-[#ffc107] mx-auto rounded-full mt-10" />
//                </motion.div>
//             </div>
//          </section>

//          {/* ================= SPOTLIGHT INSTITUTIONS ================= */}
//          <section className="py-16 bg-slate-50 border-b border-stone-200">
//             <div className="container mx-auto px-4">
//                <div className="text-center mb-12">
//                   <span className="text-[#a7150b] font-bold tracking-widest uppercase text-xs mb-2 block">Centers of Excellence</span>
//                   <h2 className="text-3xl font-serif font-bold text-gray-900 tracking-tight">Featured Institutions</h2>
//                </div>

//                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
//                   {/* APCE SPOTLIGHT */}
//                   <Card className="p-8 border-none shadow-xl bg-white rounded-3xl relative overflow-hidden">
//                      <div className="absolute top-0 right-0 p-6 opacity-5"><Cpu size={120} /></div>
//                      <div className="relative z-10">
//                         <Cpu className="w-12 h-12 text-[#ffc107] mb-6" />
//                         <h3 className="text-2xl font-bold mb-3 text-gray-900">Adhiparasakthi College of Engineering (APCE)</h3>
//                         <p className="text-slate-600 mb-6">Established in 2001. A Scientific and Industrial Research Organization (SIRO) recognized by DST.</p>
//                         <ul className="space-y-3 text-sm text-slate-700">
//                            <li className="flex gap-2 items-center"><ArrowRight className="w-4 h-4 text-[#a7150b]" /> 2F Status by UGC</li>
//                            <li className="flex gap-2 items-center"><ArrowRight className="w-4 h-4 text-[#a7150b]" /> MSME Recognized Incubator</li>
//                            <li className="flex gap-2 items-center"><ArrowRight className="w-4 h-4 text-[#a7150b]" /> Collaboration with Robotics & CISCO</li>
//                         </ul>
//                      </div>
//                   </Card>

//                   {/* LBASC SPOTLIGHT */}
//                   <Card className="p-8 border-none shadow-xl bg-white rounded-3xl relative overflow-hidden">
//                      <div className="absolute top-0 right-0 p-6 opacity-5"><Microscope size={120} /></div>
//                      <div className="relative z-10">
//                         <Microscope className="w-12 h-12 text-[#a7150b] mb-6" />
//                         <h3 className="text-2xl font-bold mb-3 text-gray-900">Lakshmi Bangaru Arts & Science College</h3>
//                         <p className="text-slate-600 mb-6">Established in 2019. Affiliated with the University of Madras.</p>
//                         <ul className="space-y-3 text-sm text-slate-700">
//                            <li className="flex gap-2 items-center"><ArrowRight className="w-4 h-4 text-[#ffc107]" /> Courses in AI, Biochemistry & Microbiology</li>
//                            <li className="flex gap-2 items-center"><ArrowRight className="w-4 h-4 text-[#ffc107]" /> One Crore Palm Seeds Plantation Project</li>
//                            <li className="flex gap-2 items-center"><ArrowRight className="w-4 h-4 text-[#ffc107]" /> Focus on Entrepreneurial Skills</li>
//                         </ul>
//                      </div>
//                   </Card>
//                </div>
//             </div>
//          </section>

//          {/* ================= ALL INSTITUTIONS GRID ================= */}
//          <section className="py-20 bg-slate-50">
//             <div className="container mx-auto px-4">
//                <motion.div
//                   initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
//                   className="mb-12"
//                >
//                   <h2 className="text-3xl font-serif font-bold text-gray-900 tracking-tight">All Institutions</h2>
//                </motion.div>

//                <motion.div
//                   variants={staggerContainer}
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true }}
//                   className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
//                >
//                   {institutions.map((item, idx) => (
//                      <motion.div key={idx} variants={fadeInUp} className="h-full">
//                         <Card className="h-full border-none shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group bg-white flex flex-col rounded-2xl">
//                            <div className="p-6 flex-1 flex flex-col">
//                               {/* Header */}
//                               <div className="flex justify-between items-start mb-6">
//                                  <div className={`p-4 rounded-2xl ${item.bg} ${item.color}`}>
//                                     <item.icon className="w-6 h-6" />
//                                  </div>
//                                  <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${item.bg} ${item.color}`}>
//                                     {item.category}
//                                  </span>
//                               </div>

//                               {/* Name */}
//                               <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#a7150b] transition-colors leading-tight min-h-[3.5rem]">
//                                  {item.name}
//                               </h3>

//                               {/* Description (New) */}
//                               <p className="text-sm text-slate-500 mb-6 line-clamp-3 leading-relaxed">
//                                  {item.description}
//                               </p>

//                               {/* Address */}
//                               <div className="mb-4 pl-0 mt-auto pt-4 border-t border-slate-50">
//                                  <div className="flex items-start gap-3 text-slate-600 text-xs">
//                                     <MapPin className="w-4 h-4 shrink-0 mt-1 text-[#a7150b]" />
//                                     <div className="space-y-0.5">
//                                        {item.address.map((line, i) => (
//                                           <p key={i}>{line}</p>
//                                        ))}
//                                     </div>
//                                  </div>
//                               </div>

//                               {/* Contact Details */}
//                               <div className="space-y-2">
//                                  {item.phone && (
//                                     <div className="flex items-start gap-3 text-slate-600 text-xs">
//                                        <Phone className="w-4 h-4 shrink-0 mt-1 text-slate-400" />
//                                        <span className="break-words">{item.phone}</span>
//                                     </div>
//                                  )}
//                                  {item.email && (
//                                     <div className="flex items-start gap-3 text-slate-600 text-xs">
//                                        <Mail className="w-4 h-4 shrink-0 mt-1 text-slate-400" />
//                                        <span className="break-all">{item.email}</span>
//                                     </div>
//                                  )}
//                               </div>
//                            </div>
//                         </Card>
//                      </motion.div>
//                   ))}
//                </motion.div>

//             </div>
//          </section>

//          {/* ================= CTA SECTION ================= */}
//          <section className="py-24 bg-[#a7150b] text-white">
//             <div className="container mx-auto px-4 text-center">
//                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
//                   <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 tracking-tight">Support Our Educational Mission</h2>
//                   <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg">
//                      Your contributions help us provide quality education and infrastructure to students from all walks of life.
//                   </p>
//                   <Link href="https://aspwct.omsakthiamma.in/">
//                      <Button className="bg-[#ffc107] hover:bg-[#e6ac00] text-[#1a1a1a] font-bold text-lg px-8 py-6 rounded-full shadow-xl transition-transform hover:scale-105">
//                         Donate Now <ArrowRight className="w-5 h-5 ml-2" />
//                      </Button>
//                   </Link>
//                </motion.div>
//             </div>
//          </section>

//       </main>
//    )
// }

"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
   Stethoscope,
   Building2,
   Phone,
   ArrowRight,
   School,
   Leaf,
   HeartPulse,
   Activity,
   MapPin,
   Mail,
   BookOpen,
   Cpu,
   Microscope,
   Quote,
   CalendarDays,
   CheckCircle2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
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
   visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}

// --- FULL DATA PRESERVED FROM ORIGINAL ---
const institutions = [
   {
      category: "Medical",
      name: "Melmaruvathur Adhiparasakthi Institute of Medical Sciences and Research",
      description: "A 1000+ bed super-specialty tertiary care hospital known for cost leadership and ethical treatment. Includes comprehensive departments like General Medicine, Surgery, and a dedicated Dialysis center.",
      address: ["Melmaruvathur,", "Kancheepuram District,", "Tamilnadu, India,", "Pin code – 603319."],
      phone: "044-27528108",
      email: "maphsmelmaruvathur@yahoo.com",
      website: "www.adhiparasakthischools.com",
      icon: Stethoscope,
      color: "text-blue-600",
      bg: "bg-blue-50"
   },
   {
      category: "Engineering",
      name: "Adhiparasakthi Engineering College (APCE)",
      description: "Established in 2001. Enjoys the status of Scientific and Industrial Research Organization (SIRO), 2F status by UGC, and is an MSME Recognized Business Incubation Centre.",
      address: ["Melmaruvathur,", "Kancheepuram District,", "Tamilnadu, India,", "Pin code – 603319."],
      phone: "044-27529247, 27529502",
      fax: "044- 27529094",
      email: "apec1984@rediffmail.com",
      website: "www.adhiparasakthi.in",
      icon: Cpu,
      color: "text-orange-600",
      bg: "bg-orange-50"
   },
   {
      category: "Arts & Science",
      name: "Lakshmi Bangaru Arts & Science College (LBASC)",
      description: "Established in 2019. Affiliated with the University of Madras, offering courses in Computer Science (AI), Microbiology, and Commerce, focusing on spiritual values and ethical leadership.",
      address: ["G.B. Nagar , Kalavai,", "Vellore District,", "Tamilnadu, India,", "Pin code – 632506."],
      phone: "04173- 242226",
      fax: "04173- 242646",
      email: "principal@apcasgbn.com",
      website: "www.apcasgbn.com",
      icon: BookOpen,
      color: "text-purple-600",
      bg: "bg-purple-50"
   },
   {
      category: "Dental",
      name: "Adhiparasakthi Dental College and Hospital",
      description: "Providing top-tier dental education and oral healthcare services to the rural community.",
      address: ["Melmaruvathur,", "Kancheepuram District,", "Tamilnadu, India,", "Pin code – 603319."],
      phone: "044 -27528082, 27528083",
      fax: "044- 27528081",
      email: "apdcollege@gmail.com",
      website: "www.apdch.com",
      icon: HeartPulse,
      color: "text-red-600",
      bg: "bg-red-50"
   },
   {
      category: "Nursing",
      name: "Adhiparasakthi College of Nursing",
      description: "Dedicated to training compassionate nursing professionals with modern medical facilities.",
      address: ["Melmaruvathur,", "Kancheepuram District,", "Tamilnadu, India,", "Pin code – 603319."],
      phone: "044-27529089 & 27529581",
      fax: "044-27529581",
      email: "apcon_mel@yahoo.com",
      website: "www.apcon.org",
      icon: HeartPulse,
      color: "text-pink-600",
      bg: "bg-pink-50"
   },
   {
      category: "Physiotherapy",
      name: "Adhiparasakthi College of Physiotherapy",
      description: "State-of-the-art physiotherapy education combined with practical rehabilitation training.",
      address: ["Melmaruvathur,", "Kancheepuram District,", "Tamilnadu, India,", "Pin code – 603319."],
      phone: "044- 27529257 & 27529378",
      fax: "044- 27529378",
      email: "apcopt1994@yahoo.co.in",
      website: "www.apcopt.org",
      icon: Activity,
      color: "text-cyan-600",
      bg: "bg-cyan-50"
   },
   {
      category: "Polytechnic",
      name: "Adhiparasakthi Polytechnic College",
      description: "Offering diploma courses with a focus on vocational training and skill development.",
      address: ["Melmaruvathur,", "Kancheepuram District,", "Tamilnadu, India,", "Pin code – 603319."],
      phone: "044-27529234, 27529281",
      fax: "044- 27529955",
      email: "principal_aptcmmr@yahoo.co.in",
      website: "www.aptcmmr.com",
      icon: Building2,
      color: "text-indigo-600",
      bg: "bg-indigo-50"
   },
   {
      category: "Agriculture",
      name: "Adhiparasakthi Agricultural College",
      description: "Focusing on sustainable farming, hydroponics, and smart irrigation techniques.",
      address: ["G.B. Nagar , Kalavai,", "Vellore District,", "Tamilnadu, India,", "Pin code – 632506."],
      phone: "04173 – 295080",
      fax: "04173 – 242066",
      email: "deanapac@tnau.ac.in",
      website: "www.apac.ac.in",
      icon: Leaf,
      color: "text-green-600",
      bg: "bg-green-50"
   },
   {
      category: "School",
      name: "Adhiparasakthi Matriculation Higher Secondary School",
      description: "Providing holistic education from primary to higher secondary levels.",
      address: ["Melmaruvathur,", "Kancheepuram District,", "Tamilnadu, India,", "Pin code – 603319."],
      phone: "044-27529208",
      email: "apmhsschool_mmr@yahoo.co.in",
      website: "www.adhiparasakthischools.com",
      icon: School,
      color: "text-yellow-600",
      bg: "bg-yellow-50"
   },
   {
      category: "Special Home",
      name: "Adhiparasakthi Annai Illam",
      description: "A dedicated home and school for special children, focusing on their holistic development.",
      address: ["Melmaruvathur,", "Kancheepuram District,", "Tamilnadu, India,", "Pin code – 603319."],
      phone: "044-27529299",
      email: "annaiillamASPWCTtrust@gmail.com",
      website: "www.apannaiillam.in",
      icon: HeartPulse,
      color: "text-[#a7150b]",
      bg: "bg-red-100"
   }
]

// --- Specific Data from Prompt ---
const jobEvents = [
    { date: "01-04-2023", event: "Placement Drive: AREETELife Sciences Pvt Ltd, Chennai" },
    { date: "08-04-2023", event: "National Level Seminar on Employability and Entrepreneurial Skills" },
    { date: "28-04-2023", event: "Placement Drive: EMRI Green Health Services" },
    { date: "04-08-2023", event: "Inauguration of Add-On 'Spoken English'" },
    { date: "12-08-2023", event: "“Thozhil seivom thozhi”" },
    { date: "25-08-2023", event: "Workshop: Photoshop for Young Entrepreneurs" },
    { date: "26-08-2023", event: "Inauguration of Free Technical, Soft Skills & Job Readiness Training" },
    { date: "31-08-2023", event: "Guest lecture on Intellectual Property Rights" },
    { date: "12-09-2023", event: "SURVEY OF YOUTH NOT IN FORMAL EDUCATION OR REGULAR EMPLOYMENT" },
    { date: "16-09-2023", event: "'Campus to Career' by AI-IWN" },
    { date: "21-09-2023", event: "Guest Speech on 'Career Guidance on Chartered Accounting'" },
    { date: "14-11-2023", event: "Seminar on NATIONAL ENTREPRENEURSHIP DAY" },
    { date: "18-12-2023", event: "STRY Training Programme on Goat Rearing and Management" },
    { date: "02-01-2024", event: "Soft Skill Training by Bhumi NGO" },
    { date: "02-01-2024", event: "Addon Course: Advanced Java" },
    { date: "10-01-2024", event: "Mybharat Portal Registration Camp" },
    { date: "27-01-2024", event: "Aachi Masala Pvt. Ltd. Job Orientation Program" },
    { date: "16-02-2024", event: "7 Days Placement Training" },
    { date: "17-02-2024", event: "Add-on Course: Python Programming for B.Com Students" },
    { date: "19-02-2024", event: "TNPSC Competitive Exam Awareness Program" },
    { date: "13-03-2024", event: "Seminar on 'Effective Utilization of Library in Competitive Exam Preparation'" },
    { date: "14-03-2024", event: "One Day National Seminar on 'Artificial Intelligence and Machine Learning'" },
    { date: "16-03-2024", event: "Hands-on Training on 'Datasets Preparation and Edge Computing'" },
    { date: "18-03-2024", event: "Inauguration of 3 Days FDP on 'Problem Solving Skills'" },
    { date: "23-03-2024", event: "PVREnterprises Placement Drive" },
    { date: "25-03-2024", event: "EOSGlobe Placement Drive" },
    { date: "26-03-2024", event: "Forte Management Services - Placement Drive" },
    { date: "30-03-2024", event: "Shriram Chits - Placement Drive" },
]

const socialEvents = [
    { date: "27-10-2023", event: "Awareness on Fire safety" },
    { date: "30-10-2023", event: "Vigilance Awareness Week" },
    { date: "31-10-2023", event: "National Unity Day" },
    { date: "26-11-2023", event: "National Constitution Day E-Quiz" },
    { date: "11-12-2023", event: "Viksit Bharat at 2047: Voice of Youth" },
    { date: "13-12-2023", event: "Naan Mudhalvan Niral Thiruvizha" },
    { date: "23-24", event: "One day Training for Student Mentors" },
    { date: "27-12-2023", event: "Quiz Competition on 'Consumer Rights and Protection'" },
    { date: "28-12-2023", event: "Model Consumer Court & Short Film on Consumer Protection" },
    { date: "26-01-2024", event: "75th Republic Day Celebration" },
    { date: "31-01-2024", event: "Science Expo 2024" },
    { date: "09-02-2024", event: "Awareness Programme Abolition of Bonded Labor" },
    { date: "26-02-2024", event: "3 Days Lifeskills Training Program" },
    { date: "15-03-2024", event: "NSS Special Camp at Athivakkam Panchayat" },
]

export default function EducationalInstitutionPage() {
   return (
      <main className="bg-slate-50 overflow-x-hidden font-sans text-foreground selection:bg-[#ffc107] selection:text-black">

         {/* ================= HERO SECTION ================= */}
         <section className="relative h-[50vh] w-full overflow-hidden flex items-center justify-center bg-[#a7150b]">
            <div className="absolute inset-0 z-0 opacity-40">
               <Image
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2670&auto=format&fit=crop"
                  alt="Education Background"
                  fill
                  className="object-cover mix-blend-multiply"
                  priority
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#a7150b] via-transparent to-transparent" />
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center">
               <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                  <motion.div variants={fadeInUp} className="inline-block mb-4">
                     <span className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-md text-[#ffc107] text-xs font-bold tracking-widest uppercase border border-white/20">
                        ASPWCT Trust
                     </span>
                  </motion.div>
                  <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 tracking-tight">
                     Educational <span className="text-[#ffc107]">Excellence</span>
                  </motion.h1>
               </motion.div>
            </div>
         </section>

         {/* ================= DETAILED INSTITUTIONS ================= */}
         <section className="py-16 bg-slate-50">
            <div className="container mx-auto px-4">
               <div className="grid gap-16 max-w-6xl mx-auto">

                  {/* APCE */}
                  <div className="grid md:grid-cols-2 gap-10 items-start">
                      <div className="space-y-6">
                          <div className="inline-block p-3 bg-[#a7150b]/10 rounded-2xl text-[#a7150b]">
                              <Cpu className="w-8 h-8"/>
                          </div>
                          <h2 className="text-3xl font-serif font-bold text-gray-900">Adhiparasakthi College of Engineering (APCE)</h2>
                          <div className="space-y-4 text-slate-600 text-justify">
                              <p>
                                  Established in a sylvan surrounding in the year 2001 with the blessings of the Founder President His Holiness Arulthiru Amma Padma Shri Bangaru Adigalar.
                              </p>
                              <p>
                                  The institution is being governed by <strong>Sakthi Thirumathi V. Lakshmi Bangaru Adigalar</strong> (President) and <strong>Sakthi Thirumathi Dr. B. Uma Devi</strong> (Correspondent).
                              </p>
                              <p>
                                  <strong>Philosophy:</strong> The first and foremost principle of the management of APCE is that an Engineer is one who provides solutions to the problems of mankind by ensuring him a comfortable and luxurious life, surrounded by necessary modern devices to bring about a technical rejuvenation and pave a way for technical advancement of the nation at an affordable cost without any damage to the lush environment.
                              </p>
                              <p>
                                  <strong>Milestones:</strong>
                                  <br/>• 2001: Started as Adhiparasakthi College of Engineering for Women (CSE, ECE, EEE).
                                  <br/>• 2004: Became coeducational; B.Tech IT and MBA introduced.
                                  <br/>• 2011-2012: Mechanical and Civil Engineering started.
                              </p>
                          </div>
                      </div>
                      <div className="space-y-6">
                          <Card className="p-8 bg-white border-none shadow-xl rounded-3xl">
                              <h4 className="font-bold text-lg mb-4 border-b pb-2 text-[#a7150b]">Accreditations & Status</h4>
                              <ul className="space-y-3 text-sm text-slate-700">
                                  <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 shrink-0"/> Scientific and Industrial Research Organization (SIRO)</li>
                                  <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 shrink-0"/> 2F status institute by UGC</li>
                                  <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 shrink-0"/> MSME Recognized Business Incubation Centre</li>
                                  <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 shrink-0"/> Vested with MHRD's Institution Innovation Council (IIC)</li>
                              </ul>
                          </Card>
                          
                          <Card className="p-8 bg-white border-none shadow-xl rounded-3xl">
                              <h4 className="font-bold text-lg mb-4 border-b pb-2 text-[#a7150b]">Innovation & Research</h4>
                              <p className="text-sm text-slate-600 mb-4">
                                  APCE promotes multidisciplinary research in fields like Computational Mechanics, Renewable Energy, Reverse Engineering, Robotics & Automation, Industrial IoT, and Smart irrigation.
                              </p>
                              <h5 className="font-bold text-sm mb-2">Teaching Methods:</h5>
                              <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
                                  <li>Participation Learning (Industrial visits, Internships)</li>
                                  <li>Competition Based Learning (Hackathons, Baja)</li>
                                  <li>Project Based Learning</li>
                              </ul>
                          </Card>
                      </div>
                  </div>

                  <div className="w-full h-px bg-slate-200" />

                  {/* LBASC */}
                  <div className="grid md:grid-cols-2 gap-10 items-start">
                      <div className="md:order-2 space-y-6">
                          <div className="inline-block p-3 bg-[#ffc107]/20 rounded-2xl text-yellow-700">
                              <BookOpen className="w-8 h-8"/>
                          </div>
                          <h2 className="text-3xl font-serif font-bold text-gray-900">Lakshmi Bangaru Arts & Science College (LBASC)</h2>
                          <div className="space-y-4 text-slate-600 text-justify">
                              <p>
                                  Established in 2019 by Thiru. Arul Thiru Bangaru Adigalar, a renowned teacher and spiritual guru. Located in Melmaruvathur, Tamil Nadu, the college is affiliated with the University of Madras.
                              </p>
                              <p>
                                  The institution's vision is to shape students into individuals with spiritual values, ethical leadership, and entrepreneurial skills, preparing them for future societal roles.
                              </p>
                          </div>
                          
                          {/* Environmental Initiatives linked to LBASC */}
                          <Card className="p-6 bg-green-50 border border-green-100 rounded-2xl">
                              <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2"><Leaf className="w-5 h-5"/> Environment Friendly Initiatives</h4>
                              <div className="space-y-3 text-sm text-green-900">
                                  <div>
                                      <strong>One Crore Palm Seeds Plantation:</strong> On 1st October 2023, organized with Tamilnadu Palm Workers Welfare Board and State NSS at Kadapakkam beach.
                                  </div>
                                  <div>
                                      <strong>Cleanliness Drive:</strong> Village Cleanliness drive, Plastic eradication rally, and Clean India (Swach Bharath) Programme.
                                  </div>
                              </div>
                          </Card>
                      </div>
                      
                      <Card className="md:order-1 p-8 bg-white border-none shadow-xl rounded-3xl">
                          <h4 className="font-bold text-lg mb-4 border-b pb-2 text-[#a7150b]">Courses Offered</h4>
                          <ul className="space-y-3 text-sm text-slate-700">
                              <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#ffc107]"/> Bachelor of Science - Computer Science</li>
                              <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#ffc107]"/> Bachelor of Computer Applications</li>
                              <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#ffc107]"/> Bachelor of Science - Computer Science with AI</li>
                              <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#ffc107]"/> Bachelor of Commerce</li>
                              <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#ffc107]"/> Bachelor of Science – Biochemistry</li>
                              <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#ffc107]"/> Bachelor of Science – Microbiology</li>
                              <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-[#ffc107]"/> Master of Commerce – General</li>
                          </ul>
                      </Card>
                  </div>

               </div>
            </div>
         </section>

         {/* ================= JOB READINESS & EVENTS (LBASC) ================= */}
         <section className="py-20 bg-white">
             <div className="container mx-auto px-4">
                 <div className="text-center mb-12">
                     <span className="text-[#a7150b] font-bold tracking-widest uppercase text-xs mb-2 block">LBASC Activities</span>
                     <h2 className="text-3xl font-serif font-bold text-gray-900">Activities to Make Student Job Ready</h2>
                     <p className="max-w-3xl mx-auto mt-4 text-slate-600">
                         The college has conducted innumerable programs all round the year to enhance the skill levels of students.
                     </p>
                 </div>

                 {/* Scrollable Table Container */}
                 <div className="max-w-5xl mx-auto border border-slate-200 rounded-xl overflow-hidden shadow-sm mb-16">
                     <div className="max-h-[500px] overflow-y-auto">
                         <Table>
                             <TableHeader className="bg-slate-50 sticky top-0 z-10">
                                 <TableRow>
                                     <TableHead className="w-[150px] font-bold text-[#a7150b]">Date</TableHead>
                                     <TableHead className="font-bold text-[#a7150b]">Event / Program</TableHead>
                                 </TableRow>
                             </TableHeader>
                             <TableBody>
                                 {jobEvents.map((item, idx) => (
                                     <TableRow key={idx} className="hover:bg-slate-50">
                                         <TableCell className="font-medium font-mono text-xs">{item.date}</TableCell>
                                         <TableCell className="text-sm text-slate-700">{item.event}</TableCell>
                                     </TableRow>
                                 ))}
                             </TableBody>
                         </Table>
                     </div>
                 </div>

                 <div className="text-center mb-12">
                     <h2 className="text-2xl font-serif font-bold text-gray-900">Social Programs</h2>
                 </div>

                 <div className="max-w-4xl mx-auto border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                     <div className="max-h-[400px] overflow-y-auto">
                         <Table>
                             <TableHeader className="bg-slate-50 sticky top-0 z-10">
                                 <TableRow>
                                     <TableHead className="w-[150px] font-bold text-[#a7150b]">Date</TableHead>
                                     <TableHead className="font-bold text-[#a7150b]">Event</TableHead>
                                 </TableRow>
                             </TableHeader>
                             <TableBody>
                                 {socialEvents.map((item, idx) => (
                                     <TableRow key={idx} className="hover:bg-slate-50">
                                         <TableCell className="font-medium font-mono text-xs">{item.date}</TableCell>
                                         <TableCell className="text-sm text-slate-700">{item.event}</TableCell>
                                     </TableRow>
                                 ))}
                             </TableBody>
                         </Table>
                     </div>
                 </div>

             </div>
         </section>

         {/* ================= APCE UPSKILLING SECTION ================= */}
         <section className="py-20 bg-slate-50">
             <div className="container mx-auto px-4 max-w-5xl">
                 <div className="grid md:grid-cols-2 gap-8">
                     <Card className="p-8 border-none bg-white rounded-3xl shadow-md">
                         <h3 className="text-xl font-bold mb-4 text-[#a7150b]">Upskilling The Student (APCE)</h3>
                         <p className="text-sm text-slate-600 leading-relaxed text-justify">
                             APCE integrates capability development under the placement office by providing guidance for competitive examinations, orientation for Career Development, Soft Skills, and Yoga/Meditation sessions. The institute also provides vocational education and trainings for needy students. A well-established Anti Ragging Committee and Grievance Redressal Mechanism ensure satisfaction.
                         </p>
                     </Card>
                     <Card className="p-8 border-none bg-white rounded-3xl shadow-md">
                         <h3 className="text-xl font-bold mb-4 text-[#ffc107]">Mission - Job Ready</h3>
                         <p className="text-sm text-slate-600 leading-relaxed text-justify">
                             Noting the general problems faced by engineering students, the college has setup short term vocational courses such as Robotics and CISCO. Our students need not wait for government jobs since they are given necessary entrepreneurial training here. The college has identified specific skills and planning to have adequate number of multidisciplinary subjects.
                         </p>
                     </Card>
                 </div>
             </div>
         </section>

         {/* ================= ALL INSTITUTIONS GRID (PRESERVED) ================= */}
         <section className="py-20 bg-white border-t border-slate-200">
            <div className="container mx-auto px-4">
               <motion.div
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                  className="mb-12"
               >
                  <h2 className="text-3xl font-serif font-bold text-gray-900 tracking-tight">All Institutions</h2>
               </motion.div>

               <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
               >
                  {institutions.map((item, idx) => (
                     <motion.div key={idx} variants={fadeInUp} className="h-full">
                        <Card className="h-full border-none shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group bg-white flex flex-col rounded-2xl">
                           <div className="p-6 flex-1 flex flex-col">
                              {/* Header */}
                              <div className="flex justify-between items-start mb-6">
                                 <div className={`p-4 rounded-2xl ${item.bg} ${item.color}`}>
                                    <item.icon className="w-6 h-6" />
                                 </div>
                                 <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${item.bg} ${item.color}`}>
                                    {item.category}
                                 </span>
                              </div>

                              {/* Name */}
                              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#a7150b] transition-colors leading-tight min-h-[3.5rem]">
                                 {item.name}
                              </h3>

                              {/* Description (Original) */}
                              <p className="text-sm text-slate-500 mb-6 line-clamp-3 leading-relaxed">
                                 {item.description}
                              </p>

                              {/* Address */}
                              <div className="mb-4 pl-0 mt-auto pt-4 border-t border-slate-50">
                                 <div className="flex items-start gap-3 text-slate-600 text-xs">
                                    <MapPin className="w-4 h-4 shrink-0 mt-1 text-[#a7150b]" />
                                    <div className="space-y-0.5">
                                       {item.address.map((line, i) => (
                                          <p key={i}>{line}</p>
                                       ))}
                                    </div>
                                 </div>
                              </div>

                              {/* Contact Details */}
                              <div className="space-y-2">
                                 {item.phone && (
                                    <div className="flex items-start gap-3 text-slate-600 text-xs">
                                       <Phone className="w-4 h-4 shrink-0 mt-1 text-slate-400" />
                                       <span className="break-words">{item.phone}</span>
                                    </div>
                                 )}
                                 {item.email && (
                                    <div className="flex items-start gap-3 text-slate-600 text-xs">
                                       <Mail className="w-4 h-4 shrink-0 mt-1 text-slate-400" />
                                       <span className="break-all">{item.email}</span>
                                    </div>
                                 )}
                              </div>
                           </div>
                        </Card>
                     </motion.div>
                  ))}
               </motion.div>
            </div>
         </section>

         {/* ================= CTA SECTION ================= */}
         <section className="py-24 bg-[#a7150b] text-white">
            <div className="container mx-auto px-4 text-center">
               <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 tracking-tight">Support Our Educational Mission</h2>
                  <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg">
                     Your contributions help us provide quality education and infrastructure to students from all walks of life.
                  </p>
                  <Link href="https://aspwct.omsakthiamma.in/">
                     <Button className="bg-[#ffc107] hover:bg-[#e6ac00] text-[#1a1a1a] font-bold text-lg px-8 py-6 rounded-full shadow-xl transition-transform hover:scale-105">
                        Donate Now <ArrowRight className="w-5 h-5 ml-2" />
                     </Button>
                  </Link>
               </motion.div>
            </div>
         </section>

      </main>
   )
}