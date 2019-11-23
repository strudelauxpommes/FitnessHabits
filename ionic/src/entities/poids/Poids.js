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
import React, {Component, ChangeEvent} from 'react';
import {speedometer} from 'ionicons/icons';
import '../../theme/poids.css';
import {DalImpl} from '../../dal/DalImpl'

class Poids extends Component {
    constructor(props) {
        super(props);
        this.persist = new DalImpl()
        this.state = {
            poids: 0,
            taille: 179,
            imc: 0,
			errorPoids : "",
			errorGras : "",
			gras:0,
            unitePoids: null,
            uniteTaille: null
        };
    }
	validateInput1() {
		let poids = this.state.poids;	
		let errorPoids = "";
		let InputIsValid = true;
		if(!String(poids).match(/^\d{1,3}([\,\.]\d{1,2})?$/) && String(poids).length != 0){
			InputIsValid = false;
			errorPoids = "*Veuillez respecter ce format: 999.99";
		}
		this.setState({
			errorPoids: errorPoids
		});
		return InputIsValid;	
	 }
	 validateInput2() {
		 let gras = this.state.gras;
		 let InputIsValid = true;
		 let errorGras = "";
		 if(!String(gras).match(/^\d{1,2}([\,\.]\d{1,2})?$/) && String(gras).length != 0){
			InputIsValid = false;
			errorGras = "*Veuillez respecter ce format: 100%";
		 }
		 this.setState({
			errorGras: errorGras
		});
		return InputIsValid;	
	 }
    apicall = () => {
        if (this.persist.getLastValue("profil/poids") != null) {
            this.setState({
                poids: this
                    .persist
                    .getLastValue("profil/poids")
            });
        }

        if (this.persist.getValue("preferences/unitePoids") != null) {
            this.setState({
                unitePoids: this
                    .persist
                    .getValue("preferences/unitePoids")
            });
        } else if (this.persist.getValue("preferences/unitePoids") === null) {
            this.setState({unitePoids: "kg"});
        }
        if (this.persist.getValue("preferences/uniteTaille") != null) {
            this.setState({
                unitePoids: this
                    .persist
                    .getValue("preferences/uniteTaille")
            });
        } else if (this.persist.getValue("preferences/uniteTaille") === null) {
            this.setState({unitePoids: "cm"});
        }

        if (this.persist.getLastValue("profil/taille") != null) {
            this.setState({
                poids: this
                    .persist
                    .getLastValue("profil/taille")
            });
        }

    }
    surpoids = (event) => {
        this.apicall();
        var input = document.getElementById('poids');
        var imcslot = document.getElementById('imc');
        var timeout = null;
        var imc = 0;
        var taille = (this.state.taille) / 100;
        input.onkeyup = (e) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                this.setState({poids: input.value});
                this.persist.setValue("profil/poids",JSON.stringify(this.state.poids));
				if(this.validateInput1()){
					if (this.state.poids != 0) {
						imc = Math.round((this.state.poids / (taille * taille)) * 100) / 100;
						this.setState({imc: imc});
						if (imc <= 18.49) {
							imcslot.innerHTML = '<IonTitle id="imc">&#x1F7E1 IMC:' + imc + '</IonTitle>';
						} else if (imc >= 18.50 && imc <= 24.99) {
							imcslot.innerHTML = '<IonTitle id="imc">&#x26AA IMC:' + imc + '</IonTitle>';
						} else if (imc >= 25 && imc <= 29.99) {
							imcslot.innerHTML = '<IonTitle id="imc">&#x26A0	IMC:' + imc + '</IonTitle>';
						} else if (imc >= 30 && imc <= 34.99) {
							imcslot.innerHTML = '<IonTitle id="imc">&#x1F534 IMC:' + imc + '</IonTitle>';
						} else if (imc >= 35 && imc <= 39.99) {
							imcslot.innerHTML = '<IonTitle id="imc">&#x1F6D1 IMC:' + imc + '</IonTitle>';
						} else {
							imcslot.innerHTML = '<IonTitle id="imc">&#x1F6A8 IMC:' + imc + '</IonTitle>';
						}
					} else {
						imcslot.innerHTML = '<IonTitle id="imc"></IonTitle>';
					}
                console.log(this.state.poids);
                console.log(imc);
				}
            }, 500);
        }
    }
	pourcentageGras = (event) => {
		var input = document.getElementById('gras');
		var timeout = null;
		input.onkeyup = (e) => {
			timeout = setTimeout( ()=> {
				this.setState({gras: input.value});
				if(this.validateInput2()){
				
				}
				console.log(this.state.gras);
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
                                <IonIcon icon={speedometer}/>
                                Poids</IonTitle>
                        </IonCol>
                        <IonCol>
                            <IonTitle id="imc"></IonTitle>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <IonCardContent>
                    <IonItem text-center="text-center">
                        <IonInput
                            type="number"
                            id="poids" name="poids" 
                            ng-model="vm.onlyNumbers"
                            stacked="stacked"
                            required="required"
                            onIonChange={this.surpoids}></IonInput>
                        <IonLabel>
                            {this.state.unitePoids}</IonLabel>
                    </IonItem>
					<div className="errorMsg">{this.state.errorPoids}</div>
                </IonCardContent>
                <IonCardContent>
                    <IonItem text-center="text-center">
                        <IonInput
                            type="number"
							id="gras" name ="gras"
                            onIonChange={this.pourcentageGras}
                            ng-model="vm.onlyNumbers"
                            stacked="stacked"
                            placeholder="--%"></IonInput>
                        <IonLabel >
                            % Gras</IonLabel>
                    </IonItem>
					<div className="errorMsg">{this.state.errorGras}</div>
                </IonCardContent>
            </IonCard>

        );
    }
}
export default Poids;
