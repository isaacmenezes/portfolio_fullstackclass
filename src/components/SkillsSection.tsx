import React, { useState } from 'react';
import { 
  Database, 
  Code, 
  Wrench, 
  Cloud, 
  Check, 
  Info,
  ChevronRight
} from 'lucide-react';
import { CURRICULUM_DATA } from '../data/curriculumData';

export const SkillsSection: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<{
    name: string;
    level: string;
    context: string;
    category: string;
  } | null>({
    name: 'Python',
    level: 'Avançado',
    context: 'Pipelines ETL, automação, web scraping e análise estatística no projeto de pesquisa do IFSP.',
    category: 'Dados e Análise'
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Dados e Análise':
        return <Database className="w-5 h-5 text-indigo-600" />;
      case 'Programação e Web':
        return <Code className="w-5 h-5 text-pink-600" />;
      case 'Ferramentas e BI':
        return <Wrench className="w-5 h-5 text-blue-600" />;
      case 'Integrações e Cloud':
        return <Cloud className="w-5 h-5 text-emerald-600" />;
      default:
        return <Database className="w-5 h-5 text-indigo-600" />;
    }
  };

  return (
    <section id="habilidades" className="w-full py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold tracking-wider uppercase backdrop-blur-xs border border-white/20 mb-3">
            <span>Competências</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Habilidades Técnicas & Ferramentas
          </h2>
          <p className="text-indigo-100 text-sm sm:text-base mt-2 max-w-xl">
            Clique em qualquer habilidade abaixo para inspecionar a aplicação prática e os projetos correspondentes.
          </p>
        </div>

        {/* Selected Skill Inspector Banner */}
        {selectedSkill && (
          <div className="mb-8 p-5 bg-white rounded-2xl shadow-lg border-2 border-indigo-200 animate-in fade-in slide-in-from-bottom-2 duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start sm:items-center gap-3.5">
              <div className="p-2.5 rounded-xl bg-indigo-50 border border-indigo-100">
                {getCategoryIcon(selectedSkill.category)}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-lg font-bold text-slate-900">{selectedSkill.name}</h4>
                  <span className="text-xs px-2 py-0.5 rounded-md font-semibold bg-indigo-100 text-indigo-800">
                    Nível: {selectedSkill.level}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                  <strong className="text-indigo-950">Aplicação no portfólio:</strong> {selectedSkill.context}
                </p>
              </div>
            </div>

            <div className="text-xs text-slate-400 font-mono shrink-0 sm:text-right">
              Categoria: {selectedSkill.category}
            </div>
          </div>
        )}

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CURRICULUM_DATA.skillsByCategory.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-xl border border-indigo-100 flex flex-col justify-between"
            >
              <div>
                {/* Category Title */}
                <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-slate-100">
                  {getCategoryIcon(cat.category)}
                  <h3 className="text-lg font-bold text-slate-900">{cat.category}</h3>
                </div>

                {/* Skills Interactive List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {cat.skills.map((skill, sIdx) => {
                    const isSelected = selectedSkill?.name === skill.name;
                    return (
                      <button
                        key={sIdx}
                        onClick={() => setSelectedSkill({ ...skill, category: cat.category })}
                        className={`text-left p-3 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? 'bg-indigo-50/90 border-indigo-500 shadow-xs'
                            : 'bg-slate-50/70 hover:bg-slate-50 border-slate-200/80 hover:border-indigo-300'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs sm:text-sm font-bold text-slate-800">
                            {skill.name}
                          </span>
                          <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'text-indigo-600 translate-x-0.5' : 'text-slate-400'}`} />
                        </div>
                        <span className="text-[11px] text-slate-500 mt-1 font-medium">
                          {skill.level}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
