import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import P1 from "./components/p1";
import P2 from "./components/p2";
import P3 from "./components/p3";
import P4 from "./components/p4";
import P5 from "./components/p5";


function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };


  return (
    <>
      <div className={`app ${isDarkMode ? "dark" : "light"}`}>
      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <Routes>
        <Route path="/" element={<P1/>}/>
        <Route path="/uploadFile" element={<P2/>}/>
        <Route path="/ansPage" element={<P3/>}/>
        <Route path="/logIn" element={<P4/>}/>
        <Route path="/signUp" element={<P5/>}/>
      </Routes>
      </div>
    </>
  );
}

export default App;