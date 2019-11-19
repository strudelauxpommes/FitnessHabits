import React from 'react';
import { IonRow, IonCol } from '@ionic/react';

export default class ActivityRow extends React.Component {
  render() {
    return (
      <IonRow>
        <IonCol>{this.props.titre}</IonCol>
        <IonCol>{this.props.duree}</IonCol>
        <IonCol>{this.props.intensite}</IonCol>
      </IonRow>
    )
  }
}