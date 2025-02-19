import About from './pages/About.jsx'
import { HashRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index.jsx'
import Stories from './pages/Stories.jsx'
import Footer from './components/Footer.jsx'

import './App.css'

function App() {
  const enableEffects = true;

  return(
    <div>
      <HashRouter>
      {/*<nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>*/}
        <Routes>
          <Route path="/" element={<Index enableEffects={enableEffects}/>} />
          <Route path="/about" element ={<About enableEffects={enableEffects}/>} />
          <Route path="/stories" element={<Stories enableEffects={enableEffects}/>} />
        </Routes>
      </HashRouter>
      <Footer/>
    </div>

  )
}

export default App
