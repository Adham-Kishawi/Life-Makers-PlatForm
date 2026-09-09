import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function TiltCard({ children, className = '', style = {}, spotlight = true }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Springs for silky smooth physical bounce
  const springConfig = { stiffness: 300, damping: 25 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), springConfig);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;

    setMousePos({ x: clientX, y: clientY });

    // Normalized from -0.5 to 0.5
    x.set((clientX / width) - 0.5);
    y.set((clientY / height) - 0.5);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div
      style={{ perspective: 1000 }}
      className={`tilt-card-perspective-container h-full ${className}`}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          ...style
        }}
        className="tilt-card-inner relative h-full"
      >
        {children}

        {/* Dynamic Cursor Spotlight Effect */}
        {spotlight && (
          <div
            className="pointer-events-none absolute top-0 start-0 w-full h-full rounded-4"
            style={{
              opacity: isHovered ? 1 : 0,
              transition: "opacity 0.3s ease",
              background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(251, 174, 66, 0.14), transparent 70%)`,
              zIndex: 10
            }}
          />
        )}
      </motion.div>
    </div>
  );
}
