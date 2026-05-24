import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CinematicVideo = ({ 
  media, 
  mobileMedia, 
  poster, 
  lqip, 
  isHero = false,
  className = "" 
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  // Intersection Observer to only load the video when needed
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1, rootMargin: '200px' }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const togglePlay = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div 
      ref={containerRef}
      className={`cinematic-video-container ${className}`}
      style={{ 
        position: 'relative', 
        width: '100%', 
        height: '100%', 
        backgroundColor: '#000',
        overflow: 'hidden'
      }}
      onClick={togglePlay}
    >
      {/* ── LQIP / BLUR-UP LAYER ── */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${lqip || ''})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: isLoaded ? 'none' : 'blur(15px)',
          transform: isLoaded ? 'scale(1)' : 'scale(1.1)',
          opacity: isLoaded ? (isPlaying ? 0 : 1) : 1,
          transition: 'all 0.8s ease-in-out',
          zIndex: 1
        }}
      />

      {/* ── VIDEO LAYER ── */}
      {isInView && (
        <video
          ref={videoRef}
          poster={poster}
          preload="metadata"
          loop
          playsInline
          muted
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            position: 'absolute',
            inset: 0,
            zIndex: 2,
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.5s ease'
          }}
          onLoadedData={() => setIsLoaded(true)}
        >
          {mobileMedia && <source src={mobileMedia} type="video/mp4" media="(max-width: 768px)" />}
          <source src={media} type="video/mp4" />
        </video>
      )}

      {/* ── PLAY BUTTON OVERLAY ── */}
      <AnimatePresence>
        {!isPlaying && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 10,
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem'
            }}
          >
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 30px rgba(0,0,0,0.5)'
            }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M8 5v14l11-7L8 5z" fill="white" />
              </svg>
            </div>
            {isHero && (
              <span style={{ 
                color: '#fff', 
                fontSize: '0.7rem', 
                fontWeight: 800, 
                textTransform: 'uppercase', 
                letterSpacing: '0.2em',
                textShadow: '0 2px 10px rgba(0,0,0,0.5)'
              }}>
                Interact to View
              </span>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CinematicVideo;
