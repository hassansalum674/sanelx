import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import CinematicVideo from '../components/CinematicVideo';

const slides = [
  {
    id: 'hero',
    isVideo: false,
    media: '/ir3.jpg',
    isLight: false,
    isHero: true,
    title: 'SANELX',
    sub: 'Sovereign Energy Infrastructure.\nOfficial investor and identity gateway for SanelX.',
    cta1: { label: 'ENTER SANELX', to: 'https://sanelx.com', isExternal: true },
    cta2: null,
  },
  {
    id: 'system',
    isVideo: false,
    media: '/ir4.jpg',
    isLight: false,
    isHero: false,
    title: 'CORE SYSTEM',
    sub: 'SanelX operates advanced energy intelligence\nand dynamic grid optimization layers.',
    cta1: null,
    cta2: null,
  },
  {
    id: 'leadership',
    isVideo: false,
    media: '/ir5.jpg',
    isLight: false,
    isHero: false,
    title: 'LEADERSHIP ACCESS',
    sub: '',
    isLeadership: true,
    cta1: null,
    cta2: null,
  }
];

const Home = () => {
  return (
    <div style={{ background: '#000' }}>
      <SEO 
        title="SanelX | Investor Relations & Identity"
        description="Official investor and identity gateway for SanelX. Intelligence for Modern Energy Systems."
        canonical="https://ir.sanelx.com/"
        schemaData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "SanelX",
          "url": "https://ir.sanelx.com",
          "logo": "https://sanelx.com/sanelx_logo.webp",
          "description": "Official investor and identity gateway for SanelX.",
          "contactPoint": {
            "@type": "ContactPoint",
            "email": "info@sanelx.com",
            "contactType": "customer service"
          }
        }}
      />
      {slides.map(s => (
        <section key={s.id} className="impact-section">
          <div className="impact-media-wrapper" style={{ backgroundColor: '#000' }}>
            {s.isVideo
              ? (
                <CinematicVideo 
                  media={s.media}
                  mobileMedia={s.mobileMedia}
                  poster={s.poster}
                  lqip={s.lqip}
                  isHero={s.isHero}
                />
              )
              : (
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                  {s.lqip && (
                    <div 
                      style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: `url(${s.lqip})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'blur(10px)',
                        transform: 'scale(1.1)',
                        zIndex: 1
                      }}
                    />
                  )}
                  <img
                    src={s.media}
                    srcSet={s.mobileMedia ? `${s.mobileMedia} 768w, ${s.media} 1920w` : undefined}
                    sizes="100vw"
                    alt={s.title}
                    loading={s.isHero ? 'eager' : 'lazy'}
                    decoding={s.isHero ? 'sync' : 'async'}
                    onLoad={(e) => {
                      if (e.target.previousSibling) e.target.previousSibling.style.opacity = '0';
                    }}
                    style={{ position: 'relative', zIndex: 2, width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              )}
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
            
            {s.isLeadership ? (
              <motion.div
                className="btn-group"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                style={{ marginTop: '2rem' }}
              >
                <Link to="/hassan-salum" className="btn-tesla" style={{ padding: '1.5rem 2.5rem', background: '#050505', borderColor: 'rgba(255,255,255,0.2)' }}>Visit the Founder & CEO</Link>
                <Link to="/idrisa-khalfan" className="btn-tesla" style={{ padding: '1.5rem 2.5rem', background: '#050505', borderColor: 'rgba(255,255,255,0.2)' }}>Visit the Head of Operations</Link>
              </motion.div>
            ) : (
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
                {s.cta2 && <Link to={s.cta2.to} className="btn-tesla">{s.cta2.label}</Link>}
              </motion.div>
            )}
          </div>
        </section>
      ))}
    </div>
  );
}

export default Home;
