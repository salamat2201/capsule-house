import React from "react";
import styles from "./CapsuleBusinessInfo.module.css";
import img1 from '../assets/IMG_3414.JPG'

const CapsuleBusinessInfo = () => {
  const phoneNumber = "+77711460961";

  return (
    <div className={styles.container}>
      {/* Основной блок с изображением и заголовком */}
      <div className={styles.hero}>
        <div className={styles.imageContainer}>
          <img
            src={img1}// Замените ссылку
            alt="Capsule houses"
            className={styles.image}
          />
          <div className={styles.demand}>
            <p>Спрос на эко-туризм растёт 📈</p>
          </div>
        </div>
        <div className={styles.heroText}>
          <h1 className={styles.title}>
            Постройте <span>свой бизнес</span> на капсульных домах
          </h1>
          <ul className={styles.stats}>
            <li>
              <span>Стоимость капсулы:</span>
              <strong>от 13,5 млн тенге</strong>
            </li>
            <li>
              <span>Доход с 1 капсулы:</span>
              <strong>750 000 тенге/мес</strong>
            </li>
            <li>
              <span>Срок окупаемости:</span>
              <strong>13 месяцев</strong>
            </li>
            <li>
              <span>Средний % загрузки:</span>
              <strong>75% по году</strong>
            </li>
          </ul>
        </div>
      </div>

      {/* Блок с преимуществами */}
      <div className={styles.features}>
        <div className={styles.feature}>
          <h2>Сокращение затрат</h2>
          <p>
            Капсульные дома дешевле в строительстве и обслуживании, чем
            модульные. Это выгодно для гостиничного бизнеса.
          </p>
        </div>
        <div className={styles.feature}>
          <h2>Легкость масштабирования</h2>
          <p>
            Легко добавляйте или удаляйте капсулы в зависимости от спроса и
            сезона, делая ваш бизнес гибким.
          </p>
        </div>
        <div className={styles.moreInfo}>
          <h2>Мы расскажем вам всё, что нужно знать о капсулах!</h2>
          <a  target="_blank" href={`https://wa.me/${phoneNumber.replace('+', '')}`} className={styles.consultbuttons}>
              ПРОКОНСУЛЬТИРОВАТЬСЯ
            </a>
        </div>
      </div>
    </div>
  );
};

export default CapsuleBusinessInfo;
