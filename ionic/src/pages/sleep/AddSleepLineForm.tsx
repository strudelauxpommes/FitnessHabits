import { IonList, IonItem, IonLabel, IonButton, IonInput, IonSelect, IonSelectOption, IonTextarea, IonPage, IonContent, IonHeader, IonCard, IonCardContent } from '@ionic/react';
import React from 'react';
import { HeaderToolBarWithImage } from './HeaderToolBarWithImage';
import { moon } from 'ionicons/icons';
import SleepService from '../../services/sleep/SleepService';
import { Sleep } from '../../entities/sleep/sleep';
import { RouteComponentProps } from 'react-router';

type Props = {
    addItemFunc: (item:any) =>void
    location:any
}

type State = {
    startTime:string,
    endTime:string,
    wakeUpCount:string,
    wakeUpState:string,
    wakeUpComment:string,
}

export class AddSleepLineForm extends React.Component<RouteComponentProps, State> {
  
  constructor(props: RouteComponentProps) {
    super(props);
    
    const key = props.location.state.key;
    const sleepService = new SleepService();

    const currentItem:Sleep = new Sleep({
        "id": 1,
        "start": "2016-11-23T23:00:00-05:00",
        "end": "2016-11-24T07:00:00-05:00",
        "numberOfInteruptions": 2,
        "comment": "",
        "mood": "Neutre"
    });

    if(!currentItem){
      //Todo: return empty item, because we'll be creating one
    }
    
    this.state = { 
        startTime: currentItem.getStartTime(),  
        endTime:currentItem.getEndTime(),
        wakeUpCount:currentItem.numberOfInteruptions,
        wakeUpState:"Neutre",
        wakeUpComment:"",
    }
  }

  submitForm(){
    //TODO: add the current item to the SleepService persistence layer
    this.props.history.push('/sleep-detail')
  }

  render() {
    return <IonPage>
              <IonHeader>
                <HeaderToolBarWithImage title="Sommeil" imageName={moon} />
              </IonHeader>
              <IonContent>
                <IonCard>
                  <IonCardContent>
                    <IonList>
                      <IonItem>
                        <IonLabel position="floating">Heure de début</IonLabel>
                        <IonInput name='startTime' placeholder='0000' type='number' min='0' max='2400' required={true} value={this.state.startTime} 
                            onIonChange={(e:any) => this.setState({startTime:e.target.value})}>
                        </IonInput>
                      </IonItem>
                      <IonItem>
                        <IonLabel position="floating">Heure de fin</IonLabel>
                        <IonInput name='endTime' placeholder='0000' type='number' min='0' max='2400' required={true} value={this.state.endTime} 
                            onIonChange={(e:any) => this.setState({endTime:e.target.value})}>
                        </IonInput>
                      </IonItem>
                      <IonItem>
                        <IonLabel position="floating">Nombre de réveils</IonLabel>
                        <IonInput name='NumberOfInteruptions' placeholder='0000' type='number' min='0' max='2400' required={true} value={this.state.wakeUpCount}
                            onIonChange={(e:any) => this.setState({wakeUpCount:e.target.value})}>
                        </IonInput>
                      </IonItem>
                      <IonItem>
                        <IonLabel position="floating">État d'esprit au réveil</IonLabel>
                        <IonSelect 
                            value={this.state.wakeUpState} 
                            onIonChange={(e:any) => this.setState({wakeUpState:e.target.value})}
                        >
                          <IonSelectOption value="Super">Super</IonSelectOption>
                          <IonSelectOption value="Bonne humeure">Bonne humeure</IonSelectOption>
                          <IonSelectOption value="Neutre">Neutre</IonSelectOption>
                          <IonSelectOption value="Fatigué">Fatigué</IonSelectOption>
                          <IonSelectOption value="Deprimé">Deprimé</IonSelectOption>
                        </IonSelect>
                      </IonItem>
                      <IonItem>
                        <IonLabel position="floating">Commentaires</IonLabel>
                        <IonTextarea 
                            value={this.state.wakeUpComment}
                            onIonChange={(e:any) => this.setState({wakeUpComment:e.target.value})}
                        />
                      </IonItem>
                      <IonButton slot='end' onClick={() => this.submitForm()}>Ajouter</IonButton>
                    </IonList>
                    </IonCardContent>
                  </IonCard>
                </IonContent>
    </IonPage>;
  }
}
