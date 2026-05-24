import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Navbar is always solid black — white logo always visible
const Navbar = () => {
  const location = useLocation();
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
        <Link to="/" className="nav-logo">
          <img src="/sanelx_wordmark_white.webp" alt="SanelX" />
        </Link>
        <div className="nav-links">
          <a href="https://sanelx.com" target="_blank" rel="noreferrer" className="nav-link">
            Company
          </a>
          {links.map(l => (
            <Link
              key={l.path}
              to={l.path}
              className="nav-link"
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
