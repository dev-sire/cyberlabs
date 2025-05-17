
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'Quantum-Resistant Cryptography',
    description: 'Developing encryption algorithms that can withstand attacks from quantum computers.',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2832&auto=format&fit=crop',
    category: 'Cryptography',
    link: '/projects/quantum-resistant-cryptography'
  },
  {
    id: 2,
    title: 'Autonomous Security Systems',
    description: 'AI-powered security systems that adapt to evolving threats in real-time.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop',
    category: 'Artificial Intelligence',
    link: '/projects/autonomous-security'
  },
  {
    id: 3,
    title: 'Privacy-Preserving Analytics',
    description: 'Techniques for analyzing data while protecting individual privacy and confidentiality.',
    image: 'https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2070&auto=format&fit=crop',
    category: 'Privacy',
    link: '/projects/privacy-analytics'
  }
];

const FeaturedProjects = () => {
  return (
    <section className="py-20 px-4 bg-cyber-dark relative">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-cyber-dark to-cyber-dark/95 z-10"></div>
      <div className="container mx-auto relative z-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4 reveal">Featured Projects</h2>
            <p className="text-cyber-light/70 max-w-xl reveal">
              Explore our cutting-edge research initiatives that are shaping the future of cybersecurity and digital privacy.
            </p>
          </div>
          <Link 
            to="/projects"
            className="mt-4 md:mt-0 cyber-button flex items-center reveal"
          >
            <span>View All Projects</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link 
              to={project.link} 
              key={project.id}
              className="group reveal"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="cyber-card h-full flex flex-col overflow-hidden group">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <span className="text-xs uppercase tracking-wider text-cyber-purple mb-2">{project.category}</span>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-cyber-purple transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-cyber-light/70 text-sm flex-grow mb-4">{project.description}</p>
                  <div className="flex items-center text-cyber-purple text-sm">
                    <span>Learn more</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;