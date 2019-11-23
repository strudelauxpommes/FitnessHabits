import React, { Component } from 'react';
import { IonPage, IonGrid, IonContent, IonCard, IonCardHeader, IonCardTitle, IonRow, IonCol, IonIcon, IonCardContent, IonLabel } from '@ionic/react';
import data from './data.json';
import { cafe } from 'ionicons/icons';
import FavoriteBeverage from './FavoriteBeverage';
import { DalImpl } from '../../dal/DalImpl'

class BeveragesSummary extends Component {

    constructor() {
        super();
        this.state = {
            beverages: [],
            total: 0,
            unit: "L",
            unitConverter:1,
            date: Date
        }
        this.onIncrease=this.onIncrease.bind(this);
    }

    async componentDidMount() {
        
        await this.getBeverages();

        //ici: setstate this.state.unit en allant chercher le parametre 
        //
        if (this.state.unit==="on") {
            this.setState({unitConverter:0.033814})
        } 
        for (let beverage of this.state.beverages) {
            await this.setState({total: this.state.unitConverter*(this.state.total + beverage.quantity * beverage.volume)});
        }
        
    }

    async getBeverages() {
        const instance = new DalImpl();
        // let date = await instance.getLastValue('activeDate');

        // let activeDate = new Date();
        // await this.setState({date: activeDate});

        let beverages = await instance.getLastValue('beverage/listBeverage')
        if (!beverages) {
            alert('none');
            await this.initDefaultBeverages();
            await instance.setValue('beverage/listBeverage', JSON.stringify(this.state.beverages));
        } else {
            let favorites = JSON.parse(beverages).filter(beverage => beverage.favorite === true);
            await this.setState({beverages: favorites})
        }
    }

    async initDefaultBeverages() {
        let defaultBeverages = [
            this.defaultBeverage('Café'),
            this.defaultBeverage('Eau'),
            this.defaultBeverage('Thé'),
            this.defaultBeverage('Perrier'),
        ]

        await this.setState({beverages: defaultBeverages});
    }

    defaultBeverage(beverageName) {
        return {
            name: beverageName,
            volume: 125,
            quantity: 0,
            comment: "",
            favorite: true
        }
    }

    async onIncrease (data) {
        const instance = new DalImpl();

        await this.setState(prevState => ({
            beverages: prevState.beverages.map(
                el => el.name === data.name? { ...el, quantity: this.state.unitConverter * (el.quantity+1) }: el
            )
        }))
        this.setState({total: this.state.total+data.volume})

        await instance.setValue('beverage/listBeverage', JSON.stringify(this.state.beverages));
    }

    render() {
        let beveragesRender = [];
        for (let beverage of this.state.beverages) {
            beveragesRender.push(<FavoriteBeverage onIncrement={this.onIncrease} beverage={beverage} key={beverage.name}></FavoriteBeverage>);
        }
        return (
            <IonPage>
                <IonContent>
                    <IonCard>
                        <IonCardHeader class="new-beverages-style">
                            <IonCardTitle> 
                                <IonRow>
                                    <IonCol>
                                        <IonIcon style={{textAlign:'left'}} icon={cafe} ></IonIcon> 
                                        <p style={{display:'inline'}}>&nbsp; Breuvages</p>
                                    </IonCol>
                                    <IonCol style={{textAlign:'right'}}>
                                        <IonLabel>{this.state.total + this.state.unit}</IonLabel>
                                    </IonCol>
                                </IonRow>
                            </IonCardTitle>
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
}

export default BeveragesSummary;