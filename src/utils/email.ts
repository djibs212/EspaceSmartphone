import emailjs from '@emailjs/browser';

// Configuration EmailJS
// Ces clés seront visibles côté client - c'est normal pour EmailJS
const EMAILJS_CONFIG = {
  serviceId: 'service_35wp3nv', // 
  templateId: "template_6fd1utk", // 
  publicKey: 'R434uNyfCkA8xbPKX' // 
};

interface AppointmentData {
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

export async function sendAppointmentEmail(data: AppointmentData): Promise<boolean> {
  try {
    // Formater les données pour l'email
    const emailParams = {
      to_email: 'espacesmartphone80@gmail.com',
      client_name: `${data.firstName} ${data.lastName}`,
      client_phone: data.phone,
      client_email: data.email || 'Non fourni',
      device_brand: data.brand,
      device_model: data.model,
      issue_type: data.issue,
      issue_description: data.description || 'Aucune description',
      preferred_date: new Date(data.preferredDate).toLocaleDateString('fr-FR'),
      preferred_time: data.preferredTime || 'Pas de préférence',
      submission_date: new Date().toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      emailParams,
      EMAILJS_CONFIG.publicKey
    );

    return true;
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return false;
  }
}
