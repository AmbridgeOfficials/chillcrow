import React from 'react';
import { Twitter, Youtube, MessageCircle } from 'lucide-react';
import SocialButton from './common/SocialButton';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <div className="text-2xl font-bold text-amber-400 mb-2">$CHILL</div>
            <p className="text-gray-400 max-w-md">
              Chill Crow - where meme culture meets AI innovation. Stay chill, build smart, meme responsibly.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <SocialButton href="https://twitter.com" icon={<Twitter size={20} />} label="Twitter" />
              <SocialButton href="https://youtube.com" icon={<Youtube size={20} />} label="YouTube" />
              <SocialButton href="https://telegram.org" icon={<MessageCircle size={20} />} label="Telegram" />
            </div>
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Chill Crow. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>
            Disclaimer: $CHILL is a meme coin. Always do your own research before investing in any cryptocurrency.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;