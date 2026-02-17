
import './App.css';
import Hero from './components/hero';
import Features from './components/Features';
import EquipmentShowcase from './components/EquipmentShowCase';
import ContactForm from './components/ContactForm';
import { Navbar } from './components/Navbar';
import Footer from './components/Footer';
import SafetySection from './components/SafetySection';
import WhatsAppButton from './components/WhatsAppButton';
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Toaster position="top-right" reverseOrder={false} />
      <Navbar />
      <Hero />
      <Features />
      <EquipmentShowcase />
      <SafetySection />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;