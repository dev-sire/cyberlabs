
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-cyber-dark py-12 border-t border-cyber-purple/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 group mb-4">
              <Shield className="text-cyber-purple h-6 w-6 group-hover:animate-pulse-glow transition-all duration-300" />
              <span className="font-bold text-xl tracking-tight">
                <span className="cyber-gradient-text">Cyber</span>Labs
              </span>
            </Link>
            <p className="text-cyber-light/80 text-sm mb-6">
              Advancing the frontier of cybersecurity research and innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-cyber-light/70 hover:text-cyber-purple transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="text-cyber-light/70 hover:text-cyber-purple transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="text-cyber-light/70 hover:text-cyber-purple transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="text-cyber-light/70 hover:text-cyber-purple transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
            </div>
          </div>
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-semibold text-sm uppercase text-cyber-light/90 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-cyber-light/70 hover:text-cyber-purple transition-colors text-sm">About Us</Link>
              </li>
              <li>
                <Link to="/publications" className="text-cyber-light/70 hover:text-cyber-purple transition-colors text-sm">Publications</Link>
              </li>
              <li>
                <Link to="/projects" className="text-cyber-light/70 hover:text-cyber-purple transition-colors text-sm">Projects</Link>
              </li>
              <li>
                <Link to="/people" className="text-cyber-light/70 hover:text-cyber-purple transition-colors text-sm">Our Team</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-semibold text-sm uppercase text-cyber-light/90 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-cyber-light/70 hover:text-cyber-purple transition-colors text-sm">Blog</a>
              </li>
              <li>
                <a href="#" className="text-cyber-light/70 hover:text-cyber-purple transition-colors text-sm">Research Archive</a>
              </li>
              <li>
                <a href="#" className="text-cyber-light/70 hover:text-cyber-purple transition-colors text-sm">Tools & Software</a>
              </li>
              <li>
                <a href="#" className="text-cyber-light/70 hover:text-cyber-purple transition-colors text-sm">Press Releases</a>
              </li>
            </ul>
          </div>
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-semibold text-sm uppercase text-cyber-light/90 mb-4">Subscribe</h3>
            <p className="text-cyber-light/80 text-sm mb-4">
              Join our newsletter to get the latest research updates.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="cyber-input flex-grow text-sm"
              />
              <button 
                type="submit" 
                className="px-3 bg-cyber-purple/20 hover:bg-cyber-purple/30 border border-cyber-purple/40 rounded-r-md transition-colors -ml-1"
              >
                <ArrowRight className="h-4 w-4 text-cyber-light" />
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-cyber-purple/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-cyber-light/60 text-xs text-center md:text-left">
            © {currentYear} CyberLabs. All rights reserved.
          </p>
          <div className="text-cyber-light/60 text-xs"><a href='https://github.com/ACM-SIGSAC'>Developed with passion by Duet ACM SIGSAC</a></div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-cyber-light/60 hover:text-cyber-purple text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-cyber-light/60 hover:text-cyber-purple text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
