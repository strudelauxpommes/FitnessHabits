import {
    IonButton,
    IonContent,
    IonInput,
    IonItem,
    IonLabel,
} from '@ionic/react';
import React from 'react';

import '../Style/Alcool.scss';
import '../Style/AlcoolDetail.scss';

const AlcoolDetailAddForm = ({ setShowModal }) => {
    return (
        <IonContent>
            <IonItem>
                <IonLabel position="fixed">Nom</IonLabel>
                <IonInput></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel position="fixed">Volume</IonLabel>
                <IonInput></IonInput>
            </IonItem>
            <IonButton color="alcool" onClick={() => setShowModal(false)} expand="block">Ajouter Alcool</IonButton>
        </IonContent>
    )
};
export default AlcoolDetailAddForm;