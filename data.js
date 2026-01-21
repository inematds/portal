// Dados dos cursos e plataformas INEMA
const platformsData = [
    {
        id: 1,
        title: "AIWCF - Vibe Coding",
        description: "AI Website Creation Framework - Aprenda a criar websites profissionais usando IA com a metodologia Vibe Coding.",
        icon: "✨",
        tags: ["Vibe Coding", "Web", "IA", "Desenvolvimento"],
        url: "https://inematds.github.io/AIWCF"
    },
    {
        id: 2,
        title: "ATIA - Oportunidades Digitais com IA",
        description: "Oportunidades Digitais com IA - Explore o mundo da Inteligência Artificial e suas aplicações práticas.",
        icon: "🤖",
        tags: ["IA", "Oportunidades", "Digital"],
        url: "https://inematds.github.io/ATIA/"
    },
    {
        id: 3,
        title: "Automação 2026",
        description: "Automação 2026 - Formação em automação e tecnologias para o futuro.",
        icon: "⚙️",
        tags: ["Automação", "Tecnologia", "2026"],
        url: "https://inematds.github.io/AUTOMACAO2026"
    },
    {
        id: 4,
        title: "BMAD Academy",
        description: "Academia de desenvolvimento com metodologia BMAD - Aprenda boas práticas de desenvolvimento.",
        icon: "🎓",
        tags: ["Desenvolvimento", "Metodologia", "Academia"],
        url: "https://inematds.github.io/BMAD-Academy/"
    },
    {
        id: 5,
        title: "Dashboard Mastery",
        description: "Supercurso de Dashboards Profissionais - Domine a criação de dashboards com Next.js e React.",
        icon: "📊",
        tags: ["Dashboard", "Next.js", "React", "Design"],
        url: "https://inematds.github.io/dash/"
    },
    {
        id: 6,
        title: "DBA-FO",
        description: "Fundamentos DBA Oracle - Formação em administração de banco de dados Oracle.",
        icon: "🗄️",
        tags: ["DBA", "Oracle", "Banco de Dados"],
        url: "https://inematds.github.io/DBA-FO/"
    },
    {
        id: 7,
        title: "EAI - Games Educativos",
        description: "Games Educativos - Aprenda através de jogos interativos e gamificação.",
        icon: "🎮",
        tags: ["Games", "Educação", "Gamificação"],
        url: "https://inematds.github.io/EAI/"
    },
    {
        id: 8,
        title: "FDB - Fundamentos de Banco de Dados",
        description: "Formação em Desenvolvimento de Base - Fundamentos essenciais para desenvolvedores.",
        icon: "💻",
        tags: ["Desenvolvimento", "Fundamentos", "Base"],
        url: "https://inematds.github.io/FDB/"
    },
    {
        id: 9,
        title: "FDF - Designers do Futuro",
        description: "Formação de Designer do Futuro - Desenvolva competências de design para a era digital.",
        icon: "🎨",
        tags: ["Design", "Futuro", "Criatividade"],
        url: "https://inematds.github.io/FDF"
    },
    {
        id: 10,
        title: "FEA-IA - Engenharia de Agentes",
        description: "Formação de Engenheiros de Agentes de IA - Aprenda a criar e gerenciar agentes inteligentes.",
        icon: "🧠",
        tags: ["IA", "Agentes", "Engenharia"],
        url: "https://inematds.github.io/FEA-IA/"
    },
    {
        id: 11,
        title: "FEI - Engenharia da Intenção",
        description: "Formação em Engenharia de Inteligência - Desenvolvimento de soluções inteligentes com IA.",
        icon: "🧪",
        tags: ["IA", "Engenharia", "Inteligência"],
        url: "https://inematds.github.io/FEI/"
    },
    {
        id: 12,
        title: "FEP - Engenharia de Prompts",
        description: "Formação de Engenheiros de Prompts - Domine a arte de criar prompts eficazes para IA.",
        icon: "✍️",
        tags: ["Prompts", "IA", "Engenharia"],
        url: "https://inematds.github.io/FEP/"
    },
    {
        id: 13,
        title: "FETD - Engenharia de Treinamentos de Dados",
        description: "Formação em Engenharia de Treinamento de Dados - Especialização em preparação e qualidade de dados para IA.",
        icon: "📊",
        tags: ["Dados", "Engenharia", "Treinamento"],
        url: "https://inematds.github.io/FETD/"
    },
    {
        id: 14,
        title: "FGMD - Gatilhos Mentais Digitais",
        description: "Formação em Gatilhos Mentais no Digital - Domine a comunicação estratégica com os 10 gatilhos mentais fundamentais.",
        icon: "🎯",
        tags: ["Comunicação", "Marketing", "Gatilhos Mentais"],
        url: "https://inematds.github.io/FGMD/"
    },
    {
        id: 15,
        title: "FIA2026",
        description: "Formação em Automações com IA 2026 - Aprenda a criar automações inteligentes com IA.",
        icon: "⚡",
        tags: ["IA", "Automação", "2026"],
        url: "https://inematds.github.io/FIA2026/"
    },
    {
        id: 16,
        title: "FTD - Formação Transformação Digital",
        description: "Formação Técnica Digital - Capacitação técnica para o mundo digital e tecnológico.",
        icon: "⚙️",
        tags: ["Técnico", "Digital", "Tecnologia"],
        url: "https://inematds.github.io/FTD/"
    },
    {
        id: 17,
        title: "FTH - Treinamento de Humanoides",
        description: "Formação para Treinamento de Humanoides - Capacitação em robótica e interação humano-robô.",
        icon: "🤖",
        tags: ["Robótica", "Humanoides", "Treinamento"],
        url: "https://inematds.github.io/FTH/"
    },
    {
        id: 18,
        title: "GitHub",
        description: "Repositórios e projetos INEMA no GitHub - Código aberto e colaboração.",
        icon: "🐙",
        tags: ["GitHub", "Código", "Colaboração"],
        url: "https://inematds.github.io/github/"
    },
    {
        id: 19,
        title: "GIPM - Projetos com IA Governada",
        description: "Método de Projetos com IA Governada - Aprenda a construir projetos onde a IA é um componente controlado, não o decisor.",
        icon: "🏛️",
        tags: ["IA", "Projetos", "Governança", "Arquitetura"],
        url: "https://inematds.github.io/GIPM/"
    },
    {
        id: 20,
        title: "HG1 - Academia dos Humanoides G1",
        description: "Academias dos Humanoides - Formação especializada em robótica humanoide e interação avançada.",
        icon: "🤖",
        tags: ["Humanoides", "Academia", "Robótica"],
        url: "https://inematds.github.io/HG1"
    },
    {
        id: 21,
        title: "MAKE - Automações",
        description: "Curso Completo de Automação - Domine automação no-code com Make e IA.",
        icon: "⚡",
        tags: ["Automação", "Make", "No-Code", "IA"],
        url: "https://inematds.github.io/MAKE/"
    },
    {
        id: 22,
        title: "N8Nb - Fundamentos N8N",
        description: "Fundamentos de N8N - Aprenda os fundamentos da automação com N8N.",
        icon: "🔗",
        tags: ["Automação", "N8N", "Fundamentos"],
        url: "https://inematds.github.io/N8Nb"
    },
    {
        id: 23,
        title: "N8Np",
        description: "N8N Avançado - Domine técnicas avançadas de automação com N8N.",
        icon: "⚡",
        tags: ["Automação", "N8N", "Avançado"],
        url: "https://inematds.github.io/N8Np"
    },
    {
        id: 24,
        title: "NanoBanana - SuperCurso Nano Banana",
        description: "SuperCurso Nano Banana - Curso especial de formação acelerada.",
        icon: "🍌",
        tags: ["Curso", "Formação", "Nano"],
        url: "https://inematds.github.io/NanoBanana/"
    },
    {
        id: 25,
        title: "Playbook - Formação Consultor IA - Inglês",
        description: "Playbook de Desenvolvimento - Guia completo de boas práticas e metodologias de desenvolvimento.",
        icon: "📖",
        tags: ["Desenvolvimento", "Guia", "Metodologia"],
        url: "https://inematds.github.io/Playbook/"
    },
    {
        id: 26,
        title: "Playbook-IA - Formação de Consultoria IA",
        description: "Curso de Consultoria em IA - Formação especializada para consultores de Inteligência Artificial.",
        icon: "🎯",
        tags: ["IA", "Consultoria", "Especialização"],
        url: "https://inematds.github.io/Playbook-IA/"
    },
    {
        id: 27,
        title: "Portal INEMA",
        description: "Portal dos Projetos, Sites e Plataformas do INEMA - Acesso centralizado a todos os recursos.",
        icon: "🌐",
        tags: ["Portal", "Projetos", "Plataformas"],
        url: "https://inematds.github.io/portal/"
    },
    {
        id: 28,
        title: "Prompts",
        description: "Formação de Engenheiros de Prompts - Técnicas avançadas de engenharia de prompts para IA.",
        icon: "📝",
        tags: ["Prompts", "Engenharia", "IA"],
        url: "https://inematds.github.io/prompts/"
    },
    {
        id: 29,
        title: "Robot",
        description: "Plataforma Robot - Robótica e automação inteligente.",
        icon: "🤖",
        tags: ["Robótica", "Automação", "Robot"],
        url: "https://inematds.github.io/robot/"
    },
    {
        id: 30,
        title: "SHIA - Super Humanos Inteligência Ampliada",
        description: "Super Humanos Inteligência Ampliada - Formação para potencializar capacidades humanas com IA.",
        icon: "🧬",
        tags: ["IA", "Super Humanos", "Inteligência"],
        url: "https://inematds.github.io/SHIA/"
    },
    {
        id: 31,
        title: "SuperProf",
        description: "SuperProf - Formação avançada para professores e educadores do futuro.",
        icon: "🎓",
        tags: ["Educação", "Professores", "Formação"],
        url: "https://inematds.github.io/SuperProf/"
    },
    {
        id: 32,
        title: "TDS",
        description: "Transformação Digital Sustentável - Curso completo sobre transformação digital com foco em sustentabilidade.",
        icon: "🌱",
        tags: ["Transformação Digital", "Sustentabilidade", "Inovação"],
        url: "https://inematds.github.io/TDS/"
    },
    {
        id: 33,
        title: "TikTok Shop",
        description: "TikTok Shop - Aprenda a vender e monetizar na plataforma TikTok Shop.",
        icon: "🛒",
        tags: ["TikTok", "E-commerce", "Vendas"],
        url: "https://inematds.github.io/tiktokshop"
    },
    {
        id: 34,
        title: "VISION",
        description: "Plataforma VISION - Visão computacional e processamento de imagens com IA.",
        icon: "👁️",
        tags: ["Visão", "IA", "Imagens"],
        url: "https://inematds.github.io/VISION/"
    },
    {
        id: 35,
        title: "VisionPro - Construção Audiovisual com IA",
        description: "Método Prático de Construção Audiovisual com IA - Crie conteúdo audiovisual profissional usando IA como colaborador criativo.",
        icon: "🎬",
        tags: ["Audiovisual", "IA", "Filmes", "Curtas", "Cinema"],
        url: "https://inematds.github.io/VisionPro"
    },
    {
        id: 36,
        title: "WebP - Designer 2026",
        description: "Web Presence na Era da IA - Aprenda a linguagem visual que as IAs entendem. Domine princípios de design para orientar IAs generativas.",
        icon: "🎨",
        tags: ["Design", "IA", "Web", "UI/UX", "2026"],
        url: "https://inematds.github.io/webp"
    }
];

// Histórico de atualizações recentes (mais recentes primeiro)
const updatesData = [
    { date: "2026-01-21", title: "WebP - Designer 2026", type: "novo", url: "https://inematds.github.io/webp" },
    { date: "2026-01-21", title: "AIWCF - Vibe Coding", type: "novo", url: "https://inematds.github.io/AIWCF" },
    { date: "2026-01-16", title: "GIPM - Projetos com IA Governada", type: "novo", url: "https://inematds.github.io/GIPM/" },
    { date: "2026-01-15", title: "VisionPro - Construção Audiovisual com IA", type: "atualizado", url: "https://inematds.github.io/VisionPro" },
    { date: "2026-01-14", title: "VisionPro - Construção Audiovisual com IA", type: "novo", url: "https://inematds.github.io/VisionPro" },
    { date: "2026-01-13", title: "FGMD - Gatilhos Mentais Digitais", type: "novo", url: "https://inematds.github.io/FGMD/" },
    { date: "2026-01-12", title: "MAKE - Automações", type: "novo", url: "https://inematds.github.io/MAKE/" },
    { date: "2026-01-10", title: "FEA-IA - Engenharia de Agentes", type: "atualizado", url: "https://inematds.github.io/FEA-IA/" },
    { date: "2026-01-08", title: "N8Nb - Fundamentos N8N", type: "atualizado", url: "https://inematds.github.io/N8Nb" },
    { date: "2026-01-05", title: "FEP - Engenharia de Prompts", type: "atualizado", url: "https://inematds.github.io/FEP/" },
    { date: "2026-01-03", title: "Dashboard Mastery", type: "atualizado", url: "https://inematds.github.io/dash/" },
    { date: "2025-12-28", title: "Playbook-IA - Formação de Consultoria IA", type: "novo", url: "https://inematds.github.io/Playbook-IA/" },
    { date: "2025-12-25", title: "SHIA - Super Humanos Inteligência Ampliada", type: "atualizado", url: "https://inematds.github.io/SHIA/" },
    { date: "2025-12-20", title: "FTH - Treinamento de Humanoides", type: "novo", url: "https://inematds.github.io/FTH/" },
    { date: "2025-12-18", title: "HG1 - Academia dos Humanoides G1", type: "atualizado", url: "https://inematds.github.io/HG1" },
    { date: "2025-12-15", title: "ATIA - Oportunidades Digitais com IA", type: "atualizado", url: "https://inematds.github.io/ATIA/" },
    { date: "2025-12-12", title: "FIA2026", type: "novo", url: "https://inematds.github.io/FIA2026/" },
    { date: "2025-12-10", title: "BMAD Academy", type: "atualizado", url: "https://inematds.github.io/BMAD-Academy/" },
    { date: "2025-12-08", title: "SuperProf", type: "novo", url: "https://inematds.github.io/SuperProf/" },
    { date: "2025-12-05", title: "TDS", type: "atualizado", url: "https://inematds.github.io/TDS/" },
    { date: "2025-12-01", title: "NanoBanana - SuperCurso Nano Banana", type: "novo", url: "https://inematds.github.io/NanoBanana/" }
];
