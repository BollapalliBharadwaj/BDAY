import React from 'react';

const FloatingHearts: React.FC = () => {
  const hearts = Array.from({ length: 15 }, (_, i) => i);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart, index) => (
        <div
          key={heart}
          className="absolute animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${6 + Math.random() * 4}s`,
          }}
        >
          <div className="text-red-200 text-opacity-60 text-2xl">
            {index % 3 === 0 ? '💕' : index % 3 === 1 ? '🌹' : '✨'}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;