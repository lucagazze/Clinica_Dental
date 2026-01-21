import React from 'react';

const Preloader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-[#1b2027]">
      <div className="flex flex-col items-center gap-6 animate-fadeIn">
        <div className="size-20 bg-primary/10 dark:bg-primary/20 rounded-2xl flex items-center justify-center text-primary relative">
             <span className="material-symbols-outlined text-5xl animate-bounce">dentistry</span>
             <div className="absolute inset-0 border-4 border-primary/30 rounded-2xl animate-pulse"></div>
        </div>
        <div className="flex flex-col items-center gap-2">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">Omni Dental</h2>
            <div className="h-1.5 w-32 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-primary animate-[width_1.5s_ease-in-out_infinite] w-full origin-left"></div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;