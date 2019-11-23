import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

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
/* Parameters import */
import Parameters from './pages/parameters/Parameters';
import Preference from './pages/parameters/Preference';
import Profil from './pages/parameters/Profil';
/* Theme variables */
import "./theme/variables.css";
import Dal from './dal/Dal';
import { DalImpl } from './dal/DalImpl';

import SleepDetail from './pages/sleep/SleepDetail';
import SleepSummary from './pages/sleep/SleepSummary';
import { AddSleepLineForm } from './pages/sleep/AddSleepLineForm';
import './services/parameters/InitializeParameters.js';
import moment from 'moment';
import React from 'react';
import { Route, Redirect } from 'react-router';
import Home from './pages/Home';


// Init language
init();

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
        <Route path="/parameters" component={Parameters} exact={true} />
        <Route path="/preference" component={Preference} exact={true} />
        <Route path="/profil" component={Profil} exact={true} />
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
        <Route path="/sleep-summary" component={SleepSummary}/>
        <Route path="/sleep-detail" component={SleepDetail}/>
        <Route path="/sleep-detail-edit" component={AddSleepLineForm}/>
        <Route path="/parameters" component={Parameters} exact={true} />
        <Route path="/preference" component={Preference} exact={true} />
        <Route path="/profil" component={Profil} exact={true} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
