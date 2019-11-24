import { IonContent, IonInput, IonItemSliding,IonButton,IonList,IonItemGroup, IonItemDivider, IonHeader, IonListHeader, IonRadioGroup, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonSelect, IonSelectOption, IonGrid, IonRow, IonRadio, IonCol, IonText, IonTabBar, IonTabButton, IonIcon } from '@ionic/react';
import React, { Component } from 'react';
import { add, calendar, download, settings, trash, home, redo } from 'ionicons/icons';
import { render } from 'react-dom';
import { RouteComponentProps } from 'react-router';
import ParametersService from 'src/services/parameters/ParametersService';
import { DalImpl } from "../../dal/DalImpl";
import Dal from "../../dal/Dal";



type State = {
  username: any,
  isPipo:boolean,
  height: any
}

const parametersService: ParametersService = new ParametersService();

export default class Profil extends Component<RouteComponentProps, State> {
  constructor(props: RouteComponentProps) {
    console.log("in the constructor");
    super(props)

    this.state = {
      username: "",
      isPipo: false,
      height: ""
    }
  }

  async componentDidMount(){
    this.getValues();
  }

  async getValues() {
    const dal: Dal = new DalImpl();
    let usernameVar = await dal.getLastValue("profil/nom");
    let heightVar = await dal.getLastValue("profil/taille");

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
  }

  render(){
    const isPipo = this.state.isPipo;
    let firstInput;
    let firstLabel;
    let secondInput;
    let secondLabel;
    if(isPipo){
      firstInput = <IonInput id="firstInput" value={this.state.height.substring(0, this.state.height.indexOf('/'))} required type="text" placeholder="ft" onIonInput={async(e:any) => {await parametersService.saveHeightProfilePi(e.target.value)}}></IonInput>;
      firstLabel = <IonLabel> ft</IonLabel>;
      secondInput = <IonInput id="secondInput" value={this.state.height.substring(this.state.height.indexOf('/') + 1, )} required type="text" placeholder="po" onIonInput={async(e:any) => {await parametersService.saveHeightProfilePo(e.target.value)}}></IonInput>;
      secondLabel = <IonLabel> po</IonLabel>;
    }else {
      firstInput = <IonInput value={this.state.height} type="number" placeholder="cm" onIonInput={async(e:any) => {await parametersService.saveHeightProfileCm(e.target.value)}}></IonInput>;
      firstLabel = <IonLabel> cm</IonLabel>;
    }

    return (
      <IonPage>
        <IonContent>
        <IonHeader>
          <IonToolbar slot="top" className="toolbarName ion-text-center">
          <IonInput value={this.state.username} onIonInput={async(e:any) => {await parametersService.saveUsername(e.target.value)}}></IonInput>
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
          <IonInput type="date" placeholder="Entrez votre date de naissance"></IonInput>
          </IonItem>
          <IonListHeader>
            Sexe
          </IonListHeader>
          <IonItem>
          <IonInput type="text" placeholder="Indiquez votre sexe"></IonInput>
          </IonItem>
          </IonList>
         
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
          <IonTabButton tab="settings" href="/Parameters">
            <IonIcon icon={settings} />
            <IonLabel></IonLabel>
          </IonTabButton>
        </IonTabBar>
        </IonPage>
    );
  }
}
