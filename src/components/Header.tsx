import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './utils.css';
import HamburgerMenu from './HamburgerMenu';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white Header z-50 box-shadow sticky top-0 text-black p-1 px-6 lg:p-6 will-change-transform">
      <nav className="container top-0 p-sticky mx-auto flex items-center justify-between py-4">
        <div>
          <Link to="/" className="text-lg font-bold justify-center text-black-400">
            ZEKKAH
          </Link>
        </div>

        <div className='hamburger-menu'>
          <HamburgerMenu />
        </div>

        <div className={`menu-container md:none z-50 ${menuOpen ? 'open' : ''}`}>
          <ul className="menu flex space-x-4 primary rounded-2xl">
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



            {/* ... */}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
