import {Foo} from './Dal'

describe('Dal', function() {
    it('should show the testing configuration working', function() {
        const instance = new Foo();
        const actual = instance.bar();
        expect(actual).toBe(42);
    });
});
