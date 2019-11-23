import {
    IonCard,
    IonCardContent,
    IonTitle,
    IonInput,
    IonLabel,
    IonItem,
    IonGrid,
	IonIcon,
    IonRow,
    IonCol
} from '@ionic/react';
  import React, { Component , ChangeEvent} from 'react';
  import { speedometer} from 'ionicons/icons';
  import '../../theme/poids.css';;
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
                this.setState({poids: input.value});
                if(this.state.poids != 0){
					imc = Math.round((this.state.poids/(taille*taille)) * 100)/100;
					this.setState({imc: imc});
					if(imc <= 18.49){
						imcslot.innerHTML = '<IonTitle id="imc">&#x1F7E1 IMC:' +imc+'</IonTitle>';
					}else if(imc >= 18.50 && imc <= 24.99){
						imcslot.innerHTML = '<IonTitle id="imc">&#x26AA IMC:' +imc+'</IonTitle>';
					}else if(imc >= 25 && imc <= 29.99){
						imcslot.innerHTML = '<IonTitle id="imc">&#x26A0	IMC:' +imc+'</IonTitle>';
					}else if(imc >= 30 && imc <= 34.99){
						imcslot.innerHTML = '<IonTitle id="imc">&#x1F534 IMC:' +imc+'</IonTitle>';
					}else if(imc >= 35 && imc <= 39.99){
						imcslot.innerHTML = '<IonTitle id="imc">&#x1F6D1 IMC:' +imc+'</IonTitle>';
					}else{
						imcslot.innerHTML = '<IonTitle id="imc">&#x1F6A8 IMC:' +imc+'</IonTitle>';
					}    	
			}else{
				imcslot.innerHTML = '<IonTitle id="imc"></IonTitle>';
			}
                console.log(this.state.poids);
                console.log(imc);
            }, 500);
        }
    }
    render() {
        return (
            <IonCard>
                <IonGrid class="Wstyle">
                    <IonRow>
                        <IonCol>
                            <IonTitle>
							<IonIcon icon={speedometer} /> Poids</IonTitle>
                        </IonCol>
                        <IonCol>
							<IonTitle id="imc"></IonTitle>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                 <IonCardContent>
                    <IonItem text-center="text-center">
                        <IonInput type="number" id="poids" pattern="[0-9]*" 
						ng-model="vm.onlyNumbers" stacked="stacked" required 
						onIonChange={this.surpoids}></IonInput>
						<IonLabel>
                        Kg</IonLabel>
                    </IonItem>
				</IonCardContent>
				<IonCardContent>
                    <IonItem text-center="text-center">
                        <IonInput type="number" pattern="^[0-9]{2-4}" maxlength={4}
						ng-model="vm.onlyNumbers" stacked="stacked" placeholder="--%"></IonInput>
						<IonLabel >
                         % Gras</IonLabel>
                    </IonItem>
                </IonCardContent>
            </IonCard>
            
        );
    }
}
export default Poids;