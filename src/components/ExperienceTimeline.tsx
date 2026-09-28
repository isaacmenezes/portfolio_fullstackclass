import React from 'react';
import { Briefcase, FlaskConical, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { CURRICULUM_DATA } from '../data/curriculumData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experiencia" className="w-full py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold tracking-wider uppercase backdrop-blur-xs border border-white/20 mb-3">
            <span>Carreira & Prática</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experiência Profissional
          </h2>
          <p className="text-indigo-100 text-sm sm:text-base mt-2 max-w-xl">
            Vivência corporativa em análise de métricas digitais e pesquisa acadêmica com engenharia de dados.
          </p>
        </div>

        {/* Timeline List */}
        <div className="space-y-6 sm:space-y-8">
          {CURRICULUM_DATA.experiences.map((exp, index) => {
            const isConcentrix = exp.company.toLowerCase().includes('concentrix');
            
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-indigo-100 relative overflow-hidden group hover:border-indigo-300 transition-all duration-300"
              >
                {/* Visual Accent Bar */}
                <div
                  className={`absolute top-0 left-0 bottom-0 w-2.5 ${
                    isConcentrix ? 'bg-[#253AD2]' : 'bg-pink-500'
                  }`}
                />

                <div className="pl-2 sm:pl-3">
                  {/* Top Bar with Role & Dates */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        {isConcentrix ? (
                          <Briefcase className="w-5 h-5 text-[#253AD2]" />
                        ) : (
                          <FlaskConical className="w-5 h-5 text-pink-600" />
                        )}
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                          {exp.role}
                        </h3>
                      </div>
                      <span className="text-sm font-semibold text-indigo-700 block mt-0.5">
                        {exp.company}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 font-medium">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 rounded-md text-slate-700">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 rounded-md text-slate-700">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Bullet Responsibilities */}
                  <div className="mt-5 space-y-2.5">
                    {exp.responsibilities.map((resp, i) => (
                      <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{resp}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags (Rendered cleanly as metadata) */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-semibold text-slate-400">Competências mobilizadas:</span>
                    {exp.tags.map((tag, tIndex) => (
                      <span
                        key={tIndex}
                        className="text-xs px-2.5 py-1 rounded-md bg-indigo-50/80 text-indigo-900 font-medium border border-indigo-100/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
