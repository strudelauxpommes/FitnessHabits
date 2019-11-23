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
import { DalImpl } from '../../dal/DalImpl';
import Dal from '../../dal/Dal';



var myDate = new Date();
const cleDate = "settings/dateActive";
const dateInst: Dal = new DalImpl();



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
            onIonChange={ async (e) => {var utcDate = new Date((e.target as HTMLInputElement).value);
              var dateActu = utcDate.getDate();
              var moisActu = utcDate.getMonth()+1;
              var anneActu = utcDate.getFullYear();
              var tab = [dateActu,moisActu,anneActu];
              
              await dateInst.setValue(cleDate, tab);
            }
                }/>                    
  );
};

export default Home;