import { Dal } from './Dal'

describe('Dal', function() {
    const instance = new Dal();

    afterEach(async function() {
        await instance.clear();
    });

    it('should return an empty array upon an empty items', async function() {
        const actuals = await instance._getItems("foo");
        expect(actuals).toStrictEqual([]);
    });

    it('should return an udefined upon an empty item', async function() {
        const actual = await instance.getItem("foo");
        expect(actual).toStrictEqual(undefined);
    });

    it('should add a new key', async function() {
        await instance.setItem("foo", "bar");
        const actuals = await instance.keys();
        expect(actuals.length).toStrictEqual(1);
    });

    it('should add a new key and a time stamped value', async function() {
        await instance.setItem("foo", "bar");
        const actual = await instance.getItem("foo");
        expect(actual).toStrictEqual("bar");
    });
});
