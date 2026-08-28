import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ValueChainGrid from './components/ValueChainGrid';
import DualPathways from './components/DualPathways';
import EventHighlights from './components/EventHighlights';
import FloorPlanPreview from './components/FloorPlanPreview';
import SponsorshipMatrix from './components/SponsorshipMatrix';
import RegistrationForm from './components/RegistrationForm';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased overflow-x-clip min-h-screen bg-brand-navy-950 text-white">
      <Navbar />
      
      <main>
        <HeroSection />
        <ValueChainGrid />
        <DualPathways />
        <EventHighlights />
        <FloorPlanPreview />
        <SponsorshipMatrix />
        <RegistrationForm />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
