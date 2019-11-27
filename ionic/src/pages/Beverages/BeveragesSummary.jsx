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
            unitConverter:1,
            date: null,
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
  

    async getBeverages() {
        const instance = new DalImpl();
        let date = await instance.getLastValue('settings/activeDate');
        if (date) {
            let arrayDate = JSON.parse(date);
            this.setState({date: new Date(arrayDate[2], arrayDate[1], arrayDate[0]).getTime()});
        } else {
            // remove this when impl
            this.setState({date: new Date().setHours(0,0,0,0)});
        }


        let beveragesResponse = await instance.getLastValue(this.state.key)

        if (!beveragesResponse) {
            await this.initDefaultBeverages();
            await this.saveBeverage();
        } else {
            let beverage = JSON.parse(beveragesResponse);
            let activeDate = this.state.date;
            let lastDate = beverage.date;

            if (activeDate > lastDate) {
                await this.setState({beverages: beverage.beverageList});
                await this.resetQuantities();
            } else if (activeDate === lastDate) {
                await this.setState({beverages: beverage.beverageList});
            } else if (activeDate < lastDate) {
                let activeEndDate = new Date(activeDate)
                activeEndDate.setDate(activeEndDate.getDate() + 1);
                activeEndDate = new Date(activeEndDate.getTime() - 1);

                let pastBeverages = await instance.getLatestValues(this.state.key, new Date(activeDate), activeEndDate);
                if (pastBeverages) {
                    this.setState({ beverages: JSON.parse(pastBeverages).beverageList })
                }
            }            
        }
    }
  
    async resetQuantities() {
        await this.setState(prevState => ({
            beverages: prevState.beverages.map(
                el => el.quantity > 0 ? { ...el, quantity: 0 }: el
            )
        }))
        await this.saveBeverage();
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
        );
    }
}

export default BeveragesSummary;
