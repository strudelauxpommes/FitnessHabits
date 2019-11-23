import {
  IonContent,
  IonItemSliding,
  IonButton,
  IonList,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonItemGroup,
  IonItemDivider,
  IonHeader,
  IonListHeader,
  IonRadioGroup,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonGrid,
  IonRow,
  IonRadio,
  IonCol,
  IonText
} from "@ionic/react";
import React from "react";
import {
  add,
  calendar,
  download,
  settings,
  trash,
  home,
  redo
} from "ionicons/icons";
import "../../theme/parameters.css";
import { DalImpl } from "../../dal/DalImpl";
import Dal from "../../dal/Dal";

const Preference: React.FC = () => {
  const dal: Dal = new DalImpl();
  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <IonToolbar slot="top" className="toolbarName ion-text-center">
            <IonTitle>Paule Levasseur</IonTitle>
          </IonToolbar>
          <IonTabBar slot="top">
            <IonTabButton tab="profil" href="/profil">
              <div className="ion-text-center">
                <h4>Profil</h4>
              </div>
            </IonTabButton>
            <IonTabButton tab="preference" href="/preference">
              <div className="ion-text-center">
                <h4>Preference</h4>
              </div>
            </IonTabButton>
          </IonTabBar>
        </IonHeader>
        <IonContent>
          <IonText>
            <h4>Unite de mesure</h4>
          </IonText>
          <IonItem>
            <IonLabel>Poids Corporel</IonLabel>
            <IonSelect interface="popover">
              <IonSelectOption
                value="lbs"
                onClick={async () =>
                  await dal.setValue("preferences/unitePoids", "lbs")
                }
              >
                lbs
              </IonSelectOption>
              <IonSelectOption value="kg">kg</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem>
            <IonLabel>Taille</IonLabel>
            <IonSelect interface="popover">
              <IonSelectOption value="feet">pi/po</IonSelectOption>
              <IonSelectOption value="cm">cm</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem>
            <IonLabel>Breuvage</IonLabel>
            <IonSelect interface="popover">
              <IonSelectOption value="litre">L</IonSelectOption>
              <IonSelectOption value="ml">mL</IonSelectOption>
              <IonSelectOption value="on">on</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem>
            <IonLabel>Total des Breuvages</IonLabel>
            <IonSelect interface="popover">
              <IonSelectOption value="litre">L</IonSelectOption>
              <IonSelectOption value="ml">mL</IonSelectOption>
              <IonSelectOption value="on">on</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem>
            <IonLabel>Alcool</IonLabel>
            <IonSelect interface="popover">
              <IonSelectOption value="ml">mL</IonSelectOption>
              <IonSelectOption value="on">on</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonText>
            <h4>Liste de Repas</h4>
          </IonText>
          <IonList>
            <IonItem>
              <IonLabel>Petit-déjeuner</IonLabel>
              <IonButton>X</IonButton>
            </IonItem>
            <IonItem>
              <IonLabel>Collation AM</IonLabel>
              <IonButton>X</IonButton>
            </IonItem>
            <IonItem>
              <IonLabel>Lunch</IonLabel>
              <IonButton>X</IonButton>
            </IonItem>
            <IonItem>
              <IonLabel>Collation PM</IonLabel>
              <IonButton>X</IonButton>
            </IonItem>
            <IonButton expand="block">+</IonButton>
          </IonList>
          <IonText>
            <h4>Autres</h4>
          </IonText>
          <IonItem>
            <IonLabel>Langue</IonLabel>
            <IonSelect interface="popover">
              <IonSelectOption value="EN">English</IonSelectOption>
              <IonSelectOption value="FR">Français</IonSelectOption>
              <IonSelectOption value="ES">Español</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonRadioGroup>
            <IonLabel>Format de Dates</IonLabel>
            <IonList>
              <IonItem>
                <IonRadio value="cord" />
                <IonLabel> Selon la langue</IonLabel>
              </IonItem>
              <IonItem>
                <IonRadio value="Custom" />
                <IonSelect interface="popover">
                  <IonSelectOption value="EN">AAAA-MM-JJ</IonSelectOption>
                  <IonSelectOption value="FR">MM-JJ-AAAA</IonSelectOption>
                  <IonSelectOption value="ES">JJ-MM-AAAA</IonSelectOption>
                </IonSelect>
              </IonItem>
            </IonList>
          </IonRadioGroup>
        </IonContent>
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
        <IonTabButton tab="settings" href="/parameters">
          <IonIcon icon={settings} />
          <IonLabel></IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonPage>
  );
};

export default Preference;
