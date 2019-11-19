import { DateWrapperImpl } from './dateWrapperImpl';
import DateWrapper from './dateWrapper';

describe('DateWrapper', function() {
    let dateWrapper: DateWrapper ;

    describe('constructor', function() {
        it('should have a timestamp lesser or equal to Date.now()', function() {
            dateWrapper = new DateWrapperImpl(new Date());
            const actual = dateWrapper.getTimestampMs();
            expect(actual).toBeLessThanOrEqual(Date.now());
        });

        it('should have the same date (year, month and day)', function() {
            const actual = new DateWrapperImpl(new Date("11/2/2019, 3:33:50 PM"));
            expect(actual.isSameDate(new Date("11/2/2019, 5:33:50 AM"))).toBe(true);
        });

        it('should return if it is at the begin of the dates range', function() {
            const begin = new Date("2019-01-01");
            const end = new Date("2019-01-03");
            const actual = new DateWrapperImpl(begin);
            expect(actual.isBetweenDates(begin, end)).toBe(true);
        });

        it('should return if it is between two date', function() {
            const begin = new Date("2019-01-01");
            const middle = new Date("2019-01-02");
            const end = new Date("2019-01-03");
            const actual = new DateWrapperImpl(middle);
            expect(actual.isBetweenDates(begin, end)).toBe(true);
        });

        it('should return if it is at the end of the dates range', function() {
            const begin = new Date("2019-01-01");
            const end = new Date("2019-01-03");
            const actual = new DateWrapperImpl(end);
            expect(actual.isBetweenDates(begin, end)).toBe(true);
        });

        it('should return false if it is out ouf range', function() {
            const begin = new Date("2019-01-01");
            const end = new Date("2019-01-03");
            const afterEnd = new Date("2019-01-04");
            const beforeBegin = new Date("2018-12-31");
            let actual = new DateWrapperImpl(afterEnd);
            expect(actual.isBetweenDates(begin, end)).toBe(false);
            actual = new DateWrapperImpl(beforeBegin);
            expect(actual.isBetweenDates(begin, end)).toBe(false);
        });
    });

});