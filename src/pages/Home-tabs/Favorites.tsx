import React, { useState } from 'react';
import {
  IonBreadcrumb,
  IonBreadcrumbs,
  IonContent,
  IonHeader,

  IonPage,
  IonTitle,
  IonToolbar,

  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,

  IonImg,
} from '@ionic/react';

const items = {
  things: [
    { name: 'Shoes', image: 'https://imgs.search.brave.com/mDDXcQf5KzbRzOO_3lxYRfWSO3-XlYXLVfE9DXeIUXM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzEyLzY2LzQyLzMz/LzM2MF9GXzEyNjY0/MjMzNzJfa3QxV1pV/WE5mMzd3Tktldktz/VlRGbHhlRTlGWXIw/YTEuanBn', description: 'Comfortable and stylish footwear.' },
    { name: 'Headset', image: 'https://imgs.search.brave.com/fE7MuNWpd1ljsak5yM0vMhejkdMseWGJrR2huQG7njs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODF0aFY3U29MWkwu/anBn', description: 'Noise-cancelling headphones.' },
    { name: 'Dress', image: 'https://imgs.search.brave.com/M8bx7ubnENKS9hdCMHDZ0WkBnPyCDY4jrDP2WbqJBvI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzQ5LzIyLzY0/LzM2MF9GXzQ5MjI2/NDcxX2hNVTFhUWMw/VHlkQUMzT0drVWVK/cjhVRjNxVDdBR1Np/LmpwZw', description: 'Elegant dress for any occasion.' },
    { name: 'MakeUp', image: 'https://imgs.search.brave.com/f4Yhhf2dedJGfEvr5VHbnyK50IPmG2QbCZ4w2hk7ong/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9zZW8vTUlT/Uy1ST1NFLU1ha2V1/cC1LaXQtZm9yLVdv/bWVuLUZ1bGwtS2l0/LTEyLUNvbG9ycy1F/eWVzaGFkb3ctUGFs/ZXR0ZS1HaWZ0LVNl/dC1mb3ItV29tZW4t/VGVlbnNfYzFhMDY5/YWUtODJlYy00Zjc3/LWFlMjMtYTRmOGRj/NzcxYzY4LjNjY2I2/NTZiNTZkNWE2N2I0/MzdmNjkwMjNiNzFj/YWI0LmpwZWc_b2Ru/SGVpZ2h0PTU4MCZv/ZG5XaWR0aD01ODAm/b2RuQmc9RkZGRkZG', description: 'Top quality cosmetic products.' },
  ],
  foods: [
    { name: 'Fried', image: 'https://imgs.search.brave.com/CPIHA7gJyy7toW2jmr30cGA4hXr2_X2XlR2svjuBGhE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9o/aWdoLWFuZ2xlLWZy/aWVzLWZyaWVkLWNo/aWNrZW5fMjMtMjE0/ODI3MzA0NC5qcGc_/c2VtdD1haXNfaHli/cmlk', description: 'Crispy and savory fried delights.' },
    { name: 'Tortang Talong', image: 'https://imgs.search.brave.com/bf5LI0r4b9jbGBiN9oj-xNAI_eLZzKbj8rrqh1H0WGU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy83/LzdlL1JlbGxlbm9u/Z190YWxvbmcuanBn', description: 'Healthy and tasty eggplant dishes.' },
    { name: 'Chocolates', image: 'https://imgs.search.brave.com/KSCoB16nvcJBrqpmGGIYqekxWtJ5Om97q-X1BjuWnqs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQw/MDQ1MjY5Ny9waG90/by9kYXJrLWNob2Nv/bGF0ZS1iYXItd2l0/aC1jb2NvYS1iZWFu/cy5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9allERmQtQzlr/TWtaVlRUcVA1M2Qy/QzMtWFYwUlhURWRx/UEZyTDIyVG1nbz0', description: 'Sweet and smooth chocolate treats.' },
    { name: 'Ice cream', image: 'https://imgs.search.brave.com/xnbeXfTXZBnDVYXVlL0cHDvbeGBY37JcJN9DcSsAm_A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzUxLzIzLzQx/LzM2MF9GXzE1MTIz/NDE1Nl8zcTJ2dzBs/cGlWVVJvaTNQaVlt/QmRlaEhVVmJGUVdw/Si5qcGc', description: 'Cool and creamy ice cream flavors.' },
  ],
};

const Favorites: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'things' | 'foods' | null>(null);

  const handleSelect = (category: 'things' | 'foods') => {
    setSelectedCategory(category);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Favorites</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        <style>
          {`
            .fade-in {
              animation: fadeIn 0.6s ease-in-out;
            }
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(10px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .breadcrumb-container {
              margin-bottom: 16px;
            }
            .cards-grid {
              display: grid;
              grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
              gap: 16px;
            }
          `}
        </style>

        <div className="breadcrumb-container">
          <IonBreadcrumbs>
            <IonBreadcrumb onClick={() => handleSelect('things')}>Things</IonBreadcrumb>
            <IonBreadcrumb onClick={() => handleSelect('foods')}>Foods</IonBreadcrumb>
          </IonBreadcrumbs>
        </div>

        {selectedCategory && (
          <div className="cards-grid fade-in">
            {items[selectedCategory].map((item, index) => (
              <IonCard key={index}>
                <IonImg src={item.image} />
                <IonCardHeader>
                  <IonCardTitle>{item.name}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>{item.description}</IonCardContent>
              </IonCard>
            ))}
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Favorites;
