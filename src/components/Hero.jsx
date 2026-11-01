// Hero = the big dark banner with headline, buttons, slider arrows and photo.
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from './Icons.jsx';

// Each slide is one object. The arrows move between them.
// Put your photos in the "public" folder and set image to e.g. '/hero-1.jpg'.
const SLIDES = [
  {
    line1: ['Give you ', 'the best'],
    line2: ['Business', ' solutions'],
    text: 'Come and listen to a story about a man named Jed, a poor mountaineer barely kept his family fed. All of them had hair of gold like their mother, the youngest one.',
    image: '/hero-1.jpg',
  },
  {
    line1: ['We grow ', 'your brand'],
    line2: ['Smart', ' strategies'],
    text: 'Replace this with the copy for your second slide. Keep it to two short lines so it sits nicely under the headline.',
    image: '/hero-2.jpg',
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const slide = SLIDES[index];

  const prev = () => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length);
  const next = () => setIndex((i) => (i + 1) % SLIDES.length);

  return (
    <section className="hero">
      <div className="hero-arrows">
        <button className="arrow" onClick={prev} aria-label="Previous slide">
          <ChevronLeft />
        </button>
        <button className="arrow" onClick={next} aria-label="Next slide">
          <ChevronRight />
        </button>
      </div>

      {/* "key" makes React re-run the fade-in animation on every slide change */}
      <div className="hero-content" key={index}>
        <h1 className="hero-title">
          {slide.line1[0]}
          <span className="accent">{slide.line1[1]}</span>
        </h1>
        <h2 className="hero-subtitle">
          <span className="accent">{slide.line2[0]}</span>
          {slide.line2[1]}
        </h2>
        <p className="hero-text">{slide.text}</p>
        <div className="hero-buttons">
          <a href="#" className="btn btn-primary">Purchase</a>
          <a href="#" className="btn btn-outline">Read more</a>
        </div>
      </div>

      <div className="hero-photo">
        <img
          src={slide.image}
          alt=""
          // If the photo is missing, hide the broken image and show the placeholder behind it.
          onError={(e) => (e.currentTarget.style.display = 'none')}
        />
        <span className="photo-placeholder">Your photo here<br />public/hero-{index + 1}.jpg</span>
      </div>
    </section>
  );
}
