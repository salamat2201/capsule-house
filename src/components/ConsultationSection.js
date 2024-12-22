import React from 'react';
import './ConsultationSection.css';

const ConsultationSection = () => {
  const phoneNumber = "+77711460961";


  const advantages = [
    'Сейсмоустойчивость',
    'Мобильность',
    'Быстрый монтаж',
    'Фиксированная цена',
    'Гарантия на работы 10 лет',
  ];


  return (
    <section className="consultation-section">
      <div className="consultation-content">
        {/* Левый блок */}
        <div className="consultation-left">
          <div className="advantages">
            <h3 className="advantages-title">Преимущества</h3>
            <ul className="advantages-list">
              {advantages.map((advantage, index) => (
                <li key={index} className="advantages-item">
                  <span className="check-icon">✔</span> {advantage}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Правый блок */}
        <div className="consultation-right">
          <h2 className="titleF">
            Откройте новые горизонты возможностей вашего отельного бизнеса или покупайте свой дом мечты
          </h2>
          <form className="consultation-form">
            <a  target="_blank" href={`https://wa.me/${phoneNumber.replace('+', '')}`} className="consult-button">
              ПРОКОНСУЛЬТИРОВАТЬСЯ
            </a>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;
