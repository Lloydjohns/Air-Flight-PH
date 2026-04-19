import { MapPin, Phone, Mail, Clock, Send, Globe, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const offices = [
  { city: "New York", type: "Global Headquarters", address: "123 Aviation Way, New York, NY 10001", phone: "+1 (212) 555-0100", email: "nyc@Air-Flight PH.com", hours: "Mon-Fri: 8am-8pm EST" },
  { city: "London", type: "European Hub", address: "45 Sky Lane, London, EC2A 4NE", phone: "+44 20 7946 0958", email: "london@Air-Flight PH.com", hours: "Mon-Fri: 9am-6pm GMT" },
  { city: "Singapore", type: "Asia-Pacific Hub", address: "78 Changi Business Park, Singapore 486035", phone: "+65 6123 4567", email: "singapore@Air-Flight PH.com", hours: "Mon-Fri: 9am-6pm SGT" },
];

const departments = [
  { name: "Customer Service", phone: "1-800-Air-Flight PH", email: "support@Air-Flight PH.com" },
  { name: "Reservations", phone: "1-800-SKY-BOOK", email: "reservations@Air-Flight PH.com" },
  { name: "Baggage Claims", phone: "1-800-SKY-BAGS", email: "baggage@Air-Flight PH.com" },
  { name: "Corporate Travel", phone: "1-800-SKY-CORP", email: "corporate@Air-Flight PH.com" },
  { name: "Media & Press", phone: "1-800-SKY-NEWS", email: "press@Air-Flight PH.com" },
];

export default function Contact() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "Thank you for contacting us. We'll respond within 24 hours." });
  };

  const handleStartChat = () => {
    toast({ title: "Live Chat", description: "Connecting you to an agent... Our live chat is available 6am - 12am EST." });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-primary/90 to-sky">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Contact Us</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl">We're here to help. Reach out to us through any of the channels below.</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Contact Cards */}
        <section className="grid md:grid-cols-3 gap-6 mb-16 -mt-16 relative z-10">
          <div className="bg-card rounded-xl p-6 shadow-card text-center cursor-pointer hover:shadow-lg transition-all" onClick={() => toast({ title: "Call Us", description: "Dial 1-800-Air-Flight PH for immediate assistance. Available 24/7." })}>
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
            <p className="text-2xl font-bold text-primary mb-1">1-800-Air-Flight PH</p>
            <p className="text-sm text-muted-foreground">Available 24/7</p>
          </div>
          
          <div className="bg-card rounded-xl p-6 shadow-card text-center cursor-pointer hover:shadow-lg transition-all" onClick={() => { window.location.href = "mailto:support@Air-Flight PH.com"; }}>
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
            <p className="text-lg font-bold text-primary mb-1">support@Air-Flight PH.com</p>
            <p className="text-sm text-muted-foreground">Response within 24 hours</p>
          </div>
          
          <div className="bg-card rounded-xl p-6 shadow-card text-center cursor-pointer hover:shadow-lg transition-all" onClick={handleStartChat}>
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Live Chat</h3>
            <p className="text-lg font-bold text-primary mb-1">Start a Chat</p>
            <p className="text-sm text-muted-foreground">Instant support online</p>
          </div>
        </section>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <section>
            <h2 className="text-2xl font-display font-bold text-foreground mb-6">Send Us a Message</h2>
            <div className="bg-card rounded-2xl shadow-card p-8">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm text-muted-foreground mb-2 block">First Name *</Label>
                    <Input placeholder="John" className="bg-muted/50" required />
                  </div>
                  <div>
                    <Label className="text-sm text-muted-foreground mb-2 block">Last Name *</Label>
                    <Input placeholder="Smith" className="bg-muted/50" required />
                  </div>
                </div>
                <div>
                  <Label className="text-sm text-muted-foreground mb-2 block">Email Address *</Label>
                  <Input type="email" placeholder="your@email.com" className="bg-muted/50" required />
                </div>
                <div>
                  <Label className="text-sm text-muted-foreground mb-2 block">Phone Number</Label>
                  <Input type="tel" placeholder="+1 (555) 000-0000" className="bg-muted/50" />
                </div>
                <div>
                  <Label className="text-sm text-muted-foreground mb-2 block">Subject *</Label>
                  <select className="w-full bg-muted/50 border border-input rounded-lg px-3 py-2.5" required>
                    <option value="">Select a topic</option>
                    <option>General Inquiry</option>
                    <option>Booking Assistance</option>
                    <option>Feedback</option>
                    <option>Complaint</option>
                    <option>Partnership Inquiry</option>
                    <option>Media Request</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <Label className="text-sm text-muted-foreground mb-2 block">Message *</Label>
                  <Textarea placeholder="How can we help you?" className="bg-muted/50 min-h-[150px]" required />
                </div>
                <div className="flex items-start gap-2">
                  <input type="checkbox" id="privacy" className="mt-1 rounded" required />
                  <label htmlFor="privacy" className="text-sm text-muted-foreground">
                    I agree to the privacy policy and consent to being contacted regarding my inquiry.
                  </label>
                </div>
                <Button variant="gold" className="w-full" size="lg" type="submit">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </section>

          {/* Contact Information */}
          <section className="space-y-8">
            <div>
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">Department Contacts</h2>
              <div className="space-y-4">
                {departments.map((dept) => (
                  <div key={dept.name} className="bg-card rounded-xl p-4 shadow-card flex items-center justify-between hover:shadow-lg transition-all cursor-pointer" onClick={() => toast({ title: dept.name, description: `Phone: ${dept.phone} | Email: ${dept.email}` })}>
                    <div>
                      <h3 className="font-semibold text-foreground">{dept.name}</h3>
                      <p className="text-sm text-muted-foreground">{dept.email}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-primary">{dept.phone}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-muted rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-6 w-6 text-primary" />
                <h3 className="font-semibold text-foreground">Customer Service Hours</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Phone Support:</span>
                  <span className="text-foreground">24/7</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Email Response:</span>
                  <span className="text-foreground">Within 24 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Live Chat:</span>
                  <span className="text-foreground">6am - 12am EST</span>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Global Offices */}
        <section className="mt-16">
          <div className="flex items-center gap-3 mb-8">
            <Globe className="h-8 w-8 text-primary" />
            <h2 className="text-2xl font-display font-bold text-foreground">Our Offices</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {offices.map((office) => (
              <div key={office.city} className="bg-card rounded-xl shadow-card p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-semibold text-foreground">{office.city}</h3>
                    <p className="text-xs text-muted-foreground">{office.type}</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <p className="text-muted-foreground">{office.address}</p>
                  <div className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors" onClick={() => toast({ title: `Call ${office.city}`, description: office.phone })}>
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-foreground">{office.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors" onClick={() => { window.location.href = `mailto:${office.email}`; }}>
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-primary">{office.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{office.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Social Media */}
        <section className="mt-16 bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 md:p-12 text-primary-foreground text-center">
          <h2 className="font-display text-2xl font-bold mb-4">Follow Us on Social Media</h2>
          <p className="text-primary-foreground/80 mb-6">Stay connected for the latest news, deals, and travel inspiration.</p>
          <div className="flex justify-center gap-4">
            {[
              { name: "Twitter", url: "https://twitter.com" },
              { name: "Facebook", url: "https://facebook.com" },
              { name: "Instagram", url: "https://instagram.com" },
              { name: "LinkedIn", url: "https://linkedin.com" },
              { name: "YouTube", url: "https://youtube.com" },
            ].map((social) => (
              <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="bg-primary-foreground/10 hover:bg-primary-foreground/20 px-6 py-3 rounded-lg font-medium transition-colors">
                {social.name}
              </a>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
