import { Clock, Tag, Percent, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const offers = [
  {
    title: "Summer Sale",
    description: "Book your summer getaway with 25% off all domestic flights",
    discount: "25% OFF",
    validUntil: "Valid until March 31",
    icon: Percent,
    gradient: "from-secondary to-sky-medium",
  },
  {
    title: "Early Bird Special",
    description: "Book 60 days in advance and save up to 30% on international routes",
    discount: "30% OFF",
    validUntil: "Book 60+ days ahead",
    icon: Clock,
    gradient: "from-accent to-gold-dark",
  },
  {
    title: "Last Minute Deals",
    description: "Exclusive discounts on flights departing within 7 days",
    discount: "Up to 40%",
    validUntil: "Limited availability",
    icon: Tag,
    gradient: "from-primary to-navy-dark",
  },
];

export default function SpecialOffers() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Special Offers
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Exclusive Deals Just For You
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take advantage of our limited-time offers and save big on your next adventure.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <div
              key={offer.title}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-500"
            >
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${offer.gradient}`} />
              
              <div className="p-6">
                {/* Icon & Discount */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${offer.gradient} flex items-center justify-center`}>
                    <offer.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <span className="text-2xl font-bold text-primary">
                    {offer.discount}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {offer.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {offer.description}
                </p>

                {/* Valid Until */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Clock className="h-4 w-4" />
                  {offer.validUntil}
                </div>

                {/* CTA */}
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                  onClick={() => navigate("/offers")}
                >
                  View Deal
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
