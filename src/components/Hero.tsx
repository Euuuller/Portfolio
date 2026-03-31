import { useEffect, useRef, useState } from 'react';

const ROLES = ['Data Analyst', 'Analista de Dados', 'Eng. Elétrica'];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const pauseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const typeSpeed = isDeleting ? 60 : 100;
    const currentFullRole = ROLES[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && currentRole === currentFullRole) {
        pauseTimer.current = setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentRole === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      } else {
        setCurrentRole(currentFullRole.substring(0, currentRole.length + (isDeleting ? -1 : 1)));
      }
    }, typeSpeed);

    return () => {
      clearTimeout(timer);
      if (pauseTimer.current) clearTimeout(pauseTimer.current);
    };
  }, [currentRole, isDeleting, roleIndex]);

  return (
    <section id="inicio" className="relative min-h-[85vh] md:h-dvh flex flex-col justify-center items-center overflow-hidden">

      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-44 md:w-[600px] md:h-[400px] bg-blue-500/6 dark:bg-blue-500/10 rounded-full blur-2xl md:blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 text-center z-10 flex flex-col items-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm backdrop-blur-sm mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-[10px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-widest">
            Disponível para projetos
          </span>
        </div>

        {/* Intro */}
        <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg font-medium mb-2 tracking-wide">
          Olá, meu nome é
        </p>

        {/* Title */}
        <h1 className="text-[3rem] md:text-[5.5rem] font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-6">
          Euller{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            Duarte
          </span>
        </h1>

        {/* Typewriter */}
        <div className="h-14 flex items-center justify-center mb-6">
          <p className="text-2xl md:text-4xl font-bold font-mono">
            <span className="text-orange-400 mr-2 not-italic">✦</span>
            <span className="text-transparent bg-clip-text bg-roles-gradient animate-gradient">{currentRole}</span>
            <span className="animate-pulse text-blue-500 dark:text-blue-400">|</span>
          </p>
        </div>

        {/* Description */}
        <p className="text-slate-500 dark:text-slate-400 max-w-lg mb-10 text-sm md:text-base leading-relaxed">
          Transformo dados complexos em decisões estratégicas. Explore meu{' '}
          <a href="#projetos" className="text-slate-800 dark:text-white font-bold hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
            portfólio
          </a>{' '}
          e sinta-se à vontade para entrar em{' '}
          <a href="#contato" className="text-slate-800 dark:text-white font-bold hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
            contato
          </a>.
        </p>

        {/* Buttons */}
        <div className="flex flex-row gap-3">
          <a
            href="#projetos"
            className="bg-white dark:bg-white text-slate-900 hover:bg-slate-100 dark:hover:bg-slate-200 px-5 py-2.5 sm:px-8 sm:py-3.5 text-sm sm:text-base rounded-full font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-sm border border-slate-200/80 dark:border-transparent"
          >
            Ver Projetos <i className="fa-solid fa-arrow-right text-xs sm:text-sm"></i>
          </a>
          <a
            href="/docs/curriculo.pdf"
            download="Curriculo-Euller-Duarte.pdf"
            className="bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white px-5 py-2.5 sm:px-8 sm:py-3.5 text-sm sm:text-base rounded-full font-semibold transition-all duration-200 flex items-center justify-center gap-2 border border-slate-800 dark:border-slate-700"
          >
            Baixar CV <i className="fa-solid fa-download text-xs sm:text-sm"></i>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-400 dark:text-slate-500">
        <a href="#sobre">
          <i className="fa-solid fa-chevron-down text-xl"></i>
        </a>
      </div>
    </section>
  );
}
