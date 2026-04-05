import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Reviews } from './components/Reviews';
import { Contact } from './components/Contact';
import { AppointmentForm } from './components/AppointmentForm';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Reviews />
        <Contact />
        <AppointmentForm />
      </main>
      <Footer />
    </div>
  );
}