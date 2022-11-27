// Imagens front
import MundoDasMontanhas from '../assets/img/projects/mundodasmontanhas.png'
import PingCast from '../assets/img/projects/pingcast.png'
import SpotifyHTML from '../assets/img/projects/spotify-clone-html.png'
import FacebookClone from '../assets/img/projects/facebook-clone.png'
import ChaleHotel from '../assets/img/projects/ChaleHotel.png'
import CacaMosquito from '../assets/img/projects/CacaMosquito.png'
import NewsletterBasic from '../assets/img/projects/NewsletterBasic.png'
import Finans from '../assets/img/projects/finans.png'
import DataLock from '../assets/img/projects/datalock.png'
import Petshop from '../assets/img/projects/petshop.png'

// Imgs back
import SisC from '../assets/img/projects/sis-gerenciamento-em-c.png'

export const FrontProjects = [
    {
        title: "PingCast",
        description: "Uma plataforma de Podcasts dedicado à tecnologia demandada pelo professor, o objetivo era desenvolver o software em conjunto com outros colegas de sala, melhorando as soft skills e aplicando a metodologia de desenvolvimento RUP (IBM Rational Unified Process) na prática. Nesse projeto, fui encarregador de desenvolver as interfaces, desde a prototipação à UX deste. Nela pude aprofundar mais no ecossistema Javascript, incluindo a familiarização de kits UI como o utilizado Material UI e consumo de API's REST.",
        repoUrl: 'https://github.com/IFNMG-teo-Development-team/pingcast-client',
        tecnologias: ['React.js', 'CSS', 'Tailwind', 'Material UI', 'React Router', 'Axios'],

        imgUrl: PingCast,
        previewUrl: 'https://pingcast.vercel.app',
    },
    {
        title: "DataLock - Gerenciador de senhas",
        description: "Gerenciador de senhas desenvolvido em Laravel 9, na qual pude aprender mais sobre o framework. Nele, além de aprender mais sobre o framework, também pude me familiarizar com o padrão de projetos MVC (Model-View-Controller) e trabalhar com a API de autentificação Oath2 do Google",
        repoUrl: 'https://github.com/SamuelMTeixeira/password_manager',
        tecnologias: ['HTML', 'CSS', 'Tailwind', 'Javascript', 'PHP', 'Laravel', 'Docker', 'MySQL'],

        imgUrl: DataLock,
        previewDisable: true
    },
    {
        title: "PetShop",
        description: "Um simples website para um petshop, um projeto desenvolvido junto ao curso da Alura na qual o objetivo era aprender sobre a biblioteca React Router para criar rotas para a aplicação, nele também usado a biblioteca Axios para consumir a API através do JSON server.",
        repoUrl: 'https://github.com/SamuelMTeixeira/PetShop',
        tecnologias: ['React.js', 'CSS', 'Tailwind', 'Material UI', 'React Router', 'Axios'],

        imgUrl: Petshop,
        previewDisable: true
    },
    {
        title: "Facebook clone",
        description: "Clone da rede social Facebook desenvolvido em PHP puro a partir de um container Docker, nela pude treinar as habilidades de Front com o objetivo de deixar semelhante à rede social original, como também desenvolver todo o back-end com PHP, trabalhando com autentificações de usuário (usuário comum e admin), gerenciamento de imagens e outros recursos.",
        repoUrl: 'https://github.com/SamuelMTeixeira/facebook-clone',
        tecnologias: ['HTML', 'CSS', 'Javascript', 'PHP', 'Docker', 'MariaDB'],

        imgUrl: FacebookClone,
        previewDisable: true
    },
    {
        title: "Mundo das montanhas",
        description: "A idéia do software era desenvolver um versão moderna para o blog do meu pai. Esse por sua vez, por ser um dos meus primeiros sites, pude aprender e aperfeiçoar mais sobre as tecnologias da web, além de estar desenvolvendo meu primeiro protótipo utilizando a ferramenta figma.",
        repoUrl: 'https://github.com/SamuelMTeixeira/Mundo-das-montanhas',
        tecnologias: ['HTML', 'CSS', 'JavaScript'],

        imgUrl: MundoDasMontanhas,
        previewUrl: 'https://samuelmteixeira.github.io/Mundo-das-montanhas/',
    },
    {
        title: "Newsletter plataform",
        description: "Uma simples plataforma para newsletter desenvolvido para praticar o framework Tailwind CSS, afim de aperfeiçoar e familiarizar com o framework utilizando com guia o curso da Alura.",
        repoUrl: 'https://github.com/SamuelMTeixeira/Newsletter-with-tailwind',
        tecnologias: ['HTML', 'CSS', 'Tailwind'],

        imgUrl: NewsletterBasic,
        previewUrl: 'https://samuelmteixeira.github.io/Newsletter-with-tailwind/',
    },
    {
        title: "Finans",
        description: "Um dos meus projetos iniciais em Web, neste site eu pude aprender mais sobre javascript, na qual apliquei o uso do local storage par armazenar algumas finanças. Além também de aplicar o framework Boostrap para a estilização do software.",
        repoUrl: 'https://github.com/SamuelMTeixeira/site-para-gestao-financeira',
        tecnologias: ['HTML', 'CSS', 'Javascript'],

        imgUrl: Finans,
        previewUrl: 'https://samuelmteixeira.github.io/site-para-gestao-financeira/',
    },
    {
        title: "Jogo caça mosquito",
        description: "Jogo desenvolvido em JavaScript puro com uma interface simples porém funcional, o objetivo do jogo era utilizar o mouse como raquete e tentar caçar os mosquitos sem errar e acumular pontos até o tempo acabar. Nele pude aprender mais afundo o JS, praticando conceitos da linguagem e também exercitando a criação de algoritmos mais completos para o posicionamento randomico de objetos, e também de eventos para captura do mouse.",
        repoUrl: 'https://github.com/SamuelMTeixeira/Jogo-mata-mosquito',
        tecnologias: ['HTML', 'CSS', 'JavaScript'],

        imgUrl: CacaMosquito,
        previewUrl: 'https://samuelmteixeira.github.io/Jogo-mata-mosquito/',
    },
    {
        title: "Spotify Clone",
        description: "Um dos meus projetos iniciais em desenvolvimento Web, neste site eu refiz a página inicial do spotify (2020) todo em HTML/ CSS afim de trabalhar recursos recém aprendidos na época, como princípios de responsividade da página e criação do elemento carousel e etc.",
        repoUrl: 'https://github.com/SamuelMTeixeira/spotify-clone',
        tecnologias: ['HTML', 'CSS'],

        imgUrl: SpotifyHTML,
        previewUrl: 'https://samuelmteixeira.github.io/spotify-clone/',
    },
    {
        title: "Chalé Hotel",
        description: "Meu primeiro projeto web utilizando apenas html/css, nele eu desenvolvi uma landing Page para um hotel fictício na qual coloquei em prática conceitos de CSS, aprendendo mais sobre posicionamentos como grid e flex, além de conhecer propriedades novas",
        repoUrl: 'https://github.com/SamuelMTeixeira/front-end-chale',
        tecnologias: ['HTML', 'CSS'],

        imgUrl: ChaleHotel,
        previewUrl: 'https://samuelmteixeira.github.io/front-end-chale/',
    },
]

export const BackProjects = [
    {
        title: "Sistema de gerenciamento hospitalar",
        description: "Meu primeiro sistema 'completo' desenvolvido em C, no início da faculdade em 2020. Utilizando conceitos de alocação dinâmica, pilha e fila, utilização de ponteiros, exportação de dados para .txt e outros conceitos da linguagem",
        repoUrl: 'https://github.com/SamuelMTeixeira/sistema-hospitalar-c',
        tecnologias: ['C'],

        imgUrl: SisC,
        previewDisable: true
    },
]

export const MobileProjects = [

]