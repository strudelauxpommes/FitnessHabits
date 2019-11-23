import React, { Component } from 'react'
import { IonRow, IonCol, IonButton, IonItem, IonFabButton, IonIcon, IonGrid, IonInput, IonLabel } from '@ionic/react';
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
                    <IonGrid>
                        <IonRow>
                            <IonCol size={"2"}>
                                <IonFabButton size={"small"}>
                                    <IonIcon icon={starOutline} />
                                </IonFabButton>
                            </IonCol>
                            <IonCol size={"3"} style={{textAlign:'center'}}>
                                <IonRow>
                                    {this.props.beverage.name}
                                </IonRow>
                                <IonRow>
                                    {this.props.beverage.volume + this.state.unit}
                                </IonRow>
                                <IonRow>
                                    {this.props.beverage.comment}
                                </IonRow>
                            </IonCol>
                            <IonCol size={"6"}>
                                <IonRow>
                                    <IonCol>
                                        <IonFabButton size={"small"}>
                                            <IonIcon icon={add} />
                                        </IonFabButton>
                                    </IonCol>
                                    <IonCol>
                                        <IonInput placeholder="99"></IonInput>
                                    </IonCol>
                                    <IonCol>
                                        <IonFabButton size={"small"}>
                                            <IonIcon icon={remove} />
                                        </IonFabButton>
                                    </IonCol>
                                </IonRow>
                            </IonCol>
                    </IonRow>
                    </IonGrid>
                </IonItem>
        )
    }
}

export default Beverage
