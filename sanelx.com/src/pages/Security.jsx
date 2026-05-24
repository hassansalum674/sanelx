import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import CinematicVideo from '../components/CinematicVideo';

const Security = () => {
  const pillars = [
    {
      id: "integrity",
      title: "System Integrity",
      description: "Rigorous testing and simulation to ensure that intelligence decisions strengthen energy networks.",
      media: "/img-dash-3.webp"
    },
    {
       id: "infrastructure",
       title: "Network Protection",
       description: "Securing the critical infrastructure responsible for modern energy delivery.",
       media: "/img-tech-1.webp",
       mobileMedia: "/img-tech-1-mobile.webp"
    }
  ];

  return (
    <div className="security-page fade-in">
      <SEO 
        title="Security & Integrity | Infrastructure Protection"
        description="SanelX ensures mission-critical safety and system integrity for energy networks through rigorous simulation and protection protocols."
        canonical="https://sanelx.com/security"
      />
       <section className="impact-section" style={{ height: '70vh' }}>
        <div className="impact-media-wrapper">
          <CinematicVideo 
            media="/hero-bg.mp4"
            poster="/hero-bg-poster.webp"
            lqip="data:image/jpeg;base64,/9j//gAQTGF2YzYwLjMxLjEwMgD/2wBDAAgEBAQEBAUFBQUFBQYGBgYGBgYGBGBgYGBYHBwcICAgHBwcGBgcHCAgICAkJCQgICAgJCQoKCgwMCwsODg4RERT/xAB0AAEBAQEAAAAAAAAAAAAAAAAEBQEDAQEBAQAAAAAAAAAAAAAAAAAFAgMQAAICAQQCAAILAQAAAAAAAAIBAwQFACERBhMSBxRUU5WUQhU000EX1DERAAIBAwUBAQEAAAAAAAAAAAECAwAEEoERIiEy8EEx/8AAEQgACwAUAwEiAAIRAAMRAP/aAAwDAQACEQMRAD8Au9kynYcRfgxodmWVp04wOtEJwjaikbli/VwojMUC2jlHhi1suE9VKvxDsFQoUK4flKrnQrk/aWTlO1FAx83zcbYmJs37L234RcrnTc5hMRPmspLJSrM48dVkjJRoWJkRmRL143ZNtvR+6dQ6xNhOuWDxNLzSZPFxSSqJCcoHJyQyEPDNNpbFzpSW1SazBf3m3JQFGqjo0el3JFdlV8YjixyOjHsUgu608QEMVgQtSTRBZI6l6rFEvJ+BhbtKVEuN+dv+az+ysX9EsfaWL/16BZoY/EGFWjSpV4RiiaAatd7sFy2yjZNv+W23rl5F9TV+61v2tQthHsN2b+fftaG9k3PQr//Z"
            isHero={true}
          />
          <div className="vignette-overlay"></div>
        </div>
        <div className="impact-content reveal-up">
           <motion.h1 style={{ fontSize: '5rem' }}>Security & Integrity</motion.h1>
           <motion.p style={{ fontSize: '1.4rem' }}>Mission-critical safety for energy infrastructure.</motion.p>
        </div>
      </section>

      {pillars.map((pillar) => (
        <section key={pillar.id} className="impact-section">
          <div className="impact-media-wrapper">
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              <img 
                src={pillar.media} 
                srcSet={pillar.mobileMedia ? `${pillar.mobileMedia} 768w, ${pillar.media} 1920w` : undefined}
                sizes="100vw"
                alt={pillar.title} 
                loading="lazy" 
                decoding="async" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="vignette-overlay"></div>
          </div>
          <div className="impact-content reveal-up">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              style={{ fontSize: '4rem' }}
            >
              {pillar.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              style={{ fontSize: '1.5rem', fontWeight: 700, maxWidth: '700px', margin: '0 auto 3rem' }}
            >
              {pillar.description}
            </motion.p>
            <div className="btn-group">
               <button className="btn-tesla btn-tesla-solid">Safety Protocols</button>
               <button className="btn-tesla">Audit Systems</button>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Security;
