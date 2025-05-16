
import React, { useState } from 'react';
import MainLayout from '../components/Layout/MainLayout';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: 'Dr. Sarah Chen',
    role: 'Director',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop',
    category: 'Leadership',
    bio: 'Dr. Chen specializes in cryptography and secure systems design with over 15 years of research experience.',
    link: '/people/sarah-chen',
    socialLinks: {
      twitter: 'https://twitter.com/',
      linkedin: 'https://linkedin.com/',
      github: 'https://github.com/'
    }
  },
  {
    id: 2,
    name: 'Dr. Marcus Johnson',
    role: 'Lead Researcher, Privacy Engineering',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop',
    category: 'Research',
    bio: 'Dr. Johnson leads research on privacy-preserving technologies and differential privacy.',
    link: '/people/marcus-johnson',
    socialLinks: {
      twitter: 'https://twitter.com/',
      linkedin: 'https://linkedin.com/',
      github: 'https://github.com/'
    }
  },
  {
    id: 3,
    name: 'Dr. Aisha Patel',
    role: 'Lead Researcher, Network Security',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop',
    category: 'Research',
    bio: 'Dr. Patel focuses on securing critical infrastructure and IoT networks from advanced threats.',
    link: '/people/aisha-patel',
    socialLinks: {
      linkedin: 'https://linkedin.com/',
      github: 'https://github.com/'
    }
  },
  {
    id: 4,
    name: 'Dr. James Wilson',
    role: 'Lead Researcher, Cryptography',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop',
    category: 'Research',
    bio: 'Dr. Wilson is an expert in post-quantum cryptographic algorithms and protocols.',
    link: '/people/james-wilson',
    socialLinks: {
      twitter: 'https://twitter.com/',
      linkedin: 'https://linkedin.com/',
      github: 'https://github.com/'
    }
  },
  {
    id: 5,
    name: 'Emma Rodriguez',
    role: 'Senior Researcher, AI Security',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop',
    category: 'Research',
    bio: 'Emma specializes in the intersection of machine learning and security, focusing on adversarial AI.',
    link: '/people/emma-rodriguez',
    socialLinks: {
      linkedin: 'https://linkedin.com/',
      github: 'https://github.com/'
    }
  },
  {
    id: 6,
    name: 'David Kim',
    role: 'Senior Researcher, Threat Intelligence',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop',
    category: 'Research',
    bio: 'David leads threat intelligence research, focusing on emerging attack vectors and defense strategies.',
    link: '/people/david-kim',
    socialLinks: {
      twitter: 'https://twitter.com/',
      linkedin: 'https://linkedin.com/'
    }
  },
  {
    id: 7,
    name: 'Dr. Lisa Thompson',
    role: 'Deputy Director',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop',
    category: 'Leadership',
    bio: 'Dr. Thompson oversees research operations and strategic partnerships with 20+ years in the field.',
    link: '/people/lisa-thompson',
    socialLinks: {
      linkedin: 'https://linkedin.com/'
    }
  },
  {
    id: 8,
    name: 'Michael Zhang',
    role: 'Research Engineer, Secure Systems',
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop',
    category: 'Engineering',
    bio: 'Michael develops secure hardware and embedded systems with a focus on IoT security.',
    link: '/people/michael-zhang',
    socialLinks: {
      github: 'https://github.com/',
      linkedin: 'https://linkedin.com/'
    }
  },
  {
    id: 9,
    name: 'Sophia Lee',
    role: 'Research Engineer, Privacy Tools',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop',
    category: 'Engineering',
    bio: 'Sophia builds privacy-enhancing technologies and tools for secure data sharing.',
    link: '/people/sophia-lee',
    socialLinks: {
      twitter: 'https://twitter.com/',
      github: 'https://github.com/'
    }
  },
  {
    id: 10,
    name: 'Thomas Nguyen',
    role: 'Policy Advisor',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1770&auto=format&fit=crop',
    category: 'Policy',
    bio: 'Thomas bridges technical research with policy implications to promote effective security regulation.',
    link: '/people/thomas-nguyen',
    socialLinks: {
      linkedin: 'https://linkedin.com/',
      twitter: 'https://twitter.com/'
    }
  }
];

const categories = ['All', 'Leadership', 'Research', 'Engineering', 'Policy'];

const People = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMembers = teamMembers.filter(member => {
    const matchesCategory = activeCategory === 'All' || member.category === activeCategory;
    const matchesSearch = 
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.bio.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <MainLayout>
      <div className="pt-32 pb-16 px-4 bg-gradient-to-b from-cyber-dark to-slate-900">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 reveal">
            Our <span className="cyber-gradient-text">Team</span>
          </h1>
          <p className="text-xl text-cyber-light/80 mb-8 reveal">
            Meet the experts behind CyberLabs' groundbreaking research and innovation.
          </p>
        </div>
      </div>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="mb-10">
            <div className="cyber-card mb-6 reveal">
              <input 
                type="text"
                placeholder="Search team members..."
                className="cyber-input w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center mb-8 reveal">
              {categories.map(category => (
                <button
                  key={category}
                  className={`px-4 py-2 text-sm rounded-full transition-colors duration-300 ${activeCategory === category ? 'bg-cyber-purple text-cyber-light' : 'bg-cyber-dark/40 text-cyber-light/70 hover:bg-cyber-purple/20'}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 reveal">
            {filteredMembers.map((member, index) => (
              <Link 
                to={member.link} 
                key={member.id}
                className="group"
              >
                <div className="cyber-card h-full overflow-hidden">
                  <div className="h-60 overflow-hidden relative">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyber-dark/90"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 flex gap-2 justify-end">
                      {member.socialLinks.linkedin && (
                        <a 
                          href={member.socialLinks.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="bg-cyber-dark/60 hover:bg-cyber-purple/40 p-1.5 rounded-full transition-colors"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyber-light"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </a>
                      )}
                      {member.socialLinks.github && (
                        <a 
                          href={member.socialLinks.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="bg-cyber-dark/60 hover:bg-cyber-purple/40 p-1.5 rounded-full transition-colors"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyber-light"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        </a>
                      )}
                      {member.socialLinks.twitter && (
                        <a 
                          href={member.socialLinks.twitter} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="bg-cyber-dark/60 hover:bg-cyber-purple/40 p-1.5 rounded-full transition-colors"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyber-light"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="p-6 relative">
                    <h3 className="text-lg font-semibold mb-1 group-hover:text-cyber-purple transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-cyber-purple text-sm mb-2">{member.role}</p>
                    <p className="text-sm text-cyber-light/70 mb-4">{member.bio}</p>
                    <div className="flex items-center text-cyber-purple text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>View Profile</span>
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

export default People;
