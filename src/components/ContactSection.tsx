import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send, 
  Check, 
  Copy, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { CURRICULUM_DATA } from '../data/curriculumData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [copiedPhone, setCopiedPhone] = useState<boolean>(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 700);
  };

  return (
    <section id="contato" className="w-full py-12 sm:py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold tracking-wider uppercase backdrop-blur-xs border border-white/20 mb-3">
            <span>Conexão</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Vamos Conversar?
          </h2>
          <p className="text-indigo-100 text-sm sm:text-base mt-2 max-w-xl">
            Aberto a oportunidades profissionais em Análise de Dados, Digital Analytics e Engenharia de Software.
          </p>
        </div>

        {/* Contact Split Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Info Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="bg-white rounded-2xl p-5 shadow-xl border border-indigo-100 flex items-center justify-between">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs text-slate-400 font-medium block">E-mail Direto</span>
                  <a
                    href={`mailto:${CURRICULUM_DATA.personal.email}`}
                    className="text-xs sm:text-sm font-bold text-slate-800 hover:text-indigo-600 truncate block transition-colors"
                  >
                    {CURRICULUM_DATA.personal.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(CURRICULUM_DATA.personal.email, 'email')}
                className="p-2 rounded-lg bg-slate-50 hover:bg-indigo-50 text-indigo-600 transition-colors cursor-pointer"
                title="Copiar e-mail"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-white rounded-2xl p-5 shadow-xl border border-indigo-100 flex items-center justify-between">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium block">Telefone / WhatsApp</span>
                  <a
                    href="https://wa.me/5511913050808"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs sm:text-sm font-bold text-slate-800 hover:text-emerald-600 transition-colors"
                  >
                    {CURRICULUM_DATA.personal.phone}
                  </a>
                </div>
              </div>
              <a
                href="https://wa.me/5511913050808"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-xs font-bold text-emerald-700 transition-colors"
              >
                Abrir
              </a>
            </div>

            {/* Location & Status Card */}
            <div className="bg-white rounded-2xl p-5 shadow-xl border border-indigo-100">
              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-10 h-10 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center text-pink-600 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium block">Localização</span>
                  <span className="text-sm font-bold text-slate-800">{CURRICULUM_DATA.personal.location}</span>
                </div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed border-t border-slate-100 pt-3">
                Disponível para posições presenciais, híbridas ou remotas em São Paulo e todo o Brasil.
              </p>
            </div>

            {/* Social Network Tiles */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <a
                href={CURRICULUM_DATA.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3.5 bg-[#0A66C2] hover:bg-[#084e96] text-white rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-xs font-bold"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href={CURRICULUM_DATA.personal.github}
                target="_blank"
                rel="noreferrer"
                className="p-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-xs font-bold"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>

          </div>

          {/* Right Column: Direct Message Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-indigo-100">
            <h3 className="text-xl font-bold text-slate-900 mb-1 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-indigo-600" />
              <span>Enviar Mensagem Direta</span>
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Preencha o formulário abaixo para enviar uma proposta, convite para entrevista ou solicitação de contato.
            </p>

            {submitted ? (
              <div className="p-6 bg-emerald-50 rounded-xl border border-emerald-200 text-center space-y-2 animate-in fade-in">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-emerald-950">Mensagem registrada com sucesso!</h4>
                <p className="text-xs text-emerald-800 max-w-sm mx-auto">
                  Obrigado pelo contato! Você também pode enviar um e-mail direto para <strong className="font-semibold">{CURRICULUM_DATA.personal.email}</strong> para resposta imediata.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Seu Nome *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Ana Silva"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50 focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Seu E-mail *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Ex: ana@empresa.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Assunto
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Oportunidade para Digital Analyst / Dados"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50 focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Mensagem *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Escreva sua mensagem aqui..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50 focus:bg-white transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-5 bg-[#253AD2] hover:bg-[#1E2EAF] disabled:bg-indigo-300 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-150 active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Enviando mensagem...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Enviar Mensagem Agora</span>
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>

        {/* Quiet Site Footer */}
        <footer className="mt-16 pt-8 border-t border-white/20 text-center text-xs text-indigo-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            © 2026 <strong>Isaac Menezes</strong> · Portfólio Digital Analyst & Desenvolvedor de Sistemas.
          </p>
          <p className="text-indigo-200 font-mono text-[11px]">
            São Paulo, Brasil · isaacmnz.dev@gmail.com
          </p>
        </footer>

      </div>
    </section>
  );
};
