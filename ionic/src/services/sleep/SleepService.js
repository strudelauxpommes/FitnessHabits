import { SleepCollection, Sleep } from '../../entities/sleep/sleep'
/**
 * Service to fetch sleep entities from the persistence
 */
const SleepService  = () => {
    
    var sleepArray = [
        new Sleep({"id": 1, "start": "2019-10-31T21:00:00-05:00", "end": "2019-11-01T06:00:00-05:00", "numberOfInteruptions": 2, "comment": ""}),
        new Sleep({"id": 2, "start": "2019-10-30T21:15:00-05:00", "end": "2019-10-31T06:23:00-05:00", "numberOfInteruptions": 1, "comment": ""}),
        new Sleep({"id": 3, "start": "2019-10-29T21:47:00-05:00", "end": "2019-10-30T06:12:00-05:00", "numberOfInteruptions": 3, "comment": ""}),
        new Sleep({"id": 4, "start": "2019-10-28T21:00:00-05:00", "end": "2019-10-29T06:00:00-05:00", "numberOfInteruptions": 0, "comment": ""}),
        new Sleep({"id": 5, "start": "2019-10-27T23:34:00-05:00", "end": "2019-10-28T06:57:00-05:00", "numberOfInteruptions": 0, "comment": ""}),
        new Sleep({"id": 6, "start": "2019-10-26T21:00:00-05:00", "end": "2019-10-27T06:00:00-05:00", "numberOfInteruptions": 2, "comment": ""}),
        new Sleep({"id": 7, "start": "2019-10-25T21:00:00-05:00", "end": "2019-10-26T06:00:00-05:00", "numberOfInteruptions": 4, "comment": ""})
    ];

    /**
     * Fetch the list of sleeps from the persistance layer
     */
    const fetch = () => {
            const sleepCollection = new SleepCollection(); 
            sleepCollection.addSleepList(sleepArray);
            return sleepCollection
    }

    /**
     * Save a new sleep to the persistance layer
     */
    const save = (sleepItem) => {

        const newSleepItem = new Sleep({
                "id":getNewKey(),
                "start":sleepItem.start,
                "end":sleepItem.end,
                "numberOfInteruptions":0,
                "comment":""
        });

        //TODO: change this to talk to the persistence layer
        sleepArray.push(newSleepItem);
    }

    /**
     * Delete a SleepItem from the sleepArray
     */
    const deleteSleep = (key) => {
        sleepArray = sleepArray.filter(
            (item) => {
                return item.id !== key
            }
        );
    }

    /**
     * returns a key for a new SleepItem, 
     * for the moment it's simply the length and it's a potential problem.
     * we'll have to talk to pesistance to know how they id their json objects
     */
    const getNewKey = () => {
        return sleepArray.length;
    }

    //delete, update
     
    return {
        fetch: fetch,
        save: save,
        delete: deleteSleep,
    }
}

export default SleepService