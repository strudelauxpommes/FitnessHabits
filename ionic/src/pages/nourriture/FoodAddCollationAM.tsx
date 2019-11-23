import { Component } from "react";
import React from "react";
import {
  IonHeader,
  IonContent,
  IonPage,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonTitle,
  IonItem,
  IonLabel,
  IonInput,
  IonCardHeader,
  IonCard,
  IonCardContent,
  IonIcon,
  IonButton
} from "@ionic/react";
import { checkmark } from "ionicons/icons";
import { FoodHeader } from "./FoodHeader";

export default class FoodAdd extends Component {
  render() {
    return (
      <IonPage>
        <IonHeader className="background-black">
          <FoodHeader backLink="/food-summary"></FoodHeader>
        </IonHeader>

        <IonContent className="ion-padding">
          <IonCard>
            <IonCardHeader>
              <IonToolbar>
                <IonTitle>collation AM</IonTitle>
              </IonToolbar>
            </IonCardHeader>
            <IonCardContent>
              <IonGrid>
                <IonRow>
                  <IonItem>
                    <IonLabel>Nom : </IonLabel>
                    <IonInput value="custom"></IonInput>
                  </IonItem>
                </IonRow>
                <IonRow>
                  <IonItem>
                    <IonLabel>Taille de la portion : </IonLabel>
                    <IonInput type="number"></IonInput>
                    <IonLabel>g </IonLabel>
                  </IonItem>
                </IonRow>
                <IonRow>
                  <IonItem>
                    <IonLabel>Quantite de la portion : </IonLabel>
                    <IonInput type="number"></IonInput>
                  </IonItem>
                </IonRow>
                <IonRow>
                  <IonItem>
                    <IonLabel>Quantite de glucide : </IonLabel>
                    <IonInput type="number"></IonInput>
                    <IonLabel>g </IonLabel>
                  </IonItem>
                </IonRow>
                <IonRow>
                  <IonItem>
                    <IonLabel>Quantite de proteine : </IonLabel>
                    <IonInput type="number"></IonInput>
                    <IonLabel>g </IonLabel>
                  </IonItem>
                </IonRow>
                <IonRow>
                  <IonItem>
                    <IonLabel>Quantite de glucide : </IonLabel>
                    <IonInput type="number"></IonInput>
                    <IonLabel>g </IonLabel>
                  </IonItem>
                </IonRow>
              </IonGrid>

              <IonGrid>
                <IonRow>
                  <IonCol> </IonCol>
                  <IonCol>
                    <IonButton fill="solid" color="dark" expand="block">
                      <IonIcon icon={checkmark}></IonIcon>
                    </IonButton>
                  </IonCol>
                  <IonCol> </IonCol>
                </IonRow>
              </IonGrid>
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonPage>
    );
  }
}
