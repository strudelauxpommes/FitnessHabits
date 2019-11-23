import { IonPage } from '@ionic/react';
import React from 'react';
import { useState } from 'react';
import moment from 'moment';
import Summary from '../../components/Summary';
import { ActivityService } from '../../services/ActivityService';

const ActivitySummary = () => {
  let datesTest = [
    {
      jour : "2019/11/19",
      activites : [
        {
          id : 1,
          titre : "Yoga",
          duree : 60,
          intensite : 2
        },
        {
          id : 2,
          titre : "Vélo",
          duree : 40,
          intensite : 5
        },
        {
          id : 3,
          titre : "Soccer",
          duree : 45,
          intensite : 8
        }
      ]
    },
    {
      jour : "2019/11/18",
      activites : [
        {
          id : 4,
          titre : "Gym",
          duree : 60,
          intensite : 6
        },
        {
          id : 5,
          titre : "Vélo",
          duree : 40,
          intensite : 5
        },
        {
          id : 6,
          titre : "Tennis",
          duree : 40,
          intensite : 8
        }
      ]
    },
    {
      jour : "2019/11/17",
      activites : [
        {
          id : 7,
          titre : "Vélo",
          duree : 40,
          intensite : 4
        },
        {
          id : 8,
          titre : "Soccer",
          duree : 40,
          intensite : 7
        }
      ]
    }
  ]
  
  let favorisTest = {
    premier : "Yoga",
    deuxieme :"Vélo",
    troisieme :"Soccer"
  }
  
  return (
    <IonPage>
      <Summary dates={datesTest} favoris={favorisTest}></Summary>
    </IonPage>
  );
};

export default ActivitySummary;
