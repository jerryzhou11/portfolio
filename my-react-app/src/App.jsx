import About from './pages/About.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index.jsx'
import Stories from './pages/Stories.jsx'

import './App.css'

function App() {
  const enableEffects = true;

  return(
    <BrowserRouter>
    {/*<nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>*/}
      <Routes>
        <Route path="/" element={<Index enableEffects={enableEffects}/>} />
        <Route path="/about" element ={<About enableEffects={enableEffects}/>} />
        <Route path="/stories" element={<Stories enableEffects={enableEffects}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
