import React, { useEffect, useState } from 'react'
import '../assets/css/AppBar.css'

import { Container, Navbar, Nav, Offcanvas } from 'react-bootstrap'

import { useTranslation } from 'react-i18next'

// ICONES
import {
  GithubFilled,
  LinkedinFilled,
  MenuOutlined,
} from '@ant-design/icons';

const AppBar = () => {

  // Translator
  const { t, i18n } = useTranslation()

  const handleCHangeLang = language => {
    i18n.changeLanguage(language);
  }

  // LISTA DE OPÇÕES QUE IRÁ APARECER NA NAVBAR
  const pages = [
    {
      id: 0,
      name: t('navbar.home'),
      url: "#home",
      active: "home"
    },
    {
      id: 1,
      name: t('navbar.skills'),
      url: "#skills",
      active: "skills"
    },
    {
      id: 2,
      name: t('navbar.projects'),
      url: "#projects",
      active: "projetos"
    }
  ]

  // ESTADO DA OPÇÃO CLICADA
  const [activeLink, setActiveLink] = useState('home')

  // ESTADO DO SCROLL DO MOUSE
  const [scrolled, setScrolled] = useState(false)

  const pageName = 'Samuel M. Teixeira'

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
                Menu
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
                </div>
                <a className='btn contato' href='#connect'> <span>{t('buttons.contact')}</span>  </a>
              </span>

            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
}

export default AppBar;