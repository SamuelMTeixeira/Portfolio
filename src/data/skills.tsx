import { Code, Database, GitBranch, PenTool, Smartphone } from 'react-feather';

const skills = [
    {
        title: 'Desenvolvimento Front-End',
        description: 'Experiência em desenvolvimento de aplicações web com foco em interfaces modernas e responsivas.',
        languages: 'HTML, CSS, JavaScript, TypeScript | Next, React App',
        tools: ['React.js', 'Material UI', 'Chakra UI'],
        icon: <PenTool size={30} />,
    },
    {
        title: 'Desenvolvimento Mobile',
        description: 'Experiência em desenvolvimento de aplicativos mobile para Android e iOS, com foco em desempenho e usabilidade.',
        languages: 'JavaScript, TypeScript, Android',
        tools: ['React Native', 'NativeBase', 'UI Kitten'],
        icon: <Smartphone size={30} />,
    },
    {
        title: 'Desenvolvimento Back-End',
        description: 'Experiência em desenvolvimento de APIs robustas e escaláveis para suportar as necessidades de negócio.',
        languages: 'JavaScript, TypeScript, PHP, Java',
        tools: ['Node.js', 'Express.js', 'Laravel'],
        icon: <Code size={30} />,
    },
    {
        title: 'Bancos de Dados',
        description: 'Experiência em modelagem e implementação de bancos de dados para atender às necessidades de negócio.',
        languages: 'MySQL, MariaDB',
        tools: ['SQL'],
        icon: <Database size={30} />,
    },
    {
        title: 'DevOps e Infraestrutura',
        description: 'Experiência em gerenciamento de infraestrutura e aplicativos em ambientes de produção.',
        languages: 'CLI',
        tools: ['Docker', 'Linux', 'Oracle Cloud'],
        icon: <GitBranch size={30} />,
    },
];

export default skills