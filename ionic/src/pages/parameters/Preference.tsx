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
import React, { Component } from "react";
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
import ParametersService from "../../services/parameters/ParametersService";
import { render } from 'react-dom';
import { RouteComponentProps } from 'react-router';
import { async } from 'q';
import Tabs from '../tabs';

type State = {
  unitePoids: any,
  uniteGlycemie: any,
  uniteTaille: any,
  uniteBreuvages: any,
  uniteAlcool: any,
  uniteTotalBreuvages: any,
  quantiteIncrementAlcool: any,
  quantiteIncrementBreuvages: any,
  username: any
}

const parametersService: ParametersService = new ParametersService();

export default class Preference extends Component<RouteComponentProps, State> {
  constructor(props: RouteComponentProps) {
    console.log("in the constructor");
    super(props)

    this.state = {
      unitePoids: "",
      uniteGlycemie: "",
      uniteTaille: "",
      uniteBreuvages: "",
      uniteAlcool: "",
      uniteTotalBreuvages: "",
      quantiteIncrementAlcool: "",
      quantiteIncrementBreuvages: "",
      username: ""
    }

  }

  async componentDidMount(){
    this.getValues();
  }

  async getValues() {
    const dal: Dal = new DalImpl();
    let poids = await dal.getLastValue("preferences/unitePoids");
    let glycemie = await dal.getLastValue("preferences/uniteGlycemie");
    let taille = await dal.getLastValue("preferences/uniteTaille");
    let breuvages = await dal.getLastValue("preferences/uniteBreuvages");
    let alcool = await dal.getLastValue("preferences/uniteAlcool");
    let totalBreuvages = await dal.getLastValue("preferences/uniteTotalBreuvages");
    let incrementAlcool = await dal.getLastValue("preferences/quantiteIncrementAlcool");
    let incrementBreuvages = await dal.getLastValue("preferences/quantiteIncrementBreuvages");
    let usernameVar = await dal.getLastValue("profil/nom");

    if (usernameVar) {
      await this.setState({username: usernameVar});
    }else {
      await this.setState({username: "kg"});
    }

    if (poids) {
      await this.setState({unitePoids: poids});
    }else {
      await this.setState({unitePoids: "kg"});
    }

    if (glycemie) {
      await this.setState({uniteGlycemie: glycemie});
    }else {
      await this.setState({uniteGlycemie: "mmol/L"});
    }

    if (taille) {
      await this.setState({uniteTaille: taille});
    }else {
      await this.setState({uniteTaille: "cm"});
    }

    if (breuvages) {
      await this.setState({uniteBreuvages: breuvages});
    }else {
      await this.setState({uniteBreuvages: "mL"});
    }

    if (alcool) {
      await this.setState({uniteAlcool: alcool});
    }else {
      await this.setState({uniteAlcool: "mL"});
    }

    if (totalBreuvages) {
      await this.setState({uniteTotalBreuvages: totalBreuvages});
    }else {
      await this.setState({uniteTotalBreuvages: "mL"});
    }

    if (incrementAlcool) {
      await this.setState({quantiteIncrementAlcool: incrementAlcool});
    }else {
      await this.setState({quantiteIncrementAlcool: "1.0"});
    }

    if (incrementAlcool) {
      await this.setState({quantiteIncrementBreuvages: incrementBreuvages});
    }else {
      await this.setState({quantiteIncrementBreuvages: "1.0"});
    }
  }

  render() {
    return (
      <IonPage>
        <IonContent>
          <IonHeader>
            <IonToolbar slot="top" className="toolbarName ion-text-center">
              <IonTitle>{this.state.username}</IonTitle>
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
              <IonSelect interface="popover" placeholder={this.state.unitePoids} onIonChange={async(e:any) => {await parametersService.saveWeight(e.target.value)}}>
                <IonSelectOption
                  value="lbs">
                  lbs
                </IonSelectOption>
                <IonSelectOption value="kg">kg</IonSelectOption>
              </IonSelect>
            </IonItem>

            <IonItem>
              <IonLabel>Glycémie</IonLabel>
              <IonSelect interface="popover" placeholder={this.state.uniteGlycemie} onIonChange={async(e:any) => {await parametersService.saveGlucose(e.target.value)}}>
                <IonSelectOption
                  value="mmol/L">
                  mmol/L
                </IonSelectOption>
                <IonSelectOption value="mg/dL">mg/dL</IonSelectOption>
              </IonSelect>
            </IonItem>

            <IonItem>
              <IonLabel>Taille</IonLabel>
              <IonSelect interface="popover" placeholder={this.state.uniteTaille} onIonChange={async(e:any) => {await parametersService.saveHeight(e.target.value)}}>
                <IonSelectOption value="pi/po">pi/po</IonSelectOption>
                <IonSelectOption value="cm">cm</IonSelectOption>
              </IonSelect>
            </IonItem>

            <IonItem>
              <IonLabel>Breuvage</IonLabel>
              <IonSelect interface="popover" placeholder={this.state.uniteBreuvages} onIonChange={async(e:any) => {await parametersService.saveBeverages(e.target.value)}}>
                <IonSelectOption value="L">L</IonSelectOption>
                <IonSelectOption value="mL">mL</IonSelectOption>
                <IonSelectOption value="on">on</IonSelectOption>
              </IonSelect>
            </IonItem>

            <IonItem>
              <IonLabel>Total des Breuvages</IonLabel>
              <IonSelect interface="popover" placeholder={this.state.uniteTotalBreuvages} onIonChange={async(e:any) => {await parametersService.saveTotalBeverages(e.target.value)}}>
                <IonSelectOption value="L">L</IonSelectOption>
                <IonSelectOption value="mL">mL</IonSelectOption>
                <IonSelectOption value="on">on</IonSelectOption>
              </IonSelect>
            </IonItem>

            <IonItem>
              <IonLabel>Incrément des Breuvages</IonLabel>
              <IonSelect interface="popover" placeholder={this.state.quantiteIncrementBreuvages} onIonChange={async(e:any) => {await parametersService.saveBeverageIncrement(e.target.value)}}>
                <IonSelectOption value="1.0">1.0</IonSelectOption>
                <IonSelectOption value="0.5">0.5</IonSelectOption>
              </IonSelect>
            </IonItem>

            <IonItem>
              <IonLabel>Alcool</IonLabel>
              <IonSelect interface="popover" placeholder={this.state.uniteAlcool} onIonChange={async(e:any) => {await parametersService.saveAlcool(e.target.value)}}>
                <IonSelectOption value="mL">mL</IonSelectOption>
                <IonSelectOption value="on">on</IonSelectOption>
              </IonSelect>
            </IonItem>

            <IonItem>
              <IonLabel>Incrément de l'Alcool</IonLabel>
              <IonSelect interface="popover" placeholder={this.state.quantiteIncrementAlcool} onIonChange={async(e:any) => {await parametersService.saveAlcoolIncrement(e.target.value)}}>
                <IonSelectOption value="1.0">1.0</IonSelectOption>
                <IonSelectOption value="0.5">0.5</IonSelectOption>
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
        <Tabs/>
      </IonPage>
    );
  }
}

