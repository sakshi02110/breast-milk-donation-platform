import { useState, createContext, useContext } from "react"
import { Navigation } from "./components/Navigation"
import { Hero } from "./components/Hero"
import { UserTypeCards } from "./components/UserTypeCards"
import { HowItWorks } from "./components/HowItWorks"
import { Testimonials } from "./components/Testimonials"
import { Footer } from "./components/Footer"
import { AuthModal } from "./components/AuthModal"
import { Dashboard } from "./components/Dashboard"
import { DonorDashboard } from "./components/DonorDashboard"
import { DoctorDashboard } from "./components/DoctorDashboard"
import { NGODashboard } from "./components/NGODashboard"
import { Toaster } from "./components/ui/sonner"

type UserType = "mother-need" | "donor" | "doctor" | "ngo" | null
type AppPage = "home" | "dashboard"

interface User {
  id: string
  name: string
  email: string
  userType: UserType
  location: string
}

interface AppContextType {
  user: User | null
  setUser: (user: User | null) => void
  currentPage: AppPage
  setCurrentPage: (page: AppPage) => void
  showAuthModal: boolean
  setShowAuthModal: (show: boolean) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export const useApp = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error("useApp must be used within AppProvider")
  }
  return context
}

export default function App() {
  const [user, setUser] = useState<User | null>(null)
  const [currentPage, setCurrentPage] = useState<AppPage>("home")
  const [showAuthModal, setShowAuthModal] = useState(false)

  const renderDashboard = () => {
    if (!user) return null
    
    switch (user.userType) {
      case "mother-need":
        return <Dashboard />
      case "donor":
        return <DonorDashboard />
      case "doctor":
        return <DoctorDashboard />
      case "ngo":
        return <NGODashboard />
      default:
        return <Dashboard />
    }
  }

  return (
    <AppContext.Provider value={{
      user,
      setUser,
      currentPage,
      setCurrentPage,
      showAuthModal,
      setShowAuthModal
    }}>
      <div className="min-h-screen bg-background">
        {currentPage === "home" ? (
          <>
            <Navigation />
            <Hero />
            <UserTypeCards />
            <HowItWorks />
            <Testimonials />
            <Footer />
          </>
        ) : (
          renderDashboard()
        )}
        
        <AuthModal 
          isOpen={showAuthModal} 
          onClose={() => setShowAuthModal(false)} 
        />
        <Toaster />
      </div>
    </AppContext.Provider>
  );
}