import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false); // Закрываем меню при переходе
  };

  const phoneNumber = "+77711460961";
  const whatsappLink = `https://wa.me/${phoneNumber.replace('+', '')}`;

  return (
    <div className="navbar">
      <div className="logo">CapsuleHomeAlmaty</div>
      <div className="burger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li onClick={() => scrollToSection('about')}>О продукте</li>
        <li onClick={() => scrollToSection('contact')}>FAQ</li>
        <li onClick={() => scrollToSection('catalog')}>Каталог</li>
        <li onClick={() => scrollToSection('contact')}>Контакты</li>
      </ul>
      <div className="actions">
        <a href={`tel:${phoneNumber}`} className="phone">
          📞 +7 (708) 865 7484
        </a>
        <a href={whatsappLink} className="whatsapp" target="_blank" rel="noopener noreferrer">
          Заказать капсулу
        </a>
      </div>
    </div>
  );
};

export default Navbar;
