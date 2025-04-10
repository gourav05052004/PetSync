"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-[#FDFDFD] sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-[#4A4A4A]">
                Pet<span className="text-[#B8E7D4]">Sync</span>
              </span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-[#4A4A4A] hover:text-[#A7D8F1] transition-colors">
              Features
            </Link>
            <Link href="#testimonials" className="text-[#4A4A4A] hover:text-[#A7D8F1] transition-colors">
              Testimonials
            </Link>
            <Link href="#pricing" className="text-[#4A4A4A] hover:text-[#A7D8F1] transition-colors">
              Pricing
            </Link>
            <Link href="#faq" className="text-[#4A4A4A] hover:text-[#A7D8F1] transition-colors">
              FAQ
            </Link>
            <Button className="bg-[#B8E7D4] text-[#4A4A4A] hover:bg-[#A7D8F1] transition-colors">Get Started</Button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#4A4A4A]">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#FDFDFD] shadow-lg rounded-b-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#features"
              className="block px-3 py-2 text-[#4A4A4A] hover:bg-[#F9D5D3] hover:text-[#4A4A4A] rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#testimonials"
              className="block px-3 py-2 text-[#4A4A4A] hover:bg-[#F9D5D3] hover:text-[#4A4A4A] rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="#pricing"
              className="block px-3 py-2 text-[#4A4A4A] hover:bg-[#F9D5D3] hover:text-[#4A4A4A] rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#faq"
              className="block px-3 py-2 text-[#4A4A4A] hover:bg-[#F9D5D3] hover:text-[#4A4A4A] rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Button className="w-full bg-[#B8E7D4] text-[#4A4A4A] hover:bg-[#A7D8F1] transition-colors">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
