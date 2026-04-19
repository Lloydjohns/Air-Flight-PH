import { useState } from "react";
import { Plane, ArrowRight, Clock, Wifi, Coffee, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const sampleFlights = [
  { id: 1, airline: "Air-Flight PH", flightNo: "SW 201", departure: "08:00", arrival: "11:30", duration: "3h 30m", stops: "Non-stop", price: 299, class: "Economy", amenities: ["wifi", "meals", "entertainment"] },
  { id: 2, airline: "Air-Flight PH", flightNo: "SW 305", departure: "14:15", arrival: "17:45", duration: "3h 30m", stops: "Non-stop", price: 349, class: "Economy", amenities: ["wifi", "meals", "entertainment", "power"] },
  { id: 3, airline: "Air-Flight PH", flightNo: "SW 412", departure: "19:00", arrival: "22:30", duration: "3h 30m", stops: "Non-stop", price: 279, class: "Economy", amenities: ["wifi", "meals"] },
  { id: 4, airline: "Air-Flight PH Premium", flightNo: "SW 101", departure: "10:30", arrival: "14:00", duration: "3h 30m", stops: "Non-stop", price: 599, class: "Business", amenities: ["wifi", "meals", "entertainment", "power", "lounge"] },
];

export default function BookFlight() {
  const [selectedFlight, setSelectedFlight] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState("price");
  const [step, setStep] = useState(1);
  const [searchDone, setSearchDone] = useState(false);
  const { toast } = useToast();

  const sortedFlights = [...sampleFlights].sort((a, b) => {
    if (sortBy === "price") return a.price - b.price;
    if (sortBy === "duration") return a.duration.localeCompare(b.duration);
    if (sortBy === "departure") return a.departure.localeCompare(b.departure);
    return 0;
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchDone(true);
    setStep(1);
    toast({ title: "Flights Found!", description: `${sampleFlights.length} flights match your search criteria.` });
  };

  const handleSelectFlight = (flightId: number) => {
    setSelectedFlight(flightId);
    setStep(2);
    const flight = sampleFlights.find(f => f.id === flightId);
    toast({ title: "Flight Selected", description: `${flight?.flightNo} - ${flight?.departure} departure ($${flight?.price})` });
  };

  const handleContinueToPassenger = () => {
    setStep(3);
    toast({ title: "Step 3: Passenger Details", description: "Please enter passenger information to continue." });
  };

  const handleContinueToPayment = () => {
    setStep(4);
    toast({ title: "Step 4: Payment", description: "Review your booking and complete payment." });
  };

  const handleConfirmBooking = () => {
    const flight = sampleFlights.find(f => f.id === selectedFlight);
    toast({ title: "🎉 Booking Confirmed!", description: `Your booking for flight ${flight?.flightNo} has been confirmed! Booking reference: SW-${Date.now().toString().slice(-8)}. Check your email for the e-ticket.` });
    setStep(1);
    setSelectedFlight(null);
    setSearchDone(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-12 bg-gradient-to-br from-primary via-primary/90 to-sky">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Book Your Flight</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl">Find the best deals on flights to destinations worldwide. Compare prices and book with confidence.</p>
        </div>
      </section>

      {/* Booking Steps */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center gap-4 mb-8">
          {["Search", "Select Flight", "Passenger Details", "Payment"].map((label, index) => (
            <div key={label} className="flex items-center">
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all cursor-pointer",
                step > index + 1 ? "bg-accent text-accent-foreground" : step === index + 1 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              )} onClick={() => { if (index + 1 < step) setStep(index + 1); }}>
                {index + 1}
              </div>
              <span className={cn("ml-2 hidden sm:block font-medium", step === index + 1 ? "text-foreground" : "text-muted-foreground")}>{label}</span>
              {index < 3 && <ArrowRight className="mx-4 h-4 w-4 text-muted-foreground hidden sm:block" />}
            </div>
          ))}
        </div>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="bg-card rounded-2xl shadow-card p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div>
              <Label className="text-sm text-muted-foreground mb-2 block">From</Label>
              <Input placeholder="New York (JFK)" className="bg-muted/50" required />
            </div>
            <div>
              <Label className="text-sm text-muted-foreground mb-2 block">To</Label>
              <Input placeholder="Los Angeles (LAX)" className="bg-muted/50" required />
            </div>
            <div>
              <Label className="text-sm text-muted-foreground mb-2 block">Date</Label>
              <Input type="date" className="bg-muted/50" required />
            </div>
            <div>
              <Label className="text-sm text-muted-foreground mb-2 block">Passengers</Label>
              <div className="flex items-center gap-2">
                <Input type="number" defaultValue={1} min={1} className="bg-muted/50" />
                <Button variant="gold" className="whitespace-nowrap" type="submit">Search</Button>
              </div>
            </div>
          </div>
        </form>

        {searchDone && step <= 2 && (
          <>
            {/* Filters & Sort */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm" onClick={() => toast({ title: "Filters", description: "Filter by class, stops, departure time, and price range." })}>
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{sampleFlights.length} flights found</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="bg-card border border-border rounded-lg px-3 py-2 text-sm">
                  <option value="price">Price (Low to High)</option>
                  <option value="duration">Duration</option>
                  <option value="departure">Departure Time</option>
                </select>
              </div>
            </div>

            {/* Flight Results */}
            <div className="space-y-4">
              {sortedFlights.map((flight) => (
                <div key={flight.id} className={cn("bg-card rounded-xl shadow-card p-6 transition-all cursor-pointer hover:shadow-lg border-2", selectedFlight === flight.id ? "border-primary" : "border-transparent")} onClick={() => handleSelectFlight(flight.id)}>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                          <Plane className="h-6 w-6 text-primary" />
                        </div>
                        <span className="text-xs text-muted-foreground">{flight.flightNo}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-foreground">{flight.departure}</p>
                          <p className="text-sm text-muted-foreground">JFK</p>
                        </div>
                        <div className="flex flex-col items-center px-4">
                          <span className="text-xs text-muted-foreground mb-1">{flight.duration}</span>
                          <div className="w-24 h-0.5 bg-gradient-to-r from-primary to-sky relative">
                            <div className="absolute -top-1 left-0 w-2 h-2 rounded-full bg-primary" />
                            <div className="absolute -top-1 right-0 w-2 h-2 rounded-full bg-sky" />
                          </div>
                          <span className="text-xs text-accent mt-1">{flight.stops}</span>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-foreground">{flight.arrival}</p>
                          <p className="text-sm text-muted-foreground">LAX</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {flight.amenities.includes("wifi") && <Wifi className="h-4 w-4 text-muted-foreground" />}
                      {flight.amenities.includes("meals") && <Coffee className="h-4 w-4 text-muted-foreground" />}
                      {flight.amenities.includes("power") && <div className="w-4 h-4 text-muted-foreground text-xs font-bold">⚡</div>}
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">{flight.class}</p>
                      <p className="text-3xl font-bold text-primary">${flight.price}</p>
                      <p className="text-xs text-muted-foreground">per person</p>
                      <Button variant={selectedFlight === flight.id ? "gold" : "outline"} size="sm" className="mt-2" onClick={(e) => { e.stopPropagation(); handleSelectFlight(flight.id); }}>
                        {selectedFlight === flight.id ? "Selected ✓" : "Select"}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {selectedFlight && step === 2 && (
              <div className="mt-8 flex justify-end">
                <Button variant="gold" size="lg" onClick={handleContinueToPassenger}>
                  Continue to Passenger Details
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            )}
          </>
        )}

        {step === 3 && (
          <div className="bg-card rounded-2xl shadow-card p-8">
            <h2 className="text-2xl font-display font-bold text-foreground mb-6">Passenger Details</h2>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm text-muted-foreground mb-2 block">First Name *</Label>
                  <Input placeholder="John" className="bg-muted/50" />
                </div>
                <div>
                  <Label className="text-sm text-muted-foreground mb-2 block">Last Name *</Label>
                  <Input placeholder="Smith" className="bg-muted/50" />
                </div>
                <div>
                  <Label className="text-sm text-muted-foreground mb-2 block">Email *</Label>
                  <Input type="email" placeholder="john@email.com" className="bg-muted/50" />
                </div>
                <div>
                  <Label className="text-sm text-muted-foreground mb-2 block">Phone *</Label>
                  <Input type="tel" placeholder="+1 (555) 000-0000" className="bg-muted/50" />
                </div>
                <div>
                  <Label className="text-sm text-muted-foreground mb-2 block">Date of Birth *</Label>
                  <Input type="date" className="bg-muted/50" />
                </div>
                <div>
                  <Label className="text-sm text-muted-foreground mb-2 block">Passport Number</Label>
                  <Input placeholder="AB1234567" className="bg-muted/50" />
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <h3 className="font-semibold text-foreground mb-4">Add Extras</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { name: "Extra Baggage (+$30)", desc: "Add 23kg checked bag" },
                    { name: "Meal Upgrade (+$15)", desc: "Premium meal selection" },
                    { name: "Travel Insurance (+$25)", desc: "Full trip protection" },
                  ].map((extra) => (
                    <label key={extra.name} className="flex items-start gap-3 p-4 border border-border rounded-lg cursor-pointer hover:border-primary transition-colors">
                      <input type="checkbox" className="mt-1 rounded" />
                      <div>
                        <p className="font-medium text-foreground text-sm">{extra.name}</p>
                        <p className="text-xs text-muted-foreground">{extra.desc}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setStep(2)}>Back to Flight Selection</Button>
                <Button variant="gold" size="lg" onClick={handleContinueToPayment}>
                  Continue to Payment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="bg-card rounded-2xl shadow-card p-8">
            <h2 className="text-2xl font-display font-bold text-foreground mb-6">Review & Payment</h2>
            {(() => {
              const flight = sampleFlights.find(f => f.id === selectedFlight);
              return (
                <div className="space-y-6">
                  <div className="bg-muted rounded-xl p-6">
                    <h3 className="font-semibold text-foreground mb-4">Flight Summary</h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-lg text-foreground">{flight?.flightNo}</p>
                        <p className="text-muted-foreground">JFK → LAX</p>
                        <p className="text-sm text-muted-foreground">{flight?.departure} - {flight?.arrival} ({flight?.duration})</p>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl font-bold text-primary">${flight?.price}</p>
                        <p className="text-sm text-muted-foreground">{flight?.class}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-4">Payment Method</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-sm text-muted-foreground mb-2 block">Card Number *</Label>
                        <Input placeholder="4242 4242 4242 4242" className="bg-muted/50" />
                      </div>
                      <div>
                        <Label className="text-sm text-muted-foreground mb-2 block">Cardholder Name *</Label>
                        <Input placeholder="John Smith" className="bg-muted/50" />
                      </div>
                      <div>
                        <Label className="text-sm text-muted-foreground mb-2 block">Expiry Date *</Label>
                        <Input placeholder="MM/YY" className="bg-muted/50" />
                      </div>
                      <div>
                        <Label className="text-sm text-muted-foreground mb-2 block">CVV *</Label>
                        <Input placeholder="123" className="bg-muted/50" />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button variant="outline" onClick={() => setStep(3)}>Back to Passenger Details</Button>
                    <Button variant="gold" size="lg" onClick={handleConfirmBooking}>
                      Confirm & Pay ${flight?.price}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              );
            })()}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
