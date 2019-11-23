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
import moment from "moment";
import { default as React } from "react";
import { Redirect, Route } from "react-router-dom";
import Home from "./pages/Home";
import FoodAdd from "./pages/nourriture/FoodAdd";
import FoodDailyIntake from "./pages/nourriture/FoodDailyIntake";
import FoodList from "./pages/nourriture/FoodList";
/* Food import */
import FoodSummary from "./pages/nourriture/FoodSummary";
import { init } from "./services/i18n/i18n";
import "./theme/sleep.css";
/* Beverage import */
import BeveragesSummary from "./pages/Beverages/BeveragesSummary";
import BeveragesDetail from "./pages/Beverages/BeveragesDetail";
/* Theme variables */
import "./theme/variables.css";
import Dal from './dal/Dal';
import { DalImpl } from './dal/DalImpl';
import Parameters from './pages/parameters/Parameters'


// Init language
init();

import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/sleep.css';
/* Sleep Imports */
import SleepDetail from './pages/sleep/SleepDetail';
import SleepSummary from './pages/sleep/SleepSummary';
import { AddSleepLineForm } from './pages/sleep/AddSleepLineForm';
import './services/parameters/InitializeParameters.js'

/* Temporary activeDate global variable */
export const activeDate = moment();
const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/beverages-summary" component={BeveragesSummary} />
        <Route path="/beverages-detail" component={BeveragesDetail} />
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
        <Route path="/parameters" component={Parameters} exact={true}/>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
