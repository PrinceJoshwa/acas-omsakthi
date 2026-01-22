// "use client"

// import { motion } from "framer-motion"
// import Image from "next/image"
// import Link from "next/link"
// import {
//    Utensils,
//    Users,
//    Heart,
//    ChefHat,
//    Sparkles,
//    ArrowRight,
//    CheckCircle2
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

// // Data directly extracted from the "ABOUT THE SOCIETY" text provided
// const activities = [
//    {
//       title: "Wholesome Lunch",
//       description: "The Society provides sumptuous, wholesome lunch to all visitors of the temple, without any distinction of caste, creed, religion, social status, or economic background.",
//       icon: Utensils,
//       color: "text-orange-600",
//       bg: "bg-orange-50"
//    },
//    {
//       title: "Irumudi Festival Service",
//       description: "During the Irumudi Festival, when lakhs of devotees visit Melmaruvathur, the Society ensures that every devotee receives free food, served with warmth and compassion.",
//       icon: Users,
//       color: "text-red-600",
//       bg: "bg-red-50"
//    },
//    {
//       title: "Modern Community Kitchen",
//       description: "To uphold quality, dignity, and hygiene, the Society operates a modern community kitchen equipped with advanced amenities. Every meal is prepared with utmost care.",
//       icon: ChefHat,
//       color: "text-blue-600",
//       bg: "bg-blue-50"
//    },
//    {
//       title: "Service to All",
//       description: "This service extends beyond devotees to include volunteers, police personnel, hawkers and all others who accompany devotees, who support the smooth functioning of the festival.",
//       icon: Heart,
//       color: "text-pink-600",
//       bg: "bg-pink-50"
//    },
//    {
//       title: "God's Prasad",
//       description: "Many affluent devotees also choose to dine here, regarding the meal as God's Prasad, accepting it with devotion and gratitude.",
//       icon: Sparkles,
//       color: "text-yellow-600",
//       bg: "bg-yellow-50"
//    },
//    {
//       title: "Dignity & Respect",
//       description: "Every individual—devotee, volunteer, passer-by, or pilgrim—is treated with equal respect, reflecting the core principle that food is a divine offering.",
//       icon: CheckCircle2,
//       color: "text-green-600",
//       bg: "bg-green-50"
//    }
// ]

// export default function ActivitiesPage() {
//    return (
//       <main className="bg-slate-50 overflow-x-hidden font-sans text-foreground selection:bg-[#ffc107] selection:text-black">

//          {/* ================= HERO SECTION ================= */}
//          <section className="relative h-[50vh] w-full overflow-hidden flex items-center justify-center bg-[#1a1a1a]">
//             <div className="absolute inset-0 z-0 opacity-50">
//                <Image
//                   src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=2670&auto=format&fit=crop"
//                   alt="Food Service Background"
//                   fill
//                   className="object-cover"
//                   priority
//                />
//                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/60 to-transparent" />
//             </div>

//             <div className="relative z-10 container mx-auto px-4 text-center">
//                <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
//                   <motion.div variants={fadeInUp} className="inline-block mb-4">
//                      <span className="px-4 py-2 rounded-full border border-[#ffc107]/30 bg-[#ffc107]/10 text-[#ffc107] text-sm font-bold tracking-widest uppercase">
//                         ACAS Services
//                      </span>
//                   </motion.div>
//                   <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
//                      Our <span className="text-[#ffc107]">Activities</span>
//                   </motion.h1>
//                   {/* Quote from President Message */}
//                   <motion.p variants={fadeInUp} className="text-gray-300 max-w-2xl mx-auto text-lg italic">
//                      "Feeding a hungry being is equal to feeding God Himself."
//                   </motion.p>
//                </motion.div>
//             </div>
//          </section>

//          {/* ================= INTRO TEXT ================= */}
//          <section className="py-20 bg-white">
//             <div className="container mx-auto px-4">
//                <motion.div
//                   initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
//                   className="max-w-4xl mx-auto text-center space-y-6"
//                >
//                   {/* Quote from Tamil section translated */}
//                   <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
//                      "Like a banyan tree offering shade, food donation offers protection and grace."
//                   </h2>
//                   <p className="text-slate-600 text-lg leading-relaxed">
//                      Adhiparasakthi Charitable and Annadhanam Society was founded in the year 2008 by His Holiness Bangaru Adigalar. The noble thought laid the foundation for an institution that today stands as a symbol of selfless service, spiritual grace, and universal love.
//                   </p>
//                </motion.div>
//             </div>
//          </section>

//          {/* ================= ACTIVITIES GRID ================= */}
//          <section className="py-20 bg-slate-50">
//             <div className="container mx-auto px-4">
//                <motion.div
//                   variants={staggerContainer}
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true }}
//                   className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
//                >
//                   {activities.map((item, idx) => (
//                      <motion.div key={idx} variants={fadeInUp} className="h-full">
//                         <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group bg-white flex flex-col rounded-3xl p-8">
//                            <div className={`w-14 h-14 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-6`}>
//                               <item.icon className="w-8 h-8" />
//                            </div>
//                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#a7150b] transition-colors">
//                               {item.title}
//                            </h3>
//                            <p className="text-slate-600 leading-relaxed text-sm">
//                               {item.description}
//                            </p>
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
//                   <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Support Our Mission</h2>
//                   <p className="text-white/80 max-w-3xl mx-auto mb-10 text-lg">
//                      "Each contribution—big or small—strengthens this sacred mission and enables us to extend warmth, nourishment, and compassion to all who come to us."
//                   </p>
//                   <Link href="/donate-us">
//                      <Button className="bg-[#ffc107] hover:bg-[#e6ac00] text-[#1a1a1a] font-bold text-lg px-8 py-6 rounded-full shadow-lg">
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
   Utensils,
   Soup,
   Users,
   Heart,
   Clock,
   Building2,
   Flame,
   Smile
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

// --- Repurposed Data for Services ---
const services = [
   {
      category: "Daily Service",
      name: "Daily Annadhanam",
      description: "The Society provides sumptuous, wholesome lunch to all visitors of the temple every day. Every individual is treated with equal respect.",
      icon: Utensils,
      color: "text-orange-600",
      bg: "bg-orange-50"
   },
   {
      category: "Festival Service",
      name: "Irumudi Festival Feeding",
      description: "During the Irumudi Festival, lakhs of devotees visit Melmaruvathur. The Society ensures every devotee receives free food, served with warmth and compassion.",
      icon: Flame,
      color: "text-red-600",
      bg: "bg-red-50"
   },
   {
      category: "Infrastructure",
      name: "Modern Community Kitchen",
      description: "To uphold quality, dignity, and hygiene, the Society operates a modern community kitchen equipped with advanced amenities to prepare meals with care.",
      icon: Building2,
      color: "text-blue-600",
      bg: "bg-blue-50"
   },
   {
      category: "Support Service",
      name: "Volunteer Support",
      description: "The service extends beyond devotees to include volunteers, police personnel, hawkers, and all others who support the smooth functioning of the festival.",
      icon: Users,
      color: "text-green-600",
      bg: "bg-green-50"
   },
   {
      category: "Spiritual",
      name: "Prasad Distribution",
      description: "Many affluent devotees also choose to dine here, regarding the meal as God's Prasad, accepting it with devotion and gratitude.",
      icon: Soup,
      color: "text-yellow-600",
      bg: "bg-yellow-50"
   },
   {
      category: "Experience",
      name: "Transformative Seva",
      description: "Participating in Annadhanam becomes a transformative journey for volunteers, shifting focus from individual desires to collective welfare.",
      icon: Smile,
      color: "text-purple-600",
      bg: "bg-purple-50"
   }
]

export default function ServicesPage() {
   return (
      <main className="bg-slate-50 overflow-x-hidden font-sans text-foreground selection:bg-[#ffc107] selection:text-black">

         {/* ================= HERO SECTION ================= */}
         <section className="relative h-[50vh] w-full overflow-hidden flex items-center justify-center bg-[#a7150b]">
            <div className="absolute inset-0 z-0 opacity-40">
               <Image
                  src="https://images.unsplash.com/photo-1594261625902-60293c6be4a0?q=80&w=2670&auto=format&fit=crop" // Suggest replacing with kitchen image
                  alt="Service Background"
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
                        Our Sacred Services
                     </span>
                  </motion.div>
                  <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 tracking-tight">
                     Nourishing <span className="text-[#ffc107]">Lives</span>
                  </motion.h1>
               </motion.div>
            </div>
         </section>

         {/* ================= DETAILED INTRO TEXT ================= */}
         <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
               <motion.div
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                  className="max-w-5xl mx-auto space-y-6 text-slate-600 leading-relaxed text-lg text-justify"
               >
                  <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8 text-center tracking-tight">
                     The Art of <span className="text-[#a7150b]">Giving</span>
                  </motion.h1>

                  <p>
                     The Society provides sumptuous, wholesome lunch to all visitors of the temple, without any distinction of caste, creed, religion, social status, or economic background.
                  </p>
                  <p>
                     Every individual—devotee, volunteer, passer-by, or pilgrim—is treated with equal respect, reflecting the core principle that food is a divine offering, and feeding the hungry is one of the highest forms of worship.
                  </p>
                  <p>
                     The magnitude of the Society's service becomes even more profound during the <strong>Irumudi Festival</strong>, when lakhs of devotees visit Melmaruvathur to offer their prayers.
                  </p>

                  <div className="w-24 h-1 bg-[#ffc107] mx-auto rounded-full mt-10" />
               </motion.div>
            </div>
         </section>

         {/* ================= SERVICES GRID ================= */}
         <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
               <motion.div
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                  className="mb-12"
               >
                  <h2 className="text-3xl font-serif font-bold text-gray-900 tracking-tight">Annadhanam Activities</h2>
               </motion.div>

               <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
               >
                  {services.map((item, idx) => (
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
                              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#a7150b] transition-colors leading-tight">
                                 {item.name}
                              </h3>

                              {/* Description */}
                              <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                                 {item.description}
                              </p>
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
                  <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 tracking-tight">Support Our Sacred Mission</h2>
                  <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg">
                     Your contributions help us nourish thousands of devotees. Every meal served is a blessing shared.
                  </p>
                  <Link href="/donate" target="_blank" rel="noopener noreferrer">
                     <Button className="bg-[#ffc107] hover:bg-[#e6ac00] text-[#1a1a1a] font-bold text-lg px-8 py-6 rounded-full shadow-xl transition-transform hover:scale-105">
                        Donate Now <Heart className="w-5 h-5 ml-2 fill-current" />
                     </Button>
                  </Link>
               </motion.div>
            </div>
         </section>

      </main>
   )
}