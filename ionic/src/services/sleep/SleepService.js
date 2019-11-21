import { SleepCollection } from '../../entities/sleep/sleep'
import { DalImpl } from '../../dal/DalImpl'
import ValidatorService from './ValidatorService';
/**
 * Service to fetch sleep entities from the persistence
 */
export default class SleepService{
    constructor(){
        this.persist = new DalImpl();
        this.validatorService = new ValidatorService()
    }    

    getKey (moment){
        return `sleep/${moment.format("YYYY-MM-DD")}`
    }

    /**
     * Fetch the list of sleeps from the persistance layer
     */
    async fetch (moment) {
        const result = await this.persist.getAllValues(this.getKey(moment))
        const sleepCollection = new SleepCollection(result); 

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
    deleteSleep(key, sleepCollection){
        //@todo: PhilB ou Alex
    }

    /**
     * returns a key for a new SleepItem, 
     * for the moment it's simply the length and it's a potential problem.
     * we'll have to talk to pesistance to know how they id their json objects
     */
    getNewKey(){
        //@todo: PhilB ou Alex
        // return sleepArray.length;
    }
}
