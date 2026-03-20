// EidCelebration.jsx
import React, { useMemo, useState } from 'react';
import { Moon, Star, Sparkles, Gift, Heart, Coffee } from 'lucide-react';

const EidCelebration = () => {
  const [hasMounted, setHasMounted] = useState(false);
  
  React.useLayoutEffect(() => {
    setHasMounted(true);
  }, []);

  const backgroundCircles = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: (i * 17 + 50) % 300 + 50,
      top: (i * 23) % 100,
      left: (i * 31) % 100,
      scale: 0.5 + ((i * 13) % 50) / 100,
    }));
  }, []);

  const floatingLanterns = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: 10 + i * 12,
      top: 20 + ((i * 13) % 3) * 20,
      delay: i * 0.5,
      duration: 6 + i * 2
    }));
  }, []);

  const greetingCards = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Blessings",
      message: "May Allah's blessings fill your life with joy and prosperity",
      delay: 0.2
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Gratitude",
      message: "Celebrate the spirit of giving and sharing with loved ones",
      delay: 0.4
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Togetherness",
      message: "Gather with family and friends in harmony and love",
      delay: 0.6
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-emerald-800 to-amber-900 relative overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {backgroundCircles.map((circle) => (
            <div
              key={circle.id}
              className="absolute rounded-full bg-white"
              style={{
                width: `${circle.size}px`,
                height: `${circle.size}px`,
                top: `${circle.top}%`,
                left: `${circle.left}%`,
                opacity: 0.1,
                transform: `scale(${circle.scale})`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating lanterns */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingLanterns.map((lantern) => (
          <div
            key={lantern.id}
            className="absolute"
            style={{
              animation: `float ${lantern.duration}s ease-in-out infinite`,
              animationDelay: `${lantern.delay}s`,
              left: `${lantern.left}%`,
              top: `${lantern.top}%`,
            }}
          >
            <div className="relative">
              <div className="w-12 h-16 bg-amber-400/30 rounded-t-full rounded-b-lg backdrop-blur-sm border-2 border-amber-300/50">
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-amber-200 rounded-full animate-pulse" />
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-500/30 rounded-full blur-sm" />
            </div>
          </div>
        ))}
      </div>

      {/* Crescent moon and stars */}
      <div className="absolute top-20 right-20">
        <div className="relative">
          <Moon className="w-24 h-24 text-amber-200/30" />
          <div className="absolute -top-6 -right-6">
            <Star className="w-8 h-8 text-amber-200/20 animate-ping" />
          </div>
          <div className="absolute -bottom-4 -left-4">
            <Star className="w-6 h-6 text-amber-200/20" />
          </div>
        </div>
      </div>

      {/* Decorative arch with stars */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2">
        <div className="flex gap-2">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-${(i % 3) + 4} h-${(i % 3) + 4} text-amber-300/40`}
              style={{
                animation: `pulse ${2 + i * 0.3}s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-12 min-h-screen flex flex-col items-center justify-center">
        {/* Main message with CSS-based entrance animation */}
        <div
          className={`text-center transition-all duration-1000 ${
            hasMounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="relative mb-6">
            <h1 className="text-7xl md:text-9xl font-bold relative">
              <span className="bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 bg-clip-text text-transparent drop-shadow-2xl">
                Eid Mubarak
              </span>
            </h1>
            <div className="absolute -top-12 -right-12">
              <Sparkles className="w-12 h-12 text-amber-300/50 animate-spin-slow" />
            </div>
          </div>
          
          {/* Subtitle */}
          <p className="text-2xl md:text-3xl text-amber-100/90 mb-12 font-light italic">
            May your days be filled with peace, happiness, and blessings
          </p>
        </div>

        {/* Greeting cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-5xl">
          {greetingCards.map((item) => (
            <div
              key={item.title}
              className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl"
              style={{
                animation: `fadeInUp 0.8s ease-out ${item.delay}s both`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-transparent rounded-2xl" />
              <div className="relative z-10">
                <div className="text-amber-300 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-amber-100/80">{item.message}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Subtle signature at bottom right */}
        <div className="fixed bottom-4 right-4 z-50 opacity-50 hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center gap-2 text-amber-200/40 hover:text-amber-200/60">
            <span className="text-xs tracking-wider">Mustafa Hussaini</span>
            <Heart className="w-3 h-3" />
          </div>
        </div>

        {/* Decorative pattern */}
        <div className="mt-12 flex gap-4">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-amber-300/30 rounded-full animate-pulse"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>

        {/* Traditional border */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-amber-900/50 to-transparent pointer-events-none" />
        
        <div className="absolute bottom-4 left-0 right-0 text-center text-amber-200/60 text-sm">
          <p>✨ May the magic of Eid bring joy to your heart ✨</p>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default EidCelebration;