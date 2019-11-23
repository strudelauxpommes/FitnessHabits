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

/* Sleep Imports */
import SleepDetail from "./pages/sleep/SleepDetail";
import SleepSummary from "./pages/sleep/SleepSummary";
import { AddSleepLineForm } from "./pages/sleep/AddSleepLineForm";
 
/* Food import */
import FoodSummary from "./pages/nourriture/FoodSummary";
import FoodDailyIntake from "./pages/nourriture/FoodDailyIntake";
import FoodAddDiner from "./pages/nourriture/FoodAddDiner";
import FoodList from './pages/nourriture/FoodList';
import FoodAddDejeuner from "./pages/nourriture/FoodAddDejeuner";
import FoodAddSouper from "./pages/nourriture/FoodAddSouper";
import FoodAddCollationAM from "./pages/nourriture/FoodAddCollationAM";
import FoodAddCollationPM from "./pages/nourriture/FoodAddCollationPM";
import FoodAddCollationSoir from "./pages/nourriture/FoodAddCollationSoir";
        
/* Alcool Imports */
import AlcoolDetail from "./alcool/AlcoolDetail";

/* Theme variable */
import { init } from "./services/i18n/i18n";
import "./theme/sleep.css";
/* Beverage import */
import BeveragesSummary from "./pages/Beverages/BeveragesSummary";
import BeveragesDetail from "./pages/Beverages/BeveragesDetail";
/* Theme variables */
import "./theme/variables.css";
import Dal from './dal/Dal';
import { DalImpl } from './dal/DalImpl';

/* Temporary activeDate global variable */
export const activeDate = moment();

// Init language
init();

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
        <Route path="/food-add-collationAm" component={FoodAddCollationAM} />
        <Route path="/food-add-collationPM" component={FoodAddCollationPM} />
        <Route path="/food-add-collationSoir" component={FoodAddCollationSoir} />
        <Route path="/food-add-diner" component={FoodAddDiner} />
        <Route path="/food-add-dejeuner" component={FoodAddDejeuner} />
        <Route path="/food-add-souper" component={FoodAddSouper} />
        
        <Route path="/food-daily-intake" component={FoodDailyIntake} />
        <Route path="/sleep-summary" component={SleepSummary} />
        <Route path="/sleep-detail" component={SleepDetail} />
        <Route path="/sleep-detail-edit" component={AddSleepLineForm} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
