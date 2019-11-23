import { IonContent, IonInput, IonItemSliding,IonButton,IonList,IonItemGroup, IonItemDivider, IonHeader, IonListHeader, IonRadioGroup, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonSelect, IonSelectOption, IonGrid, IonRow, IonRadio, IonCol, IonText } from '@ionic/react';
import React from 'react';

const Profil: React.FC = () => {
  return (
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
  );
};

export default Profil;
