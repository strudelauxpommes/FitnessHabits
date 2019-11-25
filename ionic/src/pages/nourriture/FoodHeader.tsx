import {
  IonToolbar,
  IonTitle,
  IonIcon,
  IonButtons,
  IonBackButton,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonDatetime
} from "@ionic/react";
import React from "react";

export function FoodHeader(props: {
//   title: React.ReactNode;
  // imageName: any;
  backLink: any;
}) {
  return (
    <IonToolbar>
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonItem lines="none" href={props.backLink}>
              <IonLabel>
                <IonIcon md="md-arrow-back"></IonIcon>
              </IonLabel>
            </IonItem>
          </IonCol>
          <IonCol pull="2">
            <IonItem lines="none">
              <IonLabel>Nutrition</IonLabel>
            </IonItem>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol push="2">
            <IonItem lines="none">
              <IonLabel>
                <IonIcon md="md-arrow-back"></IonIcon>
              </IonLabel>
            </IonItem>
          </IonCol>
          <IonCol pull="0.5">
            <IonItem lines="none">
              <IonLabel>
                <IonDatetime
                  displayFormat="YYYY MM DD"
                  value="1994-23-08"
                ></IonDatetime>
              </IonLabel>
            </IonItem>
          </IonCol>
          <IonCol push="-0.5">
            <IonItem lines="none">
              <IonLabel>
                <IonIcon md="md-arrow-forward"></IonIcon>
              </IonLabel>
            </IonItem>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonToolbar>
  );
}
