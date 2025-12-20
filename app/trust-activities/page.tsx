"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Heart, Hospital, Utensils, Shirt, Book, Trees, Home, Droplet } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function TrustActivities() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#a7150b] to-[#8a0d08] text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto px-4 text-center"
        >
          <Heart className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Trust Activities</h1>
          <p className="text-lg md:text-xl text-white/90 font-medium">
            Compassionate service to humanity in various forms
          </p>
        </motion.div>
      </section>

      {/* Activities Overview */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="px-4 py-1.5 bg-[#ffc107] text-[#1a1a1a] rounded-full text-xs font-bold tracking-wider uppercase mb-4 inline-block">
              Our Services
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] mb-6">Serving the Community</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Our trust engages in multiple activities to
              uplift and support communities in need.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Hospital,
                title: "Medical Camps",
                description: "Free healthcare services and medical checkups for underserved communities.",
                color: "from-red-500 to-red-600",
                stats: "500+ camps annually",
              },
              {
                icon: Utensils,
                title: "Food Distribution",
                description: "Daily meal programs and emergency food relief for those in need.",
                color: "from-orange-500 to-orange-600",
                stats: "10,000+ meals/day",
              },
              {
                icon: Shirt,
                title: "Clothing Drive",
                description: "Providing clothing and essential items to underprivileged families.",
                color: "from-[#ffc107] to-[#ffb300]",
                stats: "50,000+ beneficiaries",
              },
              {
                icon: Book,
                title: "Educational Support",
                description: "Scholarships, books, and learning materials for students.",
                color: "from-blue-500 to-blue-600",
                stats: "5,000+ students",
              },
              {
                icon: Home,
                title: "Housing Assistance",
                description: "Supporting families with shelter and home renovation projects.",
                color: "from-green-500 to-green-600",
                stats: "200+ homes built",
              },
              {
                icon: Droplet,
                title: "Clean Water",
                description: "Installing water purification systems in rural villages.",
                color: "from-cyan-500 to-cyan-600",
                stats: "100+ villages",
              },
              {
                icon: Trees,
                title: "Environmental Care",
                description: "Tree plantation drives and environmental awareness programs.",
                color: "from-emerald-500 to-emerald-600",
                stats: "50,000+ trees planted",
              },
              {
                icon: Heart,
                title: "Disaster Relief",
                description: "Emergency response and support during natural calamities.",
                color: "from-purple-500 to-purple-600",
                stats: "Always ready",
              },
            ].map((activity, idx) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-[#ffc107] h-full group">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${activity.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <activity.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">{activity.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">{activity.description}</p>
                  <div className="pt-3 border-t border-gray-200">
                    <span className="text-[#a7150b] font-bold text-xs">{activity.stats}</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-16 md:py-24 px-4 bg-orange-50/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="px-4 py-1.5 bg-red-100 text-[#a7150b] rounded-full text-xs font-bold tracking-wider uppercase mb-4 inline-block">
              Special Programs
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a]">Featured Initiatives</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Mobile Medical Units",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                image: "/mobile-medical-van.jpg",
                impact: "15,000+ patients treated annually",
              },
              {
                title: "Skill Development Centers",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                image: "/vocational-training-center.png",
                impact: "3,000+ youth trained",
              },
              {
                title: "Senior Citizen Care",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                image: "/elderly-care-home.jpg",
                impact: "500+ elders supported",
              },
              {
                title: "Women Empowerment",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                image: "/placeholder.svg?height=500&width=700",
                impact: "2,000+ women empowered",
              },
            ].map((program, idx) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-64">
                    <Image
                      src={program.image || "/placeholder.svg"}
                      alt={program.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3">{program.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{program.description}</p>
                    <div className="flex items-center gap-2 text-[#a7150b]">
                      <Heart className="w-5 h-5 fill-current" />
                      <span className="font-bold">{program.impact}</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="px-4 py-1.5 bg-[#ffc107] text-[#1a1a1a] rounded-full text-xs font-bold tracking-wider uppercase mb-4 inline-block">
              Gallery
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a]">Activities in Action</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "/placeholder.svg?height=400&width=600",
              "/placeholder.svg?height=400&width=600",
              "/placeholder.svg?height=400&width=600",
              "/placeholder.svg?height=400&width=600",
              "/placeholder.svg?height=400&width=600",
              "/placeholder.svg?height=400&width=600",
            ].map((image, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative h-72 rounded-2xl overflow-hidden shadow-lg group"
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Activity ${idx + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
