import React, { useState } from 'react';
import { TEAM, STORY_TEXT, COMPANY_NAME } from '../constants';
import Modal from './Modal';

const Team: React.FC = () => {
  const [isStoryOpen, setIsStoryOpen] = useState(false);

  return (
    <section id="team" className="py-20 bg-[#fafafa] dark:bg-[#1b2027]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Changed breakpoint from lg:flex-row to xl:flex-row. Tablets now stack vertically to avoid cramped images */}
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-24 items-start">
          
          {/* Text Content */}
          <div className="flex-1 w-full xl:w-auto xl:sticky xl:top-24">
            <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-3">Conoce al Equipo</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Expertos que se Preocupan por Ti</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
              En {COMPANY_NAME}, creemos que el mejor cuidado dental proviene de un equipo que realmente escucha. Nuestros especialistas no solo están altamente capacitados en las últimas tecnologías dentales, sino que también están dedicados a hacer que tu visita sea lo más cómoda posible.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Desde el momento en que cruzas nuestras puertas, sentirás la diferencia. Nos tomamos el tiempo para explicar tus opciones, responder tus preguntas y construir un plan de tratamiento que se adapte a tu vida.
            </p>
            <button 
              onClick={() => setIsStoryOpen(true)}
              className="bg-white dark:bg-white/10 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:border-primary font-bold py-3 px-8 rounded-xl transition-all hover:bg-gray-50 dark:hover:bg-white/5 active:scale-95 duration-200"
            >
              Leer Nuestra Historia
            </button>
          </div>
          
          {/* Team Grid */}
          <div className="flex-[1.5] w-full">
            {/* 
                Grid Logic update: 
                Mobile (default): 1 column
                Tablet (sm to lg): 2 or 3 columns (since full width)
                Desktop (xl): 2 columns (since sharing space with text)
            */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-6">
              {TEAM.map((member, index) => (
                <div 
                  key={member.id} 
                  // Removed the margin offset on index 1 for tablets/mobile to keep grid clean, kept only for XL desktop view
                  className={`group relative overflow-hidden rounded-2xl aspect-[3/4] bg-gray-200 xl:mt-0 ${index === 1 ? 'xl:mt-12' : ''}`}
                >
                  <img 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    src={member.image} 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <h4 className="text-white text-xl font-bold">{member.name}</h4>
                    <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
                    <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-300 opacity-0 group-hover:opacity-100">
                      <p className="text-gray-300 text-sm leading-snug">{member.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>

      <Modal
        isOpen={isStoryOpen}
        onClose={() => setIsStoryOpen(false)}
        title={`La Historia de ${COMPANY_NAME}`}
      >
        <div className="prose dark:prose-invert max-w-none">
            {STORY_TEXT.split('\n').map((paragraph, index) => (
                paragraph.trim() && <p key={index} className="text-gray-600 dark:text-gray-300 mb-4 text-lg leading-relaxed">{paragraph}</p>
            ))}
             <div className="mt-8 grid grid-cols-2 gap-4">
                 <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop" className="rounded-xl h-48 w-full object-cover" alt="Clinica interior" loading="lazy" />
                 <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop" className="rounded-xl h-48 w-full object-cover" alt="Doctora con paciente" loading="lazy" />
             </div>
        </div>
      </Modal>
    </section>
  );
};

export default Team;