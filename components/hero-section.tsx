import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative bg-white py-6 md:py-12 lg:py-16 bg-gradient-petsync">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2D3748] leading-tight">
              <span className="text-[#9990E1]">24/7 Peace of Mind</span><br/>
              For Your Beloved Pet
            </h1>
            <p className="text-xl md:text-2xl text-[#4A5568] max-w-lg mx-auto lg:mx-0">
              Never wonder if your pet is okay again. Our AI-powered monitor detects health issues before they become emergencies, giving you instant alerts and connecting you directly with vets when needed.
            </p>
            {/* <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
              <Button className="bg-[#9990E1] hover:bg-[#9990E1] text-white text-lg px-8 py-6 h-auto rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg">
                Start Protecting Your Pet Today →
              </Button>
              <Button
                variant="outline"
                className="border-[#9990E1] text-[#9990E1] hover:bg-[#c8c3f1] text-lg px-8 py-6 h-auto rounded-full transform hover:scale-105 transition-all"
              >
                See How It Works
              </Button>
            </div> */}
          </div>
          
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
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

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#9990E1]/30 blur-3xl -z-10"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-[#E6FFFA]/30 blur-3xl -z-10"></div>
    </section>
  )
}