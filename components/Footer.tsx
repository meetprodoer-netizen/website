import React from 'react';
import { Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-treeman-bg py-12 px-6">
      <div className="max-w-7xl mx-auto flex justify-center items-center space-x-8">
        <a 
          href="https://www.instagram.com/create_doer" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-treeman-text/40 hover:text-treeman-text transition-colors"
          aria-label="Instagram"
        >
          <Instagram size={24} strokeWidth={1.5} />
        </a>
        <a 
          href="mailto:meet.proder@gmail.com" 
          className="text-treeman-text/40 hover:text-treeman-text transition-colors"
          aria-label="Email"
        >
          <Mail size={24} strokeWidth={1.5} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
