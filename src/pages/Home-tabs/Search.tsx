import {
  IonAccordion,
  IonAccordionGroup,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons
} from '@ionic/react';
import React from 'react';

function Search() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="tertiary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Funny Quotes</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding" fullscreen>
        <IonAccordionGroup>

          <IonAccordion value="first">
            <IonItem slot="header" color="medium">
              <IonLabel style={{ fontWeight: 'bold', fontSize: '18px' }}>I’m on a seafood diet. I see food and I eat it.</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>🍤 Who needs portion control when food is so delicious? Life's too short to count calories—just count laughs!</p>
            </div>
          </IonAccordion>

          <IonAccordion value="second">
            <IonItem slot="header" color="light">
              <IonLabel style={{ fontWeight: 'bold', fontSize: '18px' }}>Exercise? I thought you said extra fries!</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>🍟 The only running I do is after the ice cream truck. Fitness goals? More like "fit this burger in my mouth" goals!</p>
            </div>
          </IonAccordion>

          <IonAccordion value="third">
            <IonItem slot="header" color="warning">
              <IonLabel style={{ fontWeight: 'bold', fontSize: '18px' }}>Why fall in love when you can fall asleep?</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>😴 Love might break your heart, but naps never disappoint. Pillow fights real fights any day!</p>
            </div>
          </IonAccordion>

          <IonAccordion value="fourth">
            <IonItem slot="header" color="danger">
              <IonLabel style={{ fontWeight: 'bold', fontSize: '18px' }}>I’m not lazy, I’m on energy-saving mode.</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>🔋 Productivity? Nah. I'm just preserving my power for snack runs.</p>
            </div>
          </IonAccordion>

          <IonAccordion value="fifth">
            <IonItem slot="header" color="success">
              <IonLabel style={{ fontWeight: 'bold', fontSize: '18px' }}>If life gives you melons, you might be dyslexic.</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>🍈 Proof that fruit jokes are the juiciest.</p>
            </div>
          </IonAccordion>

          <IonAccordion value="sixth">
            <IonItem slot="header" color="medium">
              <IonLabel style={{ fontWeight: 'bold', fontSize: '18px' }}>I used to think I was indecisive, but now I’m not so sure.</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>🤔 I may or may not be laughing at this. Maybe.</p>
            </div>
          </IonAccordion>

          <IonAccordion value="seventh">
            <IonItem slot="header" color="primary">
              <IonLabel style={{ fontWeight: 'bold', fontSize: '18px' }}>Common sense is like deodorant. The people who need it most never use it.</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>💨 Save your nose and your sanity—share this quote.</p>
            </div>
          </IonAccordion>

          <IonAccordion value="eighth">
            <IonItem slot="header" color="dark">
              <IonLabel style={{ fontWeight: 'bold', fontSize: '18px' }}>If we’re not supposed to have midnight snacks, why is there a light in the fridge?</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>🌙 The fridge light is clearly cheering me on.</p>
            </div>
          </IonAccordion>

          <IonAccordion value="ninth">
            <IonItem slot="header" color="tertiary">
              <IonLabel style={{ fontWeight: 'bold', fontSize: '18px' }}>I followed my heart, and it led me to the fridge.</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>💖 The heart wants what the stomach wants.</p>
            </div>
          </IonAccordion>

          <IonAccordion value="tenth">
            <IonItem slot="header" color="success">
              <IonLabel style={{ fontWeight: 'bold', fontSize: '18px' }}>I’m not arguing, I’m just explaining why I’m right.</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>🎯 It's not sass—it's logic. Trust me.</p>
            </div>
          </IonAccordion>

          <IonAccordion value="eleventh">
            <IonItem slot="header" color="light">
              <IonLabel style={{ fontWeight: 'bold', fontSize: '18px' }}>My bed and I love each other, only the alarm clock comes between us.</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>⏰ Alarm clocks = professional relationship wreckers.</p>
            </div>
          </IonAccordion>

          <IonAccordion value="twelfth">
            <IonItem slot="header" color="warning">
              <IonLabel style={{ fontWeight: 'bold', fontSize: '18px' }}>Brains are awesome. I wish everybody had one.</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>🧠 Some people leave their genius at home—every day.</p>
            </div>
          </IonAccordion>

          <IonAccordion value="thirteenth">
            <IonItem slot="header" color="danger">
              <IonLabel style={{ fontWeight: 'bold', fontSize: '18px' }}>Some people graduate with honors, I am just honored to graduate.</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              <p>🎓 Degrees of success? I’ll take mine with fries and a nap.</p>
            </div>
          </IonAccordion>

        </IonAccordionGroup>
      </IonContent>
    </IonPage>
  );
}

export default Search;
