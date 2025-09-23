import { Card, CardContent } from "./ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Mother in Need",
      content: "When I couldn't produce enough milk for my premature baby, MilkShare connected me with amazing donors in my area. The support and care I received was incredible.",
      avatar: "SJ",
      rating: 5,
      location: "Chicago, IL"
    },
    {
      name: "Dr. Emily Chen",
      role: "Pediatrician",
      content: "As a healthcare professional, I appreciate the safety protocols and verification process. It's a wonderful platform that ensures babies get the nutrition they need safely.",
      avatar: "EC",
      rating: 5,
      location: "Seattle, WA"
    },
    {
      name: "Maria Rodriguez",
      role: "Donor Mother",
      content: "Being able to help other mothers and babies through my excess milk has been so rewarding. The platform makes it easy and safe to make a real difference.",
      avatar: "MR",
      rating: 5,
      location: "Austin, TX"
    },
    {
      name: "Hope Foundation",
      role: "NGO Partner",
      content: "MilkShare has revolutionized how we connect with donors and distribute milk to families in need. The impact on our community has been tremendous.",
      avatar: "HF",
      rating: 5,
      location: "New York, NY"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Stories from Our Community
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real experiences from mothers, healthcare professionals, and organizations who are making a difference
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-white to-[#f8fafc]">
              <CardContent className="p-8">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#ffe066] text-[#ffe066]" />
                  ))}
                </div>
                
                <blockquote className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-gradient-to-r from-[#4a90e2] to-[#f093fb] text-white font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#4a90e2] to-[#f093fb] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-semibold mb-4">
              Join Thousands of Caring Community Members
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div>
                <div className="text-3xl font-bold mb-2">2,500+</div>
                <div className="text-blue-100">Active Donors</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">15,000+</div>
                <div className="text-blue-100">Babies Helped</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">98%</div>
                <div className="text-blue-100">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}