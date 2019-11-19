import { IonIcon, IonItemSliding, IonItemOption, IonItemOptions } from '@ionic/react';
import { trash, informationCircle } from 'ionicons/icons';
import React from 'react';
import { Sleep } from '../../entities/sleep/sleep.js';
import { HistoricInformationItemCell } from "./HistoricInformationItemCell";

export function SwipeableSleep(props: {
  key: number
  sleep: Sleep;
  onEdit: (e:any) => void;
  onDelete: (e:any) => void;
  history:any
}) {
    return <IonItemSliding>
              <IonItemOptions>
                  <IonItemOption onClick={(e) => {
                    props.history.push({
                      pathname:'/sleep-detail-edit',
                      state:{
                        key:props.sleep.getId(),
                      }
                    });
                  }}>
                  <IonIcon icon={informationCircle} class='icon-swipe'></IonIcon>
                </IonItemOption>
                <IonItemOption color="danger" onClick={
                    (e) => props.onDelete(props.sleep.getId())
                }>
                  <IonIcon icon={trash} class='icon-swipe'></IonIcon>
                </IonItemOption>
              </IonItemOptions>
                <HistoricInformationItemCell sleep={props.sleep} />
            </IonItemSliding>;
}


