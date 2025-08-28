import React, { useState, useEffect } from 'react';
import { Heart, Music, VolumeX, Volume2 } from 'lucide-react';
import FloatingHearts from './components/FloatingHearts';
import BirthdayHeader from './components/BirthdayHeader';
import PersonalMessage from './components/PersonalMessage';
import PhotoGallery from './components/PhotoGallery';
import Footer from './components/Footer';

function App() {
  const [showForm, setShowForm] = useState(true);
  const [birthdayName, setBirthdayName] = useState('');
  const [admirerName] = useState('Your Secret Admirer');
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (birthdayName.trim()) {
      setShowForm(false);
    }
  };

  const toggleMusic = () => {
    setIsMusicPlaying(!isMusicPlaying);
  };

  if (showForm) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-red-50 to-amber-50 flex items-center justify-center p-4">
        <FloatingHearts />
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 max-w-md w-full border border-pink-100">
          <div className="text-center mb-8">
            <Heart className="w-12 h-12 text-red-400 mx-auto mb-4 animate-pulse" />
            <h1 className="text-3xl font-serif text-gray-800 mb-2">A Special Birthday Wish</h1>
            <p className="text-gray-600 text-sm">Enter the details to create a heartfelt message</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="birthdayName" className="block text-sm font-medium text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="birthdayName"
                value={birthdayName}
                onChange={(e) => setBirthdayName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:border-red-300 focus:ring-2 focus:ring-red-100 outline-none transition-all bg-pink-50/50"
                placeholder="Enter your beautiful name..."
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-400 to-pink-400 text-white py-3 rounded-xl font-medium hover:from-red-500 hover:to-pink-500 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              See Your Special Message ✨
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-red-50 to-amber-50 relative overflow-hidden">
      <FloatingHearts />
      
      {/* Music Control */}
      <button
        onClick={toggleMusic}
        className="fixed top-6 right-6 z-50 bg-white/80 backdrop-blur-md rounded-full p-3 shadow-lg hover:shadow-xl transition-all transform hover:scale-110"
      >
        {isMusicPlaying ? (
          <Volume2 className="w-5 h-5 text-red-400" />
        ) : (
          <VolumeX className="w-5 h-5 text-gray-400" />
        )}
      </button>

      {/* Main Content */}
      <div className="relative z-10">
        <BirthdayHeader name={birthdayName} />
        <PersonalMessage name={birthdayName} admirer={admirerName} />
        <PhotoGallery />
        <Footer admirer={admirerName} />
      </div>
    </div>
  );
}

export default App;