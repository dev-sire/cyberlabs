
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const team = [
  {
    id: 1,
    name: 'Dr. Sarah Chen',
    role: 'Director',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop',
    link: '/people/sarah-chen'
  },
  {
    id: 2,
    name: 'Dr. Marcus Johnson',
    role: 'Lead Researcher, Privacy Engineering',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop',
    link: '/people/marcus-johnson'
  },
  {
    id: 3,
    name: 'Dr. Aisha Patel',
    role: 'Lead Researcher, Network Security',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop',
    link: '/people/aisha-patel'
  },
  {
    id: 4,
    name: 'Dr. James Wilson',
    role: 'Lead Researcher, Cryptography',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop',
    link: '/people/james-wilson'
  }
];

const TeamSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4 reveal">Our Team</h2>
            <p className="text-cyber-light/70 max-w-xl reveal">
              Meet the experts behind our cutting-edge cybersecurity research and innovation.
            </p>
          </div>
          <Link 
            to="/people"
            className="mt-4 md:mt-0 cyber-button flex items-center reveal"
          >
            <span>View All Team</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <Link 
              to={member.link} 
              key={member.id}
              className="group reveal"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="cyber-card h-full overflow-hidden">
                <div className="h-60 overflow-hidden relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyber-dark/90"></div>
                </div>
                <div className="p-6 relative -mt-16">
                  <h3 className="text-lg font-semibold mb-1 group-hover:text-cyber-purple transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm text-cyber-light/70">{member.role}</p>
                  <div className="mt-3 flex items-center text-cyber-purple text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
  );
};

export default TeamSection;
