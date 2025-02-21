import About from './pages/About.jsx'
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Index from './pages/Index.jsx'
import Stories from './pages/Stories.jsx'
import Footer from './components/Footer.jsx'
import Art from './pages/Art.jsx'
import Contact from './pages/Contact.jsx'
import './App.css'
import React, {useState} from 'react';

function UnWrappedApp() {
  const [enableEffects, setEnableEffects] = useState(true);

  const toggleEffects = () => {
    setEnableEffects(!enableEffects);
  };

  return(
      <div>      
        <Routes>
          <Route path="/" element={<Index enableEffects={enableEffects}/>} />
          <Route path="/interactions" element ={<About enableEffects={enableEffects}/>} />
          <Route path="/stories" element={<Stories enableEffects={enableEffects}/>} />
          <Route path="/art" element={<Art enableEffects={enableEffects}/>} />
          <Route path="/contact" element={<Contact enableEffects={enableEffects}/>} />
        </Routes>
      <Footer/>
      <button 
          className="fixed z-20 bottom-1 left-1/2 transform -translate-x-1/2 p-2 bg-black text-gray-700 rounded-lg"
          onClick={toggleEffects}
        >
          {enableEffects ? 'Disable Effects' : 'Enable Effects'}
      </button>
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
