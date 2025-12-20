"use client"

import { motion } from "framer-motion"
import { Heart, CreditCard, Building2, Phone, Mail, Shield, CheckCircle, Users } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function DonateUs() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#a7150b] to-[#8a0d08] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto px-4 text-center relative z-10"
        >
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: "spring" }}>
            <Heart className="w-20 h-20 mx-auto mb-6 fill-current" />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Support Our Cause</h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            Your generous donation helps us continue our mission of serving humanity through healthcare, education, and
            cultural preservation.
          </p>
        </motion.div>
      </section>

      {/* Impact Section */}
      <section className="py-16 md:py-24 px-4 bg-orange-50/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="px-4 py-1.5 bg-[#ffc107] text-[#1a1a1a] rounded-full text-xs font-bold tracking-wider uppercase mb-4 inline-block">
              Your Impact
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1a1a1a] mb-6">How Your Donation Helps</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Every contribution makes a meaningful difference
              in someone's life.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                amount: "₹5,000",
                title: "Education Support",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Provides books and supplies for 10 students for one semester.",
                icon: "📚",
              },
              {
                amount: "₹10,000",
                title: "Medical Care",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Covers medical treatment for 5 patients at our health camps.",
                icon: "🏥",
              },
              {
                amount: "₹25,000",
                title: "Community Program",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Supports a month-long community development program in a village.",
                icon: "🤝",
              },
            ].map((impact, idx) => (
              <motion.div
                key={impact.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 hover:shadow-2xl transition-all duration-300 border-2 hover:border-[#ffc107] h-full">
                  <div className="text-5xl mb-4">{impact.icon}</div>
                  <div className="text-3xl font-serif font-bold text-[#a7150b] mb-3">{impact.amount}</div>
                  <h3 className="text-xl font-serif font-bold text-[#1a1a1a] mb-3">{impact.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{impact.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Methods */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="px-4 py-1.5 bg-red-100 text-[#a7150b] rounded-full text-xs font-bold tracking-wider uppercase mb-4 inline-block">
              How to Donate
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1a1a1a]">Ways to Contribute</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Online Donation */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Card className="p-8 border-2 border-[#ffc107] h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-[#ffc107] to-[#a7150b] rounded-2xl flex items-center justify-center mb-6">
                  <CreditCard className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#1a1a1a] mb-4">Online Donation</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Make a secure online donation using your
                  credit/debit card or UPI.
                </p>
                <Button className="w-full bg-[#a7150b] hover:bg-[#8a0d08] text-white rounded-full font-bold py-6 text-lg">
                  <Heart className="mr-2 w-5 h-5 fill-current" />
                  Donate Online
                </Button>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500 flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    Secure payment gateway powered by trusted providers
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Bank Transfer */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Card className="p-8 border-2 border-gray-200 hover:border-[#ffc107] transition-colors h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#1a1a1a] mb-4">Bank Transfer</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Transfer directly to our bank account.
                </p>
                <div className="space-y-3 bg-gray-50 p-4 rounded-lg">
                  <div>
                    <p className="text-sm text-gray-500">Account Name</p>
                    <p className="font-bold text-[#1a1a1a]">ASPWCT Trust</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Account Number</p>
                    <p className="font-bold text-[#1a1a1a]">1234567890</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">IFSC Code</p>
                    <p className="font-bold text-[#1a1a1a]">ABCD0123456</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Bank Name</p>
                    <p className="font-bold text-[#1a1a1a]">State Bank of India</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tax Benefits */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-[#ffc107] to-[#ffb300]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Shield className="w-16 h-16 mx-auto mb-6 text-[#1a1a1a]" />
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1a1a1a] mb-6">Tax Benefits</h2>
            <p className="text-[#1a1a1a]/80 text-lg max-w-3xl mx-auto mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. All donations to ASPWCT Trust are eligible for tax
              deduction under Section 80G of the Income Tax Act, 1961.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { icon: CheckCircle, text: "80G Tax Exemption Certificate" },
                { icon: CheckCircle, text: "Transparent Financial Reports" },
                { icon: CheckCircle, text: "Immediate Receipt Generation" },
              ].map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 bg-white/20 backdrop-blur-sm p-4 rounded-lg"
                >
                  <benefit.icon className="w-6 h-6 text-[#1a1a1a] shrink-0" />
                  <p className="font-bold text-[#1a1a1a] text-left">{benefit.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact for Donations */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1a1a1a] mb-4">Need Help?</h2>
            <p className="text-gray-600 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Our team is here to assist you with your
              donation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#ffc107] rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-[#1a1a1a]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#1a1a1a] mb-2">Call Us</h3>
                  <p className="text-gray-600 mb-2">Lorem ipsum dolor sit amet</p>
                  <a href="tel:+911234567890" className="text-[#a7150b] font-bold hover:underline">
                    +91 123 456 7890
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#ffc107] rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-[#1a1a1a]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#1a1a1a] mb-2">Email Us</h3>
                  <p className="text-gray-600 mb-2">Lorem ipsum dolor sit amet</p>
                  <a href="mailto:donate@ASPWCTtrust.org" className="text-[#a7150b] font-bold hover:underline">
                    donate@ASPWCTtrust.org
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 px-4 bg-orange-50/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="px-4 py-1.5 bg-[#ffc107] text-[#1a1a1a] rounded-full text-xs font-bold tracking-wider uppercase mb-4 inline-block">
              Donor Stories
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1a1a1a]">What Our Donors Say</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                quote:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proud to support such a noble cause. The transparency and dedication of ASPWCT Trust is commendable.",
                location: "Chennai",
              },
              {
                name: "Priya Sharma",
                quote:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Seeing the impact of my donation on children's education brings me immense joy.",
                location: "Mumbai",
              },
              {
                name: "Arun Venkatesh",
                quote:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. The medical camps organized by the trust have helped countless people in rural areas.",
                location: "Bangalore",
              },
            ].map((testimonial, idx) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#ffc107] to-[#a7150b] rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-[#1a1a1a]">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic leading-relaxed">"{testimonial.quote}"</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
