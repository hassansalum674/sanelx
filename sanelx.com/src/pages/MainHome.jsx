import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import CinematicVideo from '../components/CinematicVideo';

const slides = [
  {
    id: 'hero',
    isVideo: false,
    media: '/img-grid-1.webp', // Infrastructure asset
    isLight: false,
    isHero: true,
    title: 'SANELX',
    sub: 'Sovereign Energy Infrastructure.\nStandardizing the future of global energy intelligence.',
    cta1: { label: 'EXPLORE SOLUTIONS', to: '/solutions', isExternal: false },
    cta2: { label: 'INVESTOR PORTAL', to: 'https://ir.sanelx.com', isExternal: true },
  },
  {
    id: 'mission',
    isVideo: false,
    media: '/img-infra-1.webp',
    isLight: false,
    isHero: false,
    title: 'ENERGY SOVEREIGNTY',
    sub: 'SanelX builds the systems that ensure reliability,\nefficiency, and independence for nations and industries.',
    cta1: { label: 'OUR METHODOLOGY', to: '/methodology', isExternal: false },
    cta2: null,
  },
  {
    id: 'synex',
    isVideo: false,
    media: '/img-solar-2.webp',
    isLight: false,
    isHero: false,
    title: 'SYNEX INTELLIGENCE',
    sub: 'Professional-grade simulation engine for precision solar and battery sizing.\nModel performance based on strict mathematics, not guesswork.',
    cta1: { label: 'EXPLORE SYNEX', to: '/synex', isExternal: false },
    cta2: { label: 'LAUNCH ENGINE', to: 'https://synex.sanelx.com', isExternal: true },
  }
];

const MainHome = () => {
  return (
    <div style={{ background: '#000' }}>
      <SEO 
        title="SanelX | Energy Infrastructure & Intelligence"
        description="SanelX develops advanced energy intelligence and dynamic infrastructure for energy independence."
        canonical="https://sanelx.com/"
        schemaData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "SanelX",
          "url": "https://sanelx.com",
          "logo": "https://sanelx.com/sanelx_logo.webp",
          "description": "Sovereign Energy Infrastructure and Intelligence."
        }}
      />
      {slides.map(s => (
        <section key={s.id} className="impact-section">
          <div className="impact-media-wrapper" style={{ backgroundColor: '#000' }}>
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              <img
                src={s.media}
                sizes="100vw"
                alt={s.title}
                loading={s.isHero ? 'eager' : 'lazy'}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className={s.isLight ? 'vignette-light' : 'vignette-dark'} />
          </div>
          <div className="impact-content">
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              style={{ whiteSpace: 'pre-line' }}
            >
              {s.title}
            </motion.h1>
            {s.sub && (
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.28, duration: 0.9 }}
                style={{ whiteSpace: 'pre-line' }}
              >
                {s.sub}
              </motion.p>
            )}
            
            <motion.div
              className="btn-group"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              {s.cta1 && (
                s.cta1.isExternal ? 
                <a href={s.cta1.to} target="_blank" rel="noreferrer" className="btn-tesla btn-tesla-solid">{s.cta1.label}</a> :
                <Link to={s.cta1.to} className="btn-tesla btn-tesla-solid">{s.cta1.label}</Link>
              )}
              {s.cta2 && (
                s.cta2.isExternal ?
                <a href={s.cta2.to} target="_blank" rel="noreferrer" className="btn-tesla">{s.cta2.label}</a> :
                <Link to={s.cta2.to} className="btn-tesla">{s.cta2.label}</Link>
              )}
            </motion.div>
          </div>
        </section>
      ))}
    </div>
  );
}

export default MainHome;
