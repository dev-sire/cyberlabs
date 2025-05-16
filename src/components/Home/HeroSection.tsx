
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Shield, Lock, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    contextRef.current = ctx;
    
    let particles: any[] = [];
    let animationFrameId: number;
    
    // Set canvas size
    const resizeCanvas = () => {
      const { innerWidth: width, innerHeight: height } = window;
      canvas.width = width;
      canvas.height = Math.min(700, height);
      
      // Reset particles when resizing
      initParticles();
    };
    
    // Initialize particles
    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 30000);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1 + 0.5,
          color: `rgba(155, 135, 245, ${Math.random() * 0.2 + 0.1})`,
          velocity: {
            x: (Math.random() - 0.5) * 0.3,
            y: (Math.random() - 0.5) * 0.3
          }
        });
      }
    };
    
    // Animate particles
    const animate = () => {
      if (!contextRef.current) return;
      animationFrameId = requestAnimationFrame(animate);
      
      contextRef.current.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle, i) => {
        // Draw particle
        contextRef.current!.beginPath();
        contextRef.current!.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        contextRef.current!.fillStyle = particle.color;
        contextRef.current!.fill();
        
        // Update position
        particle.x += particle.velocity.x;
        particle.y += particle.velocity.y;
        
        // Connect particles within a certain distance
        for (let j = i + 1; j < particles.length; j++) {
          const distance = Math.sqrt(
            Math.pow(particles[j].x - particle.x, 2) + 
            Math.pow(particles[j].y - particle.y, 2)
          );
          
          if (distance < 100) {
            contextRef.current!.beginPath();
            contextRef.current!.strokeStyle = `rgba(155, 135, 245, ${0.1 * (1 - distance / 100)})`;
            contextRef.current!.lineWidth = 0.2;
            contextRef.current!.moveTo(particle.x, particle.y);
            contextRef.current!.lineTo(particles[j].x, particles[j].y);
            contextRef.current!.stroke();
          }
        }
        
        // Edge detection & bounce
        if (particle.x < 0 || particle.x > canvas.width) particle.velocity.x *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.velocity.y *= -1;
      });
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden flex items-center min-h-screen"> {/* Changed h-screen to min-h-screen */}
      <ParticleBackground />
      <div className="cyber-grid-bg absolute inset-0 opacity-20 animate-grid-flow"></div>
      <div className="container mx-auto px-4 z-10 pt-16 pb-24"> {/* Added pb-24 for extra bottom padding on mobile */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <div className="p-3 bg-cyber-purple/10 rounded-full border border-cyber-purple/30 animate-pulse-glow">
              <Shield className="h-10 w-10 text-cyber-purple" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            <span className="cyber-gradient-text">Securing</span> the digital frontier through
            <span className="cyber-gradient-text"> innovative research</span>
          </h1>
          <p className="text-xl text-cyber-light/80 mb-8 md:px-12 animate-fade-in delay-200">
            CyberLabs is a cutting-edge research center dedicated to advancing the field of cybersecurity
            through interdisciplinary collaboration and groundbreaking research.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in delay-300">
            <Link to="/projects">
              <button className="cyber-button flex items-center">
                <span>Explore Projects</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </Link>
            <Link to="/publications">
              <button className="cyber-button flex items-center">
                <span>View Publications</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </Link>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 reveal">
          <div className="cyber-card flex flex-col items-center text-center">
            <div className="bg-cyber-purple/20 p-3 rounded-full mb-4">
              <Shield className="h-8 w-8 text-cyber-purple" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Threat Intelligence</h3>
            <p className="text-cyber-light/70">
              Advanced threat analysis and predictive models to identify emerging security risks.
            </p>
          </div>

          <div className="cyber-card flex flex-col items-center text-center">
            <div className="bg-cyber-purple/20 p-3 rounded-full mb-4">
              <Lock className="h-8 w-8 text-cyber-purple" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Privacy Engineering</h3>
            <p className="text-cyber-light/70">
              Building systems and frameworks that safeguard user privacy without compromising functionality.
            </p>
          </div>

          <div className="cyber-card flex flex-col items-center text-center">
            <div className="bg-cyber-purple/20 p-3 rounded-full mb-4">
              <Database className="h-8 w-8 text-cyber-purple" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure Infrastructure</h3>
            <p className="text-cyber-light/70">
              Developing robust security protocols for critical infrastructure and networked systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
