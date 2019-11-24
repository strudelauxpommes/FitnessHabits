import React, { Component } from 'react';
import { IonPage, IonGrid, IonContent, IonRow, IonCol, IonIcon, IonToolbar, IonTitle, IonLabel, IonList, IonItem, IonFabButton, IonFab } from '@ionic/react';
import { cafe, add } from 'ionicons/icons';
import Beverage from './Beverage';
import { DalImpl } from '../../dal/DalImpl'
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

class BeveragesDetail extends Component {

    constructor() {
        super();
        this.state = {
            beverages: [],
            total: 0,
            unit: "L",
            unitConverter:1,
            favorites:0,
            date: [],
            key: 'beverage/beverageList'
        }
        this.onIncrease=this.onIncrease.bind(this);
        this.onDecrease=this.onDecrease.bind(this);
        this.onFavorite=this.onFavorite.bind(this);
    }

    async componentDidMount() {

        await this.getBeverages();
        //ici: setstate this.state.unit en allant chercher le parametre 
        //
        if (this.state.unit==="on") {
          await  this.setState({unitConverter:0.034})
        } else {
            await this.setState({unitConverter:0.001})
        }
        for (let beverage of this.state.beverages) {
            await this.setState({total: (this.state.total + (beverage.quantity * beverage.volume))});
        }
         await this.setState({total:(this.state.total * this.state.unitConverter).toFixed(3)});
    }
    
    async onFavorite (data, isFavoriting) {
        let favoriteCount = 0;
        this.state.beverages.map(beverage => {
            if (beverage.favorite) {
                favoriteCount++;
            }
        });

        if (isFavoriting && favoriteCount < 4) {
            await this.setState(prevState => ({
                beverages: prevState.beverages.map(
                    el => el.name === data.name? { ...el, favorite: true}: el
                )
            }))
            await this.saveBeverage();
        } else if (!isFavoriting) {
            await this.setState(prevState => ({
                beverages: prevState.beverages.map(
                    el => el.name === data.name? { ...el, favorite: false}: el
                )
            }))
            await this.saveBeverage();
        }
    }

    async onIncrease (data) {
        await this.setState(prevState => ({
            beverages: prevState.beverages.map(
                el => el.name === data.name? { ...el, quantity: (el.quantity+1) }: el
            )
        }))
        this.setState({total: parseFloat(this.state.total) + this.state.unitConverter*parseFloat(data.volume)})
        await this.saveBeverage();

    }
    
    async onDecrease (data){
        await this.setState(prevState => ({
            beverages: prevState.beverages.map(
                el => el.name === data.name && el.quantity>0? { ...el, quantity: (el.quantity-1) }: el
            )
        }))
        if (this.state.total>0) {
            this.setState({total: parseFloat(this.state.total) - this.state.unitConverter*parseFloat(data.volume)})
        }
        await this.saveBeverage();
    }

    async getBeverages() {
        const instance = new DalImpl();
        let date = await instance.getLastValue('settings/activeDate');

        if (date) {
            await this.setState({date: JSON.parse(date)});
        } else {
            // remove this when impl
            let todayDate = new Date();
            await this.setState({date: [todayDate.getUTCDate(), todayDate.getUTCMonth(), todayDate.getFullYear()]})
        }

        let activeDate = new Date(this.state.date[2], this.state.date[1], this.state.date[0]);

        let activeEndDate = new Date(activeDate)
        activeEndDate.setDate(activeDate.getDate() + 1)

        let pastBeverages = await instance.getLatestValues(this.state.key, activeDate, activeEndDate);
        if (pastBeverages) {
            await this.setState({ beverages: JSON.parse(pastBeverages).beverageList })
        }
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
            beveragesRender.push(<Beverage onFavorite={this.onFavorite} onIncrement={this.onIncrease} onDecrement={this.onDecrease} beverage={beverage} key={beverage.name}></Beverage>);
        }
        return (
            <IonPage>
                    <IonToolbar class="new-beverages-style">
                            <IonRow>
                                <IonCol style={{textAlign:'left'}}>
                                <a style={{color:'inherit', textDecoration: 'none'}} href="/beverages-summary">
                                    <IonTitle> <IonIcon style={{textAlign:'left'}} icon={cafe} ></IonIcon> &nbsp; Breuvages</IonTitle>
                                </a>
                                </IonCol>
                                <IonCol style={{textAlign:'right'}}>
                                    <IonLabel>{this.state.total + this.state.unit}</IonLabel>
                                </IonCol>
                                
                            </IonRow>
                    </IonToolbar>
                        <IonContent>
                        <IonFab vertical={"top"} slot={"fixed"} horizontal={"end"} edge>
                            <IonFabButton size={"small"} color={"success"}>
                                <IonIcon icon={add}/>
                            </IonFabButton>
                        </IonFab>
                        <IonList>
                            {beveragesRender}
                        </IonList>
                </IonContent>
            </IonPage>
        );
    }
}

export default BeveragesDetail;