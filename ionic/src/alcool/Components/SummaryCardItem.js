import {
  IonCol,
  IonRow,
  IonButton,
  IonText,
} from '@ionic/react';
import React from 'react';
import '../Style/AlcoolSommaire.scss';

export default class SummaryCardItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <IonCol>
        <IonRow className="ion-text-center">
          <IonCol>
            <IonText>
              {this.props.name}
            </IonText>
          </IonCol>
        </IonRow>
        <IonRow className="ion-text-center">
          <IonCol>
            <IonButton onClick={() => this.props.addAlcool(this.props.name) }className="summary__round" shape='round' color='alcool'>
              <IonText>
                {this.props.quantity}
              </IonText>
            </IonButton>
          </IonCol>
        </IonRow>
        <IonRow className="ion-text-center">
          <IonCol>
            <IonText>
              {this.props.volume}
            </IonText>
          </IonCol>
        </IonRow>
      </IonCol>
    );
  }
}