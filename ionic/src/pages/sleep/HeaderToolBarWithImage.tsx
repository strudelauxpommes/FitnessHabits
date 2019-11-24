import { IonBackButton, IonButtons, IonIcon, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
export function HeaderToolBarWithImage(props: {
    title: React.ReactNode;
    imageName: any;
}) {
    return (<IonToolbar>
        <IonTitle><h1>{props.title}</h1></IonTitle>
        <IonIcon icon={props.imageName} slot='end' class='sleep-icon-header'></IonIcon>
        <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
        </IonButtons>
    </IonToolbar>);
}
