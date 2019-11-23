import {
    IonFab,
    IonFabButton,
    IonIcon,
    IonModal,
    IonPage,
} from '@ionic/react';
import { add } from 'ionicons/icons';
import React from 'react';
import './Style/AlcoolDetail.scss';
import AlcoolDetailHeader from './Components/AlcoolDetailHeader';
import AlcoolDetailAddForm from './Components/AlcoolDetailAddForm';

//import DAL from '../dal/Dal';

class AlcoolDetail extends React.Component {
    constructor(props) {
        super(props);
        this.getDateFromParameters = this.getDateFromParameters.bind(this);
        this.setShowModal = this.setShowModal.bind(this);
        this.state = {
            showModal: false
        }
    }

    getDateFromParameters() {
        var paramsDate = [23, 11, 2019]; // DAL.getLastValue('settings/activeDate');
        var activeDate = new Date(paramsDate[2], paramsDate[1] - 1, paramsDate[0]);
        return activeDate.toLocaleDateString();
    }

    setShowModal(showModal) {
        this.setState({
            showModal: showModal
        });
    }

    render() {
        this.getDateFromParameters();
        return (
            <IonPage>
                <IonModal isOpen={this.state.showModal}>
                    <AlcoolDetailAddForm setShowModal={this.setShowModal} />
                </IonModal>
                <AlcoolDetailHeader date={this.getDateFromParameters()} />
                <IonFab vertical="bottom" horizontal="center" slot="fixed">
                    <IonFabButton color="alcool" onClick={() => this.setShowModal(true)}>
                        <IonIcon icon={add} />
                    </IonFabButton>
                </IonFab>
            </IonPage>
        );
    }
}
export default AlcoolDetail;
