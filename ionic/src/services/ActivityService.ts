import { ActivityDate } from '../models/ActivityDate';
import {DalImpl} from '../dal/DalImpl'
export module ActiviteService {
    const INSTANCE  = new DalImpl();
    const KEY = "Activites/activite";
    INSTANCE.setValue("Activites/activite", "activite");

 export class ActivityService {
        /**
         * Insert an Activity in the DB 
         * @param activity
         */
       setActivities(activity: ActivityDate ){
        let value :string = JSON.stringify(activity);
           INSTANCE.setValueByDate(KEY, value, new Date());

       }
       /**
        * Get All Activities ever entered in the DB 
        * @param date 
        */
        getAllActivities(){
           return INSTANCE.getAllItems(KEY);    
        }
       /**
        * Returns all Activities between beginDate and EndDate
        * @param beginDate 
        * @param endDate 
        */
    
        getAllActivitiesBetween(beginDate: Date,endDate: Date){
            return INSTANCE.getValues(KEY,beginDate,endDate); 
            
        }
    }
}