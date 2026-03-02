import SectionHeader from './SectionHeader';

export default function About() {
  return (
    <section id="sobre" className="md:min-h-[100dvh] flex flex-col pt-[120px] pb-[80px]">
      <div className="max-w-7xl mx-auto px-6 w-full flex-1 flex flex-col">
        <SectionHeader
          title="Sobre Mim"
          subtitle="Conheça minha trajetória, formação e o que me motiva a transformar dados em soluções."
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-[60px] items-start">
          {/* Image Column */}
          <div className="relative mx-auto lg:mx-0 max-w-sm w-full">
            <div className="aspect-square rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-lg relative z-10">
              <img
                src="/profile.jpeg"
                alt="Euller Duarte"
                className="w-full h-full object-cover"
              />
            </div>
            {/* GitHub Badge */}
            <a
              href="https://github.com/euller-ds"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 z-20 w-14 h-14 bg-navy dark:bg-slate-800 rounded-full flex items-center justify-center text-white shadow-md hover:scale-110 transition-transform"
            >
              <i className="fa-brands fa-github text-3xl"></i>
            </a>
          </div>

          {/* Text Column */}
          <div className="flex flex-col items-center text-center">
            <div className="text-slate-600 dark:text-slate-300 text-base leading-relaxed space-y-4 mb-10 max-w-2xl">
              <p>
                Graduando em <span className="text-blue-500 dark:text-blue-400 font-semibold">Engenharia Elétrica</span> pelo Instituto Federal do Maranhão (IFMA), com foco em <span className="text-blue-500 dark:text-blue-400 font-semibold">Análise de Dados</span>. Possuo experiência prática com <span className="text-green-600 dark:text-green-500 font-semibold">Excel</span>, <span className="text-yellow-500 dark:text-yellow-400 font-semibold">Power BI</span>, <span className="text-teal-600 dark:text-teal-400 font-semibold">SQL</span> e <span className="text-yellow-500 dark:text-yellow-400 font-semibold">Python</span>, aplicando conceitos de Estatística e os principais tipos de análise de dados Descritiva, Diagnóstica, Preditiva e Prescritiva para resolver problemas de negócio.
              </p>
              <p>
                Desenvolvi projetos completos utilizando dados públicos, incluindo segmentação de clientes (RFM), análise de retenção por cohort, diagnóstico de queda de vendas, criação de dashboards gerenciais e previsão do número de pedidos, transformando dados em tomada de decisão orientada a dados.
              </p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-2 sm:gap-6 border-t border-slate-200 dark:border-slate-800 pt-8 w-full max-w-3xl">
              <div className="flex flex-col items-center gap-1 sm:gap-2 text-center px-1">
                <i className="fa-solid fa-folder-open text-blue-500 dark:text-blue-400 text-base sm:text-xl"></i>
                <span className="text-[9px] sm:text-[11px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Projetos</span>
                <span className="text-[11px] sm:text-[15px] font-semibold text-navy dark:text-white leading-tight">15+ Públicos</span>
              </div>

              <div className="flex flex-col items-center gap-1 sm:gap-2 text-center border-l border-slate-200 dark:border-slate-800 px-1 sm:pl-6">
                <i className="fa-solid fa-chart-pie text-purple-500 dark:text-purple-400 text-base sm:text-xl"></i>
                <span className="text-[9px] sm:text-[11px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Foco Principal</span>
                <span className="text-[11px] sm:text-[15px] font-semibold text-navy dark:text-white leading-tight">Análise de Dados & BI</span>
              </div>

              <div className="flex flex-col items-center gap-1 sm:gap-2 text-center border-l border-slate-200 dark:border-slate-800 px-1 sm:pl-6">
                <i className="fa-solid fa-graduation-cap text-orange-500 dark:text-orange-400 text-base sm:text-xl"></i>
                <span className="text-[9px] sm:text-[11px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Formação</span>
                <span className="text-[11px] sm:text-[15px] font-semibold text-navy dark:text-white leading-tight">Eng. Elétrica (IFMA)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
