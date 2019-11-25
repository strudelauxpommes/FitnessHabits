import {
    IonCard,
    IonCardContent,
    IonTitle,
    IonInput,
    IonLabel,
    IonItem,
	IonIcon,
    IonGrid,
    IonRow,
    IonCol
} from '@ionic/react';
import React, {Component} from 'react';
import {stopwatch} from 'ionicons/icons';
import '../../theme/glycemie.css';
import {DalImpl} from '../../dal/DalImpl'
class Glycemie extends Component {
	constructor(props) {
        super(props);
        this.persist = new DalImpl()
        this.state = {
	 glycemie: 0,
	 errors: "",
	 uniteGlycemie: "mmol/L"
        };
    };

	apicall = async() => {

		if(await this.persist.getLastValue("profil/glycemie") != null) {
			this.setState({glycemie: this.persist.getLastValue("profil/glycemie")});
		}
		if(await this.persist.getLastValue("preferences/uniteGlycemie") != null) {
			this.setState({uniteGlycemie: this.persist.getLastValue("preferences/uniteGlycemie")});
		}
		else if(await this.persist.getLastValue("preferences/uniteGlycemie") == null) {
			this.setState({uniteGlycemie: "mmol/L"});
		}
		
    
    }

	validateInput() {
		let glycemie = this.state.glycemie;
		let errors = "";
		let InputIsValid = true;
		if(!String(glycemie).match(/^\d{1,2}([\,\.]\d{1})?$/) && String(glycemie).length != 0){
			InputIsValid = false;
			errors = "*Veuillez respecter ce format: 99.9";
		}
		this.setState({
			errors: errors
		});
		return InputIsValid;	
	 }
    glycemie = async(event) => {
		await this.apicall();
		var timeout = null;
		var input = document.getElementById('glycemie');
		var msgslot = document.getElementById('msg');
		var currentValue = 0;
		clearTimeout(timeout);
		input.onkeyup = (e) => {
			let currentValue = this.state.glycemie;			
			timeout = setTimeout( ()=> {
				
				this.setState({glycemie: input.value});
				this.persist.setValue("profil/glycemie",this.state.glycemie)
				if(input.value != 0){	
					if(input.value < 4){
						msgslot.innerHTML = '<IonTitle id="msg">&#x1F489 Sucre </IonTitle>';
					}else if(input.value >= 4 && input.value <= 8){
						msgslot.innerHTML = '<IonTitle id="msg">&#x2714 Correct</IonTitle>';
					}else{
						msgslot.innerHTML = '<IonTitle id="msg">&#x1F468;&#x200D;&#x2695;&#xFE0F Medecin</IonTitle>';
					}
				}else{
					msgslot.innerHTML = '<IonTitle id="msg">'+currentValue+' mmol/L</IonTitle>';
				}
					if(this.validateInput()){}
					console.log(this.state.glycemie);
					console.log(currentValue);
			}, 500);
			
		}
	}
    render() {
        return (
            <IonCard>
                <IonGrid class="Gstyle">
                    <IonRow>
                        <IonCol>
                            <IonTitle>
							<IonIcon icon={stopwatch} /> Glycemie</IonTitle>
                        </IonCol>
						<IonCol>
                            <IonTitle id="msg"></IonTitle>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <IonCardContent>
                    <IonItem text-center="text-center">
                        <IonInput type="number" id="glycemie" name ="glycemie" pattern="^[0-9]{2-4}" ng-model="vm.onlyNumbers" stacked="stacked" onIonChange={this.glycemie}></IonInput>
		<IonLabel>{ this.state.uniteGlycemie }</IonLabel>
                    </IonItem>
					<div className="errorMsg">{this.state.errors}</div>
                </IonCardContent>
            </IonCard>
        );
    }
}
export default Glycemie;
