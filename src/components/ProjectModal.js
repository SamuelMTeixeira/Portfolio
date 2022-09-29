import React from "react"
import { Modal, Button } from 'react-bootstrap';
import '../assets/css/Modal.css'

import IconeReturn from '../assets/img/icon_return.svg'

// ICONES
import {
    EyeFilled,
} from '@ant-design/icons';

const ProjectModal = (props) => {
    const tech = props.tecnologias || ['no one lang keys']
    return (
        <Modal
            show={props.show}
            onHide={props.onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="projectModal"
        >
            <Modal.Header >
                <Button onClick={props.onHide} className="d-flex align-items-center">
                    <img src={IconeReturn} className="me-2" alt='voltar para a pagina' />
                    Voltar
                </Button>
            </Modal.Header>
            <Modal.Body className="d-flex align-content-between flex-wrap">
                <div>
                    <Modal.Title className="mb-4">
                        {props.title}
                    </Modal.Title>
                    <p>
                        {props.description}
                    </p>
                </div>

                <div className="tecnologias">
                    <span className='d-flex align-items-center justify-content-center'>{tech.map((e, i) => (<p className='d-flex align-items-center flex-row' key={i}>{e}</p>))}</span>
                </div>

            </Modal.Body>
            <Modal.Footer className='close d-flex align-items-center justify-content-end'>
                <Button onClick={props.onHide}>
                    fechar
                </Button>

                <a className={props.previewDisable ? 'btn d-flex align-items-center disable' : 'btn d-flex align-items-center'} href={props.previewUrl}>
                    <EyeFilled />
                    Preview
                </a>
            </Modal.Footer>
        </Modal>
    )
}

export default ProjectModal