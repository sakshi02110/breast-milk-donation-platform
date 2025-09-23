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
  Baby, 
  Heart,
  Calendar,
  Users,
  Bell,
  Menu,
  Plus,
  Search
} from "lucide-react"
import { toast } from "sonner@2.0.3"

export function Dashboard() {
  const { user, setUser, setCurrentPage } = useApp()
  const [activeTab, setActiveTab] = useState("home")
  const [showNewRequest, setShowNewRequest] = useState(false)

  const sidebarItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "profile", label: "Profile", icon: User },
    { id: "requests", label: "Requests", icon: Baby },
    { id: "messages", label: "Messages", icon: MessageCircle },
    { id: "nearby", label: "Nearby", icon: MapPin },
  ]

  const recentRequests = [
    {
      id: 1,
      donor: "Maria R.",
      amount: "250ml",
      date: "2 hours ago",
      status: "pending",
      distance: "1.2 miles"
    },
    {
      id: 2,
      donor: "Jennifer K.",
      amount: "500ml",
      date: "1 day ago", 
      status: "approved",
      distance: "3.1 miles"
    },
    {
      id: 3,
      donor: "Sarah L.",
      amount: "300ml",
      date: "2 days ago",
      status: "completed",
      distance: "0.8 miles"
    }
  ]

  const notifications = [
    "New donor available in your area",
    "Your request has been approved by Maria R.",
    "Safety reminder: Always follow storage guidelines"
  ]

  const nearbyDonors = [
    {
      id: 1,
      name: "Maria R.",
      distance: "1.2 miles",
      available: "500ml",
      lastActive: "2 hours ago",
      rating: 5
    },
    {
      id: 2,
      name: "Jennifer K.",
      distance: "2.5 miles",
      available: "300ml",
      lastActive: "1 day ago",
      rating: 5
    },
    {
      id: 3,
      name: "Sarah L.",
      distance: "3.8 miles",
      available: "750ml",
      lastActive: "3 hours ago",
      rating: 5
    }
  ]

  const handleLogout = () => {
    setUser(null)
    setCurrentPage("home")
  }

  const handleNewRequest = () => {
    setShowNewRequest(false)
    toast.success("Request sent! Nearby donors will be notified.")
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
            <h1 className="text-xl font-semibold text-foreground">Dashboard</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Bell className="h-5 w-5" />
              <Badge className="ml-1 h-5 w-5 bg-[#f093fb] text-white text-xs">3</Badge>
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
                    <CardTitle className="text-lg">Active Requests</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">2</div>
                    <p className="text-blue-100 text-sm">Pending responses</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-[#f093fb] to-[#e083eb] text-white border-0">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Helped This Week</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">3</div>
                    <p className="text-pink-100 text-sm">Successful connections</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-[#4ecdc4] to-[#3dbdb6] text-white border-0">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Nearby Donors</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">12</div>
                    <p className="text-green-100 text-sm">Within 5 miles</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Baby className="h-5 w-5 text-[#f093fb]" />
                      <span>Recent Requests</span>
                    </CardTitle>
                    <CardDescription>Your latest milk requests and their status</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {recentRequests.map((request) => (
                      <div key={request.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <div className="font-medium">{request.donor}</div>
                          <div className="text-sm text-muted-foreground">
                            {request.amount} • {request.distance} • {request.date}
                          </div>
                        </div>
                        <Badge 
                          variant={request.status === "completed" ? "default" : "secondary"}
                          className={
                            request.status === "completed" ? "bg-[#4ecdc4]" :
                            request.status === "approved" ? "bg-[#4a90e2]" : 
                            "bg-[#ffe066] text-gray-700"
                          }
                        >
                          {request.status}
                        </Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Bell className="h-5 w-5 text-[#4a90e2]" />
                      <span>Recent Updates</span>
                    </CardTitle>
                    <CardDescription>Latest notifications and updates</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {notifications.map((notification, index) => (
                      <div key={index} className="p-3 bg-[#e6f3ff] rounded-lg">
                        <p className="text-sm">{notification}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {index === 0 ? "5 minutes ago" : index === 1 ? "2 hours ago" : "1 day ago"}
                        </p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-[#4ecdc4]" />
                      <span>Nearby Donors</span>
                    </CardTitle>
                    <CardDescription>Available donors in your area</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {nearbyDonors.map((donor) => (
                      <div key={donor.id} className="p-4 bg-[#f0fff4] rounded-lg">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <div className="font-medium">{donor.name}</div>
                            <div className="text-sm text-muted-foreground">
                              {donor.distance} • {donor.lastActive}
                            </div>
                          </div>
                          <div className="text-sm font-medium text-[#4ecdc4]">
                            {donor.available} available
                          </div>
                        </div>
                        <div className="flex space-x-2 mt-3">
                          <Button size="sm" className="bg-[#4ecdc4] hover:bg-[#3dbdb6]">
                            Contact
                          </Button>
                          <Button size="sm" variant="outline">
                            View Profile
                          </Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Baby className="h-5 w-5 text-[#f093fb]" />
                      <span>Quick Actions</span>
                    </CardTitle>
                    <CardDescription>Common actions for mothers in need</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button 
                      className="w-full bg-[#f093fb] hover:bg-[#e083eb]"
                      onClick={() => setShowNewRequest(true)}
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      New Milk Request
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full border-[#4a90e2] text-[#4a90e2] hover:bg-[#e6f3ff]"
                      onClick={() => setActiveTab("nearby")}
                    >
                      <Search className="h-4 w-4 mr-2" />
                      Find Donors
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full border-[#4ecdc4] text-[#4ecdc4] hover:bg-[#f0fff4]"
                      onClick={() => setActiveTab("messages")}
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Messages
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {showNewRequest && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <Card className="w-full max-w-md">
                <CardHeader>
                  <CardTitle>Request Breast Milk</CardTitle>
                  <CardDescription>Submit a request to nearby donors</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Amount Needed (ml)</Label>
                    <Input placeholder="e.g., 500" />
                  </div>
                  <div className="space-y-2">
                    <Label>Baby's Age</Label>
                    <Input placeholder="e.g., 3 months" />
                  </div>
                  <div className="space-y-2">
                    <Label>Urgency Level</Label>
                    <select className="w-full p-2 border rounded">
                      <option>Low - Within a week</option>
                      <option>Medium - Within 2-3 days</option>
                      <option>High - Urgent need</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label>Message to Donors</Label>
                    <Textarea placeholder="Please share any relevant information or special circumstances..." />
                  </div>
                  <div className="flex space-x-2">
                    <Button 
                      className="flex-1 bg-[#f093fb] hover:bg-[#e083eb]"
                      onClick={handleNewRequest}
                    >
                      Send Request
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => setShowNewRequest(false)}
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