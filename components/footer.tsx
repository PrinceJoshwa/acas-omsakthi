
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
                  src="https://ik.imagekit.io/j0xzq9pns/Omsakthi%20/transparent-logo_png_square-removebg-preview.png?updatedAt=1767688734816"
                  alt="ASPWC Trust Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div>
                <h2 className="text-[#750A0A] font-bold text-lg leading-tight">ACAS</h2>
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
              {/* <li><Link href="/csr" className="hover:text-[#750A0A] transition-colors">CSR</Link></li> */}
              {/* <li><Link href="/educational-institution" className="hover:text-[#750A0A] transition-colors">Educational Institution</Link></li> */}
              <li><Link href="/activities" className="hover:text-[#750A0A] transition-colors">Activities</Link></li>
              <li><Link href="/donate" target="_blank" rel="noopener noreferrer" className="hover:text-[#750A0A] transition-colors">Donate</Link></li>
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
                <a href="mailto:acas@omsakthiamma.org" className="hover:text-[#750A0A] transition-colors">
                  acas@omsakthiamma.org
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
            Copyright @ {currentYear} ACAS. All rights reserved.
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