import React from 'react';
import { Heart } from 'lucide-react';

interface BirthdayHeaderProps {
  name: string;
}

const BirthdayHeader: React.FC<BirthdayHeaderProps> = ({ name }) => {
  return (
    <header className="text-center py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center items-center mb-6">
          <Heart className="w-8 h-8 text-red-400 animate-pulse mx-2" />
          <Heart className="w-12 h-12 text-pink-400 animate-pulse mx-2" />
          <Heart className="w-8 h-8 text-red-400 animate-pulse mx-2" />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-500 to-red-600 mb-4 animate-gradient">
          Happy Birthday
        </h1>
        
        <h2 className="text-4xl md:text-6xl font-script text-red-500 mb-8 tracking-wide">
          {name}
        </h2>
        
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-300 to-transparent mx-auto mb-8"></div>
        
        <p className="text-xl text-gray-600 font-light italic">
          "Today we celebrate the most beautiful soul I know"
        </p>
      </div>
    </header>
  );
};

export default BirthdayHeader;