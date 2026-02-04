
import React from 'react';

const Footer: React.FC = () => {
  // Versão atual para controle do usuário
  const APP_VERSION = "1.0.2";
  const LAST_UPDATE = "Hoje";

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 px-4 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <span className="text-lg font-black text-white tracking-tighter">ZERO<span className="text-indigo-500">COST</span></span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
            <span className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">Versão {APP_VERSION} • Live</span>
          </div>
        </div>
        
        <div className="flex gap-8 text-sm text-slate-500 font-medium">
          <a href="#" className="hover:text-white transition-colors">Termos</a>
          <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Suporte</a>
          <a href="#" className="hover:text-white transition-colors">Discord</a>
        </div>
        
        <div className="text-center md:text-right">
          <p className="text-sm text-slate-600">
            &copy; {new Date().getFullYear()} ZeroCost Store.
          </p>
          <p className="text-[10px] text-slate-700 mt-1 uppercase tracking-tighter">
            Desenvolvido com IA • Sincronizado com Vercel
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
