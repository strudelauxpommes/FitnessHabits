import React from 'react';
import { IonRow, IonCol, IonList, IonItem } from '@ionic/react';
import ActivityRow from './ActivityRow';

export default class DateRow extends React.Component {
  render() {
    return (
      <IonCol>
        <IonRow>
          <IonCol>{this.props.jour}</IonCol>
          <IonCol>{this.props.activites[0].id}</IonCol>
          <IonCol>{this.props.activites[0].duree}</IonCol>
        </IonRow>
        <IonList>
          {
            this.props.activites.map(a => {
              return (
                <IonItem key={a['id']}>
                  <ActivityRow titre={a['titre']} duree={a['duree']} intensite={a['intensite']}></ActivityRow>
                </IonItem>
              );
            })
          }
        </IonList>
      </IonCol>
    )
  }
}