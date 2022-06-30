import React from 'react';
import cwAvatar from "../../assets/cwavatar.jpeg"


function Nav({ currentPage, handlePageChange }) {

    return (
        <header>
            <h2>
                <a href="/">
                    <span role="img" aria-label="cwavatar">
                        <img className="avatar" src={cwAvatar} alt="Chris Avatar" ></img>
                    </span> Chris Warren Portfolio
                </a>
            </h2>
            <nav>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a
                            href="#about"
                            onClick={() => handlePageChange('About')}
                            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                        >
                            About Me</a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="#Gallery"
                            onClick={() => handlePageChange('Portfolio')}
                            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                        >
                            Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="#Resume"
                            onClick={() => handlePageChange('Resume')}
                            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                        >
                            Resume</a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="#Contact"
                            onClick={() => handlePageChange('ContactForm')}
                            className={currentPage === 'ContactForm' ? 'nav-link active' : 'nav-link'}
                        >
                            Contact</a>
                    </li>


                </ul>
            </nav >
        </header >
    )
}

export default Nav;