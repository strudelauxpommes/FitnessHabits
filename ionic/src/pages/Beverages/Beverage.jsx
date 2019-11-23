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
                            <IonCol size={"4"}>
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
                                <IonRow style={{justifyContent:'end'}}>
                                        <IonCol size={"5"}>
                                            <IonFabButton size={"small"}>
                                                <IonIcon icon={add} />
                                            </IonFabButton>
                                        </IonCol>
                                            <IonCol size={"2"} >
                                            <IonInput inputmode="numeric" placeholder="99" style={{textAlign:'center'}}></IonInput>
                                        </IonCol>
                                        <IonCol size={"5"}>
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
