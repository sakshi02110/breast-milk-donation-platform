import { Card, CardContent } from "./ui/card"
import { UserCheck, MapPin, Heart, Shield } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: UserCheck,
      title: "Create Your Profile",
      description: "Sign up and complete your profile with relevant information for your role",
      color: "text-[#4a90e2]",
      bgColor: "bg-[#e6f3ff]"
    },
    {
      icon: MapPin,
      title: "Find Your Match",
      description: "Use our location-based system to find donors or recipients nearby",
      color: "text-[#f093fb]",
      bgColor: "bg-[#fdf2f8]"
    },
    {
      icon: Heart,
      title: "Connect Safely",
      description: "Connect through our secure platform with verified community members",
      color: "text-[#4ecdc4]",
      bgColor: "bg-[#f0fff4]"
    },
    {
      icon: Shield,
      title: "Make a Difference",
      description: "Help ensure every baby gets the nutrition they need with proper safety protocols",
      color: "text-[#ffe066]",
      bgColor: "bg-[#fff8dc]"
    }
  ]

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-[#f8fafc] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform makes it simple and safe to connect mothers, donors, healthcare professionals, and organizations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div key={index} className="relative">
                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
                  <CardContent className="p-8 text-center">
                    <div className={`inline-flex p-4 rounded-full ${step.bgColor} mb-6`}>
                      <IconComponent className={`h-8 w-8 ${step.color}`} />
                    </div>
                    <div className="absolute top-4 left-4 w-8 h-8 bg-gradient-to-r from-[#4a90e2] to-[#f093fb] rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-[#4a90e2] to-[#f093fb]"></div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div id="safety" className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#e6f3ff] to-[#fdf2f8] rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Safety is Our Priority
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              All donors are verified, and we follow strict safety protocols. Healthcare professionals provide guidance, and every donation is tracked for quality assurance.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-[#4ecdc4]" />
                <span>Verified Profiles</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-[#4ecdc4]" />
                <span>Medical Oversight</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-[#4ecdc4]" />
                <span>Safe Storage Guidelines</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-[#4ecdc4]" />
                <span>Quality Tracking</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}