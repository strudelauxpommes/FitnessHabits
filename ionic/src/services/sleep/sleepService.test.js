import SleepService from './SleepService'
import { DalImpl } from '../../dal/DalImpl'
import moment from 'moment'
import { SleepCollection } from 'src/entities/sleep/sleep';

jest.mock('../../dal/DalImpl')

beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    DalImpl.mockClear();
});

test('check service instanciate the persistence service', async() => {
    new SleepService()
    expect(DalImpl).toHaveBeenCalledTimes(1)
})

test('generates the key for the persistence service', async() => {
    const service = new SleepService()
    const expected = "sleep/2019-10-10"
    const activeDate = moment("2019-10-10")

    expect(service.getKey(activeDate)).toEqual(expected)
})

test('fetch a collection of sleep for one moment', async () => {
    const service = new SleepService()
    const activeDate = moment("2019-10-10")

    const response = [
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
            "numberOfInteruptions": 2,
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
    const mockInstance = DalImpl.mock.instances[0]
    mockInstance.getAllValues.mockResolvedValue(response)

    const result = await service.fetch(activeDate)
    expect(result.list).toHaveLength(3)
})

test('save a collection of sleep for one moment', async () => {
    const service = new SleepService()
    const activeDate = moment("2019-10-10")

    const response = [
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
            "numberOfInteruptions": 2,
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

    const mockInstance = DalImpl.mock.instances[0]
    mockInstance.getAllValues.mockResolvedValue(response)
    
    const result = await service.save(activeDate)
    expect(result.list).toHaveLength(3)
})