"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { 
  CreditCard, 
  Utensils, 
  Eye, 
  Package, 
  Globe, 
  ChevronRight,
  Heart
} from "lucide-react"

// Data mapping based on your screenshot
const donationOptions = [
  { 
    title: "General", 
    icon: CreditCard,
    desc: "Support our daily activities and general maintenance.",
    href: "https://acas.omsakthiamma.in/donate-india/" 
  },
  { 
    title: "Thaipoosam Annadhanam", 
    icon: Utensils,
    desc: "Contribute towards the grand Annadhanam for Thaipoosam festival.",
    href: "https://acas.omsakthiamma.in/donate-thaipoosam-india/" 
  },
  { 
    title: "Guru Paatha Darshan", 
    icon: Eye,
    desc: "Offerings for the divine Guru Paatha Darshan service.",
    href: "https://acas.omsakthiamma.in/donate-india/?type=GURU+PAATHA+DARSHAN" 
  },
  { 
    title: "Online Irumudi", 
    icon: Package,
    desc: "Facilitating Irumudi offerings for devotees online.",
    href: "https://acas.omsakthiamma.in/online-darshan-india/" 
  },
  { 
    title: "E-Donation", 
    icon: Globe,
    desc: "Quick and secure electronic transfer for various causes.",
    href: "https://acas.omsakthiamma.in/donate-e-donation/" 
  }
]

// Subtle background pattern
function BackgroundPattern() {
  return (
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23a7150b' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}
    />
  )
}

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-white relative flex items-center justify-center py-20">
      <BackgroundPattern />

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        
        {/* Heading Area */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-[#a7150b]/10 text-[#a7150b] text-xs font-bold tracking-widest uppercase mb-4 border border-[#a7150b]/20">
            Divine Service
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">
            Donate Now
          </h1>
          <div className="w-20 h-1.5 bg-[#ffc107] mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Donation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {donationOptions.map((option, idx) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link href={option.href} target="_blank" className="group block h-full">
                {/* Using your specific site colors:
                   - From: #a7150b (Red)
                   - To: #d91e11 (Lighter Red)
                   - Hover Accent: #ffc107 (Yellow)
                */}
                <div className="relative h-full bg-gradient-to-br from-[#a7150b] to-[#d91e11] rounded-2xl p-6 shadow-lg transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-2xl hover:shadow-[#a7150b]/30 overflow-hidden flex flex-col items-center text-center justify-center min-h-[180px] border border-transparent group-hover:border-[#ffc107]/50">
                  
                  {/* Hover Overlay Effect */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-[#ffc107]/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />

                  {/* Icon */}
                  <div className="relative mb-4 p-3 bg-white/20 rounded-full text-white backdrop-blur-sm group-hover:bg-white group-hover:text-[#a7150b] transition-colors duration-300 shadow-sm">
                    <option.icon className="w-8 h-8" />
                  </div>

                  {/* Text */}
                  <h3 className="relative text-lg md:text-xl font-bold text-white mb-2 uppercase tracking-wide group-hover:text-[#ffc107] transition-colors">
                    {option.title}
                  </h3>
                  
                  {/* Description - Shows on hover for better UX */}
                  <p className="relative text-white/80 text-xs md:text-sm leading-relaxed max-w-[90%] hidden group-hover:block animate-in fade-in slide-in-from-bottom-2">
                    {option.desc}
                  </p>

                  {/* Arrow Indicator */}
                  <div className="absolute bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                     <ChevronRight className="w-5 h-5 text-[#ffc107]" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center text-gray-500 text-sm mt-12 max-w-2xl mx-auto"
        >
          All donations are eligible for tax exemption under Section 80G. <br/>
          Secure payment gateway powered by State Bank of India.
        </motion.p>

      </div>
    </main>
  )
}