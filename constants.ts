import { Service, TeamMember, NavLink, FAQItem } from './types';

export const COMPANY_NAME = "Omni Dental";

export const NAV_LINKS: NavLink[] = [
  { label: "Inicio", href: "#home" },
  { label: "Servicios", href: "#services" },
  { label: "Equipo", href: "#team" },
  { label: "Testimonios", href: "#testimonials" },
  { label: "Preguntas", href: "#faq" },
  { label: "Contacto", href: "#contact" },
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Odontología General",
    description: "Chequeos completos, limpiezas de higiene y cuidados preventivos diseñados para la salud a largo plazo de toda la familia.",
    icon: "dentistry",
    details: [
      "Limpiezas dentales profundas y preventivas.",
      "Empastes de resina compuesta (del color del diente).",
      "Tratamientos de conducto sin dolor.",
      "Extracciones simples y complejas.",
      "Selladores dentales para niños."
    ]
  },
  {
    id: 2,
    title: "Ortodoncia",
    description: "Brackets modernos y alineadores invisibles diseñados para darte una sonrisa más recta, saludable y segura.",
    icon: "orthopedics",
    details: [
      "Invisalign: Alineadores transparentes y removibles.",
      "Brackets cerámicos estéticos.",
      "Brackets metálicos tradicionales de bajo perfil.",
      "Retenedores post-tratamiento.",
      "Ortodoncia interceptiva para niños."
    ]
  },
  {
    id: 3,
    title: "Estética Dental",
    description: "Blanqueamiento profesional, carillas y adhesión para realzar la belleza natural de tus dientes y aumentar tu confianza.",
    icon: "auto_awesome",
    details: [
      "Diseño de sonrisa digital.",
      "Carillas de porcelana de alta estética.",
      "Blanqueamiento dental láser (en consultorio).",
      "Kits de blanqueamiento para casa.",
      "Contorneado estético de encías."
    ]
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 1,
    name: "Dra. Sarah Smith",
    role: "Dentista Principal",
    description: "Especialista en odontología reconstructiva con 15 años de experiencia.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Dr. James Wilson",
    role: "Ortodoncista",
    description: "Experto en Invisalign y brackets transparentes para adolescentes y adultos.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Dra. Emily Chen",
    role: "Odontopediatra",
    description: "Haciendo que las visitas al dentista sean divertidas y sin miedo para nuestros pacientes más jóvenes.",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=800&auto=format&fit=crop"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "¿Aceptan seguros dentales?",
    answer: "Sí, trabajamos con la mayoría de las principales aseguradoras. Nuestro equipo administrativo se encargará de tramitar tu reclamo para que tú no tengas que preocuparte por el papeleo."
  },
  {
    question: "¿Qué debo hacer en caso de una emergencia dental?",
    answer: "Ofrecemos atención prioritaria para emergencias. Si tienes dolor severo, un diente roto o hinchazón, llámanos inmediatamente. Intentaremos atenderte el mismo día."
  },
  {
    question: "¿Es doloroso el blanqueamiento dental?",
    answer: "La mayoría de los pacientes no experimentan dolor. Algunos pueden sentir una ligera sensibilidad temporal, pero utilizamos productos modernos diseñados para minimizar cualquier molestia."
  },
  {
    question: "¿Con qué frecuencia debo visitar al dentista?",
    answer: "Recomendamos una visita cada 6 meses para un chequeo y limpieza. Esto nos permite detectar problemas a tiempo y mantener tu salud bucal en óptimas condiciones."
  },
  {
    question: "¿Ofrecen planes de pago?",
    answer: "Sí, creemos que la salud dental debe ser accesible. Ofrecemos planes de financiamiento flexibles y aceptamos tarjetas de crédito para facilitar tus tratamientos."
  }
];

export const STORY_TEXT = `
  Fundada con la visión de transformar la experiencia dental, Omni Dental nació de la creencia de que ir al dentista no debería ser motivo de ansiedad.
  
  Comenzamos en un pequeño consultorio en 2010 con un solo objetivo: tratar a cada paciente como si fuera de nuestra propia familia. A lo largo de los años, hemos crecido, adoptando las tecnologías más avanzadas del mercado, como escáneres 3D y radiografías digitales de baja radiación, pero nuestra esencia sigue intacta.
  
  Hoy, Omni Dental es sinónimo de excelencia, calidez y resultados duraderos. Nos enorgullece haber devuelto la sonrisa a más de 5,000 pacientes y esperamos poder cuidar de la tuya también.
`;