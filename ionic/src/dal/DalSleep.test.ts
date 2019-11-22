import { DalImpl } from './DalImpl'
import Dal from './Dal';
import { Sleep, SleepCollection } from 'src/entities/sleep/sleep';
import moment from 'moment';

describe('Dal', function() {
    const instance: Dal = new DalImpl();

    afterEach(async function() {
        await instance.clear();
    });

    describe('sleep collection', function() {
        let sleepCollection = new SleepCollection({
            'activeDate': '2016-11-20',
            'list': [
                {
                    "start": "2016-11-23T23:00:00-05:00",
                    "end": "2016-11-24T07:00:00-05:00",
                    "numberOfInteruptions": 2,
                    "comment": "",
                    "mood": "Neutre"
                },
                {
                    "start": "2016-11-21T23:00:00-05:00",
                    "end": "2016-11-22T08:00:00-05:00",
                    "numberOfInterupti,ons": 2,
                    "comment": "",
                    "mood": "Neutre"
                },
                {
                    "start": "2016-11-20T22:00:00-05:00",
                    "end": "2016-11-21T06:00:00-05:00",
                    "numberOfInteruptions": 2,
                    "comment": "",
                    "mood": "Neutre"
                }
            ]
        });
        
        let jsonCollection = JSON.stringify(sleepCollection)

        beforeEach(async function() {
            await instance.clear();

            await instance.setValueByDate("sleep", jsonCollection, new Date("2016-11-20"));            
        });

        it('should get a collection of sleep for an active date', async function() {
            const actual = await instance.getValue("sleep", new Date("2016-11-20"));
            const actualParsed = JSON.parse(actual as string)
            
            expect(actual).toEqual(jsonCollection)
            
            const result2 = new SleepCollection(actualParsed)
            expect(result2.activeDate.format('YYYY-MM-DD')).toEqual('2016-11-20')
            expect(result2.size()).toEqual(3)
        });

        it('should update a collection of sleep for an active date', async function() {
            let actual = await instance.getValue("sleep", new Date("2016-11-20"));
            let actualParsed = JSON.parse(actual as string)
            
            let result2 = new SleepCollection(actualParsed)
            result2.addSleep(new Sleep( {
                "start": "2016-11-20T22:00:00-05:00",
                "end": "2016-11-21T06:00:00-05:00",
                "numberOfInteruptions": 2,
                "comment": "",
                "mood": "Neutre"
            }));

            await instance.setValueByDate("sleep", JSON.stringify(result2), new Date("2016-11-20"));  

            actual = await instance.getValue("sleep", new Date("2016-11-20"));
            actualParsed = JSON.parse(actual as string)
            result2 = new SleepCollection(actualParsed)
            expect(result2.size()).toEqual(4)
        });

        it('should update a collection of sleep for an active date', async function() {
            let actual = await instance.getValue("sleep", new Date("2016-11-20"));
            let actualParsed = JSON.parse(actual as string)
            
            let result2 = new SleepCollection(actualParsed)
            result2.list.pop()

            await instance.setValueByDate("sleep", JSON.stringify(result2), new Date("2016-11-20"));  

            actual = await instance.getValue("sleep", new Date("2016-11-20"));
            actualParsed = JSON.parse(actual as string)
            result2 = new SleepCollection(actualParsed)
            expect(result2.size()).toEqual(2)
        });

        it('should update a collection of sleep for an active date', async function() {
            await instance.setValueByDate("sleep", jsonCollection, new Date("2016-11-23")); 
            await instance.setValueByDate("sleep", jsonCollection, new Date("2016-11-25"));    
            await instance.setValueByDate("sleep", jsonCollection, new Date("2016-11-27"));  
            
            const begin = new Date("2016-11-23");
            const end = new Date("2016-11-25");
            let items = await instance.getItems("sleep", begin, end);
            expect(items.length).toStrictEqual(2);
        });
    });
});
