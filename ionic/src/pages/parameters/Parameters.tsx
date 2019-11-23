import { IonContent, IonItemSliding,IonButton,IonList,IonTabBar, IonTabButton, IonIcon,IonItemGroup, IonItemDivider, IonHeader, IonListHeader, IonRadioGroup, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonSelect, IonSelectOption, IonGrid, IonRow, IonRadio, IonCol, IonText } from '@ionic/react';
import React from 'react';
import { add, calendar, download, settings, trash, home, redo } from 'ionicons/icons';
import '../../theme/parameters.css';
import Preference from './Preference';
import Profil from './Profil';
const Parameters: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="toolbarName ion-text-center">
          <IonTitle>Paule Levasseur</IonTitle>
        </IonToolbar>
        <IonGrid>
          <IonRow>
            <IonCol className="pref">
              <div className="ion-text-center"><h4>Profil</h4></div>
            </IonCol>
            <IonCol className="profil">
              <div className="ion-text-center"><h4>Preference</h4></div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonHeader>

      <IonContent>
        <IonContent>

          <Preference></Preference>        
          
        </IonContent>
      </IonContent>
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/home">
          <IonIcon icon={home} />
          <IonLabel></IonLabel>
        </IonTabButton>
        <IonTabButton tab="export" href="/">
          <IonIcon icon={redo} />
          <IonLabel></IonLabel>
        </IonTabButton>
        <IonTabButton tab="import" href="/">
          <IonIcon icon={download} />
          <IonLabel></IonLabel>
        </IonTabButton>
        <IonTabButton tab="delete" href="/">
          <IonIcon icon={trash} />
          <IonLabel></IonLabel>
        </IonTabButton>
        <IonTabButton tab="settings" href="/Parameters">
          <IonIcon icon={settings} />
          <IonLabel></IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonPage>
  );
};

export default Parameters;
