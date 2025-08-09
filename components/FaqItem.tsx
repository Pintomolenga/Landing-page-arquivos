
import React, { useState } from 'react';
import { PlusIcon, MinusIcon } from './icons';

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-900/50 rounded-lg border border-gray-700/80">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left p-5 focus:outline-none"
        aria-expanded={isOpen}
      >
        <h4 className="text-lg font-semibold text-white">{question}</h4>
        <div className="flex-shrink-0 ml-4">
            {isOpen 
                ? <MinusIcon className="w-6 h-6 text-amber-400" /> 
                : <PlusIcon className="w-6 h-6 text-gray-400" />
            }
        </div>
      </button>
      <div
        className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
            <div className="px-5 pb-5 pt-0 text-gray-300 leading-relaxed">
              <p>{answer}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
