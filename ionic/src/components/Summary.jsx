import React from 'react';
import { IonRow, IonCol, IonGrid, IonImg, IonHeader, IonContent } from '@ionic/react';

var classNames = require('classnames');

export default class Summary extends React.Component {
  getTotalDurationAll() {
    let total = 0;
    this.props.dates.forEach(d => {
      d.activites.forEach(a => {
        total += a.duree;
      });
    });
    return total;
  }
  
  getTotalDuration(titre) {
    let total = 0;
    this.props.dates.forEach(d => {
      d.activites.forEach(a => {
        if(a.titre === titre)
          total += a.duree;
      });
    });
    return total;
  }
  
  getTotalDurationAutre(titre1, titre2, titre3) {
    let total = 0;
    this.props.dates.forEach(d => {
      d.activites.forEach(a => {
        if(a.titre !== titre1 && a.titre !== titre2 && a.titre !== titre3)
          total += a.duree;
      });
    });
    return total;
  }

  getIntensityAverageAll() {
    let total = 0, nb = 0;
    this.props.dates.forEach(d => {
      d.activites.forEach(a => {
        total += a.intensite;
        nb++;
      });
    });
    return Math.round(total / nb);
  }
  
  getIntensityAverage(titre) {
    let total = 0, nb = 0;
    this.props.dates.forEach(d => {
      d.activites.forEach(a => {
        if(a.titre === titre)
        {
          total += a.intensite;
          nb++
        }
      });
    });
    return Math.round(total / nb);
  }
  
  getIntensityAverageAutre(titre1, titre2, titre3) {
    let total = 0, nb = 0;
    this.props.dates.forEach(d => {
      d.activites.forEach(a => {
        if(a.titre !== titre1 && a.titre !== titre2 && a.titre !== titre3)
        {
          total += a.intensite;
          nb++;
        }
      });
    });
    return Math.round(total / nb);
  }
  
  getIntensityColor(intensite) {
    let r = 0, g = 0, b = 0;
    if(intensite >= 5) {
      r = 255;
      g = Math.round(51 * intensite);
      
    }
    else {
      g = 255;
      r = Math.round(510 - 51 * intensite);
    }
    var h = r * 0x10000 + g * 0x100 + b * 0x1;
    return '#' + ('000000' + h.toString(16)).slice(-6);
  }
  
  render() {
    let intensitePremier = this.getIntensityAverage(this.props.favoris.premier);
    let intensiteDeuxieme = this.getIntensityAverage(this.props.favoris.deuxieme);
    let intensiteTroisieme = this.getIntensityAverage(this.props.favoris.troisieme);
    let intensiteAutre = this.getIntensityAverage(this.props.favoris.premier);
    
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
            <IonCol className="as-bubble-container" size="3">
              <p className="as-title-activity">{this.props.favoris.premier}</p>
              <div className={ "as-bubble " + classNames({intensiteFaible:  intensitePremier < 4, 
                                                          intensiteMoyenne: intensitePremier >= 4 &&
                                                                            intensitePremier < 8,
                                                          intensiteForte:   intensitePremier >= 8 })}>
                  <p>
                    {this.getTotalDuration(this.props.favoris.premier)}
                  </p>
              </div>
            </IonCol>
            <IonCol className="as-bubble-container" size="3">
              <p className="as-title-activity">{this.props.favoris.deuxieme}</p>
              <div className={ "as-bubble " + classNames({intensiteFaible:  intensiteDeuxieme < 4, 
                                                          intensiteMoyenne: intensiteDeuxieme >= 4 &&
                                                                            intensiteDeuxieme < 8,
                                                          intensiteForte:   intensiteDeuxieme >= 8 })}>
                  <p>
                    {this.getTotalDuration(this.props.favoris.deuxieme)}
                  </p>
              </div>
            </IonCol>
            <IonCol className="as-bubble-container" size="3">
              <p className="as-title-activity">{this.props.favoris.troisieme}</p>
              <div className={ "as-bubble " + classNames({intensiteFaible:  intensiteTroisieme < 4, 
                                                          intensiteMoyenne: intensiteTroisieme >= 4 &&
                                                                            intensiteTroisieme < 8,
                                                          intensiteForte:   intensiteTroisieme >= 8 })}>
                  <p>
                    {this.getTotalDuration(this.props.favoris.troisieme)}
                  </p>
              </div>
            </IonCol>
            <IonCol className="as-bubble-container" size="3">
              <p className="as-title-activity">Autre</p>
              <div className={ "as-bubble " + classNames({intensiteFaible:  intensiteAutre < 4, 
                                                          intensiteMoyenne: intensiteAutre >= 4 &&
                                                                            intensiteAutre < 8,
                                                          intensiteForte:   intensiteAutre >= 8 })}>
                  <p>
                    {this.getTotalDurationAutre(this.props.favoris.premier, this.props.favoris.deuxieme, this.props.favoris.troisieme)}
                  </p>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    )
  }
}