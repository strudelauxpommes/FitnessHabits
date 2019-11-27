import React from 'react';
import { IonRow, IonCol, IonGrid } from '@ionic/react';
import ActivityRow from './ActivityRow';
import moment from 'moment';
import 'moment/locale/fr';

var classNames = require('classnames');

export default class DateRow extends React.Component {
  getFormattedDate() {
    moment.locale('fr');
    let date = new moment(this.props.day);
    return date.locale('fr').format('D MMMM');
  }

  getTotalDuration() {
    let total = moment.duration(0);
    this.props.activities.forEach(a => {
      let duration = moment.duration(a.duree);
      total.add(duration);
    });
    return ("0" + total.hours()).slice(-2) + ':' + ("0" + total.minutes()).slice(-2);
  }

  getIntensityAverage() {
    let total = 0;
    this.props.activities.forEach(a => {
      total += a.intensity;
    });
    return Math.round(total / this.props.activities.length);
  }
  
  render() {
    return (
      <IonGrid className="ad-grid-row-jour">
		    <IonRow className={ classNames({adJourActif: this.props.index === 0, adJourInactif: this.props.index > 0}) + " ad-row-jour ad-row"}>
          <IonCol className="ad-data-col-name" size="10">{'Jour ' + (7 - this.props.index) + ' (' + this.getFormattedDate() + ')'}</IonCol>
          <IonCol className="ad-data-col" size="3">{this.getTotalDuration()}</IonCol>
          <IonCol className="ad-data-col" size="3">{this.getIntensityAverage()}</IonCol>
        </IonRow>
          {
            this.props.activities.map((a, index) => {
              return (
                  <ActivityRow key={index} title={a['title']} duration={a['duration']} intensity={a['intensity']}></ActivityRow>
              );
            })
          }
      </IonGrid>
    )
  }
}