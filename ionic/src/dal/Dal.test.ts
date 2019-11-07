import { Dal } from './Dal'

describe('Dal', function() {
    it('should show the testing configuration working', async function() {
        const instance = new Dal();
        instance.setItem();
        const actual = await instance.getItem();
        instance.clear();
        expect(actual).toStrictEqual({ 'value': 'Max' });
    });
});
