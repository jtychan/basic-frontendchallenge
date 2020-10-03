import React from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="header">
        <h3 className="front"> FRONT</h3>
        
      
      </header>
      <div className="adjust">
      <h1 className="log-in"> Log-in</h1>
      <div>
      <input className="email-address" type="text" placeholder="Email address"/>
      </div>
      <div>
      <input className="password" type="text" placeholder="Password"/>
      </div>
      <div>
      <button className = "search-button" type ="submit">LOG IN
      </button>
      </div>
      </div>
      

    
    </div>

       
      
    
  );
}

export default App
