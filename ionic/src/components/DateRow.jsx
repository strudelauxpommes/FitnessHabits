import React from 'react';
import { IonRow, IonCol, IonGrid } from '@ionic/react';
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
    let total = moment.duration(0);
    this.props.activites.forEach(a => {
      let duration = moment.duration(a.duree);
      total.add(duration);
    });
    return ("0" + total.hours()).slice(-2) + ':' + ("0" + total.minutes()).slice(-2);
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
      <IonGrid>
		<IonRow className={ classNames({jourActif: this.props.index === 0, jourInactif: this.props.index > 0})}>
          <IonCol size="6">{'Jour ' + (7 - this.props.index) + ' (' + this.getFormattedDate() + ')'}</IonCol>
          <IonCol size="3">{this.getTotalDuration()}</IonCol>
          <IonCol size="3">{this.getIntensityAverage()}</IonCol>
        </IonRow>
          {
            this.props.activites.map((a, index) => {
              return (
                  <ActivityRow key={index} titre={a['titre']} duree={a['duree']} intensite={a['intensite']}></ActivityRow>
              );
            })
          }
      </IonGrid>
    )
  }
}