import { useState } from "react";
import { Plane, Search, Clock, MapPin, CheckCircle, AlertTriangle, XCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

const sampleFlights = [
  {
    flightNo: "SW 201",
    origin: "New York (JFK)",
    destination: "Los Angeles (LAX)",
    scheduledDeparture: "08:00",
    actualDeparture: "08:15",
    scheduledArrival: "11:30",
    actualArrival: "11:45",
    status: "on-time",
    gate: "A12",
    terminal: "Terminal 4",
    aircraft: "Boeing 787",
    date: "2024-01-15",
  },
  {
    flightNo: "SW 305",
    origin: "Los Angeles (LAX)",
    destination: "Chicago (ORD)",
    scheduledDeparture: "14:15",
    actualDeparture: "14:15",
    scheduledArrival: "20:30",
    actualArrival: "20:30",
    status: "on-time",
    gate: "B7",
    terminal: "Terminal 2",
    aircraft: "Airbus A350",
    date: "2024-01-15",
  },
  {
    flightNo: "SW 412",
    origin: "Miami (MIA)",
    destination: "New York (JFK)",
    scheduledDeparture: "19:00",
    actualDeparture: "19:45",
    scheduledArrival: "22:30",
    actualArrival: "23:15",
    status: "delayed",
    gate: "C3",
    terminal: "Terminal 1",
    aircraft: "Boeing 777",
    date: "2024-01-15",
    delay: "45 min",
  },
  {
    flightNo: "SW 101",
    origin: "San Francisco (SFO)",
    destination: "Seattle (SEA)",
    scheduledDeparture: "10:30",
    actualDeparture: "-",
    scheduledArrival: "12:45",
    actualArrival: "-",
    status: "cancelled",
    gate: "-",
    terminal: "Terminal 3",
    aircraft: "Airbus A320",
    date: "2024-01-15",
    reason: "Weather conditions",
  },
];

const statusConfig = {
  "on-time": {
    label: "On Time",
    icon: CheckCircle,
    color: "text-accent",
    bg: "bg-accent/10",
  },
  delayed: {
    label: "Delayed",
    icon: AlertTriangle,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  cancelled: {
    label: "Cancelled",
    icon: XCircle,
    color: "text-destructive",
    bg: "bg-destructive/10",
  },
};

export default function FlightStatus() {
  const [searchType, setSearchType] = useState<"flight" | "route">("flight");
  const [flightNumber, setFlightNumber] = useState("");
  const [searchResults, setSearchResults] = useState(sampleFlights);

  const handleSearch = () => {
    if (flightNumber) {
      const filtered = sampleFlights.filter((f) =>
        f.flightNo.toLowerCase().includes(flightNumber.toLowerCase())
      );
      setSearchResults(filtered.length > 0 ? filtered : sampleFlights);
    } else {
      setSearchResults(sampleFlights);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-primary via-primary/90 to-sky">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Flight Status
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl">
            Track your flight in real-time. Get live updates on departures, arrivals, and gate information.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Search Card */}
        <div className="bg-card rounded-2xl shadow-card p-8 -mt-20 relative z-10 mb-12">
          {/* Search Type Toggle */}
          <div className="flex gap-4 mb-6">
            <Button
              variant={searchType === "flight" ? "gold" : "outline"}
              onClick={() => setSearchType("flight")}
            >
              Search by Flight Number
            </Button>
            <Button
              variant={searchType === "route" ? "gold" : "outline"}
              onClick={() => setSearchType("route")}
            >
              Search by Route
            </Button>
          </div>

          {/* Search Form */}
          {searchType === "flight" ? (
            <div className="flex gap-4">
              <div className="flex-1">
                <Label className="text-sm text-muted-foreground mb-2 block">Flight Number</Label>
                <Input
                  placeholder="e.g., SW 201"
                  value={flightNumber}
                  onChange={(e) => setFlightNumber(e.target.value)}
                  className="bg-muted/50"
                />
              </div>
              <div className="flex-1">
                <Label className="text-sm text-muted-foreground mb-2 block">Date</Label>
                <Input type="date" className="bg-muted/50" />
              </div>
              <div className="flex items-end">
                <Button variant="gold" onClick={handleSearch}>
                  <Search className="h-4 w-4 mr-2" />
                  Track Flight
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex gap-4">
              <div className="flex-1">
                <Label className="text-sm text-muted-foreground mb-2 block">From</Label>
                <Input placeholder="Departure city" className="bg-muted/50" />
              </div>
              <div className="flex-1">
                <Label className="text-sm text-muted-foreground mb-2 block">To</Label>
                <Input placeholder="Arrival city" className="bg-muted/50" />
              </div>
              <div className="flex-1">
                <Label className="text-sm text-muted-foreground mb-2 block">Date</Label>
                <Input type="date" className="bg-muted/50" />
              </div>
              <div className="flex items-end">
                <Button variant="gold" onClick={handleSearch}>
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Flight Results */}
        <div className="space-y-6">
          <h2 className="text-2xl font-display font-bold text-foreground">
            {flightNumber ? "Search Results" : "Today's Flights"}
          </h2>

          {searchResults.map((flight) => {
            const status = statusConfig[flight.status as keyof typeof statusConfig];
            const StatusIcon = status.icon;

            return (
              <div
                key={flight.flightNo}
                className="bg-card rounded-xl shadow-card p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-wrap items-start justify-between gap-6">
                  {/* Flight Info */}
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                        <Plane className="h-7 w-7 text-primary" />
                      </div>
                      <span className="text-sm font-semibold text-foreground">{flight.flightNo}</span>
                      <p className="text-xs text-muted-foreground">{flight.aircraft}</p>
                    </div>

                    <div className="flex items-center gap-8">
                      {/* Departure */}
                      <div>
                        <p className="text-3xl font-bold text-foreground">{flight.scheduledDeparture}</p>
                        {flight.actualDeparture !== flight.scheduledDeparture && flight.actualDeparture !== "-" && (
                          <p className="text-sm text-amber-500">Actual: {flight.actualDeparture}</p>
                        )}
                        <p className="text-muted-foreground">{flight.origin}</p>
                      </div>

                      {/* Timeline */}
                      <div className="flex flex-col items-center px-4">
                        <div className="w-32 h-0.5 bg-gradient-to-r from-primary to-sky relative">
                          <div className="absolute -top-1.5 left-0 w-3 h-3 rounded-full bg-primary" />
                          <Plane className="absolute -top-2 left-1/2 -translate-x-1/2 h-4 w-4 text-accent transform rotate-90" />
                          <div className="absolute -top-1.5 right-0 w-3 h-3 rounded-full bg-sky" />
                        </div>
                      </div>

                      {/* Arrival */}
                      <div>
                        <p className="text-3xl font-bold text-foreground">{flight.scheduledArrival}</p>
                        {flight.actualArrival !== flight.scheduledArrival && flight.actualArrival !== "-" && (
                          <p className="text-sm text-amber-500">Actual: {flight.actualArrival}</p>
                        )}
                        <p className="text-muted-foreground">{flight.destination}</p>
                      </div>
                    </div>
                  </div>

                  {/* Status & Details */}
                  <div className="flex flex-col items-end gap-3">
                    <div className={cn("flex items-center gap-2 px-4 py-2 rounded-full", status.bg)}>
                      <StatusIcon className={cn("h-5 w-5", status.color)} />
                      <span className={cn("font-semibold", status.color)}>{status.label}</span>
                    </div>
                    
                    {flight.delay && (
                      <p className="text-amber-500 text-sm">Delayed by {flight.delay}</p>
                    )}
                    {flight.reason && (
                      <p className="text-destructive text-sm">{flight.reason}</p>
                    )}

                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{flight.terminal}</span>
                      <span>Gate: <strong className="text-foreground">{flight.gate}</strong></span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-card rounded-xl p-6 shadow-card">
            <Clock className="h-10 w-10 text-primary mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Real-Time Updates</h3>
            <p className="text-muted-foreground text-sm">
              Our flight tracking system updates every minute with the latest information.
            </p>
          </div>
          <div className="bg-card rounded-xl p-6 shadow-card">
            <MapPin className="h-10 w-10 text-primary mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Gate Information</h3>
            <p className="text-muted-foreground text-sm">
              Get accurate gate assignments and terminal information for smooth navigation.
            </p>
          </div>
          <div className="bg-card rounded-xl p-6 shadow-card">
            <AlertTriangle className="h-10 w-10 text-primary mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Delay Alerts</h3>
            <p className="text-muted-foreground text-sm">
              Stay informed about any delays or changes to your flight schedule.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
