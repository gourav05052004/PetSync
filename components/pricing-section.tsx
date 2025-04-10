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
    <section id="pricing" className="py-16 md:py-24 bg-[#FDFDFD]">
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
                className={`border ${
                  plan.highlighted ? "border-[#B8E7D4] shadow-lg shadow-[#B8E7D4]/20" : "border-[#A7D8F1]/20 shadow-md"
                } hover:shadow-xl transition-shadow duration-300 overflow-hidden`}
              >
                {plan.highlighted && (
                  <div className="bg-[#B8E7D4] text-[#4A4A4A] text-center py-2 font-medium">Most Popular</div>
                )}
                <CardHeader className="pt-6 pb-2">
                  <h3 className="text-2xl font-bold text-center text-[#4A4A4A]">{plan.name}</h3>
                  <div className="text-center mt-4">
                    <p className="text-lg"><span className="font-semibold">Device:</span> {plan.deviceCost}</p>
                    <p className="text-lg"><span className="font-semibold">Subscription:</span> {plan.subscription}</p>
                  </div>
                  <p className="text-center text-[#4A4A4A]/70 mt-2">{plan.description}</p>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-[#B8E7D4] mr-2 shrink-0 mt-0.5" />
                        <span className="text-[#4A4A4A]/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pb-6">
                  <Button
                    className={`w-full ${
                      plan.highlighted ? "bg-[#B8E7D4] hover:bg-[#B8E7D4]/80" : "bg-[#A7D8F1] hover:bg-[#A7D8F1]/80"
                    } text-[#4A4A4A] transition-colors rounded-full py-6`}
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
              <Card key={index} className="border border-[#A7D8F1]/20 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pt-6 pb-2">
                  <h3 className="text-xl font-bold text-center text-[#4A4A4A]">{addon.name}</h3>
                  <p className="text-lg font-semibold text-center text-[#4A4A4A] mt-2">{addon.price}</p>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-3">
                    {addon.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-[#B8E7D4] mr-2 shrink-0 mt-0.5" />
                        <span className="text-[#4A4A4A]/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pb-6">
                  <Button className="w-full bg-[#A7D8F1] hover:bg-[#A7D8F1]/80 text-[#4A4A4A] rounded-full py-6">
                    Add to Plan
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-bold text-[#4A4A4A] mb-8 text-center">🏥 Vet/Clinic Plans</h3>
          <div className="max-w-2xl mx-auto">
            <Card className="border border-[#A7D8F1] shadow-md">
              <CardHeader className="pt-6 pb-2">
                <h3 className="text-2xl font-bold text-center text-[#4A4A4A]">Vet Dashboard Plan</h3>
                <div className="text-center mt-4">
                  <p className="text-lg"><span className="font-semibold">Device Cost:</span> ₹3499/unit</p>
                  <p className="text-lg"><span className="font-semibold">Subscription:</span> ₹499/month/pet</p>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#B8E7D4] mr-2 shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]/80">Multi-pet monitoring dashboard</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#B8E7D4] mr-2 shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]/80">Shared owner-vet interface</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#B8E7D4] mr-2 shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]/80">Automated reminders & alerts</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#B8E7D4] mr-2 shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]/80">Treatment plan integration</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#B8E7D4] mr-2 shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]/80">Client communication tools</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="pb-6">
                <Button className="w-full bg-[#A7D8F1] hover:bg-[#A7D8F1]/80 text-[#4A4A4A] rounded-full py-6">
                  Contact for Clinic Plan
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-[#4A4A4A] mb-8 text-center">🎁 Special Access Plans</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border border-[#A7D8F1]/20 shadow-md">
              <CardHeader className="pt-6 pb-2">
                <h3 className="text-xl font-bold text-center text-[#4A4A4A]">Trial / Freemium</h3>
                <p className="text-lg font-semibold text-center text-[#4A4A4A] mt-2">₹3999 (device)</p>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#B8E7D4] mr-2 shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]/80">30-day full Standard features</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#B8E7D4] mr-2 shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]/80">Downgrade or upgrade after trial</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#B8E7D4] mr-2 shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]/80">No obligation to continue</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="pb-6">
                <Button className="w-full bg-[#A7D8F1] hover:bg-[#A7D8F1]/80 text-[#4A4A4A] rounded-full py-6">
                  Start Free Trial
                </Button>
              </CardFooter>
            </Card>

            <Card className="border border-[#A7D8F1]/20 shadow-md">
              <CardHeader className="pt-6 pb-2">
                <h3 className="text-xl font-bold text-center text-[#4A4A4A]">Pay-as-you-Go</h3>
                <p className="text-lg font-semibold text-center text-[#4A4A4A] mt-2">₹3999 (device)</p>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#B8E7D4] mr-2 shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]/80">No monthly fee</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#B8E7D4] mr-2 shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]/80">₹99/report when needed</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#B8E7D4] mr-2 shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]/80">Basic tracking always active</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="pb-6">
                <Button className="w-full bg-[#A7D8F1] hover:bg-[#A7D8F1]/80 text-[#4A4A4A] rounded-full py-6">
                  Choose Flexible Plan
                </Button>
              </CardFooter>
            </Card>

            <Card className="border border-[#A7D8F1]/20 shadow-md">
              <CardHeader className="pt-6 pb-2">
                <h3 className="text-xl font-bold text-center text-[#4A4A4A]">B2B Insights Plan</h3>
                <p className="text-lg font-semibold text-center text-[#4A4A4A] mt-2">Custom Pricing</p>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#B8E7D4] mr-2 shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]/80">Anonymized pet health data</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#B8E7D4] mr-2 shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]/80">For research & development</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#B8E7D4] mr-2 shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]/80">Pharma & food companies</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#B8E7D4] mr-2 shrink-0 mt-0.5" />
                    <span className="text-[#4A4A4A]/80">Custom analytics dashboard</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="pb-6">
                <Button className="w-full bg-[#A7D8F1] hover:bg-[#A7D8F1]/80 text-[#4A4A4A] rounded-full py-6">
                  Request Enterprise Demo
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#4A4A4A]/70">
            All plans come with a 30-day money-back guarantee. Device warranty included for 1 year.
          </p>
        </div>
      </div>
    </section>
  )
}