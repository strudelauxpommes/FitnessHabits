import { Component } from "react";
import React from "react";
import {
  IonHeader,
  IonContent,
  IonText,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonCard,
  IonCardContent
} from "@ionic/react";

export default class FoodDailyIntake extends Component {
  render() {
    return (
      <IonPage>
        <IonContent>
          <IonCard>
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
