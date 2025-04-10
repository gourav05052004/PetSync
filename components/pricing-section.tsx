import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

const ownerPlans = [
  {
    name: "Basic (Self Monitoring)",
    deviceCost: "₹3999",
    subscription: "No Monthly Fee",
    description: "Essential health monitoring for budget-conscious pet parents",
    features: [
      "Real-time health tracking",
      "Health alerts to owner",
      "7-day health history",
      "Mobile app access",
      "Basic activity monitoring"
    ],
    buttonText: "Get Basic Plan",
    highlighted: false
  },
  {
    name: "Standard (Owner + Vet)",
    deviceCost: "₹3999",
    subscription: "₹799/month",
    description: "Expert-backed care with vet integration",
    features: [
      "All Basic features",
      "AI-powered health insights",
      "Vet reports & integration",
      "30-day health history",
      "GPS & behavior alerts",
      "Priority customer support"
    ],
    buttonText: "Choose Standard",
    highlighted: true
  },
  {
    name: "Family Plan",
    deviceCost: "₹3999/pet",
    subscription: "₹1499/month (up to 4 pets)",
    description: "Complete care for multiple pets",
    features: [
      "All Standard features",
      "Shared dashboard for all pets",
      "Emergency vet access",
      "Personalized reports",
      "Behavior comparison",
      "Family sharing options"
    ],
    buttonText: "Family Bundle",
    highlighted: false
  }
];

const addOns = [
  {
    name: "Diagnostic Boost",
    price: "₹299/month",
    features: [
      "Monthly health score",
      "AI diagnostics",
      "Early condition detection",
      "Detailed trend analysis"
    ]
  },
  {
    name: "Emergency Consults",
    price: "₹199/consult",
    features: [
      "Pay-per-use vet consultation",
      "Available for Basic users",
      "24/7 access to vets",
      "Direct chat option"
    ]
  },
  {
    name: "Annual Plan Discount",
    price: "₹7999/year",
    features: [
      "Save ₹1600 on Standard Plan",
      "One upfront payment",
      "All Standard features",
      "Priority support"
    ]
  }
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-[#FDFDFD] bg-gradient-petsync">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4A4A4A]">PetSync Pricing Plans</h2>
          <p className="mt-4 text-lg text-[#4A4A4A]/70 max-w-2xl mx-auto">
            Choose the perfect plan for your pet's needs. All plans include our smart wearable device.
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-bold text-[#4A4A4A] mb-8 text-center">🎯 Core Plans (For Pet Owners)</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ownerPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                  plan.highlighted 
                    ? "border-2 border-[#9990E1] shadow-xl shadow-[#9990E1]/10 ring-1 ring-[#9990E1]/20" 
                    : "border border-gray-200 shadow-lg hover:shadow-xl"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 right-0 bg-[#9990E1] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    Most Popular
                  </div>
                )}
                <CardHeader className="pt-8 pb-2">
                  <h3 className="text-2xl font-bold text-center text-[#4A4A4A]">{plan.name}</h3>
                  <div className="text-center mt-4 space-y-2">
                    <p className="text-lg">
                      <span className="font-semibold">Device:</span> 
                      <span className="text-[#9990E1] font-bold"> {plan.deviceCost}</span>
                    </p>
                    <p className="text-lg">
                      <span className="font-semibold">Subscription:</span> 
                      <span className="text-[#9990E1] font-bold"> {plan.subscription}</span>
                    </p>
                  </div>
                  <p className="text-center text-gray-600 mt-3">{plan.description}</p>
                </CardHeader>
                <CardContent className="pt-4 pb-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className="bg-[#9990E1]/10 p-1 rounded-full mr-3">
                          <Check className="h-4 w-4 text-[#9990E1]" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pb-6 pt-0">
                  <Button
                    className={`w-full rounded-full py-6 text-lg font-medium transition-all ${
                      plan.highlighted
                        ? "bg-[#9990E1] hover:bg-[#7B72D1] text-white shadow-lg hover:shadow-[#9990E1]/30"
                        : "bg-white text-[#9990E1] border-2 border-[#9990E1] hover:bg-[#9990E1]/10 hover:shadow-md"
                    }`}
                  >
                    {plan.buttonText}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-bold text-[#4A4A4A] mb-8 text-center">🧪 Add-ons & Upgrades</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {addOns.map((addon, index) => (
              <Card 
                key={index} 
                className="border border-gray-200 hover:border-[#9990E1]/50 shadow-lg hover:shadow-xl transition-all"
              >
                <CardHeader className="pt-8 pb-2">
                  <h3 className="text-xl font-bold text-center text-[#4A4A4A]">{addon.name}</h3>
                  <p className="text-xl font-semibold text-center text-[#9990E1] mt-2">{addon.price}</p>
                </CardHeader>
                <CardContent className="pt-4 pb-6">
                  <ul className="space-y-3">
                    {addon.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className="bg-[#9990E1]/10 p-1 rounded-full mr-3">
                          <Check className="h-4 w-4 text-[#9990E1]" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pb-6 pt-0">
                  <Button className="w-full bg-white text-[#9990E1] border-2 border-[#9990E1] hover:bg-[#9990E1]/10 hover:shadow-md rounded-full py-6 text-lg font-medium transition-all">
                    Add to Plan
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* ... (rest of your sections with similar card styling improvements) */}
      </div>
    </section>
  )
}