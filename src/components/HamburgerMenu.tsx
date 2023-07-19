import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header id="header">
      <div className="containerr z-50">
        <div id="menu-btn" className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={handleMenuClick}>
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </div>
        <div className='menu-item'>

          <ul id="menu" className={`z-50 display hamburger-ul ${menuOpen ? '' : 'hidden'} `}>
            <li>
              <Link to="/" className="link-hover font-bold link-bg justify-center fw-500 px-3 py-2 rounded">
                Home
              </Link>
            </li>
            <li>
            



              {/* <Link to="/aboutMe" className="font-bold link-bg link-hover justify-center px-3 py-2 rounded">
                About me
              </Link> */}
            </li>
            <li>
              <Link to="/projects" className="font-bold link-bg link-hover justify-center px-3 py-2 rounded">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/skills" className="font-bold link-bg link-hover justify-center px-3 py-2 rounded">
                Skills
              </Link>
            </li>
            <li>
              <Link to="/experience" className="font-bold link-bg link-hover fw-600 justify-center px-3 py-2 rounded">
                Experience
              </Link>
            </li>
            <li>
              <Link to="/contact" className="font-bold link-bg link-hover justify-center px-3 py-2 rounded">
                Contact
              </Link>
            </li>

            <li>
            <Link to="/AboutMe" className="font-bold link-bg link-hover justify-center px-3 py-2 rounded">
               AboutMe
              </Link>
            </li>

            
          </ul>



        </div>
      </div>
    </header>
  );
};

export default HamburgerMenu;
