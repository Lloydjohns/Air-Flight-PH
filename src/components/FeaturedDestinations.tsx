import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import parisImage from "@/assets/destination-paris.jpg";
import tokyoImage from "@/assets/destination-tokyo.jpg";
import dubaiImage from "@/assets/destination-dubai.jpg";
import newYorkImage from "@/assets/destination-newyork.jpg";

const destinations = [
  {
    city: "Paris",
    country: "France",
    image: parisImage,
    price: "From $499",
    tag: "Popular",
  },
  {
    city: "Tokyo",
    country: "Japan",
    image: tokyoImage,
    price: "From $799",
    tag: "Trending",
  },
  {
    city: "Dubai",
    country: "UAE",
    image: dubaiImage,
    price: "From $599",
    tag: "Luxury",
  },
  {
    city: "New York",
    country: "USA",
    image: newYorkImage,
    price: "From $399",
    tag: "Business",
  },
];

export default function FeaturedDestinations() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium mb-4">
            Top Destinations
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Explore Popular Destinations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From romantic getaways to exotic adventures, discover the world's most sought-after destinations with exclusive deals.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <div
              key={destination.city}
              className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-500 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => navigate("/destinations")}
            >
              {/* Image */}
              <div className="aspect-[3/4] relative overflow-hidden">
                <img
                  src={destination.image}
                  alt={`${destination.city}, ${destination.country}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              </div>

              {/* Tag */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                  {destination.tag}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-primary-foreground">
                  <h3 className="font-display text-2xl font-bold mb-1">
                    {destination.city}
                  </h3>
                  <p className="text-primary-foreground/80 text-sm mb-2">
                    {destination.country}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-accent">
                      {destination.price}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Button variant="outline" size="lg" onClick={() => navigate("/destinations")}>
            View All Destinations
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
