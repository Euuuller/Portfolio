import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Home, User, Code2, Briefcase, Mail } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Início',      href: '#inicio',      icon: Home },
  { name: 'Sobre',       href: '#sobre',        icon: User },
  { name: 'Habilidades', href: '#habilidades',  icon: Code2 },
  { name: 'Projetos',    href: '#projetos',     icon: Briefcase },
  { name: 'Contato',     href: '#contato',      icon: Mail },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
    const dark = saved === 'dark' || (!saved && prefersDark);
    setIsDarkMode(dark);
    document.documentElement.classList.toggle('dark', dark);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle('dark', next);
      localStorage.setItem('theme', next ? 'dark' : 'light');
      return next;
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );
    document.querySelectorAll('section[id]').forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-1000 w-[calc(100%-2rem)] max-w-3xl">

      {/* ── Pill principal ── */}
      <nav className="bg-white dark:bg-[#111] md:bg-white/90 md:dark:bg-[#111]/90 md:backdrop-blur-xl border border-slate-200/70 dark:border-slate-700/40 rounded-2xl shadow-lg shadow-slate-300/30 dark:shadow-black/50 px-4 py-2.5 flex items-center justify-between">

        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2.5 shrink-0 group">
          <span className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-[11px] font-extrabold tracking-tight select-none group-hover:bg-blue-700 transition-colors duration-200">
            &lt;/&gt;
          </span>
          <span className="font-bold text-slate-900 dark:text-white text-sm tracking-tight">
            Euller<span className="text-blue-600 dark:text-blue-400">.dev</span>
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-0.5">
          {NAV_LINKS.map(({ name, href, icon: Icon }) => {
            const isActive = activeSection === href.substring(1);
            return (
              <a
                key={name}
                href={href}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-white/5'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-blue-500 dark:text-blue-400' : ''}`} />
                {name}
              </a>
            );
          })}
        </div>

        {/* Ações */}
        <div className="flex items-center gap-1.5">

          {/* Tema */}
          <button
            onClick={toggleTheme}
            title={isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
            className="relative w-8 h-8 rounded-xl flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white transition-all duration-200"
          >
            <Sun className={`absolute w-4 h-4 transition-all duration-300 ${isDarkMode ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 rotate-90'}`} />
            <Moon className={`absolute w-4 h-4 transition-all duration-300 ${!isDarkMode ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 -rotate-90'}`} />
          </button>

          {/* GitHub — desktop */}
          <a
            href="https://github.com/Euuuller"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center justify-center w-8 h-8 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-700 dark:hover:bg-slate-200 transition-colors duration-200"
          >
            <i className="fa-brands fa-github text-sm"></i>
          </a>

          {/* Hamburger — mobile */}
          <button
            className="md:hidden w-8 h-8 rounded-xl flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen
              ? <X className="w-4 h-4" />
              : <Menu className="w-4 h-4" />
            }
          </button>
        </div>
      </nav>

      {/* ── Dropdown mobile — opacity+transform, sem max-h (zero layout recalc) ── */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 mt-2 bg-white dark:bg-[#111] border border-slate-200/70 dark:border-slate-700/40 rounded-2xl shadow-lg shadow-slate-300/30 dark:shadow-black/50 transition-[opacity,transform] duration-200 ease-out ${
          mobileMenuOpen
            ? 'opacity-100 translate-y-0 visible'
            : 'opacity-0 -translate-y-2 invisible pointer-events-none'
        }`}
      >
        <div className="flex flex-col p-3 gap-1">
          {NAV_LINKS.map(({ name, href, icon: Icon }) => {
            const isActive = activeSection === href.substring(1);
            return (
              <a
                key={name}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-150 ${
                  isActive
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-blue-500 dark:text-blue-400' : 'text-slate-400 dark:text-slate-500'}`} />
                {name}
              </a>
            );
          })}

          <div className="pt-2 mt-1 border-t border-slate-100 dark:border-slate-800">
            <a
              href="https://github.com/Euuuller"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-semibold hover:bg-slate-700 dark:hover:bg-slate-200 transition-colors duration-200"
            >
              <i className="fa-brands fa-github text-sm"></i> GitHub
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
