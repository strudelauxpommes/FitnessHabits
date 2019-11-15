import { Dal } from './Dal'

describe('Dal', function() {
    const instance = new Dal();

    afterEach(async function() {
        await instance.clear();
    });

    describe('getLastItem', function() {
        it('should return undefined value upon an empty item', async function() {
            const actual = await instance.getLastItem("foo");
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
            const actual = await instance.getLastItem("foo");
            expect(actual).toStrictEqual("bar");
        });

        it('get last item by date', async function() {
            await instance.setItemByDate("foo", "ber", new Date("01/02/2019"));
            await instance.setItemByDate("foo", "bar", new Date("01/01/2019"));
            let actual = await instance.getLastItem("foo");
            expect(actual).toStrictEqual("ber");
            await instance.setItemByDate("foo", "beer", new Date("01/02/2019"));
            actual = await instance.getLastItem("foo");
            expect(actual).toStrictEqual("beer");
        });
    });

    describe('getItems', function() {
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
            const timestamp = Date.now();
            const items = await instance.getAllItems("foo");
            expect(items.length).toStrictEqual(3);
            const timestamps = items.map((x: any) => x.timestampMs);
            for (let actual of timestamps) {
                expect(actual).toBeLessThanOrEqual(timestamp);
            }
        });

        it('should retrieve all values under a key', async function() {
            const timestamp = Date.now();
            const items = await instance.getAllItems("foo");
            expect(items.length).toStrictEqual(3);
            const values = items.map((x: any) => x.value);
            expect(values[0]).toBe("bar");
            expect(values[1]).toBe("bie");
            expect(values[2]).toBe("ber");
        });
    });

    describe('getItem', function() {
        it('should return undefined value upon an empty item', async function() {
            const actual = await instance.getItem("foo", new Date());
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
                const actual = await instance.getItem("foo", new Date());
                expect(actual).toStrictEqual(undefined);
            }
        );

        it('should add a value under a key', async function() {
            await instance.setItemByDate("foo", "bar", new Date("01/01/2019"));
            const actual = await instance.getItem("foo", new Date("01/01/2019"));
            expect(actual).toStrictEqual("bar");
        });

        it('should retrieve values by date', async function() {
            await instance.setItemByDate("foo", "bar", new Date("01/01/2019"));
            await instance.setItemByDate("foo", "ber", new Date("01/02/2019"));
            let actual = await instance.getItem("foo", new Date("01/01/2019"));
            expect(actual).toStrictEqual("bar");
            actual = await instance.getItem("foo", new Date("01/02/2019"));
            expect(actual).toStrictEqual("ber");
            await instance.setItemByDate("foo", "bar", new Date("01/02/2019"));
            actual = await instance.getItem("foo", new Date("01/02/2019"));
            expect(actual).toStrictEqual("bar");
        });

        it('Update value for a given date', async function() {
            await instance.setItemByDate("foo", "beer", new Date("01/02/2019"));
            const actual = await instance.getItem("foo", new Date("01/02/2019"));
            expect(actual).toStrictEqual("beer");
        });

        it('Update value for a given date regardless its time', async function() {
            await instance.setItemByDate("foo", "beer", new Date("11/14/2019, 8:00:00 PM"));
            let actual = await instance.getItem("foo", new Date("11/14/2019"));
            expect(actual).toStrictEqual("beer");
            await instance.setItemByDate("foo", "bar", new Date("11/14/2019, 1:00:00 AM"));
            actual = await instance.getItem("foo", new Date("11/14/2019"));
            expect(actual).toStrictEqual("bar");
        });
    });

    describe('getItemsBetween', function() {
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

        it('should retrieve all values between two dates', async function() {
            const begin = new Date("2019-01-01");
            const middle = new Date("2019-01-02");
            const end = new Date("2019-01-03");
            let items = await instance.getItems("foo", begin, end);
            expect(items.length).toStrictEqual(3);
            let values = items.map((x: any) => x.value);
            expect(values[0]).toBe("bar");
            expect(values[1]).toBe("bie");
            expect(values[2]).toBe("ber");
            items = await instance.getItems("foo", begin, middle);
            expect(items.length).toStrictEqual(2);
            values = items.map((x: any) => x.value);
            expect(values[0]).toBe("bar");
            expect(values[1]).toBe("bie");
            items = await instance.getItems("foo", begin, begin);
            expect(items.length).toStrictEqual(1);
            values = items.map((x: any) => x.value);
            expect(values[0]).toBe("bar");
        });
    });
});
