import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    image: "/placeholder.svg?height=100&width=100",
    petName: "Bruno",
    petType: "Labrador",
    quote:
      "PawMonitor alerted me to Bruno's irregular heartbeat before I noticed any symptoms. The vet said early detection was crucial. I'm so grateful!",
  },
  {
    name: "Arjun Patel",
    location: "Bangalore",
    image: "/placeholder.svg?height=100&width=100",
    petName: "Milo",
    petType: "Persian Cat",
    quote:
      "The behavior tracking helped us understand why Milo was acting differently. Turns out he was in pain, and we were able to get him treatment right away.",
  },
  {
    name: "Divya Reddy",
    location: "Delhi",
    image: "/placeholder.svg?height=100&width=100",
    petName: "Luna",
    petType: "Beagle",
    quote:
      "Luna escaped from our yard, but thanks to the GPS tracking, we found her within minutes. This product gives us such peace of mind!",
  },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-b from-[#FDFDFD] to-[#B8E7D4]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4A4A4A]">Trusted by Pet Parents Across India</h2>
          <p className="mt-4 text-lg text-[#4A4A4A]/70 max-w-2xl mx-auto">
            Hear from real families who've experienced the difference that smart pet health monitoring can make.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white border-none shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-[#F9D5D3]">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[#4A4A4A]">{testimonial.name}</h3>
                    <p className="text-[#4A4A4A]/70 text-sm">{testimonial.location}</p>
                    <p className="text-[#A7D8F1] text-sm">
                      Pet: {testimonial.petName} ({testimonial.petType})
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-6 w-6 text-[#F9D5D3]/40" />
                  <p className="text-[#4A4A4A]/80 pl-4 italic">"{testimonial.quote}"</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#4A4A4A]/70 text-lg">
            Join over <span className="font-bold text-[#4A4A4A]">10,000</span> happy pet families across India
          </p>
        </div>
      </div>
    </section>
  )
}
