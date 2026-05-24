import React, { useEffect } from 'react';
import './HassanSalum.css';

const HassanSalum = () => {
  useEffect(() => {
    document.title = 'Hassan Salum — Founder & CEO | SanelX';

    const setMeta = (name, content, isProp = false) => {
      let el = document.querySelector(isProp ? `meta[property="${name}"]` : `meta[name="${name}"]`);
      if (!el) { el = document.createElement('meta'); isProp ? el.setAttribute('property', name) : el.setAttribute('name', name); document.head.appendChild(el); }
      el.setAttribute('content', content);
    };

    setMeta('description', 'Hassan Salum is a Tanzanian technology entrepreneur, software architect, and researcher. Founder & CEO of SanelX and CorelTex, pioneering the Sovereign Memory Layer and Tlex Q1 engine for AI infrastructure across East Africa.');
    setMeta('keywords', 'Hassan Salum, Hassan Salum Magembe, SanelX, CorelTex, Tlex Q1, Sovereign Memory Layer, Tanzanian entrepreneur, AI infrastructure, energy systems, East Africa technology');
    setMeta('author', 'Hassan Salum');
    setMeta('robots', 'index, follow');
    setMeta('og:title', 'Hassan Salum — Founder & CEO | SanelX', true);
    setMeta('og:description', 'Tanzanian technology entrepreneur pioneering Sovereign AI Memory and grid-scale energy intelligence through SanelX and CorelTex.', true);
    setMeta('og:image', `${window.location.origin}/hassan-salum-ceo-coreltex-sanelx-official.webp`, true);
    setMeta('og:url', window.location.href, true);
    setMeta('og:type', 'profile', true);
    setMeta('og:locale', 'en_US', true);
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', 'Hassan Salum — Founder & CEO | SanelX');
    setMeta('twitter:description', 'Tanzanian entrepreneur. Founder of SanelX & CorelTex. Pioneer of Sovereign AI Memory.');
    setMeta('twitter:image', `${window.location.origin}/hassan-salum-ceo-coreltex-sanelx-official.webp`);

    const schema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Hassan Salum Magembe",
      "alternateName": "Hassan Salum",
      "description": "Hassan Salum is a Tanzanian technology entrepreneur, software architect, and researcher. He is the founder and CEO of CorelTex, an artificial intelligence infrastructure company, and SanelX, a high-performance technology firm specializing in deep-tech, AI infrastructure, and modern energy systems. Salum is recognized for pioneering the Sovereign Memory Layer, a breakthrough in persistent AI memory architecture, and for his work in grid-scale intelligence for renewable energy networks. He advocates for Technological Sovereignty across Africa.",
      "birthDate": "2007-09-18",
      "birthPlace": { "@type": "Place", "name": "Kilimanjaro, Tanzania" },
      "nationality": "Tanzanian",
      "jobTitle": "Founder & Chief Executive Officer",
      "alumniOf": [
        { "@type": "EducationalOrganization", "name": "Little Treasures Schools", "address": { "@type": "PostalAddress", "addressLocality": "Shinyanga", "addressCountry": "TZ" } },
        { "@type": "EducationalOrganization", "name": "Chief Sarwatt Secondary School", "address": { "@type": "PostalAddress", "addressLocality": "Manyara Region", "addressCountry": "TZ" } }
      ],
      "knowsAbout": ["Artificial Intelligence", "AI Infrastructure", "Sovereign Memory Architecture", "Grid-Scale Energy Intelligence", "Software Architecture", "High-Performance Computing", "Cybersecurity", "Machine Learning", "Renewable Energy Systems"],
      "worksFor": [
        { "@type": "Organization", "name": "SanelX", "url": "https://ir.sanelx.com", "description": "High-performance technology firm specializing in deep-tech, AI infrastructure, and modern energy systems." },
        { "@type": "Organization", "name": "CorelTex", "url": "https://ir.coreltex.com", "description": "Artificial intelligence infrastructure company and developer of the Sovereign Memory Layer and Tlex Q1 engine." }
      ],
      "image": `${window.location.origin}/hassan-salum-ceo-coreltex-sanelx-official.webp`,
      "url": window.location.href,
      "sameAs": ["https://ir.coreltex.com/hassan-salum", "https://ir.sanelx.com/hassan-salum", "https://www.wikidata.org/wiki/Q138411600"]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'founder-schema';
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);

    // STICKY FIX: SanelX global CSS sets overflow-x: hidden on html & body
    // which forces body to become the scroll container, breaking position:sticky.
    const prevBodyOverflowX = document.body.style.overflowX;
    const prevHtmlOverflowX = document.documentElement.style.overflowX;
    document.body.style.overflowX = 'visible';
    document.documentElement.style.overflowX = 'visible';

    return () => {
      const s = document.getElementById('founder-schema');
      if (s) document.head.removeChild(s);
      document.body.style.overflowX = prevBodyOverflowX;
      document.documentElement.style.overflowX = prevHtmlOverflowX;
    };
  }, []);

  return (
    <div className="founder-page-container">
      <div className="founder-content-wrapper">

        <section className="founder-hero">
          <div className="founder-hero-text">
            <div className="subtitle">Founder &amp; Chief Executive Officer</div>
            <h1>Hassan Salum</h1>
            <p className="tagline">
              "True intelligence is not a conversation, but an anticipation of needs."
            </p>
            <p>
              Hassan Salum Magembe is a Tanzanian technology entrepreneur, software architect,
              and researcher. He is the founder and CEO of <strong>SanelX</strong> — a
              high-performance technology firm specializing in deep-tech, AI infrastructure,
              and modern energy systems — and <strong>CorelTex</strong>, an artificial intelligence
              infrastructure company.
            </p>
            <p>
              Salum is recognised for pioneering the <strong>Sovereign Memory Layer</strong>, a
              breakthrough in persistent AI memory architecture, and for his work in grid-scale
              intelligence for renewable energy networks across East Africa.
            </p>
          </div>
          <div className="founder-hero-image">
            <img
              src="/hassan-salum-ceo-coreltex-sanelx-official.webp"
              alt="Hassan Salum, Founder and CEO of SanelX and CorelTex — official portrait"
              loading="eager"
            />
          </div>
        </section>

        <section className="founder-timeline">
          <div className="founder-portrait">
            <img
              src="/hassan-salum-founder-visionary-portrait.webp"
              alt="Hassan Salum Magembe — visionary founder portrait, SanelX"
              loading="lazy"
            />
          </div>

          <div className="founder-story">
            <h2>Early Life &amp; Education</h2>
            <div className="founder-card">
              <p>
                Born on September 18, 2007, in Kilimanjaro and raised in Shinyanga, Tanzania,
                Salum attended Little Treasures Schools and graduated secondary education in 2024.
                He subsequently relocated to the Manyara Region to attend Chief Sarwatt Secondary
                School for Advanced Level studies, choosing Physics, Chemistry, and Advanced
                Mathematics (PMCs) as a rigorous foundation for AI and energy infrastructure.
              </p>
              <p>
                It was here Salum acquired a ThinkPad T420 and transitioned from Windows to Linux
                Mint — a move enabling his first proprietary AI architecture prototypes. Parallel
                to formal schooling, he completed Coursera specialisations in Cybersecurity
                Foundations and Machine Learning, directly informing the Tlex Q1 engine's security
                protocols and neural persistence models.
              </p>
            </div>

            <h2>SanelX — Intelligence &amp; Energy Systems</h2>
            <div className="founder-card">
              <h3>The Mission</h3>
              <p>
                Salum founded SanelX to address a critical gap at the intersection of AI and energy
                infrastructure. SanelX applies offline AI intelligence — powered by the CorelTex
                Tlex Q1 engine — to grid-scale renewable energy monitoring, power storage
                optimisation, and transmission network stability.
              </p>
              <p>
                His study of thermodynamics, molecular energy transfer, and fluid pressure directly
                informs the grid-intelligence models used throughout SanelX systems.
              </p>
            </div>
            <div className="founder-card">
              <h3>Operations</h3>
              <p>
                As of early 2026, Salum manages SanelX alongside <strong>Idrisa Khalfan</strong>,
                Head of Operations, who oversees the operational scaling of both SanelX and
                CorelTex across the East African region.
              </p>
            </div>

            <h2>CorelTex &amp; Tlex Q1</h2>
            <div className="founder-card">
              <h3>Sovereign Memory Layer</h3>
              <p>
                Salum founded CorelTex to solve the "sovereign problem" — the inability of AI
                systems to maintain persistent, high-performance memory without relying on
                foreign-owned cloud infrastructure. The <strong>Tlex Q1 engine</strong> is
                an offline-first intelligence system for Large Language Models, with a commercial
                rollout targeted for April–May 2026.
              </p>
            </div>

            <h2>Philosophy &amp; Vision</h2>
            <div className="founder-card">
              <h3>Post-Chatbot Era &amp; Qelvoro</h3>
              <p>
                Through the Qelvoro project, Salum is developing AI-powered smart glasses
                providing hands-free, context-aware environmental guidance — turning AI from a
                passive information source into an active, anticipatory digital co-worker.
              </p>
              <h3>Technological Sovereignty</h3>
              <p>
                Salum advocates for Technological Sovereignty in Africa, arguing nations must build
                native primary infrastructure rather than consuming foreign AI "black boxes." He
                views sovereign AI as a matter of national security for Tanzania and the broader
                East African community, with a long-term vision of a Green AI Revolution where
                intelligence and renewable energy systems operate as a unified infrastructure.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default HassanSalum;
