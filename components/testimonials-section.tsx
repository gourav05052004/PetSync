"use client"
import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    image: "https://png.pngtree.com/png-vector/20240910/ourmid/pngtree-business-women-avatar-png-image_13805764.png",
    petName: "Bruno",
    petType: "Labrador",
    quote: "PetSync alerted me to Bruno's irregular heartbeat before I noticed any symptoms. The vet said early detection was crucial. I'm so grateful!",
  },
  {
    name: "Arjun Patel",
    location: "Bangalore",
    image: "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg",
    petName: "Milo",
    petType: "Persian Cat",
    quote: "The behavior tracking helped us understand why Milo was acting differently. Turns out he was in pain, and we were able to get him treatment right away.",
  },
  {
    name: "Divya Reddy",
    location: "Delhi",
    image: "https://cdni.iconscout.com/illustration/premium/thumb/female-avatar-illustration-download-in-svg-png-gif-file-formats--young-woman-girl-portraits-pack-people-illustrations-6590630.png?f=webp",
    petName: "Luna",
    petType: "Beagle",
    quote: "Luna escaped from our yard, but thanks to the GPS tracking, we found her within minutes. This product gives us such peace of mind!",
  },
  {
    name: "Rahul Verma",
    location: "Chennai",
    image: "https://www.shutterstock.com/image-vector/man-character-face-avatar-glasses-260nw-562077406.jpg",
    petName: "Rocky",
    petType: "German Shepherd",
    quote: "The activity monitoring helped us get Rocky's weight under control. We can now track his exercise and adjust his diet accordingly.",
  },
  {
    name: "Neha Gupta",
    location: "Hyderabad",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlEGFNlVVc1EAue9bBAdZjeU1fd9yJsQAtUA&s",
    petName: "Coco",
    petType: "Pomeranian",
    quote: "When Coco stopped eating, PetSync alerted me immediately. The vet found early signs of kidney disease we could treat right away.",
  },
  {
    name: "Vikram Singh",
    location: "Pune",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIl-KrJlEXu-oDH-yusd_au0AeOZy98_jMNQ&s",
    petName: "Simba",
    petType: "Golden Retriever",
    quote: "The vet integration feature saved us multiple trips to the clinic. We can now share health data directly with our veterinarian.",
  },
  {
    name: "Ananya Joshi",
    location: "Kolkata",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSitJQXux-ZC8ZRypl7WZ2Fa2zJBBT0QiuBZw&s",
    petName: "Bella",
    petType: "Siamese Cat",
    quote: "Bella's temperature spike was detected overnight. The emergency alert woke me up and we got her to the vet in time.",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-b from-[#FDFDFD] to-[#9990E1]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4A4A4A]">Trusted by Pet Parents Across India</h2>
          <p className="mt-4 text-lg text-[#4A4A4A]/70 max-w-2xl mx-auto">
            Hear from real families who've experienced the difference that smart pet health monitoring can make.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial, index) => (
            <div key={index} className="w-full">
              <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-[#9990E1]/50">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-[#4A4A4A]">{testimonial.name}</h3>
                      <p className="text-[#4A4A4A]/70 text-sm">{testimonial.location}</p>
                      <p className="text-[#9990E1] text-sm">
                        Pet: {testimonial.petName} ({testimonial.petType})
                      </p>
                    </div>
                  </div>
                  <p className="text-[#4A4A4A]/80 italic">{testimonial.quote}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: testimonials.length - 2 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-[#9990E1]' : 'bg-[#9990E1]/30'}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#4A4A4A]/70 text-lg">
            Join over <span className="font-bold text-[#4A4A4A]">10,000</span> happy pet families across India
          </p>
        </div>
      </div>
    </section>
  );
}