"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Building2, Users, Shield, Star, Award, FileText, ArrowRight, Heart } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Organisation() {
  return (
    <main className="bg-white">
      {/* Hero Section - removed gradient, solid color */}
      <section className="relative py-20 md:py-32 bg-[#ffc107]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-4 text-center"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
          >
            <Building2 className="w-20 h-20 mx-auto mb-8 text-[#1a1a1a]" />
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-black text-[#1a1a1a] mb-6">Our Organisation</h1>
          <p className="text-xl md:text-2xl text-[#1a1a1a]/80 font-medium text-balance">
            Structured for excellence, dedicated to service
          </p>
        </motion.div>
      </section>

      {/* Organisation Structure */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="px-5 py-2 bg-[#ffc107] text-[#1a1a1a] rounded-full text-xs font-black tracking-widest uppercase mb-6 inline-block">
              Structure
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-[#1a1a1a] mb-8">Organisational Hierarchy</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-xl leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Our trust operates with a clear structure to
              ensure effective governance and service delivery.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: "Board of Trustees",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senior leadership providing strategic direction and governance.",
                members: "7 Members",
                color: "#a7150b",
              },
              {
                icon: Shield,
                title: "Executive Committee",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Implementing policies and overseeing day-to-day operations.",
                members: "12 Members",
                color: "#ffc107",
              },
              {
                icon: Users,
                title: "Advisory Board",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Expert advisors providing guidance on specialized matters.",
                members: "15 Members",
                color: "#1a1a1a",
              },
              {
                icon: Building2,
                title: "Administrative Staff",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dedicated professionals managing operations and programs.",
                members: "50+ Staff",
                color: "#a7150b",
              },
              {
                icon: Award,
                title: "Department Heads",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leaders managing healthcare, education, and cultural divisions.",
                members: "8 Heads",
                color: "#ffc107",
              },
              {
                icon: FileText,
                title: "Project Coordinators",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Managing specific initiatives and community programs.",
                members: "20+ Coordinators",
                color: "#1a1a1a",
              },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <Card className="p-8 h-full hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-[#ffc107] group bg-white">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: item.color }}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-[#1a1a1a] mb-4">{item.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
                  <div className="pt-4 border-t border-gray-200">
                    <span className="text-[#a7150b] font-black">{item.members}</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Personnel */}
      <section className="py-20 md:py-32 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="px-5 py-2 bg-[#a7150b] text-white rounded-full text-xs font-black tracking-widest uppercase mb-6 inline-block">
              Leadership
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-[#1a1a1a]">Our Leadership Team</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Lorem Ipsum",
                role: "Chairman",
                bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leading the trust with 25+ years of experience.",
              },
              {
                name: "Prof. Dolor Sit",
                role: "Vice Chairman",
                bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Expert in educational administration and policy.",
              },
              {
                name: "Mr. Amet Consectetur",
                role: "Secretary",
                bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Managing operations and strategic initiatives.",
              },
              {
                name: "Dr. Adipiscing Elite",
                role: "Treasurer",
                bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Financial expert ensuring transparent governance.",
              },
              {
                name: "Ms. Sed Tempor",
                role: "Medical Director",
                bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Healthcare professional with vast experience.",
              },
              {
                name: "Dr. Incididunt Labore",
                role: "Education Director",
                bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Educational leader transforming lives.",
              },
            ].map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <Card className="p-8 text-center hover:shadow-2xl transition-all duration-300 bg-white border-2 border-gray-200 hover:border-[#ffc107]">
                  <div className="w-28 h-28 bg-[#ffc107] rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="w-14 h-14 text-[#1a1a1a]" />
                  </div>
                  <h3 className="text-2xl font-black text-[#1a1a1a] mb-2">{member.name}</h3>
                  <p className="text-[#a7150b] font-bold mb-4 text-lg">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance Principles */}
      <section className="py-20 md:py-32 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="px-5 py-2 bg-[#ffc107] text-[#1a1a1a] rounded-full text-xs font-black tracking-widest uppercase mb-6 inline-block">
              Governance
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-[#1a1a1a] mb-8">Governance Principles</h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. We adhere to the highest standards of
              transparency, accountability, and ethical conduct.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                title: "Transparency",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. All our operations and financials are open to scrutiny and regular audits.",
              },
              {
                title: "Accountability",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Every member is responsible for their actions and decisions.",
              },
              {
                title: "Integrity",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. We maintain the highest ethical standards in all our dealings.",
              },
              {
                title: "Inclusivity",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. We ensure representation from diverse backgrounds and perspectives.",
              },
            ].map((principle, idx) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="p-8 border-l-8 border-[#a7150b] hover:shadow-2xl transition-all duration-300 bg-white">
                  <h3 className="text-2xl font-black text-[#1a1a1a] mb-4">{principle.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{principle.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link href="/about-us">
              <Button size="lg" className="bg-[#1a1a1a] text-white hover:bg-[#2a2a2a] rounded-full font-bold px-8">
                Learn More About Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/donate" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-[#a7150b] text-white hover:bg-[#8a0d08] rounded-full font-bold px-8">
                <Heart className="mr-2 w-5 h-5 fill-current" />
                Support Our Work
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
