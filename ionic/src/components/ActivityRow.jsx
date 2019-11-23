import React from 'react';
import { IonRow, IonCol, IonIcon, IonTextarea } from '@ionic/react';
import { text } from 'ionicons/icons';
import moment from 'moment';

export default class ActivityRow extends React.Component {
  showComment(e){
    var commentArea = e;
    console.log(commentArea)
  }

  render() {
    let duration =  moment.duration(this.props.duration);

    return (
      <IonRow className="ad-row">
        <IonCol className="ad-data-col-name" size="8">{this.props.title}</IonCol>
        <IonCol className="ad-data-col" size="2">
          <IonIcon icon={text} onClick={(e) => this.showComment(e)}></IonIcon>
        </IonCol>
        <IonCol className="ad-data-col" size="3">{("0" + duration.hours()).slice(-2) + ':' + ("0" + duration.minutes()).slice(-2)}</IonCol>
        <IonCol className="ad-data-col" size="3">{this.props.intensity}</IonCol>
        <div>
            <IonTextarea>

            </IonTextarea>
        </div>
      </IonRow>
    )
  }
}