import React, { useState } from 'react'
import './header.css'

const Header = () => {
    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState('#home');
    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">Nikhil</a>
                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" onClick={() => setActiveNav('#home')} className="nav__link active-link">
                                <i className="uil uil-estate nav__icon"></i>Home
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#skills" onClick={() => setActiveNav('#skills')} className="nav__link">
                                <i className="uil uil-file-alt nav__icon"></i>Skills
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#projects" onClick={() => setActiveNav('#projects')} className="nav__link">
                                <i className="bx bx-code qualification__icon nav__icon"></i>Projects
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#qualification" onClick={() => setActiveNav('#qualification')} className="nav__link">
                                <i className="bx bxs-graduation qualification__icon nav__icon"></i>Qualification
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#contact" onClick={() => setActiveNav('#contact')} className="nav__link">
                                <i className="uil uil-message nav__icon"></i>Contact
                            </a>
                        </li>
                    </ul>

                    <i className='uil uil-times nav__close' onClick={() => showMenu(!Toggle)}></i>
                </div>
                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header
