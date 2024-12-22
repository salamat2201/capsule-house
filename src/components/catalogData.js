import img1 from '../assets/IMG_3272.JPG'
import img2 from '../assets/IMG_3278.JPG'
import img3 from '../assets/IMG_3523.JPG'

const catalogData = [
    {
      id: 1,
      image: img1, // Замените на URL изображения
      area: 18,
      price: 26000,
      dimensions: "3 x 3,3 x 3,2",
      isEnergyEfficient: false,
    },
    {
      id: 2,
      image: img2,
      area: 28,
      price: 43000,
      dimensions: "8,5 x 3,3 x 3,2",
      isEnergyEfficient: false,
    },
    {
      id: 3,
      image: img3,
      area: 38,
      price: 47000,
      dimensions: "11,5 x 3,3 x 3,2",
      isEnergyEfficient: true,
    },
  ];
  
  export default catalogData;
  