import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-primary mb-4">Contact & Horaires</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Venez nous rendre visite ou contactez-nous pour toute question
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-2xl text-primary mb-6">Informations de Contact</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-primary mb-1">Adresse</h4>
                    <p className="text-muted-foreground">8 Place de l'Hôtel de Ville</p>
                    <p className="text-muted-foreground">80000 AMIENS</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-primary mb-1">Téléphone</h4>
                    <a href="tel:0649595014" className="text-muted-foreground hover:text-primary transition-colors">
                      06 49 59 50 14
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-primary mb-1">Email</h4>
                    <a href="mailto:espacesmartphone@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      espacesmartphone@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-accent p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-2xl text-primary">Horaires d'Ouverture</h3>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-foreground">Lundi</span>
                  <span className="text-primary">10h - 19h</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-foreground">Mardi</span>
                  <span className="text-primary">10h - 19h</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-foreground">Mercredi</span>
                  <span className="text-primary">10h - 19h</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-foreground">Jeudi</span>
                  <span className="text-primary">10h - 19h</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-foreground">Vendredi</span>
                  <span className="text-primary">10h - 19h</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-foreground">Samedi</span>
                  <span className="text-primary">10h - 19h</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-foreground">Dimanche</span>
                  <span className="text-red-600">Fermé</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-2xl text-primary mb-6">Localisation</h3>
            <div className="w-full h-[500px] bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2578.4147!2d2.296!3d49.894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDUzJzM4LjQiTiAywrAxNyc0NS42IkU!5e0!3m2!1sfr!2sfr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation Espace Smartphone"
              ></iframe>
            </div>
            <p className="text-muted-foreground mt-4 text-center">
              En plein centre d'Amiens, Place de l'Hôtel de Ville
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
