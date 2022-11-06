import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useState } from "react";
import React from "react";

function App() {
  
  const [page, setPage] = useState('home')
  return (
    <div className={`App mono`}>
      <div className="fade-in-top block header-container">
        <div className="header">
          <div className={page === 'home' ? 'selected' : ''} onClick={() => setPage('home')}>Home.</div>
          <div className={page === 'portfolio' ? 'selected' : ''} onClick={() => setPage('portfolio')}>Portfolio.</div>
          <div className={page === 'about' ? 'selected' : ''} onClick={() => setPage('about')}>Me.</div>
        </div>
      </div>
      <div className="block next">
        <FontAwesomeIcon
          icon={solid('chevron-right')}
          size="lg"
          className="fade-in-right chevron"
        />
      </div>
      <div className="block ">
        <div className={`title expand`}>
        <h1> LUDOVICA <br/> BAIARDI </h1>
        <h4> Architect </h4>
      </div>
      </div>
    </div>
  );
}

export default App;
