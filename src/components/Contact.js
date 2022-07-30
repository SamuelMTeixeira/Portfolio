import React, { useState, useRef } from 'react'
import '../assets/css/Contact.css'
import emailjs from '@emailjs/browser';

import contatoImg from "../assets/img/contact-img.svg";
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

const Contact = () => {
    // JSON COM VALORES DEFAULT DO FORMULARIO
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    }

    // ESTADOS DO FORMULARIO
    const form = useRef();
    const [formDetails, setFormDetails] = useState(formInitialDetails)

    // PREENCHE A JSON ACIMA COM OS DADOS DIGITADOS
    const onFormUpdate = (cmp, value) => {

        if (cmp === 'phone') {
            const regex = /^([0-9]{2})([0-9]{4,5})([0-9]{4})$/;
            var str = value.replace(/[^0-9]/g, "").slice(0, 11);

            const result = str.replace(regex, "($1) $2-$3");

            setFormDetails({
                ...formDetails,
                [cmp]: result
            })
        } else {
            setFormDetails({
                ...formDetails,
                [cmp]: value
            })
        }
    }

    // ENVIA O EMAIL
    const handleSubmit = (event) => {
        event.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE_HIREME, process.env.REACT_APP_EMAIL_TEMPLATE_HIREME, form.current, process.env.REACT_APP_EMAIL_KEYPUBLIC)
            .then((result) => {
                // FORM CLEAR
                setFormDetails(formInitialDetails)
            }, (error) => {
                console.log(error.text);
            });
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
                                    <Form.Control value={formDetails.firstName} onChange={event => onFormUpdate('firstName', event.target.value)} type="text" placeholder="Nome" required name="firstName" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridLastName">
                                    <Form.Control value={formDetails.lastName} onChange={event => onFormUpdate('lastName', event.target.value)} type="text" placeholder="Sobrenome" required name="lastName" />
                                </Form.Group>
                            </Row>

                            <Row className="px-1">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Control value={formDetails.email} onChange={event => onFormUpdate('email', event.target.value)} type="email" placeholder="Email" required name="email" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPhone">
                                    <Form.Control value={formDetails.phone} onChange={event => onFormUpdate('phone', event.target.value)} type='tel' placeholder="Telefone" name="phone" />
                                </Form.Group>
                            </Row>

                            <Form.Group className="px-1" controlId="formGridAMessage">
                                <Form.Control value={formDetails.message} onChange={event => onFormUpdate('message', event.target.value)} as="textarea" rows={6} placeholder="Mensagem" required name="message" />
                            </Form.Group>


                            <Button variant="primary" type="submit" className="w-100">
                                <span>Enviar</span>
                            </Button>

                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact


