import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  Copy, 
  Check, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  ExternalLink 
} from 'lucide-react';
import { CURRICULUM_DATA } from '../data/curriculumData';

interface CurriculumModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CurriculumModal: React.FC<CurriculumModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyAll = () => {
    const cvText = `
${CURRICULUM_DATA.personal.name}
${CURRICULUM_DATA.personal.email} | ${CURRICULUM_DATA.personal.phone} | ${CURRICULUM_DATA.personal.location}
LinkedIn: ${CURRICULUM_DATA.personal.linkedin} | GitHub: ${CURRICULUM_DATA.personal.github}

Sobre:
${CURRICULUM_DATA.personal.bio}

Habilidades Técnicas:
${CURRICULUM_DATA.skillsByCategory.map(cat => `● ${cat.category}: ${cat.skills.map(s => s.name).join(', ')}`).join('\n')}

Experiência:
${CURRICULUM_DATA.experiences.map(e => `${e.role} - ${e.company} (${e.period})\n${e.responsibilities.map(r => `  ● ${r}`).join('\n')}`).join('\n\n')}

Educação:
${CURRICULUM_DATA.education.map(ed => `● ${ed.degree} – ${ed.institution} | ${ed.period}`).join('\n')}

Idiomas:
● Inglês - Avançado (EF SET - C1)
● Português - Nativo

Projetos Relevantes:
${CURRICULUM_DATA.projects.map(p => `● ${p.title}\n  Tecnologias: ${p.technologies.join(', ')}\n  GitHub: ${p.githubUrl}\n${p.highlights.map(h => `  - ${h}`).join('\n')}`).join('\n\n')}

Cursos & Certificações:
${CURRICULUM_DATA.courses.map(c => `● ${c.title} | ${c.issuer}\n${c.topics.map(t => `  - ${t}`).join('\n')}`).join('\n\n')}

Honras:
● Reconhecido “Aluno Destaque” do SENAI – SENAI Almirante Tamandaré | 2024
    `.trim();

    navigator.clipboard.writeText(cvText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl max-h-[92vh] flex flex-col overflow-hidden border border-slate-300">
        
        {/* Top Control Bar */}
        <div className="bg-[#2034D8] text-white px-5 py-3.5 flex items-center justify-between border-b border-indigo-400/30 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            <span className="text-sm font-bold font-righteous tracking-wide">
              Currículo de Isaac Menezes
            </span>
            <span className="text-xs text-indigo-200 hidden sm:inline">
              (Versão Oficial em PDF / Impressão)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyAll}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold transition-colors cursor-pointer"
              title="Copiar texto completo do currículo"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copiado!' : 'Copiar Texto'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white text-indigo-950 hover:bg-indigo-50 text-xs font-bold shadow-xs transition-colors cursor-pointer"
              title="Imprimir ou Salvar como PDF"
            >
              <Printer className="w-3.5 h-3.5 text-indigo-600" />
              <span>Salvar PDF / Imprimir</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Curriculum Document Content */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-white font-sans text-slate-900 space-y-7 leading-normal print:p-0">
          
          {/* Header Block */}
          <div className="border-b border-slate-200 pb-5">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {CURRICULUM_DATA.personal.name}
            </h1>
            <div className="mt-2 text-xs sm:text-sm text-slate-600 flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="font-medium text-slate-900">{CURRICULUM_DATA.personal.email}</span>
              <span aria-hidden="true" className="text-slate-300">|</span>
              <span>{CURRICULUM_DATA.personal.phone}</span>
              <span aria-hidden="true" className="text-slate-300">|</span>
              <span>{CURRICULUM_DATA.personal.location}</span>
            </div>
            <div className="mt-1 text-xs text-indigo-600 flex flex-wrap items-center gap-x-3 gap-y-1">
              <a href={CURRICULUM_DATA.personal.linkedin} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                <Linkedin className="w-3 h-3" />
                <span>linkedin.com/in/isaacmenezes-dev</span>
              </a>
              <span aria-hidden="true" className="text-slate-300">|</span>
              <a href={CURRICULUM_DATA.personal.github} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                <Github className="w-3 h-3" />
                <span>github.com/isaacmenezes</span>
              </a>
            </div>
          </div>

          {/* Sobre */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-900 mb-2 border-b border-indigo-100 pb-1">
              Sobre
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
              {CURRICULUM_DATA.personal.bio}
            </p>
          </div>

          {/* Habilidades Técnicas */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-900 mb-2.5 border-b border-indigo-100 pb-1">
              Habilidades Técnicas
            </h2>
            <div className="space-y-1.5 text-xs sm:text-sm text-slate-700">
              <p>● <strong className="text-slate-900">Dados e Análise:</strong> Python, Pandas, SQL, PostgreSQL, MySQL, análise e tratamento de dados</p>
              <p>● <strong className="text-slate-900">Ferramentas:</strong> Excel — Intermediário, PowerPoint — Intermediário, Git, GitHub</p>
              <p>● <strong className="text-slate-900">Programação:</strong> JavaScript, TypeScript, Node.js</p>
              <p>● <strong className="text-slate-900">Integrações:</strong> REST APIs, JSON</p>
              <p>● <strong className="text-slate-900">Visualização:</strong> Power BI</p>
            </div>
          </div>

          {/* Experiência */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-900 mb-3 border-b border-indigo-100 pb-1">
              Experiência
            </h2>
            <div className="space-y-5">
              {CURRICULUM_DATA.experiences.map((exp, i) => (
                <div key={i}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                    <span className="font-bold text-slate-900 text-sm">
                      {exp.role}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      {exp.company} | {exp.period}
                    </span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-slate-700 ml-1">
                    {exp.responsibilities.map((r, rIdx) => (
                      <li key={rIdx} className="leading-relaxed">
                        <span className="-ml-1">{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Educação */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-900 mb-2 border-b border-indigo-100 pb-1">
              Educação
            </h2>
            <div className="space-y-2 text-xs sm:text-sm text-slate-700">
              {CURRICULUM_DATA.education.map((ed, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <span>
                    ● <strong className="text-slate-900">{ed.degree}</strong> – {ed.institution}
                  </span>
                  <span className="text-xs text-slate-500 font-medium ml-4">
                    {ed.period}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Idiomas */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-900 mb-2 border-b border-indigo-100 pb-1">
              Idiomas
            </h2>
            <div className="text-xs sm:text-sm text-slate-700 space-y-1">
              <p>● <strong className="text-slate-900">Inglês:</strong> Avançado (EF SET - C1)</p>
              <p>● <strong className="text-slate-900">Português:</strong> Nativo</p>
            </div>
          </div>

          {/* Projetos Relevantes */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-900 mb-3 border-b border-indigo-100 pb-1">
              Projetos Relevantes
            </h2>
            <div className="space-y-4">
              {CURRICULUM_DATA.projects.map((proj) => (
                <div key={proj.id} className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                    <span className="font-bold text-slate-900 text-sm">
                      {proj.title}
                    </span>
                    <span className="text-xs text-indigo-600 font-mono">
                      {proj.technologies.slice(0, 4).join(', ')}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mb-2">
                    GitHub: <a href={proj.githubUrl} target="_blank" rel="noreferrer" className="text-indigo-600 underline">{proj.githubUrl}</a>
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-700 ml-1">
                    {proj.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="leading-snug">
                        <span className="-ml-1">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Cursos */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-900 mb-3 border-b border-indigo-100 pb-1">
              Cursos
            </h2>
            <div className="space-y-3">
              {CURRICULUM_DATA.courses.map((course, idx) => (
                <div key={idx}>
                  <div className="font-bold text-slate-900 text-xs sm:text-sm">
                    {course.title} <span className="font-normal text-slate-500">| {course.issuer}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-0.5 text-xs text-slate-600 mt-1 ml-1">
                    {course.topics.map((top, tIdx) => (
                      <li key={tIdx} className="leading-snug">
                        <span className="-ml-1">{top}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Honras */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-900 mb-2 border-b border-indigo-100 pb-1">
              Honras
            </h2>
            <p className="text-xs sm:text-sm text-slate-800">
              ● Reconhecido <strong>“Aluno Destaque” do SENAI</strong> – SENAI Almirante Tamandaré | 2024
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
