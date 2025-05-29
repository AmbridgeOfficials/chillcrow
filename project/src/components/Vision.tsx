import React from 'react';
import SectionHeading from './common/SectionHeading';

const Vision: React.FC = () => {
  return (
    <section id="vision" className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-900 to-amber-900/70">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading>Vision</SectionHeading>
        
        <div className="flex flex-col lg:flex-row items-center gap-12 mt-12">
          <div className="lg:w-1/2">
            <p className="text-xl text-amber-100 mb-8 leading-relaxed">
              Chill Crow is where meme culture meets machine learning. While most meme coins chase hype, 
              Chill Crow channels community energy toward building, funding, and spotlighting cool things in AI.
            </p>
            
            <div className="bg-black/30 rounded-lg p-6 backdrop-blur-sm border border-amber-600/20">
              <h3 className="text-lg font-medium text-amber-400 mb-4">The Chill Philosophy</h3>
              <p className="text-gray-300">
                We believe the best innovations happen when people are relaxed, creative, and connected. 
                Our laid-back crow isn't just a mascot – it's a reminder that sometimes you need to 
                take a step back to see the bigger picture.
              </p>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {visionCards.map((card, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm 
                    rounded-lg p-5 border border-amber-500/10 hover:border-amber-500/30 
                    transition-all duration-300 hover:shadow-amber-500/5 hover:shadow-lg
                    transform hover:-translate-y-1"
                >
                  <div className="text-amber-400 mb-3">{card.icon}</div>
                  <h3 className="text-lg font-medium text-amber-200 mb-2">{card.title}</h3>
                  <p className="text-gray-400">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const visionCards = [
  {
    icon: '🧠',
    title: 'AI Innovation',
    description: 'Supporting the developers and startups pushing AI boundaries through community funding.'
  },
  {
    icon: '🌱',
    title: 'Community Growth',
    description: 'Building a vibrant ecosystem where memes and machine learning enthusiasts unite.'
  },
  {
    icon: '🔗',
    title: 'Bridge Building',
    description: 'Connecting web3 culture with emerging AI technologies for mutual benefit.'
  },
  {
    icon: '🎯',
    title: 'Purpose-Driven',
    description: 'Channeling meme energy into tangible projects with real-world impact.'
  }
];

export default Vision;