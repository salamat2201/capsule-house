import React, { useEffect, useRef } from "react";
import "./CapsuleFeatures.css";

const CapsuleFeatures = () => {
  const features = [
    {
      title: "Эксплуатация и зимой, и летом",
      description: "Зимой тепло в доме поддерживается даже при -40 °С, а летом прохладу в капсуле обеспечивает кондиционер.",
    },
    {
      title: "Простая доставка и установка",
      description: "Транспортируется в собранном виде, не требует фундамента и устанавливается на собственные опоры.",
    },
    {
      title: "Без сложных согласований",
      description: "Капсула не является объектом капитального строительства, ее можно устанавливать на любом участке.",
    },
    {
      title: "Автономность систем",
      description: "В нашем каталоге есть капсулы, которые работают на зелёной энергии и полностью обеспечивают работу своих систем.",
    },
    {
      title: "Надежность конструкции",
      description: "Сталь в качестве основного материала капсулы обеспечивает прочность выше, чем у железобетонного или модульного дома.",
    },
    {
      title: "Оптимизация пространства",
      description: "Спальня, кухня, рабочая зона, ванная комната — все это свободно помещается в капсульном доме.",
    },
    {
      title: "Современное наполнение",
      description: "Внутри дома вас ждет светодиодное освещение, кондиционеры, полы с подогревом и проектор для просмотра фильмов.",
    },
    {
      title: "Экологичность",
      description: "В производстве используются энергоэффективные системы и устойчивые материалы.",
    },
    {
      title: "Заказ",
      description: "Заказать прямо сейчас→",
    },
  ];

  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible"); // Убираем класс, если элемент выходит из зоны видимости
          }
        });
      },
      { threshold: 0.1 } // 10% элемента должно быть видно
    );

    const cards = containerRef.current.querySelectorAll(".feature-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="capsule-features" ref={containerRef}>
      {features.map((feature, index) => (
        <div className={`feature-card ${feature.title == "Заказ" ? 'zakaz' : ''}`} key={index}>
          <div className="feature-content">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CapsuleFeatures;
