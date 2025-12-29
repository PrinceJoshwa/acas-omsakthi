// // // "use client"

// // // import { useState, useEffect } from "react"
// // // import Link from "next/link"
// // // import Image from "next/image"
// // // import { motion, AnimatePresence } from "framer-motion"
// // // import { Menu, X, Heart } from "lucide-react"
// // // import { Button } from "@/components/ui/button"

// // // // Updated Menu Items based on your request
// // // const navItems = [
// // //   { label: "Home", href: "/" },
// // //   { label: "About the trust", href: "/about-us" },
// // //   { label: "80G", href: "/80g" },
// // //   { label: "CSR", href: "/csr" },
// // //   { label: "Educational Institution", href: "/educational-institution" },
// // //   // { label: "Donate", href: "/donate-us" },
// // // ]

// // // export default function Header() {
// // //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
// // //   const [scrolled, setScrolled] = useState(false)

// // //   useEffect(() => {
// // //     const handleScroll = () => {
// // //       setScrolled(window.scrollY > 20)
// // //     }
// // //     window.addEventListener("scroll", handleScroll)
// // //     return () => window.removeEventListener("scroll", handleScroll)
// // //   }, [])

// // //   return (
// // //     <header
// // //       className={`sticky top-0 z-50 w-full transition-all duration-500 ${
// // //         scrolled ? "bg-[#ffc107] backdrop-blur-md shadow-2xl py-2" : "bg-[#ffc107] py-3 shadow-lg"
// // //       }`}
// // //     >
// // //       <div className="max-w-[95%] mx-auto px-4 md:px-6">
// // //         <div className="flex items-center justify-between">
// // //           {/* Logo Area */}
// // //           <Link href="/" className="flex items-center gap-3 group">
// // //             <motion.div
// // //               whileHover={{ rotate: 360 }}
// // //               transition={{ duration: 0.6 }}
// // //               className="relative w-12 h-12 md:w-14 md:h-14 bg-white rounded-full p-1 shadow-lg group-hover:shadow-xl transition-shadow overflow-hidden"
// // //             >
// // //               <Image
// // //                 src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939097/logo_dl1zqj.png"
// // //                 alt="ASPWCT Trust Logo"
// // //                 fill
// // //                 className="object-contain p-1"
// // //                 sizes="(max-width: 768px) 48px, 56px"
// // //                 priority
// // //               />
// // //             </motion.div>
// // //             <div className="flex flex-col leading-none">
// // //               <span className="font-black text-base md:text-xl text-[#1a1a1a] tracking-tight group-hover:text-[#8a0d08] transition-colors">
// // //                 ASPWCT Trust
// // //               </span>
// // //               <span className="text-[10px] md:text-sm font-bold text-[#1a1a1a]/80 uppercase tracking-wider hidden sm:block">
// // //                 Adhiparasakthi
// // //               </span>
// // //             </div>
// // //           </Link>

// // //           {/* Desktop Nav */}
// // //           <nav className="hidden lg:flex items-center gap-1 bg-black/10 p-1.5 rounded-full">
// // //             {navItems.map((item) => (
// // //               <Link
// // //                 key={item.label}
// // //                 href={item.href}
// // //                 className="px-5 py-2.5 rounded-full text-sm font-black transition-all duration-300 text-[#1a1a1a] hover:bg-white hover:text-[#a7150b] hover:shadow-md hover:scale-105"
// // //               >
// // //                 {item.label}
// // //               </Link>
// // //             ))}
// // //           </nav>

// // //           {/* Right Side Buttons */}
// // //           <div className="flex items-center gap-3">
// // //             {/* CTA Button - kept as 'Donate' for visibility, though it is also in the menu now */}
// // //             <Link href="/donate-us" className="hidden sm:block">
// // //               <Button className="bg-[#a7150b] text-white hover:bg-[#8a0d08] rounded-full font-black shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
// // //                 <Heart className="w-4 h-4 mr-2 fill-current" />
// // //                 Donate
// // //               </Button>
// // //             </Link>

// // //             <button
// // //               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
// // //               className="lg:hidden p-2 bg-white/20 hover:bg-white/40 text-[#1a1a1a] rounded-full transition-colors backdrop-blur-sm"
// // //             >
// // //               {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Mobile Menu */}
// // //       <AnimatePresence>
// // //         {mobileMenuOpen && (
// // //           <motion.div
// // //             initial={{ opacity: 0, height: 0 }}
// // //             animate={{ opacity: 1, height: "auto" }}
// // //             exit={{ opacity: 0, height: 0 }}
// // //             transition={{ duration: 0.3 }}
// // //             className="lg:hidden bg-white border-t-4 border-[#1a1a1a] overflow-hidden shadow-2xl"
// // //           >
// // //             <nav className="flex flex-col p-4 space-y-1">
// // //               {navItems.map((item) => (
// // //                 <Link
// // //                   key={item.label}
// // //                   href={item.href}
// // //                   className="block px-4 py-3 font-black text-gray-800 hover:text-[#a7150b] hover:bg-[#ffc107]/10 rounded-lg transition-all duration-300"
// // //                   onClick={() => setMobileMenuOpen(false)}
// // //                 >
// // //                   {item.label}
// // //                 </Link>
// // //               ))}
// // //               {/* Mobile CTA Button */}
// // //               <Link
// // //                 href="/donate-us"
// // //                 className="block px-4 py-3 font-black text-white bg-[#a7150b] hover:bg-[#8a0d08] rounded-lg text-center mt-2 transition-colors duration-300"
// // //                 onClick={() => setMobileMenuOpen(false)}
// // //               >
// // //                 <Heart className="inline w-4 h-4 mr-2 fill-current" />
// // //                 Donate Now
// // //               </Link>
// // //             </nav>
// // //           </motion.div>
// // //         )}
// // //       </AnimatePresence>
// // //     </header>
// // //   )
// // // }

// // "use client"

// // import { useState, useEffect } from "react"
// // import Link from "next/link"
// // import Image from "next/image"
// // import { usePathname } from "next/navigation" // Added for active state
// // import { motion, AnimatePresence } from "framer-motion"
// // import { Menu, X, Heart } from "lucide-react"
// // import { Button } from "@/components/ui/button"

// // // Updated Menu Items
// // const navItems = [
// //   { label: "Home", href: "/" },
// //   { label: "About the trust", href: "/about-us" },
// //   { label: "Donate", href: "/80g-donate" },
// //   { label: "CSR", href: "/csr" },
// //   { label: "Educational Institution", href: "/educational-institution" },
// //   // { label: "Donate", href: "/donate-us" },
// // ]

// // export default function Header() {
// //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
// //   const [scrolled, setScrolled] = useState(false)
// //   const pathname = usePathname() // Hook to get current path

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setScrolled(window.scrollY > 20)
// //     }
// //     window.addEventListener("scroll", handleScroll)
// //     return () => window.removeEventListener("scroll", handleScroll)
// //   }, [])

// //   return (
// //     <header
// //       className={`sticky top-0 z-50 w-full transition-all duration-500 ${
// //         scrolled ? "bg-[#ffc107] backdrop-blur-md shadow-2xl py-2" : "bg-[#ffc107] py-3 shadow-lg"
// //       }`}
// //     >
// //       <div className="max-w-[95%] mx-auto px-4 md:px-6">
// //         <div className="flex items-center justify-between">
// //           {/* Logo Area */}
// //           <Link href="/" className="flex items-center gap-3 group">
// //             <motion.div
// //               whileHover={{ rotate: 360 }}
// //               transition={{ duration: 0.6 }}
// //               className="relative w-12 h-12 md:w-14 md:h-14 bg-white rounded-full p-1 shadow-lg group-hover:shadow-xl transition-shadow overflow-hidden"
// //             >
// //               <Image
// //                 src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939097/logo_dl1zqj.png"
// //                 alt="ASPWCT Trust Logo"
// //                 fill
// //                 className="object-contain p-1"
// //                 sizes="(max-width: 768px) 48px, 56px"
// //                 priority
// //               />
// //             </motion.div>
// //             <div className="flex flex-col leading-none">
// //               <span className="font-black text-base md:text-xl text-[#1a1a1a] tracking-tight group-hover:text-[#8a0d08] transition-colors">
// //                 ASPWCT Trust
// //               </span>
// //               <span className="text-[10px] md:text-sm font-bold text-[#1a1a1a]/80 uppercase tracking-wider hidden sm:block">
// //                 Adhiparasakthi
// //               </span>
// //             </div>
// //           </Link>

// //           {/* Desktop Nav */}
// //           <nav className="hidden lg:flex items-center gap-1 bg-black/10 p-1.5 rounded-full">
// //             {navItems.map((item) => {
// //               const isActive = pathname === item.href
              
// //               return (
// //                 <Link
// //                   key={item.label}
// //                   href={item.href}
// //                   className={`px-5 py-2.5 rounded-full text-sm font-black transition-all duration-300 hover:scale-105 ${
// //                     isActive 
// //                       ? "bg-white text-[#a7150b] shadow-md" // Active Style
// //                       : "text-[#1a1a1a] hover:bg-white hover:text-[#a7150b] hover:shadow-md" // Default Style
// //                   }`}
// //                 >
// //                   {item.label}
// //                 </Link>
// //               )
// //             })}
// //           </nav>

// //           {/* Right Side Buttons */}
// //           <div className="flex items-center gap-3">
// //             {/* CTA Button */}
// //             <Link href="/donate-us" className="hidden sm:block">
// //               <Button className="bg-[#a7150b] text-white hover:bg-[#8a0d08] rounded-full font-black shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
// //                 <Heart className="w-4 h-4 mr-2 fill-current" />
// //                 Donate
// //               </Button>
// //             </Link>

// //             <button
// //               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
// //               className="lg:hidden p-2 bg-white/20 hover:bg-white/40 text-[#1a1a1a] rounded-full transition-colors backdrop-blur-sm"
// //             >
// //               {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Mobile Menu */}
// //       <AnimatePresence>
// //         {mobileMenuOpen && (
// //           <motion.div
// //             initial={{ opacity: 0, height: 0 }}
// //             animate={{ opacity: 1, height: "auto" }}
// //             exit={{ opacity: 0, height: 0 }}
// //             transition={{ duration: 0.3 }}
// //             className="lg:hidden bg-white border-t-4 border-[#1a1a1a] overflow-hidden shadow-2xl"
// //           >
// //             <nav className="flex flex-col p-4 space-y-1">
// //               {navItems.map((item) => {
// //                  const isActive = pathname === item.href
// //                  return (
// //                   <Link
// //                     key={item.label}
// //                     href={item.href}
// //                     className={`block px-4 py-3 font-black rounded-lg transition-all duration-300 ${
// //                        isActive 
// //                        ? "bg-[#ffc107]/20 text-[#a7150b]" // Active Mobile Style
// //                        : "text-gray-800 hover:text-[#a7150b] hover:bg-[#ffc107]/10"
// //                     }`}
// //                     onClick={() => setMobileMenuOpen(false)}
// //                   >
// //                     {item.label}
// //                   </Link>
// //                  )
// //               })}
// //               {/* Mobile CTA Button */}
// //               <Link
// //                 href="/donate-us"
// //                 className="block px-4 py-3 font-black text-white bg-[#a7150b] hover:bg-[#8a0d08] rounded-lg text-center mt-2 transition-colors duration-300"
// //                 onClick={() => setMobileMenuOpen(false)}
// //               >
// //                 <Heart className="inline w-4 h-4 mr-2 fill-current" />
// //                 Donate Now
// //               </Link>
// //             </nav>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </header>
// //   )
// // }

// "use client"

// import { useState, useEffect } from "react"
// import Link from "next/link"
// import Image from "next/image"
// import { usePathname } from "next/navigation" // Added for active state
// import { motion, AnimatePresence } from "framer-motion"
// import { Menu, X, Heart } from "lucide-react"
// import { Button } from "@/components/ui/button"

// // Updated Menu Items
// const navItems = [
//   { label: "Home", href: "/" },
//   { label: "About the trust", href: "/about-us" },
//   { label: "Donate", href: "/80g-donate" },
//   { label: "CSR Donation", href: "/csr" },
//   // { label: "FCRA", href: "/fcra" },
//   { label: "Educational Institution", href: "/educational-institution" },
//   // { label: "Donate", href: "/donate-us" },
// ]

// export default function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)
//   const pathname = usePathname() // Hook to get current path

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20)
//     }
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   return (
//     <header
//       className={`sticky top-0 z-50 w-full transition-all duration-500 ${
//         scrolled ? "bg-[#ffc107] backdrop-blur-md shadow-2xl py-2" : "bg-[#ffc107] py-3 shadow-lg"
//       }`}
//     >
//       <div className="max-w-[95%] mx-auto px-4 md:px-6">
//         <div className="flex items-center justify-between">
//           {/* Logo Area */}
//           <Link href="/" className="flex items-center gap-3 group">
//             <motion.div
//               whileHover={{ rotate: 360 }}
//               transition={{ duration: 0.6 }}
//               className="relative w-12 h-12 md:w-14 md:h-14 bg-white rounded-full p-1 shadow-lg group-hover:shadow-xl transition-shadow overflow-hidden"
//             >
//               <Image
//                 src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939097/logo_dl1zqj.png"
//                 alt="aspwc Trust Logo"
//                 fill
//                 className="object-contain p-1"
//                 sizes="(max-width: 768px) 48px, 56px"
//                 priority
//               />
//             </motion.div>
//             <div className="flex flex-col leading-none">
//               <span className="font-black text-base md:text-xl text-[#1a1a1a] tracking-tight group-hover:text-[#8a0d08] transition-colors">
//                 ASPWCT Trust
//               </span>
//               <span className="text-[10px] md:text-sm font-bold text-[#1a1a1a]/80 uppercase tracking-wider hidden sm:block">
//                 Adhiparasakthi
//               </span>
//             </div>
//           </Link>

//           {/* Desktop Nav */}
//           <nav className="hidden lg:flex items-center gap-1 bg-black/10 p-1.5 rounded-full">
//             {navItems.map((item) => {
//               const isActive = pathname === item.href
              
//               return (
//                 <Link
//                   key={item.label}
//                   href={item.href}
//                   className={`px-5 py-2.5 rounded-full text-sm font-black transition-all duration-300 hover:scale-105 ${
//                     isActive 
//                       ? "bg-white text-[#a7150b] shadow-md" // Active Style
//                       : "text-[#1a1a1a] hover:bg-white hover:text-[#a7150b] hover:shadow-md" // Default Style
//                   }`}
//                 >
//                   {item.label}
//                 </Link>
//               )
//             })}
//           </nav>

//           {/* Right Side Buttons */}
//           <div className="flex items-center gap-3">
//             {/* CTA Button */}
//             {/* <Link href="/donate-us" className="hidden sm:block"> */}
//             <Link href="https://donations.acmectrust.org/donate-category" className="hidden sm:block">
//               <Button className="bg-[#a7150b] text-white hover:bg-[#8a0d08] rounded-full font-black shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
//                 <Heart className="w-4 h-4 mr-2 fill-current" />
//                 Donate
//               </Button>
//             </Link>

//             <button
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="lg:hidden p-2 bg-white/20 hover:bg-white/40 text-[#1a1a1a] rounded-full transition-colors backdrop-blur-sm"
//             >
//               {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {mobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3 }}
//             className="lg:hidden bg-white border-t-4 border-[#1a1a1a] overflow-hidden shadow-2xl"
//           >
//             <nav className="flex flex-col p-4 space-y-1">
//               {navItems.map((item) => {
//                  const isActive = pathname === item.href
//                  return (
//                   <Link
//                     key={item.label}
//                     href={item.href}
//                     className={`block px-4 py-3 font-black rounded-lg transition-all duration-300 ${
//                        isActive 
//                        ? "bg-[#ffc107]/20 text-[#a7150b]" // Active Mobile Style
//                        : "text-gray-800 hover:text-[#a7150b] hover:bg-[#ffc107]/10"
//                     }`}
//                     onClick={() => setMobileMenuOpen(false)}
//                   >
//                     {item.label}
//                   </Link>
//                  )
//               })}
//               {/* Mobile CTA Button */}
//               <Link
//                 href="/donate-us"
//                 className="block px-4 py-3 font-black text-white bg-[#a7150b] hover:bg-[#8a0d08] rounded-lg text-center mt-2 transition-colors duration-300"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 <Heart className="inline w-4 h-4 mr-2 fill-current" />
//                 Donate Now
//               </Link>
//             </nav>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   )
// }

"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

// Menu Items
const navItems = [
  { label: "Home", href: "/" },
  { label: "About the trust", href: "/about-us" },
  { label: "Donate", href: "/80g-donate" },
  { label: "CSR Donation", href: "/csr" },
  { label: "Educational Institution", href: "/educational-institution" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "bg-[#a7150b] backdrop-blur-md shadow-2xl py-2" : "bg-[#a7150b] py-3 shadow-lg"
      }`}
    >
      <div className="max-w-[95%] mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo Area */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="relative w-12 h-12 md:w-14 md:h-14 bg-white rounded-full p-1 shadow-lg group-hover:shadow-xl transition-shadow overflow-hidden"
            >
              <Image
                src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939097/logo_dl1zqj.png"
                alt="ASPWCT Trust Logo"
                fill
                className="object-contain p-1"
                sizes="(max-width: 768px) 48px, 56px"
                priority
              />
            </motion.div>
            <div className="flex flex-col leading-none">
              <span className="font-black text-base md:text-xl text-white tracking-tight group-hover:text-[#ffc107] transition-colors">
                ASPWCT Trust
              </span>
              <span className="text-[10px] md:text-sm font-bold text-white/80 uppercase tracking-wider hidden sm:block">
                Adhiparasakthi
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 bg-black/20 p-1.5 rounded-full">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-5 py-2.5 rounded-full text-sm font-black transition-all duration-300 hover:scale-105 ${
                    isActive 
                      ? "bg-white text-[#a7150b] shadow-md" // Active: White BG, Red Text
                      : "text-white hover:bg-white hover:text-[#a7150b] hover:shadow-md" // Default: White Text, Hover White BG
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Right Side Buttons */}
          <div className="flex items-center gap-3">
            {/* CTA Button - Now Yellow with Black text */}
            <Link href="https://donations.acmectrust.org/donate-category" className="hidden sm:block">
              <Button className="bg-[#ffc107] text-[#1a1a1a] hover:bg-[#e6ac00] rounded-full font-black shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Heart className="w-4 h-4 mr-2 fill-current" />
                Donate
              </Button>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-sm"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t-4 border-[#ffc107] overflow-hidden shadow-2xl"
          >
            <nav className="flex flex-col p-4 space-y-1">
              {navItems.map((item) => {
                 const isActive = pathname === item.href
                 return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`block px-4 py-3 font-black rounded-lg transition-all duration-300 ${
                       isActive 
                       ? "bg-[#a7150b]/10 text-[#a7150b]" 
                       : "text-gray-800 hover:text-[#a7150b] hover:bg-[#a7150b]/5"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                 )
              })}
              {/* Mobile CTA Button */}
              <Link
                href="/donate-us"
                className="block px-4 py-3 font-black text-[#1a1a1a] bg-[#ffc107] hover:bg-[#e6ac00] rounded-lg text-center mt-2 transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Heart className="inline w-4 h-4 mr-2 fill-current" />
                Donate Now
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}