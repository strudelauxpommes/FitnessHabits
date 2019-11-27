import { Component } from "react";
import React from "react";
import {
  IonHeader,
  IonPage,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonInput,
  IonText,
  IonCard,

} from "@ionic/react";
import { FoodHeader } from "./FoodHeader";
import { Pie } from "react-chartjs-2";
// import { Ionicons } from '@expo/vector-icons';
let state = {
  dataPie: {
    labels: ["Glucide", "Proteine", "Fibre", "Lipide"],
    datasets: [
      {
        data: [21, 60, 34, 60],
        backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1"],
        hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5"]
      }
    ]
  }
};

export default class FoodDetail extends Component {
  render() {
    return (
      <IonPage>
        <IonHeader className="background-black">
          <FoodHeader backLink="/food-list/:period"></FoodHeader>
        </IonHeader>

        <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
              <Pie data={state.dataPie} options={{ responsive: true }} />
          </IonRow>
 
        </IonGrid>

        <IonGrid>
          <IonRow>
            <IonCol>
              <IonRow>
                <IonInput value="19 %" disabled></IonInput>
              </IonRow>
              <IonRow>
                <IonInput value="21" disabled></IonInput>
              </IonRow>
              <IonRow>
                <IonText> Glucide </IonText>
              </IonRow>
            </IonCol>
            <IonCol>
              <IonRow>
                <IonInput value="34 %" disabled></IonInput>
              </IonRow>
              <IonRow>
                <IonInput value="60" disabled></IonInput>
              </IonRow>
              <IonRow>
                <IonText> Proteine </IonText>
              </IonRow>
            </IonCol>
            <IonCol>
              <IonRow>
                <IonInput value="19 %" disabled></IonInput>
              </IonRow>
              <IonRow>
                <IonInput value="34" disabled></IonInput>
              </IonRow>
              <IonRow>
                <IonText> Fibre </IonText>
              </IonRow>
            </IonCol>
            <IonCol>
              <IonRow>
                <IonInput value="34 %" disabled></IonInput>
              </IonRow>
              <IonRow>
                <IonInput value="60" disabled></IonInput>
              </IonRow>
              <IonRow>
                <IonText> Lipide </IonText>
              </IonRow>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      </IonPage>
    );
  }
}
