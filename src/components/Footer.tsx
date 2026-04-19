import { Link, useNavigate } from "react-router-dom";
import { Plane, Facebook, Twitter, Instagram, Linkedin, Youtube, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/about" },
    { name: "Press Center", href: "/contact" },
    { name: "Partners", href: "/contact" },
  ],
  travel: [
    { name: "Book a Flight", href: "/book" },
    { name: "Manage Booking", href: "/account" },
    { name: "Flight Status", href: "/flight-status" },
    { name: "Destinations", href: "/destinations" },
  ],
  support: [
    { name: "Help Center", href: "/help" },
    { name: "Contact Us", href: "/contact" },
    { name: "FAQs", href: "/help" },
    { name: "Travel Insurance", href: "/help" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/help" },
    { name: "Terms of Service", href: "/help" },
    { name: "Cookie Policy", href: "/help" },
    { name: "Accessibility", href: "/help" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];

export default function Footer() {
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Subscribed!",
      description: "You've been added to our newsletter. Check your email for confirmation.",
    });
  };

  return (
    <footer className="bg-gradient-navy text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl font-bold mb-2">
                Stay Updated
              </h3>
              <p className="text-primary-foreground/70">
                Subscribe to our newsletter for exclusive deals and travel inspiration.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="flex-1 md:w-80 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-accent"
              />
              <Button variant="gold" type="submit">
                <Send className="h-4 w-4" />
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-full bg-primary-foreground/10">
                <Plane className="h-6 w-6 text-accent" />
              </div>
              <span className="font-display text-2xl font-bold">Air-Flight PH</span>
            </Link>
            <p className="text-primary-foreground/70 mb-6 max-w-xs">
              Your trusted partner for premium air travel. Connecting the world with comfort and style since 1995.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Travel</h4>
            <ul className="space-y-2">
              {footerLinks.travel.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>© 2026 Air-Flight PH Airlines. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <img src="https://tse1.mm.bing.net/th/id/OIP.iCVUUCqRCwiSZ4NnJAbiVAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" alt="Visa" className="h-6 opacity-70" />
              <img src="https://th.bing.com/th/id/R.205013ad5e99aef05d6ca201a9ac3a31?rik=Z0cpX2RX%2bs5a9Q&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f07%2fMastercard-PNG.png&ehk=%2fudodjGiA%2fogzZwdrBgFCGA5rNzptgXW4WqBIIdvABg%3d&risl=&pid=ImgRaw&r=0" alt="Mastercard" className="h-6 opacity-70" />
              <img src="https://www.freepnglogos.com/uploads/paypal-logo-png-1.png" alt="PayPal" className="h-6 opacity-70" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
