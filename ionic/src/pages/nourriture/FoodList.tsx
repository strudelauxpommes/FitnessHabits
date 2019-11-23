import { Component } from "react";
import React from "react";
import {
  IonHeader,
  IonContent,
  IonPage,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonGrid,
  IonList,
  IonItem,
  IonLabel,
  IonRow,
  IonCol,
  IonButton,
  IonIcon
} from "@ionic/react";
import { FoodHeader } from "./FoodHeader";
import { add } from "ionicons/icons";

export default class FoodList extends Component {
  render() {
    return (
      <IonPage>
        <IonHeader className="background-black">
          <FoodHeader backLink="/food-summary"></FoodHeader>
        </IonHeader>
        <IonContent>
          <IonCard>
            <IonCardHeader></IonCardHeader>
            <IonCardContent>
              <IonList>
                <IonItem>
                  <IonLabel>Pokémon Yellow</IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>Mega Man X</IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>The Legend of Zelda</IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>Pac-Man</IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>Super Mario World</IonLabel>
                </IonItem>
              </IonList>

              <IonGrid>
                <IonRow>
                  <IonCol> </IonCol>
                  <IonCol push="-0.5">
                    <IonButton size="default" expand="block" href="/food-add/">
                      <IonIcon size="large" icon={add}></IonIcon>
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
