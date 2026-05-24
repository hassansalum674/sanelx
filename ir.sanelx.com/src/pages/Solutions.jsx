import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import CinematicVideo from '../components/CinematicVideo';

const Solutions = () => {
  const solutions = [
    {
      id: 'optimization',
      media: '/img-solar-2.webp',
      isVideo: false,
      align: 'left',
      title: 'Energy Optimization',
      body: 'Improve how energy systems allocate, store, and use power across modern infrastructure. Our algorithms factor in generation volatility and demand patterns to ensure peak efficiency.',
    },
    {
      id: 'storage',
      media: '/solutions-bg.mp4',
      poster: '/solutions-bg-poster.webp',
      isVideo: true,
      align: 'right',
      title: 'Storage Intelligence',
      body: 'Support better battery sizing, usage logic, and performance strategy. Maximize the lifecycle and ROI of energy storage assets through intelligent dispatch logic.',
    },
    {
      id: 'decision',
      media: '/img-batt-1.webp',
      isVideo: false,
      align: 'left',
      title: 'Decision Systems',
      body: 'Transform raw energy data into structured operational decisions. Move from reactive monitoring to proactive, automated system management.',
    },
    {
      id: 'infra',
      media: '/img-energy-1.webp',
      mobileMedia: '/img-infra-1-mobile.webp',
      isVideo: false,
      align: 'right',
      title: 'Infrastructure Control',
      body: 'End-to-end visibility and intelligent control of your energy network — from generation assets to distribution endpoints.',
    },
  ];

  return (
    <div style={{ background: '#000' }}>
      <SEO 
        title="Solutions | Energy Optimization and Storage Intelligence"
        description="Explore SanelX's modular intelligence for energy infrastructure: from storage optimization to grid-scale decision systems."
        canonical="https://sanelx.com/solutions"
      />
      
      <section className="impact-section" style={{ height: '60vh' }}>
        <div className="impact-media-wrapper">
          <img src="/img-sys-1.webp" alt="Solutions Hero" loading="eager" decoding="sync" />
          <div className="vignette-overlay" />
        </div>
        <div className="impact-content">
          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            Capabilities
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            Modular intelligence for modern energy infrastructure.
          </motion.p>
        </div>
      </section>

      {solutions.map((s, i) => (
        <section key={s.id} className="impact-section">
          <div className="impact-media-wrapper">
            {s.isVideo ? (
              <CinematicVideo 
                media={s.media}
                poster={s.poster}
              />
            ) : (
              <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                <img 
                  src={s.media} 
                  srcSet={s.mobileMedia ? `${s.mobileMedia} 768w, ${s.media} 1920w` : undefined}
                  sizes="100vw"
                  alt={s.title} 
                  loading="lazy" 
                  decoding="async" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            )}
            <div className="vignette-overlay" />
          </div>

          <div style={{ position: 'relative', zIndex: 10, width: '100%', padding: '0 8vw 8vh', display: 'flex', justifyContent: s.align === 'left' ? 'flex-start' : 'flex-end' }}>
            <div style={{ maxWidth: '600px' }}>
              <motion.h2
                initial={{ opacity: 0, x: s.align === 'left' ? -28 : 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 800, color: '#fff', textShadow: '0 2px 20px rgba(0,0,0,0.8)', marginBottom: '1.2rem', textTransform: 'uppercase', lineHeight: 1.1 }}
              >
                {s.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: s.align === 'left' ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.2 }}
                style={{ fontSize: '1.25rem', fontWeight: 700, color: 'rgba(255,255,255,0.95)', lineHeight: 1.7, textShadow: '0 1px 8px rgba(0,0,0,0.9)' }}
              >
                {s.body}
              </motion.p>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Solutions;
