import {
  IonGrid,
  IonRow,
  IonCol,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonButton,
  IonCardContent,
  IonInput,
  IonText,
  IonIcon
} from "@ionic/react";
import React from "react";
import { pizza } from "ionicons/icons";

export function FoodHome(props: {
  //   title: React.ReactNode;
  // imageName: any;
  // backLink: any;
}) {
  return (
    <IonCard button={true}>
      <IonCardHeader>
        <IonCardTitle>
          <IonGrid>
            <IonButton color="success" expand="full">
              <IonCol pull="1">
                <IonIcon icon={pizza} size="large"></IonIcon>
              </IonCol>
              <IonCol pull="3">Nourriture</IonCol>
            </IonButton>
          </IonGrid>
        </IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonInput value="43" disabled></IonInput>
            </IonCol>
            <IonCol>
              <IonInput value="43" disabled></IonInput>
            </IonCol>
            <IonCol>
              <IonInput value="43" disabled></IonInput>
            </IonCol>
            <IonCol>
              <IonInput value="43" disabled></IonInput>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonText> Proteine </IonText>
            </IonCol>
            <IonCol>
              <IonRow>Lipide</IonRow>
            </IonCol>
            <IonCol>
              <IonRow>Glucide</IonRow>
            </IonCol>
            <IonCol>
              <IonRow>Fibre</IonRow>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <img src="https://img.icons8.com/cotton/64/000000/steak-rare--v1.png"></img>
            </IonCol>
            <IonCol>
              <img src="https://img.icons8.com/emoji/64/000000/butter-emoji.png"></img>
            </IonCol>
            <IonCol>
              <img src="https://img.icons8.com/cute-clipart/64/000000/halloween-candy.png"></img>
            </IonCol>
            <IonCol>
              <img src="https://img.icons8.com/doodle/48/000000/wheat--v5.png"></img>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
  );
}

export default FoodHome;
