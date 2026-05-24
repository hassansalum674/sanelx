import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Navbar is always solid black — white logo always visible
const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: 'Solutions', path: '/solutions' },
    { name: 'Methodology', path: '/methodology' },
    { name: 'Security', path: '/security' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={() => setIsOpen(false)}>
          <img src="/sanelx_wordmark_white.webp" alt="SanelX" />
        </Link>

        <button
          className={`nav-toggle ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <a
            href="https://sanelx.com"
            target="_blank"
            rel="noreferrer"
            className="nav-link"
            onClick={() => setIsOpen(false)}
          >
            Company
          </a>
          {links.map(l => (
            <Link
              key={l.path}
              to={l.path}
              className="nav-link"
              onClick={() => setIsOpen(false)}
              style={{ opacity: location.pathname === l.path ? 1 : 0.7 }}
            >
              {l.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
