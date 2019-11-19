import React from 'react';
import { IonRow, IonCol, IonList, IonItem } from '@ionic/react';
import ActivityRow from './ActivityRow';
import moment from 'moment';
import 'moment/locale/fr';

var classNames = require('classnames');

export default class DateRow extends React.Component {
  getFormattedDate() {
    moment.locale('fr');
    let date = new moment(this.props.jour);
    return date.locale('fr').format('D MMMM');
  }

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
		<IonRow className={ classNames({jourActif: this.props.index === 0, jourInactif: this.props.index > 0})}>
          <IonCol>{'Jour ' + (7 - this.props.index) + ' (' + this.getFormattedDate() + ')'}</IonCol>
          <IonCol>{this.getTotalDuration()}</IonCol>
          <IonCol>{this.getIntensityAverage()}</IonCol>
        </IonRow>
        <IonList>
          {
            this.props.activites.map(a => {
              return (
                <IonItem class="ion-no-padding" lines="none" key={a['id']}>
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