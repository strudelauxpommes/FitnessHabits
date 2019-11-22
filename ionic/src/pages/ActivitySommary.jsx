import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon, IonCol, IonRow, IonGrid } from '@ionic/react';
import { add } from 'ionicons/icons';
import React from 'react';
import DateRow from '../components/DateRow';
import ActivityModal from 'src/components/ActivityModal';

const ActivitySommary = () => {


  return (
    <IonPage>
      <IonHeader className="as-header-container">
            <IonGrid>
                <IonRow>
                    <IonCol className="as-col-title" size="6">
                    <h4 id='as-title'>Activités</h4>
                    </IonCol>
                    <IonCol>
                        <div class='as-temps-total'>
                            <ion-img class="as-icon-time" src="assets/icon/clock-icon.png"></ion-img>
                            <div class='as-temps-total-value'>8:00</div>
                        </div>
                    </IonCol>
                    <IonCol>
                        <div class='as-intensite-moy'>
                            <ion-img class="as-icon-intensity" src="assets/icon/intensite-icon.png"></ion-img>
                            <div class='as-intensity-moy-value'>5</div>
                        </div>
                        
                    </IonCol>
                    
                </IonRow>
            </IonGrid>
      </IonHeader>
      <IonContent id="as-content-container" no-padding>
            <IonGrid id='as-grid-container'>
                <IonRow>
                    <IonCol className="as-bubble-container" size="3">
                        <p class="as-title-activity">Activity 1</p>
                        <div class="as-bubble">
                            <p>
                                2:00
                            </p>
                        </div>
                    </IonCol>
                    <IonCol className="as-bubble-container" size="3">
                        <p class="as-title-activity">Activity 2</p>
                        <div class="as-bubble">
                            <p>
                                2:00
                            </p>
                        </div>
                    </IonCol>
                    <IonCol className="as-bubble-container" size="3">
                        <p class="as-title-activity">Activity 3</p>
                        <div class="as-bubble">
                            <p>
                                2:00
                            </p>
                        </div>
                    </IonCol>
                    <IonCol className="as-bubble-container" size="3">
                        <p class="as-title-activity">Autre</p>
                        <div class="as-bubble">
                            <p>
                                2:00
                            </p>
                        </div>
                    </IonCol>
                </IonRow>
            </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default ActivitySommary;
