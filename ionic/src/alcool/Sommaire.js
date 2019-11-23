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
  import { RouteComponentProps } from 'react-router';
  import '../theme/AlcoolSummary.scss';
  import AlcoolCardItem from './AlcoolCardItem';
  import AlcoolCardItemOther from './AlcoolCardItemOther';
  
  const AlcoolSummaryItem = (props) => {
    return (
      <IonCard>
        <IonCardHeader color="alcool">
          <IonRow>
            <IonIcon item-center icon={wine} className="summary__wine-icon" />
            <IonTitle onClick={() => props.history.push('/AlcoolDetail')}>Alcool</IonTitle>
            <IonIcon item-center icon={text} className="summary__text-icon" />
          </IonRow>
          <IonRow>
            <IonCol className="summary__center-text">J : 2.5 | S : 7</IonCol>
          </IonRow>
        </IonCardHeader>
  
        <IonCardContent>
          <IonGrid>
            <IonRow>
              <AlcoolCardItem
                name="Whisky"
                quantity="2"
                volume="44 ml"/>
  
              <AlcoolCardItem
                name="Vin blanc"
                quantity="1"
                volume="150 ml"/>
  
              <AlcoolCardItem
                name="Vin rouge"
                quantity="1"
                volume="150 ml"/>
  
              <AlcoolCardItemOther/>
  
            </IonRow>
          </IonGrid>
        </IonCardContent>
      </IonCard >
    );
  }
  export default AlcoolSummaryItem;