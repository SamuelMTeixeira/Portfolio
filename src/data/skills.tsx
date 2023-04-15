import { Code, Database, GitBranch, PenTool, Smartphone } from 'react-feather';

const skills = [
    {
        title: 'Como desenvolvedor React',
        description: 'Minhas habilidades para desenvolvimento front-end web.',
        languages: 'Javascript, Typescript | Next, Create React App',
        tools: ['Bootstrap 5', 'Tailwind', 'Material UI', 'Chakra UI'],
        icon: <PenTool size={30} />,
    },
    {
        title: 'Como desenvolvedor Mobile',
        description: 'Minhas habilidades em desenvolvimento mobile, como foco principal em JS.',
        languages: 'Javascript, Typescript, Android | React Native',
        tools: ['Native base', 'UI kitten'],
        icon: <Smartphone size={30} />,
    },
    {
        title: 'Como desenvolvedor PHP',
        description: 'Minhas habilidades em desenvolvimento back-end web',
        languages: 'PHP | Laravel',
        tools: [''],
        icon: <Code size={30} />,
    },
    {
        title: 'Como desenvolvedor SQL',
        description: 'Minhas habilidades em desenvolvimento de banco de dados',
        languages: 'MySQL, MariaDB',
        tools: [''],
        icon: <Database size={30} />,
    },
    {
        title: 'Como desenvolvedor back-end node',
        description: 'Minhas habilidades em desenvolvimento de API',
        languages: 'Node, Javascript, Typescript | Express.js',
        tools: [''],
        icon: <Code size={30} />,
    },
    {
        title: 'Como DevOps e microserviços',
        description: 'Minhas habilidades em devops',
        languages: 'CLI',
        tools: ['Docker', 'Linux', 'Oracle Cloud'],
        icon: <GitBranch size={30} />,
    },
]


export default skills