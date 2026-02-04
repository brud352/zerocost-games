
import React from 'react';

interface HeroProps {
  activeTab: 'games' | 'apps';
}

const Hero: React.FC<HeroProps> = ({ activeTab }) => {
  return (
    <div className="relative py-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-slate-950 to-slate-950 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 bg-indigo-500/10 border border-indigo-500/20 rounded-full">
          <span className="text-indigo-400 text-sm font-semibold tracking-wide uppercase">⚡ {activeTab === 'games' ? 'Jogos Premium' : 'Apps Essenciais'}</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
          {activeTab === 'games' ? 'Jogue Sem Limites.' : 'Ferramentas Poderosas.'} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 italic">Preço: Grátis.</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-slate-400 mb-10 leading-relaxed">
          {activeTab === 'games' 
            ? 'Descubra os melhores títulos indie e grandes sucessos em nossa biblioteca 100% gratuita. Sem pegadinhas, sem assinaturas. Apenas diversão pura.'
            : 'Aumente sua produtividade e criatividade com nossa seleção curada de aplicativos gratuitos para PC e Mobile.'
          }
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all shadow-xl shadow-indigo-600/20">
            Explorar {activeTab === 'games' ? 'Jogos' : 'Apps'}
          </button>
          <button className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 font-bold rounded-xl transition-all">
            Ver Ofertas
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
