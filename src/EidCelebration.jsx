import React from "react";

const EidCelebration = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center px-4 py-8 bg-gradient-to-b from-slate-50 to-amber-50 font-sans antialiased overflow-hidden">
      {/* Abstract background shapes (no cards) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large organic blobs */}
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-emerald-100/40 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-amber-100/50 blur-3xl"></div>

        {/* Delicate leaf patterns */}
        <svg
          className="absolute top-10 left-5 w-24 h-24 text-emerald-200/30"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <path d="M50 10 Q65 25 50 40 Q35 25 50 10" />
          <path d="M30 40 Q45 50 30 65 Q15 50 30 40" />
          <path d="M70 45 Q85 55 70 70 Q55 55 70 45" />
        </svg>

        {/* Scattered light particles */}
        <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-amber-300 rounded-full animate-ping opacity-20"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-emerald-300 rounded-full animate-pulse opacity-30"></div>
        <div className="absolute top-2/3 left-1/2 w-2 h-2 bg-amber-400/20 rounded-full animate-pulse delay-700"></div>

        {/* Minimalist arabesque corner motifs */}
        <div className="absolute top-0 left-0 w-32 h-32 opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full text-emerald-800">
            <path
              d="M20 20 L35 35 M20 35 L35 20"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <circle cx="27.5" cy="27.5" r="3" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10 rotate-180">
          <svg viewBox="0 0 100 100" className="w-full h-full text-emerald-800">
            <path
              d="M20 20 L35 35 M20 35 L35 20"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <circle cx="27.5" cy="27.5" r="3" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* Main content - no cards, pure text and gentle elements */}
      <main className="relative z-10 w-full max-w-md flex flex-col items-center text-center space-y-8">
        {/* Welcome salam - very soft */}
        <div className="text-emerald-700/40 text-sm tracking-[0.3em] uppercase font-light">
          السلام عليكم
        </div>

        {/* Main crescent with ethereal glow */}
        <div className="relative flex justify-center mb-2">
          <div className="absolute inset-0 bg-amber-200/30 rounded-full blur-3xl w-32 h-32 mx-auto"></div>
          <span className="relative text-7xl filter drop-shadow-2xl text-amber-600/90">
            🌙
          </span>
        </div>

        {/* Eid greeting with elegant font treatment */}
        <h1 className="relative">
          <span className="block text-5xl md:text-6xl font-serif italic font-light bg-gradient-to-r from-emerald-800 via-amber-800 to-emerald-800 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
            Eid Mubarak
          </span>
          <span className="block text-xs tracking-[0.5em] text-stone-400/80 mt-2 uppercase">
            عيد مبارك
          </span>
        </h1>

        {/* Contextual blessing - more meaningful and poetic */}
        <div className="space-y-5 text-stone-700/90 max-w-sm">
          <p className="font-serif text-3xl text-emerald-700/40">❀</p>

          <p className="text-lg leading-relaxed font-light">
            As the crescent moon rises,
            <br />
            <span className="font-medium text-emerald-700">
              may your heart rise with forgiveness,
            </span>
            <br />
            your home fill with barakah,
            <br />
            and your hands open in generosity.
          </p>

          <div className="py-2">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-300/50 to-transparent mx-auto"></div>
          </div>

          {/* Deeper context: spiritual essence of Eid */}
          <div className="bg-white/20 backdrop-blur-[2px] rounded-3xl px-5 py-4 border border-white/30 shadow-sm">
            <p className="text-sm italic text-stone-600/90">
              "Eid is not just a celebration, but a renewal of the covenant with
              the Divine — a day to weave gratitude into laughter, and
              compassion into every greeting."
            </p>
          </div>

          {/* Three core blessings - visual poetry */}
          <div className="flex justify-center gap-6 pt-2 text-xs text-stone-500/80">
            <span className="flex flex-col items-center gap-1">
              <span className="text-emerald-600/60 text-lg">☾</span>
              <span>forgiveness</span>
            </span>
            <span className="flex flex-col items-center gap-1">
              <span className="text-amber-600/60 text-lg">✧</span>
              <span>gratitude</span>
            </span>
            <span className="flex flex-col items-center gap-1">
              <span className="text-emerald-600/60 text-lg">☘︎</span>
              <span>togetherness</span>
            </span>
          </div>
        </div>

        {/* Traditional prayer - bilingual with meaning */}
        <div className="pt-4 space-y-3">
          <div className="flex justify-center gap-2 text-amber-600/30 text-lg">
            <span>✦</span>
            <span className="text-emerald-600/40">☾</span>
            <span>✦</span>
          </div>

          <p
            className="font-arabic text-2xl text-stone-700/70"
            style={{ fontFamily: "Amiri, Georgia, serif" }}
          >
            تقبل الله منا ومنكم
          </p>
          <p className="text-xs italic text-stone-500/70 max-w-xs mx-auto">
            "May Allah accept [good deeds] from us and from you — and may you
            witness this blessed occasion for many years to come."
          </p>
        </div>

        {/* Closing nature motif */}
        <div className="flex items-center justify-center gap-2 text-emerald-600/30 text-sm pt-4">
          <span className="tracking-[0.3em] text-xs">❁</span>
          <span className="text-xs text-stone-400/60">Shawwal 1446</span>
          <span className="tracking-[0.3em] text-xs">❁</span>
        </div>

        {/* Delicate footer reminder */}
        <p className="text-[0.6rem] text-stone-400/40 tracking-widest uppercase">
          ✦ from our hearts to yours ✦
        </p>
      </main>

      {/* Custom styles for animations and font */}
      <style jsx>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          animation: gradientShift 6s ease infinite;
        }
        /* Ensure no card-like styles */
        .bg-white/20 {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(2px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        /* Google Font for Arabic elegance */
        @import url("https://fonts.googleapis.com/css2?family=Amiri:ital@0;1&display=swap");
        .font-arabic {
          font-family: "Amiri", serif;
        }
      `}</style>
    </div>
  );
};

export default EidCelebration;
