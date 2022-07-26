import AppBar from './components/AppBar'
import Home from './components/Home'
import Skills from './components/Skills'
import './assets/css/App.css'

function App() {
  return (
    <>
      <AppBar />
      <main>
        <Home />
        <Skills />
      </main>
    </>
  );
}

export default App;
