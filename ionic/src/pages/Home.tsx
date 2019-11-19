import React  from 'react';
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel, IonMenu, IonHeader, IonToolbar, IonTitle,
  IonContent, IonList, IonItem, IonPage, IonAvatar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton
} from '@ionic/react';
import { Route, Redirect } from 'react-router';
import { add, trash, download, settings, arrowRoundForward, calendar } from 'ionicons/icons';

import Export from './export';
import Import from './import';
import Supression from './purge';

//interface MainTabsProps { }

//const MainTabs: React.FC<MainTabsProps> = () => {

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
            Fitness Habits
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent slot="top">
        <IonItem>
          <IonAvatar slot="end">
            <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=retro&f=y%22" />
          </IonAvatar>
          <IonLabel>
            <h1>Username</h1>
              <IonButton>
              <IonIcon icon={calendar} /> <h2> 11 Novembre 2019</h2>
              </IonButton>
          </IonLabel>
        </IonItem>

        <div><br /></div>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Activités</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Keep close to Nature's heart... and break clear away, once in awhile, and
            climb a mountain or spend a week in the woods. Wash your spirit clean.
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Suppléments</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Keep close to Nature's heart... and break clear away, once in awhile, and
            climb a mountain or spend a week in the woods. Wash your spirit clean.
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Sommeil</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Keep close to Nature's heart... and break clear away, once in awhile, and
            climb a mountain or spend a week in the woods. Wash your spirit clean.
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Poids</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Keep close to Nature's heart... and break clear away, once in awhile, and
            climb a mountain or spend a week in the woods. Wash your spirit clean.
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Nourriture</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Keep close to Nature's heart... and break clear away, once in awhile, and
            climb a mountain or spend a week in the woods. Wash your spirit clean.
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Breuvage</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Keep close to Nature's heart... and break clear away, once in awhile, and
            climb a mountain or spend a week in the woods. Wash your spirit clean.
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Alcool</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Keep close to Nature's heart... and break clear away, once in awhile, and
            climb a mountain or spend a week in the woods. Wash your spirit clean.
          </IonCardContent>
        </IonCard>
      </IonContent>

      <IonTabBar slot="bottom">
        <IonTabButton tab="ajoutDonnees" href="/">
          <IonIcon icon={add} />
          <IonLabel></IonLabel>
        </IonTabButton>
        <IonTabButton tab="purge" href="/">
          <IonIcon icon={trash} />
          <IonLabel></IonLabel>
        </IonTabButton>
        <IonTabButton tab="export" href="/">
          <IonIcon icon={download} />
          <IonLabel></IonLabel>
        </IonTabButton>
        <IonTabButton tab="import" href="/">
          <IonIcon icon={arrowRoundForward} />
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