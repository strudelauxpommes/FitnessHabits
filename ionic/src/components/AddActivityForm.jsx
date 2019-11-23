import React, { useState } from 'react';

import {
  IonContent,
  IonInput,
  IonList,
  IonItem,
  IonLabel,
  IonButton
} from '@ionic/react';

const AddActivityForm = () => {
  const [ name, setName ] = useState('');
  const [ time, setTime ] = useState('');
  const [ intensity, setIntensity ] = useState('');
  const [ comment, setComment ] = useState('');
  const [ favorite, setFavorite ] = useState('');
  const [ formErrors, setFormErrors ] = useState({});

  const submit = async () => {
    try {
      // await newActivity({
      //   name,
      //   time,
      //   intensity,
      //   comment,
      //   favorite
      // });
      console.log("New activity");
    } catch (e) {
      setFormErrors(e);
    }
  }

  return (
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
            <IonInput name="activityName" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
          </IonItem>
          <IonItem>
            <IonLabel>Temps</IonLabel>
            <IonInput name="time" type="text" value={time} onChange={(e) => setTime(e.target.value)}/>
          </IonItem>
          <IonItem>
            <IonLabel>Intensité</IonLabel>
            <IonInput name="intensity" type="text" value={intensity} onChange={(e) => setIntensity(e.target.value)}/>
          </IonItem>
          <IonItem>
            <IonLabel>Comment</IonLabel>
            <IonInput name="comment" type="text" value={comment} onChange={(e) => setComment(e.target.value)}/>
          </IonItem>
          <IonItem>
            <IonLabel>Favoris</IonLabel>
            <IonInput name="favorite" type="text" value={favorite} onChange={(e) => setFavorite(e.target.value)}/>
          </IonItem>
        </IonList>

        <IonButton className="ad-submit-btn" expand={true} type="submit">Créer</IonButton>
      </form>
    </IonContent>
  )
}

export default AddActivityForm;