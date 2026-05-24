import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer">
    {/* Transformer photo backdrop */}
    <div className="footer-bg-wrapper">
      <img src="/img-transformers.webp" alt="Energy Infrastructure" loading="lazy" decoding="async" />
    </div>

    <div className="footer-content">
      <div className="footer-logo">
        <img src="/sanelx_wordmark_white.webp" alt="SanelX" loading="lazy" decoding="async" />
      </div>

      <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '4rem' }}>
        <a href="https://sanelx.com" style={{ fontSize: '1rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.92)' }} target="_blank" rel="noreferrer">sanelx.com</a>
        <a href="https://ir.sanelx.com" style={{ fontSize: '1rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.92)' }} target="_blank" rel="noreferrer">Governance</a>
        <Link to="/contact" style={{ fontSize: '1rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.92)' }}>Contact</Link>
      </div>

      <div className="footer-bottom">
        <p>© 2026 SanelX. All rights reserved.</p>
        <div className="footer-legal">
          <a href="https://sanelx.com/privacy" target="_blank" rel="noreferrer">Privacy</a>
          <a href="https://sanelx.com/terms" target="_blank" rel="noreferrer">Terms</a>
          <a href="https://sanelx.com/disclaimer" target="_blank" rel="noreferrer">Disclaimer</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
