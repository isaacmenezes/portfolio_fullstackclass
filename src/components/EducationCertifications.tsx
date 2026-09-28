import React from 'react';
import { GraduationCap, Award, BookOpen, CheckCircle, ExternalLink } from 'lucide-react';
import { CURRICULUM_DATA } from '../data/curriculumData';

export const EducationCertifications: React.FC = () => {
  return (
    <section id="formacao" className="w-full py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold tracking-wider uppercase backdrop-blur-xs border border-white/20 mb-3">
            <span>Qualificação Acadêmica</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Educação & Certificações
          </h2>
          <p className="text-indigo-100 text-sm sm:text-base mt-2 max-w-xl">
            Base técnica sólida no IFSP e SENAI, complementada por cursos internacionais e credenciais de nuvem.
          </p>
        </div>

        {/* Education & Honors Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
          
          {/* Left Column: Academic Degrees (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-pink-300" />
              <span>Formação Acadêmica</span>
            </h3>

            <div className="space-y-4">
              {CURRICULUM_DATA.education.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 shadow-xl border border-indigo-100 flex flex-col justify-between"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <span className="text-xs font-bold text-[#253AD2] uppercase tracking-wide">
                      {item.institution}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-indigo-50 text-indigo-800 self-start sm:self-auto">
                      {item.period}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 mb-1">
                    {item.degree}
                  </h4>

                  {item.description && (
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Honors / Aluno Destaque Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
              <Award className="w-5 h-5 text-amber-300" />
              <span>Reconhecimento de Destaque</span>
            </h3>

            <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-6 shadow-xl border-2 border-amber-200 flex-1 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-700 mb-4 shadow-xs">
                  <Award className="w-7 h-7" />
                </div>

                <span className="text-xs font-bold text-amber-800 uppercase tracking-wider block mb-1">
                  Reconhecimento Institucional · 2024
                </span>

                <h4 className="text-xl font-extrabold text-slate-900 mb-2">
                  Aluno Destaque do SENAI
                </h4>

                <span className="text-xs font-semibold text-slate-700 block mb-3">
                  SENAI Almirante Tamandaré
                </span>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Honraria concedida pela direção e corpo docente em virtude de alto rendimento acadêmico, liderança em projetos de desenvolvimento full stack e postura colaborativa.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-amber-200/60 flex items-center gap-2 text-xs font-bold text-amber-900">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Mérito Acadêmico e Técnico</span>
              </div>
            </div>
          </div>

        </div>

        {/* Certifications & Courses Grid */}
        <div>
          <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
            <BookOpen className="w-5 h-5 text-indigo-300" />
            <span>Cursos & Especializações</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CURRICULUM_DATA.courses.map((course, cIdx) => (
              <div
                key={cIdx}
                className="bg-white rounded-2xl p-6 shadow-xl border border-indigo-100 flex flex-col justify-between hover:shadow-2xl transition-shadow"
              >
                <div>
                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-wide block mb-1">
                    {course.issuer}
                  </span>
                  <h4 className="text-base font-bold text-slate-900 mb-4 leading-snug">
                    {course.title}
                  </h4>

                  <div className="space-y-2">
                    {course.topics.map((t, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <span className="text-pink-500 font-bold">•</span>
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
