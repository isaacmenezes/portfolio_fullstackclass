import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Clock, 
  ThumbsUp, 
  Bot, 
  MessageSquare, 
  Sliders, 
  AlertCircle,
  Sparkles,
  PhoneCall
} from 'lucide-react';

export const MetricSimulator: React.FC = () => {
  const [channel, setChannel] = useState<'all' | 'whatsapp' | 'telefonia' | 'reclameaqui'>('whatsapp');
  const [monthlyVolume, setMonthlyVolume] = useState<number>(38000);
  const [botDeflectionRate, setBotDeflectionRate] = useState<number>(42);

  // Dynamic calculations based on Digital Analyst models
  const automatedVolume = Math.round(monthlyVolume * (botDeflectionRate / 100));
  const humanHandledVolume = monthlyVolume - automatedVolume;
  
  // Base TMA in minutes, reduced as bot deflection handles routine queries
  const baseTma = channel === 'telefonia' ? 6.5 : channel === 'whatsapp' ? 4.2 : 5.0;
  const rawTma = Math.max(2.1, baseTma * (1 - (botDeflectionRate * 0.004)));
  const calculatedTma = rawTma.toFixed(1);
  
  // NPS Score (Scale -100 to +100)
  const baseNps = channel === 'reclameaqui' ? 58 : channel === 'whatsapp' ? 68 : 62;
  const calculatedNps = Math.min(88, Math.round(baseNps + (botDeflectionRate * 0.28)));
  
  // Estimated hours saved per month
  const hoursSavedPerMonth = Math.round((automatedVolume * 4.5) / 60);

  return (
    <section id="metricas" className="w-full py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold tracking-wider uppercase backdrop-blur-xs border border-white/20 mb-3">
            <span>Inteligência Operacional</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Simulador de Indicadores & Performance de Canais
          </h2>
          <p className="text-indigo-100 text-sm sm:text-base mt-2 max-w-2xl">
            Uma demonstração prática do raciocínio analítico aplicado na Concentrix: correlação entre volume, TMA, NPS e automação de fluxos conversacionais.
          </p>
        </div>

        {/* The Interactive Simulator Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-indigo-100">
          
          {/* Top Channel Tabs (Interactive segmented control) */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Selecione o Canal de Atendimento:
              </span>
              <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100 rounded-xl">
                <button
                  onClick={() => setChannel('whatsapp')}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    channel === 'whatsapp'
                      ? 'bg-white text-indigo-950 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  WhatsApp & Chatbot
                </button>
                <button
                  onClick={() => setChannel('telefonia')}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    channel === 'telefonia'
                      ? 'bg-white text-indigo-950 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Voz / Telefonia
                </button>
                <button
                  onClick={() => setChannel('reclameaqui')}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    channel === 'reclameaqui'
                      ? 'bg-white text-indigo-950 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Reclame Aqui
                </button>
                <button
                  onClick={() => setChannel('all')}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    channel === 'all'
                      ? 'bg-white text-indigo-950 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Visão Consolidada
                </button>
              </div>
            </div>

            <div className="text-right">
              <span className="text-xs text-slate-400 block">Status da Análise:</span>
              <span className="text-xs font-bold text-emerald-600 flex items-center gap-1.5 justify-end">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                Modelo Estatístico Ativo
              </span>
            </div>
          </div>

          {/* Interactive Sliders & Live Results Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
            
            {/* Left Controls: Sliders */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 space-y-5">
                
                {/* Volume Slider */}
                <div>
                  <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-2">
                    <span className="flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5 text-indigo-600" />
                      Volume Mensal de Interações
                    </span>
                    <span className="font-mono text-indigo-900 text-sm tabular-nums">
                      {monthlyVolume.toLocaleString('pt-BR')} chamados
                    </span>
                  </div>
                  <input
                    type="range"
                    min={10000}
                    max={120000}
                    step={2000}
                    value={monthlyVolume}
                    onChange={(e) => setMonthlyVolume(Number(e.target.value))}
                    className="w-full accent-[#253AD2] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                    <span>10k</span>
                    <span>65k</span>
                    <span>120k</span>
                  </div>
                </div>

                {/* Bot Deflection Slider */}
                <div>
                  <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-2">
                    <span className="flex items-center gap-1.5">
                      <Bot className="w-3.5 h-3.5 text-pink-600" />
                      Retenção / Deflexão por Bot
                    </span>
                    <span className="font-mono text-pink-900 text-sm tabular-nums">
                      {botDeflectionRate}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min={10}
                    max={85}
                    step={1}
                    value={botDeflectionRate}
                    onChange={(e) => setBotDeflectionRate(Number(e.target.value))}
                    className="w-full accent-pink-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                    <span>10% (Básico)</span>
                    <span>45% (Intermediário)</span>
                    <span>85% (IA Avançada)</span>
                  </div>
                </div>

              </div>

              {/* Discovery & Consultant Insights Callout */}
              <div className="p-4 bg-indigo-50/60 rounded-xl border border-indigo-100 text-xs text-slate-700 space-y-2">
                <span className="font-bold text-indigo-900 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                  Diagnóstico Consultivo AS-IS
                </span>
                <p className="leading-relaxed">
                  Com <strong className="text-indigo-950 font-semibold">{botDeflectionRate}% de deflexão</strong>, a operação transfere{' '}
                  <strong className="text-indigo-950 font-semibold">{automatedVolume.toLocaleString('pt-BR')} contatos repetitivos</strong> para a inteligência de fluxos, liberando o time humano para casos de alta complexidade.
                </p>
              </div>

            </div>

            {/* Right Display: 4 Calculated KPI Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Card 1: TMA */}
              <div className="p-5 rounded-xl bg-gradient-to-br from-indigo-50/80 to-white border border-indigo-100 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-slate-500 text-xs font-semibold mb-2">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-indigo-600" />
                      TMA (Tempo Médio)
                    </span>
                    <span className="text-[11px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                      -{(botDeflectionRate * 0.35).toFixed(0)}% Otimizado
                    </span>
                  </div>
                  <div className="text-3xl font-extrabold text-slate-900 font-mono tabular-nums">
                    {calculatedTma} <span className="text-sm font-sans font-normal text-slate-500">min</span>
                  </div>
                </div>
                <p className="text-[11px] text-slate-500 mt-3 pt-2 border-t border-slate-100">
                  Tempo médio de atendimento por operador humano após triagem automatizada.
                </p>
              </div>

              {/* Card 2: NPS */}
              <div className="p-5 rounded-xl bg-gradient-to-br from-pink-50/80 to-white border border-pink-100 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-slate-500 text-xs font-semibold mb-2">
                    <span className="flex items-center gap-1.5">
                      <ThumbsUp className="w-4 h-4 text-pink-600" />
                      NPS Projetado
                    </span>
                    <span className="text-[11px] text-pink-700 font-bold bg-pink-50 px-2 py-0.5 rounded">
                      Excelente
                    </span>
                  </div>
                  <div className="text-3xl font-extrabold text-slate-900 font-mono tabular-nums">
                    +{calculatedNps} <span className="text-sm font-sans font-normal text-slate-500">pts</span>
                  </div>
                </div>
                <p className="text-[11px] text-slate-500 mt-3 pt-2 border-t border-slate-100">
                  Satisfação líquida do cliente impulsionada por resolução ágil nos canais digitais.
                </p>
              </div>

              {/* Card 3: Deflexão em Volume */}
              <div className="p-5 rounded-xl bg-gradient-to-br from-blue-50/80 to-white border border-blue-100 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-slate-500 text-xs font-semibold mb-2">
                    <span className="flex items-center gap-1.5">
                      <Bot className="w-4 h-4 text-blue-600" />
                      Volume Automatizado
                    </span>
                    <span className="text-[11px] text-blue-700 font-bold bg-blue-50 px-2 py-0.5 rounded">
                      Sem Fila
                    </span>
                  </div>
                  <div className="text-3xl font-extrabold text-slate-900 font-mono tabular-nums">
                    {automatedVolume.toLocaleString('pt-BR')}
                  </div>
                </div>
                <p className="text-[11px] text-slate-500 mt-3 pt-2 border-t border-slate-100">
                  Chamados resolvidos 100% por bot conversacional sem intervenção de atendentes.
                </p>
              </div>

              {/* Card 4: Economia de Tempo Operacional */}
              <div className="p-5 rounded-xl bg-gradient-to-br from-emerald-50/80 to-white border border-emerald-100 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-slate-500 text-xs font-semibold mb-2">
                    <span className="flex items-center gap-1.5">
                      <TrendingUp className="w-4 h-4 text-emerald-600" />
                      Tempo Poupado
                    </span>
                    <span className="text-[11px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                      Gargalo Zero
                    </span>
                  </div>
                  <div className="text-3xl font-extrabold text-slate-900 font-mono tabular-nums">
                    ~{hoursSavedPerMonth.toLocaleString('pt-BR')} <span className="text-sm font-sans font-normal text-slate-500">h/mês</span>
                  </div>
                </div>
                <p className="text-[11px] text-slate-500 mt-3 pt-2 border-t border-slate-100">
                  Capacidade operacional reorientada para consultoria e suporte consultivo.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
