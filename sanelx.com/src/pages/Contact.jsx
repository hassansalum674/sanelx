import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const Contact = () => {
  return (
    <div className="contact-page fade-in">
      <SEO 
        title="Contact SanelX | Connect with Us"
        description="Get in touch with SanelX for inquiries regarding grid optimization, infrastructure support, and operational intelligence."
        canonical="https://sanelx.com/contact"
      />
      <section className="impact-section">
        <div className="impact-media-wrapper">
           <img 
             src="/img-grid-1.webp" 
             srcSet="/img-grid-1-mobile.webp 768w, /img-grid-1.webp 1920w"
             sizes="100vw"
             alt="Contact SanelX" 
             loading="eager" 
             decoding="sync" 
           />
           <div className="vignette-overlay" style={{ height: '70vh' }}></div>
        </div>
        <div className="impact-content reveal-up" style={{ margin: '0 0 0 10vw', maxWidth: '800px', textAlign: 'center', color: '#fff' }}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{ fontSize: '5rem', color: '#fff' }}
          >
            Connect with SanelX
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '4rem', color: '#fff' }}
          >
            Reach out to discuss the next layer of energy intelligence.
          </motion.p>
          
          <div className="contact-info-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem', marginBottom: '5rem' }}>
             <div className="contact-item">
               <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.85rem', fontWeight: 800, marginBottom: '1rem', color: 'rgba(0,0,0,0.6)' }}>Hassan Salum</h4>
               <a href="mailto:hassssansalum674@gmail.com" style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff' }}>hassssansalum674@gmail.com</a>
             </div>
             <div className="contact-item">
               <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.85rem', fontWeight: 800, marginBottom: '1rem', color: 'rgba(0,0,0,0.6)' }}>Idrisa Khalfan</h4>
               <a href="mailto:idrisakhalfan008@gmail.com" style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff' }}>idrisakhalfan008@gmail.com</a>
             </div>
          </div>

          <div className="btn-group">
             <button className="btn-tesla btn-tesla-solid" onClick={() => window.location.href='mailto:hassssansalum674@gmail.com'}>Contact CEO</button>
             <button className="btn-tesla" onClick={() => window.location.href='mailto:idrisakhalfan008@gmail.com'}>Contact Operations</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
