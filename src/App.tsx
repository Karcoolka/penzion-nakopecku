import {
  Header,
  HeroSection,
  AccommodationSection,
  PricesSection,
  ContactSection,
  SurroundingsSection,
  Footer,
} from './components';
import './App.css';

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">
        <HeroSection />
        <AccommodationSection />
        <PricesSection />
        <ContactSection />
        <SurroundingsSection />
      </main>
      <Footer />
    </div>
  );
}
