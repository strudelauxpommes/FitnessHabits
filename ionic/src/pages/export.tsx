import {
  IonPage,IonSelect, IonSelectOption,
  IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle,
  IonList, IonItem, IonLabel, IonIcon, IonDatetime,
  IonButton, IonRow, IonCol, IonContent, IonRadioGroup,
  IonRadio, IonToast

} from '@ionic/react';
import { calendar, logIn } from 'ionicons/icons';
import React, { useState } from 'react';
import { FilterDumper } from 'src/dal/FitlerDumper';


const Export: React.FC = () => {
const [showToast1, setShowToast] = useState(false);

async function getAllData() {
  console.log('test');
  var dateDebut = document.getElementById("debut") 
  var dateFin = document.getElementById("fin") 
  //console.log(d);
  const dumper = new FilterDumper();
  
  await dumper.dump();

}
function changeColor(id:string){
  var btn = document.getElementById(id) 
  btn!.setAttribute("color", "primary")
}
  return (
    <IonPage id="export-import-list" color="#b3b3b3">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle >Exporter les données</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonList>
        <IonItem>
          <IonIcon icon={calendar} slot="start"></IonIcon>
          <IonLabel position="stacked">À partir de</IonLabel>
          <IonDatetime id="debut" displayFormat="MMM DD, YYYY" max="2056" value="2019-09-19"></IonDatetime>
        </IonItem>
        <IonItem>
          <IonIcon icon={calendar} slot="start"></IonIcon>
          <IonLabel position="stacked">Jusqu'à </IonLabel>
          <IonDatetime id="fin" displayFormat="MMM DD, YYYY" max="2056" value={new Date().toISOString()}></IonDatetime>
        </IonItem>
      </IonList>

      <IonList>

        <IonRow>
          <IonCol>
            <IonButton id="food" onClick={() => changeColor("food")} color="light" expand="block">Nourriture</IonButton>
          </IonCol>
          <IonCol>
            <IonButton id="beverage" onClick={() => changeColor("beverage")} color="light" expand="block">Breuvages</IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonButton id="" color="light" expand="block">Suppléments</IonButton>
          </IonCol>
          <IonCol>
            <IonButton id="sleep" onClick={() => changeColor("sleep")}  color="light" expand="block">Sommeil</IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonButton id="profil/poids" onClick={() => changeColor("profil/poids")} color="light" expand="full" >Poids</IonButton>
          </IonCol>
          <IonCol>
            <IonButton id="Activites"  onClick={() => changeColor("Activites")} expand="full" color="light" >Activités physiques</IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonButton id="alcohol" onClick={() => changeColor("alcohol")}  color="light" expand="full" >Alcool</IonButton>
          </IonCol>
          <IonCol>
            <IonButton id="profil/glycemie" onClick={() => changeColor("profil/glycemie")} expand="full" color="light" >Glycémie</IonButton>
          </IonCol>
        </IonRow>
        <IonButton onClick={() => getAllData()} color="secondary" expand="block">Toutes les données</IonButton>
      </IonList>

        <div className="about-header"></div>
        <div className="about-info">
          <h4 className="ion-padding-start">Format des données</h4>
        </div>

        <IonList>
          <IonRadioGroup>
            <IonItem>
              <IonLabel>.csv</IonLabel>
              <IonRadio slot="start" value="csv" checked />
            </IonItem>

            <IonItem>
              <IonLabel>.json</IonLabel>
              <IonRadio slot="start" value="json" />
            </IonItem>
          </IonRadioGroup>
          <IonRow>
            <IonCol>
              <IonButton color="light" onClick={() => setShowToast(true)} expand="block">Exporter</IonButton>
              <IonToast
                isOpen={showToast1}
                position="middle"
                onDidDismiss={() => setShowToast(false)}
                message="L'éxportation des données a échoué"
                duration={4000}
              />
            </IonCol>
          </IonRow>
        </IonList>
      </IonContent>
    </IonPage>
  );
};
export default Export;
