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
  trash,
  add
} from "ionicons/icons";
import { Component, default as React } from "react";
import { RouteComponentProps, Redirect, Route } from "react-router";
import { SleepCollection } from "src/entities/sleep/sleep";
import SleepSummary from "./sleep/SleepSummary";
import Export from './export';
import Import from './import';
import Alcool from "../alcool/AlcoolSommaire";
import SleepService from "../services/sleep/SleepService";
import FoodSummary from "./nourriture/FoodSummary";
import FoodHome from "./nourriture/FoodHome";
import BeveragesSummary from "./Beverages/BeveragesSummary";
import SleepSummary from "./sleep/SleepSummary";
import Poids from "../entities/poids/Poids";
import Tabs from "./tabs";

const sleepService = SleepService();

type State = {
  sleepCollection: SleepCollection;
  T: any;
};
class Home extends Component<RouteComponentProps, State> {
  constructor(props: RouteComponentProps) {
    super(props);

    const sleepCollection = sleepService.fetch();

var fr_dictionary = require('../i18n/fr.json');
T.setTexts(fr_dictionary);

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonRouterOutlet>
        <Redirect exact path="/tabs" to="/tabs/home" />
        <Route path="/tabs/export" render={() => <Export />} exact={true} />
        <Route path="/tabs/import" render={() => <Import />} exact={true} />
      </IonRouterOutlet>

      <IonHeader>
        <IonToolbar>
          <IonTitle>
           {T.translate("app.title")}
          </IonTitle>
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