import { IonAlert, IonButton, IonCard, IonPage, IonCardContent, IonCol, IonGrid, IonIcon, IonInput, IonRow, IonContent } from '@ionic/react';
import { add, moon, remove } from 'ionicons/icons';
import React, { Component } from 'react';
import { Sleep, SleepCollection } from '../../entities/sleep/sleep';
import { SleepBuilder } from '../../entities/sleep/sleep_builder';
import SleepService from '../../services/sleep/SleepService';


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
  moods: object[],
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
      moods: [],
    }
  }

  async componentDidMount(){
    const sleepService = new SleepService()

    const temp = new Date("2019-10-11T00:00:00")
    
    
    const sleepCollection = await sleepService.fetchActiveDate()
    const moodObjects = await sleepService.fetchMoods()

    sleepCollection.getAverageSleep(sleepService.getActiveDate() as any, 7 as any)

    this.setState({
      sleeps: sleepCollection,
      totalSleepTimeToday: sleepCollection.showTotalSleep(),
      moods: moodObjects
    })
}

  onChoosingMoodOk(mood: string) {
      this.setState({
        mood: mood,
        choosingMood: false
      });

      this.onSubmit();
  }

  /**
   * [Handles the submit event. Adds sleep to collection and updates the state]
   */
  async onSubmit() {
    const sleepService = new SleepService();
    sleepService.fetchMoods()
    const activeDate = await new SleepService().getActiveMoment()

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

    if(builder.isValid && collection.addSleep(builder.sleep as Sleep) === false){
      builder.isValid = false
      builder.errorMessage += "<ul><li>Sommeil invalide: les dates se chevauchent!</li></ul>"
    }

    if (builder.isValid) {
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
                        inputs={this.state.moods}
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
