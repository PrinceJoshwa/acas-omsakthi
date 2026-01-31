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
  X,
  Utensils,
  Soup,
  Users
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
      <PresidentMessage />
      <About />
      <Leadership />
      <MissionVision />
      <Donation />
      <KeyInitiatives />
      <ContactForm />
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
          src="https://ik.imagekit.io/j0xzq9pns/Omsakthi%20/dental-hospital.jpg?updatedAt=1767689427027" // Suggest replacing with an image of Annadhanam/Feeding
          alt="Annadhanam Service"
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
              Est. 2008 • Service to Humanity
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-8 leading-[1.1] drop-shadow-2xl tracking-tight"
          >
            Adhiparasakthi Charitable & <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffc107] via-yellow-200 to-[#ffc107]">
              Annadhanam Society
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-2xl text-gray-200 mb-12 leading-relaxed font-light max-w-3xl mx-auto text-balance italic"
          >
            "Even God never abandons those who feed the hungry."
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-8"
          >
            <Link
              href="/donate" target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button className="w-full sm:w-auto bg-[#a7150b] hover:bg-[#d91e11] text-white rounded-full px-10 py-7 text-lg font-bold shadow-lg transition-all hover:scale-105">
                <Heart className="mr-3 w-5 h-5 fill-current" />
                Donate for Annadhanam
              </Button>
            </Link>

            <Link href="#about" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="w-full sm:w-auto border-2 border-white/40 text-white hover:bg-white hover:text-black rounded-full px-10 py-7 text-lg font-bold backdrop-blur-sm transition-all hover:scale-105 bg-white/5"
              >
                About The Society
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// ========== PRESIDENT'S MESSAGE ==========
function PresidentMessage() {
  return (
    <section className="py-24 bg-[#ffc107] text-[#1a1a1a] relative overflow-hidden">
      <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
        <Utensils size={200} />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-2 bg-black/10 text-black rounded-full text-xs font-bold tracking-widest uppercase mb-4">
              Leadership Message
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">President's Message</h2>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-10 md:p-14 rounded-[2.5rem] shadow-xl text-lg leading-relaxed text-slate-800">
            <h3 className="text-2xl font-bold text-[#a7150b] mb-6 text-center">Annadhanam: Nourishing the Body, Awakening the Spirit</h3>
            
            <div className="space-y-6 text-justify">
              <p>
                "Annadhanam—the sacred offering of food—has been revered across spiritual traditions as one of the highest forms of service. In our culture, food is not merely sustenance; it is <strong>Prasad</strong>, a divine blessing that nurtures both the body and the soul."
              </p>
              <p>
                "From a spiritual perspective, scriptures proclaim that <em>'Feeding a hungry being is equal to feeding God Himself.'</em> Food is the most fundamental need of all living beings; therefore, offering food is considered the purest form of charity—<strong>Annadhanam Mahadhanam</strong>."
              </p>
              <p>
                "Our society is humbled to play a small part in this timeless tradition. With the generous support of philanthropists and devotees, we continue to ensure that no seeker leaves our premises hungry. Each contribution—big or small—strengthens this sacred mission and enables us to extend warmth, nourishment, and compassion to all who come to us."
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-200 text-center">
              <p className="font-serif italic text-xl font-bold text-[#a7150b]">
                "கொடுக்கும் பொருளைவிட கொடுப்பவரின் அன்பே பெரிது"
              </p>
              <p className="text-sm text-slate-600 mt-2">
                (The love of the giver is greater than the gift itself)
              </p>
            </div>
          </div>
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
            About The Society
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight tracking-tight"
          >
            A Symbol of <br/>
            <span className="text-[#a7150b]">Selfless Service</span>
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 space-y-4 text-justify"
          >
            <p>
              <strong>Adhiparasakthi Charitable and Annadhanam Society</strong> was founded in the year <strong>2008</strong> by His Holiness Bangaru Adigalar, with a compassionate vision rooted in the belief that no one who comes to the sacred temple of Melmaruvathur should leave hungry.
            </p>
            <p>
              This noble thought laid the foundation for an institution that today stands as a symbol of selfless service, spiritual grace, and universal love. The Society provides sumptuous, wholesome lunch to all visitors of the temple, without any distinction of caste, creed, religion, social status, or economic background.
            </p>
          </motion.div>

          <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-[#ffc107]">
             <p className="font-serif italic text-gray-800">
               "அன்னதானம் செய்பவரை ஆண்டவன் கூட கைவிடான்."
             </p>
             <p className="text-sm text-gray-500 mt-1">
               (Even God never abandons those who feed the hungry.)
             </p>
          </div>
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
              src="https://ik.imagekit.io/j0xzq9pns/Omsakthi%20/bangaru_rok3vv.webp" // Recommend replacing with kitchen/feeding image
              alt="Annadhanam Service"
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
                <Utensils className="text-[#a7150b] w-8 h-8" />
              </div>
              <h3 className="text-3xl font-serif font-bold mb-4 text-gray-900">Our Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To ensure that no one who visits the sacred soil of Melmaruvathur leaves hungry. We envision a society where food is treated as a divine offering, served with unconditional love and equal respect to all.
              </p>
            </div>
          </motion.div>

          <motion.div whileHover="hover" variants={scaleOnHover} className="bg-white p-10 md:p-14 rounded-3xl shadow-xl border-l-8 border-[#ffc107]">
            <div className="relative z-10">
              <div className="w-14 h-14 bg-[#ffc107]/10 rounded-2xl flex items-center justify-center mb-8">
                <Soup className="text-gray-900 w-8 h-8" />
              </div>
              <h3 className="text-3xl font-serif font-bold mb-4 text-gray-900">Core Principle</h3>
              <p className="text-gray-600 text-lg leading-relaxed font-medium">
                "Feeding the hungry is one of the highest forms of worship." Every meal served is a silent prayer for the wellbeing of humanity, and every meal shared is a step toward spiritual evolution.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ========== KEY INITIATIVES (Annadhanam Focus) ==========
function KeyInitiatives() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="container mx-auto space-y-16">
        
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-2 bg-[#ffc107]/10 text-[#ffc107] rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            Our Service
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 tracking-tight">Scope of Annadhanam</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* 1. Daily Feeding */}
            <motion.div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mb-6">
                    <Utensils className="w-6 h-6"/>
                </div>
                <h3 className="text-xl font-bold mb-3">Daily Annadhanam</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    Providing sumptuous, wholesome lunch to all visitors of the temple daily. Every individual—devotee, volunteer, or pilgrim—is treated with equal respect.
                </p>
            </motion.div>

            {/* 2. Modern Kitchen */}
            <motion.div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6">
                    <Building2 className="w-6 h-6"/>
                </div>
                <h3 className="text-xl font-bold mb-3">Modern Community Kitchen</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    To uphold quality, dignity, and hygiene, the Society operates a modern community kitchen equipped with advanced amenities. Meals are prepared with utmost care.
                </p>
            </motion.div>

            {/* 3. Festival Service */}
            <motion.div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                    <Users className="w-6 h-6"/>
                </div>
                <h3 className="text-xl font-bold mb-3">Irumudi Festival Service</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    During the Irumudi Festival, when lakhs of devotees visit, the Society ensures every devotee receives free food. This extends to police personnel and volunteers.
                </p>
            </motion.div>
        </div>
      </div>
    </section>
  )
}

// ========== DONATION COMPONENT ==========
function Donation() {
  return (
    <section className="py-20 md:py-24 px-4 bg-slate-50" id="donate">
      <div className="container mx-auto max-w-6xl">

        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#ffc107]/20 text-yellow-800 px-4 py-1.5 rounded-full text-sm font-semibold">
            <HeartHandshake className="w-4 h-4" />
            <span>Support The Cause</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Annadhanam Mahadhanam
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            "Like a banyan tree offering shade, food donation offers protection and grace." Your contribution ensures that the divine grace of Annadhanam reaches every soul who steps into Melmaruvathur.
          </p>
        </div>

        {/* DONATION CARD */}
        <div className="grid md:grid-cols-1 gap-8 items-stretch mb-16 md:mb-20">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-gray-100 relative flex flex-col"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-[#a7150b]" />

            <div className="flex items-start gap-4 mb-6">
              <div className="p-4 bg-red-50 rounded-2xl text-[#a7150b] shrink-0">
                <Heart className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Make a Contribution</h3>
                <span className="text-xs sm:text-sm font-medium text-green-700 bg-green-100 px-3 py-1 rounded-full">
                  Feed the Hungry
                </span>
              </div>
            </div>

            <div className="space-y-4 mb-8 flex-1 text-sm sm:text-base">
              <p className="text-gray-500">
                Join us in this sacred mission of nourishing bodies and uplifting spirits.
              </p>
            </div>

            <Link
              href="/donate" target="_blank" rel="noopener noreferrer"
              className="block w-full mt-auto"
            >
              <Button className="w-full bg-[#a7150b] hover:bg-[#8a0d08] text-white h-14 text-base sm:text-lg rounded-2xl shadow-lg transition-all hover:scale-[1.02]">
                Donate via UPI / NetBanking
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ========== CONTACT FORM ==========
function ContactForm() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle")

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("submitting")
    setTimeout(() => {
      setFormStatus("success")
    }, 1500)
  }

  return (
    <section className="py-12 md:py-24 px-4 bg-[#a7150b] relative">
      <div className="container mx-auto max-w-5xl relative z-10">
        <Card className="border-none shadow-2xl rounded-3xl overflow-hidden bg-white">
          <div className="grid grid-cols-1 md:grid-cols-5">
            {/* Form Side */}
            <div className="md:col-span-3 p-6 md:p-12">
              <div className="mb-6 md:mb-8">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 tracking-tight">Contact Us</h3>
                <p className="text-sm md:text-base text-gray-500 mt-2">Reach out to support the Annadhanam society.</p>
              </div>

              {formStatus === "success" ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-64 flex flex-col items-center justify-center text-center">
                  <CheckCircle2 className="w-16 h-16 text-green-600 mb-4" />
                  <h4 className="text-xl font-bold text-gray-900">Inquiry Sent!</h4>
                  <p className="text-gray-500">We will get back to you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 md:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" required placeholder="Your Name" className="bg-slate-50 border-slate-200 h-12 focus:ring-[#a7150b] rounded-xl" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" required placeholder="+91..." className="bg-slate-50 border-slate-200 h-12 focus:ring-[#a7150b] rounded-xl" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required placeholder="email@example.com" className="bg-slate-50 border-slate-200 h-12 focus:ring-[#a7150b] rounded-xl" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Your message..." className="bg-slate-50 border-slate-200 resize-none focus:ring-[#a7150b] rounded-xl" rows={3} />
                  </div>
                  
                  <Button type="submit" disabled={formStatus === "submitting"} className="w-full bg-[#ffc107] text-black font-bold h-12 text-lg rounded-xl shadow-md hover:bg-[#e6ac00]">
                    {formStatus === "submitting" ? "Sending..." : "Submit Message"}
                  </Button>
                </form>
              )}
            </div>

            {/* Info Side */}
            <div className="md:col-span-2 bg-[#1a1a1a] p-6 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
                <Utensils size={150} className="md:w-[200px] md:h-[200px]" />
              </div>
              
              <div className="relative z-10">
                <h4 className="text-lg md:text-xl font-bold mb-6 text-[#ffc107] ">
                  Address & Contact
                </h4>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-[#ffc107] shrink-0 mt-1" />
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">
                        Email Us
                      </p>
                      <p className="font-medium text-sm break-all text-gray-300">
                        acas@omsakthiamma.org
                      </p>
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
                          Adhiparasakthi Charitable and Annadhanam Society
                        </span>
                        Melmaruvathur, TamilNadu, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}