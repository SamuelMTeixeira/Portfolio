import React, { useState, useRef } from 'react'
import '../assets/css/Contact.css'
import emailjs from '@emailjs/browser';

import contatoImg from "../assets/img/contact-img.svg";
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

const Contact = () => {
    // ESTADOS DO FORMULARIO
    const [buttonText, setButtonText] = useState('Enviar')
    const [status, setStatus] = useState([])
    const form = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE_HIREME, process.env.REACT_APP_EMAIL_TEMPLATE_HIREME, form.current, process.env.REACT_APP_EMAIL_KEYPUBLIC)
            .then((result) => {
            }, (error) => {
                console.log(error.text);
            });

        event.target.reset()
    }

    return (
        <section id="connect">
            <Container>
                <Row className='d-flex align-items-center'>
                    <Col md={6} >
                        <img src={contatoImg} className="d-none d-md-flex" alt='contate-me' />
                    </Col>

                    <Col md={6} >
                        <h2 className="text-center text-md-start">Entrar em contato</h2>
                        <Form onSubmit={handleSubmit} ref={form}>
                            <Row className="px-1">
                                <Form.Group as={Col} controlId="formGridName">
                                    <Form.Control type="text" placeholder="Nome" required name="firstName" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridLastName">
                                    <Form.Control type="text" placeholder="Sobrenome" required name="lastName"/>
                                </Form.Group>
                            </Row>

                            <Row className="px-1">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Control type="email" placeholder="Email" required name="email"/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPhone">
                                    <Form.Control type='tel' placeholder="Telefone" name="phone"/>
                                </Form.Group>
                            </Row>

                            <Form.Group className="px-1" controlId="formGridAMessage">
                                <Form.Control as="textarea" rows={6} placeholder="Mensagem" required name="message"/>
                            </Form.Group>


                            <Button variant="primary" type="submit" className="w-100">
                                <span>{buttonText}</span>
                            </Button>

                            {
                                status.message &&
                                <Col>
                                    <p className={status.sucess === false ? 'danger' : 'sucess'}>
                                        {status.message}
                                    </p>
                                </Col>
                            }

                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact


