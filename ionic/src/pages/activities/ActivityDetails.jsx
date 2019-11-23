import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons,
  IonButton, IonIcon, IonCol, IonRow, IonGrid, IonModal } from '@ionic/react';
import { add } from 'ionicons/icons';
import React, { useState } from 'react';
import DateRow from '../../components/DateRow';
import AddActivityForm from '../../components/ActivityRow';

const ActivityDetails = () => {
  const [showModal, setShowModal] = useState(false);
  let dates = [
    {
      jour : "2019/11/19",
      activites : [
        {
          titre : "Yoga",
          duree : "0:60:0",
          intensite : 2
        },
        {
          titre : "Vélo",
          duree : "0:40:0",
          intensite : 5
        },
        {
          titre : "Soccer",
          duree : "0:45:0",
          intensite : 8
        }
      ]
    },
    {
      jour : "2019/11/18",
      activites : [
        {
          titre : "Gym",
          duree : "0:60:0",
          intensite : 6
        },
        {
          titre : "Vélo",
          duree : "0:40:0",
          intensite : 5
        },
        {
          titre : "Tennis",
          duree : "0:40:0",
          intensite : 8
        }
      ]
    },
    {
      jour : "2019/11/17",
      activites : [
        {
          titre : "Vélo",
          duree : "0:40:0",
          intensite : 4
        },
        {
          titre : "Soccer",
          duree : "0:40:0",
          intensite : 7
        }
      ]
    }
  ]

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Activité(s)</IonTitle>
          <IonButtons slot="start">
            <IonIcon class="as-back-icon" name="arrow-back"></IonIcon>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton onClick={() => setShowModal(true)}>
              <IonIcon icon={add}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent no-padding>
        <IonModal isOpen={showModal}>
          <AddActivityForm></AddActivityForm>
          <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
        </IonModal>

	    <IonGrid class="test" className="ion-no-padding ion-no-margin" no-padding>
          <IonRow className="ion-no-padding" no-padding>
            <IonCol size="6">Nom</IonCol>
            <IonCol size="3">Durée</IonCol>
            <IonCol size="3">Intensité</IonCol>
          </IonRow>
          {
            dates.map((d, index) => {
              return (
                  <DateRow key={d['jour']} jour={d['jour']} activites={d['activites']} index={index}></DateRow>
              );
            })
          }
	    </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default ActivityDetails;
