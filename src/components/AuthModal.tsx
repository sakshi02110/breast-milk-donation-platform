import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { Heart, Users, Stethoscope, Building2 } from "lucide-react"
import { useApp } from "../App"
import { toast } from "sonner@2.0.3"

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const { setUser, setCurrentPage } = useApp()
  const [userType, setUserType] = useState("")
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    location: ""
  })
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  })

  const userTypes = [
    { value: "mother-need", label: "Mother in Need", icon: Heart, color: "text-[#f093fb]" },
    { value: "donor", label: "Donor Mother", icon: Users, color: "text-[#4a90e2]" },
    { value: "doctor", label: "Healthcare Professional", icon: Stethoscope, color: "text-[#4ecdc4]" },
    { value: "ngo", label: "NGO/Milk Bank", icon: Building2, color: "text-[#ffe066]" }
  ]

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!userType || !signupData.firstName || !signupData.lastName || !signupData.email || !signupData.password || !signupData.location) {
      toast.error("Please fill in all fields")
      return
    }

    // Simulate successful signup
    const newUser = {
      id: Math.random().toString(36).substr(2, 9),
      name: `${signupData.firstName} ${signupData.lastName}`,
      email: signupData.email,
      userType: userType as any,
      location: signupData.location
    }

    setUser(newUser)
    setCurrentPage("dashboard")
    onClose()
    toast.success(`Welcome to MilkShare, ${newUser.name}!`)
    
    // Reset form
    setSignupData({ firstName: "", lastName: "", email: "", password: "", location: "" })
    setUserType("")
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!loginData.email || !loginData.password) {
      toast.error("Please fill in all fields")
      return
    }

    // Simulate successful login - in real app, this would validate credentials
    const mockUser = {
      id: "demo-user",
      name: "Demo User",
      email: loginData.email,
      userType: "mother-need" as any,
      location: "Chicago, IL"
    }

    setUser(mockUser)
    setCurrentPage("dashboard")
    onClose()
    toast.success(`Welcome back, ${mockUser.name}!`)
    
    // Reset form
    setLoginData({ email: "", password: "" })
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">Join MilkShare</DialogTitle>
          <DialogDescription className="text-center">
            Create your account to start connecting with our caring community
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="signup" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
            <TabsTrigger value="login">Login</TabsTrigger>
          </TabsList>

          <TabsContent value="signup" className="space-y-4">
            <form onSubmit={handleSignup} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="userType">I am a...</Label>
                <Select value={userType} onValueChange={setUserType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    {userTypes.map((type) => {
                      const IconComponent = type.icon
                      return (
                        <SelectItem key={type.value} value={type.value}>
                          <div className="flex items-center space-x-2">
                            <IconComponent className={`h-4 w-4 ${type.color}`} />
                            <span>{type.label}</span>
                          </div>
                        </SelectItem>
                      )
                    })}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input 
                    id="firstName" 
                    placeholder="Sarah" 
                    value={signupData.firstName}
                    onChange={(e) => setSignupData({...signupData, firstName: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input 
                    id="lastName" 
                    placeholder="Johnson" 
                    value={signupData.lastName}
                    onChange={(e) => setSignupData({...signupData, lastName: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="sarah@example.com" 
                  value={signupData.email}
                  onChange={(e) => setSignupData({...signupData, email: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="Create a secure password" 
                  value={signupData.password}
                  onChange={(e) => setSignupData({...signupData, password: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location (City, State)</Label>
                <Input 
                  id="location" 
                  placeholder="Chicago, IL" 
                  value={signupData.location}
                  onChange={(e) => setSignupData({...signupData, location: e.target.value})}
                />
              </div>

              <Button type="submit" className="w-full bg-[#4a90e2] hover:bg-[#3a7bc8]">
                Create Account
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="login" className="space-y-4">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="loginEmail">Email</Label>
                <Input 
                  id="loginEmail" 
                  type="email" 
                  placeholder="your@email.com" 
                  value={loginData.email}
                  onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="loginPassword">Password</Label>
                <Input 
                  id="loginPassword" 
                  type="password" 
                  placeholder="Your password" 
                  value={loginData.password}
                  onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                />
              </div>

              <Button type="submit" className="w-full bg-[#4a90e2] hover:bg-[#3a7bc8]">
                Login
              </Button>

              <div className="text-center">
                <button type="button" className="text-sm text-[#4a90e2] hover:underline">
                  Forgot your password?
                </button>
              </div>
            </form>
          </TabsContent>
        </Tabs>

        <div className="text-center text-xs text-muted-foreground">
          By creating an account, you agree to our Terms of Service and Privacy Policy
        </div>
      </DialogContent>
    </Dialog>
  )
}