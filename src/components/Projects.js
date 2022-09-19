import React, { useState } from 'react'
import '../assets/css/Projects.css'

import { Container, Row, Col, Nav, Tab } from 'react-bootstrap'
import ProjectCard from './ProjectCard';

import { FrontProjects, BackProjects, MobileProjects } from '../data/MyProjects'
import { UIButton } from './UIComponents';

const Projects = () => {
    const [showQtdProjects, setQtdProjects] = useState(2)
    const [ElementProjects, setElementProjects] = useState('front')

    const handleClick = () => {
        if (ElementProjects === 'front')
            showQtdProjects === 2 ? setQtdProjects(FrontProjects.length) : setQtdProjects(2)

        else if (ElementProjects === 'back')
            showQtdProjects === 2 ? setQtdProjects(BackProjects.length) : setQtdProjects(2)

        if (ElementProjects === 'mobile')
            showQtdProjects === 2 ? setQtdProjects(MobileProjects.length) : setQtdProjects(2)
    }

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
                                    <Nav.Link eventKey='first'>Web</Nav.Link>
                                </Nav.Item>

                                <Nav.Item onClick={() => handleChange('back')}>
                                    <Nav.Link eventKey='second'>Desktop</Nav.Link>
                                </Nav.Item>

                                <Nav.Item onClick={() => handleChange('mobile')}>
                                    <Nav.Link eventKey='third' >Mobile</Nav.Link>
                                </Nav.Item>
                            </Nav>

                            <Tab.Content>
                                <Tab.Pane eventKey={'first'}>
                                    <Row>
                                        {FrontProjects.length === 0 ? <p>Projetos ainda não adicionados, volte outra hora!</p> :
                                            <>
                                                {FrontProjects
                                                    .filter((projeto, index) => index < showQtdProjects)
                                                    .map((projeto, index) => {
                                                        return (
                                                            <ProjectCard key={index}
                                                                {...projeto} />
                                                        )
                                                    })}
                                                <span className='d-flex align-items-center justify-content-center see-more mt-4'>
                                                    <button onClick={() => handleClick()} className='btn d-flex flex-column align-items-center'>
                                                        {showQtdProjects === 2 ? 'Ver mais projetos' : 'Ver menos projetos'}
                                                    </button>
                                                </span>
                                            </>

                                        }

                                    </Row>
                                </Tab.Pane>

                                <Tab.Pane eventKey={'second'}>
                                    <Row>
                                        {BackProjects.length === 0 ? <p>Projetos ainda não adicionados, volte outra hora!</p> :
                                            <>
                                                {BackProjects
                                                    .filter((projeto, index) => index < showQtdProjects)
                                                    .map((projeto, index) => {
                                                        return (
                                                            <ProjectCard key={index}
                                                                {...projeto} />
                                                        )
                                                    })}

                                                <span className='d-flex align-items-center justify-content-center see-more mt-4'>
                                                    <button onClick={() => handleClick()} className='btn d-flex flex-column align-items-center'>
                                                        {showQtdProjects === 2 ? 'Ver mais projetos' : 'Ver menos projetos'}
                                                    </button>
                                                </span>

                                            </>
                                        }
                                    </Row>
                                </Tab.Pane>

                                <Tab.Pane eventKey={'third'}>
                                    <Row>
                                        {MobileProjects.length === 0 ? <p>Projetos ainda não adicionados, volte outra hora!</p> :
                                            <>
                                                {MobileProjects
                                                    .filter((projeto, index) => index < showQtdProjects)
                                                    .map((projeto, index) => {
                                                        return (
                                                            <ProjectCard key={index}
                                                                {...projeto} />
                                                        )
                                                    })}

                                                <UIButton onClick={() => handleClick()} className='btn d-flex flex-column align-items-center'>
                                                    {showQtdProjects === 2 ? 'Ver mais projetos' : 'Ver menos projetos'}    
                                                </UIButton>

                                            </>
                                        }
                                    </Row>
                                </Tab.Pane>

                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Projects