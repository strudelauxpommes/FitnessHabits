import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon, IonCol, IonRow, IonGrid } from '@ionic/react';
import { add } from 'ionicons/icons';
import React from 'react';
import DateRow from '../components/DateRow';

const ActivityDetails = () => {
  let dates = [
    {
      jour : "2019/11/19",
      activites : [
        {
          id : 1,
          titre : "Yoga",
          duree : 60,
          intensite : 2
        },
        {
          id : 2,
          titre : "Vélo",
          duree : 40,
          intensite : 5
        },
        {
          id : 3,
          titre : "Soccer",
          duree : 45,
          intensite : 8
        }
      ]
    },
    {
      jour : "2019/11/18",
      activites : [
        {
          id : 4,
          titre : "Gym",
          duree : 60,
          intensite : 6
        },
        {
          id : 5,
          titre : "Vélo",
          duree : 40,
          intensite : 5
        },
        {
          id : 6,
          titre : "Tennis",
          duree : 40,
          intensite : 8
        }
      ]
    },
    {
      jour : "2019/11/17",
      activites : [
        {
          id : 7,
          titre : "Vélo",
          duree : 40,
          intensite : 4
        },
        {
          id : 8,
          titre : "Soccer",
          duree : 40,
          intensite : 7
        }
      ]
    }
  ]

  let dayIndex = 0;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
        <ion-icon class="as-back-icon" name="arrow-back"></ion-icon>
          <IonTitle>Activité(s)</IonTitle>
          <IonButtons slot="end">
            <IonButton>
              <IonIcon icon={add}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent no-padding>
	    <IonGrid class="test" className="ion-no-padding ion-no-margin" no-padding>
          <IonRow className="ion-no-padding" no-padding>
            <IonCol size="6">Nom</IonCol>
            <IonCol size="3">Durée</IonCol>
            <IonCol size="3">Intensité</IonCol>
          </IonRow>
          {
            dates.map(d => {
              return (
                  <DateRow key={d['jour']} jour={d['jour']} activites={d['activites']} index={dayIndex++}></DateRow>
              );
            })
          }
	    </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default ActivityDetails;
