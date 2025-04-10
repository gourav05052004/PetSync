import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does the pet health monitoring device work?",
    answer:
      "Our device attaches comfortably to your pet's collar and uses advanced sensors to track vital signs, activity levels, and location. The data is transmitted to our secure cloud and analyzed by our AI to provide real-time insights about your pet's health and behavior.",
  },
  {
    question: "Is the device comfortable for my pet to wear?",
    answer:
      "Yes! We've designed our device to be lightweight, waterproof, and comfortable. Most pets forget they're wearing it within minutes. The device weighs less than 20 grams and is suitable for pets of all sizes.",
  },
  {
    question: "How accurate is the health monitoring?",
    answer:
      "Our technology has been tested and validated by veterinarians across India. The device provides clinical-grade accuracy for vital signs monitoring, with over 95% accuracy in detecting abnormal health patterns.",
  },
  {
    question: "What kind of battery life can I expect?",
    answer:
      "The device has a battery life of up to 7 days on a single charge, depending on usage. Charging takes approximately 2 hours, and you'll receive notifications when the battery is running low.",
  },
  {
    question: "Can I monitor multiple pets with one account?",
    answer:
      "Yes! Our Family plan allows you to monitor up to 4 pets from a single dashboard. Each pet will need their own monitoring device, but you can manage them all from one account.",
  },
  {
    question: "What if I need to cancel my subscription?",
    answer:
      "You can cancel your subscription at any time without penalty. We offer a 30-day money-back guarantee if you're not completely satisfied with our service.",
  },
  {
    question: "Is my pet's data secure?",
    answer:
      "Absolutely. We use bank-level encryption to protect all your pet's health data. Your information is never sold to third parties, and you have complete control over who can access your pet's information.",
  },
  {
    question: "Do I need a special veterinarian to use this service?",
    answer:
      "No, our service works independently of your veterinarian. However, you can share your pet's health reports with any vet to provide them with valuable insights during checkups or emergencies.",
  },
]

export default function FaqSection() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-gradient-to-b from-[#B8E7D4]/10 to-[#FDFDFD]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4A4A4A]">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-[#4A4A4A]/70">
            Everything you need to know about our pet health monitoring service.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-[#A7D8F1]/30">
              <AccordionTrigger className="text-[#4A4A4A] hover:text-[#A7D8F1] text-left font-medium py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#4A4A4A]/80 pb-4">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-[#4A4A4A]/70">
            Still have questions?{" "}
            <a href="#" className="text-[#A7D8F1] font-medium hover:underline">
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
