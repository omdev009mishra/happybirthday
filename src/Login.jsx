import React, { useState, useEffect } from 'react';

const ALLOWED_EMAILS = [
  'omdev009mishra@gmail.com',
  'tinkleballe10@gmail.com'
];

function SparkleLayer() {
  const sparkleItems = Array.from({ length: 14 });
  return (
    <div className="sparkle-layer" aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      {sparkleItems.map((_, index) => (
        <span
          key={`sparkle-login-${index}`}
          className="sparkle-dot"
          style={{
            position: 'absolute',
            left: `${(index * 7 + 12) % 90}%`,
            top: `${(index * 13 + 8) % 90}%`,
            animationDelay: `${index * 180}ms`,
            animationDuration: `${2400 + index * 120}ms`
          }}
        />
      ))}
    </div>
  );
}

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ALLOWED_EMAILS.includes(email.trim().toLowerCase())) {
      setError('');
      onLogin(email.trim().toLowerCase());
    } else {
      setError('Access denied. Only authorized emails allowed.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden bg-[#fff5f8]">
      {/* Background Decorations */}
      <SparkleLayer />

      <div className="bg-3d" aria-hidden>
        <div className="balloon balloon--a" style={{ left: '5%', top: '15%' }}>🎈</div>
        <div className="balloon balloon--b" style={{ right: '8%', top: '10%' }}>🎁</div>
        <div className="balloon balloon--c" style={{ left: '40%', top: '5%' }}>✨</div>
        <div className="bg-3d-item big" style={{ left: '10%', bottom: '15%', animationDelay: '1s' }}>💖</div>
        <div className="bg-3d-item" style={{ right: '15%', bottom: '20%', animationDelay: '0.5s' }}>🌸</div>
      </div>

      {/* Main Cute Login Card */}
      <div className="center-card relative z-10 w-full max-w-md backdrop-blur-xl bg-white/70 border-2 border-pink-100/50 shadow-[0_20px_60px_-15px_rgba(255,182,193,0.3)] rounded-[3rem] p-10 transform transition-all duration-700 animate-[floatUp_6s_ease-in-out_infinite] hover:shadow-[0_25px_70px_-10px_rgba(255,182,193,0.4)]">

        {/* Cute Icon/Sticker at top */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-pink-200 to-pink-400 rounded-full flex items-center justify-center shadow-lg border-4 border-white animate-bounce-slow">
          <span className="text-4xl">💌</span>
        </div>

        <div className="text-center mt-6 mb-8">
          <h1 className="card-title text-4xl mb-2 tracking-tight">Yashi's Gateway</h1>
          <p className="card-sub text-pink-400 font-medium italic">"A magical journey awaits you..."</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="relative group">
            <input
              type="email"
              placeholder="Your magical email"
              value={email}
              onChange={e => {
                setEmail(e.target.value);
                setIsTyping(true);
              }}
              onBlur={() => setIsTyping(false)}
              className="w-full px-8 py-5 bg-white/60 border-2 border-pink-200 rounded-[2rem] focus:border-pink-500 focus:bg-white transition-all outline-none text-pink-900 placeholder-pink-300 shadow-inner group-hover:border-pink-300"
              required
            />
            <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-2">
              {isTyping && <span className="animate-pulse text-pink-400 text-xl">✍️</span>}
              {!isTyping && email && <span className="text-pink-400 text-xl">✨</span>}
            </div>
          </div>

          <button
            type="submit"
            className="cta w-full py-5 text-xl font-bold bg-gradient-to-r from-pink-400 via-pink-500 to-pink-400 bg-[length:200%_auto] animate-gradient-x shadow-xl shadow-pink-200 active:scale-95 transition-all rounded-[2rem] text-white hover:brightness-110 hover:shadow-2xl hover:-translate-y-1"
          >
            Open the Celebration 🌸
          </button>

          {error && (
            <div className="bg-pink-50/80 backdrop-blur-sm text-pink-600 p-5 rounded-3xl text-center text-sm font-semibold animate-shake border border-pink-200">
              <span className="mr-2">🙊</span> {error}
            </div>
          )}
        </form>

        <div className="mt-10 pt-8 border-t border-pink-100 text-center relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white px-4 text-pink-200 text-lg">🍰</div>
          <p className="text-xs text-pink-300 font-medium tracking-widest uppercase">
            Exclusive Access • Made with Love
          </p>
        </div>
      </div>

      {/* Additional Floating Hearts & Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="bg-3d-item small" style={{ left: '85%', top: '25%' }}>🍓</div>
        <div className="bg-3d-item small" style={{ left: '15%', top: '75%' }}>🍭</div>
        <div className="bg-3d-item small" style={{ left: '45%', top: '90%' }}>🧁</div>
        <div className="bg-3d-item animate-pulse" style={{ left: '75%', bottom: '5%', fontSize: '40px' }}>🎀</div>
      </div>
    </div>
  );
}
