import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Plane, User, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Book a Flight", href: "/book" },
  { name: "Destinations", href: "/destinations" },
  { name: "Flight Status", href: "/flight-status" },
  { name: "Special Offers", href: "/offers" },
  { name: "About Us", href: "/about" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-card py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className={cn(
            "p-2 rounded-full transition-all duration-300",
            isScrolled ? "bg-primary" : "bg-primary-foreground/20"
          )}>
            <Plane className={cn(
              "h-6 w-6 transition-all duration-300 group-hover:rotate-12",
              isScrolled ? "text-primary-foreground" : "text-primary-foreground"
            )} />
          </div>
          <span className={cn(
            "font-display text-2xl font-bold transition-colors duration-300",
            isScrolled ? "text-primary" : "text-primary-foreground"
          )}>
            Air-Flight PH
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-primary/10",
                isScrolled
                  ? "text-foreground hover:text-primary"
                  : "text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <Button
            variant={isScrolled ? "ghost" : "heroOutline"}
            size="sm"
            className={cn(
              !isScrolled && "border-primary-foreground/50 text-primary-foreground"
            )}
            onClick={() => navigate("/account")}
          >
            <User className="h-4 w-4" />
            My Account
          </Button>
          <Button
            variant="gold"
            size="sm"
            onClick={() => navigate("/book")}
          >
            Book Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={cn("h-6 w-6", isScrolled ? "text-foreground" : "text-primary-foreground")} />
          ) : (
            <Menu className={cn("h-6 w-6", isScrolled ? "text-foreground" : "text-primary-foreground")} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-card shadow-lg transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="px-4 py-3 rounded-lg font-medium text-foreground hover:bg-muted transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/help"
            className="px-4 py-3 rounded-lg font-medium text-foreground hover:bg-muted transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Help & Support
          </Link>
          <Link
            to="/contact"
            className="px-4 py-3 rounded-lg font-medium text-foreground hover:bg-muted transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
          <div className="border-t border-border my-2 pt-4 flex flex-col gap-2">
            <Button variant="outline" className="w-full justify-start" onClick={() => { navigate("/account"); setIsMobileMenuOpen(false); }}>
              <User className="h-4 w-4" />
              My Account
            </Button>
            <Button variant="gold" className="w-full" onClick={() => { navigate("/book"); setIsMobileMenuOpen(false); }}>
              Book Now
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
