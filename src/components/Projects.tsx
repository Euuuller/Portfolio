import { useState, useEffect } from 'react';
import SectionHeader from './SectionHeader';
import { PROJECTS } from '../data';

const getTagColor = (tag: string) => {
  const colors: Record<string, string> = {
    'Python': 'bg-blue-50 dark:bg-blue-500/10 text-blue-500 dark:text-blue-400 border-blue-200 dark:border-blue-500/20',
    'Pandas': 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20',
    'Power BI': 'bg-amber-50 dark:bg-amber-500/10 text-amber-500 dark:text-amber-400 border-amber-200 dark:border-amber-500/20',
    'Scikit-Learn': 'bg-orange-50 dark:bg-orange-500/10 text-orange-500 dark:text-orange-400 border-orange-200 dark:border-orange-500/20',
    'SQL': 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 border-indigo-200 dark:border-indigo-500/20',
    'Excel': 'bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400 border-green-200 dark:border-green-500/20',
    'Machine Learning': 'bg-purple-50 dark:bg-purple-500/10 text-purple-500 dark:text-purple-400 border-purple-200 dark:border-purple-500/20',
    'Estatística': 'bg-rose-50 dark:bg-rose-500/10 text-rose-500 dark:text-rose-400 border-rose-200 dark:border-rose-500/20',
    'DAX': 'bg-yellow-50 dark:bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-200 dark:border-yellow-500/20',
    'ETL': 'bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-200 dark:border-cyan-500/20',
  };
  return colors[tag] || 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700';
};

const getMetricIconColor = (index: number) => {
  const colors = ['text-blue-500 dark:text-blue-400', 'text-emerald-500 dark:text-emerald-400', 'text-purple-500 dark:text-purple-400'];
  return colors[index % colors.length];
};

const getMetricIcon = (metric: string) => {
  const m = metric.toLowerCase();
  if (m.includes('registro')) return 'fa-solid fa-database';
  if (m.includes('segmento') || m.includes('perfi')) return 'fa-solid fa-users-viewfinder';
  if (m.includes('roi')) return 'fa-solid fa-arrow-trend-up';
  if (m.includes('python')) return 'fa-brands fa-python';
  if (m.includes('kpi')) return 'fa-solid fa-chart-line';
  if (m.includes('página')) return 'fa-solid fa-file-lines';
  if (m.includes('dax')) return 'fa-solid fa-calculator';
  if (m.includes('precisão') || m.includes('f1-score')) return 'fa-solid fa-bullseye';
  if (m.includes('falso')) return 'fa-solid fa-shield-halved';
  
  return 'fa-solid fa-chart-simple';
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section id="projetos" className="min-h-[100dvh] flex flex-col pt-[120px] pb-[80px] relative">
      <div className="max-w-7xl mx-auto px-6 w-full flex-1 flex flex-col">
        <SectionHeader 
          title="Projetos em Destaque" 
          subtitle="Casos reais de análise de dados, dashboards interativos e modelos preditivos." 
        />
        
        {/* Mobile Swipe Indicator */}
        <div className="flex md:hidden items-center justify-center gap-2 text-slate-400 dark:text-slate-500 text-[11px] uppercase tracking-widest font-semibold mb-6 -mt-8">
          <i className="fa-solid fa-arrow-left-long opacity-50"></i>
          <span>Deslize para ver mais</span>
          <i className="fa-solid fa-arrow-right-long opacity-50"></i>
        </div>
        
        <div className="flex overflow-x-auto pb-8 -mx-6 px-6 snap-x snap-mandatory hide-scrollbar md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0 md:mx-0 md:px-0 md:snap-none items-stretch">
          {PROJECTS.map(project => (
            <div 
              key={project.id} 
              className="min-w-[85vw] sm:min-w-[320px] snap-center mr-4 md:mr-0 md:min-w-0 bg-white dark:bg-[#0a0a0a] border border-slate-100 dark:border-slate-800 rounded-[16px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col cursor-pointer group"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-[200px] overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-navy/60 dark:bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <span className="bg-white/10 hover:bg-white/20 border border-white/30 text-white text-sm font-semibold py-2 px-4 rounded-lg backdrop-blur-md transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    Ver Detalhes do Projeto
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${project.badgeColor}`}>
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-[28px] flex flex-col flex-1 items-center text-center">
                <h3 className="text-base font-bold text-navy dark:text-white mb-2">{project.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-3 leading-relaxed">{project.shortDesc}</p>
                
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className={`text-[11px] font-bold px-2.5 py-1 rounded-md border ${getTagColor(tag)}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-center items-center w-full">
                  <div className="flex justify-center gap-3">
                    {project.metrics.map((m, i) => (
                      <span key={i} className="text-xs font-mono font-medium text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                        <i className={`${getMetricIcon(m)} ${getMetricIconColor(i)}`}></i> {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      <div 
        className={`fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 ${selectedProject ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setSelectedProject(null)}
        aria-hidden={!selectedProject}
      >
        {/* Modal Content */}
        {selectedProject && (
          <div 
            className="bg-white dark:bg-[#0a0a0a] w-[90%] max-w-[900px] max-h-[90vh] overflow-y-auto rounded-[20px] p-6 md:p-8 transform transition-transform duration-300 scale-100 relative"
            onClick={e => e.stopPropagation()}
            role="dialog"
          >
            {/* Close Button */}
            <button onClick={() => setSelectedProject(null)} className="absolute top-6 right-6 text-slate-400 hover:text-navy dark:hover:text-white transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 z-10">
              <i className="fa-solid fa-xmark text-xl"></i>
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 lg:gap-12">
              {/* Left Column */}
              <div className="flex flex-col">
                <div className="mb-6">
                  <span className={`inline-block text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 ${selectedProject.badgeColor}`}>
                    {selectedProject.category}
                  </span>
                  <h2 className="text-[28px] font-extrabold text-navy dark:text-white mb-4 leading-tight">{selectedProject.title}</h2>
                  <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">{selectedProject.shortDesc}</p>
                </div>

                <div className="flex flex-col gap-4">
                  {/* Desafio */}
                  <div className="bg-slate-50 dark:bg-[#111111] p-5 rounded-xl border-l-4 border-l-red-500 border-y border-r border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-2 mb-2">
                      <i className="fa-solid fa-bullseye text-red-500"></i>
                      <h4 className="font-bold text-navy dark:text-white text-sm">Desafio</h4>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{selectedProject.modal.desafio}</p>
                  </div>
                  
                  {/* Solução */}
                  <div className="bg-slate-50 dark:bg-[#111111] p-5 rounded-xl border-l-4 border-l-blue-500 border-y border-r border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-2 mb-2">
                      <i className="fa-solid fa-lightbulb text-blue-500"></i>
                      <h4 className="font-bold text-navy dark:text-white text-sm">Solução</h4>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{selectedProject.modal.solucao}</p>
                  </div>
                  
                  {/* Impacto */}
                  <div className="bg-slate-50 dark:bg-[#111111] p-5 rounded-xl border-l-4 border-l-emerald-500 border-y border-r border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-2 mb-2">
                      <i className="fa-solid fa-arrow-trend-up text-emerald-500"></i>
                      <h4 className="font-bold text-navy dark:text-white text-sm">Impacto</h4>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{selectedProject.modal.impacto}</p>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-8 lg:pt-14">
                {/* Buttons */}
                <div className="flex flex-col gap-3">
                  <a href={selectedProject.modal.urlDemo} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors">
                    <i className="fa-solid fa-arrow-up-right-from-square"></i> Ver Demo
                  </a>
                  <a href={selectedProject.modal.urlCodigo} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 bg-slate-800 dark:bg-slate-700 hover:bg-navy dark:hover:bg-slate-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors">
                    <i className="fa-brands fa-github"></i> Código
                  </a>
                </div>

                {/* Stack */}
                <div>
                  <h4 className="font-bold text-navy dark:text-white mb-3 uppercase text-[11px] tracking-wider text-slate-500 dark:text-slate-400">Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.modal.stack.map((s: string, i: number) => (
                      <span key={i} className={`text-[11px] font-bold px-2.5 py-1 rounded-md border ${getTagColor(s)}`}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Métricas */}
                <div>
                  <h4 className="font-bold text-navy dark:text-white mb-3 uppercase text-[11px] tracking-wider text-slate-500 dark:text-slate-400">Métricas</h4>
                  <ul className="space-y-3">
                    {selectedProject.modal.metricas.map((m: string, i: number) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                        <i className={`${getMetricIcon(m)} ${getMetricIconColor(i)}`}></i>
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-xs text-slate-500 dark:text-slate-400">
              <span>Projeto desenvolvido por <strong className="text-navy dark:text-white">Euller Duarte</strong></span>
              <span className="flex items-center gap-1">2026 <i className="fa-regular fa-calendar"></i></span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
