import { Smartphone, ArrowRight, Shield, Clock, Award } from 'lucide-react';

export function Hero() {
  const scrollToAppointment = () => {
    const element = document.getElementById('rendez-vous');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full text-accent">
            <Smartphone className="w-5 h-5" />
            <span>Expert en réparation depuis 2015</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl">
            Votre Smartphone
            <span className="block text-accent">Réparé en 1h</span>
          </h1>

          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Réparation rapide et professionnelle de smartphones, tablettes et consoles à Amiens.
            Garantie sur toutes nos interventions.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={scrollToAppointment}
              className="bg-accent text-accent-foreground px-8 py-4 rounded-lg hover:bg-accent/90 transition-colors flex items-center gap-2 shadow-xl"
            >
              Prendre Rendez-vous
              <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href="tel:0649595014"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              Appeler Maintenant
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Clock className="w-10 h-10 text-accent mx-auto mb-3" />
              <p className="text-2xl text-accent mb-1">1h</p>
              <p className="text-sm text-white/80">Réparation rapide</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Shield className="w-10 h-10 text-accent mx-auto mb-3" />
              <p className="text-2xl text-accent mb-1">Garantie</p>
              <p className="text-sm text-white/80">Sur toutes réparations</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Award className="w-10 h-10 text-accent mx-auto mb-3" />
              <p className="text-2xl text-accent mb-1">Prix</p>
              <p className="text-sm text-white/80">Paiement en 4x possible</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
