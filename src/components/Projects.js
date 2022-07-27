import React from 'react'
import '../assets/css/Projects.css'

import { Container, Row, Col, Nav, Tab } from 'react-bootstrap'
import ProjectCard from './ProjectCard';

import colorSharp2 from '../assets/img/color-sharp2.png'

import { FrontProjects, BackProjects, MobileProjects } from '../data/MyProjects'

const Projects = () => {
    return (
        <section id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Meus projetos</h2>
                        <p>Dê uma olhadinha em alguns abaixo!</p>
                        <Tab.Container id='projects-tabs' defaultActiveKey={'first'}>
                            <Nav variant='pills' className="nav-pills mb-5 justify-content-center align-items-center" defaultActiveKey={'first'}>
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