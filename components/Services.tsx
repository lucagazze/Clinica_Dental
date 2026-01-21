import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { Service } from '../types';
import Modal from './Modal';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900/50 relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-3">Nuestros Servicios</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Atención Integral para Cada Sonrisa</h3>
          <p className="text-gray-600 dark:text-gray-300">Ofrecemos una gama completa de tratamientos dentales, desde cuidados preventivos hasta procedimientos restaurativos complejos, todo bajo un mismo techo.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="group flex flex-col bg-background-light dark:bg-background-dark p-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 border border-gray-100 dark:border-gray-800 hover:border-primary/20 h-full cursor-pointer" onClick={() => setSelectedService(service)}>
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined text-3xl">{service.icon}</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed flex-grow">{service.description}</p>
              <button 
                onClick={(e) => { e.stopPropagation(); setSelectedService(service); }}
                className="inline-flex items-center text-primary font-bold text-sm hover:underline self-start group/btn"
              >
                Saber más <span className="material-symbols-outlined text-sm ml-1 transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      <Modal 
        isOpen={!!selectedService} 
        onClose={() => setSelectedService(null)} 
        title={selectedService?.title || ''}
      >
        <div className="space-y-6">
          <div className="flex items-center gap-4 mb-4">
             <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-4xl">{selectedService?.icon}</span>
             </div>
             <p className="text-lg text-gray-600 dark:text-gray-300">{selectedService?.description}</p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-4">Lo que incluye este servicio:</h4>
            <ul className="space-y-3">
              {selectedService?.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <span className="material-symbols-outlined text-primary text-xl mt-0.5">check_circle</span>
                  <span className="text-gray-700 dark:text-gray-300">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-primary/5 p-4 rounded-xl border border-primary/10 mt-6">
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
              ¿Te interesa este tratamiento? <a href="#reservation-form" onClick={() => setSelectedService(null)} className="text-primary font-bold hover:underline">Reserva una consulta</a> para evaluarte.
            </p>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default Services;