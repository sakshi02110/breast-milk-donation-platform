import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { useApp } from "../App"
import { 
  Home, 
  User, 
  MessageCircle, 
  MapPin, 
  LogOut, 
  Heart,
  Package,
  Users,
  Bell,
  Menu,
  Building2,
  Truck,
  BarChart3,
  Calendar
} from "lucide-react"

export function NGODashboard() {
  const { user, setUser, setCurrentPage } = useApp()
  const [activeTab, setActiveTab] = useState("home")

  const sidebarItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "profile", label: "Profile", icon: User },
    { id: "collections", label: "Collections", icon: Package },
    { id: "distributions", label: "Distributions", icon: Truck },
    { id: "donors", label: "Donors", icon: Users },
    { id: "reports", label: "Reports", icon: BarChart3 },
    { id: "messages", label: "Messages", icon: MessageCircle },
  ]

  const recentCollections = [
    {
      id: 1,
      donor: "Maria Rodriguez",
      amount: "500ml",
      date: "Today, 2:00 PM",
      location: "Downtown Center",
      status: "collected"
    },
    {
      id: 2,
      donor: "Jennifer Kim",
      amount: "750ml",
      date: "Today, 11:00 AM",
      location: "North Branch",
      status: "scheduled"
    },
    {
      id: 3,
      donor: "Sarah Johnson",
      amount: "300ml",
      date: "Yesterday",
      location: "Main Office",
      status: "collected"
    }
  ]

  const upcomingDistributions = [
    {
      id: 1,
      recipient: "City Hospital NICU",
      amount: "2.5L",
      date: "Tomorrow, 9:00 AM",
      families: 8,
      status: "scheduled"
    },
    {
      id: 2,
      recipient: "Community Health Center",
      amount: "1.2L",
      date: "Tomorrow, 2:00 PM",
      families: 5,
      status: "prepared"
    },
    {
      id: 3,
      recipient: "Family Support Services",
      amount: "800ml",
      date: "Friday, 10:00 AM",
      families: 3,
      status: "pending"
    }
  ]

  const topDonors = [
    {
      id: 1,
      name: "Maria Rodriguez",
      totalDonated: "12.5L",
      donations: 25,
      lastDonation: "Today"
    },
    {
      id: 2,
      name: "Jennifer Kim",
      totalDonated: "8.2L",
      donations: 18,
      lastDonation: "2 days ago"
    },
    {
      id: 3,
      name: "Sarah Johnson",
      totalDonated: "6.8L",
      donations: 15,
      lastDonation: "1 week ago"
    }
  ]

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
            <h1 className="text-xl font-semibold text-foreground">NGO Dashboard</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Bell className="h-5 w-5" />
              <Badge className="ml-1 h-5 w-5 bg-[#ffe066] text-gray-700 text-xs">6</Badge>
            </Button>
            <Avatar className="h-8 w-8">
              <AvatarFallback className="bg-[#ffe066] text-gray-700">
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
              <Heart className="h-6 w-6 text-[#ffe066]" />
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
                        ? "bg-[#fff8dc] text-[#ffe066]" 
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
              <div className="grid md:grid-cols-4 gap-6">
                <Card className="bg-gradient-to-r from-[#ffe066] to-[#ffd633] text-white border-0">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Total Collected</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">45.2L</div>
                    <p className="text-yellow-100 text-sm">This month</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-[#4ecdc4] to-[#3dbdb6] text-white border-0">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Families Served</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">128</div>
                    <p className="text-green-100 text-sm">This month</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-[#4a90e2] to-[#3a7bc8] text-white border-0">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Active Donors</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">87</div>
                    <p className="text-blue-100 text-sm">Registered</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-[#f093fb] to-[#e083eb] text-white border-0">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Distribution Rate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">98%</div>
                    <p className="text-pink-100 text-sm">Efficiency</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Package className="h-5 w-5 text-[#ffe066]" />
                      <span>Recent Collections</span>
                    </CardTitle>
                    <CardDescription>Latest milk donations received</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {recentCollections.map((collection) => (
                      <div key={collection.id} className="p-4 bg-[#fff8dc] rounded-lg">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <div className="font-medium">{collection.donor}</div>
                            <div className="text-sm text-muted-foreground">
                              {collection.amount} • {collection.location}
                            </div>
                          </div>
                          <Badge 
                            className={
                              collection.status === "collected" ? "bg-[#4ecdc4]" : "bg-[#4a90e2]"
                            }
                          >
                            {collection.status}
                          </Badge>
                        </div>
                        <div className="text-sm font-medium text-[#ffe066]">{collection.date}</div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Truck className="h-5 w-5 text-[#4ecdc4]" />
                      <span>Upcoming Distributions</span>
                    </CardTitle>
                    <CardDescription>Scheduled deliveries to families and hospitals</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {upcomingDistributions.map((distribution) => (
                      <div key={distribution.id} className="p-4 bg-[#f0fff4] rounded-lg">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <div className="font-medium">{distribution.recipient}</div>
                            <div className="text-sm text-muted-foreground">
                              {distribution.amount} • {distribution.families} families
                            </div>
                          </div>
                          <Badge 
                            className={
                              distribution.status === "scheduled" ? "bg-[#4a90e2]" :
                              distribution.status === "prepared" ? "bg-[#4ecdc4]" : 
                              "bg-[#ffe066] text-gray-700"
                            }
                          >
                            {distribution.status}
                          </Badge>
                        </div>
                        <div className="text-sm font-medium text-[#4ecdc4]">{distribution.date}</div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-[#f093fb]" />
                    <span>Top Contributors</span>
                  </CardTitle>
                  <CardDescription>Most active donors in your network</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    {topDonors.map((donor, index) => (
                      <div key={donor.id} className="p-4 bg-gradient-to-br from-[#fdf2f8] to-[#f3e8ff] rounded-lg">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-8 h-8 bg-[#f093fb] rounded-full flex items-center justify-center text-white font-semibold text-sm">
                            #{index + 1}
                          </div>
                          <div>
                            <div className="font-medium">{donor.name}</div>
                            <div className="text-sm text-muted-foreground">{donor.lastDonation}</div>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="text-sm">
                            <span className="font-medium">{donor.totalDonated}</span> total donated
                          </div>
                          <div className="text-sm">
                            <span className="font-medium">{donor.donations}</span> donations
                          </div>
                        </div>
                      </div>
                    ))}
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