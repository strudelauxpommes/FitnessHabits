import {
  IonPage,
  IonHeader, IonToolbar, IonRadioGroup, IonTitle,
  IonList, IonItem, IonLabel, IonRadio, IonSelect, IonToast,
  IonButton, IonRow, IonCol, IonContent, IonIcon, IonSelectOption,

} from '@ionic/react';
import { logIn } from 'ionicons/icons';
import React, { useState } from 'react';

const Import: React.FC = () => {
  const [showToast1, setShowToast] = useState(false);
  return (

    <IonPage id="export-import" color="#b3b3b3">

      <IonHeader>
        <IonToolbar>
          <IonTitle>Importer les données</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div className="about-header"></div>
        <div className="about-info">
          <h4 className="ion-padding-start">Format des données</h4>
        </div>

        <IonList>
          <IonRadioGroup>
            <IonItem>
              <IonLabel>.csv</IonLabel>
              <IonRadio slot="start" value="csv" checked />
            </IonItem>

            <IonItem>
              <IonLabel>.json</IonLabel>
              <IonRadio slot="start" value="json" />
            </IonItem>
          </IonRadioGroup>
          <IonItem>
            <IonIcon icon={logIn} slot="start"></IonIcon>
            <IonLabel position="stacked">Location</IonLabel>
            <IonSelect>
              <IonSelectOption value="usb" selected>USB</IonSelectOption>
              <IonSelectOption value="cardSD">Card SD</IonSelectOption>
              <IonSelectOption value="email">Gmail</IonSelectOption>
              <IonSelectOption value="file">FileSystem</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonRow>
            <IonCol>
              <IonButton color="light" onClick={() => setShowToast(true)} expand="block">Importer</IonButton>
              <IonToast
                isOpen={showToast1}
                onDidDismiss={() => setShowToast(false)}
                message="Vos données ont été bien importée."
                duration={400}
              />
            </IonCol>
          </IonRow>
        </IonList>
      </IonContent>

    </IonPage>
  );
};

export default Import;
