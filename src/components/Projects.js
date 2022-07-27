import React from 'react'
import '../assets/css/Projects.css'

import { Container, Row, Col, Nav, Tab } from 'react-bootstrap'
import ProjectCard from './ProjectCard';

import imgProj1 from '../assets/img/project-img1.png';
import imgProj2 from '../assets/img/project-img2.png';
import imgProj3 from '../assets/img/project-img3.png';
import colorSharp2 from '../assets/img/color-sharp2.png'

const FrontProjects = [
    {
        id: 0,
        title: "PingCast - Plataforma de podcasts de tecnologia",
        description: "Desenvolvido em React.JS",
        imgUrl: imgProj1
    },
    {
        id: 1,
        title: "PetShop",
        description: "Desenvolvido em React.JS",
        imgUrl: imgProj2
    },
    {
        id: 2,
        title: "Newsletter",
        description: "Desenvolvido em React.JS",
        imgUrl: imgProj3
    }
]

const BackProjects = [
    {
        id: 0,
        title: "Sistema hospitalar",
        description: "Desenvolvido em Java",
        imgUrl: imgProj1
    },
    {
        id: 2,
        title: "PSC Lava-Jato",
        description: "Desenvolvedor Java",
        imgUrl: imgProj3
    }
]

const MobileProjects = [
    {
        id: 0,
        title: "Em desenvolvimento",
        description: "Desenvolvendo em Java",
        imgUrl: imgProj1
    },
]

const Projects = () => {
    return (
        <section id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Meus projetos</h2>
                        <p>Dê uma olhadinha em alguns abaixo!</p>
                        <Tab.Container id='projects-tabs' defaultActiveKey={'first'}>
                            <Nav variant='pills' defaultActiveKey={'first'}>
                                <Nav.Item>
                                    <Nav.Link eventKey='first' >Front-End</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey='second'>Back-End</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey='third' >Mobile</Nav.Link>
                                </Nav.Item>
                            </Nav>

                            <Tab.Content>
                                <Tab.Pane eventKey={'first'}>
                                    <Row>
                                        {FrontProjects.map(projeto => {
                                            return (
                                                <ProjectCard key={projeto.id}
                                                    {...projeto} />
                                            )
                                        })}
                                    </Row>
                                </Tab.Pane>

                                <Tab.Pane eventKey={'second'}>
                                    <Row>
                                        {BackProjects.map(projeto => {
                                            return (
                                                <ProjectCard key={projeto.id}
                                                    {...projeto} />
                                            )
                                        })}
                                    </Row>
                                </Tab.Pane>

                                <Tab.Pane eventKey={'third'}>
                                    <Row>
                                        {MobileProjects.map(projeto => {
                                            return (
                                                <ProjectCard key={projeto.id}
                                                    {...projeto} />
                                            )
                                        })}
                                    </Row>
                                </Tab.Pane>

                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp2} className='background-image-right' alt='Background right' />
        </section>
    )
}

export default Projects