// "use client"

// import { motion } from "framer-motion"
// import Image from "next/image"
// import { GraduationCap, BookOpen, Users, Award, Library, Microscope, Calculator, Globe } from "lucide-react"
// import { Card } from "@/components/ui/card"

// export default function EducationalInstitution() {
//   return (
//     <main className="bg-white">
//       {/* Hero Section */}
//       <section className="relative py-20 md:py-32 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="max-w-4xl mx-auto px-4 text-center"
//         >
//           <GraduationCap className="w-16 h-16 mx-auto mb-6" />
//           <h1 className="text-4xl md:text-6xl font-bold mb-6">Educational Institutions</h1>
//           <p className="text-lg md:text-xl text-white/90 font-medium">Nurturing minds, shaping futures</p>
//         </motion.div>
//       </section>

//       {/* Overview Section */}
//       <section className="py-16 md:py-24 px-4">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <span className="px-4 py-1.5 bg-[#ffc107] text-[#1a1a1a] rounded-full text-xs font-bold tracking-wider uppercase mb-4 inline-block">
//               Education Excellence
//             </span>
//             <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] mb-6">Empowering Through Education</h2>
//             <p className="text-gray-600 max-w-3xl mx-auto text-lg">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Our institutions provide world-class education
//               from primary to professional levels.
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: BookOpen,
//                 title: "Primary & Secondary",
//                 description:
//                   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Foundation building education with modern teaching methods.",
//                 students: "3,000+ students",
//                 color: "from-blue-500 to-blue-600",
//               },
//               {
//                 icon: Calculator,
//                 title: "Higher Secondary",
//                 description:
//                   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Advanced learning in science, commerce, and arts streams.",
//                 students: "1,500+ students",
//                 color: "from-[#ffc107] to-[#ffb300]",
//               },
//               {
//                 icon: Microscope,
//                 title: "Professional Courses",
//                 description:
//                   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Engineering, medical, and management education.",
//                 students: "2,000+ students",
//                 color: "from-purple-500 to-purple-600",
//               },
//             ].map((level, idx) => (
//               <motion.div
//                 key={level.title}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: idx * 0.2 }}
//                 viewport={{ once: true }}
//               >
//                 <Card className="p-8 h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-[#ffc107] group">
//                   <div
//                     className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${level.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
//                   >
//                     <level.icon className="w-8 h-8 text-white" />
//                   </div>
//                   <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">{level.title}</h3>
//                   <p className="text-gray-600 mb-4 leading-relaxed">{level.description}</p>
//                   <div className="pt-4 border-t border-gray-200">
//                     <span className="text-[#a7150b] font-bold">{level.students}</span>
//                   </div>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Institutions List */}
//       <section className="py-16 md:py-24 px-4 bg-orange-50/30">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <span className="px-4 py-1.5 bg-red-100 text-[#a7150b] rounded-full text-xs font-bold tracking-wider uppercase mb-4 inline-block">
//               Our Institutions
//             </span>
//             <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a]">Educational Institutions</h2>
//           </motion.div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {[
//               {
//                 name: "Adhiparasakthi Engineering College",
//                 type: "Engineering",
//                 description:
//                   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Offering B.E/B.Tech programs in various engineering disciplines.",
//                 established: "2001",
//                 image: "/placeholder.svg?height=500&width=700",
//                 accreditation: "AICTE Approved, NBA Accredited",
//               },
//               {
//                 name: "Adhiparasakthi College of Arts & Science",
//                 type: "Arts & Science",
//                 description:
//                   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Comprehensive undergraduate and postgraduate programs.",
//                 established: "1998",
//                 image: "/placeholder.svg?height=500&width=700",
//                 accreditation: "UGC Recognized, NAAC A+ Grade",
//               },
//               {
//                 name: "Adhiparasakthi Medical College & Hospital",
//                 type: "Medical",
//                 description:
//                   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. MBBS, MD, and nursing programs with 500-bed teaching hospital.",
//                 established: "2003",
//                 image: "/placeholder.svg?height=500&width=700",
//                 accreditation: "MCI/NMC Approved",
//               },
//               {
//                 name: "Adhiparasakthi Polytechnic College",
//                 type: "Polytechnic",
//                 description:
//                   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diploma programs in engineering and technology.",
//                 established: "1995",
//                 image: "/placeholder.svg?height=500&width=700",
//                 accreditation: "AICTE Approved",
//               },
//               {
//                 name: "Adhiparasakthi Matriculation School",
//                 type: "School",
//                 description:
//                   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. From LKG to XII with modern facilities and teaching methods.",
//                 established: "1992",
//                 image: "/placeholder.svg?height=500&width=700",
//                 accreditation: "Matriculation Board",
//               },
//               {
//                 name: "Adhiparasakthi Business School",
//                 type: "Management",
//                 description:
//                   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. MBA programs with industry partnerships.",
//                 established: "2005",
//                 image: "/placeholder.svg?height=500&width=700",
//                 accreditation: "AICTE Approved",
//               },
//             ].map((institution, idx) => (
//               <motion.div
//                 key={institution.name}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: idx * 0.1 }}
//                 viewport={{ once: true }}
//               >
//                 <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300">
//                   <div className="relative h-64">
//                     <Image
//                       src={institution.image || "/placeholder.svg"}
//                       alt={institution.name}
//                       fill
//                       className="object-cover"
//                     />
//                     <div className="absolute top-4 right-4 px-3 py-1 bg-[#ffc107] text-[#1a1a1a] rounded-full text-xs font-bold">
//                       Est. {institution.established}
//                     </div>
//                   </div>
//                   <div className="p-6">
//                     <div className="flex items-center gap-2 mb-3">
//                       <Award className="w-5 h-5 text-[#a7150b]" />
//                       <span className="text-[#a7150b] font-bold text-sm">{institution.type}</span>
//                     </div>
//                     <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3">{institution.name}</h3>
//                     <p className="text-gray-600 mb-4 leading-relaxed">{institution.description}</p>
//                     <div className="pt-4 border-t border-gray-200">
//                       <p className="text-sm text-gray-500">{institution.accreditation}</p>
//                     </div>
//                   </div>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Facilities Section */}
//       <section className="py-16 md:py-24 px-4">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <span className="px-4 py-1.5 bg-[#ffc107] text-[#1a1a1a] rounded-full text-xs font-bold tracking-wider uppercase mb-4 inline-block">
//               Facilities
//             </span>
//             <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a]">World-Class Infrastructure</h2>
//           </motion.div>

//           <div className="grid md:grid-cols-4 gap-6">
//             {[
//               { icon: Library, title: "Modern Libraries", count: "50,000+ books" },
//               { icon: Microscope, title: "Research Labs", count: "25+ labs" },
//               { icon: Globe, title: "Smart Classrooms", count: "100+ rooms" },
//               { icon: Users, title: "Sports Facilities", count: "All major sports" },
//             ].map((facility, idx) => (
//               <motion.div
//                 key={facility.title}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: idx * 0.1 }}
//                 viewport={{ once: true }}
//               >
//                 <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-[#ffc107]">
//                   <div className="w-14 h-14 bg-gradient-to-br from-[#ffc107] to-[#a7150b] rounded-xl flex items-center justify-center mx-auto mb-4">
//                     <facility.icon className="w-7 h-7 text-white" />
//                   </div>
//                   <h3 className="font-bold text-lg text-[#1a1a1a] mb-2">{facility.title}</h3>
//                   <p className="text-[#a7150b] font-bold text-sm">{facility.count}</p>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Gallery Section */}
//       <section className="py-16 md:py-24 px-4 bg-orange-50/30">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-12"
//           >
//             <span className="px-4 py-1.5 bg-[#ffc107] text-[#1a1a1a] rounded-full text-xs font-bold tracking-wider uppercase mb-4 inline-block">
//               Gallery
//             </span>
//             <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a]">Campus Life</h2>
//           </motion.div>

//           <div className="grid md:grid-cols-3 gap-6">
//             {[
//               "/placeholder.svg?height=400&width=600",
//               "/placeholder.svg?height=400&width=600",
//               "/placeholder.svg?height=400&width=600",
//               "/placeholder.svg?height=400&width=600",
//               "/placeholder.svg?height=400&width=600",
//               "/placeholder.svg?height=400&width=600",
//             ].map((image, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: idx * 0.1 }}
//                 viewport={{ once: true }}
//                 className="relative h-72 rounded-2xl overflow-hidden shadow-lg group"
//               >
//                 <Image
//                   src={image || "/placeholder.svg"}
//                   alt={`Campus ${idx + 1}`}
//                   fill
//                   className="object-cover group-hover:scale-110 transition-transform duration-500"
//                 />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </main>
//   )
// }

"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  GraduationCap,
  BookOpen,
  Stethoscope,
  Building2,
  Phone,
  Globe,
  ArrowRight,
  School,
  Leaf,
  HeartPulse,
  Activity,
  MapPin,
  Mail,
  Printer
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}

// --- Data Exactly as Provided ---
const institutions = [
  {
    category: "Medical",
    name: "Melmaruvathur Adhiparasakthi Institute of Medical Sciences and Research",
    address: ["Melmaruvathur,", "Kancheepuram District,", "Tamilnadu, India,", "Pin code – 603319."],
    phone: "044-27528108",
    email: "maphsmelmaruvathur@yahoo.com",
    website: "www.adhiparasakthischools.com",
    icon: Stethoscope,
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    category: "Dental",
    name: "Adhiparasakthi Dental College and Hospital",
    address: ["Melmaruvathur,", "Kancheepuram District,", "Tamilnadu, India,", "Pin code – 603319."],
    phone: "044 -27528082, 27528083 & 27528084",
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
    category: "Engineering",
    name: "Adhiparasakthi Engineering College",
    address: ["Melmaruvathur,", "Kancheepuram District,", "Tamilnadu, India,", "Pin code – 603319."],
    phone: "044-27529247, 27529502, 27529094",
    fax: "044- 27529094",
    email: "apec1984@rediffmail.com",
    website: "www.adhiparasakthi.in",
    icon: Building2,
    color: "text-orange-600",
    bg: "bg-orange-50"
  },
  {
    category: "Polytechnic",
    name: "Adhiparasakthi Polytechnic College",
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
    category: "Arts & Science",
    name: "Adhiparasakthi College Of Arts And Science",
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
    category: "Engineering",
    name: "Adhiparasakthi College of Engineering",
    address: ["G.B. Nagar , Kalavai,", "Vellore District,", "Tamilnadu, India,", "Pin code – 632506."],
    phone: "04173- 242584, 242089 & 242089",
    fax: "04173 – 242066",
    email: "apce501@gmail.com",
    website: "www.apcegbn.com",
    icon: Building2,
    color: "text-orange-600",
    bg: "bg-orange-50"
  },
  {
    category: "Agriculture",
    name: "Adhiparasakthi Agricultural College",
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
    address: ["Melmaruvathur,", "Kancheepuram District,", "Tamilnadu, India,", "Pin code – 603319."],
    phone: "044-27529208",
    email: "apmhsschool_mmr@yahoo.co.in",
    website: "www.adhiparasakthischools.com",
    icon: School,
    color: "text-yellow-600",
    bg: "bg-yellow-50"
  },
  {
    category: "School",
    name: "Melmaruvathur Adhiparasakthi High School",
    address: ["Melmaruvathur,", "Kancheepuram District,", "Tamilnadu, India,", "Pin code – 603319."],
    phone: "044-27528108",
    email: "maphsmelmaruvathur@yahoo.com",
    website: "www.adhiparasakthischools.com",
    icon: School,
    color: "text-yellow-600",
    bg: "bg-yellow-50"
  },
  {
    category: "School",
    name: "G B Public School",
    address: ["Melmaruvathur,", "Kancheepuram District,", "Tamilnadu, India,", "Pin code – 603319."],
    phone: "044-27528350",
    email: "gbpubsch.mmr@gmail.com",
    website: "www.adhiparasakthischools.com",
    icon: School,
    color: "text-yellow-600",
    bg: "bg-yellow-50"
  },
  {
    category: "Special Home",
    name: "Adhiparasakthi Annai Illam",
    address: ["Melmaruvathur,", "Kancheepuram District,", "Tamilnadu, India,", "Pin code – 603319."],
    phone: "044-27529299",
    email: "annaiillamASPWCTtrust@gmail.com",
    website: "www.apannaiillam.in",
    icon: HeartPulse,
    color: "text-[#a7150b]",
    bg: "bg-red-100"
  }
]

export default function EducationalInstitutionPage() {
  return (
    <main className="bg-background overflow-x-hidden font-sans text-foreground selection:bg-[#ffc107] selection:text-black">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[50vh] w-full overflow-hidden flex items-center justify-center bg-[#1a1a1a]">
        <div className="absolute inset-0 z-0 opacity-40">
           <Image
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2670&auto=format&fit=crop"
            alt="Education Background"
            fill
            className="object-cover"
            priority
          />
           <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/60 to-transparent" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="inline-block mb-4">
               <span className="px-4 py-2 rounded-full border border-[#ffc107]/30 bg-[#ffc107]/10 text-[#ffc107] text-sm font-bold tracking-widest uppercase">
                 ASPWCT Trust
               </span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
               Educational <span className="text-[#ffc107]">Institutions</span>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* ================= DETAILED INTRO TEXT ================= */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
           <motion.div 
             initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
             className="max-w-5xl mx-auto space-y-6 text-slate-700 leading-relaxed text-lg text-justify"
           >
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold text-black mb-6 text-center">
               Educational <span className="text-[#a7150b]">Institutions</span>
            </motion.h1>
              
              <p>
                From nursery to professional qualification, the Adhiparasakthi Trust runs almost the entire range of educational institutions that will help any student complete their entire education.
              </p>
              <p>
                The Trust runs state board, matriculation and CBSE schools. It also has a school for the special children, called Annai Illam. Apart from academic training, children also have holistic development as cultural and sports activities are encouraged. Community service also has special focus in the schools, and right from an early age, they are made aware of the need to contribute to the overall development of the society.
              </p>
              <p>
                The Trusts also run Adhiparasakthi polytechnic college, college of arts and science, colleges of engineering teacher’s training institute and college, agricultural college and a medical college. Nursing and physiotherapy colleges, dental college, Pharmacy College are among the associated institutions. Even in the schools, certain principles and reinforced-the primary being identifying fellow humans by the colour of the blood rather than through artificially imposed social differences.
              </p>
              <p>
                State of the art facilities, good faculty and exposure make these institutions on par with other renowned institutions. They enable the poor and the talented to complete as equals and bring a change in their families, which are many times from the rural milieu with farming as the background. Some of the students are first generation scholars, because of which the effort from the faculty is that much more to bring them up to speed.
              </p>
              <p>
                Between a 1000-acre campus in kalavai and the campus in Melmaruvathur, the entire spectrum of education from kindergarten to higher education needs of the people in and around the two districts of vellore and kanchipuram are taken care of.
              </p>
              
              <div className="w-24 h-1 bg-[#ffc107] mx-auto rounded-full mt-8" />
           </motion.div>
        </div>
      </section>

      {/* ================= INSTITUTIONS GRID ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
           
           <motion.div 
             variants={staggerContainer}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
           >
              {institutions.map((item, idx) => (
                 <motion.div key={idx} variants={fadeInUp} className="h-full">
                    <Card className="h-full border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group bg-white flex flex-col">
                       
                       {/* Color Strip */}
                       <div className={`h-2 w-full ${item.bg.replace("bg-", "bg-")}-500/30`} />
                       
                       <div className="p-6 flex-1 flex flex-col">
                          {/* Header */}
                          <div className="flex justify-between items-start mb-4">
                             <div className={`p-3 rounded-xl ${item.bg} ${item.color}`}>
                                <item.icon className="w-8 h-8" />
                             </div>
                             <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider ${item.bg} ${item.color}`}>
                                {item.category}
                             </span>
                          </div>

                          {/* Name */}
                          <h3 className="text-lg font-bold text-[#1a1a1a] mb-6 group-hover:text-[#a7150b] transition-colors leading-tight min-h-[3.5rem]">
                             {item.name}
                          </h3>

                          {/* Address */}
                          <div className="mb-6 pl-0">
                             <div className="flex items-start gap-3 text-slate-600 text-sm">
                                <MapPin className="w-4 h-4 shrink-0 mt-1 text-[#a7150b]" />
                                <div className="space-y-0.5">
                                   {item.address.map((line, i) => (
                                     <p key={i}>{line}</p>
                                   ))}
                                </div>
                             </div>
                          </div>

                          {/* Contact Details */}
                          <div className="space-y-3 mt-auto pt-4 border-t border-slate-100">
                             {item.phone && (
                               <div className="flex items-start gap-3 text-slate-600 text-sm">
                                  <Phone className="w-4 h-4 shrink-0 mt-1 text-slate-400" />
                                  <span className="break-words">{item.phone}</span>
                               </div>
                             )}
                             {item.fax && (
                               <div className="flex items-start gap-3 text-slate-600 text-sm">
                                  <Printer className="w-4 h-4 shrink-0 mt-1 text-slate-400" />
                                  <span className="break-words">{item.fax}</span>
                               </div>
                             )}
                             {item.email && (
                               <div className="flex items-start gap-3 text-slate-600 text-sm">
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
               <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Support Our Educational Mission</h2>
               <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg">
                  Your contributions help us provide quality education and infrastructure to students from all walks of life.
               </p>
               <Link href="/donate-us">
                  <Button className="bg-[#ffc107] hover:bg-[#e6ac00] text-[#1a1a1a] font-bold text-lg px-8 py-6 rounded-full shadow-lg">
                     Donate Now <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
               </Link>
            </motion.div>
         </div>
      </section>

    </main>
  )
}