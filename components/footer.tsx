// // "use client"

// // import Link from "next/link"
// // import Image from "next/image"
// // import { motion } from "framer-motion"
// // import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Heart } from "lucide-react"

// // export default function Footer() {
// //   const currentYear = new Date().getFullYear()

// //   return (
// //     <footer className="bg-[#1a1a1a] text-white">
// //       <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">
// //         <div className="grid md:grid-cols-3 gap-8 mb-12">
// //           {/* Logo & About */}
// //           <div className="md:col-span-1">
// //             <div className="flex items-center gap-3 mb-6">
// //               <motion.div
// //                 whileHover={{ rotate: 360 }}
// //                 transition={{ duration: 0.6 }}
// //                 className="relative w-12 h-12 bg-white rounded-full p-1 shadow-lg"
// //               >
// //                 <Image
// //                   src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939097/logo_dl1zqj.png"
// //                   alt="ASPWCT Trust Logo"
// //                   fill
// //                   className="object-contain p-1"
// //                 />
// //               </motion.div>
// //               <div>
// //                 <p className="font-black text-[#ffc107] text-lg">ASPWCT Trust</p>
// //                 <p className="text-xs text-gray-400">Adhiparasakthi</p>
// //               </div>
// //             </div>
// //             <p className="text-gray-400 text-sm leading-relaxed mb-4">
// //               Empowering communities through healthcare, education, and cultural preservation.
// //             </p>
// //             <a 
// //               href="https://www.omsakthiamma.org" 
// //               target="_blank" 
// //               rel="noopener noreferrer"
// //               className="inline-flex items-center gap-2 px-4 py-2 bg-[#ffc107]/10 hover:bg-[#ffc107]/20 border border-[#ffc107]/30 rounded-lg text-[#ffc107] text-sm font-medium transition-all hover:scale-105"
// //             >
// //               🙏 Visit Temple Website
// //               <span className="text-xs text-gray-400">www.omsakthiamma.org</span>
// //             </a>
// //           </div>

// //           {/* Quick Links */}
// //           <div>
// //             <h3 className="font-black text-lg mb-6 text-[#ffc107]">Quick Links</h3>
// //             <ul className="space-y-2">
// //               {[
// //                 { label: "Home", href: "/" },
// //                 { label: "About Us", href: "/about-us" },
// //                 { label: "CSR", href: "/csr" },
// //                 { label: "Educational Institution", href: "/educational-institution" },
// //                 { label: "Donate", href: "/donate-us" },
// //               ].map((link) => (
// //                 <li key={link.label}>
// //                   <Link
// //                     href={link.href}
// //                     className="text-gray-400 hover:text-[#ffc107] transition-colors text-sm font-medium hover:pl-2 transition-all duration-300 block"
// //                   >
// //                     {link.label}
// //                   </Link>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>

// //           {/* Contact */}
// //           <div>
// //             <h3 className="font-black text-lg mb-6 text-[#ffc107]">Contact Us</h3>
// //             <ul className="space-y-4">
// //               <li className="flex items-start gap-3">
// //                 <MapPin className="w-5 h-5 mt-1 text-[#ffc107] shrink-0" />
// //                 <p className="text-gray-400 text-sm font-medium leading-relaxed">
// //                   No.1 GST Road, Adhiparasakthi Siddhar Peeda Temple Campus, <br/>
// //                   Melmaruvathur, Chengalpet District, <br/>
// //                   TamilNadu-603319, India
// //                 </p>
// //               </li>
// //               <li className="flex items-center gap-3">
// //                 <Phone className="w-4 h-4 text-[#ffc107]" />
// //                 <a
// //                   href="tel:+911234567890"
// //                   className="text-gray-400 hover:text-[#ffc107] text-sm font-medium transition-colors"
// //                 >
// //                   +91 123 456 7890
// //                 </a>
// //               </li>
// //               <li className="flex items-center gap-3">
// //                 <Mail className="w-4 h-4 text-[#ffc107]" />
// //                 <a
// //                   href="mailto:info@ASPWCTtrust.org"
// //                   className="text-gray-400 hover:text-[#ffc107] text-sm font-medium transition-colors"
// //                 >
// //                   info@ASPWCTtrust.org
// //                 </a>
// //               </li>
// //             </ul>
// //           </div>
// //         </div>

// //         {/* Bottom Bar */}
// //         <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
// //           <p className="text-gray-400 text-sm text-center md:text-left font-medium">
// //             © {currentYear} ASPWCT Trust. All rights reserved.
// //           </p>
// //           <div className="flex gap-4">
// //              <Facebook className="w-5 h-5 text-gray-400 hover:text-[#ffc107] cursor-pointer transition-colors" />
// //              <Twitter className="w-5 h-5 text-gray-400 hover:text-[#ffc107] cursor-pointer transition-colors" />
// //              <Instagram className="w-5 h-5 text-gray-400 hover:text-[#ffc107] cursor-pointer transition-colors" />
// //           </div>
// //         </div>
// //       </div>
// //     </footer>
// //   )
// // }

// // "use client"

// // import Link from "next/link"
// // import Image from "next/image"
// // import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react"

// // export default function Footer() {
// //   const currentYear = new Date().getFullYear()

// //   return (
// //     <footer className="w-full font-sans">
// //       {/* Top Section - Deep Red Background */}
// //       <div className="bg-[#750A0A] text-white pt-16 pb-10 px-4 md:px-8">
// //         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
// //           {/* Column 1: Logo & About */}
// //           <div className="flex flex-col space-y-4">
// //             <div className="flex items-center gap-3">
// //               <div className="bg-white p-1 rounded-full w-12 h-12 flex items-center justify-center shrink-0 shadow-md">
// //                 <Image
// //                   src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939097/logo_dl1zqj.png"
// //                   alt="ASPWCT Trust Logo"
// //                   width={40}
// //                   height={40}
// //                   className="object-contain"
// //                 />
// //               </div>
// //               <div>
// //                 <h2 className="text-[#FFC800] font-bold text-lg leading-tight">ASPWCT Trust</h2>
// //                 <p className="text-xs opacity-80">Adhiparasakthi</p>
// //               </div>
// //             </div>
// //             <p className="text-sm leading-relaxed opacity-90">
// //               Empowering communities through healthcare, education, and cultural preservation.
// //             </p>
// //             <a 
// //               href="https://www.omsakthiamma.org" 
// //               target="_blank" 
// //               rel="noopener noreferrer"
// //               className="text-[#FFC800] text-sm hover:underline mt-2 inline-flex items-center gap-1"
// //             >
// //               🙏 Visit Temple Website
// //             </a>
// //           </div>

// //           {/* Column 2: Quick Links */}
// //           <div>
// //             <h3 className="text-[#FFC800] font-bold text-lg mb-4">Quick Links</h3>
// //             <ul className="flex flex-col space-y-3 text-sm">
// //               {[
// //                 { label: "Home", href: "/" },
// //                 { label: "About Us", href: "/about-us" },
// //                 { label: "CSR", href: "/csr" },
// //                 { label: "Educational Institution", href: "/educational-institution" },
// //                 { label: "Donate", href: "/donate-us" },
// //               ].map((link) => (
// //                 <li key={link.label}>
// //                   <Link href={link.href} className="hover:text-[#FFC800] transition-colors">
// //                     {link.label}
// //                   </Link>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>

// //           {/* Column 3: Info */}
// //           <div>
// //             <h3 className="text-[#FFC800] font-bold text-lg mb-4">Info</h3>
// //             <ul className="flex flex-col space-y-3 text-sm">
// //               <li>
// //                 <Link href="/page/terms_of_service" className="hover:text-[#FFC800] transition-colors">
// //                   Terms and Condition
// //                 </Link>
// //               </li>
// //               {/* Add Privacy Policy here later if needed */}
// //             </ul>
// //           </div>

// //           {/* Column 4: Contact Us */}
// //           <div>
// //             <h3 className="text-[#FFC800] font-bold text-lg mb-4">Contact Us</h3>
// //             <div className="space-y-4 text-sm">
// //               <div className="flex items-start gap-3">
// //                 <MapPin className="w-5 h-5 text-[#FFC800] shrink-0 mt-0.5" />
// //                 <p className="leading-relaxed opacity-90">
// //                   No.1 GST Road, Adhiparasakthi Siddhar Peeda Temple Campus, <br/>
// //                   Melmaruvathur, Chengalpet District, <br/>
// //                   TamilNadu-603319, India
// //                 </p>
// //               </div>
              
// //               <div className="flex items-center gap-3">
// //                 <Phone className="w-4 h-4 text-[#FFC800] shrink-0" />
// //                 <a href="tel:+911234567890" className="hover:text-[#FFC800] transition-colors">
// //                   +91 123 456 7890
// //                 </a>
// //               </div>

// //               <div className="flex items-center gap-3">
// //                 <Mail className="w-4 h-4 text-[#FFC800] shrink-0" />
// //                 <a href="mailto:info@ASPWCTtrust.org" className="hover:text-[#FFC800] transition-colors">
// //                   info@ASPWCTtrust.org
// //                 </a>
// //               </div>
// //             </div>
// //           </div>

// //         </div>
// //       </div>

// //       {/* Bottom Bar - Yellow Background */}
// //       <div className="bg-[#FFC800] text-black py-4 px-4 md:px-8">
// //         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
// //           <p className="text-sm font-bold text-center md:text-left">
// //             © {currentYear} ASPWCT Trust. All rights reserved.
// //           </p>
          
// //           <div className="flex items-center gap-3">
// //             <div className="bg-[#750A0A] p-2 rounded text-white hover:bg-black transition-colors cursor-pointer">
// //               <Facebook size={18} />
// //             </div>
// //             <div className="bg-[#750A0A] p-2 rounded text-white hover:bg-black transition-colors cursor-pointer">
// //               <Twitter size={18} />
// //             </div>
// //             <div className="bg-[#750A0A] p-2 rounded text-white hover:bg-black transition-colors cursor-pointer">
// //               <Instagram size={18} />
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </footer>
// //   )
// // }

// "use client"

// import Link from "next/link"
// import Image from "next/image"
// import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react"

// export default function Footer() {
//   const currentYear = new Date().getFullYear()

//   return (
//     <footer className="w-full font-sans">
//       {/* Top Section - Deep Red Background */}
//       <div className="bg-[#750A0A] text-white pt-16 pb-10 px-4 md:px-8">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
//           {/* Column 1: Logo & About (Matches 'Siddhar Peedam' position) */}
//           <div className="flex flex-col space-y-4">
//             <div className="flex items-center gap-3">
//               <div className="bg-white p-1 rounded-full w-12 h-12 flex items-center justify-center shrink-0">
//                 <Image
//                   src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939097/logo_dl1zqj.png"
//                   alt="ASPWC Trust Logo"
//                   width={40}
//                   height={40}
//                   className="object-contain"
//                 />
//               </div>
//               <div>
//                 <h2 className="text-[#FFC800] font-bold text-lg leading-tight">ASPWC Trust</h2>
//                 <p className="text-xs opacity-80 text-white">Adhiparasakthi</p>
//               </div>
//             </div>
//             <p className="text-sm leading-relaxed opacity-90 text-white">
//               Empowering communities through healthcare, education, and cultural preservation.
//             </p>
//             <a 
//               href="https://www.omsakthiamma.org" 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="text-[#FFC800] text-sm hover:underline mt-2 inline-block"
//             >
//               Visit Temple Website &rarr;
//             </a>
//           </div>

//           {/* Column 2: Quick Links (Matches 'Poojas & Donations' position) */}
//           <div>
//             <h3 className="text-[#FFC800] font-bold text-lg mb-4">Quick Links</h3>
//             <ul className="flex flex-col space-y-3 text-sm">
//               <li><Link href="/" className="hover:text-[#FFC800] transition-colors">Home</Link></li>
//               <li><Link href="/about-us" className="hover:text-[#FFC800] transition-colors">About Us</Link></li>
//               <li><Link href="/csr" className="hover:text-[#FFC800] transition-colors">CSR</Link></li>
//               <li><Link href="/educational-institution" className="hover:text-[#FFC800] transition-colors">Educational Institution</Link></li>
//               <li><Link href="/donate-us" className="hover:text-[#FFC800] transition-colors">Donate</Link></li>
//             </ul>
//           </div>

//           {/* Column 3: Info (Matches 'Info' position - NEW REQUEST) */}
//           <div>
//             <h3 className="text-[#FFC800] font-bold text-lg mb-4">Info</h3>
//             <ul className="flex flex-col space-y-3 text-sm">
//               <li>
//                 <Link href="/page/terms_of_service" className="hover:text-[#FFC800] transition-colors">
//                   Terms and Condition
//                 </Link>
//               </li>
//               {/* You can add Privacy Policy here later */}
//             </ul>
//           </div>

//           {/* Column 4: Contact Us (Matches 'Contact' position) */}
//           <div>
//             <h3 className="text-[#FFC800] font-bold text-lg mb-4">Contact Us</h3>
//             <div className="space-y-4 text-sm">
//               <div className="flex items-start gap-3">
//                 <MapPin className="w-5 h-5 text-[#FFC800] shrink-0 mt-0.5" />
//                 <p className="leading-relaxed opacity-90 text-white">
//                   No.1 GST Road, Adhiparasakthi Siddhar Peeda, <br/>
//                   Melmaruvathur - 603319, <br/>
//                   TamilNadu, India
//                 </p>
//               </div>
              
//               <div className="flex items-center gap-3">
//                 <Phone className="w-4 h-4 text-[#FFC800] shrink-0" />
//                 <a href="tel:+914427529313" className="hover:text-[#FFC800] transition-colors">
//                   +91 44 27529313
//                 </a>
//               </div>

//               <div className="flex items-center gap-3">
//                 <Mail className="w-4 h-4 text-[#FFC800] shrink-0" />
//                 <a href="mailto:info@acmectrust.org" className="hover:text-[#FFC800] transition-colors">
//                   info@acmectrust.org
//                 </a>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>

//       {/* Bottom Bar - Yellow Background */}
//       <div className="bg-[#FFC800] text-black py-4 px-4 md:px-8">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
//           <p className="text-sm font-bold text-center md:text-left">
//             Copyright @ {currentYear} ASPWC Trust. All rights reserved.
//           </p>
          
//           <div className="flex items-center gap-3">
//             <a href="#" className="bg-[#750A0A] p-2 rounded text-white hover:bg-black transition-colors">
//               <Facebook size={18} />
//             </a>
//             <a href="#" className="bg-[#750A0A] p-2 rounded text-white hover:bg-black transition-colors">
//               <Twitter size={18} />
//             </a>
//             <a href="#" className="bg-[#750A0A] p-2 rounded text-white hover:bg-black transition-colors">
//               <Instagram size={18} />
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }
"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full font-sans">
      {/* Top Section - Yellow Background (Swapped) */}
      <div className="bg-[#FFC800] text-[#1a1a1a] pt-16 pb-10 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Logo & About */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white p-1 rounded-full w-12 h-12 flex items-center justify-center shrink-0 shadow-sm">
                <Image
                  src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939097/logo_dl1zqj.png"
                  alt="ASPWC Trust Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div>
                <h2 className="text-[#750A0A] font-bold text-lg leading-tight">ASPWC Trust</h2>
                <p className="text-xs opacity-80 text-[#1a1a1a]">Adhiparasakthi</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed opacity-90 font-medium">
              Empowering communities through healthcare, education, and cultural preservation.
            </p>
            <a 
              href="https://www.omsakthiamma.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#750A0A] text-sm hover:underline mt-2 inline-flex items-center gap-1 font-bold"
            >
              Visit Temple Website &rarr;
            </a>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-[#750A0A] font-bold text-lg mb-4">Quick Links</h3>
            <ul className="flex flex-col space-y-3 text-sm font-medium">
              <li><Link href="/" className="hover:text-[#750A0A] transition-colors">Home</Link></li>
              <li><Link href="/about-us" className="hover:text-[#750A0A] transition-colors">About Us</Link></li>
              <li><Link href="/csr" className="hover:text-[#750A0A] transition-colors">CSR</Link></li>
              <li><Link href="/educational-institution" className="hover:text-[#750A0A] transition-colors">Educational Institution</Link></li>
              <li><Link href="/donate-us" className="hover:text-[#750A0A] transition-colors">Donate</Link></li>
            </ul>
          </div>

          {/* Column 3: Info */}
          <div>
            <h3 className="text-[#750A0A] font-bold text-lg mb-4">Info</h3>
            <ul className="flex flex-col space-y-3 text-sm font-medium">
              <li>
                <Link href="/page/terms_of_service" className="hover:text-[#750A0A] transition-colors">
                  Terms and Condition
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h3 className="text-[#750A0A] font-bold text-lg mb-4">Contact Us</h3>
            <div className="space-y-4 text-sm font-medium">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#750A0A] shrink-0 mt-0.5" />
                <p className="leading-relaxed opacity-90">
                  No.1 GST Road, Adhiparasakthi Siddhar Peeda, <br/>
                  Melmaruvathur - 603319, <br/>
                  TamilNadu, India
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#750A0A] shrink-0" />
                <a href="tel:+914427529313" className="hover:text-[#750A0A] transition-colors">
                  +91 44 27529313
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#750A0A] shrink-0" />
                <a href="mailto:info@acmectrust.org" className="hover:text-[#750A0A] transition-colors">
                  info@acmectrust.org
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar - Red Background (Swapped) */}
      <div className="bg-[#750A0A] text-white py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-bold text-center md:text-left text-white">
            Copyright @ {currentYear} ASPWC Trust. All rights reserved.
          </p>
          
          <div className="flex items-center gap-3">
            <a href="#" className="bg-[#FFC800] p-2 rounded text-[#1a1a1a] hover:bg-white transition-colors">
              <Facebook size={18} />
            </a>
            <a href="#" className="bg-[#FFC800] p-2 rounded text-[#1a1a1a] hover:bg-white transition-colors">
              <Twitter size={18} />
            </a>
            <a href="#" className="bg-[#FFC800] p-2 rounded text-[#1a1a1a] hover:bg-white transition-colors">
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}