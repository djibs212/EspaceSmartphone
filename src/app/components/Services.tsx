import { Smartphone, Cpu, ShoppingCart, Headphones, Shield, TrendingUp, Wrench, Tablet, Gamepad2 } from 'lucide-react';

const services = [
  {
    icon: Smartphone,
    title: 'Réparation Téléphones',
    items: ['Écran cassé', 'Batterie', 'Connecteur de charge', 'Caméra', 'Boutons', 'Haut-parleur'],
    color: 'from-blue-500 to-blue-600',
    iconBg: 'bg-blue-500'
  },
  {
    icon: Tablet,
    title: 'Réparation Tablettes',
    items: ['iPad', 'Samsung Tab', 'Écran tactile', 'Vitre', 'Connectique', 'Batterie'],
    color: 'from-purple-500 to-purple-600',
    iconBg: 'bg-purple-500'
  },
  {
    icon: Gamepad2,
    title: 'Réparation Consoles',
    items: ['Nintendo Switch', 'PS5', 'Xbox', 'Manettes', 'Écran Switch', 'Port USB'],
    color: 'from-red-500 to-red-600',
    iconBg: 'bg-red-500'
  },
  {
    icon: Cpu,
    title: 'Microsoudure',
    items: ['Carte Mère', 'Puces électroniques', 'Connecteurs', 'Réparations complexes'],
    color: 'from-orange-500 to-orange-600',
    iconBg: 'bg-orange-500'
  },
  {
    icon: TrendingUp,
    title: 'Achat - Vente',
    items: ['Téléphones neufs', 'Reconditionnés', 'Reprise appareil', 'Garantie incluse'],
    color: 'from-green-500 to-green-600',
    iconBg: 'bg-green-500'
  },
  {
    icon: Headphones,
    title: 'Accessoires Premium',
    items: ['Coques', 'Verres trempés', 'Chargeurs', 'Écouteurs', 'Batteries externes', 'Câbles'],
    color: 'from-indigo-500 to-indigo-600',
    iconBg: 'bg-indigo-500'
  },
  {
    icon: Shield,
    title: 'Restauration',
    items: ['Restauration système', 'Réinitialisation', 'Mise à jour', 'Problèmes logiciels'],
    color: 'from-pink-500 to-pink-600',
    iconBg: 'bg-pink-500'
  },
  {
    icon: Wrench,
    title: 'Dépannage',
    items: ['Diagnostic gratuit', 'Récupération données', 'Problèmes logiciels', 'Désoxydation'],
    color: 'from-teal-500 to-teal-600',
    iconBg: 'bg-teal-500'
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-primary mb-4">Nos Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Une gamme complète de services pour tous vos appareils électroniques.
            Intervention rapide et professionnelle avec garantie.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden group"
              >
                <div className={`bg-gradient-to-br ${service.color} p-6 text-white`}>
                  <Icon className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl mb-1">{service.title}</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-2">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center border-2 border-accent/20 hover:border-accent transition-colors">
            <div className="text-4xl mb-2">⚡</div>
            <p className="text-2xl text-primary mb-2">Réparation en 1h</p>
            <p className="text-muted-foreground">Intervention rapide pour la plupart des réparations</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center border-2 border-accent/20 hover:border-accent transition-colors">
            <div className="text-4xl mb-2">✓</div>
            <p className="text-2xl text-primary mb-2">Garantie Incluse</p>
            <p className="text-muted-foreground">Toutes nos réparations sont garanties</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center border-2 border-accent/20 hover:border-accent transition-colors">
            <div className="text-4xl mb-2">💰</div>
            <p className="text-2xl text-primary mb-2">Prix Compétitifs</p>
            <p className="text-muted-foreground">Paiement en 4x possible - Jusqu'à 50% moins cher</p>
          </div>
        </div>
      </div>
    </section>
  );
}
