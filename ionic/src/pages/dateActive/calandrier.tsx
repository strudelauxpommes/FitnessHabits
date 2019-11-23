import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonDatetime,
  IonButton,
  IonIcon
} from '@ionic/react';
import {calendar} from 'ionicons/icons';
import './Home.css';
import { SaveDateActive } from './StorageDate'; //GetDateActive
import React from 'react';



var myDate = new Date();
const cleDate = "settings/dateActive";



function ParamDate(haveLimit : boolean) {

 


    var myDate = new Date();
    var jour = myDate.getDate();
    var mois = myDate.getMonth();
    var annee = myDate.getFullYear();

    var returnDate;

    mois = mois + 1;

    if (haveLimit) {
        if (mois <= 3) {
            mois = mois + 12;
            annee = annee - 1;
        }
        mois = mois - 3;
       
    }

    returnDate = annee + '-';

    if (mois < 10) {
        returnDate = returnDate + '0';
    }

    returnDate = returnDate + mois + '-';

    if (jour < 10) {
        returnDate = returnDate + '0';
    }

    
    return returnDate + jour;


}



const Home: React.FC = () => {
  return (
            <IonIcon icon={calendar}></IonIcon>
                      <IonDatetime displayFormat="YYYY/MM/DD" min={ParamDate(true)} max={ParamDate(false)} value={myDate.toString()}
                      onIonChange={ 
                        (e) =>   SaveDateActive(cleDate, (e.target as HTMLInputElement).value)
                           }
                      >
                      </IonDatetime>                   
  );
};

export default Home;