
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const publications = [
  {
    id: 1,
    title: 'An Analysis of Zero-Day Vulnerabilities in Critical Infrastructure Systems',
    authors: 'Smith, J., Johnson, A., Williams, K.',
    journal: 'Journal of Cybersecurity',
    date: 'May 2024',
    link: '/publications/zero-day-vulnerabilities'
  },
  {
    id: 2,
    title: 'Privacy Implications of Facial Recognition in Public Spaces',
    authors: 'Brown, M., Davis, L., Miller, R.',
    journal: 'International Journal of Digital Privacy',
    date: 'April 2024',
    link: '/publications/facial-recognition-privacy'
  },
  {
    id: 3,
    title: 'Quantum Computing Threats to Modern Encryption Standards',
    authors: 'Wilson, E., Garcia, C., Thompson, P.',
    journal: 'Cryptography Research Quarterly',
    date: 'March 2024',
    link: '/publications/quantum-threats'
  },
  {
    id: 4,
    title: 'Secure by Design: Embedding Security in Software Development Lifecycles',
    authors: 'Taylor, S., Anderson, D., White, J.',
    journal: 'IEEE Security & Privacy',
    date: 'February 2024',
    link: '/publications/secure-by-design'
  }
];

const LatestPublications = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  
  return (
    <section className="py-20 px-4 bg-cyber-dark/50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4 reveal">Latest Publications</h2>
            <p className="text-cyber-light/70 max-w-xl reveal">
              Our researchers regularly publish their findings in top academic journals and conferences.
            </p>
          </div>
          <Link 
            to="/publications"
            className="mt-4 md:mt-0 cyber-button flex items-center reveal"
          >
            <span>All Publications</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="space-y-4">
          {publications.map((publication, index) => (
            <Link 
              to={publication.link}
              key={publication.id}
              className="block reveal"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredId(publication.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className={`cyber-card transition-all duration-300 ${hoveredId === publication.id ? 'border-cyber-purple/60' : ''}`}>
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h3 className={`text-lg font-medium mb-2 transition-colors duration-300 ${hoveredId === publication.id ? 'text-cyber-purple' : 'text-cyber-light'}`}>
                      {publication.title}
                    </h3>
                    <p className="text-sm text-cyber-light/70 mb-1">{publication.authors}</p>
                    <div className="flex flex-col md:flex-row md:items-center text-xs text-cyber-light/60 space-y-1 md:space-y-0 md:space-x-4">
                      <span>{publication.journal}</span>
                      <span className="hidden md:inline">•</span>
                      <span>{publication.date}</span>
                    </div>
                  </div>
                  <div className={`mt-4 md:mt-0 flex items-center text-sm transition-colors duration-300 ${hoveredId === publication.id ? 'text-cyber-purple' : 'text-cyber-light/60'}`}>
                    <span>Read Paper</span>
                    <ArrowRight className={`ml-2 h-4 w-4 transition-transform duration-300 ${hoveredId === publication.id ? 'translate-x-1' : ''}`} />
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

export default LatestPublications;
