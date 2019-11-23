import React, { Component } from "react";
import {
  IonPage,
  IonGrid,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonRow,
  IonCol,
  IonIcon,
  IonCardContent,
  IonLabel,
  IonTitle
} from "@ionic/react";
import data from "./data.json";
import { cafe } from "ionicons/icons";
import FavoriteBeverage from "./FavoriteBeverage";
import { DalImpl } from "../../dal/DalImpl";

class BeveragesSummary extends Component {
  constructor() {
    super();
    this.state = {
      beverages: [],
      total: 0,
      unit: "L",
      unitConverter: 1,
      date: Date
    };
    this.onIncrease = this.onIncrease.bind(this);
  }

    constructor(props) {
        super(props);
        this.state = {
            beverages: [],
            total: 0,
            unit: "L",
            unitConverter:1,
            date: [],
            key: 'beverage/beverageList'
        }
        this.onIncrease=this.onIncrease.bind(this);
    }

    async componentDidMount() {
        
        await this.getBeverages();

        if (this.state.unit==="on") {
            this.setState({unitConverter:0.033814})
        } 
        for (let beverage of this.state.beverages) {
            await this.setState({total: this.state.unitConverter*(this.state.total + (beverage.quantity * beverage.volume/1000))});
        }
    }
  }

    async getBeverages() {
        const instance = new DalImpl();
        let date = await instance.getLastValue('settings/activeDate');
        if (date) {
            this.setState({date: JSON.parse(date)});
        } else {
            // remove this when impl
            let todayDate = new Date();
            this.setState({date: [todayDate.getUTCDate(), todayDate.getUTCMonth(), todayDate.getFullYear()]})
        }


        let beverages = await instance.getLastValue(this.state.key)
        if (!beverages) {
            await this.initDefaultBeverages();
            await this.saveBeverage();
        } else {
            let parsedBeverage = JSON.parse(beverages);
            let activeDate = new Date(this.state.date[2], this.state.date[1], this.state.date[0]);
            let lastDate = new Date(parsedBeverage.date[2], parsedBeverage.date[1], parsedBeverage.date[0])

            if (activeDate.getTime() > lastDate.getTime()) {
                this.resetQuantities();
            } else if (activeDate.getTime() === lastDate.getTime()) {
                await this.setState({beverages: parsedBeverage.beverageList});
            } else if (activeDate.getTime() < lastDate.getTime()) {
                let activeEndDate = new Date(activeDate)
                activeEndDate.setDate(activeDate.getDate() + 1)
                let pastBeverages = await instance.getLatestValues(this.state.key, activeDate, activeEndDate);
                if (pastBeverages) {
                    this.setState({ beverages: JSON.parse(pastBeverages).beverageList })
                }
            }
            
        }
    }
  }
    async resetQuantities() {
        await this.setState(prevState => ({
            beverages: prevState.beverages.map(
                beverage => beverage ? { ...beverage, quantity: 0 } : beverage
            )
        }))
    }

    async initDefaultBeverages() {
        let defaultBeverages = [
            this.defaultBeverage('Café'),
            this.defaultBeverage('Eau'),
            this.defaultBeverage('Thé'),
            this.defaultBeverage('Perrier'),
        ]

    await this.setState({ beverages: defaultBeverages });
  }

  defaultBeverage(beverageName) {
    return {
      name: beverageName,
      volume: 125,
      quantity: 0,
      comment: "",
      favorite: true
    };
  }

    async onIncrease (data) {
        await this.setState(prevState => ({
            beverages: prevState.beverages.map(
                el => el.name === data.name? { ...el, quantity: this.state.unitConverter * (el.quantity+1) }: el
            )
        }))
        this.setState({total: this.state.total + (this.state.unitConverter*data.volume/1000)})

        await this.saveBeverage();
    }

    async saveBeverage() {
        const instance = new DalImpl();

        await instance.setValue(this.state.key, JSON.stringify({ 
            date: this.state.date,
            beverageList: this.state.beverages
         }));
    }

    render() {
        let beveragesRender = [];
        for (let beverage of this.state.beverages) {
            if (beverage.favorite) {
                beveragesRender.push(<FavoriteBeverage onIncrement={this.onIncrease} beverage={beverage} key={beverage.name}></FavoriteBeverage>);
            }
        }
        return (
            <IonPage>
                <IonContent>
                    <IonCard>
                        <IonCardHeader class="new-beverages-style">
                                <IonRow>
                                    <IonCol style={{textAlign:'left'}}>
                                        <a style={{color:'inherit', textDecoration: 'none'}} href="/beverages-detail">
                                        <IonTitle><IonIcon icon={cafe} ></IonIcon>  &nbsp; Breuvages</IonTitle>
                                        </a>
                                    </IonCol>
                                    <IonCol style={{textAlign:'right'}}>
                                        <IonLabel>{this.state.total + this.state.unit}</IonLabel>
                                    </IonCol>
                                </IonRow>
                        </IonCardHeader>
                        <IonCardContent style={{textAlign:'center'}}>
                            <IonGrid>
                                <IonRow>
                                    {beveragesRender}
                                </IonRow>
                            </IonGrid>
                        </IonCardContent>
                    </IonCard>
                </IonContent>
            </IonPage>
        );
    }
    return (
      <IonCard>
        <IonCardHeader class="new-beverages-style">
          <IonRow>
            <IonCol style={{ textAlign: "left" }}>
              <IonTitle>
                <IonIcon icon={cafe}></IonIcon> &nbsp; Breuvages
              </IonTitle>
            </IonCol>
            <IonCol style={{ textAlign: "right" }}>
              <IonLabel>{this.state.total + this.state.unit}</IonLabel>
            </IonCol>
          </IonRow>
        </IonCardHeader>
        <IonCardContent style={{ textAlign: "center" }}>
          <IonGrid>
            <IonRow>{beveragesRender}</IonRow>
          </IonGrid>
        </IonCardContent>
      </IonCard>
    );
  }
}

export default BeveragesSummary;
