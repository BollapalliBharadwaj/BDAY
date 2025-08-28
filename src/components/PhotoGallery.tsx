import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PhotoGallery: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const quotes = [
    {
      text: "The way to love someone is to lightly run your finger over that person's soul until you find a crack, and then gently pour your love into that crack.",
      author: "Keith Miller",
      image: "🌸"
    },
    {
      text: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
      author: "Lao Tzu",
      image: "💕"
    },
    {
      text: "You are my sun, my moon, and all of my stars.",
      author: "E.E. Cummings",
      image: "⭐"
    },
    {
      text: "In your light I learn how to love. In your beauty, how to make poems.",
      author: "Rumi",
      image: "🌹"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % quotes.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-4xl font-serif text-center text-gray-800 mb-12">
          Words of Love & Inspiration
        </h3>
        
        <div className="relative bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-pink-100">
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {quotes.map((quote, index) => (
              <div key={index} className="w-full flex-shrink-0 p-12 text-center">
                <div className="text-8xl mb-8">{quote.image}</div>
                <blockquote className="text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-6">
                  "{quote.text}"
                </blockquote>
                <cite className="text-lg text-red-500 font-medium">— {quote.author}</cite>
              </div>
            ))}
          </div>
          
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-md rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-red-400" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-md rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-red-400" />
          </button>
          
          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 pb-6">
            {quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-red-400 scale-125' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;