import React from 'react';
import { IonRow, IonCol } from '@ionic/react';

export default class ActivityRow extends React.Component {
  render() {
    return (
      <IonRow>
        <IonCol size="6">{this.props.titre}</IonCol>
        <IonCol size="3">{this.props.duree} min</IonCol>
        <IonCol size="3">{this.props.intensite}</IonCol>
      </IonRow>
    )
  }
}