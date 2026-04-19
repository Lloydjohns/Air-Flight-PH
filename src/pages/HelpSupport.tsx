import { useState } from "react";
import { Search, HelpCircle, MessageCircle, Phone, Mail, ChevronDown, ChevronUp, Plane, Briefcase, Clock, CreditCard, Users, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const faqCategories = [
  { id: "booking", label: "Booking & Reservations", icon: Plane },
  { id: "baggage", label: "Baggage", icon: Briefcase },
  { id: "changes", label: "Changes & Cancellations", icon: Clock },
  { id: "payment", label: "Payment & Refunds", icon: CreditCard },
  { id: "travel", label: "Travel Information", icon: Users },
  { id: "loyalty", label: "Loyalty Program", icon: Shield },
];

const faqs = [
  { category: "booking", question: "How do I book a flight on Air-Flight PH?", answer: "You can book a flight on our website by using the flight search tool on the homepage. Enter your departure city, destination, travel dates, and number of passengers, then click 'Search Flights'. You can also book through our mobile app or by calling our customer service line." },
  { category: "booking", question: "Can I select my seat when booking?", answer: "Yes! During the booking process, you can select your preferred seat. Seat selection is complimentary for Business and First Class passengers. Economy passengers can select seats for a small fee, or seats are automatically assigned at check-in." },
  { category: "baggage", question: "What is the baggage allowance?", answer: "Economy Class: 1 carry-on bag (7kg) + 1 checked bag (23kg). Business Class: 2 carry-on bags (7kg each) + 2 checked bags (32kg each). First Class: 2 carry-on bags + 3 checked bags (32kg each). Additional fees apply for extra baggage." },
  { category: "baggage", question: "What items are prohibited in carry-on luggage?", answer: "Prohibited items include sharp objects, firearms, explosives, flammable items, and liquids over 100ml. Please check our complete list on our website or contact customer service for specific items." },
  { category: "changes", question: "Can I change my flight after booking?", answer: "Yes, you can change your flight through 'Manage Booking' on our website. Changes are subject to availability and fare differences. Flexible tickets allow free changes, while standard tickets may incur a change fee." },
  { category: "changes", question: "What is the cancellation policy?", answer: "Cancellation policies vary by ticket type. Flexible tickets: Full refund available. Standard tickets: Partial refund minus cancellation fee. Basic tickets: Non-refundable, but travel credit may be issued. All cancellations must be made at least 2 hours before departure." },
  { category: "payment", question: "What payment methods are accepted?", answer: "We accept major credit cards (Visa, MasterCard, American Express), debit cards, PayPal, Apple Pay, Google Pay, and bank transfers. Some routes may also accept local payment methods." },
  { category: "payment", question: "How long does a refund take?", answer: "Refunds are typically processed within 7-14 business days. The time for the refund to appear in your account depends on your bank or payment provider, usually an additional 3-5 business days." },
  { category: "travel", question: "What documents do I need to travel?", answer: "For domestic flights: Valid government-issued ID. For international flights: Valid passport (with at least 6 months validity), visas if required, and any COVID-19 documentation as per destination requirements." },
  { category: "loyalty", question: "How do I earn miles?", answer: "Earn miles on every Air-Flight PH flight based on distance and fare class. Gold and Platinum members earn bonus miles. You can also earn miles through our partner airlines, hotels, car rentals, and credit card purchases." },
];

export default function HelpSupport() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("booking");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && (searchQuery ? matchesSearch : true);
  });

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "Our support team will respond within 24 hours. Check your email for updates." });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-primary/90 to-sky">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">How Can We Help?</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">Find answers to common questions or get in touch with our support team.</p>
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input placeholder="Search for help topics..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-12 h-14 text-lg bg-card" />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Actions */}
        <section className="mb-12">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-lg transition-all cursor-pointer" onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>
              <MessageCircle className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Send a Message</h3>
              <p className="text-sm text-muted-foreground">Fill out our contact form and we'll respond within 24 hours.</p>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-lg transition-all cursor-pointer" onClick={() => toast({ title: "Calling Support", description: "Dial 1-800-Air-Flight PH for immediate assistance. Available 24/7." })}>
              <Phone className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
              <p className="text-sm text-muted-foreground mb-2">Available 24/7 for urgent assistance.</p>
              <p className="text-primary font-semibold">1-800-Air-Flight PH</p>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-lg transition-all cursor-pointer" onClick={() => navigate("/contact")}>
              <Mail className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Email Support</h3>
              <p className="text-sm text-muted-foreground mb-2">For non-urgent inquiries.</p>
              <p className="text-primary font-semibold">support@Air-Flight PH.com</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-display font-bold text-foreground text-center mb-8">Frequently Asked Questions</h2>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {faqCategories.map((category) => (
              <Button key={category.id} variant={activeCategory === category.id ? "gold" : "outline"} size="sm" onClick={() => setActiveCategory(category.id)}>
                <category.icon className="h-4 w-4 mr-2" />
                {category.label}
              </Button>
            ))}
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div key={index} className="bg-card rounded-xl shadow-card overflow-hidden">
                <button className="w-full flex items-center justify-between p-6 text-left" onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}>
                  <span className="font-medium text-foreground pr-4">{faq.question}</span>
                  {expandedFaq === index ? <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" /> : <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />}
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}

            {filteredFaqs.length === 0 && (
              <div className="text-center py-12">
                <HelpCircle className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">No results found</h3>
                <p className="text-muted-foreground">Try different keywords or browse by category</p>
              </div>
            )}
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact-form" className="max-w-2xl mx-auto">
          <div className="bg-card rounded-2xl shadow-card p-8">
            <h2 className="text-2xl font-display font-bold text-foreground text-center mb-2">Still Need Help?</h2>
            <p className="text-muted-foreground text-center mb-8">Send us a message and we'll get back to you within 24 hours.</p>

            <form className="space-y-6" onSubmit={handleSubmitForm}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm text-muted-foreground mb-2 block">First Name</Label>
                  <Input placeholder="John" className="bg-muted/50" />
                </div>
                <div>
                  <Label className="text-sm text-muted-foreground mb-2 block">Last Name</Label>
                  <Input placeholder="Smith" className="bg-muted/50" />
                </div>
              </div>
              <div>
                <Label className="text-sm text-muted-foreground mb-2 block">Email</Label>
                <Input type="email" placeholder="your@email.com" className="bg-muted/50" />
              </div>
              <div>
                <Label className="text-sm text-muted-foreground mb-2 block">Booking Reference (Optional)</Label>
                <Input placeholder="SW-XXXXXXXX-XXX" className="bg-muted/50" />
              </div>
              <div>
                <Label className="text-sm text-muted-foreground mb-2 block">Subject</Label>
                <select className="w-full bg-muted/50 border border-input rounded-lg px-3 py-2">
                  <option>Select a topic</option>
                  <option>Booking Inquiry</option>
                  <option>Baggage Issue</option>
                  <option>Flight Change/Cancellation</option>
                  <option>Refund Request</option>
                  <option>Loyalty Program</option>
                  <option>Complaint</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <Label className="text-sm text-muted-foreground mb-2 block">Message</Label>
                <Textarea placeholder="How can we help you?" className="bg-muted/50 min-h-[150px]" />
              </div>
              <Button variant="gold" className="w-full" size="lg" type="submit">Send Message</Button>
            </form>
          </div>
        </section>

        {/* Social Links */}
        <section className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">Connect with us on social media</p>
          <div className="flex justify-center gap-4">
            {[
              { name: "Twitter", url: "https://twitter.com" },
              { name: "Facebook", url: "https://facebook.com" },
              { name: "Instagram", url: "https://instagram.com" },
              { name: "LinkedIn", url: "https://linkedin.com" },
            ].map((social) => (
              <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="bg-muted hover:bg-primary hover:text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium transition-colors">
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
