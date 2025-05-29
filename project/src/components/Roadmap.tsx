import React from 'react';
import SectionHeading from './common/SectionHeading';

const Roadmap: React.FC = () => {
  return (
    <section id="roadmap" className="py-20 bg-gradient-to-b from-amber-900/70 to-gray-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <SectionHeading>Roadmap</SectionHeading>
        
        <div className="relative mt-16">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-amber-600/30 top-0"></div>
          
          <div className="space-y-24">
            {roadmapPhases.map((phase, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div 
                  className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full 
                    border-2 border-amber-500 z-10 ${index === 0 ? 'bg-amber-500' : 'bg-gray-900'}`}
                ></div>
                
                <div 
                  className={`flex flex-col md:flex-row md:items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
                    <div className={`bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 border border-amber-600/20 
                      max-w-md transform transition-all duration-500
                      ${index % 2 === 0 ? 'md:translate-x-8' : 'md:-translate-x-8'}`}
                    >
                      <h3 className="text-xl font-semibold text-amber-400 mb-3">
                        {phase.title}
                      </h3>
                      <div className="text-sm font-medium text-amber-600/80 mb-4">
                        {phase.timeline}
                      </div>
                      <ul className="space-y-3">
                        {phase.milestones.map((milestone, idx) => (
                          <li key={idx} className="flex text-gray-300">
                            <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            <span>{milestone}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 text-center flex justify-center">
                    <div className={`bg-black/30 rounded-full h-24 w-24 flex items-center justify-center
                      border border-amber-600/30 text-4xl text-amber-400
                      transform transition-all duration-500
                      ${index % 2 === 0 ? 'md:-translate-x-8' : 'md:translate-x-8'}`}
                    >
                      {phase.icon}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const roadmapPhases = [
  {
    title: 'Phase 1 - Launch',
    timeline: 'Q2 2025',
    icon: '🚀',
    milestones: [
      'Launch on pump.fun',
      'Build community & social media',
      'Drop memes, first NFT teasers'
    ]
  },
  {
    title: 'Phase 2 - Expansion',
    timeline: 'Q3 2025',
    icon: '🌱',
    milestones: [
      'Launch DAO',
      'Bounty board for creators',
      'First \'CrowFunded\' AI tool'
    ]
  },
  {
    title: 'Phase 3 - Utility & Culture',
    timeline: 'Q4 2025',
    icon: '🔧',
    milestones: [
      'Open-source tools',
      'Strategic AI partnerships',
      'Contests and staking features'
    ]
  }
];

export default Roadmap;