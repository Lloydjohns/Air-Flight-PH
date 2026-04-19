import { useState } from "react";
import { MapPin, Plane, Star, ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

import parisImg from "@/assets/destination-paris.jpg";
import tokyoImg from "@/assets/destination-tokyo.jpg";
import dubaiImg from "@/assets/destination-dubai.jpg";
import newyorkImg from "@/assets/destination-newyork.jpg";

const destinations = [
  { id: 1, name: "Paris", country: "France", continent: "Europe", image: parisImg, price: 459, rating: 4.9, description: "The City of Light awaits with iconic landmarks, world-class cuisine, and timeless romance.", highlights: ["Eiffel Tower", "Louvre Museum", "Seine River Cruise"], flightTime: "8h 30m", bestTime: "Apr - Oct", popular: true },
  { id: 2, name: "Tokyo", country: "Japan", continent: "Asia", image: tokyoImg, price: 799, rating: 4.8, description: "Experience the perfect blend of ancient traditions and cutting-edge technology.", highlights: ["Shibuya Crossing", "Mt. Fuji", "Traditional Temples"], flightTime: "14h", bestTime: "Mar - May", popular: true },
  { id: 3, name: "Dubai", country: "UAE", continent: "Middle East", image: dubaiImg, price: 549, rating: 4.7, description: "Discover luxury, adventure, and architectural marvels in this desert oasis.", highlights: ["Burj Khalifa", "Palm Jumeirah", "Desert Safari"], flightTime: "12h", bestTime: "Nov - Mar", popular: true },
  { id: 4, name: "New York", country: "USA", continent: "Americas", image: newyorkImg, price: 299, rating: 4.8, description: "The city that never sleeps offers endless entertainment, culture, and iconic sights.", highlights: ["Statue of Liberty", "Central Park", "Broadway Shows"], flightTime: "5h", bestTime: "Apr - Jun", popular: true },
  { id: 5, name: "London", country: "United Kingdom", continent: "Europe", image: parisImg, price: 399, rating: 4.7, description: "Experience British royalty, rich history, and vibrant culture in this iconic city.", highlights: ["Big Ben", "Buckingham Palace", "Tower Bridge"], flightTime: "7h", bestTime: "May - Sep", popular: false },
  { id: 6, name: "Sydney", country: "Australia", continent: "Oceania", image: dubaiImg, price: 1199, rating: 4.9, description: "Sun, surf, and stunning landmarks await in Australia's most famous city.", highlights: ["Opera House", "Bondi Beach", "Harbor Bridge"], flightTime: "22h", bestTime: "Sep - Nov", popular: false },
];

const continents = ["All", "Europe", "Asia", "Americas", "Middle East", "Oceania", "Africa"];

export default function Destinations() {
  const [selectedContinent, setSelectedContinent] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const filteredDestinations = destinations.filter((dest) => {
    const matchesContinent = selectedContinent === "All" || dest.continent === selectedContinent;
    const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          dest.country.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesContinent && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-primary/90 to-sky relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
            Explore Our Destinations
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mb-8">
            From bustling metropolises to serene beaches, discover your next adventure with Air-Flight PH.
          </p>
          <div className="max-w-md">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search destinations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap gap-2 mb-8">
          {continents.map((continent) => (
            <Button
              key={continent}
              variant={selectedContinent === continent ? "gold" : "outline"}
              size="sm"
              onClick={() => setSelectedContinent(continent)}
            >
              {continent}
            </Button>
          ))}
        </div>

        <p className="text-muted-foreground mb-6">
          Showing {filteredDestinations.length} destination{filteredDestinations.length !== 1 ? "s" : ""}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((destination) => (
            <div
              key={destination.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {destination.popular && (
                  <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    Popular
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1">
                  <Star className="h-4 w-4 text-accent fill-accent" />
                  <span className="text-sm font-medium">{destination.rating}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-foreground">{destination.name}</h3>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{destination.country}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">from</p>
                    <p className="text-2xl font-bold text-primary">${destination.price}</p>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{destination.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {destination.highlights.slice(0, 2).map((highlight) => (
                    <span key={highlight} className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">
                      {highlight}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Plane className="h-4 w-4" />
                    <span>{destination.flightTime}</span>
                  </div>
                  <span>Best: {destination.bestTime}</span>
                </div>

                <Button variant="gold" className="w-full group-hover:shadow-gold transition-shadow" onClick={() => navigate("/book")}>
                  Explore Flights
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {filteredDestinations.length === 0 && (
          <div className="text-center py-16">
            <MapPin className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No destinations found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filters</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
