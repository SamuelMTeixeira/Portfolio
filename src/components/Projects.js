import React, { useState } from 'react'
import '../assets/css/Projects.css'

import { Container, Row, Col, Nav, Tab } from 'react-bootstrap'
import ProjectCard from './ProjectCard';

import { FrontProjects, BackProjects, MobileProjects } from '../data/MyProjects'

const Projects = () => {
    const [showQtdProjects, setQtdProjects] = useState(2)
    const [ElementProjects, setElementProjects] = useState('front')

    const handleClick = () => { {showQtdProjects === 2 ? setQtdProjects(FrontProjects.length) : setQtdProjects(2)} }

    const handleChange = (e) => {
        if (!(e === ElementProjects)) {
            setQtdProjects(2)
            setElementProjects(e)
        }
    }

    return (
        <section id="projects">

            <Container>
                <Row>
                    <Col>
                        <h2>Meus projetos</h2>
                        <p>Dê uma olhadinha em alguns logo abaixo!</p>
                        <Tab.Container id='projects-tabs' defaultActiveKey={'first'}>
                            <Nav variant='pills' className="nav-pills mb-5 justify-content-center align-items-center" defaultActiveKey={'first'}>
                                <Nav.Item onClick={() => handleChange('front')}>
                                    <Nav.Link eventKey='first' >Front-End</Nav.Link>
                                </Nav.Item>

                                <Nav.Item onClick={() => handleChange('back')}>
                                    <Nav.Link eventKey='second'>Back-End</Nav.Link>
                                </Nav.Item>

                                <Nav.Item onClick={() => handleChange('mobile')}>
                                    <Nav.Link eventKey='third' >Mobile</Nav.Link>
                                </Nav.Item>
                            </Nav>

                            <Tab.Content onClick={() => handleChange()}>
                                <Tab.Pane eventKey={'first'}>
                                    <Row>
                                        {FrontProjects
                                            .filter((projeto, index) => index < showQtdProjects)
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
                                            .filter((projeto, index) => index < showQtdProjects)
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
                                            .filter((projeto, index) => index < showQtdProjects)
                                            .map((projeto, index) => {
                                                return (
                                                    <ProjectCard key={index}
                                                        {...projeto} previewDisable />
                                                )
                                            })}
                                    </Row>
                                </Tab.Pane>

                            </Tab.Content>
                            <span className='d-flex align-items-center justify-content-center see-more mt-4'>
                                <button onClick={() => handleClick()} className='btn d-flex flex-column align-items-center'>
                                    {showQtdProjects === 2 ? 'Ver mais projetos' : 'Ver menos projetos'}
                                </button>
                            </span>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Projects