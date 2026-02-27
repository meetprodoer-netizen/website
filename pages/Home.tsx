
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in bg-treeman-bg text-treeman-text">
      {/* Hero Section */}
      <section className="relative h-[100vh] flex flex-col items-center justify-center overflow-hidden px-6 bg-treeman-bg">
        <div className="relative z-10 max-w-4xl text-center flex flex-col items-center -mt-12">
          {/* Centered Image */}
          <div className="mb-4 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
            <img 
              src="https://github.com/meetprodoer-netizen/website/blob/main/doers_logo_transparent.png?raw=true" 
              alt="Create Doers Logo" 
              className="w-72 h-72 md:w-96 md:h-96 object-contain"
            />
          </div>
          
          {/* New Description Text below image */}
          <p 
            className="text-[12.6px] md:text-[16.8px] text-treeman-text font-sans font-medium max-w-2xl mx-auto leading-tight animate-fade-in opacity-0 whitespace-pre-line" 
            style={{ animationDelay: '0.4s' }}
          >
            AI를 활용해서 시간을 벌고, {"\n"} 그 시간에 하고싶은 것을 하는 삶을 꿈꿉니다.
          </p>
        </div>
      </section>

      {/* Resources Section */}
      <section className="pt-12 pb-24 px-6 bg-treeman-bg">
        <div className="max-w-7xl mx-auto">
          <div className="mb-5">
            <h2 className="text-2xl font-bold tracking-tight mb-0 text-treeman-text">두어스 자료</h2>
            <p className="text-sm text-treeman-text/60">두어가 직접 낋여온 AI 관련 자료들입니다. 꼭 확인해보세요!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "웹사이트, 구글 AI Studio로 5분 컷🔥",
                description: "나만의 웹사이트를 만들고 싶은데, 어떻게 시작할지 모르겠다구요? 구글 계정만 있다면 예산 0원으로 제작 가능해요.",
                image: "https://github.com/meetprodoer-netizen/website/blob/main/resource_thumbnail_website.png?raw=true",
                link: "https://burnt-tank-1bd.notion.site/AI-5-30f5c02013fc8006ab21fffb1306f478?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn9sRo1RhLcN2-NjDMSofywCIx8NTuLim0DIK4ggVg8q0tQMezKjQlvy4bQC4_aem_2YnH35li-4zFQWSHmmH2_w"
              },
              {
                title: "(예정) 가계부 반자동화 하기💸",
                description: "가계부가 쓰기 귀찮아서 외면하고 있다면, 지금도 당신의 소중한 급여는 밑 빠진 독 아래로 줄줄 새고 있습니다. AI를 활용해서 쉽게 해보자구요!",
                image: "https://github.com/meetprodoer-netizen/website/blob/main/resource_thumbnail_undefined.png?raw=true",
                link: "#"
              },
              {
                title: "(예정) 인스타그램, 성과 분석 어떻게해요🥺",
                description: "분석이 없는 곳에 성장도 없습니다. 인린이들을 위한 인스타그램 성과 분석 가이드 전격 공개합니다.",
                image: "https://github.com/meetprodoer-netizen/website/blob/main/resource_thumbnail_undefined.png?raw=true",
                link: "#"
              }
            ].map((resource, index) => (
              <a 
                key={index} 
                href={resource.link} 
                target={resource.link !== "#" ? "_blank" : undefined}
                rel={resource.link !== "#" ? "noopener noreferrer" : undefined}
                className="group block"
                onClick={(e) => resource.link === "#" && e.preventDefault()}
              >
                <div className="aspect-square overflow-hidden bg-treeman-text/5 mb-1.5">
                  <img 
                    src={resource.image} 
                    alt={resource.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-sm font-bold mb-0.5 text-treeman-text group-hover:text-treeman-text/80 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-sm text-treeman-text/50 leading-relaxed line-clamp-2">
                  {resource.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
