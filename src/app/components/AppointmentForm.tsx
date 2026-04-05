import { useState } from 'react';
import { Calendar, Smartphone, AlertCircle, CheckCircle } from 'lucide-react';
import { sendAppointmentEmail } from '../../utils/email';

const phoneModels = {
  Apple: [
    'iPhone 16 Pro Max', 'iPhone 16 Pro', 'iPhone 16 Plus', 'iPhone 16',
    'iPhone 15 Pro Max', 'iPhone 15 Pro', 'iPhone 15 Plus', 'iPhone 15',
    'iPhone 14 Pro Max', 'iPhone 14 Pro', 'iPhone 14 Plus', 'iPhone 14',
    'iPhone 13 Pro Max', 'iPhone 13 Pro', 'iPhone 13 Mini', 'iPhone 13',
    'iPhone 12 Pro Max', 'iPhone 12 Pro', 'iPhone 12 Mini', 'iPhone 12',
    'iPhone 11 Pro Max', 'iPhone 11 Pro', 'iPhone 11',
    'iPhone XS Max', 'iPhone XS', 'iPhone XR', 'iPhone X',
    'iPhone 8 Plus', 'iPhone 8', 'iPhone 7 Plus', 'iPhone 7',
    'iPhone SE (2022)', 'iPhone SE (2020)', 'iPhone SE',
    'Autre'
  ],
  Samsung: [
    'Galaxy S24 Ultra', 'Galaxy S24+', 'Galaxy S24',
    'Galaxy S23 Ultra', 'Galaxy S23+', 'Galaxy S23',
    'Galaxy S22 Ultra', 'Galaxy S22+', 'Galaxy S22',
    'Galaxy S21 Ultra', 'Galaxy S21+', 'Galaxy S21',
    'Galaxy Z Fold 5', 'Galaxy Z Fold 4', 'Galaxy Z Flip 5', 'Galaxy Z Flip 4',
    'Galaxy A54', 'Galaxy A34', 'Galaxy A24', 'Galaxy A14',
    'Galaxy Note 20', 'Galaxy Note 10',
    'Autre'
  ],
  Xiaomi: [
    'Redmi Note 13 Pro+', 'Redmi Note 13 Pro', 'Redmi Note 13',
    'Redmi Note 12 Pro', 'Redmi Note 12',
    'Xiaomi 14', 'Xiaomi 13T Pro', 'Xiaomi 13', 'Xiaomi 12',
    'Poco X6 Pro', 'Poco X6', 'Poco F5', 'Poco M6',
    'Autre'
  ],
  Oppo: ['Find X5', 'Reno 8', 'A78', 'A58', 'Autre'],
  Huawei: ['P60 Pro', 'P50', 'Mate 50', 'Nova 11', 'Autre'],
  OnePlus: ['OnePlus 12', 'OnePlus 11', 'OnePlus Nord 3', 'Autre'],
  Google: ['Pixel 8 Pro', 'Pixel 8', 'Pixel 7', 'Pixel 6', 'Autre'],
  Autre: ['Autre modèle']
};

const issueTypes = [
  'Écran cassé',
  'Vitre arrière cassée',
  'Batterie défectueuse',
  'Problème de charge',
  'Boutons défectueux',
  'Problème de caméra',
  'Problème audio (haut-parleur/micro)',
  'Problème réseau/wifi',
  'Téléphone éteint / ne s\'allume pas',
  'Oxydation',
  'Autre problème'
];

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  brand: string;
  model: string;
  issue: string;
  description: string;
  preferredDate: string;
  preferredTime: string;
}

export function AppointmentForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    brand: '',
    model: '',
    issue: '',
    description: '',
    preferredDate: '',
    preferredTime: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'brand' && { model: '' })
    }));

    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'Le prénom est requis';
    if (!formData.lastName.trim()) newErrors.lastName = 'Le nom est requis';
    if (formData.email.trim() && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Le téléphone est requis';
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Numéro de téléphone invalide';
    }
    if (!formData.brand) newErrors.brand = 'La marque est requise';
    if (!formData.model) newErrors.model = 'Le modèle est requis';
    if (!formData.issue) newErrors.issue = 'Le type de panne est requis';
    if (!formData.preferredDate) newErrors.preferredDate = 'La date est requise';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setSending(true);

      try {
        // Envoyer l'email
        const emailSent = await sendAppointmentEmail(formData);

        if (emailSent) {
          // Sauvegarder aussi en localStorage comme backup
          const appointments = JSON.parse(localStorage.getItem('appointments') || '[]');
          const newAppointment = {
            id: Date.now(),
            ...formData,
            createdAt: new Date().toISOString()
          };
          appointments.push(newAppointment);
          localStorage.setItem('appointments', JSON.stringify(appointments));

          setSubmitted(true);
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            brand: '',
            model: '',
            issue: '',
            description: '',
            preferredDate: '',
            preferredTime: ''
          });

          setTimeout(() => setSubmitted(false), 5000);
        } else {
          alert('Erreur lors de l\'envoi du rendez-vous. Veuillez réessayer ou nous appeler au 06 49 59 50 14.');
        }
      } catch (error) {
        console.error('Erreur:', error);
        alert('Erreur lors de l\'envoi du rendez-vous. Veuillez réessayer ou nous appeler au 06 49 59 50 14.');
      } finally {
        setSending(false);
      }
    }
  };

  return (
    <section id="rendez-vous" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-4">
              <Calendar className="w-8 h-8 text-accent-foreground" />
            </div>
            <h2 className="text-4xl text-primary mb-4">Prendre Rendez-vous</h2>
            <p className="text-muted-foreground">
              Remplissez le formulaire ci-dessous et nous vous contacterons rapidement pour confirmer votre rendez-vous
            </p>
          </div>

          {submitted && (
            <div className="mb-8 bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-green-900 mb-1">Demande envoyée avec succès !</h4>
                <p className="text-green-700 text-sm">
                  Nous vous contacterons rapidement pour confirmer votre rendez-vous.
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-2xl shadow-lg space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-primary mb-2">
                  Prénom *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.firstName ? 'border-red-500' : 'border-border'} bg-white focus:outline-none focus:ring-2 focus:ring-primary`}
                  placeholder="Votre prénom"
                />
                {errors.firstName && (
                  <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.firstName}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="lastName" className="block text-primary mb-2">
                  Nom *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.lastName ? 'border-red-500' : 'border-border'} bg-white focus:outline-none focus:ring-2 focus:ring-primary`}
                  placeholder="Votre nom"
                />
                {errors.lastName && (
                  <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.lastName}
                  </p>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-primary mb-2">
                  Email (optionnel)
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-border'} bg-white focus:outline-none focus:ring-2 focus:ring-primary`}
                  placeholder="votre.email@exemple.com"
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-primary mb-2">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-border'} bg-white focus:outline-none focus:ring-2 focus:ring-primary`}
                  placeholder="06 XX XX XX XX"
                />
                {errors.phone && (
                  <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <div className="flex items-center gap-2 mb-4">
                <Smartphone className="w-5 h-5 text-primary" />
                <h3 className="text-xl text-primary">Informations de l'appareil</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="brand" className="block text-primary mb-2">
                    Marque *
                  </label>
                  <select
                    id="brand"
                    name="brand"
                    value={formData.brand}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.brand ? 'border-red-500' : 'border-border'} bg-white focus:outline-none focus:ring-2 focus:ring-primary`}
                  >
                    <option value="">Sélectionnez une marque</option>
                    {Object.keys(phoneModels).map(brand => (
                      <option key={brand} value={brand}>{brand}</option>
                    ))}
                  </select>
                  {errors.brand && (
                    <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.brand}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="model" className="block text-primary mb-2">
                    Modèle *
                  </label>
                  <select
                    id="model"
                    name="model"
                    value={formData.model}
                    onChange={handleChange}
                    disabled={!formData.brand}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.model ? 'border-red-500' : 'border-border'} bg-white focus:outline-none focus:ring-2 focus:ring-primary disabled:bg-gray-100 disabled:cursor-not-allowed`}
                  >
                    <option value="">Sélectionnez un modèle</option>
                    {formData.brand && phoneModels[formData.brand as keyof typeof phoneModels]?.map(model => (
                      <option key={model} value={model}>{model}</option>
                    ))}
                  </select>
                  {errors.model && (
                    <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.model}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="issue" className="block text-primary mb-2">
                  Type de panne *
                </label>
                <select
                  id="issue"
                  name="issue"
                  value={formData.issue}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.issue ? 'border-red-500' : 'border-border'} bg-white focus:outline-none focus:ring-2 focus:ring-primary`}
                >
                  <option value="">Sélectionnez le type de panne</option>
                  {issueTypes.map(issue => (
                    <option key={issue} value={issue}>{issue}</option>
                  ))}
                </select>
                {errors.issue && (
                  <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.issue}
                  </p>
                )}
              </div>

              <div className="mt-6">
                <label htmlFor="description" className="block text-primary mb-2">
                  Description détaillée (optionnel)
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Décrivez votre problème en détail..."
                ></textarea>
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-primary" />
                <h3 className="text-xl text-primary">Date et heure souhaitées</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="preferredDate" className="block text-primary mb-2">
                    Date préférée *
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.preferredDate ? 'border-red-500' : 'border-border'} bg-white focus:outline-none focus:ring-2 focus:ring-primary`}
                  />
                  {errors.preferredDate && (
                    <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.preferredDate}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="preferredTime" className="block text-primary mb-2">
                    Heure préférée (optionnel)
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Pas de préférence</option>
                    <option value="10h-12h">Matin (10h-12h)</option>
                    <option value="12h-14h">Midi (12h-14h)</option>
                    <option value="14h-17h">Après-midi (14h-17h)</option>
                    <option value="17h-19h">Fin d'après-midi (17h-19h)</option>
                  </select>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full bg-accent text-accent-foreground py-4 rounded-lg hover:bg-accent/90 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {sending ? (
                <>
                  <span className="inline-block w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin"></span>
                  Envoi en cours...
                </>
              ) : (
                'Envoyer la demande de rendez-vous'
              )}
            </button>

            <p className="text-center text-sm text-muted-foreground">
              Nous vous contacterons dans les plus brefs délais pour confirmer votre rendez-vous
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
