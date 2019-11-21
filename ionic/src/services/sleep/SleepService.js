import { SleepCollection, Sleep } from '../../entities/sleep/sleep'
import { DalImpl } from '../../dal/DalImpl'
import ValidatorService from './ValidatorService';
/**
 * Service to fetch sleep entities from the persistence
 */
export default class SleepService{
    constructor(){
        this.persist = new DalImpl();
        this.validatorService = new ValidatorService()
        // this.sleepArray = [
        //     new Sleep({"id": 1, "start": "2019-10-31T21:00:00-05:00", "end": "2019-11-01T06:00:00-05:00", "numberOfInteruptions": 2, "comment": ""}),
        //     new Sleep({"id": 2, "start": "2019-10-30T21:15:00-05:00", "end": "2019-10-31T06:23:00-05:00", "numberOfInteruptions": 1, "comment": ""}),
        //     new Sleep({"id": 3, "start": "2019-10-29T21:47:00-05:00", "end": "2019-10-30T06:12:00-05:00", "numberOfInteruptions": 3, "comment": ""}),
        //     new Sleep({"id": 4, "start": "2019-10-28T21:00:00-05:00", "end": "2019-10-29T06:00:00-05:00", "numberOfInteruptions": 0, "comment": ""}),
        //     new Sleep({"id": 5, "start": "2019-10-27T23:34:00-05:00", "end": "2019-10-28T06:57:00-05:00", "numberOfInteruptions": 0, "comment": ""}),
        //     new Sleep({"id": 6, "start": "2019-10-26T21:00:00-05:00", "end": "2019-10-27T06:00:00-05:00", "numberOfInteruptions": 2, "comment": ""}),
        //     new Sleep({"id": 7, "start": "2019-10-25T21:00:00-05:00", "end": "2019-10-26T06:00:00-05:00", "numberOfInteruptions": 4, "comment": ""})
        // ];
    }    

    getKey (moment){
        return `sleep/${moment.format("YYYY-MM-DD")}`
    }

    /**
     * Fetch the list of sleeps from the persistance layer
     */
    async fetch (moment) {
        const result = await this.persist.getAllValues(this.getKey(moment))
        const sleepCollection = new SleepCollection(); 

        result.forEach(jsonSleep => {
            if(this.validatorService.validateSleepJson(jsonSleep) === true){
                sleepCollection.addSleep(new Sleep(jsonSleep))
            }else{
                //@todo how to handle invalid data from db
                console.log(jsonSleep, this.validatorService.getErrors())
            }
        })

        return sleepCollection
    }

    /**
     * Save a new sleep to the persistance layer
     */
    async save(activeMoment, sleepCollection){

        const key = this.getKey(activeMoment)

        await this.persist.setValue(key, sleepCollection)

        return this.fetch(activeMoment)
    }

    /**
     * Delete a SleepItem from the sleepArray
     */
    deleteSleep(key){
        //@todo
    }

    /**
     * returns a key for a new SleepItem, 
     * for the moment it's simply the length and it's a potential problem.
     * we'll have to talk to pesistance to know how they id their json objects
     */
    getNewKey(){
        // return sleepArray.length;
    }
}
