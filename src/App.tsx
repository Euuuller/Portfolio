import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="dot-grid font-sans text-navy dark:text-slate-100 bg-bg-main dark:bg-[#050505] min-h-screen selection:bg-blue-500 selection:text-white transition-colors duration-300">

      {/* ── Ambient glow — único layer fixo, flui por toda a página ── */}
      <div aria-hidden="true" className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-80 h-80 md:w-[700px] md:h-[700px] bg-blue-500/5 dark:bg-blue-500/9 rounded-full blur-2xl md:blur-3xl" />
        <div className="absolute top-1/2 -right-40 -translate-y-1/2 w-72 h-72 md:w-[600px] md:h-[600px] bg-purple-500/4 dark:bg-purple-500/7 rounded-full blur-2xl md:blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 w-64 h-64 md:w-[500px] md:h-[500px] bg-indigo-500/4 dark:bg-indigo-500/6 rounded-full blur-2xl md:blur-3xl" />
      </div>

      {/* Conteúdo acima do glow */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
