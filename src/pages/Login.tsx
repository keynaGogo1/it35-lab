
import { 
  IonAvatar,
    IonButton,
    IonButtons,
      IonContent, 
      IonHeader, 
      IonInput, 
      IonInputPasswordToggle, 
      IonMenuButton, 
      IonPage, 
      IonTitle, 
      IonToolbar, 
      useIonRouter
  } from '@ionic/react';
  
  const Login: React.FC = () => {
    const navigation = useIonRouter();

    const doLogin = () => {
        navigation.push('/it35-lab/app','forward','replace');
    }
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Login</IonTitle>
          </IonToolbar>
        </IonHeader> 
        <IonAvatar>
            <img alt="person-outline" src="https://ionic.io/ionicons"/>
        </IonAvatar>
       
        <IonInput type="password" label="Password" value="">
      <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
    </IonInput>
        <IonContent className='ion-padding'>
            <IonButton onClick={() => doLogin()} expand="full">
                Login
            </IonButton>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Login;