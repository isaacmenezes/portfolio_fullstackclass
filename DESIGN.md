# DESIGN.md — Sistema Visual & Especificações de Interface (Impeccable UI)

## 1. Identidade e Filosofia Visual

- **Conceito:** *Developer & Data Analyst Workstation*. Um ambiente retro-futurista de desenvolvimento de software combinado com precisão analítica.
- **Tom da Interface:** Técnico, arrojado, tátil e interativo.
- **Público-Alvo:** Recrutadores de tecnologia, líderes de engenharia/dados e gestores de operação/CX.

---

## 2. Hero Artboard (Anatomia da Seção Principal)

### 2.1. Estrutura Visual & Janela Vector Editor
- **Moldura:** Caixa delimitadora vetorial (*bounding box*) com alças de transformação nos 8 pontos de ancoragem (cantos e pontos médios).
- **Acessórios de Canvas:** Glifos em formato de flor/nuvem nas bordas e cursor rosa customizado com cruz de movimento centralizada.
- **Abas da Janela (Window Tabs):**
  1. `isaac_portfolio.dev` (Ativa · Indicador de status online)
  2. `data_analyst_2026.py` (Inativa)
  3. `curriculo_isaac.pdf` (Inativa)
- **Controle Interativo:** Alternador (*toggle switch*) para exibir/ocultar as guias e réguas de alinhamento do artboard.

### 2.2. Tipografia Hero & Badge Central
- **Título "Portfolio":** Tipografia dimensional extrudada 3D, preenchida com gradiente retrô e sombra tridimensional marcante.
- **Badge Central Característico:**
  - *Texto:* `[ ISAAC MENEZES / 2026 / DIGITAL ANALYST & DEV ]`
  - *Estilo:* Borda técnica monoespaçada com cantos vivos ou raio reduzido, inspirado em interfaces de CAD/design industrial.

---

## 3. Paleta de Cores & Tokens (OKLCH / Hex fallback)

- **Fundo Principal (Canvas):** `#0F172A` (Slate Escuro)
- **Superfícies de Janelas / Modais:** `#1E293B`
- **Destaque Acento / Cursor / Alças:** `#EC4899` (Rosa Retro / Magenta Vector)
- **Gradiente Extrudado (Hero):** `#F43F5E` a `#8B5CF6` (Rosa Neon / Roxo Retro)
- **Texto Primário:** `#F8FAFC`
- **Texto Secundário / Métricas:** `#94A3B8`
- **Indicadores de Status (Sucesso / Ativo):** `#10B981` (Verde Esmeralda)

---

## 4. Estrutura de Seções & Componentes

### 4.1. Sobre Isaac Menezes
- **Apresentação:** Foco nos pilares de Dados, Indicadores de Performance, Jornada do Cliente (CX) e Desenvolvimento Full Stack.
- **Metadados:** Localização em **São Paulo, Brasil** e Fluência em Inglês **(C1 EF SET)**.

### 4.2. Projetos Relevantes & Modais de Arquitetura
- **Ártemis Pizzaria (Mobile Full Stack · SENAI):**
  - *Stack:* TypeScript, Node.js, React Native, PostgreSQL, Prisma ORM.
  - *Recurso:* Modal com diagrama de arquitetura e link direto para o repositório no GitHub.
- **Instagram Data Collector (Iniciação Científica · IFSP):**
  - *Stack:* Python, Pandas, Selenium, Instagrapi API.
  - *Recurso:* Pipeline de métricas, raspagem automatizada e ETL.

### 4.3. Experiência Profissional
- **Concentrix (Digital Analyst):** Gestão de indicadores de TMA, NPS, análise Reclame Aqui e bots de atendimento.
- **IFSP (Pesquisador Iniciação Científica):** Construção de pipelines ETL e consumo/integração de APIs.

### 4.4. Simulador Interativo de Métricas de Canais (Console Recrutador)
- **Controles:** Seleção de canais (`WhatsApp`, `Voz`, `Reclame Aqui`), Sliders para ajuste de **Volume de Atendimentos** e **Taxa de Deflexão do Bot (%)**.
- **Outputs em Tempo Real:** Cálculo dinâmico do impacto no **TMA (Tempo Médio de Atendimento)** e no **NPS (Net Promoter Score)**.

### 4.5. Habilidades & Inspetor Interativo
- **Tecnologias:** Python, Pandas, SQL, PostgreSQL, TypeScript, Power BI, Excel, AWS Cloud Practitioner e GenAI.
- **Componente:** *Skill Inspector* — ao passar o cursor ou selecionar uma habilidade, exibe nível de proficiência e casos de uso práticos aplicados.

### 4.6. Formação & Honras
- **Formação:** Análise e Desenvolvimento de Sistemas (ADS no IFSP) e Curso Técnico no SENAI.
- **Destaques:** Reconhecido como **Aluno Destaque do SENAI 2024**.
- **Certificações:** Harvard CS50 Web e AWS Cloud Certifications.

### 4.7. Modal de Currículo Completo
- Visualização em formato executivo.
- Botão de ação rápida para impressão/download em PDF (`Ctrl+P` / `Cmd+P`) e cópia integral do texto.

### 4.8. Contato Direto
- Botões de Cópia Rápida de E-mail (`isaacmnz.dev@gmail.com`).
- Link direto para WhatsApp (`11 91305-0808`).
- Links para LinkedIn, GitHub e formulário funcional de envio de mensagem.

---

## 5. Regras de Acessibilidade & Estados da Interface (Impeccable A11y & States)

- **Acessibilidade (WCAG AA):**
  - Contraste mínimo de 4.5:1 para texto comum.
  - Suporte completo a navegação por teclado (`Tab`, `Shift+Tab`, `Space`, `Enter`).
- **Estados Visíveis Obligatórios:**
  - **Default:** Aparência limpa com alças e guias sutis.
  - **Hover:** Destaque das bordas vetoriais e realce em rosa no cursor/elementos interativos.
  - **Focus:** Anel de foco visível (`ring-2 ring-pink-500`) em todos os botões e seletores.
  - **Active / Pressed:** Feedback tátil com ligeiro encolhimento (`scale-95`).