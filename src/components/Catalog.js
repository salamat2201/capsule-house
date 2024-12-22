import React from "react";
import { useNavigate } from "react-router-dom";
import { CatalogWrapper, Card, Image, Details, Tag, Title, Button } from "./Catalog.styles";
import catalogData from "./catalogData";

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

const Catalog = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    console.log(id);
    navigate(`/${id}`);
  };

  return (
    <CatalogWrapper>
      {catalogData.map((item) => {
        // Dynamically get area and dimensions based on id
        const { area, dimensions } = getDynamicProperties(item.id);

        return (
          <Card key={item.id} onClick={() => handleCardClick(item.id)}>
            <Image src={item.image} alt={item.title} />
            <Details>
              <Tag>{item.area} м²</Tag> {/* Dynamically set area */}
              <Tag>{item.dimensions} (м)</Tag> {/* Dynamically set dimensions */}
              <Tag>{item.price} $</Tag>
              <Title>{item.title}</Title>
              <Button onClick={() => handleCardClick(item.id)}>Подробнее</Button>
            </Details>
          </Card>
        );
      })}
    </CatalogWrapper>
  );
};

export default Catalog;
