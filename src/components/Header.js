import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header>
        <h1>Alejandro's Professional Porfolio</h1>
        <nav>
            <ul>
                <li>
                    <a href="#about-me">ABOUT ME</a>
                </li>
                <li>
                    <a href="#projects">PROJECTS</a>
                </li>
                <li>
                    <a href="#contact-me">CONTACT ME</a>
                </li>
            </ul>
        </nav>
    </header>
  );
}

export default Header;
