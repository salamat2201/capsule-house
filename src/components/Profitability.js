import React, { useState } from 'react';
import styles from './Profitability.module.css';
import { motion } from 'framer-motion';
import { fadeIn, cardHover, slideUp, bounce } from './CalculatorAnimation';

const Profitability = () => {
  const [smallHomes, setSmallHomes] = useState(1);
  const [largeHomes, setLargeHomes] = useState(1);
  const [smallRent, setSmallRent] = useState(12500);
  const [largeRent, setLargeRent] = useState(12500);

  // Цены капсул
  const smallHomePrice = 3620000;
  const largeHomePrice = 4420000;

  const investment = smallHomes * smallHomePrice + largeHomes * largeHomePrice;
  const averageLoad = 0.82;
  const incomePerYear =
    (smallHomes * smallRent + largeHomes * largeRent) * averageLoad * 365;

  const paybackMonths = Math.ceil((investment / incomePerYear) * 12);

  return (
    <motion.div
      className={styles.container}
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <h1 className={styles.title}>💡 Рассчитайте рентабельность базы отдыха</h1>

      <motion.div className={styles.calculator} variants={slideUp}>
        {/* Карточка для маленьких домов */}
        <motion.div className={styles.card} variants={cardHover}>
          <label>Капсулы 28-29 м²</label>
          <div className={styles.counter}>
            <button onClick={() => setSmallHomes((prev) => Math.max(prev - 1, 0))}>
              −
            </button>
            <span>{smallHomes}</span>
            <button onClick={() => setSmallHomes((prev) => prev + 1)}>+</button>
          </div>
          <input
            type="range"
            dataRangeColor="#ffffff"
            min="5000"
            max="20000"
            value={smallRent}
            step="500"
            onChange={(e) => setSmallRent(Number(e.target.value))}
          />
          <span className={styles.rangeValue}>
            Аренда: {smallRent.toLocaleString()} руб/день
          </span>
        </motion.div>

        {/* Карточка для больших домов */}
        <motion.div className={styles.card} variants={cardHover}>
          <label>Капсулы 35-38 м²</label>
          <div className={styles.counter}>
            <button onClick={() => setLargeHomes((prev) => Math.max(prev - 1, 0))}>
              −
            </button>
            <span>{largeHomes}</span>
            <button onClick={() => setLargeHomes((prev) => prev + 1)}>+</button>
          </div>
          <input
            type="range"
            min="5000"
            max="20000"
            value={largeRent}
            step="500"
            onChange={(e) => setLargeRent(Number(e.target.value))}
          />
          <span className={styles.rangeValue}>
            Аренда: {largeRent.toLocaleString()} руб/день
          </span>
        </motion.div>
      </motion.div>

      {/* Результаты */}
      <motion.div className={styles.results} variants={bounce}>
        <h3>
          💰 <span>Сумма инвестиций:</span>{' '}
          <strong>{investment.toLocaleString()} руб.</strong>
        </h3>
        <h3>
          📈 <span>Доход:</span>{' '}
          <strong>{incomePerYear.toLocaleString()} руб/год</strong>
        </h3>
        <h3>
          ⏳ <span>Окупаемость:</span> <strong>{paybackMonths} месяцев</strong>
        </h3>
      </motion.div>

      <motion.button
        className={styles.button}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Обсудить сотрудничество
      </motion.button>
    </motion.div>
  );
};

export default Profitability;
