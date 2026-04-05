import { Phone, Mail, MapPin, Instagram, Music } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <h3 className="text-2xl tracking-[0.3em] mb-1">ESPACE</h3>
              <p className="text-xl">SMARTPHONE</p>
              <p className="text-xs text-white/70 uppercase tracking-wide mt-1">
                Réparation & Service Premium
              </p>
            </div>
            <p className="text-white/80 text-sm">
              Votre expert en réparation de smartphones, tablettes et consoles à Amiens.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-accent">Nos Services</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Réparation Téléphones</li>
              <li>Réparation Tablettes</li>
              <li>Achat/Vente</li>
              <li>Accessoires</li>
              <li>Microsoudure</li>
              <li>Déblocage</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-accent">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span className="text-white/80">8 Place de l'Hôtel de Ville<br />80000 AMIENS</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:0649595014" className="text-white/80 hover:text-accent transition-colors">
                  06 49 59 50 14
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:espacesmartphone@gmail.com" className="text-white/80 hover:text-accent transition-colors break-all">
                  espacesmartphone@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-accent">Horaires</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Lundi - Samedi</li>
              <li className="text-accent">10h - 19h</li>
              <li className="mt-4">Dimanche</li>
              <li className="text-red-400">Fermé</li>
            </ul>

            <div className="mt-6">
              <h4 className="mb-3 text-accent">Suivez-nous</h4>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/espace.smartphone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.tiktok.com/@espace.smartphone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all"
                  aria-label="TikTok"
                >
                  <Music className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/60 text-center md:text-left">
            © {new Date().getFullYear()} Espace Smartphone. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/60">
            <span>Paiements acceptés :</span>
            <div className="flex gap-2">
              <span className="bg-white/10 px-2 py-1 rounded">CB</span>
              <span className="bg-white/10 px-2 py-1 rounded">Visa</span>
              <span className="bg-white/10 px-2 py-1 rounded">Mastercard</span>
              <span className="bg-white/10 px-2 py-1 rounded">PayPal</span>
              <span className="bg-accent/80 text-accent-foreground px-2 py-1 rounded">4x sans frais</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
