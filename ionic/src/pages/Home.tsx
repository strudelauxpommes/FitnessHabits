import { IonAvatar, IonButton, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTitle, IonToolbar } from '@ionic/react';
import T from 'i18n-react';
import { calendar, download, home, redo, settings, trash } from 'ionicons/icons';
import React from 'react';
import { Redirect, Route } from 'react-router';
import Export from './export';
import Import from './import';
import Supression from './purge';

//interface MainTabsProps { }

//const MainTabs: React.FC<MainTabsProps> = () => {

var fr_dictionary = require('../i18n/fr.json');
T.setTexts(fr_dictionary);

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonRouterOutlet>
        <Redirect exact path="/tabs" to="/tabs/home" />
        <Route path="/tabs/export" render={() => <Export />} exact={true} />
        <Route path="/tabs/import" render={() => <Import />} exact={true} />
        <Route path="/tabs/purge" render={() => <Supression />} exact={true} />
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

        <div><br /></div>

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
};

export default Home;