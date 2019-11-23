import {
  IonTitle,
  IonRow,
  IonIcon,
  IonCard,
  IonGrid,
  IonCardContent,
  IonCardHeader
} from "@ionic/react";
import { wine } from "ionicons/icons";
import React from "react";
import "./Style/AlcoolSommaire.scss";
import "./Style/Alcool.scss";
import SummaryCardItem from "./Components/SummaryCardItem";
import SummaryOtherAlcoolItem from "./Components/SummaryOtherAlcoolItem";

export default class AlcoolSommaire extends React.Component {
  constructor(props) {
    super(props);
    this.addAlcool = this.addAlcool.bind(this);
    this.state = this.initializeState();
  }

  initializeState() {
    return {
      Alcools: {
        Whisky: {
          name: "Whisky",
          quantity: 2,
          volume: "44 ml"
        },
        "Vin Blanc": {
          name: "Vin Blanc",
          quantity: 1,
          volume: "150 ml"
        },
        Bière: {
          name: "Bière",
          quantity: 2,
          volume: "344 ml"
        }
      }
    };
  }

  addAlcool(name) {
    if (name && this.state && this.state.Alcools[`${name}`]) {
      let newQt = this.state.Alcools[`${name}`].quantity + 1;
      let newStateObject = this.state;

      console.log(newStateObject.Alcools[`${name}`]);
      newStateObject.Alcools[`${name}`].quantity = newQt;
      this.setState(newStateObject);
    }
  }

  getSummaryCardList() {
    let list = [];
    console.log(this.state.Alcools);
    for (var key in this.state.Alcools) {
      list.push(
        <SummaryCardItem
          name={this.state.Alcools[key].name}
          quantity={this.state.Alcools[key].quantity}
          volume={this.state.Alcools[key].volume}
          addAlcool={this.addAlcool}
        />
      );
    }
    return list;
  }
  render() {
    return (
      <IonCard>
        <IonCardHeader color="alcool">
          <IonRow>
            <IonIcon item-center icon={wine} className="summary__wine-icon" />
            <IonTitle>Alcool</IonTitle>
          </IonRow>
        </IonCardHeader>
        <IonRow>
          {this.getSummaryCardList()}
          <SummaryOtherAlcoolItem />
        </IonRow>

        <IonCardContent>
          <IonGrid>
            <IonRow></IonRow>
          </IonGrid>
        </IonCardContent>
      </IonCard>
    );
  }
}
