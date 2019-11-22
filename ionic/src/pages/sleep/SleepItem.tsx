import { IonItem, IonLabel } from '@ionic/react';
import React from 'react';
export function SleepItem(props: {
  date: React.ReactNode;
  label: React.ReactNode;
  value: React.ReactNode;
}) {
  return <IonItem>
    <IonLabel>{props.date}</IonLabel>
    <IonLabel>{props.label}</IonLabel>
    <IonLabel>{props.value}</IonLabel>
  </IonItem>;
}
