import React from 'react';
import styles from './Features.module.css';
import img1 from '../assets/IMG_3273.jpg';
import img2 from '../assets/IMG_3274.JPG';
import img3 from '../assets/IMG_3275.JPG';
import img4 from '../assets/IMG_3276.JPG';
import img5 from '../assets/IMG_3277.JPG';
import img6 from '../assets/IMG_3279.JPG';
import img7 from '../assets/IMG_3280.JPG';
import img8 from '../assets/IMG_3281.JPG';
import cond from '../assets/IMG_3539.JPG';
import tepl from '../assets/IMG_3540.JPG';
import nebo from '../assets/IMG_3542.JPG';
import tua from '../assets/IMG_3541.JPG';

const features = [
  { id: 1, image: img1, text: 'Слот для отельной карточки' },
  { id: 2, image: img4, text: 'Проектор, чтобы смотреть фильмы' },
  { id: 3, image: img5, text: 'Шторы для приватности' },
  { id: 4, image: tepl, text: 'Теплый пол' },
  { id: 5, image: cond, text: 'Система кондиционирования' },
  { id: 6, image: img6, text: 'Качественная отделка с премиальными материалами' },
  { id: 7, image: img7, text: 'Светодиодное освещение' },
  { id: 8, image: img3, text: '60-литровый водонагреватель' },
  { id: 9, image: tua, text: 'Полностью готовый санузел' },
  { id: 10, image: nebo, text: 'Потолочное окно с видом на небо' },
];

const Features = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Все необходимое для комфортного освоения природных пространств
      </h1>
      <div className={styles.scrollContainer}>
        <div className={styles.featureList}>
          {features.map((feature) => (
            <div key={feature.id} className={styles.featureCard}>
              <img src={feature.image} alt={feature.text} className={styles.image} />
              <p className={styles.text}>{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
