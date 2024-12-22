import React from "react";
import './WhyUs.css'; // Стиль для новой секции
import img1 from '../assets/IMG_3577.JPG';
import img2 from '../assets/IMG_3578.PNG';

const WhyUs = () => {
  return (
    <section className="why-us">
      <h2>Почему мы?</h2>
      <p>
        Мы являемся представителями компании из Китая в Казахстане. Мы занимаемся
        производством и поставкой капсульных домов, обеспечивая высокое качество и
        надежность. У нас есть прямые контакты с заводом, и мы знаем весь процесс
        производства до мелочей.
      </p>
      <div className="factory-images">
        <img src={img1} alt="Фото завода 1" />
        <img src={img2} alt="Фото завода 2" />
      </div>
    </section>
  );
};

export default WhyUs;
