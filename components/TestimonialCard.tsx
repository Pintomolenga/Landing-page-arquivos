
import React from 'react';
import { StarIcon, QuoteIcon, CheckBadgeIcon } from './icons';

interface TestimonialCardProps {
  name: string;
  location: string;
  text: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, location, text, image }) => {
  return (
    <div className="relative flex flex-col text-center bg-gray-800/50 bg-opacity-50 backdrop-blur-lg rounded-2xl p-6 pt-14 border border-white/10 shadow-lg h-full">
      <img 
        src={image} 
        alt={name} 
        className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full object-cover border-4 border-amber-400 shadow-md"
      />
      
      {/* Growable content area */}
      <div className="flex-grow">
        <h4 className="font-bold text-lg text-white">{name}</h4>
        <p className="text-sm text-gray-400 -mt-1 mb-2">{location}</p>
        <div className="flex justify-center my-2">
          {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
        </div>
        <div className="relative text-gray-300 mt-4">
          <QuoteIcon className="w-8 h-8 text-amber-400/30 mx-auto mb-2" />
          <p className="italic text-base leading-relaxed">"{text}"</p>
        </div>
      </div>

      {/* Footer area */}
      <div className="mt-auto pt-4 border-t border-white/10">
        <div className="flex justify-center items-center space-x-2">
            <CheckBadgeIcon className="w-5 h-5 text-green-400" />
            <span className="text-xs font-semibold text-green-300 uppercase tracking-wider">Compra Verificada</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
