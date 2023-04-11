import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import './styles.css'
import { Box, Flex, IconButton } from '@chakra-ui/react';
import { ChevronLeft, ChevronRight, Code, Database, GitBranch, PenTool, Smartphone } from 'react-feather';

import SkillCard from './Card';

export default function Carousel() {

    const skills = [
        {
            "title": 'Como desenvolvedor React',
            "description": 'Minhas habilidades para desenvolvimento front-end web.',
            "languages": "Javascript, Typescript | Next, Create React App",
            "tools": ["Bootstrap 5", "Tailwind", "Material UI", "Chakra UI"],
            "icon": <PenTool size={30} />,
        },
        {
            "title": 'Como desenvolvedor Mobile',
            "description": 'Minhas habilidades em desenvolvimento mobile, como foco principal em JS.',
            "languages": "Javascript, Typescript, Android | React Native",
            "tools": ["Native base", "UI kitten"],
            "icon": <Smartphone size={30} />,
        },
        {
            "title": 'Como desenvolvedor PHP',
            "description": 'Minhas habilidades em desenvolvimento back-end web',
            "languages": "PHP | Laravel",
            "tools": [""],
            "icon": <Code size={30} />,
        },
        {
            "title": 'Como desenvolvedor SQL',
            "description": 'Minhas habilidades em desenvolvimento de banco de dados',
            "languages": "MySQL, MariaDB",
            "tools": [""],
            "icon": <Database size={30} />,
        },
        {
            "title": 'Como desenvolvedor back-end node',
            "description": 'Minhas habilidades em desenvolvimento de API',
            "languages": "Node, Javascript, Typescript | Express.js",
            "tools": [""],
            "icon": <Code size={30} />,
        },
        {
            "title": 'Como DevOps e microserviços',
            "description": 'Minhas habilidades em devops',
            "languages": "CLI",
            "tools": ["Docker", "Linux", "Oracle Cloud"],
            "icon": <GitBranch size={30} />,
        }

    ]

    return (
        <Box px={{ base: 0, md: 24 }} maxW={"full"}>

            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
                autoplay>

                {
                    skills.map(({ title, description, languages, tools, icon }, index) => (
                        <SwiperSlide key={index}>
                            <SkillCard
                                title={title}
                                description={description}
                                languages={languages}
                                tools={tools}
                                Icon={icon} />
                        </SwiperSlide>
                    ))
                }

                <Flex
                    className="slider-controler"
                    position={'relative'}
                    justify={'center'}
                    align={'center'}
                    bottom={"md"}>

                    <Flex
                        align={'center'}
                        justify={'center'}
                        className="swiper-button-prev slider-arrow">
                        <IconButton
                            rounded={'full'}
                            color={'golden.500'}
                            top={{ base: '-56', sm: '-52' }}
                            icon={<ChevronLeft size={70} />}
                            aria-label={'Botão de voltar slide anterior'} />
                    </Flex>

                    <Box className="swiper-button-next slider-arrow">
                        <IconButton
                            rounded={'full'}
                            color={'golden.500'}
                            top={{ base: '-56',  sm: '-52' }}
                            icon={<ChevronRight size={70} />}
                            aria-label={'Botão de avançar slide'} />
                    </Box>
                </Flex>

            </Swiper>
        </Box>
    )
}