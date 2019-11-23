import { ActivityDate } from '../models/ActivityDate';
import {DalImpl} from '../dal/DalImpl'




 export class ActivityService {

     INSTANCE = new DalImpl();
     KEY = "Activites";

     ActivityService(){
         this.INSTANCE.setValue(this.KEY, "activites");
     }



        /**
         * Insert an Activity in the DB 
         * @param activity
         */
    async setActivities(activity: ActivityDate ){
        let value :string = JSON.stringify(activity);
           await this.INSTANCE.setValueByDate(this.KEY, value, new Date());

       }
       /**
        * Get All Activities ever entered in the DB 
        * @param date 
        */
    async getAllActivities(){
           return await this.INSTANCE.getAllItems(this.KEY);    
        }
       /**
        * Returns all Activities between beginDate and EndDate
        * @param beginDate 
        * @param endDate 
        */
    
     async getAllActivitiesBetween(beginDate: Date,endDate: Date){
            return await this.INSTANCE.getValues(this.KEY,beginDate,endDate); 
            
        }
    }
