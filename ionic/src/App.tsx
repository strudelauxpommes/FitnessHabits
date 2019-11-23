import React from "react";
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";
import moment from "moment";
import T from "i18n-react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import "./theme/sleep.css";

/* Sleep Imports */
import SleepDetail from "./pages/sleep/SleepDetail";
import SleepSummary from "./pages/sleep/SleepSummary";
import { AddSleepLineForm } from "./pages/sleep/AddSleepLineForm";
 
/* Food import */
import FoodSummary from "./pages/nourriture/FoodSummary";
import FoodDailyIntake from "./pages/nourriture/FoodDailyIntake";
import FoodAdd from "./pages/nourriture/FoodAdd";
import FoodList from './pages/nourriture/FoodList';
        
/* Alcool Imports */
import AlcoolDetail from "./alcool/AlcoolDetail";

/* Theme variable */
import "./theme/variables.css";

/* Temporary activeDate global variable */
export const activeDate = moment();

function init(): void {
  const dal: Dal = new DalImpl();

  dal
    .getItems("preferences/langue", new Date("2019-01-16"), new Date())
    .then(lang => {
      if (!lang || !lang[0] || !lang[0].value) {
        T.setTexts(require("./i18n/fr.json"));
      } else if (lang[0].value == "fr") {
        T.setTexts(require("./i18n/fr.json"));
      } else if (lang[0].value == "es") {
        T.setTexts(require("./i18n/es.json"));
      } else if (lang[0].value == "en") {
        T.setTexts(require("./i18n/en.json"));
      } else {
        T.setTexts(require("./i18n/fr.json"));
      }
    });
}

init();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/home" component={Home} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route path="/food-summary" component={FoodSummary} />
        <Route path="/food-list/:period" component={FoodList} />
        <Route
          exact
          path="/food"
          render={() => <Redirect to="/food-summary" />}
        />
        <Route path="/food-daily-intake" component={FoodDailyIntake} />
        <Route path="/food-add" component={FoodAdd} />
        <Route path="/sleep-summary" component={SleepSummary} />
        <Route path="/sleep-detail" component={SleepDetail} />
        <Route path="/sleep-detail-edit" component={AddSleepLineForm} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
