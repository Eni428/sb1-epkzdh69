import React, { useState, useEffect } from 'react';
import { Menu, X, Newspaper, Mountain, History, AlertCircle, Phone, Facebook } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 top-12 ${
      scrolled ? 'bg-red-700 shadow-lg' : 'bg-red-700/95'
    }`}>
      {/* Rest of the Navbar component remains the same */}
    </nav>
  );
}