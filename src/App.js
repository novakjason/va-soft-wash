import React from 'react';
import logo from './logo.svg';
import { MDBFooter } from 'mdbreact';

import './App.css';

function App() {
  return (
    
    <div className="App">


      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Virginia SoftWash</h1>
        <p>Exterior Cleaning Specialists</p>
      </header>

      <MDBFooter color="unique-color">
        <p className="footer-copyright mb-0 py-3 text-center">
          &copy; {new Date().getFullYear()} Made with 🌮 and 💙 
            <a href="https://github.com/novakjason"> by Jason Novak </a>
        </p>
      </MDBFooter>
    </div>

  );
}

export default App;
