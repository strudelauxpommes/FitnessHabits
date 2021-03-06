import React, { useState } from 'react';
import {
  IonContent,
  IonInput,
  IonList,
  IonItem,
  IonLabel,
  IonButton
} from '@ionic/react';
import { ActivityService } from '../services/ActivityService';

const AddActivityForm = () => {
  const [ name, setName ] = useState('');
  const [ time, setTime ] = useState('');
  const [ intensity, setIntensity ] = useState('');
  const [ comment, setComment ] = useState('');
  const [ favorite, setFavorite ] = useState('');
  const [ formErrors, setFormErrors ] = useState('');
  const activityService = new ActivityService();

  const submit = async () => {
    if (name.length === 0 || time.length === 0) {
      setFormErrors("Veuillez remplir les sections obligatoires");
    } else if (intensity < 0 || intensity > 10) {
      setFormErrors("L'intensité doit être située entre 0 et 10");
    } else {
      setFormErrors('');

      try {
        let activity = {
          title: name,
          duration: time,
          intensity: intensity,
          comments: comment,
          isFavorite: favorite
        }
        console.log(activity);

        let date = {
          day: new Date(),
          activities: [activity]
        }

        activityService.setActivity(date);
      } catch (e) {
        setFormErrors(e);
      }
    }
  }

  return (
    <IonContent className="ad-activity-form-content">
      <form className="ad-form-activity" onSubmit={(e) => { e.preventDefault(); submit();}}>
        <IonList>
          <IonItem>
            <IonLabel>Name</IonLabel>
            <IonInput name="activityName" type="text" value={name} onInput={(e) => setName(e.target.value)}/>
          </IonItem>
          <IonItem>
            <IonLabel>Temps</IonLabel>
            <IonInput name="time" type="text" value={time} onInput={(e) => setTime(e.target.value)}/>
          </IonItem>
          <IonItem>
            <IonLabel>Intensité</IonLabel>
            <IonInput name="intensity" type="number" value={intensity} onInput={(e) => setIntensity(e.target.value)}/>
          </IonItem>
          <IonItem>
            <IonLabel>Commentaire</IonLabel>
            <IonInput name="comment" type="text" value={comment} onInput={(e) => setComment(e.target.value)}/>
          </IonItem>
          <IonItem>
            <IonLabel>Favoris</IonLabel>
            <IonInput name="favorite" type="text" value={favorite} onInput={(e) => setFavorite(e.target.value)}/>
          </IonItem>
        </IonList>

        <div className="ad-error-msg">
          {formErrors.length > 0 ? (
            formErrors
          ): null}
        </div>
        <IonButton className="ad-submit-btn" expand={true} type="submit">Créer</IonButton>
      </form>
    </IonContent>
  )
}

export default AddActivityForm;