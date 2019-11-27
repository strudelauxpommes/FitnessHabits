import { IonAvatar, IonContent, IonHeader, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import T from "i18n-react";
import React, { Component } from "react";
import { RouteComponentProps } from "react-router";
import Calendrier from ".././calandrier/calandrier";
import Alcool from "../alcool/AlcoolSommaire";
import Poids from "../entities/poids/Poids";
import FoodHome from "./nourriture/FoodHome";
import BeveragesSummary from "./Beverages/BeveragesSummary";
import SleepSummary from "./sleep/SleepSummary";
import ActivitiesSummary from "../components/ActivitiesSummary";
import Tabs from "./tabs";


type State = {
  T: any;
};
class Home extends Component<RouteComponentProps, State> {
  constructor(props: RouteComponentProps) {
    super(props);


    this.state = {
      T: null
    };
  }

  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>{T.translate("app.title")}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent slot="top">
          <IonItem color="primary">
            <IonAvatar slot="start">
              <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=retro&f=y%22" />
            </IonAvatar>
            <IonLabel>
              <h1>Username</h1>
            </IonLabel>
            {/* <IonButton color="light" slot="end">
              <IonIcon slot="start" icon={calendar} />
              11 Novembre 2019
            </IonButton> */}
            <Calendrier />
          </IonItem>

          <div>
            <br />
          </div>
          <div className="activite-summary-home">
            <ActivitiesSummary/>
          </div>
          <SleepSummary activeDate={new Date("2019-10-31T21:00:00-05:00")} />
          <Alcool activeDate={new Date("2019-10-31T21:00:00-05:00")} />
          <Poids />
          <FoodHome />
          <BeveragesSummary
            activeDate={new Date("2019-10-31T21:00:00-05:00")}
          />
        </IonContent>

        <Tabs />
      </IonPage>
      /** 
      <IonTabs>
        
      </IonTabs>
      */
    );
  }
}

export default Home;
