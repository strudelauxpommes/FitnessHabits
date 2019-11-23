import { IonIcon, IonLabel, IonTabBar, IonTabButton } from "@ionic/react";
import { download, home, redo, settings, trash } from "ionicons/icons";
import React, { Component } from "react";

class Tabs extends React.Component {
  render() {
    return (
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/home">
          <IonIcon icon={home} />
          <IonLabel></IonLabel>
        </IonTabButton>
        <IonTabButton tab="export" href="/export">
          <IonIcon icon={redo} />
          <IonLabel></IonLabel>
        </IonTabButton>
        <IonTabButton tab="import" href="/import">
          <IonIcon icon={download} />
          <IonLabel></IonLabel>
        </IonTabButton>
        <IonTabButton tab="delete" href="/purge">
          <IonIcon icon={trash} />
          <IonLabel></IonLabel>
        </IonTabButton>
        <IonTabButton tab="settings" href="/parameters">
          <IonIcon icon={settings} />
          <IonLabel></IonLabel>
        </IonTabButton>
      </IonTabBar>
    );
  }
}

export default Tabs;
