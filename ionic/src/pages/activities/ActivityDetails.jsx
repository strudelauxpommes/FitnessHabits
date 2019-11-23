import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons,
  IonButton, IonIcon, IonCol, IonRow, IonGrid, IonModal } from '@ionic/react';
import { add } from 'ionicons/icons';
import React, { useState } from 'react';
import DateRow from '../../components/DateRow';
import moment from 'moment';
import { ActivityService } from '../../services/ActivityService';
import AddActivityForm from '../../components/AddActivityForm';

const ActivityDetails = () => {
  const [showModal, setShowModal] = useState(false);
  const [dates, setDates] = useState();
  const activityService = new ActivityService();

  let today = moment();
  let aWeekAgo = today.clone().subtract(7, 'days');
  let fetchedData = false;

  if (!fetchedData) {
    setInterval(() => {
      activityService.getAllActivitiesBetween(aWeekAgo.toDate(), today.toDate()).then((result) => {
        fetchedData = true;
        console.log(result);
        setDates(result);
      });
    }, 3000);
  }

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

        <div className="ad-overlay-modal-form" onClick={() => setShowModal(false)}></div>
        <IonModal className="ad-modal-add-activity-form" isOpen={showModal}>
          <div className="ad-nav-bar-modal-activity-form">Ajouter une activité
            <div className="ad-close-button" onClick={() => setShowModal(false)}>
              <IonIcon className="ad-close-icon" icon={add}></IonIcon>
            </div>
          </div>
          <AddActivityForm ></AddActivityForm>
        </IonModal>
        

	    <IonGrid class="test" className="ion-no-padding ion-no-margin ad-grid-data" no-padding>
          <IonRow className="ion-no-padding ad-row" no-padding>
            <IonCol className="ad-data-col-name" size="10">Nom</IonCol>
            <IonCol className="ad-data-col" size="3">Durée</IonCol>
            <IonCol className="ad-data-col" size="3">Intensité</IonCol>
          </IonRow>
          {
            dates !== null && dates !== undefined
              ? dates.map((d, index) => {
                let json = JSON.parse(d);
                return (
                    <DateRow key={index} jour={json['day']} activities={json['activities']} index={index}></DateRow>
                );
              })
              : null
          }
	    </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default ActivityDetails;
