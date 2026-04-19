import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BookFlight from "./pages/BookFlight";
import Destinations from "./pages/Destinations";
import FlightStatus from "./pages/FlightStatus";
import SpecialOffers from "./pages/SpecialOffers";
import About from "./pages/About";
import MyAccount from "./pages/MyAccount";
import HelpSupport from "./pages/HelpSupport";
import Contact from "./pages/Contact";
import ScrollToTop from "@/components/ScrollToTop"; // ✅ already imported

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <ScrollToTop /> {/* ✅ ScrollToTop component added here */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/book" element={<BookFlight />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/flight-status" element={<FlightStatus />} />
          <Route path="/offers" element={<SpecialOffers />} />
          <Route path="/about" element={<About />} />
          <Route path="/account" element={<MyAccount />} />
          <Route path="/help" element={<HelpSupport />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
