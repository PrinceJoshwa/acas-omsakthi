// "use client"

// import Link from "next/link"
// import Image from "next/image"
// import { motion } from "framer-motion"
// import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Heart } from "lucide-react"

// export default function Footer() {
//   const currentYear = new Date().getFullYear()

//   return (
//     <footer className="bg-[#1a1a1a] text-white">
//       <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">
//         <div className="grid md:grid-cols-3 gap-8 mb-12">
//           {/* Logo & About */}
//           <div className="md:col-span-1">
//             <div className="flex items-center gap-3 mb-6">
//               <motion.div
//                 whileHover={{ rotate: 360 }}
//                 transition={{ duration: 0.6 }}
//                 className="relative w-12 h-12 bg-white rounded-full p-1 shadow-lg"
//               >
//                 <Image
//                   src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939097/logo_dl1zqj.png"
//                   alt="ASPWCT Trust Logo"
//                   fill
//                   className="object-contain p-1"
//                 />
//               </motion.div>
//               <div>
//                 <p className="font-black text-[#ffc107] text-lg">ASPWCT Trust</p>
//                 <p className="text-xs text-gray-400">Adhiparasakthi</p>
//               </div>
//             </div>
//             <p className="text-gray-400 text-sm leading-relaxed mb-4">
//               Empowering communities through healthcare, education, and cultural preservation.
//             </p>
//           </div>

//           {/* Quick Links (Updated to match Header) */}
//           <div>
//             <h3 className="font-black text-lg mb-6 text-[#ffc107]">Quick Links</h3>
//             <ul className="space-y-2">
//               {[
//                 { label: "Home", href: "/" },
//                 { label: "80G", href: "/80g" },
//                 { label: "CSR", href: "/csr" },
//                 { label: "Educational Institution", href: "/educational-institution" },
//                 { label: "Donate", href: "/donate-us" },
//               ].map((link) => (
//                 <li key={link.label}>
//                   <Link
//                     href={link.href}
//                     className="text-gray-400 hover:text-[#ffc107] transition-colors text-sm font-medium hover:pl-2 transition-all duration-300 block"
//                   >
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Services */}
//           {/* <div>
//             <h3 className="font-black text-lg mb-6 text-[#ffc107]">Our Impact</h3>
//             <ul className="space-y-2">
//               {["Healthcare Services", "Educational Programs", "Cultural Activities", "Community Outreach"].map(
//                 (service) => (
//                   <li key={service}>
//                     <p className="text-gray-400 text-sm font-medium">{service}</p>
//                   </li>
//                 ),
//               )}
//             </ul>
//           </div> */}

//           {/* Contact */}
//           <div>
//             <h3 className="font-black text-lg mb-6 text-[#ffc107]">Contact Us</h3>
//             <ul className="space-y-3">
//               <li className="flex items-start gap-3">
//                 <MapPin className="w-4 h-4 mt-1 text-[#ffc107] shrink-0" />
//                 <p className="text-gray-400 text-sm font-medium">Melmaruvathur, Tamil Nadu, India</p>
//               </li>
//               <li className="flex items-center gap-3">
//                 <Phone className="w-4 h-4 text-[#ffc107]" />
//                 <a
//                   href="tel:+911234567890"
//                   className="text-gray-400 hover:text-[#ffc107] text-sm font-medium transition-colors"
//                 >
//                   +91 123 456 7890
//                 </a>
//               </li>
//               <li className="flex items-center gap-3">
//                 <Mail className="w-4 h-4 text-[#ffc107]" />
//                 <a
//                   href="mailto:info@ASPWCTtrust.org"
//                   className="text-gray-400 hover:text-[#ffc107] text-sm font-medium transition-colors"
//                 >
//                   info@ASPWCTtrust.org
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
//           <p className="text-gray-400 text-sm text-center md:text-left font-medium">
//             © {currentYear} ASPWCT Trust. All rights reserved.
//           </p>
//           <div className="flex gap-4">
//              {/* Social placeholders if needed */}
//              <Facebook className="w-5 h-5 text-gray-400 hover:text-[#ffc107] cursor-pointer transition-colors" />
//              <Twitter className="w-5 h-5 text-gray-400 hover:text-[#ffc107] cursor-pointer transition-colors" />
//              <Instagram className="w-5 h-5 text-gray-400 hover:text-[#ffc107] cursor-pointer transition-colors" />
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Logo & About */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="relative w-12 h-12 bg-white rounded-full p-1 shadow-lg"
              >
                <Image
                  src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939097/logo_dl1zqj.png"
                  alt="ASPWCT Trust Logo"
                  fill
                  className="object-contain p-1"
                />
              </motion.div>
              <div>
                <p className="font-black text-[#ffc107] text-lg">ASPWCT Trust</p>
                <p className="text-xs text-gray-400">Adhiparasakthi</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Empowering communities through healthcare, education, and cultural preservation.
            </p>
            <a 
              href="https://www.omsakthiamma.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#ffc107]/10 hover:bg-[#ffc107]/20 border border-[#ffc107]/30 rounded-lg text-[#ffc107] text-sm font-medium transition-all hover:scale-105"
            >
              🙏 Visit Temple Website
              <span className="text-xs text-gray-400">www.omsakthiamma.org</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-black text-lg mb-6 text-[#ffc107]">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about-us" },
                { label: "CSR", href: "/csr" },
                { label: "Educational Institution", href: "/educational-institution" },
                { label: "Donate", href: "/donate-us" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#ffc107] transition-colors text-sm font-medium hover:pl-2 transition-all duration-300 block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-black text-lg mb-6 text-[#ffc107]">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-[#ffc107] shrink-0" />
                <p className="text-gray-400 text-sm font-medium leading-relaxed">
                  No.1 GST Road, Adhiparasakthi Siddhar Peedam Temple Campus, <br/>
                  Melmaruvathur, Chengalpet District, <br/>
                  TamilNadu-603319, India
                </p>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#ffc107]" />
                <a
                  href="tel:+911234567890"
                  className="text-gray-400 hover:text-[#ffc107] text-sm font-medium transition-colors"
                >
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#ffc107]" />
                <a
                  href="mailto:info@ASPWCTtrust.org"
                  className="text-gray-400 hover:text-[#ffc107] text-sm font-medium transition-colors"
                >
                  info@ASPWCTtrust.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left font-medium">
            © {currentYear} ASPWCT Trust. All rights reserved.
          </p>
          <div className="flex gap-4">
             <Facebook className="w-5 h-5 text-gray-400 hover:text-[#ffc107] cursor-pointer transition-colors" />
             <Twitter className="w-5 h-5 text-gray-400 hover:text-[#ffc107] cursor-pointer transition-colors" />
             <Instagram className="w-5 h-5 text-gray-400 hover:text-[#ffc107] cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  )
}