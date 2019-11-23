import {
    IonApp,
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonInput,
    IonLabel,
    IonItem,
    IonGrid,
    IonRow,
    IonCol
} from '@ionic/react';
  import React, { Component , ChangeEvent} from 'react';
  //import Data from '../dal/Dal';


  class Poids extends Component {
    state = {
        poids: 0,
        taille: 180,
        imc: 0
    };

    surpoids = (event) => {

        var input = document.getElementById('poids');
        var imcslot = document.getElementById('imc');
        var timeout = null;
        var imc = 0;
        var taille = (this.state.taille)/100;

        input.onkeyup = (e) => {
            clearTimeout(timeout);
            timeout = setTimeout( ()=> {
                //input = document.getElementById('poids');
                this.setState({poids: input.value});
                if(this.state.poids != 0){
					imc = Math.round((this.state.poids/(taille*taille)) * 100)/100;
					this.setState({imc: imc});
					if(imc <= 18.49){
						imcslot.innerHTML = '<IonTitle id="imc">&#x1F7E1 IMC:'+imc+'</IonTitle>';
					}else if(imc >= 18.50 && imc <= 24.99){
						imcslot.innerHTML = '<IonTitle id="imc">&#x26AA IMC:'+imc+'</IonTitle>';
					}else if(imc >= 25 && imc <= 29.99){
						imcslot.innerHTML = '<IonTitle id="imc">&#x26A0	IMC:'+imc+'</IonTitle>';
					}else if(imc >= 30 && imc <= 34.99){
						imcslot.innerHTML = '<IonTitle id="imc">&#x1F534 IMC:'+imc+'</IonTitle>';
					}else if(imc >= 35 && imc <= 39.99){
						imcslot.innerHTML = '<IonTitle id="imc">&#x1F6D1 IMC:'+imc+'</IonTitle>';
					}else{
						imcslot.innerHTML = '<IonTitle id="imc">&#x1F6A8 IMC:'+imc+'</IonTitle>';
					}
                    	
			}else{
				imcslot.innerHTML = '<IonTitle id="imc"> IMC: </IonTitle>';
			}
                

                
                console.log(this.state.poids);
                console.log(imc);

            
            }, 500);
           
        }
        

        
        
        
        
    }

    
    render() {

        const Wstyle = {    
            backgroundColor: '#8533ff',
            color: 'white'
        };

        const Gstyle = {
            backgroundColor: '#ac3973',
            color: 'white'
        }

        return (
           

                    <IonCard>
                        <IonGrid style={Wstyle}>
                            <IonRow>
                                <IonCol>
                                    <IonTitle>Poids</IonTitle>
                                </IonCol>
                                <IonCol>
                                    <IonTitle id="imc">IMC</IonTitle>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                        <IonCardContent>

                            <IonGrid>

                                <IonRow>
                                
                                    <IonCol>
                                       <form>
                                        <IonItem text-center="text-center">
                                            <IonInput type="number" id="poids" stacked="stacked" required onIonChange={this.surpoids}></IonInput>
                                        </IonItem>

                                        <IonItem text-center="text-center">
                                            <IonLabel>
                                                Kg</IonLabel>
                                        </IonItem>
                                      </form>
                                    </IonCol>
                                
                                    <IonCol>
                                        <form>
                                        <IonItem text-center="text-center">
                                            <IonInput type="number" stacked="stacked" placeholder="--%"></IonInput>
                                        </IonItem>

                                        <IonItem text-center="text-center">
                                            <IonLabel >
                                                % Gras</IonLabel>
                                        </IonItem>
                                    </form>
                                    </IonCol>
                                
                                </IonRow>
                            </IonGrid>

                        </IonCardContent>
                    </IonCard>
                   
                

            
        );
        }

    }
   export default Poids;