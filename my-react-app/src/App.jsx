import Header from './Header.jsx'
import Footer from './Footer.jsx'
import About from './pages/About.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Index from './pages/Index.jsx'

import './App.css'

function App() {
  
  return(
    <BrowserRouter>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element ={<About/>} />
      </Routes>
      {/*<Header/>
      <Footer/>*/}
    </BrowserRouter>
  )
}

export default App
