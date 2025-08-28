import React from 'react';
import { Heart } from 'lucide-react';

interface FooterProps {
  admirer: string;
}

const Footer: React.FC<FooterProps> = ({ admirer }) => {
  return (
    <footer className="py-16 px-4 text-center">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-pink-100">
          <div className="flex justify-center items-center mb-6">
            <Heart className="w-6 h-6 text-red-400 animate-pulse mx-1" fill="currentColor" />
            <Heart className="w-8 h-8 text-pink-400 animate-pulse mx-1" fill="currentColor" />
            <Heart className="w-6 h-6 text-red-400 animate-pulse mx-1" fill="currentColor" />
          </div>
          
          <h3 className="text-2xl font-serif text-gray-800 mb-4">
            Wishing you joy, love, and laughter
          </h3>
          
          <p className="text-xl text-gray-600 mb-6">
            Today and always ✨
          </p>
          
          <div className="text-lg text-red-500 font-script">
            Forever yours,<br />
            <span className="text-xl">{admirer}</span>
          </div>
          
          <div className="mt-8 text-6xl">🎂🎉💖</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;