import React from 'react';
import SEO from '../components/SEO';

const APP_URL = 'https://synex.sanelx.com';
const SALES_MAIL = 'mailto:support@sanelx.com?subject=Synex%20Enterprise%20Inquiry';

const plans = [
  {
    id: 'starter',
    name: 'Starter',
    price: 29,
    billed: 'Billed monthly (~Ksh 3,800)',
    tagline: '8 proposals/mo · meter CSV · presets',
    description:
      'Get off the free tier with meter CSV uploads, KPLC/TANESCO presets, and up to 8 branded client proposals per month — a lean entry point before you scale.',
    features: [
      '8 Client Proposals / month',
      'Meter CSV Upload (KPLC, TANESCO)',
      'KPLC & TANESCO tariff presets',
      'Your logo on reports',
    ],
    bestFor: 'Solo installers sending 2–8 client proposals per month.',
    cta: 'Start Proposals',
    href: APP_URL,
  },
  {
    id: 'professional',
    name: 'Professional',
    price: 59,
    billed: 'Billed monthly (~Ksh 7,700)',
    tagline: 'Unlimited proposals · TOU · hardware matrix',
    description:
      'Remove proposal caps and unlock advanced sizing for solo EPCs — TOU arbitrage, hardware compatibility, and 12-month forecasts.',
    features: [
      'Everything in Starter',
      'Unlimited Client Proposals',
      '12-Month Forecast Charts',
      'Peak Shaving & TOU Arbitrage',
      'Hardware Matrix',
      'Saved Templates',
    ],
    bestFor: 'Solo EPCs sizing commercial sites weekly.',
    cta: 'Go Unlimited',
    href: APP_URL,
    featured: true,
    badge: 'Most popular',
  },
  {
    id: 'business',
    name: 'Business',
    price: 149,
    billed: 'Billed monthly (~Ksh 19,400)',
    tagline: 'Complete EPC platform · teams · utility packs',
    description:
      'The full Synex stack for serious firms — unlimited proposals, TOU modeling, hardware matrix, interconnection artifacts, and 5 team seats.',
    features: [
      'Everything in Professional',
      'Interconnection Artifacts',
      '5 Team Seats + Invites',
      'Priority WhatsApp Support',
    ],
    bestFor: 'EPC teams submitting to utilities, lenders, and large clients.',
    cta: 'Upgrade to Business',
    href: APP_URL,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: null,
    priceLabel: 'Contact Sales',
    billed: 'Custom pricing for distributors, banks, and EPC networks',
    tagline: 'API · white-label · volume licensing',
    description:
      'White-label Synex for distributors, banks, and large EPC networks. Custom pricing, volume licensing, API access, and dedicated onboarding.',
    features: [
      'Everything in Business',
      'White-label branding',
      'Volume licensing',
      'API & custom libraries',
    ],
    bestFor: 'Distributors, banks, and pan-African EPC networks.',
    cta: 'Contact Sales',
    href: SALES_MAIL,
    contact: true,
  },
];

const pricingSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Synex',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  url: 'https://sanelx.com/synex',
  description:
    'Solar and battery simulation software for East African installers. Hardware compatibility, battery savings, and utility penalty modeling.',
  offers: plans.map((plan) => ({
    '@type': 'Offer',
    name: plan.name,
    price: plan.price === null ? undefined : String(plan.price),
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    description: plan.price === null ? 'Contact Sales — custom enterprise pricing' : `${plan.name} plan billed monthly`,
    url: plan.href,
  })),
};

const Synex = () => {
  return (
    <div className="synex-landing-wrapper">
      <SEO
        title="Synex | Solar Battery Simulation Software"
        description="Cut battery design time from 10 hours to 5 minutes. Starter $29, Professional $59, Business $149. Enterprise: contact sales."
        canonical="https://sanelx.com/synex"
        schemaData={pricingSchema}
      />

      <style>{`
        .synex-landing-wrapper {
          background-color: #060608;
          color: #ffffff;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          padding: 0;
          margin: 0;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
          scroll-behavior: smooth;
        }

        /* ── HEADER ── */
        .synex-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 2rem 5vw;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        .synex-logo-text {
          font-size: 1.4rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #ffffff;
          text-decoration: none;
        }
        .synex-logo-dot {
          color: #10b981;
        }
        .synex-header-actions {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }
        .synex-header-link {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.85rem;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .synex-header-link:hover {
          color: #ffffff;
        }
        .synex-btn-secondary {
          background: transparent;
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 0.6rem 1.4rem;
          border-radius: 4px;
          font-size: 0.85rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .synex-btn-secondary:hover {
          background: #ffffff;
          color: #000000;
          border-color: #ffffff;
        }

        /* ── HERO SECTION ── */
        .synex-hero {
          max-width: 880px;
          margin: 0 auto;
          padding: 8rem 2rem 6rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .synex-hero h1 {
          font-size: clamp(2.2rem, 5.2vw, 4.4rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 1.5rem;
          color: #ffffff;
        }
        .synex-hero p {
          font-size: clamp(1.1rem, 2vw, 1.35rem);
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
          max-width: 720px;
          margin-bottom: 3rem;
        }
        .synex-hero-ctas {
          display: flex;
          flex-wrap: wrap;
          gap: 0.9rem;
          justify-content: center;
        }
        .synex-btn-primary {
          display: inline-block;
          background: #ffffff;
          color: #000000;
          padding: 1.1rem 3.2rem;
          border-radius: 4px;
          font-size: 1rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 30px rgba(255, 255, 255, 0.05);
        }
        .synex-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 35px rgba(255, 255, 255, 0.15);
        }
        .synex-btn-ghost {
          display: inline-block;
          background: transparent;
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.18);
          padding: 1.05rem 2.4rem;
          border-radius: 4px;
          font-size: 1rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .synex-btn-ghost:hover {
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(255, 255, 255, 0.4);
        }
        .synex-badge-text {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.4);
          margin-top: 1.2rem;
          letter-spacing: 0.02em;
        }

        /* ── FEATURES SECTION ── */
        .synex-features {
          max-width: 1200px;
          margin: 0 auto 6rem;
          padding: 0 2rem;
          width: 100%;
        }
        .synex-features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .synex-feature-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 2.5rem;
          border-radius: 6px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .synex-feature-card:hover {
          border-color: rgba(255, 255, 255, 0.15);
          background: rgba(255, 255, 255, 0.03);
          transform: translateY(-2px);
        }
        .synex-feature-card h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.8rem;
        }
        .synex-feature-card p {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.6;
        }

        /* ── PRICING SECTION ── */
        .synex-pricing {
          max-width: 1280px;
          margin: 0 auto 7rem;
          padding: 0 2rem;
          width: 100%;
        }
        .synex-pricing-header {
          text-align: center;
          margin-bottom: 3.2rem;
        }
        .synex-pricing-header h2 {
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          margin-bottom: 0.75rem;
        }
        .synex-pricing-header p {
          color: rgba(255, 255, 255, 0.55);
          font-size: 1.05rem;
          max-width: 560px;
          margin: 0 auto;
          line-height: 1.55;
        }
        .synex-pricing-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.15rem;
          align-items: stretch;
        }
        .synex-plan {
          position: relative;
          display: flex;
          flex-direction: column;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 10px;
          padding: 1.85rem 1.6rem 1.7rem;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .synex-plan:hover {
          border-color: rgba(255, 255, 255, 0.18);
          transform: translateY(-3px);
        }
        .synex-plan.featured {
          border-color: rgba(16, 185, 129, 0.55);
          background: linear-gradient(180deg, rgba(16, 185, 129, 0.08) 0%, rgba(255, 255, 255, 0.02) 40%);
          box-shadow: 0 12px 40px rgba(16, 185, 129, 0.08);
        }
        .synex-plan-badge {
          position: absolute;
          top: -11px;
          left: 50%;
          transform: translateX(-50%);
          background: #10b981;
          color: #04140e;
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 0.28rem 0.7rem;
          border-radius: 999px;
          white-space: nowrap;
        }
        .synex-plan-name {
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.72);
          margin-bottom: 0.85rem;
        }
        .synex-plan-price {
          display: flex;
          align-items: baseline;
          gap: 0.2rem;
          margin-bottom: 0.35rem;
          min-height: 3.1rem;
        }
        .synex-plan-price .amount {
          font-size: 2.55rem;
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1;
        }
        .synex-plan-price .period {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.45);
          font-weight: 600;
        }
        .synex-plan-price .contact-label {
          font-size: 1.7rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.15;
        }
        .synex-plan-billed {
          font-size: 0.78rem;
          color: rgba(255, 255, 255, 0.4);
          margin-bottom: 0.85rem;
        }
        .synex-plan-tagline {
          font-size: 0.82rem;
          font-weight: 600;
          color: #10b981;
          margin-bottom: 0.85rem;
          line-height: 1.4;
        }
        .synex-plan-desc {
          font-size: 0.86rem;
          color: rgba(255, 255, 255, 0.58);
          line-height: 1.55;
          margin-bottom: 1.15rem;
        }
        .synex-plan-features {
          list-style: none;
          padding: 0;
          margin: 0 0 1.4rem;
          flex: 1;
        }
        .synex-plan-features li {
          font-size: 0.84rem;
          color: rgba(255, 255, 255, 0.72);
          padding: 0.38rem 0 0.38rem 1.25rem;
          position: relative;
          line-height: 1.4;
        }
        .synex-plan-features li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #10b981;
          font-weight: 700;
        }
        .synex-plan-best {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.4);
          margin-bottom: 1.15rem;
          line-height: 1.45;
        }
        .synex-plan-cta {
          display: block;
          text-align: center;
          padding: 0.85rem 1rem;
          border-radius: 5px;
          font-size: 0.88rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .synex-plan-cta.solid {
          background: #ffffff;
          color: #000000;
        }
        .synex-plan-cta.solid:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(255, 255, 255, 0.12);
        }
        .synex-plan-cta.outline {
          background: transparent;
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.18);
        }
        .synex-plan-cta.outline:hover {
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(255, 255, 255, 0.4);
        }
        .synex-plan-cta.emerald {
          background: #10b981;
          color: #04140e;
        }
        .synex-plan-cta.emerald:hover {
          background: #34d399;
          transform: translateY(-1px);
        }
        .synex-pricing-note {
          text-align: center;
          margin-top: 2rem;
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.42);
          line-height: 1.55;
        }
        .synex-pricing-note a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
        }
        .synex-pricing-note a:hover {
          color: #ffffff;
        }

        /* ── FOOTER ── */
        .synex-footer {
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding: 2.5rem 5vw;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.4);
          background: #000000;
          margin-top: auto;
        }
        .synex-footer-center {
          font-weight: 600;
          color: rgba(255, 255, 255, 0.65);
        }
        .synex-footer-right {
          display: flex;
          gap: 1.5rem;
        }
        .synex-footer-link {
          color: rgba(255, 255, 255, 0.4);
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .synex-footer-link:hover {
          color: #ffffff;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1100px) {
          .synex-pricing-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 900px) {
          .synex-features-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .synex-footer {
            flex-direction: column;
            gap: 1.5rem;
            text-align: center;
            padding: 3rem 2rem;
          }
          .synex-footer-right {
            flex-wrap: wrap;
            justify-content: center;
            gap: 1rem 1.5rem;
          }
        }
        @media (max-width: 640px) {
          .synex-hero {
            padding: 5rem 1.4rem 4rem;
          }
          .synex-hero-ctas {
            width: 100%;
            flex-direction: column;
          }
          .synex-btn-primary,
          .synex-btn-ghost {
            width: 100%;
            text-align: center;
            padding: 1rem 1.4rem;
          }
          .synex-pricing-grid {
            grid-template-columns: 1fr;
          }
          .synex-header-link {
            display: none;
          }
        }
      `}</style>

      <header className="synex-header">
        <a href="/" className="synex-logo-text">
          Synex<span className="synex-logo-dot">.</span>
        </a>
        <div className="synex-header-actions">
          <a href="#pricing" className="synex-header-link">
            Pricing
          </a>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="synex-btn-secondary"
          >
            Try the Simulator
          </a>
        </div>
      </header>

      <section className="synex-hero">
        <h1>Cut Battery Design Time from 10 Hours to 5 Minutes.</h1>
        <p>
          The simple software tool for solar installers in East Africa.
          Check hardware compatibility, calculate battery savings, and erase utility penalty fees instantly.
        </p>
        <div className="synex-hero-ctas">
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="synex-btn-primary"
          >
            Launch Free Simulation
          </a>
          <a href="#pricing" className="synex-btn-ghost">
            View Pricing
          </a>
        </div>
        <div className="synex-badge-text">
          ✓ No credit card required &nbsp;|&nbsp; ✓ Live on TANESCO & Kenya Power Rules
        </div>
      </section>

      <section className="synex-features">
        <div className="synex-features-grid">
          <div className="synex-feature-card">
            <h3>Check Hardware Match</h3>
            <p>
              Instantly verify configuration profiles to determine if your specific inverter and battery brands can talk to each other seamlessly.
            </p>
          </div>
          <div className="synex-feature-card">
            <h3>Stop Penalty Fees</h3>
            <p>
              Accurately calculate peak shaving requirements to flatten power spikes and prevent utility demand fines.
            </p>
          </div>
          <div className="synex-feature-card">
            <h3>Weather Safety</h3>
            <p>
              Dynamically safeguard your system by scheduling a 40% or 60% power backup reserve when adverse storms are detected.
            </p>
          </div>
        </div>
      </section>

      <section className="synex-pricing" id="pricing">
        <div className="synex-pricing-header">
          <h2>Simple, monthly pricing.</h2>
          <p>
            Start at $29. Scale to $59 or $149 as your pipeline grows. Enterprise is custom — contact sales.
          </p>
        </div>

        <div className="synex-pricing-grid">
          {plans.map((plan) => (
            <article
              key={plan.id}
              className={`synex-plan${plan.featured ? ' featured' : ''}`}
            >
              {plan.badge && <div className="synex-plan-badge">{plan.badge}</div>}
              <div className="synex-plan-name">{plan.name}</div>
              <div className="synex-plan-price">
                {plan.price === null ? (
                  <span className="contact-label">{plan.priceLabel}</span>
                ) : (
                  <>
                    <span className="amount">${plan.price}</span>
                    <span className="period">/mo</span>
                  </>
                )}
              </div>
              <div className="synex-plan-billed">{plan.billed}</div>
              <div className="synex-plan-tagline">{plan.tagline}</div>
              <p className="synex-plan-desc">{plan.description}</p>
              <ul className="synex-plan-features">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <div className="synex-plan-best">Best for: {plan.bestFor}</div>
              <a
                href={plan.href}
                target={plan.contact ? undefined : '_blank'}
                rel={plan.contact ? undefined : 'noopener noreferrer'}
                className={`synex-plan-cta ${
                  plan.featured ? 'emerald' : plan.contact ? 'outline' : 'solid'
                }`}
              >
                {plan.cta} →
              </a>
            </article>
          ))}
        </div>

        <p className="synex-pricing-note">
          Starter $29, Professional $59, and Business $149 are billed monthly.
          Enterprise is custom pricing — contact sales.
          Questions? <a href="mailto:support@sanelx.com">support@sanelx.com</a>
        </p>
      </section>

      <footer className="synex-footer">
        <div className="synex-footer-left">
          &copy; 2026 SanelX.
        </div>
        <div className="synex-footer-center">
          [🟢 System Status: Operational]
        </div>
        <div className="synex-footer-right">
          <a href="mailto:support@sanelx.com?subject=Request Custom Tariff" className="synex-footer-link">
            Request Custom Tariff
          </a>
          <a href="mailto:support@sanelx.com?subject=Request Hardware DNA" className="synex-footer-link">
            Request Hardware DNA
          </a>
          <a href="mailto:support@sanelx.com?subject=Report a Bug" className="synex-footer-link">
            Report a Bug
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Synex;
