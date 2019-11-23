import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import BeveragesSummary from './pages/Beverages/BeveragesSummary';
import BeveragesDetail from './pages/Beverages/BeveragesDetail';
import moment from 'moment';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
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

/* Temporary activeDate global variable */
export const activeDate = moment();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/home" component={Home} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route path="/beverages-summary" component={BeveragesSummary}/>
        <Route path="/beverages-detail" component={BeveragesDetail}/>
        <Route path="/sleep-summary" component={SleepSummary}/>
        <Route path="/sleep-detail" component={SleepDetail}/>
        <Route path="/sleep-detail-edit" component={AddSleepLineForm}/>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
