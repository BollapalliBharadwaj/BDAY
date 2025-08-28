import React from 'react';

interface PersonalMessageProps {
  name: string;
  admirer: string;
}

const PersonalMessage: React.FC<PersonalMessageProps> = ({ name, admirer }) => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 border border-pink-100">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🌹</div>
            <h3 className="text-3xl font-serif text-gray-800 mb-6">A Message for my girl.</h3>
          </div>
          
          <div className="prose prose-lg prose-pink max-w-none text-center">
            <p className="text-xl leading-relaxed text-gray-700 mb-6">
              Dearest <span className="text-red-500 font-semibold">{name}</span>,
            </p>
            
            <p className="text-lg leading-relaxed text-gray-600 mb-6">
              On this special day, I want you to know even though if u dont consider my efforts I'll keep loving u . 
              I'll be the one who admires u from distance and will wait for u not knowing if u'll be mine or not.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-600 mb-6">
              Dont take this website as cringe lol , I made it with AI but still ya only for u .
              I hope it brings a smile to your face 
            </p>
            
            <p className="text-lg leading-relaxed text-gray-600 mb-8">
              May this birthday be a lovely and happy one for u sush.
            </p>
            
            <div className="text-xl text-red-500 font-script">
              With love and warmest wishes,
              <br />
              <span className="text-2xl">{admirer} 💕</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalMessage;