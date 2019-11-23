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
// import { any } from 'prop-types';

type Prop = {
    
}

type State = {
    sleepCollection: SleepCollection;
    backEndCollection: any
    averageSleep: number
}

export default class SleepDetail extends Component<RouteComponentProps, State> {
    constructor(props: RouteComponentProps) {
        super(props);

        this.state = {
            sleepCollection: new SleepCollection([]),
            averageSleep: moment.duration(0).as('milliseconds'),
            backEndCollection:[]
        }
    }

    async componentDidMount(){
        const sleepService = new SleepService();
        sleepService.getActiveDate()

        const activeDate = sleepService.getActiveDate()
    
        const backEndCollection = await sleepService.fetchHistory_v2()
        const displaySleepCollection = await sleepService.fetchHistory()
        displaySleepCollection.sortByAscendingStartDate()

        console.log(backEndCollection)
        console.log(displaySleepCollection)

        if(displaySleepCollection){
            this.setState({
                sleepCollection: displaySleepCollection,
                //averageSleep: displaySleepCollection.getAverageSleep(activeDate as any, 7 as any)
                averageSleep:12,
                backEndCollection:backEndCollection
            })
        }
    }

    displaySleepEdit(e: any) {
        e.preventDefault();
        this.props.history.push("/home");
    }

    saveNewSleepItem(e: any) {     

    }

    deleteSleepItemWithKey(key: Sleep) {
        const updatedCollection = this.state.backEndCollection.filter( (sc:SleepCollection) => {
            return sc.containsSleepItem(key.getId())
        })[0]

        updatedCollection.removeSleep(key)
        const activeDate = updatedCollection.activeDate.split("T")[0]

        const sleepService = new SleepService()
        sleepService.saveCollectionWithDate(updatedCollection, activeDate)        

        this.setState({sleepCollection: updatedCollection})
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
                        {this.state.sleepCollection.list.map((item:Sleep) =>                              
                            <SwipeableSleep
                                key={item.getId()}
                                sleep={item}
                                onEdit={this.displaySleepEdit}
                                onDelete={(e: any) => this.deleteSleepItemWithKey(e)}
                                history={this.props.history}
                            />)
                        }
                        </IonList>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    }
}

