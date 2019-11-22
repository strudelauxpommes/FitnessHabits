import { SleepCollection } from '../../entities/sleep/sleep'
import { DalImpl } from '../../dal/DalImpl'
import ValidatorService from './ValidatorService';
import moment from 'moment'
/**
 * Service to fetch sleep entities from the persistence
 */
export default class SleepService{
    constructor(){
        this.persist = new DalImpl()
        this.persist.clear()
        this.validatorService = new ValidatorService()
    }    

    getKey (moment){
        return `sleep/${moment.format("YYYY-MM-DD")}`
    }

    /**
     * Fetch the list of sleeps from the persistance layer
     */
    async fetch (moment) {
        const key = this.getKey(moment)
        const result = await this.persist.getValue(key)
        console.log(result)

        const sleepCollection = new SleepCollection(result); 

        const actuals = await this.persist.keys();
        console.log(actuals) //temporary debug

        return sleepCollection
    }

    /**
     * Save a new sleep to the persistance layer
     */
    async save(activeMoment, sleepCollection){
        const key = this.getKey(activeMoment)

        //Persistence does not support json (LOL)
        const json = JSON.stringify(sleepCollection)
        console.log(json)

        await this.persist.setValue(key, json)

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

    async getActiveDate(){
        // Waiting for ocean team to complete active date persistence
        // const activeDate = await this.persist.getValue('active-date')
        
        return moment('2016-11-23T23:00:00-05:00');
    }
}
