
import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { ScrollArea } from '@/components/ui/scroll-area';
import CursorTrail from '../CursorTrial';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  useEffect(() => {
    // Implement reveal animations on scroll
    const handleRevealElements = () => {
      const reveals = document.querySelectorAll('.reveal');
      const windowHeight = window.innerHeight;
      
      reveals.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', handleRevealElements);
    // Initial check for elements in view
    handleRevealElements();
    
    return () => {
      window.removeEventListener('scroll', handleRevealElements);
    };
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen">
      <CursorTrail />
      <Header />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
