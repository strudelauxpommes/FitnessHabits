import {
    IonPage,
} from '@ionic/react';
import React from 'react';
import './Style/AlcoolDetail.scss';
import AlcoolDetailHeader from './Components/AlcoolDetailHeader';

class AlcoolDetail extends React.Component {
    render() {
        return (
            <IonPage>
                <AlcoolDetailHeader />
            </IonPage>);
    }
}
export default AlcoolDetail;
