import React from "react";
import styles from "./ContactCards.module.css";
import contactData from "./contactData";

const ContactCards = () => {
  return (
    <div className={styles.container}>
      {contactData.map((item) => (
        <div key={item.id} className={styles.card}>
          <div className={styles.cardContent}>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.subtitle}>{item.subtitle}</p>
          </div>
          <a
            href={item.link}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.icon}>↗</div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default ContactCards;