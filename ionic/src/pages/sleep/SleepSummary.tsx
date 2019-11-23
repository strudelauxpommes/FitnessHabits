import {
  IonCard,
  IonIcon,
  IonCardContent,
  IonInput,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonPage,
  IonContent,
  IonAlert,
} from '@ionic/react';

import React, { Component } from 'react';
import { moon, remove, add } from 'ionicons/icons';
import { Sleep, SleepCollection } from '../../entities/sleep/sleep';
import SleepService from '../../services/sleep/SleepService';
import { SleepBuilder } from '../../entities/sleep/sleep_builder';
import moment from 'moment'
import { thisExpression } from '@babel/types';

type Props = {
  activeDate: Date;
}

type State = {
  sleeps: SleepCollection;
  sleepTimeBegin: string,
  sleepTimeEnd: string,
  wakeUpCount: string,
  mood: string,
  totalSleepTimeToday: string,
  hasSubmitError: boolean,
  errorMessage: string,
  choosingMood: boolean,
}

export default class SleepSummary extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
  
    var sleepList = new SleepCollection([])
    this.state = {
      sleeps: sleepList,
      sleepTimeBegin: "2300",
      sleepTimeEnd: "0400",
      wakeUpCount: "",
      mood: "",
      totalSleepTimeToday: "00:00:00",
      hasSubmitError: false,
      errorMessage: "",
      choosingMood: false,
    }
  }

  async componentDidMount(){
    const sleepService = new SleepService()
    const sleepCollection = await sleepService.fetchActiveDate()

    const test = await sleepService.fetchHistory_v2()
    console.log(test)

    this.setState({
      sleeps: sleepCollection,
      totalSleepTimeToday: sleepCollection.showTotalSleep(),
    })
}

  onChoosingMoodOk(mood: string) {
      console.log("onChoosingMoodDIsmissed")
      console.log(this.state);
      this.setState({
        mood: mood,
        choosingMood: false
      });
      console.log("After setstate")
      console.log(this.state)

      this.onSubmit();
  }

  /**
   * [Handles the submit event. Adds sleep to collection and updates the state]
   */
  async onSubmit() {
    const sleepService = new SleepService();
    const activeDate = await new SleepService().getActiveMoment()

    console.log(this.state)

    var builder = (
      new SleepBuilder(activeDate)
        .buildStart(this.state.sleepTimeBegin)
        .buildEnd(this.state.sleepTimeEnd)
        .buildNumberOfInteruptions(this.state.wakeUpCount)
        .buildComment("")
        .buildMood(this.state.mood)
        .createInstance()
    );

    const collection = this.state.sleeps

    const test = builder.sleep

    if(test){
      console.log(test.getStartDate(), test.getEndDate())
    }

    if (builder.isValid && collection.addSleep(builder.sleep as Sleep)) {
      await sleepService.saveActiveDate(collection)

      this.setState({
          sleeps: collection,
          sleepTimeBegin: "",
          sleepTimeEnd: "",
          wakeUpCount: "",
          totalSleepTimeToday: collection.showTotalSleep()
        });
    } else {
      this.setState({
        hasSubmitError: true,
        errorMessage: builder.errorMessage,
      })
    }
  }

  

  /**
   * [Handles state change for submit error alert dismiss]
   */
  onSubmitErrorDismissed() {
    this.setState({
      hasSubmitError: false,
      errorMessage: "",
    })
  }

  /**
   * [Adds a sleep object to the collection and updates the state]
   * 
   * @param sleep sleep object to add
   */
  async addSleepItem(sleep: any) {
    const sleepService = new SleepService();

    let collection = this.state.sleeps
    
    // await sleepService.saveActiveDate(collection)

    // this.setState({
    //   sleeps: this.state.sleeps,
    //   sleepTimeBegin: "",
    //   sleepTimeEnd: "",
    //   wakeUpCount: "",
    //   totalSleepTimeToday: collection.calculateTotalSleep().toString()
    // });
  }

  /**
   * [Removes a sleep object from the collection and updates the state]
   * 
   * @param sleep sleep object to remove
   */
  async removeSleepItem(sleep: Sleep) {
    this.state.sleeps.removeSleep(sleep);
    const sleepService = new SleepService();
    await sleepService.saveActiveDate(this.state.sleeps)

    this.setState({
      sleeps: this.state.sleeps,
      totalSleepTimeToday: this.state.sleeps.showTotalSleep(),
    });
  }

  showMoodAlert() {
    this.setState({
      choosingMood: true
    })
  }

  onChoosingMoodDismissed() {
    this.setState({
      choosingMood: false
    })
  }

  onSleepTimeBeginChange(e: any) {
    this.setState({ sleepTimeBegin: e.target.value });
  }

  onSleepTimeEndChange(e: any) {
    this.setState({ sleepTimeEnd: e.target.value });
  }

  onWakeUpCountChange(e: any) {
    this.setState({ wakeUpCount: e.target.value });
  }

  onSleepTimeBeginFocus(e: any) {
    this.setState({ sleepTimeBegin: "" });
  }

  onSleepTimeEndFocus(e: any) {
    this.setState({ sleepTimeEnd: "" });
  }

  onWakeUpCountFocus(e: any) {
    this.setState({ wakeUpCount: "" });
  }

  render() {
    return (
      <IonPage>
        <IonContent>
          <IonCard class="sleep-ion-card sleep-text">
            <IonCardContent>
            <a href="/sleep-detail" id="sleep-summary-a">
              <IonGrid id="sleep-card-header">
                <IonRow>
                  <IonCol size='9' id="sleep-card-header-first-col">
                  <IonIcon icon={moon} /> SOMMEIL
                  </IonCol>
                  <IonCol size='3'>
                    {this.state.totalSleepTimeToday}
                  </IonCol>
                </IonRow>
              </IonGrid>
              </a>

              <form>
                <IonGrid class="sleep-grid">
                  <IonRow>
                    <IonCol><strong>Endormi à</strong></IonCol>
                    <IonCol><strong>Réveillé à</strong></IonCol>
                    <IonCol><strong>Nb réveils</strong></IonCol>
                    <IonCol></IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>
                      <IonInput
                        inputmode="numeric"
                        maxlength={4}
                        value={this.state.sleepTimeBegin}
                        onIonChange={(e) => this.onSleepTimeBeginChange(e)}
                        onIonFocus={(e) => this.onSleepTimeBeginFocus(e)}
                        class="sleep-input" />
                    </IonCol>
                    <IonCol>
                      <IonInput
                        inputmode="numeric"
                        maxlength={4}
                        value={this.state.sleepTimeEnd}
                        onIonChange={(e) => this.onSleepTimeEndChange(e)}
                        onIonFocus={(e) => this.onSleepTimeEndFocus(e)}
                        class="sleep-input" />
                    </IonCol>
                    <IonCol>
                      <IonInput
                        inputmode="numeric"
                        maxlength={1}
                        value={this.state.wakeUpCount}
                        onIonChange={(e) => this.onWakeUpCountChange(e)}
                        onIonFocus={(e) => this.onWakeUpCountFocus(e)}
                        class="sleep-input" />
                    </IonCol>
                    <IonCol>
                      <IonButton
                        onClick={() => this.showMoodAlert()}
                        color="success">
                        <IonIcon icon={add} />
                      </IonButton>
                      <IonAlert
                        isOpen={this.state.hasSubmitError}
                        header="Champ(s) invalides"
                        message={this.state.errorMessage}
                        onDidDismiss={() => this.onSubmitErrorDismissed()}
                        buttons={['OK']}
                      />
                      <IonAlert
                        isOpen={this.state.choosingMood}
                        onDidDismiss={() => this.onChoosingMoodDismissed()}
                        buttons={
                          [
                            {
                              text: 'Ok',
                              handler: data => {
                                this.onChoosingMoodOk(data)
                              }
                            }
                          ]
                        }
                        header="Choisir votre humeur"
                        inputs={
                          [
                            {
                              name: 'mood',
                              type: 'radio',
                              value: 'Super',
                              label: 'Super'
                            },
                            {
                              name: 'mood',
                              type: 'radio',
                              value: 'De bonne humeur',
                              label: 'De bonne humeur'
                            },
                            {
                              name: 'mood',
                              type: 'radio',
                              value: 'Neutre',
                              label: 'Neutre'
                            },
                            {
                              name: 'mood',
                              type: 'radio',
                              value: 'Un peu grognon',
                              label: 'Un peu grognon'
                            },
                            {
                              name: 'mood',
                              type: 'radio',
                              value: 'Fatigue',
                              label: 'Fatigue'
                            },
                            {
                              name: 'mood',
                              type: 'radio',
                              value: 'Depressif',
                              label: 'Depressif'
                            },


                          ]
                        }
                      />
                    </IonCol>
                  </IonRow>
                  {this.state.sleeps.list.map((sleep: Sleep, index: any) =>
                    <SleepItem
                      onClick={() => this.removeSleepItem(sleep)}
                      key={"sleep-" + index}
                      sleepDateBegin={sleep.getStartTime()}
                      sleepDateEnd={sleep.getEndTime()}
                      wakeUpCount={sleep.getNumberOfInteruptions()} />
                  )}
                </IonGrid>
              </form>
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonPage >
    );
  }
}

type SleepItemProps = {
  sleepDateBegin: string,
  sleepDateEnd: string,
  wakeUpCount: string,
  onClick: () => void,
}

class SleepItem extends Component<SleepItemProps> {
  render() {
    return (
      <IonRow>
        <IonCol class="sleep-grid">{this.props.sleepDateBegin}</IonCol>
        <IonCol class="sleep-grid">{this.props.sleepDateEnd}</IonCol>
        <IonCol class="sleep-grid">{this.props.wakeUpCount}</IonCol>
        <IonCol><IonButton onClick={this.props.onClick} color="danger"><IonIcon icon={remove} /></IonButton></IonCol>
      </IonRow>
    );
  }
}
