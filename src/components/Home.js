import React from 'react'
import '../assets/css/Home.css'

import { Container, Row, Col } from 'react-bootstrap'
import homeImg from '../assets/img/header-img.svg'
import Typewriter from 'typewriter-effect';
import CurriculoPT from '../assets/pdf/cv-pt.pdf'

import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Home = () => {
    // minhas ocupações
    const ocupacoes = ['Sou desenvolvedor web.', 'Sou desenvolvedor Desktop.', 'Sou desenvolvedor mobile.']

    return (
        <section id="home">
            <Container>
                <Row className='d-flex align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeInDown" : ""}>
                                    <div className='d-flex align-items-center justify-content-center justify-content-md-start'><span className='tagline'>Bem vindo ao meu porfólio</span></div>
                                    <h1 className='text-center text-md-start'>{`Olá! Meu nome é Samuel`}
                                    </h1>
                                    <div className="typeWriterText">
                                        <Typewriter
                                            options={{
                                                autoStart: true,
                                                loop: true,
                                                delay: 40,
                                                strings: ocupacoes
                                            }}
                                        />
                                    </div>

                                    <p className='text-center text-md-start'>
                                        Atuo na área de desenvolvimento de softwares há 3 anos, e no presente instante 
                                        me encontro no último semestre da graduação.
                                        <br />
                                        No momento busco oportunidades de atuar profissionalmente como desenvolvedor Front‑End, 
                                        aberto para trabalhar de forma presencial ou remota.
                                    </p>
                                    <span className='d-flex align-items-center justify-content-center justify-content-md-start mt-5'>
                                        <a href='#connect' className='btn d-flex align-items-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
                                                <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                                            </svg>
                                            Estabelecer contato
                                        </a>

                                        <a href={CurriculoPT} download='cv-in-portuguese' className='btn d-flex align-items-center btn-outlined'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                            </svg>
                                            Currículo
                                        </a>
                                    </span>

                                </div>}
                        </TrackVisibility>
                    </Col>

                    <Col xs={12} md={6} xl={5}>
                        <img src={homeImg} className="d-none d-md-flex" alt="home page" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Home