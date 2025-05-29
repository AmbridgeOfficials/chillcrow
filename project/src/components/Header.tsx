import React, { useState, useEffect } from 'react';
import { Menu, X, Twitter, Youtube, MessageCircle } from 'lucide-react';
import { Link } from './common/Link';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-amber-400">
            $CHILL
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#about">About</Link>
          <Link href="#vision">Vision</Link>
          <Link href="#use-cases">Use Cases</Link>
          <Link href="#roadmap">Roadmap</Link>
        </nav>

        {/* Social Media */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-amber-400 transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={20} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-amber-400 transition-colors"
            aria-label="YouTube"
          >
            <Youtube size={20} />
          </a>
          <a
            href="https://telegram.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-amber-400 transition-colors"
            aria-label="Telegram"
          >
            <MessageCircle size={20} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center z-40 transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="flex flex-col items-center space-y-6 text-xl">
          <Link href="#about" onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
          <Link href="#vision" onClick={() => setIsMenuOpen(false)}>
            Vision
          </Link>
          <Link href="#use-cases" onClick={() => setIsMenuOpen(false)}>
            Use Cases
          </Link>
          <Link href="#roadmap" onClick={() => setIsMenuOpen(false)}>
            Roadmap
          </Link>
          
          <div className="flex items-center space-x-6 mt-8">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-amber-400 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-amber-400 transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={24} />
            </a>
            <a
              href="https://telegram.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-amber-400 transition-colors"
              aria-label="Telegram"
            >
              <MessageCircle size={24} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;