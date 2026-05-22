import {
  Scissors,
  Droplets,
  Zap,
  Shield,
  Target,
  Activity,
  Layers,
  Stethoscope,
  Microscope,
  Heart,
} from 'lucide-react';

// ─────────────────────────────────────────────────────────────
//  TRATAMIENTOS Y PROCEDIMIENTOS
//  Edita título y descripción según cada cliente.
// ─────────────────────────────────────────────────────────────

export const TREATMENTS = [
  {
    icon: Scissors,
    title: 'Oncología Quirúrgica',
    desc:  'Procedimientos mínimamente invasivos y asistidos por robot, realizados por un equipo dedicado exclusivamente al cáncer con décadas de experiencia en cirugía oncológica.',
  },
  {
    icon: Droplets,
    title: 'Quimioterapia',
    desc:  'Salas de infusión diseñadas para la comodidad y la privacidad, con esquemas personalizados a partir de la patología tumoral y el perfilado molecular de cada paciente.',
  },
  {
    icon: Zap,
    title: 'Radioterapia',
    desc:  'IMRT y radiocirugía estereotáxica guiadas por imagen, con precisión submilimétrica para proteger el tejido sano circundante.',
  },
  {
    icon: Shield,
    title: 'Inmunoterapia',
    desc:  'Inhibidores de puntos de control inmune con monitoreo riguroso de los efectos inmunomediados, adaptados al perfil de respuesta de cada paciente.',
  },
  {
    icon: Target,
    title: 'Terapia Dirigida',
    desc:  'Esquemas molecularmente dirigidos elegidos a partir de la firma genómica del tumor — más específicos y, con frecuencia, mejor tolerados que la quimioterapia convencional.',
  },
  {
    icon: Activity,
    title: 'Terapia Hormonal',
    desc:  'Para cánceres de mama y próstata hormonosensibles, calibrada para frenar la progresión con la menor interrupción posible de la calidad de vida.',
  },
  {
    icon: Layers,
    title: 'Trasplante de Células Madre',
    desc:  'Programas de trasplante autólogo y alogénico con seguimiento intensivo de largo plazo y apoyo multidisciplinario antes, durante y después del procedimiento.',
  },
  {
    icon: Stethoscope,
    title: 'Oncología Intervencionista',
    desc:  'Ablación, embolización y biopsias guiadas por imagen para diagnóstico y tratamiento local, con mínima invasión y recuperación rápida.',
  },
  {
    icon: Microscope,
    title: 'Medicina de Precisión · Genómica',
    desc:  'Pruebas genómicas en sede para identificar alteraciones accionables y guiar el tratamiento con la mayor especificidad posible, evitando terapias innecesarias.',
  },
  {
    icon: Heart,
    title: 'Cuidados Paliativos y de Soporte',
    desc:  'Manejo del dolor, nutrición, fatiga y bienestar emocional, integrados al tratamiento desde el primer día, no como último recurso.',
  },
];
