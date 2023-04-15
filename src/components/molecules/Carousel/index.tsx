import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import './styles.css'
import { Box, Flex, IconButton } from '@chakra-ui/react';
import { ChevronLeft, ChevronRight } from 'react-feather';

import SkillCard from './Card';

import skills from '@/data/skills';

export default function Carousel() {

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
                            top={{ base: '-56', sm: '-52' }}
                            icon={<ChevronRight size={70} />}
                            aria-label={'Botão de avançar slide'} />
                    </Box>
                </Flex>

            </Swiper>
        </Box>
    )
}