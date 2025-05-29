import React from 'react';
import SectionHeading from './common/SectionHeading';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionHeading>What is Chill Crow?</SectionHeading>
        
        <div className="flex flex-col md:flex-row items-center gap-10 mt-12">
          <div className="md:w-1/2 order-2 md:order-1">
            <p className="text-lg text-gray-300 mb-6">
              Chill Crow ($CROW) is a meme coin with a mission: to turn internet culture into real momentum for the AI
              revolution. It's fun, it's chill, but it's also building something with purpose - a meme-fueled launchpad for
              supporting AI startups, developers, and community-powered tools.
              chillCrow is a meme coin. It is not a financial instrument, and you should not mortgage your
spaceship to buy it. Prices may go up, down, sideways, or enter a black hole. This is a community-
powered project rooted in humor and creativity. Do your own research, not financial advice.
            </p>
            <div className="bg-amber-900/30 rounded-lg p-6 border border-amber-700/30">
              <h3 className="text-xl font-semibold text-amber-400 mb-4">Token Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <span className="text-amber-300 font-medium w-32">Platform</span>
                  <span className="text-white">pump.fun</span>
                </div>
                <div className="flex items-center">
                  <span className="text-amber-300 font-medium w-32">Network</span>
                  <span className="text-white">Solana</span>
                </div>
                <div className="flex items-center">
                  <span className="text-amber-300 font-medium w-32">Symbol</span>
                  <span className="text-white">$CROW</span>
                </div>
                <div className="flex items-center">
                  <span className="text-amber-300 font-medium w-32">Total Supply</span>
                  <span className="text-white">1,000,000,000</span>
                </div>
                <div className="flex items-center">
                  <span className="text-amber-300 font-medium w-32">Taxes</span>
                  <span className="text-white">0%</span>
                </div>
                <div className="flex items-center">
                  <span className="text-amber-300 font-medium w-32">LP Burn</span>
                  <span className="text-white">Handled by pump.fun</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-1 bg-amber-500/30 rounded-lg blur-xl"></div>
              <div className="relative bg-gray-800 rounded-lg p-6 border border-amber-500/20">
                <h3 className="text-xl font-semibold text-amber-400 mb-4">Why Chill Crow?</h3>
                <p className="text-gray-300 mb-4">
                  Because we're tired of soulless projects. Chill Crow is:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-200">
                    <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                    Meme-native
                  </li>
                  <li className="flex items-center text-gray-200">
                    <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                    AI-positive
                  </li>
                  <li className="flex items-center text-gray-200">
                    <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                    Community-first
                  </li>
                  <li className="flex items-center text-gray-200">
                    <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                    Actually building stuff
                  </li>
                </ul>
                <div className="mt-6 italic text-gray-400">
                  "The world is too loud. The grind is too much. Chill Crow is for those who fly smarter. Stay chill. Build smart. Meme responsibly."
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;