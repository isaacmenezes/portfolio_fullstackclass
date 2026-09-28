import React, { useState } from 'react';
import { 
  Database, 
  LineChart, 
  Workflow, 
  Cpu, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Copy, 
  Check, 
  Download 
} from 'lucide-react';
import { CURRICULUM_DATA } from '../data/curriculumData';

interface AboutSectionProps {
  onOpenCvModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenCvModal }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CURRICULUM_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="sobre" className="w-full py-10 sm:py-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold tracking-wider uppercase backdrop-blur-xs border border-white/20 mb-3">
            <span>Visão & Perfil</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Sobre Isaac Menezes
          </h2>
          <p className="text-indigo-100 text-sm sm:text-base mt-2 max-w-2xl">
            Conectando a engenharia de software à inteligência de dados para transformar indicadores operacionais em valor estratégico.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left Column: Portrait Card & Direct Contacts */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-6 shadow-xl border border-indigo-100">
            <div className="relative aspect-square rounded-xl overflow-hidden mb-5 bg-indigo-50 border border-indigo-100 shadow-inner group">
              <img
                src="/src/assets/images/avatar_isaac_tech_1790558070172.jpg"
                alt="Retrato profissional de Isaac Menezes"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-2 left-2 right-2 bg-slate-900/80 backdrop-blur-sm text-white px-2.5 py-1.5 rounded-lg text-xs flex items-center justify-between">
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Disponível para Projetos
                </span>
                <span className="text-[11px] text-slate-300">São Paulo, SP</span>
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-indigo-50/60 border border-indigo-100/80">
                <div className="flex items-center gap-2 text-slate-700 min-w-0">
                  <Mail className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span className="text-xs font-mono truncate">{CURRICULUM_DATA.personal.email}</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-1 hover:bg-white rounded text-indigo-600 hover:text-indigo-800 transition-colors cursor-pointer"
                  title="Copiar e-mail"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <a
                href={`https://wa.me/5511913050808?text=Olá%20Isaac,%20vi%20seu%20portfólio!`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 border border-slate-200 hover:border-emerald-200 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-medium">{CURRICULUM_DATA.personal.phone}</span>
                <span className="ml-auto text-[11px] text-slate-400 group-hover:text-emerald-600">WhatsApp</span>
              </a>

              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700">
                <MapPin className="w-4 h-4 text-pink-600 shrink-0" />
                <span className="text-xs font-medium">{CURRICULUM_DATA.personal.location}</span>
              </div>

              {/* Social Links */}
              <div className="pt-2 flex items-center gap-2">
                <a
                  href={CURRICULUM_DATA.personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-white bg-[#0A66C2] hover:bg-[#084e96] rounded-lg transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={CURRICULUM_DATA.personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </div>

              <button
                onClick={onOpenCvModal}
                className="w-full flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-lg border border-indigo-200 transition-colors cursor-pointer mt-2"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Visualizar Currículo Formatado</span>
              </button>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Strategic Pillars */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Story Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-indigo-100">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span>Trajetória & Foco Profissional</span>
              </h3>
              
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base mb-4">
                Estudante de <strong>Análise e Desenvolvimento de Sistemas</strong> com experiência consolidada em análise, organização e tratamento de dados utilizando <strong>Python, Pandas e SQL</strong>. 
                Possuo vivência profissional na gestão de indicadores, documentação de processos e estruturação de informações para tomadas de decisão.
              </p>
              
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Com domínio intermediário em Excel e forte experiência com integração e manipulação de dados provenientes de fontes heterogêneas, meu foco está na <strong>análise de dados, otimização contínua de processos e desenvolvimento de soluções digitais orientadas às necessidades reais do negócio</strong>.
              </p>

              {/* Languages Box */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-600">
                <span className="font-semibold text-slate-900">Idiomas:</span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-100 rounded-md text-slate-800">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Inglês — Avançado (EF SET - C1)
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-100 rounded-md text-slate-800">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  Português — Nativo
                </span>
              </div>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="bg-white/95 backdrop-blur-xs p-5 rounded-xl border border-indigo-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700 mb-3">
                  <Database className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-1">Dados & ETL</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Pipelines de extração, limpeza e modelagem em Python (Pandas) e bancos relacionais SQL (PostgreSQL & MySQL).
                </p>
              </div>

              <div className="bg-white/95 backdrop-blur-xs p-5 rounded-xl border border-indigo-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-9 h-9 rounded-lg bg-pink-100 flex items-center justify-center text-pink-700 mb-3">
                  <LineChart className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-1">Indicadores & KPIs</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Acompanhamento de volume, TMA, NPS e métricas do Reclame Aqui com dashboards em Power BI e planilhas analíticas.
                </p>
              </div>

              <div className="bg-white/95 backdrop-blur-xs p-5 rounded-xl border border-indigo-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-9 h-9 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-700 mb-3">
                  <Workflow className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-1">Jornada & Bots</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Mapeamento de processos AS-IS, jornada do cliente e estruturação de fluxos conversacionais inteligentes para atendimento.
                </p>
              </div>

              <div className="bg-white/95 backdrop-blur-xs p-5 rounded-xl border border-indigo-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-9 h-9 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700 mb-3">
                  <Cpu className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-1">Full Stack & Nuvem</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  APIs RESTful em Node.js com TypeScript, frontends reativos e fundamentos de cloud com AWS e GenAI.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
