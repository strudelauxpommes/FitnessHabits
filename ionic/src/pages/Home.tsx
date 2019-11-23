import { IonAvatar, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCheckbox, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonRouterOutlet, IonRow, IonSelect, IonSelectOption, IonTabBar, IonTabButton, IonTitle, IonToolbar } from '@ionic/react';
import { add, calendar, download, settings, trash, home, redo } from 'ionicons/icons';
import React from 'react';
import { Redirect, Route } from 'react-router';
import Export from './export';
import Import from './import';
import Supression from './purge';
import T from 'i18n-react';

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

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Activités</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonGrid>
              <IonRow>
                <IonCol>Activité</IonCol>
                <IonCol>Durée</IonCol>
                <IonCol>Intensité</IonCol>
              </IonRow>

              <IonRow>
                <IonCol>Karaté</IonCol>
                <IonCol>1:17</IonCol>
                <IonCol>M</IonCol>
              </IonRow>

              <IonRow>
                <IonCol>Jogging</IonCol>
                <IonCol>hh:mm</IonCol>
                <IonCol>H</IonCol>
              </IonRow>

              <IonRow>
                <IonCol>HIIT</IonCol>
                <IonCol>00:32</IonCol>
                <IonCol>H</IonCol>
              </IonRow>
            </IonGrid>

            <IonHeader>Autre :</IonHeader>
            <IonRow>
              <IonInput placeholder="Nom de l'activité" color="dark"></IonInput>
              <IonInput placeholder="Durée" color="dark"> </IonInput>
              <IonSelect placeholder="Intensité" interface="popover">
                <IonSelectOption>F</IonSelectOption>
                <IonSelectOption>M</IonSelectOption>
                <IonSelectOption>H</IonSelectOption>
              </IonSelect>
              <IonButton shape="round"><IonIcon icon={add} /></IonButton>
            </IonRow>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Suppléments</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonGrid>
              <IonRow>
                <IonCol>Matin</IonCol>
                <IonCol><IonCheckbox></IonCheckbox></IonCol>
              </IonRow>
              <IonRow>
                <IonCol>Midi</IonCol>
                <IonCol><IonCheckbox></IonCheckbox></IonCol>
              </IonRow>
              <IonRow>
                <IonCol>Souper</IonCol>
                <IonCol><IonCheckbox></IonCheckbox></IonCol>
              </IonRow>
              <IonRow>
                <IonCol>Coucher</IonCol>
                <IonCol><IonCheckbox></IonCheckbox></IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Sommeil</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonGrid>
              <IonRow>
                <IonCol>Début</IonCol>
                <IonCol>Fin</IonCol>
                <IonCol># de réveils</IonCol>
              </IonRow>
              <IonRow>
                <IonCol><IonInput placeholder="23:00" color="dark"></IonInput></IonCol>
                <IonCol><IonInput placeholder="06:30" color="dark"></IonInput></IonCol>
                <IonCol><IonItem>2</IonItem></IonCol>
              </IonRow>
              <IonRow>
                <IonCol><IonInput placeholder="15:00" color="dark"></IonInput></IonCol>
                <IonCol><IonInput placeholder="16:30" color="dark"></IonInput></IonCol>
                <IonCol><IonItem>0</IonItem></IonCol>
              </IonRow>
            </IonGrid>
            <IonHeader>Ajouter un réveil :</IonHeader>
            <IonRow>
              <IonInput placeholder="Heure coucher" color="dark"></IonInput>
              <IonInput placeholder="Heure réveil" color="dark"> </IonInput>
              <IonButton shape="round"><IonIcon icon={add} /></IonButton>
            </IonRow>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Poids</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonRow>
              <IonItem>Poids : </IonItem>
              <IonInput placeholder="150.9" color="dark"></IonInput>
              <IonSelect value="Lbs" interface="popover">
                <IonSelectOption selected>Lbs</IonSelectOption>
                <IonSelectOption>Kgs</IonSelectOption>
              </IonSelect>
            </IonRow>
            <IonRow>
              <IonItem>Pourcentage de gras : </IonItem>
              <IonInput placeholder="0.00%" color="dark"></IonInput>
            </IonRow>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Nourriture</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonGrid>
              <IonRow>
                <IonCol></IonCol>
                <IonCol><IonItem># Portions</IonItem></IonCol>
                <IonCol></IonCol>
                <IonCol></IonCol>
              </IonRow>
              <IonRow>
                <IonCol>Protéines</IonCol>
                <IonCol><IonItem>3</IonItem></IonCol>
                <IonCol><IonButton shape="round">+1</IonButton></IonCol>
                <IonCol><IonButton shape="round" color="secondary">-1</IonButton></IonCol>
              </IonRow>
              <IonRow>
                <IonCol>Légumes</IonCol>
                <IonCol><IonItem>2</IonItem></IonCol>
                <IonCol><IonButton shape="round">+1</IonButton></IonCol>
                <IonCol><IonButton shape="round" color="secondary">-1</IonButton></IonCol>
              </IonRow>
              <IonRow>
                <IonCol>Glucides</IonCol>
                <IonCol><IonItem>3</IonItem></IonCol>
                <IonCol><IonButton shape="round">+1</IonButton></IonCol>
                <IonCol><IonButton shape="round" color="secondary">-1</IonButton></IonCol>
              </IonRow>
              <IonRow>
                <IonCol>Lipides</IonCol>
                <IonCol><IonItem>1</IonItem></IonCol>
                <IonCol><IonButton shape="round">+1</IonButton></IonCol>
                <IonCol><IonButton shape="round" color="secondary">-1</IonButton></IonCol>
              </IonRow>
              <IonRow>
                <IonCol>Fruits</IonCol>
                <IonCol><IonItem>5</IonItem></IonCol>
                <IonCol><IonButton shape="round">+1</IonButton></IonCol>
                <IonCol><IonButton shape="round" color="secondary">-1</IonButton></IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Breuvage</IonCardTitle>
            <IonCardSubtitle>1500 ml</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            <IonGrid>
              <IonRow>
                <IonCol><IonItem>Type</IonItem></IonCol>
                <IonCol><IonItem>Volume</IonItem></IonCol>
                <IonCol><IonItem>Quantité</IonItem></IonCol>
              </IonRow>
              <IonRow>
                <IonCol><IonItem>Eau</IonItem></IonCol>
                <IonCol><IonItem>250 ml</IonItem></IonCol>
                <IonCol><IonItem>6</IonItem></IonCol>
              </IonRow>
              <IonRow>
                <IonCol><IonItem>Café</IonItem></IonCol>
                <IonCol><IonItem>250 ml</IonItem></IonCol>
                <IonCol><IonItem>1</IonItem></IonCol>
              </IonRow>
              <IonRow>
                <IonCol><IonItem>Tisane</IonItem></IonCol>
                <IonCol><IonItem>250 ml</IonItem></IonCol>
                <IonCol><IonItem>2</IonItem></IonCol>
              </IonRow>
            </IonGrid>
            <IonCol><IonItem>Autre : </IonItem></IonCol>
            <IonRow>
              <IonCol><IonInput placeholder="Type" color="dark"></IonInput></IonCol>
              <IonCol><IonInput placeholder="Volume" color="dark"></IonInput></IonCol>
              <IonCol><IonButton shape="round"><IonIcon icon={add} /></IonButton></IonCol>
            </IonRow>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Alcool</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonGrid>
              <IonRow>
                <IonCol><IonItem>Type</IonItem></IonCol>
                <IonCol><IonItem>Volume</IonItem></IonCol>
                <IonCol><IonItem>Quantité</IonItem></IonCol>
              </IonRow>
              <IonRow>
                <IonCol><IonItem>Vin</IonItem></IonCol>
                <IonCol><IonItem>250 ml</IonItem></IonCol>
                <IonCol><IonItem>6</IonItem></IonCol>
              </IonRow>
              <IonRow>
                <IonCol><IonItem>Vodka</IonItem></IonCol>
                <IonCol><IonItem>1 oz</IonItem></IonCol>
                <IonCol><IonItem>1</IonItem></IonCol>
              </IonRow>
              <IonRow>
                <IonCol><IonItem>Jaggermeister</IonItem></IonCol>
                <IonCol><IonItem>2 oz</IonItem></IonCol>
                <IonCol><IonItem>2</IonItem></IonCol>
              </IonRow>
            </IonGrid>
            <IonCol><IonItem>Autre : </IonItem></IonCol>
            <IonRow>
              <IonCol><IonInput placeholder="Type" color="dark"></IonInput></IonCol>
              <IonCol><IonInput placeholder="Volume" color="dark"></IonInput></IonCol>
              <IonCol><IonSelect value="ml" interface="popover">
                <IonSelectOption selected>ml</IonSelectOption>
                <IonSelectOption>oz</IonSelectOption>
              </IonSelect></IonCol>
              <IonCol><IonButton shape="round"><IonIcon icon={add} /></IonButton></IonCol>
            </IonRow>
          </IonCardContent>
        </IonCard>
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
        <IonTabButton tab="settings" href="/Profil">
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