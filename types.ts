
export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

export interface LinkItem {
  label: string;
  url: string;
}

export interface SiteConfig {
  hero: {
    title: string;
    subTitle: string;
    description: string;
    backgroundImage: string;
  };
  philosophy: {
    quote: string;
    subtext: string;
  };
  cta: {
    title: string;
    buttonText: string;
    link: string;
  };
  footer: {
    description: string;
    copyright: string;
    instagramUrl: string;
    kakaoUrl: string;
    inquiryPhone: string;
    inquiryEmail: string;
    inquiryKakao: string;
    studioLinks: LinkItem[];
    socialLinks: LinkItem[];
  };
  colors: {
    primary: string;
    accent: string;
  };
  contact: {
    phone: string;
    email: string;
    kakaoId: string;
    instagramId: string;
  };
  meta: {
    title: string;
    description: string;
  };
}

export type CMSState = {
  config: SiteConfig;
  portfolio: PortfolioItem[];
};
