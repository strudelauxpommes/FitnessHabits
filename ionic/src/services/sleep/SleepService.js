import { SleepCollection } from '../../entities/sleep/sleep'
import { DalImpl } from '../../dal/DalImpl'
import ValidatorService from './ValidatorService';
import moment from 'moment'
// import ajv from 'ajv';
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

    /**
     * Fetch the list of Sleep Collection associated with the last 7 days 
     * from the active date.
     */

    async fetchHistory(){
        const activeMoment = await this.getActiveMoment()
        const startMoment = activeMoment.clone().subtract(7, 'days')

        const begin = new Date(startMoment.format("YYYY-MM-DD"));
        const end = new Date(activeMoment.format("YYYY-MM-DD"));
        let items = await this.persist.getItems("sleep", begin, end);
        
        //we define a groupby function to group all sleepcollection in separate arrays
        const groupBy = (array, fn) => array.reduce((result, item) => {
            const key = fn(item);
            if (!result[key]) result[key] = [];
                result[key].push(item);
            return result;
        }, {});

        //we use the groupby
        const tempGroup = groupBy(items,i => i.dateTime)
        //we get the key of all the element in the resulting object
        const allCollectionKeys = Object.keys(tempGroup)

        const finalCollection = []

        //for each group of collection we sort according to the timestamp and take the first
        //still need to verify if the sorting order is good
        allCollectionKeys.forEach( (collection) => {
            const temp = tempGroup[collection]
            //once we have the latest value we push it to the finalCollection array
            finalCollection.push(temp[(temp.length-1)])
        })
    
        const result = []
        
        finalCollection.forEach(item => {
                const value = item.value
                const json = JSON.parse(value)
                //result.push(new SleepCollection(json))
                const itemCollection = new SleepCollection(json)
                result.push(itemCollection)        
        })
        
        const mergedCollection = result[0]
        
        for(var i = 1; i < result.length;i++){
            mergedCollection.addSleepList(result[i].list)
        }
        
        return mergedCollection
    }

    /**
     * Save a new sleep to the persistance layer
     */
    async saveActiveDate(sleepCollection){
        const json = JSON.stringify(sleepCollection)

        const activeDate = await this.getActiveDate()
        await this.persist.setValueByDate("sleep", json, activeDate); 
    }

    /**
     * 
     * @param {SleepCollection} sleepCollection 
     * @param {moment} date 
     * 
     * save a collection at a specific date
     */

    async saveCollectionAtDate(sleepCollection,date){
        const json = JSON.stringify(sleepCollection)
        //we then need to transform the actual date to the JS date format
        const dateFormated = Date(date.toDate())
        //then call setValueByDate
        await this.persist.setValueByDate("sleep",json,dateFormated)
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
        
        return moment('2019-10-09T00:00:00-05:00');
    }

    async getActiveDate(){
        // Waiting for ocean team to complete active date persistence
        // const activeDate = await this.persist.getValue('active-date')
        
        return new Date("2019-10-09");
    }
}
