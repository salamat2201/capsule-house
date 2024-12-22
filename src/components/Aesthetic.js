import React from 'react';
import styles from './Aesthetic.module.css';
import img1 from '../assets/IMG_3273.jpg';
import img2 from '../assets/IMG_3274.JPG';
import img3 from '../assets/IMG_3275.JPG';
import img4 from '../assets/IMG_3276.JPG';
import img5 from '../assets/IMG_3277.JPG';
import img6 from '../assets/IMG_3279.JPG';
import img7 from '../assets/IMG_3280.JPG';
import img8 from '../assets/IMG_3281.JPG';

const features = [
  { id: 1, image: img1 },
  { id: 2, image: img2 },
  { id: 3, image: img3 },
  { id: 4, image: img4 },
  { id: 5, image: img5 },
  { id: 6, image: img6 },
  { id: 7, image: img7 },
  { id: 8, image: img8 },
];

const Aesthetic = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.titleA}>
        Концептуальная мебель
      </h1>
      <h1 className={styles.titleA}>
      и аксессуары для вас
      </h1>
      <h1 className={styles.titleA}>
      Аesthetic Objects
      </h1>
      <div className={styles.scrollContainer}>
        <div className={styles.featureList}>
          {features.map((feature) => (
            <div key={feature.id} className={styles.featureCard}>
              <img src={feature.image} alt={`Feature ${feature.id}`} className={styles.image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aesthetic;
