
import React, { useState, useEffect } from 'react';

const FloatingCta: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollY = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      // Show after scrolling 500px, hide before the last 300px of the page
      if (scrollY > 500 && scrollY < pageHeight - 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm p-4 z-50 transition-transform duration-500 transform ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}
      style={{ borderTop: '1px solid rgba(250, 204, 21, 0.3)' }}
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="text-lg font-bold text-white">🔥 Oferta de Lançamento Acaba em Breve!</p>
          <p className="text-amber-400 font-bold text-xl">
             <span className="line-through text-gray-400 text-base">R$99,90</span> por apenas R$19,90
          </p>
        </div>
        <a
          href="https://pay.kirvano.com/ae319659-1345-4bb7-9e3d-74db1cf06869"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full md:w-auto flex-shrink-0 text-center font-bold text-base px-8 py-3 rounded-lg text-black bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-400 hover:from-amber-400 hover:via-yellow-500 hover:to-amber-500 transition-all duration-300 transform hover:scale-105 btn-glow"
        >
          PEGAR MINHA OFERTA!
        </a>
      </div>
    </div>
  );
};

export default FloatingCta;