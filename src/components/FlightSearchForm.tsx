import { useState } from "react";
import { Search, MapPin, Calendar, Users, ArrowRightLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type TripType = "roundtrip" | "oneway" | "multicity";

export default function FlightSearchForm() {
  const [tripType, setTripType] = useState<TripType>("roundtrip");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departDate, setDepartDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState(1);

  const swapLocations = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  return (
    <div className="bg-primary-foreground/10 backdrop-blur-xl border border-primary-foreground/20 rounded-2xl shadow-2xl p-6 md:p-8 animate-slide-up">
      {/* Trip Type Tabs */}
      <div className="flex gap-2 mb-6">
        {[
          { value: "roundtrip", label: "Round Trip" },
          { value: "oneway", label: "One Way" },
          { value: "multicity", label: "Multi-City" },
        ].map((type) => (
          <button
            key={type.value}
            onClick={() => setTripType(type.value as TripType)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
              tripType === type.value
                ? "bg-accent text-accent-foreground shadow-lg"
                : "bg-primary-foreground/10 text-primary-foreground/80 hover:bg-primary-foreground/20"
            )}
          >
            {type.label}
          </button>
        ))}
      </div>

      {/* Search Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 items-end">
        {/* From */}
        <div className="lg:col-span-3 relative">
          <label className="block text-sm font-medium text-primary-foreground/70 mb-2">
            From
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary-foreground/50" />
            <input
              type="text"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              placeholder="Departure city"
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all backdrop-blur-sm"
            />
          </div>
        </div>

        {/* Swap Button */}
        <div className="lg:col-span-1 flex justify-center items-center">
          <button
            onClick={swapLocations}
            className="p-3 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 group text-primary-foreground/70"
          >
            <ArrowRightLeft className="h-5 w-5 group-hover:rotate-180 transition-transform duration-300" />
          </button>
        </div>

        {/* To */}
        <div className="lg:col-span-3 relative">
          <label className="block text-sm font-medium text-primary-foreground/70 mb-2">
            To
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary-foreground/50" />
            <input
              type="text"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              placeholder="Arrival city"
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all backdrop-blur-sm"
            />
          </div>
        </div>

        {/* Departure Date */}
        <div className="lg:col-span-2">
          <label className="block text-sm font-medium text-primary-foreground/70 mb-2">
            Departure
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary-foreground/50" />
            <input
              type="date"
              value={departDate}
              onChange={(e) => setDepartDate(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all backdrop-blur-sm"
            />
          </div>
        </div>

        {/* Return Date */}
        {tripType === "roundtrip" && (
          <div className="lg:col-span-2">
            <label className="block text-sm font-medium text-primary-foreground/70 mb-2">
              Return
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary-foreground/50" />
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all backdrop-blur-sm"
              />
            </div>
          </div>
        )}

        {/* Passengers */}
        <div className={cn(tripType === "roundtrip" ? "lg:col-span-1" : "lg:col-span-2")}>
          <label className="block text-sm font-medium text-primary-foreground/70 mb-2">
            Passengers
          </label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary-foreground/50" />
            <select
              value={passengers}
              onChange={(e) => setPassengers(Number(e.target.value))}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all appearance-none cursor-pointer backdrop-blur-sm"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                <option key={num} value={num} className="text-foreground bg-background">
                  {num}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Search Button */}
      <div className="mt-6 flex justify-center">
        <Button variant="gold" size="xl" className="px-12">
          <Search className="h-5 w-5" />
          Search Flights
        </Button>
      </div>
    </div>
  );
}
