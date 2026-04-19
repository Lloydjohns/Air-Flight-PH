import { Plane, Shield, Award, Users, Globe, Clock, Heart, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import heroImg from "@/assets/hero-airplane.jpg";

const milestones = [
  { year: "1995", title: "Foundation", description: "Air-Flight PH Airlines was founded with a vision to connect the world." },
  { year: "2003", title: "First International Route", description: "Launched our first transatlantic flight to London." },
  { year: "2010", title: "Fleet Expansion", description: "Introduced Boeing 787 Dreamliners to our fleet." },
  { year: "2015", title: "100 Destinations", description: "Reached the milestone of serving 100 destinations worldwide." },
  { year: "2020", title: "Sustainability Pledge", description: "Committed to carbon-neutral operations by 2030." },
  { year: "2024", title: "Premium Experience", description: "Launched new Business Class suites and enhanced services." },
];

const values = [
  {
    icon: Shield,
    title: "Safety First",
    description: "Your safety is our top priority. We maintain the highest standards in aviation safety.",
  },
  {
    icon: Heart,
    title: "Customer Focus",
    description: "We go above and beyond to ensure every journey is comfortable and memorable.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Committed to reducing our environmental footprint with modern, fuel-efficient aircraft.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Award-winning service recognized by industry leaders and millions of passengers.",
  },
];

const fleet = [
  { name: "Boeing 787 Dreamliner", count: 25, routes: "Long-haul international", capacity: "290 passengers" },
  { name: "Airbus A350", count: 18, routes: "International & premium routes", capacity: "315 passengers" },
  { name: "Boeing 777", count: 15, routes: "High-demand routes", capacity: "350 passengers" },
  { name: "Airbus A320neo", count: 40, routes: "Short & medium-haul", capacity: "180 passengers" },
];

const leadership = [
  { name: "Sarah Mitchell", role: "Chief Executive Officer", bio: "20+ years in aviation leadership" },
  { name: "James Chen", role: "Chief Operations Officer", bio: "Former pilot with 15 years experience" },
  { name: "Emily Rodriguez", role: "Chief Customer Officer", bio: "Hospitality industry veteran" },
  { name: "Michael Thompson", role: "Chief Financial Officer", bio: "Strategic finance expert" },
];

const awards = [
  "Best Airline - North America 2023",
  "Skytrax 4-Star Rating",
  "Best Business Class 2023",
  "Environmental Excellence Award",
  "Customer Service Excellence",
  "Best Frequent Flyer Program",
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary/90 to-sky relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            About Air-Flight PH
          </h1>
          <p className="text-primary-foreground/80 text-xl max-w-2xl">
            For nearly three decades, we've been connecting people and places, 
            making the world a little smaller and dreams a little closer.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Mission Statement */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-muted-foreground text-lg mb-6">
                At Air-Flight PH Airlines, we believe that travel has the power to transform lives. 
                Our mission is to provide safe, reliable, and exceptional air travel experiences 
                that connect people with the moments that matter most.
              </p>
              <p className="text-muted-foreground text-lg">
                We're committed to innovation, sustainability, and putting our customers first 
                in everything we do. From the moment you book to the moment you land, 
                we're dedicated to making your journey extraordinary.
              </p>
            </div>
            <div className="relative">
              <img
                src={heroImg}
                alt="Air-Flight PH aircraft"
                className="rounded-2xl shadow-card"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-lg">
                <p className="text-4xl font-bold">29</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <h2 className="text-3xl font-display font-bold text-foreground text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-lg transition-all text-center"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-20">
          <h2 className="text-3xl font-display font-bold text-foreground text-center mb-12">
            Our Journey
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-sky hidden md:block" />
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-card rounded-xl p-6 shadow-card inline-block">
                      <span className="text-primary font-bold text-lg">{milestone.year}</span>
                      <h3 className="font-semibold text-foreground mb-1">{milestone.title}</h3>
                      <p className="text-sm text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="w-4 h-4 bg-primary rounded-full relative z-10 hidden md:block">
                    <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-25" />
                  </div>
                  
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fleet */}
        <section className="mb-20">
          <h2 className="text-3xl font-display font-bold text-foreground text-center mb-4">
            Our Fleet
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            We operate one of the youngest and most modern fleets in the industry, 
            ensuring comfort, efficiency, and reliability on every flight.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fleet.map((aircraft) => (
              <div
                key={aircraft.name}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Plane className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{aircraft.name}</h3>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p><strong className="text-foreground">{aircraft.count}</strong> aircraft</p>
                  <p>{aircraft.capacity}</p>
                  <p>{aircraft.routes}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-8 bg-muted rounded-full px-8 py-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">98</p>
                <p className="text-sm text-muted-foreground">Total Aircraft</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">6.5</p>
                <p className="text-sm text-muted-foreground">Avg. Fleet Age (years)</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">150+</p>
                <p className="text-sm text-muted-foreground">Destinations</p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="mb-20">
          <h2 className="text-3xl font-display font-bold text-foreground text-center mb-12">
            Leadership Team
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((leader) => (
              <div
                key={leader.name}
                className="bg-card rounded-xl p-6 shadow-card text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-sky rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground">{leader.name}</h3>
                <p className="text-primary text-sm mb-2">{leader.role}</p>
                <p className="text-xs text-muted-foreground">{leader.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Awards */}
        <section className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 md:p-12 text-primary-foreground">
          <div className="text-center mb-8">
            <Award className="h-12 w-12 text-accent mx-auto mb-4" />
            <h2 className="font-display text-3xl font-bold mb-4">Awards & Recognition</h2>
            <p className="text-primary-foreground/80">
              Our commitment to excellence has been recognized by industry leaders worldwide.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {awards.map((award) => (
              <div
                key={award}
                className="bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full"
              >
                <span className="text-sm font-medium">{award}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
