import { IonContent, IonInput, IonItemSliding,IonButton,IonList,IonItemGroup, IonItemDivider, IonHeader, IonListHeader, IonRadioGroup, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonSelect, IonSelectOption, IonGrid, IonRow, IonRadio, IonCol, IonText, IonTabBar, IonTabButton, IonIcon } from '@ionic/react';
import React, { Component } from 'react';
import { add, calendar, download, settings, trash, home, redo, thumbsDown } from 'ionicons/icons';
import { render } from 'react-dom';
import { RouteComponentProps } from 'react-router';
import ParametersService from 'src/services/parameters/ParametersService';
import { DalImpl } from "../../dal/DalImpl";
import Dal from "../../dal/Dal";
import Tabs from '../tabs';

type State = {
  username: any,
  isPipo:boolean,
  height: any,
  date:any,
  sexe:any
}

const parametersService: ParametersService = new ParametersService();

export default class Profil extends Component<RouteComponentProps, State> {
  constructor(props: RouteComponentProps) {
    console.log("in the constructor");
    super(props)

    this.state = {
      username: "",
      isPipo: false,
      height: "",
      date: "",
      sexe: ""
    }
  }

  refreshPage() {
    window.location.reload();
  }

  async componentDidMount(){
    this.getValues();
  }

  async getValues() {
    const dal: Dal = new DalImpl();
    let usernameVar = await dal.getLastValue("profil/nom");
    let heightVar = await dal.getLastValue("profil/taille");
    let dateVar = await dal.getLastValue("profil/dateNaissance");
    let sexeVar = await dal.getLastValue("profil/sexe");

    if (usernameVar) {
      await this.setState({username: usernameVar});
    }else {
      await this.setState({username: "kg"});
    }

    if(await dal.getLastValue("preferences/uniteTaille") == "pi/po"){
      this.setState({isPipo: true})
    }
    if(heightVar){
      await this.setState({height: heightVar});
    }

    if(dateVar){
      await this.setState({date: dateVar});
    }
    if(sexeVar){
      await this.setState({sexe:sexeVar});
    }
  }

  render(){
    const isPipo = this.state.isPipo;
    let firstInput;
    let firstLabel;
    let secondInput;
    let secondLabel;
    if(isPipo){
      firstInput = <IonInput id="firstInput" value={this.state.height.substring(0, this.state.height.indexOf('/'))} required type="text" placeholder="pi" onIonBlur={async(e:any) => {await parametersService.saveHeightProfilePi(e.target.value); this.refreshPage()}}></IonInput>;
      firstLabel = <IonLabel> pi</IonLabel>;
      secondInput = <IonInput id="secondInput" value={this.state.height.substring(this.state.height.indexOf('/') + 1, )} required type="text" placeholder="po" onIonBlur={async(e:any) => {await parametersService.saveHeightProfilePo(e.target.value); this.refreshPage()}}></IonInput>;
      secondLabel = <IonLabel> po</IonLabel>;
    }else {
      firstInput = <IonInput value={this.state.height} type="number" placeholder="cm" onIonBlur={async(e:any) => {await parametersService.saveHeightProfileCm(e.target.value); this.refreshPage()}}></IonInput>;
      firstLabel = <IonLabel> cm</IonLabel>;
    }

    return (
      <IonPage>
        <IonContent>
        <IonHeader>
          <IonToolbar slot="top" className="toolbarName ion-text-center">
            <IonTitle>{this.state.username}</IonTitle>
          </IonToolbar>
          <IonTabBar slot="top">
          <IonTabButton tab="profil" href="/profil">
          <div className="ion-text-center"><h4>Profil</h4></div>
          </IonTabButton>
          <IonTabButton tab="preference" href="/preference">
          <div className="ion-text-center" ><h4>Preference</h4></div>
          </IonTabButton>
        </IonTabBar>
        </IonHeader>
          <IonContent>
  
          <IonList>
          <IonListHeader>
            Nom d'utilisateur
          </IonListHeader>
          <IonItem>
          <IonInput value={this.state.username} onIonBlur={async(e:any) => {await parametersService.saveUsername(e.target.value); this.refreshPage()}}></IonInput>
          </IonItem>
          <IonListHeader>
            Taille
          </IonListHeader>
          <IonItem>
          {firstInput}
          {firstLabel}
          {secondInput}
          {secondLabel}
          </IonItem>
          <IonListHeader>
            Date de naissance
          </IonListHeader>
          <IonItem>
          <IonInput type="date" value={this.state.date} placeholder="Entrez votre date de naissance" onIonBlur={async(e:any) => {await parametersService.saveDate(e.target.value); this.refreshPage()}}></IonInput>
          </IonItem>
          <IonItem>
              <IonLabel>Sexe</IonLabel>
              <IonSelect interface="popover" placeholder={this.state.sexe} onIonChange={async(e:any) => {await parametersService.saveSexe(e.target.value)}}>
                <IonSelectOption value="Homme">Homme</IonSelectOption>
                <IonSelectOption value="Femme">Femme</IonSelectOption>
                <IonSelectOption value="Autre">Autre</IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonList>
         
          </IonContent>
        </IonContent>
        <Tabs/>
        </IonPage>
    );
  }
}
