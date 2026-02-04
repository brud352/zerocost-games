
import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import EmptyState from './components/EmptyState';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';
import { Game, CartItem } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'games' | 'apps'>('games');
  
  // Lista de jogos
  const [games, setGames] = useState<Game[]>([
    {
      id: 'hollow-knight-silksong',
      title: 'Hollow Knight: Silksong',
      description: 'Explore um reino vasto e assombrado! Como Hornet, princesa protetora de Hallownest, aventure-se por um reino totalmente novo dominado por seda e música.',
      imageUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1030300/capsule_616x353.jpg?t=1733221980',
      category: 'Metroidvania',
      releaseDate: 'TBA',
      rating: 5.0,
      platforms: ['PC', 'Switch', 'PS5', 'Xbox'],
      downloadUrl: 'https://gofile.io/d/vu9S1a'
    },
    {
      id: 'ultrakill',
      title: 'ULTRAKILL',
      description: 'Um FPS retro ultraviolento em ritmo acelerado. Domine o movimento, use o sangue de seus inimigos para se curar e lute através das camadas do inferno.',
      imageUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1229490/capsule_616x353.jpg?t=1729013233',
      category: 'FPS / Ação',
      releaseDate: '2020',
      rating: 5.0,
      platforms: ['PC'],
      downloadUrl: 'https://gofile.io/d/1SREUC'
    }
  ]);

  // Lista de apps (vazia por enquanto)
  const [apps, setApps] = useState<Game[]>([]);
  
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const currentItems = activeTab === 'games' ? games : apps;

  const filteredItems = useMemo(() => {
    return currentItems.filter(item => 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [currentItems, searchTerm]);

  const addToCart = (item: Game) => {
    if (!cart.find(c => c.id === item.id)) {
      setCart(prev => [...prev, { ...item, addedAt: Date.now() }]);
      setIsCartOpen(true);
    }
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const handleDownload = (url?: string) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-200">
      <Header 
        cartCount={cart.length} 
        onOpenCart={() => setIsCartOpen(true)} 
        onSearch={setSearchTerm}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      
      <main className="flex-grow">
        <Hero activeTab={activeTab} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {filteredItems.length === 0 ? (
            <EmptyState isSearching={searchTerm.length > 0} tab={activeTab} />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredItems.map(item => (
                <div key={item.id} className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300 group flex flex-col shadow-2xl">
                  <div 
                    className="relative h-56 overflow-hidden cursor-pointer bg-slate-800"
                    onClick={() => handleDownload(item.downloadUrl)}
                  >
                    <img 
                      src={item.imageUrl} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 bg-green-500 text-[10px] font-black px-2 py-1 rounded shadow-lg uppercase tracking-wider text-white">
                      Grátis
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="bg-indigo-600 text-white px-6 py-2 rounded-full font-black text-xs transform translate-y-4 group-hover:translate-y-0 transition-transform shadow-xl uppercase tracking-widest">
                        Baixar Agora
                      </div>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-[0.2em]">{item.category}</span>
                      <div className="flex items-center text-yellow-500 text-xs bg-slate-950/50 px-2 py-0.5 rounded-md">
                        <span className="mr-1">★</span>
                        <span className="font-bold">{item.rating}</span>
                      </div>
                    </div>
                    <h3 
                      className="text-lg font-black text-white mb-2 cursor-pointer hover:text-indigo-400 transition-colors leading-tight"
                      onClick={() => handleDownload(item.downloadUrl)}
                    >
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-xs line-clamp-2 mb-6 flex-grow leading-relaxed">{item.description}</p>
                    
                    <div className="flex flex-col gap-3">
                      <button 
                        onClick={() => handleDownload(item.downloadUrl)}
                        className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-black rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20 active:scale-95 text-xs tracking-wider"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        DOWNLOAD GRÁTIS
                      </button>
                      <button 
                        onClick={() => addToCart(item)}
                        className="w-full py-2.5 text-slate-400 hover:text-white text-[10px] font-bold transition-all border border-slate-800 hover:border-slate-600 rounded-xl hover:bg-slate-800/50 uppercase tracking-widest"
                      >
                        Salvar na Coleção
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart}
        onRemove={removeFromCart}
      />
      
      <Footer />
    </div>
  );
};

export default App;
