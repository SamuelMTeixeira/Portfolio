import React, { useEffect, useState } from 'react'
import '../assets/css/Home.css'

import { Container, Row, Col } from 'react-bootstrap'
import homeImg from '../assets/img/header-img.svg'

import 'animate.css';
import TrackVisibility from 'react-on-screen';

import {
    ArrowRightOutlined,
} from '@ant-design/icons';

const Home = () => {
    // Configs do que vai passar no titulo da pagina
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [text, setText] = useState('')
    const [index, setIndex] = useState(1);
    const tempo = 1000
    const [delta, setDelta] = useState(300 - Math.random() * 100)

    // minhas ocupações
    const funcoesToRotate = ['Meu nome é Samuel!', 'Sou desenvolvedor web', 'Sou desenvolvedor Desktop', 'Sou desenvolvedor mobile']

    // PASSA O TITULO DINAMICAMENTE COMO SE ESTIVESSE ESCREVENDO UM TEXTO NO H1
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % funcoesToRotate.length;
        let fullText = funcoesToRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(tempo);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }


    }

    return (
        <section id="home">
            <Container>
                <Row className='d-flex align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeInDown" : ""}>
                                    <span className='tagline d-flex align-items-center justify-content-center justify-content-md-start'>Bem vindo ao meu porfólio</span>
                                    <h1 className='text-center text-md-start'>{`Olá! `} <span className='wrap'>{text}</span>  </h1>
                                    <p className='text-center text-md-start'>
                                        Meu nome é Samuel e no presente momento estou no último ano do curso de Análise e Desenvolvimento de Sistemas pelo Instituto Federal do Norte de Minas Gerais. <br />
                                        Atualmente tenho foco em desenvolvimento front-end web e busco oportunidades de atuar na área, seja esta de forma presencial ou remota.
                                    </p>
                                    <a href='#connect' className='btn d-flex align-items-center justify-content-center justify-content-md-start' onClick={() => { console.log('quero estabelecer contato!') }}> Estabelecer contato  <ArrowRightOutlined />  </a>
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