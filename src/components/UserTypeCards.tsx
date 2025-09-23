import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Heart, Users, Stethoscope, Building2 } from "lucide-react"
import { useApp } from "../App"

export function UserTypeCards() {
  const { setShowAuthModal } = useApp()

  const userTypes = [
    {
      title: "Mothers in Need",
      description: "Find verified donors in your area and request safe breast milk for your baby",
      icon: Heart,
      color: "bg-[#fdf2f8]",
      iconColor: "text-[#f093fb]",
      buttonColor: "bg-[#f093fb] hover:bg-[#e083eb]",
      features: ["Find nearby donors", "Request milk safely", "Track your requests", "24/7 support"]
    },
    {
      title: "Donor Mothers",
      description: "Share your excess breast milk and help babies in need in your community",
      icon: Users,
      color: "bg-[#e6f3ff]",
      iconColor: "text-[#4a90e2]",
      buttonColor: "bg-[#4a90e2] hover:bg-[#3a7bc8]",
      features: ["Post availability", "Accept requests", "Donate to NGOs", "Track your impact"]
    },
    {
      title: "Healthcare Professionals",
      description: "Provide consultations and guidance on safe breast milk donation practices",
      icon: Stethoscope,
      color: "bg-[#f0fff4]",
      iconColor: "text-[#4ecdc4]",
      buttonColor: "bg-[#4ecdc4] hover:bg-[#3dbdb6]",
      features: ["Offer consultations", "Share safety guides", "Verify donors", "Expert support"]
    },
    {
      title: "NGOs & Milk Banks",
      description: "Connect with the community to collect and distribute breast milk safely",
      icon: Building2,
      color: "bg-[#fff8dc]",
      iconColor: "text-[#ffe066]",
      buttonColor: "bg-[#ffe066] hover:bg-[#ffd633]",
      features: ["Manage collections", "Connect with donors", "Track distributions", "Community outreach"]
    }
  ]

  const handleGetStarted = () => {
    setShowAuthModal(true)
  }

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How Can We Help You?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose your role to get started with our platform and connect with the right community
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {userTypes.map((type, index) => {
            const IconComponent = type.icon
            return (
              <Card key={index} className={`${type.color} border-0 shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-full bg-white">
                      <IconComponent className={`h-8 w-8 ${type.iconColor}`} />
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2">{type.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {type.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm">
                        <div className="w-2 h-2 bg-current rounded-full opacity-60"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${type.buttonColor} text-white`}
                    onClick={handleGetStarted}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}