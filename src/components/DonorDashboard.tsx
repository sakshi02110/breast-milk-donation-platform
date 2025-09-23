import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"
import { useApp } from "../App"
import { 
  Home, 
  User, 
  MessageCircle, 
  MapPin, 
  LogOut, 
  Heart,
  Calendar,
  Users,
  Bell,
  Menu,
  Plus,
  Check,
  X
} from "lucide-react"
import { toast } from "sonner@2.0.3"

export function DonorDashboard() {
  const { user, setUser, setCurrentPage } = useApp()
  const [activeTab, setActiveTab] = useState("home")
  const [showNewDonation, setShowNewDonation] = useState(false)

  const sidebarItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "profile", label: "Profile", icon: User },
    { id: "donations", label: "My Donations", icon: Heart },
    { id: "requests", label: "Requests", icon: Users },
    { id: "messages", label: "Messages", icon: MessageCircle },
    { id: "nearby", label: "Nearby", icon: MapPin },
  ]

  const activeRequests = [
    {
      id: 1,
      mother: "Sarah J.",
      babyAge: "3 months",
      amount: "250ml",
      urgency: "high",
      distance: "1.2 miles",
      date: "2 hours ago",
      message: "My baby is not gaining weight properly and I need help with supplementing."
    },
    {
      id: 2,
      mother: "Jennifer K.",
      babyAge: "6 weeks",
      amount: "500ml",
      urgency: "medium",
      distance: "3.1 miles",
      date: "1 day ago",
      message: "Looking for occasional help when I'm at work."
    },
    {
      id: 3,
      mother: "Lisa M.",
      babyAge: "2 months", 
      amount: "300ml",
      urgency: "low",
      distance: "4.5 miles",
      date: "3 days ago",
      message: "Would appreciate any help during this challenging time."
    }
  ]

  const myDonations = [
    {
      id: 1,
      recipient: "Sarah J.",
      amount: "250ml",
      date: "Yesterday",
      status: "completed"
    },
    {
      id: 2,
      recipient: "Maria R.",
      amount: "500ml", 
      date: "3 days ago",
      status: "completed"
    },
    {
      id: 3,
      recipient: "Hope Foundation",
      amount: "1000ml",
      date: "1 week ago",
      status: "completed"
    }
  ]

  const handleAcceptRequest = (requestId: number) => {
    toast.success("Request accepted! You can now coordinate with the mother.")
  }

  const handleDeclineRequest = (requestId: number) => {
    toast.success("Request declined politely.")
  }

  const handleLogout = () => {
    setUser(null)
    setCurrentPage("home")
  }

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-border">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <h1 className="text-xl font-semibold text-foreground">Donor Dashboard</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Bell className="h-5 w-5" />
              <Badge className="ml-1 h-5 w-5 bg-[#4a90e2] text-white text-xs">5</Badge>
            </Button>
            <Avatar className="h-8 w-8">
              <AvatarFallback className="bg-[#4a90e2] text-white">
                {user?.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 bg-white shadow-sm min-h-screen">
          <div className="p-6">
            <div className="flex items-center space-x-3 mb-8">
              <Heart className="h-6 w-6 text-[#4a90e2]" />
              <span className="font-semibold text-foreground">MilkShare</span>
            </div>
            
            <nav className="space-y-2">
              {sidebarItems.map((item) => {
                const IconComponent = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      activeTab === item.id 
                        ? "bg-[#e6f3ff] text-[#4a90e2]" 
                        : "text-muted-foreground hover:bg-gray-50"
                    }`}
                  >
                    <IconComponent className="h-5 w-5" />
                    <span>{item.label}</span>
                  </button>
                )
              })}
            </nav>

            <div className="mt-8 pt-8 border-t border-border">
              <button 
                onClick={handleLogout}
                className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left text-muted-foreground hover:bg-gray-50 transition-colors"
              >
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeTab === "home" && (
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-gradient-to-r from-[#4a90e2] to-[#3a7bc8] text-white border-0">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Babies Helped</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">12</div>
                    <p className="text-blue-100 text-sm">This month</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-[#4ecdc4] to-[#3dbdb6] text-white border-0">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Total Donated</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">2.5L</div>
                    <p className="text-green-100 text-sm">All time</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-[#f093fb] to-[#e083eb] text-white border-0">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Active Requests</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">3</div>
                    <p className="text-pink-100 text-sm">Awaiting response</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center space-x-2">
                          <Users className="h-5 w-5 text-[#f093fb]" />
                          <span>New Requests</span>
                        </CardTitle>
                        <CardDescription>Mothers near you who need help</CardDescription>
                      </div>
                      <Button 
                        size="sm" 
                        className="bg-[#4a90e2] hover:bg-[#3a7bc8]"
                        onClick={() => setShowNewDonation(true)}
                      >
                        <Plus className="h-4 w-4 mr-1" />
                        Post Availability
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {activeRequests.map((request) => (
                      <div key={request.id} className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <div className="font-medium">{request.mother}</div>
                            <div className="text-sm text-muted-foreground">
                              Baby: {request.babyAge} • {request.distance} • {request.date}
                            </div>
                          </div>
                          <Badge 
                            variant={request.urgency === "high" ? "destructive" : "secondary"}
                            className={
                              request.urgency === "high" ? "bg-[#e53e3e]" :
                              request.urgency === "medium" ? "bg-[#ffe066] text-gray-700" : 
                              "bg-[#4ecdc4]"
                            }
                          >
                            {request.urgency} priority
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{request.message}</p>
                        <div className="text-sm font-medium mb-3">Needs: {request.amount}</div>
                        <div className="flex space-x-2">
                          <Button 
                            size="sm" 
                            className="bg-[#4ecdc4] hover:bg-[#3dbdb6]"
                            onClick={() => handleAcceptRequest(request.id)}
                          >
                            <Check className="h-4 w-4 mr-1" />
                            Accept
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => handleDeclineRequest(request.id)}
                          >
                            <X className="h-4 w-4 mr-1" />
                            Decline
                          </Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Heart className="h-5 w-5 text-[#4a90e2]" />
                      <span>Recent Donations</span>
                    </CardTitle>
                    <CardDescription>Your recent contribution history</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {myDonations.map((donation) => (
                      <div key={donation.id} className="flex items-center justify-between p-3 bg-[#e6f3ff] rounded-lg">
                        <div>
                          <div className="font-medium">{donation.recipient}</div>
                          <div className="text-sm text-muted-foreground">
                            {donation.amount} • {donation.date}
                          </div>
                        </div>
                        <Badge className="bg-[#4ecdc4]">
                          {donation.status}
                        </Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {showNewDonation && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <Card className="w-full max-w-md">
                <CardHeader>
                  <CardTitle>Post Milk Availability</CardTitle>
                  <CardDescription>Let mothers in your area know you have milk to share</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Amount Available (ml)</Label>
                    <Input placeholder="e.g., 500" />
                  </div>
                  <div className="space-y-2">
                    <Label>Expiry Date</Label>
                    <Input type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label>Additional Notes</Label>
                    <Textarea placeholder="Any special instructions or information..." />
                  </div>
                  <div className="flex space-x-2">
                    <Button 
                      className="flex-1 bg-[#4a90e2] hover:bg-[#3a7bc8]"
                      onClick={() => {
                        setShowNewDonation(false)
                        toast.success("Availability posted! Mothers in your area will be notified.")
                      }}
                    >
                      Post Availability
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => setShowNewDonation(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}