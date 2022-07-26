import React, { useEffect, useState } from 'react'
import '../assets/css/Home.css'

import { Container, Row, Col } from 'react-bootstrap'
import homeImg from '../assets/img/header-img.svg'

import {
    ArrowRightOutlined,
} from '@ant-design/icons';

const Home = () => {
    // Configs do que vai passar no titulo da pagina
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [text, setText] = useState('')
    const tempo = 3000
    const [delta, setDelta] = useState(300 - Math.random() * 100)

    // minhas ocupações
    const funcoesToRotate = ['meu nome é Samuel!','Sou desenvolvedor web', 'Sou desenvolvedor Desktop', 'Sou desenvolvedor mobile']

    // PASSA O TITULO DINAMICAMENTE COMO SE ESTIVESSE ESCREVENDO UM TEXTO NO H1
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % funcoesToRotate.length
        let fullText = funcoesToRotate[i]

        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
        setText(updateText)

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updateText === fullText) {
            setIsDeleting(true);
            setDelta(tempo);
        }
        else if (isDeleting && updateText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }

    return (
        <section id="home">
            <Container>
                <Row className='d-flex align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>Bem vindo ao meu porfólio</span>
                        <h1>{`Hello world, `} <span className='wrap'>{text}</span>  </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacinia,
                            leo nec consectetur dignissim, orci tellus egestas ante, sit amet
                            placerat magna ex ut ipsum. Vestibulum ut nunc interdum, semper mi id,
                            sagittis ligula. Nulla mattis feugiat sem id suscipit.
                            Fusce at vehicula odio, vel commodo diam.
                        </p>
                        <button className='btn d-flex align-items-center' onClick={() => { console.log('quero estabelecer contato!') }}>
                            Estabelecer contato
                            <ArrowRightOutlined />
                        </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={homeImg} alt="home page image" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Home