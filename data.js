// Dados dos cursos e plataformas INEMA
const platformsData = [
    {
        id: 1,
        title: "ATIA",
        description: "Oportunidades Digitais com IA - Explore o mundo da Inteligência Artificial e suas aplicações práticas.",
        icon: "🤖",
        tags: ["IA", "Oportunidades", "Digital"],
        url: "https://inematds.github.io/ATIA/"
    },
    {
        id: 2,
        title: "BMAD Academy",
        description: "Academia de desenvolvimento com metodologia BMAD - Aprenda boas práticas de desenvolvimento.",
        icon: "🎓",
        tags: ["Desenvolvimento", "Metodologia", "Academia"],
        url: "https://inematds.github.io/BMAD-Academy/"
    },
    {
        id: 3,
        title: "FDB",
        description: "Formação em Desenvolvimento de Base - Fundamentos essenciais para desenvolvedores.",
        icon: "💻",
        tags: ["Desenvolvimento", "Fundamentos", "Base"],
        url: "https://inematds.github.io/FDB/"
    },
    {
        id: 4,
        title: "FEA-IA",
        description: "Formação de Engenheiros de Agentes de IA - Aprenda a criar e gerenciar agentes inteligentes.",
        icon: "🧠",
        tags: ["IA", "Agentes", "Engenharia"],
        url: "https://inematds.github.io/FEA-IA/"
    },
    {
        id: 5,
        title: "FEI",
        description: "Formação em Engenharia de Inteligência - Desenvolvimento de soluções inteligentes com IA.",
        icon: "🧪",
        tags: ["IA", "Engenharia", "Inteligência"],
        url: "https://inematds.github.io/FEI/"
    },
    {
        id: 6,
        title: "FEP",
        description: "Formação de Engenheiros de Prompts - Domine a arte de criar prompts eficazes para IA.",
        icon: "✍️",
        tags: ["Prompts", "IA", "Engenharia"],
        url: "https://inematds.github.io/FEP/"
    },
    {
        id: 7,
        title: "FETD",
        description: "Formação em Engenharia de Treinamento de Dados - Especialização em preparação e qualidade de dados para IA.",
        icon: "📊",
        tags: ["Dados", "Engenharia", "Treinamento"],
        url: "https://inematds.github.io/FETD/"
    },
    {
        id: 8,
        title: "FDF",
        description: "Formação de Designer do Futuro - Desenvolva competências de design para a era digital.",
        icon: "🎨",
        tags: ["Design", "Futuro", "Criatividade"],
        url: "https://inematds.github.io/FDF"
    },
    {
        id: 9,
        title: "FTD",
        description: "Formação Técnica Digital - Capacitação técnica para o mundo digital e tecnológico.",
        icon: "⚙️",
        tags: ["Técnico", "Digital", "Tecnologia"],
        url: "https://inematds.github.io/FTD/"
    },
    {
        id: 10,
        title: "FTH",
        description: "Formação para Treinamento de Humanoides - Capacitação em robótica e interação humano-robô.",
        icon: "🤖",
        tags: ["Robótica", "Humanoides", "Treinamento"],
        url: "https://inematds.github.io/FTH/"
    },
    {
        id: 11,
        title: "GitHub",
        description: "Repositórios e projetos INEMA no GitHub - Código aberto e colaboração.",
        icon: "🐙",
        tags: ["GitHub", "Código", "Colaboração"],
        url: "https://inematds.github.io/github/"
    },
    {
        id: 12,
        title: "HG1",
        description: "Academias dos Humanoides - Formação especializada em robótica humanoide e interação avançada.",
        icon: "🤖",
        tags: ["Humanoides", "Academia", "Robótica"],
        url: "https://inematds.github.io/HG1"
    },
    {
        id: 13,
        title: "N8Nb",
        description: "Fundamentos de N8N - Aprenda os fundamentos da automação com N8N.",
        icon: "🔗",
        tags: ["Automação", "N8N", "Fundamentos"],
        url: "https://inematds.github.io/N8Nb"
    },
    {
        id: 14,
        title: "N8Np",
        description: "N8N Avançado - Domine técnicas avançadas de automação com N8N.",
        icon: "⚡",
        tags: ["Automação", "N8N", "Avançado"],
        url: "https://inematds.github.io/N8Np"
    },
    {
        id: 15,
        title: "Playbook",
        description: "Playbook de Desenvolvimento - Guia completo de boas práticas e metodologias de desenvolvimento.",
        icon: "📖",
        tags: ["Desenvolvimento", "Guia", "Metodologia"],
        url: "https://inematds.github.io/Playbook/"
    },
    {
        id: 16,
        title: "Playbook-IA",
        description: "Curso de Consultoria em IA - Formação especializada para consultores de Inteligência Artificial.",
        icon: "🎯",
        tags: ["IA", "Consultoria", "Especialização"],
        url: "https://inematds.github.io/Playbook-IA/"
    },
    {
        id: 17,
        title: "Portal INEMA",
        description: "Portal dos Projetos, Sites e Plataformas do INEMA - Acesso centralizado a todos os recursos.",
        icon: "🌐",
        tags: ["Portal", "Projetos", "Plataformas"],
        url: "https://inematds.github.io/portal/"
    },
    {
        id: 18,
        title: "Prompts",
        description: "Formação de Engenheiros de Prompts - Técnicas avançadas de engenharia de prompts para IA.",
        icon: "📝",
        tags: ["Prompts", "Engenharia", "IA"],
        url: "https://inematds.github.io/prompts/"
    },
    {
        id: 19,
        title: "Robot",
        description: "Plataforma Robot - Robótica e automação inteligente.",
        icon: "🤖",
        tags: ["Robótica", "Automação", "Robot"],
        url: "https://inematds.github.io/robot/"
    },
    {
        id: 20,
        title: "SuperProf",
        description: "SuperProf - Formação avançada para professores e educadores do futuro.",
        icon: "🎓",
        tags: ["Educação", "Professores", "Formação"],
        url: "https://inematds.github.io/SuperProf/"
    },
    {
        id: 21,
        title: "TDS",
        description: "Transformação Digital Sustentável - Curso completo sobre transformação digital com foco em sustentabilidade.",
        icon: "🌱",
        tags: ["Transformação Digital", "Sustentabilidade", "Inovação"],
        url: "https://inematds.github.io/TDS/"
    },
    {
        id: 22,
        title: "VISION",
        description: "Plataforma VISION - Visão computacional e processamento de imagens com IA.",
        icon: "👁️",
        tags: ["Visão", "IA", "Imagens"],
        url: "https://inematds.github.io/VISION/"
    },
    {
        id: 23,
        title: "TikTok Shop",
        description: "TikTok Shop - Aprenda a vender e monetizar na plataforma TikTok Shop.",
        icon: "🛒",
        tags: ["TikTok", "E-commerce", "Vendas"],
        url: "https://inematds.github.io/tiktokshop"
    }
];
