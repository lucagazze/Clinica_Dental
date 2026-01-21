import { Service, TeamMember, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: "Inicio", href: "#home" },
  { label: "Servicios", href: "#services" },
  { label: "Equipo", href: "#team" },
  { label: "Testimonios", href: "#testimonials" },
  { label: "Contacto", href: "#contact" },
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Odontología General",
    description: "Chequeos completos, limpiezas de higiene y cuidados preventivos diseñados para la salud a largo plazo de toda la familia.",
    icon: "dentistry"
  },
  {
    id: 2,
    title: "Ortodoncia",
    description: "Brackets modernos y alineadores invisibles diseñados para darte una sonrisa más recta, saludable y segura.",
    icon: "orthopedics"
  },
  {
    id: 3,
    title: "Estética Dental",
    description: "Blanqueamiento profesional, carillas y adhesión para realzar la belleza natural de tus dientes y aumentar tu confianza.",
    icon: "auto_awesome"
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