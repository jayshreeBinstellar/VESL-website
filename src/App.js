
import './App.css';
import Hero from './components/hero';
import Features from './components/Features';
import EquipmentShowcase from './components/EquipmentShowCase';
import ContactForm from './components/ContactForm';

function App() {

  return (
    <div className="flex flex-col h-screen">
      <Hero/>
      <Features/>
      <EquipmentShowcase/>
      <ContactForm/>
    </div>
  );
}

export default App;