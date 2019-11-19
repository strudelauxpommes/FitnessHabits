import React, { Component } from 'react';
import { IonPage, IonGrid, IonContent, IonCard, IonCardHeader, IonCardTitle, IonRow, IonCol, IonIcon, IonCardContent } from '@ionic/react';
import data from './data.json';
import { cafe } from 'ionicons/icons';
import Beverage from './Beverage';

class Beverages extends Component {

    constructor() {
        super();
        this.state = {
            beverages: [],
            total: 0
        }
        this.onIncrease=this.onIncrease.bind(this);
    }

    async componentDidMount() {
        await this.setState({beverages: data.items})
        for (let beverage of this.state.beverages) {
            await this.setState({total: this.state.total + beverage.quantity * beverage.volume});
        }
    }

    async onIncrease (data) {
        await this.setState(prevState => ({
            beverages: prevState.beverages.map(
                el => el.name === data.name? { ...el, quantity: el.quantity+1 }: el
            )
        }))
        this.setState({total: this.state.total+data.volume})
    }

    render() {
        let beveragesRender = [];
        for (let beverage of this.state.beverages) {
            beveragesRender.push(<Beverage onIncrement={this.onIncrease} beverage={beverage} key={beverage.name}></Beverage>);
        }
        return (
            <IonPage>
                <IonContent>
                    <IonCard>
                        <IonCardHeader style={{backgroundColor: '#99b3ff'}}>
                            <IonCardTitle> 
                                <IonRow>
                                    <IonCol>
                                        <IonIcon style={{textAlign:'left'}} icon={cafe} ></IonIcon> 
                                        <p style={{display:'inline'}}>&nbsp; Breuvages</p>
                                    </IonCol>
                                    <IonCol style={{textAlign:'right'}}>
                                        {this.state.total}
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

export default Beverages;