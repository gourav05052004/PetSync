import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-[#4A4A4A] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">
              Paw<span className="text-[#B8E7D4]">Monitor</span>
            </h3>
            <p className="text-white/70 mb-4">
              Smart health monitoring for the pets you love. Keeping tails wagging and families happy.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[#B8E7D4] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-[#B8E7D4] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-[#B8E7D4] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-[#B8E7D4] transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="text-white/70 hover:text-[#B8E7D4] transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-white/70 hover:text-[#B8E7D4] transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-white/70 hover:text-[#B8E7D4] transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-white/70 hover:text-[#B8E7D4] transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-[#B8E7D4] transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-[#B8E7D4] mr-2 shrink-0 mt-0.5" />
                <span className="text-white/70">support@pawmonitor.in</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-[#B8E7D4] mr-2 shrink-0 mt-0.5" />
                <span className="text-white/70">+91 98765 43210</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#B8E7D4] mr-2 shrink-0 mt-0.5" />
                <span className="text-white/70">123 Pet Care Street, Bangalore, India 560001</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-white/70 mb-4">Get the latest updates on pet health and special offers.</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button className="bg-[#B8E7D4] text-[#4A4A4A] hover:bg-[#B8E7D4]/80 transition-colors whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">© {new Date().getFullYear()} PawMonitor. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-white/60 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-white/60 hover:text-white text-sm">
                Terms of Service
              </Link>
              <Link href="#" className="text-white/60 hover:text-white text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
