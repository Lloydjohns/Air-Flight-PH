import heroVideo from "@/assets/hero-video1.mp4";
import FlightSearchForm from "./FlightSearchForm";
import { ChevronDown, Shield, Clock, Award, Plane, Globe, Users, Star, MapPin, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <>
      {/* Main Hero with Video */}
      <section className="relative min-h-[110vh] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/40 to-primary/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
          <div className="text-center mb-10 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-5 py-2 mb-6">
              <Star className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-primary-foreground/90">Award-Winning Airline of 2025</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-primary-foreground mb-6 leading-tight">
              Discover the World
              <span className="block text-gradient-gold">Your Way</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Experience premium comfort and exceptional service as you journey to over 150 destinations worldwide. 
              Your adventure begins with a single booking.
            </p>
          </div>

          {/* Flight Search Form */}
          <div className="max-w-5xl mx-auto">
            <FlightSearchForm />
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button variant="gold" size="xl" onClick={() => navigate("/destinations")} className="px-8">
              <Globe className="h-5 w-5" />
              Explore Destinations
            </Button>
            <Button variant="heroOutline" size="xl" onClick={() => navigate("/flight-status")} className="px-8">
              <Plane className="h-5 w-5" />
              Check Flight Status
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: "0.4s" }}>
            {[
              { value: "150+", label: "Destinations", icon: MapPin, link: "/destinations" },
              { value: "500+", label: "Daily Flights", icon: Plane, link: "/flight-status" },
              { value: "25M+", label: "Happy Travelers", icon: Users, link: "/about" },
              { value: "99.2%", label: "On-Time Rating", icon: Clock, link: "/flight-status" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-5 rounded-2xl bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/10 hover:bg-primary-foreground/15 transition-all duration-300 cursor-pointer"
                onClick={() => navigate(stat.link)}
              >
                <stat.icon className="h-6 w-6 text-accent mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-bold text-primary-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2">
          <span className="text-xs text-primary-foreground/60 uppercase tracking-widest">Scroll to explore</span>
          <ChevronDown className="h-6 w-6 text-primary-foreground/50" />
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-card border-b border-border py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[
              { icon: Shield, text: "Safe & Secure Booking", link: "/about" },
              { icon: Clock, text: "24/7 Customer Support", link: "/help" },
              { icon: Award, text: "Best Price Guarantee", link: "/offers" },
              { icon: Headphones, text: "Free Cancellation", link: "/help" },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary cursor-pointer transition-colors"
                onClick={() => navigate(item.link)}
              >
                <item.icon className="h-5 w-5 text-secondary" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Popular Flight Routes
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover our most-booked routes with competitive prices and flexible schedules
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { from: "New York (JFK)", to: "London (LHR)", price: "$399", flights: "12 daily", duration: "7h 30m", img: "🗽" },
              { from: "Los Angeles (LAX)", to: "Tokyo (NRT)", price: "$549", flights: "6 daily", duration: "11h 45m", img: "🗼" },
              { from: "Dubai (DXB)", to: "Paris (CDG)", price: "$459", flights: "8 daily", duration: "6h 50m", img: "🗼" },
              { from: "Singapore (SIN)", to: "Sydney (SYD)", price: "$379", flights: "5 daily", duration: "8h 15m", img: "🏖️" },
              { from: "London (LHR)", to: "Dubai (DXB)", price: "$429", flights: "10 daily", duration: "7h 05m", img: "🏙️" },
              { from: "San Francisco (SFO)", to: "Seoul (ICN)", price: "$499", flights: "4 daily", duration: "12h 20m", img: "🏯" },
            ].map((route) => (
              <div
                key={`${route.from}-${route.to}`}
                className="group bg-card rounded-2xl border border-border p-6 hover:shadow-card hover:border-secondary/30 transition-all duration-300 cursor-pointer"
                onClick={() => navigate("/book")}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{route.img}</span>
                  <span className="bg-accent/10 text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    From {route.price}
                  </span>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex-1">
                    <p className="font-semibold text-foreground text-sm">{route.from}</p>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <div className="w-8 h-px bg-border" />
                    <Plane className="h-4 w-4 text-secondary" />
                    <div className="w-8 h-px bg-border" />
                  </div>
                  <div className="flex-1 text-right">
                    <p className="font-semibold text-foreground text-sm">{route.to}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{route.duration}</span>
                  <span>{route.flights}</span>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all" onClick={(e) => { e.stopPropagation(); navigate("/book"); }}>
                  Book This Route
                </Button>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="gold" size="lg" onClick={() => navigate("/destinations")}>
              View All Routes
              <Plane className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Travel Experience */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              An Unmatched Travel Experience
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              From booking to landing, every moment is crafted for your comfort
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {[
              {
                icon: "✈️",
                title: "Premium Fleet",
                desc: "Fly on our modern fleet of Boeing 787 Dreamliners and Airbus A350s, featuring state-of-the-art entertainment, spacious seating, and whisper-quiet cabins.",
                link: "/about",
              },
              {
                icon: "🍽️",
                title: "World-Class Dining",
                desc: "Savor gourmet meals curated by Michelin-starred chefs. Choose from a selection of international cuisines, fine wines, and special dietary options.",
                link: "/book",
              },
              {
                icon: "💎",
                title: "Luxury Lounges",
                desc: "Relax in our exclusive airport lounges with premium amenities including spa services, business centers, complimentary refreshments, and shower suites.",
                link: "/offers",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="text-center cursor-pointer group"
                onClick={() => navigate(item.link)}
              >
                <div className="text-5xl mb-6">{item.icon}</div>
                <h3 className="font-display text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-primary-foreground/70 leading-relaxed mb-4">{item.desc}</p>
                <span className="text-accent text-sm font-medium group-hover:underline">Learn More →</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loyalty Program CTA */}
      <section className="py-20 bg-gradient-to-br from-accent/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-accent/20 rounded-full px-4 py-1 mb-4">
                <Star className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-accent-foreground">SkyWings Rewards</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Earn Miles. Unlock Rewards. Fly Free.
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Join our loyalty program and earn miles on every flight. Redeem for free tickets, 
                seat upgrades, lounge access, and exclusive member-only deals. The more you fly, 
                the more you save.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                {[
                  { tier: "Silver", miles: "10,000", color: "text-muted-foreground" },
                  { tier: "Gold", miles: "50,000", color: "text-accent" },
                  { tier: "Platinum", miles: "100,000", color: "text-secondary" },
                ].map((t) => (
                  <div key={t.tier} className="text-center">
                    <p className={`font-bold text-lg ${t.color}`}>{t.tier}</p>
                    <p className="text-xs text-muted-foreground">{t.miles} miles</p>
                  </div>
                ))}
              </div>
              <Button variant="gold" size="lg" onClick={() => navigate("/offers")}>
                Join Now — It's Free
              </Button>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4">
              {[
                { icon: Plane, benefit: "Free Flights", desc: "Redeem miles for tickets", link: "/book" },
                { icon: Award, benefit: "Priority Boarding", desc: "Skip the queue", link: "/offers" },
                { icon: Shield, benefit: "Extra Baggage", desc: "Up to 2 extra bags", link: "/help" },
                { icon: Headphones, benefit: "Lounge Access", desc: "Worldwide lounges", link: "/offers" },
              ].map((b) => (
                <div
                  key={b.benefit}
                  className="bg-card rounded-xl border border-border p-5 hover:shadow-card transition-all cursor-pointer"
                  onClick={() => navigate(b.link)}
                >
                  <b.icon className="h-8 w-8 text-secondary mb-3" />
                  <h4 className="font-semibold text-foreground text-sm mb-1">{b.benefit}</h4>
                  <p className="text-xs text-muted-foreground">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
