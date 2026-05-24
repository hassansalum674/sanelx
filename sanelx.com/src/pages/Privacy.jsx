import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const Privacy = () => {
  const sections = [
    {
      title: "1. Introduction",
      content: "SanelX is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard information when you interact with our website and our family of products, including Synex Energy Intelligence and CorelTex Retail (collectively, the 'Services')."
    },
    {
      title: "2. Information We Collect",
      subsections: [
        {
          subtitle: "2.1 Information You Provide",
          items: ["Name", "Email address", "Company details", "Communications submitted via forms"]
        },
        {
          subtitle: "2.2 Automatically Collected Data",
          items: ["IP address", "Browser type", "Device information", "Pages visited", "Usage patterns"]
        },
        {
          subtitle: "2.3 Technical and System Data",
          items: ["System inputs (e.g., energy load profiles, hardware parameters for Synex)", "Retail transaction data and market metrics (for CorelTex)", "Usage metrics", "Analytical interactions"]
        }
      ]
    },
    {
      title: "3. How We Use Information",
      items: [
        "Operate and improve Services",
        "Analyze system performance",
        "Respond to inquiries",
        "Maintain security and reliability",
        "Generate anonymized, aggregated market and energy intelligence",
        "Understand user interaction patterns"
      ]
    },
    {
      title: "4. Legal Basis",
      content: "We process data based on:",
      items: ["Legitimate business interests", "User consent (where applicable)", "Legal obligations"]
    },
    {
      title: "5. Data Sharing",
      content: "We do NOT sell personal data. We may share data with service providers (hosting, analytics), infrastructure partners, and legal authorities (when required)."
    },
    {
      title: "6. Cookies and Tracking",
      content: "SanelX may use cookies, analytics tools, and tracking technologies to improve user experience. You may disable cookies in your browser settings."
    },
    {
      title: "7. Data Security",
      content: "We implement access controls, encryption measures, and system monitoring. However, no system is completely secure."
    },
    {
      title: "8. Data Retention",
      content: "We retain data only as long as necessary for operational purposes, legal compliance, and system improvement."
    },
    {
      title: "9. User Rights",
      content: "Depending on your jurisdiction, you may request access, correction, deletion, or withdraw consent. Requests can be sent to our contact email."
    },
    {
      title: "10. International Transfers",
      content: "Data may be processed in different jurisdictions. We ensure reasonable safeguards for such transfers."
    },
    {
      title: "11. Children’s Privacy",
      content: "SanelX does not knowingly collect data from individuals under 18. If such data is identified, it will be removed."
    },
    {
      title: "12. Updates to Policy",
      content: "This Privacy Policy may be updated. Changes will be reflected with a new effective date."
    },
    {
      title: "13. Contact",
      content: "For privacy inquiries, please contact us at info@sanelx.com."
    }
  ];

  return (
    <div style={{ background: '#000', color: '#fff', minHeight: '100vh', padding: '12rem 5vw 8rem' }}>
      <SEO 
        title="Privacy Policy | SanelX"
        description="SanelX Privacy Policy. Learn how we collect, use, and protect your information."
        canonical="https://sanelx.com/privacy"
      />
      
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1rem', textTransform: 'uppercase' }}
        >
          Privacy Policy
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.5)', marginBottom: '4rem', fontWeight: 600 }}
        >
          Effective Date: March 29, 2026
        </motion.p>

        <div className="privacy-content">
          {sections.map((section, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              style={{ marginBottom: '4rem' }}
            >
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem', color: '#fff' }}>
                {section.title}
              </h2>
              
              {section.content && (
                <p style={{ fontSize: '1.2rem', lineHeight: '1.7', color: 'rgba(255,255,255,0.8)', marginBottom: '1rem', fontWeight: 600 }}>
                  {section.content}
                </p>
              )}

              {section.items && (
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {section.items.map((item, i) => (
                    <li key={i} style={{ fontSize: '1.2rem', lineHeight: '1.7', color: 'rgba(255,255,255,0.8)', marginBottom: '0.5rem', fontWeight: 600, paddingLeft: '1.5rem', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: 'rgba(255,255,255,0.3)' }}>—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {section.subsections && section.subsections.map((sub, i) => (
                <div key={i} style={{ marginTop: '2rem' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '1rem', color: 'rgba(255,255,255,0.6)' }}>
                    {sub.subtitle}
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {sub.items.map((item, j) => (
                      <li key={j} style={{ fontSize: '1.2rem', lineHeight: '1.7', color: 'rgba(255,255,255,0.8)', marginBottom: '0.5rem', fontWeight: 600, paddingLeft: '1.5rem', position: 'relative' }}>
                        <span style={{ position: 'absolute', left: 0, color: 'rgba(255,255,255,0.3)' }}>—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Privacy;
