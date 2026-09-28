export interface Project {
  id: string;
  title: string;
  category: 'Full Stack' | 'Data Science' | 'Mobile';
  shortDesc: string;
  institution: string;
  technologies: string[];
  githubUrl: string;
  image: string;
  highlights: string[];
  fullDescription: string;
  architectureDetails: {
    frontend?: string;
    backend?: string;
    database?: string;
    keyFeatures: string[];
  };
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  type: 'Trabalho' | 'Iniciação Científica';
  responsibilities: string[];
  tags: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  status: string;
  description?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  topics: string[];
}

export const CURRICULUM_DATA = {
  personal: {
    name: 'Isaac Menezes',
    role: 'Digital Analyst & Desenvolvedor de Sistemas',
    tagline: 'Análise de dados, otimização de processos e desenvolvimento de soluções orientadas ao negócio',
    email: 'isaacmnz.dev@gmail.com',
    phone: '(11) 91305-0808',
    location: 'São Paulo, Brasil',
    linkedin: 'https://linkedin.com/in/isaacmenezes-dev/',
    github: 'https://github.com/isaacmenezes',
    bio: 'Estudante de Análise e Desenvolvimento de Sistemas com experiência sólida em análise, organização e tratamento de dados utilizando Python, Pandas e SQL, além de vivência profissional com indicadores de performance, documentação de processos e estruturação de informações de negócio. Possuo experiência prática com integração de dados de múltiplas fontes, análise de canais de atendimento, TMA, NPS e suporte em fluxos conversacionais e bots.',
    languages: [
      { name: 'Inglês', level: 'Avançado (EF SET - C1)' },
      { name: 'Português', level: 'Nativo' }
    ]
  },
  skillsByCategory: [
    {
      category: 'Dados e Análise',
      skills: [
        { name: 'Python', level: 'Avançado', context: 'Pipelines ETL, automação, web scraping e análise estatística' },
        { name: 'Pandas', level: 'Avançado', context: 'Tratamento de dados, limpeza de datasets e manipulação' },
        { name: 'SQL', level: 'Avançado', context: 'Consultas complexas, agregações, joins e modelagem' },
        { name: 'PostgreSQL', level: 'Intermediário', context: 'Bancos relacionais, Prisma ORM e modelagem' },
        { name: 'MySQL', level: 'Intermediário', context: 'Estruturação de dados relacionais e otimização' },
        { name: 'Tratamento de Dados', level: 'Avançado', context: 'Limpeza, validação e enriquecimento de fontes diversas' }
      ]
    },
    {
      category: 'Programação e Web',
      skills: [
        { name: 'JavaScript', level: 'Avançado', context: 'Aplicações web reativas e manipulação DOM' },
        { name: 'TypeScript', level: 'Avançado', context: 'APIs escaláveis, contratos de dados e React/React Native' },
        { name: 'Node.js', level: 'Intermediário', context: 'Construção de APIs RESTful seguras e modulares' },
        { name: 'React & React Native', level: 'Intermediário', context: 'Interfaces reativas web e mobile focadas em UX' },
        { name: 'Prisma ORM', level: 'Intermediário', context: 'Mapeamento objeto-relacional e migrações' }
      ]
    },
    {
      category: 'Ferramentas e BI',
      skills: [
        { name: 'Power BI', level: 'Intermediário', context: 'Dashboards executivos, relatórios de KPIs e métricas' },
        { name: 'Excel', level: 'Intermediário', context: 'Fórmulas avançadas, PROCV/X, tabelas dinâmicas e modelagem' },
        { name: 'PowerPoint', level: 'Intermediário', context: 'Apresentações executivas e relatórios de consultoria' },
        { name: 'Git & GitHub', level: 'Avançado', context: 'Controle de versão, branching, pull requests e documentação' }
      ]
    },
    {
      category: 'Integrações e Cloud',
      skills: [
        { name: 'REST APIs', level: 'Avançado', context: 'Consumo e desenvolvimento de endpoints autenticados' },
        { name: 'JSON', level: 'Avançado', context: 'Estruturação e serialização de dados para APIs' },
        { name: 'AWS Cloud Practitioner', level: 'Fundamentos', context: 'EC2, S3, RDS, Lambda, VPC, CloudFront, IAM e FinOps' },
        { name: 'AWS GenAI', level: 'Fundamentos', context: 'Modelos generativos em nuvem e aplicações corporativas' }
      ]
    }
  ],
  experiences: [
    {
      role: 'Digital Analyst',
      company: 'Concentrix',
      period: 'Junho 2026 – Atual',
      location: 'São Paulo, Brasil',
      type: 'Trabalho',
      responsibilities: [
        'Levantamento, consolidação e organização de indicadores de performance de canais de atendimento (Volume, TMA, NPS e dados analíticos do Reclame Aqui).',
        'Apoio no mapeamento e documentação de canais de atendimento, incluindo diagnóstico AS-IS e desenho da jornada do cliente.',
        'Estruturação de apresentações e materiais de consultoria estratégica para clientes corporativos.',
        'Participação ativa em reuniões de discovery com clientes, com registro e organização de informações para acompanhamento das demandas.',
        'Monitoramento de benchmarks de mercado e tendências em digitalização e inteligência de atendimento.',
        'Suporte na elaboração de fluxos conversacionais e documentação técnica de bots de atendimento.'
      ],
      tags: ['Indicadores de Performance', 'TMA & NPS', 'Reclame Aqui', 'Jornada AS-IS', 'Bots & Fluxos', 'Consultoria']
    },
    {
      role: 'Aluno Pesquisador — Iniciação Científica',
      company: 'Instituto Federal de São Paulo (IFSP)',
      period: 'Janeiro 2026 – Junho 2026',
      location: 'São Paulo, Brasil',
      type: 'Iniciação Científica',
      responsibilities: [
        'Desenvolvimento de ferramentas customizadas para coleta automatizada e processamento de dados utilizando Python.',
        'Integração com APIs de terceiros (como Instagrapi API e Selenium) e desenvolvimento de soluções resilientes para extração de dados.',
        'Construção de pipelines completos para coleta, tratamento e análise de dados estruturados com Python e Pandas.',
        'Investigação e experimentação de soluções computacionais avançadas aplicadas à pesquisa acadêmica.'
      ],
      tags: ['Python', 'Pandas', 'Pipelines ETL', 'APIs de Terceiros', 'Web Scraping', 'Pesquisa Científica']
    }
  ] as Experience[],
  projects: [
    {
      id: 'artemis-pizzaria',
      title: 'Ártemis Pizzaria — Aplicação Mobile Full Stack',
      category: 'Full Stack',
      shortDesc: 'Sistema completo para pizzaria artesanal com aplicativo mobile, API RESTful robusta, autenticação e banco PostgreSQL.',
      institution: 'SENAI Almirante Tamandaré',
      technologies: ['TypeScript', 'Node.js', 'React', 'React Native', 'PostgreSQL', 'Prisma ORM'],
      githubUrl: 'https://github.com/isaacmenezes/artemis_pizzaria',
      image: '/src/assets/images/project_artemis_pizzaria_1790558081277.jpg',
      highlights: [
        'Desenvolvimento full stack com foco em UX/UI, prototipação e definição detalhada de fluxos de pedido.',
        'API RESTful em Node.js com autenticação segura, validações rigorosas e regras de negócio integradas.',
        'Integração fluida e de baixa latência entre o frontend mobile (React Native) e os endpoints do backend.',
        'Modelagem de banco de dados relacional (PostgreSQL) utilizando Prisma ORM.',
        'Documentação técnica detalhada da arquitetura e dos endpoints da API.'
      ],
      fullDescription: 'Projeto concebido para modernizar a operação de uma pizzaria gastronômica, eliminando atritos no checkout e simplificando a gestão de pedidos pela cozinha e entregadores. O backend fornece rotas autenticadas para gerenciamento de cardápio, carrinho e status de entrega.',
      architectureDetails: {
        frontend: 'React Native com navegação por abas/pilhas e componentes estilizados com foco em usabilidade.',
        backend: 'Node.js + Express com arquitetura em camadas (Controllers, Services, Repositories).',
        database: 'PostgreSQL estruturado via Prisma schema com relacionamentos entre Clientes, Pedidos e Itens.',
        keyFeatures: [
          'Autenticação de usuários com tokens JWT',
          'Catálogo interativo com customização de ingredientes',
          'Gestão de pedidos em tempo real',
          'Validação estrita de inputs no backend'
        ]
      }
    },
    {
      id: 'instagram-collector',
      title: 'Instagram Data Collector — Iniciação Científica',
      category: 'Data Science',
      shortDesc: 'Pipeline automatizado de coleta, tratamento e mineração de dados de mídias sociais para análise de engajamento.',
      institution: 'Instituto Federal de São Paulo (IFSP)',
      technologies: ['Python', 'Pandas', 'Selenium', 'Instagrapi API', 'JSON'],
      githubUrl: 'https://github.com/isaacmenezes/databyinsta',
      image: '/src/assets/images/project_data_collector_1790558092199.jpg',
      highlights: [
        'Consumo e integração de APIs de terceiros (Instagrapi API) para sistema de coleta e análise de dados públicos.',
        'Criação de pipeline de dados: coleta via scraping e API, tratamento e análise de métricas de engajamento utilizando Python e Pandas.',
        'Geração de relatórios analíticos com distribuições de métricas e detecção de padrões de interação.',
        'Mecanismo de fallback inteligente para contornar limitações de requisição.'
      ],
      fullDescription: 'Desenvolvido no escopo de Iniciação Científica no IFSP, este projeto implementa um pipeline de dados automatizado capaz de extrair dados de perfis e publicações, higienizar informações brutas em dataframes estruturados e calcular métricas de engajamento para fins de pesquisa e inteligência competitiva.',
      architectureDetails: {
        frontend: 'Scripts de linha de comando interativos e visualização em notebooks com gráficos analíticos.',
        backend: 'Módulos Python modulares para autenticação, rate limiting e coleta resiliente.',
        database: 'Armazenamento em JSON estruturado e DataFrames Pandas exportáveis para CSV/Parquet.',
        keyFeatures: [
          'Extração de curtidas, comentários e alcance',
          'Limpeza e normalização de texto e timestamps',
          'Cálculo de taxa de engajamento ponderada',
          'Tratamento de exceções e anti-bloqueio'
        ]
      }
    }
  ] as Project[],
  education: [
    {
      degree: 'Ensino Superior em Análise e Desenvolvimento de Sistemas',
      institution: 'Instituto Federal de São Paulo (IFSP)',
      period: '2024 – 2028 (Previsão)',
      status: 'Em andamento',
      description: 'Foco em engenharia de software, estruturas de dados, banco de dados, arquitetura de sistemas e projetos práticos.'
    },
    {
      degree: 'Técnico em Desenvolvimento de Sistemas',
      institution: 'SENAI Almirante Tamandaré',
      period: '2023 – 2025',
      status: 'Concluído',
      description: 'Formação prática em programação full stack, bancos de dados relacionais, metodologias ágeis e padrões de projeto.'
    }
  ] as EducationItem[],
  courses: [
    {
      title: 'CS50’s Web Programming with Python and JavaScript',
      issuer: 'Harvard University',
      topics: [
        'Desenvolvimento web avançado com Python (Django) e JavaScript',
        'Design de banco de dados relacional e SQL',
        'Escalabilidade, segurança e experiência do usuário (UX)'
      ]
    },
    {
      title: 'AWS GenAI Fundamentals',
      issuer: 'AWS Treina Brasil | AWS + Santander Open Academy',
      topics: [
        'Fundamentos de Inteligência Artificial Generativa (GenAI) e cloud computing',
        'Introdução aos serviços AWS voltados para IA e inovação tecnológica',
        'Uso estratégico de GenAI no ciclo de desenvolvimento de software'
      ]
    },
    {
      title: 'AWS Cloud Practitioner',
      issuer: 'AWS Treina Brasil | AWS + Santander Open Academy',
      topics: [
        'Conceitos fundamentais da nuvem AWS (IaaS, PaaS, SaaS)',
        'Visão geral de serviços: EC2, S3, RDS, Lambda, VPC e CloudFront',
        'Segurança, conformidade (IAM) e arquitetura de alta resiliência'
      ]
    }
  ] as CertificationItem[],
  honors: [
    {
      title: 'Aluno Destaque do SENAI',
      institution: 'SENAI Almirante Tamandaré',
      year: '2024',
      description: 'Reconhecimento formal por excelência acadêmica, liderança técnica em projetos de desenvolvimento e contribuição com a comunidade estudantil.'
    }
  ]
};
