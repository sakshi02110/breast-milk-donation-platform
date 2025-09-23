import { useState } from "react"
import { Button } from "./ui/button"
import { Heart, Users, Stethoscope, Building2, Menu, X } from "lucide-react"
import { useApp } from "../App"

export function Navigation() {
  const { user, setUser, currentPage, setCurrentPage, setShowAuthModal } = useApp()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleLogin = () => {
    setShowAuthModal(true)
  }

  const handleLogout = () => {
    setUser(null)
    setCurrentPage("home")
  }

  const goHome = () => {
    setCurrentPage("home")
  }

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false) // Close mobile menu
    // If not on home page, go to home first then scroll
    if (currentPage !== "home") {
      setCurrentPage("home")
      // Wait for the page to load then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      // Already on home page, just scroll
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <nav className="bg-white shadow-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={goHome}>
            <Heart className="h-8 w-8 text-[#4a90e2]" />
            <h1 className="text-xl font-semibold text-foreground">MilkShare</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("about")} 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("how-it-works")} 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection("safety")} 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Safety
            </button>
            <button 
              onClick={() => scrollToSection("contact")} 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </button>
          </div>

          <div className="flex items-center space-x-4">
            {/* Mobile menu button */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>

            {/* Desktop auth buttons */}
            <div className="hidden md:flex items-center space-x-4">
              {user ? (
                <>
                  <span className="text-sm text-muted-foreground">Welcome, {user.name}</span>
                  <Button variant="ghost" onClick={handleLogout}>Logout</Button>
                  <Button 
                    className="bg-[#4a90e2] hover:bg-[#3a7bc8]"
                    onClick={() => setCurrentPage("dashboard")}
                  >
                    Dashboard
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="ghost" onClick={handleLogin}>Login</Button>
                  <Button className="bg-[#4a90e2] hover:bg-[#3a7bc8]" onClick={handleLogin}>Get Started</Button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-border">
            <div className="px-4 py-4 space-y-3">
              <button 
                onClick={() => scrollToSection("about")} 
                className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("how-it-works")} 
                className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection("safety")} 
                className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Safety
              </button>
              <button 
                onClick={() => scrollToSection("contact")} 
                className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Contact
              </button>
              
              <div className="border-t border-border pt-3 space-y-2">
                {user ? (
                  <>
                    <div className="text-sm text-muted-foreground py-2">Welcome, {user.name}</div>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={() => {
                        setCurrentPage("dashboard")
                        setMobileMenuOpen(false)
                      }}
                    >
                      Dashboard
                    </Button>
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start"
                      onClick={() => {
                        handleLogout()
                        setMobileMenuOpen(false)
                      }}
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start"
                      onClick={() => {
                        handleLogin()
                        setMobileMenuOpen(false)
                      }}
                    >
                      Login
                    </Button>
                    <Button 
                      className="w-full bg-[#4a90e2] hover:bg-[#3a7bc8]"
                      onClick={() => {
                        handleLogin()
                        setMobileMenuOpen(false)
                      }}
                    >
                      Get Started
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}