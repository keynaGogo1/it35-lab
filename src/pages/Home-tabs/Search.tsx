import React, { useState } from 'react';
import {
  IonItem,
  IonList,
  IonSearchbar,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonImg,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
} from '@ionic/react';

const sampleData = [
  { name: 'Shoes', image: 'https://imgs.search.brave.com/GoUokcrKy_ixU1NneMYxNQlZcQZVYLuq9EfolGjlDlA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9zZW8vU0lM/TEVOT1JUSC1LaWRz/LVRvZGRsZXItU2hv/ZXMtQm95cy1HaXJs/cy1CcmVhdGhhYmxl/LVNuZWFrZXJzLUF0/aGxldGljLVJ1bm5p/bmctU2hvZXMtVG9k/ZGxlci1MaXR0bGUt/S2lkcy1CaWctS2lk/c184MGEwNWU1NC1i/ZGE1LTQxYmYtODRl/Mi1mYTdkODg4ODQx/MWYuNDdkMWMyYmM1/NTA3MTAwZjQxYzVh/YmJiNmRhYmI5OWMu/anBlZz9vZG5IZWln/aHQ9Nzg0Jm9kbldp/ZHRoPTU4MCZvZG5C/Zz1GRkZGRkY' },
  { name: 'Headset', image: 'https://imgs.search.brave.com/UTsaZDkW68-L-KxYmejwDjdw0pDkDoqgy6G1Y0ZXn1E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5Lzg2LzU3Lzk1/LzM2MF9GXzk4NjU3/OTU2Nl9qd1ZPWWZ1/WmVwVmhMcDU1bW9R/c3l2UXVvZWJhYzdm/US5qcGc' },
  { name: 'Dress', image: 'https://imgs.search.brave.com/3bOwwL9RaftNKiRjnZ14IKjio0PPlZ13wbg6i3mK7Tw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg1/MDc0NzM3L3Bob3Rv/L3dvbWFuLWRyZXNz/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz04NVl6OGpieEta/WURwc2ZDMVpxT1po/MDZqM2dCUmFOOEw5/c3BLekJtZkM4PQ' },
  { name: 'Laptops', image: 'https://imgs.search.brave.com/omZwmoHBmyTRvSSlGTiTjz6MekFFsESjb4jnwqA7rlE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM2/Nzc5Mjg5OS9waG90/by9sYXB0b3AuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPTFj/X2U1aTRoRWk1bkpL/SlFOOUk5bDJCb0RO/REVzb09qSHMyb1lx/aTRpNTg9' },
  { name: 'Smartphones', image: 'https://imgs.search.brave.com/II3sdJM5wmobl3ecPnEMLDloRYHNDNVPP2Hm1Vq8Dmg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9zbWFydHBob25l/LWJhbGFuY2luZy13/aXRoLXBpbmstYmFj/a2dyb3VuZF8yMy0y/MTUwMjcxNzQ2Lmpw/Zz9zZW10PWFpc19o/eWJyaWQ' },
];

const Search: React.FC = () => {
  const [results, setResults] = useState(sampleData);

  const handleInput = (event: CustomEvent) => {
    const query = (event.detail.value || '').toLowerCase();
    setResults(
      sampleData.filter((item) => item.name.toLowerCase().includes(query))
    );
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Search Items</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <style>
          {`
            .fade-in {
              animation: fadeIn 0.5s ease-in-out;
            }
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(10px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .search-item {
              margin-bottom: 12px;
              border-radius: 10px;
              transition: transform 0.2s ease-in-out;
              box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
            }
            .search-item:hover {
              transform: scale(1.03);
            }
          `}
        </style>

        <IonSearchbar
          placeholder="Search for items..."
          debounce={300}
          onIonInput={handleInput}
        ></IonSearchbar>

        <IonList className="fade-in">
          {results.length > 0 ? (
            results.map((result, index) => (
              <IonCard key={index} className="search-item">
                <IonImg src={result.image} />
                <IonCardHeader>
                  <IonCardTitle>{result.name}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>Discover amazing {result.name}!</IonCardContent>
              </IonCard>
            ))
          ) : (
            <IonItem>No results found</IonItem>
          )}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Search;
