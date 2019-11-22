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

        this.validatorService = new ValidatorService()
    }    

    getKey (){
        return 'sleep'
    }

    /**
     * Fetch the list of sleeps from the persistance layer
     */
    async fetchActiveDate () {
        const activeDate = await this.getActiveDate()
        const actual = await this.persist.getValue(this.getKey(), activeDate)

        if(actual === undefined){
            const sleepCollection = new SleepCollection({'activeDate': activeDate.toISOString().split('T')[0], 'list': []})
            return sleepCollection
        } 
            
        const actualParsed = JSON.parse(actual)
        const sleepCollection = new SleepCollection(actualParsed); 

        return sleepCollection
    }

    // async fetchHistory(){
    //     const active = this.getActiveDate();
    //     const seven = "" // calcul

    //     this.persist.getB
    // }

    /**
     * Save a new sleep to the persistance layer
     */
    async saveActiveDate(sleepCollection){
        const json = JSON.stringify(sleepCollection)

        const activeDate = await this.getActiveDate()

        await this.persist.setValueByDate("sleep", json, activeDate); 
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

    async getActiveMoment(){
        // Waiting for ocean team to complete active date persistence
        // const activeDate = await this.persist.getValue('active-date')
        
        return moment('2019-10-11T00:00:00-05:00');
    }

    async getActiveDate(){
        // Waiting for ocean team to complete active date persistence
        // const activeDate = await this.persist.getValue('active-date')
        
        return new Date("2019-10-12");
    }
}
