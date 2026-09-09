import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Hero3DCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 500;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for mouse/scroll parallax
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Outer Geometric Wireframe (Icosahedron - Represents Youth & Community Structure)
    const icosaGeometry = new THREE.IcosahedronGeometry(2.1, 1);
    const icosaMaterial = new THREE.MeshBasicMaterial({
      color: 0xFBAE42, // Amber Gold
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    const icosahedron = new THREE.Mesh(icosaGeometry, icosaMaterial);
    mainGroup.add(icosahedron);

    // 2. Vertex Points (Glowing nodes)
    const pointsMaterial = new THREE.PointsMaterial({
      color: 0xFBAE42,
      size: 0.08,
      transparent: true,
      opacity: 0.85
    });
    const icosaPoints = new THREE.Points(icosaGeometry, pointsMaterial);
    mainGroup.add(icosaPoints);

    // 3. Inner Polyhedron (Deep Navy Core)
    const innerGeometry = new THREE.OctahedronGeometry(1.2, 0);
    const innerMaterial = new THREE.MeshBasicMaterial({
      color: 0x38bdf8, // Sky Blue / Cyan
      wireframe: true,
      transparent: true,
      opacity: 0.45
    });
    const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);
    mainGroup.add(innerMesh);

    // 4. Surrounding Floating Particle Constellation (Represents Volunteers & Good Deeds)
    const particleCount = 120;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const radius = 2.8 + Math.random() * 2.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      particlePositions[i] = x;
      particlePositions[i + 1] = y;
      particlePositions[i + 2] = z;

      originalPositions[i] = x;
      originalPositions[i + 1] = y;
      originalPositions[i + 2] = z;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particlesMat = new THREE.PointsMaterial({
      color: 0xfef08a,
      size: 0.05,
      transparent: true,
      opacity: 0.6
    });
    const particles = new THREE.Points(particleGeo, particlesMat);
    mainGroup.add(particles);

    // Mouse Tracking with Inertia
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (e) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (e.clientX - windowHalfX) * 0.0008;
      mouseY = (e.clientY - windowHalfY) * 0.0008;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Scroll Integration
    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Window Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', handleResize);

    // Visibility Observer (Pause when off-screen for battery & performance)
    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible || prefersReducedMotion) return;

      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Smooth mouse lerp
      targetRotationX += (mouseY - targetRotationX) * 0.05;
      targetRotationY += (mouseX - targetRotationY) * 0.05;

      // Base rotation + mouse tilt + scroll rotation
      icosahedron.rotation.x = time * 0.15 + targetRotationX + scrollY * 0.001;
      icosahedron.rotation.y = time * 0.2 + targetRotationY + scrollY * 0.0015;

      innerMesh.rotation.x = -time * 0.25 + targetRotationX * 1.5;
      innerMesh.rotation.y = -time * 0.3 + targetRotationY * 1.5;

      particles.rotation.y = time * 0.08 + scrollY * 0.0005;

      // Pulse particle positions gently
      const positions = particleGeo.attributes.position.array;
      for (let i = 0; i < particleCount * 3; i += 3) {
        const factor = 1 + Math.sin(time * 1.5 + i) * 0.05 + (scrollY * 0.0002);
        positions[i] = originalPositions[i] * factor;
        positions[i + 1] = originalPositions[i + 1] * factor;
        positions[i + 2] = originalPositions[i + 2] * factor;
      }
      particleGeo.attributes.position.needsUpdate = true;

      mainGroup.position.y = Math.sin(time * 0.8) * 0.12 - (scrollY * 0.001);

      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);

      icosaGeometry.dispose();
      icosaMaterial.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();
      particleGeo.dispose();
      particlesMat.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="hero-3d-canvas-wrapper w-full h-full absolute top-0 start-0 pointer-events-none"
      style={{
        zIndex: 1,
        overflow: "hidden",
        opacity: 0.85
      }}
      aria-hidden="true"
    />
  );
}
