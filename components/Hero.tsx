import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Content */}
          <div className="flex-1 flex flex-col gap-8 text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 self-center lg:self-start px-4 py-2 rounded-full bg-accent/20 text-orange-800 dark:text-orange-200 text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-orange-400"></span>
              Aceptando Nuevos Pacientes
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.1]">
              Experimenta la Odontología con un <span className="text-primary relative inline-block">
                Toque Suave
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/30" preserveAspectRatio="none" viewBox="0 0 100 10">
                  <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="8"></path>
                </svg>
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Cuidado moderno en un ambiente tranquilo. Priorizamos tu comodidad y salud a largo plazo con un enfoque holístico del bienestar dental.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-2">
              <a href="#contact" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white text-base font-bold h-14 px-8 rounded-xl transition-all shadow-xl shadow-primary/25 transform hover:-translate-y-1">
                Reserva tu Visita
              </a>
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white dark:bg-white/10 text-gray-700 dark:text-white border border-gray-200 dark:border-gray-700 hover:border-primary/50 text-base font-bold h-14 px-8 rounded-xl transition-all hover:bg-gray-50 dark:hover:bg-white/5">
                <span className="material-symbols-outlined text-primary">play_circle</span>
                Tour Virtual
              </button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-6 pt-4 text-sm font-medium text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                <span>Aceptamos Seguros</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                <span>Horario de Fin de Semana</span>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="flex-1 w-full max-w-xl lg:max-w-none relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gray-200/50 dark:shadow-none aspect-[4/3] group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
              <img 
                alt="Mujer sonriendo en una clínica dental moderna" 
                className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105" 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop" 
              />
              
              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm p-4 rounded-xl shadow-lg z-20 flex items-center justify-between border border-white/20">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    <img alt="Avatar 1" className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-700 object-cover" src="https://i.pravatar.cc/100?img=1" />
                    <img alt="Avatar 2" className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-700 object-cover" src="https://i.pravatar.cc/100?img=5" />
                    <div className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-700 bg-primary flex items-center justify-center text-white text-xs font-bold">+2k</div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Pacientes Felices</span>
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-bold text-gray-900 dark:text-white">4.9/5</span>
                      <span className="material-symbols-outlined text-yellow-400 text-[16px] fill-current">star</span>
                    </div>
                  </div>
                </div>
                <div className="hidden sm:flex items-center justify-center size-10 rounded-full bg-primary/10 text-primary">
                  <span className="material-symbols-outlined">favorite</span>
                </div>
              </div>
            </div>
            
            {/* Decorative circle behind image */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent rounded-full -z-10 opacity-60 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;