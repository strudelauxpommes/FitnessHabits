import React, { useState } from 'react';

import {
  IonApp, 
  IonHeader,
  IonTitle,
  IonToolbar,
  IonContent,
  IonInput,
  IonList,
  IonItem,
  IonLabel,
  IonButton
} from '@ionic/react';


const newActivityForm = () => {
  const [ name, setName ] = useState('');
  const [ time, setTime ] = useState('');
  const [ intensity, setIntensity ] = useState('');
  const [ comment, setComment ] = useState('');
  const [ favoris, setFavoris ] = useState('');

  const [ formErrors, setFormErrors ] = useState({});

  const submit = async () => {
    try {
      await newActivity({
        name,
        time,
        intensity,
        comment,
        favoris
      });
    } catch (e) {
      setFormErrors(e);
    }
  }
  return (
    <>
      <IonContent>
        <form onSubmit={(e) => { e.preventDefault(); submit();}}>
          <div>
            {formErrors ? (
              formErrors.message
            ): null}
          </div>
          <IonList>
            <IonItem>
              <IonLabel>Name</IonLabel>
              <IonInput name="activityName" type="text" value={name} onChange={(e) => setEmail(e.target.value)}/>
            </IonItem>
            <IonItem>
              <IonLabel>Temps</IonLabel>
              <IonInput name="time" type="text" value={time} onChange={(e) => setPassword(e.target.value)}/>
            </IonItem>
            <IonItem>
              <IonLabel>Intensité</IonLabel>
              <IonInput name="intensity" type="text" value={intensity} onChange={(e) => setEmail(e.target.value)}/>
            </IonItem>
            <IonItem>
              <IonLabel>Comment</IonLabel>
              <IonInput name="comment" type="text" value={comment} onChange={(e) => setEmail(e.target.value)}/>
            </IonItem>
            <IonItem>
              <IonLabel>Favoris</IonLabel>
              <IonInput name="favoris" type="text" value={favoris} onChange={(e) => setEmail(e.target.value)}/>
            </IonItem>
          </IonList>

          <IonButton expand={true} type="submit">Philippe</IonButton>
        </form>
      </IonContent>
    </>
  )
}