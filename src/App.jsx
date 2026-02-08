import React, { useEffect, useState, useRef } from 'react'
import photo1 from './assets/photo/yashiphoto (1).jpg'
import photo2 from './assets/photo/yashiphoto (2).jpg'
import photo3 from './assets/photo/yashiphoto (3).jpg'
import photo4 from './assets/photo/yashiphoto (4).jpg'
import photo5 from './assets/photo/yashiphoto (5).jpg'
import photo6 from './assets/photo/yashiphoto (6).jpg'
import photo7 from './assets/photo/yashiphoto (7).jpg'
import photo8 from './assets/photo/yashiphoto (8).jpg'
import photo9 from './assets/photo/yashiphoto (9).jpg'

const message = `I wanted to take a moment to tell you how incredibly special you are to me. You bring so much light and happiness into my life, and I feel so lucky to have you by my side.

I hope your day is as beautiful and amazing as your heart is. Here’s to you, your dreams, and everything that makes you smile.

I love you more than words can say. Have the best day ever! ❤️`

const letterMessage = `if you're only lived in hell i'd become heaven for u. even if i had to build a staircase to get there. i would do anything for u. if you'wre only ever know silence i'd be the Crescendo that kis.. you awake. i would be the endless supply of love that reminds u it doesn't always just take.

if u were only met sorrow i'd introduced you to great joy. if u were only know confusion i'd give only honesty for you to enjoy bczz shadow hide hurt but they dont take hurt away.

it isnt alwsy sunny but i will convince your light to stay. if u only ever lived half hearted i would review the other half with the same neuronal impulse that changed my brain chemistry with your laugh.

if u only know loss i'd show you what there is to gain beczz falling in love insnt always one sided or in vain. if u indulge in fearful thinking how about a taste of hope bczz happy endings for hopeless romantics will always be my favorite tope.

soo my beautiful angel my favorite start in the sky when u meet heaven u will think it is hell and you will sit in your car and cry but anything worth doing is worth being afraid to do.

i asked god what his favorite creation was
he gave me a picture of you ❤️`

const galleryCards = [
  { id: 1, title: 'Photo 1', img: photo1 },
  { id: 2, title: 'Photo 2', img: photo2 },
  { id: 3, title: 'Photo 3', img: photo3 },
  { id: 4, title: 'Photo 4', img: photo4 },
  { id: 5, title: 'Photo 5', img: photo5 },
  { id: 6, title: 'Photo 6', img: photo6 },
  { id: 7, title: 'Photo 7', img: photo7 },
  { id: 8, title: 'Photo 8', img: photo8 },
  { id: 9, title: 'Photo 9', img: photo9 }
]

export default function App() {
  const [text, setText] = useState('')
  const [activeFlood, setActiveFlood] = useState(null)
  const [droplets, setDroplets] = useState([])
  const [page, setPage] = useState('home')
  const [loading, setLoading] = useState(true)
  const [transitioning, setTransitioning] = useState(false)
  const [transitionMessage, setTransitionMessage] = useState('')
  const [angle, setAngle] = useState(0)
  const [ringTilt, setRingTilt] = useState({ x: 0, y: 0 })
  const [popupVisible, setPopupVisible] = useState(false)
  const [popupText, setPopupText] = useState('')
  const [popupTyping, setPopupTyping] = useState('')
  const [popupImage, setPopupImage] = useState('')
  const [keysPressed, setKeysPressed] = useState('')
  const cardRef = useRef(null)
  const rafRef = useRef(null)
  const pointer = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    let i = 0
    const speed = 28
    const timer = setInterval(() => {
      setText((prev) => prev + message[i])
      i += 1
      if (i >= message.length) clearInterval(timer)
    }, speed)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    function onWheel(e) {
      e.preventDefault()
      setAngle(prev => (prev + e.deltaY * 0.05) % 360)
    }
    function onMouseMove(e) {
      const x = (e.clientY / window.innerHeight - 0.5) * 30
      const y = (e.clientX / window.innerWidth - 0.5) * 30
      setRingTilt({ x, y })
    }
    if (page === 'gallery') {
      window.addEventListener('wheel', onWheel, { passive: false })
      window.addEventListener('mousemove', onMouseMove)
    }
    return () => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [page])

  useEffect(() => {
    if (!popupVisible) return
    let i = 0
    const timer = setInterval(() => {
      setPopupTyping(popupText.slice(0, i))
      i += 1
      if (i > popupText.length) clearInterval(timer)
    }, 25)
    return () => clearInterval(timer)
  }, [popupVisible, popupText])

  useEffect(() => {
    const handleKeyPress = (e) => {
      setKeysPressed(prev => (prev + e.key).slice(-4))
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  useEffect(() => {
    if (keysPressed.toLowerCase().includes('yshi')) {
      triggerMagic()
      setKeysPressed('')
    }
  }, [keysPressed])

  const triggerMagic = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff89a9', '#ffb6c1', '#ffc0cb', '#ff69b4', '#ff1493']
    })
  }

  const handleCardDoubleClick = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.5 },
      colors: ['#ff89a9', '#ffb6c1', '#ffc0cb']
    })
  }

  const handleCardClick = (title, img) => {
    const messages = {
      'Photo 1': '📸 What a beautiful moment! Your genuine smile brings warmth to everyone\'s heart. Wishing you a serene and joyful birthday.',
      'Photo 2': '🌟 Every captured moment reminds me of your grace and kindness. May this year be filled with peaceful blessings.',
      'Photo 3': '💫 Your presence brightens the world around you. Here\'s to celebrating all the wonderful things that make you you.',
      'Photo 4': '🎀 Such a lovely memory! You deserve all the happiness and tranquility this world has to offer. Happy Birthday, dear!',
      'Photo 5': '✨ Captured forever in time, but more importantly in our hearts. May your birthday be as radiant as you are.',
      'Photo 6': '🌺 Your gentle spirit is truly special. Wishing you a birthday filled with peace, love, and endless smiles.',
      'Photo 7': '💝 This beautiful moment speaks volumes about your wonderful character. May every day bring you joy and contentment.',
      'Photo 8': '🌈 You make every moment brighter! Here\'s to a birthday filled with serenity, laughter, and beautiful memories.',
      'Photo 9': '🎊 Simply stunning! Your presence is a gift to the world. Celebrating you with all the warmth and affection in our hearts.'
    }
    setPopupText(messages[title] || '✨ You are amazing! Happy Birthday!')
    setPopupImage(img)
    setPopupTyping('')
    setPopupVisible(true)
  }

  // spawn emoji droplets like rain inside the card
  function triggerRain(emoji) {
    const count = 14
    const now = Date.now()
    const items = Array.from({ length: count }).map((_, i) => ({
      id: `${now}-${i}`,
      emoji,
      left: `${10 + Math.random() * 80}%`,
      delay: Math.random() * 300,
      size: 12 + Math.round(Math.random() * 24)
    }))
    setDroplets(items)
    setTimeout(() => setDroplets([]), 1400)
  }

  useEffect(() => {
    const el = cardRef.current
    if (!el) return

    function handleMove(e) {
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const mx = e.clientX
      const my = e.clientY
      const dx = mx - cx
      const dy = my - cy
      const px = dx / (rect.width / 2)
      const py = dy / (rect.height / 2)
      pointer.current.x = px
      pointer.current.y = py
      if (!rafRef.current) rafRef.current = requestAnimationFrame(animate)
    }

    function handleLeave() {
      pointer.current.x = 0
      pointer.current.y = 0
      if (!rafRef.current) rafRef.current = requestAnimationFrame(animate)
    }

    function animate() {
      rafRef.current = null
      const px = pointer.current.x
      const py = pointer.current.y
      const max = 10
      const rotY = px * max
      const rotX = -py * max
      const tz = 12 + Math.min(Math.max(Math.abs(px) + Math.abs(py), 0), 1) * 8
      el.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(${tz}px)`
      if (Math.abs(px) > 0.02 || Math.abs(py) > 0.02) el.classList.add('tilted')
      else el.classList.remove('tilted')
    }

    window.addEventListener('mousemove', handleMove)
    el.addEventListener('mouseleave', handleLeave)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      el.removeEventListener('mouseleave', handleLeave)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  const handleGalleryTransition = () => {
    setTransitioning(true)
    setTransitionMessage('Loading your memories...')
    setTimeout(() => {
      setPage('gallery')
      setTransitioning(false)
    }, 2000)
  }

  const handleFinalPageTransition = () => {
    setTransitioning(true)
    setTransitionMessage('Opening my heart to you...')
    setTimeout(() => {
      setPage('final')
      setTransitioning(false)
    }, 2500)
  }

  const handleLetterPageTransition = () => {
    setTransitioning(true)
    setTransitionMessage('One more thing, just for you...')
    setTimeout(() => {
      setPage('letter')
      setTransitioning(false)
    }, 1800)
  }

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <h1 className="loading-title">Happy Birthday, Yashi! 🎉</h1>
          <div className="loading-spinner"></div>
          <p className="loading-text">Preparing something special for you...</p>
        </div>
      </div>
    )
  }

  if (transitioning) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <div className="loading-heart">💖</div>
          <p className="loading-text">{transitionMessage}</p>
        </div>
      </div>
    )
  }

  if (page === 'final') {
    return (
      <div className="final-page" onClick={(e) => {
        const heart = document.createElement('div');
        heart.className = 'floating-emoji';
        heart.textContent = ['❤️', '💖', '💕', '💗', '💝'][Math.floor(Math.random() * 5)];
        heart.style.left = e.clientX + 'px';
        heart.style.top = e.clientY + 'px';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 2000);
      }}>
        <div className="final-content">
          <div className="final-decoration sparkle" onClick={(e) => {
            e.stopPropagation();
            confetti({
              particleCount: 50,
              spread: 60,
              origin: { x: 0.5, y: 0.4 },
              colors: ['#ff89a9', '#ffb6c1', '#ffc0cb', '#ff69b4']
            });
          }}>✨</div>
          <h1 className="final-title">My Dearest Yashi,</h1>
          <div className="final-message">
            <p>Thank you for being the light in my life, for every smile, every laugh, and every beautiful moment we've shared together.</p>
            <p>I want you to know that no matter where life takes us, no matter what challenges we face, I am always with you. In your joys and in your struggles, in your dreams and in your reality.</p>
            <p>Your happiness means the world to me, and I promise to always stand by your side, supporting you, cherishing you, and loving you with all my heart.</p>
            <p className="final-love interactive-heart" onClick={(e) => {
              e.stopPropagation();
              confetti({
                particleCount: 100,
                spread: 80,
                origin: { x: 0.5, y: 0.6 },
                colors: ['#ff1493', '#ff69b4', '#ffc0cb']
              });
            }}>I love you more than words could ever express. ❤️</p>
            <p className="final-signature">— With all my love,<br/>Pranjal Mishra</p>
          </div>
          <div className="final-decoration sparkle" onClick={(e) => {
            e.stopPropagation();
            confetti({
              particleCount: 50,
              spread: 60,
              origin: { x: 0.5, y: 0.6 },
              colors: ['#ff89a9', '#ffb6c1', '#ffc0cb', '#ff69b4']
            });
          }}>✨</div>
          <button className="final-back-btn" onClick={() => setPage('gallery')}>← Back to Gallery</button>
          <button className="final-back-btn" onClick={handleLetterPageTransition}>One More Page →</button>
        </div>
      </div>
    )
  }

  if (page === 'letter') {
    return (
      <div className="letter-page">
        <div className="letter-content">
          <h1 className="letter-title">For You, Always</h1>
          <div className="letter-body">
            {letterMessage.split('\n').map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
          <div className="letter-actions">
            <button className="final-back-btn" onClick={() => setPage('final')}>← Back</button>
            <button className="final-back-btn" onClick={() => setPage('gallery')}>Back to Gallery</button>
          </div>
        </div>
      </div>
    )
  }

  if (page === 'gallery') {
    return (
      <div className="gallery-page">
        <button className="back-button" onClick={() => setPage('home')}>← Back</button>
        <button className="final-button" onClick={handleFinalPageTransition}>A Special Message 💌</button>

        <div className="gallery-scroll">
          <div className="gallery-stage">
            <div className="carousel" style={{ transform: `rotateX(${ringTilt.x}deg) rotateY(${angle + ringTilt.y}deg)` }}>
              {galleryCards.map((c, i) => (
                <div
                  key={c.id}
                  className="ring-card"
                  onClick={() => handleCardClick(c.title, c.img)}
                  onDoubleClick={handleCardDoubleClick}
                  style={{
                    transform: `translate(-50%, -50%) rotateY(${(360 / galleryCards.length) * i}deg) translateZ(550px)`,
                    cursor: 'pointer'
                  }}
                >
                  <div className="ring-card-inner">
                    <img src={c.img} alt={c.title} />
                    <div className="ring-card-title">{c.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {popupVisible && (
          <div className="popup-overlay" onClick={() => setPopupVisible(false)}>
            <div className="popup-card" onClick={(e) => e.stopPropagation()}>
              <button className="popup-close" onClick={() => setPopupVisible(false)}>✕</button>
              <div className="popup-content">
                <img src={popupImage} alt="Selected photo" className="popup-photo" />
                <div className="popup-typing">{popupTyping}<span className="caret"></span></div>
              </div>
              <p className="popup-hint">Click anywhere to close</p>
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative">
      <div className="bg-3d" aria-hidden>
        <div role="button" tabIndex={0} onClick={() => triggerRain('❤️')} className="bg-3d-item big" style={{ left: '6%', top: '12%', transform: 'translateZ(120px)' }}>❤️</div>
        <div role="button" tabIndex={0} onClick={() => triggerRain('🌸')} className="bg-3d-item" style={{ left: '18%', top: '30%', transform: 'translateZ(60px)' }}>🌸</div>
        <div role="button" tabIndex={0} onClick={() => triggerRain('😊')} className="bg-3d-item small" style={{ left: '36%', top: '8%', transform: 'translateZ(40px)' }}>😊</div>
        <div role="button" tabIndex={0} onClick={() => triggerRain('🌺')} className="bg-3d-item" style={{ right: '14%', top: '24%', transform: 'translateZ(80px)' }}>🌺</div>
        <div role="button" tabIndex={0} onClick={() => triggerRain('💫')} className="bg-3d-item small" style={{ right: '6%', top: '6%', transform: 'translateZ(100px)' }}>💫</div>
        <div role="button" tabIndex={0} onClick={() => triggerRain('🌼')} className="bg-3d-item" style={{ left: '60%', top: '38%', transform: 'translateZ(50px)' }}>🌼</div>
      </div>

      <div ref={cardRef} className="center-card card-content" onDoubleClick={handleCardDoubleClick}>
        <div className="text-center">
          <h1 className="card-title">Happy Birthday, Yashi!</h1>
          <p className="card-sub mt-2">A little note for you:</p>

          <div className="mt-6 text-left typing" aria-live="polite">
            {text}
            <span className="caret" />
          </div>

          <div className="mt-6 text-center">
            <button className="cta" onClick={handleGalleryTransition}>Next Somthing spacial</button>
          </div>
        </div>
        {/* Emoji droplets (rain) */}
        {droplets.map((d) => (
          <div
            key={d.id}
            className="droplet"
            style={{ left: d.left, fontSize: d.size, animationDelay: `${d.delay}ms` }}
            aria-hidden
          >
            {d.emoji}
          </div>
        ))}
      </div>
    </div>
  )
}
