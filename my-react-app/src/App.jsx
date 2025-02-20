import About from './pages/About.jsx'
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Index from './pages/Index.jsx'
import Stories from './pages/Stories.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function UnWrappedApp() {
  const enableEffects = true;

  return(
      <div>      
        {/*<nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>*/}
        <Routes>
          <Route path="/" element={<Index enableEffects={enableEffects}/>} />
          <Route path="/about" element ={<About enableEffects={enableEffects}/>} />
          <Route path="/stories" element={<Stories enableEffects={enableEffects}/>} />
        </Routes>
      <Footer/>
    </div>
  );
}

function App(){
  return(
    <HashRouter>
      <UnWrappedApp/>
    </HashRouter>
  );
}

export default App
