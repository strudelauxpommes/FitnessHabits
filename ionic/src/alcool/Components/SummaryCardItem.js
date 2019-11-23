import {
    IonCol,
    IonRow,
    IonButton,
    IonText,
  } from '@ionic/react';
  import { wine } from 'ionicons/icons';
  import { text } from 'ionicons/icons';
  import React from 'react';
  import { RouteComponentProps } from 'react-router';
  import '../theme/AlcoolDetail.scss';
  
  const SummaryCardItem = ({ name, quantity, volume }) => {
    return (
      <IonCol>
        <IonRow className="ion-text-center">
          <IonCol>
            <IonText>
              {name}
            </IonText>
          </IonCol>
        </IonRow>
        <IonRow className="ion-text-center">
          <IonCol>
            <IonButton className="round" shape='round' color='alcool'>
              <IonText>
                {quantity}
              </IonText>
            </IonButton>
          </IonCol>
        </IonRow>
        <IonRow className="ion-text-center">
          <IonCol>
            <IonText>
              {volume}
            </IonText>
          </IonCol>
        </IonRow>
      </IonCol>
    );
  }
  export default SummaryCardItem;