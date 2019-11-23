import React from 'react';
import { IonRow, IonCol } from '@ionic/react';
import moment from 'moment';

export default class ActivityRow extends React.Component {
  render() {
    let duration =  moment.duration(this.props.duree);

    return (
      <IonRow>
        <IonCol size="6">{this.props.titre}</IonCol>
        <IonCol size="3">{("0" + duration.hours()).slice(-2) + ':' + ("0" + duration.minutes()).slice(-2)}</IonCol>
        <IonCol size="3">{this.props.intensite}</IonCol>
      </IonRow>
    )
  }
}