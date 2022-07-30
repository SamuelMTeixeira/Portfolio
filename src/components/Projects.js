import React from 'react'
import '../assets/css/Projects.css'

import { Container, Row, Col, Nav, Tab } from 'react-bootstrap'
import ProjectCard from './ProjectCard';

import { FrontProjects, BackProjects, MobileProjects } from '../data/MyProjects'

const Projects = () => {
    return (
        <section id="projects">
            
            <Container>
                <Row>
                    <Col>
                        <h2>Meus projetos</h2>
                        <p>Dê uma olhadinha em alguns que deixei separados abaixo!</p>
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
                                        {FrontProjects
                                            .filter((projeto, index) => index < 2)
                                            .map((projeto, index) => {
                                                return (
                                                    <ProjectCard key={index}
                                                        {...projeto} />
                                                )
                                            })}
                                    </Row>
                                </Tab.Pane>

                                <Tab.Pane eventKey={'second'}>
                                    <Row>
                                        {BackProjects
                                            .filter((projeto, index) => index < 2)
                                            .map((projeto, index) => {
                                                return (
                                                    <ProjectCard key={index}
                                                        {...projeto} />
                                                )
                                            })}
                                    </Row>
                                </Tab.Pane>

                                <Tab.Pane eventKey={'third'}>
                                    <Row>
                                        {MobileProjects
                                            .filter((projeto, index) => index < 2)
                                            .map((projeto, index) => {
                                                return (
                                                    <ProjectCard key={index}
                                                        {...projeto} previewDisable />
                                                )
                                            })}
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                            <span className='d-flex align-items-center justify-content-center see-more mt-4'><a href='/projects' className='btn'>Ver todos os projetos</a></span>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Projects