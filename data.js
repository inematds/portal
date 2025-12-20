// Dados dos cursos e plataformas INEMA
const platformsData = [
    {
        id: 1,
        title: "ATIA - Oportunidades Digitais com IA",
        description: "Oportunidades Digitais com IA - Explore o mundo da Inteligência Artificial e suas aplicações práticas.",
        icon: "🤖",
        tags: ["IA", "Oportunidades", "Digital"],
        url: "https://inematds.github.io/ATIA/"
    },
    {
        id: 2,
        title: "Automação 2026",
        description: "Automação 2026 - Formação em automação e tecnologias para o futuro.",
        icon: "⚙️",
        tags: ["Automação", "Tecnologia", "2026"],
        url: "https://inematds.github.io/AUTOMACAO2026"
    },
    {
        id: 3,
        title: "BMAD Academy",
        description: "Academia de desenvolvimento com metodologia BMAD - Aprenda boas práticas de desenvolvimento.",
        icon: "🎓",
        tags: ["Desenvolvimento", "Metodologia", "Academia"],
        url: "https://inematds.github.io/BMAD-Academy/"
    },
    {
        id: 4,
        title: "DBA-FO",
        description: "Fundamentos DBA Oracle - Formação em administração de banco de dados Oracle.",
        icon: "🗄️",
        tags: ["DBA", "Oracle", "Banco de Dados"],
        url: "https://inematds.github.io/DBA-FO/"
    },
    {
        id: 5,
        title: "FDB - Fundamentos de Banco de Dados",
        description: "Formação em Desenvolvimento de Base - Fundamentos essenciais para desenvolvedores.",
        icon: "💻",
        tags: ["Desenvolvimento", "Fundamentos", "Base"],
        url: "https://inematds.github.io/FDB/"
    },
    {
        id: 6,
        title: "FDF - Designers do Futuro",
        description: "Formação de Designer do Futuro - Desenvolva competências de design para a era digital.",
        icon: "🎨",
        tags: ["Design", "Futuro", "Criatividade"],
        url: "https://inematds.github.io/FDF"
    },
    {
        id: 7,
        title: "FEA-IA - Engenharia de Agentes",
        description: "Formação de Engenheiros de Agentes de IA - Aprenda a criar e gerenciar agentes inteligentes.",
        icon: "🧠",
        tags: ["IA", "Agentes", "Engenharia"],
        url: "https://inematds.github.io/FEA-IA/"
    },
    {
        id: 8,
        title: "FEI - Engenharia da Intenção",
        description: "Formação em Engenharia de Inteligência - Desenvolvimento de soluções inteligentes com IA.",
        icon: "🧪",
        tags: ["IA", "Engenharia", "Inteligência"],
        url: "https://inematds.github.io/FEI/"
    },
    {
        id: 9,
        title: "FEP - Engenharia de Prompts",
        description: "Formação de Engenheiros de Prompts - Domine a arte de criar prompts eficazes para IA.",
        icon: "✍️",
        tags: ["Prompts", "IA", "Engenharia"],
        url: "https://inematds.github.io/FEP/"
    },
    {
        id: 10,
        title: "FETD - Engenharia de Treinamentos de Dados",
        description: "Formação em Engenharia de Treinamento de Dados - Especialização em preparação e qualidade de dados para IA.",
        icon: "📊",
        tags: ["Dados", "Engenharia", "Treinamento"],
        url: "https://inematds.github.io/FETD/"
    },
    {
        id: 11,
        title: "FIA2026",
        description: "Formação em Automações com IA 2026 - Aprenda a criar automações inteligentes com IA.",
        icon: "⚡",
        tags: ["IA", "Automação", "2026"],
        url: "https://inematds.github.io/FIA2026/"
    },
    {
        id: 12,
        title: "FTD",
        description: "Formação Técnica Digital - Capacitação técnica para o mundo digital e tecnológico.",
        icon: "⚙️",
        tags: ["Técnico", "Digital", "Tecnologia"],
        url: "https://inematds.github.io/FTD/"
    },
    {
        id: 13,
        title: "FTH - Treinamento de Humanoides",
        description: "Formação para Treinamento de Humanoides - Capacitação em robótica e interação humano-robô.",
        icon: "🤖",
        tags: ["Robótica", "Humanoides", "Treinamento"],
        url: "https://inematds.github.io/FTH/"
    },
    {
        id: 14,
        title: "GitHub",
        description: "Repositórios e projetos INEMA no GitHub - Código aberto e colaboração.",
        icon: "🐙",
        tags: ["GitHub", "Código", "Colaboração"],
        url: "https://inematds.github.io/github/"
    },
    {
        id: 15,
        title: "HG1",
        description: "Academias dos Humanoides - Formação especializada em robótica humanoide e interação avançada.",
        icon: "🤖",
        tags: ["Humanoides", "Academia", "Robótica"],
        url: "https://inematds.github.io/HG1"
    },
    {
        id: 16,
        title: "N8Nb",
        description: "Fundamentos de N8N - Aprenda os fundamentos da automação com N8N.",
        icon: "🔗",
        tags: ["Automação", "N8N", "Fundamentos"],
        url: "https://inematds.github.io/N8Nb"
    },
    {
        id: 17,
        title: "N8Np",
        description: "N8N Avançado - Domine técnicas avançadas de automação com N8N.",
        icon: "⚡",
        tags: ["Automação", "N8N", "Avançado"],
        url: "https://inematds.github.io/N8Np"
    },
    {
        id: 18,
        title: "Playbook",
        description: "Playbook de Desenvolvimento - Guia completo de boas práticas e metodologias de desenvolvimento.",
        icon: "📖",
        tags: ["Desenvolvimento", "Guia", "Metodologia"],
        url: "https://inematds.github.io/Playbook/"
    },
    {
        id: 19,
        title: "Playbook-IA",
        description: "Curso de Consultoria em IA - Formação especializada para consultores de Inteligência Artificial.",
        icon: "🎯",
        tags: ["IA", "Consultoria", "Especialização"],
        url: "https://inematds.github.io/Playbook-IA/"
    },
    {
        id: 20,
        title: "Portal INEMA",
        description: "Portal dos Projetos, Sites e Plataformas do INEMA - Acesso centralizado a todos os recursos.",
        icon: "🌐",
        tags: ["Portal", "Projetos", "Plataformas"],
        url: "https://inematds.github.io/portal/"
    },
    {
        id: 21,
        title: "Prompts",
        description: "Formação de Engenheiros de Prompts - Técnicas avançadas de engenharia de prompts para IA.",
        icon: "📝",
        tags: ["Prompts", "Engenharia", "IA"],
        url: "https://inematds.github.io/prompts/"
    },
    {
        id: 22,
        title: "Robot",
        description: "Plataforma Robot - Robótica e automação inteligente.",
        icon: "🤖",
        tags: ["Robótica", "Automação", "Robot"],
        url: "https://inematds.github.io/robot/"
    },
    {
        id: 23,
        title: "SuperProf",
        description: "SuperProf - Formação avançada para professores e educadores do futuro.",
        icon: "🎓",
        tags: ["Educação", "Professores", "Formação"],
        url: "https://inematds.github.io/SuperProf/"
    },
    {
        id: 24,
        title: "TDS",
        description: "Transformação Digital Sustentável - Curso completo sobre transformação digital com foco em sustentabilidade.",
        icon: "🌱",
        tags: ["Transformação Digital", "Sustentabilidade", "Inovação"],
        url: "https://inematds.github.io/TDS/"
    },
    {
        id: 25,
        title: "TikTok Shop",
        description: "TikTok Shop - Aprenda a vender e monetizar na plataforma TikTok Shop.",
        icon: "🛒",
        tags: ["TikTok", "E-commerce", "Vendas"],
        url: "https://inematds.github.io/tiktokshop"
    },
    {
        id: 26,
        title: "VISION",
        description: "Plataforma VISION - Visão computacional e processamento de imagens com IA.",
        icon: "👁️",
        tags: ["Visão", "IA", "Imagens"],
        url: "https://inematds.github.io/VISION/"
    }
];
