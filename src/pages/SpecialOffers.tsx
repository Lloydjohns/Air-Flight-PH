import { Clock, Percent, Tag, Plane, ArrowRight, Star, Users, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

import parisImg from "@/assets/destination-paris.jpg";
import tokyoImg from "@/assets/destination-tokyo.jpg";
import dubaiImg from "@/assets/destination-dubai.jpg";

const offers = [
  { id: 1, title: "Summer Escape Sale", description: "Book your summer getaway and save up to 30% on flights to Europe and Asia.", discount: "30%", discountType: "off", image: parisImg, destinations: ["Paris", "Rome", "Barcelona", "Tokyo"], validUntil: "March 31, 2024", code: "SUMMER30", featured: true },
  { id: 2, title: "Business Class Upgrade", description: "Upgrade to Business Class at a fraction of the price. Limited seats available.", discount: "50%", discountType: "off upgrades", image: dubaiImg, destinations: ["All routes"], validUntil: "February 28, 2024", code: "BIZUP50", featured: false },
  { id: 3, title: "Asia Explorer Package", description: "Multi-city package including Tokyo, Singapore, and Hong Kong with hotel stays.", discount: "$500", discountType: "savings", image: tokyoImg, destinations: ["Tokyo", "Singapore", "Hong Kong"], validUntil: "April 15, 2024", code: "ASIAEXP", featured: true },
  { id: 4, title: "Last Minute Deals", description: "Departing within 7 days? Grab these incredible last-minute offers.", discount: "40%", discountType: "off", image: parisImg, destinations: ["Various"], validUntil: "Ongoing", code: "LASTMIN", featured: false },
];

const loyaltyTiers = [
  { name: "Silver", miles: "10,000+", benefits: ["Priority check-in", "Extra baggage (10kg)", "Lounge discounts"], color: "from-gray-300 to-gray-400" },
  { name: "Gold", miles: "50,000+", benefits: ["Priority boarding", "Extra baggage (20kg)", "Lounge access", "Seat selection"], color: "from-yellow-400 to-amber-500" },
  { name: "Platinum", miles: "100,000+", benefits: ["First Class lounge", "Extra baggage (30kg)", "Free upgrades", "Dedicated support"], color: "from-slate-400 to-slate-600" },
];

export default function SpecialOffers() {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    toast({ title: "Code Copied!", description: `Promo code ${code} has been copied to your clipboard.` });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-primary/90 to-sky relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 border-4 border-primary-foreground rounded-full" />
          <div className="absolute bottom-20 right-20 w-60 h-60 border-4 border-primary-foreground rounded-full" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <Tag className="h-8 w-8 text-accent" />
            <span className="text-accent font-semibold">Limited Time Offers</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
            Special Offers & Deals
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl">
            Discover exclusive discounts and packages. Book now and save on your next adventure with Air-Flight PH.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Featured Offers */}
        <section className="mb-16">
          <h2 className="text-3xl font-display font-bold text-foreground mb-8">Featured Deals</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {offers.filter(o => o.featured).map((offer) => (
              <div key={offer.id} className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-lg transition-all">
                <div className="absolute inset-0">
                  <img src={offer.image} alt={offer.title} className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent" />
                </div>
                <div className="relative p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Percent className="h-5 w-5 text-accent" />
                        <span className="text-accent font-semibold text-sm">Featured</span>
                      </div>
                      <h3 className="font-display text-2xl font-bold text-foreground">{offer.title}</h3>
                    </div>
                    <div className="text-right">
                      <p className="text-4xl font-bold text-primary">{offer.discount}</p>
                      <p className="text-sm text-muted-foreground">{offer.discountType}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{offer.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {offer.destinations.slice(0, 3).map((dest) => (
                      <span key={dest} className="bg-muted px-3 py-1 rounded-full text-sm text-muted-foreground">{dest}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>Valid until {offer.validUntil}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <code
                        className="bg-primary/10 text-primary px-3 py-1 rounded-lg text-sm font-mono cursor-pointer hover:bg-primary/20 transition-colors"
                        onClick={() => handleCopyCode(offer.code)}
                        title="Click to copy"
                      >
                        {offer.code}
                      </code>
                      <Button variant="gold" onClick={() => navigate("/book")}>
                        Book Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* All Offers */}
        <section className="mb-16">
          <h2 className="text-3xl font-display font-bold text-foreground mb-8">All Promotions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offers.map((offer) => (
              <div key={offer.id} className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-lg transition-all group">
                <div className="h-32 relative overflow-hidden">
                  <img src={offer.image} alt={offer.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-2 py-1 rounded-lg text-sm font-bold">
                    {offer.discount} {offer.discountType}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-2">{offer.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{offer.description}</p>
                  <div className="flex items-center justify-between">
                    <code
                      className="bg-muted text-xs px-2 py-1 rounded cursor-pointer hover:bg-muted/80"
                      onClick={() => handleCopyCode(offer.code)}
                      title="Click to copy"
                    >
                      {offer.code}
                    </code>
                    <Button variant="ghost" size="sm" onClick={() => navigate("/book")}>
                      Book <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Loyalty Program */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="h-6 w-6 text-accent" />
              <span className="text-accent font-semibold">Air-Flight PH Rewards</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">Join Our Loyalty Program</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Earn miles on every flight and unlock exclusive benefits. The more you fly, the more you save.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {loyaltyTiers.map((tier) => (
              <div key={tier.name} className="bg-card rounded-2xl p-6 shadow-card hover:shadow-lg transition-all relative overflow-hidden">
                <div className={cn("absolute top-0 left-0 right-0 h-2 bg-gradient-to-r", tier.color)} />
                <div className="text-center mb-6">
                  <div className={cn("w-16 h-16 mx-auto rounded-full bg-gradient-to-br flex items-center justify-center mb-4", tier.color)}>
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{tier.name}</h3>
                  <p className="text-muted-foreground">{tier.miles} miles</p>
                </div>
                <ul className="space-y-3">
                  {tier.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="gold" size="lg" onClick={() => navigate("/account")}>
              <Gift className="mr-2 h-5 w-5" />
              Join Now - It's Free
            </Button>
          </div>
        </section>

        {/* Group Bookings */}
        <section className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 md:p-12 text-primary-foreground">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Users className="h-6 w-6 text-accent" />
                <span className="text-accent font-semibold">Group & Corporate</span>
              </div>
              <h2 className="font-display text-3xl font-bold mb-4">Traveling with a Group?</h2>
              <p className="text-primary-foreground/80 max-w-lg">
                Get special rates for groups of 10 or more. Perfect for corporate events, 
                weddings, sports teams, and more. Contact us for a customized quote.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Button variant="gold" size="lg" onClick={() => navigate("/contact")}>
                Request Group Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="heroOutline" size="lg" onClick={() => navigate("/contact")}>
                Corporate Travel Program
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
