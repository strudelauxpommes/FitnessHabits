import React from 'react';
import { IonRow, IonCol, IonList, IonItem } from '@ionic/react';
import ActivityRow from './ActivityRow';

export default class DateRow extends React.Component {
  getTotalDuration() {
    let total = 0;
    this.props.activites.forEach(a => {
      total += a.duree;
    });
    return total;
  }

  getIntensityAverage() {
    let total = 0;
    this.props.activites.forEach(a => {
      total += a.intensite;
    });
    return Math.round(total / this.props.activites.length);
  }

  render() {
    return (
      <IonCol>
        <IonRow>
          <IonCol>{this.props.jour}</IonCol>
          <IonCol>{this.getTotalDuration()}</IonCol>
          <IonCol>{this.getIntensityAverage()}</IonCol>
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