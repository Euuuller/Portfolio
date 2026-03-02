import { useEffect, useState } from 'react';

export default function Hero() {
  const roles = ['Data Analyst', 'Analista de Dados', 'Eng. Elétrica'];
  const [currentRole, setCurrentRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 60 : 100;
    const currentFullRole = roles[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && currentRole === currentFullRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentRole === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setCurrentRole(currentFullRole.substring(0, currentRole.length + (isDeleting ? -1 : 1)));
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [currentRole, isDeleting, roleIndex]);

  return (
    <section id="inicio" className="relative h-[100dvh] flex flex-col justify-center items-center overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center z-10 flex flex-col items-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 shadow-sm mb-8">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
          </span>
          <span className="text-xs font-semibold text-blue-600 dark:text-blue-500 uppercase tracking-wide">Disponível para projetos</span>
        </div>

        {/* Title */}
        <h1 className="text-[2.5rem] md:text-[4.5rem] font-extrabold text-navy dark:text-white leading-tight tracking-tight mb-4">
          Euller <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Duarte</span>
        </h1>

        {/* Typewriter Subtitle */}
        <div className="h-10 mb-6">
          <p className="text-xl md:text-3xl font-mono font-bold">
            <span className="text-blue-500">&gt; </span>
            <span className="text-transparent bg-clip-text bg-rainbow animate-gradient">{currentRole}</span>
            <span className="animate-pulse text-blue-500">_</span>
          </p>
        </div>
        
        <p className="text-slate-500 dark:text-slate-400 max-w-lg mb-10 text-sm md:text-base">
          Fique à vontade para explorar o <span className="text-blue-500 font-semibold">portfólio</span> e entrar em <span className="text-blue-500 font-semibold">contato</span> pelos links ao final da página.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a 
            href="#projetos" 
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3.5 rounded-lg font-semibold transition-colors duration-250 flex items-center justify-center gap-2"
          >
            Ver Projetos <i className="fa-solid fa-arrow-right"></i>
          </a>
          <a 
            href="#" 
            className="bg-transparent border-[1.5px] border-navy dark:border-slate-600 text-navy dark:text-white hover:bg-navy dark:hover:bg-slate-800 hover:text-white px-8 py-3.5 rounded-lg font-semibold transition-colors duration-250 flex items-center justify-center gap-2"
          >
            Baixar CV <i className="fa-solid fa-download"></i>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-400">
        <a href="#sobre">
          <i className="fa-solid fa-chevron-down text-2xl"></i>
        </a>
      </div>
    </section>
  );
}
