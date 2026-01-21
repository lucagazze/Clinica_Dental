import React from 'react';
import { NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 dark:bg-[#15191f] pt-16 pb-8 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center justify-center size-8 rounded-lg bg-primary/10 text-primary">
                <span className="material-symbols-outlined text-xl">dentistry</span>
              </div>
              <span className="text-lg font-bold text-gray-900 dark:text-white">Clínica Dental</span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
              Brindando cuidado dental suave y moderno para toda la familia. Tu sonrisa es nuestra pasión.
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Enlaces Rápidos</h4>
            <ul className="flex flex-col gap-2 text-sm text-gray-500 dark:text-gray-400">
              {NAV_LINKS.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-primary transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Contacto</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-500 dark:text-gray-400">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">location_on</span>
                <span>123 Wellness Blvd, Suite 400<br/>San Francisco, CA 94103</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[18px]">phone</span>
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[18px]">mail</span>
                <span>hola@clinicadental.com</span>
              </li>
            </ul>
          </div>
          
          {/* Hours */}
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Horario de Apertura</h4>
            <ul className="flex flex-col gap-2 text-sm text-gray-500 dark:text-gray-400">
              <li className="flex justify-between">
                <span>Lun - Vie</span>
                <span className="font-medium text-gray-900 dark:text-white">8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sábado</span>
                <span className="font-medium text-gray-900 dark:text-white">9:00 AM - 2:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo</span>
                <span className="text-primary font-medium">Cerrado</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">© 2024 Clínica Dental. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <span className="sr-only">Facebook</span>
              <span className="text-sm font-medium">FB</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <span className="sr-only">Instagram</span>
              <span className="text-sm font-medium">IG</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <span className="sr-only">Twitter</span>
              <span className="text-sm font-medium">TW</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;