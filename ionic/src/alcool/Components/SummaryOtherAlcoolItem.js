import {
    IonCol,
    IonRow,
    IonButton,
    IonText,
  } from '@ionic/react';
  import { wine } from 'ionicons/icons';
  import { text } from 'ionicons/icons';
  import React from 'react';
  import '../Style/AlcoolSommaire.scss';
  
  const SummaryOtherAlcoolItem = () => {
    return (
      <IonCol>
      <IonRow className="ion-text-center">
        <IonCol>
          <IonText>
            Autre
          </IonText>
        </IonCol>
      </IonRow>
      <IonRow className="ion-text-center">
        <IonCol>
          <IonButton href='/alcool-detail' className="summary__round" shape='round' color='alcool'>
            <IonText>1</IonText>
          </IonButton>
        </IonCol>
      </IonRow>
    </IonCol>
    );
  }
  export default SummaryOtherAlcoolItem;