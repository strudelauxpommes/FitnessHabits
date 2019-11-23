import React, { Component } from 'react';
import { IonPage, IonGrid, IonContent, IonCard, IonCardHeader, IonCardTitle, IonRow, IonCol, IonIcon, IonCardContent, IonLabel, IonTitle } from '@ionic/react';
import data from './data.json';
import { cafe } from 'ionicons/icons';
import FavoriteBeverage from './FavoriteBeverage';
import Dal from '../../dal/Dal'

class BeveragesSummary extends Component {

    constructor() {
        super();
        this.state = {
            beverages: [],
            total: 0,
            unit: "L",
            unitConverter:1
        }
        this.onIncrease=this.onIncrease.bind(this);
    }

    async componentDidMount() {
        await this.setState({beverages: data.items})
        //ici: setstate this.state.unit en allant chercher le parametre 
        //
        if (this.state.unit==="on") {
            this.setState({unitConverter:0.033814})
        } 
        for (let beverage of this.state.beverages) {
            await this.setState({total: this.state.unitConverter*(this.state.total + (beverage.quantity * beverage.volume/1000))});
        }
        
    }

    async onIncrease (data) {
        await this.setState(prevState => ({
            beverages: prevState.beverages.map(
                el => el.name === data.name? { ...el, quantity: this.state.unitConverter * (el.quantity+1) }: el
            )
        }))
        this.setState({total: this.state.total + (this.state.unitConverter*data.volume/1000)})
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
                                <IonRow>
                                    <IonCol style={{textAlign:'left'}}>
                                        <IonTitle><IonIcon  icon={cafe} ></IonIcon>  &nbsp; Breuvages</IonTitle>
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
}

export default BeveragesSummary;