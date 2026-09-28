import React, { useState } from 'react';
import { 
  Move, 
  MousePointer, 
  Sparkles, 
  Layers, 
  ArrowRight, 
  FileText, 
  BarChart3, 
  Database,
  Cloud,
  Code2
} from 'lucide-react';
import { CURRICULUM_DATA } from '../data/curriculumData';

interface HeroArtboardProps {
  onOpenCvModal: () => void;
  onNavigateSection: (id: string) => void;
}

export const HeroArtboard: React.FC<HeroArtboardProps> = ({ onOpenCvModal, onNavigateSection }) => {
  const [activeTab, setActiveTab] = useState<'portfolio' | 'data' | 'cv'>('portfolio');
  const [showDesignGuides, setShowDesignGuides] = useState<boolean>(true);
  const [titleHovered, setTitleHovered] = useState<boolean>(false);

  return (
    <section id="hero" className="w-full pt-4 pb-12 sm:pb-16 px-3 sm:px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* The Outer Artboard / Window Frame - Mirroring the reference image */}
        <div className="relative rounded-2xl bg-white shadow-2xl border-4 border-[#253AD2] overflow-hidden transition-all duration-300">
          
          {/* Top Window Tab Bar (Faithful to the reference image tabs) */}
          <div className="bg-[#2D45EB] px-3 sm:px-5 pt-3 pb-0 flex items-center justify-between gap-2 overflow-x-auto border-b border-indigo-400/30">
            <div className="flex items-end gap-1.5 sm:gap-2">
              {/* Tab 1: Portfolio (Default Active) */}
              <button
                onClick={() => setActiveTab('portfolio')}
                className={`flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-t-xl transition-all cursor-pointer ${
                  activeTab === 'portfolio'
                    ? 'bg-[#F2F5FF] text-indigo-950 font-bold shadow-md -mb-[1px]'
                    : 'bg-indigo-700/60 hover:bg-indigo-700 text-indigo-100'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shrink-0"></span>
                <span className="truncate">isaac_portfolio.dev</span>
              </button>

              {/* Tab 2: Data & Analytics */}
              <button
                onClick={() => setActiveTab('data')}
                className={`flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-t-xl transition-all cursor-pointer ${
                  activeTab === 'data'
                    ? 'bg-[#F2F5FF] text-indigo-950 font-bold shadow-md -mb-[1px]'
                    : 'bg-pink-500/80 hover:bg-pink-500 text-white'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-pink-300 shrink-0"></span>
                <span className="truncate">data_analyst_2026.py</span>
              </button>

              {/* Tab 3: Curriculum CV */}
              <button
                onClick={() => {
                  setActiveTab('cv');
                  onOpenCvModal();
                }}
                className={`flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-t-xl transition-all cursor-pointer ${
                  activeTab === 'cv'
                    ? 'bg-[#F2F5FF] text-indigo-950 font-bold shadow-md -mb-[1px]'
                    : 'bg-indigo-900/60 hover:bg-indigo-900 text-indigo-200'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0"></span>
                <span className="truncate">curriculo_isaac.pdf</span>
              </button>
            </div>

            {/* Design Guides / Artboard Indicator */}
            <div className="hidden sm:flex items-center gap-2 pb-2 text-[11px] text-indigo-200">
              <button
                onClick={() => setShowDesignGuides(!showDesignGuides)}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-indigo-900/50 hover:bg-indigo-900 text-indigo-100 transition-colors cursor-pointer"
                title="Alternar visibilidade das guias do artboard vetorial"
              >
                <Layers className="w-3 h-3 text-pink-300" />
                <span>{showDesignGuides ? 'Guias: Ativas' : 'Guias: Ocultas'}</span>
              </button>
            </div>
          </div>

          {/* Canvas Artboard Surface */}
          <div className="relative bg-[#F2F5FF] bg-designer-grid min-h-[380px] sm:min-h-[440px] p-6 sm:p-10 flex flex-col items-center justify-center text-center select-none overflow-hidden">
            
            {/* Subtle background artboard coordinates */}
            {showDesignGuides && (
              <div className="absolute top-3 left-4 text-[10px] font-mono text-indigo-400/80 pointer-events-none">
                ARTBOARD: 1440 × 900 · RGB/8 · ZOOM: 100%
              </div>
            )}

            {/* Vector Transform Bounding Box Container - Directly mirroring the user's uploaded art */}
            <div 
              onMouseEnter={() => setTitleHovered(true)}
              onMouseLeave={() => setTitleHovered(false)}
              className={`relative max-w-3xl w-full mx-auto my-3 sm:my-5 p-4 sm:p-8 transition-all duration-200 ${
                showDesignGuides 
                  ? 'border border-indigo-500/80' 
                  : 'border border-transparent'
              }`}
            >
              {/* Transform Handles (Squares at corners & midpoints) */}
              {showDesignGuides && (
                <>
                  {/* Top-Left Handle */}
                  <span className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-white border-2 border-indigo-600 rounded-[1px] shadow-xs"></span>
                  {/* Top-Center Handle */}
                  <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-2 border-indigo-600 rounded-[1px] shadow-xs"></span>
                  {/* Top-Right Handle */}
                  <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-white border-2 border-indigo-600 rounded-[1px] shadow-xs"></span>
                  {/* Mid-Left Handle */}
                  <span className="absolute top-1/2 -translate-y-1/2 -left-1.5 w-3 h-3 bg-white border-2 border-indigo-600 rounded-[1px] shadow-xs"></span>
                  {/* Mid-Right Handle */}
                  <span className="absolute top-1/2 -translate-y-1/2 -right-1.5 w-3 h-3 bg-white border-2 border-indigo-600 rounded-[1px] shadow-xs"></span>
                  {/* Bottom-Left Handle */}
                  <span className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-white border-2 border-indigo-600 rounded-[1px] shadow-xs"></span>
                  {/* Bottom-Center Handle */}
                  <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-2 border-indigo-600 rounded-[1px] shadow-xs"></span>
                  {/* Bottom-Right Handle */}
                  <span className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-white border-2 border-indigo-600 rounded-[1px] shadow-xs"></span>

                  {/* Decorative Anchor Cloud & Star Glyphs from the Reference Image */}
                  <div className="absolute -top-5 right-10 text-indigo-500 hidden sm:block">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-indigo-400">
                      <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#C7D2FE" stroke="#4F46E5" strokeWidth="1.5" />
                    </svg>
                  </div>

                  <div className="absolute -bottom-4 left-12 hidden sm:block">
                    <svg width="22" height="16" viewBox="0 0 24 18" fill="none" className="text-indigo-400">
                      <path d="M6 16C3.79086 16 2 14.2091 2 12C2 10.0387 3.41108 8.40697 5.27552 8.06733C5.10825 7.42065 5.01855 6.74103 5.01855 6.04167C5.01855 2.70494 7.70516 0 11.0186 0C13.8055 0 16.1437 1.9056 16.8228 4.49633C17.4337 4.17834 18.1345 4 18.875 4C21.7055 4 24 6.29443 24 9.125C24 11.7584 22.0125 13.9284 19.4583 14.2123" stroke="#4F46E5" strokeWidth="1.5" fill="#E0E7FF"/>
                    </svg>
                  </div>

                  {/* Vector Cursor with Crosshair (Directly like the pink arrow in the reference image) */}
                  <div className="absolute -top-5 left-1/4 flex items-center gap-1 text-pink-600 animate-pulse pointer-events-none">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#EC4899" stroke="#9D174D" strokeWidth="1.5" className="-rotate-12">
                      <path d="M3 3L10 21L13.5 13.5L21 10L3 3Z" />
                    </svg>
                    <Move className="w-3.5 h-3.5 text-indigo-700" />
                  </div>
                </>
              )}

              {/* Massive Dimensional Retro "Portfolio" Title - Centerpiece of the reference image */}
              <div className="relative py-2 sm:py-4">
                <h1 className="font-righteous text-6xl sm:text-7xl md:text-8xl tracking-normal text-retro-extruded leading-none transition-transform duration-200">
                  Portfolio
                </h1>
              </div>

              {/* The Iconic Rounded Blue Badge Bar from the image */}
              <div className="mt-4 sm:mt-5 flex justify-center">
                <div className="inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-7 py-2 sm:py-2.5 bg-[#253AD2] text-white text-xs sm:text-sm font-extrabold tracking-wider rounded-full shadow-lg border-2 border-indigo-400/40">
                  <span>ISAAC MENEZES</span>
                  <span className="text-pink-300">/</span>
                  <span>2026</span>
                  <span className="text-pink-300">/</span>
                  <span>DIGITAL ANALYST & DEV</span>
                </div>
              </div>

            </div>

            {/* Sub-Headline & Value Proposition */}
            <div className="mt-4 max-w-2xl mx-auto">
              <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
                Estudante de Análise e Desenvolvimento de Sistemas no <strong className="text-indigo-900 font-bold">IFSP</strong> e Digital Analyst na <strong className="text-indigo-900 font-bold">Concentrix</strong>. 
                Especialista em organização e tratamento de dados com Python, SQL e automação orientada a negócios.
              </p>

              {/* Interactive Quick CTAs */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                <button
                  onClick={() => onNavigateSection('projetos')}
                  className="flex items-center gap-2 px-5 py-2.5 bg-[#253AD2] hover:bg-[#1E2EAF] text-white text-sm font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-150 active:scale-95 cursor-pointer"
                >
                  <Code2 className="w-4 h-4 text-pink-300" />
                  <span>Ver Projetos Full Stack & Dados</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigateSection('metricas')}
                  className="flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-slate-50 text-indigo-950 text-sm font-semibold rounded-xl border border-indigo-200 shadow-sm transition-all duration-150 active:scale-95 cursor-pointer"
                >
                  <BarChart3 className="w-4 h-4 text-indigo-600" />
                  <span>Simulador de Métricas (TMA/NPS)</span>
                </button>

                <button
                  onClick={onOpenCvModal}
                  className="flex items-center gap-2 px-4 py-2.5 bg-pink-100 hover:bg-pink-200 text-pink-900 text-sm font-semibold rounded-xl border border-pink-300 shadow-xs transition-all duration-150 active:scale-95 cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-pink-600" />
                  <span>Currículo Formatado</span>
                </button>
              </div>
            </div>

            {/* Quick Micro-Metadata Strip (Anti-Slop Clean Text Separation) */}
            <div className="mt-8 pt-4 border-t border-indigo-200/60 w-full max-w-xl mx-auto flex items-center justify-center gap-3 text-xs text-slate-500 font-medium">
              <span>São Paulo, SP</span>
              <span aria-hidden="true" className="text-indigo-400">·</span>
              <span>Inglês C1 Avançado (EF SET)</span>
              <span aria-hidden="true" className="text-indigo-400">·</span>
              <span>Aluno Destaque SENAI 2024</span>
              <span aria-hidden="true" className="text-indigo-400">·</span>
              <span>AWS GenAI</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
