import React from 'react'

import { Col } from 'react-bootstrap'

const ProjectCard = ({title, description, imgUrl}) => {
    return (
        <Col sm={6} md={4} >
            <div className='cardProject'>
                <img src={imgUrl} alt='card'/>
                <div className='texto'>
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}

export default ProjectCard