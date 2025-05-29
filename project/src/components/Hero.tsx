import React from 'react';
import { Twitter, Youtube, MessageCircle } from 'lucide-react';
import Button from './common/Button';
import dool2 from './photo_5881859709764487384_y.jpg';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className=" hgh">
        <img src={dool2} alt="Chill Crow Character" className="w-full h-full object-contain" />        
      </div>
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 z-0 hgh"
      ></div>
      
      {/* Overlay texture */}
      <div className="absolute inset-0 bg-black/20 z-10"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 pt-20">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
              <span className="inline-block animate-float">Chill</span>
              <span className="inline-block ml-2 animate-float animation-delay-150">Crow</span>
            </h1>
            <p className="text-xl md:text-2xl text-amber-100 mb-6 max-w-lg mx-auto lg:mx-0">
              Where meme culture meets the AI revolution. Stay chill, build smart.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <Button 
                href="https://twitter.com" 
                icon={<Twitter size={18} />}
                primary
              >
                Twitter
              </Button>
              <Button 
                href="https://youtube.com" 
                icon={<Youtube size={18} />}
              >
                YouTube
              </Button>
              <Button 
                href="https://telegram.org" 
                icon={<MessageCircle size={18} />}
              >
                Telegram
              </Button>
            </div>
            <div className="text-amber-200 font-medium">
              Launching on Solana via pump.fun in Q2 2025
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="flex flex-col gap-8">
              <a 
                href="https://coinmarketcap.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img 
                  src="https://img.utdstc.com/icon/485/8b0/4858b0b9607cdf37cb5ff0d2afcd84e16a5f9345bea6d7fa25e6b8443c42cf5a:200" 
                  alt="CoinMarketCap" 
                  className="w-24 h-24 object-contain rounded-2xl bg-white/10 p-2"
                />
              </a>
              <a 
                href="https://tradingview.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img 
                  src="https://meta-q.cdn.bubble.io/f1726787205095x463784933370638960/tradingview-logo.png" 
                  alt="TradingView" 
                  className="w-24 h-24 object-contain rounded-2xl bg-white/10 p-2"
                />
              </a>
              <a 
                href="https://dexscreener.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img 
                  src="https://avatars.githubusercontent.com/u/106754627?v=4" 
                  alt="DexScreener" 
                  className="w-24 h-24 object-contain rounded-2xl bg-white/10 p-2"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white/60 flex items-start justify-center p-1">
          <div className="w-1 h-3 bg-white/60 rounded-full animate-scroll-indicator"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;