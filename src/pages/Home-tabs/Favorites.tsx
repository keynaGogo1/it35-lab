
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
import React, { useState } from 'react';

const Favorites: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'things' | 'foods' | null>(null);

  const items = {
    things: [
      { name: 'Shoes', image: 'https://imgs.search.brave.com/ITLR_b7ORa0mrBEGT_4fBlxZuFhVj5lMCY5bs2TVSWs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YW1lc3dhbGtlci5j/b20vY2RuL3Nob3Av/ZmlsZXMvNDc2OTg2/YWJfbF8yZmVlZTE5/Zi1iYWQwLTQ2OGIt/ODNiOS0xN2UzMTk1/NDRlOGIuanBnP3Y9/MTczMjExNjk1MiZ3/aWR0aD01MzM', description: 'Comfortable and stylish footwear.' },
      { name: 'Headset', image: 'https://imgs.search.brave.com/cOmpVzJGOJhUk_JEDXxr6d1Um1Hag1XGfsudP78gBHs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzY4LzA1LzU0/LzM2MF9GXzM2ODA1/NTQxNl9qdFVleVhV/dDh0VmVyalc5TGFw/eU13b0k0NmlxMHl3/YS5qcGc', description: 'Noise-cancelling headphones.' },
      { name: 'Dress', image: 'https://imgs.search.brave.com/X4CLCtWbr4L2lhg7VcziFBncNK_VWpEUTaVeQujJLpA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzUyLzE5LzQ1/LzM2MF9GXzUyMTk0/NTc3X2NHWDlPQWJn/bjZvOWFlUTYyMEVF/T00xckFGODFuU3BG/LmpwZw', description: 'Elegant dress for any occasion.' },
      { name: 'MakeUp', image: 'https://imgs.search.brave.com/KbpwOGOJNTGmKTBPD9_v2XkIksvIsbg-xiwsLH4f6V0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI3/Mzc1MTY2MC9waG90/by9tYWtldXAta2l0/LW1ha2UtdXAtdGFi/bGUtdGhlLW1pcnJv/ci5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9S1FRNjk0eVZX/V3RxVnNUN2hTaTFB/UnhiS29GQjc3Yzdx/eHR5T3BKZ2taaz0', description: 'Top quality cosmetic products.' },
    ],
    foods: [
      { name: 'Fried', image: 'https://imgs.search.brave.com/mX9SZhRsPU1d0U3eQg9atoz9BBXMJjXeDe9Zn7nKicw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDk5/MTIzMTUzL3Bob3Rv/L2ZyaWVkLXNlYWZv/b2QtcGxhdHRlci5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/N2RwRkZ3bE9GRHVZ/Q2FqX1hZbjJpOHdU/Q2xyanNHcnA5ekRM/aHJTbXBsdz0', description: 'Crispy and savory fried delights.' },
      { name: 'Tortang Talong', image: 'https://imgs.search.brave.com/bEA2PdSaK3rC30DofgFAGrWeVdN3Sl0wGUAu4TrLIac/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8xLzFlL0VH/R1BMQU5UX1RPUlRB/LmpwZy81MTJweC1F/R0dQTEFOVF9UT1JU/QS5qcGc', description: 'Healthy and tasty eggplant dishes.' },
      { name: 'Chocolates', image: 'https://imgs.search.brave.com/KoBptp3FLkpxktRXHpjuEs162AQ-8T5nLq1g_J3uw6I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNzY1/NTE4MjUvcGhvdG8v/YmFyLW9mLWNob2Nv/bGF0ZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9Q0NwYTlY/dmFuZWxFS0ZDVFlr/WWZYeGlEaDNUcHRU/NHFXbXVyanByRTlV/Zz0', description: 'Sweet and smooth chocolate treats.' },
      { name: 'Ice cream', image: 'https://imgs.search.brave.com/xnbeXfTXZBnDVYXVlL0cHDvbeGBY37JcJN9DcSsAm_A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzUxLzIzLzQx/LzM2MF9GXzE1MTIz/NDE1Nl8zcTJ2dzBs/cGlWVVJvaTNQaVlt/QmRlaEhVVmJGUVdw/Si5qcGc', description: 'Cool and creamy ice cream flavors.' },
    ],
  };

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

            <IonBreadcrumb onClick={() => handleSelect('things')}>Things</IonBreadcrumb>
            <IonBreadcrumb onClick={() => handleSelect('foods')}>Foods</IonBreadcrumb>
            
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
