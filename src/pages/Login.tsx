import {
  IonAlert,
  IonButton,
  IonContent,
  IonInput,
  IonInputPasswordToggle,
  IonPage,
  IonToast,
  useIonRouter,
} from '@ionic/react';
import { useState } from 'react';
import { supabase } from '../utils/supabaseClient';

const AlertBox: React.FC<{ message: string; isOpen: boolean; onClose: () => void }> = ({
  message,
  isOpen,
  onClose,
}) => {
  return (
    <IonAlert
      isOpen={isOpen}
      onDidDismiss={onClose}
      header="Notification"
      message={message}
      buttons={['OK']}
    />
  );
};

const Login: React.FC = () => {
  const navigation = useIonRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const doLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setAlertMessage(error.message);
      setShowAlert(true);
      return;
    }

    setShowToast(true);
    setTimeout(() => {
      navigation.push('/it35-lab/app', 'forward', 'replace');
    }, 300);
  };

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding" scrollY={false}>
        {/* Background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, #8e44ad, #3498db)',
            animation: 'backgroundAnimation 5s ease-in-out infinite',
            zIndex: 0,
            overflow: 'hidden',
          }}
        >
          <svg
            viewBox="0 0 1440 320"
            style={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              height: 'auto',
              zIndex: 1,
            }}
          >
            <path
              fill="#ffffff"
              fillOpacity="0.3"
              d="M0,224L40,202.7C80,181,160,139,240,122.7C320,107,400,117,480,144C560,171,640,213,720,229.3C800,245,880,235,960,202.7C1040,171,1120,117,1200,96C1280,75,1360,85,1400,90.7L1440,96L1440,320L0,320Z"
            ></path>
          </svg>
        </div>

        {/* Login Card */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            width: '100%',
            maxWidth: '400px',
            backgroundColor: 'white',
            padding: '35px 25px',
            borderRadius: '25px',
            margin: 'auto',
            marginTop: '12vh',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
            textAlign: 'center',
            transition: 'transform 0.3s ease',
          }}
        >
          {/* Avatar Image */}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_UcfTf_3pw9XytXkKq-VpYTy5W6BYGOMLUJA2U90hlb1iZd3SK478E7Gmizze5eQ9jds&usqp=CAU"
            alt="User Avatar"
            style={{
              width: '90px',
              height: '90px',
              borderRadius: '50%',
              objectFit: 'cover',
              marginBottom: '20px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
            }}
          />

          <h2 style={{ fontWeight: 'bold', fontSize: '24px', marginBottom: '30px', color: '#333' }}>
            Welcome Back, Let’s Sign In
          </h2>

          <IonInput
            label="Email"
            labelPlacement="floating"
            fill="outline"
            type="email"
            placeholder="Enter your email"
            value={email}
            onIonChange={(e) => setEmail(e.detail.value!)}
            style={{ marginBottom: '15px' }}
          />

          <IonInput
            label="Password"
            labelPlacement="floating"
            fill="outline"
            type="password"
            placeholder="Enter your password"
            value={password}
            onIonChange={(e) => setPassword(e.detail.value!)}
            style={{ marginBottom: '20px' }}
          >
            <IonInputPasswordToggle slot="end" />
          </IonInput>

          <IonButton
            expand="block"
            shape="round"
            onClick={doLogin}
            style={{
              marginBottom: '15px',
              background: '#3498db',
              color: 'white',
              fontWeight: '600',
            }}
          >
            Login
          </IonButton>

          <IonButton
            routerLink="/it35-lab/Register"
            fill="clear"
            size="small"
            shape="round"
            style={{
              textTransform: 'none',
              color: '#3498db',
              fontWeight: 500,
            }}
          >
            Don’t have an account?&nbsp;<strong>Register here</strong>
          </IonButton>
        </div>

        {/* Alert & Toast */}
        <AlertBox message={alertMessage} isOpen={showAlert} onClose={() => setShowAlert(false)} />
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Login successful! Redirecting..."
          duration={1500}
          position="top"
          color="primary"
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;
