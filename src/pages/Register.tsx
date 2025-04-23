import React, { useState } from 'react';
import {
  IonPage, IonContent, IonInput, IonButton, IonModal, IonTitle,
  IonText, IonAlert, IonAvatar, IonCard, IonCardHeader, IonCardSubtitle,
  IonCardTitle, IonCardContent, IonInputPasswordToggle
} from '@ionic/react';
import { supabase } from '../utils/supabaseClient';
import bcrypt from 'bcryptjs';

const AlertBox = ({ message, isOpen, onClose }: { message: string; isOpen: boolean; onClose: () => void }) => (
  <IonAlert isOpen={isOpen} onDidDismiss={onClose} header="Notice" message={message} buttons={['OK']} />
);

const Register: React.FC = () => {
  const [form, setForm] = useState({
    username: '', firstName: '', lastName: '',
    email: '', password: '', confirmPassword: ''
  });
  const [showVerification, setShowVerification] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [alertMsg, setAlertMsg] = useState('');
  const [showAlert, setShowAlert] = useState(false); 

  const updateField = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    const { email, password, confirmPassword } = form;
    if (!email.endsWith('@gmail.com') && !email.endsWith('@nbsc.edu.ph')) {
      setAlertMsg('Gmail or NBSC email allowed.');
      setShowAlert(true);
      return false;
    }
    if (password !== confirmPassword) {
      setAlertMsg('Passwords do not match.');
      setShowAlert(true);
      return false;
    }
    return true;
  };

  const handleRegisterClick = () => {
    if (validateForm()) setShowVerification(true);
  };

  const handleRegistration = async () => {
    setShowVerification(false);
    try {
      const { email, password, username, firstName, lastName } = form;
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) throw new Error(error.message);

      const hash = await bcrypt.hash(password, 10);
      const { error: insertErr } = await supabase.from('users').insert([{
        username,
        user_email: email,
        user_firstname: firstName,
        user_lastname: lastName,
        user_password: hash
      }]);
      if (insertErr) throw new Error(insertErr.message);

      setShowSuccess(true);
    } catch (err) {
      setAlertMsg(err instanceof Error ? err.message : 'Unexpected error occurred.');
      setShowAlert(true);
    }
  };

  const inputStyle = {
    marginBottom: '10px',
    borderRadius: '20px',
    backgroundColor: '#fff',
    padding: '12px 16px'
  };

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding" style={{ textAlign: 'center' }}>
        <div className="bg-circles" style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
          <IonAvatar style={{ margin: 'auto', width: '80px', height: '80px' }}>
            <img src="https://imgs.search.brave.com/RcOSmqNkKtC5_gw2DRFap2lRRb16YSoJN0SzaI7nHPc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGhvdG9yb29tLmNv/bS92Mi9pbWFnZS1j/YWNoZT9wYXRoPWdz/Oi8vYmFja2dyb3Vu/ZC03ZWY0NC5hcHBz/cG90LmNvbS9iYWNr/Z3JvdW5kc192My9j/dXRlLzQ3Xy1fY3V0/ZS5qcGc" alt="avatar" />
          </IonAvatar>
          <h2 style={{ marginTop: '10px' }}>Create Account</h2>

          {['username', 'firstName', 'lastName', 'email'].map(field => (
            <IonInput
              key={field}
              style={inputStyle}
              label={field.charAt(0).toUpperCase() + field.slice(1)}
              fill="outline"
              value={form[field as keyof typeof form]}
              onIonChange={e => updateField(field, e.detail.value!)}
            />
          ))}

          <IonInput
            style={inputStyle}
            label="Password"
            type="password"
            fill="outline"
            value={form.password}
            onIonChange={e => updateField('password', e.detail.value!)}
          >
            <IonInputPasswordToggle slot="end" />
          </IonInput>
          <IonInput
            style={inputStyle}
            label="Confirm Password"
            type="password"
            fill="outline"
            value={form.confirmPassword}
            onIonChange={e => updateField('confirmPassword', e.detail.value!)}
          >
            <IonInputPasswordToggle slot="end" />
          </IonInput>

          <IonButton expand="block" color="primary" shape="round" onClick={handleRegisterClick}>
            Register
          </IonButton>
          <IonButton routerLink="/it35-lab" fill="clear" size="small">Already have an account?</IonButton>
        </div>

        {/* Verification Modal */}
        <IonModal isOpen={showVerification} onDidDismiss={() => setShowVerification(false)}>
          <IonContent className="ion-padding">
            <IonCard style={{ marginTop: '20%' }}>
              <IonCardHeader>
                <IonCardTitle>Confirm Details</IonCardTitle>
                <IonCardSubtitle>{form.username}</IonCardSubtitle>
                <IonCardSubtitle>{form.email}</IonCardSubtitle>
                <IonCardSubtitle>{form.firstName} {form.lastName}</IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                <IonButton color="medium" fill="outline" onClick={() => setShowVerification(false)}>Cancel</IonButton>
                <IonButton color="success" onClick={handleRegistration}>Confirm</IonButton>
              </IonCardContent>
            </IonCard>
          </IonContent>
        </IonModal>

        {/* Success Modal */}
        <IonModal isOpen={showSuccess} onDidDismiss={() => setShowSuccess(false)}>
          <IonContent className="ion-padding" style={{ textAlign: 'center' }}>
            <div style={{ marginTop: '30%', backgroundColor: '#fff', padding: '30px', borderRadius: '20px' }}>
              <IonTitle style={{ color: 'green' }}>🎉 Registered Successfully!</IonTitle>
              <IonText>
                <p>Check your email to verify your account.</p>
              </IonText>
              <IonButton routerLink="/it35-lab" color="success">Go to Login</IonButton>
            </div>
          </IonContent>
        </IonModal>

        <AlertBox message={alertMsg} isOpen={showAlert} onClose={() => setShowAlert(false)} />
      </IonContent>
    </IonPage>
  );
};

export default Register;
