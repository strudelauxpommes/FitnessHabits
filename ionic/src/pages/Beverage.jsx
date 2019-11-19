import React, { Component } from 'react'
import { IonRow, IonCol, IonButton } from '@ionic/react';

export class Beverage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <IonCol>
                <IonRow>
                    <IonButton onClick={this.props.onIncrement}>{this.props.beverage.quantity}</IonButton>
                </IonRow>
                <IonRow>
                    {this.props.beverage.name}
                </IonRow>
                <IonRow>
                    {this.props.beverage.volume}
                </IonRow>
            </IonCol>
        )
    }
}

export default Beverage
