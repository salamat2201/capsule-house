import React, { useState } from "react";
import styles from "./FAQ.module.css";
import faqData from "./faqData";

const FAQ = () => {
  const [activeId, setActiveId] = useState(null);
  const phoneNumber = "+77088657484";

  const toggleQuestion = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Отвечаем на ваши вопросы</h1>
      <div className={styles.faqList}>
        {faqData.map((item) => (
          <div key={item.id} className={styles.faqItem}>
            <div
              className={`${styles.faqQuestion} ${
                activeId === item.id ? styles.active : ""
              }`}
              onClick={() => toggleQuestion(item.id)}
            >
              <span>{item.question}</span>
              <span className={styles.icon}>
                {activeId === item.id ? "✖" : "＋"}
              </span>
            </div>
            {activeId === item.id && (
              <div className={styles.faqAnswer}>
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className={styles.footer}>
        <p>
          Если вы не нашли ответа на свой вопрос, оставьте заявку и мы свяжемся с
          вами, чтобы проконсультировать.
        </p>
        <a href={`https://wa.me/${phoneNumber.replace('+', '')}`} className={styles.askButton}>
          ЗАДАТЬ СВОЙ ВОПРОС
          <span className={styles.arrow}>→</span>
        </a>
      </div>
    </div>
  );
};

export default FAQ;
