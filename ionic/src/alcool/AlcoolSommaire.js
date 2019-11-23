import {
  IonTitle,
  IonCol,
  IonRow,
  IonIcon,
  IonCard,
  IonGrid,
  IonCardContent,
  IonCardHeader
} from '@ionic/react';
import { wine } from 'ionicons/icons';
import { text } from 'ionicons/icons';
import React from 'react';
import ReactDOM from 'react-dom';
import { RouteComponentProps } from 'react-router';
import './Style/AlcoolSommaire.scss';
import './Style/Alcool.scss';


class AlcoolSommaire extends React.Component {

  render() {
    return (
      <IonCard href='/AlcoolDetail'>
        <IonCardHeader color="alcool">
          <IonRow>
            <IonIcon item-center icon={wine} className="summary__wine-icon" />
            <IonTitle>Alcool</IonTitle>
          </IonRow>
        </IonCardHeader>

        <IonCardContent>
          <IonGrid>
            <IonRow>
            </IonRow>
          </IonGrid>
        </IonCardContent>
      </IonCard >
    );
  }
}

export default AlcoolSommaire