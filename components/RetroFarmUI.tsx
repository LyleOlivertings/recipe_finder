import React from 'react';

interface RetroFarmUIProps {
  children: React.ReactNode;
}

export default function RetroFarmUI({ children }: RetroFarmUIProps) {
  return (
    <div className="bg-[#4a752c] min-h-screen p-8 font-press-start">
      {/* Main Container */}
      <div className="max-w-4xl mx-auto">
        {/* Top Bar */}
        <div className="bg-[#e3c598] border-4 border-[#6b4f2a] p-4 mb-8 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="text-[#6b4f2a]">💰 1250g</span>
            <span className="text-[#6b4f2a]">⏰ 1:30 PM</span>
          </div>
          <div className="flex gap-2">
            <button className="retro-button bg-[#8b9c4a] hover:bg-[#6b7c3a]">
              🎒 Inventory
            </button>
            <button className="retro-button bg-[#d94e4e] hover:bg-[#b93e3e]">
              ❤️ 5/10
            </button>
          </div>
        </div>

        {/* Farm Grid */}
        <div className="grid grid-cols-8 gap-2 mb-8">
          {[...Array(24)].map((_, i) => (
            <div 
              key={i}
              className="aspect-square bg-[#a2d149] border-4 border-[#6b8f36] hover:brightness-110 cursor-pointer relative"
            >
              {/* Optional crop */}
              {i === 5 && <div className="absolute inset-0 animate-pulse">🌱</div>}
            </div>
          ))}
        </div>

        {/* Toolbar */}
        <div className="bg-[#e3c598] border-4 border-[#6b4f2a] p-4 flex gap-4 justify-center">
          {['⛏️', '🪓', '💧', '🌱'].map((tool, i) => (
            <button 
              key={i}
              className="retro-button bg-[#8b9c4a] w-12 h-12 text-xl hover:scale-105"
            >
              {tool}
            </button>
          ))}
        </div>

        {/* Dialogue Box */}
        <div className="bg-[#e3c598] border-4 border-[#6b4f2a] p-4 mt-8 animate-float">
          <div className="text-[#6b4f2a] flex items-center gap-4">
            <div className="flex-shrink-0 w-16 h-16 bg-[#b89a6d] border-4 border-[#6b4f2a]"></div>
            <div>
              <h3 className="text-xl mb-2">Farmhand Linus:</h3>
              <p>"Remember to water your crops daily!"</p>
            </div>
          </div>
        </div>

        {/* Render children */}
        {children}
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
        
        .font-press-start {
          font-family: 'Press Start 2P', cursive;
        }

        .retro-button {
          border: 4px solid #6b4f2a;
          box-shadow: 4px 4px 0 #6b4f2a;
          transition: all 0.1s ease;
          transform: translate(0, 0);
        }

        .retro-button:hover {
          box-shadow: 2px 2px 0 #6b4f2a;
          transform: translate(2px, 2px);
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </div>
  );
}