import { ActivityDate } from '../models/ActivityDate';
import {DalImpl} from '../dal/DalImpl'
// export module ActivityService {
//     const INSTANCE  = new DalImpl();
//     const KEY = "Activites/activite";
//     INSTANCE.setValue("Activites/activite", "activite");

 export class ActivityService {
    INSTANCE  = new DalImpl();
    KEY = "Activites";

    /**
     * Insert an Activity in the DB 
     * @param activity
     */
    async setActivity(activity: ActivityDate ){
    let value :string = JSON.stringify(activity);
        this.INSTANCE.setValueByDate(this.KEY, value, new Date());
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
    /**
     * Returns the last Activity 
     */
    async getActivity(){
        return await this.INSTANCE.getValue(this.KEY,new Date());
    }
}
