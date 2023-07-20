import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

/**
 * HamburgerMenu Component
 *
 * This component represents a responsive hamburger menu that can be toggled open and closed.
 * It also includes a feature to close the menu when the user clicks outside the menu area.
 */

const HamburgerMenu: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutsideMenu = (event: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      !document.getElementById('menu-btn')?.contains(event.target as Node)
    ) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutsideMenu);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideMenu);
    };
  }, []);

  return (
    <header id="header">
      <div className="containerr z-50">
        <div
          id="menu-btn"
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={handleMenuClick}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </div>
        
        <div className='menu-item' ref={menuRef}>
          <ul id="menu" className={`z-50 display hamburger-ul ${menuOpen ? '' : 'hidden'} `}>
            <li>
              <Link to="/" className="link-hover font-bold link-bg justify-center fw-500 px-3 py-2 rounded">
                Home
              </Link>
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

