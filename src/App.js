import AppBar from './components/AppBar'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'

import './assets/css/App.css'

function App() {
  return (
    <>
      <AppBar />
      <main>
        <Home />
        <Skills />
        <Projects />
      </main>
    </>
  );
}

export default App;
