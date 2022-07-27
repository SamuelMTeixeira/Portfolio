import React from 'react'
import '../assets/css/Skills.css'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Row, Col } from 'react-bootstrap'
import SkillBar from './SkillBar'
import { listSkills } from '../data/MySkills'
import colorSharp from '../assets/img/color-sharp.png'

// JSON DO CAROUSEL
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Skills = () => {
    return (
        <section id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className='skills-box'>
                            <h2>Minhas habilidades</h2>
                            <p>Aqui vai uma lista de skills que adquiri ao decorrer dessa caminhada</p>
                            <Carousel responsive={responsive} infinite={true} className={"skill-slider"}>
                                {listSkills.map(skill => (
                                    <div className='item' key={skill.id}>
                                        <span><SkillBar className='skillbar-item' percent={skill.percent} /></span>
                                        <h5 className='mt-3'>{skill.name}</h5>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp} className="background-image-left" alt='background com luz suave' />
        </section>
    )
}
export default Skills