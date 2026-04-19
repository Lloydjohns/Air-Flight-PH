import { useState } from "react";
import { User, Plane, Star, CreditCard, Bell, Settings, LogOut, Calendar, MapPin, Clock, ArrowRight, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const mockBookings = [
  { id: "SW-20240125-001", flightNo: "SW 201", from: "New York (JFK)", to: "Los Angeles (LAX)", date: "Jan 25, 2024", time: "08:00", status: "upcoming", class: "Economy", passengers: 2 },
  { id: "SW-20240210-002", flightNo: "SW 305", from: "Los Angeles (LAX)", to: "Tokyo (NRT)", date: "Feb 10, 2024", time: "14:15", status: "upcoming", class: "Business", passengers: 1 },
  { id: "SW-20231215-003", flightNo: "SW 412", from: "Miami (MIA)", to: "Paris (CDG)", date: "Dec 15, 2023", time: "19:00", status: "completed", class: "Economy", passengers: 2 },
];

const tabs = [
  { id: "bookings", label: "My Bookings", icon: Plane },
  { id: "rewards", label: "Rewards", icon: Star },
  { id: "profile", label: "Profile", icon: User },
  { id: "payment", label: "Payment Methods", icon: CreditCard },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "settings", label: "Settings", icon: Settings },
];

export default function MyAccount() {
  const [activeTab, setActiveTab] = useState("bookings");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
    toast({ title: "Welcome back!", description: "You've successfully signed in to your account." });
  };

  const handleCheckIn = (flightNo: string) => {
    toast({ title: "Online Check-In", description: `Check-in for flight ${flightNo} will open 24 hours before departure.` });
  };

  const handleManageBooking = (bookingId: string) => {
    toast({ title: "Manage Booking", description: `Managing booking ${bookingId}. You can change seats, add baggage, or update passenger details.` });
  };

  const handleSaveProfile = () => {
    toast({ title: "Profile Updated", description: "Your profile information has been saved successfully." });
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <section className="pt-32 pb-12 bg-gradient-to-br from-primary via-primary/90 to-sky">
          <div className="container mx-auto px-4">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">My Account</h1>
            <p className="text-primary-foreground/80 text-lg">Sign in to manage your bookings and rewards.</p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-md mx-auto">
            <div className="bg-card rounded-2xl shadow-card p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Welcome Back</h2>
                <p className="text-muted-foreground">Sign in to your Air-Flight PH account</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <Label className="text-sm text-muted-foreground mb-2 block">Email</Label>
                  <Input type="email" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-muted/50" />
                </div>
                <div>
                  <Label className="text-sm text-muted-foreground mb-2 block">Password</Label>
                  <Input type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-muted/50" />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-muted-foreground">
                    <input type="checkbox" className="rounded" />
                    Remember me
                  </label>
                  <button type="button" className="text-primary hover:underline" onClick={() => toast({ title: "Password Reset", description: "A password reset link has been sent to your email address." })}>
                    Forgot password?
                  </button>
                </div>
                <Button variant="gold" className="w-full" type="submit">Sign In</Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-muted-foreground text-sm">
                  Don't have an account?{" "}
                  <button className="text-primary hover:underline font-medium" onClick={() => { setIsLoggedIn(true); toast({ title: "Account Created!", description: "Welcome to Air-Flight PH! Your account has been created successfully." }); }}>
                    Create one
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="pt-32 pb-12 bg-gradient-to-br from-primary via-primary/90 to-sky">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-2">Welcome, John</h1>
              <p className="text-primary-foreground/80 text-lg">Gold Member · 52,450 Miles</p>
            </div>
            <Button variant="heroOutline" onClick={() => { setIsLoggedIn(false); toast({ title: "Signed Out", description: "You've been signed out successfully." }); }}>
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-card rounded-xl shadow-card p-4 sticky top-24">
              <nav className="space-y-1">
                {tabs.map((tab) => (
                  <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={cn("w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors", activeTab === tab.id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted")}>
                    <tab.icon className="h-5 w-5" />
                    <span className="font-medium">{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          <div className="flex-1">
            {activeTab === "bookings" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-display font-bold text-foreground">My Bookings</h2>
                  <Button variant="gold" onClick={() => navigate("/book")}>Book New Flight</Button>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">Upcoming Flights</h3>
                  <div className="space-y-4">
                    {mockBookings.filter(b => b.status === "upcoming").map((booking) => (
                      <div key={booking.id} className="bg-card rounded-xl shadow-card p-6 hover:shadow-lg transition-shadow">
                        <div className="flex flex-wrap items-start justify-between gap-4">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                              <Plane className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <p className="font-semibold text-foreground">{booking.flightNo}</p>
                              <p className="text-sm text-muted-foreground">Booking: {booking.id}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              <span>{booking.date}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Clock className="h-4 w-4" />
                              <span>{booking.time}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Button variant="outline" size="sm" onClick={() => handleManageBooking(booking.id)}>
                              <Edit className="h-4 w-4 mr-1" />
                              Manage
                            </Button>
                            <Button variant="gold" size="sm" onClick={() => handleCheckIn(booking.flightNo)}>
                              Check In
                            </Button>
                          </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                          <div className="flex items-center gap-8">
                            <div>
                              <p className="text-sm text-muted-foreground">From</p>
                              <p className="font-medium text-foreground">{booking.from}</p>
                            </div>
                            <ArrowRight className="h-5 w-5 text-muted-foreground" />
                            <div>
                              <p className="text-sm text-muted-foreground">To</p>
                              <p className="font-medium text-foreground">{booking.to}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">{booking.class}</span>
                            <p className="text-sm text-muted-foreground mt-1">{booking.passengers} passenger(s)</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">Past Flights</h3>
                  <div className="space-y-4">
                    {mockBookings.filter(b => b.status === "completed").map((booking) => (
                      <div key={booking.id} className="bg-card rounded-xl shadow-card p-6 opacity-75">
                        <div className="flex flex-wrap items-center justify-between gap-4">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                              <Plane className="h-6 w-6 text-muted-foreground" />
                            </div>
                            <div>
                              <p className="font-semibold text-foreground">{booking.flightNo}</p>
                              <p className="text-sm text-muted-foreground">{booking.from} → {booking.to}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Button variant="outline" size="sm" onClick={() => navigate("/book")}>
                              Book Again
                            </Button>
                            <div className="text-right">
                              <p className="text-sm text-muted-foreground">{booking.date}</p>
                              <span className="text-xs text-muted-foreground">Completed</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "rewards" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-display font-bold text-foreground">My Rewards</h2>
                <div className="bg-gradient-to-br from-accent to-amber-600 rounded-2xl p-8 text-accent-foreground">
                  <div className="flex items-center gap-4 mb-6">
                    <Star className="h-10 w-10" />
                    <div>
                      <p className="text-sm opacity-80">Gold Member</p>
                      <p className="text-3xl font-bold">52,450 Miles</p>
                    </div>
                  </div>
                  <div className="bg-white/20 rounded-full h-3 mb-2">
                    <div className="bg-white rounded-full h-3 w-1/2" />
                  </div>
                  <p className="text-sm opacity-80">47,550 miles to Platinum status</p>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-card rounded-xl p-6 shadow-card text-center">
                    <p className="text-3xl font-bold text-primary">12</p>
                    <p className="text-sm text-muted-foreground">Flights This Year</p>
                  </div>
                  <div className="bg-card rounded-xl p-6 shadow-card text-center">
                    <p className="text-3xl font-bold text-primary">3</p>
                    <p className="text-sm text-muted-foreground">Free Upgrades Used</p>
                  </div>
                  <div className="bg-card rounded-xl p-6 shadow-card text-center">
                    <p className="text-3xl font-bold text-primary">5</p>
                    <p className="text-sm text-muted-foreground">Lounge Visits</p>
                  </div>
                </div>

                <Button variant="gold" onClick={() => navigate("/offers")}>
                  View Rewards Catalog
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            )}

            {activeTab === "profile" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-display font-bold text-foreground">Profile Information</h2>
                <div className="bg-card rounded-xl shadow-card p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label className="text-sm text-muted-foreground mb-2 block">First Name</Label>
                      <Input defaultValue="John" className="bg-muted/50" />
                    </div>
                    <div>
                      <Label className="text-sm text-muted-foreground mb-2 block">Last Name</Label>
                      <Input defaultValue="Smith" className="bg-muted/50" />
                    </div>
                    <div>
                      <Label className="text-sm text-muted-foreground mb-2 block">Email</Label>
                      <Input defaultValue="john.smith@email.com" className="bg-muted/50" />
                    </div>
                    <div>
                      <Label className="text-sm text-muted-foreground mb-2 block">Phone</Label>
                      <Input defaultValue="+1 (555) 123-4567" className="bg-muted/50" />
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button variant="gold" onClick={handleSaveProfile}>Save Changes</Button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "payment" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-display font-bold text-foreground">Payment Methods</h2>
                <div className="bg-card rounded-xl shadow-card p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center gap-4">
                        <CreditCard className="h-8 w-8 text-primary" />
                        <div>
                          <p className="font-medium text-foreground">Visa ending in 4242</p>
                          <p className="text-sm text-muted-foreground">Expires 12/2025</p>
                        </div>
                      </div>
                      <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">Default</span>
                    </div>
                    <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center gap-4">
                        <CreditCard className="h-8 w-8 text-muted-foreground" />
                        <div>
                          <p className="font-medium text-foreground">Mastercard ending in 8888</p>
                          <p className="text-sm text-muted-foreground">Expires 06/2026</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" onClick={() => toast({ title: "Set as Default", description: "Mastercard ending in 8888 is now your default payment method." })}>Set Default</Button>
                    </div>
                  </div>
                  <Button variant="outline" className="mt-4" onClick={() => toast({ title: "Add Payment Method", description: "Payment method form will be available soon." })}>
                    + Add New Card
                  </Button>
                </div>
              </div>
            )}

            {activeTab === "notifications" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-display font-bold text-foreground">Notifications</h2>
                <div className="bg-card rounded-xl shadow-card p-6 space-y-4">
                  {[
                    { title: "Flight Alerts", desc: "Get notified about gate changes, delays, and boarding", checked: true },
                    { title: "Promotional Offers", desc: "Receive exclusive deals and seasonal discounts", checked: true },
                    { title: "Rewards Updates", desc: "Notifications about miles earned and tier progress", checked: false },
                    { title: "Newsletter", desc: "Weekly travel inspiration and tips", checked: false },
                  ].map((n) => (
                    <div key={n.title} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div>
                        <p className="font-medium text-foreground">{n.title}</p>
                        <p className="text-sm text-muted-foreground">{n.desc}</p>
                      </div>
                      <input type="checkbox" defaultChecked={n.checked} className="h-5 w-5 rounded" onChange={() => toast({ title: "Preference Updated", description: `${n.title} notification preference has been updated.` })} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-display font-bold text-foreground">Settings</h2>
                <div className="bg-card rounded-xl shadow-card p-6 space-y-6">
                  <div>
                    <Label className="text-sm text-muted-foreground mb-2 block">Language</Label>
                    <select className="w-full bg-muted/50 border border-input rounded-lg px-3 py-2.5">
                      <option>English</option>
                      <option>Spanish</option>
                      <option>French</option>
                      <option>German</option>
                      <option>Japanese</option>
                    </select>
                  </div>
                  <div>
                    <Label className="text-sm text-muted-foreground mb-2 block">Currency</Label>
                    <select className="w-full bg-muted/50 border border-input rounded-lg px-3 py-2.5">
                      <option>USD ($)</option>
                      <option>EUR (€)</option>
                      <option>GBP (£)</option>
                      <option>JPY (¥)</option>
                    </select>
                  </div>
                  <Button variant="gold" onClick={() => toast({ title: "Settings Saved", description: "Your preferences have been updated." })}>
                    Save Settings
                  </Button>
                  <div className="border-t border-border pt-6">
                    <h3 className="font-semibold text-foreground mb-2">Danger Zone</h3>
                    <Button variant="destructive" onClick={() => toast({ title: "Account Deletion", description: "Please contact support to delete your account." })}>
                      Delete Account
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
