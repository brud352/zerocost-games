
import React from 'react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onSearch: (term: string) => void;
  activeTab: 'games' | 'apps';
  setActiveTab: (tab: 'games' | 'apps') => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, onOpenCart, onSearch, activeTab, setActiveTab }) => {
  return (
    <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActiveTab('games')}>
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <span className="text-2xl font-black text-white tracking-tighter">ZERO<span className="text-indigo-500">COST</span></span>
          </div>

          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </span>
              <input 
                type="text" 
                placeholder={`Buscar ${activeTab === 'games' ? 'jogos' : 'apps'} gratuitos...`}
                className="w-full bg-slate-900 border border-slate-800 rounded-full py-2 pl-10 pr-4 text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                onChange={(e) => onSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <nav className="hidden lg:flex items-center gap-6 text-sm font-bold uppercase tracking-widest">
              <button 
                onClick={() => setActiveTab('games')}
                className={`transition-colors ${activeTab === 'games' ? 'text-indigo-500' : 'text-slate-400 hover:text-white'}`}
              >
                Jogos
              </button>
              <button 
                onClick={() => setActiveTab('apps')}
                className={`transition-colors ${activeTab === 'apps' ? 'text-indigo-500' : 'text-slate-400 hover:text-white'}`}
              >
                Apps
              </button>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Comunidade</a>
            </nav>
            
            <button 
              onClick={onOpenCart}
              className="relative p-2 text-slate-300 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-indigo-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-slate-950">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
