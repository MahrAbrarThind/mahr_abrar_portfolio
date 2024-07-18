import React, { useState } from 'react';
import { Link } from 'react-scroll';


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden'; 
    };

    return (
        <>
            <div className={`headerContainer ${isMenuOpen ? 'menu-open' : ''}`}>
                <div className="logoContainer">
                    <Link
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={500}
                        activeClass="active"
                    >
                        <img src="logo1.png" alt="Logo" />
                    </Link>
                </div>
                <div className="linksContainer">
                    <Link
                        className='link'
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={500}
                        activeClass="active"
                    >
                        Home
                    </Link>
                    <Link
                        className='link'
                        to="about"
                        spy={true}
                        smooth={true}
                        duration={500}
                        activeClass="active"
                    >
                        About
                    </Link>
                    <Link
                        className='link'
                        to="projects"
                        spy={true}
                        smooth={true}
                        duration={500}
                        activeClass="active"
                    >
                        Projects
                    </Link>
                    <Link
                        className='link'
                        to="contact"
                        spy={true}
                        smooth={true}
                        duration={500}
                        activeClass="active"
                    >
                        Contact
                    </Link>
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            {isMenuOpen && (
                <div className="menuOverlay" onClick={toggleMenu}>
                    <nav>
                        <div className="close" onClick={toggleMenu}></div>
                        <Link to="home" spy={true} smooth={true} duration={500} onClick={toggleMenu}>Home</Link>
                        <Link to="about" spy={true} smooth={true} duration={500} onClick={toggleMenu}>About</Link>
                        <Link to="projects" spy={true} smooth={true} duration={500} onClick={toggleMenu}>Projects</Link>
                        <Link to="contact" spy={true} smooth={true} duration={500} onClick={toggleMenu}>Contact</Link>
                    </nav>
                </div>
            )}
        </>
    );
}

export default Header;
