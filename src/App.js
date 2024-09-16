import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import logo from "./LogoHelene.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>- Le site est en cours de construction -</h1>
      </header>

      <body className="App-body">
        <p>
          Vous pouvez me contacter par téléphone ou par mail à votre convenance.
        </p>
        <img src={logo} className="App-logo" alt="logo" />
      </body>

      <footer className="App-footer">
        <p className="p-footer">Suivez-moi sur :</p>
        <div className="social-links">
          <a
            href="https://www.instagram.com/heleneproplus/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="instagram"
          >
            <svg width="0" height="0">
              <linearGradient
                id="instagram-gradient"
                x1="100%"
                y1="100%"
                x2="0%"
                y2="0%"
              >
                <stop stopColor="#f09433" offset="0%" />
                <stop stopColor="#e6683c" offset="25%" />
                <stop stopColor="#dc2743" offset="50%" />
                <stop stopColor="#cc2366" offset="75%" />
                <stop stopColor="#bc1888" offset="100%" />
              </linearGradient>
            </svg>
            <FaInstagram size={30} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61560574860171"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="facebook"
          >
            <FaFacebook size={30} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
