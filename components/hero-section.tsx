import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#A7D8F1]/20 to-[#FDFDFD] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4A4A4A] leading-tight">
              Smart Health Monitoring for Your Pet
            </h1>
            <p className="mt-6 text-lg text-[#4A4A4A]/80 max-w-lg mx-auto md:mx-0">
              Keep your furry family member safe and healthy with real-time health tracking, personalized AI insights,
              and instant alerts that connect you directly to veterinary care.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Button className="bg-[#B8E7D4] text-[#4A4A4A] hover:bg-[#A7D8F1] transition-colors text-lg px-8 py-6 h-auto rounded-full">
                Get Started
              </Button>
              <Button
                variant="outline"
                className="border-[#A7D8F1] text-[#4A4A4A] hover:bg-[#A7D8F1]/10 transition-colors text-lg px-8 py-6 h-auto rounded-full"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
            {/* Use one of these options: */}
            {/* Option 1: Public folder */}
            <Image
              src="/PetSync.png"
              alt="Pet with health monitoring device"
              fill
              className="object-cover object-center rounded-2xl"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            
            
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-[#F9D5D3]/20 blur-3xl"></div>
      <div className="absolute top-24 right-0 w-72 h-72 rounded-full bg-[#B8E7D4]/20 blur-3xl"></div>
    </section>
  )
}