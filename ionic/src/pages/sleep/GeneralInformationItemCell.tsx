import { IonLabel, IonRow, IonCol } from '@ionic/react';
import React from 'react';
export function GeneralInformationItemCell(props: {
  labelTitle: React.ReactNode;
  labelSubtitle: React.ReactNode;
  labelValue: React.ReactNode;
}) {
  return <IonRow>
    <IonCol size='9'>
      <IonRow>
        <IonLabel>
          {props.labelTitle}
        </IonLabel>
      </IonRow>
      <IonRow>
        <IonLabel>
          {props.labelSubtitle}
        </IonLabel>
      </IonRow>
    </IonCol>
    <IonCol size='3'>
      <IonLabel>
        {props.labelValue} heure(s)
      </IonLabel>
    </IonCol>
  </IonRow>;
}
