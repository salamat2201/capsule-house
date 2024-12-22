import React, { useState, useEffect, useRef } from 'react';
import './ExpandingImageSection.css';
import image from '../assets/CAPSULE-HOUSE-21.jpg'; // Замените на путь к вашему изображению

const ExpandingImageSection = () => {
  const [scale, setScale] = useState(1);
  const sectionRef = useRef(null);

  const handleScroll = () => {
    const section = sectionRef.current;
    if (!section) return;

    const sectionTop = section.getBoundingClientRect().top; // Верхняя граница секции
    const sectionHeight = section.offsetHeight;
    const startScroll = window.innerHeight; // Начало увеличения
    const endScroll = sectionTop + sectionHeight;

    if (sectionTop <= startScroll && sectionTop >= -sectionHeight) {
      const progress = Math.min(1, (startScroll - sectionTop) / sectionHeight);
      const maxScale = 2.5;
      setScale(1 + progress * (maxScale - 1));
    } else if (sectionTop > startScroll) {
      setScale(1); // Сбрасываем масштаб
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="expanding-section">
      <div className="decorative-star">✦</div>

      <h1 className="main-title">
        Функциональный дизайн, который позволяет расширить границы современного отдыха
      </h1>

      <div className="labels">
        <div className="label">Надежный</div>
        <div className="label">Экологичный</div>
        <div className="label label-dark">Гарантия 20 лет</div>
      </div>

      <div
        className="expanding-image"
        style={{
          transform: `scale(${scale})`,
        }}
      >
        <img src={image} alt="Expanding View" />
      </div>
    </div>
  );
};

export default ExpandingImageSection;
