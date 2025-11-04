
import './App.css';
import Hero from './components/hero';
import Features from './components/Features';
import EquipmentShowcase from './components/EquipmentShowCase';
import ContactForm from './components/ContactForm';
import { Navbar } from './components/Navbar';
import Footer from './components/Footer';

function App() {

  return (
    <div className="flex flex-col h-screen">
      <Navbar/>
      <Hero/>
      <Features/>
      <EquipmentShowcase/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

export default App;