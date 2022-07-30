import React from 'react'
import '../assets/css/Footer.css'

import { Container, Row, Col } from 'react-bootstrap'

// ICONES
import {
    GithubFilled,
    LinkedinFilled,
    InstagramFilled,
} from '@ant-design/icons';

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row className='d-flex align-items-center'>
                    <Col sm={6} className='text-center text-sm-start'>
                    <p>© 2022 SamuelMTeixeira. All Rights Reserved</p>
                    </Col>

                    <Col sm={6} className='text-center text-sm-end'>
                        <div className='social-icons px-3'>
                            <a href='https://www.linkedin.com/in/SamuelMTeixeira/' > <LinkedinFilled />  </a>
                            <a href='https://github.com/SamuelMTeixeira' > <GithubFilled />  </a>
                            <a href='https://www.instagram.com/this.samuelteixeira/' > <InstagramFilled /> </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer