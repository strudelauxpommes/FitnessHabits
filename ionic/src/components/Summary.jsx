import React from 'react';
import { IonRow, IonCol, IonGrid, IonImg, IonHeader, IonContent } from '@ionic/react';

var classNames = require('classnames');

export default class Summary extends React.Component {
  getTotalDurationAll() {
    let total = 0;
    if(typeof this.props.dates !== 'undefined') {
      this.props.dates.forEach(d => {
        d.activites.forEach(a => {
          total += a.duree;
        });
      });
    }
    return total;
  }
  
  getTotalDurationActivite(titre) {
    let total = 0;
    if(typeof this.props.dates !== 'undefined') {
      this.props.dates.forEach(d => {
        d.activites.forEach(a => {
          if(a.titre === titre)
            total += a.duree;
        });
      });
    }
    return total;
  }
  
  getTotalDurationAutre(titre1, titre2, titre3) {
    let total = 0;
    if(typeof this.props.dates !== 'undefined') {
      this.props.dates.forEach(d => {
        d.activites.forEach(a => {
          if(a.titre !== titre1 && a.titre !== titre2 && a.titre !== titre3)
            total += a.duree;
        });
      });
    }
    return total;
  }

  getIntensityAverageAll() {
    let total = 0, nb = 0;
    if(typeof this.props.dates !== 'undefined') {
      this.props.dates.forEach(d => {
        d.activites.forEach(a => {
          total += a.intensite;
          nb++;
        });
      });
    }
    return Math.round(total / nb);
  }
  
  getIntensityAverageActivite(titre) {
    let total = 0, nb = 0;
    if(typeof this.props.dates !== 'undefined') {
      this.props.dates.forEach(d => {
        d.activites.forEach(a => {
          if(a.titre === titre)
          {
            total += a.intensite;
            nb++
          }
        });
      });
    }
    return Math.round(total / nb);
  }
  
  getIntensityAverageAutre(titre1, titre2, titre3) {
    let total = 0, nb = 0;
    if(typeof this.props.dates !== 'undefined') {
      this.props.dates.forEach(d => {
        d.activites.forEach(a => {
          if(a.titre !== titre1 && a.titre !== titre2 && a.titre !== titre3)
          {
            total += a.intensite;
            nb++;
          }
        });
      });
    }
    return Math.round(total / nb);
  }
  
  render() {
    let favoriColPremier = "", favoriColDeuxieme = "", favoriColTroisieme = "", favoriColAutre = "";
    
    let favoriPremier = this.props.favoris.premier ? this.props.favoris.premier : null;
    let favoriDeuxieme = this.props.favoris.deuxieme ? this.props.favoris.deuxieme : null;
    let favoriTroisieme = this.props.favoris.troisieme ? this.props.favoris.troisieme : null;
    
    let dates = this.props.dates ? this.props.dates : null;
    
    if(favoriPremier !== null) {
      let intensite = this.getIntensityAverageActivite(favoriPremier);
      favoriColPremier = <IonCol className="as-bubble-container" size="3">
                           <p className="as-title-activity">{this.props.favoris.premier}</p>
                           <div className={ "as-bubble " + classNames({intensiteFaible:  intensite < 4, 
                                                                       intensiteMoyenne: intensite >= 4 &&
                                                                                         intensite < 8,
                                                                       intensiteForte:   intensite >= 8 })}>
                             <p>{this.getTotalDurationActivite(favoriPremier)}</p>
                           </div>
                          </IonCol>;
    }
    
    if(favoriDeuxieme !== null) {
      let intensite = this.getIntensityAverageActivite(favoriDeuxieme);
      favoriColDeuxieme = <IonCol className="as-bubble-container" size="3">
                           <p className="as-title-activity">{favoriDeuxieme}</p>
                           <div className={ "as-bubble " + classNames({intensiteFaible:  intensite < 4, 
                                                                       intensiteMoyenne: intensite >= 4 &&
                                                                                         intensite < 8,
                                                                       intensiteForte:   intensite >= 8 })}>
                             <p>{this.getTotalDurationActivite(favoriDeuxieme)}</p>
                           </div>
                          </IonCol>;
    }
    
    
    if(favoriTroisieme !== null) {
      let intensite = this.getIntensityAverageActivite(favoriTroisieme);
      favoriColTroisieme = <IonCol className="as-bubble-container" size="3">
                           <p className="as-title-activity">{favoriTroisieme}</p>
                           <div className={ "as-bubble " + classNames({intensiteFaible:  intensite < 4, 
                                                                       intensiteMoyenne: intensite >= 4 &&
                                                                                         intensite < 8,
                                                                       intensiteForte:   intensite >= 8 })}>
                             <p>{this.getTotalDurationActivite(favoriTroisieme)}</p>
                           </div>
                          </IonCol>;
    }
    
    let intensiteAutre = this.getIntensityAverageAutre(favoriPremier, favoriDeuxieme, favoriTroisieme);
    favoriColAutre = <IonCol className="as-bubble-container" size="3">
                         <p className="as-title-activity">Autre</p>
                         <div className={ "as-bubble " + classNames({intensiteFaible:  intensiteAutre < 4, 
                                                                     intensiteMoyenne: intensiteAutre >= 4 &&
                                                                                       intensiteAutre < 8,
                                                                     intensiteForte:   intensiteAutre >= 8 })}>
                           <p>{this.getTotalDurationAutre(favoriPremier, favoriDeuxieme, favoriTroisieme)}</p>
                         </div>
                        </IonCol>;
    
    
    return (
      <IonContent>     
        <IonHeader className="as-header-container">
          <IonGrid>
            <IonRow>
              <IonCol className="as-col-title" size="6">
                <h4 id='as-title'>Activités</h4>
              </IonCol>
              <IonCol>
                <div className='as-temps-total'>
                  <IonImg className="as-icon-time" src="assets/icon/clock-icon.png"></IonImg>
                  <div className='as-temps-total-value'>{this.getTotalDurationAll()}</div>
                </div>
              </IonCol>
              <IonCol>
                <div className='as-intensite-moy'>
                  <IonImg className="as-icon-intensity" src="assets/icon/intensite-icon.png"></IonImg>
                  <div className='as-intensity-moy-value'>{this.getIntensityAverageAll()}</div>
                </div>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonHeader>
        
        <IonGrid id='as-grid-container'>
          <IonRow>        
            {favoriColPremier}
            {favoriColDeuxieme}
            {favoriColTroisieme}           
            {favoriColAutre}
          </IonRow>
        </IonGrid>
      </IonContent>
    )
  }
}