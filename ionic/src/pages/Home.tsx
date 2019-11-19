import React  from 'react';
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel, IonMenu, IonHeader, IonToolbar, IonTitle,
  IonContent, IonList, IonItem
} from '@ionic/react';
import { Route, Redirect } from 'react-router';
import { add, trash, download, settings, arrowRoundForward } from 'ionicons/icons';

import Export from './export';
import Import from './import';
import Supression from './purge';

interface MainTabsProps { }

const MainTabs: React.FC<MainTabsProps> = () => {

  return (
    <IonTabs>
      <IonRouterOutlet>
        <Redirect exact path="/tabs" to="/tabs/home" />
        <Route path="/tabs/export" render={() => <Export />} exact={true} />
        <Route path="/tabs/import" render={() => <Import />} exact={true} />
        <Route path="/tabs/purge" render={() => <Supression />} exact={true} />   
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="ajoutDonnees" href="/tabs/addData">
          <IonIcon icon={add} />
          <IonLabel></IonLabel>
        </IonTabButton>
        <IonTabButton tab="purge" href="/tabs/purge">
          <IonIcon icon={trash} />
          <IonLabel></IonLabel>
        </IonTabButton>
        <IonTabButton tab="export" href="/tabs/export">
          <IonIcon icon={arrowRoundForward} />
          <IonLabel></IonLabel>
        </IonTabButton>
        <IonTabButton tab="import" href="/tabs/import">
          <IonIcon icon={download} />
          <IonLabel></IonLabel>
        </IonTabButton>
        <IonTabButton tab="settings" href="/tabs/settings">
          <IonIcon icon={settings} />
          <IonLabel></IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
    
  );
};

export default MainTabs;