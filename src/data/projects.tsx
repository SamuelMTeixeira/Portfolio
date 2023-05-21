import { StaticImageData } from 'next/image';

// Projects
import overhands from '@assets/img/projects/nopreview.jpg'
import ifgraph from '@assets/img/projects/nopreview.jpg'

interface ICard {
    id: number;
    title: string;
    repo?: string;
    preview?: string;
    description: string;
    image: string | StaticImageData;
}


const projects: ICard[] = [
    {
        id: 0,
        title: 'Grafo de Conhecimento dos Institutos',
        description: 'Grafo de conhecimento que conecta todos os Institutos Federais do Brasil através dos dados abertos. Utilizando web semântica (web 3.0), JavaScript/TypeScript, GraphQL e Apollo Server, esta aplicação inovadora revela a interconectividade entre as instituições, oferecendo uma experiência envolvente.',
        image: ifgraph,
    },
    {
        id: 1,
        title: 'Overhands: aprenda Libras',
        description: 'Aplicativo móvel para auxiliar na aprendizagem da Língua de Sinais. Desenvolvido em React Native, este projeto é o resultado do meu trabalho de conclusão de curso e possui o objetivo de auxiliar na aprendizagem da Língua Brasileira de Sinais (Libras). O aplicativo visa promover a inclusão e a comunicação entre surdos e ouvintes, fornecendo recursos interativos e educacionais. Com o compromisso de tornar a aprendizagem de Libras acessível, este projeto busca contribuir para um futuro mais inclusivo. O artigo relacionado a este projeto será publicado em breve, compartilhando os resultados e insights obtidos durante o desenvolvimento.',
        image: overhands,
        repo: 'https://github.com/SamuelMTeixeira/api-overhands'
    }
]

export default projects