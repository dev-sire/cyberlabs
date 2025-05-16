
import React, { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
  age: number;
  size: number;
  color: string;
}

const CursorTrail: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const pointsRef = useRef<Point[]>([]);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set canvas to full screen and handle resizing
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    // Initialize context
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctxRef.current = ctx;
    
    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mousePositionRef.current = { x: e.clientX, y: e.clientY };
      
      // Add new point at current mouse position
      pointsRef.current.push({
        x: e.clientX,
        y: e.clientY,
        age: 0,
        size: Math.random() * 3 + 1,
        color: `rgba(155, 135, 245, ${Math.random() * 0.7 + 0.3})`
      });
      
      // Limit number of points
      if (pointsRef.current.length > 50) {
        pointsRef.current = pointsRef.current.slice(-50);
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Animation loop
    const animate = () => {
      if (!ctxRef.current) return;
      
      // Clear canvas with transparency to create trailing effect
      ctxRef.current.fillStyle = 'rgba(26, 31, 44, 0.2)';
      ctxRef.current.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw points
      pointsRef.current.forEach((point, index) => {
        // Update age
        point.age += 1;
        
        // Remove old points
        if (point.age > 50) {
          pointsRef.current.splice(index, 1);
          return;
        }
        
        // Calculate opacity based on age
        const opacity = Math.max(0, 1 - point.age / 50);
        
        // Draw point
        ctxRef.current!.beginPath();
        ctxRef.current!.arc(point.x, point.y, point.size * (1 - point.age / 50), 0, Math.PI * 2);
        ctxRef.current!.fillStyle = point.color.replace(/[\d.]+\)$/, `${opacity})`);
        ctxRef.current!.fill();
      });
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ mixBlendMode: 'lighten' }}
    />
  );
};

export default CursorTrail;
