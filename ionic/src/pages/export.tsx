import {
  IonPage,
  IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle,
  IonList, IonItem, IonLabel, IonIcon, IonDatetime,
  IonButton, IonRow, IonCol, IonContent, IonRadioGroup,
  IonRadio, IonToast

} from '@ionic/react';
import { calendar } from 'ionicons/icons';
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

      <IonList>
        <IonItem>
          <IonIcon icon={calendar} slot="start"></IonIcon>
          <IonLabel position="stacked">À partir de</IonLabel>
          <IonDatetime displayFormat="MMM DD, YYYY" max="2056" value={null}></IonDatetime>
        </IonItem>
        <IonItem>
          <IonIcon icon={calendar} slot="start"></IonIcon>
          <IonLabel position="stacked">Jusqu'à </IonLabel>
          <IonDatetime displayFormat="MMM DD, YYYY" max="2056" value={null}></IonDatetime>
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

      <IonContent>

        <div className="about-header"></div>
        <div className="about-info">
          <h4 className="ion-padding-start">Format des données</h4>
        </div>

        <IonList>
          <IonRadioGroup>
            <IonItem>
              <IonLabel>Exporter dans un format .csv</IonLabel>
              <IonRadio slot="start" value="csv" checked />
            </IonItem>

            <IonItem>
              <IonLabel>Exporter dans un format .json</IonLabel>
              <IonRadio slot="start" value="json" />
            </IonItem>
          </IonRadioGroup>
          <IonRow>
            <IonCol>
              <IonButton color="light" onClick={() => setShowToast(true)} expand="block">Exporter</IonButton>
              <IonToast
                isOpen={showToast1}
                onDidDismiss={() => setShowToast(false)}
                message="Vos données ont été bien exportée."
                duration={200}
              />
            </IonCol>
          </IonRow>
        </IonList>
      </IonContent>

    </IonPage>
  );
};

export default Export;
