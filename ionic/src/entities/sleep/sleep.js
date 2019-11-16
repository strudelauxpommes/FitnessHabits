import moment from 'moment';

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
     * @param   {obj{"start", "end"}}  obj  [object with start, end keys]
     */
    constructor(obj) {
        this.id = obj['id']
        this.start = moment.parseZone(obj['start'])
        this.end = moment.parseZone(obj['end'])
        this.numberOfInteruptions = obj['numberOfInteruptions']
        this.comment = obj["comment"]
    }

    /**
     * [getId description]
     *
     * @return  {Integer}  [return description]
     */
    getId() {
        return this.id
    }

    /**
     * [Get start date formatted]
     *
     * @param   {string}  format  [a valid date format]
     *
     * @return  {string}          [a formatted start date]
     */
    getStartDate(format = 'MM/DD/YYYY') {
        return this.start.format(format)
    }

    /**
     * [Get start time]
     *
     * @param   {string}  format  [a valid time format]
     *
     * @return  {string}          [a formatted time]
     */
    getStartTime(format = "HH:mm") {
        return this.start.format(format)
    }

    /**
     * [Get end date  formatted]
     *
     * @param   {[type]}  format  [format description]
     *
     * @return  {[type]}          [return description]
     */
    getEndDate(format = 'MM/DD/YYYY') {
        return this.end.format(format)
    }

    /**
 * [Get end date  formatted]
 *
 * @param   {string}  format  [format description]
 *
 * @return  {string}          [return description]
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

    getNumberOfInteruptions() {
        return this.numberOfInteruptions
    }

    /**
     * [getInterval description]
     *
     * @return  {[type]}  [return description]
     */
    getInterval() {
        return `${this.getStartTime() - this.getEndTime()}`
    }

    /**
     * [Validate sleep arguments]
     *
     * Rules: 
     *  - start must be a valid moment object
     *  - end must be a valid moment object
     *  - end - start > 0
     *  - 
     * 
     * 
     * @return  {boolean}  [return true if not valid]
     */
    isNotValid() {
        //@todo: implement rules 
        return false
    }
}

/**
 * [Collection to manipulate the sleeps object.]
 * 
 * 
 */
class SleepCollection {
    /**
     * @param   {json list of sleep entites}  datas  [datas description]
     */
    constructor(datas) {
        this.list = []

        if (datas) {
            this.addSleepList(datas)
        }
    }

    /**
     * [Add a list of sleep from a json]
     *
     * @param   {[obj]}  listObj  [a list of json objects ]
     * 
     * e.g: [{"start": "2016-11-23T23:00:00-05:00", "end": "2016-11-24T07:00:00-05:00"}]
     *
     */
    addSleepList(listObj) {
        listObj.forEach(sleep => {
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
    sortDescByEndDate() {
        return this.list
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

    getTotalAverageSleep() {
        //@todo
    }

    getAverageSleepByDays(nbrDays = 7) {
        //@todo
    }

    // Any 
}

export { Sleep, SleepCollection };