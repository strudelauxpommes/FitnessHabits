import {
    IonBackButton,
    IonButtons,
    IonCol,
    IonGrid,
    IonHeader,
    IonIcon,
    IonRow,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import { wine } from 'ionicons/icons';
import React from 'react';

import '../Style/Alcool.scss';
import '../Style/AlcoolDetail.scss';

const AlcoolDetailHeader = ({ date }) => {
    return (
        <IonHeader>
            <IonToolbar className="alcool-detail-header__top-menu" color="alcool">
                <IonGrid>
                    <IonRow className="alcool-detail-header__title-row">
                        <IonButtons>
                            <IonBackButton defaultHref="/home" />
                        </IonButtons>
                        <IonIcon item-center icon={wine} className="alcool-detail-header__title-row__wine-icon" />
                        <IonTitle>Alcool Détaillé</IonTitle>
                    </IonRow>
                    <IonRow className="ion-text-center alcool-detail-header__date">
                        <IonCol>{date}</IonCol>
                    </IonRow>
                </IonGrid>
            </IonToolbar>
        </IonHeader>
    );
}
export default AlcoolDetailHeader;
