import React, { Component } from 'react'
import { IonRow, IonCol, IonButton, IonItem, IonFabButton, IonIcon } from '@ionic/react';
import Dal from '../../dal/Dal'
import { starOutline } from 'ionicons/icons';
import { add } from 'ionicons/icons';
import { remove } from 'ionicons/icons';

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
                <IonItem >
                    
                    <IonFabButton size={"small"} style={{float:"left"}}>
                        <IonIcon icon={starOutline} />
                    </IonFabButton>

                    {this.props.beverage.name}
                    {this.props.beverage.volume + this.state.unit}
                    
                    <IonFabButton size={"small"} style={{float: "right", position:"absolute", right: 100}}>
                        <IonIcon icon={add} />
                    </IonFabButton>

                    <IonFabButton size={"small"} style={{position:"absolute", right: 0}}>
                    <IonIcon icon={remove} />
                    </IonFabButton>

                </IonItem>
        )
    }
}

export default Beverage
