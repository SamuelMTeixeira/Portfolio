import React, { useEffect, useState } from 'react'
import '../assets/css/AppBar.css'

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Offcanvas from 'react-bootstrap/Offcanvas';

// ICONES
import {
  GithubFilled,
  LinkedinFilled,
  InstagramFilled,
  MenuOutlined,
} from '@ant-design/icons';

// LISTA DE OPÇÕES QUE IRÁ APARECER NA NAVBAR
const pages = [
  {
    id: 0,
    name: "Home",
    url: "#home",
    active: "home"
  },
  {
    id: 1,
    name: "Skills",
    url: "#skills",
    active: "skills"
  },
  {
    id: 2,
    name: "Projetos",
    url: "#projects",
    active: "projetos"
  }
]

const AppBar = () => {
  // ESTADO DA OPÇÃO CLICADA
  const [activeLink, setActiveLink] = useState('home')

  // ESTADO DO SCROLL DO MOUSE
  const [scrolled, setScrolled] = useState(false)

  const pageName = ' < Samuel M. Teixeira />'

  // EFEITO PARA VERIFICAR SE ROLOU O SCROLL VERTICAL
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  // TROCA O ESTADO DA OPÇÃO CLICADA
  const setUpdateActiveLink = (value) => {
    setActiveLink(value)
  }

  return (
    <header>
      <Navbar bg="dark" variant="dark" fixed="top" expand="lg" className={scrolled ? 'scrolled' : ''}>
        <Container>
          <Navbar.Brand href="#" className="d-flex align-items-center">
            <img width={'32px'} src="logo.png" alt='logo' className='me-3' />
            {pageName}
          </Navbar.Brand>

          <Navbar.Toggle aria-controls={'offcanvasNavbar-expand-lg'}>
            <MenuOutlined className="toggler-icon" />
          </Navbar.Toggle>

          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                Menu principal
              </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Nav className='ms-auto d-flex align-items-center'>
                {pages.map(page => (
                  <Nav.Link key={page.id} href={page.url} className={activeLink === page.active ? "active navbar-link" : "navbar-link"} onClick={() => setUpdateActiveLink(page.active)}> {page.name} </Nav.Link>
                ))}
              </Nav>
              <span className='navbar-info d-flex align-items-center'>
                <div className='social-icons px-3'>
                  <a href='https://www.linkedin.com/in/SamuelMTeixeira/' > <LinkedinFilled />  </a>
                  <a href='https://github.com/SamuelMTeixeira' > <GithubFilled />  </a>
                  <a href='https://www.instagram.com/this.samuelteixeira/' > <InstagramFilled /> </a>
                </div>
                <a className='btn contato' href='#connect'> <span>Contate-me</span>  </a>
              </span>

            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
}

export default AppBar;