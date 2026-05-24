import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const Synex = () => {
  return (
    <div style={{ background: '#0d1117', color: '#c9d1d9', minHeight: '100vh', fontFamily: 'Inter, system-ui, sans-serif' }}>
      <SEO 
        title="Synex Energy Intelligence | SanelX"
        description="Comprehensive technical analysis, stress-testing, and ROI modeling for solar and energy storage systems."
        canonical="https://sanelx.com/synex"
      />
      
      {/* Informational Hero */}
      <section style={{ padding: '12rem 2rem 6rem', textAlign: 'center', borderBottom: '1px solid #30363d', background: 'radial-gradient(ellipse at top, rgba(88, 166, 255, 0.15), transparent 60%)' }}>
        <motion.div
           initial={{ opacity: 0, y: 30 }} 
           animate={{ opacity: 1, y: 0 }} 
           transition={{ duration: 0.8 }}
           style={{ maxWidth: '800px', margin: '0 auto' }}
        >
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '-0.02em', background: 'linear-gradient(90deg, #58a6ff, #bc8cff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '1rem' }}>
                Synex Intelligence
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#8b949e', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                A professional-grade energy simulation engine designed to replace guesswork with pure mathematical precision. We model energy generation, load demands, and hardware constraints on an hour-by-hour basis to accurately predict system performance and actual financial return.
            </p>
            <a 
                href="https://synex.sanelx.com" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  background: '#58a6ff',
                  color: '#000',
                  padding: '1rem 2.5rem',
                  borderRadius: '8px',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  boxShadow: '0 4px 20px rgba(88, 166, 255, 0.2)',
                  transition: 'transform 0.2s, background 0.2s'
                }}
                onMouseOver={(e) => { e.target.style.transform = 'translateY(-2px)'; e.target.style.background = '#79c0ff'; }}
                onMouseOut={(e) => { e.target.style.transform = 'translateY(0)'; e.target.style.background = '#58a6ff'; }}
            >
                Launch Synex Analyzer
            </a>
        </motion.div>
      </section>

      {/* Deep Information Grid */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '6rem 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                style={{ background: '#161b22', padding: '2.5rem', borderRadius: '12px', border: '1px solid #30363d' }}
              >
                  <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem' }}>Precision Hour-by-Hour Modeling</h3>
                  <p style={{ color: '#8b949e', lineHeight: 1.6, fontSize: '1.05rem' }}>
                      Traditional solar estimates rely on monthly averages. Synex breaks down exactly how energy moves via 24-step daily generation profiles. It cross-references the specific efficiency curve of your panels against the realtime draw of your building to determine the exact moment your battery takes over.
                  </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                style={{ background: '#161b22', padding: '2.5rem', borderRadius: '12px', border: '1px solid #30363d' }}
              >
                  <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem' }}>Extreme Weather Stress Tests</h3>
                  <p style={{ color: '#8b949e', lineHeight: 1.6, fontSize: '1.05rem' }}>
                      Peak performance metrics mean nothing if your system collapses during a storm outtage. We mathematically stress-test custom battery capacities against multi-day cloudy and rainy scenarios to guarantee resilience, revealing exactly when and how often your grid fallback is required.
                  </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                style={{ background: '#161b22', padding: '2.5rem', borderRadius: '12px', border: '1px solid #30363d' }}
              >
                  <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem' }}>True Financial ROI Analytics</h3>
                  <p style={{ color: '#8b949e', lineHeight: 1.6, fontSize: '1.05rem' }}>
                      Energy is capital. Synex integrates your regional grid prices, hardware CapEx (installation pricing), and battery degradation over time to perform a rigorous sensitivity analysis. See precisely how many years it will take to break even and how much money you save over 10 to 20 years.
                  </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
                style={{ background: 'rgba(88, 166, 255, 0.05)', padding: '2.5rem', borderRadius: '12px', border: '1px solid rgba(88, 166, 255, 0.2)' }}
              >
                  <h3 style={{ fontSize: '1.5rem', color: '#58a6ff', marginBottom: '1rem' }}>Smart Optimization Advisor</h3>
                  <p style={{ color: '#8b949e', lineHeight: 1.6, fontSize: '1.05rem' }}>
                      Our proprietary algorithm doesn't just show data—it provides expert guidance. Synex detects critical hardware imbalances (like an oversized battery causing excessive capital waste) and produces an actionable, prioritized plan to optimize sizing before you deploy capital.
                  </p>
              </motion.div>

          </div>
      </section>

      {/* CTA Footer Section */}
      <section style={{ textAlign: 'center', padding: '6rem 2rem', background: '#000', borderTop: '1px solid #30363d' }}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '1.5rem' }}>Make Decisions Based on Math, Not Guesses</h2>
            <p style={{ fontSize: '1.1rem', color: '#8b949e', maxWidth: '600px', margin: '0 auto 3rem' }}>
                Join professional project managers, engineers, and facility owners who utilize Synex to architect their power infrastructure. 
            </p>
            <a 
                href="https://synex.sanelx.com" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                    display: 'inline-block',
                    background: '#fff',
                    color: '#000',
                    padding: '1rem 3rem',
                    borderRadius: '30px',
                    fontSize: '1rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    transition: 'transform 0.2s, background 0.2s'
                }}
                onMouseOver={(e) => { e.target.style.transform = 'scale(1.05)'; e.target.style.background = '#f0f0f0'; }}
                onMouseOut={(e) => { e.target.style.transform = 'scale(1)'; e.target.style.background = '#fff'; }}
            >
                Start Simulating
            </a>
        </motion.div>
      </section>

    </div>
  );
};

export default Synex;

