import React from "react";
import './header.css';

const Header = () => {
    return (
        <header>
            <a href="/" className="logo-container">
                <img src="/icon.jpg" alt="Biya" className="logo" />
            </a>
            <nav>
                <ul>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="/resume.pdf">Resume</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
