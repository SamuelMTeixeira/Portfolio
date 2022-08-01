import AppBar from './components/AppBar'
import Footer from './components/Footer'

import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

import './assets/css/App.css'

function App() {
  return (
    <>
      <AppBar />
      <main>
        <Home />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
