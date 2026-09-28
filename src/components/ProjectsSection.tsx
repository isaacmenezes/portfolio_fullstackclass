import React, { useState } from 'react';
import { 
  Github, 
  ExternalLink, 
  Smartphone, 
  Database, 
  Layers, 
  Server, 
  CheckCircle2, 
  X,
  Code2,
  Cpu
} from 'lucide-react';
import { CURRICULUM_DATA, Project } from '../data/curriculumData';

export const ProjectsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Full Stack' | 'Data Science'>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = CURRICULUM_DATA.projects.filter(project => {
    if (selectedFilter === 'All') return true;
    return project.category === selectedFilter;
  });

  return (
    <section id="projetos" className="w-full py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold tracking-wider uppercase backdrop-blur-xs border border-white/20 mb-3">
              <span>Portfólio Prático</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Projetos Relevantes
            </h2>
            <p className="text-indigo-100 text-sm sm:text-base mt-2 max-w-xl">
              Aplicações completas desenvolvidas no SENAI e projetos de Iniciação Científica no IFSP com código aberto.
            </p>
          </div>

          {/* Interactive Filter Controls (Allowed buttons for state filtering per frontend design rules) */}
          <div className="flex items-center p-1 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 self-start sm:self-auto">
            <button
              onClick={() => setSelectedFilter('All')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                selectedFilter === 'All'
                  ? 'bg-white text-indigo-950 shadow-sm'
                  : 'text-indigo-100 hover:text-white'
              }`}
            >
              Todos ({CURRICULUM_DATA.projects.length})
            </button>
            <button
              onClick={() => setSelectedFilter('Full Stack')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                selectedFilter === 'Full Stack'
                  ? 'bg-white text-indigo-950 shadow-sm'
                  : 'text-indigo-100 hover:text-white'
              }`}
            >
              Full Stack & Mobile
            </button>
            <button
              onClick={() => setSelectedFilter('Data Science')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                selectedFilter === 'Data Science'
                  ? 'bg-white text-indigo-950 shadow-sm'
                  : 'text-indigo-100 hover:text-white'
              }`}
            >
              Dados & Scraping
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-xl border border-indigo-100 flex flex-col group hover:-translate-y-1 transition-all duration-300"
            >
              {/* Project Image Banner */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-[#253AD2] text-white px-3 py-1 rounded-md text-xs font-bold shadow-md">
                  {project.institution}
                </div>
                <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-xs text-white px-2.5 py-1 rounded-md text-xs font-medium">
                  {project.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 mb-3">
                    {project.shortDesc}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 mb-5">
                    {project.highlights.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Metadata (Unboxed text with typographic separators) */}
                  <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-700 font-medium py-2.5 px-3 bg-slate-50 rounded-lg border border-slate-100">
                    <span className="text-slate-400 font-normal">Stack:</span>
                    {project.technologies.map((tech, index) => (
                      <React.Fragment key={tech}>
                        <span className="font-semibold text-indigo-900">{tech}</span>
                        {index < project.technologies.length - 1 && (
                          <span aria-hidden="true" className="text-slate-300">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="px-4 py-2 text-xs font-semibold text-indigo-900 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors cursor-pointer"
                  >
                    Ver Arquitetura Completa
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Repositório</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto border border-slate-200">
            
            {/* Modal Header */}
            <div className="sticky top-0 bg-[#253AD2] text-white p-5 flex items-center justify-between z-10">
              <div>
                <span className="text-xs font-bold text-pink-300 uppercase tracking-wider">
                  {activeModalProject.institution} · {activeModalProject.category}
                </span>
                <h3 className="text-lg sm:text-xl font-bold mt-0.5">
                  {activeModalProject.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalProject(null)}
                className="p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Visão Geral & Desafio
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {activeModalProject.fullDescription}
                </p>
              </div>

              {/* Highlights */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Principais Entregas & Implementações
                </h4>
                <div className="space-y-2">
                  {activeModalProject.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architecture Blueprint Card */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-indigo-600" />
                  <span>Especificações Técnicas de Arquitetura</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {activeModalProject.architectureDetails.frontend && (
                    <div className="p-2.5 bg-white rounded-lg border border-slate-200/80">
                      <span className="font-semibold text-slate-900 block mb-1">Frontend / Client:</span>
                      <span className="text-slate-600">{activeModalProject.architectureDetails.frontend}</span>
                    </div>
                  )}

                  {activeModalProject.architectureDetails.backend && (
                    <div className="p-2.5 bg-white rounded-lg border border-slate-200/80">
                      <span className="font-semibold text-slate-900 block mb-1">Backend & Lógica:</span>
                      <span className="text-slate-600">{activeModalProject.architectureDetails.backend}</span>
                    </div>
                  )}

                  {activeModalProject.architectureDetails.database && (
                    <div className="p-2.5 bg-white rounded-lg border border-slate-200/80 sm:col-span-2">
                      <span className="font-semibold text-slate-900 block mb-1">Dados & Modelagem:</span>
                      <span className="text-slate-600">{activeModalProject.architectureDetails.database}</span>
                    </div>
                  )}
                </div>

                <div className="pt-2">
                  <span className="text-xs font-semibold text-slate-700 block mb-1.5">Destaques Funcionais:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeModalProject.architectureDetails.keyFeatures.map((feat, idx) => (
                      <span key={idx} className="text-[11px] px-2.5 py-1 bg-indigo-50 text-indigo-800 rounded-md font-medium">
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-mono">
                  GitHub Oficial: /isaacmenezes
                </span>
                <a
                  href={activeModalProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#253AD2] hover:bg-[#1E2EAF] text-white text-xs font-semibold rounded-lg shadow-sm transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>Acessar Código no GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};
