
import React, { useState } from 'react';
import MainLayout from '../components/Layout/MainLayout';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const publicationsList = [
  {
    id: 1,
    title: 'An Analysis of Zero-Day Vulnerabilities in Critical Infrastructure Systems',
    authors: 'Smith, J., Johnson, A., Williams, K.',
    journal: 'Journal of Cybersecurity',
    date: 'May 2024',
    category: 'Infrastructure Security',
    link: '/publications/zero-day-vulnerabilities'
  },
  {
    id: 2,
    title: 'Privacy Implications of Facial Recognition in Public Spaces',
    authors: 'Brown, M., Davis, L., Miller, R.',
    journal: 'International Journal of Digital Privacy',
    date: 'April 2024',
    category: 'Privacy',
    link: '/publications/facial-recognition-privacy'
  },
  {
    id: 3,
    title: 'Quantum Computing Threats to Modern Encryption Standards',
    authors: 'Wilson, E., Garcia, C., Thompson, P.',
    journal: 'Cryptography Research Quarterly',
    date: 'March 2024',
    category: 'Cryptography',
    link: '/publications/quantum-threats'
  },
  {
    id: 4,
    title: 'Secure by Design: Embedding Security in Software Development Lifecycles',
    authors: 'Taylor, S., Anderson, D., White, J.',
    journal: 'IEEE Security & Privacy',
    date: 'February 2024',
    category: 'Secure Development',
    link: '/publications/secure-by-design'
  },
  {
    id: 5,
    title: 'Detecting Advanced Persistent Threats Using Machine Learning',
    authors: 'Harris, N., Lee, B., Martin, K.',
    journal: 'ACM Transactions on Privacy and Security',
    date: 'January 2024',
    category: 'AI Security',
    link: '/publications/apt-detection'
  },
  {
    id: 6,
    title: 'A Framework for Evaluating IoT Device Security',
    authors: 'Jackson, R., Nelson, P., Roberts, M.',
    journal: 'IoT Security Journal',
    date: 'December 2023',
    category: 'IoT Security',
    link: '/publications/iot-security-framework'
  },
  {
    id: 7,
    title: 'The Economics of Ransomware: Attack Patterns and Prevention Strategies',
    authors: 'Patel, A., Kim, S., Rodriguez, F.',
    journal: 'Journal of Cybercrime Economics',
    date: 'November 2023',
    category: 'Threat Intelligence',
    link: '/publications/ransomware-economics'
  },
  {
    id: 8,
    title: 'Privacy-Preserving Machine Learning for Medical Data Analysis',
    authors: 'Chen, S., Johnson, M., Garcia, L.',
    journal: 'Nature Digital Medicine',
    date: 'October 2023',
    category: 'Privacy',
    link: '/publications/privacy-medical-ml'
  },
  {
    id: 9,
    title: 'Blockchain-Based Solutions for Supply Chain Security',
    authors: 'Wilson, J., Thompson, T., Ahmed, K.',
    journal: 'Journal of Blockchain Research',
    date: 'September 2023',
    category: 'Blockchain Security',
    link: '/publications/blockchain-supply-chain'
  }
];

const categories = [
  'All Categories',
  'Infrastructure Security',
  'Privacy',
  'Cryptography',
  'Secure Development',
  'AI Security',
  'IoT Security',
  'Threat Intelligence',
  'Blockchain Security'
];

const years = ['All Years', '2024', '2023', '2022', '2021'];

const Publications = () => {
  const [activeCategory, setActiveCategory] = useState('All Categories');
  const [activeYear, setActiveYear] = useState('All Years');
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPublications = publicationsList.filter(publication => {
    const matchesCategory = activeCategory === 'All Categories' || publication.category === activeCategory;
    const matchesYear = activeYear === 'All Years' || publication.date.includes(activeYear);
    const matchesSearch = publication.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          publication.authors.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          publication.journal.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesYear && matchesSearch;
  });

  return (
    <MainLayout>
      <div className="pt-32 pb-16 px-4 bg-gradient-to-b from-cyber-dark to-slate-900">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 reveal">
            <span className="cyber-gradient-text">Publications</span>
          </h1>
          <p className="text-xl text-cyber-light/80 mb-8 reveal">
            Explore our research papers, articles, and academic contributions to the field of cybersecurity.
          </p>
        </div>
      </div>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="mb-10">
            <div className="cyber-card mb-6 reveal">
              <input 
                type="text"
                placeholder="Search publications..."
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
                <h3 className="text-sm font-semibold uppercase text-cyber-light/70 mb-3">Filter by Year</h3>
                <div className="flex flex-wrap gap-2">
                  {years.map(year => (
                    <button
                      key={year}
                      className={`px-3 py-1 text-sm rounded-full transition-colors duration-300 ${activeYear === year ? 'bg-cyber-purple text-cyber-light' : 'bg-cyber-dark/40 text-cyber-light/70 hover:bg-cyber-purple/20'}`}
                      onClick={() => setActiveYear(year)}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4 reveal">
            <p className="text-cyber-light/70">
              {filteredPublications.length} {filteredPublications.length === 1 ? 'publication' : 'publications'} found
            </p>
          </div>

          <div className="space-y-4 reveal">
            {filteredPublications.map((publication, index) => (
              <Link 
                to={publication.link}
                key={publication.id}
                className="block"
                onMouseEnter={() => setHoveredId(publication.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className={`cyber-card transition-all duration-300 ${hoveredId === publication.id ? 'border-cyber-purple/60' : ''}`}>
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                      <span className="text-xs px-2 py-1 rounded-full bg-cyber-purple/20 text-cyber-purple mb-2 inline-block">
                        {publication.category}
                      </span>
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
    </MainLayout>
  );
};

export default Publications;
