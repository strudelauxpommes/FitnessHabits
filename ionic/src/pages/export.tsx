import {
  IonPage,IonSelect, IonSelectOption,
  IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle,
  IonList, IonItem, IonLabel, IonIcon, IonDatetime,
  IonButton, IonRow, IonCol, IonContent, IonRadioGroup,
  IonRadio, IonToast

} from '@ionic/react';
import { calendar, logIn } from 'ionicons/icons';
import React, { useState } from 'react';

const Export: React.FC = () => {
  const [showToast1, setShowToast] = useState(false);

  return (
    <IonPage id="export-import-list" color="#b3b3b3">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Exporter les données</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonList>
        <IonItem>
          <IonIcon icon={calendar} slot="start"></IonIcon>
          <IonLabel position="stacked">À partir de</IonLabel>
          <IonDatetime displayFormat="MMM DD, YYYY" max="2056" value="2019-09-19"></IonDatetime>
        </IonItem>
        <IonItem>
          <IonIcon icon={calendar} slot="start"></IonIcon>
          <IonLabel position="stacked">Jusqu'à </IonLabel>
          <IonDatetime displayFormat="MMM DD, YYYY" max="2056" value="2019-12-19"></IonDatetime>
        </IonItem>
      </IonList>

      <IonList>

        <IonRow>
          <IonCol>
            <IonButton color="light" expand="block">Nourriture</IonButton>
          </IonCol>
          <IonCol>
            <IonButton color="light" expand="block">Boissons</IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonButton color="light" expand="block">Suppléments</IonButton>
          </IonCol>
          <IonCol>
            <IonButton color="light" expand="block">Someil</IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonButton color="light" expand="full" >Poids</IonButton>
          </IonCol>
          <IonCol>
            <IonButton expand="full" color="light" >Activités physiques</IonButton>
          </IonCol>
        </IonRow>
        <IonButton color="secondary" expand="block">Toutes les données</IonButton>
      </IonList>

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
              <IonButton color="light" onClick={() => setShowToast(true)} expand="block">Exporter</IonButton>
              <IonToast
                isOpen={showToast1}
                position="middle"
                onDidDismiss={() => setShowToast(false)}
                message="Les données ne sont pas exportées à cause d'une erreur"
                duration={40000}
              />
            </IonCol>
          </IonRow>
        </IonList>
      </IonContent>
    </IonPage>
  );
};
export default Export;
