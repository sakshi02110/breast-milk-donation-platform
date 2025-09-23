import { Button } from "./ui/button"
import { ImageWithFallback } from "./figma/ImageWithFallback"
import { useApp } from "../App"

export function Hero() {
  const { setShowAuthModal } = useApp()

  const handleNeedMilk = () => {
    setShowAuthModal(true)
  }

  const handleWantToDonate = () => {
    setShowAuthModal(true)
  }

  return (
    <section className="bg-gradient-to-b from-[#e6f3ff] to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Every child deserves healthy nourishment
              </h1>
              <p className="text-xl text-muted-foreground">
                Connect. Donate. Save lives. Join our community of caring mothers, healthcare professionals, and organizations making a difference.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-[#f093fb] hover:bg-[#e083eb] text-white px-8 py-4 text-lg rounded-full"
                onClick={handleNeedMilk}
              >
                I Need Milk
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-[#4a90e2] text-[#4a90e2] hover:bg-[#e6f3ff] px-8 py-4 text-lg rounded-full"
                onClick={handleWantToDonate}
              >
                I Want to Donate
              </Button>
            </div>

            <div className="flex items-center space-x-6 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-[#4ecdc4] rounded-full"></div>
                <span>Safe & Verified</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-[#f093fb] rounded-full"></div>
                <span>Local Community</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-[#4a90e2] rounded-full"></div>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1720661873917-74ffd1c984b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RoZXIlMjBiYWJ5JTIwYnJlYXN0ZmVlZGluZyUyMG51cnR1cmluZyUyMGNhcmV8ZW58MXx8fHwxNzU4NjM0NzY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Mother caring for baby"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#f093fb] rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#4ecdc4] rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  )
}