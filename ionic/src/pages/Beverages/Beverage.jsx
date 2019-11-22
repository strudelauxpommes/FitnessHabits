import React, { Component } from 'react'
import { IonRow, IonCol, IonButton, IonItem, IonFabButton, IonIcon } from '@ionic/react';
import Dal from '../../dal/Dal'
import { starOutline } from 'ionicons/icons';

export class Beverage extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            unit: "ml"
        }
        this.increment=this.increment.bind(this);
    }
    
    increment(){
        this.props.onIncrement(this.props.beverage);
    }

    render() {
        return (
                <IonItem style={{justifyContent: 'center'}}>
                    <IonFabButton size={"small"}>
                        <IonIcon icon={starOutline} />
                    </IonFabButton>
                    {this.props.beverage.name}
                    {this.props.beverage.volume + this.state.unit}
                </IonItem>
        )
    }
}

export default Beverage
