import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon, IonList, IonItem } from '@ionic/react';
import { add } from 'ionicons/icons';
import React from 'react';
import DateRow from '../components/DateRow';

const ActivityDetails = () => {
  let dates = [
    {
      id : 1,
      jour : "2019/11/17",
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
      id : 2,
      jour : "2019/11/18",
      activites : [
        {
          id : 4,
          titre : "Gem",
          duree : 40,
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
      id : 3,
      jour : "2019/11/19",
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

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Activité(s)</IonTitle>
          <IonButtons>
            <IonButton>
              <IonIcon icon={add}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
        {
            dates.map(d => {
              return (
                <IonItem key={d['id']}>
                  <DateRow jour={d['jour']} activites={d['activites']}></DateRow>
                </IonItem>
              );
            })
          }
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default ActivityDetails;
