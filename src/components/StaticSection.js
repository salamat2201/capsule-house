import React from 'react';
import './StaticSection.css';
import backgroundImg from '../assets/Без названия (3).jpg'; // Замените на ваше изображение

const StaticSection = () => {
  return (
    <div className="static-section">
      {/* Фоновое изображение с размитием */}
      <div
        className="background"
      ></div>

      {/* Текст поверх изображения */}
      <div className="text-overlay">
        <h1 className='titleG'>Идеально подходят</h1>
        <h1 className='titleG'>для туристических комплексов</h1>
        <h1 className='titleG'>и глэмпинга</h1>
        <p>Создайте современные и уникальные пространства.</p>
      </div>
    </div>
  );
};

export default StaticSection;
