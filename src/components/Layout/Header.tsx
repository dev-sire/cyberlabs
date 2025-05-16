
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Publications', path: '/publications' },
    { title: 'Projects', path: '/projects' },
    { title: 'People', path: '/people' },
    { title: 'Contact', path: '/contact' }
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-cyber-dark/90 backdrop-blur-md py-2 shadow-lg shadow-cyber-purple/5' : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <Shield className="text-cyber-purple h-8 w-8 group-hover:animate-pulse-glow transition-all duration-300" />
          <span className="font-bold text-xl tracking-tight">
            <span className="cyber-gradient-text">Cyber</span>Labs
          </span>
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className="cyber-link text-cyber-light hover:text-cyber-purple transition-colors duration-300"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <Button 
            variant="ghost" 
            size="icon"
            onClick={toggleMenu}
            className="text-cyber-light hover:bg-cyber-purple/20 transition-colors z-50"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        )}

        {/* Mobile Navigation */}
        {isMobile && (
          <div
            className={cn(
              'fixed inset-0 bg-cyber-dark/95 backdrop-blur-md flex flex-col justify-center items-center transition-all duration-300 z-40',
              isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            )}
          >
            <nav className="flex flex-col items-center space-y-8">
              {navItems.map((item, index) => (
                <Link
                  key={item.title}
                  to={item.path}
                  onClick={toggleMenu}
                  className={cn(
                    'cyber-link text-xl text-cyber-light hover:text-cyber-purple transition-colors duration-300',
                    isMenuOpen && 'animate-fade-up',
                  )}
                  style={{ animationDelay: `${index * 100 + 100}ms` }}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
