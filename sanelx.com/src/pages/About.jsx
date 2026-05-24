import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import CinematicVideo from '../components/CinematicVideo';

const heroLQIP = "data:image/jpeg;base64,/9j//gAQTGF2YzYwLjMxLjEwMgD/2wBDAAgEBAQEBAUFBQUFBQYGBgYGBgYGBgYGBgYHBwcICAgHBwcGBgcHCAgICAkJCQgICAgJCQoKCgwMCwsODg4RERT/xABzAAADAQAAAAAAAAAAAAAAAAACBQQGAQEBAAAAAAAAAAAAAAAAAAACAxAAAgEDAwIDCQEBAAAAAAAAAQIDBBIRIQAFFEExEwZxpJRhVSLTMtJRQhEAAQMEAgMBAAAAAAAAAAAAAQAhAjETEhFBkYFRAwT/wAARCAALABQDASIAAhEAAxEA/9oADAMBAAIRAxEAPwAKHkaGvp1niqmW4lJeojaOSSZGKkKguNg/VMZJwSfHdVSKTyI2fkqVDGrkuHlZEy4Kk2xYJ1OQfZuTjaWmm5GehaGLp0WAKiIsbDvpJGFl8Rr9+u9ZHS00UaKsMWAwUZRW0x3LAk/MnU7ifpLHey0zHrwqWosGeAlT3xVZqWv4iaxqvmkE1gDskM0glI08zSMBC3/SDS7Ld9j1Xp3657rN/G0vr6gpU9ST2K0d0ULERyyxrmzGbUcKPDsNpejh/Bm+In/ACbQ/KZAG6Rt6DlC/i2IZqlf/9k=";
const infraLQIP = "data:image/jpeg;base64,/9j//gAQTGF2YzYwLjMxLjEwMgD/2wBDAAgEBAQEBAUFBQUFBQYGBgYGBgYGBgYGBgYHBwcICAgHBwcGBgcHCAgICAkJCQgICAgJCQoKCgwMCwsODg4RERT/xAB2AAEBAQEBAAAAAAAAAAAAAAAEAgUDBwEBAQEAAAAAAAAAAAAAAAAABgIDEAABAwIEBgAHAQAAAAAAAABEQIDBBIhMQAFIlFBBhNhkpMV0hcHwWMRAAIBBAIBBQEAAAAAAAAAAAECESEDBRIABBSBUUEycQb/AARCAANABQDASIAAhEAAxEA/9oADAMBAAIRAxEAPwBnbG1bZR0rYzA6EuReDP1z103lnbL3uoJKulZPkYyWl7FyvaMWr0uRThrySk7j3cyQsFbWAStvC1MpsS7hzFwKej702m3KofIKkueX1IPkJkfc6wojnKC4clxHUnQe9/KZEdp793IQasNNmO0iJ2ApH7xCmc6jWlReqfYyQBHp88291/X0MtY98DvJGcnMCtOJVCMNG/HR5O+E6uHdD42rFdhmZZf47VfVP8B82b79brezKAL5inURMGscgtj2JPjtWv2HP//Z";

const About = () => {
  return (
    <div style={{ background: '#000' }}>
      <SEO 
        title="About SanelX | Leadership and Vision"
        description="Meet the core team behind SanelX. Led by Hassan Salum and Idrisa Khalfan, we are building the next layer of energy intelligence for modern infrastructure."
        canonical="https://sanelx.com/about"
        schemaData={[
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Hassan Salum",
            "jobTitle": "Founder & CEO",
            "worksFor": {
              "@type": "Organization",
              "name": "SanelX"
            },
            "description": "Leader in energy modeling, simulation, and intelligent decision-making for complex infrastructure."
          },
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Idrisa Khalfan",
            "jobTitle": "Head of Operations",
            "worksFor": {
              "@type": "Organization",
              "name": "SanelX"
            },
            "description": "Expert in executing complex infrastructure strategies and operational excellence for energy systems."
          }
        ]}
      />

      {/* ── HERO ── */}
      <section className="impact-section">
        <div className="impact-media-wrapper">
          <CinematicVideo 
            media="/about-bg.mp4"
            poster="/about-bg-poster.webp"
            lqip={heroLQIP}
            isHero={true}
          />
          <div className="vignette-dark" />
        </div>
        <div className="impact-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
          >
            Building the Next Layer<br />of Energy Intelligence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 1 }}
          >
            A focused team solving real infrastructure complexity at scale.
          </motion.p>
        </div>
      </section>

      {/* ── FOUNDER ── */}
      <section className="leader-section">
        <div className="leader-photo">
          <img src="/hassan-salum-ceo-coreltex-sanelx-official.webp" alt="Hassan Salum" loading="lazy" decoding="async" />
        </div>
        <div className="leader-vignette" />
        <div className="leader-text">
          <motion.p
            className="role"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Founder &amp; CEO
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            Hassan Salum
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            Hassan Salum is a technology entrepreneur and architect, founder of SanelX and CorelTex. Leads the design and development of modern energy intelligence systems and pioneering sovereign AI memory infrastructure.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            style={{ marginTop: '2rem' }}
          >
            <a href="/hassan-salum" className="btn-tesla btn-tesla-solid">Read Biography</a>
          </motion.div>
        </div>
      </section>

      {/* ── HEAD OF OPERATIONS ── */}
      <section className="leader-section">
        <div className="leader-photo">
          <img src="/ops.webp" alt="Idrisa Khalfan" loading="lazy" decoding="async" />
        </div>
        <div className="leader-vignette" />
        <div className="leader-text">
          <motion.p
            className="role"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Head of Operations
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            Idrisa Khalfan
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            Executing complex infrastructure strategies with technical precision
            and operational excellence — ensuring every system deployment meets
            mission-critical standards.
          </motion.p>
        </div>
      </section>

      {/* ── VISION ── */}
      <section className="impact-section">
        <div className="impact-media-wrapper" style={{ backgroundColor: '#000' }}>
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            {/* LQIP for static images */}
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `url(${infraLQIP})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'blur(10px)',
                transform: 'scale(1.1)',
                zIndex: 1
              }}
            />
            <img 
              src="/img-infra-1.webp" 
              srcSet="/img-infra-1-mobile.webp 768w, /img-infra-1.webp 1920w"
              sizes="100vw"
              alt="Vision" 
              loading="lazy" 
              decoding="async" 
              style={{ position: 'relative', zIndex: 2, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }} 
              onLoad={(e) => {
                e.target.previousSibling.style.opacity = '0';
              }}
            />
          </div>
          <div className="vignette-dark" />
        </div>
        <div className="impact-content">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Transforming raw behavior<br />into system strength
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Modern energy infrastructure requires a new layer of intelligent
            control. SanelX builds the systems that handle this complexity —
            ensuring reliability and efficiency at scale.
          </motion.p>
          <div className="btn-group">
            <a href="/contact" className="btn-tesla btn-tesla-solid">Work with Us</a>
            <a href="/solutions" className="btn-tesla">Our Capabilities</a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
