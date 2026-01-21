import React, { useState } from 'react';
import { COMPANY_NAME } from '../constants';

const CallToAction: React.FC = () => {
  const [result, setResult] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult(""); // Clear previous results
    
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "392a0797-bcaa-4eb1-8b30-1b03db06d3ec");

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });

        const data = await response.json();

        if (data.success) {
          setResult("¡Mensaje enviado correctamente! Nos pondremos en contacto pronto.");
          (event.target as HTMLFormElement).reset();
        } else {
          console.error("Error", data);
          setResult("Hubo un problema. Por favor intenta nuevamente o llámanos.");
        }
    } catch (error) {
        console.error("Error de red", error);
        setResult("Ocurrió un error de conexión. Por favor intenta más tarde.");
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-background-dark relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white dark:bg-[#1b2525] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800 flex flex-col lg:flex-row">
            
          {/* Left Side - Info */}
          <div className="lg:w-2/5 p-8 md:p-12 bg-primary dark:bg-[#101818] text-white relative overflow-hidden flex flex-col justify-between">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none"></div>
             
             <div className="relative z-10">
               <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para transformar tu sonrisa?</h2>
               <p className="text-white/90 text-lg mb-8 leading-relaxed">
                 Reserva tu cita hoy en {COMPANY_NAME} y da el primer paso hacia una versión más saludable y feliz de ti mismo.
               </p>
               
               <div className="space-y-6">
                 <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-xl">location_on</span>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg">Visítanos</h4>
                        <p className="text-white/80">123 Wellness Blvd, Suite 400<br/>San Francisco, CA 94103</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-xl">phone</span>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg">Llámanos</h4>
                        <p className="text-white/80">(555) 123-4567</p>
                    </div>
                 </div>
               </div>
             </div>

             <div className="mt-12 relative z-10">
                <p className="text-sm text-white/60">Respondemos generalmente en 24 horas.</p>
             </div>
          </div>

          {/* Right Side - Form */}
          <div id="reservation-form" className="lg:w-3/5 p-8 md:p-12 bg-white dark:bg-[#1b2027] scroll-mt-32">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Envíanos un Mensaje</h3>
            
            <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">Nombre Completo</label>
                        <input 
                            type="text" 
                            name="name" 
                            id="name"
                            required
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#15191f] border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all dark:text-white"
                            placeholder="Juan Pérez"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Correo Electrónico</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email"
                            required
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#15191f] border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all dark:text-white"
                            placeholder="juan@ejemplo.com"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300">Asunto</label>
                    <select 
                        name="subject"
                        id="subject" 
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#15191f] border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all dark:text-white"
                    >
                        <option value="Consulta General">Consulta General</option>
                        <option value="Limpieza">Limpieza Dental</option>
                        <option value="Ortodoncia">Ortodoncia</option>
                        <option value="Urgencia">Urgencia</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">Mensaje</label>
                    <textarea 
                        name="message" 
                        id="message"
                        required
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#15191f] border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all resize-none dark:text-white"
                        placeholder="¿Cómo podemos ayudarte?"
                    ></textarea>
                </div>

                <div className="pt-2">
                    <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-primary/20 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 active:scale-95 duration-200"
                    >
                        {isSubmitting ? (
                            <>
                                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                Enviando...
                            </>
                        ) : (
                            <>
                                <span>Enviar Mensaje</span>
                                <span className="material-symbols-outlined text-[20px]">send</span>
                            </>
                        )}
                    </button>
                </div>
                
                {result && (
                    <div className={`p-4 rounded-xl text-center font-medium animate-fadeIn ${result.includes("éxito") ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"}`}>
                        {result}
                    </div>
                )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;