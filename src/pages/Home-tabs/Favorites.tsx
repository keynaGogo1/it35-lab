import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonCard,
  IonCardContent,
  IonText,
  IonImg,
  IonAlert,
} from "@ionic/react";
import { useState } from "react";

const favoriteItems = [
  { name: "Pizza", price: "$12", img: "https://imgs.search.brave.com/2gc7HoNiJF0jppYkzSWDXjZo8h8KzI2OUAl8HPVRnZA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2ExL2M0/LzA0L2ExYzQwNGJl/YTQ5YzAxNDMwNThi/YzRkZDlkYTc5ZDMz/LmpwZw" },
  { name: "Ice Cream", price: "$5", img: "https://imgs.search.brave.com/xnbeXfTXZBnDVYXVlL0cHDvbeGBY37JcJN9DcSsAm_A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzUxLzIzLzQx/LzM2MF9GXzE1MTIz/NDE1Nl8zcTJ2dzBs/cGlWVVJvaTNQaVlt/QmRlaEhVVmJGUVdw/Si5qcGc" },
  { name: "Burgers", price: "$8", img: "https://imgs.search.brave.com/9OTFW10L4OvmWQ5yRQIA_IUlJGZG0gRUnF4w9IoVRnk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTAw/ODAxNjU3Mi9waG90/by9idXJnZXIuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPW5M/cGgzMklUaU90QlFp/RHFuY3JPSWxYMmRu/SnZYeVM4ZS1Bd29a/QllOWDQ9" },
  { name: "Pasta", price: "$10", img: "https://imgs.search.brave.com/AzwEB6pDFMwL5KAjKg16QaVeLOge2in4Azo7NOdI7O0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzY0Lzk3LzY2/LzM2MF9GXzY0OTc2/NjAwX3VzUFhjY1JU/RzlLeE1LY0tTTHpx/U1dXdGxSWnpqY0VV/LmpwZw" },
];

const Favorites: React.FC = () => { 
  const [selectedItem, setSelectedItem] = useState<{ name: string; price: string } | null>(null);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Favorites</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent
        fullscreen
        className="ion-padding"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%)",
        }}
      >
        <IonCard style={{ width: "100%", maxWidth: "400px", textAlign: "center", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", borderRadius: "15px" }}>
          <IonCardContent>
            <IonText color="primary">
              <h2 style={{ fontWeight: "bold" }}>My Favorite Items</h2>
            </IonText>
            <IonList>
              {favoriteItems.map((item, index) => (
                <IonItem button key={index} onClick={() => setSelectedItem(item)}>
                  <IonImg src={item.img} style={{ width: "50px", height: "50px", marginRight: "10px" }} />
                  <IonLabel>{item.name}</IonLabel>
                </IonItem>
              ))}
            </IonList>
          </IonCardContent>
        </IonCard>
        
        <IonAlert
          isOpen={!!selectedItem}
          onDidDismiss={() => setSelectedItem(null)}
          header={selectedItem?.name}
          message={`Price: ${selectedItem?.price}`}
          buttons={["OK"]}
        />
      </IonContent>
    </IonPage>
  );
};

export default Favorites;
