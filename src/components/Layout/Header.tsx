
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Shield, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ScrollArea } from '@/components/ui/scroll-area';

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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobile && isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobile, isMenuOpen]);

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
        isScrolled ? 'bg-cyber-dark/90 py-2 shadow-lg shadow-cyber-purple/5' : 'bg-transparent py-4'
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
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <Link
                    to={item.path}
                    className="cyber-link text-cyber-light hover:text-cyber-purple px-4 py-2 transition-all duration-300"
                  >
                    {item.title}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <Button 
            variant="ghost" 
            size="icon"
            onClick={toggleMenu}
            className="text-cyber-light hover:bg-cyber-purple/20 transition-colors z-50"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 animate-fade-in" />
            ) : (
              <Menu className="h-6 w-6 animate-fade-in" />
            )}
          </Button>
        )}

        {/* Mobile Navigation - Sidebar with animations */}
        {isMobile && (
          <>
            {/* Overlay */}
            <div 
              className={cn(
                "fixed inset-0 bg-black/70 backdrop-blur-sm z-40 transition-opacity duration-300",
                isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
              )}
              onClick={toggleMenu}
            />
            
            {/* Sidebar Menu */}
            <div
              className={cn(
                "fixed top-0 right-0 bottom-0 w-64 bg-cyber-dark/95 backdrop-blur-md flex flex-col z-40 shadow-lg shadow-cyber-purple/20",
                "border-l border-cyber-purple/30 transition-all duration-300 ease-in-out",
                isMenuOpen ? "translate-x-0" : "translate-x-full"
              )}
            >
              {/* DESIGN: Dummy Div to center the content with respect to the content */}
              <div className="p-5 flex justify-end">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={toggleMenu}
                  className="text-cyber-light hover:bg-cyber-purple/20"
                >
                  {/* <X className="h-6 w-6" /> */}
                </Button>
              </div>
              
              <ScrollArea className="flex-grow overflow-auto">
                <nav className="flex flex-col p-4">
                  {navItems.map((item, index) => (
                    <Link
                      key={item.title}
                      to={item.path}
                      onClick={toggleMenu}
                      className={cn(
                        "group relative flex items-center py-3 px-4 text-lg font-medium text-cyber-light hover:text-cyber-purple",
                        "border-l-2 border-cyber-purple/0 hover:border-cyber-purple transition-all duration-300",
                        "transform translate-x-0 hover:translate-x-2",
                        isMenuOpen && "animate-fade-up",
                        "overflow-hidden"
                      )}
                      style={{ 
                        animationDelay: `${index * 50 + 100}ms`,
                      }}
                    >
                      <span>{item.title}</span>
                      <ChevronRight className={cn(
                        "ml-auto h-5 w-5 opacity-0 group-hover:opacity-100 transition-all duration-300",
                        "transform translate-x-2 group-hover:translate-x-0"
                      )} />
                      <span className="absolute bottom-0 left-0 h-[1px] w-full bg-cyber-purple/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                    </Link>
                  ))}
                </nav>
              </ScrollArea>
              
              <div className="mt-auto p-6 border-t border-cyber-purple/20">
                <div className="text-center">
                  <div className="cyber-gradient-text text-sm font-medium mb-2">CyberLabs</div>
                  <p className="text-cyber-light/70 text-xs">Advancing cybersecurity research</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;