
import React from 'react';
import MainLayout from '../components/Layout/MainLayout';
import { ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <MainLayout>
      <div className="pt-32 pb-16 px-4 bg-gradient-to-b from-cyber-dark to-slate-900">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 reveal">
            <span className="cyber-gradient-text">Contact Us</span>
          </h1>
          <p className="text-xl text-cyber-light/80 mb-8 reveal">
            Connect with our team to discuss research collaborations, partnerships, or inquiries.
          </p>
        </div>
      </div>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="reveal">
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-cyber-light/80 mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="cyber-input w-full" 
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-cyber-light/80 mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="cyber-input w-full" 
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-cyber-light/80 mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="cyber-input w-full" 
                    placeholder="Subject"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-cyber-light/80 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={6} 
                    className="cyber-input w-full" 
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="cyber-button flex items-center group hover:pl-7 hover:pr-5 transition-all duration-300"
                >
                  <span>Send Message</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

            <div className="reveal">
              <div className="cyber-card h-full">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Address</h3>
                    <p className="text-cyber-light/70">
                      CyberLabs Research Center<br />
                      Block 7, Clifton<br />
                      Karachi, Pakistan
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">Email</h3>
                    <p className="text-cyber-light/70">
                      info@cyberlabs.org.pk<br />
                      partnerships@cyberlabs.org.pk
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">Phone</h3>
                    <p className="text-cyber-light/70">
                      +92 (21) 3456-7890<br />
                      +92 (21) 3456-7891
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">Connect With Us</h3>
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
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">Office Hours</h3>
                    <p className="text-cyber-light/70">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 reveal">
            <div className="cyber-card p-0 overflow-hidden">
              <div className="h-[400px] w-full">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14472.16031386062!2d67.02730223955077!3d24.82909059999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33dfc9d8b7e3d%3A0x766a69907b225e0a!2sClifton%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1715897455195!5m2!1sen!2s" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  title="CyberLabs Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Contact;
