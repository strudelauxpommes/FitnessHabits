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
  const [showToast2, setShowToast2] = useState(false);
  return (

    <IonPage id="export-import" color="#b3b3b3">

      <IonHeader>
        <IonToolbar>
          <IonTitle>Importer les données</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>

        <IonList>

          <IonItem>
            <IonIcon icon={logIn} slot="start"></IonIcon>
            <IonLabel position="stacked">Emplacement</IonLabel>
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
                position="middle"
                onDidDismiss={() => setShowToast(false)}
                message="Échec de l'import des données"
                duration={40000}
              />
            </IonCol>

          </IonRow>

        </IonList>
      </IonContent>

    </IonPage>
  );
};

export default Import;
