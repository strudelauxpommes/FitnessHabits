import {
    IonBackButton,
    IonButtons,
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

const AlcoolDetailHeader = () => {
    return (
        <IonHeader>
            <IonToolbar className="header__top-menu" color="alcool">
                <IonGrid>
                    <IonRow className="header__title-row">
                        <IonButtons>
                            <IonBackButton defaultHref="/home" />
                        </IonButtons>
                        <IonIcon item-center icon={wine} className="header__title-row__wine-icon" />
                        <IonTitle>Alcool Détaillé</IonTitle>
                    </IonRow>
                </IonGrid>
            </IonToolbar>
        </IonHeader>
    );
}
export default AlcoolDetailHeader;
