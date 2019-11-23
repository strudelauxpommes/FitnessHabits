import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/float-elements.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/typography.css';
import moment from 'moment';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Home from './pages/Home';
import { AddSleepLineForm } from './pages/sleep/AddSleepLineForm';
/* Sleep Imports */
import SleepDetail from './pages/sleep/SleepDetail';
import './theme/sleep.css';
/* Theme variables */
import './theme/variables.css';

/* Temporary activeDate global variable */
export const activeDate = moment();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/home" component={Home} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route path="/sleep-detail" component={SleepDetail} />
        <Route path="/sleep-detail-edit" component={AddSleepLineForm} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
