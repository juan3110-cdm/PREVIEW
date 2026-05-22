// ─────────────────────────────────────────────────────────────
//  CONFIGURACIÓN DEL CLIENTE
//  Cambia estos valores por los datos reales de cada clínica.
// ─────────────────────────────────────────────────────────────

export const CLINIC = {
  name:      'Lumen Oncología',
  tagline:   'Atención Integral del Cáncer',
  rif:       'J-50298471-3',
  acredita:  'Sociedad Venezolana de Oncología',

  // Teléfonos  (formato +58 212 XXX XXXX / +58 4XX XXX XXXX)
  phone:        '+58 212 993 4408',
  phoneNursing: '+58 414 268 1190',   // enfermería fuera de horario

  email: 'consultas@lumen-onco.com.ve',

  address: {
    building:     'Torre Médica Las Mercedes',
    floor:        'Piso 3, Consultorio 305',
    street:       'Calle Madrid c/c Av. Principal de Las Mercedes',
    neighborhood: 'Las Mercedes, Caracas 1060',
    full:         'Torre Médica Las Mercedes, Piso 3, Consultorio 305 · Calle Madrid, Las Mercedes, Caracas 1060',
  },

  hours: {
    weekdays: 'Lun–Vie  ·  7:30 a.m. – 5:30 p.m.',
    saturday: 'Sábado   ·  8:00 a.m. – 1:00 p.m.',
    sunday:   'Domingo  ·  Cerrado',
  },

  leadDoctor: 'Dr. Adrián Vega Castillo',
};

// ─────────────────────────────────────────────────────────────
//  EMAILJS — formulario de consulta
//
//  Pasos para activar el envío de correo (gratis, sin backend):
//  1. Crea cuenta en https://www.emailjs.com  (plan gratuito: 200 emails/mes)
//  2. Conecta tu Gmail en Dashboard → Email Services → Add Service
//     → copia el Service ID aquí abajo
//  3. Crea una plantilla en Email Templates → Create New Template
//     Usa estas variables en el cuerpo del mensaje:
//       {{from_name}}  {{from_email}}  {{phone}}
//       {{date}}  {{area}}  {{message}}
//     → copia el Template ID aquí abajo
//  4. Ve a Account → General → copia tu Public Key aquí abajo
//  5. Ejecuta `npm run dev` — el formulario enviará a aguadoj673@gmail.com
// ─────────────────────────────────────────────────────────────

export const EMAILJS = {
  publicKey:  'YOUR_PUBLIC_KEY',     // Ej: 'aBcDeFgHiJkLmNoPq'
  serviceId:  'YOUR_SERVICE_ID',     // Ej: 'service_xxxxxxx'
  templateId: 'YOUR_TEMPLATE_ID',   // Ej: 'template_xxxxxxx'
  toEmail:    'aguadoj673@gmail.com',
};

// ─────────────────────────────────────────────────────────────
//  WHATSAPP
//  Cambia WHATSAPP_NUMBER por el número real del cliente.
//  Formato: solo dígitos, sin '+' ni espacios.
// ─────────────────────────────────────────────────────────────

export const WHATSAPP_NUMBER  = '34607587396'; // número real para el demo (España)
export const WHATSAPP_MESSAGE = 'Hola, mi nombre es [nombre] y me gustaría recibir más información sobre los servicios de Lumen Oncología.';
