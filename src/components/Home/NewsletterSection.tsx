
import React from 'react';
import { ArrowRight } from 'lucide-react';

const NewsletterSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="cyber-card p-10 reveal">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-cyber-light/70 max-w-xl mx-auto">
              Subscribe to our newsletter to receive the latest research findings, event announcements, and cybersecurity insights.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="cyber-input flex-grow"
            />
            <button className="cyber-button flex items-center justify-center">
              <span>Subscribe</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
          
          <p className="text-xs text-cyber-light/50 text-center mt-4">
            We respect your privacy. You can unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
