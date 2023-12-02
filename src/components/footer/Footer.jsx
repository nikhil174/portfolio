import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <h1 className="footer__title">Nikhil Srivastava.</h1>
                <div className="footer__social">
                    <a href="https://github.com/nikhil174" className="home__social-icon" target="_blank">
                        <i className="bx bxl-github footer__social-link"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/nikhil-srivastava-59bab0183/" className="home__social-icon" target="_blank">
                        <i className="bx bxl-linkedin footer__social-link"></i>
                    </a>
                    <a href="https://www.instagram.com/nikhil_srivastava174/" className="home__social-icon" target="_blank">
                        <i className="bx bxl-instagram footer__social-link"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
