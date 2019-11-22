import moment, { now } from 'moment';

//Important - Overide the format when jsonifying a moment object
moment.fn.toJSON = function () { return this.format(); }

/**
 * [Sleep: represent a sleep entity.
 *  - start: moment 
 *  - end: moment
 * ]
 */
class Sleep {
    /**
     * [constructor description]
     *
     * @param   {object}  sleep  [a valid json object]
     * 
     * Note: for the validation rules: check ./sleep.schema.json
     */
    constructor(sleep) {
        this.id = sleep['id']
        this.start = moment.parseZone(sleep['start'])
        this.end = moment.parseZone(sleep['end'])
        this.numberOfInteruptions = sleep['numberOfInteruptions']
        this.comment = sleep["comment"]
        this.mood = sleep["mood"]
    }

    /**
     * [getId description]
     *
     * @return  {Integer} 
     */
    getId() {
        return this.id
    }

    /**
     * [Get start date formatted]
     *
     * @param   {string}  format  [a valid date format]
     *
     * @return  {string}        
     */
    getStartDate(format = 'MM/DD/YYYY') {
        return this.start.format(format)
    }

    /**
     * [Get start time]
     *
     * @param   {string}  format  [a valid time format]
     *
     * @return  {string}         
     */
    getStartTime(format = "HH:mm") {
        return this.start.format(format)
    }

    /**
     * [Get end date  formatted]
     *
     * @param   {string}  format  [format description]
     *
     * @return  {string}         
     */
    getEndDate(format = 'MM/DD/YYYY') {
        return this.end.format(format)
    }

    /**
 * [Get end date  formatted]
 *
 * @param   {string}  format  [format description]
 *
 * @return  {string}         
 */
    getEndTime(format = 'HH:mm') {
        return this.end.format(format)
    }

    /**
     * [Get the duration of the sleep in hours]
     *
     * @return  {Integer}  [return description]
     */
    getDurationAsHours() {
        const duration = moment.duration(this.end.diff(this.start))

        return duration.asHours()
    }

    /**
     * [Get the duration of the sleep in minutes]
     *
     * @return  {Integer}  [return description]
     */
    getDurationAsMinutes() {
        const duration = moment.duration(this.end.diff(this.start))

        return duration.asMinutes()
    }

    /**
     * [Get the number of interuptions]
     *
     * @return  {Integer}  
     */
    getNumberOfInteruptions() {
        return this.numberOfInteruptions
    }

    /**
     * [Get the interval]
     * 
     * e.g: 23:00 - 06:00
     *
     * @return  {String}  
     */
    getInterval() {
        return `${this.getStartTime() - this.getEndTime()}`
    }

    /**
     * [Get mood]
     *
     * @return  {String} 
     */
    getMoon(){
        return this.mood
    }
}

/**
 * [A collection to manipulate a list of sleeps object.]
 * 
 */
class SleepCollection {
    /**
     * @param   {json list of sleep entites}  datas  
     */
    constructor(datas) {

        this.activeDate = moment(datas.activeDate)

        this.list = []

        if (datas.list) {
            this.addSleepList(datas.list)
        }
    }

    /**
     * [Add a list of sleep from a json]
     *
     * @param   {[obj]}  listSleeps  [a valid list of json sleep objects ]
     *
     * Note: for the validation rules: check ./sleep_collection.schema.json
     */
    addSleepList(listSleeps) {
        listSleeps.forEach(sleep => {
            this.addSleep(new Sleep(sleep))
        });
    }

    /**
     * [Add a new sleep]
     *
     * @param   {Sleep}  sleep  
     *
     */
    addSleep(sleep) {
        this.list.push(sleep)
    }

    /**
     * [Removes a sleep]
     * 
     * @param {Sleep} sleep 
     */
    removeSleep(sleep) {
        this.list = this.list.filter(s => s.getId() !== sleep.getId());
    }

    /**
     * [Get the number of sleeps]
     *
     * @return  {Integer}  [number of sleeps]
     */
    size() {
        return this.list.length
    }

    /**
     * [Return the sleep list by descending end date order]
     *
     * @return  {[Sleep]}  [return list of sleeps]
     */
    sortByAscendingStartDate() {
        return this.list.sort((s1, s2) => {
            const start1 = s1.start.format("X")
            const start2 = s2.start.format("X")

            if(start1 < start2){
                return -1
            } else if(start1 > start2){
                return 1
            }

            return 0;
        });
    }

    /**
     * [sortByDescendingStartDate]
     *
     * @return  undefined
     */
    sortByDescendingStartDate(){
        this.sortByAscendingStartDate()

        this.list.reverse()
    }

    /**
     * [getMinStartDate]
     *
     * @return  {moment}  [get the ]
     */
    getMinStartDate(){
        if(this.size() > 0){
            this.sortByAscendingStartDate()
            return this.list[0].start;
        }

        return now()
    }

    /**
     * [filter list of sleep between 2 dates]
     *
     * @param   {moment}  start  
     * @param   {moment}  end    
     *
     * @return  {[sleep]}         [return a list of sleep filtered between 2 dates]
     */
    filterSleepByDates(start, end) {
        return this.list.filter((sleep) => sleep.start.isBetween(start, end) && sleep.end.isBetween(start, end))
    }

    /**
     * [Calculate the average sleep between a date and x days before description]
     *
     * @param   {[type]}  date          [date to end with]
     * @param   {[type]}  numberOfDays  [number of days]
     *
     * @return  {double}                [number of hours]
     */
    getAverageSleep(date, numberOfDays) {
        const end = date.clone()
        const start = date.subtract(numberOfDays, 'days')
        const list = this.filterSleepByDates(start, end)

        if (list.length === 0) {
            return moment.duration(0, 'h')
        }

        const totalHours = list.reduce((acc, curr) => acc + curr.getDurationAsHours(), 0)
        return moment.duration(totalHours / list.length, 'h')
    }

    /**
     * [Calculates total amount of sleep in the list as minutes]
     * 
     * @return total amount of sleep time in minutes
     */
    calculateTotalSleep() {
        var totalMinutes = 0;

        this.list.forEach(function (sleep) {
            totalMinutes += sleep.getDurationAsMinutes();
        })

        return totalMinutes;
    }
}

export { Sleep, SleepCollection };