import React, { useState, useEffect, useRef } from "react";
import "./App.css";

// Color palette
const COLORS = {
  primary: "#4CAF50",
  secondary: "#03A9F4",
  accent: "#FFEB3B",
  textDark: "#222",
  textLight: "#fff"
};

/*
  Navigation Bar Component
  - Smooth scroll to sections.
*/
// PUBLIC_INTERFACE
function Navbar({ sections }) {
  // Handles smooth scroll
  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar" style={{ background: COLORS.primary }}>
      <div className="navbar-brand">
        <span role="img" aria-label="School" className="navbar-logo">🎒</span>
        Bright Futures School
      </div>
      <ul className="navbar-links">
        {sections.map((sec) => (
          <li key={sec.id}>
            <a href={`#${sec.id}`} onClick={e => handleScroll(e, sec.id)}>
              {sec.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// PUBLIC_INTERFACE
function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-bg"/>
      <div className="hero-content">
        <h1>
          Welcome to <span className="highlight-green">Bright Futures</span> School!
        </h1>
        <p>
          A place where learning is <span className="highlight-yellow">fun</span>, friendships grow, and every child shines bright. 🌟
        </p>
      </div>
      <div className="hero-bubbles">
        <span className="bubble bubble1" />
        <span className="bubble bubble2" />
        <span className="bubble bubble3" />
      </div>
    </section>
  );
}

// PUBLIC_INTERFACE
function IntroductionSection() {
  return (
    <section className="intro-section" id="about">
      <h2 className="section-title">About Our School</h2>
      <p className="section-blurb">
        At <b>Bright Futures School</b>, we nurture creativity, curiosity, and kindness in a safe and inspiring environment. 
        <br />
        Our dedicated teachers encourage children to explore, discover, and become confident life-long learners!
      </p>
    </section>
  );
}

// PUBLIC_INTERFACE
function ActivitiesSection() {
  const activities = [
    { emoji: "🎨", name: "Art & Craft", desc: "Creative projects with colors, clay, and imagination." },
    { emoji: "🤸‍♀️", name: "Sports & Games", desc: "Outdoor fun, teamwork, and active play every day." },
    { emoji: "🔬", name: "Science Explorers", desc: "Experiments, discoveries, and hands-on excitement." },
    { emoji: "🎶", name: "Music Time", desc: "Singing, dancing, and exploring instruments." },
    { emoji: "📚", name: "Story Corner", desc: "Imaginative tales and early literacy joy." },
    { emoji: "🌳", name: "Nature Walks", desc: "Learning outdoors and connecting with the world." }
  ];

  return (
    <section className="activities-section" id="activities">
      <h2 className="section-title">Activities</h2>
      <div className="activities-list">
        {activities.map((a, idx) => (
          <div className="activity-card" key={a.name}>
            <div className="activity-emoji">{a.emoji}</div>
            <div className="activity-name">{a.name}</div>
            <div className="activity-desc">{a.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// PUBLIC_INTERFACE
function GallerySection() {
  // Placeholder illustration images
  const gallery = [
    { src: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80", alt: "Kids painting" },
    { src: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80", alt: "Nature walk" },
    { src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80", alt: "Music class" },
    { src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", alt: "Science experiment" },
    { src: "https://images.unsplash.com/photo-1518183214770-9cffbec72538?auto=format&fit=crop&w=400&q=80", alt: "Outdoor games" },
    { src: "https://images.unsplash.com/photo-1600267165300-c7c062b3c2d7?auto=format&fit=crop&w=400&q=80", alt: "Reading time" }
  ];
  return (
    <section className="gallery-section" id="gallery">
      <h2 className="section-title">Gallery</h2>
      <div className="gallery-grid">
        {gallery.map((img, idx) => (
          <div className="gallery-img-wrapper" key={idx}>
            <img src={img.src} alt={img.alt} className="gallery-img"/>
          </div>
        ))}
      </div>
    </section>
  );
}

// PUBLIC_INTERFACE
function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">Contact Us</h2>
      <div className="contact-grid">
        <div className="contact-block">
          <div className="contact-icon" style={{color: COLORS.secondary}}>📍</div>
          <div>
            <b>Address:</b><br/>
            123 Rainbow Road,<br/>
            Happyville, KID 1001
          </div>
        </div>
        <div className="contact-block">
          <div className="contact-icon" style={{color: COLORS.primary}}>📞</div>
          <div>
            <b>Phone:</b><br/>
            <a href="tel:+1234567890" className="contact-link">+1 (234) 567-890</a>
          </div>
        </div>
        <div className="contact-block">
          <div className="contact-icon" style={{color: COLORS.accent}}>✉️</div>
          <div>
            <b>Email:</b><br/>
            <a href="mailto:info@brightfutures.school" className="contact-link">info@brightfutures.school</a>
          </div>
        </div>
      </div>
      <div className="contact-footer">
        <span>© {new Date().getFullYear()} Bright Futures School 🎈</span>
      </div>
    </section>
  );
}

function ScrollToTopButton() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 220);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      className="scroll-top-btn"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      style={{ background: COLORS.accent, color: COLORS.textDark }}
    >
      ⬆ Top
    </button>
  );
}

// PUBLIC_INTERFACE
function App() {
  // For accessibility: focus nav when page loads
  const navRef = useRef();
  useEffect(() => {
    if (navRef.current) navRef.current.focus();
  }, []);
  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "activities", label: "Activities" },
    { id: "gallery", label: "Gallery" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <div className="main-bg">
      <a href="#home" className="skip-link">Skip to content</a>
      <div tabIndex={-1} ref={navRef}>
        <Navbar sections={sections}/>
      </div>
      <main>
        <HeroSection/>
        <IntroductionSection/>
        <ActivitiesSection/>
        <GallerySection/>
        <ContactSection/>
      </main>
      <ScrollToTopButton/>
    </div>
  );
}

export default App;
