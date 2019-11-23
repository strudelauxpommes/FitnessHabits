import { Component } from "react";
import React from "react";
import {
  IonHeader,
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonCard,
  IonCardContent,
  IonIcon,
  IonCardHeader
} from "@ionic/react";
import { FoodHeader } from "./FoodHeader";

export default class FoodDailyIntake extends Component {
  render() {
    return (
      <IonPage>
        <IonHeader className="background-black">
          <FoodHeader backLink="/food-summary"></FoodHeader>
        </IonHeader>
        <IonContent>
          <IonCard>
          <IonCardHeader>Food Daily Intake</IonCardHeader>
            <IonCardContent>
              <IonList>
                <IonItem lines="full">
                  <IonLabel>
                    <b>Dejeuner</b>
                  </IonLabel>
                </IonItem>
                <IonItem lines="none">
                  <IonLabel>Item</IonLabel>
                </IonItem>
                <IonItem lines="none">
                  <IonLabel>Item</IonLabel>
                </IonItem>
                <IonItem lines="full">
                  <IonLabel>
                    <b>Collation AM</b>
                  </IonLabel>
                </IonItem>
                <IonItem lines="none">
                  <IonLabel>Item</IonLabel>
                </IonItem>
                <IonItem lines="full">
                  <IonLabel>
                    <b>Diner</b>
                  </IonLabel>
                </IonItem>
                <IonItem lines="none">
                  <IonLabel>Item</IonLabel>
                </IonItem>
                <IonItem lines="full">
                  <IonLabel>
                    <b>Collation PM</b>
                  </IonLabel>
                </IonItem>
                <IonItem lines="none">
                  <IonLabel>Item</IonLabel>
                </IonItem>
                <IonItem lines="full">
                  <IonLabel>
                    <b>Souper</b>
                  </IonLabel>
                </IonItem>
                <IonItem lines="none">
                  <IonLabel>Item</IonLabel>
                </IonItem>
                <IonItem lines="full">
                  <IonLabel>
                    <b>Collation Soir</b>
                  </IonLabel>
                </IonItem>
                <IonItem lines="none">
                  <IonLabel>Item</IonLabel>
                </IonItem>
              </IonList>
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonPage>
    );
  }
}
