export interface Service {
  id: number;
  title: string;
  description: string;
  details: string[]; // Added specifically for the modal content
  icon: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}