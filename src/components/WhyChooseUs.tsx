import { Shield, Clock, Award, Headphones, Plane, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const features = [
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Your safety is our top priority with industry-leading security measures.",
    link: "/about",
  },
  {
    icon: Clock,
    title: "On-Time Performance",
    description: "99.2% on-time departure rate, one of the best in the industry.",
    link: "/flight-status",
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Multiple Skytrax awards for service excellence and customer satisfaction.",
    link: "/about",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer support in multiple languages.",
    link: "/help",
  },
  {
    icon: Plane,
    title: "Modern Fleet",
    description: "State-of-the-art aircraft with the latest in-flight entertainment.",
    link: "/about",
  },
  {
    icon: CreditCard,
    title: "Flexible Booking",
    description: "Easy changes and cancellations with our flexible booking policy.",
    link: "/book",
  },
];

export default function WhyChooseUs() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/50 text-secondary-foreground text-sm font-medium mb-4">
            Why Air-Flight PH
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            The Air-Flight PH Difference
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the difference that comes with choosing a premium airline committed to excellence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300 cursor-pointer"
              onClick={() => navigate(feature.link)}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-navy flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {feature.description}
              </p>
              <span className="text-primary text-sm font-medium group-hover:underline">
                Learn More →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
