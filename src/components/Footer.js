import React from 'react'
import '../assets/css/Footer.css'

import { Container, Row, Col } from 'react-bootstrap'

// ICONES
import {
    GithubFilled,
    LinkedinFilled,
} from '@ant-design/icons';

const Footer = () => {
    return (
        <footer className='p-4'>
            <Container>
                <Row className='d-flex align-items-center'>
                    <Col sm={6} className='d-flex align-items-center'>
                        <p className="m-0 p-0">© 2022 SamuelMTeixeira. All Rights Reserved</p>
                    </Col>

                    <Col sm={6} className='text-center text-sm-end'>
                        <div className='social-icons px-3'>
                            <a href='https://www.linkedin.com/in/SamuelMTeixeira/' > <LinkedinFilled />  </a>
                            <a href='https://github.com/SamuelMTeixeira' > <GithubFilled />  </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer