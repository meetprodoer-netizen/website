
import { SiteConfig, PortfolioItem } from './types';

export const INITIAL_CONFIG: SiteConfig = {
  hero: {
    title: "공간에 스며드는\n자연스러운 겨울의 결",
    subTitle: "TREEMAN: BOTANICAL HOLIDAY",
    description: "인위적인 장식을 넘어, 식물의 생명력과 공간의 여백이 조화를 이루는 프리미엄 트리 큐레이션을 제안합니다.",
    backgroundImage: "https://images.unsplash.com/photo-1605330310860-234b6b107000?q=80&w=2070&auto=format&fit=crop"
  },
  philosophy: {
    quote: "우리는 인위적인 화려함보다,\n그 공간이 원래 가지고 있던 결에 집중합니다.\n겨울은 머무는 것만으로도 충분해야 하니까요.",
    subtext: "Curated by Treeman Studio"
  },
  cta: {
    title: "당신의 공간에 어울리는\n겨울을 제안해 드릴게요.",
    buttonText: "View Portfolio",
    link: "/portfolio"
  },
  footer: {
    description: "우리는 자연의 형태를 빌려 공간의 정취를 디자인합니다. 프리미엄 식물 기반의 크리스마스 솔루션.",
    copyright: "© 2024 TREEMAN STUDIO. ALL RIGHTS RESERVED.",
    instagramUrl: "https://instagram.com/treeman.kr",
    kakaoUrl: "https://pf.kakao.com/_xxxx",
    inquiryPhone: "010-1234-5678",
    inquiryEmail: "studio@treeman.kr",
    inquiryKakao: "treeman_studio",
    studioLinks: [
      { label: "Portfolio", url: "/portfolio" }
    ],
    socialLinks: [
      { label: "Instagram", url: "#" },
      { label: "Journal", url: "#" }
    ]
  },
  colors: {
    primary: "#4A5D4E",
    accent: "#8A9A8E",
  },
  contact: {
    phone: "010-1234-5678",
    email: "studio@treeman.kr",
    kakaoId: "treeman_studio",
    instagramId: "@treeman.kr"
  },
  meta: {
    title: "트리맨 (Treeman) | 미니멀 크리스마스 트리 렌탈 스튜디오",
    description: "하이엔드 공간을 위한 감각적인 식물 기반 크리스마스 디자인 서비스."
  }
};

export const INITIAL_PORTFOLIO: PortfolioItem[] = [
  {
    id: "1",
    title: "성수 '윤슬' 티룸 설치",
    category: "Hospitality",
    imageUrl: "https://images.unsplash.com/photo-1511268011861-691ed210aae8?q=80&w=2070&auto=format&fit=crop",
    description: "정적인 공간에 따뜻함을 더하는 노드만 트리와 핸드메이드 오너먼트."
  },
  {
    id: "2",
    title: "한남동 프라이빗 레지던스",
    category: "Residential",
    imageUrl: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?q=80&w=2069&auto=format&fit=crop",
    description: "우드 톤 인테리어와 조화를 이루는 내추럴 트리 스타일링."
  },
  {
    id: "3",
    title: "그로브(Grove) 오피스 라운지",
    category: "Office",
    imageUrl: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?q=80&w=2070&auto=format&fit=crop",
    description: "직원들의 휴식을 위한 미니멀한 그린 오브제 데코레이션."
  },
  {
    id: "4",
    title: "셀렉트 숍 '무드' 쇼룸",
    category: "Retail",
    imageUrl: "https://images.unsplash.com/photo-1482012792751-bb99d83b2b3b?q=80&w=2070&auto=format&fit=crop",
    description: "브랜드 아이덴티티를 투영한 조형적 형태의 트리 연출."
  }
];
