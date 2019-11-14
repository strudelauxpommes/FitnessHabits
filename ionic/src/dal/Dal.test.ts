import { Dal } from './Dal'

describe('Dal', function() {
    const instance = new Dal();

    afterEach(async function() {
        await instance.clear();
    });

    describe('getItem', function() {
        it('should return undefined value upon an empty item', async function() {
            const actual = await instance.getItem("foo");
            expect(actual).toStrictEqual(undefined);
        });

        it('should add a new key', async function() {
            await instance.setItem("foo", "bar");
            const actuals = await instance.keys();
            expect(actuals.length).toStrictEqual(1);
        });

        it('should add a value under a key', async function() {
            await instance.setItem("foo", "bar");
            const actual = await instance.getItem("foo");
            expect(actual).toStrictEqual("bar");
        });
    });

    describe('getItems', function() {
        beforeEach(async function() {
            await instance.clear();
            await instance.setItem("foo", "bar");
            await instance.setItem("foo", "bie");
            await instance.setItem("foo", "ber");
        });

        it('should return an empty array upon an empty items', async function() {
            const actuals = await instance.getItems("unknown key");
            expect(actuals).toStrictEqual([]);
        });

        // TODO: Date.now is not monotonic, but is good enough for now.
        it('should use monotonic timestamp', async function() {
            const timestamp = Date.now();
            const items = await instance.getItems("foo");
            expect(items.length).toStrictEqual(3);
            const timestamps = items.map((x: any) => x.timestampMs);
            for (let actual of timestamps) {
                expect(actual).toBeGreaterThanOrEqual(timestamp);
            }
        });

        it('should retrieve all values under a key', async function() {
            const timestamp = Date.now();
            const items = await instance.getItems("foo");
            expect(items.length).toStrictEqual(3);
            const values = items.map((x: any) => x.value);
            expect(values[0]).toBe("bar");
            expect(values[1]).toBe("bie");
            expect(values[2]).toBe("ber");
        });
    });
});
