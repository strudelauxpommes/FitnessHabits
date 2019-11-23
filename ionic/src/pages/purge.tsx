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
      <IonContent>
        <IonList>
          <IonItem>
            <IonIcon icon={calendar} slot="start"></IonIcon>
            <IonLabel position="stacked">Indiquez une date valide</IonLabel>
            <IonDatetime displayFormat="MMM DD, YYYY" max="2056" value={null}></IonDatetime>
          </IonItem>
          <IonRow>
            <IonCol>
              <IonButton color="light" onClick={() => setShowToast(true)} expand="block">Supprimer</IonButton>
              <IonToast
                isOpen={showToast1}
                onDidDismiss={() => setShowToast(false)}
                message="Vos données ont été bien supprimées."
                duration={400}
              />
            </IonCol>
          </IonRow>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Purge;
