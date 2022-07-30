import AppBar from './components/AppBar'
import Footer from './components/Footer'

import HomePage from './pages/HomePage'

import './assets/css/App.css'

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppBar />

        <Routes>
          <Route exact path="/" element={<HomePage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
