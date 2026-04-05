import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'LUCIEN FT',
    rating: 5,
    text: "Je suis passé dans ce magasin pour réparer l'écran cassé de mon iPhone 14. Vendeur très professionnel, écran réparé en 1h30, pour 129€ au lieu de 300€ dans d'autres enseignes. M'a offert en plus un film protecteur pour le téléphone. De plus, le vendeur explique en détail les étapes de réparation. Je recommande fortement",
    initials: 'LF'
  },
  {
    name: 'Constance C',
    rating: 5,
    text: "Merci infiniment pour votre professionnalisme et votre rapidité ! J'ai fait appel au service de smartphone après avoir fait tomber mon iPhone dans l'eau pendant plus de 24h. Je n'avais aucune sauvegarde de mes données. Et grâce à vous j'ai pu tout récupérer alors que même Apple n'y croyait pas. Maintenant je sais où il faut aller en cas de problème sur un téléphone. Merci infiniment!",
    initials: 'CC'
  },
  {
    name: 'Romane G',
    rating: 5,
    text: "PARFAIT ! J'y suis allé ce mardi 17 février à cause de mon téléphone qui émettait des sons mais ne s'allumait pas (j'avais acheté mon téléphone 1 semaine avant dans un magasin), Ce réparateur est juste au top ! Merci à lui de m'avoir aidé à savoir ce qu'il ne va pas avec mon téléphone (l'écran) ! Et de m'avoir aidé tout court (le coup de téléphone etc) MERCI ! 👌",
    initials: 'RG'
  }
];

export function Reviews() {
  return (
    <section id="avis" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-primary mb-4">Avis Clients</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez ce que nos clients disent de nos services. Votre satisfaction est notre priorité.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-lg">5/5 sur Google</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center">
                  <span>{review.initials}</span>
                </div>
                <div>
                  <h4 className="text-primary">{review.name}</h4>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground italic">"{review.text}"</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Retrouvez tous nos avis sur Google</p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Espace+Smartphone+Amiens"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Voir tous les avis
          </a>
        </div>
      </div>
    </section>
  );
}
