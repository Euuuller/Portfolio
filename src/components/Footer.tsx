export default function Footer() {
  return (
    <footer className="py-10 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center gap-3 text-[15px] text-slate-600 dark:text-slate-400">
        <p className="text-center">&copy; 2026 Euller dos Santos Rodrigues Duarte. Todos os direitos reservados.</p>
        <p className="flex items-center gap-1.5">
          Feito com muito amor 
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 animate-pulse">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
          </svg>
          e café 
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500 -mt-1">
            <path d="M17 8h1a4 4 0 1 1 0 8h-1"/>
            <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/>
            <line x1="6" x2="6" y1="2" y2="4" className="animate-bounce" style={{ animationDelay: '0ms' }}/>
            <line x1="10" x2="10" y1="2" y2="4" className="animate-bounce" style={{ animationDelay: '150ms' }}/>
            <line x1="14" x2="14" y1="2" y2="4" className="animate-bounce" style={{ animationDelay: '300ms' }}/>
          </svg>
        </p>
      </div>
    </footer>
  );
}
