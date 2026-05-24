import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const Methodology = () => {
  const steps = [
    {
      id: 'input',
      step: 'Step 01',
      title: 'Input',
      media: '/img-tech-1.webp',
      mobileMedia: '/img-tech-1-mobile.webp',
      body: 'Solar, storage, demand, and operating constraints enter the system. We ingest high-fidelity data from across the energy infrastructure to build a complete system model.',
    },
    {
      id: 'analysis',
      step: 'Step 02',
      title: 'Analysis',
      media: '/img-infra-1.webp',
      mobileMedia: '/img-infra-1-mobile.webp',
      body: 'SanelX evaluates behavior, relationships, and system conditions. Our intelligence engine runs thousands of simulations to identify the optimal state for any given constraint.',
    },
    {
      id: 'decision',
      step: 'Step 03',
      title: 'Decision',
      media: '/img-grid-2.webp',
      body: 'The platform identifies stronger, more reliable, and more efficient system actions. Raw data is transformed into structured, actionable operational decisions in real time.',
    },
  ];

  return (
    <div style={{ background: '#000' }}>
      <SEO 
        title="Methodology | The SanelX Approach"
        description="Our three-step methodology: Input, Analysis, and Decision. How SanelX transforms energy behavior into system strength."
        canonical="https://sanelx.com/methodology"
      />
      {steps.map((s) => (
        <section key={s.id} className="impact-section">
          <div className="impact-media-wrapper">
            <img 
              src={s.media} 
              srcSet={s.mobileMedia ? `${s.mobileMedia} 768w, ${s.media} 1920w` : undefined}
              sizes="100vw"
              alt={s.title} 
              loading="lazy" 
              decoding="async" 
            />
            <div className="vignette-overlay" />
          </div>
          <div style={{ position: 'relative', zIndex: 10, width: '100%', padding: '0 8vw 8vh' }}>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              style={{ fontSize: '0.9rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.25em', color: 'rgba(255,255,255,0.75)', marginBottom: '1rem' }}
            >
              {s.step}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontWeight: 800, color: '#fff', textShadow: '0 2px 20px rgba(0,0,0,0.8)', textTransform: 'uppercase', lineHeight: 1, marginBottom: '1.5rem' }}
            >
              {s.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              style={{ fontSize: '1.25rem', maxWidth: '580px', fontWeight: 700, color: 'rgba(255,255,255,0.95)', lineHeight: 1.75, textShadow: '0 1px 8px rgba(0,0,0,0.9)' }}
            >
              {s.body}
            </motion.p>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Methodology;
