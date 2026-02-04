
import React from 'react';

interface EmptyStateProps {
  isSearching: boolean;
  tab: 'games' | 'apps';
}

const EmptyState: React.FC<EmptyStateProps> = ({ isSearching, tab }) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
      <div className="w-24 h-24 bg-slate-900 rounded-full flex items-center justify-center mb-6 border border-slate-800">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
        </svg>
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">
        {isSearching 
          ? `Nenhum ${tab === 'games' ? 'jogo' : 'app'} encontrado` 
          : `Nossa seção de ${tab === 'games' ? 'jogos' : 'apps'} está se preparando`}
      </h3>
      <p className="max-w-md text-slate-400 mb-8 leading-relaxed">
        {isSearching 
          ? "Tente ajustar os termos da sua busca para encontrar o que procura."
          : `Atualmente não há ${tab === 'games' ? 'jogos disponíveis' : 'aplicativos cadastrados'}. O proprietário da loja adicionará novos títulos em breve conforme solicitado!`}
      </p>
      {!isSearching && (
        <div className="p-4 bg-slate-900/50 border border-indigo-500/20 rounded-lg max-w-sm">
          <p className="text-indigo-300 text-sm font-medium italic">
            "Diga-me quais {tab === 'games' ? 'jogos' : 'aplicativos'} adicionar e eles aparecerão aqui instantaneamente!"
          </p>
        </div>
      )}
    </div>
  );
};

export default EmptyState;
