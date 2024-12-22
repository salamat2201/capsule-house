import React from 'react';
import './About.css';
import img1 from '../assets/841d169425d84d25a561a0d439f05ccf_750x.webp'; // Правильный импорт

const About = () => {

  const phoneNumber = "+77711460961";

  const cards = [
    {
      id: 1,
      icon: '✦', // Иконка для карточки
      title: 'Быстрая доставка и установка',
      description: 'Производство занимает всего месяц, затем капсулу доставляют к вам сразу в собранном виде. И помогает с оформлением документов',
    },
    {
      id: 2,
      icon: '⚙️',
      title: 'Гибкость конфигурации',
      description: 'Легко модифицировать или переставлять, можете менять локации в зависимости от сезона.',
    },
    {
      id: 3,
      icon: '🌟',
      title: 'Созданы для бизнеса',
      description: 'Разработаны специально для заработка на сдаче в аренду.',
    },
    {
      id: 4,
      icon: '↗️',
      title: 'Расскажем вам всё, что нужно знать о капсулах',
      description: 'Узнать про капсулы →',
    },
  ];


  return (
    <section id="about" className="section">
      <div>
        <h2 className='titleA'>Капсульные дома — это</h2>
        <h2 className='titleA'>инновационное и компактное жилье</h2>
        <h2 className='titleA'>для тех, кто хочет выйти за пределы</h2>
        <h2 className='titleA'>обыденного</h2>
      </div>
      <div>
      <section className="cards-section">
        <div className="image-containers">
          <img src={img1} alt="Капсульный дом" className="main-image" />
        </div>

        <div className="cardss-container">
          {cards.map((card) => (
            <div
              className={`cards ${card.id === 4 ? 'blue-background' : ''}`}
              key={card.id}
            >
              <div className="card-icon">{card.icon}</div>
              <h3 className="card-title">{card.title}</h3>
              {card.id === 4 ? (<a className="card-description"  target="_blank" href={`https://wa.me/${phoneNumber.replace('+', '')}`}>{card.description}</a>) : (<p className="card-description">{card.description}</p>)} 
            </div>
          ))}
        </div>
      </section>
      </div>
    </section>
  );
};

export default About;
