import React, { useState } from 'react';
import {
  IonButton,
  IonContent,
  IonInput,
  IonInputPasswordToggle,
  IonPage,
  IonTitle,
  IonModal,
  IonText,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonAlert,
  IonSpinner,
} from '@ionic/react';
import { supabase } from '../utils/supabaseClient';
import bcrypt from 'bcryptjs';

const AlertBox: React.FC<{ message: string; isOpen: boolean; onClose: () => void }> = ({ message, isOpen, onClose }) => {
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

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOpenVerificationModal = () => {
    if (!email.endsWith('@nbsc.edu.ph') && !email.endsWith('@gmail.com')) {
      setAlertMessage('Please register with a valid email domain (nbsc.edu.ph or gmail.com).');
      setShowAlert(true);
      return;
    }
    if (password !== confirmPassword) {
      setAlertMessage('Passwords do not match.');
      setShowAlert(true);
      return;
    }
    setShowVerificationModal(true);
  };

  const doRegister = async () => {
    setLoading(true);
    setShowVerificationModal(false);
    try {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) throw new Error('Account creation failed: ' + error.message);

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const { error: insertError } = await supabase.from('users').insert([{
        username,
        user_email: email,
        user_firstname: firstName,
        user_lastname: lastName,
        user_password: hashedPassword,
      }]);
      if (insertError) throw new Error('Failed to save user data: ' + insertError.message);

      setShowSuccessModal(true);
    } catch (err) {
      setAlertMessage(err instanceof Error ? err.message : 'An unknown error occurred.');
      setShowAlert(true);
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    margin: '10px auto',
    width: '100%',
    borderRadius: '25px',
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    fontWeight: '400',
    color: '#333',
    padding: '12px 20px',
    backgroundColor: '#fff',
  };

  return (
    <IonPage>
      <IonContent
        fullscreen
        className="ion-padding"
        style={{
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          padding: 0,
          animation: 'fadeSlideIn 1s ease-in-out forwards',
        }}
      >
        <style>
          {`
            @keyframes fadeSlideIn {
              0% { opacity: 0; transform: translateY(20px); }
              100% { opacity: 1; transform: translateY(0); }
            }

            .bg-squares {
              position: relative;
              width: 100%;
              height: 100%;
              overflow: hidden;
            }

            .bg-squares .square {
              position: absolute;
              background: linear-gradient(45deg, rgba(34, 193, 195, 1), rgba(253, 187, 45, 1));
              animation: pulse 5s ease-in-out infinite;
              opacity: 0.7;
            }

            .bg-squares .square:nth-child(1) {
              width: 300px;
              height: 300px;
              top: 10%;
              left: 5%;
              animation-delay: 0s;
            }

            .bg-squares .square:nth-child(2) {
              width: 200px;
              height: 200px;
              top: 25%;
              right: 5%;
              animation-delay: 1s;
            }

            .bg-squares .square:nth-child(3) {
              width: 400px;
              height: 400px;
              bottom: 20%;
              left: 15%;
              animation-delay: 2s;
            }

            .bg-squares .square:nth-child(4) {
              width: 250px;
              height: 250px;
              top: 50%;
              right: 10%;
              animation-delay: 3s;
            }

            .bg-squares .square:nth-child(5) {
              width: 180px;
              height: 180px;
              bottom: 5%;
              left: 25%;
              animation-delay: 4s;
            }

            .bg-squares .square:nth-child(6) {
              width: 350px;
              height: 350px;
              top: 40%;
              left: 30%;
              animation-delay: 5s;
            }

            .bg-squares .square:nth-child(7) {
              width: 280px;
              height: 280px;
              top: 70%;
              right: 30%;
              animation-delay: 6s;
            }

            .bg-squares .square:nth-child(8) {
              width: 220px;
              height: 220px;
              bottom: 10%;
              left: 50%;
              animation-delay: 7s;
            }

            @keyframes pulse {
              0% { transform: scale(1); opacity: 0.7; }
              50% { transform: scale(1.05); opacity: 0.9; }
              100% { transform: scale(1); opacity: 0.7; }
            }
          `}
        </style>

        <div className="bg-squares" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', minHeight: '100vh' }}>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>

          <div
            style={{
              width: '80%',
              maxWidth: '1000px',
              padding: '30px',
              borderRadius: '30px',
              backgroundColor: 'rgba(254, 254, 254, 0.95)',
              boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
              textAlign: 'center',
              zIndex: 1,
            }}
          >
            <h1 style={{ fontSize: '26px', fontWeight: 'bold', color: '#333' }}>Create your account</h1>

            <IonInput style={inputStyle} label="Username" labelPlacement="floating" fill="outline" type="text" placeholder="Enter a unique username" value={username} onIonChange={e => setUsername(e.detail.value!)} />
            <IonInput style={inputStyle} label="First Name" labelPlacement="floating" fill="outline" type="text" placeholder="Input your name" value={firstName} onIonChange={e => setFirstName(e.detail.value!)} />
            <IonInput style={inputStyle} label="Last Name" labelPlacement="floating" fill="outline" type="text" placeholder="Input your surname" value={lastName} onIonChange={e => setLastName(e.detail.value!)} />
            <IonInput style={inputStyle} label="Email" labelPlacement="floating" fill="outline" type="email" placeholder="Any Email" value={email} onIonChange={e => setEmail(e.detail.value!)} />
            <IonInput style={inputStyle} label="Password" labelPlacement="floating" fill="outline" type="password" placeholder="Input password" value={password} onIonChange={e => setPassword(e.detail.value!)} >
              <IonInputPasswordToggle slot="end" />
            </IonInput>
            <IonInput style={inputStyle} label="Repeat Password" labelPlacement="floating" fill="outline" type="password" placeholder="Repeat password" value={confirmPassword} onIonChange={e => setConfirmPassword(e.detail.value!)} >
              <IonInputPasswordToggle slot="end" />
            </IonInput>

            <IonButton
              style={{ margin: '10px auto', width: '100%', borderRadius: '25px', fontWeight: '600', color: '#fff', backgroundColor: '#38ada9' }}
              onClick={handleOpenVerificationModal}
              expand="full"
              shape="round"
              disabled={loading}
            >
              {loading ? <IonSpinner name="dots" /> : 'Register'}
            </IonButton>

            <IonButton routerLink="/it35-lab" fill="clear" shape="round" style={{ marginTop: '10px', fontSize: '15px', color: '#38ada9' }}>
              Already have an account? Sign in
            </IonButton>
          </div>
        </div>

        {/* Modals */}
        <IonModal isOpen={showVerificationModal} onDidDismiss={() => setShowVerificationModal(false)}>
          <IonContent className="ion-padding">
            <IonCard style={{ marginTop: '20%', borderRadius: '20px' }}>
              <IonCardHeader>
                <IonCardTitle>User Registration Details</IonCardTitle>
                <hr />
                <IonCardSubtitle>Username</IonCardSubtitle>
                <IonCardTitle>{username}</IonCardTitle>
                <IonCardSubtitle>Email</IonCardSubtitle>
                <IonCardTitle>{email}</IonCardTitle>
                <IonCardSubtitle>Name</IonCardSubtitle>
                <IonCardTitle>{firstName} {lastName}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent />
              <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
                <IonButton fill="outline" color="medium" onClick={() => setShowVerificationModal(false)}>Cancel</IonButton>
                <IonButton color="success" onClick={doRegister}>Confirm</IonButton>
              </div>
            </IonCard>
          </IonContent>
        </IonModal>

        <IonModal isOpen={showSuccessModal} onDidDismiss={() => setShowSuccessModal(false)}>
          <IonContent className="ion-padding" style={{ textAlign: 'center' }}>
            <div style={{ marginTop: '30%', padding: '30px', borderRadius: '20px', boxShadow: '0 6px 18px rgba(0, 0, 0, 0.1)', backgroundColor: '#ffffff' }}>
              <IonTitle style={{ fontSize: '22px', color: '#28a745' }}>✅ Registration Successful!</IonTitle>
              <IonText>
                <p>Your account has been created successfully.</p>
                <p>Proceed to sign in.</p>
              </IonText>
              <IonButton style={{ marginTop: '20px' }} color="primary" expand="full" onClick={() => setShowSuccessModal(false)}>
                Close
              </IonButton>
            </div>
          </IonContent>
        </IonModal>

        <AlertBox message={alertMessage} isOpen={showAlert} onClose={() => setShowAlert(false)} />
      </IonContent>
    </IonPage>
  );
};

export default Register;
