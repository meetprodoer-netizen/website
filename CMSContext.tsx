
import React, { createContext, useContext, useState, useEffect } from 'react';
import { CMSState, SiteConfig, PortfolioItem } from './types';
import { INITIAL_CONFIG, INITIAL_PORTFOLIO } from './constants';

interface CMSContextType {
  config: SiteConfig;
  portfolio: PortfolioItem[];
  updateConfig: (newConfig: SiteConfig) => void;
  updatePortfolio: (newPortfolio: PortfolioItem[]) => void;
  addPortfolio: (item: PortfolioItem) => void;
  removePortfolio: (id: string) => void;
}

const CMSContext = createContext<CMSContextType | undefined>(undefined);

export const CMSProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<CMSState>(() => {
    const saved = localStorage.getItem('treeman_cms_state');
    return saved ? JSON.parse(saved) : { config: INITIAL_CONFIG, portfolio: INITIAL_PORTFOLIO };
  });

  useEffect(() => {
    localStorage.setItem('treeman_cms_state', JSON.stringify(state));
  }, [state]);

  const updateConfig = (newConfig: SiteConfig) => {
    setState(prev => ({ ...prev, config: newConfig }));
  };

  const updatePortfolio = (newPortfolio: PortfolioItem[]) => {
    setState(prev => ({ ...prev, portfolio: newPortfolio }));
  };

  const addPortfolio = (item: PortfolioItem) => {
    setState(prev => ({ ...prev, portfolio: [item, ...prev.portfolio] }));
  };

  const removePortfolio = (id: string) => {
    setState(prev => ({ ...prev, portfolio: prev.portfolio.filter(p => p.id !== id) }));
  };

  return (
    <CMSContext.Provider value={{
      config: state.config,
      portfolio: state.portfolio,
      updateConfig,
      updatePortfolio,
      addPortfolio,
      removePortfolio
    }}>
      {children}
    </CMSContext.Provider>
  );
};

export const useCMS = () => {
  const context = useContext(CMSContext);
  if (!context) throw new Error("useCMS must be used within CMSProvider");
  return context;
};
