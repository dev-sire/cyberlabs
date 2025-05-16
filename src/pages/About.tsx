
import React from 'react';
import MainLayout from '../components/Layout/MainLayout';
import { ArrowRight, Shield, Lock, Database, Eye, Server, Code } from 'lucide-react';

const About = () => {
  return (
    <MainLayout>
      <div className="pt-32 pb-16 px-4 bg-gradient-to-b from-cyber-dark to-slate-900">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 reveal">
            About <span className="cyber-gradient-text">CyberLabs</span>
          </h1>
          <p className="text-xl text-cyber-light/80 mb-8 reveal">
            Pioneering cybersecurity research and innovation to protect our digital future.
          </p>
        </div>
      </div>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="cyber-card mb-12 reveal">
            <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
            <p className="text-cyber-light/80 mb-4">
              CyberLabs is dedicated to advancing the field of cybersecurity through groundbreaking research, 
              innovative technology development, and collaborative partnerships that address the most pressing 
              security challenges facing our increasingly connected world.
            </p>
            <p className="text-cyber-light/80">
              Our multidisciplinary team combines expertise in computer science, cryptography, artificial intelligence, 
              and systems engineering to develop comprehensive security solutions that protect digital infrastructure, 
              safeguard privacy, and enhance trust in the digital ecosystem.
            </p>
          </div>

          <div className="cyber-card mb-12 reveal">
            <h2 className="text-2xl font-bold mb-6">Our Vision</h2>
            <p className="text-cyber-light/80">
              We envision a future where digital systems are inherently secure, privacy is preserved by design, 
              and technological innovation thrives in an environment of trust and resilience. CyberLabs aspires 
              to be the leading research institution that makes this vision a reality through cutting-edge research, 
              technological advancement, and the cultivation of the next generation of cybersecurity experts.
            </p>
          </div>

          <div className="reveal">
            <h2 className="text-2xl font-bold mb-6">Research Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="cyber-card flex flex-col h-full">
                <div className="bg-cyber-purple/20 p-3 rounded-full mb-4 self-start">
                  <Shield className="h-6 w-6 text-cyber-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Threat Intelligence</h3>
                <p className="text-cyber-light/70">
                  Developing advanced techniques for threat detection, analysis, and prediction to anticipate 
                  and mitigate emerging cybersecurity risks before they cause harm.
                </p>
              </div>
              
              <div className="cyber-card flex flex-col h-full">
                <div className="bg-cyber-purple/20 p-3 rounded-full mb-4 self-start">
                  <Lock className="h-6 w-6 text-cyber-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Privacy Engineering</h3>
                <p className="text-cyber-light/70">
                  Creating technologies and methodologies that protect personal data while enabling 
                  valuable data analysis, ensuring privacy by design in modern digital systems.
                </p>
              </div>
              
              <div className="cyber-card flex flex-col h-full">
                <div className="bg-cyber-purple/20 p-3 rounded-full mb-4 self-start">
                  <Database className="h-6 w-6 text-cyber-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Secure Infrastructure</h3>
                <p className="text-cyber-light/70">
                  Researching robust security architectures for critical infrastructure, cloud environments, 
                  and Internet of Things networks to ensure resilience against sophisticated attacks.
                </p>
              </div>
              
              <div className="cyber-card flex flex-col h-full">
                <div className="bg-cyber-purple/20 p-3 rounded-full mb-4 self-start">
                  <Eye className="h-6 w-6 text-cyber-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Human-Centered Security</h3>
                <p className="text-cyber-light/70">
                  Exploring the intersection of human behavior and security systems to design 
                  solutions that account for user needs, behaviors, and cognitive limitations.
                </p>
              </div>
              
              <div className="cyber-card flex flex-col h-full">
                <div className="bg-cyber-purple/20 p-3 rounded-full mb-4 self-start">
                  <Server className="h-6 w-6 text-cyber-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quantum Security</h3>
                <p className="text-cyber-light/70">
                  Investigating post-quantum cryptography and security solutions to address 
                  the challenges posed by quantum computing to current security paradigms.
                </p>
              </div>
              
              <div className="cyber-card flex flex-col h-full">
                <div className="bg-cyber-purple/20 p-3 rounded-full mb-4 self-start">
                  <Code className="h-6 w-6 text-cyber-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-2">AI Security</h3>
                <p className="text-cyber-light/70">
                  Researching the security implications of artificial intelligence, including 
                  AI-powered attacks, defensive mechanisms, and ethical considerations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-cyber-dark/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
            <p className="text-cyber-light/70 max-w-2xl mx-auto">
              We believe in a multi-faceted approach that combines rigorous academic research with practical applications.
            </p>
          </div>

          <div className="space-y-8 reveal">
            <div className="cyber-card">
              <h3 className="text-xl font-semibold mb-3">Interdisciplinary Collaboration</h3>
              <p className="text-cyber-light/70">
                Our researchers come from diverse backgrounds including computer science, mathematics, engineering, 
                psychology, and policy. This diversity enables us to approach security challenges from multiple angles 
                and develop comprehensive solutions.
              </p>
            </div>

            <div className="cyber-card">
              <h3 className="text-xl font-semibold mb-3">Industry Partnerships</h3>
              <p className="text-cyber-light/70">
                We maintain strong relationships with industry leaders to ensure our research addresses real-world 
                challenges and can be translated into practical applications. These partnerships also provide 
                valuable resources and testing environments for our innovations.
              </p>
            </div>

            <div className="cyber-card">
              <h3 className="text-xl font-semibold mb-3">Education and Outreach</h3>
              <p className="text-cyber-light/70">
                We are committed to training the next generation of cybersecurity professionals through education 
                programs, workshops, and mentorship opportunities. We also engage with the broader community through 
                public lectures, publications, and media outreach to raise awareness about cybersecurity issues.
              </p>
            </div>

            <div className="cyber-card">
              <h3 className="text-xl font-semibold mb-3">Ethical Framework</h3>
              <p className="text-cyber-light/70">
                All our research adheres to a strong ethical framework that prioritizes responsible disclosure, 
                user privacy, and the societal implications of security technologies. We believe security solutions 
                should enhance human freedoms rather than constrain them.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;
