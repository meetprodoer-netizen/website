
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        
        // Hide if scrolling down, show if scrolling up
        // Also hide if scroll position is beyond a small threshold to avoid overlaying hero image
        if (currentScrollY > lastScrollY && currentScrollY > 20) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav className={`fixed w-full z-50 bg-transparent transition-all duration-500 py-6 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-center items-center">
        <Link to="/" className="text-[26px] font-bold tracking-[0.15em] uppercase text-treeman-text">
          DOERS
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
