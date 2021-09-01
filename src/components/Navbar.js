import React from 'react';
import logo from "../pictures/Salman-logo.png";
import "./c-style/Navbar.css";



const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
        
        <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo..." /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <a className="nav-link" href="#">Acceuil</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">contacts</a>
              </li>

              <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            NIVEAUX
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">2BAC</a></li>
            <li><a className="dropdown-item" href="#">1BAC</a></li>
            <li><a className="dropdown-item" href="#">5EME</a></li>
            <li><a className="dropdown-item" href="#">4EME</a></li>
            <li><hr  className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">QUESTION ?</a></li>
          </ul>
        </li>

              <li className="nav-item">
                <a className="nav-link" href="#">Se Connecter</a>
              </li>
    
            </ul>
            
          </div>
        </div>
        
      </nav>
        
    )
}

export default Navbar;
