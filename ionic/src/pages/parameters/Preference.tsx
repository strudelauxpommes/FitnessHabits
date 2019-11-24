import { IonContent, IonItemSliding,IonButton,IonList,IonTabBar, IonTabButton, IonIcon,IonItemGroup, IonItemDivider, IonHeader, IonListHeader, IonRadioGroup, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonSelect, IonSelectOption, IonGrid, IonRow, IonRadio, IonCol, IonText } from '@ionic/react';
import React,{useState} from 'react';
import { add,  calendar, download, settings, trash, home, redo } from 'ionicons/icons';
import '../../theme/parameters.css';
import { DalImpl } from '../../dal/DalImpl';
import Dal  from '../../dal/Dal';
import { cpus } from 'os';

type PreferenceState = { unitePoid: string ,uniteTaille: string,
  uniteBreuvages: string ,
  uniteTotalBreuvages: string ,quantiteIncrementAlcool: string 
  ,quantiteIncrementBreuvages: string };
class Preference extends React.Component<PreferenceState> {
  dal: Dal;
  state: PreferenceState;
  constructor(props: any) {
    super(props);
    this.dal = new DalImpl();
    this.state = {unitePoid: '', uniteTaille:'', uniteBreuvages:'', uniteTotalBreuvages:''
  ,quantiteIncrementAlcool:'', quantiteIncrementBreuvages:''};
  }
  //await this.dal.setValue("preferences/unitePoids", "lbs")
  //await this.dal.getLastValue("preferences/unitePoids")
  async componentDidMount(){
     this.setState ({ unitePoid: await this.dal.getLastValue("preferences/unitePoids"),
     uniteTaille: await this.dal.getLastValue("preferences/uniteTaille"),
     uniteBreuvages: await this.dal.getLastValue("preferences/uniteBreuvages"),
     uniteTotalBreuvages: await this.dal.getLastValue("preferences/uniteTotalBreuvages"),
     quantiteIncrementAlcool: await this.dal.getLastValue("preferences/quantiteIncrementAlcool"),
     quantiteIncrementBreuvages: await this.dal.getLastValue("preferences/quantiteIncrementBreuvages")});
  }
  async handleUnitPoidChange(event:any) {
      let currentValue = event.detail.value;
      console.log(currentValue);
      //this.setState({
      //  unitePoid: event.detail.value
      //});
      this.dal.setValue("preferences/unitePoids", currentValue);
  }

  saveItem = () => {
    const item = {};
    // do more with item object as required (e.g. save to database)
  }

  render() {
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
            <IonSelect value={ this.state.unitePoid } interface="popover" onIonChange = { this.handleUnitPoidChange } >
              <IonSelectOption  value="lbs">lbs</IonSelectOption>
              <IonSelectOption value="kg">kg</IonSelectOption>
            </IonSelect>
          </IonItem>

        <IonItem>
            <IonLabel >Taille</IonLabel>
            <IonSelect value={ this.state.uniteTaille} interface="popover">
              <IonSelectOption value="pi/po">pi/po</IonSelectOption>
              <IonSelectOption value="cm">cm</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem>
            <IonLabel>Breuvage</IonLabel>
            <IonSelect value={ this.state.uniteBreuvages } interface="popover">
              <IonSelectOption value="L">L</IonSelectOption>
              <IonSelectOption value="mL">mL</IonSelectOption>
              <IonSelectOption value="on">on</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem>
            <IonLabel>Total des Breuvages</IonLabel>
            <IonSelect value={ this.state.uniteTotalBreuvages } interface="popover">
              <IonSelectOption value="L">L</IonSelectOption>
              <IonSelectOption value="mL">mL</IonSelectOption>
              <IonSelectOption value="on">on</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem>
            <IonLabel>Alcool</IonLabel>
            <IonSelect interface="popover">
              <IonSelectOption value="mL">mL</IonSelectOption>
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
              <IonSelectOption value="en">English</IonSelectOption>
              <IonSelectOption value="fr">Français</IonSelectOption>
              <IonSelectOption value="es">Español</IonSelectOption>
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
                  <IonSelectOption value="AAAA-MM-JJ">AAAA-MM-JJ</IonSelectOption>
                  <IonSelectOption value="MM-JJ-AAAA">MM-JJ-AAAA</IonSelectOption>
                  <IonSelectOption value="JJ-MM-AAAA">JJ-MM-AAAA</IonSelectOption>
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
  }

}
export default Preference;
