import React, { useState, useRef } from 'react'
import '../assets/css/Contact.css'
import emailjs from '@emailjs/browser';

import { Container, Row, Col, Form } from 'react-bootstrap'
import { UIButton } from './UIComponents';

import Lottie from 'react-lottie';
import contactAnimation from "../assets/img/contactAnimation.json";
import { useTranslation } from 'react-i18next'

const Contact = () => {
    // Translator
    const { t } = useTranslation()

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

    // Contact animation configs
    const animation = { isStopped: false, isPaused: false }

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: contactAnimation
    }
    // End contact animation configs

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
                    <Col md={6} className='animation'>
                        <Lottie
                            width={'80%'}
                            options={defaultOptions}
                            isStopped={animation.isStopped}
                            isPaused={animation.isPaused} />
                    </Col>

                    <Col md={6} >
                        <h2 className="text-center text-md-start ms-1">{t('contact.title')}</h2>
                        <p className="ms-1">{t('contact.description')} </p>

                        <Form onSubmit={handleSubmit} ref={form}>
                            <Row className="px-1">
                                <Form.Group as={Col} controlId="formGridName">
                                    <Form.Control value={formDetails.firstName} onChange={event => onFormUpdate('firstName', event.target.value)} type="text" placeholder={t('inputs.name')} required name="firstName" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridLastName">
                                    <Form.Control value={formDetails.lastName} onChange={event => onFormUpdate('lastName', event.target.value)} type="text" placeholder={t('inputs.lastname')} required name="lastName" />
                                </Form.Group>
                            </Row>

                            <Row className="px-1">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Control value={formDetails.email} onChange={event => onFormUpdate('email', event.target.value)} type="email" placeholder="Email" required name="email" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPhone">
                                    <Form.Control value={formDetails.phone} onChange={event => onFormUpdate('phone', event.target.value)} type='tel' placeholder={t('inputs.phone')} name="phone" />
                                </Form.Group>
                            </Row>

                            <Form.Group className="px-1" controlId="formGridAMessage">
                                <Form.Control value={formDetails.message} onChange={event => onFormUpdate('message', event.target.value)} as="textarea" rows={6} placeholder={t('inputs.message')} required name="message" />
                            </Form.Group>


                            <div className="px-1">
                                <UIButton design="filled" type="submit" className="w-100">
                                    {t('buttons.send')}
                                </UIButton>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact


