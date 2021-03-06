import { DalImpl } from './DalImpl'
import { DalDumper } from './DalDumper'

describe('DalDumper', function() {

    describe('should dump object', function() {
        it('should dump an empty object', async function() {
            const instance = new DalDumper();
            const actual = await instance.dump(null);
            expect(actual).toStrictEqual({});
        });

        it('should dump an empty object when no dal specified', async function() {
            const instance = new DalDumper();
            const actual = await instance.dump();
            expect(actual).toStrictEqual({});
        });

        it('should dump a non-empty object', async function() {
            const dal = new DalImpl();
            await dal.setValue("foo", "bar");
            const instance = new DalDumper();
            const dump = await instance.dump(dal);
            const actual = JSON.stringify(dump)
            expect(actual).toContain("foo");
            expect(actual).toContain("bar");
        });
    });
});
