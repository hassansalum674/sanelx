import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy load pages for performance
const MainHome = lazy(() => import('./pages/MainHome'));
const Solutions = lazy(() => import('./pages/Solutions'));
const Methodology = lazy(() => import('./pages/Methodology'));
const Security = lazy(() => import('./pages/Security'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const Disclaimer = lazy(() => import('./pages/Disclaimer'));
const HassanSalum = lazy(() => import('./pages/HassanSalum'));
const Synex = lazy(() => import('./pages/Synex'));

// Loading fallback component
const PageLoader = () => (
  <div style={{ 
    height: '100vh', 
    width: '100%', 
    background: '#000', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    color: 'rgba(255,255,255,0.5)',
    fontSize: '0.8rem',
    letterSpacing: '0.2em',
    textTransform: 'uppercase'
  }}>
    Loading...
  </div>
);

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main style={{ flex: 1 }}>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<MainHome />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/methodology" element={<Methodology />} />
            <Route path="/security" element={<Security />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/hassan-salum" element={<HassanSalum />} />
            <Route path="/synex" element={<Synex />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
