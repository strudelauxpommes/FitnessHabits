import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
import "@ionic/react/css/display.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/float-elements.css";
/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/typography.css";
import T from "i18n-react";
import moment from "moment";
import React from "react";
import { Redirect, Route } from "react-router-dom";
import Dal from "./dal/Dal";
import { DalImpl } from "./dal/DalImpl";
import Home from "./pages/Home";
import { AddSleepLineForm } from "./pages/sleep/AddSleepLineForm";
/* Sleep Imports */
import SleepDetail from "./pages/sleep/SleepDetail";
import SleepSummary from "./pages/sleep/SleepSummary";
import "./theme/sleep.css";
/* Theme variables */
import "./theme/variables.css";

/* Alcool Imports */
import AlcoolDetail from "./alcool/AlcoolDetail";

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
        <Route path="/sleep-summary" component={SleepSummary} />
        <Route path="/sleep-detail" component={SleepDetail} />
        <Route path="/sleep-detail-edit" component={AddSleepLineForm} />
        <Route path="/alcoolDetail" component={AlcoolDetail} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
