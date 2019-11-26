import { IonItem, IonLabel, IonGrid, IonRow, IonCol, IonCard, IonTextarea, IonCardContent, IonCardTitle } from '@ionic/react';
import React from 'react';
import { Sleep } from '../../entities/sleep/sleep.js';

import { Accordion, AccordionItem } from 'react-sanfona';

export function HistoricInformationItemCell(props: {
  sleep: Sleep;
}) {
  return <Accordion allowMultiple='false'>
                    <AccordionItem title={
                      <IonItem>
                            <IonGrid>
                              <IonRow>
                                  <IonCol><IonLabel>{props.sleep.getStartDate()}</IonLabel></IonCol>
                                  <IonCol>
                                    <IonLabel>
                                      {props.sleep.getStartTime()} - {props.sleep.getEndTime()}
                                    </IonLabel>
                                  </IonCol>
                                <IonCol>
                                  <IonLabel>réveils: {props.sleep.getNumberOfInteruptions()}</IonLabel>
                                </IonCol>
                              </IonRow>  
                            </IonGrid>
                      </IonItem>
                    } class='react-sanfona-item'>
                      <IonCard>
                        <IonCardTitle>Raisons du réveil</IonCardTitle>
                        <IonCardContent>
                          <IonTextarea disabled={true}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum cursus consectetur. Duis commodo, turpis auctor porttitor condimentum, erat massa gravida risus, condimentum euismod enim quam sit amet felis. Vestibulum rutrum leo sed varius euismod. Aliquam erat volutpat.
                          </IonTextarea>                                    
                          </IonCardContent>
                      </IonCard>
                    </AccordionItem>
                  </Accordion>
}
