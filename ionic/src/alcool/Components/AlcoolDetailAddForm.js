import {
    IonButton,
    IonInput,
    IonItem,
    IonLabel,
} from '@ionic/react';
import React from 'react';

import '../Style/Alcool.scss';
import '../Style/AlcoolDetail.scss';

const AlcoolDetailAddForm = ({ setShowModal, onSubmit }) => {

    function handleSubmit(event) {
        setShowModal(false);
        if (event &&
            event.target &&
            event.target.elements &&
            event.target.elements[0] &&
            event.target.elements[0].value &&
            event.target.elements[1] &&
            event.target.elements[1].value)
            onSubmit(event.target.elements[0].value, event.target.elements[1].value);
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <IonItem>
                <IonLabel position="fixed">Nom</IonLabel>
                <IonInput id="alcoolName"></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel position="fixed">Volume</IonLabel>
                <IonInput id="alcoolVolume" type="number"></IonInput>
            </IonItem>
            <IonButton type="submit" color="alcool" expand="block">Ajouter Alcool</IonButton>
            <IonButton color="danger" onClick={() => setShowModal(false)} expand="block">Cancel</IonButton>
        </form>
    )
};
export default AlcoolDetailAddForm;