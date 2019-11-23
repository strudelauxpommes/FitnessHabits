import { IonContent, IonInput, IonItemSliding,IonButton,IonList,IonItemGroup, IonItemDivider, IonHeader, IonListHeader, IonRadioGroup, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonSelect, IonSelectOption, IonGrid, IonRow, IonRadio, IonCol, IonText } from '@ionic/react';
import React from 'react';

const Home: React.FC = () => {
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

        <IonList>
        <IonListHeader>
          Taille
        </IonListHeader>
        <IonItem>
        <IonInput type="text" placeholder="Entrez taille"></IonInput>
        </IonItem>
        <IonListHeader>
          Date de naissance
        </IonListHeader>
        <IonItem>
        <IonInput type="text" placeholder="Entrez taille"></IonInput>
        </IonItem>
        <IonListHeader>
          Sexe
        </IonListHeader>
        <IonItem>
        <IonInput type="text" placeholder="Entrez taille"></IonInput>
        </IonItem>
        </IonList>
       
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Home;
