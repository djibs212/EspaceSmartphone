import { Phone, Mail, MapPin } from 'lucide-react';

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="bg-primary text-white py-2">
        <div className="container mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-2 text-sm">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <a href="tel:0649595014" className="hover:text-accent transition-colors">06 49 59 50 14</a>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <a href="mailto:espacesmartphone@gmail.com" className="hover:text-accent transition-colors">espacesmartphone@gmail.com</a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>8 Place de l'Hôtel de Ville, Amiens</span>
          </div>
        </div>
      </div>

      <nav className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-primary flex items-center">
              <span className="text-4xl md:text-5xl font-bold tracking-[0.3em]">ESPACE</span>
            </h1>
            <p className="text-primary text-2xl md:text-3xl font-semibold -mt-1">SMARTPHONE</p>
            <p className="text-xs text-muted-foreground uppercase tracking-wide">Réparation & Service Premium - Amiens</p>
          </div>

          <ul className="flex flex-wrap justify-center gap-6">
            <li>
              <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors">
                Services
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('avis')} className="text-foreground hover:text-primary transition-colors">
                Avis
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">
                Contact
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('rendez-vous')}
                className="bg-accent text-accent-foreground px-6 py-2 rounded-lg hover:bg-accent/90 transition-colors"
              >
                Prendre RDV
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
