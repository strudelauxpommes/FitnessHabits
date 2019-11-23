import { Component } from "react";
import React from "react";
import {
  IonApp,
  IonHeader,
  IonContent,
  IonText,
  IonPage,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonDatetime,
  IonInput,
  IonButtons,
  IonButton,
  IonIcon,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonTitle
} from "@ionic/react";
import { FoodHeader } from "./FoodHeader";
import { FoodHome } from './FoodHome'


export default class FoodSummary extends Component {
  render() {
    return (
      <IonPage>
        <IonHeader className="background-black">
          <FoodHeader backLink="/"></FoodHeader>
        </IonHeader>

        <IonContent className="ion-padding">
          <IonCard>
            <IonCardHeader>
            <IonTitle>Sommaire</IonTitle>
            </IonCardHeader>

            <IonCardContent>
              <IonGrid class="gridBorder">
                <IonRow>
                  <IonCol>
                    <IonRow>
                      <IonInput value="43" disabled></IonInput>
                    </IonRow>
                    <IonRow>
                      <IonText> Proteine </IonText>
                    </IonRow>
                  </IonCol>
                  <IonCol>
                    <IonRow>
                      <IonInput value="43" disabled></IonInput>
                    </IonRow>
                    <IonRow>Lipide</IonRow>
                  </IonCol>
                  <IonCol>
                    <IonRow>
                      <IonInput value="43" disabled></IonInput>
                    </IonRow>
                    <IonRow>Glucide</IonRow>
                  </IonCol>
                  <IonCol>
                    <IonRow>
                      <IonInput value="43" disabled></IonInput>
                    </IonRow>
                    <IonRow>Fibre</IonRow>
                  </IonCol>
                </IonRow>
              </IonGrid>

              <IonItem href="/food-list/dejeuner">
                <IonLabel>Dejeuner</IonLabel>
                <IonIcon md="md-arrow-forward"></IonIcon>
              </IonItem>
              <IonItem href="/food-list/collation_am">
                <IonLabel>Collation AM</IonLabel>
                <IonIcon md="md-arrow-forward"></IonIcon>
              </IonItem>
              <IonItem href="/food-list/diner">
                <IonLabel>Diner</IonLabel>
                <IonIcon md="md-arrow-forward"></IonIcon>
              </IonItem>
              <IonItem href="/food-list/collaton_pm">
                <IonLabel>Collation PM</IonLabel>
                <IonIcon md="md-arrow-forward"></IonIcon>
              </IonItem>
              <IonItem href="/food-list/souper">
                <IonLabel>Souper</IonLabel>
                <IonIcon md="md-arrow-forward"></IonIcon>
              </IonItem>
              <IonItem href="/food-list/collation_soir">
                <IonLabel>Collation Soir</IonLabel>
                <IonIcon md="md-arrow-forward"></IonIcon>
              </IonItem>

              <IonGrid>
                <IonRow>
                  <IonCol pull="-1.5">
                    <IonToolbar>
                      <IonButtons slot="start">
                        <IonButton
                          href="/food-daily-intake"
                          expand="block"
                          color="dark"
                          fill="solid"
                        >
                          Bilan de la journee
                        </IonButton>
                      </IonButtons>
                    </IonToolbar>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonPage>
    );
  }
}
