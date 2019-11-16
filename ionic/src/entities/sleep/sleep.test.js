import {Sleep, SleepCollection} from './sleep.js'
import path from 'path'
import fs from 'fs'
import moment from 'moment'

test('create a sleep entity from a json object and check the getter / formatter date and time.', () => {
    var json = {
        'start': '2016-11-23T23:15:00-05:00',
        'end': '2016-11-24T07:00:00-05:00'
    }

    const sleep = new Sleep(json)
    expect(sleep.getStartDate()).toEqual("11/23/2016")
    expect(sleep.getStartTime()).toEqual("23:15")
    expect(sleep.getEndDate()).toEqual("11/24/2016")
    expect(sleep.getEndTime()).toEqual("07:00")
    expect(sleep.getDurationAsHours()).toEqual(7.75)
})


test('jsonify a sleep entity ', () => {
    var json = {
        'start': '2016-11-23T13:00:00-05:00',
        'end': '2016-01-01T19:00:00-05:00'
    }

    const sleep = new Sleep(json)

    const expected = '{"end":"2016-01-01T19:00:00-05:00","start":"2016-11-23T13:00:00-05:00"}'
    const result = JSON.stringify(sleep, Object.keys(sleep).sort())
    expect(result).toEqual(expected)
})

test('parse a json, create a sleep collection and check the size of the collection', () => {
    const fixtureFile = path.join(__dirname, "fixtures/sleepList.json")
    const rawData = fs.readFileSync(fixtureFile)
    const datas = JSON.parse(rawData)
    const sleepCollection = new SleepCollection(datas)

    expect(sleepCollection).toBeDefined()
    expect(sleepCollection.size()).toEqual(3)
})

test('validate a sleep entity', () => {
    var json = {
        'start': '2016-11-23T23:15:00-05:00',
        'end': '2016-11-24T07:00:00-05:00'
    }

    const sleep = new Sleep(json)
    expect(sleep.isNotValid()).toBeFalsy()
})

test('Get list of sleeps between 2 dates', () => {
    const sleepCollection = new SleepCollection();
    sleepCollection.addSleep(new Sleep({'id': 1, 'start': '2016-11-01T23:00:00-05:00', 'end': '2016-11-02T07:05:00-05:00', 'numberOfInteruptions': 1, 'comments': ''}))
    sleepCollection.addSleep(new Sleep({'id': 2, 'start': '2016-11-02T23:15:00-05:00', 'end': '2016-11-03T07:06:00-05:00', 'numberOfInteruptions': 1, 'comments': ''}))
    sleepCollection.addSleep(new Sleep({'id': 3, 'start': '2016-11-05T23:30:00-05:00', 'end': '2016-11-06T07:06:15-05:00', 'numberOfInteruptions': 1, 'comments': ''}))
    sleepCollection.addSleep(new Sleep({'id': 4, 'start': '2016-11-06T23:45:00-05:00', 'end': '2016-11-07T07:25:00-05:00', 'numberOfInteruptions': 1, 'comments': ''}))
    sleepCollection.addSleep(new Sleep({'id': 5, 'start': '2016-11-07T23:00:00-05:00', 'end': '2016-11-08T07:05:00-05:00', 'numberOfInteruptions': 1, 'comments': ''}))
    sleepCollection.addSleep(new Sleep({'id': 6, 'start': '2016-11-08T23:00:00-05:00', 'end': '2016-11-09T07:05:00-05:00', 'numberOfInteruptions': 1, 'comments': ''}))

    const start = moment.parseZone('2016-11-02T00:00:00-05:00')
    const end = moment.parseZone('2016-11-07T00:00:00-05:00')

    const result = sleepCollection.filterSleepByDates(start, end)
    expect(result).toHaveLength(2)
})

test('Get average of sleep between 2 dates', () => {
    const sleepCollection = new SleepCollection();
    sleepCollection.addSleep(new Sleep({'id': 1, 'start': '2016-11-01T23:00:00-05:00', 'end': '2016-11-02T07:05:00-05:00', 'numberOfInteruptions': 1, 'comments': ''}))
    sleepCollection.addSleep(new Sleep({'id': 2, 'start': '2016-11-02T23:15:00-05:00', 'end': '2016-11-03T07:06:00-05:00', 'numberOfInteruptions': 1, 'comments': ''}))
    sleepCollection.addSleep(new Sleep({'id': 3, 'start': '2016-11-05T23:30:00-05:00', 'end': '2016-11-06T07:06:15-05:00', 'numberOfInteruptions': 1, 'comments': ''}))
    sleepCollection.addSleep(new Sleep({'id': 4, 'start': '2016-11-06T23:45:00-05:00', 'end': '2016-11-07T07:25:00-05:00', 'numberOfInteruptions': 1, 'comments': ''}))
    sleepCollection.addSleep(new Sleep({'id': 5, 'start': '2016-11-07T23:00:00-05:00', 'end': '2016-11-08T07:05:00-05:00', 'numberOfInteruptions': 1, 'comments': ''}))
    sleepCollection.addSleep(new Sleep({'id': 6, 'start': '2016-11-08T23:00:00-05:00', 'end': '2016-11-09T07:05:00-05:00', 'numberOfInteruptions': 1, 'comments': ''}))

    const result = sleepCollection.getAverageSleep(moment.parseZone('2016-11-06T00:00:00-05:00'), 7)

    expect(result.toString()).toEqual("PT7H58M")
})

test('sort sleep entites by ascending order', () => {
    const sleepCollection = new SleepCollection();

    sleepCollection.addSleep(new Sleep({'start': '2016-11-23T23:00:00-05:00', 'end': '2016-11-24T07:00:00-05:00'}))

    //@todo
})

test('Calculate total amount of sleep', () => {
    const sleepCollection = new SleepCollection();

    sleepCollection.addSleep(new Sleep({'id': 1, 'start': '2019-11-01T23:00:00-05:00', 'end': '2019-11-02T07:00:00-05:00', 'numberOfInteruptions': 1, 'comments': ''}))
    sleepCollection.addSleep(new Sleep({'id': 2, 'start': '2019-11-02T08:00:00-05:00', 'end': '2019-11-02T08:05:00-05:00', 'numberOfInteruptions': 1, 'comments': ''}))

    const result = sleepCollection.calculateTotalSleep();
    expect(result).toEqual(485);
})