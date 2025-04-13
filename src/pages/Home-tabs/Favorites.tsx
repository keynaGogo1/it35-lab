import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonDatetime
} from '@ionic/react';

function Favorites() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Pick a Date</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding" fullscreen>
        <IonCard color="light" style={{ borderRadius: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
          <IonCardHeader>
            <IonCardTitle style={{ textAlign: 'center', fontSize: '22px' }}>
              📅 Select Your Favorite Day
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonDatetime
              presentation="date"
              color="primary"
              showDefaultButtons={true}
              preferWheel
            ></IonDatetime>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
}

export default Favorites;
