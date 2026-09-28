/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HeaderNav } from './components/HeaderNav';
import { HeroArtboard } from './components/HeroArtboard';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { MetricSimulator } from './components/MetricSimulator';
import { SkillsSection } from './components/SkillsSection';
import { EducationCertifications } from './components/EducationCertifications';
import { ContactSection } from './components/ContactSection';
import { CurriculumModal } from './components/CurriculumModal';

export default function App() {
  const [isCvModalOpen, setIsCvModalOpen] = useState<boolean>(false);

  const handleNavigateSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#2437D4] text-slate-900 selection:bg-pink-300 selection:text-indigo-950 font-sans">
      
      {/* Fixed/Sticky Top Bar adhering to 3-zone contract */}
      <HeaderNav 
        onOpenCvModal={() => setIsCvModalOpen(true)}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Artboard (Faithfully recreating the user's reference image aesthetic) */}
        <HeroArtboard 
          onOpenCvModal={() => setIsCvModalOpen(true)}
          onNavigateSection={handleNavigateSection}
        />

        {/* 2. Sobre Isaac Menezes */}
        <AboutSection 
          onOpenCvModal={() => setIsCvModalOpen(true)}
        />

        {/* 3. Projetos Relevantes (Ártemis Pizzaria, Instagram Data Collector) */}
        <ProjectsSection />

        {/* 4. Experiência Profissional (Concentrix & IFSP) */}
        <ExperienceTimeline />

        {/* 5. Simulador Interativo de Métricas (Digital Analyst: TMA, NPS, Bots) */}
        <MetricSimulator />

        {/* 6. Habilidades Técnicas & Ferramentas com Inspetor Interativo */}
        <SkillsSection />

        {/* 7. Formação, Certificações & Aluno Destaque SENAI */}
        <EducationCertifications />

        {/* 8. Contato Direto & Formulário */}
        <ContactSection />
      </main>

      {/* Official Curriculum Modal (with PDF / Print support) */}
      <CurriculumModal 
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />

    </div>
  );
}
