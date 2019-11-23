import { Component } from "react";
import React from "react";
import {
  IonHeader,
  IonContent,
  IonPage,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonTitle,
  IonItem,
  IonLabel,
  IonInput,
  IonCardHeader,
  IonCard,
  IonCardContent,
  IonIcon,
  IonButton
} from "@ionic/react";
import { checkmark } from "ionicons/icons";
import { FoodHeader } from "./FoodHeader";

type Props = {
  activeDate: Date;
};

type State = {
  glucide: string;
  proteine: string;
  nom: string;
  quantitePortion: string;
  taillePortion: string;
  fat: string;
  fibre: string;
};

export default class FoodAdd extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      glucide: "0",
      proteine: "0",
      nom: "",
      quantitePortion: "0",
      taillePortion: "0",
      fat: "0",
      fibre: "0"
    };
  }

  handleNameChange(e: any) {
    this.setState({ nom: e.target.value });
  }

  handleTaillePortionChange(e: any) {
    this.setState({ taillePortion: e.target.value });
  }

  handleQuantitePortionChange(e: any) {
    this.setState({ quantitePortion: e.target.value });
  }

  handleGlucideChange(e: any) {
    this.setState({ glucide: e.target.value });
  }

  handleProteineChange(e: any) {
    this.setState({ proteine: e.target.value });
  }

  handleFibreChange(e: any) {
    this.setState({ fibre: e.target.value });
  }

  handleFatChange(e: any) {
    this.setState({ fat: e.target.value });
  }

  render() {
    return (
      <IonPage>
        <IonHeader className="background-black">
          <FoodHeader backLink="/food-list/:period"></FoodHeader>
        </IonHeader>

        <IonContent className="ion-padding">
          <IonCard>
            <IonCardHeader>
              <IonToolbar>
                <IonTitle>collaton AM</IonTitle>
              </IonToolbar>
            </IonCardHeader>
            <IonCardContent>
              <IonGrid>
                <IonRow>
                  <IonItem>
                    <IonLabel>Nom : </IonLabel>
                    <IonInput
                      onIonChange={e => this.handleNameChange(e)}
                      // onIonFocus={e => this.onWakeUpCountFocus(e)}
                      value={this.state.nom}
                    ></IonInput>
                  </IonItem>
                </IonRow>
                <IonRow>
                  <IonItem>
                    <IonLabel>Taille de la portion : </IonLabel>
                    <IonInput
                      onIonChange={e => this.handleTaillePortionChange(e)}
                      // onIonFocus={e => this.onWakeUpCountFocus(e)}
                      inputmode="numeric"
                      maxlength={4}
                      value={this.state.taillePortion}
                    ></IonInput>
                    <IonLabel>g </IonLabel>
                  </IonItem>
                </IonRow>
                <IonRow>
                  <IonItem>
                    <IonLabel>Quantite de la portion : </IonLabel>
                    <IonInput
                      onIonChange={e => this.handleQuantitePortionChange(e)}
                      // onIonFocus={e => this.onWakeUpCountFocus(e)}
                      inputmode="numeric"
                      maxlength={4}
                      value={this.state.quantitePortion}
                    ></IonInput>
                  </IonItem>
                </IonRow>
                <IonRow>
                  <IonItem>
                    <IonLabel>Quantite de glucide : </IonLabel>
                    <IonInput
                      onIonChange={e => this.handleGlucideChange(e)}
                      // onIonFocus={e => this.onWakeUpCountFocus(e)}
                      inputmode="numeric"
                      maxlength={4}
                      value={this.state.glucide}
                    ></IonInput>
                    <IonLabel>g </IonLabel>
                  </IonItem>
                </IonRow>
                <IonRow>
                  <IonItem>
                    <IonLabel>Quantite de proteine : </IonLabel>
                    <IonInput
                      onIonChange={e => this.handleProteineChange(e)}
                      // onIonFocus={e => this.onWakeUpCountFocus(e)}
                      inputmode="numeric"
                      maxlength={4}
                      value={this.state.proteine}
                    ></IonInput>
                    <IonLabel>g </IonLabel>
                  </IonItem>
                </IonRow>
                <IonRow>
                  <IonItem>
                    <IonLabel>Quantite de fat : </IonLabel>
                    <IonInput
                      onIonChange={e => this.handleFatChange(e)}
                      // onIonFocus={e => this.onWakeUpCountFocus(e)}
                      inputmode="numeric"
                      maxlength={4}
                      value={this.state.fat}
                    ></IonInput>
                    <IonLabel>g </IonLabel>
                  </IonItem>
                </IonRow>
                <IonRow>
                  <IonItem>
                    <IonLabel>Quantite de fibre : </IonLabel>
                    <IonInput
                      onIonChange={e => this.handleFibreChange(e)}
                      // onIonFocus={e => this.onWakeUpCountFocus(e)}
                      inputmode="numeric"
                      maxlength={4}
                      value={this.state.fibre}
                    ></IonInput>
                    <IonLabel>g </IonLabel>
                  </IonItem>
                </IonRow>
              </IonGrid>

              <IonGrid>
                <IonRow>
                  <IonCol> </IonCol>
                  <IonCol>
                    <IonButton fill="solid" color="dark" expand="block">
                      <IonIcon icon={checkmark}></IonIcon>
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
