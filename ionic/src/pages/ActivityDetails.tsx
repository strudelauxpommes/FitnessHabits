import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const ActivityDetails: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Activité(s)</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        Activities.
      </IonContent>
    </IonPage>
  );
};

export default ActivityDetails;
