import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import front from '../assets/front.jpg';
import lozka from '../assets/lozka.BMP';
import studio2 from '../assets/studio2.BMP';
import Footer from '../components/Footer';
import './Home.css';

function Home() {
  const images = [front, lozka, studio2];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Automatyczna zmiana slajdu co 5 sekund
  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [goToNext]);

  return (
    <div className="home">
      {/* Slider */}
      <div className="slider">
        <div
          className="slider-wrapper"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className={`slider-image ${index === currentIndex ? "active" : ""}`}
            />
          ))}
        </div>
        <button className="arrow left-arrow" onClick={goToPrevious}>‹</button>
        <button className="arrow right-arrow" onClick={goToNext}>›</button>
      </div>

      {/* Pierwsza sekcja Hotel (obrazek po lewej, tekst po prawej) */}
      <div className="hotel-tab">
        <div className="hotel-info">
          <div className="hotel-photo">
            <img src={front} alt="Hotel West" />
          </div>
          <div className="hotel-description">
            <p>
              Oto podstawowe informacje o naszym hotelu, wyposażonym w nowoczesne udogodnienia
              i komfortowe pokoje. Zapraszamy do zapoznania się z naszą ofertą!
            </p>
          </div>
        </div>
      </div>

      {/* Druga sekcja Hotel (tekst po lewej, obrazek po prawej) */}
      <div className="hotel-tab reverse">
        <div className="hotel-info">
          <div className="hotel-description">
            <p>
              Więcej informacji o naszej ofercie oraz wyjątkowej atmosferze, która sprawia, że
              pobyt u nas jest niezapomniany.
            </p>
          </div>
          <div className="hotel-photo">
            <img src={studio2} alt="Hotel West - Widok" />
          </div>
        </div>
      </div>

      {/* Sekcja Pokoje */}
      <div className="rooms">
        <h2>Pokoje</h2>
        <div className="room-types">
          <div className="room-card">
            <h3>Pokoje 1-4 osobowe</h3>
            <p>Komfortowe pokoje dla małych grup i rodzin, z nowoczesnym wyposażeniem.</p>
          </div>
          <div className="room-card">
            <h3>Studia z aneksem kuchennym</h3>
            <p>Przestronne studio z aneksem kuchennym, idealne dla większych grup, oferujące wysoki standard.</p>
          </div>
          <div className="room-card">
            <h3>Mieszkania</h3>
            <p>Luksusowe mieszkania dla wymagających, z pełnym wyposażeniem i komfortem.</p>
          </div>
        </div>
      </div>

      {/* Banner rezerwacji */}
      <div className="reservation-banner">
        <div className="reservation-top">
          <h2 className="reservation-heading">Zrób rezerwacje</h2>
        </div>
        <div className="reservation-content">
          <div className="reservation-call">
            <span className="call-text">Zadzwoń</span>
            <span className="call-number">533 222 444</span>
          </div>
          <Link to="/reservations" className="reservation-button">
            Rezerwacja online
          </Link>
        </div>
      </div>

      {/* Sekcja Lokalizacja */}
      <div className="location-section">
        <h2>Lokalizacja:</h2>
        <h3>09-100 Płońsk, Wolności 6</h3>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2467.058950877766!2d20.27144341607148!3d52.62905587977371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471c88a5336b91bd%3A0x4e9764e0b7b4d4f6!2sWolno%C5%9B%C4%87%206%2C%2009-100%20P%C5%82o%C5%84sk!5e0!3m2!1spl!2spl!4v1684020012345"
            width="800"
            height="650"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Mapa lokalizacji"
          ></iframe>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
