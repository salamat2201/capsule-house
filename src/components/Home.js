import React from 'react';
import './Home.css';

const Home = () => {
  const phoneNumber = "+77711460961";
  const whatsappLink = `https://wa.me/${phoneNumber.replace('+', '')}`;


  return (
    <section id="home" className="home">
      <div>
        <h1 className='titleH'>Инвестируйте</h1>
        <h1 className='titleH'>в новое измерение</h1>
        <h1 className='titleH'>современного отдыха</h1>
      </div>
      <p className='descripH'>
        Организуем производство и комплектацию капсульного дома мебелью, доставим
        до любой точки в Казахстане и России.
      </p>
      <a href={whatsappLink} className="whatsapps" target="_blank" rel="noopener noreferrer">
          ЗАКАЗАТЬ КАПСУЛЬНЫЙ ДОМ
      </a>
    </section>
  );
};

export default Home;
