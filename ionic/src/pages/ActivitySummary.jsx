import { IonContent, IonHeader, IonPage,IonCol, IonRow, IonGrid, IonImg } from '@ionic/react';
import React from 'react';

const ActivitySummary = () => {
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
                            <IonImg className="as-icon-time" src="assets/icon/clock-icon.png"></IonImg>
                            <div class='as-temps-total-value'>8:00</div>
                        </div>
                    </IonCol>
                    <IonCol>
                        <div class='as-intensite-moy'>
                            <IonImg class="as-icon-intensity" src="assets/icon/intensite-icon.png"></IonImg>
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

export default ActivitySummary;
