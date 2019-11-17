import { IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonCard, IonCardContent, IonCardHeader, IonContent, IonCardTitle,  IonIcon, IonGrid, IonRow, IonCol } from '@ionic/react';
import React  from 'react';
import { cafe } from 'ionicons/icons';


export default class BeveragesSummary extends React.Component {
        
    state = {
        dailyTotal:0,
        volumeUnit:" mL",
        quantity1: 0,
        beverageName1:"Café",
        volume1:125,
        quantity2: 0,
        beverageName2:"Eau",
        volume2:125,
        quantity3: 0,
        beverageName3:"Thé",
        volume3:125,
        quantity4: 0,
        beverageName4:"Perrier",
        volume4:125
    }
    
    calculateDailyTotal= () => {
        this.setState({
            dailyTotal: this.state.dailyTotal + ((this.state.quantity1 * this.state.volume1) + (this.state.quantity2 * this.state.volume2) + (this.state.quantity3 * this.state.volume3) + (this.state.quantity4 * this.state.volume4))
        });
    }

    onClickButton1 = () => {
        this.setState({
            quantity1: this.state.quantity1+1
        }, () => {
            this.calculateDailyTotal() 
        });
    }
    
    onClickButton2 = () => {
        this.setState({
            quantity2: this.state.quantity2+1
        }, () => {
                    this.calculateDailyTotal() 
                });
    }
    
    onClickButton3 = () => {
        this.setState({
            quantity3: this.state.quantity3+1
        }, () => {
                    this.calculateDailyTotal() 
                });
    }
    
    onClickButton4 = () => {
        this.setState({
            quantity4: this.state.quantity4+1
        }, () => {
                    this.calculateDailyTotal() 
                });
    }
    
    render() {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Fitness Habits Sommaire</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <IonCard>
                                <IonCardHeader style={{backgroundColor: '#99b3ff'}}>
                                    <IonCardTitle> 
                                        <IonRow>
                                            <IonCol>
                                                <IonIcon style={{textAlign:'left'}} icon={cafe} ></IonIcon> 
                                                <p style={{display:'inline'}}>&nbsp; Breuvages</p>
                                            </IonCol>
                                            <IonCol style={{textAlign:'right'}}>
                                                {this.state.dailyTotal + this.state.volumeUnit}
                                            </IonCol>
                                        </IonRow>
                                    </IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    <IonGrid style={{textAlign:'center'}}>
                                                <IonRow>
                                                    <IonCol> 
                                                        <IonButton onClick={this.onClickButton1}>{this.state.quantity1}</IonButton>                        
                                                    </IonCol>
                                                    <IonCol>
                                                        <IonButton onClick={this.onClickButton2}>{this.state.quantity2}</IonButton>                        
                                                    </IonCol>
                                                    <IonCol>
                                                        <IonButton onClick={this.onClickButton3}>{this.state.quantity3}</IonButton>                        
                                                    </IonCol>
                                                    <IonCol>
                                                        <IonButton onClick={this.onClickButton4}>{this.state.quantity4}</IonButton>                        
                                                    </IonCol>
                                                </IonRow>
                                                <IonRow>
                                                    <IonCol>
                                                        {this.state.beverageName1}
                                                    </IonCol>
                                                    <IonCol>
                                                       {this.state.beverageName2}
                                                    </IonCol>
                                                    <IonCol>
                                                       {this.state.beverageName3}
                                                    </IonCol>
                                                    <IonCol>
                                                       {this.state.beverageName4}
                                                    </IonCol>
                                                </IonRow>
                                                <IonRow>
                                                    <IonCol>
                                                       {this.state.volume1 + this.state.volumeUnit}
                                                    </IonCol>
                                                    <IonCol>
                                                       {this.state.volume2 + this.state.volumeUnit}
                                                    </IonCol>
                                                    <IonCol>
                                                       {this.state.volume3 + this.state.volumeUnit}
                                                    </IonCol>
                                                    <IonCol>
                                                       {this.state.volume4 + this.state.volumeUnit}
                                                    </IonCol>
                                                </IonRow>
                                    </IonGrid>
                                </IonCardContent>
                            </IonCard>
                </IonContent>
            </IonPage>
            );
    }
}
