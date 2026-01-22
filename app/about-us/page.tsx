"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import {
   Heart,
   Utensils,
   Users,
   Quote,
   Soup,
   ChefHat,
   Sparkles
} from "lucide-react"
import { Card } from "@/components/ui/card"
import type { Variants } from "framer-motion"

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
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
   visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
}

export default function AboutUsPage() {
   return (
      <main className="bg-slate-50 overflow-x-hidden font-sans text-foreground selection:bg-[#ffc107] selection:text-black">

         {/* ================= HERO SECTION ================= */}
         <section className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center bg-[#a7150b]">
            <div className="absolute inset-0 bg-gradient-to-t from-[#a7150b] via-[#a7150b]/40 to-transparent z-10" />

            <div className="relative z-20 container mx-auto px-4 text-center">
               <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                  <motion.div variants={fadeInUp} className="inline-block mb-4">
                     <span className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#ffc107] text-xs font-bold tracking-widest uppercase">
                        Since 2008
                     </span>
                  </motion.div>
                  <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 tracking-tight">
                     Adhiparasakthi Charitable <br /> & Annadhanam Society
                  </motion.h1>
                  <motion.p variants={fadeInUp} className="text-yellow-50 max-w-4xl mx-auto text-lg leading-relaxed font-light italic">
                     "அன்னதானம் செய்பவரை ஆண்டவன் கூட கைவிடான்."
                     <br/>
                     <span className="text-sm not-italic opacity-80">(Even God never abandons those who feed the hungry.)</span>
                  </motion.p>
               </motion.div>
            </div>
         </section>

         {/* ================= ABOUT THE SOCIETY ================= */}
         <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
               <div className="grid lg:grid-cols-2 gap-12 items-start">
                  {/* Text Content */}
                  <motion.div
                     initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
                     className="space-y-6 text-slate-600 text-lg leading-relaxed text-justify"
                  >
                     <div className="flex items-center gap-3 mb-2">
                        <Utensils className="w-8 h-8 text-[#a7150b]" />
                        <h2 className="text-3xl font-serif font-bold text-gray-900 tracking-tight">About The Society</h2>
                     </div>
                     <p>
                        Adhiparasakthi Charitable and Annadhanam Society was founded in the year <strong>2008</strong> by <strong>His Holiness Bangaru Adigalar</strong>, with a compassionate vision rooted in the belief that no one who comes to the sacred temple of Melmaruvathur should leave hungry. This noble thought laid the foundation for an institution that today stands as a symbol of selfless service, spiritual grace, and universal love.
                     </p>
                     <p>
                        The Society provides sumptuous, wholesome lunch to all visitors of the temple, without any distinction of caste, creed, religion, social status, or economic background. Every individual—devotee, volunteer, passer-by, or pilgrim—is treated with equal respect, reflecting the core principle that food is a divine offering, and feeding the hungry is one of the highest forms of worship.
                     </p>
                     <div className="bg-[#ffc107]/10 p-6 rounded-2xl border-l-4 border-[#ffc107]">
                        <p className="text-sm font-bold text-gray-800 italic">
                           "The Society operates a modern community kitchen equipped with advanced amenities to uphold quality, dignity, and hygiene."
                        </p>
                     </div>
                  </motion.div>

                  {/* IMAGE */}
                  <motion.div
                     initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                     className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-[#ffc107]"
                  >
                     {/* Placeholder for Kitchen/Annadhanam Image */}
                     <Image
                        src="https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?q=80&w=2070&auto=format&fit=crop"
                        alt="Annadhanam Service"
                        fill
                        className="object-cover"
                     />
                     <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                        <p className="text-white font-serif text-xl">"Food is a divine offering."</p>
                     </div>
                  </motion.div>
               </div>
            </div>
         </section>

         {/* ================= LEADERSHIP ================= */}
             <section className="py-24 bg-white">
               <div className="container mx-auto px-4">
                 <div className="mb-24">
                   <div className="text-center mb-16">
                     <span className="inline-block px-4 py-2 bg-[#a7150b]/10 text-[#a7150b] rounded-full text-xs font-bold tracking-widest uppercase mb-4">
                       Divine Guidance
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
                         image: "https://ik.imagekit.io/j0xzq9pns/Omsakthi%20/3952Founder-President.png?updatedAt=1767688737331",
                         borderColor: "border-[#ffc107]",
                       },
                       {
                         name: "Smt. Lakshmi Bangaru Adigalar",
                         role: "President",
                         image: "https://ik.imagekit.io/j0xzq9pns/Omsakthi%20/Vice-President.jpg?updatedAt=1767688708134",
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
               </div>
             </section>
         
      
         {/* ================= PRESIDENT'S MESSAGE ================= */}
         <section className="py-24 bg-slate-50">
             <div className="container mx-auto px-4">
                 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-5xl mx-auto">
                     <div className="text-center mb-10">
                         <span className="inline-block px-4 py-2 bg-[#a7150b]/10 text-[#a7150b] rounded-full text-xs font-bold tracking-widest uppercase mb-4">
                             Leadership Message
                         </span>
                         <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-gray-900">President's Message</h2>
                         <p className="text-xl text-[#a7150b] font-serif italic">"Annadhanam: Nourishing the Body, Awakening the Spirit"</p>
                     </div>

                     <div className="bg-white p-10 md:p-14 rounded-[2.5rem] shadow-xl text-lg leading-relaxed text-slate-700 relative overflow-hidden">
                         <Quote className="absolute top-10 left-10 text-[#ffc107]/20 w-32 h-32 -z-0" />
                         
                         <div className="relative z-10 space-y-6 text-justify">
                            <p>
                                Annadhanam—the sacred offering of food—has been revered across spiritual traditions as one of the highest forms of service. In our culture, food is not merely sustenance; it is <strong>Prasad</strong>, a divine blessing that nurtures both the body and the soul. When a devotee receives food with gratitude, it becomes an instrument of inner purity.
                            </p>
                            <p>
                                In today's world, where many face the pressures of uncertainty, hunger, and hardship, the simple assurance of a wholesome meal carries immeasurable value. It restores dignity, rekindles hope, and strengthens the belief that kindness still prevails.
                            </p>
                            <p>
                                From a spiritual perspective, scriptures proclaim that <em>"Feeding a hungry being is equal to feeding God Himself."</em> Food is the most fundamental need of all living beings; therefore, offering food is considered the purest form of charity—<strong>Annadhanam Mahadhanam</strong>.
                            </p>
                            
                            <div className="grid md:grid-cols-2 gap-6 my-8">
                               <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100 text-center">
                                  <p className="text-lg font-bold text-[#a7150b] mb-2">Tamil Quote</p>
                                  <p className="italic text-gray-800">"கொடுக்கும் பொருளைவிட கொடுப்பவரின் அன்பே பெரிது"</p>
                                  <p className="text-sm text-gray-500 mt-2">(Love is greater than the gift itself)</p>
                               </div>
                               <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100 text-center">
                                  <p className="text-lg font-bold text-[#a7150b] mb-2">Tamil Quote</p>
                                  <p className="italic text-gray-800">"அரச மரம் நிழல் தந்தாற்போல அன்னதானம் வாழ்வை நிழலிடும்"</p>
                                  <p className="text-sm text-gray-500 mt-2">(Like a banyan tree offering shade, food donation offers protection)</p>
                               </div>
                            </div>

                            <p>
                                For our volunteers, donors, and well-wishers, participating in Annadhanam becomes a transformative journey. It shifts focus from individual desires to collective welfare. Our society is humbled to play a small part in this timeless tradition. With the generous support of philanthropists and devotees, we continue to ensure that no seeker leaves our premises hungry.
                            </p>
                         </div>
                     </div>
                 </motion.div>
             </div>
         </section>

         {/* ================= MISSION & VALUES ================= */}
         <section className="py-24 bg-[#a7150b] text-white">
            <div className="container mx-auto px-4">
               <div className="grid md:grid-cols-3 gap-8">
                  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center space-y-4">
                     <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                        <Soup className="w-10 h-10 text-[#ffc107]" />
                     </div>
                     <h3 className="text-2xl font-bold font-serif">Wholesome Food</h3>
                     <p className="text-white/80 leading-relaxed">
                        Every meal is prepared with utmost care in our modern community kitchen, ensuring hygiene, nutrition, and taste.
                     </p>
                  </motion.div>

                  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.1 }} className="text-center space-y-4">
                     <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                        <Users className="w-10 h-10 text-[#ffc107]" />
                     </div>
                     <h3 className="text-2xl font-bold font-serif">Equality & Dignity</h3>
                     <p className="text-white/80 leading-relaxed">
                        We serve everyone—devotees, volunteers, police personnel, and hawkers—without distinction of caste, creed, or status.
                     </p>
                  </motion.div>

                  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.2 }} className="text-center space-y-4">
                     <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                        <Sparkles className="w-10 h-10 text-[#ffc107]" />
                     </div>
                     <h3 className="text-2xl font-bold font-serif">Spiritual Offering</h3>
                     <p className="text-white/80 leading-relaxed">
                        Food is served not just as a meal, but as God's Prasad. Many affluent devotees partake to receive this divine blessing.
                     </p>
                  </motion.div>
               </div>
            </div>
         </section>

         {/* ================= CONTACT INFO ================= */}
         <section className="py-20 bg-white">
            <div className="container mx-auto px-4 text-center">
               <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Join Our Mission</h2>
               <p className="text-slate-600 max-w-2xl mx-auto mb-8">
                  The Society stands committed to carrying forward this tradition of unconditional service. Your support helps the divine grace of Annadhanam reach every soul.
               </p>
               <Card className="max-w-xl mx-auto p-8 bg-slate-50 border border-slate-200">
                  <h3 className="text-xl font-bold text-[#a7150b] mb-4">Adhiparasakthi Charitable and Annadhanam Society</h3>
                  <p className="text-slate-700">Melmaruvathur, Tamil Nadu</p>
                  <p className="text-slate-500 text-sm mt-4">Registered under the Societies Registration Act</p>
               </Card>
            </div>
         </section>

      </main>
   )
}