import { Bell, Stethoscope, MapPin, Activity, Brain, Calendar, Smartphone, Cloud } from "lucide-react"

const features = [
  {
    icon: <Bell className="h-8 w-8 text-[#F9D5D3]" />,
    title: "Real-time Health Alerts",
    description: "Receive instant notifications about changes in your pet's vital signs or behavior patterns.",
  },
  {
    icon: <Stethoscope className="h-8 w-8 text-[#A7D8F1]" />,
    title: "Vet Recommendations",
    description: "Get AI-powered suggestions for veterinary care based on your pet's health data.",
  },
  {
    icon: <MapPin className="h-8 w-8 text-[#F9D5D3]" />,
    title: "GPS Safety Tracking",
    description: "Always know where your pet is with accurate location tracking and safe zone alerts.",
  },
  {
    icon: <Activity className="h-8 w-8 text-[#A7D8F1]" />,
    title: "Activity Monitoring",
    description: "Track exercise, rest, and play to ensure your pet maintains a healthy lifestyle.",
  },
  {
    icon: <Brain className="h-8 w-8 text-[#F9D5D3]" />,
    title: "Behavior Analysis",
    description: "Understand your pet's unique behaviors and detect changes that might indicate health issues.",
  },
  {
    icon: <Calendar className="h-8 w-8 text-[#A7D8F1]" />,
    title: "Health Records",
    description: "Store vaccination records, medications, and vet visits in one secure digital location.",
  },
  {
    icon: <Smartphone className="h-8 w-8 text-[#F9D5D3]" />,
    title: "Mobile App Control",
    description: "Manage all aspects of your pet's health from our intuitive mobile application.",
  },
  {
    icon: <Cloud className="h-8 w-8 text-[#A7D8F1]" />,
    title: "Cloud Storage",
    description: "All your pet's health data is securely stored and accessible anytime, anywhere.",
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 md:py-24 bg-[#FDFDFD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4A4A4A]">Smart Features for Smarter Pet Care</h2>
          <p className="mt-4 text-lg text-[#4A4A4A]/70 max-w-2xl mx-auto">
            Our AI-powered technology combines with intuitive design to give you everything you need to keep your pet
            healthy and happy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#A7D8F1]/20"
            >
              <div className="bg-[#FDFDFD] p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#4A4A4A] text-center mb-2">{feature.title}</h3>
              <p className="text-[#4A4A4A]/70 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
