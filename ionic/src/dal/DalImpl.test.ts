import { DalImpl } from './DalImpl'
import Dal from './Dal';

describe('Dal', function() {
    const instance: Dal = new DalImpl();

    afterEach(async function() {
        await instance.clear();
    });

    describe('getLastValue', function() {
        it('should return undefined value upon an empty item', async function() {
            const actual = await instance.getLastValue("foo");
            expect(actual).toStrictEqual(undefined);
        });

        it('should add a new key', async function() {
            await instance.setItem("foo", "bar");
            const actuals = await instance.keys();
            expect(actuals.length).toStrictEqual(1);
        });

        it('should add only one key', async function() {
            await instance.setItem("foo", "bar");
            await instance.setItem("foo", "ber");
            const actuals = await instance.keys();
            expect(actuals.length).toStrictEqual(1);
        });

        it('should add a value under a key', async function() {
            await instance.setItem("foo", "bar");
            const actual = await instance.getLastValue("foo");
            expect(actual).toStrictEqual("bar");
        });

        it('get last value by date', async function() {
            await instance.setItemByDate("foo", "ber", new Date("01/02/2019"));
            await instance.setItemByDate("foo", "bar", new Date("01/01/2019"));
            let actual = await instance.getLastValue("foo");
            expect(actual).toStrictEqual("bar");
            await instance.setItemByDate("foo", "bie", new Date("01/02/2019"));
            actual = await instance.getLastValue("foo");
            expect(actual).toStrictEqual("bie");
        });
    });

    describe('getAllItems', function() {
        beforeEach(async function() {
            await instance.clear();
            await instance.setItemByDate("foo", "bar", new Date("2019-01-01"));
            await instance.setItemByDate("foo", "bie", new Date("2019-01-02"));
            await instance.setItemByDate("foo", "ber", new Date("2019-01-03"));
        });

        it('should return an empty array upon an empty items', async function() {
            const actuals = await instance.getAllItems("unknown key");
            expect(actuals).toStrictEqual([]);
        });

        // TODO: Date.now is not monotonic, but is good enough for now.
        it('should use monotonic timestamp', async function() {
            const currentDateTime = Date.now();
            const items = await instance.getAllItems("foo");
            expect(items.length).toStrictEqual(3);
            const dateTimes = items.map((x: any) => x.dateTime);
            for (let actual of dateTimes) {
                expect(actual).toBeLessThanOrEqual(currentDateTime);
            }
        });

        it('should retrieve all values under a key', async function() {
            const items = await instance.getAllItems("foo");
            expect(items.length).toStrictEqual(3);
            const values = items.map((x: any) => x.value);
            expect(values[0]).toBe("bar");
            expect(values[1]).toBe("bie");
            expect(values[2]).toBe("ber");
        });
    });

    describe('getValue', function() {
        it('should return undefined value upon an empty item', async function() {
            const actual = await instance.getValue("foo", new Date());
            expect(actual).toStrictEqual(undefined);
        });

        it('should add a new key', async function() {
            await instance.setItemByDate("foo", "bar", new Date("01/01/2019"));
            const actuals = await instance.keys();
            expect(actuals.length).toStrictEqual(1);
        });

        it('should not add a new key', async function() {
            await instance.setItemByDate("foo", "bar", new Date("01/01/2019"));
            await instance.setItemByDate("foo", "beer", new Date("01/01/2019"));
            const actuals = await instance.keys();
            expect(actuals.length).toStrictEqual(1);
        });

        it('should return undefined value if there is no item with the same date',
            async function() {
                await instance.setItemByDate("foo", "bar", new Date("01/01/2019"));
                const actual = await instance.getValue("foo", new Date());
                expect(actual).toStrictEqual(undefined);
            }
        );

        it('should add a value under a key', async function() {
            await instance.setItemByDate("foo", "bar", new Date("01/01/2019"));
            const actual = await instance.getValue("foo", new Date("01/01/2019"));
            expect(actual).toStrictEqual("bar");
        });

        it('should retrieve values by date', async function() {
            await instance.setItemByDate("foo", "bar", new Date("01/01/2019"));
            await instance.setItemByDate("foo", "ber", new Date("01/02/2019"));
            let actual = await instance.getValue("foo", new Date("01/01/2019"));
            expect(actual).toStrictEqual("bar");
            actual = await instance.getValue("foo", new Date("01/02/2019"));
            expect(actual).toStrictEqual("ber");
            await instance.setItemByDate("foo", "bar", new Date("01/02/2019"));
            actual = await instance.getValue("foo", new Date("01/02/2019"));
            expect(actual).toStrictEqual("bar");
        });

        it('should update value for a given date', async function() {
            await instance.setItemByDate("foo", "beer", new Date("01/02/2019"));
            const actual = await instance.getValue("foo", new Date("01/02/2019"));
            expect(actual).toStrictEqual("beer");
        });

        it('should update value for a given date regardless its time', async function() {
            await instance.setItemByDate("foo", "beer", new Date("11/14/2019, 8:00:00 PM"));
            let actual = await instance.getValue("foo", new Date("11/14/2019"));
            expect(actual).toStrictEqual("beer");
            await instance.setItemByDate("foo", "bar", new Date("11/14/2019, 1:00:00 AM"));
            actual = await instance.getValue("foo", new Date("11/14/2019"));
            expect(actual).toStrictEqual("bar");
        });
    });

    describe('getItems', function() {
        beforeEach(async function() {
            await instance.clear();
            await instance.setItemByDate("foo", "bar", new Date("2019-01-01"));
            await instance.setItemByDate("foo", "bie", new Date("2019-01-02"));
            await instance.setItemByDate("foo", "ber", new Date("2019-01-03"));
        });

        it('should return an empty array if begin date is after the last date', async function() {
            const begin = new Date("2019-01-04");
            let items = await instance.getItems("foo", begin, new Date());
            expect(items).toStrictEqual([]);
        });

        it('should return an empty array if end date is before the first date', async function() {
            const end = new Date("2018-01-04");
            let items = await instance.getItems("foo", new Date(0), end);
            expect(items).toStrictEqual([]);
        });

        it('should retrieve all items between two dates', async function() {
            const begin = new Date("2019-01-01");
            const end = new Date("2019-01-03");
            let items = await instance.getItems("foo", begin, end);
            expect(items.length).toStrictEqual(3);
            let values = items.map((x: any) => x.value);
            expect(values[0]).toBe("bar");
            expect(values[1]).toBe("bie");
            expect(values[2]).toBe("ber");
        });

        it('should retrieve all items between one date', async function() {
            const begin = new Date("2019-01-01");
            let items = await instance.getItems("foo", begin, begin);
            expect(items.length).toStrictEqual(1);
            let values = items.map((x: any) => x.value);
            expect(values[0]).toBe("bar");
        });

        it('should retrieve all items between two dates', async function() {
            const begin = new Date("2019-01-01");
            const end = new Date("2019-01-03");
            await instance.setItemByDate("foo", "bob", new Date("2019-01-01"));
            await instance.setItemByDate("foo", "alice", new Date("2019-01-02"));
            await instance.setItemByDate("foo", "tundra", new Date("2019-01-03"));
            await instance.setItemByDate("foo", "montreal", new Date("2019-01-01"));
            let items = await instance.getItems("foo", begin, end);
            expect(items.length).toStrictEqual(7);
            let values = items.map((x: any) => x.value);
            expect(values[0]).toBe("bar");
            expect(values[1]).toBe("bie");
            expect(values[2]).toBe("ber");
            expect(values[3]).toBe("bob");
            expect(values[4]).toBe("alice");
            expect(values[5]).toBe("tundra");
            expect(values[6]).toBe("montreal");
        });
    });

    describe('getLastItems', function() {
        beforeEach(async function() {
            await instance.clear();
            await instance.setItemByDate("foo", "bar", new Date("2019-01-01"));
            await instance.setItemByDate("foo", "bie", new Date("2019-01-02"));
            await instance.setItemByDate("foo", "ber", new Date("2019-01-03"));
        });

        it('should return an empty array if begin date is after the last date', async function() {
            const begin = new Date("2019-01-04");
            const end = new Date(begin.getTime());
            end.setDate(end.getDate()+1);
            let items = await instance.getLatestItems("foo", begin, end);
            expect(items).toStrictEqual([]);
        });

        it('should return an empty array if end date is before the first date', async function() {
            const end = new Date("2018-11-31");
            const begin = new Date(end.getTime());
            begin.setDate(begin.getDate()-1);

            let items = await instance.getLatestItems("foo", begin, end);
            expect(items).toStrictEqual([]);
        });

        it('should retrieve all last items between two dates', async function() {
            const begin = new Date("2019-01-01");
            const end = new Date("2019-01-03");
            let items = await instance.getLatestItems("foo", begin, end);
            expect(items.length).toStrictEqual(3);
            let values = items.map((x: any) => x.value);
            expect(values[0]).toBe("bar");
            expect(values[1]).toBe("bie");
            expect(values[2]).toBe("ber");
        });

        it('should retrieve all last items between two dates, ordered by date and not timestamp', async function() {
            const begin = new Date("2019-01-01");
            const end = new Date("2019-01-03");
            await instance.setItemByDate("foo", "bob", new Date("2019-01-01"));
            await instance.setItemByDate("foo", "alice", new Date("2019-01-02"));
            await instance.setItemByDate("foo", "tundra", new Date("2019-01-03"));
            await instance.setItemByDate("foo", "montreal", new Date("2019-01-01"));
            let items = await instance.getLatestItems("foo", begin, end);
            expect(items.length).toStrictEqual(3);
            let values = items.map((x: any) => x.value);
            expect(values[0]).toBe("montreal");
            expect(values[1]).toBe("alice");
            expect(values[2]).toBe("tundra");
        });

        it('should retrieve all items between one date', async function() {
            const begin = new Date("2019-01-01");
            let items = await instance.getLatestItems("foo", begin, begin);
            expect(items.length).toStrictEqual(1);
            let values = items.map((x: any) => x.value);
            expect(values[0]).toBe("bar");
        });
    });
});
