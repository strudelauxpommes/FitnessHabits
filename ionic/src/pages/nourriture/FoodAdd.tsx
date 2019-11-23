import { Component } from "react";
import React from "react";
import { IonApp, IonHeader, IonContent, IonText } from "@ionic/react";
import { FoodHeader } from './FoodHeader';

export default class FoodAdd extends Component {
  render() {
    return (
      <IonApp>
        <IonHeader className="background-black">
          <FoodHeader backLink="/food-summary"></FoodHeader>
        </IonHeader>
        <IonContent></IonContent>
      </IonApp>
    );
  }
}
