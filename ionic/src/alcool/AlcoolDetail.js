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

class AlcoolDetail extends React.Component {
    render() {
        return (
            <IonPage>
                <AlcoolDetailHeader />
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
