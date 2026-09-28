import React from 'react';
import { FileText, Send, Github, Linkedin, ExternalLink } from 'lucide-react';

interface HeaderNavProps {
  onOpenCvModal: () => void;
  onNavigateSection: (id: string) => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ onOpenCvModal, onNavigateSection }) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#2034D8]/95 backdrop-blur-md border-b border-indigo-500/20 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => onNavigateSection('hero')}
          className="text-left font-righteous text-xl tracking-wide text-white hover:text-pink-300 transition-colors cursor-pointer shrink-0"
        >
          Isaac Menezes
        </button>

        {/* Zone 2: Clean navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-indigo-100">
          <button
            onClick={() => onNavigateSection('sobre')}
            className="hover:text-white hover:underline underline-offset-4 transition-colors cursor-pointer"
          >
            Sobre
          </button>
          <button
            onClick={() => onNavigateSection('projetos')}
            className="hover:text-white hover:underline underline-offset-4 transition-colors cursor-pointer"
          >
            Projetos
          </button>
          <button
            onClick={() => onNavigateSection('experiencia')}
            className="hover:text-white hover:underline underline-offset-4 transition-colors cursor-pointer"
          >
            Experiência
          </button>
          <button
            onClick={() => onNavigateSection('habilidades')}
            className="hover:text-white hover:underline underline-offset-4 transition-colors cursor-pointer"
          >
            Habilidades
          </button>
          <button
            onClick={() => onNavigateSection('metricas')}
            className="hover:text-white hover:underline underline-offset-4 transition-colors cursor-pointer"
          >
            Métricas & BI
          </button>
          <button
            onClick={() => onNavigateSection('formacao')}
            className="hover:text-white hover:underline underline-offset-4 transition-colors cursor-pointer"
          >
            Formação
          </button>
        </nav>

        {/* Zone 3: Primary actions */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={onOpenCvModal}
            className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-indigo-950 bg-white hover:bg-indigo-50 rounded-lg shadow-sm transition-all duration-150 active:scale-95 cursor-pointer whitespace-nowrap"
            title="Visualizar e Imprimir Currículo"
          >
            <FileText className="w-3.5 h-3.5 text-indigo-600" />
            <span>Ver CV Completo</span>
          </button>

          <button
            onClick={() => onNavigateSection('contato')}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-pink-600 hover:bg-pink-500 rounded-lg shadow-sm transition-all duration-150 active:scale-95 cursor-pointer whitespace-nowrap"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Falar Comigo</span>
          </button>
        </div>
      </div>
    </header>
  );
};
