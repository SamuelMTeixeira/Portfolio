import React, { useState } from 'react'
import '../assets/css/Contact.css'

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
    const [formDetails, setFormDetails] = useState(formInitialDetails)
    const [buttonText, setButtonText] = useState('Enviar')
    const [status, setStatus] = useState([])

    // PREENCHE A JSON ACIMA COM OS DADOS DIGITADOS
    const onFormUpdate = (cmp, value) => {
        setFormDetails({
            ...formDetails,
            [cmp]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(formDetails)
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
                        <Form onSubmit={handleSubmit}>
                            <Row className="px-1">
                                <Form.Group as={Col} controlId="formGridName">
                                    <Form.Control value={formDetails.firstName} onChange={event => onFormUpdate('firstName', event.target.value)} type="text" placeholder="Nome" required />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridLastName">
                                    <Form.Control value={formDetails.lastName} onChange={event => onFormUpdate('lastName', event.target.value)} type="text" placeholder="Sobrenome" required />
                                </Form.Group>
                            </Row>

                            <Row className="px-1">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Control value={formDetails.email} onChange={event => onFormUpdate('email', event.target.value)} type="email" placeholder="Email" required />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPhone">
                                    <Form.Control value={formDetails.phone} onChange={event => onFormUpdate('phone', event.target.value)} type='tel' placeholder="Telefone" />
                                </Form.Group>
                            </Row>

                            <Form.Group className="px-1" controlId="formGridAMessage">
                                <Form.Control value={formDetails.message} onChange={event => onFormUpdate('message', event.target.value)} as="textarea" rows={6} placeholder="Mensagem" required />
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