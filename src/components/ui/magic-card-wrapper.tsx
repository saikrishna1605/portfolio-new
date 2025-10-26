"use client";

import { useRef, useEffect, useState, type ReactNode, type MouseEvent } from "react";
import { gsap } from "gsap";

interface MagicCardWrapperProps {
  children: ReactNode;
  className?: string;
  enableStars?: boolean;
  enableSpotlight?: boolean;
  enableBorderGlow?: boolean;
  enableTilt?: boolean;
  enableMagnetism?: boolean;
  clickEffect?: boolean;
  spotlightRadius?: number;
  particleCount?: number;
  glowColor?: string;
  disabled?: boolean;
}

export function MagicCardWrapper({
  children,
  className = "",
  enableStars = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  enableTilt = true,
  enableMagnetism = true,
  clickEffect = true,
  spotlightRadius = 300,
  particleCount = 12,
  glowColor = "132, 0, 255", // Purple theme
  disabled = false,
}: MagicCardWrapperProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const borderGlowRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Disable effects on mobile or when disabled prop is true
  const effectsEnabled = !isMobile && !disabled;

  // 3D Tilt Effect
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!effectsEnabled || !enableTilt || !cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10; // Max 10deg tilt
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(card, {
      rotateX,
      rotateY,
      transformPerspective: 1000,
      duration: 0.5,
      ease: "power2.out",
    });

    // Spotlight effect
    if (enableSpotlight && spotlightRef.current) {
      gsap.to(spotlightRef.current, {
        background: `radial-gradient(${spotlightRadius}px circle at ${x}px ${y}px, rgba(${glowColor}, 0.15), transparent 80%)`,
        duration: 0.3,
      });
    }

    // Border glow effect
    if (enableBorderGlow && borderGlowRef.current) {
      gsap.to(borderGlowRef.current, {
        background: `radial-gradient(circle at ${x}px ${y}px, rgba(${glowColor}, 0.4) 0%, transparent 60%)`,
        duration: 0.3,
      });
    }

    // Magnetism effect - slightly move card towards cursor
    if (enableMagnetism) {
      const magnetStrength = 0.15;
      const offsetX = ((x - centerX) / centerX) * 10 * magnetStrength;
      const offsetY = ((y - centerY) / centerY) * 10 * magnetStrength;
      
      gsap.to(card, {
        x: offsetX,
        y: offsetY,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = () => {
    if (!effectsEnabled || !cardRef.current) return;

    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "power2.out",
    });

    if (enableSpotlight && spotlightRef.current) {
      gsap.to(spotlightRef.current, {
        opacity: 0,
        duration: 0.3,
      });
    }

    if (enableBorderGlow && borderGlowRef.current) {
      gsap.to(borderGlowRef.current, {
        opacity: 0,
        duration: 0.3,
      });
    }
  };

  const handleMouseEnter = () => {
    if (!effectsEnabled) return;

    if (enableSpotlight && spotlightRef.current) {
      gsap.to(spotlightRef.current, {
        opacity: 1,
        duration: 0.3,
      });
    }

    if (enableBorderGlow && borderGlowRef.current) {
      gsap.to(borderGlowRef.current, {
        opacity: 1,
        duration: 0.3,
      });
    }

    // Create star particles on hover
    if (enableStars && particlesRef.current) {
      createStarParticles();
    }
  };

  // Star particle effect
  const createStarParticles = () => {
    if (!particlesRef.current || !cardRef.current) return;

    const container = particlesRef.current;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Clear previous particles
    container.innerHTML = '';

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'magic-particle';
      
      const startX = Math.random() * rect.width;
      const startY = Math.random() * rect.height;
      const angle = Math.random() * Math.PI * 2;
      const distance = 50 + Math.random() * 100;
      const endX = startX + Math.cos(angle) * distance;
      const endY = startY + Math.sin(angle) * distance;
      
      particle.style.cssText = `
        position: absolute;
        left: ${startX}px;
        top: ${startY}px;
        width: 4px;
        height: 4px;
        background: rgba(${glowColor}, 0.8);
        border-radius: 50%;
        pointer-events: none;
        box-shadow: 0 0 10px rgba(${glowColor}, 0.5);
      `;
      
      container.appendChild(particle);

      gsap.to(particle, {
        x: endX - startX,
        y: endY - startY,
        opacity: 0,
        scale: 0,
        duration: 1 + Math.random(),
        ease: "power2.out",
        onComplete: () => particle.remove(),
      });
    }
  };

  // Click ripple effect
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if (!effectsEnabled || !clickEffect || !cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ripple = document.createElement('div');
    ripple.className = 'magic-ripple';
    ripple.style.cssText = `
      position: absolute;
      left: ${x}px;
      top: ${y}px;
      width: 0;
      height: 0;
      border-radius: 50%;
      background: rgba(${glowColor}, 0.3);
      transform: translate(-50%, -50%);
      pointer-events: none;
      z-index: 10;
    `;

    card.appendChild(ripple);

    gsap.to(ripple, {
      width: 300,
      height: 300,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      onComplete: () => ripple.remove(),
    });

    // Slight scale pulse on click
    gsap.to(card, {
      scale: 0.98,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut",
    });
  };

  return (
    <div
      ref={cardRef}
      className={`magic-card-wrapper ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
    >
      {/* Spotlight overlay */}
      {effectsEnabled && enableSpotlight && (
        <div
          ref={spotlightRef}
          className="magic-spotlight"
        />
      )}

      {/* Border glow */}
      {effectsEnabled && enableBorderGlow && (
        <div
          ref={borderGlowRef}
          className="magic-border-glow"
        />
      )}

      {/* Particle container */}
      {effectsEnabled && enableStars && (
        <div
          ref={particlesRef}
          className="magic-particles"
        />
      )}

      {/* Content */}
      <div className="magic-content">
        {children}
      </div>
    </div>
  );
}
