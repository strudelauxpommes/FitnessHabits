import {
  IonCard,
  IonCardTitle,
  IonIcon,
  IonCardContent,
  IonInput,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonPage,
  IonContent,
  IonHeader,
  IonAlert,
} from '@ionic/react';

import React, { Component } from 'react';
import { moon, remove, add } from 'ionicons/icons';
import { Sleep, SleepCollection } from '../../entities/sleep/sleep';
import SleepService from '../../services/sleep/SleepService';
import { GeneralInformationItemCell } from './GeneralInformationItemCell';
import { SleepBuilder } from '../../entities/sleep/sleep_builder';

type Props = {
  activeDate: Date;
}

type State = {
  sleeps: SleepCollection;
  sleepTimeBegin: string,
  sleepTimeEnd: string,
  wakeUpCount: string,
  totalSleepTimeToday: string,
  hasSubmitError: boolean,
  errorMessage: string,
}

export default class SleepSummary extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    var sleepList = SleepService().fetch();
    this.state = {
      sleeps: sleepList,
      sleepTimeBegin: "",
      sleepTimeEnd: "",
      wakeUpCount: "",
      totalSleepTimeToday: String(sleepList.calculateTotalSleep()),
      hasSubmitError: false,
      errorMessage: "",
    }
  }

  /**
   * [Handles the submit event. Adds sleep to collection and updates the state]
   */
  onSubmit() {
    var sleepBuilderInstance = (
      new SleepBuilder()
        .buildStart(this.state.sleepTimeBegin)
        .buildEnd(this.state.sleepTimeEnd)
        .buildNumberOfInteruptions(this.state.wakeUpCount)
        .createInstance()
    );

    if (sleepBuilderInstance.isValid) {
      this.addSleepItem(sleepBuilderInstance.sleep);
    } else {
      this.setState({
        hasSubmitError: true,
        errorMessage: sleepBuilderInstance.errorMessage,
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
  addSleepItem(sleep: any) {
    this.state.sleeps.addSleep(sleep);
    this.setState({
      sleeps: this.state.sleeps,
      sleepTimeBegin: "",
      sleepTimeEnd: "",
      wakeUpCount: "",
      totalSleepTimeToday: String(parseInt(this.state.totalSleepTimeToday)
        + sleep.getDurationAsMinutes()),
    });
  }

  /**
   * [Removes a sleep object from the collection and updates the state]
   * 
   * @param sleep sleep object to remove
   */
  removeSleepItem(sleep: Sleep) {
    this.state.sleeps.removeSleep(sleep);
    this.setState({
      sleeps: this.state.sleeps,
      totalSleepTimeToday: String(parseInt(this.state.totalSleepTimeToday) - sleep.getDurationAsMinutes()),
    });
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
          <IonCard class="ion-card">
            <a href="/sleep-detail">
              <IonCardTitle class="sleep-summary-card-title">
                <IonIcon icon={moon} />SOMMEIL<IonIcon icon={moon} />
              </IonCardTitle>
            </a>
            <IonCardContent>
              <GeneralInformationItemCell
                labelTitle="Durée totale de sommeil"
                labelSubtitle=""
                labelValue={(parseFloat(this.state.totalSleepTimeToday) / 60).toFixed(2)}
              />
              <form>
                <IonGrid class="sleep-grid">
                  <IonRow>
                    <IonCol><strong>Début</strong></IonCol>
                    <IonCol><strong>Fin</strong></IonCol>
                    <IonCol><strong>Réveils</strong></IonCol>
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
                        onClick={() => this.onSubmit()}
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
                    </IonCol>
                  </IonRow>
                  {this.state.sleeps.list.map((sleep: Sleep) =>
                    <SleepItem
                      onClick={() => this.removeSleepItem(sleep)}
                      key={sleep.getId()}
                      sleepDateBegin={sleep.getStartTime()}
                      sleepDateEnd={sleep.getEndTime()}
                      wakeUpCount={sleep.getNumberOfInteruptions()} />
                  )}
                </IonGrid>
              </form>
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonPage>
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
