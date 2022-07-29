import React from 'react'

import { Col, Card } from 'react-bootstrap'

// ICONES
import {
    GithubFilled,
    EyeFilled,
    InfoCircleFilled,
} from '@ant-design/icons';

const ProjectCard = (props) => {
    const prop = props

    return (
        <Col sm={12} md={6} className='d-flex align-items-center justify-content-center'>
            <Card className='projectCard'>
                <Card.Img variant="top" src={prop.imgUrl} />
                <Card.Body className='d-flex align-items-center justify-content-between '>
                    <Card.Title>{prop.title}</Card.Title>
                    <div className='d-flex align-items-center tech-icons'>
                        <a className='d-flex align-items-center' href={prop.repoUrl}><GithubFilled /></a>
                    </div>
                </Card.Body>
                <div className='card-footer d-flex align-items-center justify-content-between'>
                    <Card.Link className='btn d-flex align-items-center' href={prop.detalhesUrl}>
                        <InfoCircleFilled />
                        Detalhes
                    </Card.Link>
                    <Card.Link className={prop.previewDisable ? 'btn d-flex align-items-center disable' : 'btn d-flex align-items-center'} href={prop.previewUrl}>
                        <EyeFilled />
                        Preview
                    </Card.Link>
                </div>
            </Card>
        </Col>
    )
}

export default ProjectCard  