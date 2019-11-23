import {
    IonFab,
    IonFabButton,
    IonIcon,
    IonPage,
} from '@ionic/react';
import { add } from 'ionicons/icons';
import React from 'react';
import './Style/AlcoolDetail.scss';
import AlcoolDetailHeader from './Components/AlcoolDetailHeader';
//import DAL from '../dal/Dal';

class AlcoolDetail extends React.Component {
    constructor(props) {
        super(props);
        this.getDateFromParameters = this.getDateFromParameters.bind(this);
    }

    getDateFromParameters() {
        var paramsDate = [23, 11, 2019]; // DAL.getLastValue('settings/activeDate');
        var activeDate = new Date(paramsDate[2], paramsDate[1] - 1, paramsDate[0]);
        return activeDate.toLocaleDateString();
    }

    render() {
        this.getDateFromParameters();
        return (
            <IonPage>
                <AlcoolDetailHeader date={this.getDateFromParameters()} />
                <IonFab vertical="bottom" horizontal="center" slot="fixed">
                    <IonFabButton color="alcool">
                        <IonIcon icon={add} />
                    </IonFabButton>
                </IonFab>
            </IonPage>
        );
    }
}
export default AlcoolDetail;
