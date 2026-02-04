
import React from 'react';
import { CartItem } from '../types';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string) => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose, items, onRemove }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="absolute inset-y-0 right-0 max-w-md w-full bg-slate-950 shadow-2xl flex flex-col border-l border-slate-800 animate-slide-in">
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            Minha Biblioteca
            <span className="bg-slate-900 text-slate-400 text-xs px-2 py-0.5 rounded-full border border-slate-800">{items.length}</span>
          </h2>
          <button onClick={onClose} className="text-slate-500 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-slate-500 space-y-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <p>Sua biblioteca está vazia.</p>
              <button 
                onClick={onClose}
                className="text-indigo-500 font-medium hover:underline"
              >
                Voltar às compras
              </button>
            </div>
          ) : (
            items.map(item => (
              <div key={item.id} className="flex gap-4 p-3 bg-slate-900 rounded-xl border border-slate-800">
                <img src={item.imageUrl} alt={item.title} className="w-20 h-20 object-cover rounded-lg" />
                <div className="flex-grow min-w-0">
                  <h4 className="text-white font-semibold truncate">{item.title}</h4>
                  <p className="text-indigo-400 text-xs font-bold uppercase mb-2">Grátis</p>
                  <button 
                    onClick={() => onRemove(item.id)}
                    className="text-xs text-red-400 hover:text-red-300 font-medium transition-colors"
                  >
                    Remover
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-slate-800 bg-slate-900/50">
            <div className="flex justify-between items-center mb-6">
              <span className="text-slate-400">Subtotal</span>
              <span className="text-xl font-bold text-white">R$ 0,00</span>
            </div>
            <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-600/30">
              Confirmar Jogos Gratuitos
            </button>
          </div>
        )}
      </div>
      
      <style>{`
        @keyframes slide-in {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default CartSidebar;
