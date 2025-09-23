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
  Calendar, 
  LogOut, 
  Heart,
  FileText,
  Users,
  Bell,
  Menu,
  Stethoscope,
  BookOpen,
  Shield
} from "lucide-react"

export function DoctorDashboard() {
  const { user, setUser, setCurrentPage } = useApp()
  const [activeTab, setActiveTab] = useState("home")

  const sidebarItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "profile", label: "Profile", icon: User },
    { id: "consultations", label: "Consultations", icon: Calendar },
    { id: "articles", label: "Articles", icon: FileText },
    { id: "verifications", label: "Verifications", icon: Shield },
    { id: "messages", label: "Messages", icon: MessageCircle },
  ]

  const upcomingConsultations = [
    {
      id: 1,
      patient: "Sarah J.",
      type: "Donation Safety",
      time: "2:00 PM Today",
      duration: "30 min",
      status: "confirmed"
    },
    {
      id: 2,
      patient: "Maria R.",
      type: "Lactation Support",
      time: "10:00 AM Tomorrow",
      duration: "45 min",
      status: "confirmed"
    },
    {
      id: 3,
      patient: "Jennifer K.",
      type: "General Consultation",
      time: "3:00 PM Tomorrow",
      duration: "30 min",
      status: "pending"
    }
  ]

  const recentArticles = [
    {
      id: 1,
      title: "Safe Storage Guidelines for Breast Milk",
      category: "Safety",
      date: "2 days ago",
      views: 1250
    },
    {
      id: 2,
      title: "Screening Donors: What to Look For",
      category: "Guidelines",
      date: "1 week ago",
      views: 890
    },
    {
      id: 3,
      title: "Nutritional Benefits of Breast Milk Donation",
      category: "Education",
      date: "2 weeks ago",
      views: 2100
    }
  ]

  const pendingVerifications = [
    {
      id: 1,
      name: "Lisa M.",
      type: "Donor Verification",
      submitted: "2 hours ago",
      documents: 3
    },
    {
      id: 2,
      name: "Anna K.",
      type: "Health Screening",
      submitted: "1 day ago",
      documents: 2
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
            <h1 className="text-xl font-semibold text-foreground">Healthcare Dashboard</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Bell className="h-5 w-5" />
              <Badge className="ml-1 h-5 w-5 bg-[#4ecdc4] text-white text-xs">4</Badge>
            </Button>
            <Avatar className="h-8 w-8">
              <AvatarFallback className="bg-[#4ecdc4] text-white">
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
              <Heart className="h-6 w-6 text-[#4ecdc4]" />
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
                        ? "bg-[#f0fff4] text-[#4ecdc4]" 
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
                <Card className="bg-gradient-to-r from-[#4ecdc4] to-[#3dbdb6] text-white border-0">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Consultations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">8</div>
                    <p className="text-green-100 text-sm">This week</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-[#4a90e2] to-[#3a7bc8] text-white border-0">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Verifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">12</div>
                    <p className="text-blue-100 text-sm">Completed</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-[#f093fb] to-[#e083eb] text-white border-0">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Articles</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">15</div>
                    <p className="text-pink-100 text-sm">Published</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-[#ffe066] to-[#ffd633] text-white border-0">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Impact</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">45</div>
                    <p className="text-yellow-100 text-sm">Families helped</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-[#4ecdc4]" />
                      <span>Upcoming Consultations</span>
                    </CardTitle>
                    <CardDescription>Your scheduled appointments</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {upcomingConsultations.map((consultation) => (
                      <div key={consultation.id} className="p-4 bg-[#f0fff4] rounded-lg">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <div className="font-medium">{consultation.patient}</div>
                            <div className="text-sm text-muted-foreground">
                              {consultation.type} • {consultation.duration}
                            </div>
                          </div>
                          <Badge 
                            className={
                              consultation.status === "confirmed" ? "bg-[#4ecdc4]" : "bg-[#ffe066] text-gray-700"
                            }
                          >
                            {consultation.status}
                          </Badge>
                        </div>
                        <div className="text-sm font-medium text-[#4ecdc4]">{consultation.time}</div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Shield className="h-5 w-5 text-[#f093fb]" />
                      <span>Pending Verifications</span>
                    </CardTitle>
                    <CardDescription>Donor applications awaiting review</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {pendingVerifications.map((verification) => (
                      <div key={verification.id} className="p-4 bg-[#fdf2f8] rounded-lg">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <div className="font-medium">{verification.name}</div>
                            <div className="text-sm text-muted-foreground">
                              {verification.type} • {verification.documents} documents
                            </div>
                          </div>
                          <div className="text-sm text-muted-foreground">{verification.submitted}</div>
                        </div>
                        <div className="flex space-x-2 mt-3">
                          <Button size="sm" className="bg-[#4ecdc4] hover:bg-[#3dbdb6]">
                            Review
                          </Button>
                          <Button size="sm" variant="outline">
                            Schedule Call
                          </Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BookOpen className="h-5 w-5 text-[#4a90e2]" />
                    <span>Your Recent Articles</span>
                  </CardTitle>
                  <CardDescription>Educational content you've shared with the community</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    {recentArticles.map((article) => (
                      <div key={article.id} className="p-4 bg-[#e6f3ff] rounded-lg">
                        <div className="font-medium mb-2">{article.title}</div>
                        <div className="text-sm text-muted-foreground mb-2">
                          {article.category} • {article.date}
                        </div>
                        <div className="text-sm font-medium text-[#4a90e2]">
                          {article.views} views
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