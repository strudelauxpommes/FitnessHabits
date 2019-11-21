import {
    IonCard,
    IonCardTitle,
    IonCardContent,
    IonGrid,
    IonPage,
    IonContent,
    IonHeader,
    IonList,
} from '@ionic/react';

import React, { Component } from 'react';
import { moon } from 'ionicons/icons';
import { SwipeableSleep } from './SwipeableSleep';
import { Sleep, SleepCollection } from '../../entities/sleep/sleep';
import { GeneralInformationItemCell } from './GeneralInformationItemCell';
import SleepService from '../../services/sleep/SleepService';
import { RouteComponentProps } from 'react-router';

import moment from 'moment'
import { HeaderToolBarWithImage } from './HeaderToolBarWithImage';

type State = {
    sleepCollection: SleepCollection;
    averageSleep: number
}

const sleepService = SleepService()

export default class SleepDetail extends Component<RouteComponentProps, State> {

    constructor(props: RouteComponentProps) {
        super(props);

        const sleepCollection = sleepService.fetch()
        const now = '2019-11-01T06:00:00-05:00' //Dans le futur cette info proviendra de la config 
        const sleepAverageLast7Days = sleepCollection.getAverageSleep(moment.parseZone(now), 7)

        this.state = {
            sleepCollection: sleepCollection,
            averageSleep: sleepAverageLast7Days.as('milliseconds')
        }
    }

    displaySleepEdit(e: any) {
        e.preventDefault();
        this.props.history.push("/home");
    }

    saveNewSleepItem(e: any) {
        console.log(e);
        sleepService.save();
        const newCollection = sleepService.fetch();
        console.log(newCollection);
        this.setState({ sleepCollection: newCollection });
    }

    deleteSleepItemWithKey(key: any) {
        sleepService.delete(key);
        console.log(sleepService.fetch());
        this.setState({ sleepCollection: sleepService.fetch() });
    }

    render() {
        return <IonPage>
            <IonHeader>
                <HeaderToolBarWithImage title="Sommeil" imageName={moon} />
            </IonHeader>
            <IonContent>
                <IonCard class='ion-card'>
                    <IonCardTitle>Informations Générales</IonCardTitle>
                    <IonCardContent>
                        <IonGrid>
                            <GeneralInformationItemCell labelTitle='Dernière période' labelSubtitle='31/10/2019' labelValue='7' />
                            <GeneralInformationItemCell labelTitle='Durée Moyenne' labelSubtitle='7 derniers jours' labelValue={moment.utc(this.state.averageSleep).format('h:mm')} />
                        </IonGrid>
                    </IonCardContent>
                </IonCard>
                <IonCard class='ion-card'>
                    <IonCardTitle>Historique</IonCardTitle>
                    <IonCardContent>
                        <IonList>
                            {this.state.sleepCollection.list.map((item: Sleep) =>
                                <SwipeableSleep
                                    key={item.getId()}
                                    sleep={item}
                                    onEdit={this.displaySleepEdit}
                                    onDelete={(e: any) => this.deleteSleepItemWithKey(e)}
                                    history={this.props.history}
                                />)}
                        </IonList>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    }
}

