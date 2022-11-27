import React, {useState} from 'react'

import { Col, Card } from 'react-bootstrap'
import ProjectModal from './ProjectModal';
import { useTranslation } from 'react-i18next'

// ICONES
import {
    GithubFilled,
    EyeFilled,
    InfoCircleFilled,
} from '@ant-design/icons';

const ProjectCard = (props) => {

    // Translator
    const { t } = useTranslation()
    
    const [modalShow, setModalShow] = useState(false);

    return (
        <Col sm={12} md={6} className='d-flex align-items-center justify-content-center'>

            <ProjectModal {...props} show={modalShow} onHide={() => setModalShow(false)} />

            <Card className='projectCard'>
                <Card.Img variant="top" src={`${props.imgUrl}`} />
                <Card.Body className='d-flex align-items-center justify-content-between '>
                    <Card.Title>{props.title}</Card.Title>
                    <div className='d-flex align-items-center tech-icons'>
                        <a className='d-flex align-items-center' target="_blank" rel="noreferrer noopener" href={props.repoUrl}><GithubFilled /></a>
                    </div>
                </Card.Body>

                <div className='card-footer d-flex align-items-center justify-content-between'>
                    <Card.Link className='btn d-flex align-items-center' onClick={() => setModalShow(true)}>
                        <InfoCircleFilled />
                        {t('buttons.details')}
                    </Card.Link>
                    <Card.Link className={props.previewDisable ? 'btn d-flex align-items-center disable' : 'btn d-flex align-items-center'} href={props.previewUrl} target="_blank" rel="noreferrer">
                        <EyeFilled />
                        {t('buttons.preview')}
                    </Card.Link>
                </div>
            </Card>
        </Col>
    )
}

export default ProjectCard  