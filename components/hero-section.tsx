import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative bg-white py-6 md:py-12 lg:py-16 bg-gradient-to-t from-[#9990E1]/10 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Column - Improved for mobile */}
          <div className="text-center lg:text-left space-y-4 md:space-y-6"> {/* Reduced spacing on mobile */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D3748] leading-tight">
              <span className="text-[#9990E1] block mb-2">24/7 Peace of Mind</span>
              <span className="block">For Your Beloved Pet</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-[#4A5568] max-w-lg mx-auto lg:mx-0 px-4 sm:px-0"> {/* Smaller text on mobile */}
              Never wonder if your pet is okay again. Our AI-powered monitor detects health issues before they become emergencies.
            </p>
            {/* Uncomment buttons when needed */}
            {/* <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 md:gap-4 pt-2 md:pt-4">
              <Button className="bg-[#9990E1] hover:bg-[#7B72D1] text-white text-base md:text-lg px-6 md:px-8 py-4 md:py-6 h-auto rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#9990E1]/40">
                Start Protecting Your Pet Today →
              </Button>
            </div> */}
          </div>
          
          {/* Image Column - Unchanged */}
          <div className="relative w-full h-[300px] sm:h-[350px] md:h-[500px] lg:h-[600px]"> {/* Adjusted mobile height */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/PetSync.png"
                alt="Happy dog wearing PetSync health monitor"
                fill
                className="object-contain lg:object-cover object-center"
                priority
                quality={100}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#9990E1]/20 blur-3xl -z-10"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-[#9990E1]/10 blur-3xl -z-10"></div>
    </section>
  )
}