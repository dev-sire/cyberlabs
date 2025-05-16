
import React from 'react';
import MainLayout from '../components/Layout/MainLayout';
import { Link } from 'react-router-dom';
import { ArrowLeft, Bug } from 'lucide-react';

const NotFound = () => {
  return (
    <MainLayout>
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center max-w-lg">
          <div className="mb-8 flex justify-center">
            <div className="p-6 bg-cyber-purple/10 rounded-full border border-cyber-purple/30 animate-pulse-glow">
              <Bug className="h-16 w-16 text-cyber-purple" />
            </div>
          </div>
          <h1 className="text-6xl font-bold mb-6">
            <span className="cyber-gradient-text">404</span>
          </h1>
          <h2 className="text-2xl font-semibold mb-4">Security Breach Detected</h2>
          <p className="text-cyber-light/70 mb-8">
            The page you are looking for could not be found. It might have been moved, deleted, or never existed in our secure database.
          </p>
          <Link to="/">
            <button className="cyber-button flex items-center mx-auto">
              <ArrowLeft className="mr-2 h-4 w-4" />
              <span>Return to Homepage</span>
            </button>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFound;
