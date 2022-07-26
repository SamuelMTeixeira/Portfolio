import React from 'react'
import '../assets/css/Home.css'

import { Container, Row, Col } from 'react-bootstrap'
import Typewriter from 'typewriter-effect';
import CurriculoPT from '../assets/pdf/cv-pt.pdf'

import { UILink } from './UIComponents';
import Lottie from 'react-lottie';
import notebookAnimation from "../assets/img/notebookAnimation.json";
import { useTranslation } from 'react-i18next'

const Home = () => {
    // Translator
    const { t } = useTranslation()

    // minhas ocupações
    const ocupacoes = [t('home.occupation.1'), t('home.occupation.2'), t('home.occupation.3')]

    // Notebook animation configs
    const animation = { isStopped: false, isPaused: false }

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: notebookAnimation,
    }
    // End notebook animation configs

    return (
        <section id="home">
            <Container>
                <Row className='d-flex align-items-center flex-column-reverse flex-md-row'>
                    <Col xs={12} md={6} xl={7}>
                        <div className='d-flex align-items-center justify-content-center justify-content-md-start'><span className='tagline'>{t('home.welcome')}</span></div>
                        <h1 className='text-center text-md-start'>{t('home.title')}</h1>

                        <div className="typeWriterText text-center text-md-start">
                            <Typewriter
                                options={{
                                    autoStart: true,
                                    loop: true,
                                    delay: 40,
                                    strings: ocupacoes
                                }}
                            />
                        </div>

                        <p className='text-center text-md-start'>{t('home.description')}</p>
                        <span className='d-flex align-items-center justify-content-center justify-content-md-start mt-5'>
                            <UILink design="outlined" href={CurriculoPT} target="_blank" rel="noreferrer noopener">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                </svg>
                                {t('buttons.resume')}
                            </UILink>

                            <UILink design="filled" href='#connect' >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
                                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                                </svg>
                                {t('buttons.contact')}
                            </UILink>
                        </span>
                    </Col>

                    <Col xs={12} md={6} xl={5} className="animation">

                        <Lottie options={defaultOptions}
                            isStopped={animation.isStopped}
                            isPaused={animation.isPaused} />
                            
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default Home