import styled from "styled-components";

export const CatalogWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
  background-color: #f5f5f5;
`;

export const Card = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

export const Details = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Tag = styled.span`
  display: inline-block;
  background-color: #efefef;
  color: #333;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: bold;
`;

export const Title = styled.h3`
  font-size: 18px;
  color: #333;
  margin: 0;
`;

export const Button = styled.button`
  padding: 10px 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  align-self: flex-start;
  font-weight: 500;

  &:hover {
    background-color: #0056b3;
  }
`;
