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
  IonTitle,
  IonList
} from "@ionic/react";
import { FoodHeader } from "./FoodHeader";
import { FoodHome } from './FoodHome';
import FoodService from "src/services/food/FoodService";


export default class FoodSummary extends Component {
  foodService = FoodService();

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


              <IonList>
                <IonItem lines="full" href="/food-add-dejeuner">
                  <IonLabel>
                    <b>Dejeuner</b>
                  </IonLabel>
                  <IonIcon md="md-arrow-forward"></IonIcon>
                </IonItem>
                {this.foodService.foodArrayDeujeuner.map((food, index) => {
                  return (
                    <IonItem lines="none" key={index}>
                      <IonLabel>{food.FoodItem}</IonLabel>
                    </IonItem>
                  );
                })}
                <IonItem lines="full" href="/food-add-collationAM">
                  <IonLabel>
                    <b>Collation AM</b>
                  </IonLabel>
                  <IonIcon md="md-arrow-forward"></IonIcon>
                </IonItem>
                {this.foodService.foodArrayCollationAM.map((food, index) => {
                  return (
                    <IonItem lines="none" key={index}>
                      <IonLabel>{food.FoodItem}</IonLabel>
                    </IonItem>
                  );
                })}
                <IonItem lines="full" href="/food-add-diner">
                  <IonLabel>
                    <b>Diner</b>
                  </IonLabel>
                  <IonIcon md="md-arrow-forward"></IonIcon>
                </IonItem>
                {this.foodService.foodArrayDiner.map((food, index) => {
                  return (
                    <IonItem lines="none" key={index}>
                      <IonLabel>{food.FoodItem}</IonLabel>
                    </IonItem>
                  );
                })}
                <IonItem lines="full" href="/food-add-collationPM">
                  <IonLabel>
                    <b>Collation PM</b>
                  </IonLabel>
                  <IonIcon md="md-arrow-forward"></IonIcon>
                </IonItem>
                {this.foodService.foodArrayCollationPM.map((food, index) => {
                  return (
                    <IonItem lines="none" key={index}>
                      <IonLabel>{food.FoodItem}</IonLabel>
                    </IonItem>
                  );
                })}
                <IonItem lines="full" href="/food-add-souper">
                  <IonLabel>
                    <b>Souper</b>
                  </IonLabel>
                  <IonIcon md="md-arrow-forward"></IonIcon>
                </IonItem>
                {this.foodService.foodArraySouper.map((food, index) => {
                  return (
                    <IonItem lines="none" key={index}>
                      <IonLabel>{food.FoodItem}</IonLabel>
                    </IonItem>
                  );
                })}
                <IonItem lines="full" href="/food-add-collationSoir">
                  <IonLabel>
                    <b>Collation Soir</b>
                  </IonLabel>
                  <IonIcon md="md-arrow-forward"></IonIcon>
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
