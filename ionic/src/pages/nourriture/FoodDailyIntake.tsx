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
import FoodService from "src/services/food/FoodService";

export default class FoodDailyIntake extends Component {
  foodService = FoodService();

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
                {this.foodService.foodArrayDeujeuner.map((food, index) => {
                  return (
                    <IonItem lines="none" key={index}>
                      <IonLabel>{food.FoodItem}</IonLabel>
                    </IonItem>
                  );
                })}
                <IonItem lines="full">
                  <IonLabel>
                    <b>Collation AM</b>
                  </IonLabel>
                </IonItem>
                {this.foodService.foodArrayCollationAM.map((food, index) => {
                  return (
                    <IonItem lines="none" key={index}>
                      <IonLabel>{food.FoodItem}</IonLabel>
                    </IonItem>
                  );
                })}
                <IonItem lines="full">
                  <IonLabel>
                    <b>Diner</b>
                  </IonLabel>
                </IonItem>
                {this.foodService.foodArrayDiner.map((food, index) => {
                  return (
                    <IonItem lines="none" key={index}>
                      <IonLabel>{food.FoodItem}</IonLabel>
                    </IonItem>
                  );
                })}
                <IonItem lines="full">
                  <IonLabel>
                    <b>Collation PM</b>
                  </IonLabel>
                </IonItem>
                {this.foodService.foodArrayCollationPM.map((food, index) => {
                  return (
                    <IonItem lines="none" key={index}>
                      <IonLabel>{food.FoodItem}</IonLabel>
                    </IonItem>
                  );
                })}
                <IonItem lines="full">
                  <IonLabel>
                    <b>Souper</b>
                  </IonLabel>
                </IonItem>
                {this.foodService.foodArraySouper.map((food, index) => {
                  return (
                    <IonItem lines="none" key={index}>
                      <IonLabel>{food.FoodItem}</IonLabel>
                    </IonItem>
                  );
                })}
                <IonItem lines="full">
                  <IonLabel>
                    <b>Collation Soir</b>
                  </IonLabel>
                </IonItem>
                {this.foodService.foodArrayCollationSoir.map((food, index) => {
                  return (
                    <IonItem lines="none" key={index}>
                      <IonLabel>{food.FoodItem}</IonLabel>
                    </IonItem>
                  );
                })}
              </IonList>
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonPage>
    );
  }
}
