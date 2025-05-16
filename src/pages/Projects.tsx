
import React, { useState } from 'react';
import MainLayout from '../components/Layout/MainLayout';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projectsList = [
  {
    id: 1,
    title: 'Quantum-Resistant Cryptography',
    description: 'Developing encryption algorithms that can withstand attacks from quantum computers.',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2832&auto=format&fit=crop',
    category: 'Cryptography',
    status: 'Active',
    link: '/projects/quantum-resistant-cryptography'
  },
  {
    id: 2,
    title: 'Autonomous Security Systems',
    description: 'AI-powered security systems that adapt to evolving threats in real-time.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop',
    category: 'Artificial Intelligence',
    status: 'Active',
    link: '/projects/autonomous-security'
  },
  {
    id: 3,
    title: 'Privacy-Preserving Analytics',
    description: 'Techniques for analyzing data while protecting individual privacy and confidentiality.',
    image: 'https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2070&auto=format&fit=crop',
    category: 'Privacy',
    status: 'Active',
    link: '/projects/privacy-analytics'
  },
  {
    id: 4,
    title: 'Critical Infrastructure Protection',
    description: 'Securing vital systems against cyber attacks through advanced monitoring and response capabilities.',
    image: 'https://images.unsplash.com/photo-1593697821028-7cc59cfd7399?q=80&w=2070&auto=format&fit=crop',
    category: 'Infrastructure Security',
    status: 'Active',
    link: '/projects/infrastructure-protection'
  },
  {
    id: 5,
    title: 'Secure IoT Framework',
    description: 'A comprehensive security framework for Internet of Things devices and networks.',
    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2070&auto=format&fit=crop',
    category: 'IoT Security',
    status: 'Active',
    link: '/projects/secure-iot'
  },
  {
    id: 6,
    title: 'Blockchain Security Analysis',
    description: 'Investigating vulnerabilities and security models for blockchain technologies and smart contracts.',
    image: 'https://images.unsplash.com/photo-1526378787940-576a539ba69d?q=80&w=2069&auto=format&fit=crop',
    category: 'Blockchain Security',
    status: 'Active',
    link: '/projects/blockchain-security'
  },
  {
    id: 7,
    title: 'Advanced Threat Intelligence Platform',
    description: 'A platform for collecting, analyzing, and sharing cybersecurity threat intelligence.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2068&auto=format&fit=crop',
    category: 'Threat Intelligence',
    status: 'Completed',
    link: '/projects/threat-intelligence'
  },
  {
    id: 8,
    title: 'Secure Software Development Tools',
    description: 'Tools and methodologies for integrating security throughout the software development lifecycle.',
    image: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=2134&auto=format&fit=crop',
    category: 'Secure Development',
    status: 'Completed',
    link: '/projects/secure-development'
  }
];

const categories = [
  'All Categories',
  'Cryptography',
  'Artificial Intelligence',
  'Privacy',
  'Infrastructure Security',
  'IoT Security',
  'Blockchain Security',
  'Threat Intelligence',
  'Secure Development'
];

const statuses = ['All Statuses', 'Active', 'Completed'];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All Categories');
  const [activeStatus, setActiveStatus] = useState('All Statuses');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projectsList.filter(project => {
    const matchesCategory = activeCategory === 'All Categories' || project.category === activeCategory;
    const matchesStatus = activeStatus === 'All Statuses' || project.status === activeStatus;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesStatus && matchesSearch;
  });

  return (
    <MainLayout>
      <div className="pt-32 pb-16 px-4 bg-gradient-to-b from-cyber-dark to-slate-900">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 reveal">
            <span className="cyber-gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-cyber-light/80 mb-8 reveal">
            Discover our ongoing and completed research initiatives in cybersecurity and privacy.
          </p>
        </div>
      </div>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="mb-10">
            <div className="cyber-card mb-6 reveal">
              <input 
                type="text"
                placeholder="Search projects..."
                className="cyber-input w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal">
              <div className="cyber-card">
                <h3 className="text-sm font-semibold uppercase text-cyber-light/70 mb-3">Filter by Category</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      className={`px-3 py-1 text-sm rounded-full transition-colors duration-300 ${activeCategory === category ? 'bg-cyber-purple text-cyber-light' : 'bg-cyber-dark/40 text-cyber-light/70 hover:bg-cyber-purple/20'}`}
                      onClick={() => setActiveCategory(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="cyber-card">
                <h3 className="text-sm font-semibold uppercase text-cyber-light/70 mb-3">Filter by Status</h3>
                <div className="flex flex-wrap gap-2">
                  {statuses.map(status => (
                    <button
                      key={status}
                      className={`px-3 py-1 text-sm rounded-full transition-colors duration-300 ${activeStatus === status ? 'bg-cyber-purple text-cyber-light' : 'bg-cyber-dark/40 text-cyber-light/70 hover:bg-cyber-purple/20'}`}
                      onClick={() => setActiveStatus(status)}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4 reveal">
            <p className="text-cyber-light/70">
              {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'} found
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal">
            {filteredProjects.map((project, index) => (
              <Link 
                to={project.link} 
                key={project.id}
                className="group"
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
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs uppercase tracking-wider text-cyber-purple">{project.category}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${project.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'}`}>
                        {project.status}
                      </span>
                    </div>
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
    </MainLayout>
  );
};

export default Projects;
