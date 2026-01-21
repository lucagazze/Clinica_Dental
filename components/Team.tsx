import React from 'react';
import { TEAM } from '../constants';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-[#fafafa] dark:bg-[#1b2027]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Text Content */}
          <div className="flex-1 lg:sticky lg:top-24">
            <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-3">Conoce al Equipo</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Expertos que se Preocupan por Ti</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
              En Clínica Dental, creemos que el mejor cuidado dental proviene de un equipo que realmente escucha. Nuestros especialistas no solo están altamente capacitados en las últimas tecnologías dentales, sino que también están dedicados a hacer que tu visita sea lo más cómoda posible.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Desde el momento en que cruzas nuestras puertas, sentirás la diferencia. Nos tomamos el tiempo para explicar tus opciones, responder tus preguntas y construir un plan de tratamiento que se adapte a tu vida.
            </p>
            <button className="bg-white dark:bg-white/10 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:border-primary font-bold py-3 px-8 rounded-xl transition-all hover:bg-gray-50 dark:hover:bg-white/5">
              Leer Nuestra Historia
            </button>
          </div>
          
          {/* Team Grid */}
          <div className="flex-[1.5] w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {TEAM.map((member, index) => (
                <div 
                  key={member.id} 
                  className={`group relative overflow-hidden rounded-2xl aspect-[3/4] bg-gray-200 ${index === 1 ? 'mt-0 sm:mt-12' : ''}`}
                >
                  <img 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    src={member.image} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <h4 className="text-white text-xl font-bold">{member.name}</h4>
                    <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
                    <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-300 opacity-0 group-hover:opacity-100">
                      <p className="text-gray-300 text-sm">{member.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Team;