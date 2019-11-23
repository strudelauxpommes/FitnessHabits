import {
  IonContent,
  IonList, IonItem, IonLabel, IonRow, IonCol, IonButton, IonToast,
  IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle,
  IonIcon, IonDatetime
} from '@ionic/react';
import { calendar } from 'ionicons/icons';
import React, { useState } from 'react';

const Purge: React.FC = () => {
  const [showToast1, setShowToast] = useState(false);
  const [showToast2, setShowToast2] = useState(false);
  return (
    <IonPage id="export-import-list" color="#b3b3b3">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Suppression des données</IonTitle>
        </IonToolbar>
      </IonHeader>
      <div className="about-header"></div>
        <div className="about-info">
          <h4 className="ion-padding-start">Supprimer les données jusqu’à</h4>
        </div>
      <IonContent>
        <IonList>
          <IonItem>
            <IonIcon icon={calendar} slot="start"></IonIcon>
            <IonLabel position="stacked">Indiquez une date valide</IonLabel>
            <IonDatetime displayFormat="MMM DD, YYYY" max={new Date().toISOString()} value={new Date().toISOString()}></IonDatetime>
          </IonItem>
          <IonRow>
            <IonCol>
            <IonButton color="light" onClick={() => setShowToast2(true)} expand="block">Supprimer</IonButton>
            <IonToast
        isOpen={showToast2}
        onDidDismiss={() => setShowToast2(false)}
        message="Vos anciennes données allant jusqu'au Aug 18, 2019 ont bien été supprimées"
        position="middle"
        

      />

            </IonCol>
          </IonRow>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Purge;
