import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./HouseDetails.css";

// Function to adjust area and dimensions based on id
const getDynamicProperties = (id) => {
  switch (id) {
    case "1":
      return { area: "18 м²", dimensions: "6м * 3м * 3м", price: "26 000 $" };
    case "2":
      return { area: "28 м²", dimensions: "8.5м * 3.3м * 3.1м", price: "43 000 $" };
    case "3":
      return { area: "38 м²", dimensions: "9м * 3.5м * 3.2м", price: "47 000 $" };
    default:
      return { area: "Не указано", dimensions: "Не указаны", price: "" };
  }
};

const HouseDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get the id from the URL params

  // Get dynamic properties (area and dimensions) based on id
  const { area, dimensions, price } = getDynamicProperties(id);
  const phoneNumber = "+77711460961";

  // Default house details without specific area and dimensions
  const houseDetails = {
    specifications: [
      { label: "Размер", value: dimensions }, // Use dynamic dimensions
      { label: "Площадь", value: area }, // Use dynamic area
      { label: "Цена", value: price },
      {
        label: "Конструкция",
        value:
          "Стальной каркас, алюминиевые панели внешней отделки, полиуретановая изоляция, наружное световое остекление (6+12+6), алюминиевые двери и окна, входные двери с умными замками",
      },
      {
        label: "Интерьер и конфигурация",
        value:
          "Потолок, стены (МДФ панели), пол (современный ламинат), электрические шторы, электрическое окно в крыше, интеллектуальная система управления всем домом, пожарно-дымовая сигнализация, внутреннее освещение, уличное освещение",
      },
      { label: "Ванная комната", value: "Душевая, унитаз, бойлер" },
      {
        label: "Основное оборудование",
        value: "Центральный кондиционер Gree (Зима-Лето), бойлер, душевая стойка",
      },
      {
        label: "Дополнительные опции",
        value: "Электрический тёплый пол, защита от замерзания водопровода",
      },
    ],
  };

  return (
    <div className="details-container">
      

      {/* Back button */}
      <button className="back-button" onClick={() => navigate(-2)}>
        Назад
      </button>
      <h1>{houseDetails.title}</h1>
      <table className="details-table">
        <tbody>
          {houseDetails.specifications.map((item, index) => (
            <tr key={index}>
              <td>{item.label}</td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <a target="_blank" className="submit-button" href={`https://wa.me/${phoneNumber.replace('+', '')}`}>
        Оставить заявку
      </a>
    </div>
  );
};

export default HouseDetails;
