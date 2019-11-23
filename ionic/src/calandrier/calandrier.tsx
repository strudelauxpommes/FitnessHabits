import { IonCard, IonDatetime, IonIcon } from '@ionic/react';
import { calendar, warning } from 'ionicons/icons';
import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Dal from './../dal/Dal';
import { DalImpl } from './../dal/DalImpl';
import './calandrier.css';


var myDate = new Date();
const cleDate = "settings/dateActive";
const dateInst: Dal = new DalImpl();
dateInst.setValue(cleDate, [myDate.getDate(), myDate.getMonth() + 1, myDate.getFullYear()]);

function ParamDate(haveLimit: boolean) {
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



export class Calendrier extends Component {
  render() {
    return (
      <IonCard>
        <div id="ico"><IonIcon icon={calendar}></IonIcon></div>
        <IonDatetime
          displayFormat="YYYY/MM/DD"
          min={ParamDate(true)}
          max={ParamDate(false)}
          value={myDate.toString()}
          onIonChange={async (e) => {
            var utcDate = new Date((e.target as HTMLInputElement).value);

            if ((utcDate.getDate() !== myDate.getDate()) || (utcDate.getMonth() !== myDate.getMonth()) || (utcDate.getFullYear() !== myDate.getFullYear())) {
              const element = <IonIcon icon={warning}></IonIcon>;
              ReactDOM.render(element, document.getElementById("ico"));
            }
            else {
              const element1 = <IonIcon icon={calendar}></IonIcon>;
              ReactDOM.render(element1, document.getElementById("ico"));
            }

            await dateInst.setValue(cleDate, [utcDate.getDate(), utcDate.getMonth() + 1, utcDate.getFullYear()]);
          }
          }
        />

      </IonCard >
    )
  }

};

export default Calendrier;