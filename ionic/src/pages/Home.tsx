import {
  IonAvatar,
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
  IonTabBar,
  IonTabButton,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import T from "i18n-react";
import {
  calendar,
  download,
  home,
  redo,
  settings,
  trash
} from "ionicons/icons";
import { Component, default as React } from "react";
import { RouteComponentProps } from "react-router";
import { SleepCollection } from "src/entities/sleep/sleep";
import SleepService from "../services/sleep/SleepService";
import SleepSummary from "./sleep/SleepSummary";
import Alcool from "../alcool/AlcoolSommaire";
import FoodHome from "./nourriture/FoodHome";
import BeveragesSummary from "./Beverages/BeveragesSummary";

//const MainTabs: React.FC<MainTabsProps> = () => {

const sleepService = SleepService();

type State = {
  sleepCollection: SleepCollection;
  T: any;
};
class Home extends Component<RouteComponentProps, State> {
  constructor(props: RouteComponentProps) {
    super(props);

    const sleepCollection = sleepService.fetch();

    this.state = {
      sleepCollection: sleepCollection,
      T: null
    };
  }

  render() {
    const { sleepCollection } = this.state;

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
            <IonButton color="light" slot="end">
              <IonIcon slot="start" icon={calendar} />
              11 Novembre 2019
            </IonButton>
          </IonItem>

          <div>
            <br />
          </div>

          <SleepSummary activeDate={new Date("2019-10-31T21:00:00-05:00")} />
          <Alcool activeDate={new Date("2019-10-31T21:00:00-05:00")} />
          <FoodHome />
          <BeveragesSummary
            activeDate={new Date("2019-10-31T21:00:00-05:00")}
          />
        </IonContent>

        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={home} />
            <IonLabel></IonLabel>
          </IonTabButton>
          <IonTabButton tab="export" href="/">
            <IonIcon icon={redo} />
            <IonLabel></IonLabel>
          </IonTabButton>
          <IonTabButton tab="import" href="/">
            <IonIcon icon={download} />
            <IonLabel></IonLabel>
          </IonTabButton>
          <IonTabButton tab="delete" href="/">
            <IonIcon icon={trash} />
            <IonLabel></IonLabel>
          </IonTabButton>
          <IonTabButton tab="settings" href="/">
            <IonIcon icon={settings} />
            <IonLabel></IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonPage>
      /** 
      <IonTabs>
        
      </IonTabs>
      */
    );
  }
}

export default Home;
