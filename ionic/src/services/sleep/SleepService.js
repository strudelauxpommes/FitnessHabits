import { SleepCollection } from '../../entities/sleep/sleep'
import { DalImpl } from '../../dal/DalImpl'
import moment from 'moment'
/**
 * Service to fetch sleep entities from the persistence
 */
export default class SleepService{
    constructor(){
        this.persist = new DalImpl()
        // this.persist.clear()
    }    

    getKey (){
        return 'sleep'
    }

    /**
     * Fetch the list of sleeps from the persistance layer
     */
    async fetchActiveDate () {
        const activeDate = await this.getActiveMoment()
        
        const parsedDate = new Date(activeDate.format('YYYY-MM-DD'))
        const actual = await this.persist.getValue(this.getKey(), parsedDate)
        
        if(actual === undefined){
            const sleepCollection = new SleepCollection({'activeDate': parsedDate, 'list': []})
            return sleepCollection
        } 
        
        const sleepCollection = new SleepCollection(actual); 

        return sleepCollection
    }

    /**
     * Fetch the list of Sleep Collection associated with the last 7 days 
     * from the active date.
     * 
     * TO BE DELETE : fetchHistory_v2 is the final version
     */

    async fetchHistory(){
        const x = await this.fetchHistory_v2()
        const mergedCollection = x[0]
        for(var i = 1; i < x.length;i++){
            mergedCollection.addSleepList(x[i].list)
        }   

        return mergedCollection
    }

    async fetchHistory_v2(){
        let result = []
        const historyDates = await this.getHistoryDate()
       

        for(let i = 0; i < historyDates.length; i++){
            const parsedDate = new Date(historyDates[i].format('YYYY-MM-DD'))
            let actual = await this.persist.getValue(this.getKey(), parsedDate)
            if(actual === undefined){
                actual = {'activeDate': parsedDate, 'list': []}
            } 

            const sleepCollection = new SleepCollection(actual); 
            result.push(sleepCollection)
        }

        return result
    }

    async fetchMoods(){
        // Remove this once values are set by parameters team
        await this.persist.setValue("preferences/listeHumeurs", [
            "Super", 
            "De bonne humeur", 
            "Neutre", 
            "Grognon",
            "Fatigué",
            "Dépressif"
        ]);
        const moods = await this.persist.getLastValue("preferences/listeHumeurs");
        const moodObjects = []

        moods.forEach(mood => 
            moodObjects.push(
                {
                    name: 'mood',
                    value: mood,
                    label: mood,
                    type: 'radio'
                }
            )   
        )

        return moodObjects
    }

    /**
     * Save a new sleep to the persistance layer
     */
    async saveActiveDate(sleepCollection){
        const activeDate = await this.getActiveDate()
        await this.persist.setValueByDate("sleep", sleepCollection, activeDate); 
    }

    async saveCollectionWithDate(sleepCollection,date){
        const activeDate = date
        await this.persist.setValueByDate("sleep", sleepCollection, new Date(activeDate)); 
    }

    /**
     * Delete a SleepItem from the sleepArray
     */
    deleteSleep(key, sleepCollection){
        //@todo: 
    }

    async getActiveMoment(){

        return moment('2019-10-11T00:00:00-04:00');
    }

    async getHistoryDate(){

        const historyDates = []
        for(var i =0; i <= 6;i++){
            var temp = moment('2019-10-11');
            temp = temp.subtract(i,"days")
            historyDates.push(temp)
        }
        
        return historyDates
    }

    async getActiveDate(){
        // Waiting for ocean team to complete active date persistence
        // const activeDate = await this.persist.getValue('active-date')
        
        return new Date("2019-10-11");
    }
}